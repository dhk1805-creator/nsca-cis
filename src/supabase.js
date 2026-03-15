// ═══════════════════════════════════════════════════════════
// NSCA CIS v6.0 — Supabase Client
// Project: https://kyzrihqsqsxaquiorkiv.supabase.co
// ═══════════════════════════════════════════════════════════

export const SUPABASE_URL = "https://kyzrihqsqsxaquiorkiv.supabase.co";
export const SUPABASE_KEY = "sb_publishable_42OnFxtRkInVJ6JJGBbUCA_cEX4uWi1";

// ── Error logging ──────────────────────────────────────────
export const SB_LOG = [];
export const sbLog = (type, table, err) => {
  const entry = `[${new Date().toLocaleTimeString("vi-VN")}] ${type} ${table}: ${err}`;
  SB_LOG.unshift(entry);
  if (SB_LOG.length > 20) SB_LOG.pop();
  console.error(entry);
  window.dispatchEvent(new CustomEvent("sb-error", { detail: entry }));
};

// ── Supabase REST client ───────────────────────────────────
export const sb = {
  headers: {
    "Content-Type": "application/json",
    "apikey": SUPABASE_KEY,
    "Authorization": `Bearer ${SUPABASE_KEY}`
  },

  async get(table, params = "") {
    try {
      const r = await fetch(`${SUPABASE_URL}/rest/v1/${table}?${params}`, { headers: sb.headers });
      if (!r.ok) { const e = await r.text(); sbLog("GET❌", table, e); return null; }
      return await r.json();
    } catch(e) { sbLog("GET❌", table, e.message); return null; }
  },

  async insert(table, data) {
    try {
      const r = await fetch(`${SUPABASE_URL}/rest/v1/${table}`, {
        method: "POST",
        headers: { ...sb.headers, "Prefer": "return=representation" },
        body: JSON.stringify(data)
      });
      if (!r.ok) { const e = await r.text(); sbLog("INSERT❌", table, e); return null; }
      return await r.json();
    } catch(e) { sbLog("INSERT❌", table, e.message); return null; }
  },

  async upsert(table, data, onConflict) {
    try {
      const url = `${SUPABASE_URL}/rest/v1/${table}${onConflict ? "?on_conflict=" + onConflict : ""}`;
      const r = await fetch(url, {
        method: "POST",
        headers: { ...sb.headers, "Prefer": "return=representation,resolution=merge-duplicates" },
        body: JSON.stringify(data)
      });
      if (!r.ok) { const e = await r.text(); sbLog("UPSERT❌", table, e); return null; }
      return await r.json();
    } catch(e) { sbLog("UPSERT❌", table, e.message); return null; }
  },

  async update(table, data, filter) {
    try {
      const r = await fetch(`${SUPABASE_URL}/rest/v1/${table}?${filter}`, {
        method: "PATCH",
        headers: { ...sb.headers, "Prefer": "return=representation" },
        body: JSON.stringify(data)
      });
      if (!r.ok) { const e = await r.text(); sbLog("UPDATE❌", table, e); return null; }
      return await r.json();
    } catch(e) { sbLog("UPDATE❌", table, e.message); return null; }
  },

  async testConnection() {
    const r = await sb.get("users", "limit=1");
    return r !== null;
  }
};

