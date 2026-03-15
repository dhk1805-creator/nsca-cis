// ============================================================
// NSCA CIS — Vercel Serverless API: /api/extract
// Nhận file content từ Apps Script → Claude AI trích xuất → Supabase
//
// Deploy: đặt file này tại /api/extract.js trong project Vercel
// Env vars cần thiết:
//   ANTHROPIC_API_KEY  — API key Claude
//   SUPABASE_URL       — https://kyzrihqsqsxaquiorkiv.supabase.co
//   SUPABASE_KEY       — service_role key (KHÔNG phải anon key)
//   EXTRACT_API_KEY    — key xác thực từ Apps Script (mặc định: nsca-extract-2026)
// ============================================================

const SUPABASE_URL = process.env.SUPABASE_URL || "https://kyzrihqsqsxaquiorkiv.supabase.co";
const SUPABASE_KEY = process.env.SUPABASE_KEY;
const ANTHROPIC_KEY = process.env.ANTHROPIC_API_KEY;
const EXTRACT_KEY = process.env.EXTRACT_API_KEY || "nsca-extract-2026";

// ── SUPABASE HELPER ──────────────────────────────────────
async function sbRequest(method, table, params, body) {
  const url = `${SUPABASE_URL}/rest/v1/${table}${params ? "?" + params : ""}`;
  const headers = {
    "Content-Type": "application/json",
    "apikey": SUPABASE_KEY,
    "Authorization": `Bearer ${SUPABASE_KEY}`,
    "Prefer": method === "POST" ? "return=representation,resolution=merge-duplicates" : "return=representation",
  };
  const opts = { method, headers };
  if (body) opts.body = JSON.stringify(body);
  const res = await fetch(url, opts);
  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Supabase ${method} ${table}: ${res.status} — ${errText.slice(0, 200)}`);
  }
  return res.json();
}

const sbUpsert = (table, data, onConflict) =>
  sbRequest("POST", table, onConflict ? `on_conflict=${onConflict}` : "", data);

const sbInsert = (table, data) =>
  sbRequest("POST", table, "", data);

// ── CLAUDE AI EXTRACT ────────────────────────────────────
async function callClaude(fileContent, fileType, fileName) {
  // System prompt tùy theo loại file
  const systemPrompts = {
    Plan: `Bạn là AI trích xuất dữ liệu kế hoạch kinh doanh NSCA.
Từ nội dung file, trích xuất:
1. KPI targets theo phòng ban và tháng (dept, kpi_code, kpi_name, target, unit, month)
2. Kế hoạch doanh thu theo tháng (month, dt_kh)
3. Mục tiêu chiến lược quan trọng

Trả lời JSON duy nhất, KHÔNG markdown:
{
  "kpi_targets": [{"dept":"PKD","kpi_code":"PKD-01","kpi_name":"Doanh thu","target":10,"unit":"tỷ VND","month":1}],
  "monthly_plans": [{"month":1,"dt_kh":11.54,"note":""}],
  "strategic_goals": ["Mục tiêu 1","Mục tiêu 2"]
}`,

    Report: `Bạn là AI trích xuất báo cáo tuần/tháng NSCA.
Từ nội dung file, trích xuất:
1. Số liệu thực tế theo phòng ban (dept, metrics object)
2. Issues/vấn đề phát sinh (title, description, dept, priority, type)
3. Quyết định CEO (title, decision, context, category)
4. Action items (title, owner, deadline, source)

Xác định tuần (week_num) từ tên file hoặc nội dung.

Trả lời JSON duy nhất, KHÔNG markdown:
{
  "week_num": 9,
  "dept_data": {"PKD":{"dt":5.2,"dtThep":3.1},"TCKT":{"pt":45,"qh":12}},
  "issues": [{"title":"","description":"","dept":"","priority":"medium","type":"process"}],
  "decisions": [{"title":"","decision":"","context":"","category":"Quyết định"}],
  "action_items": [{"title":"","owner":"","deadline":"2026-03-21","source":"BC Tuần 9"}]
}`,

    KPI: `Bạn là AI trích xuất dữ liệu KPI thực tế NSCA.
Từ nội dung file (thường là Excel/Sheet), trích xuất:
1. Kết quả KPI theo phòng ban, mã KPI, tháng
2. actual (giá trị thực), target (kế hoạch), score (điểm)

Xác định tuần/tháng từ tên file hoặc nội dung.

Trả lời JSON duy nhất, KHÔNG markdown:
{
  "week_num": 9,
  "month": 3,
  "kpi_data": [
    {"dept":"SX NHÔM","kpi_code":"SX-A-01","kpi_name":"Doanh thu nhôm","actual":4.5,"target":5.0,"score":90,"unit":"tỷ VND"}
  ]
}`,

    Meeting: `Bạn là AI trích xuất biên bản họp giao ban NSCA.
Từ nội dung file, trích xuất:
1. Tóm tắt nội dung cuộc họp
2. Quyết định CEO
3. Action items / việc được giao (title, owner, deadline)
4. Issues phát sinh (title, desc, dept, priority)
5. Người tham dự

Xác định tuần từ tên file hoặc nội dung.

Trả lời JSON duy nhất, KHÔNG markdown:
{
  "week_num": 9,
  "title": "Giao ban T9/2026",
  "summary": "Tóm tắt ngắn...",
  "decisions": "Các quyết định CEO...",
  "attendees": ["Anh Khánh","Chị Hồng"],
  "action_items": [{"title":"","owner":"","deadline":"2026-03-21"}],
  "issues": [{"title":"","description":"","dept":"","priority":"medium","type":"process"}]
}`,
  };

  const system = systemPrompts[fileType] || systemPrompts.Report;

  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": ANTHROPIC_KEY,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: "claude-sonnet-4-5-20250514",
      max_tokens: 4000,
      system,
      messages: [{
        role: "user",
        content: `File: ${fileName}\n\nNội dung:\n${fileContent}`,
      }],
    }),
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Claude API ${res.status}: ${errText.slice(0, 200)}`);
  }

  const data = await res.json();
  const text = data.content?.[0]?.text || "";

  // Parse JSON từ response (loại bỏ markdown fences nếu có)
  const clean = text.replace(/```json\s*/g, "").replace(/```\s*/g, "").trim();
  try {
    return JSON.parse(clean);
  } catch (e) {
    throw new Error("Claude trả về không phải JSON: " + clean.slice(0, 200));
  }
}

