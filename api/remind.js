// api/remind.js — Vercel Serverless Function
// Gửi email nhắc phòng ban chưa nộp báo cáo tuần
// Dùng Resend (resend.com) — miễn phí 3000 email/tháng

const SUPABASE_URL = "https://kyzrihqsqsxaquiorkiv.supabase.co";
const SUPABASE_KEY = "sb_publishable_42OnFxtRkInVJ6JJGBbUCA_cEX4uWi1"; // anon public key
const RESEND_KEY   = process.env.RESEND_API_KEY;
const FROM_EMAIL   = "CIS NSCA <remind@nsca.vn>"; // đổi domain sau khi verify
const FROM_FALLBACK= "CIS NSCA <onboarding@resend.dev>"; // dùng khi chưa verify domain

const DEPT_CONTACTS = {
  "HCNS":       { name:"Đặng Thanh Sơn",    email:"sondt@nsca.vn" },
  "TCKT":       { name:"Nguyễn Tiến Duẩn",  email:"duannt@nsca.vn" },
  "PKD":        { name:"Đào Nguyên Ngọc",   email:"ndao@nsca.vn" },
  "KHO":        { name:"Nguyễn Thị Hà",     email:"hant@nsca.vn" },
  "CƠ ĐIỆN":   { name:"Đinh Văn Phong",     email:"phongdv@nsca.vn" },
  "R&D":        { name:"Phạm Hoài Nam",      email:"namph@nsca.vn" },
  "QLCL":       { name:"Nguyễn Lương Tuấn", email:"tuannl@nsca.vn" },
  "SX NHÔM":   { name:"Nguyễn Văn Ngọc",   email:"ngocnv@nsca.vn" },
  "SX THÉP":   { name:"Hoàng Mạnh Tùng",   email:"tunghm@nsca.vn" },
  "CUNG ỨNG":  { name:"Đặng Thị Kim Anh",  email:"anhdtk@nsca.vn" },
  "GIAO HÀNG": { name:"Việt Đức",           email:"ducvt@nsca.vn" },
};

const ALL_DEPTS = Object.keys(DEPT_CONTACTS);

// Lấy danh sách dept đã nộp BC tuần này từ Supabase
async function getSubmittedDepts(week) {
  const url = `${SUPABASE_URL}/rest/v1/weekly_reports?week_num=eq.${week}&year=eq.2026&select=dept,status`;
  const res = await fetch(url, {
    headers: {
      "apikey": SUPABASE_KEY,
      "Authorization": `Bearer ${SUPABASE_KEY}`,
    }
  });
  if (!res.ok) throw new Error("Supabase error: " + await res.text());
  const rows = await res.json();
  return rows.map(r => r.dept);
}

// Gửi 1 email qua Resend
async function sendEmail(to, name, dept, week, attemptNum) {
  const fromAddr = RESEND_KEY ? FROM_FALLBACK : null;
  const deadlineMsg = attemptNum >= 3
    ? "⚠️ ĐÃ QUÁ HẠN — vui lòng nộp ngay trong hôm nay!"
    : `Hạn chót: <strong>Thứ 2, 08:00 sáng</strong>`;

  const html = `
<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#0f172a;color:#e2e8f0;border-radius:12px;overflow:hidden">
  <div style="background:linear-gradient(135deg,#1e3a5f,#1e40af);padding:28px 32px">
    <div style="font-size:22px;font-weight:800;color:white">🏭 NSCA · CIS</div>
    <div style="font-size:13px;color:#93c5fd;margin-top:4px">Company Intelligence System</div>
  </div>
  <div style="padding:28px 32px">
    <p style="font-size:16px;margin:0 0 16px">Kính gửi <strong>${name}</strong>,</p>
    <p style="font-size:15px;color:#94a3b8;margin:0 0 20px">
      Phòng <strong style="color:#60a5fa">${dept}</strong> chưa nộp Báo cáo tuần <strong style="color:#f59e0b">T${week}/2026</strong>.
    </p>
    <div style="background:#1e293b;border-left:4px solid #f59e0b;border-radius:8px;padding:16px 20px;margin-bottom:24px">
      <div style="font-size:13px;color:#94a3b8">⏰ ${deadlineMsg}</div>
    </div>
    <a href="https://dhk1805-creator.github.io/nsca-cis/" 
       style="display:inline-block;background:linear-gradient(135deg,#2563eb,#1d4ed8);color:white;padding:12px 28px;border-radius:8px;text-decoration:none;font-weight:700;font-size:15px">
      📝 Nộp báo cáo ngay →
    </a>
    <p style="font-size:12px;color:#475569;margin-top:28px">
      Đây là email tự động từ hệ thống CIS · Lần nhắc ${attemptNum}/4<br>
      Liên hệ: <a href="mailto:dhk@nsca.vn" style="color:#60a5fa">dhk@nsca.vn</a>
    </p>
  </div>
</div>`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${RESEND_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromAddr,
      to: [to],
      subject: `[CIS] Nhắc nộp BC Tuần ${week} · ${dept} (lần ${attemptNum})`,
      html,
    }),
  });
  const data = await res.json();
  return { ok: res.ok, status: res.status, data };
}

export default async function handler(req, res) {
  // CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") return res.status(200).end();

  const week = parseInt(req.query?.week || req.body?.week || 10);

  // GET — chỉ kiểm tra trạng thái
  if (req.method === "GET") {
    try {
      const submitted = await getSubmittedDepts(week);
      const missing = ALL_DEPTS.filter(d => !submitted.includes(d));
      return res.status(200).json({
        week,
        total: ALL_DEPTS.length,
        submitted: submitted.length,
        submittedDepts: submitted,
        missingDepts: missing,
        checkedAt: new Date().toISOString(),
      });
    } catch(e) {
      return res.status(500).json({ error: e.message });
    }
  }

  // POST — gửi email
  if (req.method === "POST") {
    // Nếu chưa có RESEND_KEY → dry run
    if (!RESEND_KEY) {
      return res.status(200).json({
        dryRun: true,
        message: "Chưa có RESEND_API_KEY — set trong Vercel env vars",
        week,
      });
    }

    try {
      const submitted = await getSubmittedDepts(week);
      const missing = ALL_DEPTS.filter(d => !submitted.includes(d));
      const attemptNum = req.body?.attemptNum || 1;

      const results = [];
      for (const dept of missing) {
        const contact = DEPT_CONTACTS[dept];
        if (!contact) continue;
        const r = await sendEmail(contact.email, contact.name, dept, week, attemptNum);
        results.push({ dept, email: contact.email, ...r });
      }

      return res.status(200).json({
        success: true,
        week,
        totalMissing: missing.length,
        missingDepts: missing,
        results,
        sentAt: new Date().toISOString(),
      });
    } catch(e) {
      return res.status(500).json({ error: e.message });
    }
  }

  return res.status(405).json({ error: "Method not allowed" });
}