// ── Auto Setup: tạo bảng + seed users ─────────────────────
export const setupDatabase = async () => {
  const results = [];

  // 1. Test weekly_reports schema
  try {
    const testRow = {
      week_num: 0, year: 9999, dept: "__setup_test__",
      submitted_by: null, submitted_by_name: "SETUP",
      reviewed_by_name: null, ceo_comment: null,
      reviewed_at: null, submitted_at: new Date().toISOString(),
      status: "test", content: {}
    };
    await sb.upsert("weekly_reports", testRow, "week_num,year,dept");
    await fetch(`${SUPABASE_URL}/rest/v1/weekly_reports?year=eq.9999`, {
      method: "DELETE", headers: sb.headers
    });
    results.push("✅ weekly_reports: OK");
  } catch(e) { results.push("⚠️ weekly_reports: " + e.message); }

  // 2. Seed users
  const usersToSeed = [
    {full_name:"Đào Huy Khánh",        username:"dhk",      password_hash:"ceo123",   role:"ceo",      dept:"BAN LÃNH ĐẠO", is_active:true},
    {full_name:"Nguyễn Thị Thùy Mai",  username:"mai",      password_hash:"admin123", role:"admin",    dept:"BAN LÃNH ĐẠO", is_active:true},
    {full_name:"Nguyễn Thị Thùy Hồng", username:"hong",     password_hash:"gd123",    role:"director", dept:"BAN LÃNH ĐẠO", is_active:true},
    {full_name:"Đặng Thanh Sơn",       username:"son",      password_hash:"hcns123",  role:"manager",  dept:"HCNS",         is_active:true},
    {full_name:"Nguyễn Tiến Duẩn",     username:"duan",     password_hash:"tckt123",  role:"manager",  dept:"TCKT",         is_active:true},
    {full_name:"Đào Nguyên Ngọc",      username:"ngoc_pkd", password_hash:"pkd123",   role:"manager",  dept:"PKD",          is_active:true},
    {full_name:"Nguyễn Thị Hà",        username:"ha",       password_hash:"kho123",   role:"manager",  dept:"KHO",          is_active:true},
    {full_name:"Đinh Văn Phong",        username:"phong",    password_hash:"cd123",    role:"manager",  dept:"CƠ ĐIỆN",      is_active:true},
    {full_name:"Phạm Hoài Nam",         username:"nam",      password_hash:"rd123",    role:"manager",  dept:"R&D",          is_active:true},
    {full_name:"Nguyễn Lương Tuấn",    username:"tuan",     password_hash:"qlcl123",  role:"manager",  dept:"QLCL",         is_active:true},
    {full_name:"Nguyễn Văn Ngọc",      username:"ngoc_sx",  password_hash:"nhom123",  role:"manager",  dept:"SX NHÔM",      is_active:true},
    {full_name:"Hoàng Mạnh Tùng",      username:"tung",     password_hash:"thep123",  role:"manager",  dept:"SX THÉP",      is_active:true},
    {full_name:"Đặng Thị Kim Anh",     username:"anh",      password_hash:"cu123",    role:"manager",  dept:"CUNG ỨNG",     is_active:true},
    {full_name:"Việt Đức",              username:"duc",      password_hash:"gh123",    role:"manager",  dept:"GIAO HÀNG",    is_active:true},
    {full_name:"Nguyễn Thị Xuân",      username:"xuan",     password_hash:"xuan123",  role:"staff",    dept:"SX NHÔM",      is_active:true},
  ];
  let seeded = 0, failed = 0;
  for (const u of usersToSeed) {
    const existing = await sb.get("users", `username=eq.${u.username}`);
    if (existing && existing.length > 0) {
      const upd = await sb.update("users", {password_hash: u.password_hash, is_active: true}, `username=eq.${u.username}`);
      if (upd !== null) seeded++; else failed++;
    } else {
      const ins = await sb.insert("users", u);
      if (ins) seeded++; else failed++;
    }
  }
  results.push(`✅ Users: ${seeded} thành công, ${failed} thất bại`);

  // 3. Test meeting_minutes
  try {
    await sb.upsert("meeting_minutes", {
      week_number: 0, year: 9999, title: "__setup__", created_by: "SETUP"
    }, "week_number,year");
    await fetch(`${SUPABASE_URL}/rest/v1/meeting_minutes?year=eq.9999`, {
      method: "DELETE", headers: sb.headers
    });
    results.push("✅ meeting_minutes: OK");
  } catch(e) { results.push("⚠️ meeting_minutes: Cần tạo bảng qua SQL Editor"); }

  return results;
};