// ── WRITE TO SUPABASE — ĐÚNG COLUMN NAMES ────────────────
// ⚠ Column names phải khớp với Dashboard.jsx load functions

async function saveReportData(extracted, fileName) {
  const results = [];
  const wk = extracted.week_num || 0;

  // 1. weekly_data — dept metrics
  if (extracted.dept_data && Object.keys(extracted.dept_data).length > 0) {
    const deptMap = {
      "PKD": "pkd", "TCKT": "tckt", "HCNS": "hcns",
      "SX NHÔM": "nhom", "SX THÉP": "thep", "QLCL": "qlcl",
      "CƠ ĐIỆN": "cd", "GIAO HÀNG": "gh", "KHO": "kho",
      "CUNG ỨNG": "cu", "R&D": "rd",
    };
    const payload = { week_number: wk, year: 2026, has_data: true };
    for (const [dept, data] of Object.entries(extracted.dept_data)) {
      const col = deptMap[dept];
      if (col) payload[col] = data;
    }
    await sbUpsert("weekly_data", payload, "week_number,year");
    results.push("weekly_data T" + wk);
  }

  // 2. issues — Supabase columns: week_num, year, dept, title, description, type, priority, status, created_by_name
  if (extracted.issues?.length > 0) {
    for (const iss of extracted.issues) {
      await sbInsert("issues", {
        week_num: wk, year: 2026,
        dept: iss.dept || "",
        title: iss.title,
        description: iss.description || "",
        type: iss.type || "process",
        priority: iss.priority || "medium",
        status: "open",
        created_by_name: "AI Extract",
      });
    }
    results.push(extracted.issues.length + " issues");
  }

  // 3. ceo_decisions — ⚠ PHẢI DÙNG: decision_date, category, decision (KHÔNG phải date, type, dec)
  if (extracted.decisions?.length > 0) {
    for (const dec of extracted.decisions) {
      await sbInsert("ceo_decisions", {
        week_num: wk, year: 2026,
        title: dec.title,
        decision: dec.decision || dec.dec || "",         // ← Cột đúng: "decision"
        context: dec.context || "",
        category: dec.category || dec.type || "Quyết định",  // ← Cột đúng: "category"
        decision_date: new Date().toISOString(),         // ← Cột đúng: "decision_date"
        status: "active",
        created_by: "AI Extract",
        created_at: new Date().toISOString(),
      });
    }
    results.push(extracted.decisions.length + " quyết định");
  }

  // 4. action_items — Supabase columns: year, week_num, title, owner, deadline, source, status, progress, id_code
  if (extracted.action_items?.length > 0) {
    for (const ac of extracted.action_items) {
      const idCode = "AI-T" + wk + "-" + Date.now().toString(36).slice(-4);
      await sbUpsert("action_items", {
        year: 2026, week_num: wk,
        title: ac.title,
        owner: ac.owner || "",
        deadline: ac.deadline || null,
        source: ac.source || ("AI Extract " + fileName),
        status: "open",
        progress: 0,
        id_code: idCode,
      }, "id_code");
    }
    results.push(extracted.action_items.length + " actions");
  }

  return results;
}

async function saveKPIData(extracted, fileName) {
  const results = [];
  const wk = extracted.week_num || 0;

  // kpi_data — Supabase columns: week_num, year, dept, kpi_code, kpi_name, target, actual, score, unit, status, submitted_by_name
  if (extracted.kpi_data?.length > 0) {
    for (const k of extracted.kpi_data) {
      await sbUpsert("kpi_data", {
        week_num: wk, year: 2026,
        dept: k.dept,
        kpi_code: k.kpi_code,
        kpi_name: k.kpi_name || k.label || "",
        target: k.target || 0,
        actual: k.actual || 0,
        score: k.score || 0,
        unit: k.unit || "",
        status: "submitted",
        submitted_by_name: "AI Extract",
        note: "Từ file: " + fileName,
      }, "week_num,year,dept,kpi_code");
    }
    results.push(extracted.kpi_data.length + " KPI rows");
  }

  return results;
}

async function savePlanData(extracted, fileName) {
  const results = [];

  // 1. KPI targets → custom_dept_kpi
  if (extracted.kpi_targets?.length > 0) {
    for (const k of extracted.kpi_targets) {
      // Tạo kh_monthly array 12 tháng từ target
      const kh = Array(12).fill(0);
      if (k.month >= 1 && k.month <= 12) kh[k.month - 1] = k.target || 0;

      await sbUpsert("custom_dept_kpi", {
        dept: k.dept,
        kpi_code: k.kpi_code,
        label: k.kpi_name || k.label || "",
        unit: k.unit || "%",
        dir: "H",
        weight: 10,
        kh_monthly: kh,  // ← Supabase jsonb, Dashboard normalizes on load
        owner: k.dept,
        color: "#6366f1",
        year: 2026,
        is_active: true,
        note: "Từ file: " + fileName,
      }, "dept,kpi_code,year");
    }
    results.push(extracted.kpi_targets.length + " KPI targets");
  }

  // 2. Monthly plans → monthly_data
  if (extracted.monthly_plans?.length > 0) {
    for (const m of extracted.monthly_plans) {
      await sbUpsert("monthly_data", {
        month_number: m.month,
        year: 2026,
        label: "Tháng " + m.month + "/2026",
        dt_kh: m.dt_kh || 0,
        note: m.note || "Từ file: " + fileName,
      }, "month_number,year");
    }
    results.push(extracted.monthly_plans.length + " monthly plans");
  }

  return results;
}

async function saveMeetingData(extracted, fileName) {
  const results = [];
  const wk = extracted.week_num || 0;

  // 1. meeting_minutes — Supabase columns: week_number, year, title, content, decisions, attendees, created_by
  if (extracted.title || extracted.summary) {
    await sbUpsert("meeting_minutes", {
      week_number: wk, year: 2026,
      title: extracted.title || ("Biên bản họp T" + wk),
      content: extracted.summary || "",
      decisions: extracted.decisions || "",
      attendees: extracted.attendees || [],
      created_by: "AI Extract",
    }, "week_number,year");
    results.push("meeting_minutes T" + wk);
  }

  // 2. Action items (same as Report)
  if (extracted.action_items?.length > 0) {
    for (const ac of extracted.action_items) {
      const idCode = "MEET-T" + wk + "-" + Date.now().toString(36).slice(-4);
      await sbUpsert("action_items", {
        year: 2026, week_num: wk,
        title: ac.title,
        owner: ac.owner || "",
        deadline: ac.deadline || null,
        source: "Bien ban T" + wk,
        status: "open",
        progress: 0,
        id_code: idCode,
      }, "id_code");
    }
    results.push(extracted.action_items.length + " actions");
  }

  // 3. Issues (same as Report)
  if (extracted.issues?.length > 0) {
    for (const iss of extracted.issues) {
      await sbInsert("issues", {
        week_num: wk, year: 2026,
        dept: iss.dept || "",
        title: "[Họp T" + wk + "] " + iss.title,
        description: iss.description || "",
        type: iss.type || "process",
        priority: iss.priority || "medium",
        status: "open",
        created_by_name: "AI Extract",
      });
    }
    results.push(extracted.issues.length + " issues");
  }

  return results;
}

// ── LOG TO EXTRACT_LOG TABLE ─────────────────────────────
async function logExtract(fileName, fileType, status, results, errors) {
  try {
    await sbInsert("extract_log", {
      file_name: fileName,        // ← Dashboard đọc: log.file_name
      file_type: fileType,
      status: status,             // ← Dashboard đọc: log.status ("success" | "error")
      results: results.join(", "),  // ← Dashboard đọc: log.results
      errors: errors || null,     // ← Dashboard đọc: log.errors
      extracted_at: new Date().toISOString(),  // ← Dashboard đọc: log.extracted_at
    });
  } catch (e) {
    console.error("Failed to log extract:", e.message);
  }
}

// ── MAIN HANDLER ─────────────────────────────────────────
export default async function handler(req, res) {
  // CORS
  if (req.method === "OPTIONS") {
    return res.status(200).json({});
  }

  // Auth check
  const apiKey = req.headers["x-api-key"];
  if (apiKey !== EXTRACT_KEY) {
    return res.status(401).json({ error: "Invalid API key" });
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { fileName, fileContent, fileType } = req.body || {};

  if (!fileName || !fileContent || !fileType) {
    return res.status(400).json({ error: "Missing fileName, fileContent, or fileType" });
  }

  // Validate fileType
  const validTypes = ["Plan", "Report", "KPI", "Meeting"];
  if (!validTypes.includes(fileType)) {
    return res.status(400).json({ error: "Invalid fileType. Must be: " + validTypes.join(", ") });
  }

  console.log(`[Extract] Processing [${fileType}]: ${fileName} (${fileContent.length} chars)`);

  try {
    // Step 1: Claude AI extract
    const extracted = await callClaude(fileContent, fileType, fileName);
    console.log("[Extract] Claude extracted:", JSON.stringify(extracted).slice(0, 500));

    // Step 2: Save to Supabase based on file type
    let results = [];

    switch (fileType) {
      case "Plan":
        results = await savePlanData(extracted, fileName);
        break;
      case "Report":
        results = await saveReportData(extracted, fileName);
        break;
      case "KPI":
        results = await saveKPIData(extracted, fileName);
        break;
      case "Meeting":
        results = await saveMeetingData(extracted, fileName);
        break;
    }

    // Step 3: Log to extract_log
    await logExtract(fileName, fileType, "success", results, null);

    console.log("[Extract] Done:", results);
    return res.status(200).json({ success: true, results });

  } catch (e) {
    console.error("[Extract] Error:", e.message);
    await logExtract(fileName, fileType, "error", [], e.message);
    return res.status(500).json({ success: false, error: e.message });
  }
}
