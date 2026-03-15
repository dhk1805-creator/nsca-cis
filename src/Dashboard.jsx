// ═══════════════════════════════════════════════════════════
// NSCA CIS v6.3 — Supabase Backend Integration
const APP_VERSION = "6.3.2";
const LENA_FACE = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgNDAwIj48Y2lyY2xlIGN4PSIyMDAiIGN5PSIyMDAiIHI9IjIwMCIgZmlsbD0iI2Y5NzMxNiIvPjxjaXJjbGUgY3g9IjIwMCIgY3k9IjIwMCIgcj0iMTcwIiBmaWxsPSIjMWUzYTVmIi8+PHBhdGggZD0iTTEyMCA0MDAgTDEyMCAzMTAgUTIwMCAzNDAgMjgwIDMxMCBMMjgwIDQwMCBaIiBmaWxsPSIjMjU2M2ViIi8+PHBhdGggZD0iTTE2MCAzMDggTDIwMCAzMzUgTDI0MCAzMDgiIGZpbGw9IiMxZDRlZDgiLz48cmVjdCB4PSIxNzgiIHk9IjI3MiIgd2lkdGg9IjQ0IiBoZWlnaHQ9IjQ2IiByeD0iOCIgZmlsbD0iI2Y1YzVhMyIvPjxlbGxpcHNlIGN4PSIyMDAiIGN5PSIxODUiIHJ4PSI5NSIgcnk9IjEwNSIgZmlsbD0iIzFhMWEyZSIvPjxlbGxpcHNlIGN4PSIyMDAiIGN5PSIyMDUiIHJ4PSI4MCIgcnk9Ijg1IiBmaWxsPSIjZjVjNWEzIi8+PGVsbGlwc2UgY3g9IjIwMCIgY3k9IjEyOCIgcng9Ijg4IiByeT0iNTUiIGZpbGw9IiMxYTFhMmUiLz48cGF0aCBkPSJNMTE4IDE3MCBRMTMwIDEzMCAxNjggMTQ1IFEyMDAgMTM4IDIzMiAxNDUgUTI3MCAxMzAgMjgyIDE3MCIgZmlsbD0iIzFhMWEyZSIvPjxlbGxpcHNlIGN4PSIxMjAiIGN5PSIxOTUiIHJ4PSIyOCIgcnk9IjYwIiBmaWxsPSIjMWExYTJlIi8+PGVsbGlwc2UgY3g9IjI4MCIgY3k9IjE5NSIgcng9IjI4IiByeT0iNjAiIGZpbGw9IiMxYTFhMmUiLz48ZWxsaXBzZSBjeD0iMTcyIiBjeT0iMjAwIiByeD0iMjQiIHJ5PSIyNiIgZmlsbD0id2hpdGUiLz48ZWxsaXBzZSBjeD0iMjI4IiBjeT0iMjAwIiByeD0iMjQiIHJ5PSIyNiIgZmlsbD0id2hpdGUiLz48Y2lyY2xlIGN4PSIxNzIiIGN5PSIyMDIiIHI9IjE3IiBmaWxsPSIjMjU2M2ViIi8+PGNpcmNsZSBjeD0iMjI4IiBjeT0iMjAyIiByPSIxNyIgZmlsbD0iIzI1NjNlYiIvPjxjaXJjbGUgY3g9IjE3MiIgY3k9IjIwMiIgcj0iMTAiIGZpbGw9IiMwZjE3MmEiLz48Y2lyY2xlIGN4PSIyMjgiIGN5PSIyMDIiIHI9IjEwIiBmaWxsPSIjMGYxNzJhIi8+PGNpcmNsZSBjeD0iMTc4IiBjeT0iMTk2IiByPSI1IiBmaWxsPSJ3aGl0ZSIvPjxjaXJjbGUgY3g9IjIzNCIgY3k9IjE5NiIgcj0iNSIgZmlsbD0id2hpdGUiLz48ZWxsaXBzZSBjeD0iMTQ4IiBjeT0iMjIyIiByeD0iMTYiIHJ5PSIxMCIgZmlsbD0iI2Q0ODc3YSIgb3BhY2l0eT0iMC41Ii8+PGVsbGlwc2UgY3g9IjI1MiIgY3k9IjIyMiIgcng9IjE2IiByeT0iMTAiIGZpbGw9IiNkNDg3N2EiIG9wYWNpdHk9IjAuNSIvPjxwYXRoIGQ9Ik0xNzQgMjM2IFEyMDAgMjU0IDIyNiAyMzYiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2MwNzA2MCIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwYXRoIGQ9Ik0xMTIgMTg1IFExMTggMTA4IDIwMCAxMDIgUTI4MiAxMDggMjg4IDE4NSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMjU2M2ViIiBzdHJva2Utd2lkdGg9IjEzIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cmVjdCB4PSI5NiIgeT0iMTcwIiB3aWR0aD0iMzYiIGhlaWdodD0iNTIiIHJ4PSIxOCIgZmlsbD0iIzI1NjNlYiIvPjxyZWN0IHg9IjI2OCIgeT0iMTcwIiB3aWR0aD0iMzYiIGhlaWdodD0iNTIiIHJ4PSIxOCIgZmlsbD0iIzI1NjNlYiIvPjxwYXRoIGQ9Ik0yNzIgMjA1IFEyOTUgMjE1IDI5MCAyMzIiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzI1NjNlYiIgc3Ryb2tlLXdpZHRoPSI3IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48Y2lyY2xlIGN4PSIyODkiIGN5PSIyMzUiIHI9IjciIGZpbGw9IiMyNTYzZWIiLz48L3N2Zz4=";
const BUILD_TIME  = "2026-03-15 15:00";
// FIX v6.3.2: Merged — fix UsersPanel props, kh_monthly jsonb→array, chsData init
// Project: https://kyzrihqsqsxaquiorkiv.supabase.co
// ═══════════════════════════════════════════════════════════

import React, { useState, useEffect, useRef } from "react";
import PKDDashboard from "./PKDDashboard.jsx";

// ── SUPABASE CLIENT ─────────────────────────────────────────
const SUPABASE_URL = "https://kyzrihqsqsxaquiorkiv.supabase.co";
const SUPABASE_KEY = "sb_publishable_42OnFxtRkInVJ6JJGBbUCA_cEX4uWi1";

// ── SUPABASE CLIENT với visible error logging ──────────────
const SB_LOG = [];  // Global error log hiển thị trong app
const sbLog = (type, table, err) => {
  const entry = `[${new Date().toLocaleTimeString("vi-VN")}] ${type} ${table}: ${err}`;
  SB_LOG.unshift(entry);
  if (SB_LOG.length > 20) SB_LOG.pop();
  console.error(entry);
  // Dispatch custom event để UI cập nhật
  window.dispatchEvent(new CustomEvent("sb-error", { detail: entry }));
};

const sb = {
  headers: { "Content-Type": "application/json", "apikey": SUPABASE_KEY, "Authorization": `Bearer ${SUPABASE_KEY}` },

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
// ── AUTO SETUP: Chạy 1 lần để tạo cột + seed users ────────────
const setupDatabase = async () => {
  const results = [];

  // 1. Thêm cột missing vào weekly_reports qua upsert test
  try {
    // Test upsert với đầy đủ cột — Supabase sẽ ignore cột chưa có
    const testRow = {
      week_num: 0, year: 9999, dept: "__setup_test__",
      submitted_by: null, submitted_by_name: "SETUP",
      reviewed_by_name: null, ceo_comment: null,
      reviewed_at: null, submitted_at: new Date().toISOString(),
      status: "draft", content: {}
    };
    await sb.upsert("weekly_reports", testRow, "week_num,year,dept");
    // Xóa row test
    await fetch(`${SUPABASE_URL}/rest/v1/weekly_reports?year=eq.9999`, {
      method: "DELETE", headers: sb.headers
    });
    results.push("✅ weekly_reports: OK");
  } catch(e) { results.push("⚠️ weekly_reports: " + e.message); }

  // 2. Seed users — upsert từng user
  const usersToSeed = [
    {full_name:"Anh Khánh",             username:"dhk",      password_hash:"ceo123",   role:"ceo",      dept:"BAN LÃNH ĐẠO", is_active:true, email:"dhk@nsca.vn"},
    {full_name:"Chị Thùy Mai",            username:"mai",      password_hash:"admin123", role:"admin",    dept:"BAN LÃNH ĐẠO", is_active:true, email:"mai@nsca.vn"},
    {full_name:"Chị Thúy Hồng",         username:"hong",     password_hash:"gd123",    role:"director", dept:"BAN LÃNH ĐẠO", is_active:true, email:"hong@nsca.vn"},
    {full_name:"Anh Sơn còi",           username:"son",      password_hash:"hcns123",  role:"manager",  dept:"HCNS",          is_active:true, email:"sondt@nsca.vn"},
    {full_name:"Anh Duẩn chạy nhanh",   username:"duan",     password_hash:"tckt123",  role:"manager",  dept:"TCKT",          is_active:true, email:"duannt@nsca.vn"},
    {full_name:"Anh Bộc béo",               username:"ngoc_pkd", password_hash:"pkd123",   role:"manager",  dept:"PKD",           is_active:true, email:"ndao@nsca.vn"},
    {full_name:"Chị Hà cá kho",         username:"ha",       password_hash:"kho123",   role:"manager",  dept:"KHO",           is_active:true, email:"hant@nsca.vn"},
    {full_name:"Anh Phong Cơ điện",     username:"phong",    password_hash:"cd123",    role:"manager",  dept:"CƠ ĐIỆN",       is_active:true, email:"phongdv@nsca.vn"},
    {full_name:"Anh Nam R&D",           username:"nam",      password_hash:"rd123",    role:"manager",  dept:"R&D",           is_active:true, email:"namph@nsca.vn"},
    {full_name:"Anh Tuấn KCS",          username:"tuan",     password_hash:"qlcl123",  role:"manager",  dept:"QLCL",          is_active:true, email:"tuannl@nsca.vn"},
    {full_name:"Anh Ngọc ngẩn ngơ",    username:"ngoc_sx",  password_hash:"nhom123",  role:"manager",  dept:"SX NHÔM",       is_active:true, email:"ngocnv@nsca.vn"},
    {full_name:"Anh Tùng nhấp nhổm",   username:"tung",     password_hash:"thep123",  role:"manager",  dept:"SX THÉP",       is_active:true, email:"tunghm@nsca.vn"},
    {full_name:"Chị Kim Anh mua bán",  username:"anh",      password_hash:"cu123",    role:"manager",  dept:"CUNG ỨNG",      is_active:true, email:"anhdtk@nsca.vn"},
    {full_name:"Anh Đức giao hàng",    username:"duc",      password_hash:"gh123",    role:"manager",  dept:"GIAO HÀNG",     is_active:true, email:"ducvt@nsca.vn"},
    {full_name:"Chị Xuân nhà máy",     username:"xuan",     password_hash:"xuan123",  role:"staff",    dept:"SX NHÔM",       is_active:true, email:"xuannt@nsca.vn"},
    {full_name:"Chị Tâm BO",           username:"tam",      password_hash:"tam123",   role:"manager",  dept:"BO",            is_active:true, email:"tamntt@nsca.vn"},
    {full_name:"Anh Santi đẹp trai",   username:"santiago", password_hash:"san123",   role:"manager",  dept:"Int. Dept",     is_active:true, email:"santiago@nsca.vn"},
    {full_name:"Anh Đức BD",           username:"duc_bd",   password_hash:"ducbd123", role:"manager",  dept:"PKD-BD",        is_active:true, email:"ducbd@nsca.vn"},
  ];
  let seeded = 0, failed = 0;
  for (const u of usersToSeed) {
    // Kiểm tra đã tồn tại chưa
    const existing = await sb.get("users", `username=eq.${u.username}`);
    if (existing && existing.length > 0) {
      // Update password_hash
      const upd = await sb.update("users", {password_hash: u.password_hash, is_active: true, dept: u.dept}, `username=eq.${u.username}`);
      if (upd !== null) seeded++; else failed++;
    } else {
      const ins = await sb.insert("users", u);
      if (ins) seeded++; else failed++;
    }
  }
  results.push(`✅ Users: ${seeded} thành công, ${failed} thất bại`);

  // 3. meeting_minutes: upsert test + xóa duplicate rows (giữ created_at mới nhất mỗi tuần)
  try {
    await sb.upsert("meeting_minutes", {
      week_number: 0, year: 9999, title: "__setup__", created_by: "SETUP"
    }, "week_number,year");
    await fetch(`${SUPABASE_URL}/rest/v1/meeting_minutes?year=eq.9999`, {
      method: "DELETE", headers: sb.headers
    });
    // Xóa duplicate rows: giữ lại id lớn nhất (mới nhất) cho mỗi cặp (week_number, year)
    const allMins = await sb.get("meeting_minutes","year=eq.2026&order=week_number.asc,created_at.desc");
    if(allMins && allMins.length > 0) {
      const seen = new Set(); const toDelete = [];
      allMins.forEach(r => { if(seen.has(r.week_number)) toDelete.push(r.id); else seen.add(r.week_number); });
      for(const delId of toDelete) {
        await fetch(`${SUPABASE_URL}/rest/v1/meeting_minutes?id=eq.${delId}`, { method:"DELETE", headers:sb.headers });
      }
      if(toDelete.length > 0) results.push(`🗑 meeting_minutes: đã xóa ${toDelete.length} bản trùng`);
    }
    results.push("✅ meeting_minutes: OK");
  } catch(e) { results.push("⚠️ meeting_minutes: " + e.message); }

  // 4. documents table
  try {
    const testDoc = {
      name:"__setup_test__", size:0, type:"", uploaded_by:"SETUP",
      dept:"", uploaded_at: new Date().toISOString(), status:"active", tag:"Test"
    };
    await sb.insert("documents", testDoc);
    await fetch(`${SUPABASE_URL}/rest/v1/documents?name=eq.__setup_test__`,{method:"DELETE",headers:sb.headers});
    results.push("✅ documents: OK");
  } catch(e) { results.push("⚠️ documents (cần tạo bảng): " + e.message); }

  // 5. ceo_decisions table check
  try {
    const rows = await sb.get("ceo_decisions","limit=1");
    results.push("✅ ceo_decisions: OK (" + (rows?.length||0) + " rows)");
  } catch(e) { results.push("⚠️ ceo_decisions: " + e.message); }

  return results;
};


import {
  AreaChart, Area, LineChart, Line, BarChart, Bar,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  Cell, ReferenceLine, LabelList, RadarChart, PolarGrid, PolarAngleAxis, Radar, PieChart, Pie
} from "recharts";

// ══════════════════════════════════════════════════════════
// AI INLINE PANEL — Dùng trong mọi trang, response đẹp
// ══════════════════════════════════════════════════════════
function AiInlinePanel({ buildSysPrompt, callClaude, wk, contextExtra, quickQuestions }) {
  const [open, setOpen] = React.useState(false);
  const [msgs, setMsgs]   = React.useState([]);
  const [input, setInput] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const endRef = React.useRef(null);
  const defaultQs = quickQuestions || [
    "Nhận xét tình hình tuần này",
    "KPI nào đang cảnh báo?",
    "Issues cần xử lý ngay?",
    "So sánh với tuần trước",
    "Đề xuất action cho CEO",
  ];

  const send = async (q) => {
    if (!q.trim()) return;
    const userMsg = { role: "user", content: q };
    setMsgs(p => [...p, userMsg]);
    setInput("");
    setLoading(true);
    try {
      const sys = buildSysPrompt("chat") + (contextExtra ? "\n\nCONTEXT BỔ SUNG:\n" + contextExtra : "");
      const reply = await callClaude([...msgs, userMsg].slice(-10), sys, 900);
      setMsgs(p => [...p, { role: "assistant", content: reply }]);
    } catch(e) {
      setMsgs(p => [...p, { role: "assistant", content: "Lỗi kết nối AI: " + e.message }]);
    }
    setLoading(false);
    setTimeout(() => endRef.current?.scrollIntoView({ behavior: "smooth" }), 120);
  };

  // Format AI reply thành blocks trực quan
  const FormatReply = ({ text }) => {
    const lines = text.split("\n");
    return (
      <div style={{ display: "grid", gap: 6 }}>
        {lines.map((line, i) => {
          if (!line.trim()) return <div key={i} style={{ height: 4 }}/>;
          // Header dòng bắt đầu bằng ▌ hoặc === hoặc ##
          if (/^[▌#=]{1,3}/.test(line.trim())) return (
            <div key={i} style={{ fontSize: 14, fontWeight: 800, color: "#60a5fa",
              borderLeft: "3px solid #2563eb", paddingLeft: 10, marginTop: 6 }}>
              {line.replace(/^[▌#=\s]+/, "")}
            </div>
          );
          // Bullet • hoặc - hoặc *
          if (/^[•\-\*]\s/.test(line.trim())) return (
            <div key={i} style={{ display: "flex", gap: 8, paddingLeft: 8, fontSize: 14, lineHeight: 1.65 }}>
              <span style={{ color: "#60a5fa", marginTop: 2, flexShrink: 0 }}>•</span>
              <span style={{ color: "#e2e8f0" }}>{line.replace(/^[•\-\*]\s/, "")}</span>
            </div>
          );
          // Emoji đầu dòng (section label)
          if (/^[🔴🟡🟢✅⚠️📊💡🎯📈📉⚡🏆]/.test(line.trim())) return (
            <div key={i} style={{ padding: "6px 12px", borderRadius: 7,
              background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)",
              fontSize: 14, color: "#e2e8f0", lineHeight: 1.6 }}>
              {line.trim()}
            </div>
          );
          // Dòng thường
          return (
            <div key={i} style={{ fontSize: 14, color: "#cbd5e1", lineHeight: 1.65, paddingLeft: 4 }}>
              {line}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div style={{
      background:"rgba(15,23,42,0.97)",
      border:"1px solid rgba(37,99,235,0.35)",
      borderRadius:16, padding:"20px 24px",
      boxShadow:"0 12px 40px rgba(0,0,0,0.5)",
    }}>
      {/* Header */}
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:16}}>
        <div style={{display:"flex",alignItems:"center",gap:12}}>
          <img src={LENA_FACE} style={{width:26,height:26,borderRadius:"50%",flexShrink:0,verticalAlign:"middle"}}/>
          <div>
            <div style={{fontSize:17,fontWeight:900,color:"#60a5fa",letterSpacing:"0.3px"}}>AI Phân tích & Tư vấn</div>
            <div style={{fontSize:12,color:"#475569",marginTop:1}}>CIS Intelligence · Dữ liệu thực T{wk}/2026</div>
          </div>
        </div>
        {msgs.length>0&&(
          <button onClick={()=>setMsgs([])} style={{
            padding:"5px 14px",borderRadius:7,border:"1px solid rgba(255,255,255,0.08)",
            background:"rgba(255,255,255,0.04)",color:"#64748b",cursor:"pointer",fontSize:13}}>
            Xóa chat
          </button>
        )}
      </div>

      {/* Quick questions */}
      {msgs.length===0&&(
        <div style={{display:"flex",flexWrap:"wrap",gap:8,marginBottom:18}}>
          {defaultQs.map((q,i)=>(
            <button key={i} onClick={()=>send(q)} style={{
              padding:"7px 16px",borderRadius:22,fontSize:13,cursor:"pointer",
              border:"1px solid rgba(37,99,235,0.25)",
              background:"rgba(37,99,235,0.07)",
              color:"#93c5fd",fontFamily:"Calibri,sans-serif",
              transition:"all .15s",
            }}>{q}</button>
          ))}
        </div>
      )}

      {/* Chat — không giới hạn chiều cao, tự mở rộng */}
      <div style={{display:"flex",flexDirection:"column",gap:14,marginBottom:16}}>
        {msgs.map((m,i)=>(
          <div key={i} style={{display:"flex",justifyContent:m.role==="user"?"flex-end":"flex-start"}}>
            {m.role==="assistant"?(
              <div style={{
                width:"100%",padding:"18px 20px",borderRadius:12,
                background:"rgba(255,255,255,0.03)",
                border:"1px solid rgba(37,99,235,0.22)",
                boxShadow:"inset 0 1px 0 rgba(255,255,255,0.04)",
              }}>
                <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:12}}>
                  <img src={LENA_FACE} style={{width:32,height:32,borderRadius:"50%",flexShrink:0}}/>
                  <span style={{fontSize:13,color:"#60a5fa",fontWeight:800}}>CIS AI · Tuần {wk}/2026</span>
                </div>
                <FormatReply text={m.content}/>
              </div>
            ):(
              <div style={{
                maxWidth:"65%",padding:"10px 16px",borderRadius:10,
                background:"linear-gradient(135deg,rgba(37,99,235,0.22),rgba(99,102,241,0.15))",
                border:"1px solid rgba(37,99,235,0.3)",
                fontSize:15,color:"#e2e8f0",lineHeight:1.6,
              }}>{m.content}</div>
            )}
          </div>
        ))}
        {loading&&(
          <div style={{padding:"16px 20px",borderRadius:12,
            background:"rgba(255,255,255,0.03)",border:"1px solid rgba(37,99,235,0.22)"}}>
            <div style={{display:"flex",alignItems:"center",gap:10}}>
              <img src={LENA_FACE} style={{width:26,height:26,borderRadius:"50%",flexShrink:0,verticalAlign:"middle"}}/>
              <span style={{fontSize:13,color:"#60a5fa",fontWeight:700}}>CIS AI đang phân tích...</span>
              <div style={{display:"flex",gap:5,marginLeft:4}}>
                {[0,1,2].map(j=>(
                  <div key={j} style={{width:7,height:7,borderRadius:"50%",
                    background:["#2563eb","#6366f1","#8b5cf6"][j],opacity:0.8}}/>
                ))}
              </div>
            </div>
          </div>
        )}
        <div ref={endRef}/>
      </div>

      {/* Input */}
      <div style={{display:"flex",gap:10}}>
        <input value={input} onChange={e=>setInput(e.target.value)}
          onKeyDown={e=>e.key==="Enter"&&!e.shiftKey&&send(input)}
          placeholder="Hỏi thêm về KPI, xu hướng, issues, chiến lược..."
          style={{
            flex:1,background:"rgba(255,255,255,0.07)",
            border:"1px solid rgba(255,255,255,0.14)",
            borderRadius:10,padding:"11px 16px",
            color:"#e2e8f0",fontSize:15,outline:"none",
            fontFamily:"Calibri,sans-serif",
          }}/>
        <button onClick={()=>send(input)} disabled={loading||!input.trim()} style={{
          padding:"11px 26px",borderRadius:10,border:"none",
          fontWeight:800,fontSize:15,cursor:loading||!input.trim()?"default":"pointer",
          fontFamily:"Calibri,sans-serif",letterSpacing:"0.3px",
          background:loading||!input.trim()
            ?"rgba(255,255,255,0.06)"
            :"linear-gradient(135deg,#2563eb,#4f46e5)",
          color:loading||!input.trim()?"#475569":"white",
          boxShadow:loading||!input.trim()?"none":"0 4px 14px rgba(37,99,235,0.35)",
        }}>Gửi</button>
      </div>
    </div>
  );
}

// ── Chart helper components (defined OUTSIDE render) ────────────
const KpiChartTip = ({ active, payload, label, chartDepts, scoreColor }) => {
  if (!active || !payload?.length) return null;
  const d = (chartDepts||[]).find(x=>x.dept===label)||{};
  const v = payload[0]?.value;
  return (
    <div style={{background:"#1e293b",border:"1px solid rgba(255,255,255,0.12)",borderRadius:9,padding:"10px 14px",fontSize:13}}>
      <div style={{fontWeight:800,color:d.color||"#60a5fa",marginBottom:4}}>{label}</div>
      <div style={{color:"#e2e8f0"}}>Điểm: <b style={{color:scoreColor?scoreColor(v):"#fff",fontSize:16}}>{v??"-"}</b></div>
      <div style={{color:"#94a3b8",marginTop:2}}>{d.status||""}</div>
    </div>
  );
};
const ChsChartTip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  const v = payload[0]?.value;
  const col = !v?"#475569":v>=85?"#34d399":v>=75?"#fbbf24":"#f87171";
  return (
    <div style={{background:"#1e293b",border:"1px solid rgba(255,255,255,0.12)",borderRadius:8,padding:"9px 13px",fontSize:13}}>
      <div style={{color:"#e2e8f0",fontWeight:700,marginBottom:3}}>{label}</div>
      <div style={{color:col,fontWeight:900,fontSize:17}}>{v??"-"} <span style={{fontSize:12}}>điểm</span></div>
      <div style={{color:"#94a3b8",fontSize:11,marginTop:2}}>{!v?"Chưa có":v>=85?"✅ Xuất sắc":v>=75?"⚡ Ổn định":v>=65?"⚠️ Theo dõi":"🔴 Cảnh báo"}</div>
    </div>
  );
};
const DtChartTip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  return (
    <div style={{background:"#1e293b",border:"1px solid rgba(255,255,255,0.12)",borderRadius:8,padding:"9px 13px",fontSize:13}}>
      <div style={{color:"#e2e8f0",fontWeight:700,marginBottom:4}}>{label}</div>
      {payload.map((p,i)=>(
        <div key={i} style={{color:p.color,marginTop:2}}>
          {p.name}: <b>{p.value!=null?p.value+"B":"—"}</b>
        </div>
      ))}
    </div>
  );
};


// ══════════════════════════════════════════════════════════
// DEPT OVERVIEW PANEL — So sánh W/W, M/M, Q/Q, Y/Y
// ══════════════════════════════════════════════════════════
function DeptOverviewPanel({ deptKey, weeklyData, wk, buildSysPrompt, callClaude }) {
  const sc2 = v => v >= 100 ? "#34d399" : v >= 85 ? "#22d3ee" : v >= 70 ? "#fbbf24" : v >= 55 ? "#fb923c" : "#f87171";
  const arrow = (cur, prev) => {
    if (!cur || !prev) return { icon: "—", color: "#475569" };
    const pct = Math.round(((cur - prev) / Math.abs(prev)) * 100);
    return pct > 0
      ? { icon: "↑ +" + pct + "%", color: "#34d399" }
      : pct < 0
      ? { icon: "↓ " + pct + "%", color: "#f87171" }
      : { icon: "→ 0%", color: "#94a3b8" };
  };

  // Map dept → weeklyData key
  const KEY_MAP = { "PKD": "pkd", "PKD-BD": "bd", "BO": "bo", "Int. Dept": "intl" };
  const dk = KEY_MAP[deptKey] || "pkd";
  const realWks = weeklyData.filter(w => w.hasData === true);

  // Tính tổng theo kỳ
  const sumPeriod = (wks) => {
    if (!wks.length) return null;
    const obj = {};
    wks.forEach(w => {
      const d = w[dk] || {};
      Object.keys(d).forEach(k => {
        if (typeof d[k] === "number") obj[k] = (obj[k] || 0) + d[k];
      });
    });
    return obj;
  };
  const avgPeriod = (wks) => {
    if (!wks.length) return null;
    const s = sumPeriod(wks);
    if (!s) return null;
    const obj = {};
    Object.keys(s).forEach(k => { obj[k] = s[k] / wks.length; });
    return obj;
  };

  // Xác định tuần/tháng/quý hiện tại và kỳ trước
  const curM  = wk <= 4 ? 1 : wk <= 9 ? 2 : wk <= 13 ? 3 : wk <= 17 ? 4 : wk <= 22 ? 5 : wk <= 26 ? 6 : wk <= 30 ? 7 : wk <= 35 ? 8 : wk <= 39 ? 9 : wk <= 43 ? 10 : wk <= 48 ? 11 : 12;
  const curQ  = Math.ceil(curM / 3);

  const prevWkData  = realWks.find(w => w.w === wk - 1) || null;
  const curWkData   = realWks.find(w => w.w === wk) || null;

  const monthWks    = realWks.filter(w => (w.w <= 4 && curM === 1) || (w.w >= 5 && w.w <= 9 && curM === 2) || (w.w >= 10 && w.w <= 13 && curM === 3) || (w.w >= 14 && w.w <= 17 && curM === 4) || (w.w >= 18 && w.w <= 22 && curM === 5) || (w.w >= 23 && w.w <= 26 && curM === 6));
  const prevMonthWks = realWks.filter(w => (w.w <= 4 && curM === 2) || (w.w >= 5 && w.w <= 9 && curM === 3));

  const qWks     = realWks.filter(w => Math.ceil((w.w <= 4 ? 1 : w.w <= 9 ? 2 : w.w <= 13 ? 3 : 4) / 3) === curQ);
  const prevQWks = realWks.filter(w => Math.ceil((w.w <= 4 ? 1 : w.w <= 9 ? 2 : w.w <= 13 ? 3 : 4) / 3) === curQ - 1);

  const curWk   = curWkData  ? (curWkData[dk]  || {}) : {};
  const prevWk  = prevWkData ? (prevWkData[dk] || {}) : {};
  const curMo   = sumPeriod(monthWks)     || {};
  const prevMo  = sumPeriod(prevMonthWks) || {};
  const curQu   = sumPeriod(qWks)         || {};
  const prevQu  = sumPeriod(prevQWks)     || {};
  const curYr   = sumPeriod(realWks)      || {};

  // KPI chính theo dept
  const kpiConfig = {
    "PKD": [
      { label: "DT Tổng",    key: "dt",      unit: "tỷ",  fmt: v => v?.toFixed(2) },
      { label: "DT Thép",    key: "dtThep",  unit: "tỷ",  fmt: v => v?.toFixed(2) },
      { label: "DT Nhôm",    key: "dtNhom",  unit: "tỷ",  fmt: v => v?.toFixed(2) },
      { label: "Win Rate",   key: "winRate", unit: "%",   fmt: v => v?.toFixed(1) },
      { label: "Margin",     key: "margin",  unit: "%",   fmt: v => v?.toFixed(1) },
      { label: "DSO",        key: "dso",     unit: "ngày",fmt: v => v?.toFixed(0) },
    ],
    "PKD-BD": [
      { label: "DT NTK",     key: "dtNtk",     unit: "tỷ",    fmt: v => v?.toFixed(2) },
      { label: "DT Galaxy",  key: "dtGalaxy",  unit: "tỷ",    fmt: v => v?.toFixed(2) },
      { label: "DT IMP",     key: "dtImp",     unit: "tỷ",    fmt: v => v?.toFixed(2) },
      { label: "Báo giá",    key: "bgTong",    unit: "BG",    fmt: v => Math.round(v) },
      { label: "Đơn hàng",   key: "dhMoi",     unit: "ĐH",    fmt: v => Math.round(v) },
      { label: "Gặp NPP",    key: "gapGo",     unit: "cuộc",  fmt: v => Math.round(v) },
    ],
    "BO": [
      { label: "HĐ Ký",      key: "hdKyMoi",     unit: "HĐ",  fmt: v => Math.round(v) },
      { label: "GT HĐ",      key: "gtHdKy",      unit: "tỷ",  fmt: v => v?.toFixed(2) },
      { label: "HĐ VAT",     key: "hoaDonXuat",  unit: "HĐ",  fmt: v => Math.round(v) },
      { label: "Công nợ QH", key: "congNoQuaHan",unit: "tỷ",  fmt: v => v?.toFixed(2) },
      { label: "Hồ sơ tồn",  key: "hsTonDong",   unit: "HS",  fmt: v => Math.round(v) },
    ],
    "Int. Dept": [
      { label: "DT XK",      key: "dtXk",    unit: "tỷ",  fmt: v => v?.toFixed(2) },
      { label: "Đơn XK",     key: "donMoi",  unit: "đơn", fmt: v => Math.round(v) },
      { label: "OTD XK",     key: "otd",     unit: "%",   fmt: v => v?.toFixed(1) },
      { label: "KH QT mới",  key: "khMoi",   unit: "KH",  fmt: v => Math.round(v) },
      { label: "DT Mỹ",      key: "dtMy",    unit: "tỷ",  fmt: v => v?.toFixed(2) },
    ],
  };

  const kpis = kpiConfig[deptKey] || [];

  const CompareCard = ({ label, cur, prev, unit, fmt }) => {
    const a = arrow(cur, prev);
    const val = cur != null ? (fmt ? fmt(cur) : cur) : null;
    return (
      <div style={{ background: "rgba(255,255,255,0.03)", borderRadius: 8, padding: "10px 12px",
        border: "1px solid rgba(255,255,255,0.07)" }}>
        <div style={{ fontSize: 12, color: "#94a3b8", marginBottom: 3 }}>{label}</div>
        <div style={{ fontSize: 19, fontWeight: 900, color: val != null ? "#e2e8f0" : "#475569" }}>
          {val != null ? val : "—"}<span style={{ fontSize: 13, color: "#64748b", marginLeft: 3 }}>{val != null ? unit : ""}</span>
        </div>
        <div style={{ fontSize: 13, color: a.color, marginTop: 3, fontWeight: 700 }}>{a.icon}</div>
        {prev != null && <div style={{ fontSize: 11, color: "#475569" }}>Kỳ trước: {fmt ? fmt(prev) : prev} {unit}</div>}
      </div>
    );
  };

  const PeriodSection = ({ title, curObj, prevObj, emoji }) => (
    <div style={{ background: "rgba(255,255,255,0.02)", borderRadius: 10, padding: "14px 16px",
      border: "1px solid rgba(255,255,255,0.06)" }}>
      <div style={{ fontSize: 14, fontWeight: 800, color: "#e2e8f0", marginBottom: 12 }}>{emoji} {title}</div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(130px,1fr))", gap: 8 }}>
        {kpis.map((k, i) => (
          <CompareCard key={i} label={k.label}
            cur={curObj[k.key]}
            prev={prevObj[k.key]}
            unit={k.unit} fmt={k.fmt}/>
        ))}
      </div>
    </div>
  );

  const contextExtra = "Người dùng đang xem Tổng quan phòng " + deptKey + ". Tập trung phân tích kết quả so sánh tuần/tháng/quý/năm, xu hướng và cơ hội cải thiện.";
  const quickQs = [
    "Tuần này phòng " + deptKey + " đang ở đâu so với KH?",
    "So sánh kết quả tuần này với tuần trước",
    "Điểm mạnh và điểm cần cải thiện?",
    "Dự báo cuối tháng có đạt KH không?",
    "Đề xuất hành động ưu tiên cho tuần tới",
  ];

  return (
    <div style={{ display: "grid", gap: 12 }}>
      {/* 4 kỳ so sánh */}
      <PeriodSection title={"Tuần " + wk + " vs Tuần " + (wk - 1)}
        curObj={curWk} prevObj={prevWk} emoji="📅"/>
      <PeriodSection title={"Tháng " + curM + " vs Tháng " + (curM - 1)}
        curObj={curMo} prevObj={prevMo} emoji="📆"/>
      <PeriodSection title={"Quý " + curQ + " vs Quý " + (curQ - 1)}
        curObj={curQu} prevObj={prevQu} emoji="📊"/>
      <PeriodSection title="Lũy kế Năm 2026 (tích lũy)"
        curObj={curYr} prevObj={{}} emoji="📈"/>

      {/* AI */}
      <AiInlinePanel
        buildSysPrompt={buildSysPrompt}
        callClaude={callClaude}
        wk={wk}
        contextExtra={contextExtra}
        quickQuestions={quickQs}
      />
    </div>
  );
}


/* ═══════════════════════════════════════════════════════════
   DESIGN TOKENS
═══════════════════════════════════════════════════════════ */
const T = {
  bg0: "#050810",
  bg1: "#0a0f1e",
  bg2: "#0f1628",
  card: "rgba(255,255,255,0.032)",
  cardHover: "rgba(255,255,255,0.055)",
  border: "rgba(255,255,255,0.07)",
  borderBright: "rgba(255,255,255,0.14)",
  text: "#ffffff",
  muted: "#c8d4e8",
  dim: "#8fa3c0",
  accent: "#2563eb",
  accentHov: "#3b82f6",
  green: "#10b981",
  yellow: "#f59e0b",
  orange: "#f97316",
  red: "#ef4444",
  purple: "#8b5cf6",
  cyan: "#06b6d4",
  greenBg: "rgba(16,185,129,0.1)",
  yellowBg: "rgba(245,158,11,0.1)",
  orangeBg: "rgba(249,115,22,0.1)",
  redBg: "rgba(239,68,68,0.1)",
  purpleBg: "rgba(139,92,246,0.1)",
  cyanBg: "rgba(6,182,212,0.1)",
};

/* ═══════════════════════════════════════════════════════════
   USERS
═══════════════════════════════════════════════════════════ */
const USERS_DB = [
  { id:1,  username:"dhk",      name:"Anh Khánh",             role:"CEO",      dept:"BAN LÃNH ĐẠO", pass:"ceo123",   avatar:"ĐK", color:T.accent  , active:true },
  { id:2,  username:"mai",      name:"chị Thùy Mai",            role:"Admin",    dept:"BAN LÃNH ĐẠO", pass:"admin123", avatar:"TM", color:T.purple  , active:true },
  { id:3,  username:"hong",     name:"Chị Thúy Hồng",         role:"Director", dept:"BAN LÃNH ĐẠO", pass:"gd123",    avatar:"TH", color:T.cyan    , active:true },
  { id:4,  username:"son",      name:"Anh Sơn còi",           role:"Manager",  dept:"HCNS",          pass:"hcns123",  avatar:"TS", color:T.green   , active:true },
  { id:5,  username:"duan",     name:"Anh Duẩn chạy nhanh",   role:"Manager",  dept:"TCKT",          pass:"tckt123",  avatar:"TD", color:T.yellow  , active:true },
  { id:15, username:"ngoc_pkd", name:"Anh Bộc béo",               role:"Manager",  dept:"PKD",           pass:"pkd123",   avatar:"ĐN", color:"#f472b6" , active:true },
  { id:6,  username:"ha",       name:"Chị Hà cá kho",         role:"Manager",  dept:"KHO",           pass:"kho123",   avatar:"NH", color:T.red     , active:true },
  { id:7,  username:"phong",    name:"Anh Phong Cơ điện",     role:"Manager",  dept:"CƠ ĐIỆN",       pass:"cd123",    avatar:"VP", color:T.purple  , active:true },
  { id:8,  username:"nam",      name:"Anh Nam R&D",           role:"Manager",  dept:"R&D",           pass:"rd123",    avatar:"HN", color:T.cyan    , active:true },
  { id:9,  username:"tuan",     name:"Anh Tuấn KCS",          role:"Manager",  dept:"QLCL",          pass:"qlcl123",  avatar:"LT", color:T.green   , active:true },
  { id:10, username:"ngoc_sx",  name:"Anh Ngọc ngẩn ngơ",    role:"Manager",  dept:"SX NHÔM",       pass:"nhom123",  avatar:"VN", color:T.orange  , active:true },
  { id:11, username:"tung",     name:"Anh Tùng nhấp nhổm",   role:"Manager",  dept:"SX THÉP",       pass:"thep123",  avatar:"MT", color:"#ec4899" , active:true },
  { id:12, username:"anh",      name:"Chị Kim Anh mua bán",  role:"Manager",  dept:"CUNG ỨNG",      pass:"cu123",    avatar:"KA", color:T.cyan    , active:true },
  { id:13, username:"duc",      name:"Anh Đức giao hàng",    role:"Manager",  dept:"GIAO HÀNG",     pass:"gh123",    avatar:"VĐ", color:T.accent  , active:true },
  { id:14, username:"xuan",     name:"Chị Xuân nhà máy",     role:"Staff",    dept:"SX NHÔM",       pass:"xuan123",  avatar:"TX", color:"#d97706" , active:true },
  { id:16, username:"tam",     name:"Chị Tâm BO",         role:"Manager", dept:"BO",        pass:"tam123",    avatar:"TB", color:"#a78bfa", active:true },
  { id:17, username:"santiago", name:"Anh Santi đẹp trai", role:"Manager", dept:"Int. Dept", pass:"san123",    avatar:"AS", color:"#34d399", active:true },
  { id:18, username:"duc_bd",   name:"Anh Đức BD",          role:"Manager", dept:"PKD-BD",    pass:"ducbd123",  avatar:"ĐB", color:"#fb923c", active:true },
];

/* ═══════════════════════════════════════════════════════════
   WEEKLY DATA  (số liệu thực từ BC TCKT tuần 1/3/4/9/2026)
═══════════════════════════════════════════════════════════ */
// ═══ DỮ LIỆU TUẦN — ĐỌC TỪ SUPABASE ═══════════════════════
// WK và CHS_WK bây giờ là state động, không hardcode nữa
// Fallback 1 row để React không crash trước khi data load xong
const WK_EMPTY_ROW = (n) => ({
  w:n, thang:1, quy:1, label:`T${n}`, ngay:"--",
  hasData: false,   // ← flag: false = chưa có báo cáo thật
  tckt:{ pt:0,qh:0,ncc:0,vayNH:0,vayTDH:0,tongVay:0,tienMat:0,khUT:0,thuTH:0,thuKH:0,laiVay:0 },
  nhom:{ ht:0,ton:0,note:"Chưa có báo cáo" },
  thep:{ vav:0,vanEi:0,tmc:0,cable:0,note:"Chưa có báo cáo" },
  gh:{   luot:0,oto:0,note:"Chưa có báo cáo" },
  kho:{  nhap:0,xuat:0,ton:0,note:"Chưa có báo cáo" },
  cd:{   sucoi:0,pdm:0,uptime:0,note:"Chưa có báo cáo" },
  qlcl:{ fpy:0,kn:0,capa:0,note:"Chưa có báo cáo" },
  cu:{   gt:0,donHang:0,dungHan:0,note:"Chưa có báo cáo" },
  pkd:{  dt:0,kh:0,pipeline:0,doiTac:0,conversion:0,note:"Chưa có báo cáo" },
  bd:{   dtNtk:0,dtGalaxy:0,dtImp:0,dtVnmep:0,dtMepco:0,dtTrucTiep:0,bgTong:0,gtBg:0,dhMoi:0,duAnMoi:0,gapGo:0,specIn:0,claim:0,note:"Chưa có báo cáo" },
});
// Placeholder 10 tuần — sẽ được ghi đè ngay sau khi fetch Supabase
let WK = Array.from({length:10}, (_,i) => WK_EMPTY_ROW(i+1));
// CHS_WK placeholder — null = chưa có data thật
let CHS_WK = Array.from({length:10}, (_,i) => ({
  l:`T${i+1}`, chs:null, fin:null, ops:null, growth:null, quality:null, strategy:null
}));


/* ═══════════════════════════════════════════════════════════
   KPI MASTER  (từ KPI_SMART_QLSX_2026 + KPI Master docs)
═══════════════════════════════════════════════════════════ */
const KPI_MASTER = {
  "SX THÉP": {
    owner:"Nguyễn Anh Tùng", dept:"SX THÉP", color:"#94a3b8",
    kpis:[
      {code:"SX-T-01",label:"Doanh thu kế hoạch nhóm THÉP (proxy sản lượng)",dir:"H",w:15,unit:"VND",note:"Từ Target tháng 2026 theo ngành hàng (Thép).",measure:"flow",kh:[6572905151.1111,7072905151.1111,12740905151.1111,13984765022.716,14484765022.716,14741907879.8589,15142123630.2293,15642123630.2293,15142123630.2293,14515074382.4515,13515074382.4515,14015074382.4515]},
      {code:"SX-T-02",label:"% Hoàn thành kế hoạch sản xuất THÉP",dir:"H",w:10,unit:"%",note:"Score dựa trên % đạt kế hoạch.",measure:"rate",kh:[8.3333,8.3333,8.3333,8.3333,8.3333,8.3333,8.3333,8.3333,8.3333,8.3333,8.3333,8.3333]},
      {code:"SX-T-03",label:"OTD (Giao hàng đúng hạn) - THÉP",dir:"H",w:10,unit:"%",note:"Chuẩn điều hành; liên kết sheet Giao hàng.",measure:"rate",kh:[7.9167,7.9167,7.9167,7.9167,7.9167,7.9167,7.9167,7.9167,7.9167,7.9167,7.9167,7.9167]},
      {code:"SX-T-04",label:"Defect rate - THÉP",dir:"L",w:10,unit:"%",note:"Chuẩn điều hành; liên kết QLCL.",measure:"rate",kh:[0.125,0.125,0.125,0.125,0.125,0.125,0.125,0.125,0.125,0.125,0.125,0.125]},
      {code:"SX-T-05",label:"Năng suất lao động - THÉP (Output/LaborHour)",dir:"H",w:10,unit:"index",note:"Index=100 tương ứng baseline 2026; nhập Actual theo tháng.",measure:"flow",kh:[8.3333,8.3333,8.3333,8.3333,8.3333,8.3333,8.3333,8.3333,8.3333,8.3333,8.3333,8.3333]},
      {code:"SX-T-06",label:"Số lượng công nhân kế hoạch - THÉP",dir:"L",w:10,unit:"người",note:"Nguồn: Chi phi chung/SL công nhân. Giữ không vượt plan.",measure:"flow",kh:[10.0,10.0,10.0,10.0,10.0,10.0,10.0,10.0,10.0,10.0,10.0,10.0]},
      {code:"SX-T-07",label:"Hiệu suất máy (OEE proxy)",dir:"H",w:10,unit:"%",note:"Chuẩn điều hành.",measure:"rate",kh:[7.5,7.5,7.5,7.5,7.5,7.5,7.5,7.5,7.5,7.5,7.5,7.5]},
      {code:"SX-T-08",label:"Tiết kiệm biến phí & nhân công (Eligible Saving)",dir:"H",w:8,unit:"%",note:"Áp dụng policy thưởng 50% saving, tính 6 tháng/lần.",measure:"rate",kh:[0.1667,0.1667,0.1667,0.1667,0.1667,0.1667,0.1667,0.1667,0.1667,0.1667,0.1667,0.1667]},
      {code:"SX-T-09",label:"Tuân thủ 5S & an toàn (điểm audit)",dir:"H",w:7,unit:"điểm",note:"Chuẩn điều hành.",measure:"flow",kh:[7.0833,7.0833,7.0833,7.0833,7.0833,7.0833,7.0833,7.0833,7.0833,7.0833,7.0833,7.0833]},
      {code:"SX-T-10",label:"Chất lượng báo cáo tuần (đúng hạn/đủ dữ liệu)",dir:"H",w:10,unit:"%",note:"Workflow Draft→Submitted→Ready→Locked.",measure:"rate",kh:[8.3333,8.3333,8.3333,8.3333,8.3333,8.3333,8.3333,8.3333,8.3333,8.3333,8.3333,8.3333]},
    ]
  },
  "SX NHÔM": {
    owner:"Trần Thị Ngọc", dept:"SX NHÔM", color:"#a78bfa",
    kpis:[
      {code:"SX-A-01",label:"Doanh thu kế hoạch nhóm NHÔM (proxy sản lượng)",dir:"H",w:15,unit:"VND",note:"Từ Target tháng 2026 theo ngành hàng (Nhôm).",measure:"flow",kh:[4971603891.8519,5871603891.8519,6521603891.8519,8078048144.1975,8078048144.1975,8078048144.1975,9170640736.7901,9170640736.7901,9170640736.7901,8689650693.8272,8189650693.8272,8189650693.8272]},
      {code:"SX-A-02",label:"% Hoàn thành kế hoạch sản xuất NHÔM",dir:"H",w:10,unit:"%",note:"Score dựa trên % đạt kế hoạch.",measure:"rate",kh:[8.3333,8.3333,8.3333,8.3333,8.3333,8.3333,8.3333,8.3333,8.3333,8.3333,8.3333,8.3333]},
      {code:"SX-A-03",label:"OTD - NHÔM",dir:"H",w:10,unit:"%",note:"Chuẩn điều hành; liên kết sheet Giao hàng.",measure:"rate",kh:[7.9167,7.9167,7.9167,7.9167,7.9167,7.9167,7.9167,7.9167,7.9167,7.9167,7.9167,7.9167]},
      {code:"SX-A-04",label:"Defect rate - NHÔM",dir:"L",w:10,unit:"%",note:"Chuẩn điều hành; liên kết QLCL.",measure:"rate",kh:[0.125,0.125,0.125,0.125,0.125,0.125,0.125,0.125,0.125,0.125,0.125,0.125]},
      {code:"SX-A-05",label:"Năng suất lao động - NHÔM (Output/LaborHour)",dir:"H",w:10,unit:"index",note:"Index=100 tương ứng baseline 2026; nhập Actual.",measure:"flow",kh:[8.3333,8.3333,8.3333,8.3333,8.3333,8.3333,8.3333,8.3333,8.3333,8.3333,8.3333,8.3333]},
      {code:"SX-A-06",label:"Số lượng công nhân kế hoạch - NHÔM",dir:"L",w:10,unit:"người",note:"Nguồn: Chi phi chung/SL công nhân.",measure:"flow",kh:[8.5833,8.5833,8.5833,8.5833,8.5833,8.5833,8.5833,8.5833,8.5833,8.5833,8.5833,8.5833]},
      {code:"SX-A-07",label:"Hiệu suất máy (OEE proxy) - NHÔM",dir:"H",w:10,unit:"%",note:"Chuẩn điều hành.",measure:"rate",kh:[7.5,7.5,7.5,7.5,7.5,7.5,7.5,7.5,7.5,7.5,7.5,7.5]},
      {code:"SX-A-08",label:"Tiết kiệm biến phí & nhân công - NHÔM",dir:"H",w:8,unit:"%",note:"Áp dụng policy thưởng 50% saving.",measure:"rate",kh:[0.1667,0.1667,0.1667,0.1667,0.1667,0.1667,0.1667,0.1667,0.1667,0.1667,0.1667,0.1667]},
      {code:"SX-A-09",label:"Tuân thủ 5S & an toàn - NHÔM",dir:"H",w:7,unit:"điểm",note:"Chuẩn điều hành.",measure:"flow",kh:[7.0833,7.0833,7.0833,7.0833,7.0833,7.0833,7.0833,7.0833,7.0833,7.0833,7.0833,7.0833]},
      {code:"SX-A-10",label:"Chất lượng báo cáo tuần - NHÔM",dir:"H",w:10,unit:"%",note:"Workflow CIS.",measure:"rate",kh:[8.3333,8.3333,8.3333,8.3333,8.3333,8.3333,8.3333,8.3333,8.3333,8.3333,8.3333,8.3333]},
    ]
  },
  "CUNG ỨNG": {
    owner:"Phan Thị Ánh", dept:"CUNG ỨNG", color:"#c084fc",
    kpis:[
      {code:"MH-01",label:"Tỷ lệ mua hàng đúng tiến độ (On-time PO)",dir:"H",w:12,unit:"%",note:"Chuẩn: ≥95% PO đúng hạn.",measure:"rate",kh:[7.9167,7.9167,7.9167,7.9167,7.9167,7.9167,7.9167,7.9167,7.9167,7.9167,7.9167,7.9167]},
      {code:"MH-02",label:"Tỷ lệ thiếu vật tư gây dừng chuyền",dir:"L",w:10,unit:"%",note:"Mục tiêu: ≤1% đơn/lot bị thiếu vật tư.",measure:"rate",kh:[0.0833,0.0833,0.0833,0.0833,0.0833,0.0833,0.0833,0.0833,0.0833,0.0833,0.0833,0.0833]},
      {code:"MH-03",label:"Chênh lệch giá mua so với plan (Price variance)",dir:"L",w:10,unit:"%",note:"≤1% so kế hoạch/định mức.",measure:"rate",kh:[0.0833,0.0833,0.0833,0.0833,0.0833,0.0833,0.0833,0.0833,0.0833,0.0833,0.0833,0.0833]},
      {code:"MH-04",label:"Tỷ lệ nhà cung cấp đạt chuẩn (Supplier pass)",dir:"H",w:10,unit:"%",note:"Đánh giá cùng QLCL (IQC).",measure:"rate",kh:[7.9167,7.9167,7.9167,7.9167,7.9167,7.9167,7.9167,7.9167,7.9167,7.9167,7.9167,7.9167]},
      {code:"MH-05",label:"Lead time mua hàng trung bình",dir:"L",w:10,unit:"ngày",note:"Mục tiêu điều hành; tùy nhóm vật tư.",measure:"stock",kh:[0.5833,0.5833,0.5833,0.5833,0.5833,0.5833,0.5833,0.5833,0.5833,0.5833,0.5833,0.5833]},
      {code:"MH-06",label:"Tỷ lệ hợp đồng/PO có đủ hồ sơ (compliance)",dir:"H",w:10,unit:"%",note:"Đủ: báo giá, hợp đồng, nghiệm thu, hóa đơn.",measure:"rate",kh:[8.3333,8.3333,8.3333,8.3333,8.3333,8.3333,8.3333,8.3333,8.3333,8.3333,8.3333,8.3333]},
      {code:"MH-07",label:"Tỷ lệ tiết kiệm mua hàng (negotiation saving)",dir:"H",w:8,unit:"%",note:"Tính trên vật tư chính; input cho saving pool.",measure:"rate",kh:[0.0833,0.0833,0.0833,0.0833,0.0833,0.0833,0.0833,0.0833,0.0833,0.0833,0.0833,0.0833]},
      {code:"MH-08",label:"Tỷ lệ khiếu nại NCC được xử lý đúng hạn",dir:"H",w:10,unit:"%",note:"Liên kết CAPA/NCC.",measure:"rate",kh:[7.5,7.5,7.5,7.5,7.5,7.5,7.5,7.5,7.5,7.5,7.5,7.5]},
      {code:"MH-09",label:"Độ chính xác dự báo mua hàng (plan vs actual)",dir:"H",w:10,unit:"%",note:"So với kế hoạch SX theo tháng.",measure:"rate",kh:[7.5,7.5,7.5,7.5,7.5,7.5,7.5,7.5,7.5,7.5,7.5,7.5]},
      {code:"MH-10",label:"Chất lượng báo cáo tuần mua hàng",dir:"H",w:10,unit:"%",note:"Theo CIS workflow.",measure:"rate",kh:[8.3333,8.3333,8.3333,8.3333,8.3333,8.3333,8.3333,8.3333,8.3333,8.3333,8.3333,8.3333]},
    ]
  },
  "KHO": {
    owner:"Nguyễn Thị Hà", dept:"KHO", color:"#38bdf8",
    kpis:[
      {code:"KHO-01",label:"Độ chính xác tồn kho (Stock accuracy)",dir:"H",w:12,unit:"%",note:"Cycle count / kiểm kê.",measure:"rate",kh:[8.1667,8.1667,8.1667,8.1667,8.1667,8.1667,8.1667,8.1667,8.1667,8.1667,8.1667,8.1667]},
      {code:"KHO-02",label:"Vòng quay tồn kho (Inventory turns)",dir:"H",w:10,unit:"vòng",note:"Mục tiêu điều hành; tùy loại.",measure:"rate",kh:[0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5]},
      {code:"KHO-03",label:"Tỷ lệ tồn kho chậm luân chuyển",dir:"L",w:10,unit:"%",note:"≤3% giá trị tồn kho.",measure:"rate",kh:[0.25,0.25,0.25,0.25,0.25,0.25,0.25,0.25,0.25,0.25,0.25,0.25]},
      {code:"KHO-04",label:"Tỷ lệ cấp phát đúng – đủ – đúng hạn",dir:"H",w:10,unit:"%",note:"Cho sản xuất và giao hàng.",measure:"rate",kh:[8.1667,8.1667,8.1667,8.1667,8.1667,8.1667,8.1667,8.1667,8.1667,8.1667,8.1667,8.1667]},
      {code:"KHO-05",label:"Tỷ lệ hư hỏng/mất mát kho",dir:"L",w:10,unit:"%",note:"≤0.2% giá trị.",measure:"rate",kh:[0.0167,0.0167,0.0167,0.0167,0.0167,0.0167,0.0167,0.0167,0.0167,0.0167,0.0167,0.0167]},
      {code:"KHO-06",label:"Thời gian xử lý nhập kho (Dock-to-stock)",dir:"L",w:10,unit:"giờ",note:"≤24h.",measure:"rate",kh:[2.0,2.0,2.0,2.0,2.0,2.0,2.0,2.0,2.0,2.0,2.0,2.0]},
      {code:"KHO-07",label:"Thời gian xử lý xuất kho",dir:"L",w:8,unit:"giờ",note:"≤12h.",measure:"rate",kh:[1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0]},
      {code:"KHO-08",label:"Tuân thủ an toàn kho & PCCC (audit)",dir:"H",w:10,unit:"điểm",note:"Audit nội bộ.",measure:"flow",kh:[7.0833,7.0833,7.0833,7.0833,7.0833,7.0833,7.0833,7.0833,7.0833,7.0833,7.0833,7.0833]},
      {code:"KHO-09",label:"Tỷ lệ chứng từ kho hoàn chỉnh",dir:"H",w:10,unit:"%",note:"Đủ phiếu, ký nhận, đối soát.",measure:"rate",kh:[8.3333,8.3333,8.3333,8.3333,8.3333,8.3333,8.3333,8.3333,8.3333,8.3333,8.3333,8.3333]},
      {code:"KHO-10",label:"Chất lượng báo cáo tuần kho",dir:"H",w:10,unit:"%",note:"Theo CIS workflow.",measure:"rate",kh:[8.3333,8.3333,8.3333,8.3333,8.3333,8.3333,8.3333,8.3333,8.3333,8.3333,8.3333,8.3333]},
    ]
  },
  "GIAO HÀNG": {
    owner:"Lê Hoàng Đức", dept:"GIAO HÀNG", color:"#fb923c",
    kpis:[
      {code:"GH-01",label:"OTD tổng (On-time delivery)",dir:"H",w:12,unit:"%",note:"Chuẩn điều hành CIS.",measure:"rate",kh:[7.9167,7.9167,7.9167,7.9167,7.9167,7.9167,7.9167,7.9167,7.9167,7.9167,7.9167,7.9167]},
      {code:"GH-02",label:"Tỷ lệ giao đủ (In-full)",dir:"H",w:10,unit:"%",note:"Đúng số lượng, đủ phụ kiện.",measure:"rate",kh:[8.1667,8.1667,8.1667,8.1667,8.1667,8.1667,8.1667,8.1667,8.1667,8.1667,8.1667,8.1667]},
      {code:"GH-03",label:"Tỷ lệ giao đúng chứng từ",dir:"H",w:10,unit:"%",note:"Hóa đơn/phiếu xuất/COC.",measure:"rate",kh:[8.25,8.25,8.25,8.25,8.25,8.25,8.25,8.25,8.25,8.25,8.25,8.25]},
      {code:"GH-04",label:"Chi phí logistics/Doanh thu",dir:"L",w:10,unit:"%",note:"Mục tiêu điều hành; bám kế hoạch chi phí.",measure:"rate",kh:[0.2083,0.2083,0.2083,0.2083,0.2083,0.2083,0.2083,0.2083,0.2083,0.2083,0.2083,0.2083]},
      {code:"GH-05",label:"Tỷ lệ hoàn trả do lỗi giao hàng",dir:"L",w:10,unit:"%",note:"≤0.5% đơn.",measure:"rate",kh:[0.0417,0.0417,0.0417,0.0417,0.0417,0.0417,0.0417,0.0417,0.0417,0.0417,0.0417,0.0417]},
      {code:"GH-06",label:"Tỷ lệ khiếu nại giao hàng xử lý ≤48h",dir:"H",w:10,unit:"%",note:"Phối hợp PKD.",measure:"rate",kh:[7.5,7.5,7.5,7.5,7.5,7.5,7.5,7.5,7.5,7.5,7.5,7.5]},
      {code:"GH-07",label:"Tỷ lệ tuân thủ lịch giao theo kế hoạch SX",dir:"H",w:8,unit:"%",note:"Liên kết kế hoạch tháng.",measure:"rate",kh:[7.9167,7.9167,7.9167,7.9167,7.9167,7.9167,7.9167,7.9167,7.9167,7.9167,7.9167,7.9167]},
      {code:"GH-08",label:"Năng suất giao hàng (đơn/ngày)",dir:"H",w:10,unit:"đơn/ngày",note:"Index baseline.",measure:"flow",kh:[8.3333,8.3333,8.3333,8.3333,8.3333,8.3333,8.3333,8.3333,8.3333,8.3333,8.3333,8.3333]},
      {code:"GH-09",label:"An toàn vận chuyển (sự cố nghiêm trọng)",dir:"L",w:10,unit:"case",note:"0 sự cố nghiêm trọng.",measure:"flow",kh:[0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0]},
      {code:"GH-10",label:"Chất lượng báo cáo tuần giao hàng",dir:"H",w:10,unit:"%",note:"Theo CIS workflow.",measure:"rate",kh:[8.3333,8.3333,8.3333,8.3333,8.3333,8.3333,8.3333,8.3333,8.3333,8.3333,8.3333,8.3333]},
    ]
  },
  "CƠ ĐIỆN": {
    owner:"Lê Văn Phong", dept:"CƠ ĐIỆN", color:"#60a5fa",
    kpis:[
      {code:"CD-01",label:"Uptime thiết bị sản xuất (độ sẵn sàng)",dir:"H",w:12,unit:"%",note:"Giảm downtime.",measure:"rate",kh:[7.9167,7.9167,7.9167,7.9167,7.9167,7.9167,7.9167,7.9167,7.9167,7.9167,7.9167,7.9167]},
      {code:"CD-02",label:"MTTR (thời gian sửa chữa trung bình)",dir:"L",w:10,unit:"giờ",note:"≤4h.",measure:"rate",kh:[0.3333,0.3333,0.3333,0.3333,0.3333,0.3333,0.3333,0.3333,0.3333,0.3333,0.3333,0.3333]},
      {code:"CD-03",label:"PM Compliance (bảo trì định kỳ đúng hạn)",dir:"H",w:10,unit:"%",note:"≥95%.",measure:"rate",kh:[7.9167,7.9167,7.9167,7.9167,7.9167,7.9167,7.9167,7.9167,7.9167,7.9167,7.9167,7.9167]},
      {code:"CD-04",label:"Số sự cố lặp lại (repeat breakdown)",dir:"L",w:10,unit:"case",note:"≤2 case/tháng.",measure:"flow",kh:[0.1667,0.1667,0.1667,0.1667,0.1667,0.1667,0.1667,0.1667,0.1667,0.1667,0.1667,0.1667]},
      {code:"CD-05",label:"Chi phí cơ điện/bảo trì so với ngân sách",dir:"L",w:10,unit:"VND",note:"Proxy: nhóm chi phí SX chung (TK627) tổng plan.",measure:"flow",kh:[2924482175.5986,2924482175.5986,2924482175.5986,2924482175.5986,2924482175.5986,2924482175.5986,2924482175.5986,2924482175.5986,2924482175.5986,2924482175.5986,2924482175.5986,2924482175.5986]},
      {code:"CD-06",label:"Tiết kiệm điện năng (kWh/Output index)",dir:"H",w:10,unit:"index",note:"Index baseline.",measure:"flow",kh:[8.3333,8.3333,8.3333,8.3333,8.3333,8.3333,8.3333,8.3333,8.3333,8.3333,8.3333,8.3333]},
      {code:"CD-07",label:"An toàn điện – PCCC (vi phạm nghiêm trọng)",dir:"L",w:8,unit:"case",note:"0 vi phạm nghiêm trọng.",measure:"flow",kh:[0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0]},
      {code:"CD-08",label:"Tỷ lệ nghiệm thu sửa chữa đúng quy trình",dir:"H",w:10,unit:"%",note:"Đầy đủ biên bản/phiếu sửa chữa.",measure:"rate",kh:[8.3333,8.3333,8.3333,8.3333,8.3333,8.3333,8.3333,8.3333,8.3333,8.3333,8.3333,8.3333]},
      {code:"CD-09",label:"Lead time xử lý yêu cầu cơ điện",dir:"L",w:10,unit:"giờ",note:"≤24h cho yêu cầu thường.",measure:"rate",kh:[2.0,2.0,2.0,2.0,2.0,2.0,2.0,2.0,2.0,2.0,2.0,2.0]},
      {code:"CD-10",label:"Chất lượng báo cáo tuần cơ điện",dir:"H",w:10,unit:"%",note:"Theo CIS workflow.",measure:"rate",kh:[8.3333,8.3333,8.3333,8.3333,8.3333,8.3333,8.3333,8.3333,8.3333,8.3333,8.3333,8.3333]},
    ]
  },
  "PKD": {
    owner:"Đào Nguyên Ngọc", dept:"PKD", color:"#f472b6",
    kpis:[
      {code:"PKD-01",label:"Doanh thu kế hoạch toàn công ty",dir:"H",w:20,unit:"VND",note:"Nguồn: Target tháng 2026 (tổng).",measure:"flow",kh:[11544509042.963,12944509042.963,19262509042.963,22062813166.9136,22562813166.9136,22819956024.0564,24312764367.0194,24812764367.0194,24312764367.0194,23204725076.2787,21704725076.2787,22204725076.2787]},
      {code:"PKD-02",label:"Doanh thu kế hoạch nhóm THÉP",dir:"H",w:12,unit:"VND",note:"Nguồn: Target tháng 2026; nhóm Thép.",measure:"flow",kh:[6572905151.1111,7072905151.1111,12740905151.1111,13984765022.716,14484765022.716,14741907879.8589,15142123630.2293,15642123630.2293,15142123630.2293,14515074382.4515,13515074382.4515,14015074382.4515]},
      {code:"PKD-03",label:"Doanh thu kế hoạch nhóm NHÔM",dir:"H",w:12,unit:"VND",note:"Nguồn: Target tháng 2026; nhóm Nhôm.",measure:"flow",kh:[4971603891.8519,5871603891.8519,6521603891.8519,8078048144.1975,8078048144.1975,8078048144.1975,9170640736.7901,9170640736.7901,9170640736.7901,8689650693.8272,8189650693.8272,8189650693.8272]},
      {code:"PKD-04",label:"Tăng trưởng doanh thu YoY",dir:"H",w:10,unit:"%",note:"Cam kết 2026: +15% vs 2025.",measure:"rate",kh:[1.25,1.25,1.25,1.25,1.25,1.25,1.25,1.25,1.25,1.25,1.25,1.25]},
      {code:"PKD-05",label:"Gross Margin % (proxy từ biến phí)",dir:"H",w:10,unit:"%",note:"Proxy: 1 - (Biến phí/DT). Biến phí ratio từ kế hoạch chi phí.",measure:"rate",kh:[2.7717,2.7717,2.7717,2.7717,2.7717,2.7717,2.7717,2.7717,2.7717,2.7717,2.7717,2.7717]},
      {code:"PKD-06",label:"Win rate (đơn trúng/báo giá)",dir:"H",w:8,unit:"%",note:"Target điều hành; có thể hiệu chỉnh theo ngành.",measure:"rate",kh:[2.9167,2.9167,2.9167,2.9167,2.9167,2.9167,2.9167,2.9167,2.9167,2.9167,2.9167,2.9167]},
      {code:"PKD-07",label:"DSO",dir:"L",w:8,unit:"days",note:"Chuẩn điều hành cash.",measure:"flow",kh:[3.75,3.75,3.75,3.75,3.75,3.75,3.75,3.75,3.75,3.75,3.75,3.75]},
      {code:"PKD-08",label:"Tỷ lệ thu hồi công nợ đúng hạn",dir:"H",w:8,unit:"%",note:"Phối hợp TCKT; KPI liên phòng.",measure:"rate",kh:[7.9167,7.9167,7.9167,7.9167,7.9167,7.9167,7.9167,7.9167,7.9167,7.9167,7.9167,7.9167]},
      {code:"PKD-09",label:"Tỷ lệ khiếu nại khách hàng liên quan dịch vụ bán hàng",dir:"L",w:6,unit:"case/100đơn",note:"Proxy; chi tiết theo CRM.",measure:"flow",kh:[0.0833,0.0833,0.0833,0.0833,0.0833,0.0833,0.0833,0.0833,0.0833,0.0833,0.0833,0.0833]},
      {code:"PKD-10",label:"Chất lượng báo cáo tuần (đúng hạn/đủ dữ liệu)",dir:"H",w:6,unit:"%",note:"Theo CIS workflow.",measure:"rate",kh:[8.3333,8.3333,8.3333,8.3333,8.3333,8.3333,8.3333,8.3333,8.3333,8.3333,8.3333,8.3333]},
    ]
  },
  "TCKT": {
    owner:"Nguyễn Tiến Duẩn", dept:"TCKT", color:"#f59e0b",
    kpis:[
      {code:"TC-01",label:"Tổng biến phí kế hoạch (proxy)",dir:"L",w:18,unit:"VND",note:"Target biến phí tổng từ kế hoạch; phân bổ theo seasonality DT.",measure:"flow",kh:[7705154890.129,8639557280.5672,12856381782.5592,14725389544.9689,15059104684.4111,15230729613.2672,16227075101.932,16560790241.3742,16227075101.932,15487536129.0979,14486390710.7712,14820105850.2135]},
      {code:"TC-02",label:"Tổng chi phí gián tiếp kế hoạch (TCKT quản lý)",dir:"L",w:12,unit:"VND",note:"Nguồn: KH Doanh thu-chi phí; phân bổ theo seasonality DT.",measure:"flow",kh:[2846801359.1876,3192032316.0027,4750010305.4011,5440547214.033,5563843984.3241,5627253751.9024,5995370646.6043,6118667416.8954,5995370646.6043,5722135314.7964,5352245003.9231,5475541774.2142]},
      {code:"TC-03",label:"Tổng chi phí quản lý kế hoạch",dir:"L",w:10,unit:"VND",note:"Nguồn: KH Doanh thu-chi phí; phân bổ theo seasonality DT.",measure:"flow",kh:[994549528.229,1115158324.5268,1659448592.3907,1900692385.0031,1943766955.1094,1965919591.1641,2094523746.4128,2137598316.5191,2094523746.4128,1999067114.1935,1869843403.8745,1912917973.9808]},
      {code:"TC-04",label:"Chi phí tài chính kế hoạch",dir:"L",w:10,unit:"VND",note:"Nguồn: KH Doanh thu-chi phí; phân bổ theo seasonality DT.",measure:"flow",kh:[249020308.1407,279218944.5747,415501076.7102,475904909.67,486690136.9679,492236825.2925,524437379.8744,535222607.1723,524437379.8744,500536468.6633,468180786.7697,478966014.0676]},
      {code:"TC-05",label:"Tiết kiệm chi phí thường xuyên (OPEX saving)",dir:"H",w:10,unit:"%",note:"Policy: tiết kiệm 2% tổng dự trù chi; thưởng 50% saving (6 tháng/lần).",measure:"rate",kh:[0.1667,0.1667,0.1667,0.1667,0.1667,0.1667,0.1667,0.1667,0.1667,0.1667,0.1667,0.1667]},
      {code:"TC-06",label:"CFO (Operating cash flow) dương",dir:"L",w:10,unit:"pass/fail",note:"1= đạt (CFO>0).",measure:"flow",kh:[0.0833,0.0833,0.0833,0.0833,0.0833,0.0833,0.0833,0.0833,0.0833,0.0833,0.0833,0.0833]},
      {code:"TC-07",label:"DSO",dir:"L",w:8,unit:"days",note:"Guardrail cash; đồng bộ với PKD.",measure:"flow",kh:[3.75,3.75,3.75,3.75,3.75,3.75,3.75,3.75,3.75,3.75,3.75,3.75]},
      {code:"TC-08",label:"Sai sót báo cáo tài chính/thuế",dir:"L",w:8,unit:"%",note:"≤1% lỗi.",measure:"rate",kh:[0.0833,0.0833,0.0833,0.0833,0.0833,0.0833,0.0833,0.0833,0.0833,0.0833,0.0833,0.0833]},
      {code:"TC-09",label:"Đúng hạn đóng báo cáo tháng (closing time)",dir:"H",w:7,unit:"days",note:"≤5 ngày sau chốt tháng (đổi Direction nếu cần).",measure:"flow",kh:[0.4167,0.4167,0.4167,0.4167,0.4167,0.4167,0.4167,0.4167,0.4167,0.4167,0.4167,0.4167]},
      {code:"TC-10",label:"Chất lượng báo cáo tuần TCKT",dir:"H",w:7,unit:"%",note:"Theo CIS workflow.",measure:"rate",kh:[8.3333,8.3333,8.3333,8.3333,8.3333,8.3333,8.3333,8.3333,8.3333,8.3333,8.3333,8.3333]},
    ]
  },
  "R&D": {
    owner:"R&D Team", dept:"R&D", color:"#67e8f9",
    kpis:[
      {code:"RD-01",label:"Doanh thu từ SP mới (target theo % DT kế hoạch)",dir:"H",w:18,unit:"VND",note:"10% tổng DT kế hoạch; phân bổ theo DT tháng.",measure:"flow",kh:[1154450904.2963,1294450904.2963,1926250904.2963,2206281316.6914,2256281316.6914,2281995602.4056,2431276436.7019,2481276436.7019,2431276436.7019,2320472507.6279,2170472507.6279,2220472507.6279]},
      {code:"RD-02",label:"Giảm cost BOM (tỷ lệ)",dir:"H",w:12,unit:"%",note:"Policy: tối ưu BOM ≥3% (gắn saving engine).",measure:"rate",kh:[0.25,0.25,0.25,0.25,0.25,0.25,0.25,0.25,0.25,0.25,0.25,0.25]},
      {code:"RD-03",label:"Số dự án SP mới đúng hạn",dir:"H",w:10,unit:"%",note:"≥90% milestone đúng hạn.",measure:"rate",kh:[7.5,7.5,7.5,7.5,7.5,7.5,7.5,7.5,7.5,7.5,7.5,7.5]},
      {code:"RD-04",label:"Tỷ lệ test pass lần đầu (FTR)",dir:"H",w:10,unit:"%",note:"First-time-right ≥90%.",measure:"rate",kh:[7.5,7.5,7.5,7.5,7.5,7.5,7.5,7.5,7.5,7.5,7.5,7.5]},
      {code:"RD-05",label:"Tỷ lệ lỗi do thiết kế trong tổng lỗi",dir:"L",w:10,unit:"%",note:"≤5%.",measure:"rate",kh:[0.4167,0.4167,0.4167,0.4167,0.4167,0.4167,0.4167,0.4167,0.4167,0.4167,0.4167,0.4167]},
      {code:"RD-06",label:"Tỷ lệ hoàn tất chứng nhận/roadmap",dir:"H",w:10,unit:"%",note:"Bám roadmap 2025–2027 (AMCA/AHRI/UL...).",measure:"rate",kh:[8.3333,8.3333,8.3333,8.3333,8.3333,8.3333,8.3333,8.3333,8.3333,8.3333,8.3333,8.3333]},
      {code:"RD-07",label:"Số cải tiến tối ưu cho SX (ECO)",dir:"H",w:8,unit:"case",note:"Proxy: ≥2 ECO/tháng; có thể chỉnh theo backlog.",measure:"flow",kh:[2.0,2.0,2.0,2.0,2.0,2.0,2.0,2.0,2.0,2.0,2.0,2.0]},
      {code:"RD-08",label:"Tiết kiệm chi phí hiện thực từ cải tiến (Eligible saving)",dir:"H",w:8,unit:"%",note:"Áp dụng policy thưởng 50% saving, tính 6 tháng/lần.",measure:"rate",kh:[0.1667,0.1667,0.1667,0.1667,0.1667,0.1667,0.1667,0.1667,0.1667,0.1667,0.1667,0.1667]},
      {code:"RD-09",label:"Chu kỳ phát triển SP (cycle time reduction)",dir:"H",w:7,unit:"%",note:"Giảm ≥15% so baseline.",measure:"rate",kh:[1.25,1.25,1.25,1.25,1.25,1.25,1.25,1.25,1.25,1.25,1.25,1.25]},
      {code:"RD-10",label:"Chất lượng báo cáo tuần R&D",dir:"H",w:7,unit:"%",note:"Theo CIS workflow.",measure:"rate",kh:[8.3333,8.3333,8.3333,8.3333,8.3333,8.3333,8.3333,8.3333,8.3333,8.3333,8.3333,8.3333]},
    ]
  },
  "QLCL": {
    owner:"Nguyễn Văn Tuấn", dept:"QLCL", color:"#34d399",
    kpis:[
      {code:"QC-01",label:"Defect rate (tổng)",dir:"L",w:16,unit:"%",note:"Guardrail chất lượng.",measure:"rate",kh:[0.125,0.125,0.125,0.125,0.125,0.125,0.125,0.125,0.125,0.125,0.125,0.125]},
      {code:"QC-02",label:"CAPA effectiveness (đóng đúng hạn & hiệu quả)",dir:"H",w:12,unit:"%",note:"≥90%.",measure:"rate",kh:[7.5,7.5,7.5,7.5,7.5,7.5,7.5,7.5,7.5,7.5,7.5,7.5]},
      {code:"QC-03",label:"IQC pass rate",dir:"H",w:10,unit:"%",note:"≥98%.",measure:"rate",kh:[8.1667,8.1667,8.1667,8.1667,8.1667,8.1667,8.1667,8.1667,8.1667,8.1667,8.1667,8.1667]},
      {code:"QC-04",label:"PQC pass rate",dir:"H",w:10,unit:"%",note:"≥98%.",measure:"rate",kh:[8.1667,8.1667,8.1667,8.1667,8.1667,8.1667,8.1667,8.1667,8.1667,8.1667,8.1667,8.1667]},
      {code:"QC-05",label:"FQC pass rate",dir:"H",w:10,unit:"%",note:"≥99%.",measure:"rate",kh:[8.25,8.25,8.25,8.25,8.25,8.25,8.25,8.25,8.25,8.25,8.25,8.25]},
      {code:"QC-06",label:"Thời gian xử lý khiếu nại chất lượng",dir:"L",w:10,unit:"days",note:"≤3 ngày.",measure:"flow",kh:[0.25,0.25,0.25,0.25,0.25,0.25,0.25,0.25,0.25,0.25,0.25,0.25]},
      {code:"QC-07",label:"Chi phí chất lượng (COPQ)/Doanh thu",dir:"L",w:8,unit:"%",note:"Proxy; nhập actual theo tháng.",measure:"rate",kh:[0.0833,0.0833,0.0833,0.0833,0.0833,0.0833,0.0833,0.0833,0.0833,0.0833,0.0833,0.0833]},
      {code:"QC-08",label:"Audit nội bộ ISO (điểm)",dir:"H",w:8,unit:"điểm",note:"≥85 điểm.",measure:"flow",kh:[7.0833,7.0833,7.0833,7.0833,7.0833,7.0833,7.0833,7.0833,7.0833,7.0833,7.0833,7.0833]},
      {code:"QC-09",label:"Tỷ lệ NCR lớn (major) = 0",dir:"L",w:8,unit:"case",note:"0 major NCR/năm.",measure:"flow",kh:[0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0]},
      {code:"QC-10",label:"Chất lượng báo cáo tuần QLCL",dir:"H",w:8,unit:"%",note:"Theo CIS workflow.",measure:"rate",kh:[8.3333,8.3333,8.3333,8.3333,8.3333,8.3333,8.3333,8.3333,8.3333,8.3333,8.3333,8.3333]},
    ]
  },
  "HCNS": {
    owner:"Hoàng Văn Sơn", dept:"HCNS", color:"#86efac",
    kpis:[
      {code:"HR-01",label:"Chi phí nhân sự gián tiếp theo ngân sách",dir:"L",w:14,unit:"VND",note:"CEO-level chuẩn: B1.1 + B2 + B3 (lương + BHXH + phúc lợi)",measure:"flow",kh:[1204653250.0,1204653250.0,1204653250.0,1204653250.0,1204653250.0,1204653250.0,1204653250.0,1204653250.0,1204653250.0,1204653250.0,1204653250.0,1204653250.0]},
      {code:"HR-02",label:"Tỷ lệ tuyển dụng đúng hạn",dir:"H",w:10,unit:"%",note:"≥95% vị trí đúng hạn.",measure:"rate",kh:[7.9167,7.9167,7.9167,7.9167,7.9167,7.9167,7.9167,7.9167,7.9167,7.9167,7.9167,7.9167]},
      {code:"HR-03",label:"Tỷ lệ nghỉ việc (turnover)",dir:"L",w:10,unit:"%",note:"Proxy; chỉnh theo thực tế.",measure:"rate",kh:[0.6667,0.6667,0.6667,0.6667,0.6667,0.6667,0.6667,0.6667,0.6667,0.6667,0.6667,0.6667]},
      {code:"HR-04",label:"Tỷ lệ hoàn thành đào tạo bắt buộc",dir:"H",w:10,unit:"%",note:"≥90%.",measure:"rate",kh:[7.5,7.5,7.5,7.5,7.5,7.5,7.5,7.5,7.5,7.5,7.5,7.5]},
      {code:"HR-05",label:"Điểm hài lòng nhân viên (eNPS/Survey)",dir:"H",w:10,unit:"điểm",note:"≥80/100.",measure:"flow",kh:[6.6667,6.6667,6.6667,6.6667,6.6667,6.6667,6.6667,6.6667,6.6667,6.6667,6.6667,6.6667]},
      {code:"HR-06",label:"Tuân thủ nội quy (vi phạm giảm)",dir:"H",w:10,unit:"%",note:"Giảm ≥10% vi phạm vs kỳ trước.",measure:"rate",kh:[0.8333,0.8333,0.8333,0.8333,0.8333,0.8333,0.8333,0.8333,0.8333,0.8333,0.8333,0.8333]},
      {code:"HR-07",label:"An toàn – PCCC (sự cố nghiêm trọng)",dir:"L",w:9,unit:"case",note:"0 sự cố nghiêm trọng.",measure:"flow",kh:[0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0]},
      {code:"HR-08",label:"Hiệu quả hành chính (ticket xử lý đúng hạn)",dir:"H",w:9,unit:"%",note:"≥95% đúng hạn.",measure:"rate",kh:[7.9167,7.9167,7.9167,7.9167,7.9167,7.9167,7.9167,7.9167,7.9167,7.9167,7.9167,7.9167]},
      {code:"HR-09",label:"Tuân thủ 5S & vệ sinh nhà xưởng (điểm audit)",dir:"H",w:9,unit:"điểm",note:"≥85.",measure:"flow",kh:[7.0833,7.0833,7.0833,7.0833,7.0833,7.0833,7.0833,7.0833,7.0833,7.0833,7.0833,7.0833]},
      {code:"HR-10",label:"Chất lượng báo cáo tuần HCNS",dir:"H",w:9,unit:"%",note:"Theo CIS workflow.",measure:"rate",kh:[8.3333,8.3333,8.3333,8.3333,8.3333,8.3333,8.3333,8.3333,8.3333,8.3333,8.3333,8.3333]},
      {code:"HR-11",label:"Chi phí nhân sự gián tiếp / Doanh thu",dir:"L",w:10,unit:"%",note:"Overhead ratio = 14.455.839.000 / Doanh thu kế hoạch 2026",measure:"rate",kh:[0.4783,0.4783,0.4783,0.4783,0.4783,0.4783,0.4783,0.4783,0.4783,0.4783,0.4783,0.4783]},
    ]
  },
  "PKD-BD": {
    owner:"Anh Đức BD", dept:"PKD-BD", color:"#fb923c",
    // Đức BD = BD nội địa + hỗ trợ chăm sóc NPP
    // Báo cáo: DT từng kênh NPP, BG phát hành, đơn hàng mới, pipeline BD nội địa
    kpis:[
      // ── DT TỪNG KÊNH NPP (Đức BD quản lý, hỗ trợ) ─────────────────────
      {code:"BD-01",label:"DT kênh NTK",            dir:"H",w:15,unit:"tỷ",kh:[3.5,3.9,5.8,6.6,6.8,6.8,7.3,7.4,7.3,7.0,6.5,6.7],note:"NPP NTK — kênh phân phối lớn nhất nội địa",measure:"flow"},
      {code:"BD-02",label:"DT kênh GALAXY",          dir:"H",w:10,unit:"tỷ",kh:[1.5,1.7,2.5,2.9,2.9,2.9,3.1,3.2,3.1,3.0,2.8,2.8],note:"NPP Galaxy",measure:"flow"},
      {code:"BD-03",label:"DT kênh IMP",             dir:"H",w:8,unit:"tỷ",kh:[1.0,1.1,1.7,1.9,2.0,2.0,2.1,2.1,2.1,2.0,1.9,1.9],note:"NPP IMP",measure:"flow"},
      {code:"BD-04",label:"DT kênh VNMEP",           dir:"H",w:7,unit:"tỷ",kh:[0.8,0.9,1.3,1.5,1.5,1.5,1.6,1.7,1.6,1.6,1.5,1.5],note:"NPP VNMEP",measure:"flow"},
      {code:"BD-05",label:"DT kênh MEPCO",           dir:"H",w:5,unit:"tỷ",kh:[0.5,0.6,0.9,1.0,1.0,1.0,1.1,1.1,1.1,1.0,1.0,1.0],note:"NPP MEPCO",measure:"flow"},
      {code:"BD-06",label:"DT KH Trực tiếp",         dir:"H",w:5,unit:"tỷ",kh:[1.0,1.1,1.7,1.9,2.0,2.0,2.1,2.1,2.1,2.0,1.9,1.9],note:"KH mua trực tiếp không qua NPP",measure:"flow"},
      // ── HOẠT ĐỘNG BD & BÁN HÀNG NỘI ĐỊA ───────────────────────────────
      {code:"BD-07",label:"Báo giá phát hành (số)",  dir:"H",w:8,unit:"BG",kh:[20,20,20,25,25,25,25,25,25,25,25,25],note:"Số lượng báo giá gửi ra trong tuần",measure:"flow"},
      {code:"BD-08",label:"Giá trị báo giá (tỷ)",    dir:"H",w:8,unit:"tỷ",kh:[60,60,60,80,80,80,80,80,80,80,80,80],note:"Tổng giá trị báo giá tuần",measure:"flow"},
      {code:"BD-09",label:"Đơn hàng nhận (số)",       dir:"H",w:8,unit:"ĐH",kh:[20,20,20,25,25,25,25,25,25,25,25,25],note:"Số PO/đơn hàng nội địa nhận trong tuần",measure:"flow"},
      {code:"BD-10",label:"Dự án mới đăng ký",        dir:"H",w:6,unit:"DA",kh:[8,8,8,10,10,10,10,10,10,10,10,10],note:"Dự án BD đưa vào pipeline mới",measure:"flow"},
      {code:"BD-11",label:"Gặp gỡ NPP / CĐT / TVTK", dir:"H",w:6,unit:"cuộc",kh:[5,5,5,6,6,6,6,6,6,6,6,6],note:"Số cuộc gặp, làm việc trực tiếp",measure:"flow"},
      {code:"BD-12",label:"Dự án spec-in NSCA",       dir:"H",w:5,unit:"DA",kh:[3,3,3,4,4,4,4,4,4,4,4,4],note:"NSCA được chỉ định vào hồ sơ thiết kế",measure:"flow"},
      {code:"BD-13",label:"Claim đang xử lý",          dir:"L",w:4,unit:"case",kh:[2,2,2,2,2,2,2,2,2,2,2,2],note:"Claim nội địa tồn đọng ≤2 case",measure:"stock"},
      {code:"BD-14",label:"BC tuần BD đúng hạn",       dir:"H",w:5,unit:"%",kh:[100,100,100,100,100,100,100,100,100,100,100,100],note:"CIS workflow",measure:"stock"},
    ]
  },
  "BO": {
    owner:"Chị Tâm BO", dept:"BO", color:"#a78bfa",
    kpis:[
      {code:"BO-01",label:"Hợp đồng ký mới",        dir:"H",w:25,unit:"HĐ",kh:[4,4,4,4,4,4,4,4,4,4,4,4],    note:"Số HĐ bán hàng ký trong tuần",measure:"flow"},
      {code:"BO-02",label:"Giá trị HĐ ký mới",      dir:"H",w:25,unit:"tỷ",kh:[4,4.5,6.5,7.5,7.5,7.6,8.1,8.3,8.1,7.7,7.2,7.4],note:"Tỷ VNĐ",measure:"flow"},
      {code:"BO-03",label:"Công nợ quá hạn",         dir:"L",w:20,unit:"tỷ",kh:[2,2,2,2,2,2,2,2,2,2,2,2],    note:"≤2 tỷ tồn đọng",measure:"stock"},
      {code:"BO-04",label:"Hóa đơn VAT xuất",        dir:"H",w:15,unit:"HĐ",kh:[20,20,20,20,20,20,20,20,20,20,20,20],note:"Số hóa đơn VAT xuất",measure:"flow"},
      {code:"BO-05",label:"Hồ sơ tồn đọng",          dir:"L",w:10,unit:"HS", kh:[3,3,3,3,3,3,3,3,3,3,3,3],    note:"≤3 hồ sơ chưa xử lý",measure:"stock"},
      {code:"BO-06",label:"BC tuần BO đúng hạn",      dir:"H",w:5, unit:"%", kh:[100,100,100,100,100,100,100,100,100,100,100,100],note:"CIS workflow",measure:"stock"},
    ]
  },
  "Int. Dept": {
    owner:"Anh Santi đẹp trai", dept:"Int. Dept", color:"#34d399",
    kpis:[
      {code:"INT-01",label:"DT xuất khẩu tuần",          dir:"H",w:30,unit:"tỷ", kh:[1.16,1.3,1.93,2.21,2.26,2.28,2.43,2.48,2.43,2.32,2.17,2.22],note:"Tổng DT XK tuần",measure:"flow"},
      {code:"INT-02",label:"Đơn hàng XK mới",            dir:"H",w:20,unit:"đơn",kh:[3,3,3,3,3,3,3,3,3,3,3,3],    note:"Số PO mới nhận",measure:"flow"},
      {code:"INT-03",label:"Đơn hàng giao đúng hạn",     dir:"H",w:20,unit:"%",  kh:[95,95,95,95,95,95,95,95,95,95,95,95],note:"OTD XK ≥95%",measure:"rate"},
      {code:"INT-04",label:"KH quốc tế mới tiếp cận",    dir:"H",w:15,unit:"KH", kh:[2,2,2,2,2,2,2,2,2,2,2,2],  note:"KH quốc tế mới/tuần",measure:"flow"},
      {code:"INT-05",label:"DT thị trường Mỹ",           dir:"H",w:8, unit:"tỷ", kh:[0.35,0.39,0.58,0.66,0.68,0.68,0.73,0.74,0.73,0.70,0.65,0.67],note:"~30% tổng XK",measure:"flow"},
      {code:"INT-06",label:"BC tuần Int. Dept đúng hạn", dir:"H",w:7, unit:"%",  kh:[100,100,100,100,100,100,100,100,100,100,100,100],note:"CIS workflow",measure:"stock"},
    ]
  },
};

/* KPI Scoring: 0–120 (capped), formula per direction */
const kpiScore = (actual, target, dir) => {
  if(actual==null||target==null) return null;
  if(dir==="L") {
    if(target===0) return actual===0 ? 100 : 0;
    return Math.min(120, Math.max(0, Math.round((target/actual)*100)));
  }
  if(dir==="B") return actual>=1 ? 100 : 0;
  return Math.min(120, Math.max(0, Math.round((actual/target)*100)));
};

const getActualFromRow = (deptKey, kpiCode, row) => {
  if(!row) return null;
  const RMAP = {
    "PKD": {
      "PKD-01": v => v.pkd?.dt     ?? null,
      "PKD-02": v => v.pkd?.dtThep ?? null,
      "PKD-03": v => v.pkd?.dtNhom ?? null,
      "PKD-05": v => v.pkd?.margin ?? null,
      "PKD-06": v => v.pkd?.winRate?? null,
      "PKD-07": v => v.pkd?.dso    ?? null,
      "PKD-09": v => v.pkd?.kn     ?? null,
      "PKD-10": () => 100,
      "PKD-11": v => v.pkd?.dtVanEi   ?? null,
      "PKD-12": v => v.pkd?.dtVav     ?? null,
      "PKD-13": v => v.pkd?.dtCuaGio  ?? null,
      "PKD-14": v => v.pkd?.dtVcd     ?? null,
      "PKD-15": v => v.pkd?.dtTamNan  ?? null,
      "PKD-16": v => v.pkd?.xkRatio   ?? null,
    },
    "PKD-BD": {
      "BD-01": v => v.bd?.dtNtk      ?? null,
      "BD-02": v => v.bd?.dtGalaxy   ?? null,
      "BD-03": v => v.bd?.dtImp      ?? null,
      "BD-04": v => v.bd?.dtVnmep    ?? null,
      "BD-05": v => v.bd?.dtMepco    ?? null,
      "BD-06": v => v.bd?.dtTrucTiep ?? null,
      "BD-07": v => v.bd?.bgTong     ?? null,
      "BD-08": v => v.bd?.gtBg       ?? null,
      "BD-09": v => v.bd?.dhMoi      ?? null,
      "BD-10": v => v.bd?.duAnMoi    ?? null,
      "BD-11": v => v.bd?.gapGo      ?? null,
      "BD-12": v => v.bd?.specIn     ?? null,
      "BD-13": v => v.bd?.claim      ?? null,
      "BD-14": () => 100,
    },
    "BO": {
      "BO-01": v => v.bo?.hdKyMoi      ?? null,
      "BO-02": v => v.bo?.gtHdKy       ?? null,
      "BO-03": v => v.bo?.congNoQuaHan ?? null,
      "BO-04": v => v.bo?.hoaDonXuat   ?? null,
      "BO-05": v => v.bo?.hsTonDong    ?? null,
      "BO-06": () => 100,
    },
    "Int. Dept": {
      "INT-01": v => v.intl?.dtXk   ?? null,
      "INT-02": v => v.intl?.donMoi ?? null,
      "INT-03": v => v.intl?.otd    ?? null,
      "INT-04": v => v.intl?.khMoi  ?? null,
      "INT-05": v => v.intl?.dtMy   ?? null,
      "INT-06": () => 100,
    },
  };
  const fn = (RMAP[deptKey]||{})[kpiCode];
  return fn ? fn(row) : null;
};


const getActual = (deptKey, kpiCode, thang, wkDataArr) => {
  const _wkData = wkDataArr || WK;
  // Chỉ dùng tuần có data thật
  const wks = _wkData.filter(w => w.thang===thang && w.hasData===true);
  if(wks.length===0) return null;
  const last = wks[wks.length-1];
  const MAP = {
    "PKD": {
      // Bộc Béo - chỉ map DT tổng + ngành hàng + KPI quản lý
      "PKD-01": v => v.pkd?.dt != null ? v.pkd.dt * wks.length : null,
      "PKD-02": v => v.pkd?.dtThep    || null,
      "PKD-03": v => v.pkd?.dtNhom    || null,
      "PKD-05": v => v.pkd?.margin    || null,
      "PKD-06": v => v.pkd?.winRate   || null,
      "PKD-07": v => v.pkd?.dso       || null,
      "PKD-09": v => v.pkd?.kn        || null,
      "PKD-10": v => 100,
      "PKD-11": v => v.pkd?.dtVanEi   || null,
      "PKD-12": v => v.pkd?.dtVav     || null,
      "PKD-13": v => v.pkd?.dtCuaGio  || null,
      "PKD-14": v => v.pkd?.dtVcd     || null,
      "PKD-15": v => v.pkd?.dtTamNan  || null,
      "PKD-16": v => v.pkd?.xkRatio   || null,
    },
    "PKD-BD": {
      // Đức BD - NPP breakdown + BD activities
      "BD-01": v => v.bd?.dtNtk      || null,
      "BD-02": v => v.bd?.dtGalaxy   || null,
      "BD-03": v => v.bd?.dtImp      || null,
      "BD-04": v => v.bd?.dtVnmep    || null,
      "BD-05": v => v.bd?.dtMepco    || null,
      "BD-06": v => v.bd?.dtTrucTiep || null,
      "BD-07": v => v.bd?.bgTong     || null,
      "BD-08": v => v.bd?.gtBg       || null,
      "BD-09": v => v.bd?.dhMoi      || null,
      "BD-10": v => v.bd?.duAnMoi    || null,
      "BD-11": v => v.bd?.gapGo      || null,
      "BD-12": v => v.bd?.specIn     || null,
      "BD-13": v => v.bd?.claim      || null,
      "BD-14": v => 100,
    },
    "TCKT": {
      "TC-01": v => v.tckt?.bienPhi || null,
      "TC-02": v => v.tckt?.cpGt    || null,
      "TC-03": v => v.tckt?.cpQL    || null,
      "TC-04": v => v.tckt?.laiVay  || null,
      "TC-05": v => v.tckt?.tietKiem|| null,
      "TC-07": v => v.tckt?.dso     || null,
      "TC-11": v => v.tckt?.pt      || null,
      "TC-12": v => v.tckt?.qh      || null,
      "TC-13": v => v.tckt?.vayNH   || null,
      "TC-14": v => v.tckt?.tienMat || null,
      "TC-15": v => v.tckt?.thuTH   || null,
      "TC-16": v => v.tckt?.ncc     || null,
    },
    "SX THÉP": {
      "SX-T-01": v => v.thep?.tmc    || null,
      "SX-T-02": v => v.thep?.ht     || null,   // % HT KH sản xuất
      "SX-T-03": v => v.thep?.otd    || null,
      "SX-T-04": v => v.thep?.defect || null,
      "SX-T-07": v => v.thep?.oee    || null,
      "SX-T-09": v => v.thep?.ns5s   || null,
      "SX-T-10": v => 100,
      "SX-T-11": v => v.thep?.vanEi  || null,   // Sản lượng Van EI/E (cái)
      "SX-T-12": v => v.thep?.vav    || null,   // Sản lượng VAV/CAV (cái)
    },
    "SX NHÔM": {
      "SX-A-01": v => v.nhom?.dt     || null,
      "SX-A-02": v => v.nhom?.ht     || null,
      "SX-A-03": v => v.nhom?.otd    || null,
      "SX-A-04": v => v.nhom?.defect || null,
      "SX-A-07": v => v.nhom?.oee    || null,
      "SX-A-09": v => v.nhom?.ns5s   || null,
      "SX-A-10": v => 100,
      "SX-A-11": v => v.nhom?.cuaGio || null,   // Sản lượng Cửa gió (cái)
    },
    "QLCL": {
      "QC-04": v => v.qlcl?.fpy  || null,
      "QC-05": v => v.qlcl?.fpy  || null,
      "QC-06": v => v.qlcl?.kn   || null,
      "QC-02": v => v.qlcl?.capa || null,
      "QC-10": v => 100,
    },
    "CƠ ĐIỆN": {
      "CD-01": v => v.cd?.uptime       || null,
      "CD-02": v => v.cd?.mttr         || null,
      "CD-03": v => v.cd?.pmCompliance || null,
      "CD-04": v => v.cd?.sucoi        || null,
      "CD-10": v => 100,
    },
    "GIAO HÀNG": {
      "GH-01": v => v.gh?.otd       || null,
      "GH-02": v => v.gh?.inFull    || null,
      "GH-04": v => v.gh?.cpLogistic|| null,
      "GH-05": v => v.gh?.hoanTra   || null,
      "GH-10": v => 100,
      "GH-11": v => v.gh?.luot      || null,
    },
    "KHO": {
      "KHO-01": v => v.kho?.accuracy  || null,
      "KHO-02": v => v.kho?.vongQuay  || null,
      "KHO-03": v => v.kho?.cham      || null,
      "KHO-05": v => v.kho?.huHong    || null,
      "KHO-10": v => 100,
    },
    "CUNG ỨNG": {
      "MH-01": v => v.cu?.dungHan  || null,
      "MH-02": v => v.cu?.thieu    || null,
      "MH-04": v => v.cu?.nccDat   || null,
      "MH-05": v => v.cu?.leadTime || null,
      "MH-10": v => 100,
    },
    "HCNS": {
      "HR-01": v => v.hcns?.cpNS      || null,
      "HR-02": v => v.hcns?.tuyenDung || null,
      "HR-03": v => v.hcns?.nghiViec  || null,
      "HR-04": v => v.hcns?.daoTao    || null,
      "HR-05": v => v.hcns?.haiLong   || null,
      "HR-10": v => 100,
    },
    "BO": {
      "BO-01": v => v.bo?.hdKyMoi      || null,
      "BO-02": v => v.bo?.gtHdKy       || null,
      "BO-03": v => v.bo?.congNoQuaHan || null,
      "BO-04": v => v.bo?.hoaDonXuat   || null,
      "BO-05": v => v.bo?.hsTonDong    || null,
      "BO-06": v => 100,
    },
    "Int. Dept": {
      "INT-01": v => v.intl?.dtXk   || null,
      "INT-02": v => v.intl?.donMoi || null,
      "INT-03": v => v.intl?.otd    || null,
      "INT-04": v => v.intl?.khMoi  || null,
      "INT-05": v => v.intl?.dtMy   || null,
      "INT-06": v => 100,
    },
    "R&D": {
      "RD-01": v => v.rd?.dtSpMoi  || null,
      "RD-02": v => v.rd?.giamCost || null,
      "RD-03": v => v.rd?.duAn     || null,
      "RD-04": v => v.rd?.ftr      || null,
      "RD-10": v => 100,
    },
  };
  const deptMap = MAP[deptKey]||{};
  const fn = deptMap[kpiCode];
  return fn ? fn(last) : null;
};

/* ─── ĐIỂM KPI THÁNG — 3 loại measure ────────────────────────────
   flow  = tích lũy: cộng dồn tất cả tuần trong tháng → so vs KH tháng
   stock = trạng thái: lấy giá trị tuần CUỐI trong tháng → so vs KH tháng
   rate  = tỷ lệ: trung bình các tuần trong tháng → so vs KH tháng
────────────────────────────────────────────────────────────────── */
const getActualMonth = (deptKey, kpiCode, measure, month, wkDataArr) => {
  const _wd = wkDataArr || WK;
  const wks = _wd.filter(w => w.thang === month && w.hasData === true);
  if(!wks.length) return null;
  if(measure === "flow") {
    const vals = wks.map(w => getActualFromRow(deptKey, kpiCode, w)).filter(v => v!=null);
    return vals.length ? vals.reduce((a,b)=>a+b,0) : null;
  }
  if(measure === "stock") {
    const last = wks[wks.length - 1];
    return getActualFromRow(deptKey, kpiCode, last);
  }
  // rate: average
  const vals = wks.map(w => getActualFromRow(deptKey, kpiCode, w)).filter(v => v!=null);
  return vals.length ? vals.reduce((a,b)=>a+b,0)/vals.length : null;
};

/* Điểm 1 KPI trong tháng */
const kpiScoreMonth = (deptKey, k, month, wkDataArr) => {
  const measure = k.measure || "flow";
  const actual = getActualMonth(deptKey, k.code, measure, month, wkDataArr);
  const target = k.kh[month - 1];
  return kpiScore(actual, target, k.dir);
};

/* Điểm phòng ban tháng = weighted avg tất cả KPI trong tháng */
const deptScore = (dept, month, wkDataArr) => {
  const d = KPI_MASTER[dept];
  if(!d) return null;
  const _wd = wkDataArr || WK;
  const wks = _wd.filter(w => w.thang === month && w.hasData === true);
  if(!wks.length) return null;
  let totalW = 0, totalWS = 0;
  d.kpis.forEach(k => {
    const s = kpiScoreMonth(dept, k, month, _wd);
    if(s != null) { totalWS += s * k.w; totalW += k.w; }
  });
  return totalW > 0 ? Math.round(totalWS/totalW) : null;
};

/* Backward compat: deptScoreWeek vẫn giữ cho các chỗ cũ gọi */
const deptScoreWeek = (dept, weekNum, wkDataArr) => {
  const _wd = wkDataArr || WK;
  const wkRow = _wd.find(w => w.w === weekNum && w.hasData === true);
  if(!wkRow) return null;
  return deptScore(dept, wkRow.thang || 1, _wd);
};

/* Điểm KPI quý/năm = trung bình các điểm tháng */
const periodAvg = (dept, months, wkDataArr) => {
  const scores = months.map(m => deptScore(dept, m, wkDataArr)).filter(s => s!=null);
  return scores.length > 0 ? Math.round(scores.reduce((a,b)=>a+b,0)/scores.length) : null;
};

/* Score → color */
const scoreColor = (s) => {
  if(s==null) return T.muted;
  if(s>=100) return T.green;
  if(s>=85)  return T.yellow;
  return T.red;
};

/* Score → label */
const scoreLabel = (s) => {
  if(s==null) return "--";
  if(s>=110) return "Xuất sắc";
  if(s>=100) return "Đạt";
  if(s>=85)  return "Theo dõi";
  return "Cảnh báo";
};

/* Actuals from WK data (auto-map to KPI) */
/* Weekly KPI targets (phân rã tuần từ tháng) */
const weeklyTarget = (kh_month, weeksInMonth) => kh_month / weeksInMonth;



/* ═══════════════════════════════════════════════════════════
   ISSUES & REPORTS  (seed)
═══════════════════════════════════════════════════════════ */
// SEED_ISSUES đã xóa — dùng data thật từ Supabase
const SEED_ISSUES = [];
// Không dùng seed data — load từ Supabase
const SEED_REPORTS = [];

/* ═══════════════════════════════════════════════════════════
   BUILD WEEKLY_DATA DEPT PAYLOAD từ KPI form values
   Mapping: KPI code → weekly_data JSONB field
═══════════════════════════════════════════════════════════ */
const buildDeptPayload = (dept, kpiMap) => {
  const p = {};
  switch(dept) {
    case "PKD":
      // Bộc Béo: DT tổng + cơ cấu ngành hàng + KPI quản lý
      p.pkd = {
        dt:        kpiMap["PKD-01"],
        dtThep:    kpiMap["PKD-02"],
        dtNhom:    kpiMap["PKD-03"],
        dtVanEi:   kpiMap["PKD-11"],
        dtVav:     kpiMap["PKD-12"],
        dtCuaGio:  kpiMap["PKD-13"],
        dtVcd:     kpiMap["PKD-14"],
        dtTamNan:  kpiMap["PKD-15"],
        margin:    kpiMap["PKD-05"],
        winRate:   kpiMap["PKD-06"],
        dso:       kpiMap["PKD-07"],
        kn:        kpiMap["PKD-09"],
        xkRatio:   kpiMap["PKD-16"],
      };
      break;
    case "PKD-BD":
      // Đức BD: DT từng NPP + BD activities + BG/ĐH nội địa
      p.bd = {
        dtNtk:      kpiMap["BD-01"],
        dtGalaxy:   kpiMap["BD-02"],
        dtImp:      kpiMap["BD-03"],
        dtVnmep:    kpiMap["BD-04"],
        dtMepco:    kpiMap["BD-05"],
        dtTrucTiep: kpiMap["BD-06"],
        bgTong:     kpiMap["BD-07"],
        gtBg:       kpiMap["BD-08"],
        dhMoi:      kpiMap["BD-09"],
        duAnMoi:    kpiMap["BD-10"],
        gapGo:      kpiMap["BD-11"],
        specIn:     kpiMap["BD-12"],
        claim:      kpiMap["BD-13"],
      };
      break;
    case "TCKT":
      p.tckt = {
        // Chi phí / P&L
        bienPhi:  kpiMap["TC-01"],
        cpGt:     kpiMap["TC-02"],
        cpQL:     kpiMap["TC-03"],
        laiVay:   kpiMap["TC-04"],
        tietKiem: kpiMap["TC-05"],
        dso:      kpiMap["TC-07"],
        // Balance sheet / Cash position
        pt:       kpiMap["TC-11"],
        qh:       kpiMap["TC-12"],
        vayNH:    kpiMap["TC-13"],
        tienMat:  kpiMap["TC-14"],
        thuTH:    kpiMap["TC-15"],
        ncc:      kpiMap["TC-16"],
        // Tổng vay = vayNH (đơn giản hóa, vayTDH nhập riêng nếu cần)
        tongVay:  kpiMap["TC-13"],
      };
      break;
    case "SX THÉP":
      p.thep = {
        ht:      kpiMap["SX-T-02"],   // % HT KH sản xuất
        defect:  kpiMap["SX-T-04"],
        oee:     kpiMap["SX-T-07"],
        ns5s:    kpiMap["SX-T-09"],
        tmc:     kpiMap["SX-T-01"],
        otd:     kpiMap["SX-T-03"],
        vanEi:   kpiMap["SX-T-11"],   // Sản lượng Van EI/E (cái)
        vav:     kpiMap["SX-T-12"],   // Sản lượng VAV/CAV (cái)
      };
      break;
    case "SX NHÔM":
      p.nhom = {
        ht:      kpiMap["SX-A-02"],   // % HT KH sản xuất
        defect:  kpiMap["SX-A-04"],
        oee:     kpiMap["SX-A-07"],
        ns5s:    kpiMap["SX-A-09"],
        dt:      kpiMap["SX-A-01"],
        otd:     kpiMap["SX-A-03"],
        cuaGio:  kpiMap["SX-A-11"],   // Sản lượng Cửa gió (cái)
      };
      break;
    case "QLCL":
      p.qlcl = { fpy: kpiMap["QC-04"] || kpiMap["QC-05"], kn: kpiMap["QC-06"],
                 capa: kpiMap["QC-02"], copq: kpiMap["QC-07"], iqc: kpiMap["QC-03"] };
      break;
    case "CƠ ĐIỆN":
      p.cd = { uptime: kpiMap["CD-01"], mttr: kpiMap["CD-02"], pmCompliance: kpiMap["CD-03"],
               sucoi: kpiMap["CD-04"], leadTime: kpiMap["CD-09"] };
      break;
    case "GIAO HÀNG":
      p.gh = { otd: kpiMap["GH-01"], inFull: kpiMap["GH-02"], cpLogistic: kpiMap["GH-04"],
               hoanTra: kpiMap["GH-05"], ns: kpiMap["GH-08"], luot: kpiMap["GH-11"] };
      break;
    case "KHO":
      p.kho = { accuracy: kpiMap["KHO-01"], vongQuay: kpiMap["KHO-02"], cham: kpiMap["KHO-03"],
                huHong: kpiMap["KHO-05"], ltNhap: kpiMap["KHO-06"] };
      break;
    case "CUNG ỨNG":
      p.cu = { dungHan: kpiMap["MH-01"], thieu: kpiMap["MH-02"], nccDat: kpiMap["MH-04"],
               leadTime: kpiMap["MH-05"], tietKiem: kpiMap["MH-07"] };
      break;
    case "HCNS":
      p.hcns = { cpNS: kpiMap["HR-01"], tuyenDung: kpiMap["HR-02"], nghiViec: kpiMap["HR-03"],
                 daoTao: kpiMap["HR-04"], haiLong: kpiMap["HR-05"] };
      break;
    case "BO":
      p.bo = { hdKyMoi: kpiMap["BO-01"], gtHdKy: kpiMap["BO-02"],
               congNoQuaHan: kpiMap["BO-03"], hoaDonXuat: kpiMap["BO-04"], hsTonDong: kpiMap["BO-05"] };
      break;
    case "Int. Dept":
      p.intl = { dtXk: kpiMap["INT-01"], donMoi: kpiMap["INT-02"],
                 otd: kpiMap["INT-03"], khMoi: kpiMap["INT-04"], dtMy: kpiMap["INT-05"] };
      break;
    case "R&D":
      p.rd = { dtSpMoi: kpiMap["RD-01"], giamCost: kpiMap["RD-02"], duAn: kpiMap["RD-03"],
               ftr: kpiMap["RD-04"], eco: kpiMap["RD-07"] };
      break;
    default: break;
  }
  // Xóa undefined keys
  Object.values(p).forEach(obj => { if(obj) Object.keys(obj).forEach(k => { if(obj[k]===undefined) delete obj[k]; }); });
  return p;
};


const sc = v => v>=90?T.green:v>=80?T.cyan:v>=70?T.yellow:v>=60?T.orange:T.red;
const kpiColor = (th, kh, inv=false) => {
  const pct = kh > 0 ? th/kh : 1;
  if(inv) return pct<=1.05?T.green:pct<=1.20?T.yellow:T.red;
  return pct>=0.95?T.green:pct>=0.80?T.yellow:T.red;
};
const fmt = v => v != null ? (Number.isInteger(v) ? v.toString() : v.toFixed(2)) : "—";
const fmtB = v => v != null ? `${Number(v).toFixed(2)}B` : "—";
const pct = (th, kh) => kh > 0 ? Math.round(th/kh*100) : 0;

const statusLabel = s => ({approved:"Đã duyệt",pending:"Chờ duyệt",revision:"Cần bổ sung",rejected:"Từ chối"}[s]||s);
const statusColor = s => ({approved:T.green,pending:T.yellow,revision:T.orange,rejected:T.red}[s]||T.muted);

/* ═══════════════════════════════════════════════════════════
   COMPONENTS
═══════════════════════════════════════════════════════════ */
function Av({u,sz=36}) {
  return (
    <div style={{width:sz,height:sz,borderRadius:"50%",background:u.color+"22",border:`1.5px solid ${u.color}55`,
      display:"flex",alignItems:"center",justifyContent:"center",fontSize:sz*0.30,fontWeight:800,color:u.color,flexShrink:0}}>
      {u.avatar}
    </div>
  );
}

// nd(val, hasData) → "—" nếu chưa có data thật
const nd  = (val, hasData) => hasData ? val : "—";
const ndB = (val, hasData) => hasData ? fmtB(val) : "—";

function KCard({label, value, unit, kh, trend, note, inv=false, big=false}) {
  const isNoData = value === "—" || value == null || value === undefined;
  const numVal = isNoData ? 0 : (parseFloat(value)||0);
  const c = isNoData ? T.dim : (kh != null ? kpiColor(numVal, kh, inv) : T.text);
  const pctVal = (!isNoData && kh != null) ? pct(numVal, kh) : null;
  const arrows = {up:"↑",down:"↓",flat:"→"};
  const arrowC = {up:T.green,down:T.red,flat:T.muted};
  return (
    <div style={{background:T.card,border:`1px solid ${T.border}`,borderRadius:10,padding:"14px 16px",position:"relative",overflow:"hidden",opacity:isNoData?0.55:1}}>
      <div style={{position:"absolute",top:0,left:0,width:3,height:"100%",background:isNoData?T.dim:c,borderRadius:"10px 0 0 10px"}}/>
      <div style={{fontSize:16,color:T.muted,letterSpacing:"1.2px",textTransform:"uppercase",marginBottom:6,paddingLeft:6}}>{label}</div>
      <div style={{display:"flex",alignItems:"baseline",gap:5,paddingLeft:6}}>
        <div style={{fontSize:big?40:30,fontWeight:900,color:isNoData?T.dim:c,fontFamily:"Calibri,sans-serif",lineHeight:1}}>
          {isNoData ? "—" : value}
        </div>
        {!isNoData && <div style={{fontSize:16,color:T.muted}}>{unit}</div>}
      </div>
      {kh != null && (
        <div style={{display:"flex",alignItems:"center",gap:8,marginTop:5,paddingLeft:6}}>
          <span style={{fontSize:16,color:T.muted}}>KH: {fmt(kh)} {unit}</span>
          {!isNoData && <span style={{fontSize:15,fontWeight:700,color:pctVal>=95?T.green:pctVal>=80?T.yellow:T.red}}>{pctVal}%</span>}
          {!isNoData && trend && <span style={{fontSize:17,color:arrowC[trend]}}>{arrows[trend]}</span>}
        </div>
      )}
      {isNoData
        ? <div style={{fontSize:15,color:T.dim,marginTop:4,paddingLeft:6}}>Chưa có báo cáo</div>
        : note && <div style={{fontSize:16,color:T.muted,marginTop:4,paddingLeft:6,lineHeight:1.4}}>{note}</div>
      }
    </div>
  );
}

function SectionTitle({children, sub, action}) {
  return (
    <div style={{display:"flex",alignItems:"flex-end",justifyContent:"space-between",marginBottom:14}}>
      <div>
        <div style={{fontSize:23,fontWeight:900,color:T.text,letterSpacing:"-0.3px"}}>{children}</div>
        {sub && <div style={{fontSize:16,color:T.muted,marginTop:2}}>{sub}</div>}
      </div>
      {action}
    </div>
  );
}

function PeriodTag({label, active, onClick}) {
  return (
    <button onClick={onClick} style={{padding:"4px 13px",borderRadius:20,fontSize:16,fontWeight:active?700:400,
      background:active?"rgba(37,99,235,0.2)":"transparent",
      color:active?T.accentHov:T.muted,
      border:active?`1px solid rgba(37,99,235,0.5)`:`1px solid ${T.border}`,
      cursor:"pointer",transition:"all 0.15s"}}>
      {label}
    </button>
  );
}

/* ── No-data placeholder ──────────────────────────────────── */
function NoDataBanner({week}) {
  return (
    <div style={{
      background:"rgba(96,165,250,0.06)",
      border:"1px dashed rgba(96,165,250,0.25)",
      borderRadius:12, padding:"18px 24px",
      display:"flex", alignItems:"center", gap:16, marginBottom:4
    }}>
      <div style={{fontSize:28}}>📭</div>
      <div>
        <div style={{fontSize:17,fontWeight:700,color:"#93c5fd"}}>
          Chưa có dữ liệu actual tuần {week}
        </div>
        <div style={{fontSize:15,color:T.muted,marginTop:3}}>
          Số liệu actual sẽ được cập nhật sau khi các phòng ban nộp báo cáo tuần và Admin phê duyệt.
          Hiện tại chỉ hiển thị <strong style={{color:T.text}}>KH (Kế hoạch)</strong> để tham chiếu.
        </div>
      </div>
    </div>
  );
}

function ChartEmpty({height=155, text="Chưa có dữ liệu"}) {
  return (
    <div style={{
      height, display:"flex", flexDirection:"column",
      alignItems:"center", justifyContent:"center", gap:8,
      background:"rgba(255,255,255,0.02)", borderRadius:8,
      border:"1px dashed rgba(255,255,255,0.07)"
    }}>
      <div style={{fontSize:28, opacity:0.3}}>📊</div>
      <div style={{fontSize:15, color:T.dim}}>{text}</div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   GAUGE
═══════════════════════════════════════════════════════════ */
function CHSGauge({score, size=180}) {
  const cx=90, cy=90, r=68;
  const hasScore = score != null && !isNaN(score);
  const safeScore = hasScore ? score : 0;
  const ang = -135 + (safeScore/100)*270;
  const pt = (a,rd) => ({x:cx+rd*Math.cos((a-90)*Math.PI/180),y:cy+rd*Math.sin((a-90)*Math.PI/180)});
  const arc = (a1,a2,rd) => {const s=pt(a1,rd),e=pt(a2,rd),l=(a2-a1)>180?1:0;return`M${s.x},${s.y}A${rd},${rd} 0 ${l} 1 ${e.x},${e.y}`;};
  const c = hasScore ? sc(safeScore) : T.dim;
  const ndp = pt(ang,52);
  const n1 = pt(ang+90,6), n2 = pt(ang-90,6);
  const status = !hasScore?"NO DATA":safeScore>=95?"HEALTHY":safeScore>=85?"WATCH":safeScore>=75?"RISK":"CRITICAL";
  const statusC = !hasScore?T.dim:safeScore>=95?T.green:safeScore>=85?T.cyan:safeScore>=75?T.yellow:T.red;
  return (
    <svg viewBox="0 0 180 135" style={{width:size,height:size*0.75,display:"block"}}>
      {[[-135,-45,T.red],[-45,0,T.orange],[0,45,T.yellow],[45,135,T.green]].map(([a1,a2,col],i)=>(
        <path key={i} d={arc(a1,a2,r)} fill="none" stroke={col} strokeWidth={10} strokeLinecap="round" opacity={0.15}/>
      ))}
      {hasScore && <path d={arc(-135,ang,r)} fill="none" stroke={c} strokeWidth={10} strokeLinecap="round"/>}
      {hasScore && <polygon points={`${ndp.x},${ndp.y} ${n1.x},${n1.y} ${n2.x},${n2.y}`} fill={c}/>}
      {hasScore && <circle cx={cx} cy={cy} r={4} fill={c}/>}
      <text x={cx} y={cy+20} textAnchor="middle" fill={hasScore?"white":T.dim} fontSize={hasScore?"31":"20"} fontWeight="900" fontFamily="Calibri,sans-serif">
        {hasScore ? safeScore.toFixed(1) : "—"}
      </text>
      <text x={cx} y={cy+33} textAnchor="middle" fill={statusC} fontSize="11" fontWeight="700" letterSpacing="2">{status}</text>
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════════
   AI SYNC PANEL — component riêng để tránh vi phạm Rules of Hooks
═══════════════════════════════════════════════════════════ */
function AiSyncPanel() {
  const [syncLog,     setSyncLog]     = useState([]);
  const [syncLoading, setSyncLoading] = useState(false);
  const [extractLog,  setExtractLog]  = useState([]);

  useEffect(() => {
    sb.get("extract_log", "order=extracted_at.desc&limit=20").then(rows => {
      if (rows && rows.length > 0) setExtractLog(rows);
    });
  }, []);

  const RULES = [
    { tag: "[Plan]",   color: T.accent, desc: "Tài liệu kế hoạch — trích xuất KH tháng, KPI target" },
    { tag: "[Report]", color: T.green,  desc: "Báo cáo tuần/tháng — trích xuất action items, quyết định, issues" },
  ];

  return (
    <div style={{display:"grid",gap:16}}>
      <SectionTitle sub="Tự động đọc Google Drive → Claude AI trích xuất → Supabase">🔄 AI Sync từ Google Drive</SectionTitle>

      <div style={{background:T.card,border:`1px solid ${T.border}`,borderRadius:12,padding:"20px"}}>
        <div style={{fontSize:16,color:T.muted,letterSpacing:"2px",textTransform:"uppercase",marginBottom:14}}>📌 Quy tắc đặt tên file</div>
        <div style={{display:"grid",gap:10}}>
          {RULES.map(r=>(
            <div key={r.tag} style={{display:"flex",gap:14,alignItems:"center",padding:"12px 16px",background:"rgba(255,255,255,0.03)",borderRadius:8,border:`1px solid ${r.color}40`}}>
              <span style={{fontSize:17,fontWeight:800,color:r.color,fontFamily:"monospace",whiteSpace:"nowrap"}}>{r.tag}</span>
              <span style={{fontSize:16,color:T.muted}}>{r.desc}</span>
            </div>
          ))}
        </div>
        <div style={{marginTop:14,padding:"12px 16px",background:"rgba(37,99,235,0.06)",borderRadius:8}}>
          <div style={{fontSize:16,color:T.accent,fontWeight:700,marginBottom:6}}>Ví dụ tên file đúng:</div>
          <div style={{fontSize:15,color:T.muted,fontFamily:"monospace",lineHeight:2}}>
            📄 [Plan] KHKD Target theo tháng 2026.docx<br/>
            📄 [Plan] KPI Master NSCA 2026.docx<br/>
            📄 [Report] BC Tuần 9 - PKD.docx<br/>
            📄 [Report] Meeting Minutes Tuần 9.docx<br/>
            📄 [Report] Quyết định CEO T9.docx
          </div>
        </div>
      </div>

      <div style={{background:T.card,border:`1px solid ${T.border}`,borderRadius:12,padding:"20px"}}>
        <div style={{fontSize:16,color:T.muted,letterSpacing:"2px",textTransform:"uppercase",marginBottom:14}}>⚙️ Cài đặt & Trạng thái</div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
          {[
            {l:"Vercel API Endpoint",  v:"nsca-cis.vercel.app/api/extract", ok:true},
            {l:"Google Drive Folder",  v:"NSCA CIS / (3 thư mục con)", ok:true},
            {l:"Trigger Apps Script",  v:"Cài thủ công — xem hướng dẫn bên dưới", ok:false},
            {l:"Supabase Tables",      v:"action_items, ceo_decisions, issues, extract_log", ok:true},
          ].map(s=>(
            <div key={s.l} style={{padding:"12px",background:"rgba(255,255,255,0.03)",borderRadius:8}}>
              <div style={{fontSize:15,color:T.muted,marginBottom:4}}>{s.l}</div>
              <div style={{fontSize:15,color:s.ok?T.green:T.yellow,fontWeight:600}}>{s.ok?"✅ ":"⚠️ "}{s.v}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{background:T.card,border:`1px solid ${T.border}`,borderRadius:12,padding:"20px"}}>
        <div style={{fontSize:16,color:T.muted,letterSpacing:"2px",textTransform:"uppercase",marginBottom:14}}>📋 Hướng dẫn cài Apps Script (1 lần)</div>
        {[
          {n:"1",text:"Vào",link:"https://script.google.com",linkText:"script.google.com"},
          {n:"2",text:"Tạo project mới → paste nội dung file NSCA_CIS_AppsScript.js"},
          {n:"3",text:"Chạy thử: Run → extractAndSync (cần cấp quyền Google Drive lần đầu)"},
          {n:"4",text:"Cài trigger tự động: Triggers → Add Trigger → extractAndSync → Time-driven → Every day at 6am"},
          {n:"5",text:"Sau khi có file [Plan] hoặc [Report] mới trong Drive → script tự động chạy → data vào Supabase → hiện trên dashboard"},
        ].map(step=>(
          <div key={step.n} style={{display:"flex",gap:14,padding:"10px 0",borderBottom:`1px solid ${T.border}`}}>
            <div style={{width:26,height:26,borderRadius:"50%",background:T.accent,display:"flex",alignItems:"center",justifyContent:"center",fontSize:14,fontWeight:800,flexShrink:0}}>{step.n}</div>
            <div style={{fontSize:16,color:T.text,lineHeight:1.6}}>
              {step.text}
              {step.link && <a href={step.link} target="_blank" rel="noopener noreferrer" style={{color:T.accent,marginLeft:4}}>{step.linkText} ↗</a>}
            </div>
          </div>
        ))}
      </div>

      <div style={{background:T.card,border:`1px solid ${T.border}`,borderRadius:12,padding:"20px"}}>
        <div style={{fontSize:16,color:T.muted,letterSpacing:"2px",textTransform:"uppercase",marginBottom:14}}>📊 Lịch sử trích xuất gần đây</div>
        {extractLog.length === 0 ? (
          <div style={{padding:"30px",textAlign:"center",color:T.muted,fontSize:16}}>
            Chưa có lịch sử. Sau khi chạy Apps Script lần đầu sẽ hiện ở đây.
          </div>
        ) : extractLog.map((log,i)=>(
          <div key={i} style={{display:"flex",gap:12,alignItems:"flex-start",padding:"10px 0",borderBottom:`1px solid ${T.border}`}}>
            <span style={{fontSize:18}}>{log.status==="success"?"✅":"⚠️"}</span>
            <div style={{flex:1}}>
              <div style={{fontSize:16,fontWeight:600,color:T.text}}>{log.file_name}</div>
              <div style={{fontSize:15,color:T.muted,marginTop:2}}>{log.results}</div>
              {log.errors && <div style={{fontSize:15,color:T.red,marginTop:2}}>Lỗi: {log.errors}</div>}
            </div>
            <div style={{fontSize:14,color:T.dim,whiteSpace:"nowrap"}}>
              {new Date(log.extracted_at).toLocaleString("vi-VN")}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   USERS PANEL — component riêng để tránh vi phạm Rules of Hooks
═══════════════════════════════════════════════════════════ */
function UsersPanel({ users, setUsers, newUserForm, setNewUserForm, showAddUser, setShowAddUser, customKpiData, setCustomKpiData, isCEO, T, addKpi, deleteKpi, kpiMsg, setKpiMsg, kpiForm, setKpiForm, inp, sb, chsData, weeklyData, wkData, user }) {
  const [usersTab, setUsersTab] = useState("users");

  const newUser = newUserForm;
  const setNewUser = setNewUserForm;
  const showAdd = showAddUser;
  const setShowAdd = setShowAddUser;

  const activeUsers = users.filter(u=>u.active!==false);
  const inactiveUsers = users.filter(u=>u.active===false);
  const customDepts = [...new Set(customKpiData.map(r=>r.dept))];
  const DEPTS = ["BAN LÃNH ĐẠO","PKD","TCKT","HCNS","SX NHÔM","SX THÉP","QLCL","CƠ ĐIỆN","GIAO HÀNG","KHO","CUNG ỨNG","R&D","BO","Int. Dept",...customDepts];
  const ROLES = ["CEO","Director","Manager","Staff","Admin"];
  const initials = n => n.split(" ").slice(-2).map(w=>w[0]).join("").toUpperCase();
  const customDeptGroups = [...new Set(customKpiData.map(r=>r.dept))];

  const addUser = async () => {
    if(!newUser.name||!newUser.pass) return;
    const colors = ["#f472b6","#60a5fa","#34d399","#f59e0b","#a78bfa","#f97316"];
    const username = newUser.name.toLowerCase().replace(/\s+/g,"_").replace(/[^a-z0-9_]/g,"");
    // Insert to Supabase first to get real ID
    const sbResult = await sb.insert("users", {
      full_name: newUser.name, username,
      password_hash: newUser.pass,
      role: newUser.role?.toLowerCase() || "manager",
      dept: newUser.dept, is_active: true,
      email: `${username}@nsca.vn`
    });
    const sbId = sbResult?.[0]?.id || (Math.max(0,...users.map(u=>u.id||0))+1);
    const userObj = {
      id: sbId, sbId,
      name: newUser.name, username,
      dept: newUser.dept, role: newUser.role || "Manager",
      pass: newUser.pass,
      avatar: initials(newUser.name),
      color: colors[sbId % colors.length],
      active: true
    };
    setUsers(p=>[...p, userObj]);
    setNewUser({name:"",dept:"HCNS",role:"Manager",pass:""});
    setShowAdd(false);
  };


  const toggleUser = async (id) => {
    const u = users.find(x=>x.id===id);
    if (!u) return;
    const newActive = !u.active;
    setUsers(p=>p.map(x=>x.id===id?{...x,active:newActive}:x));
    // Use sbId (Supabase UUID) if available, fallback to id
    const dbId = u.sbId || id;
    await sb.update("users", {is_active: newActive}, `id=eq.${dbId}`);
  };

  return (
    <div style={{display:"grid",gap:16}}>
      {/* Header + tabs */}
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:10}}>
        <div>
          <div style={{fontSize:20,fontWeight:900,color:T.text}}>👤 Quản lý Người dùng & KPI</div>
          <div style={{fontSize:15,color:T.muted,marginTop:2}}>{activeUsers.length} đang hoạt động · {customDeptGroups.length} phòng ban tùy chỉnh</div>
        </div>
        <div style={{display:"flex",gap:8}}>
          <button onClick={()=>setUsersTab("users")} style={{padding:"7px 18px",borderRadius:8,fontSize:15,fontWeight:700,cursor:"pointer",
            background:usersTab==="users"?T.accent:"rgba(255,255,255,0.05)",color:usersTab==="users"?"white":T.muted,border:"none"}}>
            👥 Users
          </button>
          <button onClick={()=>setUsersTab("kpi")} style={{padding:"7px 18px",borderRadius:8,fontSize:15,fontWeight:700,cursor:"pointer",
            background:usersTab==="kpi"?T.accent:"rgba(255,255,255,0.05)",color:usersTab==="kpi"?"white":T.muted,border:"none"}}>
            📊 KPI Phòng ban
          </button>
          {usersTab==="users"&&isCEO&&(
            <button onClick={()=>setShowAdd(!showAdd)} style={{padding:"7px 18px",borderRadius:8,background:T.green,color:"white",border:"none",cursor:"pointer",fontSize:15,fontWeight:700}}>
              {showAdd?"✕ Đóng":"+ Thêm user"}
            </button>
          )}
        </div>
      </div>

      {/* ── TAB: USERS ── */}
      {usersTab==="users" && (<>
        {/* Form thêm user */}
        {showAdd&&isCEO&&(
          <div style={{background:"rgba(37,99,235,0.08)",border:"1px solid "+T.accent+"40",borderRadius:12,padding:"20px"}}>
            <div style={{fontSize:16,fontWeight:700,marginBottom:14,color:"#60a5fa"}}>➕ Thêm người dùng mới</div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr auto",gap:10,alignItems:"end"}}>
              <div>
                <div style={{fontSize:14,color:T.muted,marginBottom:4}}>Họ và tên *</div>
                {inp(newUser.name, e=>setNewUser(p=>({...p,name:e.target.value})), "Nguyễn Văn A")}
              </div>
              <div>
                <div style={{fontSize:14,color:T.muted,marginBottom:4}}>Phòng ban</div>
                <select value={newUser.dept} onChange={e=>setNewUser(p=>({...p,dept:e.target.value}))}
                  style={{width:"100%",background:T.bg2,border:"1px solid "+T.border,borderRadius:6,padding:"8px 12px",color:T.text,fontSize:16}}>
                  {DEPTS.map(d=><option key={d}>{d}</option>)}
                </select>
              </div>
              <div>
                <div style={{fontSize:14,color:T.muted,marginBottom:4}}>Vai trò</div>
                <select value={newUser.role} onChange={e=>setNewUser(p=>({...p,role:e.target.value}))}
                  style={{width:"100%",background:T.bg2,border:"1px solid "+T.border,borderRadius:6,padding:"8px 12px",color:T.text,fontSize:16}}>
                  {ROLES.map(r=><option key={r}>{r}</option>)}
                </select>
              </div>
              <div>
                <div style={{fontSize:14,color:T.muted,marginBottom:4}}>Mật khẩu *</div>
                {inp(newUser.pass, e=>setNewUser(p=>({...p,pass:e.target.value})), "password")}
              </div>
              <button onClick={addUser} style={{padding:"8px 20px",borderRadius:6,background:T.green,color:"white",border:"none",cursor:"pointer",fontSize:16,fontWeight:700,whiteSpace:"nowrap"}}>
                ✓ Tạo
              </button>
            </div>
          </div>
        )}

        {/* Danh sách active */}
        <div>
          <div style={{fontSize:15,color:T.muted,letterSpacing:"2px",textTransform:"uppercase",marginBottom:10}}>✅ Đang hoạt động ({activeUsers.length})</div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:10}}>
            {activeUsers.map(u=>(
              <div key={u.id} style={{background:T.card,border:"1px solid "+T.border,borderRadius:12,padding:"14px 16px",display:"flex",gap:12,alignItems:"center"}}>
                <div style={{width:44,height:44,borderRadius:"50%",background:u.color+"33",border:"2px solid "+u.color,
                  display:"flex",alignItems:"center",justifyContent:"center",fontSize:16,fontWeight:900,color:u.color,flexShrink:0}}>
                  {u.avatar}
                </div>
                <div style={{flex:1,minWidth:0}}>
                  <div style={{fontSize:15,fontWeight:700,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{u.name}</div>
                  <div style={{fontSize:15,color:T.muted,marginTop:1}}>{u.role} · {u.dept}</div>
                  <div style={{fontSize:14,color:T.dim,fontFamily:"monospace",marginTop:1}}>🔑 {u.pass}</div>
                </div>
                {isCEO&&u.role!=="CEO"&&(
                  <button onClick={()=>toggleUser(u.id)} style={{padding:"5px 10px",borderRadius:6,background:T.red+"22",
                    border:"1px solid "+T.red+"40",color:T.red,cursor:"pointer",fontSize:14,fontWeight:700,whiteSpace:"nowrap"}}>
                    Tắt
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Danh sách inactive */}
        {inactiveUsers.length>0&&(
          <div>
            <div style={{fontSize:15,color:T.muted,letterSpacing:"2px",textTransform:"uppercase",marginBottom:10}}>❌ Đã vô hiệu ({inactiveUsers.length})</div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:10}}>
              {inactiveUsers.map(u=>(
                <div key={u.id} style={{background:"rgba(255,255,255,0.01)",border:"1px solid "+T.border,borderRadius:12,padding:"14px 16px",display:"flex",gap:12,alignItems:"center",opacity:0.5}}>
                  <div style={{width:44,height:44,borderRadius:"50%",background:"rgba(255,255,255,0.05)",border:"2px solid "+T.dim,
                    display:"flex",alignItems:"center",justifyContent:"center",fontSize:16,fontWeight:900,color:T.dim,flexShrink:0}}>
                    {u.avatar}
                  </div>
                  <div style={{flex:1,minWidth:0}}>
                    <div style={{fontSize:15,fontWeight:700,color:T.muted,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>🚫 {u.name}</div>
                    <div style={{fontSize:15,color:T.dim,marginTop:1}}>{u.role} · {u.dept}</div>
                  </div>
                  {isCEO&&(
                    <button onClick={()=>toggleUser(u.id)} style={{padding:"5px 10px",borderRadius:6,background:T.green+"22",
                      border:"1px solid "+T.green+"40",color:T.green,cursor:"pointer",fontSize:14,fontWeight:700,whiteSpace:"nowrap"}}>
                      Mở lại
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </>)}

      {/* ── TAB: KPI TÙY CHỈNH ── */}
      {usersTab==="kpi" && <KpiEditorPanel customKpiData={customKpiData} setCustomKpiData={setCustomKpiData} addKpi={addKpi} deleteKpi={deleteKpi} kpiMsg={kpiMsg} setKpiMsg={setKpiMsg} kpiForm={kpiForm} setKpiForm={setKpiForm} T={T} inp={inp} sb={sb} chsData={chsData} weeklyData={weeklyData} wkData={wkData} user={user} users={users}/>}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   MAIN APP
═══════════════════════════════════════════════════════════ */

function MobileDash({ wk, weeklyData, chsData, issues, actions, reports, users, ceoDecisions, setNav, T }) {
  const thang = wk<=4?1:wk<=9?2:3;
  const realWks = (weeklyData||[]).filter(w=>w.hasData);
  const sumDT = realWks.reduce((s,w)=>s+(w.pkd?.dt||0),0);
  const khM = [11.545,12.945,19.263,22.063,22.563,22.820,24.313,24.813,24.313,23.205,21.705,22.205][thang-1]||0;
  const pctDT = khM>0?Math.round(sumDT/khM*100):0;
  const chsEntry = (chsData||[]).find(d=>d.l==="T"+wk);
  const chs = chsEntry?.chs||0;
  const openIssues = (issues||[]).filter(i=>i.status==="open"||i.status==="pending");
  const overdueActs = (actions||[]).filter(a=>a.status!=="done"&&a.deadline&&new Date(a.deadline)<new Date());
  const managers = (users||[]).filter(u=>["manager","Manager"].includes(u.role));
  const submittedBC = (reports||[]).filter(r=>r.week_num===wk||r.week===wk).length;
  const sc = v=>v>=100?"#34d399":v>=85?"#fbbf24":"#f87171";

  return (
    <div style={{display:"grid",gap:12}}>
      {/* Greeting */}
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <div>
          <div style={{fontSize:13,color:"#64748b"}}>Tuần {wk} · Tháng {thang}/2026</div>
        </div>
        <div style={{textAlign:"right"}}>
          <div style={{fontSize:13,fontWeight:700,color:pctDT>=100?"#34d399":pctDT>=85?"#fbbf24":"#f87171"}}>
            DT {sumDT>0?sumDT.toFixed(1)+"B":"—"}
          </div>
          <div style={{fontSize:11,color:"#64748b"}}>KH {khM}B · {pctDT||0}%</div>
        </div>
      </div>

      {/* 3 thẻ nhanh */}
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8}}>
        {[
          {label:"CHS",val:chs>0?Math.round(chs):"—",sub:chs>=100?"Healthy":chs>=85?"Theo dõi":"Cảnh báo",color:sc(chs)},
          {label:"Issues",val:openIssues.length,sub:openIssues.filter(i=>i.priority==="high").length>0?openIssues.filter(i=>i.priority==="high").length+" cao":"OK",color:openIssues.length>0?"#f87171":"#34d399"},
          {label:"Nộp BC",val:submittedBC+"/"+(managers.length||13),sub:submittedBC>=(managers.length||13)?"Đầy đủ":"Còn "+(Math.max(0,(managers.length||13)-submittedBC)),color:submittedBC>=(managers.length||13)?"#34d399":"#fbbf24"},
        ].map((card,i)=>(
          <div key={i} style={{background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.07)",borderRadius:10,padding:"10px 12px",textAlign:"center"}}>
            <div style={{fontSize:11,color:"#64748b",marginBottom:3}}>{card.label}</div>
            <div style={{fontSize:22,fontWeight:900,color:card.color,lineHeight:1}}>{card.val}</div>
            <div style={{fontSize:11,color:"#475569",marginTop:3}}>{card.sub}</div>
          </div>
        ))}
      </div>

      {/* Issues nóng */}
      {openIssues.length>0&&(
        <div style={{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.07)",borderRadius:12,padding:"12px 14px"}}>
          <div style={{fontSize:13,fontWeight:800,color:"#fff",marginBottom:8}}>⚠️ Issues đang mở ({openIssues.length})</div>
          {openIssues.slice(0,3).map((iss,i)=>(
            <div key={i} style={{display:"flex",alignItems:"center",gap:8,padding:"6px 0",
              borderBottom:i<Math.min(2,openIssues.length-1)?"1px solid rgba(255,255,255,0.05)":"none"}}>
              <div style={{width:7,height:7,borderRadius:"50%",flexShrink:0,
                background:iss.priority==="high"?"#f87171":iss.priority==="medium"?"#fbbf24":"#34d399"}}/>
              <div style={{flex:1,fontSize:13,color:"#e2e8f0",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{iss.title}</div>
              <div style={{fontSize:11,color:"#64748b",flexShrink:0}}>{iss.dept}</div>
            </div>
          ))}
          {openIssues.length>3&&<button onClick={()=>setNav("issues")} style={{marginTop:6,width:"100%",background:"none",border:"none",color:"#60a5fa",fontSize:12,cursor:"pointer"}}>Xem tất cả {openIssues.length} →</button>}
        </div>
      )}

      {/* Actions quá hạn */}
      {overdueActs.length>0&&(
        <div style={{background:"rgba(248,113,113,0.05)",border:"1px solid rgba(248,113,113,0.18)",borderRadius:12,padding:"12px 14px"}}>
          <div style={{fontSize:13,fontWeight:800,color:"#f87171",marginBottom:8}}>🔴 Action quá hạn ({overdueActs.length})</div>
          {overdueActs.slice(0,2).map((a,i)=>(
            <div key={i} style={{display:"flex",gap:8,padding:"5px 0",borderBottom:i===0&&overdueActs.length>1?"1px solid rgba(255,255,255,0.05)":"none"}}>
              <div style={{flex:1,fontSize:13,color:"#e2e8f0",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{a.title}</div>
              <div style={{fontSize:11,color:"#f87171",flexShrink:0}}>{a.deadline}</div>
            </div>
          ))}
          <button onClick={()=>setNav("actions")} style={{marginTop:6,width:"100%",background:"none",border:"none",color:"#f87171",fontSize:12,cursor:"pointer"}}>Xem tất cả →</button>
        </div>
      )}

      {/* Quyết định CEO */}
      {(ceoDecisions||[]).length>0&&(
        <div style={{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.07)",borderRadius:12,padding:"12px 14px"}}>
          <div style={{fontSize:13,fontWeight:800,color:"#fff",marginBottom:8}}>⚖️ Quyết định CEO gần nhất</div>
          {(ceoDecisions||[]).slice(0,2).map((d,i)=>(
            <div key={i} style={{padding:"6px 0",borderBottom:i===0&&(ceoDecisions||[]).length>1?"1px solid rgba(255,255,255,0.05)":"none"}}>
              <div style={{fontSize:13,color:"#e2e8f0",fontWeight:600}}>{d.title}</div>
              <div style={{fontSize:11,color:"#475569",marginTop:2}}>{d.date} · {d.type}</div>
            </div>
          ))}
          <button onClick={()=>setNav("ceo_dec")} style={{marginTop:6,width:"100%",background:"none",border:"none",color:"#60a5fa",fontSize:12,cursor:"pointer"}}>Xem tất cả →</button>
        </div>
      )}
    </div>
  );
}


function MobileAiChat({ wk, issues, actions, chsData, wkData, weeklyData, user, T }) {
  const chsScore = (chsData||[]).find(d => d.l === "T"+wk)?.chs || 0;
  const [msgs, setMsgs] = React.useState([{
    role:"assistant",
    content:"Em chao " + (user?.name?.split(" ").slice(-1)[0]||"ban") + "! Em la Le Na - AI ho tro. Em giup gi duoc khong a?"
  }]);
  const [input, setInput] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const endRef = React.useRef(null);

  const call = async (q) => {
    if(!q.trim()) return;
    setMsgs(p=>[...p, {role:"user", content:q}]);
    setInput("");
    setLoading(true);
    try {
      const openIssues = (issues||[]).filter(i=>i.status==="open").slice(0,5)
        .map(i=>"["+i.priority+"] "+i.dept+": "+i.title).join("; ") || "Khong co";
      const overdue = (actions||[])
        .filter(a=>a.status!=="done" && a.deadline && new Date(a.deadline)<new Date())
        .slice(0,4).map(a=>a.title+" han "+a.deadline).join("; ") || "Khong co";
      const realWks = (weeklyData||wkData||[]).filter(w=>w.hasData===true||w.hasData==="true");
      const dtThang = realWks.reduce((s,w)=>s+(w.pkd?.dt||0),0).toFixed(2);
      const dtTuan = (realWks.find(w=>w.w===wk)||realWks[realWks.length-1])?.pkd?.dt||0;
      const gender = ["CEO","Director","Admin"].includes(user?.role) ? "Anh" : "ban";
      const sys = "Em la Le Na, AI cua NSCA. Tuan " + wk + "/2026. CHS: " + (chsScore||"chua co")
        + ". DT thang: " + dtThang + "B. DT tuan " + wk + ": " + (dtTuan>0?dtTuan.toFixed(2)+"B":"chua co")
        + ". Issues mo: " + openIssues + ". Actions qua han: " + overdue
        + ". Tra loi ngan gon. Xung em, goi nguoi dung la " + gender + ".";
      const res = await fetch("https://nsca-cis.vercel.app/api/ai", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
          model: "claude-sonnet-4-5",
          max_tokens: 500,
          system: sys,
          messages: [...msgs.filter((m,idx)=>m.role!=="assistant"||idx>0), {role:"user",content:q}].slice(-8)
        })
      });
      const data = await res.json();
      const reply = data.content?.[0]?.text || "Loi ket noi.";
      setMsgs(p=>[...p, {role:"assistant", content:reply}]);
    } catch(e) {
      setMsgs(p=>[...p, {role:"assistant", content:"Loi: "+e.message}]);
    }
    setLoading(false);
    setTimeout(()=>endRef.current?.scrollIntoView({behavior:"smooth"}),100);
  };

  const QUICK = ["Tom tat hom nay", "Issues gap?", "Actions qua han?", "Uu tien tuan nay"];

  return (
    <div style={{display:"flex",flexDirection:"column",height:"calc(100dvh - 110px)"}}>
      <div style={{background:"rgba(37,99,235,0.1)",border:"1px solid rgba(37,99,235,0.25)",
        borderRadius:12,padding:"12px 16px",marginBottom:10,
        display:"flex",alignItems:"center",gap:10,flexShrink:0}}>
        <img src={LENA_FACE} style={{width:36,height:36,borderRadius:"50%",flexShrink:0}}/>
        <div style={{flex:1}}>
          <div style={{fontSize:15,fontWeight:900,color:"#60a5fa"}}>Le Na AI</div>
          <div style={{fontSize:12,color:"#475569"}}>CIS · Tuan {wk}/2026</div>
        </div>
        <button onClick={()=>setMsgs([msgs[0]])}
          style={{padding:"4px 10px",borderRadius:6,
            border:"1px solid rgba(255,255,255,0.08)",
            background:"rgba(255,255,255,0.04)",
            color:"#64748b",cursor:"pointer",fontSize:12}}>Xoa</button>
      </div>

      {msgs.length<=1 && (
        <div style={{display:"flex",flexWrap:"wrap",gap:7,marginBottom:10,flexShrink:0}}>
          {QUICK.map((q,i)=>(
            <button key={i} onClick={()=>call(q)}
              style={{padding:"7px 13px",borderRadius:20,fontSize:13,cursor:"pointer",
                border:"1px solid rgba(37,99,235,0.3)",
                background:"rgba(37,99,235,0.08)",
                color:"#93c5fd",fontFamily:"Calibri,sans-serif"}}>
              {q}
            </button>
          ))}
        </div>
      )}

      <div style={{flex:1,overflowY:"auto",display:"flex",flexDirection:"column",gap:10,marginBottom:10}}>
        {msgs.map((m,i)=>(
          <div key={i} style={{display:"flex",justifyContent:m.role==="user"?"flex-end":"flex-start"}}>
            {m.role==="assistant" ? (
              <div style={{maxWidth:"92%",padding:"11px 14px",borderRadius:12,
                background:"rgba(255,255,255,0.04)",border:"1px solid rgba(37,99,235,0.2)"}}>
                <div style={{fontSize:11,color:"#60a5fa",fontWeight:700,marginBottom:5}}>Le Na</div>
                <div style={{fontSize:14,color:"#e2e8f0",lineHeight:1.65,whiteSpace:"pre-wrap"}}>{m.content}</div>
              </div>
            ) : (
              <div style={{maxWidth:"80%",padding:"10px 14px",borderRadius:12,
                background:"rgba(37,99,235,0.2)",
                border:"1px solid rgba(37,99,235,0.3)",
                fontSize:14,color:"#e2e8f0"}}>
                {m.content}
              </div>
            )}
          </div>
        ))}
        {loading && (
          <div style={{padding:"10px 14px",borderRadius:10,
            background:"rgba(255,255,255,0.03)",
            border:"1px solid rgba(37,99,235,0.15)",
            fontSize:13,color:"#60a5fa"}}>
            Le Na dang suy nghi...
          </div>
        )}
        <div ref={endRef}/>
      </div>

      <div style={{display:"flex",gap:8,flexShrink:0,paddingBottom:4}}>
        <input value={input} onChange={e=>setInput(e.target.value)}
          onKeyDown={e=>e.key==="Enter" && !e.shiftKey && call(input)}
          placeholder="Hoi Le Na..."
          style={{flex:1,background:"rgba(255,255,255,0.06)",
            border:"1px solid rgba(255,255,255,0.12)",
            borderRadius:24,padding:"11px 16px",
            color:"#e2e8f0",fontSize:14,outline:"none",
            fontFamily:"Calibri,sans-serif"}}/>
        <button onClick={()=>call(input)}
          disabled={loading||!input.trim()}
          style={{width:44,height:44,borderRadius:"50%",border:"none",flexShrink:0,
            background:loading||!input.trim()
              ? "rgba(255,255,255,0.05)"
              : "linear-gradient(135deg,#2563eb,#4f46e5)",
            color:loading||!input.trim()?"#475569":"white",
            fontSize:20,cursor:"pointer"}}>
          up
        </button>
      </div>
    </div>
  );
}


function KpiEditorPanel({ customKpiData, setCustomKpiData, addKpi, deleteKpi, kpiMsg, setKpiMsg, kpiForm, setKpiForm, T, inp, sb, chsData, weeklyData, wkData, user, users }) {
  const [selDept, setSelDept] = React.useState(Object.keys(KPI_MASTER)[0]);
  const [editRows, setEditRows] = React.useState(null); // null = chưa load
  const [saving, setSaving] = React.useState(false);
  const [saveMsg, setSaveMsg] = React.useState("");
  const [showAddRow, setShowAddRow] = React.useState(false);
  const [newRow, setNewRow] = React.useState({kpi_code:"",label:"",unit:"%",dir:"H",weight:10,kh:"",note:""});

  const ALL_DEPTS = Object.keys(KPI_MASTER);
  const deptColor = KPI_MASTER[selDept]?.color || "#6366f1";
  const deptOwner = KPI_MASTER[selDept]?.owner || "";

  // Khi đổi phòng → load KPI từ KPI_MASTER + override từ customKpiData
  React.useEffect(() => {
    const master = KPI_MASTER[selDept];
    if (!master) { setEditRows([]); return; }
    const rows = master.kpis.map(k => {
      const custom = customKpiData.find(r => r.dept === selDept && r.kpi_code === k.code);
      const rawKh = custom?.kh_monthly;
      const khArr = Array.isArray(rawKh) ? rawKh
        : typeof rawKh === 'object' && rawKh !== null ? Object.values(rawKh)
        : k.kh;
      return {
        kpi_code: k.code, label: k.label, unit: k.unit,
        dir: k.dir, weight: k.w, note: k.note || "",
        kh: khArr, // array 12 tháng
        isCustom: !!custom,
        changed: false,
      };
    });
    // Thêm các KPI custom-only (không có trong master)
    const customOnly = customKpiData.filter(r =>
      r.dept === selDept && !master.kpis.find(k => k.code === r.kpi_code)
    );
    customOnly.forEach(r => rows.push({
      kpi_code: r.kpi_code, label: r.label, unit: r.unit,
      dir: r.dir, weight: r.weight, note: r.note || "",
      kh: r.kh_monthly || Array(12).fill(0),
      isCustom: true, changed: false,
    }));
    setEditRows(rows);
    setSaveMsg("");
  }, [selDept, customKpiData]);

  // Sửa giá trị KH tháng của 1 row
  const setKhMonth = (kpiCode, mIdx, val) => {
    setEditRows(prev => prev.map(r =>
      r.kpi_code === kpiCode
        ? { ...r, kh: r.kh.map((v,i) => i===mIdx ? (parseFloat(val)||0) : v), changed: true }
        : r
    ));
  };

  // Sửa weight / label / note
  const setField = (kpiCode, field, val) => {
    setEditRows(prev => prev.map(r =>
      r.kpi_code === kpiCode ? { ...r, [field]: val, changed: true } : r
    ));
  };

  // Save tất cả row đã thay đổi vào Supabase
  const saveAll = async () => {
    setSaving(true); setSaveMsg("");
    const changed = editRows.filter(r => r.changed);
    if (!changed.length) { setSaveMsg("ℹ️ Không có thay đổi"); setSaving(false); return; }
    let ok = 0; let fail = 0;
    for (const r of changed) {
      const row = {
        dept: selDept, kpi_code: r.kpi_code, label: r.label,
        unit: r.unit, dir: r.dir, weight: parseInt(r.weight) || 10,
        kh_monthly: r.kh, note: r.note || "",
        owner: deptOwner, color: deptColor,
        year: 2026, is_active: true,
      };
      const res = await sb.upsert("custom_dept_kpi", row, "dept,kpi_code,year");
      if (res) {
        ok++;
        setCustomKpiData(prev => {
          const filtered = prev.filter(x => !(x.dept===selDept && x.kpi_code===r.kpi_code));
          return [...filtered, {...row, id: Date.now()}];
        });
      } else fail++;
    }
    setEditRows(prev => prev.map(r => ({...r, changed: false, isCustom: true})));
    setSaveMsg(fail===0 ? `✅ Đã lưu ${ok} chỉ tiêu vào Supabase` : `⚠️ ${ok} lưu OK, ${fail} lỗi`);
    setSaving(false);
    setTimeout(() => setSaveMsg(""), 4000);
  };

  // Thêm KPI mới vào editRows (chưa save)
  const addNewRow = () => {
    if (!newRow.kpi_code || !newRow.label) return;
    const khArr = newRow.kh ? newRow.kh.split(",").map(v=>parseFloat(v.trim())||0) : Array(12).fill(0);
    if (khArr.length === 1) { while(khArr.length<12) khArr.push(khArr[0]); }
    while(khArr.length<12) khArr.push(0);
    setEditRows(prev => [...prev, {
      kpi_code: newRow.kpi_code.toUpperCase().trim(),
      label: newRow.label, unit: newRow.unit, dir: newRow.dir,
      weight: parseInt(newRow.weight)||10, note: newRow.note,
      kh: khArr.slice(0,12), isCustom: false, changed: true,
    }]);
    setNewRow({kpi_code:"",label:"",unit:"%",dir:"H",weight:10,kh:"",note:""});
    setShowAddRow(false);
  };

  const MONTHS = ["T1","T2","T3","T4","T5","T6","T7","T8","T9","T10","T11","T12"];
  const changedCount = editRows ? editRows.filter(r=>r.changed).length : 0;
  const inpS = {width:"100%",background:"rgba(255,255,255,0.06)",border:"1px solid rgba(255,255,255,0.1)",
    borderRadius:6,padding:"5px 8px",color:"#e2e8f0",fontSize:13,boxSizing:"border-box"};

  return (
    <div style={{display:"grid",gap:14}}>
      {/* Chọn phòng ban */}
      <div style={{background:T.card,border:"1px solid "+T.border,borderRadius:12,padding:"16px 20px"}}>
        <div style={{fontSize:14,fontWeight:700,color:T.muted,marginBottom:10}}>Chọn phòng ban để xem & chỉnh sửa KPI:</div>
        <div style={{display:"flex",flexWrap:"wrap",gap:8}}>
          {ALL_DEPTS.map(d => {
            const col = KPI_MASTER[d]?.color || "#6366f1";
            return (
              <button key={d} onClick={()=>setSelDept(d)} style={{
                padding:"7px 16px",borderRadius:20,border:`1.5px solid ${selDept===d?col:T.border}`,
                background:selDept===d?col+"22":"rgba(255,255,255,0.03)",
                color:selDept===d?col:"#94a3b8",fontWeight:selDept===d?800:400,
                cursor:"pointer",fontSize:13,fontFamily:"Calibri,sans-serif",transition:"all .15s"
              }}>{d}</button>
            );
          })}
        </div>
      </div>

      {/* Bảng KPI phòng đang chọn */}
      {editRows && (
        <div style={{background:T.card,border:`1px solid ${deptColor}44`,borderRadius:12,overflow:"hidden"}}>
          {/* Header */}
          <div style={{background:deptColor+"18",borderBottom:`1px solid ${deptColor}33`,
            padding:"12px 18px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <div>
              <span style={{fontSize:16,fontWeight:900,color:deptColor}}>{selDept}</span>
              <span style={{fontSize:13,color:T.muted,marginLeft:10}}>{deptOwner} · {editRows.length} chỉ tiêu</span>
              {changedCount>0 && (
                <span style={{marginLeft:10,background:T.yellow+"22",color:T.yellow,
                  borderRadius:20,padding:"2px 10px",fontSize:12,fontWeight:700}}>
                  {changedCount} chưa lưu
                </span>
              )}
            </div>
            <div style={{display:"flex",gap:8,alignItems:"center"}}>
              {saveMsg && <span style={{fontSize:13,color:saveMsg.startsWith("✅")?T.green:T.yellow}}>{saveMsg}</span>}
              <button onClick={()=>setShowAddRow(!showAddRow)} style={{
                padding:"6px 14px",borderRadius:7,border:`1px solid ${deptColor}44`,
                background:"rgba(255,255,255,0.04)",color:deptColor,cursor:"pointer",fontSize:13,fontWeight:700}}>
                + Thêm chỉ tiêu
              </button>
              <button onClick={saveAll} disabled={saving||changedCount===0} style={{
                padding:"6px 18px",borderRadius:7,border:"none",fontWeight:800,fontSize:14,
                cursor:saving||changedCount===0?"default":"pointer",
                background:changedCount===0?"rgba(255,255,255,0.05)":"linear-gradient(135deg,"+deptColor+","+deptColor+"cc)",
                color:changedCount===0?T.dim:"white",fontFamily:"Calibri,sans-serif"}}>
                {saving?"Đang lưu...":"💾 Lưu vào Supabase"}
              </button>
            </div>
          </div>

          {/* Form thêm KPI mới */}
          {showAddRow && (
            <div style={{padding:"12px 18px",background:"rgba(99,102,241,0.06)",borderBottom:`1px solid ${T.border}`}}>
              <div style={{fontSize:13,fontWeight:700,color:"#818cf8",marginBottom:8}}>➕ Thêm chỉ tiêu mới</div>
              <div style={{display:"grid",gridTemplateColumns:"100px 1fr 60px 80px 60px 1fr auto",gap:8,alignItems:"end"}}>
                {[
                  ["Mã KPI","kpi_code","VD: BD-15"],
                  ["Tên chỉ số","label","Tên đầy đủ"],
                  ["Đơn vị","unit","%"],
                  null, // dir dropdown
                  ["W%","weight","10"],
                  ["KH tháng","kh","20 hoặc 20,22,25..."],
                ].map((f,i) => f ? (
                  <div key={i}>
                    <div style={{fontSize:11,color:T.dim,marginBottom:3}}>{f[0]}</div>
                    <input value={newRow[f[1]]} onChange={e=>setNewRow(p=>({...p,[f[1]]:e.target.value}))}
                      placeholder={f[2]} style={inpS}/>
                  </div>
                ) : (
                  <div key={i}>
                    <div style={{fontSize:11,color:T.dim,marginBottom:3}}>Hướng</div>
                    <select value={newRow.dir} onChange={e=>setNewRow(p=>({...p,dir:e.target.value}))} style={{...inpS,height:29}}>
                      <option value="H">↑ Cao</option>
                      <option value="L">↓ Thấp</option>
                    </select>
                  </div>
                ))}
                <button onClick={addNewRow} style={{
                  padding:"5px 14px",borderRadius:6,background:"#6366f1",color:"white",
                  border:"none",cursor:"pointer",fontSize:13,fontWeight:700,whiteSpace:"nowrap"}}>
                  ✓ Thêm
                </button>
              </div>
            </div>
          )}

          {/* Bảng KPI — scroll ngang cho 12 tháng */}
          <div style={{overflowX:"auto"}}>
            <table style={{width:"100%",borderCollapse:"collapse",fontSize:13,minWidth:1100}}>
              <thead>
                <tr style={{background:"rgba(255,255,255,0.03)"}}>
                  <th style={{padding:"8px 12px",textAlign:"left",color:T.muted,fontWeight:700,width:80,borderBottom:`1px solid ${T.border}`}}>Mã</th>
                  <th style={{padding:"8px 12px",textAlign:"left",color:T.muted,fontWeight:700,borderBottom:`1px solid ${T.border}`}}>Chỉ tiêu</th>
                  <th style={{padding:"8px 12px",textAlign:"center",color:T.muted,fontWeight:700,width:55,borderBottom:`1px solid ${T.border}`}}>Đv</th>
                  <th style={{padding:"8px 12px",textAlign:"center",color:T.muted,fontWeight:700,width:60,borderBottom:`1px solid ${T.border}`}}>Hướng</th>
                  <th style={{padding:"8px 12px",textAlign:"center",color:T.muted,fontWeight:700,width:45,borderBottom:`1px solid ${T.border}`}}>W%</th>
                  {MONTHS.map(m=>(
                    <th key={m} style={{padding:"6px 4px",textAlign:"center",color:T.muted,fontWeight:700,
                      width:52,fontSize:11,borderBottom:`1px solid ${T.border}`,borderLeft:`1px solid ${T.border}22`}}>
                      KH {m}
                    </th>
                  ))}
                  <th style={{padding:"8px 8px",width:40,borderBottom:`1px solid ${T.border}`}}/>
                </tr>
              </thead>
              <tbody>
                {editRows.map((r,idx) => (
                  <tr key={r.kpi_code} style={{
                    background:r.changed?"rgba(234,179,8,0.05)":idx%2===0?"transparent":"rgba(255,255,255,0.01)",
                    borderBottom:`1px solid ${T.border}22`}}>
                    <td style={{padding:"6px 12px"}}>
                      <span style={{fontFamily:"monospace",color:r.isCustom?"#818cf8":deptColor,fontSize:12}}>{r.kpi_code}</span>
                      {r.isCustom && <span style={{fontSize:10,color:"#818cf8",marginLeft:4}}>✏️</span>}
                    </td>
                    <td style={{padding:"6px 12px"}}>
                      <input value={r.label} onChange={e=>setField(r.kpi_code,"label",e.target.value)}
                        style={{...inpS,background:"transparent",border:"1px solid transparent",
                          padding:"3px 6px",fontWeight:600,color:"#e2e8f0"}}
                        onFocus={e=>e.target.style.borderColor="rgba(255,255,255,0.15)"}
                        onBlur={e=>e.target.style.borderColor="transparent"}/>
                    </td>
                    <td style={{padding:"6px 4px",textAlign:"center",color:T.muted,fontSize:12}}>{r.unit}</td>
                    <td style={{padding:"6px 4px",textAlign:"center",fontSize:12,
                      color:r.dir==="H"?T.green:T.yellow}}>
                      {r.dir==="H"?"↑ Cao":"↓ Thấp"}
                    </td>
                    <td style={{padding:"6px 4px",textAlign:"center"}}>
                      <input type="number" value={r.weight} min={1} max={30}
                        onChange={e=>setField(r.kpi_code,"weight",e.target.value)}
                        style={{...inpS,width:40,textAlign:"center",padding:"3px 4px"}}/>
                    </td>
                    {r.kh.map((v,mIdx)=>(
                      <td key={mIdx} style={{padding:"4px 3px",borderLeft:`1px solid ${T.border}22`}}>
                        <input type="number" value={v===0?"":v}
                          onChange={e=>setKhMonth(r.kpi_code,mIdx,e.target.value)}
                          placeholder="0"
                          style={{...inpS,width:"100%",padding:"4px 5px",textAlign:"center",fontSize:12,
                            background:r.changed?"rgba(234,179,8,0.08)":"rgba(255,255,255,0.04)"}}/>
                      </td>
                    ))}
                    <td style={{padding:"6px 8px",textAlign:"center"}}>
                      <button onClick={()=>setEditRows(prev=>prev.filter(x=>x.kpi_code!==r.kpi_code))}
                        title="Xóa khỏi danh sách"
                        style={{width:24,height:24,borderRadius:4,background:"rgba(248,113,113,0.1)",
                          border:"1px solid rgba(248,113,113,0.2)",color:"#f87171",cursor:"pointer",fontSize:14,lineHeight:1}}>
                        ×
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan={5} style={{padding:"8px 12px",fontSize:12,color:T.dim}}>
                    Tổng trọng số: <b style={{color:T.text}}>{editRows.reduce((s,r)=>s+(parseInt(r.weight)||0),0)}%</b>
                    <span style={{marginLeft:12,color:T.dim}}>· Ô vàng = chưa lưu · ✏️ = đã override KPI_MASTER</span>
                  </td>
                  <td colSpan={13}/>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}


function KnowledgeBasePanel({ knowledgeBase, setKnowledgeBase, user, sb, T }) {
  const KB_CATS = [
    {id:"hvac_standard",    label:"Tieu chuan HVAC"},
    {id:"product_spec",     label:"Spec san pham"},
    {id:"internal_process", label:"Quy trinh noi bo"},
    {id:"market_info",      label:"Thi truong"},
    {id:"general",          label:"Khac"},
  ];
  const [kbForm, setKbForm] = React.useState({title:"",category:"hvac_standard",content:"",tags:""});
  const [kbMsg,  setKbMsg]  = React.useState("");

  const saveKb = async () => {
    if(!kbForm.title || !kbForm.content){ setKbMsg("Can co Tieu de va Noi dung"); return; }
    const row = {
      title: kbForm.title, category: kbForm.category,
      content: kbForm.content,
      tags: kbForm.tags ? kbForm.tags.split(",").map(t=>t.trim()) : [],
      created_by: user.name, is_active: true
    };
    const res = await sb.upsert("knowledge_base", row, "title,category");
    if(res){
      setKnowledgeBase(p=>[{...row, id:Date.now()}, ...p.filter(k=>k.title!==row.title)]);
      setKbMsg("Da luu: "+row.title);
      setKbForm({title:"",category:"hvac_standard",content:"",tags:""});
    } else { setKbMsg("Loi luu Supabase"); }
    setTimeout(()=>setKbMsg(""),4000);
  };
  const deleteKb = async (id, title) => {
    await sb.update("knowledge_base",{is_active:false},"id=eq."+id);
    setKnowledgeBase(p=>p.filter(k=>k.id!==id));
    setKbMsg("Da xoa: "+title);
    setTimeout(()=>setKbMsg(""),3000);
  };

  return (
    <div style={{display:"grid",gap:14}}>
      <div style={{fontSize:16,fontWeight:800,color:"#fff"}}>
        Tai lieu AI (Cap 1) — AI dang co {knowledgeBase.length} tai lieu
      </div>
      <div style={{background:"rgba(99,102,241,0.06)",border:"1px solid #6366f130",borderRadius:12,padding:"16px 20px"}}>
        <div style={{fontSize:15,fontWeight:700,color:"#818cf8",marginBottom:12}}>Them tai lieu</div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginBottom:10}}>
          <div>
            <div style={{fontSize:13,color:T.muted,marginBottom:4}}>Tieu de *</div>
            <input value={kbForm.title} onChange={e=>setKbForm(p=>({...p,title:e.target.value}))}
              placeholder="VD: ASHRAE 62.1 thong gio"
              style={{width:"100%",background:"rgba(255,255,255,0.05)",border:"1px solid "+T.border,
                borderRadius:6,padding:"8px 12px",color:T.text,fontSize:14,boxSizing:"border-box"}}/>
          </div>
          <div>
            <div style={{fontSize:13,color:T.muted,marginBottom:4}}>Danh muc</div>
            <select value={kbForm.category} onChange={e=>setKbForm(p=>({...p,category:e.target.value}))}
              style={{width:"100%",background:"rgba(255,255,255,0.05)",border:"1px solid "+T.border,
                borderRadius:6,padding:"8px 12px",color:T.text,fontSize:14,cursor:"pointer"}}>
              {KB_CATS.map(ct=><option key={ct.id} value={ct.id}>{ct.label}</option>)}
            </select>
          </div>
        </div>
        <div style={{marginBottom:10}}>
          <div style={{fontSize:13,color:T.muted,marginBottom:4}}>Noi dung *</div>
          <textarea value={kbForm.content} onChange={e=>setKbForm(p=>({...p,content:e.target.value}))}
            rows={4} placeholder="Dan noi dung tai lieu, spec sheet, tieu chuan ky thuat..."
            style={{width:"100%",background:"rgba(255,255,255,0.05)",border:"1px solid "+T.border,
              borderRadius:6,padding:"8px 12px",color:T.text,fontSize:14,resize:"vertical",
              fontFamily:"Calibri,sans-serif",boxSizing:"border-box"}}/>
        </div>
        <div style={{display:"flex",gap:10,alignItems:"flex-end"}}>
          <div style={{flex:1}}>
            <div style={{fontSize:13,color:T.muted,marginBottom:4}}>Tags (cach nhau boi dau phay)</div>
            <input value={kbForm.tags} onChange={e=>setKbForm(p=>({...p,tags:e.target.value}))}
              placeholder="ASHRAE, thong gio, tieu chuan"
              style={{width:"100%",background:"rgba(255,255,255,0.05)",border:"1px solid "+T.border,
                borderRadius:6,padding:"8px 12px",color:T.text,fontSize:14,boxSizing:"border-box"}}/>
          </div>
          <button onClick={saveKb}
            style={{padding:"8px 24px",borderRadius:8,background:"#6366f1",color:"white",
              border:"none",cursor:"pointer",fontSize:15,fontWeight:700,whiteSpace:"nowrap",height:38}}>
            Luu
          </button>
        </div>
        {kbMsg&&<div style={{marginTop:10,fontSize:14,color:kbMsg.includes("Loi")?T.red:T.green}}>{kbMsg}</div>}
      </div>
      {knowledgeBase.length===0?(
        <div style={{padding:40,textAlign:"center",color:T.dim,background:T.card,borderRadius:12,
          border:"1px solid "+T.border}}>
          Chua co tai lieu. Them spec sheet, tieu chuan HVAC de AI tro nen thong minh hon.
        </div>
      ):(
        <div style={{display:"grid",gap:8}}>
          {KB_CATS.map(cat=>{
            const items = knowledgeBase.filter(k=>k.category===cat.id);
            if(!items.length) return null;
            return (
              <div key={cat.id} style={{background:T.card,border:"1px solid "+T.border,borderRadius:10,overflow:"hidden"}}>
                <div style={{padding:"8px 14px",background:"rgba(255,255,255,0.03)",
                  fontSize:13,fontWeight:700,color:T.muted,borderBottom:"1px solid "+T.border}}>
                  {cat.label} ({items.length})
                </div>
                {items.map(k=>(
                  <div key={k.id} style={{padding:"10px 14px",borderBottom:"1px solid rgba(255,255,255,0.03)",
                    display:"flex",alignItems:"flex-start",gap:12}}>
                    <div style={{flex:1}}>
                      <div style={{fontSize:14,fontWeight:600,color:T.text}}>{k.title}</div>
                      <div style={{fontSize:12,color:T.dim,marginTop:3,overflow:"hidden",
                        textOverflow:"ellipsis",whiteSpace:"nowrap",maxWidth:600}}>
                        {(k.content||"").slice(0,120)}
                      </div>
                      {k.tags?.length>0&&(
                        <div style={{display:"flex",gap:4,marginTop:4,flexWrap:"wrap"}}>
                          {k.tags.map((tg,ti)=>(
                            <span key={ti} style={{fontSize:11,padding:"1px 6px",borderRadius:10,
                              background:"rgba(99,102,241,0.15)",color:"#818cf8"}}>{tg}</span>
                          ))}
                        </div>
                      )}
                    </div>
                    <button onClick={()=>deleteKb(k.id,k.title)}
                      style={{padding:"4px 10px",borderRadius:6,background:"rgba(239,68,68,0.1)",
                        border:"1px solid rgba(239,68,68,0.3)",color:T.red,cursor:"pointer",
                        fontSize:12,flexShrink:0}}>Xoa</button>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}


export default function Dashboard({ user, setUser }) {
  const [nav, setNav] = useState("dashboard");
  const [users, setUsers] = useState(USERS_DB);
  const [reports, setReports] = useState(SEED_REPORTS);
  const [issues, setIssues] = useState(SEED_ISSUES);
  const [actions, setActions] = useState([]);
  const [ceoDecisions, setCeoDecisions] = useState([]);
  const [minutes, setMinutes] = useState([]);          // ← lifted up từ MinutesPanel
  const [setupRunning, setSetupRunning] = useState(false);
  const [setupResults, setSetupResults] = useState([]);
  const [minutesLoaded, setMinutesLoaded] = useState(false); // ← lifted up
  // ── Action Tracker AI state ────────────────────────────
  const [actionsAI, setActionsAI] = useState("");
  const [actionsAILoading, setActionsAILoading] = useState(false);
  const [actionsFilter, setActionsFilter] = useState("all");
  const [actionReminding, setActionReminding] = useState(null);
  // ── Issues & Risks AI state ────────────────────────────
  const [issuesAI, setIssuesAI] = useState("");
  const [issuesAILoading, setIssuesAILoading] = useState(false);
  const [issueFilter, setIssueFilter] = useState("all");
  const [showResolvedIssues, setShowResolvedIssues] = useState(false);
  // ── Actions hide done ─────────────────────────────────
  const [showDoneActions, setShowDoneActions] = useState(false);
  // ── Recs dismiss ──────────────────────────────────────
  const [dismissedRecs, setDismissedRecs] = useState(new Set());
  const [showDismissedRecs, setShowDismissedRecs] = useState(false);
  // ── CEO Decisions add/remove ──────────────────────────
  const [decForm, setDecForm] = useState({show:false, title:"", context:"", dec:"", type:"Quyết định"});
  // ── Documents upload/recall ───────────────────────────
  const [docs, setDocs] = useState([]);
  const [docsLoading, setDocsLoading] = useState(false);
  const [docUploading, setDocUploading] = useState(false);
  // ── Họp giao ban state ─────────────────────────────────
  const [meetMode, setMeetMode] = useState("form");   // "form" | "done"
  const [meetDate, setMeetDate] = useState("");
  const [meetSummary, setMeetSummary] = useState("");
  const [meetIssuesList, setMeetIssuesList] = useState([]);
  const [meetActionsList, setMeetActionsList] = useState([]);
  const [meetNewIssue, setMeetNewIssue] = useState({desc:"",dept:"PKD",priority:"high"});
  const [meetNewAction, setMeetNewAction] = useState({title:"",owner:"",owner_id:null,executor:"",supporter:"",deadline:""});
  const [meetSaving, setMeetSaving] = useState(false);
  const [meetMsg, setMeetMsg] = useState("");
  const [login, setLogin] = useState({username:"",pass:""});
  const [loginErr, setLoginErr] = useState("");
  const [wk, setWk] = useState(10);
  const [period, setPeriod] = useState("tuan");  // tuan | thang | quy | nam
  const [periodIdx, setPeriodIdx] = useState(0);  // which month/quarter
  const [kpiGroup, setKpiGroup] = useState("PKD");
  const [comment, setComment] = useState("");
  const [approveTarget, setApproveTarget] = useState(null);
  const [viewReport, setViewReport] = useState(null);
  const [viewIssue, setViewIssue] = useState(null);
  const [now, setNow] = useState(new Date());
  const [sideCollapsed, setSideCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  React.useEffect(() => {
    const fn = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);
  const [showProfile, setShowProfile] = useState(false);
  const [newPass, setNewPass] = useState({old:"",n1:"",n2:"",msg:"",ok:false});
  const [submitOpen, setSubmitOpen] = useState(false);
  const [issueOpen, setIssueOpen] = useState(false);
  const [showAddUser, setShowAddUser] = useState(false);
  const [newUserForm, setNewUserForm] = useState({name:"",dept:"HCNS",role:"Manager",pass:""});
  const [lockedWks, setLockedWks] = useState(()=>{const m={};[1,2,3,4,5,6,7,8,9].forEach(n=>m[n]=true);m[10]=false;return m;});
  const [activeWkMgr, setActiveWkMgr] = useState(1);
  const [submitMethod, setSubmitMethod] = useState("form");
  const [submitDept, setSubmitDept] = useState(null);
  const [kpiActualForm, setKpiActualForm] = useState({});
  const [submitMsg, setSubmitMsg] = useState("");
  // ── AI STATES ────────────────────────────────────────────────
  const [aiChat, setAiChat] = useState([]);
  const [reminderStatus, setReminderStatus] = useState(null);
  const [weeklyData, setWeeklyData]   = useState(WK);
  const [monthlyData, setMonthlyData] = useState([]);
  const [chsData, setChsData] = useState([]);
  const [dataLoaded, setDataLoaded]   = useState(false);
  const [knowledgeBase, setKnowledgeBase] = useState([]); // Cấp 1: tài liệu nội bộ
  const [sbErrors,   setSbErrors]     = useState([]);
  const [toast,      setToast]        = useState("");
  const [sbConnected,setSbConnected]  = useState(true);
  const fileInputRef = React.useRef(null);
  const [reminderLoading, setReminderLoading] = useState(false);
  const [reminderTab, setReminderTab] = useState("status"); // "status" | "settings"
  const [aiInput, setAiInput] = useState("");
  const [aiLoading, setAiLoading] = useState(false);
  const [aiWebSearch, setAiWebSearch] = useState(false); // Cấp 2: web search toggle
  const [aiValidation, setAiValidation] = useState(null); // {type:"warn"|"ok", text}
  const [aiValidating, setAiValidating] = useState(false);
  const [submitThanks, setSubmitThanks] = useState(null);  // thank-you modal data
  const [pendingSubmit, setPendingSubmit] = useState(null); // data saved when AI warns
  const [newReport, setNewReport] = useState({title:"",issues:"",proposals:""});
  const [newIssue, setNewIssue] = useState({title:"",desc:"",type:"equipment",priority:"medium"});
  const [customKpiData, setCustomKpiData] = useState([]); // KPI động từ Supabase
  const [kpiForm, setKpiForm] = useState({dept:"",owner:"",color:"#6366f1",kpi_code:"",label:"",unit:"%",dir:"H",weight:10,note:"",kh:""});
  const [kpiMsg, setKpiMsg] = useState("");

  // ── KPI EDITOR FUNCTIONS ───────────────────────────────────
  const addKpi = async () => {
    if(!kpiForm.dept||!kpiForm.kpi_code||!kpiForm.label) {
      setKpiMsg("⚠️ Cần điền: Phòng ban, Mã KPI, Tên KPI"); return;
    }
    const khArr = kpiForm.kh.split(",").map(v=>parseFloat(v.trim())||0);
    const kh12 = Array(12).fill(0).map((_,i)=>khArr[i]||khArr[0]||0);
    const row = {
      dept: kpiForm.dept.toUpperCase().trim(),
      owner: kpiForm.owner||kpiForm.dept,
      color: kpiForm.color,
      kpi_code: kpiForm.kpi_code.toUpperCase().trim(),
      label: kpiForm.label,
      unit: kpiForm.unit||"%",
      dir: kpiForm.dir||"H",
      weight: parseInt(kpiForm.weight)||10,
      note: kpiForm.note||"",
      kh_monthly: kh12,
      year: 2026, is_active: true,
    };
    const res = await sb.upsert("custom_dept_kpi", row, "dept,kpi_code,year");
    if(res) {
      setCustomKpiData(p=>{
        const filtered = p.filter(r=>!(r.dept===row.dept&&r.kpi_code===row.kpi_code&&r.year===2026));
        return [...filtered, {...row, id: Date.now()}];
      });
      setKpiMsg("✅ Đã thêm " + row.kpi_code + " - " + row.label + " cho phòng " + row.dept);
      setKpiForm(p=>({...p, kpi_code:"", label:"", note:"", kh:""}));
    } else {
      setKpiMsg("❌ Lỗi lưu vào Supabase");
    }
    setTimeout(()=>setKpiMsg(""),4000);
  };

  const deleteKpi = async (dept, kpi_code) => {
    await sb.update("custom_dept_kpi", {is_active:false}, "dept=eq."+dept+"&kpi_code=eq."+kpi_code+"&year=eq.2026");
    setCustomKpiData(p=>p.filter(r=>!(r.dept===dept&&r.kpi_code===kpi_code)));
  };

  // ── INPUT HELPER FUNCTION ──────────────────────────────────
  const inp = (val, onChange, placeholder, extra={}) => (
    <input value={val} onChange={onChange} placeholder={placeholder}
      style={{width:"100%", background:"rgba(255,255,255,0.06)", border:"1px solid "+T.border,
      borderRadius:6, padding:"8px 12px", color:T.text, fontSize:16, boxSizing:"border-box", ...extra}}/>
  );

  useEffect(() => { const t = setInterval(() => setNow(new Date()), 1000); return () => clearInterval(t); }, []);

  // ── SUPABASE: Load data on mount ─────────────────────────
  useEffect(() => {
    const loadSupabaseData = async () => {
      // ══ LOAD WEEKLY OPERATIONAL DATA ══════════════════════════
      const sbWeekly = await sb.get("weekly_data", "year=eq.2026&order=week_number.asc");
      if (sbWeekly && sbWeekly.length > 0) {
        const mappedWK = sbWeekly.map(row => ({
          w:       row.week_number,
          thang:   row.month_number || 1,
          quy:     row.quarter || 1,
          label:   row.label || `T${row.week_number}`,
          ngay:    row.ngay || "",
          hasData: row.has_data === true || (!!(row.tckt && Object.keys(row.tckt||{}).length > 0) || !!(row.pkd && Object.keys(row.pkd||{}).length > 0) || !!(row.nhom && Object.keys(row.nhom||{}).length > 0)),
          tckt:  row.tckt || {},
          nhom:  row.nhom || {},
          thep:  row.thep || {},
          gh:    row.gh   || {},
          kho:   row.kho  || {},
          cd:    row.cd   || {},
          qlcl:  row.qlcl || {},
          cu:    row.cu   || {},
          pkd:   row.pkd  || {},
          rd:    row.rd   || {},
          hcns:  row.hcns || {},
        }));
        // Ghi đè toàn bộ WK global và state
        WK.length = 0;
        mappedWK.forEach(r => WK.push(r));
        setWeeklyData([...mappedWK]);
        // Set tuần mới nhất làm tuần active
        setWk(mappedWK[mappedWK.length - 1].w);
      }

      // ══ LOAD MONTHLY DATA ══════════════════════════════════════
      const sbMonthly = await sb.get("monthly_data", "year=eq.2026&order=month_number.asc");
      if (sbMonthly && sbMonthly.length > 0) {
        const mapped = sbMonthly.map(row => ({
          month:    row.month_number,
          label:    row.label || ("Tháng " + row.month_number + "/2026"),
          dt:       row.dt_actual || 0,
          dtKH:     row.dt_kh || 0,
          note:     row.note || "",
          dtCoGau:  typeof row.dt_co_cau === "string" ? JSON.parse(row.dt_co_cau) : (row.dt_co_cau || []),
          d: {
            pt:      row.pt || 0,
            qh:      row.qh || 0,
            tongVay: row.tong_vay || 0,
            tienMat: row.tien_mat || 0,
            thuTH:   row.thu_th || 0,
            uptime:  row.uptime || 0,
            fpy:     row.fpy || 0,
            htNhom:  row.ht_nhom || 0,
            knTotal: row.kn_total || 0,
            cuGT:    row.cu_gt || 0,
            ghLuot:  row.gh_luot || 0,
          }
        }));
        setMonthlyData(mapped);
      }

      // Load issues from Supabase
      const sbIssues = await sb.get("issues", "order=created_at.desc&limit=50");
      if (sbIssues && sbIssues.length > 0) {
        const mapped = sbIssues.map(i => ({
          id: i.id, sbId: i.id,
          from: i.created_by_name || i.dept, fromId: i.created_by, dept: i.dept,
          title: i.title, type: i.type, priority: i.priority,
          status: i.status === "open" ? "pending" : i.status,
          createdAt: new Date(i.created_at).toLocaleDateString("vi-VN"),
          desc: i.description || "", ceoComment: i.resolution_note || ""
        }));
        setIssues(prev => {
          const ids = new Set(mapped.map(x => x.id));
          return [...mapped, ...prev.filter(x => !ids.has(x.id))];
        });
      }
      // Load reports from Supabase
      const sbReports = await sb.get("weekly_reports", "order=submitted_at.desc&limit=100");
      if (sbReports && sbReports.length > 0) {
        const mapped = sbReports.map(r => ({
          id: r.id,            // UUID từ Supabase — dùng cho approve
          sbId: r.id,          // giữ cả sbId
          dept: r.dept,
          user: r.content?.submitted_by_name || r.dept,
          userId: r.submitted_by,
          week: r.week_num,
          title: r.content?.title || `BC ${r.dept} T${r.week_num}`,
          submittedAt: r.submitted_at ? new Date(r.submitted_at).toLocaleString("vi-VN") : "--",
          status: r.status === "submitted" ? "pending" : (r.status || "pending"),
          ceoComment: r.ceo_comment || "",
          issues: r.content?.issues || "",
        }));
        // Ghi đè hoàn toàn bằng data từ Supabase
        setReports(mapped);
      }
      // Load CHS history from Supabase
      const sbCHS = await sb.get("chs_history", "order=week_num.asc&year=eq.2026");
      if (sbCHS && sbCHS.length > 0) {
        // Update chsData state từ Supabase
        const newCHS = sbCHS.map(row => ({
          l:        `T${row.week_num}`,
          chs:      row.chs_score      || null,
          fin:      row.fin_score      || row.pillar_finance    || null,
          ops:      row.ops_score      || row.pillar_ops        || null,
          growth:   row.growth_score   || row.pillar_growth     || null,
          quality:  row.quality_score  || row.pillar_quality    || null,
          strategy: row.strategy_score || row.pillar_strategy   || null,
          sales:    row.pillar_sales      || null,
          prod:     row.pillar_production || null,
          hr:       row.pillar_hr         || null,
        }));
        CHS_WK.length = 0;
        newCHS.forEach(r => CHS_WK.push(r));
        setChsData([...newCHS]);
      }

      // Load action items from Supabase
      const sbActions = await sb.get("action_items", "year=eq.2026&order=created_at.desc&limit=50");
      if (sbActions && sbActions.length > 0) {
        setActions(sbActions.map(a => ({
          id: a.id_code || a.id,
          title: a.title,
          owner: a.owner,
          deadline: a.deadline ? new Date(a.deadline).toLocaleDateString("vi-VN") : "--",
          status: a.status || "open",
          from: a.source || "",
          progress: a.progress || 0,
        })));
      }

      // Load CEO decisions from Supabase
      const sbDec = await sb.get("ceo_decisions", "year=eq.2026&order=created_at.desc&limit=30");
      if (sbDec && sbDec.length > 0) {
        setCeoDecisions(sbDec.map(d => ({
          date: d.decision_date ? new Date(d.decision_date).toLocaleDateString("vi-VN") : "--",
          w: d.week_num ? "T"+d.week_num : "--",
          title: d.title,
          context: d.context || "",
          dec: d.decision || "",
          type: d.category || "Khác",
          status: d.status || "active",
        })));
      }

      // Load custom dept KPI từ Supabase
      const sbCustomKpi = await sb.get("custom_dept_kpi", "year=eq.2026&is_active=eq.true&order=dept.asc,kpi_code.asc");
      if (sbCustomKpi && sbCustomKpi.length > 0) {
        // Normalize kh_monthly từ jsonb → array
        const normalized = sbCustomKpi.map(r => ({
          ...r,
          kh_monthly: Array.isArray(r.kh_monthly)
            ? r.kh_monthly
            : typeof r.kh_monthly === 'object' && r.kh_monthly !== null
              ? Object.values(r.kh_monthly)
              : Array(12).fill(0)
        }));
        setCustomKpiData(normalized);
      }
    };
    // Load knowledge base (Cấp 1)
    sb.get("knowledge_base", "is_active=eq.true&order=category.asc,created_at.desc&limit=50")
      .then(rows => { if(rows?.length) setKnowledgeBase(rows); })
      .catch(() => {});
    // Timeout safety: nếu Supabase chậm quá 8s trên mobile, vẫn show app
    const loadTimeout = setTimeout(() => setDataLoaded(true), 8000);
    loadSupabaseData().finally(() => { clearTimeout(loadTimeout); setDataLoaded(true); });
    // Listen for Supabase errors
    const sbErrHandler = (e) => setSbErrors(prev => [e.detail, ...prev].slice(0,5));
    window.addEventListener("sb-error", sbErrHandler);
    // Test connection
    sb.testConnection().then(ok => setSbConnected(ok));
    return () => window.removeEventListener("sb-error", sbErrHandler);
  }, []);

  // ── MERGE KPI_MASTER + custom dept từ Supabase ──────────
  const getEffectiveKpiMaster = () => {
    const merged = { ...KPI_MASTER };
    if (customKpiData.length === 0) return merged;
    // Group theo dept
    const depts = [...new Set(customKpiData.map(r => r.dept))];
    depts.forEach(dept => {
      const rows = customKpiData.filter(r => r.dept === dept);
      const first = rows[0];
      merged[dept] = {
        owner: first.owner || dept,
        dept,
        color: first.color || "#6366f1",
        kpis: rows.map(r => ({
          code:  r.kpi_code,
          label: r.label,
          dir:   r.dir || "H",
          w:     r.weight || 10,
          unit:  r.unit || "%",
          kh:    Array.isArray(r.kh_monthly) ? r.kh_monthly : Array(12).fill(0),
          note:  r.note || "",
        })),
      };
    });
    return merged;
  };
  const saveKPItoSupabase = async (dept, kpiRows) => {
    // Luôn lưu — không cần sbId, dùng dept+week_num+year làm key
    const rows = kpiRows.map(k => ({
      week_num: wk, year: 2026, dept,
      kpi_code: k.code || k.label?.replace(/\s/g,"_").toLowerCase() || "unknown",
      kpi_name: k.label, target: k.target,
      actual: k.actual, score: k.score,
      unit: k.unit || "", note: k.note || "",
      submitted_by_name: user.name,
      submitted_by: user.sbId || null,
      status: "submitted"
    }));
    const res = await sb.upsert("kpi_data", rows, "week_num,year,dept,kpi_code");
    if (!res) console.warn("saveKPI: upsert returned null — kiểm tra RLS kpi_data");
    return res;
  };

  // ── CLAUDE API HELPER ─────────────────────────────────────────
  const callClaude = async (messages, system, maxTokens=900, useWebSearch=false) => {
    const API_URL = import.meta.env.VITE_API_URL || "https://nsca-cis.vercel.app";
    const body = {
      model: "claude-sonnet-4-5",
      max_tokens: maxTokens,
      system: system || "Em là trợ lý quản trị thông minh của NSCA CIS, xưng em.",
      messages,
    };
    // Cấp 2: Web search cho câu hỏi cần thông tin bên ngoài
    if(useWebSearch) {
      body.tools = [{ type: "web_search_20250305", name: "web_search" }];
    }
    const res = await fetch(`${API_URL}/api/ai`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    });
    if(!res.ok) {
      const txt = await res.text();
      throw new Error(`HTTP ${res.status}: ${txt.slice(0,200)}`);
    }
    const d = await res.json();
    // Handle web_search tool_use blocks
    const textBlocks = (d.content||[]).filter(b => b.type === "text").map(b => b.text);
    if(textBlocks.length) return textBlocks.join("\n");
    if(d.content?.[0]?.text) return d.content[0].text;
    const errMsg = d.error?.message || JSON.stringify(d).slice(0,200);
    throw new Error(errMsg);
  };

  const buildSysPrompt = (mode) => {
    const wkDataLocal = weeklyData.length > 0 ? weeklyData : WK;
    const thang = wk<=4?1:wk<=9?2:3;
    const KH_M = [11.54,12.94,19.26,22.06,22.56,22.82,24.31,24.81,24.31,23.20,21.70,22.20];
    const khThang = KH_M[thang-1];
    const wkData = wkDataLocal.find(w=>w.w===wk) || {};
    const chsEntry = chsData.find(c=>c.l===`T${wk}`);
    const chs = chsEntry?.chs || 80;
    const chsLabel = chs>=85?"Xuất sắc":chs>=75?"Ổn định":chs>=65?"Theo dõi":"⚠ CẢNH BÁO";

    // Tính điểm thực từng phòng tuần hiện tại
    const deptScores = Object.entries(KPI_MASTER).map(([dept, d]) => {
      const s = deptScore(dept, thang<=1?1:thang<=3?2:3);
      return `  • ${dept}: ${s!=null?Math.round(s)+"đ":"–"}`;
    }).join("\n");

    // Dữ liệu tài chính tuần hiện tại
    const tc = wkData.tckt || {};
    const tcStr = tc.pt ? `Phải thu: ${tc.pt}B | Quá hạn: ${tc.qh||"–"}B | Vay NH: ${tc.vayNH||"–"}B | Tiền mặt: ${tc.tienMat||"–"}B` : "Chưa có dữ liệu TCKT tuần này";

    // PKD (Bộc Béo) - DT & KPI quản lý
    const pkd = wkData.pkd || {};
    const pkdStr = pkd.dt ? [
      `DT tuần: ${pkd.dt}B`,
      pkd.dtThep ? `Thép: ${pkd.dtThep}B` : "",
      pkd.dtNhom ? `Nhôm: ${pkd.dtNhom}B` : "",
      pkd.winRate ? `Win rate: ${pkd.winRate}%` : "",
      pkd.margin  ? `Margin: ${pkd.margin}%` : "",
      pkd.dso     ? `DSO: ${pkd.dso} ngày` : "",
      pkd.kn      ? `Claim: ${pkd.kn} case` : "",
    ].filter(Boolean).join(" | ") : "Chưa có dữ liệu PKD";

    // BD (Đức BD) - NPP breakdown & BD activities
    const bd = wkData.bd || {};
    const bdNppStr = bd.dtNtk ? [
      `NTK: ${bd.dtNtk}B`,
      bd.dtGalaxy   ? `GALAXY: ${bd.dtGalaxy}B`   : "",
      bd.dtImp      ? `IMP: ${bd.dtImp}B`          : "",
      bd.dtVnmep    ? `VNMEP: ${bd.dtVnmep}B`      : "",
      bd.dtMepco    ? `MEPCO: ${bd.dtMepco}B`      : "",
      bd.dtTrucTiep ? `Trực tiếp: ${bd.dtTrucTiep}B` : "",
    ].filter(Boolean).join(" | ") : "Chưa có dữ liệu NPP";
    const bdActStr = bd.bgTong ? [
      `BG phát hành: ${bd.bgTong} (GT: ${bd.gtBg||"–"}B)`,
      bd.dhMoi    ? `Đơn hàng mới: ${bd.dhMoi}` : "",
      bd.duAnMoi  ? `DA mới: ${bd.duAnMoi}` : "",
      bd.gapGo    ? `Gặp gỡ: ${bd.gapGo} cuộc` : "",
      bd.specIn   ? `Spec-in: ${bd.specIn} DA` : "",
      bd.claim    ? `Claim tồn: ${bd.claim} case` : "",
    ].filter(Boolean).join(" | ") : "Chưa có dữ liệu BD";

    // XK (Santi - Int. Dept)
    const intl = wkData.intl || {};
    const xkStr = intl.dtXk ? [
      `DT XK: ${intl.dtXk}B`,
      intl.donMoi ? `Đơn mới: ${intl.donMoi}` : "",
      intl.otd    ? `OTD: ${intl.otd}%` : "",
      intl.khMoi  ? `KH QT mới: ${intl.khMoi}` : "",
      intl.dtMy   ? `DT Mỹ: ${intl.dtMy}B` : "",
    ].filter(Boolean).join(" | ") : "Chưa có dữ liệu XK";

    // BO (Chị Tâm)
    const bo = wkData.bo || {};
    const boStr = bo.hdKyMoi ? [
      `HĐ ký: ${bo.hdKyMoi} (GT: ${bo.gtHdKy||"–"}B)`,
      bo.congNoQuaHan ? `Công nợ QH: ${bo.congNoQuaHan}B` : "",
      bo.hoaDonXuat   ? `HĐ VAT: ${bo.hoaDonXuat}` : "",
      bo.hsTonDong    ? `Hồ sơ tồn: ${bo.hsTonDong}` : "",
    ].filter(Boolean).join(" | ") : "Chưa có dữ liệu BO";

    // Dữ liệu vận hành tuần hiện tại
    const nhom = wkData.nhom || {};
    const thep = wkData.thep || {};
    const gh = wkData.gh || {};
    const cd = wkData.cd || {};
    const qlcl = wkData.qlcl || {};
    const opStr = [
      nhom.ht ? `SX Nhôm HT: ${nhom.ht}%` : "",
      thep.vanEi ? `Van EI: ${thep.vanEi} cái` : "",
      gh.luot ? `Giao hàng: ${gh.luot} lượt` : "",
      cd.uptime ? `Uptime CĐ: ${cd.uptime}%` : "",
      qlcl.fpy ? `FPY QLCL: ${qlcl.fpy}%` : "",
    ].filter(Boolean).join(" | ") || "Chưa có dữ liệu vận hành";

    // ── Lịch sử CHS 6 tuần gần nhất ──────────────────────────────
    const chsHistory = chsData
      .filter(c => c.chs != null)
      .slice(-6)
      .map(c => {
        const label = c.chs>=85?"✅":c.chs>=75?"⚡":c.chs>=65?"⚠️":"🔴";
        return `T${c.l?.replace("T","")}: ${c.chs}đ${label}${c.fin!=null?` (Tài chính:${c.fin} Vận hành:${c.ops} Tăng trưởng:${c.growth})` : ""}`;
      }).join(" → ") || "Chưa có lịch sử CHS";

    // ── Lịch sử DT PKD 6 tuần gần nhất ────────────────────────
    const dtHistory = wkDataLocal
      .filter(w => w.hasData && w.pkd?.dt)
      .slice(-6)
      .map(w => `T${w.w}: ${w.pkd.dt.toFixed(2)}B${w.bd?.dtNtk ? ` (NTK:${w.bd.dtNtk}B)` : ""}${w.intl?.dtXk ? ` (XK:${w.intl.dtXk}B)` : ""}`)
      .join(", ") || "Chưa có lịch sử DT";

    // ── Issues đang mở ─────────────────────────────────────────
    const openIssues = issues
      .filter(i => i.status === "pending")
      .slice(0, 8)
      .map(i => `  [${i.priority==="high"?"🔴 CAO":i.priority==="medium"?"🟡 TB":"🟢 Thấp"}] ${i.dept}: ${i.title}`)
      .join("\n") || "  Không có vấn đề tồn đọng";

    // ── Action items chưa hoàn thành ───────────────────────────
    const now = new Date();
    const openActions = actions
      .filter(a => a.status !== "done")
      .slice(0, 8)
      .map(a => {
        const dl = a.deadline ? new Date(a.deadline) : null;
        const overdue = dl && dl < now ? "⚠️QH" : "";
        return `  ${overdue}[${a.status}] ${a.owner||"?"}: ${a.title} ${dl?"→"+a.deadline:""}`;
      })
      .join("\n") || "  Không có action item tồn đọng";

    const base = `Em là Đào Thị Lê Na - CIS AI Assistant của hệ thống CIS – NSCA (Ngôi Sao Châu Á JSC), nhà sản xuất HVAC Starduct tại Việt Nam.
XƯNG HÔ BẮT BUỘC: Em xưng "em". Tên người dùng: "${user?.name}" — gọi ĐÚNG NGUYÊN VẸN.
Người dùng hiện tại: ${user?.name} (${user?.role} – ${user?.dept||"–"}) | CEO: Anh Khánh

════════════════════════════════════
TUẦN ${wk}/2026 | Tháng ${thang} | KH tháng: ${khThang}B
════════════════════════════════════

▌COMPANY HEALTH SCORE
• CHS T${wk}: ${chs}đ → ${chsLabel}
• Xu hướng: ${chsHistory}

▌DOANH THU & THƯƠNG MẠI
• PKD: ${pkdStr}
• BD/NPP: ${bdNppStr}
• BD hoạt động: ${bdActStr}
• Xuất khẩu (Santi): ${xkStr}
• Back Office (Tâm): ${boStr}
• Lịch sử DT: ${dtHistory}

▌TÀI CHÍNH
• ${tcStr}

▌VẬN HÀNH
• ${opStr}

▌ĐIỂM KPI CÁC PHÒNG (tuần ${wk})
${deptScores}
QUY TẮC: ≥100đ Đạt | 85-99đ Theo dõi | <85đ Cảnh báo

▌ISSUES ĐANG MỞ (${issues.filter(i=>i.status==="pending").length} vấn đề)
${openIssues}

▌ACTION ITEMS CHƯA XONG (${actions.filter(a=>a.status!=="done").length} items)
${openActions}
════════════════════════════════════`;

    // ── Cấp 1: Knowledge Base context ──────────────────────
    const kbContext = knowledgeBase.length > 0
      ? "\n\n▌KIẾN THỨC NỘI BỘ NSCA (tài liệu kỹ thuật / sản phẩm / quy trình)\n" +
        knowledgeBase.slice(0, 15).map(k =>
          `[${k.category||"general"}] ${k.title}: ${(k.content||"").slice(0,300)}`
        ).join("\n")
      : "";

    const modes = {
      chat: base + kbContext + `

NHIỆM VỤ: Em là CIS AI — trợ lý thông minh của NSCA, hiểu sâu về công ty và ngành HVAC. Em có thể tra cứu thông tin mới nhất từ web (ASHRAE, ISO, nhà sản xuất HVAC, thị trường...) khi được hỏi.

PHẠM VI TRẢ LỜI (theo thứ tự ưu tiên):
1. Data nội bộ NSCA — KPI, CHS, doanh thu, issues, actions (ưu tiên cao nhất, dùng số liệu thực ở trên)
2. Nghiệp vụ HVAC — kỹ thuật sản phẩm, tiêu chuẩn AMCA/AHRI/UL, thiết kế hệ thống HVAC
3. Kinh doanh & Marketing — chiến lược bán hàng, NPP, phân phối, CRM, B2B
4. Tài chính & Đầu tư — phân tích tài chính, dòng tiền, định giá, đầu tư
5. Quản trị & Lãnh đạo — OKR, KPI, quản lý đội nhóm, ra quyết định
6. Tin tức & Thị trường — xu hướng ngành xây dựng, vật liệu, HVAC Việt Nam & quốc tế
KHÔNG trả lời: nội dung không liên quan đến kinh doanh/kỹ thuật/quản trị (giải trí, chính trị cá nhân, v.v.)
CÁCH TRẢ LỜI:
- Câu hỏi về NSCA → dùng data thực ở trên, tóm tắt cô đọng, CEO bận cần thông tin nhanh
- Câu hỏi nghiệp vụ/thị trường → trả lời chuyên sâu, có thể kết nối với tình huống NSCA
- Câu hỏi phân tích sâu → mở rộng đầy đủ
- Xưng "em". Trả lời bằng ngôn ngữ người hỏi dùng.`,
      validate: base + `

NHIỆM VỤ: Em kiểm tra tính hợp lý số liệu KPI vừa nhập so với lịch sử, xưng "em". Chỉ ra bất thường. Trả lời bằng ngôn ngữ người hỏi dùng. Dưới 100 từ.`,
      thanks: base + `

NHIỆM VỤ: Em cảm ơn phòng ban nộp BC tuần ${wk}, xưng "em". Nhận xét 2 KPI nổi bật. Câu động viên ngắn. Tổng <150 từ. Trả lời bằng ngôn ngữ người hỏi dùng.`,
    };
    return modes[mode] || modes.chat;
  };

  const isCEO = user?.role==="CEO";
  // ── Computed aggregations từ weeklyData (dynamic) ──────────
  // ── Helper: aggregate weekly data ──
  const agg = (weeks) => {
    // Lọc chỉ tuần có data thật
    const realWeeks = (weeks||[]).filter(w => w.hasData===true);
    if (!realWeeks || realWeeks.length === 0) return {
      dt:null, nhomHT:null, htNhom:null, thepVAV:null, uptime:null, fpy:null,
      luotGH:null, ghLuot:null, tonKho:null, vayNH:null, pt:null, qh:null,
      thuTH:null, knTotal:null, cuGT:null, tongVay:null
    };
    const sum = (key, sub) => realWeeks.reduce((a, w) => a + (sub ? (w[sub]?.[key]||0) : (w[key]||0)), 0);
    const avg = (key, sub) => Math.round(sum(key, sub) / realWeeks.length * 10) / 10;
    return {
      dt:       sum('dt','pkd'),
      nhomHT:   avg('ht','nhom'),
      htNhom:   avg('ht','nhom'),
      thepVAV:  avg('vav','thep'),
      uptime:   avg('uptime','cd'),
      fpy:      avg('fpy','qlcl'),
      luotGH:   sum('luot','gh'),
      ghLuot:   avg('luot','gh'),
      tonKho:   avg('ton','kho'),
      vayNH:    avg('vayNH','tckt'),
      pt:       avg('pt','tckt'),
      qh:       avg('qh','tckt'),
      thuTH:    avg('thuTH','tckt') || 0,
      knTotal:  sum('kn','qlcl') || 0,
      cuGT:     avg('gt','cu') || 0,
      tongVay:  avg('tongVay','tckt') || 0,
      // Sản lượng SX Thép (từ thep object)
      vanEi:    sum('vanEi','thep'),
      vavBox:   sum('vav','thep'),
      // Sản lượng SX Nhôm (từ nhom object)
      cuaGio:   sum('cuaGio','nhom'),
      // DT chi tiết PKD (từ pkd object)
      dtVanEi:  sum('dtVanEi','pkd'),
      dtVav:    sum('dtVav','pkd'),
      dtCuaGio: sum('dtCuaGio','pkd'),
      dtVcd:    sum('dtVcd','pkd'),
      dtTamNan: sum('dtTamNan','pkd'),
      dtThep:   sum('dtThep','pkd'),
      dtNhom:   sum('dtNhom','pkd'),
      pipeline: avg('pipeline','pkd'),
    };
  };
  const wkData = weeklyData.length > 0 ? weeklyData : WK;
  // Đảm bảo wk luôn trỏ đến tuần có thật trong data
  const _validWk = wkData.find(w=>w.w===wk) ? wk : (wkData[wkData.length-1]?.w || wk);
  // Chỉ aggregate tuần có data thật (hasData=true)
  const _realWK = wkData.filter(w => w.hasData === true);
  const _M1 = agg(_realWK.filter(w => w.thang===1));
  const _M2 = agg(_realWK.filter(w => w.thang===2));
  const _M3 = agg(_realWK.filter(w => w.thang===3));
  const _Q1 = agg(_realWK);
  const currentWK = wkData.find(w=>w.w===_validWk) || wkData[wkData.length-1] || WK_EMPTY_ROW(_validWk);

  const isAdmin = ["CEO","Admin","Director"].includes(user?.role);
  // currentWK defined above with dynamic data
  const pendingReports = reports.filter(r => r.status==="pending");
  const pendingIssues = issues.filter(i => i.status==="pending");
  const currentCHS = chsData.find(c=>c.l===`T${wk}`) || chsData.filter(c=>c.chs!=null).slice(-1)[0] || {chs:null,fin:null,ops:null,growth:null,quality:null,strategy:null};

  // ── LOGIN ─────────────────────────────────────────────────
  const doLogin = async () => {
    setLoginErr("🔄 Đang xác thực...");
    const username = (login.username||"").trim();
    const pass = (login.pass||"").trim();
    if (!username || !pass) { setLoginErr("Nhập username và mật khẩu"); return; }

    // Tìm thẳng từ Supabase — không cần local fallback
    let sbUser = null;
    try {
      const rows = await sb.get("users",
        `username=eq.${encodeURIComponent(username)}&select=id,full_name,dept,role,password_hash,is_active`
      );
      sbUser = Array.isArray(rows) ? rows[0] : null;
    } catch(e) {
      setLoginErr("Lỗi kết nối Supabase: " + e.message);
      return;
    }

    if (!sbUser) { setLoginErr("Không tìm thấy tài khoản"); return; }
    if (sbUser.is_active === false) { setLoginErr("Tài khoản đã bị khóa"); return; }
    if (sbUser.password_hash !== pass) { setLoginErr("Sai mật khẩu"); return; }

    // Map Supabase role → app role
    const roleMap = {ceo:"CEO", admin:"Admin", director:"Director", manager:"Manager", staff:"Staff"};
    const localFallback = USERS_DB.find(x => x.username === username) || {};
    // Ưu tiên nickname từ USERS_DB local, fallback về Supabase full_name
    const localName = USERS_DB.find(u => u.username === username)?.name || sbUser.full_name;
    const u = {
      ...localFallback,
      id: sbUser.id,
      sbId: sbUser.id,
      name: localName,
      dept: sbUser.dept,
      role: roleMap[sbUser.role] || sbUser.role,
      pass: sbUser.password_hash,
    };
    setUser(u);
    setLoginErr("");
    if (["PKD","PKD-BD","BO","Int. Dept"].includes(u.dept)) setNav("pkd_dashboard");
    else if (!["CEO","Admin","Director"].includes(u.role)) setNav("my_dept");
    console.log("Login OK:", u.name, "| sbId:", u.sbId);

    // Reload users từ Supabase — dùng nickname từ USERS_DB nếu có
    const allUsers = await sb.get("users", "order=full_name.asc&select=id,full_name,username,dept,role,password_hash,is_active");
    if (allUsers && allUsers.length > 0) {
      const mapped = allUsers.map(su => {
        const nick = USERS_DB.find(x => x.username === su.username)?.name || su.full_name;
        return {
          id: su.id, sbId: su.id,
          username: su.username,
          name: nick,
          dept: su.dept,
          role: roleMap[su.role] || su.role,
          pass: su.password_hash,
          avatar: nick.split(" ").map(w=>w[0]).join("").slice(0,2).toUpperCase(),
          color: USERS_DB.find(x=>x.username===su.username)?.color || T.accent,
          active: su.is_active
        };
      });
      setUsers(mapped);
    }
  };

  const doApprove = async (id, status) => {
    const target = reports.find(r => r.id === id);
    if (!target) return;
    setReports(p => p.map(r => r.id===id ? {...r, status, ceoComment:comment} : r));
    setApproveTarget(null); setComment("");

    const updateData = {
      status: status === "approved" ? "approved" : "revision",
      ceo_comment: comment || "",
      reviewed_at: new Date().toISOString(),
      reviewed_by_name: user.name,
    };

    // Dùng UUID trực tiếp nếu có (report đã tồn tại trong Supabase)
    const isUUID = typeof target.id === "string" && target.id.length === 36;
    if (isUUID) {
      const res = await sb.update("weekly_reports", updateData, `id=eq.${target.id}`);
      if (res && res.length > 0) {
        setToast("✅ Đã phê duyệt & lưu Supabase");
      } else {
        setToast("⚠️ Cập nhật thất bại — thử lại");
      }
      return;
    }

    // Fallback: upsert theo week+year+dept (encode đúng)
    const dept = target.dept;
    const res = await sb.upsert("weekly_reports", {
      week_num: target.week,
      year: 2026,
      dept: dept,
      ...updateData,
      submitted_at: new Date().toISOString(),
      content: { title: target.title, submitted_by_name: target.user }
    }, "week_num,year,dept");

    if (res && res.length > 0) {
      // Cập nhật id local bằng UUID thật để lần sau dùng UUID
      setReports(p => p.map(r => r.id===id ? {...r, id: res[0].id, sbId: res[0].id} : r));
      setToast("✅ Đã phê duyệt & lưu Supabase");
    } else {
      setToast("❌ Lưu Supabase thất bại — kiểm tra kết nối");
    }
  };

  const doApproveIssue = async (id, status) => {
    setIssues(p => p.map(i => i.id===id ? {...i, status, ceoComment:comment} : i));
    setViewIssue(null); setComment("");
    try {
      const issue = issues.find(i => i.id === id);
      const uuidId = issue?.sbId || id;
      if (uuidId && typeof uuidId === "string" && uuidId.includes("-")) {
        await sb.update("issues", {
          status: "in_progress",
          resolution_note: comment || ""
        }, `id=eq.${uuidId}`);
      } else {
        console.warn("doApproveIssue: issue chưa có UUID Supabase, bỏ qua sync");
      }
    } catch(e) { console.error("doApproveIssue error:", e); }
  };
  const doSubmitReport = async () => {
    const r = { id: "temp-"+Date.now(), dept: user.dept,
      user: user.name, userId: user.id, week: wk,
      title: newReport.title, submittedAt: now.toLocaleString("vi-VN"),
      status:"pending", ceoComment:"", issues: newReport.issues };
    // Optimistic update
    setReports(p => {
      const filtered = p.filter(x => !(x.week===wk && x.dept===user.dept));
      return [r, ...filtered];
    });
    setSubmitOpen(false); setNewReport({title:"",issues:"",proposals:""});
    // Save to Supabase
    const sbResult = await sb.upsert("weekly_reports", {
      week_num: wk, year: 2026, dept: user.dept,
      submitted_by: user.sbId || null,
      submitted_by_name: user.name,
      status: "submitted",
      submitted_at: new Date().toISOString(),
      content: { title: newReport.title, issues: newReport.issues, proposals: newReport.proposals, submitted_by_name: user.name }
    }, "week_num,year,dept");
    // Reload từ Supabase để xác nhận
    const fresh = await sb.get("weekly_reports", "order=submitted_at.desc&limit=100");
    if(fresh && fresh.length > 0) {
      const mapped = fresh.map(r => ({
        id: r.id, sbId: r.id, dept: r.dept,
        user: r.content?.submitted_by_name || r.submitted_by_name || r.dept,
        userId: r.submitted_by, week: r.week_num,
        title: r.content?.title || `BC ${r.dept} T${r.week_num}`,
        submittedAt: r.submitted_at ? new Date(r.submitted_at).toLocaleString("vi-VN") : "--",
        status: r.status==="submitted"?"pending":(r.status||"pending"),
        ceoComment: r.ceo_comment||"",
        issues: r.content?.kpi_lines?.join(" | ") || r.content?.issues || "",
      }));
      setReports(mapped);
      setToast("✅ Báo cáo đã lưu Supabase thành công!");
    } else if(sbResult && sbResult[0]) {
      setToast("✅ Báo cáo đã lưu Supabase thành công!");
    } else {
      setToast("⚠️ Lưu thành công local. Kiểm tra RLS Supabase nếu mất sau khi reload.");
    }
  };
  const doSubmitIssue = async () => {
    const i = { id: issues.length+1, from: user.name, fromId: user.id, dept: user.dept,
      title: newIssue.title, type: newIssue.type, priority: newIssue.priority,
      status:"pending", createdAt: now.toLocaleDateString("vi-VN"),
      desc: newIssue.desc, ceoComment:"" };
    setIssues(p => [i, ...p]);
    setIssueOpen(false); setNewIssue({title:"",desc:"",type:"equipment",priority:"medium"});
    // Save to Supabase — luôn lưu
    const issueRes = await sb.insert("issues", {
      week_num: wk, year: 2026, dept: user.dept,
      title: newIssue.title, description: newIssue.desc,
      type: newIssue.type, priority: newIssue.priority,
      status: "open",
      created_by: user.sbId || null,
      created_by_name: user.name
    });
    if (issueRes && issueRes[0]) {
      setIssues(p => p.map(i => i.title===newIssue.title && i.dept===user.dept
        ? {...i, id: issueRes[0].id, sbId: issueRes[0].id} : i));
    }
  };

  /* ─── LOGIN ─── */

  // ── Minutes Panel ──────────────────────────────────
  const MinutesPanel = () => {
    const [showNewMinute, setShowNewMinute] = useState(false);
    const [viewMinute, setViewMinute] = useState(null);
    const [newMinute, setNewMinute] = useState({title:"",content:"",decisions:"",attendees:""});
    const [saving, setSaving] = useState(false);

    useEffect(() => {
      if (minutesLoaded) return; // đã load rồi, không load lại
      sb.get("meeting_minutes","year=eq.2026&order=week_number.desc,created_at.desc").then(rows => {
        if(rows) {
          // Deduplicate: chỉ giữ 1 biên bản mới nhất mỗi tuần (phòng trường hợp thiếu UNIQUE constraint DB)
          const seen = new Set();
          const deduped = rows.filter(r => { if(seen.has(r.week_number)) return false; seen.add(r.week_number); return true; });
          setMinutes(deduped);
        }
        setMinutesLoaded(true);
      });
    }, []);

    const saveMinute = async () => {
      if(!newMinute.title.trim()) return alert("Vui lòng nhập tiêu đề");
      setSaving(true);
      const res = await sb.upsert("meeting_minutes", {
        week_number: wk, year: 2026,
        title: newMinute.title, content: newMinute.content,
        decisions: newMinute.decisions,
        attendees: newMinute.attendees.split(",").map(s=>s.trim()).filter(Boolean),
        created_by: user.name,
      }, "week_number,year");
      if(res && res[0]) {
        setMinutes(prev => [res[0], ...prev.filter(m=>!(m.week_number===wk&&m.year===2026))].sort((a,b)=>b.week_number-a.week_number));
        setShowNewMinute(false);
        setNewMinute({title:"",content:"",decisions:"",attendees:""});
      } else alert("❌ Lỗi lưu. Kiểm tra kết nối Supabase.");
      setSaving(false);
    };

    return (
      <div style={{padding:"0 0 24px",maxWidth:900}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:20}}>
          <SectionTitle sub="Lưu trữ biên bản họp giao ban · Dữ liệu từ Supabase">📋 Biên bản họp</SectionTitle>
          {isCEO && <button onClick={()=>setShowNewMinute(true)}
            style={{background:"linear-gradient(135deg,#2563eb,#1d4ed8)",border:"none",borderRadius:8,
              padding:"9px 20px",color:"white",fontSize:16,cursor:"pointer",fontWeight:700}}>
            + Tạo biên bản Tuần {wk}
          </button>}
        </div>
        {showNewMinute && (
          <div style={{background:T.card,border:`1px solid ${T.accent}40`,borderRadius:12,padding:"20px 24px",marginBottom:20}}>
            <div style={{fontSize:15,fontWeight:800,marginBottom:14}}>📝 Biên bản Tuần {wk}/2026</div>
            {[{k:"title",l:"Tiêu đề"},{k:"attendees",l:"Người tham dự (ngăn cách bằng dấu phẩy)"},{k:"decisions",l:"Quyết định CEO"},{k:"content",l:"Nội dung đầy đủ"}].map(f=>(
              <div key={f.k} style={{marginBottom:12}}>
                <div style={{fontSize:14,color:T.muted,marginBottom:4}}>{f.l}</div>
                <textarea value={newMinute[f.k]} onChange={e=>setNewMinute(p=>({...p,[f.k]:e.target.value}))}
                  rows={f.k==="content"?5:2}
                  style={{width:"100%",background:"rgba(255,255,255,0.04)",border:`1px solid ${T.border}`,
                    borderRadius:8,padding:"8px 12px",color:T.text,fontSize:16,outline:"none",
                    resize:"vertical",boxSizing:"border-box",fontFamily:"Calibri,sans-serif"}}/>
              </div>
            ))}
            <div style={{display:"flex",gap:10,justifyContent:"flex-end"}}>
              <button onClick={()=>setShowNewMinute(false)} style={{background:"transparent",border:`1px solid ${T.border}`,borderRadius:8,padding:"8px 16px",color:T.muted,fontSize:16,cursor:"pointer"}}>Hủy</button>
              <button onClick={saveMinute} disabled={saving}
                style={{background:saving?"rgba(255,255,255,0.05)":"linear-gradient(135deg,#2563eb,#1d4ed8)",border:"none",borderRadius:8,padding:"8px 24px",color:saving?T.muted:"white",fontSize:16,cursor:saving?"default":"pointer",fontWeight:700}}>
                {saving?"⏳ Đang lưu...":"💾 Lưu biên bản"}
              </button>
            </div>
          </div>
        )}
        {!minutesLoaded ? (
          <div style={{textAlign:"center",padding:40,color:T.muted}}>⏳ Đang tải...</div>
        ) : minutes.length===0 ? (
          <div style={{textAlign:"center",padding:48,background:T.card,border:`1px solid ${T.border}`,borderRadius:12}}>
            <div style={{fontSize:32,marginBottom:12}}>📋</div>
            <div style={{fontWeight:700,marginBottom:8}}>Chưa có biên bản nào</div>
            <div style={{fontSize:15,color:T.muted}}>CEO nhấn "+ Tạo biên bản" để bắt đầu</div>
          </div>
        ) : (
          (() => {
            const cutoff = new Date(); cutoff.setMonth(cutoff.getMonth()-3);
            const recent = minutes.filter(m=>new Date(m.created_at)>=cutoff);
            const old3m  = minutes.filter(m=>new Date(m.created_at)<cutoff);
            // showOld3m handled via data attr
            const delMinute = async(m,e) => {
              e.stopPropagation();
              if(!window.confirm("Xóa biên bản tuần "+m.week_number+"?")) return;
              setMinutes(prev=>prev.filter(x=>x.id!==m.id));
              if(m.id) await fetch(`${SUPABASE_URL}/rest/v1/meeting_minutes?id=eq.${m.id}`,{method:"DELETE",headers:sb.headers});
            };
            const MinCard = ({m}) => (
              <div key={m.id} style={{position:"relative"}}>
                <div onClick={()=>setViewMinute(m)}
                  style={{background:T.card,border:`1px solid ${T.border}`,borderRadius:12,padding:"16px 18px",
                    display:"flex",gap:14,alignItems:"flex-start",cursor:"pointer"}}
                  onMouseEnter={e=>e.currentTarget.style.borderColor=T.accent}
                  onMouseLeave={e=>e.currentTarget.style.borderColor=T.border}>
                  <div style={{width:44,height:44,background:"rgba(37,99,235,0.12)",borderRadius:8,display:"flex",alignItems:"center",justifyContent:"center",fontSize:20,flexShrink:0}}>📋</div>
                  <div style={{flex:1}}>
                    <div style={{fontSize:16,fontWeight:700,marginBottom:3}}>{m.title}</div>
                    <div style={{fontSize:14,color:T.muted}}>Tuần {m.week_number}/2026 · {new Date(m.created_at).toLocaleDateString("vi-VN")}</div>
                    <div style={{fontSize:14,color:T.green,marginTop:4}}>● Đã lưu CIS</div>
                  </div>
                  <div style={{display:"flex",gap:6,alignItems:"center"}}>
                    <div style={{fontSize:16,color:T.accent}}>→</div>
                    {isCEO && <button onClick={(e)=>delMinute(m,e)}
                      style={{padding:"4px 10px",borderRadius:6,background:"rgba(239,68,68,0.1)",border:"1px solid rgba(239,68,68,0.3)",
                        color:T.red,fontSize:14,cursor:"pointer",fontWeight:700}}>🗑</button>}
                  </div>
                </div>
              </div>
            );
            return (
              <div style={{display:"grid",gap:12}}>
                <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:12}}>
                  {recent.map(m=><MinCard key={m.id} m={m}/>)}
                </div>
                {old3m.length>0 && (
                  <div>
                    <details>
                      <summary style={{background:"rgba(255,255,255,0.04)",border:`1px solid ${T.border}`,borderRadius:8,padding:"8px 16px",
                        color:T.muted,fontSize:14,cursor:"pointer",listStyle:"none",width:"100%",textAlign:"center"}}>
                        ▼ Xem {old3m.length} biên bản cũ hơn 3 tháng
                      </summary>
                      <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:12,marginTop:8,opacity:0.6}}>
                        {old3m.map(m=><MinCard key={m.id} m={m}/>)}
                      </div>
                    </details>
                  </div>
                )}
              </div>
            );
          })()
        )}
        {viewMinute && (
          <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.8)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1000,backdropFilter:"blur(4px)"}}>
            <div style={{background:T.bg2,border:`1px solid ${T.border}`,borderRadius:14,padding:"28px 32px",width:640,maxHeight:"85vh",overflow:"auto"}}>
              <div style={{display:"flex",justifyContent:"space-between",marginBottom:16}}>
                <div style={{fontSize:17,fontWeight:800}}>{viewMinute.title}</div>
                <button onClick={()=>setViewMinute(null)} style={{background:"transparent",border:"none",color:T.muted,cursor:"pointer",fontSize:20}}>✕</button>
              </div>
              <div style={{fontSize:15,color:T.muted,marginBottom:14}}>Tuần {viewMinute.week_number} · {new Date(viewMinute.created_at).toLocaleDateString("vi-VN")} · {viewMinute.created_by}</div>
              {viewMinute.decisions && <div style={{background:"rgba(52,211,153,0.06)",border:`1px solid ${T.green}30`,borderRadius:8,padding:"12px 16px",marginBottom:12}}>
                <div style={{fontSize:14,color:T.green,marginBottom:6}}>QUYẾT ĐỊNH CEO</div>
                <div style={{fontSize:16,whiteSpace:"pre-wrap",lineHeight:1.8}}>{viewMinute.decisions}</div>
              </div>}
              {viewMinute.content && <div style={{fontSize:16,whiteSpace:"pre-wrap",lineHeight:1.8,color:T.dim,marginBottom:12}}>{viewMinute.content}</div>}
              <button onClick={()=>setViewMinute(null)} style={{width:"100%",background:"rgba(255,255,255,0.05)",border:`1px solid ${T.border}`,borderRadius:8,padding:"9px",color:T.muted,fontSize:16,cursor:"pointer"}}>Đóng</button>
            </div>
          </div>
        )}
      </div>
    );
  };

  // ── Setup Panel ─────────────────────────────────────
  const SetupPanel = () => {
    const runSetup = async () => {
      setSetupRunning(true);
      setSetupResults(["⏳ Đang chạy khởi tạo..."]);
      const res = await setupDatabase();
      setSetupResults(res);
      setSetupRunning(false);
    };
    return (
      <div style={{gridColumn:"1/-1",background:"rgba(37,99,235,0.08)",border:`1px solid ${T.accent}40`,borderRadius:14,padding:"20px 24px"}}>
        <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:setupResults.length?14:0}}>
          <div style={{fontSize:26}}>🔧</div>
          <div style={{flex:1}}>
            <div style={{fontSize:15,fontWeight:800}}>Khởi tạo / Đồng bộ Database</div>
            <div style={{fontSize:14,color:T.muted,marginTop:2}}>
              Seed users vào Supabase · Tạo cột thiếu · Mở RLS
              <span style={{marginLeft:8,color:T.yellow,fontSize:11}}>⚡ Chạy 1 lần sau deploy</span>
            </div>
          </div>
          <button onClick={runSetup} disabled={setupRunning}
            style={{background:setupRunning?"rgba(255,255,255,0.05)":"linear-gradient(135deg,#2563eb,#1d4ed8)",
              border:"none",borderRadius:8,padding:"10px 22px",
              color:setupRunning?T.muted:"white",fontSize:16,cursor:setupRunning?"default":"pointer",fontWeight:700}}>
            {setupRunning?"⏳ Đang chạy...":"▶ Khởi tạo ngay"}
          </button>
        </div>
        {setupResults.length>0 && (
          <div style={{background:"rgba(0,0,0,0.4)",borderRadius:8,padding:"12px 16px",fontFamily:"monospace",fontSize:15,lineHeight:2}}>
            {setupResults.map((r,i)=><div key={i}>{r}</div>)}
            {!setupRunning && <div style={{marginTop:6,color:T.green,fontFamily:"Calibri,sans-serif"}}>✅ Xong! Đăng xuất và đăng nhập lại.</div>}
          </div>
        )}
      </div>
    );
  };

  // Loading overlay — hiện khi đã login nhưng data chưa về
  const LoadingOverlay = () => (
    <div style={{position:"fixed",inset:0,background:"rgba(10,14,26,0.92)",
        display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",
        zIndex:2000,backdropFilter:"blur(8px)"}}>
      <div style={{fontSize:40,marginBottom:16}}>🏭</div>
      <div style={{fontSize:18,fontWeight:700,color:"white",marginBottom:8}}>Đang tải dữ liệu từ Supabase...</div>
      <div style={{fontSize:15,color:"#64748b"}}>Kết nối hệ thống CIS · Vui lòng chờ</div>
      <div style={{marginTop:24,width:200,height:4,background:"rgba(255,255,255,0.1)",borderRadius:4,overflow:"hidden"}}>
        <div style={{height:"100%",background:"linear-gradient(90deg,#2563eb,#7c3aed)",
            animation:"progress 1.5s ease-in-out infinite",borderRadius:4,
            width:"60%",transform:"translateX(-100%)"}}/>
      </div>
    </div>
  );


  /* ─── SIDEBAR NAV GROUPS ─── */
  const redKPIs = Object.entries(KPI_MASTER).filter(([,d])=>{ const s=deptScore(d.dept,wk<=4?1:wk<=9?2:3); return s!=null&&s<85; }).length;
  const NAV_GROUPS = isAdmin ? [
    // ── CEO / Admin / Director: full access ──
    { group:"TỔNG QUAN", items:[
      {id:"dashboard",   icon:"📊", label:"Dashboard CEO"},
      {id:"health",      icon:"💓", label:"Health Score"},
    ]},
    { group:"BÁO CÁO", items:[
      {id:"bc_status",   icon:"📑", label:"Tình trạng nộp BC"},
      {id:"bc_submit",   icon:"📝", label:"Nộp báo cáo", badge:pendingReports.length},
    ]},
    { group:"PHÂN TÍCH", items:[
      {id:"kpi",           icon:"📈", label:"KPI Departments", badge:redKPIs},
      {id:"pkd_dashboard", icon:"🛒", label:"PKD Dashboard"},
      {id:"issues",        icon:"⚠️",  label:"Issues & Risks",  badge:pendingIssues.length},
      {id:"recs",          icon:"💡", label:"Khuyến nghị"},
      {id:"reminder",      icon:"🔔", label:"Nhắc Nhở"},
      {id:"cis_ai",        icon:"🤖", label:"AI Assistant"},
    ]},
    { group:"HÀNH ĐỘNG", items:[
      {id:"actions",     icon:"✅", label:"Action Tracker"},
      {id:"meeting",     icon:"🤝", label:"Họp giao ban"},
      {id:"ceo_dec",     icon:"⚖️",  label:"Quyết định CEO"},
      {id:"minutes",     icon:"📋", label:"Biên bản họp"},
      {id:"period",      icon:"📊", label:"Tổng hợp kỳ"},
    ]},
    { group:"QUẢN TRỊ", items:[
      {id:"manage_week", icon:"📅", label:"Quản lý tuần"},
      {id:"users",       icon:"👤", label:"Quản lý User"},
      {id:"documents",   icon:"📁", label:"Tài liệu"},
      {id:"ai_sync",     icon:"🔄", label:"AI Sync Drive"},
      {id:"kb_admin",    icon:"📚", label:"Tài liệu AI"},
      {id:"config",      icon:"⚙️",  label:"Cấu hình"},
    ]},
  ] : [
    // ── Manager / Staff: chỉ thấy phòng mình ──
    { group:`PHÒNG BAN · ${user?.dept||""}`, items:[
      ...(["PKD","PKD-BD","BO","Int. Dept"].includes(user?.dept)
        ? [{id:"pkd_dashboard", icon:"🛒", label:"PKD Dashboard"}]
        : [{id:"my_dept", icon:"🏢", label:"Tổng quan phòng tôi"}]),
      {id:"bc_submit", icon:"📝", label:`Nộp KPI Tuần ${wk}`},
      {id:"issues",    icon:"⚠️",  label:"Vấn đề / Đề xuất", badge:pendingIssues.filter(i=>i.dept===user?.dept).length},
      {id:"reminder",  icon:"🔔", label:"Nhắc Nhở"},
      {id:"cis_ai",    icon:"🤖", label:"AI Assistant"},
    ]},
    { group:"THAM KHẢO", items:[
      {id:"health",    icon:"💓", label:"Sức khỏe DN"},
      {id:"documents", icon:"📁", label:"Tài liệu"},
    ]},
  ];
  // flat list for lookups
  const NAV_ITEMS = NAV_GROUPS.flatMap(g=>g.items);

  const SIDE_W = isMobile ? 0 : sideCollapsed ? 50 : 220;


  if(!user) return (

    <div style={{minHeight:"100vh",background:`radial-gradient(ellipse at 30% 20%, #0d1b3e 0%, ${T.bg0} 65%)`,
      display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"Calibri,sans-serif"}}>
      <div style={{width:400,background:`rgba(255,255,255,0.025)`,border:`1px solid ${T.border}`,borderRadius:16,padding:"40px 36px",backdropFilter:"blur(20px)"}}>
        <div style={{textAlign:"center",marginBottom:32}}>
          <div style={{display:"inline-flex",alignItems:"center",justifyContent:"center",
            width:56,height:56,background:"linear-gradient(135deg,#2563eb,#1d4ed8)",
            borderRadius:14,fontSize:23,fontWeight:900,color:"white",marginBottom:16}}>NS</div>
          <div style={{fontSize:25,fontWeight:900,color:T.text,letterSpacing:"-0.5px"}}>NGÔI SAO CHÂU Á</div>
          <div style={{fontSize:15,color:T.muted,letterSpacing:"3px",marginTop:5}}>CIS · MANAGEMENT PLATFORM v6.3  ·  ☁ SUPABASE</div>
        </div>
        <div style={{marginBottom:12}}>
          <div style={{fontSize:15,color:T.muted,letterSpacing:"1px",marginBottom:6}}>TÊN ĐĂNG NHẬP</div>
          <input value={login.username}
            onChange={e=>setLogin(p=>({...p,username:e.target.value.toLowerCase().trim()}))}
            onKeyDown={e=>e.key==="Enter"&&document.getElementById("pw-input")?.focus()}
            placeholder="username (vd: dhk, duan, son...)"
            autoComplete="username"
            style={{width:"100%",background:"rgba(255,255,255,0.04)",border:`1px solid ${T.border}`,
              padding:"11px 14px",color:T.text,fontSize:16,outline:"none",
              borderRadius:8,fontFamily:"Calibri,sans-serif",boxSizing:"border-box"}}/>
        </div>
        <div style={{marginBottom:22}}>
          <div style={{fontSize:15,color:T.muted,letterSpacing:"1px",marginBottom:6}}>MẬT KHẨU</div>
          <input type="password" value={login.pass} onChange={e=>setLogin(p=>({...p,pass:e.target.value}))}
            onKeyDown={e=>e.key==="Enter"&&doLogin()} placeholder="Nhập mật khẩu..."
            style={{width:"100%",background:"rgba(15,22,40,0.9)",border:`1px solid ${T.border}`,borderRadius:8,
              padding:"10px 14px",color:T.text,fontSize:18,outline:"none",boxSizing:"border-box"}}/>
        </div>
        {loginErr && <div style={{color:T.red,fontSize:17,marginBottom:12,textAlign:"center"}}>{loginErr}</div>}
        <button onClick={doLogin} style={{width:"100%",background:"linear-gradient(135deg,#2563eb,#1d4ed8)",border:"none",
          borderRadius:8,padding:"13px",color:"white",fontSize:18,fontWeight:700,cursor:"pointer",letterSpacing:"0.5px"}}>
          ĐĂNG NHẬP →
        </button>
        <div style={{marginTop:12,padding:"8px 12px",borderRadius:8,background:"rgba(16,185,129,0.08)",
          border:"1px solid rgba(16,185,129,0.2)",fontSize:15,color:"#10b981",textAlign:"center",marginBottom:8}}>
          ☁ Kết nối Supabase · Dữ liệu được mã hóa &amp; bảo mật
        </div>

      </div>
    </div>
  );

  return (
    <>
    {user && !dataLoaded && <LoadingOverlay />}
    <div style={{height:"100vh",background:T.bg0,color:T.text,fontFamily:"Calibri,sans-serif",
      fontSize:18,display:"flex",flexDirection:isMobile?"column":"row",overflow:"hidden"}}>

      {/* ══════ SIDEBAR ══════ */}
      {!isMobile && <div style={{width:SIDE_W,background:T.bg1,borderRight:`1px solid ${T.border}`,
        display:"flex",flexDirection:"column",flexShrink:0,transition:"width 0.2s",overflow:"hidden",position:"relative",zIndex:10}}>
        {/* logo */}
        <div style={{padding:"16px 12px",borderBottom:`1px solid ${T.border}`,display:"flex",alignItems:"center",gap:10,flexShrink:0}}>
          <div style={{width:30,height:30,background:"linear-gradient(135deg,#2563eb,#1d4ed8)",borderRadius:8,
            display:"flex",alignItems:"center",justifyContent:"center",fontSize:17,fontWeight:900,color:"white",flexShrink:0}}>NS</div>
          {!sideCollapsed && <div>
            <div style={{fontSize:17,fontWeight:800,letterSpacing:"0.3px",whiteSpace:"nowrap"}}>NSCA CIS</div>
            <div style={{fontSize:15,color:T.muted,letterSpacing:"1px"}}>v6.3</div>
          </div>}
        </div>
        {/* nav groups */}
        <div style={{flex:1,padding:"8px 6px",display:"flex",flexDirection:"column",gap:0,overflowY:"auto"}}>
          {NAV_GROUPS.map(g => (
            <div key={g.group} style={{marginBottom:4}}>
              {!sideCollapsed && (
                <div style={{fontSize:15,fontWeight:800,letterSpacing:"1.5px",color:T.dim,padding:"8px 8px 4px",textTransform:"uppercase"}}>{g.group}</div>
              )}
              {sideCollapsed && <div style={{height:8}}/>}
              {g.items.map(n => (
                <button key={n.id} onClick={() => setNav(n.id)} title={n.label}
                  style={{width:"100%",display:"flex",alignItems:"center",gap:8,padding:"7px 8px",borderRadius:7,
                    background:nav===n.id?"rgba(37,99,235,0.18)":"transparent",
                    color:nav===n.id?"#60a5fa":T.muted,border:"none",cursor:"pointer",
                    fontSize:16,fontWeight:nav===n.id?700:400,textAlign:"left",position:"relative",marginBottom:1}}>
                  <span style={{fontSize:18,flexShrink:0,lineHeight:1}}>{n.icon}</span>
                  {!sideCollapsed && <span style={{whiteSpace:"nowrap",flex:1}}>{n.label}</span>}
                  {n.badge>0 && <span style={{background:T.red,color:"white",borderRadius:10,padding:"1px 5px",fontSize:16,fontWeight:800,flexShrink:0}}>{n.badge}</span>}
                  {nav===n.id && <div style={{position:"absolute",left:0,top:0,width:3,height:"100%",background:T.accent,borderRadius:"0 2px 2px 0"}}/>}
                </button>
              ))}
              {!sideCollapsed && <div style={{height:1,background:T.border,margin:"4px 4px 0"}}/>}
            </div>
          ))}
        </div>
        {/* user + collapse */}
        <div style={{padding:"12px 8px",borderTop:`1px solid ${T.border}`}}>
          {!sideCollapsed && (
            <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:8,padding:"0 4px"}}>
              <Av u={user} sz={28}/>
              <div style={{flex:1,minWidth:0}}>
                <div style={{fontSize:15,fontWeight:700,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{user.name.split(" ").slice(-2).join(" ")}</div>
                <div style={{fontSize:16,color:T.muted}}>{user.role}</div>
              </div>
              <button onClick={()=>{setShowProfile(true);setNewPass({old:"",n1:"",n2:"",msg:"",ok:false});}}
                title="Đổi mật khẩu"
                style={{background:"rgba(255,255,255,0.06)",border:`1px solid ${T.border}`,borderRadius:6,
                  padding:"3px 7px",color:T.muted,fontSize:16,cursor:"pointer",flexShrink:0}}>⚙️</button>
            </div>
          )}
          <button onClick={()=>setSideCollapsed(p=>!p)} style={{width:"100%",background:"rgba(255,255,255,0.04)",
            border:`1px solid ${T.border}`,borderRadius:6,padding:"5px",color:T.muted,fontSize:16,cursor:"pointer"}}>
            {sideCollapsed?"▶":"◀"}
          </button>
          {!sideCollapsed && <button onClick={()=>setUser(null)} style={{width:"100%",marginTop:6,background:"rgba(239,68,68,0.08)",
            border:`1px solid ${T.red}30`,borderRadius:6,padding:"5px",color:T.red,fontSize:15,cursor:"pointer"}}>
            Đăng xuất
          </button>}
        </div>
      </div>}

      {/* ── PROFILE / ĐỔI MẬT KHẨU MODAL ── */}
      {showProfile && (
        <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.7)",display:"flex",alignItems:"center",
          justifyContent:"center",zIndex:1000}} onClick={()=>setShowProfile(false)}>
          <div style={{background:T.bg1,border:`1px solid ${T.border}`,borderRadius:14,padding:28,
            width:360,boxShadow:"0 20px 60px rgba(0,0,0,0.5)"}} onClick={e=>e.stopPropagation()}>
            {/* Header */}
            <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:20}}>
              <Av u={user} sz={44}/>
              <div>
                <div style={{fontSize:18,fontWeight:700,color:T.text}}>{user.name}</div>
                <div style={{fontSize:16,color:T.muted}}>{user.role} · {user.dept}</div>
              </div>
            </div>
            <div style={{height:1,background:T.border,marginBottom:20}}/>
            {/* Đổi mật khẩu */}
            <div style={{fontSize:16,fontWeight:700,color:T.text,marginBottom:14}}>🔑 Đổi mật khẩu</div>
            {[
              {key:"old", label:"Mật khẩu hiện tại", ph:"••••••"},
              {key:"n1",  label:"Mật khẩu mới",      ph:"••••••"},
              {key:"n2",  label:"Xác nhận mật khẩu", ph:"••••••"},
            ].map(f=>(
              <div key={f.key} style={{marginBottom:10}}>
                <div style={{fontSize:15,color:T.muted,marginBottom:4}}>{f.label}</div>
                <input type="password" value={newPass[f.key]}
                  onChange={e=>setNewPass(p=>({...p,[f.key]:e.target.value,msg:"",ok:false}))}
                  placeholder={f.ph}
                  style={{width:"100%",background:"rgba(255,255,255,0.05)",border:`1px solid ${T.border}`,
                    borderRadius:7,padding:"9px 12px",color:T.text,fontSize:15,outline:"none",boxSizing:"border-box"}}/>
              </div>
            ))}
            {newPass.msg && (
              <div style={{fontSize:16,color:newPass.ok?T.green:T.red,marginBottom:10,textAlign:"center"}}>
                {newPass.msg}
              </div>
            )}
            <button onClick={()=>{
              if(!newPass.old||!newPass.n1||!newPass.n2) return setNewPass(p=>({...p,msg:"Vui lòng điền đầy đủ"}));
              if(newPass.n1.length<6) return setNewPass(p=>({...p,msg:"Mật khẩu mới phải ≥ 6 ký tự"}));
              if(newPass.n1!==newPass.n2) return setNewPass(p=>({...p,msg:"Mật khẩu xác nhận không khớp"}));
              // Update Supabase TRƯỚC (dùng username ASCII — không bị encode lỗi)
              const updateSbPass = async () => {
                const username = user.username || USERS_DB.find(u=>u.name===user.name)?.username;
                if (!username) {
                  setNewPass(p=>({...p,msg:"⚠️ Không tìm thấy username. Liên hệ Admin.",ok:false}));
                  return;
                }
                // Lấy pass hiện tại từ Supabase để verify (tránh state bị stale)
                const rows = await sb.get("users", `username=eq.${username}&select=password_hash`);
                const currentHash = rows?.[0]?.password_hash || user.pass;
                if (newPass.old !== currentHash) {
                  setNewPass(p=>({...p,msg:"❌ Mật khẩu hiện tại không đúng",ok:false}));
                  return;
                }
                const res = await sb.update("users",
                  {password_hash: newPass.n1},
                  `username=eq.${username}`
                );
                if (res && res.length > 0) {
                  setUser(u=>({...u, pass:newPass.n1}));
                  setUsers(prev => prev.map(u => u.id===user.id ? {...u, pass:newPass.n1} : u));
                  setNewPass(p=>({...p,msg:"✅ Đổi mật khẩu thành công!",ok:true,old:"",n1:"",n2:""}));
                } else {
                  setNewPass(p=>({...p,msg:"❌ Lưu thất bại — kiểm tra kết nối Supabase.",ok:false}));
                }
              };
              updateSbPass();
              setNewPass(p=>({...p,msg:"⏳ Đang lưu vào Supabase...",ok:true}));
            }} style={{width:"100%",background:"linear-gradient(135deg,#2563eb,#1d4ed8)",border:"none",
              borderRadius:8,padding:"11px",color:"white",fontSize:16,fontWeight:700,cursor:"pointer",marginTop:4}}>
              Cập nhật mật khẩu
            </button>
            <button onClick={()=>setShowProfile(false)}
              style={{width:"100%",background:"transparent",border:`1px solid ${T.border}`,borderRadius:8,
                padding:"9px",color:T.muted,fontSize:15,cursor:"pointer",marginTop:8}}>
              Đóng
            </button>
          </div>
        </div>
      )}

      {/* ══════ MAIN CONTENT ══════ */}
      <div style={{flex:1,display:"flex",flexDirection:"column",overflow:"hidden",minWidth:0}}>
        {/* TOP BAR */}
        {isMobile ? (
          <div style={{background:T.bg1,borderBottom:`1px solid ${T.border}`,padding:"0 16px",
            display:"flex",alignItems:"center",justifyContent:"space-between",height:52,flexShrink:0,zIndex:20}}>
            <div style={{display:"flex",alignItems:"center",gap:10}}>
              <button onClick={()=>setMobileNavOpen(true)}
                style={{width:38,height:38,borderRadius:9,background:"rgba(255,255,255,0.06)",
                  border:`1px solid ${T.border}`,color:T.text,fontSize:20,cursor:"pointer"}}>☰</button>
              <div>
                <div style={{fontSize:15,fontWeight:800,color:T.text}}>
                  {nav==="m_dash"?"🏠 Tổng quan":(NAV_ITEMS.find(n=>n.id===nav)?.icon||"")+" "+(NAV_ITEMS.find(n=>n.id===nav)?.label||nav)}
                </div>
                <div style={{fontSize:12,color:T.muted}}>Tuần {wk}/2026</div>
              </div>
            </div>
            <div style={{display:"flex",alignItems:"center",gap:10}}>
              <select value={wk} onChange={e=>setWk(Number(e.target.value))}
                style={{background:T.bg2,border:`1px solid ${T.border}`,borderRadius:7,
                  padding:"5px 8px",color:T.text,fontSize:14,cursor:"pointer"}}>
                {wkData.map(w=><option key={w.w} value={w.w}>T{w.w}{w.hasData?" ✓":""}</option>)}
              </select>
              <button onClick={()=>{
                  if(window.caches){
                    window.caches.keys().then(keys=>Promise.all(keys.map(k=>window.caches.delete(k))))
                      .then(()=>window.location.reload(true));
                  } else { window.location.reload(true); }
                }}
                style={{width:32,height:32,borderRadius:8,background:"rgba(37,99,235,0.15)",
                  border:"1px solid rgba(37,99,235,0.3)",color:"#60a5fa",
                  fontSize:15,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"}}
                title="Cập nhật bản mới">
                ↻
              </button>
              <Av u={user} sz={32}/>
            </div>
          </div>
        ) : (
          <div style={{background:T.bg1,borderBottom:`1px solid ${T.border}`,padding:"0 24px",
            display:"flex",alignItems:"center",justifyContent:"space-between",height:50,flexShrink:0}}>
            <div style={{fontSize:17,color:T.muted}}>
              {NAV_ITEMS.find(n=>n.id===nav)?.label || ""} &nbsp;/&nbsp;
              <span style={{color:T.text}}>Tuần {wk} · {wkData.find(w=>w.w===wk)?.ngay}/2026</span>
            </div>
            <div style={{display:"flex",alignItems:"center",gap:18}}>
              <div style={{display:"flex",gap:4}}>
                {wkData.map(w=>(
                  <button key={w.w} onClick={()=>setWk(w.w)}
                    style={{width:28,height:24,borderRadius:6,fontSize:15,fontWeight:wk===w.w?800:400,
                      background:wk===w.w?"rgba(37,99,235,0.25)":"transparent",
                      color:wk===w.w?"#60a5fa":T.dim,border:wk===w.w?`1px solid ${T.accent}40`:`1px solid transparent`,
                      cursor:"pointer"}}>
                    {w.w}
                  </button>
                ))}
              </div>
              <div style={{fontFamily:"Calibri,sans-serif",fontSize:16,color:T.muted}}>{now.toLocaleTimeString("vi-VN")}</div>
              <Av u={user} sz={32}/>
            </div>
          </div>
        )}

        {/* SCROLL AREA */}
        <div style={{flex:1,overflowY:"auto",overflowX:"hidden",padding:isMobile?"12px 14px 80px 14px":"20px 24px 80px 24px",minHeight:0}}>
          {/* m_ai → rendered via MobileAiChat component below */}
          {nav==="m_ai" && isMobile && <MobileAiChat wk={wk} issues={issues} actions={actions} chsData={chsData} wkData={wkData} weeklyData={weeklyData} user={user} T={T}/>}

                    {/* ══════ MOBILE DASHBOARD (m_dash) ══════ */}
          {nav==="m_dash" && isMobile && <MobileDash wk={wk} weeklyData={wkData} chsData={chsData} issues={issues} actions={actions} reports={reports} users={users} ceoDecisions={ceoDecisions} setNav={setNav} T={T}/>}


          {/* ════════════════════════════════════
              DASHBOARD
          ════════════════════════════════════ */}
          {/* ══════ MY DEPT DASHBOARD (Manager/Staff view) ══════ */}
          {(nav==="my_dept" || (nav==="dashboard" && !isAdmin)) && (() => {
            const deptKey = user?.dept;
            const deptMaster = KPI_MASTER[deptKey];
            const deptKPIs = deptMaster?.kpis || [];
            const thangIdx = wk<=4?0:wk<=9?1:2;
            const DEPT_WK_KEY = {
              "PKD":"pkd","TCKT":"tckt","SX THÉP":"thep","SX NHÔM":"nhom",
              "QLCL":"qlcl","CƠ ĐIỆN":"cd","GIAO HÀNG":"gh","KHO":"kho",
              "CUNG ỨNG":"cu","HCNS":"hcns","R&D":"rd",
              "BO":"bo","Int. Dept":"intl","PKD-BD":"bd"
            };
            const deptWkData = WK.map(w => {
              const wkKey = DEPT_WK_KEY[deptKey] || deptKey?.toLowerCase().replace(/ /g,"").replace("ô","o").replace("é","e").replace("ơ","o").replace("ề","e");
              const raw = w[wkKey];
              return { label: w.label, ...raw };
            });
            return (
              <div style={{display:"grid",gap:16}}>
                {/* Header */}
                <div style={{background:`linear-gradient(135deg, ${deptMaster?.color||T.accent}18, rgba(0,0,0,0))`,
                  border:`1px solid ${deptMaster?.color||T.accent}40`,borderRadius:12,padding:"20px 24px",
                  display:"flex",alignItems:"center",gap:16}}>
                  <div style={{width:52,height:52,borderRadius:12,background:`${deptMaster?.color||T.accent}22`,
                    border:`2px solid ${deptMaster?.color||T.accent}60`,display:"flex",alignItems:"center",
                    justifyContent:"center",fontSize:24}}>🏢</div>
                  <div>
                    <div style={{fontSize:22,fontWeight:900,color:deptMaster?.color||T.text}}>{deptKey}</div>
                    <div style={{fontSize:15,color:T.muted,marginTop:2}}>{deptMaster?.owner} · Tuần {wk}/2026 · {deptKPIs.length} chỉ tiêu KPI</div>
                  </div>
                  <div style={{marginLeft:"auto",display:"flex",gap:10}}>
                    <button onClick={()=>setNav("bc_submit")}
                      style={{padding:"9px 18px",borderRadius:8,background:"linear-gradient(135deg,#2563eb,#1d4ed8)",
                        border:"none",color:"white",cursor:"pointer",fontSize:15,fontWeight:700}}>
                      📝 Nộp KPI Tuần {wk}
                    </button>
                    <button onClick={()=>{setIssueOpen(true);}}
                      style={{padding:"9px 18px",borderRadius:8,background:"rgba(239,68,68,0.12)",
                        border:"1px solid rgba(239,68,68,0.3)",color:T.red,cursor:"pointer",fontSize:15,fontWeight:700}}>
                      ⚠️ Báo vấn đề
                    </button>
                  </div>
                </div>

                {/* Tổng quan so sánh — chỉ hiện với PKD team */}
                {["PKD","PKD-BD","BO","Int. Dept"].includes(deptKey) && (
                  <DeptOverviewPanel
                    deptKey={deptKey}
                    weeklyData={weeklyData}
                    wk={wk}
                    buildSysPrompt={buildSysPrompt}
                    callClaude={callClaude}
                  />
                )}

                {/* KPI Cards — 10 chỉ tiêu */}
                <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(220px, 1fr))",gap:12}}>
                  {deptKPIs.map(k => {
                    const kh = k.kh[thangIdx];
                    const curWk = wkData.find(w=>w.w===wk);
                    // Try to get actual from weekly data
                    const deptRaw = curWk ? Object.values(curWk).find(v => typeof v === "object" && v !== null && !Array.isArray(v)) : null;
                    return (
                      <div key={k.code} style={{background:T.card,border:`1px solid ${T.border}`,borderRadius:10,padding:"14px 16px"}}>
                        <div style={{fontSize:15,color:T.muted,marginBottom:4,letterSpacing:"0.5px"}}>{k.label}</div>
                        <div style={{display:"flex",alignItems:"baseline",gap:6}}>
                          <div style={{fontSize:22,fontWeight:800,color:T.text}}>—</div>
                          <div style={{fontSize:15,color:T.dim}}>{k.unit}</div>
                        </div>
                        <div style={{fontSize:15,color:T.dim,marginTop:6}}>
                          KH tháng {thangIdx+1}: <span style={{color:T.yellow,fontWeight:700}}>{kh} {k.unit}</span>
                        </div>
                        <div style={{fontSize:14,color:T.dim,marginTop:3,fontStyle:"italic"}}>{k.note}</div>
                      </div>
                    );
                  })}
                </div>

                {/* Issues của phòng */}
                <div style={{background:T.card,border:`1px solid ${T.border}`,borderRadius:12,padding:"18px 20px"}}>
                  <div style={{fontSize:15,fontWeight:800,marginBottom:12}}>⚠️ Vấn đề đang mở – {deptKey}</div>
                  {issues.filter(i=>i.dept===deptKey&&i.status==="pending").length === 0
                    ? <div style={{color:T.muted,fontSize:15}}>✅ Không có vấn đề đang mở</div>
                    : issues.filter(i=>i.dept===deptKey&&i.status==="pending").map(i=>(
                        <div key={i.id} style={{padding:"10px 12px",borderRadius:8,background:"rgba(239,68,68,0.06)",
                          border:"1px solid rgba(239,68,68,0.15)",marginBottom:8}}>
                          <div style={{fontWeight:700,marginBottom:3}}>{i.title}</div>
                          <div style={{fontSize:16,color:T.muted}}>{i.desc}</div>
                          {i.ceoComment && <div style={{fontSize:16,color:T.green,marginTop:5}}>CEO: {i.ceoComment}</div>}
                        </div>
                      ))
                  }
                </div>
              </div>
            );
          })()}

          {nav==="dashboard" && isAdmin && (
            <div style={{display:"grid",gap:16}}>

              {/* AI Tư vấn */}
              <AiInlinePanel buildSysPrompt={buildSysPrompt} callClaude={callClaude} wk={wk}
                quickQuestions={["Tình hình công ty tuần này?","KPI nào cần chú ý ngay?","Issues cao cần xử lý?","So sánh CHS với tuần trước","Đề xuất 3 action ưu tiên"]}/>

              {/* Banner khi chưa có data actual */}
              {!currentWK.hasData && <NoDataBanner week={wk}/>}

              {/* ROW 1 – CHS + Pillar + Trend */}
              <div style={{display:"grid",gridTemplateColumns:"260px 1fr 1fr",gap:16}}>
                {/* CHS */}
                <div style={{background:T.card,border:`1px solid ${T.border}`,borderRadius:12,padding:"20px",display:"flex",flexDirection:"column",alignItems:"center"}}>
                  <div style={{fontSize:16,color:T.muted,letterSpacing:"2px",textTransform:"uppercase",marginBottom:12}}>Sức khỏe DN – T{wk}</div>
                  <CHSGauge score={currentCHS.chs} size={190}/>
                  <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8,width:"100%",marginTop:14}}>
                    {[{l:"Tài chính",v:currentCHS.fin},{l:"Vận hành",v:currentCHS.ops},{l:"Tăng trưởng",v:currentCHS.growth},{l:"Chất lượng",v:currentCHS.quality},{l:"Chiến lược",v:currentCHS.strategy}].map(p=>(
                      <div key={p.l} style={{textAlign:"center",padding:"6px 4px",background:"rgba(255,255,255,0.03)",borderRadius:6}}>
                        <div style={{fontSize:18,fontWeight:800,color:p.v!=null?sc(p.v):T.dim,fontFamily:"Calibri,sans-serif"}}>{p.v!=null?p.v:"—"}</div>
                        <div style={{fontSize:15,color:T.muted,marginTop:2}}>{p.l}</div>
                      </div>
                    ))}
                  </div>
                  {currentCHS.chs==null && (
                    <div style={{marginTop:10,fontSize:14,color:T.dim,textAlign:"center",padding:"6px 10px",background:"rgba(255,255,255,0.03)",borderRadius:6,width:"100%"}}>
                      CHS được tính tự động từ KPI actual
                    </div>
                  )}
                </div>

                {/* CHS Trend */}
                <div style={{background:T.card,border:`1px solid ${T.border}`,borderRadius:12,padding:"20px"}}>
                  <div style={{fontSize:16,color:T.muted,letterSpacing:"2px",textTransform:"uppercase",marginBottom:14}}>Xu hướng CHS – Tuần 1–10/2026</div>
                  {(() => {
                    const realCHS = chsData.filter(c=>c.chs!=null);
                    if(realCHS.length===0) return <ChartEmpty height={155} text="Chưa có điểm CHS nào – cần nhập KPI actual"/>;
                    return (
                      <>
                        <ResponsiveContainer width="100%" height={155}>
                          <AreaChart data={chsData}>
                            <defs>
                              <linearGradient id="chsGrad" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor={T.accent} stopOpacity={0.25}/>
                                <stop offset="95%" stopColor={T.accent} stopOpacity={0}/>
                              </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)"/>
                            <XAxis dataKey="l" tick={{fill:T.muted,fontSize:15}} axisLine={false} tickLine={false}/>
                            <YAxis domain={[72,88]} tick={{fill:T.muted,fontSize:15}} axisLine={false} tickLine={false}/>
                            <Tooltip contentStyle={{background:"#111827",border:`1px solid ${T.border}`,borderRadius:8,fontSize:16}}/>
                            <ReferenceLine y={85} stroke={T.yellow} strokeDasharray="4 4" strokeWidth={1} label={{value:"WATCH",fill:T.yellow,fontSize:15,position:"right"}}/>
                            <ReferenceLine y={75} stroke={T.red} strokeDasharray="4 4" strokeWidth={1} label={{value:"RISK",fill:T.red,fontSize:15,position:"right"}}/>
                            <Area type="monotone" dataKey="chs" stroke={T.accent} strokeWidth={2.5} fill="url(#chsGrad)" dot={{fill:T.accent,r:3,strokeWidth:0}}/>
                          </AreaChart>
                        </ResponsiveContainer>
                        <div style={{display:"flex",gap:16,marginTop:6}}>
                          {(() => {
                            const minC = realCHS.reduce((a,b)=>b.chs<a.chs?b:a);
                            const maxC = realCHS.reduce((a,b)=>b.chs>a.chs?b:a);
                            const last4 = realCHS.slice(-4);
                            const mom = last4.length>=2 ? (last4[last4.length-1].chs - last4[0].chs).toFixed(1) : null;
                            return (<>
                              <div><span style={{fontSize:16,color:T.muted}}>Min: </span><span style={{color:T.orange,fontWeight:700,fontSize:16}}>{minC.chs} ({minC.l})</span></div>
                              <div><span style={{fontSize:16,color:T.muted}}>Max: </span><span style={{color:T.green,fontWeight:700,fontSize:16}}>{maxC.chs} ({maxC.l})</span></div>
                              {mom!=null && <div><span style={{fontSize:16,color:T.muted}}>Momentum 4T: </span><span style={{color:parseFloat(mom)>=0?T.green:T.red,fontWeight:700,fontSize:16}}>{parseFloat(mom)>=0?"+":""}{mom} {parseFloat(mom)>=0?"↑":"↓"}</span></div>}
                            </>);
                          })()}
                        </div>
                      </>
                    );
                  })()}
                </div>

                {/* Radar */}
                <div style={{background:T.card,border:`1px solid ${T.border}`,borderRadius:12,padding:"20px"}}>
                  <div style={{fontSize:16,color:T.muted,letterSpacing:"2px",textTransform:"uppercase",marginBottom:14}}>5 Trụ cột – T{wk}</div>
                  {currentCHS.chs==null
                    ? <ChartEmpty height={180} text="Cần có CHS actual để hiển thị radar"/>
                    : (
                      <ResponsiveContainer width="100%" height={180}>
                        <RadarChart data={[
                          {s:"Tài chính",v:currentCHS.fin,f:100},
                          {s:"Vận hành",v:currentCHS.ops,f:100},
                          {s:"Tăng trưởng",v:currentCHS.growth,f:100},
                          {s:"Chất lượng",v:currentCHS.quality,f:100},
                          {s:"Chiến lược",v:currentCHS.strategy,f:100},
                        ]}>
                          <PolarGrid stroke="rgba(255,255,255,0.08)"/>
                          <PolarAngleAxis dataKey="s" tick={{fill:T.muted,fontSize:16}}/>
                          <Radar dataKey="v" stroke={T.accent} fill={T.accent} fillOpacity={0.18} strokeWidth={2}/>
                        </RadarChart>
                      </ResponsiveContainer>
                    )
                  }
                </div>
              </div>

              {/* ROW 2 – Key Financial KPIs */}
              <div>
                <div style={{fontSize:16,color:T.muted,letterSpacing:"2px",textTransform:"uppercase",marginBottom:10}}>Chỉ số Tài chính Chủ chốt</div>
                <div style={{display:"grid",gridTemplateColumns:"repeat(6,1fr)",gap:12}}>
                  <KCard label={"Nợ phải thu T"+wk} value={nd(currentWK.tckt?.pt?.toFixed(2), currentWK.hasData)} unit="B" kh={35} trend="down" inv note="Mục tiêu giảm dần"/>
                  <KCard label={"Nợ quá hạn T"+wk} value={nd(currentWK.tckt?.qh?.toFixed(2), currentWK.hasData)} unit="B" kh={5} trend="down" inv note="3 KH chiếm 82%"/>
                  <KCard label={"Tổng vay NH T"+wk} value={nd(currentWK.tckt?.tongVay?.toFixed(2), currentWK.hasData)} unit="B" kh={60} trend="down" inv note="Mục tiêu giảm dần"/>
                  <KCard label={"Tiền mặt T"+wk} value={nd(currentWK.tckt?.tienMat?.toFixed(2), currentWK.hasData)} unit="B" kh={3} trend="up" note="Thanh khoản"/>
                  <KCard label={"Thu thực hiện T"+wk} value={nd(currentWK.tckt?.thuTH?.toFixed(2), currentWK.hasData)} unit="B" kh={currentWK.tckt?.thuKH||0} trend="up" note="Thu TH vs KH tuần"/>
                  <KCard label={"Nợ trả NCC T"+wk} value={nd(currentWK.tckt?.ncc?.toFixed(2), currentWK.hasData)} unit="B" kh={20} trend="flat" note="AP balance"/>
                </div>
              </div>

              {/* ROW 3 – Operations KPIs */}
              <div>
                <div style={{fontSize:16,color:T.muted,letterSpacing:"2px",textTransform:"uppercase",marginBottom:10}}>Chỉ số Vận hành – Tuần {wk}</div>
                <div style={{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:12}}>
                  <KCard label="SX Nhôm HT%" value={nd(currentWK.nhom?.ht, currentWK.hasData)} unit="%" kh={85} trend={currentWK.hasData?(currentWK.nhom?.ht>=80?"up":"down"):undefined} note={currentWK.hasData?currentWK.nhom?.note?.substring(0,40):undefined}/>
                  <KCard label="Van EI/E (cái)" value={nd(currentWK.thep?.vanEi, currentWK.hasData)} unit="cái" kh={120} trend={currentWK.hasData?(currentWK.thep?.vanEi>=100?"up":"down"):undefined} note="SX Thép báo cáo"/>
                  <KCard label="FPY Chất lượng" value={nd(currentWK.qlcl?.fpy, currentWK.hasData)} unit="%" kh={96} trend="up" note={currentWK.hasData?("KN: "+currentWK.qlcl?.kn+" · CAPA: "+currentWK.qlcl?.capa):undefined}/>
                  <KCard label="Uptime CĐ" value={nd(currentWK.cd?.uptime, currentWK.hasData)} unit="%" kh={98} trend="up" note={currentWK.hasData?(currentWK.cd?.sucoi+" sự cố · "+currentWK.cd?.pdm+" PdM"):undefined}/>
                  <KCard label="Lượt giao hàng" value={nd(currentWK.gh?.luot, currentWK.hasData)} unit="lượt" kh={55} trend="up" note={currentWK.hasData?currentWK.gh?.note:undefined}/>
                  <KCard label="NCC đúng hạn" value={nd(currentWK.cu?.dungHan, currentWK.hasData)} unit="%" kh={95} trend="flat" note={currentWK.hasData?("GT: "+currentWK.cu?.gt+"B"):undefined}/>
                  <KCard label="Khiếu nại KH" value={nd(currentWK.qlcl?.kn, currentWK.hasData)} unit="KN" kh={0.5} trend="flat" inv note="Mục tiêu ≤0.5/tuần"/>
                </div>
              </div>

              {/* ROW 4 – Alerts & Pending */}
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16}}>
                <div style={{background:T.card,border:`1px solid ${T.border}`,borderRadius:12,padding:"18px"}}>
                  <div style={{fontSize:16,color:T.muted,letterSpacing:"2px",textTransform:"uppercase",marginBottom:12}}>⚡ Vấn đề chờ xử lý ({pendingIssues.length})</div>
                  {pendingIssues.slice(0,4).map(i => (
                    <div key={i.id} onClick={()=>setViewIssue(i)} style={{display:"flex",gap:12,padding:"10px 0",borderBottom:`1px solid ${T.border}`,cursor:"pointer",alignItems:"center"}}>
                      <div style={{width:8,height:8,borderRadius:"50%",background:i.priority==="high"?T.red:T.yellow,flexShrink:0}}/>
                      <div style={{flex:1}}>
                        <div style={{fontSize:17,fontWeight:600}}>{i.title}</div>
                        <div style={{fontSize:15,color:T.muted}}>{i.from} · {i.dept}</div>
                      </div>
                      <div style={{fontSize:16,color:i.priority==="high"?T.red:T.yellow,fontWeight:700,textTransform:"uppercase"}}>{i.priority==="high"?"Cao":"TB"}</div>
                    </div>
                  ))}
                  {pendingIssues.length===0 && <div style={{color:T.muted,textAlign:"center",padding:"16px 0",fontSize:16}}>✓ Không có vấn đề chờ</div>}
                </div>
                <div style={{background:T.card,border:`1px solid ${T.border}`,borderRadius:12,padding:"18px"}}>
                  <div style={{fontSize:16,color:T.muted,letterSpacing:"2px",textTransform:"uppercase",marginBottom:12}}>📋 Báo cáo chờ duyệt ({pendingReports.length})</div>
                  {pendingReports.slice(0,4).map(r => (
                    <div key={r.id} style={{display:"flex",gap:12,padding:"10px 0",borderBottom:`1px solid ${T.border}`,alignItems:"center"}}>
                      <div style={{width:32,height:32,borderRadius:6,background:`${T.yellow}15`,border:`1px solid ${T.yellow}30`,
                        display:"flex",alignItems:"center",justifyContent:"center",fontSize:16,fontWeight:800,color:T.yellow,flexShrink:0}}>{r.dept.substring(0,3)}</div>
                      <div style={{flex:1}}>
                        <div style={{fontSize:17,fontWeight:600}}>{r.title}</div>
                        <div style={{fontSize:15,color:T.muted}}>{r.user} · T{r.week}</div>
                      </div>
                      {isCEO && <button onClick={()=>{setApproveTarget(r);setComment("");}}
                        style={{background:`${T.accent}20`,border:`1px solid ${T.accent}40`,borderRadius:6,padding:"4px 10px",color:"#60a5fa",fontSize:15,cursor:"pointer",flexShrink:0}}>
                        Duyệt
                      </button>}
                    </div>
                  ))}
                  {pendingReports.length===0 && <div style={{color:T.muted,textAlign:"center",padding:"16px 0",fontSize:16}}>✓ Không có báo cáo chờ duyệt</div>}
                </div>
              </div>
            </div>
          )}

          {/* ════════════════════════════════════
              KPI MASTER
          ════════════════════════════════════ */}
          {nav==="kpi" && (
            <div style={{display:"grid",gap:16}}>
              <SectionTitle sub={`Chấm điểm KPI 0–120 · Tuần ${wk}/2026 · Target tuần vs Actual`}>
                📊 KPI Departments – Đánh giá & Chấm điểm
              </SectionTitle>

              {/* AI Tư vấn KPI */}
              <AiInlinePanel buildSysPrompt={buildSysPrompt} callClaude={callClaude} wk={wk}
                contextExtra="Người dùng đang xem KPI Departments. Phân tích điểm số từng phòng, so sánh mục tiêu, cảnh báo đỏ."
                quickQuestions={["Phòng nào đang đỏ cần hỗ trợ?","KPI nào có xu hướng giảm?","So sánh tổng điểm với tuần trước","Gợi ý action cho phòng yếu nhất"]}/>

              {/* Overview: Bar chart điểm KPI từng phòng */}
              {(()=>{
                const thang = wk<=4?1:wk<=9?2:3;
                const DEPT_COLORS = ["#f472b6","#f59e0b","#34d399","#22d3ee","#2563eb","#a78bfa","#fb923c","#ec4899","#10b981","#6366f1","#14b8a6","#f87171","#60a5fa"];
                const chartDepts = Object.entries(KPI_MASTER).map(([dKey,d],idx)=>{
                  const s = deptScore(d.dept, thang) ?? null;
                  return {dept:dKey, label:dKey, score:s, color:DEPT_COLORS[idx%DEPT_COLORS.length], status:scoreLabel(s)};
                });
                // dùng KpiChartTip từ ngoài scope
                return (
                  <div style={{background:T.card,border:`1px solid ${T.border}`,borderRadius:12,padding:"18px 20px"}}>
                    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:16}}>
                      <div style={{fontSize:16,fontWeight:800,color:"#fff"}}>🏆 Điểm KPI Tổng hợp – Tháng {thang}/2026</div>
                      <div style={{fontSize:13,color:T.muted}}>Click phòng để xem chi tiết</div>
                    </div>
                    <ResponsiveContainer width="100%" height={200}>
                      <BarChart data={chartDepts} barCategoryGap="25%" margin={{top:22,right:8,bottom:0,left:0}}
                        onClick={(data)=>{if(data?.activeLabel)setKpiGroup(data.activeLabel);}}>
                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false}/>
                        <XAxis dataKey="dept" tick={{fill:"#64748b",fontSize:11}} axisLine={false} tickLine={false}/>
                        <YAxis domain={[0,120]} tick={{fill:"#475569",fontSize:10}} axisLine={false} tickLine={false}/>
                        <Tooltip content={<KpiChartTip chartDepts={chartDepts} scoreColor={scoreColor}/>}/>
                        <ReferenceLine y={100} stroke="rgba(52,211,153,0.3)" strokeDasharray="4 4"/>
                        <ReferenceLine y={85}  stroke="rgba(251,191,36,0.3)"  strokeDasharray="4 4"/>
                        <Bar dataKey="score" radius={[6,6,0,0]} cursor="pointer">
                          <LabelList dataKey="score" position="top" formatter={v=>v!=null?v:""} style={{fill:"#94a3b8",fontSize:11,fontWeight:800}}/>
                          {chartDepts.map((d,i)=>(
                            <Cell key={i}
                              fill={kpiGroup===d.dept?d.color:d.color+"99"}
                              stroke={kpiGroup===d.dept?d.color:"transparent"}
                              strokeWidth={2}/>
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                    {/* Legend status */}
                    <div style={{display:"flex",gap:6,marginTop:10,flexWrap:"wrap"}}>
                      {chartDepts.map((d,i)=>(
                        <div key={i} onClick={()=>setKpiGroup(d.dept)}
                          style={{display:"flex",alignItems:"center",gap:5,padding:"3px 10px",
                            borderRadius:20,cursor:"pointer",
                            background:kpiGroup===d.dept?"rgba(255,255,255,0.08)":"rgba(255,255,255,0.03)",
                            border:`1px solid ${kpiGroup===d.dept?d.color+"55":"rgba(255,255,255,0.06)"}`}}>
                          <div style={{width:8,height:8,borderRadius:"50%",background:d.color,flexShrink:0}}/>
                          <span style={{fontSize:11,color:kpiGroup===d.dept?"#e2e8f0":"#64748b",fontWeight:kpiGroup===d.dept?700:400}}>{d.dept}</span>
                          <span style={{fontSize:11,fontWeight:800,color:scoreColor(d.score)}}>{d.score??"-"}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })()}

              {/* Dept tabs */}
              <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>
                {Object.keys(KPI_MASTER).map(g => (
                  <button key={g} onClick={()=>setKpiGroup(g)}
                    style={{padding:"6px 16px",borderRadius:20,fontSize:16,fontWeight:kpiGroup===g?700:500,
                      background:kpiGroup===g?"rgba(37,99,235,0.2)":"rgba(255,255,255,0.03)",
                      color:kpiGroup===g?"#60a5fa":T.muted,
                      border:kpiGroup===g?`1px solid ${T.accent}50`:`1px solid ${T.border}`,cursor:"pointer"}}>
                    {g}
                  </button>
                ))}
              </div>

              {/* KPI Table for selected dept */}
              {KPI_MASTER[kpiGroup] && (() => {
                const dept = KPI_MASTER[kpiGroup];
                const thang = wk<=4?1:wk<=9?2:3;
                const wksInMonth = 4; // KH tuần = KH tháng / 4 (cố định)
                return (
                  <div>
                    {/* Dept header */}
                    <div style={{background:T.card,border:`1px solid ${T.border}`,borderRadius:12,padding:"14px 20px",marginBottom:12,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                      <div>
                        <div style={{fontSize:18,fontWeight:800}}>{dept.dept}</div>
                        <div style={{fontSize:16,color:T.muted,marginTop:2}}>Trưởng phòng: {dept.owner}</div>
                      </div>
                      {/* Period avg scores */}
                      <div style={{display:"flex",gap:20}}>
                        {[{l:"Th.1",m:[1]},{l:"Th.2",m:[2]},{l:"Th.3",m:[3]},{l:"Q1",m:[1,2,3]}].map(p=>{
                          const scores = p.m.map(m=>deptScore(dept.dept,m)).filter(s=>s!=null);
                          const avg = scores.length?Math.round(scores.reduce((a,b)=>a+b,0)/scores.length):null;
                          const sample = avg ?? null;
                          const c = sample!=null ? scoreColor(sample) : T.muted;
                          return (
                            <div key={p.l} style={{textAlign:"center"}}>
                              <div style={{fontSize:14,color:T.muted}}>{p.l}</div>
                              <div style={{fontSize:20,fontWeight:900,color:c}}>{sample!=null?sample:"–"}</div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* KPI rows table */}
                    <div style={{background:T.card,border:`1px solid ${T.border}`,borderRadius:12,overflow:"hidden"}}>
                      {/* Header */}
                      <div style={{display:"grid",gridTemplateColumns:"48px 1fr 70px 80px 80px 80px 80px 80px",
                        padding:"10px 16px",borderBottom:`1px solid ${T.border}`,fontSize:15,color:T.muted,fontWeight:700,gap:8}}>
                        <div>Mã</div><div>KPI</div><div style={{textAlign:"center"}}>W%</div>
                        <div style={{textAlign:"center"}}>KH Tháng</div><div style={{textAlign:"center"}}>Actual Tháng</div>
                        <div style={{textAlign:"center"}}>Loại</div>
                        <div style={{textAlign:"center"}}>Actual</div><div style={{textAlign:"center"}}>Điểm</div><div style={{textAlign:"center"}}>RAG</div>
                      </div>
                      {dept.kpis.map((k,idx)=>{
                        const khThang = k.kh[thang-1];
                        const measure = k.measure || "flow";
                        const act = getActualMonth(kpiGroup, k.code, measure, thang, wkData);
                        const s = act!=null ? kpiScore(act, khThang, k.dir) : null;
                        const sc = scoreColor(s);
                        const actDisp = act!=null ? (act>=100?act.toFixed(1):act>=10?act.toFixed(2):act.toFixed(3)) : "–";
                        const measureBadge = measure==="flow"
                          ? <span style={{fontSize:10,color:"#60a5fa",background:"rgba(37,99,235,0.15)",borderRadius:4,padding:"1px 5px"}}>&#x2211;</span>
                          : measure==="stock"
                          ? <span style={{fontSize:10,color:"#fbbf24",background:"rgba(251,191,36,0.12)",borderRadius:4,padding:"1px 5px"}}>&#x1F4CC;</span>
                          : <span style={{fontSize:10,color:"#34d399",background:"rgba(52,211,153,0.12)",borderRadius:4,padding:"1px 5px"}}>&#x2205;</span>;
                        const khDisp = khThang>10 ? (khThang>1e9?`${(khThang/1e9).toFixed(1)}B`:khThang.toFixed(1)) : khThang;
                        return (
                          <div key={k.code} style={{display:"grid",gridTemplateColumns:"48px 1fr 60px 80px 90px 70px 70px 90px",
                            padding:"10px 16px",borderBottom:idx<dept.kpis.length-1?`1px solid rgba(255,255,255,0.04)`:"none",
                            alignItems:"center",gap:8,background:idx%2===0?"transparent":"rgba(255,255,255,0.01)"}}>
                            <div style={{fontSize:11,color:T.dim}}>{k.code.split("-").slice(1).join("-")}</div>
                            <div>
                              <div style={{fontSize:16,fontWeight:600}}>{k.label}</div>
                              <div style={{fontSize:14,color:T.dim,marginTop:1}}>{k.note}</div>
                            </div>
                            <div style={{textAlign:"center"}}>
                              <span style={{fontSize:15,fontWeight:700,color:"#60a5fa"}}>{k.w}%</span>
                            </div>
                            <div style={{textAlign:"center",fontSize:15}}>{khDisp} <span style={{fontSize:11,color:T.dim}}>{k.unit}</span></div>
                            <div style={{textAlign:"center",fontSize:15,fontWeight:700,color:sc}}>{actDisp} <span style={{fontSize:11,color:T.dim,fontWeight:400}}>{act!=null?k.unit:""}</span></div>
                            <div style={{textAlign:"center"}}>{measureBadge}</div>
                            <div style={{textAlign:"center"}}>
                              <span style={{fontSize:18,fontWeight:900,color:sc}}>{s!=null?s:"–"}</span>
                            </div>
                            <div style={{textAlign:"center"}}>
                              <span style={{padding:"2px 8px",borderRadius:6,fontSize:14,fontWeight:700,
                                background:s==null?"rgba(255,255,255,0.05)":s>=100?T.green+"22":s>=85?T.yellow+"22":T.red+"22",
                                color:s==null?T.muted:s>=100?T.green:s>=85?T.yellow:T.red}}>
                                {s==null?"N/A":s>=100?"✓ Đạt":s>=85?"△ Theo dõi":"✗ Đỏ"}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* YoY note – chỉ hiện khi có data */}
                    {_realWK.length > 0 && (
                      <div style={{marginTop:10,padding:"10px 14px",background:"rgba(96,165,250,0.06)",border:`1px solid rgba(96,165,250,0.15)`,borderRadius:8,fontSize:15,color:T.muted}}>
                        📈 DT tuần {_realWK[0]?.w}–{_realWK[_realWK.length-1]?.w}/2026: <strong style={{color:T.text}}>{(_Q1.dt||0).toFixed(2)}B</strong> · {_realWK.length} tuần có data · KH: {(14.76+12.94+20).toFixed(1)}B ({pct(_Q1.dt||0,14.76+12.94+20)}% đạt)
                      </div>
                    )}
                  </div>
                );
              })()}
            </div>
          )}

          {/* ════════════════════════════════════
              TỔNG HỢP KỲ (Tuần / Tháng / Quý / Năm)
          ════════════════════════════════════ */}
          {nav==="period" && (() => {
            const PERIODS = [
              {id:"tuan",  label:"Tuần"},
              {id:"thang", label:"Tháng"},
              {id:"quy",   label:"Quý"},
              {id:"nam",   label:"Năm"},
            ];
            // monthData: merge Supabase (dt, dtKH, dtCoGau) với computed agg (pt, qh, uptime, fpy...)
            const COMPUTED = [_M1, _M2, _M3];
            const DEFAULT_KH = [14.76, 12.94, 20.00];
            const monthData = (() => {
              // Base từ Supabase nếu có, fallback tạo 3 tháng rỗng
              const base = monthlyData.length > 0
                ? monthlyData.map(m => ({ ...m }))
                : [1,2,3].map(i => ({ month:i, label:"Tháng "+i+"/2026", dt:0, dtKH:DEFAULT_KH[i-1], note:"", dtCoGau:[] }));
              // Gắn computed agg vào d field theo month index
              return base.map(m => {
                const idx = (m.month||1) - 1;
                const comp = COMPUTED[idx] || COMPUTED[0];
                return {
                  ...m,
                  tuan: m.month===1?"1–4":m.month===2?"5–9":m.month===3?"10+":("T"+m.month),
                  // dt từ Supabase nếu có, fallback từ computed agg
                  dt:   m.dt > 0 ? m.dt : (comp?.dt || 0),
                  dtKH: m.dtKH > 0 ? m.dtKH : DEFAULT_KH[idx],
                  // d: ưu tiên computed từ weekly data thực (agg)
                  d: {
                    pt:      comp?.pt      || m.d?.pt      || 0,
                    qh:      comp?.qh      || m.d?.qh      || 0,
                    tongVay: comp?.tongVay || m.d?.tongVay || 0,
                    tienMat: comp?.tienMat || m.d?.tienMat || 0,
                    thuTH:   comp?.thuTH   || m.d?.thuTH   || 0,
                    uptime:  comp?.uptime  || m.d?.uptime  || 0,
                    fpy:     comp?.fpy     || m.d?.fpy     || 0,
                    htNhom:  comp?.nhomHT  || m.d?.htNhom  || 0,
                    knTotal: comp?.knTotal || m.d?.knTotal || 0,
                    cuGT:    comp?.cuGT    || m.d?.cuGT    || 0,
                    ghLuot:  comp?.ghLuot  || m.d?.ghLuot  || 0,
                    // Sản lượng SX
                    vanEi:   comp?.vanEi   || m.d?.vanEi   || 0,   // SX Thép
                    vavBox:  comp?.vavBox  || m.d?.vavBox  || 0,   // SX Thép
                    cuaGio:  comp?.cuaGio  || m.d?.cuaGio  || 0,   // SX Nhôm
                    // DT chi tiết PKD
                    dtVanEi:  comp?.dtVanEi  || m.d?.dtVanEi  || 0,
                    dtVav:    comp?.dtVav    || m.d?.dtVav    || 0,
                    dtCuaGio: comp?.dtCuaGio || m.d?.dtCuaGio || 0,
                    dtVcd:    comp?.dtVcd    || m.d?.dtVcd    || 0,
                    dtTamNan: comp?.dtTamNan || m.d?.dtTamNan || 0,
                    dtThep:   comp?.dtThep   || m.d?.dtThep   || 0,
                    dtNhom:   comp?.dtNhom   || m.d?.dtNhom   || 0,
                    pipeline: comp?.pipeline || m.d?.pipeline || 0,
                  },
                };
              });
            })();

            return (
              <div style={{display:"grid",gap:16}}>
                <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                  <SectionTitle sub="Tổng hợp tự động từ số liệu báo cáo tuần">Tổng hợp theo Kỳ báo cáo</SectionTitle>
                  <AiInlinePanel buildSysPrompt={buildSysPrompt} callClaude={callClaude} wk={wk}
                    contextExtra="Người dùng đang xem Tổng hợp Kỳ. Hỗ trợ phân tích xu hướng, so sánh kỳ, dự báo."
                    quickQuestions={["Xu hướng DT qua các kỳ?","Phòng nào tăng trưởng tốt nhất?","Dự báo cuối quý?","So sánh Q1 với cùng kỳ năm ngoái"]}/>
                  <div style={{display:"flex",gap:8}}>
                    {PERIODS.map(p => <PeriodTag key={p.id} label={p.label} active={period===p.id} onClick={()=>setPeriod(p.id)}/>)}
                  </div>
                </div>

                {/* ── TUẦN ── */}
                {period==="tuan" && (
                  <div style={{display:"grid",gap:14}}>
                    <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>
                      {wkData.map(w=>(
                        <button key={w.w} onClick={()=>setWk(w.w)} style={{padding:"5px 13px",borderRadius:20,fontSize:16,fontWeight:wk===w.w?700:400,
                          background:wk===w.w?"rgba(37,99,235,0.2)":"rgba(255,255,255,0.03)",
                          color:wk===w.w?"#60a5fa":T.muted,border:wk===w.w?`1px solid ${T.accent}50`:`1px solid ${T.border}`,cursor:"pointer"}}>
                          Tuần {w.w} ({w.ngay})
                        </button>
                      ))}
                    </div>

                    {/* No data banner */}
                    {!currentWK.hasData && (
                      <div style={{background:"rgba(99,102,241,0.08)",border:`1px solid rgba(99,102,241,0.25)`,borderRadius:12,padding:"28px",textAlign:"center"}}>
                        <div style={{fontSize:36,marginBottom:10}}>📋</div>
                        <div style={{fontSize:20,fontWeight:700,color:T.text,marginBottom:6}}>Tuần {wk} chưa có báo cáo</div>
                        <div style={{fontSize:16,color:T.muted}}>Số liệu actual sẽ hiển thị sau khi các phòng ban nộp báo cáo tuần và được Admin phê duyệt.</div>
                      </div>
                    )}

                    {/* All dept data for selected week */}
                    {currentWK.hasData && <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:14}}>
                      {/* TCKT */}
                      <div style={{background:T.card,border:`1px solid ${T.border}`,borderRadius:12,padding:"18px"}}>
                        <div style={{fontSize:16,color:T.muted,letterSpacing:"2px",textTransform:"uppercase",marginBottom:14}}>💰 TCKT – Tuần {wk}</div>
                        {[
                          {l:"Nợ phải thu",v:fmtB(currentWK.tckt.pt),c:T.yellow},
                          {l:"Nợ quá hạn",v:fmtB(currentWK.tckt.qh),c:(currentWK.tckt.qh||0)>=7.27?T.red:T.yellow},
                          {l:"Nợ trả NCC",v:fmtB(currentWK.tckt.ncc),c:T.text},
                          {l:"Vay ngắn hạn",v:fmtB(currentWK.tckt.vayNH),c:"#60a5fa"},
                          {l:"Vay TDH",v:fmtB(currentWK.tckt.vayTDH),c:"#818cf8"},
                          {l:"Tổng vay",v:fmtB(currentWK.tckt.tongVay),c:"#60a5fa"},
                          {l:"Tiền mặt/TG",v:fmtB(currentWK.tckt.tienMat),c:T.green},
                          {l:"Thu TH",v:fmtB(currentWK.tckt.thuTH),c:(currentWK.tckt.thuTH||0)>=(currentWK.tckt.thuKH||1)?T.green:T.orange},
                          {l:"Thu KH",v:fmtB(currentWK.tckt.thuKH),c:T.muted},
                        ].map(({l,v,c})=>(
                          <div key={l} style={{display:"flex",justifyContent:"space-between",padding:"6px 0",borderBottom:`1px solid ${T.border}`}}>
                            <span style={{fontSize:16,color:T.muted}}>{l}</span>
                            <span style={{fontSize:17,fontWeight:700,color:c,fontFamily:"Calibri,sans-serif"}}>{v}</span>
                          </div>
                        ))}
                        {currentWK.tckt.luong && <div style={{marginTop:8,background:T.orangeBg,borderRadius:6,padding:"6px 10px",fontSize:15,color:T.orange}}>💸 Lương tháng: {fmtB(currentWK.tckt.luong)}</div>}
                        {currentWK.tckt.luongUng && <div style={{marginTop:4,background:T.yellowBg,borderRadius:6,padding:"6px 10px",fontSize:15,color:T.yellow}}>⏳ Tạm ứng: {fmtB(currentWK.tckt.luongUng)}</div>}
                      </div>

                      {/* SX */}
                      <div style={{background:T.card,border:`1px solid ${T.border}`,borderRadius:12,padding:"18px"}}>
                        <div style={{fontSize:16,color:T.muted,letterSpacing:"2px",textTransform:"uppercase",marginBottom:14}}>🏭 Sản xuất – Tuần {wk}</div>
                        <div style={{marginBottom:12}}>
                          <div style={{fontSize:15,color:T.muted,marginBottom:6}}>Nhôm – Hoàn thành KH</div>
                          <div style={{fontSize:36,fontWeight:900,color:currentWK.nhom?.ht!=null?sc(currentWK.nhom.ht):T.dim,fontFamily:"Calibri,sans-serif"}}>{currentWK.nhom?.ht!=null?currentWK.nhom.ht+"%":"—"}</div>
                          <div style={{background:"rgba(255,255,255,0.05)",borderRadius:4,height:8,marginTop:6,overflow:"hidden"}}>
                            <div style={{width:`${currentWK.nhom.ht}%`,background:sc(currentWK.nhom.ht),height:"100%",borderRadius:4}}/>
                          </div>
                          <div style={{fontSize:15,color:T.muted,marginTop:4}}>Tồn: {currentWK.nhom.ton} cái</div>
                        </div>
                        <div style={{borderTop:`1px solid ${T.border}`,paddingTop:12}}>
                          <div style={{fontSize:15,color:T.muted,marginBottom:6}}>Thép – % hoàn thành</div>
                          {[{l:"VAV-CAV",v:currentWK.thep.vav},{l:"Van EI/E",v:currentWK.thep.vanEi},{l:"TMC",v:currentWK.thep.tmc},{l:"Cáp điện",v:currentWK.thep.cable}].map(x=>(
                            <div key={x.l} style={{display:"flex",alignItems:"center",gap:8,marginBottom:6}}>
                              <span style={{fontSize:15,color:T.muted,width:60}}>{x.l}</span>
                              <div style={{flex:1,background:"rgba(255,255,255,0.05)",borderRadius:3,height:6,overflow:"hidden"}}>
                                <div style={{width:`${x.v}%`,background:sc(x.v),height:"100%",borderRadius:3}}/>
                              </div>
                              <span style={{fontSize:16,fontWeight:700,color:sc(x.v),width:32,textAlign:"right"}}>{x.v}%</span>
                            </div>
                          ))}
                        </div>
                        {/* PKD – DT chi tiết & SX sản lượng */}
                        {(currentWK.pkd?.dtVanEi||currentWK.pkd?.dtCuaGio||currentWK.pkd?.dtVcd||currentWK.pkd?.dtVav||currentWK.pkd?.dtTamNan||currentWK.thep?.vanEi||currentWK.nhom?.cuaGio) ? (
                          <div style={{borderTop:`1px solid ${T.border}`,paddingTop:12,marginTop:4}}>
                            <div style={{fontSize:13,color:T.muted,letterSpacing:"1.5px",textTransform:"uppercase",marginBottom:8}}>PKD – DT chi tiết tuần {wk}</div>
                            {[
                              {l:"Van EI/E",    v:currentWK.pkd?.dtVanEi,  kh:5.705, c:"#f472b6", tag:"Thép"},
                              {l:"Cửa gió",     v:currentWK.pkd?.dtCuaGio, kh:4.605, c:T.green,   tag:"Nhôm"},
                              {l:"Van cơ khí",  v:currentWK.pkd?.dtVcd,    kh:2.399, c:T.orange,  tag:"Thép"},
                              {l:"VAV/CAV",     v:currentWK.pkd?.dtVav,    kh:0.502, c:T.cyan,    tag:"Nhôm"},
                              {l:"Tấm nan/EGG", v:currentWK.pkd?.dtTamNan, kh:1.183, c:"#a78bfa", tag:"Khác"},
                            ].filter(x=>x.v!=null).map(x=>{
                              const pct=Math.round((x.v||0)/x.kh*100);
                              return (
                                <div key={x.l} style={{display:"flex",alignItems:"center",gap:6,marginBottom:5}}>
                                  <span style={{fontSize:13,color:T.muted,minWidth:80}}>{x.l}</span>
                                  <span style={{fontSize:10,background:x.c+"25",color:x.c,borderRadius:3,padding:"1px 4px",minWidth:32,textAlign:"center"}}>{x.tag}</span>
                                  <div style={{flex:1,background:"rgba(255,255,255,0.05)",borderRadius:3,height:5,overflow:"hidden"}}>
                                    <div style={{width:`${Math.min(100,pct)}%`,background:x.c,height:"100%",borderRadius:3}}/>
                                  </div>
                                  <span style={{fontSize:13,fontWeight:700,color:x.c,width:48,textAlign:"right"}}>{(x.v||0).toFixed(2)}B</span>
                                  <span style={{fontSize:11,color:pct>=100?T.green:pct>=80?T.yellow:T.muted,width:32,textAlign:"right"}}>{pct}%</span>
                                </div>
                              );
                            })}
                            {(currentWK.thep?.vanEi||currentWK.thep?.vav) && (
                              <div style={{marginTop:8,paddingTop:8,borderTop:`1px solid ${T.border}20`}}>
                                <div style={{fontSize:12,color:T.muted,marginBottom:5}}>SX Thép – Sản lượng</div>
                                {[{l:"Van EI/E",v:currentWK.thep?.vanEi,kh:120},{l:"VAV/CAV",v:currentWK.thep?.vav,kh:80}].map(x=>{
                                  const p=Math.round((x.v||0)/x.kh*100);
                                  return (
                                    <div key={x.l} style={{display:"flex",alignItems:"center",gap:6,marginBottom:4}}>
                                      <span style={{fontSize:12,color:T.muted,minWidth:60}}>{x.l}</span>
                                      <div style={{flex:1,background:"rgba(255,255,255,0.05)",borderRadius:3,height:5,overflow:"hidden"}}>
                                        <div style={{width:`${Math.min(100,p)}%`,background:sc(p),height:"100%",borderRadius:3}}/>
                                      </div>
                                      <span style={{fontSize:12,fontWeight:700,color:sc(p),width:48,textAlign:"right"}}>{x.v||0} cái</span>
                                      <span style={{fontSize:11,color:p>=100?T.green:T.muted,width:32,textAlign:"right"}}>{p}%</span>
                                    </div>
                                  );
                                })}
                              </div>
                            )}
                            {currentWK.nhom?.cuaGio != null && (
                              <div style={{marginTop:6,paddingTop:6,borderTop:`1px solid ${T.border}20`}}>
                                <div style={{fontSize:12,color:T.muted,marginBottom:4}}>SX Nhôm – Cửa gió</div>
                                <div style={{display:"flex",alignItems:"center",gap:6}}>
                                  <div style={{flex:1,background:"rgba(255,255,255,0.05)",borderRadius:3,height:5,overflow:"hidden"}}>
                                    <div style={{width:`${Math.min(100,Math.round((currentWK.nhom.cuaGio||0)/200*100))}%`,background:T.green,height:"100%",borderRadius:3}}/>
                                  </div>
                                  <span style={{fontSize:12,fontWeight:700,color:T.green,width:50,textAlign:"right"}}>{currentWK.nhom.cuaGio} cái</span>
                                </div>
                              </div>
                            )}
                          </div>
                        ) : null}
                        <div style={{marginTop:8,background:T.redBg,borderRadius:6,padding:"6px 10px",border:`1px solid ${T.red}30`,fontSize:15,color:"#fca5a5"}}>⚠ {currentWK.nhom.note}</div>
                      </div>

                      {/* QLCL, Cơ điện, Kho */}
                      <div style={{display:"grid",gap:10}}>
                        <div style={{background:T.card,border:`1px solid ${T.border}`,borderRadius:12,padding:"14px"}}>
                          <div style={{fontSize:16,color:T.muted,letterSpacing:"1.5px",textTransform:"uppercase",marginBottom:8}}>✅ QLCL</div>
                          <div style={{display:"flex",gap:16}}>
                            <div><div style={{fontSize:16,color:T.muted}}>FPY</div><div style={{fontSize:24,fontWeight:900,color:sc(currentWK.qlcl.fpy),fontFamily:"Calibri,sans-serif"}}>{currentWK.qlcl.fpy}%</div></div>
                            <div><div style={{fontSize:16,color:T.muted}}>KN</div><div style={{fontSize:24,fontWeight:900,color:currentWK.qlcl.kn>1?T.red:T.green,fontFamily:"Calibri,sans-serif"}}>{currentWK.qlcl.kn}</div></div>
                            <div><div style={{fontSize:16,color:T.muted}}>CAPA</div><div style={{fontSize:24,fontWeight:900,color:T.cyan,fontFamily:"Calibri,sans-serif"}}>{currentWK.qlcl.capa}</div></div>
                          </div>
                        </div>
                        <div style={{background:T.card,border:`1px solid ${T.border}`,borderRadius:12,padding:"14px"}}>
                          <div style={{fontSize:16,color:T.muted,letterSpacing:"1.5px",textTransform:"uppercase",marginBottom:8}}>⚡ Cơ điện</div>
                          <div style={{display:"flex",gap:16}}>
                            <div><div style={{fontSize:16,color:T.muted}}>Uptime</div><div style={{fontSize:25,fontWeight:900,color:sc(currentWK.cd.uptime),fontFamily:"Calibri,sans-serif"}}>{currentWK.cd.uptime}%</div></div>
                            <div><div style={{fontSize:16,color:T.muted}}>Sự cố</div><div style={{fontSize:25,fontWeight:900,color:currentWK.cd.sucoi>1?T.red:T.green,fontFamily:"Calibri,sans-serif"}}>{currentWK.cd.sucoi}</div></div>
                            <div><div style={{fontSize:16,color:T.muted}}>PdM</div><div style={{fontSize:25,fontWeight:900,color:T.cyan,fontFamily:"Calibri,sans-serif"}}>{currentWK.cd.pdm}</div></div>
                          </div>
                        </div>
                        <div style={{background:T.card,border:`1px solid ${T.border}`,borderRadius:12,padding:"14px"}}>
                          <div style={{fontSize:16,color:T.muted,letterSpacing:"1.5px",textTransform:"uppercase",marginBottom:8}}>🚚 Giao hàng</div>
                          <div style={{display:"flex",alignItems:"center",gap:16}}>
                            <div style={{fontSize:32,fontWeight:900,color:sc(Math.min(100,currentWK.gh.luot/0.55)),fontFamily:"Calibri,sans-serif"}}>{currentWK.gh.luot}</div>
                            <div style={{fontSize:15,color:T.muted}}>lượt giao<br/>KH: 55 lượt/tuần</div>
                          </div>
                        </div>
                      </div>
                    </div>}
                  </div>
                )}

                {/* ── THÁNG ── */}
                {period==="thang" && (
                  <div style={{display:"grid",gap:16}}>
                    <div style={{display:"flex",gap:8}}>
                      {monthData.map((m,i) => <PeriodTag key={i} label={m.label} active={periodIdx===i} onClick={()=>setPeriodIdx(i)}/>)}
                    </div>
                    {(() => {
                      const m = monthData[periodIdx];
                      return (
                        <div style={{display:"grid",gap:14}}>
                          {/* Monthly headline */}
                          <div style={{display:"grid",gridTemplateColumns:"repeat(5,1fr)",gap:12}}>
                            <KCard label={`DT ${m.label}`} value={(m.dt||0).toFixed(2)} unit="tỷ" kh={m.dtKH} trend={(m.dt||0)>=m.dtKH?"up":"down"} note={`${pct(m.dt||0,m.dtKH)}% KH`} big/>
                            <KCard label="Nợ phải thu (cuối kỳ)" value={(m.d?.pt||0).toFixed(2)} unit="B" kh={40} trend="down" inv/>
                            <KCard label="Nợ quá hạn" value={(m.d?.qh||0).toFixed(2)} unit="B" kh={5} trend="down" inv/>
                            <KCard label="SX Nhôm HT% avg" value={(m.d?.htNhom||0).toFixed(0)} unit="%" kh={85} trend="flat"/>
                            <KCard label="FPY avg" value={(m.d?.fpy||0).toFixed(1)} unit="%" kh={96} trend="up"/>
                          </div>
                          <div style={{display:"grid",gridTemplateColumns:"repeat(5,1fr)",gap:12}}>
                            <KCard label="Tổng thu tiền" value={(m.d?.thuTH||0).toFixed(2)} unit="tỷ" kh={m.dtKH*0.95} trend="flat"/>
                            <KCard label="Uptime TB" value={(m.d?.uptime||0).toFixed(1)} unit="%" kh={98} trend="flat"/>
                            <KCard label="Tổng khiếu nại" value={m.d?.knTotal||0} unit="KN" kh={2} trend="down" inv/>
                            <KCard label="GT Cung ứng" value={(m.d?.cuGT||0).toFixed(2)} unit="tỷ" kh={(m.d?.cuGT||0)*1.1} trend="flat"/>
                            <KCard label="Avg Lượt giao" value={(m.d?.ghLuot||0).toFixed(0)} unit="lượt/tuần" kh={55} trend="flat"/>
                          </div>
                          {/* DT chi tiết PKD & Sản lượng SX */}
                          {(m.d?.dtVanEi > 0 || m.d?.dtCuaGio > 0 || m.d?.vanEi > 0) && (
                            <div style={{display:"grid",gridTemplateColumns:"repeat(5,1fr)",gap:12}}>
                              <KCard label={`DT Van EI/E`}   value={(m.d?.dtVanEi||0).toFixed(2)}  unit="tỷ" kh={5.705} trend={(m.d?.dtVanEi||0)>=5.705?"up":"down"}  note={`PKD T${m.month}`}/>
                              <KCard label={`DT Cửa gió`}    value={(m.d?.dtCuaGio||0).toFixed(2)} unit="tỷ" kh={4.605} trend={(m.d?.dtCuaGio||0)>=4.605?"up":"down"} note={`PKD T${m.month}`}/>
                              <KCard label={`DT Van cơ khí`} value={(m.d?.dtVcd||0).toFixed(2)}    unit="tỷ" kh={2.399} trend={(m.d?.dtVcd||0)>=2.399?"up":"down"}    note={`PKD T${m.month}`}/>
                              <KCard label={`DT VAV/CAV`}    value={(m.d?.dtVav||0).toFixed(2)}    unit="tỷ" kh={0.502} trend={(m.d?.dtVav||0)>=0.502?"up":"down"}    note={`PKD T${m.month}`}/>
                              <KCard label={`DT Tấm nan`}    value={(m.d?.dtTamNan||0).toFixed(2)} unit="tỷ" kh={1.183} trend={(m.d?.dtTamNan||0)>=1.183?"up":"down"} note={`PKD T${m.month}`}/>
                            </div>
                          )}
                          {(m.d?.vanEi > 0 || m.d?.vavBox > 0 || m.d?.cuaGio > 0) && (
                            <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:12}}>
                              <KCard label={`SL Van EI/E`}  value={m.d?.vanEi||0}  unit="cái" kh={120} trend={(m.d?.vanEi||0)>=120?"up":"down"}  note="SX Thép"/>
                              <KCard label={`SL VAV/CAV`}   value={m.d?.vavBox||0} unit="cái" kh={80}  trend={(m.d?.vavBox||0)>=80?"up":"down"}   note="SX Thép"/>
                              <KCard label={`SL Cửa gió`}   value={m.d?.cuaGio||0} unit="cái" kh={200} trend={(m.d?.cuaGio||0)>=200?"up":"down"}  note="SX Nhôm"/>
                            </div>
                          )}
                          {/* DT Cơ cấu chart */}
                          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14}}>
                            <div style={{background:T.card,border:`1px solid ${T.border}`,borderRadius:12,padding:"18px"}}>
                              <div style={{fontSize:16,color:T.muted,letterSpacing:"2px",textTransform:"uppercase",marginBottom:14}}>Cơ cấu DT {m.label}</div>
                              {m.dtCoGau.map((g,i)=>(
                                <div key={i} style={{display:"flex",alignItems:"center",gap:10,marginBottom:10}}>
                                  <div style={{width:10,height:10,borderRadius:2,background:g.c,flexShrink:0}}/>
                                  <span style={{flex:1,fontSize:16,color:T.muted}}>{g.n}</span>
                                  <div style={{width:120}}>
                                    <div style={{background:"rgba(255,255,255,0.06)",borderRadius:4,height:8,overflow:"hidden"}}>
                                      <div style={{width:`${(g.v/m.dt)*100}%`,background:g.c,height:"100%",borderRadius:4}}/>
                                    </div>
                                  </div>
                                  <span style={{fontSize:17,fontWeight:700,color:g.c,width:45,textAlign:"right"}}>{g.v.toFixed(2)}B</span>
                                  <span style={{fontSize:15,color:T.muted,width:35,textAlign:"right"}}>{Math.round(g.v/m.dt*100)}%</span>
                                </div>
                              ))}
                              <div style={{borderTop:`1px solid ${T.border}`,marginTop:10,paddingTop:10,display:"flex",justifyContent:"space-between"}}>
                                <span style={{fontSize:15,color:T.muted}}>TỔNG DT THỰC</span>
                                <span style={{fontSize:17,fontWeight:800,color:(m.dt||0)>=m.dtKH?T.green:T.orange,fontFamily:"Calibri,sans-serif"}}>{(m.dt||0).toFixed(2)}B</span>
                              </div>
                            </div>
                            <div style={{background:T.card,border:`1px solid ${T.border}`,borderRadius:12,padding:"18px"}}>
                              <div style={{fontSize:16,color:T.muted,letterSpacing:"2px",textTransform:"uppercase",marginBottom:14}}>DT thực vs KH theo tháng</div>
                              <ResponsiveContainer width="100%" height={160}>
                                <BarChart data={monthData.map(m=>({l:m.label.replace("/2026","").replace("Tháng ","T"), th:m.dt, kh:m.dtKH}))}>
                                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)"/>
                                  <XAxis dataKey="l" tick={{fill:T.muted,fontSize:16}} axisLine={false} tickLine={false}/>
                                  <YAxis tick={{fill:T.muted,fontSize:16}} axisLine={false} tickLine={false}/>
                                  <Tooltip contentStyle={{background:"#111827",border:`1px solid ${T.border}`,borderRadius:8,fontSize:16}} formatter={v=>`${v.toFixed(2)}B`}/>
                                  <Bar dataKey="kh" fill="rgba(255,255,255,0.06)" name="KH" radius={[4,4,0,0]}/>
                                  <Bar dataKey="th" fill={T.accent} name="TH" radius={[4,4,0,0]}>{monthData.map((m,i)=><Cell key={i} fill={m.dt>=m.dtKH?T.green:T.orange}/>)}</Bar>
                                </BarChart>
                              </ResponsiveContainer>
                            </div>
                          </div>
                        </div>
                      );
                    })()}
                  </div>
                )}

                {/* ── QUÝ ── */}
                {period==="quy" && (
                  <div style={{display:"grid",gap:14}}>
                    <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:12,padding:"4px 0"}}>
                      {[
                        {l:"Q1/2026 (T1–T3)",active:true},
                        {l:"Q2/2026",active:false},
                        {l:"Q3/2026",active:false},
                        {l:"Q4/2026",active:false},
                      ].map((q,i)=><PeriodTag key={i} label={q.l} active={q.active} onClick={()=>{}}/>)}
                    </div>
                    <div style={{background:T.card,border:`1px solid ${T.accent}30`,borderRadius:12,padding:"20px",position:"relative"}}>
                      <div style={{position:"absolute",top:0,left:0,right:0,height:3,background:`linear-gradient(90deg,${T.accent},${T.cyan})`,borderRadius:"12px 12px 0 0"}}/>
                      <div style={{fontSize:17,fontWeight:700,color:T.text,marginBottom:16}}>Quý 1/2026 (Tuần 1–10 · 02/01–06/03/2026)</div>
                      <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:14,marginBottom:16}}>
                        <KCard label="DT Q1 ước tính" value={(_Q1.dt||0).toFixed(1)} unit="tỷ" kh={DEFAULT_KH.slice(0,3).reduce((a,b)=>a+b,0)} trend={(_Q1.dt||0)>=(DEFAULT_KH.slice(0,3).reduce((a,b)=>a+b,0))?"up":"down"} note={`${pct(_Q1.dt||0, DEFAULT_KH.slice(0,3).reduce((a,b)=>a+b,0))}% KH · ${_realWK.length} tuần có data`}/>
                        <KCard label="PT cuối Q1" value={(_Q1.pt||0).toFixed(2)} unit="B" kh={38} trend="down" inv note="Mục tiêu giảm dưới 38B"/>
                        <KCard label="Nợ QH Q1" value={(_Q1.qh||0).toFixed(2)} unit="B" kh={5} trend="down" inv note={(_Q1.qh||0)>5?"⚠ Vượt ngưỡng 5B":"✓ Trong ngưỡng"}/>
                        <KCard label="Tổng vay cuối Q1" value={(_Q1.tongVay||0).toFixed(2)} unit="B" kh={65} trend="down" inv note={`KH ≤ 65B`}/>
                      </div>
                      <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:14}}>
                        <KCard label="FPY avg Q1" value={(_Q1.fpy||0).toFixed(1)} unit="%" kh={96} trend="up"/>
                        <KCard label="SX Nhôm HT% avg" value={(_Q1.htNhom||0).toFixed(0)} unit="%" kh={85} trend={(_Q1.htNhom||0)>=85?"up":"down"}/>
                        <KCard label="Uptime CĐ avg" value={(_Q1.uptime||0).toFixed(1)} unit="%" kh={98} trend="flat"/>
                        <KCard label="Tổng KN Q1" value={_Q1.knTotal||0} unit="KN" kh={5} trend="down" inv/>
                      </div>
                    </div>

                    {/* Trend chart by week */}
                    <div style={{background:T.card,border:`1px solid ${T.border}`,borderRadius:12,padding:"18px"}}>
                      <div style={{fontSize:16,color:T.muted,letterSpacing:"2px",textTransform:"uppercase",marginBottom:14}}>Xu hướng Q1/2026 – Công nợ & Vay NH (tỷ VNĐ)</div>
                      <ResponsiveContainer width="100%" height={200}>
                        <LineChart data={wkData.map(w=>({l:`T${w.w}`,pt:w.tckt?.pt||0,qh:w.tckt?.qh||0,vay:w.tckt?.tongVay||0}))}>
                          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)"/>
                          <XAxis dataKey="l" tick={{fill:T.muted,fontSize:15}} axisLine={false} tickLine={false}/>
                          <YAxis tick={{fill:T.muted,fontSize:15}} axisLine={false} tickLine={false}/>
                          <Tooltip contentStyle={{background:"#111827",border:`1px solid ${T.border}`,borderRadius:8,fontSize:16}} formatter={v=>`${Number(v).toFixed(2)}B`}/>
                          <Line type="monotone" dataKey="pt" stroke={T.yellow} strokeWidth={2} dot={{r:3}} name="Phải thu"/>
                          <Line type="monotone" dataKey="vay" stroke="#60a5fa" strokeWidth={2} dot={{r:3}} name="Tổng vay"/>
                          <Line type="monotone" dataKey="qh" stroke={T.red} strokeWidth={1.5} dot={{r:2}} strokeDasharray="4 4" name="Quá hạn"/>
                        </LineChart>
                      </ResponsiveContainer>
                      <div style={{display:"flex",gap:20,marginTop:8}}>
                        {[{l:"Phải thu",c:T.yellow},{l:"Tổng vay",c:"#60a5fa"},{l:"Quá hạn",c:T.red}].map(x=>(
                          <div key={x.l} style={{display:"flex",alignItems:"center",gap:6}}>
                            <div style={{width:14,height:2,background:x.c}}/>
                            <span style={{fontSize:15,color:T.muted}}>{x.l}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* ── NĂM ── */}
                {period==="nam" && (
                  <div style={{display:"grid",gap:14}}>
                    {/* Annual comparison */}
                    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:14}}>
                      <div style={{background:T.card,border:`1px solid ${T.border}`,borderRadius:12,padding:"20px"}}>
                        <div style={{fontSize:16,color:T.muted,letterSpacing:"2px",textTransform:"uppercase",marginBottom:16}}>Kết quả 2025</div>
                        {[
                          {l:"Doanh thu",v:"249.25B",kh:"279B",c:T.yellow,pct:"89.31%"},
                          {l:"LN trước thuế",v:"6.46B",kh:"5B",c:T.green,pct:"+128%"},
                          {l:"LN điều chỉnh*",v:"7.29B",kh:"—",c:T.green,pct:"One-off: 834tr"},
                          {l:"Chi phí NX",v:"+5.79B",kh:"0",c:T.red,pct:"Di dời NM"},
                        ].map(({l,v,kh,c,pct:p})=>(
                          <div key={l} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"8px 0",borderBottom:`1px solid ${T.border}`}}>
                            <div>
                              <div style={{fontSize:16,color:T.muted}}>{l}</div>
                              <div style={{fontSize:16,color:T.dim}}>KH: {kh}</div>
                            </div>
                            <div style={{textAlign:"right"}}>
                              <div style={{fontSize:16,fontWeight:800,color:c,fontFamily:"Calibri,sans-serif"}}>{v}</div>
                              <div style={{fontSize:15,color:c}}>{p}</div>
                            </div>
                          </div>
                        ))}
                        <div style={{marginTop:10,fontSize:16,color:T.dim}}>* Loại trừ chi phí di dời nhà máy (834tr)</div>
                      </div>

                      <div style={{background:T.card,border:`1px solid ${T.border}`,borderRadius:12,padding:"20px"}}>
                        <div style={{fontSize:16,color:T.muted,letterSpacing:"2px",textTransform:"uppercase",marginBottom:16}}>KH 2026</div>
                        {[
                          {l:"Doanh thu mục tiêu",v:"251B",sub:"vs 2025: +0.7%",c:T.cyan},
                          {l:"Van EI/E (nội địa)",v:"90B",sub:"36% tổng DT",c:T.accent},
                          {l:"Van EI/E (xuất khẩu)",v:"10B",sub:"KH mở rộng XK",c:"#60a5fa"},
                          {l:"HM tín dụng BIDV",v:"60B",sub:"Giải ngân: 50.51B",c:T.green},
                          {l:"HM tín dụng MSB",v:"21.82B",sub:"NH: 11.49B + BL: 10B",c:T.green},
                          {l:"Vay VAV Line",v:"3.6B",sub:"Trung hạn, 70% TB",c:T.yellow},
                        ].map(({l,v,sub,c})=>(
                          <div key={l} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"7px 0",borderBottom:`1px solid ${T.border}`}}>
                            <div>
                              <div style={{fontSize:16,color:T.muted}}>{l}</div>
                              <div style={{fontSize:16,color:T.dim}}>{sub}</div>
                            </div>
                            <div style={{fontSize:17,fontWeight:800,color:c,fontFamily:"Calibri,sans-serif"}}>{v}</div>
                          </div>
                        ))}
                      </div>

                      <div style={{background:T.card,border:`1px solid ${T.border}`,borderRadius:12,padding:"20px"}}>
                        <div style={{fontSize:16,color:T.muted,letterSpacing:"2px",textTransform:"uppercase",marginBottom:16}}>Cơ cấu DT 2025</div>
                        {[
                          {n:"Van gió EI/E",v:39,c:T.accent},
                          {n:"Cửa gió nội địa",v:17,c:T.green},
                          {n:"Xuất khẩu",v:16,c:T.yellow},
                          {n:"VAV Box/CAV",v:14,c:T.orange},
                          {n:"TMC & Cáp điện",v:8,c:T.red},
                          {n:"Khác",v:6,c:T.purple},
                        ].map((g,i)=>(
                          <div key={i} style={{display:"flex",alignItems:"center",gap:8,marginBottom:8}}>
                            <div style={{width:8,height:8,borderRadius:2,background:g.c,flexShrink:0}}/>
                            <span style={{flex:1,fontSize:15,color:T.muted}}>{g.n}</span>
                            <div style={{width:100}}>
                              <div style={{background:"rgba(255,255,255,0.05)",borderRadius:3,height:6,overflow:"hidden"}}>
                                <div style={{width:`${g.v}%`,background:g.c,height:"100%",borderRadius:3}}/>
                              </div>
                            </div>
                            <span style={{fontSize:16,fontWeight:700,color:g.c,width:30,textAlign:"right"}}>{g.v}%</span>
                          </div>
                        ))}
                        <div style={{marginTop:10,background:`${T.red}15`,borderRadius:6,padding:"8px 10px",fontSize:15,color:"#fca5a5"}}>
                          ⚠ TMC giảm mạnh: chỉ 40.7% so với 2024
                        </div>
                      </div>
                    </div>

                    {/* 6T trend KH */}
                    <div style={{background:T.card,border:`1px solid ${T.border}`,borderRadius:12,padding:"18px"}}>
                      <div style={{fontSize:16,color:T.muted,letterSpacing:"2px",textTransform:"uppercase",marginBottom:14}}>KH Doanh thu 6 Tháng Đầu 2026 (tỷ VNĐ)</div>
                      <ResponsiveContainer width="100%" height={180}>
                        {(() => {
                          const KH_THANG = [
                            {thang:"T1",dt:14.76},{thang:"T2",dt:12.94},{thang:"T3",dt:20.00},
                            {thang:"T4",dt:22.06},{thang:"T5",dt:22.56},{thang:"T6",dt:22.82},
                          ];
                          return (
                        <BarChart data={KH_THANG}>
                          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)"/>
                          <XAxis dataKey="thang" tick={{fill:T.muted,fontSize:15}} axisLine={false} tickLine={false}/>
                          <YAxis tick={{fill:T.muted,fontSize:15}} axisLine={false} tickLine={false}/>
                          <Tooltip contentStyle={{background:"#111827",border:`1px solid ${T.border}`,borderRadius:8,fontSize:16}} formatter={v=>`${v}B`}/>
                          <Bar dataKey="dt" name="KH Doanh thu" radius={[5,5,0,0]}>
                            {KH_THANG.map((m,i)=><Cell key={i} fill={i<2?T.accent:"rgba(37,99,235,0.3)"}/>)}
                          </Bar>
                        </BarChart>
                          );
                        })()}
                      </ResponsiveContainer>
                      <div style={{display:"flex",gap:16,marginTop:8}}>
                        <div style={{display:"flex",alignItems:"center",gap:6}}><div style={{width:10,height:10,borderRadius:2,background:T.accent}}/><span style={{fontSize:15,color:T.muted}}>Đã có dữ liệu TH</span></div>
                        <div style={{display:"flex",alignItems:"center",gap:6}}><div style={{width:10,height:10,borderRadius:2,background:"rgba(37,99,235,0.3)"}}/><span style={{fontSize:15,color:T.muted}}>KH chưa có TH</span></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })()}

          {/* ════════════════════════════════════
              REPORTS
          ════════════════════════════════════ */}
          {nav==="bc_submit" && (() => {
            const EFFECTIVE_MASTER = getEffectiveKpiMaster();
            const myDept = (isAdmin && submitDept) ? submitDept : (user?.dept || "PKD");
            const deptData = EFFECTIVE_MASTER[myDept];
            const thang = wk<=4?1:wk<=9?2:3;

            /* Monthly targets from KHKD (tỷ VNĐ) */
            const KH_MONTHLY=[11.54,12.94,19.26,22.06,22.56,22.82,24.31,24.81,24.31,23.20,21.70,22.20];
            const khM = KH_MONTHLY[thang-1];
            const khW = Math.round(khM/4*100)/100;

            /* KPI form fields per dept */
            const buildFormFields = (deptKey) => {
              const deptDef = EFFECTIVE_MASTER[deptKey];
              if (!deptDef) return [];
              const thangIdx = wk<=4?0:wk<=9?1:2;
              return [
                ...deptDef.kpis.map(k => ({
                  code: k.code + "-act",
                  l: k.label,
                  unit: k.unit,
                  hint: "KH tháng " + (thangIdx+1) + ": " + k.kh[thangIdx] + " " + k.unit + " · " + (k.note||""),
                  type: "number",
                  kh: k.kh[thangIdx],
                  dir: k.dir,
                  w: k.w,
                })),
                { code: deptKey.replace(/\s/g,"_") + "-note-act", l: "Ghi chú / Vấn đề tuần", unit: "", hint: "Sự kiện nổi bật, rủi ro, đề xuất...", type: "text" },
              ];
            };
            const FORM_FIELDS = Object.fromEntries(
              Object.keys(EFFECTIVE_MASTER).map(k => [k, buildFormFields(k)])
            );
            const fields = FORM_FIELDS[myDept] || buildFormFields(myDept) || [];
            const DEPT_LIST = Object.keys(EFFECTIVE_MASTER);

            const doSubmit = async () => {
              const title = `BC Tuần ${wk} – ${myDept}`;
              const kpiRows = fields
                .filter(f => f.type==="number" && kpiActualForm[f.code] !== undefined && kpiActualForm[f.code] !== "")
                .map(f => {
                  const actual = parseFloat(kpiActualForm[f.code]);
                  const kpiCode = f.code.replace("-act","");
                  const score = !isNaN(actual) ? kpiScore(actual, f.kh, f.dir) : null;
                  return { code: kpiCode, label: f.l, actual, target: f.kh, score, unit: f.unit||"", dir: f.dir, w: f.w||10 };
                });

              if(kpiRows.length === 0) {
                setSubmitMsg("⚠️ Vui lòng điền ít nhất 1 chỉ số KPI trước khi nộp!");
                setTimeout(()=>setSubmitMsg(""), 4000);
                return;
              }
              const noteField = fields.find(f=>f.type==="text");
              const noteVal = noteField ? (kpiActualForm[noteField.code]||"") : "";
              const lines = kpiRows.map(k=>`${k.label}: ${k.actual} ${k.unit}`);
              if(noteVal) lines.push(`Ghi chú: ${noteVal}`);

              // ── FEATURE 2: AI VALIDATE ──────────────────────────────
              setAiValidating(true);
              setAiValidation(null);
              if(kpiRows.length > 0) {
                try {
                  const validatePrompt = `Kiểm tra nhanh số liệu KPI phòng ${myDept} tuần ${wk}/2026. Chỉ cảnh báo nếu số liệu RÕ RÀNG bất hợp lý (ví dụ âm, vượt 1000%, nhập sai đơn vị). KHÔNG cảnh báo nếu số liệu trong ngưỡng bình thường dù thấp hơn KH.\n\nSố liệu nộp:\n${lines.join("\n")}\nKH tháng ${thang}: ${deptData?.kpis?.slice(0,3).map(k=>`${k.label}: ${k.kh?.[thang-1]||"?"}${k.unit}`).join(", ")}.\n\nTrả lời ngắn gọn: nếu OK thì bắt đầu bằng "OK –", nếu có vấn đề nghiêm trọng thì bắt đầu bằng "CẢNH BÁO –".`;
                  const validateRes = await callClaude([{role:"user",content:validatePrompt}], "Ban la he thong kiem tra so lieu KPI. Chi canh bao khi so lieu RO RANG bat hop ly.", 200);
                  const hasWarning = validateRes.toUpperCase().startsWith("CẢNH BÁO") || validateRes.toUpperCase().startsWith("CANH BAO");
                  setAiValidation({type: hasWarning?"warn":"ok", text: validateRes});
                  if(hasWarning) {
                    // Lưu kpiRows + lines vào state để nút "Vẫn nộp" dùng lại
                    setPendingSubmit({kpiRows, lines, noteVal, title});
                    setAiValidating(false);
                    return;
                  }
                } catch(e) { /* bỏ qua nếu AI lỗi, tiếp tục submit */ }
              }
              setAiValidating(false);
              await doSubmitCore(kpiRows, lines, noteVal, title);
            };

            const doSubmitCore = async (kpiRows, lines, noteVal, title) => {
              const avgScore = kpiRows.length ? Math.round(kpiRows.reduce((s,k)=>(s+(k.score||0)),0)/kpiRows.length) : null;
              const newR = { id: "temp-"+Date.now(), userId:user.id, week:wk, dept:myDept, user:user.name,
                title, issues: lines.join(" | "), proposals: noteVal, status:"pending",
                submittedAt: new Date().toLocaleString("vi-VN") };

              // Lưu vào state ngay (optimistic)
              setReports(p => {
                const filtered = p.filter(r => !(r.week===wk && r.dept===myDept));
                return [newR, ...filtered];
              });
              setKpiActualForm({});
              setAiValidation(null);
              setSubmitMsg(`✅ Đang lưu báo cáo Tuần ${wk} – ${myDept}...`);

              // ── 1. Lưu weekly_reports vào Supabase ─────────────────
              const rpRes = await sb.upsert("weekly_reports", {
                week_num: wk, year: 2026, dept: myDept,
                submitted_by: user.sbId || null,
                submitted_by_name: user.name,
                status: "submitted",
                submitted_at: new Date().toISOString(),
                content: {
                  title, note: noteVal,
                  kpi_count: kpiRows.length,
                  avg_score: avgScore,
                  kpi_lines: lines,
                }
              }, "week_num,year,dept");

              // ── 2. Lưu kpi_data từng dòng ─────────────────────────
              if(kpiRows.length > 0) {
                await saveKPItoSupabase(myDept, kpiRows);
              }

              // ── 3. Cập nhật weekly_data để CEO Dashboard thấy ngay ─
              const deptKey = myDept.toLowerCase().replace(/\s/g,"_").replace(/[^a-z0-9_]/g,"");
              const kpiMap = {};
              kpiRows.forEach(k => { kpiMap[k.code] = k.actual; });
              // Build dept payload cho weekly_data
              const deptPayload = buildDeptPayload(myDept, kpiMap);
              await sb.upsert("weekly_data", {
                week_number: wk, year: 2026, month_number: thang,
                quarter: thang<=3?1:thang<=6?2:thang<=9?3:4,
                label: "T"+wk,
                ...deptPayload,
                has_data: true,
              }, "week_number,year");

              // Cập nhật local weeklyData state ngay
              setWeeklyData(prev => {
                const idx = prev.findIndex(w=>w.w===wk);
                if(idx>=0) {
                  const updated = [...prev];
                  const cur = {...updated[idx], hasData:true};
                  // Merge dept data vào row hiện tại
                  Object.entries(deptPayload).forEach(([k,v]) => {
                    if(typeof v==="object" && v!==null) cur[k] = {...(cur[k]||{}), ...v};
                  });
                  updated[idx] = cur;
                  return updated;
                }
                return prev;
              });

              // ── 4. Reload reports từ Supabase để xác nhận lưu thành công ─
              const fresh = await sb.get("weekly_reports", "order=submitted_at.desc&limit=100");
              if(fresh && fresh.length > 0) {
                const mapped = fresh.map(r => ({
                  id: r.id, sbId: r.id, dept: r.dept,
                  user: r.content?.submitted_by_name || r.submitted_by_name || r.dept,
                  userId: r.submitted_by, week: r.week_num,
                  title: r.content?.title || `BC ${r.dept} T${r.week_num}`,
                  submittedAt: r.submitted_at ? new Date(r.submitted_at).toLocaleString("vi-VN") : "--",
                  status: r.status==="submitted"?"pending":(r.status||"pending"),
                  ceoComment: r.ceo_comment||"",
                  issues: r.content?.kpi_lines?.join(" | ") || r.content?.issues || "",
                }));
                setReports(mapped);
                setSubmitMsg(`✅ Đã nộp báo cáo Tuần ${wk} – ${myDept} · ${kpiRows.length} KPI đã ghi nhận`);
              } else {
                setSubmitMsg(`✅ Đã nộp báo cáo Tuần ${wk} – ${myDept}`);
              }

              // ── 5. Reload weeklyData từ Supabase → CEO Dashboard cập nhật ngay ─
              const freshWk = await sb.get("weekly_data", "year=eq.2026&order=week_number.asc");
              if(freshWk && freshWk.length > 0) {
                const remapped = freshWk.map(row => ({
                  w: row.week_number, thang: row.month_number, quy: row.quarter,
                  ngay: row.ngay || "", label: row.label || "T"+row.week_number,
                  hasData: row.has_data === true || (!!(row.tckt && Object.keys(row.tckt||{}).length > 0) || !!(row.pkd && Object.keys(row.pkd||{}).length > 0) || !!(row.nhom && Object.keys(row.nhom||{}).length > 0)),
                  pkd:  row.pkd  || {}, tckt: row.tckt || {}, nhom: row.nhom || {},
                  thep: row.thep || {}, gh:   row.gh   || {}, kho:  row.kho  || {},
                  cd:   row.cd   || {}, qlcl: row.qlcl || {}, cu:   row.cu   || {},
                  rd:   row.rd   || {}, hcns: row.hcns || {},
                }));
                setWeeklyData(remapped);

                // ── 6. Auto-tính CHS từ weeklyData vừa reload ─────────────
                try {
                  const thangCHS = thang;
                  // Dùng đúng row tuần hiện tại wk (không phải slice(-1)[0])
                  const thisWkRow = remapped.find(r=>r.w===wk) || {};
                  const tc = thisWkRow?.tckt || {};
                  const fin = (() => {
                    let s = 0, n = 0;
                    if(tc.pt)      { s += kpiScore(tc.pt,      38,   "L")||0; n++; }
                    if(tc.qh)      { s += kpiScore(tc.qh,       5,   "L")||0; n++; }
                    if(tc.vayNH)   { s += kpiScore(tc.vayNH,   50,   "L")||0; n++; }
                    if(tc.tienMat) { s += kpiScore(tc.tienMat,  5,   "H")||0; n++; }
                    if(tc.thuTH)   { s += kpiScore(tc.thuTH,   10,   "H")||0; n++; }
                    return n > 0 ? Math.round(s/n) : null;
                  })();
                  // Vận hành (30%): uptime, FPY, nhomHT, OTD
                  const ops = (() => {
                    let s = 0, n = 0;
                    const cd2 = thisWkRow?.cd || {}, qlcl2 = thisWkRow?.qlcl || {}, nhom2 = thisWkRow?.nhom || {}, gh2 = thisWkRow?.gh || {};
                    if(cd2.uptime)  { s += kpiScore(cd2.uptime,  95, "H")||0; n++; }
                    if(qlcl2.fpy)   { s += kpiScore(qlcl2.fpy,   95, "H")||0; n++; }
                    if(nhom2.ht)    { s += kpiScore(nhom2.ht,   100, "H")||0; n++; }
                    if(gh2.otd)     { s += kpiScore(gh2.otd,     95, "H")||0; n++; }
                    return n > 0 ? Math.round(s/n) : null;
                  })();
                  // Tăng trưởng (20%): DT vs KH tháng (tích lũy các tuần trong tháng)
                  const KH_M2 = [11.54,12.94,19.26,22.06,22.56,22.82,24.31,24.81,24.31,23.20,21.70,22.20];
                  const dtAgg = remapped.filter(r=>r.hasData && r.thang===thangCHS).reduce((s,r)=>s+(r.pkd?.dt||0),0);
                  const khM2 = KH_M2[thangCHS-1];
                  const growth = dtAgg > 0 && khM2 > 0 ? kpiScore(dtAgg, khM2, "H") : null;
                  // Chất lượng (10%): FPY từ tuần hiện tại
                  const quality = thisWkRow?.qlcl?.fpy ? kpiScore(thisWkRow.qlcl.fpy, 95, "H") : null;
                  // Chiến lược (10%): số dept đã nộp trong tháng
                  const deptsFiled = new Set(remapped.filter(r=>r.hasData && r.thang===thangCHS).flatMap(r=>
                    ["pkd","tckt","nhom","thep","gh","kho","cd","qlcl","cu","rd","hcns"].filter(k=>Object.keys(r[k]||{}).length>0)
                  )).size;
                  const strategy = deptsFiled >= 5 ? 80 : deptsFiled >= 3 ? 70 : null;
                  // Tổng hợp CHS
                  const parts = [
                    {v:fin,    w:30},
                    {v:ops,    w:30},
                    {v:growth, w:20},
                    {v:quality,w:10},
                    {v:strategy,w:10},
                  ].filter(p=>p.v!=null);
                  if(parts.length > 0) {
                    const totalW2 = parts.reduce((s,p)=>s+p.w,0);
                    const chsScore = Math.round(parts.reduce((s,p)=>s+p.v*p.w,0)/totalW2);
                    const newCHSRow = {
                      l:"T"+wk, chs:chsScore,
                      fin:fin||null, ops:ops||null,
                      growth:growth||null, quality:quality||null, strategy:strategy||null,
                    };
                    // Upsert vào Supabase
                    await sb.upsert("chs_history", {
                      year:2026, week_num:wk,
                      chs_score: chsScore,
                      fin_score: fin||null, ops_score: ops||null,
                      growth_score: growth||null, quality_score: quality||null, strategy_score: strategy||null,
                    }, "year,week_num");
                    // Cập nhật state ngay
                    setChsData(prev => {
                      const idx = prev.findIndex(c=>c.l==="T"+wk);
                      const next = [...prev];
                      if(idx>=0) next[idx] = newCHSRow;
                      else next.push(newCHSRow);
                      return next;
                    });
                  }
                } catch(chsErr) { console.warn("CHS calc error:", chsErr); }
              }
              setTimeout(()=>setSubmitMsg(""), 5000);

              // ── FEATURE 3: AI THANK YOU (async, non-blocking) ──────
              const userName = user?.name || "";
              try {
                const thanksPrompt = `Người nộp: ${user?.name} (${myDept}), Tuần ${wk}/2026.\nSố liệu đã nộp:\n${lines.join("\n")}\nHãy viết lời cảm ơn và phân tích nhanh.`;
                const thanksRes = await callClaude([{role:"user",content:thanksPrompt}], buildSysPrompt("thanks"), 500);
                setSubmitThanks({name:userName, dept:myDept, week:wk, analysis:thanksRes, linesCount:lines.length});
              } catch(e) {
                setSubmitThanks({name:userName, dept:myDept, week:wk,
                  analysis:`Cảm ơn ${userName} đã nộp báo cáo phòng ${myDept} tuần ${wk}! ${kpiRows.length} KPI đã được ghi nhận vào CIS. Dữ liệu đang chờ CEO phê duyệt. 💪`,
                  linesCount:lines.length});
              }
            }; // end doSubmitCore

            // Load KPI đã nộp tuần này (nếu có)
            const existingReport = reports.find(r => r.week===wk && r.dept===myDept);
            const alreadySubmitted = !!existingReport;

            return (
            <div style={{display:"grid",gap:14}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:10}}>
                <SectionTitle sub={`Tuần ${wk}/2026 · Dữ liệu actual → chấm điểm KPI tự động → cập nhật CEO Dashboard`}>
                  📋 Nộp Báo Cáo Phòng Ban
                </SectionTitle>
                {submitMsg&&<div style={{padding:"8px 16px",borderRadius:8,background:"rgba(52,211,153,0.15)",border:`1px solid ${T.green}40`,color:T.green,fontSize:16,fontWeight:700}}>{submitMsg}</div>}
              </div>

              {/* Banner đã nộp */}
              {alreadySubmitted && (
                <div style={{background:"rgba(52,211,153,0.08)",border:`1px solid ${T.green}40`,borderRadius:10,padding:"12px 18px",display:"flex",alignItems:"center",gap:12}}>
                  <div style={{fontSize:22}}>✅</div>
                  <div>
                    <div style={{fontSize:16,fontWeight:700,color:T.green}}>Đã nộp báo cáo Tuần {wk} – {myDept}</div>
                    <div style={{fontSize:15,color:T.muted}}>Nộp lúc: {existingReport.submittedAt} · Trạng thái: {existingReport.status==="pending"?"⏳ Chờ duyệt":existingReport.status==="approved"?"✅ Đã duyệt":"🔁 Cần bổ sung"}</div>
                  </div>
                  <button onClick={()=>setKpiActualForm({})} style={{marginLeft:"auto",padding:"5px 14px",borderRadius:6,background:"rgba(255,255,255,0.05)",border:`1px solid ${T.border}`,color:T.muted,cursor:"pointer",fontSize:15}}>
                    Nộp lại
                  </button>
                </div>
              )}

              {/* Method selector + dept selector */}
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
                {/* Method */}
                <div style={{background:T.card,border:`1px solid ${T.border}`,borderRadius:12,padding:"16px 18px"}}>
                  <div style={{fontSize:15,color:T.muted,letterSpacing:"2px",textTransform:"uppercase",marginBottom:12}}>Phương thức nộp</div>
                  <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>
                    {[
                      {id:"form",   icon:"✏️", l:"Nhập Online"},
                      {id:"upload", icon:"📎", l:"Upload File"},
                      {id:"gsheet", icon:"📊", l:"Google Form"},
                    ].map(m=>(
                      <button key={m.id} onClick={()=>setSubmitMethod(m.id)}
                        style={{padding:"8px 16px",borderRadius:8,fontSize:16,fontWeight:submitMethod===m.id?700:500,
                          background:submitMethod===m.id?"rgba(37,99,235,0.2)":"rgba(255,255,255,0.03)",
                          color:submitMethod===m.id?"#60a5fa":T.muted,
                          border:submitMethod===m.id?`1px solid ${T.accent}50`:`1px solid ${T.border}`,cursor:"pointer"}}>
                        {m.icon} {m.l}
                      </button>
                    ))}
                  </div>
                  <div style={{marginTop:10,fontSize:15,color:T.dim}}>
                    {submitMethod==="form"&&"Nhập trực tiếp giá trị actual các KPI → hệ thống chấm điểm và cập nhật CEO Dashboard ngay"}
                    {submitMethod==="upload"&&"Upload file báo cáo (.xlsx, .pdf, .docx) theo mẫu chuẩn NSCA-CIS"}
                    {submitMethod==="gsheet"&&"Điền vào Google Sheet form dùng chung, dữ liệu tự đồng bộ vào CIS"}
                  </div>
                </div>
                {/* Dept selector (admin only) */}
                <div style={{background:T.card,border:`1px solid ${T.border}`,borderRadius:12,padding:"16px 18px"}}>
                  <div style={{fontSize:15,color:T.muted,letterSpacing:"2px",textTransform:"uppercase",marginBottom:12}}>Phòng ban báo cáo</div>
                  {isAdmin
                    ? <div style={{display:"flex",gap:6,flexWrap:"wrap"}}>
                        {DEPT_LIST.map(d=>{
                          const dRpt = reports.find(r=>r.week===wk&&r.dept===d);
                          return (
                            <button key={d} onClick={()=>{setSubmitDept(d);setKpiActualForm({});}}
                              style={{padding:"5px 12px",borderRadius:6,fontSize:15,fontWeight:myDept===d?700:500,
                                background:myDept===d?`${EFFECTIVE_MASTER[d]?.color||T.accent}22`:"rgba(255,255,255,0.03)",
                                color:myDept===d?(EFFECTIVE_MASTER[d]?.color||"#60a5fa"):T.muted,
                                border:myDept===d?`1px solid ${EFFECTIVE_MASTER[d]?.color||T.accent}50`:`1px solid ${T.border}`,cursor:"pointer",
                                position:"relative"}}>
                              {d}
                              {dRpt && <span style={{position:"absolute",top:-4,right:-4,width:8,height:8,borderRadius:"50%",background:dRpt.status==="approved"?T.green:T.yellow}}/>}
                            </button>
                          );
                        })}
                      </div>
                    : <div style={{fontSize:16,fontWeight:700,color:T.text}}>{user?.dept}</div>
                  }
                  <div style={{marginTop:10,fontSize:15,color:T.muted}}>
                    Tuần: <strong>{wk}</strong> · Tháng: <strong>{thang}</strong> · KH tháng DT: <strong>{KH_MONTHLY[thang-1]}B</strong>
                  </div>
                </div>
              </div>

              {/* ── Method: Online Form ── */}
              {submitMethod==="form" && (
                <div style={{background:T.card,border:`1px solid ${T.border}`,borderRadius:12,padding:"18px 20px"}}>
                  {/* Header */}
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:16}}>
                    <div>
                      <div style={{fontSize:17,fontWeight:800}}>{myDept} – Nhập KPI Actual Tuần {wk}</div>
                      <div style={{fontSize:15,color:T.muted}}>Trưởng phòng: {deptData?.owner||"–"} · Tháng {thang}/2026 · {fields.filter(f=>f.type==="number").length} chỉ số</div>
                    </div>
                    {/* Progress điền */}
                    {(()=>{
                      const total = fields.filter(f=>f.type==="number").length;
                      const filled = fields.filter(f=>f.type==="number" && kpiActualForm[f.code]!==undefined && kpiActualForm[f.code]!=="").length;
                      const pctFill = total>0?Math.round(filled/total*100):0;
                      return (
                        <div style={{textAlign:"right"}}>
                          <div style={{fontSize:15,color:T.muted,marginBottom:4}}>{filled}/{total} KPI đã điền</div>
                          <div style={{width:120,height:6,background:"rgba(255,255,255,0.08)",borderRadius:3}}>
                            <div style={{width:`${pctFill}%`,height:"100%",borderRadius:3,background:pctFill===100?T.green:pctFill>=50?T.yellow:T.accent,transition:"width 0.3s"}}/>
                          </div>
                        </div>
                      );
                    })()}
                  </div>

                  {/* KPI inputs grid */}
                  <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:10,marginBottom:16}}>
                    {fields.filter(f=>f.type==="number").map((f,idx)=>{
                      const act = parseFloat(kpiActualForm[f.code]);
                      const hasVal = !isNaN(act) && kpiActualForm[f.code]!=="";
                      const s = hasVal && f.kh ? kpiScore(act, f.kh, f.dir) : null;
                      const sColor = scoreColor(s);
                      const inv = f.dir==="L";
                      return (
                        <div key={f.code} style={{
                          background:"rgba(255,255,255,0.02)",
                          border:`1px solid ${hasVal?(s!=null&&s>=80?T.green+"55":s!=null&&s>=60?T.yellow+"55":T.red+"55"):T.border}`,
                          borderRadius:8,padding:"12px 14px",transition:"border 0.2s"
                        }}>
                          {/* KPI label + code */}
                          <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:6}}>
                            <div style={{fontSize:15,fontWeight:700,flex:1,paddingRight:8}}>{f.l}</div>
                            <div style={{fontSize:12,color:T.dim,flexShrink:0,background:"rgba(255,255,255,0.05)",padding:"1px 6px",borderRadius:4}}>
                              {f.code.replace("-act","")}
                            </div>
                          </div>
                          {/* KH badge */}
                          <div style={{fontSize:13,color:T.muted,marginBottom:8}}>
                            🎯 KH T{thang}: <strong style={{color:T.cyan}}>{f.kh} {f.unit}</strong>
                            {f.w && <span style={{marginLeft:8,fontSize:12,color:T.dim}}>· Trọng số {f.w}%</span>}
                          </div>
                          {/* Input row */}
                          <div style={{display:"flex",alignItems:"center",gap:8}}>
                            <input
                              type="number"
                              value={kpiActualForm[f.code]||""}
                              onChange={e=>setKpiActualForm(p=>({...p,[f.code]:e.target.value}))}
                              placeholder={`Nhập actual...`}
                              style={{
                                flex:1, background:"rgba(255,255,255,0.06)",
                                border:`1.5px solid ${hasVal?T.accent:T.border}`,
                                borderRadius:6,padding:"8px 10px",color:T.text,fontSize:16,fontWeight:700,
                                width:"100%",boxSizing:"border-box", outline:"none"
                              }}
                            />
                            <span style={{fontSize:14,color:T.muted,flexShrink:0,minWidth:28,textAlign:"right"}}>{f.unit}</span>
                          </div>
                          {/* Score bar */}
                          {s!=null && (
                            <div style={{marginTop:8,display:"flex",alignItems:"center",gap:8}}>
                              <div style={{flex:1,height:4,background:"rgba(255,255,255,0.06)",borderRadius:2,overflow:"hidden"}}>
                                <div style={{width:`${Math.min(100,(s/120)*100)}%`,background:sColor,height:"100%",borderRadius:2,transition:"width 0.3s"}}/>
                              </div>
                              <span style={{fontSize:14,fontWeight:900,color:sColor,minWidth:28,textAlign:"right"}}>{s}</span>
                              <span style={{fontSize:13,color:T.dim}}>{s>=90?"✅":s>=70?"⚠️":"❌"}</span>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* Text notes */}
                  {fields.filter(f=>f.type==="text").map(f=>(
                    <div key={f.code} style={{marginBottom:12}}>
                      <div style={{fontSize:15,fontWeight:700,marginBottom:6,color:T.muted}}>📝 {f.l}</div>
                      <textarea value={kpiActualForm[f.code]||""} rows={3}
                        onChange={e=>setKpiActualForm(p=>({...p,[f.code]:e.target.value}))}
                        placeholder={f.hint||"Sự kiện nổi bật, rủi ro, đề xuất cải tiến..."}
                        style={{width:"100%",background:"rgba(255,255,255,0.04)",border:`1px solid ${T.border}`,
                          borderRadius:6,padding:"10px 12px",color:T.text,fontSize:15,lineHeight:1.6,
                          resize:"vertical",boxSizing:"border-box",outline:"none"}}/>
                    </div>
                  ))}

                  {/* AI Validation result */}
                  {aiValidation&&(
                    <div style={{marginBottom:12,padding:"12px 16px",borderRadius:8,
                      background:aiValidation.type==="warn"?"rgba(245,158,11,0.08)":"rgba(52,211,153,0.08)",
                      border:`1px solid ${aiValidation.type==="warn"?T.yellow:T.green}40`}}>
                      <div style={{fontSize:15,fontWeight:700,marginBottom:6,color:aiValidation.type==="warn"?T.yellow:T.green}}>
                        {aiValidation.type==="warn"?"⚠️ AI phát hiện bất thường – vui lòng kiểm tra lại":"✅ AI xác nhận số liệu hợp lý"}
                      </div>
                      <div style={{fontSize:15,color:T.muted,lineHeight:1.7}}>{aiValidation.text}</div>
                      {aiValidation.type==="warn"&&(
                        <div style={{marginTop:10,display:"flex",gap:8}}>
                          <button onClick={()=>setAiValidation(null)}
                            style={{padding:"6px 14px",borderRadius:6,background:"rgba(255,255,255,0.05)",
                              border:`1px solid ${T.border}`,color:T.muted,cursor:"pointer",fontSize:14}}>
                            ✏️ Sửa lại
                          </button>
                          <button onClick={async()=>{
                              const saved = pendingSubmit;
                              setAiValidation(null);
                              setPendingSubmit(null);
                              if(saved) await doSubmitCore(saved.kpiRows, saved.lines, saved.noteVal, saved.title);
                            }}
                            style={{padding:"6px 14px",borderRadius:6,background:"rgba(245,158,11,0.15)",
                              border:`1px solid ${T.yellow}40`,color:T.yellow,cursor:"pointer",fontSize:14,fontWeight:700}}>
                            📤 Vẫn nộp (bỏ qua cảnh báo AI)
                          </button>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Submit buttons */}
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:4}}>
                    <div style={{fontSize:14,color:T.dim}}>
                      {fields.filter(f=>f.type==="number"&&kpiActualForm[f.code]!==undefined&&kpiActualForm[f.code]!=="").length} / {fields.filter(f=>f.type==="number").length} KPI đã điền
                    </div>
                    <div style={{display:"flex",gap:10}}>
                      <button onClick={()=>{setKpiActualForm({});setAiValidation(null);}}
                        style={{padding:"9px 20px",borderRadius:8,background:"rgba(255,255,255,0.05)",
                          border:`1px solid ${T.border}`,color:T.muted,cursor:"pointer",fontSize:16,fontWeight:600}}>
                        🗑 Xóa form
                      </button>
                      <button onClick={doSubmit} disabled={aiValidating}
                        style={{padding:"9px 28px",borderRadius:8,
                          background:aiValidating?"rgba(255,255,255,0.05)":T.accent,
                          border:"none",color:aiValidating?T.muted:"white",
                          cursor:aiValidating?"default":"pointer",fontSize:16,fontWeight:700,
                          boxShadow:aiValidating?"none":"0 2px 12px rgba(37,99,235,0.3)"}}>
                        {aiValidating?"✨ AI đang kiểm tra...":"✅ Nộp báo cáo Tuần "+wk}
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* ── Method: Upload File ── */}
              {submitMethod==="upload" && (
                <div style={{background:T.card,border:`1px solid ${T.border}`,borderRadius:12,padding:"24px"}}>
                  <div style={{fontSize:16,fontWeight:700,marginBottom:16}}>📎 Upload Báo cáo – {myDept}</div>
                  {/* Drop zone */}
                  <div style={{border:`2px dashed ${T.border}`,borderRadius:12,padding:"40px",textAlign:"center",
                    background:"rgba(255,255,255,0.01)",cursor:"pointer"}}
                    onClick={()=>fileInputRef.current && fileInputRef.current.click()}
                    onDragOver={e=>{e.preventDefault(); e.currentTarget.style.borderColor=T.accent;}}
                    onDragLeave={e=>{e.currentTarget.style.borderColor="";}}
                    onDrop={e=>{
                      e.preventDefault();
                      e.stopPropagation();
                      e.currentTarget.style.borderColor="";
                      const f = e.dataTransfer.files[0];
                      if(f) setSubmitMsg(`✅ Đã chọn "${f.name}" (${(f.size/1024).toFixed(0)} KB) – Nhấn Nộp để xác nhận`);
                    }}>
                    <div style={{fontSize:36,marginBottom:12}}>📂</div>
                    <div style={{fontSize:16,fontWeight:700,marginBottom:6}}>Kéo & thả file vào đây</div>
                    <div style={{fontSize:15,color:T.muted,marginBottom:16}}>Hỗ trợ: .xlsx · .pdf · .docx · .csv</div>
                    <div style={{display:"flex",gap:10,justifyContent:"center"}}>
                      <input type="file" ref={fileInputRef} accept=".xlsx,.pdf,.docx,.csv"
                        style={{display:"none"}}
                        onChange={async e=>{
                          const f = e.target.files?.[0];
                          if(!f) return;
                          setSubmitMsg(`⏳ Đang tải lên "${f.name}"...`);
                          try {
                            // Upload lên Supabase Storage
                            const path = `${2026}/W${wk}/${user.dept}/${Date.now()}_${f.name}`;
                            const uploadRes = await fetch(
                              `${SUPABASE_URL}/storage/v1/object/reports/${path}`,
                              { method:"POST",
                                headers:{ "apikey": SUPABASE_KEY, "Authorization": `Bearer ${SUPABASE_KEY}`,
                                          "Content-Type": f.type || "application/octet-stream",
                                          "x-upsert": "true" },
                                body: f }
                            );
                            if(uploadRes.ok) {
                              const fileUrl = `${SUPABASE_URL}/storage/v1/object/public/reports/${path}`;
                              // Lưu metadata vào file_uploads
                              await sb.insert("file_uploads", {
                                week_number: wk, year: 2026, dept: user.dept,
                                file_name: f.name, file_size: f.size,
                                file_type: f.type, storage_path: path,
                                uploaded_by: user.name
                              });
                              setSubmitMsg(`✅ Upload thành công "${f.name}" (${(f.size/1024).toFixed(0)} KB)`);
                            } else {
                              const err = await uploadRes.text();
                              setSubmitMsg(`❌ Upload thất bại: ${err}`);
                            }
                          } catch(err) {
                            setSubmitMsg(`❌ Lỗi: ${err.message}`);
                          }
                        }}/>
                      <button style={{padding:"8px 20px",borderRadius:8,background:T.accent,color:"white",border:"none",cursor:"pointer",fontSize:16,fontWeight:700}}
                        onClick={()=>fileInputRef.current && fileInputRef.current.click()}>
                        📁 Chọn & Upload file
                      </button>
                      <button style={{padding:"8px 16px",borderRadius:8,background:"rgba(255,255,255,0.05)",
                        border:`1px solid ${T.border}`,color:T.muted,cursor:"pointer",fontSize:16}}
                        onClick={()=>window.open("https://docs.google.com/spreadsheets/create","_blank")}>
                        ⬇ Tải mẫu BC
                      </button>
                    </div>
                  </div>
                  <div style={{marginTop:14,padding:"10px 14px",background:"rgba(96,165,250,0.06)",border:`1px solid rgba(96,165,250,0.15)`,borderRadius:8}}>
                    <div style={{fontSize:15,color:T.muted,marginBottom:6}}>📋 Mẫu báo cáo chuẩn NSCA-CIS bao gồm:</div>
                    <div style={{fontSize:15,color:T.dim}}>Sheet 1: KPI Actuals · Sheet 2: Phân tích · Sheet 3: Vấn đề & Đề xuất · Sheet 4: Action Items</div>
                  </div>
                </div>
              )}

              {/* ── Method: Google Sheet ── */}
              {submitMethod==="gsheet" && (
                <div style={{background:T.card,border:`1px solid ${T.border}`,borderRadius:12,padding:"24px"}}>
                  <div style={{fontSize:16,fontWeight:700,marginBottom:16}}>📊 Google Form / Sheet – {myDept}</div>
                  <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14}}>
                    <div style={{background:"rgba(255,255,255,0.02)",border:`1px solid ${T.border}`,borderRadius:10,padding:"18px",textAlign:"center"}}>
                      <div style={{fontSize:32,marginBottom:8}}>📝</div>
                      <div style={{fontSize:15,fontWeight:700,marginBottom:6}}>Google Form</div>
                      <div style={{fontSize:15,color:T.muted,marginBottom:14}}>Form điền trực tuyến, tự động ghi vào Sheet tổng hợp</div>
                      <a href="https://forms.google.com" target="_blank" rel="noopener noreferrer"
                        style={{display:"inline-block",padding:"8px 20px",borderRadius:8,background:T.accent,color:"white",
                          textDecoration:"none",fontSize:16,fontWeight:700}}>
                        🔗 Mở Google Form NSCA
                      </a>
                    </div>
                    <div style={{background:"rgba(255,255,255,0.02)",border:`1px solid ${T.border}`,borderRadius:10,padding:"18px",textAlign:"center"}}>
                      <div style={{fontSize:32,marginBottom:8}}>📊</div>
                      <div style={{fontSize:15,fontWeight:700,marginBottom:6}}>Google Sheet BC Tuần</div>
                      <div style={{fontSize:15,color:T.muted,marginBottom:14}}>Nhập số liệu trực tiếp vào bảng tổng hợp weekly</div>
                      <a href="https://sheets.google.com" target="_blank" rel="noopener noreferrer"
                        style={{display:"inline-block",padding:"8px 20px",borderRadius:8,background:"rgba(52,211,153,0.2)",color:T.green,
                          textDecoration:"none",fontSize:16,fontWeight:700,border:`1px solid ${T.green}40`}}>
                        🔗 Mở Sheet NSCA
                      </a>
                    </div>
                  </div>
                  <div style={{marginTop:12,padding:"10px 14px",background:"rgba(245,158,11,0.06)",border:`1px solid ${T.yellow}30`,borderRadius:8,fontSize:15,color:T.muted}}>
                    ⚡ Dữ liệu từ Google Sheet sẽ tự đồng bộ vào CIS sau khi admin phê duyệt tuần · Deadline nộp: <strong>18:00 thứ 7</strong>
                  </div>
                </div>
              )}

              {/* ── History ── */}
              <div>
                <div style={{fontSize:15,color:T.muted,letterSpacing:"2px",textTransform:"uppercase",marginBottom:10}}>
                  📑 Lịch sử báo cáo ({isAdmin ? reports.length : reports.filter(r=>r.userId===user?.id).length} báo cáo)
                </div>
                <div style={{display:"grid",gap:8}}>
                  {(isAdmin ? reports : reports.filter(r=>r.userId===user?.id)).slice(0,10).map(r => (
                    <div key={r.id} style={{background:T.card,border:`1px solid ${T.border}`,borderRadius:10,padding:"14px 18px",display:"flex",gap:14,alignItems:"center"}}>
                      <div style={{width:36,height:36,borderRadius:8,background:statusColor(r.status)+"15",
                        display:"flex",alignItems:"center",justifyContent:"center",fontSize:15,fontWeight:800,color:statusColor(r.status),flexShrink:0}}>
                        {r.dept?.substring(0,2)}
                      </div>
                      <div style={{flex:1,minWidth:0}}>
                        <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:3}}>
                          <span style={{fontSize:15,fontWeight:700}}>{r.title}</span>
                          <span style={{padding:"1px 7px",borderRadius:10,fontSize:14,fontWeight:700,color:statusColor(r.status),background:statusColor(r.status)+"15"}}>{statusLabel(r.status)}</span>
                        </div>
                        <div style={{fontSize:15,color:T.muted,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{r.issues}</div>
                        <div style={{fontSize:14,color:T.dim,marginTop:2}}>{r.user} · {r.submittedAt}</div>
                      </div>
                      <div style={{display:"flex",gap:6,flexShrink:0}}>
                        {isCEO && r.status==="pending" && (
                          <button onClick={()=>{setApproveTarget(r);setComment("");}}
                            style={{padding:"6px 14px",borderRadius:6,background:`${T.accent}15`,border:`1px solid ${T.accent}40`,
                              color:"#60a5fa",fontSize:15,cursor:"pointer",fontWeight:700}}>
                            Duyệt
                          </button>
                        )}
                        {(isCEO || r.userId===user?.id) && r.status==="pending" && (
                          <button onClick={async()=>{
                            if(!window.confirm("Hủy báo cáo này?")) return;
                            setReports(prev=>prev.filter(x=>x.id!==r.id));
                            if(r.id) await fetch(`${SUPABASE_URL}/rest/v1/weekly_reports?id=eq.${r.id}`,{method:"DELETE",headers:sb.headers});
                          }}
                            style={{padding:"6px 14px",borderRadius:6,background:"rgba(239,68,68,0.1)",border:"1px solid rgba(239,68,68,0.3)",
                              color:T.red,fontSize:15,cursor:"pointer",fontWeight:700}}>
                            Hủy
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            );
          })()}
          {/* ════════════════════════════════════
              ISSUES
          ════════════════════════════════════ */}
          {nav==="issues" && (() => {
            const visible = isAdmin ? issues : issues.filter(i=>i.fromId===user.id);
            const cntPending = visible.filter(i=>i.status==="pending").length;
            const cntHigh    = visible.filter(i=>i.priority==="high").length;
            const cntResolved= visible.filter(i=>i.status==="resolved"||i.status==="done").length;

            const filtered = issueFilter==="pending"  ? visible.filter(i=>i.status==="pending")
              : issueFilter==="high"     ? visible.filter(i=>i.priority==="high")
              : issueFilter==="resolved" ? visible.filter(i=>i.status==="resolved"||i.status==="done")
              : visible;

            const loadIssuesAI = async () => {
              if(!visible.length) return;
              setIssuesAILoading(true); setIssuesAI("");
              const list = visible.map(i=>`- [${i.priority==="high"?"CAO":"TB"}] ${i.title} | ${i.dept} | ${i.status} | ${i.createdAt||""}`).join("\n");
              try {
                const resp = await fetch("/api/ai",{
                  method:"POST",
                  headers:{"Content-Type":"application/json"},
                  body:JSON.stringify({
                    system:"Em là trợ lý CEO của NSCA, xưng em. Phân tích danh sách vấn đề phát sinh, xác định vấn đề nghiêm trọng nhất, phòng ban nào đang gặp nhiều vấn đề nhất, đề xuất ưu tiên xử lý. Trả lời bằng ngôn ngữ người hỏi dùng, súc tích dưới 150 từ.",
                    messages:[{role:"user",content:"Danh sách Issues:\n"+list}]
                  })
                });
                const d = await resp.json();
                setIssuesAI(d.content?.[0]?.text || "Không có phản hồi");
              } catch(e) { setIssuesAI("❌ Lỗi kết nối AI"); }
              setIssuesAILoading(false);
            };

            return (
              <div style={{display:"grid",gap:14}}>
                <SectionTitle sub={`${visible.length} vấn đề · ${cntPending} chờ xử lý`}>
                  Vấn đề & Đề xuất
                  <button onClick={()=>setIssueOpen(true)} style={{background:"linear-gradient(135deg,#2563eb,#1d4ed8)",border:"none",borderRadius:8,
                    padding:"9px 18px",color:"white",fontSize:16,fontWeight:700,cursor:"pointer"}}>＋ Tạo vấn đề</button>
                </SectionTitle>

                {/* Stats */}
                <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:10}}>
                  {[
                    {l:"Chờ xử lý", v:cntPending,  c:T.yellow},
                    {l:"Ưu tiên cao",v:cntHigh,     c:T.red},
                    {l:"Đã giải quyết",v:cntResolved,c:T.green},
                    {l:"Tổng",        v:visible.length,c:T.muted},
                  ].map(s=>(
                    <div key={s.l} style={{background:T.card,border:`1px solid ${s.c===T.red&&s.v>0?T.red+"40":T.border}`,borderRadius:10,padding:"14px",textAlign:"center"}}>
                      <div style={{fontSize:28,fontWeight:900,color:s.c}}>{s.v}</div>
                      <div style={{fontSize:13,color:T.muted,marginTop:3}}>{s.l}</div>
                    </div>
                  ))}
                </div>

                {/* AI Panel */}
                {isAdmin && (
                  <div style={{background:"rgba(37,99,235,0.06)",border:`1px solid ${T.accent}30`,borderRadius:12,padding:"16px 20px"}}>
                    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:issuesAI?10:0}}>
                      <div style={{fontSize:13,fontWeight:700,color:T.accent}}>✨ AI Phân tích vấn đề phát sinh</div>
                      <button onClick={loadIssuesAI} disabled={issuesAILoading||!visible.length}
                        style={{padding:"5px 14px",borderRadius:6,background:"rgba(37,99,235,0.15)",border:`1px solid ${T.accent}40`,color:T.accent,fontSize:13,fontWeight:700,cursor:"pointer",opacity:issuesAILoading||!visible.length?0.5:1}}>
                        {issuesAILoading?"⏳ Đang phân tích...":"🔍 Phân tích ngay"}
                      </button>
                    </div>
                    {issuesAI
                      ? <div style={{fontSize:14,lineHeight:1.8,color:T.text,whiteSpace:"pre-wrap"}}>{issuesAI}</div>
                      : !issuesAILoading && <div style={{fontSize:13,color:T.muted}}>Nhấn "Phân tích ngay" để AI xác định vấn đề ưu tiên và phòng ban cần chú ý.</div>
                    }
                  </div>
                )}

                {/* Filter */}
                <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>
                  {[
                    ["all",     "Tất cả "+visible.length],
                    ["pending", "Chờ xử lý"+(cntPending>0?" ("+cntPending+")":"")],
                    ["high",    "🔴 Ưu tiên cao"+(cntHigh>0?" ("+cntHigh+")":"")],
                    ["resolved","✅ Đã xử lý"+(cntResolved>0?" ("+cntResolved+")":"")],
                  ].map(([v,l])=>(
                    <button key={v} onClick={()=>setIssueFilter(v)}
                      style={{padding:"6px 16px",borderRadius:20,fontSize:14,fontWeight:600,cursor:"pointer",
                        background:issueFilter===v?T.accent:"rgba(255,255,255,0.04)",
                        color:issueFilter===v?"white":T.muted,
                        border:`1px solid ${issueFilter===v?T.accent:T.border}`}}>
                      {l}
                    </button>
                  ))}
                </div>

                {/* Issue cards */}
                {filtered.length===0 ? (
                  <div style={{background:T.card,border:`1px solid ${T.border}`,borderRadius:12,padding:"40px",textAlign:"center"}}>
                    <div style={{fontSize:32,marginBottom:12}}>✅</div>
                    <div style={{fontWeight:700,marginBottom:8}}>Không có vấn đề nào</div>
                    <div style={{fontSize:15,color:T.muted}}>Trong filter này hiện không có issue nào</div>
                  </div>
                ) : filtered.filter(issue=>showResolvedIssues||(issue.status!=="resolved"&&issue.status!=="done")).map(issue => (
                  <div key={issue.id}
                    style={{background:T.card,border:`1px solid ${issue.priority==="high"?T.red+"40":T.border}`,
                      borderRadius:12,padding:"18px 20px",display:"flex",gap:16,alignItems:"flex-start",
                      transition:"background 0.15s",opacity:(issue.status==="resolved"||issue.status==="done")?0.55:1}}>
                    <div style={{width:10,height:10,borderRadius:"50%",background:issue.priority==="high"?T.red:T.yellow,marginTop:4,flexShrink:0}}/>
                    <div style={{flex:1,cursor:"pointer"}} onClick={()=>{setViewIssue(issue);setComment(issue.ceoComment||"");}}>
                      <div style={{display:"flex",gap:10,alignItems:"center",marginBottom:6,flexWrap:"wrap"}}>
                        <span style={{fontSize:17,fontWeight:700}}>{issue.title}</span>
                        <span style={{padding:"2px 8px",borderRadius:12,fontSize:13,fontWeight:700,color:statusColor(issue.status),background:statusColor(issue.status)+"15"}}>{statusLabel(issue.status)}</span>
                        <span style={{padding:"2px 8px",borderRadius:12,fontSize:13,color:issue.priority==="high"?T.red:T.yellow,background:issue.priority==="high"?T.redBg:T.yellowBg}}>{issue.priority==="high"?"🔴 Ưu tiên cao":"🟡 Trung bình"}</span>
                      </div>
                      <div style={{fontSize:14,color:T.muted,marginBottom:4}}>{issue.from} · {issue.dept} · {issue.createdAt}</div>
                      <div style={{fontSize:15,color:"#94a3b8"}}>{issue.desc}</div>
                      {issue.ceoComment && <div style={{marginTop:8,background:T.greenBg,borderRadius:6,padding:"6px 12px",fontSize:14,color:T.green}}>💬 CEO: {issue.ceoComment}</div>}
                    </div>
                    {(isCEO||isAdmin) && issue.status!=="resolved" && issue.status!=="done" && (
                      <button onClick={async()=>{
                        const ns = "resolved";
                        setIssues(prev=>prev.map(x=>x.id===issue.id?{...x,status:ns}:x));
                        if(issue.id) sb.update("issues",{status:ns},`id=eq.${issue.id}`);
                        setToast("✅ Đã đánh dấu xử lý xong"); setTimeout(()=>setToast(""),2500);
                      }} style={{padding:"6px 14px",borderRadius:8,background:"rgba(52,211,153,0.1)",border:`1px solid ${T.green}40`,
                        color:T.green,fontSize:14,cursor:"pointer",fontWeight:700,flexShrink:0,whiteSpace:"nowrap"}}>
                        ✓ Xử lý xong
                      </button>
                    )}
                  </div>
                ))}
                {cntResolved>0 && (
                  <button onClick={()=>setShowResolvedIssues(p=>!p)}
                    style={{background:"rgba(255,255,255,0.04)",border:`1px solid ${T.border}`,borderRadius:8,padding:"8px 16px",
                      color:T.muted,fontSize:14,cursor:"pointer",width:"100%"}}>
                    {showResolvedIssues?"▲ Ẩn":"▼ Xem"} {cntResolved} issue đã xử lý
                  </button>
                )}
              </div>
            );
          })()}

          {/* ════════════════════════════════════
              USERS
          ════════════════════════════════════ */}
          {nav==="users" && isAdmin && (
            <UsersPanel
              users={users} setUsers={setUsers}
              newUserForm={newUserForm} setNewUserForm={setNewUserForm}
              showAddUser={showAddUser} setShowAddUser={setShowAddUser}
              customKpiData={customKpiData} setCustomKpiData={setCustomKpiData}
              isCEO={isCEO} T={T}
              addKpi={addKpi} deleteKpi={deleteKpi}
              kpiMsg={kpiMsg} setKpiMsg={setKpiMsg}
              kpiForm={kpiForm} setKpiForm={setKpiForm}
              inp={inp}
              sb={sb} chsData={chsData} weeklyData={weeklyData} wkData={wkData} user={user}
            />
          )}


          {/* ════════════════════════════════════
              HEALTH SCORE (formerly Finance detail)
          ════════════════════════════════════ */}
          {nav==="health" && (
            <div style={{display:"grid",gap:16}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:10}}>
                <SectionTitle sub="Sức khỏe doanh nghiệp chi tiết theo tuần · CHS = f(Tài chính, Vận hành, Tăng trưởng, Chất lượng, Chiến lược)">💓 Health Score</SectionTitle>
                {isCEO && (
                  <button onClick={async () => {
                    // Tính lại CHS cho tất cả tuần có data
                    let count = 0;
                    for (const wkRow of wkData.filter(w=>w.hasData)) {
                      const wkNum = wkRow.w;
                      const thangW = wkRow.thang || 1;
                      const wksInMonth = wkData.filter(r=>r.hasData && r.thang===thangW);
                      const tc = wkRow.tckt || {};
                      const fin = (() => {
                        let s=0,n=0;
                        if(tc.pt)      {s+=kpiScore(tc.pt,38,"L")||0;n++;}
                        if(tc.qh)      {s+=kpiScore(tc.qh,5,"L")||0;n++;}
                        if(tc.vayNH)   {s+=kpiScore(tc.vayNH,50,"L")||0;n++;}
                        if(tc.tienMat) {s+=kpiScore(tc.tienMat,5,"H")||0;n++;}
                        if(tc.thuTH)   {s+=kpiScore(tc.thuTH,10,"H")||0;n++;}
                        return n>0?Math.round(s/n):null;
                      })();
                      const ops = (() => {
                        let s=0,n=0;
                        const cd2=wkRow.cd||{},qlcl2=wkRow.qlcl||{},nhom2=wkRow.nhom||{},gh2=wkRow.gh||{};
                        if(cd2.uptime)  {s+=kpiScore(cd2.uptime,95,"H")||0;n++;}
                        if(qlcl2.fpy)   {s+=kpiScore(qlcl2.fpy,95,"H")||0;n++;}
                        if(nhom2.ht)    {s+=kpiScore(nhom2.ht,100,"H")||0;n++;}
                        if(gh2.otd)     {s+=kpiScore(gh2.otd,95,"H")||0;n++;}
                        return n>0?Math.round(s/n):null;
                      })();
                      const KHM=[11.54,12.94,19.26,22.06,22.56,22.82,24.31,24.81,24.31,23.20,21.70,22.20];
                      const dtAgg = wksInMonth.reduce((s,r)=>s+(r.pkd?.dt||0),0);
                      const growth = dtAgg>0&&KHM[thangW-1]>0?kpiScore(dtAgg,KHM[thangW-1],"H"):null;
                      const quality = wkRow.qlcl?.fpy?kpiScore(wkRow.qlcl.fpy,95,"H"):null;
                      const deptsFiled = ["pkd","tckt","nhom","thep","gh","kho","cd","qlcl","cu","rd","hcns"].filter(k=>Object.keys(wkRow[k]||{}).length>0).length;
                      const strategy = deptsFiled>=5?80:deptsFiled>=3?70:null;
                      const parts=[{v:fin,w:30},{v:ops,w:30},{v:growth,w:20},{v:quality,w:10},{v:strategy,w:10}].filter(p=>p.v!=null);
                      if(parts.length>0) {
                        const tw=parts.reduce((s,p)=>s+p.w,0);
                        const chsScore=Math.round(parts.reduce((s,p)=>s+p.v*p.w,0)/tw);
                        await sb.upsert("chs_history",{year:2026,week_num:wkNum,chs_score:chsScore,fin_score:fin||null,ops_score:ops||null,growth_score:growth||null,quality_score:quality||null,strategy_score:strategy||null},"year,week_num");
                        setChsData(prev=>{
                          const idx=prev.findIndex(c=>c.l==="T"+wkNum);
                          const row={l:"T"+wkNum,chs:chsScore,fin,ops,growth,quality,strategy};
                          const next=[...prev];
                          if(idx>=0)next[idx]=row; else next.push(row);
                          return next.sort((a,b)=>parseInt(a.l.slice(1))-parseInt(b.l.slice(1)));
                        });
                        count++;
                      }
                    }
                    setToast("✅ Đã tính lại CHS cho "+count+" tuần");
                    setTimeout(()=>setToast(""),3000);
                  }} style={{padding:"8px 18px",borderRadius:8,background:"rgba(99,102,241,0.15)",border:"1px solid #6366f150",color:"#818cf8",cursor:"pointer",fontSize:15,fontWeight:700,whiteSpace:"nowrap"}}>
                    🔄 Tính lại CHS tất cả tuần
                  </button>
                )}
              </div>
              <div style={{display:"grid",gridTemplateColumns:"repeat(5,1fr)",gap:12}}>
                {[{l:"Tài chính",k:"fin",color:"#60a5fa"},{l:"Vận hành",k:"ops",color:"#34d399"},{l:"Tăng trưởng",k:"growth",color:"#f59e0b"},{l:"Chất lượng",k:"quality",color:"#a78bfa"},{l:"Chiến lược",k:"strategy",color:"#f472b6"}].map(p=>(
                  <div key={p.l} style={{background:T.card,border:`1px solid ${T.border}`,borderRadius:12,padding:"18px",textAlign:"center"}}>
                    <div style={{fontSize:31,fontWeight:900,color:p.color,fontFamily:"Calibri,sans-serif"}}>{currentCHS[p.k]}</div>
                    <div style={{fontSize:15,color:T.muted,marginTop:6}}>{p.l}</div>
                    <div style={{marginTop:8,height:4,borderRadius:2,background:"rgba(255,255,255,0.08)"}}>
                      <div style={{height:"100%",width:`${currentCHS[p.k]}%`,background:p.color,borderRadius:2,transition:"width 0.5s"}}/>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16}}>
                <div style={{background:T.card,border:`1px solid ${T.border}`,borderRadius:12,padding:"18px"}}>
                  <div style={{fontSize:16,color:T.muted,letterSpacing:"2px",textTransform:"uppercase",marginBottom:14}}>📈 Diễn biến CHS theo tuần</div>
                  <ResponsiveContainer width="100%" height={200}>
                    <LineChart data={chsData.map(c=>({w:c.l,chs:c.chs,fin:c.fin,ops:c.ops}))}>
                      <CartesianGrid strokeDasharray="3 3" stroke={T.border}/>
                      <XAxis dataKey="w" tick={{fill:T.muted,fontSize:15}}/>
                      <YAxis domain={[60,100]} tick={{fill:T.muted,fontSize:15}}/>
                      <Tooltip contentStyle={{background:T.bg2,border:`1px solid ${T.border}`,borderRadius:8,fontSize:16}}/>
                      <Line type="monotone" dataKey="chs" stroke="#60a5fa" strokeWidth={2} dot={{r:3}} name="CHS Tổng"/>
                      <Line type="monotone" dataKey="fin" stroke="#f59e0b" strokeWidth={1.5} dot={false} name="Tài chính" strokeDasharray="4 2"/>
                      <Line type="monotone" dataKey="ops" stroke="#34d399" strokeWidth={1.5} dot={false} name="Vận hành" strokeDasharray="4 2"/>
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <div style={{background:T.card,border:`1px solid ${T.border}`,borderRadius:12,padding:"18px"}}>
                  <div style={{fontSize:16,color:T.muted,letterSpacing:"2px",textTransform:"uppercase",marginBottom:14}}>🏦 Tín dụng & Thanh khoản</div>
                  {[
                    {l:"Vay NH (BIDV+MSB)",v:`${(currentWK.tckt?.vayNH||0).toFixed(2)}B`,bar:(currentWK.tckt?.vayNH||0)/60,c:T.accent},
                    {l:"Vay TDH",v:`${(currentWK.tckt?.vayTDH||0).toFixed(2)}B`,bar:(currentWK.tckt?.vayTDH||0)/20,c:"#818cf8"},
                    {l:"Tổng vay",v:`${(currentWK.tckt?.tongVay||0).toFixed(2)}B`,bar:(currentWK.tckt?.tongVay||0)/75,c:T.orange},
                    {l:"Tiền mặt/TG",v:`${(currentWK.tckt?.tienMat||0).toFixed(2)}B`,bar:(currentWK.tckt?.tienMat||0)/20,c:T.green},
                    {l:"Phải thu",v:`${(currentWK.tckt?.pt||0).toFixed(2)}B`,bar:(currentWK.tckt?.pt||0)/50,c:T.yellow},
                  ].map(r=>(
                    <div key={r.l} style={{marginBottom:12}}>
                      <div style={{display:"flex",justifyContent:"space-between",marginBottom:4}}>
                        <span style={{fontSize:15,color:T.muted}}>{r.l}</span>
                        <span style={{fontSize:16,fontWeight:700,color:r.c}}>{r.v}</span>
                      </div>
                      <div style={{height:4,borderRadius:2,background:"rgba(255,255,255,0.06)"}}>
                        <div style={{height:"100%",width:`${Math.min(100,r.bar*100)}%`,background:r.c,borderRadius:2}}/>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ════════════════════════════════════
              BC STATUS – Tình trạng nộp báo cáo
          ════════════════════════════════════ */}
          {nav==="bc_status" && (
            <div style={{display:"grid",gap:16}}>
              <SectionTitle sub="Căn cứ dữ liệu báo cáo thật từ Supabase · Deadline: 18:00 thứ 7 hàng tuần">📑 Tình trạng nộp báo cáo</SectionTitle>
              {(() => {
                const ALL_DEPTS = ["PKD","TCKT","HCNS","SX NHÔM","SX THÉP","QLCL","CƠ ĐIỆN","GIAO HÀNG","KHO","CUNG ỨNG","R&D","BO","Int. Dept"];
                const wkReports = reports.filter(r => r.week === wk);
                const submittedDepts = wkReports.map(r => r.dept);
                const missingDepts = ALL_DEPTS.filter(d => !submittedDepts.includes(d));
                const onTime = wkReports.filter(r => r.status === "approved" || r.status === "pending").length;
                return (
                  <div style={{background:T.card,border:`1px solid ${T.border}`,borderRadius:12,padding:"20px"}}>
                    <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:10,marginBottom:16}}>
                      {[
                        {l:"Đã nộp",       v:wkReports.length,           c:T.green},
                        {l:"Chưa nộp",     v:missingDepts.length,        c:missingDepts.length>0?T.red:T.green},
                        {l:"Chờ duyệt",    v:wkReports.filter(r=>r.status==="pending").length, c:T.yellow},
                        {l:"Tổng phòng ban",v:ALL_DEPTS.length,          c:T.muted},
                      ].map(s=>(
                        <div key={s.l} style={{background:"rgba(255,255,255,0.03)",borderRadius:8,padding:"14px",textAlign:"center"}}>
                          <div style={{fontSize:24,fontWeight:900,color:s.c}}>{s.v}</div>
                          <div style={{fontSize:16,color:T.muted,marginTop:4}}>{s.l}</div>
                        </div>
                      ))}
                    </div>
                    <div style={{overflowX:"auto"}}>
                      <table style={{width:"100%",borderCollapse:"collapse",fontSize:16}}>
                        <thead>
                          <tr style={{borderBottom:`1px solid ${T.border}`}}>
                            {["Phòng ban","Người nộp","Tiêu đề","Nộp lúc","Trạng thái","CEO Comment"].map(h=>(
                              <th key={h} style={{padding:"8px 12px",textAlign:"left",color:T.muted,fontWeight:600,fontSize:15,letterSpacing:"1px",textTransform:"uppercase"}}>{h}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {/* Đã nộp */}
                          {wkReports.map((r,i)=>{
                            const sc2 = r.status==="approved"?T.green:r.status==="revision"?T.orange:T.yellow;
                            const sl  = r.status==="approved"?"✅ Đã duyệt":r.status==="revision"?"🔁 Bổ sung":"⏳ Chờ duyệt";
                            return (
                              <tr key={r.id} style={{borderBottom:`1px solid ${T.border}`,background:i%2===0?"transparent":"rgba(255,255,255,0.01)"}}>
                                <td style={{padding:"8px 12px",fontWeight:700}}>{r.dept}</td>
                                <td style={{padding:"8px 12px",color:T.muted}}>{r.user}</td>
                                <td style={{padding:"8px 12px",color:T.muted,maxWidth:200,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{r.title}</td>
                                <td style={{padding:"8px 12px",color:T.text,fontSize:15}}>{r.submittedAt}</td>
                                <td style={{padding:"8px 12px"}}><span style={{color:sc2,fontWeight:700,fontSize:15}}>{sl}</span></td>
                                <td style={{padding:"8px 12px",color:T.muted,fontSize:15}}>{r.ceoComment||"—"}</td>
                              </tr>
                            );
                          })}
                          {/* Chưa nộp */}
                          {missingDepts.map((dept,i)=>(
                            <tr key={dept} style={{borderBottom:`1px solid ${T.border}`,background:"rgba(239,68,68,0.03)"}}>
                              <td style={{padding:"8px 12px",fontWeight:700,color:T.red}}>{dept}</td>
                              <td style={{padding:"8px 12px",color:T.dim}}>—</td>
                              <td style={{padding:"8px 12px",color:T.dim}}>—</td>
                              <td style={{padding:"8px 12px",color:T.dim}}>—</td>
                              <td style={{padding:"8px 12px"}}><span style={{color:T.red,fontWeight:700,fontSize:15}}>❌ Chưa nộp</span></td>
                              <td style={{padding:"8px 12px",color:T.dim}}>—</td>
                            </tr>
                          ))}
                          {wkReports.length===0 && missingDepts.length===0 && (
                            <tr><td colSpan={6} style={{textAlign:"center",padding:32,color:T.muted}}>Tuần {wk} chưa có dữ liệu</td></tr>
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                );
              })()}
            </div>
          )}

          {/* ════════════════════════════════════
              RECOMMENDATIONS – Khuyến nghị
          ════════════════════════════════════ */}
          {nav==="recs" && (() => {
            // ── Auto-generate từ data thật ──────────────────────────
            const thang = wk<=4?1:wk<=9?2:3;
            const KH_M = [11.54,12.94,19.26,22.06,22.56,22.82,24.31,24.81,24.31,23.20,21.70,22.20];
            const mData = thang===1?_M1:thang===2?_M2:_M3;
            const khM = KH_M[thang-1];
            const recs = [];

            // 1. Doanh thu
            if (_realWK.length > 0 && mData.dt != null) {
              const pct = khM > 0 ? Math.round(mData.dt/khM*100) : 0;
              if (pct < 70) recs.push({
                pri:"🔴", status:"urgent",
                title: `Khủng hoảng doanh thu T${thang}/2026`,
                body: `DT tháng ${thang} đạt ${mData.dt?.toFixed(2)}B/${khM}B (${pct}% KH). Cần họp khẩn PKD+CEO phân tích nguyên nhân và phương án ứng phó.`,
                action: `Họp khẩn PKD+CEO trong tuần này`, dept:"PKD + CEO"
              });
              else if (pct < 85) recs.push({
                pri:"🟡", status:"high",
                title: `Doanh thu T${thang} dưới kế hoạch`,
                body: `DT tháng ${thang} đạt ${mData.dt?.toFixed(2)}B/${khM}B (${pct}% KH). Cần rà soát pipeline và đẩy mạnh chốt đơn cuối tháng.`,
                action: `PKD review pipeline tuần này`, dept:"PKD"
              });
              else if (pct >= 100) recs.push({
                pri:"🟢", status:"good",
                title: `Doanh thu T${thang} vượt kế hoạch`,
                body: `DT tháng ${thang} đạt ${mData.dt?.toFixed(2)}B/${khM}B (${pct}% KH). Tiếp tục duy trì đà tăng trưởng.`,
                action: `Duy trì momentum`, dept:"PKD"
              });
            }

            // 2. Sản xuất Nhôm
            if (mData.nhomHT != null) {
              if (mData.nhomHT < 80) recs.push({
                pri:"🟡", status:"high",
                title: `Hiệu suất SX Nhôm thấp T${thang}`,
                body: `HT SX Nhôm TB tháng ${thang}: ${mData.nhomHT}% (KH 85%). Kiểm tra năng lực khuôn, vật tư đầu vào và kế hoạch sản xuất.`,
                action: `SX Nhôm báo cáo nguyên nhân và plan`, dept:"SX NHÔM"
              });
            }

            // 3. Chất lượng FPY
            if (mData.fpy != null) {
              if (mData.fpy < 93) recs.push({
                pri:"🟡", status:"high",
                title: `FPY Chất lượng dưới mức T${thang}`,
                body: `FPY TB tháng ${thang}: ${mData.fpy}% (KH 96%). Cần QLCL phân tích nguyên nhân lỗi chính và triển khai SPC.`,
                action: `QLCL phân tích top 3 lỗi`, dept:"QLCL"
              });
            }

            // 4. Uptime thiết bị
            if (mData.uptime != null) {
              if (mData.uptime < 93) recs.push({
                pri:"🟡", status:"high",
                title: `Uptime thiết bị thấp T${thang}`,
                body: `Uptime TB tháng ${thang}: ${mData.uptime}% (KH 98%). Kiểm tra lịch bảo trì PM và tình trạng thiết bị CNC.`,
                action: `Cơ điện rà soát lịch PM`, dept:"CƠ ĐIỆN"
              });
            }

            // 5. Nợ quá hạn
            if (currentWK.tckt?.qh != null) {
              const qhPct = currentWK.tckt.pt > 0 ? Math.round(currentWK.tckt.qh/currentWK.tckt.pt*100) : 0;
              if (qhPct > 15) recs.push({
                pri:"🔴", status:"urgent",
                title: `Nợ quá hạn vượt ngưỡng T${wk}`,
                body: `Nợ QH: ${currentWK.tckt.qh}B (${qhPct}% tổng PT, ngưỡng cho phép 15%). TCKT cần làm việc trực tiếp với KH lớn.`,
                action: `TCKT contact top 3 KH nợ QH`, dept:"TCKT"
              });
            }

            // 6. Vay ngắn hạn
            if (currentWK.tckt?.tongVay != null && currentWK.tckt.tongVay > 55) {
              recs.push({
                pri:"🟡", status:"medium",
                title: `Dư nợ vay NH cần kiểm soát`,
                body: `Vay NH tuần ${wk}: ${currentWK.tckt.tongVay}B. Theo dõi lịch trả gốc BIDV/MSB theo kế hoạch Q1.`,
                action: `TCKT cập nhật lịch trả nợ`, dept:"TCKT"
              });
            }

            // 7. CHS thấp
            const chsNow = currentCHS?.chs;
            if (chsNow != null && chsNow < 70) recs.push({
              pri:"🔴", status:"urgent",
              title: `CHS Sức khỏe doanh nghiệp ở mức nguy hiểm`,
              body: `CHS tuần ${wk}: ${chsNow}đ (ngưỡng nguy hiểm <70). CEO cần họp khẩn toàn Ban điều hành để xử lý.`,
              action: `CEO triệu tập họp khẩn Ban ĐH`, dept:"CEO"
            });

            return (
              <div style={{display:"grid",gap:16}}>
                <SectionTitle sub="Tự động phân tích từ KPI actual · Tuần → Tháng · Cập nhật real-time">💡 Khuyến nghị</SectionTitle>

                {/* Summary bar */}
                <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:10}}>
                  {[
                    {l:"Khẩn cấp",  v:recs.filter(r=>r.status==="urgent").length, c:T.red},
                    {l:"Cần xử lý", v:recs.filter(r=>r.status==="high").length,   c:T.yellow},
                    {l:"Theo dõi",  v:recs.filter(r=>r.status==="medium").length, c:T.accent},
                    {l:"Tích cực",  v:recs.filter(r=>r.status==="good").length,   c:T.green},
                  ].map(s=>(
                    <div key={s.l} style={{background:T.card,border:`1px solid ${s.c}40`,borderRadius:10,padding:"14px",textAlign:"center"}}>
                      <div style={{fontSize:26,fontWeight:900,color:s.c}}>{s.v}</div>
                      <div style={{fontSize:15,color:T.muted,marginTop:3}}>{s.l}</div>
                    </div>
                  ))}
                </div>

                {/* Data source info */}
                <div style={{background:"rgba(37,99,235,0.06)",border:`1px solid ${T.accent}30`,borderRadius:10,padding:"12px 16px",fontSize:15,color:T.muted}}>
                  📊 Dựa trên: <span style={{color:T.accent}}>{_realWK.length} tuần</span> có data thật · Tháng {thang}/2026 · DT thực: <span style={{color:T.text,fontWeight:700}}>{mData.dt?.toFixed(2)||"–"}B</span> / KH <span style={{color:T.text}}>{khM}B</span>
                </div>

                {recs.length === 0 ? (
                  <div style={{background:T.card,border:`1px solid ${T.green}40`,borderRadius:12,padding:"40px",textAlign:"center"}}>
                    <div style={{fontSize:36,marginBottom:12}}>✅</div>
                    <div style={{fontSize:18,fontWeight:700,color:T.green,marginBottom:8}}>Không có cảnh báo</div>
                    <div style={{fontSize:16,color:T.muted}}>Tất cả chỉ số đang trong ngưỡng an toàn. Tiếp tục duy trì!</div>
                  </div>
                ) : recs.filter((r,i)=>showDismissedRecs||!dismissedRecs.has(i)).map((r,i)=>{
                  const realIdx = recs.indexOf(r);
                  return (
                  <div key={i} style={{background:T.card,border:`1px solid ${r.status==="urgent"?T.red:r.status==="good"?T.green+"60":r.status==="high"?T.yellow+"40":T.border}`,borderRadius:12,padding:"18px 20px",
                    opacity:dismissedRecs.has(realIdx)?0.4:1,transition:"opacity 0.2s"}}>
                    <div style={{display:"flex",gap:12,alignItems:"flex-start"}}>
                      <div style={{fontSize:23,lineHeight:1,flexShrink:0}}>{r.pri}</div>
                      <div style={{flex:1}}>
                        <div style={{fontSize:17,fontWeight:700,marginBottom:6}}>{r.title}</div>
                        <div style={{fontSize:15,color:T.muted,marginBottom:10,lineHeight:1.6}}>{r.body}</div>
                        <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>
                          <span style={{background:"rgba(37,99,235,0.12)",borderRadius:6,padding:"4px 10px",fontSize:14,color:T.accent}}>→ {r.action}</span>
                          <span style={{background:"rgba(255,255,255,0.05)",borderRadius:6,padding:"4px 10px",fontSize:14,color:T.muted}}>👤 {r.dept}</span>
                        </div>
                      </div>
                      {isCEO && !dismissedRecs.has(realIdx) && (
                        <button onClick={()=>setDismissedRecs(prev=>{const n=new Set(prev);n.add(realIdx);return n;})}
                          style={{padding:"5px 12px",borderRadius:8,background:"rgba(52,211,153,0.1)",border:`1px solid ${T.green}40`,
                            color:T.green,fontSize:13,cursor:"pointer",fontWeight:700,flexShrink:0,whiteSpace:"nowrap"}}>
                          ✓ Đã xử lý
                        </button>
                      )}
                    </div>
                  </div>
                );})}
                {dismissedRecs.size>0 && (
                  <button onClick={()=>setShowDismissedRecs(p=>!p)}
                    style={{background:"rgba(255,255,255,0.04)",border:`1px solid ${T.border}`,borderRadius:8,padding:"8px 16px",
                      color:T.muted,fontSize:14,cursor:"pointer",width:"100%"}}>
                    {showDismissedRecs?"▲ Ẩn":"▼ Xem"} {dismissedRecs.size} khuyến nghị đã xử lý
                  </button>
                )}
              </div>
            );
          })()}

          {/* ════════════════════════════════════
              ACTION TRACKER
          ════════════════════════════════════ */}
          {nav==="actions" && (() => {
            // Enrich actions: tính overdue + countdown
            const today = new Date(); today.setHours(0,0,0,0);
            const enriched = (actions||[]).map(a => {
              let isOv = false, countdown = "";
              if(a.deadline && a.deadline !== "--" && a.status !== "done") {
                let dl = null;
                if(a.deadline.includes("/")) {
                  const p = a.deadline.split("/");
                  if(p.length===3) dl = new Date(+p[2], +p[1]-1, +p[0]);
                } else if(a.deadline.includes("-")) {
                  dl = new Date(a.deadline);
                }
                if(dl && !isNaN(dl)) {
                  const diff = Math.ceil((dl - today) / 86400000);
                  isOv = diff < 0;
                  if(diff < 0) countdown = `Trễ ${-diff} ngày`;
                  else if(diff === 0) countdown = "Hôm nay!";
                  else if(diff <= 3) countdown = `Còn ${diff} ngày`;
                }
              }
              return {...a,
                status: a.status==="done" ? "done" : isOv ? "overdue" : (a.status||"open"),
                _countdown: countdown,
                _overdue: isOv
              };
            });
            const cntOpen = enriched.filter(a=>a.status==="open"||a.status==="pending").length;
            const cntOv   = enriched.filter(a=>a.status==="overdue").length;
            const cntDone = enriched.filter(a=>a.status==="done").length;
            const filtered = actionsFilter==="mine"
              ? enriched.filter(a=>user&&(a.owner===user.name||(a.owner_id&&String(a.owner_id)===String(user.id))))
              : actionsFilter==="overdue" ? enriched.filter(a=>a.status==="overdue")
              : enriched;

            const doMarkDone = async (a) => {
              const ns = a.status==="done" ? "open" : "done";
              setActions(prev=>prev.map(x=>x.id===a.id?{...x,status:ns,progress:ns==="done"?100:0}:x));
              const filt = String(a.id).startsWith("MT") ? "id_code=eq."+a.id : "id=eq."+a.id;
              sb.update("action_items",{status:ns,progress:ns==="done"?100:0},filt);
            };

            const loadAI = async () => {
              if(!enriched.length) return;
              setActionsAILoading(true); setActionsAI("");
              const list = enriched.map(a=>`- ${a.title} | ${a.owner||"?"} | ${a.deadline||"?"} | ${a.status}${a._countdown?" | "+a._countdown:""}`).join("\n");
              try {
                const resp = await fetch("/api/ai",{
                  method:"POST",
                  headers:{"Content-Type":"application/json"},
                  body:JSON.stringify({
                    system:"Em là trợ lý quản trị NSCA, xưng em. Phân tích ngắn gọn danh sách việc, highlight rủi ro deadline, ai đang overdue, đề xuất CEO cần chú ý. Trả lời bằng ngôn ngữ người hỏi dùng, ngắn gọn dưới 150 từ.",
                    messages:[{role:"user",content:"Danh sách action items:\n"+list}]
                  })
                });
                const d = await resp.json();
                setActionsAI(d.content?.[0]?.text || "Không có phản hồi");
              } catch(e) { setActionsAI("❌ Lỗi kết nối AI"); }
              setActionsAILoading(false);
            };

            const sendReminder = async (a) => {
              setActionReminding(a.id);
              try {
                const ownerUser = USERS_DB.find(u=>u.name===a.owner);
                const email = ownerUser ? ownerUser.username+"@nsca.vn" : null;
                if(!email) { setToast("⚠️ Không tìm thấy email của "+a.owner); setTimeout(()=>setToast(""),3000); return; }
                await fetch("/api/remind",{method:"POST",headers:{"Content-Type":"application/json"},
                  body:JSON.stringify({type:"action",to:email,name:a.owner,task:a.title,deadline:a.deadline,week:wk})});
                setToast("✅ Đã gửi nhắc cho "+a.owner);
                setTimeout(()=>setToast(""),3000);
              } catch(e){ setToast("❌ Lỗi gửi nhắc"); setTimeout(()=>setToast(""),3000); }
              setActionReminding(null);
            };

            const canDelete = (a) => isCEO;
            const doDelete = async (a) => {
              if(!window.confirm("Xóa action item này?")) return;
              setActions(prev=>prev.filter(x=>x.id!==a.id));
              const filt = String(a.id).startsWith("MT") ? "id_code=eq."+a.id : "id=eq."+a.id;
              await fetch(`${SUPABASE_URL}/rest/v1/action_items?${filt}`,{method:"DELETE",headers:sb.headers});
            };

            return (
              <div style={{display:"grid",gap:14}}>
                <SectionTitle sub="Theo dõi việc được giao từ họp giao ban · AI hỗ trợ phân tích">✅ Action Tracker</SectionTitle>

                {/* Stats */}
                <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:10}}>
                  {[{l:"Đang thực hiện",v:cntOpen,c:T.accent},{l:"Quá hạn",v:cntOv,c:T.red},{l:"Hoàn thành",v:cntDone,c:T.green},{l:"Tổng",v:enriched.length,c:T.muted}].map(s=>(
                    <div key={s.l} style={{background:T.card,border:`1px solid ${s.c===T.red&&s.v>0?T.red+"40":T.border}`,borderRadius:10,padding:"14px",textAlign:"center"}}>
                      <div style={{fontSize:28,fontWeight:900,color:s.c}}>{s.v}</div>
                      <div style={{fontSize:13,color:T.muted,marginTop:3}}>{s.l}</div>
                    </div>
                  ))}
                </div>

                {/* AI Panel */}
                <div style={{background:"rgba(37,99,235,0.06)",border:`1px solid ${T.accent}30`,borderRadius:12,padding:"16px 20px"}}>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:actionsAI?10:0}}>
                    <div style={{fontSize:13,fontWeight:700,color:T.accent}}>✨ AI Phân tích rủi ro deadline</div>
                    <button onClick={loadAI} disabled={actionsAILoading||!enriched.length}
                      style={{padding:"5px 14px",borderRadius:6,background:"rgba(37,99,235,0.15)",border:`1px solid ${T.accent}40`,color:T.accent,fontSize:13,fontWeight:700,cursor:"pointer",opacity:actionsAILoading||!enriched.length?0.5:1}}>
                      {actionsAILoading?"⏳ Đang phân tích...":"🔍 Phân tích ngay"}
                    </button>
                  </div>
                  {actionsAI
                    ? <div style={{fontSize:14,lineHeight:1.8,color:T.text,whiteSpace:"pre-wrap"}}>{actionsAI}</div>
                    : !actionsAILoading && <div style={{fontSize:13,color:T.muted}}>Nhấn "Phân tích ngay" để AI đánh giá rủi ro và deadline.</div>
                  }
                </div>

                {/* Filter */}
                <div style={{display:"flex",gap:8,flexWrap:"wrap",alignItems:"center"}}>
                  {[["all","Tất cả "+enriched.length],["mine","Của tôi"],["overdue","Quá hạn"+(cntOv>0?" ("+cntOv+")":"")]].map(([v,l])=>(
                    <button key={v} onClick={()=>setActionsFilter(v)}
                      style={{padding:"6px 16px",borderRadius:20,fontSize:14,fontWeight:600,cursor:"pointer",
                        background:actionsFilter===v?T.accent:"rgba(255,255,255,0.04)",
                        color:actionsFilter===v?"white":T.muted,
                        border:`1px solid ${actionsFilter===v?T.accent:T.border}`}}>
                      {l}
                    </button>
                  ))}
                  {cntDone>0 && (
                    <button onClick={()=>setShowDoneActions(p=>!p)}
                      style={{padding:"6px 14px",borderRadius:20,fontSize:14,fontWeight:600,cursor:"pointer",marginLeft:"auto",
                        background:showDoneActions?"rgba(52,211,153,0.12)":"rgba(255,255,255,0.04)",
                        color:showDoneActions?T.green:T.muted,
                        border:`1px solid ${showDoneActions?T.green+"40":T.border}`}}>
                      {showDoneActions?"▲ Ẩn done":"▼ Xem "+cntDone+" done"}
                    </button>
                  )}
                </div>

                {/* Action cards */}
                {filtered.length===0 ? (
                  <div style={{background:T.card,border:`1px solid ${T.border}`,borderRadius:12,padding:"40px",textAlign:"center"}}>
                    <div style={{fontSize:32,marginBottom:12}}>📋</div>
                    <div style={{fontWeight:700,marginBottom:8}}>Chưa có action items</div>
                    <div style={{fontSize:15,color:T.muted}}>Action items sẽ được tạo từ buổi Họp giao ban</div>
                  </div>
                ) : filtered.filter(a=>showDoneActions||a.status!=="done").map(a => {
                  const isDone = a.status==="done";
                  const isOv = a._overdue;
                  const sc = isDone?T.green:isOv?T.red:a.status==="pending"?T.yellow:T.accent;
                  const sl = isDone?"✅ Xong":isOv?"⏰ Quá hạn":a.status==="pending"?"⏳ Chờ":"🔄 Đang làm";
                  const canDone = isCEO || (user&&a.owner===user.name);
                  return (
                    <div key={a.id} style={{background:T.card,border:`1px solid ${isOv&&!isDone?T.red+"50":T.border}`,borderRadius:12,padding:"14px 18px",display:"flex",gap:14,alignItems:"flex-start"}}>
                      <div style={{flex:1}}>
                        {/* Title + badges */}
                        <div style={{display:"flex",gap:8,alignItems:"center",marginBottom:8,flexWrap:"wrap"}}>
                          <span style={{fontSize:16,fontWeight:700,textDecoration:isDone?"line-through":"none",color:isDone?T.muted:T.text}}>{a.title}</span>
                          <span style={{padding:"2px 8px",borderRadius:10,fontSize:12,fontWeight:700,color:sc,background:sc+"18"}}>{sl}</span>
                          {a._countdown && <span style={{fontSize:12,fontWeight:600,color:isOv?T.red:T.yellow}}>⏱ {a._countdown}</span>}
                        </div>
                        {/* People badges */}
                        <div style={{display:"flex",gap:7,flexWrap:"wrap",marginBottom:7}}>
                          {a.owner && <span style={{fontSize:13,padding:"2px 10px",borderRadius:6,background:"rgba(96,165,250,0.12)",color:T.cyan,fontWeight:600}}>⭐ {a.owner}</span>}
                          {a.executor && <span style={{fontSize:13,padding:"2px 10px",borderRadius:6,background:"rgba(255,255,255,0.06)",color:T.muted}}>⚙️ {a.executor}</span>}
                          {a.supporter && <span style={{fontSize:13,padding:"2px 10px",borderRadius:6,background:"rgba(255,255,255,0.04)",color:T.dim}}>🤝 {a.supporter}</span>}
                        </div>
                        {/* Meta */}
                        <div style={{display:"flex",gap:12,flexWrap:"wrap",alignItems:"center"}}>
                          <span style={{fontSize:13,color:isOv?T.red:isDone?T.muted:T.yellow}}>📅 {a.deadline||"--"}</span>
                          {a.from && <span style={{fontSize:12,color:T.dim,background:"rgba(255,255,255,0.04)",padding:"1px 8px",borderRadius:4}}>📎 {a.from}</span>}
                        </div>
                      </div>
                      {/* Buttons */}
                      <div style={{display:"flex",flexDirection:"column",gap:6,flexShrink:0}}>
                        {canDone && (
                          <button onClick={()=>doMarkDone(a)}
                            style={{padding:"7px 16px",borderRadius:8,border:"none",cursor:"pointer",fontSize:14,fontWeight:700,whiteSpace:"nowrap",
                              background:isDone?"rgba(255,255,255,0.06)":"rgba(52,211,153,0.15)",
                              color:isDone?T.muted:T.green}}>
                            {isDone?"↩ Mở lại":"✓ Done"}
                          </button>
                        )}
                        {isCEO && !isDone && (
                          <button onClick={()=>sendReminder(a)} disabled={actionReminding===a.id}
                            style={{padding:"7px 16px",borderRadius:8,border:`1px solid ${T.yellow}40`,cursor:"pointer",fontSize:13,fontWeight:600,whiteSpace:"nowrap",
                              background:"rgba(245,158,11,0.1)",color:T.yellow,
                              opacity:actionReminding===a.id?0.5:1}}>
                            {actionReminding===a.id?"⏳...":"📧 Nhắc"}
                          </button>
                        )}
                        {canDelete(a) && (
                          <button onClick={()=>doDelete(a)}
                            style={{padding:"7px 16px",borderRadius:8,border:`1px solid ${T.red}30`,cursor:"pointer",fontSize:13,fontWeight:600,whiteSpace:"nowrap",
                              background:"rgba(239,68,68,0.08)",color:T.red}}>
                            🗑
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })()}

          {/* ════════════════════════════════════
              HỌP GIAO BAN
          ════════════════════════════════════ */}
          {nav==="meeting" && (() => {
            const addIssue = () => {
              if(!meetNewIssue.desc.trim()) return;
              setMeetIssuesList(p=>[...p,{...meetNewIssue,id:Date.now()}]);
              setMeetNewIssue({desc:"",dept:meetNewIssue.dept,priority:"high"});
            };
            const addAction = () => {
              if(!meetNewAction.title.trim()) return;
              setMeetActionsList(p=>[...p,{...meetNewAction,id:Date.now()}]);
              setMeetNewAction({title:"",owner:"",owner_id:null,executor:"",supporter:"",deadline:""});
            };
            const saveMeeting = async () => {
              if(!meetDate.trim()) { setMeetMsg("⚠️ Vui lòng nhập ngày họp"); return; }
              if(meetIssuesList.length===0 && meetActionsList.length===0 && !meetSummary.trim()) {
                setMeetMsg("⚠️ Điền ít nhất tóm tắt nội dung hoặc thêm vấn đề/việc được giao");
                return;
              }
              setMeetSaving(true); setMeetMsg("⏳ Đang lưu biên bản...");
              const payload = {
                week_number:wk, year:2026,
                title:"Giao ban T"+wk+"/2026 - "+meetDate,
                content:JSON.stringify({summary:meetSummary, meetingDate:meetDate}),
                decisions:"", attendees:[], created_by:user.name,
                action_items: meetActionsList.map(a=>({...a,done:false,status:"Open"})),
              };
              // Optimistic update
              const localMin = {
                id:"local-"+Date.now(), week_number:wk, year:2026,
                title:"Giao ban T"+wk+"/2026 - "+meetDate,
                content:JSON.stringify({summary:meetSummary, meetingDate:meetDate}),
                action_items: meetActionsList.map(a=>({...a,done:false,status:"Open"})),
                created_by:user.name,
              };
              setMinutes(prev=>[localMin,...prev.filter(m=>!(m.week_number===wk&&m.year===2026))]);
              setMinutesLoaded(true);
              sb.upsert("meeting_minutes",payload,"week_number,year").then(res=>{
                if(res&&res[0]) setMinutes(prev=>prev.map(m=>m.id===localMin.id?res[0]:m));
              });
              // ── Issues → issues state + Supabase
              for(const iss of meetIssuesList) {
                const issObj = {
                  id:"meet-"+Date.now()+"-"+Math.random(),
                  fromId:user.id, from:user.name, dept:iss.dept||user.dept,
                  title:"[Họp T"+wk+"] "+iss.desc.slice(0,80),
                  desc:iss.desc, status:"pending", priority:iss.priority,
                  createdAt:new Date().toLocaleDateString("vi-VN"), ceoComment:"",
                };
                setIssues(prev=>[issObj,...prev]);
                sb.insert("issues",{
                  week_num:wk, year:2026, dept:iss.dept||user.dept,
                  title:"[Họp T"+wk+"] "+iss.desc.slice(0,80),
                  description:iss.desc, type:"process",
                  priority:iss.priority, status:"open",
                  created_by:null, created_by_name:user.name,
                }).then(ir=>{
                  if(ir&&ir[0]) setIssues(prev=>prev.map(x=>x.id===issObj.id?{...x,id:ir[0].id}:x));
                });
              }
              // ── Action items → actions state + Supabase
              for(const ac of meetActionsList) {
                const idCode = "MT"+wk+"-"+ac.id;
                let dlSupa = null;
                if(ac.deadline && ac.deadline.includes("/")) {
                  const p = ac.deadline.split("/");
                  if(p.length===3) dlSupa = p[2]+"-"+p[1].padStart(2,"0")+"-"+p[0].padStart(2,"0");
                }
                const m = {id:idCode, title:ac.title, owner:ac.owner||"", owner_id:ac.owner_id||null,
                  executor:ac.executor||"", supporter:ac.supporter||"",
                  deadline:ac.deadline||"--", meeting_date:meetDate,
                  status:"open", from:"Bien ban T"+wk, progress:0};
                setActions(prev=>prev.find(x=>x.id===idCode)?prev.map(x=>x.id===idCode?m:x):[m,...prev]);
                sb.upsert("action_items",{
                  year:2026, week_num:wk, title:ac.title, owner:ac.owner||"",
                  owner_id:ac.owner_id||null, executor:ac.executor||"", supporter:ac.supporter||"",
                  deadline:dlSupa, meeting_date:meetDate, status:"open",
                  source:"Bien ban T"+wk, progress:0, id_code:idCode,
                },"id_code");
              }
              setMeetSaving(false);
              setMeetMode("done");
              setMeetMsg("✅ Đã lưu biên bản tuần "+wk);
            };
            const inpSt = {width:"100%",background:"rgba(255,255,255,0.04)",border:`1px solid ${T.border}`,borderRadius:6,padding:"8px 10px",color:T.text,fontSize:15,outline:"none",boxSizing:"border-box"};
            const selSt = {...inpSt,cursor:"pointer"};
            const DEPTS_LIST = ["PKD","TCKT","SX THÉP","SX NHÔM","QLCL","CƠ ĐIỆN","GIAO HÀNG","KHO","CUNG ỨNG","HCNS","R&D","BO","Int. Dept","BAN LÃNH ĐẠO"];

            if(meetMode==="done") return (
              <div style={{display:"grid",gap:16}}>
                <SectionTitle sub={"Tuần "+wk+"/2026"}>🤝 Họp giao ban</SectionTitle>
                <div style={{background:"rgba(52,211,153,0.07)",border:`1px solid ${T.green}40`,borderRadius:12,padding:"28px",textAlign:"center"}}>
                  <div style={{fontSize:36,marginBottom:12}}>✅</div>
                  <div style={{fontSize:18,fontWeight:700,color:T.green,marginBottom:8}}>Đã lưu biên bản họp tuần {wk}</div>
                  <div style={{fontSize:15,color:T.muted,marginBottom:20,lineHeight:1.8}}>
                    {meetIssuesList.length>0 && <div>⚠️ {meetIssuesList.length} vấn đề → panel Issues &amp; Risks</div>}
                    {meetActionsList.length>0 && <div>✅ {meetActionsList.length} việc được giao → Action Tracker</div>}
                  </div>
                  <div style={{display:"flex",gap:10,justifyContent:"center",flexWrap:"wrap"}}>
                    <button onClick={()=>{setMeetMode("form");setMeetDate("");setMeetSummary("");setMeetIssuesList([]);setMeetActionsList([]);setMeetMsg("");}}
                      style={{padding:"9px 22px",borderRadius:8,background:"rgba(255,255,255,0.06)",border:`1px solid ${T.border}`,color:T.text,fontSize:15,cursor:"pointer",fontWeight:600}}>
                      + Tạo biên bản mới
                    </button>
                    <button onClick={()=>setNav("minutes")}
                      style={{padding:"9px 22px",borderRadius:8,background:"linear-gradient(135deg,#2563eb,#1d4ed8)",border:"none",color:"white",fontSize:15,cursor:"pointer",fontWeight:700}}>
                      📋 Xem danh sách biên bản
                    </button>
                    <button onClick={()=>setNav("actions")}
                      style={{padding:"9px 22px",borderRadius:8,background:"rgba(52,211,153,0.12)",border:`1px solid ${T.green}40`,color:T.green,fontSize:15,cursor:"pointer",fontWeight:700}}>
                      ✅ Xem Action Tracker
                    </button>
                  </div>
                </div>
              </div>
            );

            return (
              <div style={{display:"grid",gap:20}}>
                <SectionTitle sub={"Tuần "+wk+"/2026 · Lưu vào Biên bản + Issues + Tracker"}>🤝 Họp giao ban</SectionTitle>

                {/* Ngày họp + tóm tắt */}
                <div style={{background:T.card,border:`1px solid ${T.border}`,borderRadius:12,padding:"20px 22px"}}>
                  <div style={{fontSize:13,color:T.muted,letterSpacing:"2px",textTransform:"uppercase",marginBottom:14}}>📅 Thông tin cuộc họp</div>
                  <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginBottom:12}}>
                    <div>
                      <div style={{fontSize:13,color:T.dim,marginBottom:4}}>Ngày họp <span style={{color:T.red}}>*</span></div>
                      <input value={meetDate} onChange={e=>setMeetDate(e.target.value)}
                        placeholder="VD: 10/03/2026" style={inpSt}/>
                    </div>
                    <div>
                      <div style={{fontSize:13,color:T.dim,marginBottom:4}}>Tuần hiện tại</div>
                      <div style={{...inpSt,color:T.muted,background:"rgba(255,255,255,0.02)"}}>Tuần {wk}/2026</div>
                    </div>
                  </div>
                  <div>
                    <div style={{fontSize:13,color:T.dim,marginBottom:4}}>Tóm tắt nội dung họp</div>
                    <textarea value={meetSummary} onChange={e=>setMeetSummary(e.target.value)}
                      rows={3} placeholder="Tóm tắt các nội dung chính trong buổi họp giao ban..."
                      style={{...inpSt,resize:"vertical"}}/>
                  </div>
                </div>

                {/* Issues từ hệ thống — gợi ý đưa vào giao ban */}
                {(()=>{
                  const openIssues = issues.filter(i=>i.status==="open"||i.status==="in_progress");
                  const alreadyIn = meetIssuesList.map(m=>m.issueId);
                  const suggestions = openIssues.filter(i=>!alreadyIn.includes(i.id));
                  if(!suggestions.length) return null;
                  return (
                    <div style={{background:"rgba(245,158,11,0.06)",border:"1px solid rgba(245,158,11,0.2)",borderRadius:12,padding:"16px 20px"}}>
                      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12}}>
                        <div style={{fontSize:13,fontWeight:700,color:T.yellow}}>
                          💡 {suggestions.length} Issues đang mở — Đưa vào giao ban?
                        </div>
                        <button onClick={()=>{
                          const toAdd = suggestions.slice(0,5).map(i=>({
                            id:Date.now()+Math.random(),issueId:i.id,
                            desc:"["+i.dept+"] "+i.title,dept:i.dept,
                            priority:i.priority==="high"?"high":"medium"
                          }));
                          setMeetIssuesList(p=>[...p,...toAdd]);
                        }} style={{padding:"5px 12px",borderRadius:7,fontSize:13,fontWeight:700,
                          background:"rgba(245,158,11,0.15)",border:"1px solid rgba(245,158,11,0.3)",
                          color:T.yellow,cursor:"pointer"}}>
                          + Thêm tất cả
                        </button>
                      </div>
                      {suggestions.slice(0,5).map((iss,i)=>(
                        <div key={iss.id} style={{display:"flex",alignItems:"center",gap:10,
                          padding:"8px 0",borderBottom:i<Math.min(4,suggestions.length-1)?`1px solid rgba(255,255,255,0.05)`:"none"}}>
                          <div style={{width:8,height:8,borderRadius:"50%",flexShrink:0,
                            background:iss.priority==="high"?T.red:iss.priority==="medium"?T.yellow:T.green}}/>
                          <div style={{flex:1,minWidth:0}}>
                            <div style={{fontSize:13,color:"#e2e8f0",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{iss.title}</div>
                            <div style={{fontSize:11,color:T.muted}}>{iss.dept} · {iss.status==="open"?"Đang mở":"Đang xử lý"}</div>
                          </div>
                          <button onClick={()=>setMeetIssuesList(p=>[...p,{
                            id:Date.now(),issueId:iss.id,
                            desc:"["+iss.dept+"] "+iss.title,
                            dept:iss.dept,priority:iss.priority==="high"?"high":"medium"
                          }])} style={{padding:"4px 10px",borderRadius:6,fontSize:12,fontWeight:700,
                            background:"rgba(245,158,11,0.1)",border:"1px solid rgba(245,158,11,0.25)",
                            color:T.yellow,cursor:"pointer",flexShrink:0,whiteSpace:"nowrap"}}>
                            + Thêm
                          </button>
                        </div>
                      ))}
                      {suggestions.length>5&&(
                        <div style={{fontSize:12,color:T.muted,marginTop:8,textAlign:"center"}}>
                          + {suggestions.length-5} issues khác trong hệ thống
                        </div>
                      )}
                    </div>
                  );
                })()}

                {/* Vấn đề phát sinh */}
                <div style={{background:T.card,border:`1px solid ${T.border}`,borderRadius:12,padding:"20px 22px"}}>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:14}}>
                    <div style={{fontSize:13,color:T.muted,letterSpacing:"2px",textTransform:"uppercase"}}>⚠️ Vấn đề phát sinh</div>
                    <span style={{fontSize:13,background:"rgba(245,158,11,0.12)",color:T.yellow,borderRadius:10,padding:"2px 10px"}}>{meetIssuesList.length} vấn đề</span>
                  </div>
                  {meetIssuesList.map((iss,i)=>(
                    <div key={iss.id} style={{display:"flex",gap:10,alignItems:"center",padding:"8px 10px",background:"rgba(245,158,11,0.06)",borderRadius:8,marginBottom:6}}>
                      <span style={{fontSize:13,color:iss.priority==="high"?T.red:T.yellow,fontWeight:700}}>{iss.priority==="high"?"🔴":"🟡"}</span>
                      <span style={{flex:1,fontSize:14,color:T.text}}>{iss.desc}</span>
                      <span style={{fontSize:12,color:T.muted,background:"rgba(255,255,255,0.05)",borderRadius:4,padding:"2px 6px"}}>{iss.dept}</span>
                      <button onClick={()=>setMeetIssuesList(p=>p.filter((_,j)=>j!==i))}
                        style={{background:"transparent",border:"none",color:T.red,cursor:"pointer",fontSize:16,padding:"0 4px"}}>✕</button>
                    </div>
                  ))}
                  <div style={{display:"grid",gridTemplateColumns:"1fr auto auto auto",gap:8,marginTop:8,alignItems:"end"}}>
                    <div>
                      <div style={{fontSize:12,color:T.dim,marginBottom:3}}>Mô tả vấn đề</div>
                      <input value={meetNewIssue.desc} onChange={e=>setMeetNewIssue(p=>({...p,desc:e.target.value}))}
                        onKeyDown={e=>{if(e.key==="Enter"){e.preventDefault();addIssue();}}}
                        placeholder="Vấn đề phát sinh trong tuần..." style={inpSt}/>
                    </div>
                    <div>
                      <div style={{fontSize:12,color:T.dim,marginBottom:3}}>Phòng ban</div>
                      <select value={meetNewIssue.dept} onChange={e=>setMeetNewIssue(p=>({...p,dept:e.target.value}))} style={selSt}>
                        {DEPTS_LIST.map(d=><option key={d} value={d}>{d}</option>)}
                      </select>
                    </div>
                    <div>
                      <div style={{fontSize:12,color:T.dim,marginBottom:3}}>Mức độ</div>
                      <select value={meetNewIssue.priority} onChange={e=>setMeetNewIssue(p=>({...p,priority:e.target.value}))} style={selSt}>
                        <option value="high">🔴 Cao</option>
                        <option value="medium">🟡 Trung bình</option>
                      </select>
                    </div>
                    <button onClick={addIssue}
                      style={{padding:"8px 16px",borderRadius:6,background:"rgba(245,158,11,0.15)",border:`1px solid ${T.yellow}40`,color:T.yellow,fontSize:14,fontWeight:700,cursor:"pointer",whiteSpace:"nowrap",height:36}}>
                      + Thêm
                    </button>
                  </div>
                </div>

                {/* Việc được giao */}
                <div style={{background:T.card,border:`1px solid ${T.border}`,borderRadius:12,padding:"20px 22px"}}>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:14}}>
                    <div style={{fontSize:13,color:T.muted,letterSpacing:"2px",textTransform:"uppercase"}}>✅ Việc được giao</div>
                    <span style={{fontSize:13,background:"rgba(52,211,153,0.12)",color:T.green,borderRadius:10,padding:"2px 10px"}}>{meetActionsList.length} việc</span>
                  </div>
                  {meetActionsList.map((ac,i)=>(
                    <div key={ac.id} style={{padding:"10px 12px",background:"rgba(52,211,153,0.05)",border:`1px solid ${T.green}20`,borderRadius:8,marginBottom:6}}>
                      <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}>
                        <div style={{flex:1}}>
                          <div style={{fontSize:14,fontWeight:700,marginBottom:4}}>{ac.title}</div>
                          <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>
                            {ac.owner && <span style={{fontSize:12,color:T.cyan}}>⭐ {ac.owner}</span>}
                            {ac.executor && <span style={{fontSize:12,color:T.muted}}>⚙️ {ac.executor}</span>}
                            {ac.supporter && <span style={{fontSize:12,color:T.dim}}>🤝 {ac.supporter}</span>}
                            {ac.deadline && <span style={{fontSize:12,color:T.yellow}}>📅 {ac.deadline}</span>}
                          </div>
                        </div>
                        <button onClick={()=>setMeetActionsList(p=>p.filter((_,j)=>j!==i))}
                          style={{background:"transparent",border:"none",color:T.red,cursor:"pointer",fontSize:16,padding:"0 4px",flexShrink:0}}>✕</button>
                      </div>
                    </div>
                  ))}
                  <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr auto",gap:8,marginTop:8,alignItems:"end"}}>
                    <div style={{gridColumn:"1/-1"}}>
                      <div style={{fontSize:12,color:T.dim,marginBottom:3}}>Tên việc <span style={{color:T.red}}>*</span></div>
                      <input value={meetNewAction.title} onChange={e=>setMeetNewAction(p=>({...p,title:e.target.value}))}
                        onKeyDown={e=>{if(e.key==="Enter"){e.preventDefault();addAction();}}}
                        placeholder="Mô tả công việc được giao..." style={inpSt}/>
                    </div>
                    <div>
                      <div style={{fontSize:12,color:T.dim,marginBottom:3}}>⭐ Phụ trách</div>
                      <select value={meetNewAction.owner} onChange={e=>{
                        const u = USERS_DB.find(u2=>u2.name===e.target.value);
                        setMeetNewAction(p=>({...p,owner:e.target.value,owner_id:u?.id||null}));
                      }} style={selSt}>
                        <option value="">-- Chọn --</option>
                        {USERS_DB.filter(u=>u.active!==false).map(u=><option key={u.id} value={u.name}>{u.name}</option>)}
                      </select>
                    </div>
                    <div>
                      <div style={{fontSize:12,color:T.dim,marginBottom:3}}>⚙️ Thực hiện</div>
                      <select value={meetNewAction.executor} onChange={e=>setMeetNewAction(p=>({...p,executor:e.target.value}))} style={selSt}>
                        <option value="">-- Chọn --</option>
                        {USERS_DB.filter(u=>u.active!==false).map(u=><option key={u.id} value={u.name}>{u.name}</option>)}
                      </select>
                    </div>
                    <div>
                      <div style={{fontSize:12,color:T.dim,marginBottom:3}}>🤝 Hỗ trợ</div>
                      <input value={meetNewAction.supporter} onChange={e=>setMeetNewAction(p=>({...p,supporter:e.target.value}))}
                        placeholder="Tên người hỗ trợ" style={inpSt}/>
                    </div>
                    <div>
                      <div style={{fontSize:12,color:T.dim,marginBottom:3}}>📅 Deadline</div>
                      <input value={meetNewAction.deadline} onChange={e=>setMeetNewAction(p=>({...p,deadline:e.target.value}))}
                        placeholder="dd/mm/yyyy" style={inpSt}/>
                    </div>
                    <button onClick={addAction}
                      style={{padding:"8px 16px",borderRadius:6,background:"rgba(52,211,153,0.15)",border:`1px solid ${T.green}40`,color:T.green,fontSize:14,fontWeight:700,cursor:"pointer",whiteSpace:"nowrap",height:36,alignSelf:"end"}}>
                      + Thêm
                    </button>
                  </div>
                </div>

                {/* Lưu biên bản */}
                {meetMsg && <div style={{padding:"10px 14px",borderRadius:8,background:meetMsg.startsWith("✅")?"rgba(52,211,153,0.1)":"rgba(245,158,11,0.1)",
                  border:`1px solid ${meetMsg.startsWith("✅")?T.green:T.yellow}30`,fontSize:15,color:meetMsg.startsWith("✅")?T.green:T.yellow}}>{meetMsg}</div>}
                <div style={{display:"flex",gap:12,justifyContent:"flex-end"}}>
                  <button onClick={()=>setNav("minutes")}
                    style={{padding:"10px 22px",borderRadius:8,background:"rgba(255,255,255,0.05)",border:`1px solid ${T.border}`,color:T.muted,fontSize:15,cursor:"pointer"}}>
                    📋 Xem biên bản cũ
                  </button>
                  <button onClick={saveMeeting} disabled={meetSaving}
                    style={{padding:"10px 28px",borderRadius:8,border:"none",fontSize:15,fontWeight:700,cursor:meetSaving?"wait":"pointer",
                      background:meetSaving?"rgba(255,255,255,0.05)":"linear-gradient(135deg,#2563eb,#1d4ed8)",
                      color:meetSaving?T.muted:"white"}}>
                    {meetSaving?"⏳ Đang lưu...":"💾 Lưu biên bản"}
                  </button>
                </div>
              </div>
            );
          })()}

          {/* ════════════════════════════════════
              QUYẾT ĐỊNH CEO
          ════════════════════════════════════ */}
          {nav==="ceo_dec" && (() => {
            const doAddDec = async () => {
              if(!decForm.title.trim()||!decForm.dec.trim()) return;
              const now = new Date();
              const row = {
                week_num: wk, year: 2026,
                type: decForm.type, title: decForm.title,
                context: decForm.context, dec: decForm.dec,
                created_by: user.name,
                created_at: now.toISOString(),
                date: now.toLocaleDateString("vi-VN"),
              };
              const res = await sb.insert("ceo_decisions", row);
              const saved = res?.[0] || {...row, id: Date.now()};
              setCeoDecisions(prev=>[saved,...prev]);
              setDecForm({show:false,title:"",context:"",dec:"",type:"Quyết định"});
              setToast("✅ Đã lưu quyết định"); setTimeout(()=>setToast(""),2500);
            };
            const doDelDec = async (d) => {
              if(!window.confirm("Xóa quyết định này?")) return;
              setCeoDecisions(prev=>prev.filter(x=>x.id!==d.id));
              if(d.id) await fetch(`${SUPABASE_URL}/rest/v1/ceo_decisions?id=eq.${d.id}`,{method:"DELETE",headers:sb.headers});
              setToast("🗑 Đã xóa"); setTimeout(()=>setToast(""),2000);
            };
            return (
              <div style={{display:"grid",gap:16}}>
                <SectionTitle sub="Ghi nhận và tra cứu các quyết định của CEO theo thời gian">
                  ⚖️ Quyết định CEO
                  {isCEO && <button onClick={()=>setDecForm(p=>({...p,show:true}))}
                    style={{background:"linear-gradient(135deg,#2563eb,#1d4ed8)",border:"none",borderRadius:8,
                      padding:"9px 18px",color:"white",fontSize:16,fontWeight:700,cursor:"pointer"}}>＋ Thêm quyết định</button>}
                </SectionTitle>

                {/* Add form */}
                {decForm.show && (
                  <div style={{background:"rgba(37,99,235,0.06)",border:`1px solid ${T.accent}40`,borderRadius:14,padding:"20px 24px",display:"grid",gap:12}}>
                    <div style={{fontSize:15,fontWeight:700,color:T.accent,marginBottom:4}}>✍️ Thêm quyết định mới – Tuần {wk}</div>
                    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
                      <div>
                        <div style={{fontSize:13,color:T.muted,marginBottom:4}}>Loại</div>
                        <select value={decForm.type} onChange={e=>setDecForm(p=>({...p,type:e.target.value}))}
                          style={{width:"100%",background:T.bg2,border:`1px solid ${T.border}`,borderRadius:8,padding:"9px 12px",color:T.text,fontSize:15}}>
                          {["Quyết định","Chỉ đạo","Phê duyệt","Lưu ý","Khẩn cấp"].map(t=><option key={t}>{t}</option>)}
                        </select>
                      </div>
                      <div>
                        <div style={{fontSize:13,color:T.muted,marginBottom:4}}>Tiêu đề *</div>
                        <input value={decForm.title} onChange={e=>setDecForm(p=>({...p,title:e.target.value}))} placeholder="VD: Tăng KH doanh thu Q2..."
                          style={{width:"100%",background:T.bg2,border:`1px solid ${T.border}`,borderRadius:8,padding:"9px 12px",color:T.text,fontSize:15,boxSizing:"border-box"}}/>
                      </div>
                    </div>
                    <div>
                      <div style={{fontSize:13,color:T.muted,marginBottom:4}}>Bối cảnh</div>
                      <input value={decForm.context} onChange={e=>setDecForm(p=>({...p,context:e.target.value}))} placeholder="Tình huống dẫn đến quyết định..."
                        style={{width:"100%",background:T.bg2,border:`1px solid ${T.border}`,borderRadius:8,padding:"9px 12px",color:T.text,fontSize:15,boxSizing:"border-box"}}/>
                    </div>
                    <div>
                      <div style={{fontSize:13,color:T.muted,marginBottom:4}}>Nội dung quyết định *</div>
                      <textarea value={decForm.dec} onChange={e=>setDecForm(p=>({...p,dec:e.target.value}))} rows={3} placeholder="Nội dung chi tiết..."
                        style={{width:"100%",background:T.bg2,border:`1px solid ${T.border}`,borderRadius:8,padding:"9px 12px",color:T.text,fontSize:15,resize:"vertical",boxSizing:"border-box"}}/>
                    </div>
                    <div style={{display:"flex",gap:10,justifyContent:"flex-end"}}>
                      <button onClick={()=>setDecForm(p=>({...p,show:false}))}
                        style={{padding:"9px 20px",borderRadius:8,background:"rgba(255,255,255,0.05)",border:`1px solid ${T.border}`,color:T.muted,fontSize:15,cursor:"pointer"}}>Hủy</button>
                      <button onClick={doAddDec} disabled={!decForm.title.trim()||!decForm.dec.trim()}
                        style={{padding:"9px 22px",borderRadius:8,border:"none",fontSize:15,fontWeight:700,cursor:"pointer",
                          background:(!decForm.title.trim()||!decForm.dec.trim())?"rgba(255,255,255,0.05)":"linear-gradient(135deg,#2563eb,#1d4ed8)",
                          color:(!decForm.title.trim()||!decForm.dec.trim())?T.muted:"white"}}>💾 Lưu quyết định</button>
                    </div>
                  </div>
                )}

                {(ceoDecisions||[]).length===0 && !decForm.show ?(
                  <div style={{background:T.card,border:`1px solid ${T.border}`,borderRadius:12,padding:"40px",textAlign:"center"}}>
                    <div style={{fontSize:36,marginBottom:12}}>⚖️</div>
                    <div style={{fontSize:18,fontWeight:700,color:T.text,marginBottom:8}}>Chưa có Quyết định CEO</div>
                    <div style={{fontSize:16,color:T.muted}}>Nhấn "＋ Thêm quyết định" để ghi nhận quyết định mới.</div>
                  </div>
                ):(ceoDecisions||[]).map((d,i)=>(
                  <div key={d.id||i} style={{background:T.card,border:`1px solid ${T.border}`,borderRadius:12,padding:"20px"}}>
                    <div style={{display:"flex",gap:12,marginBottom:12,alignItems:"center"}}>
                      <span style={{fontSize:16,background:"rgba(37,99,235,0.12)",borderRadius:6,padding:"3px 8px",color:T.accent,fontWeight:700}}>{d.type}</span>
                      <span style={{fontSize:16,color:T.muted}}>{d.date} · Tuần {d.week_num||d.w}</span>
                      <span style={{marginLeft:"auto",fontSize:16,color:T.green,fontWeight:700}}>● Còn hiệu lực</span>
                      {isCEO && <button onClick={()=>doDelDec(d)}
                        style={{padding:"4px 12px",borderRadius:6,background:"rgba(239,68,68,0.1)",border:"1px solid rgba(239,68,68,0.3)",
                          color:T.red,fontSize:14,cursor:"pointer",fontWeight:700}}>🗑 Xóa</button>}
                    </div>
                    <div style={{fontSize:17,fontWeight:800,marginBottom:8}}>{d.title}</div>
                    {d.context && <div style={{fontSize:16,color:T.muted,marginBottom:8,fontStyle:"italic"}}>Bối cảnh: {d.context}</div>}
                    <div style={{background:"rgba(37,99,235,0.07)",borderRadius:8,padding:"12px",borderLeft:`3px solid ${T.accent}`}}>
                      <div style={{fontSize:16,color:T.accent,letterSpacing:"1px",marginBottom:4}}>QUYẾT ĐỊNH CEO</div>
                      <div style={{fontSize:16,color:T.text}}>{d.dec}</div>
                    </div>
                  </div>
                ))}
              </div>
            );
          })()}

          {/* ════════════════════════════════════
              BIÊN BẢN HỌP
          ════════════════════════════════════ */}
          {nav==="minutes" && <MinutesPanel />}

          {/* ════════════════════════════════════
              AI SYNC DRIVE
          ════════════════════════════════════ */}
          {nav==="ai_sync" && <AiSyncPanel />}
          {nav==="kb_admin" && isCEO && <KnowledgeBasePanel knowledgeBase={knowledgeBase} setKnowledgeBase={setKnowledgeBase} user={user} sb={sb} T={T}/>}
          {nav==="pkd_dashboard" && (isAdmin || ["PKD","PKD-BD","BO","Int. Dept"].includes(user?.dept)) && (
            <PKDDashboard weeklyData={weeklyData} wk={wk} userDept={user?.dept} issues={issues} actions={actions} />
          )}
          {/* ════════════════════════════════════
              QUẢN LÝ TUẦN
          ════════════════════════════════════ */}
          {nav==="manage_week" && isCEO && (() => {
            const activeWk = activeWkMgr;
            const setActiveWk = setActiveWkMgr;
            const openWk = (n) => { setLockedWks(p=>({...p,[n]:false})); setActiveWk(n); setWk(n); };
            const lockWk = (n) => {
              setLockedWks(p=>({...p,[n]:true}));
            };
            const maxWk = Math.max(...wkData.map(w=>w.w), 0);
            const cancelWk = (n) => {
              if(!window.confirm("Hủy tuần "+n+"? Dữ liệu giữ nguyên, chỉ đổi trạng thái.")) return;
              setLockedWks(p=>({...p,[n]:true}));
            };
            const createNewWk = async () => {
              const next = maxWk + 1;
              if(next > 52) { alert("Đã hết tuần trong năm 2026!"); return; }
              const thangMoi = next<=4?1:next<=9?2:next<=13?3:next<=17?4:next<=22?5:next<=26?6:next<=30?7:next<=35?8:next<=39?9:next<=43?10:next<=48?11:12;
              const quyMoi = thangMoi<=3?1:thangMoi<=6?2:thangMoi<=9?3:4;
              const res = await sb.upsert("weekly_data", {
                week_number:next, year:2026, month_number:thangMoi,
                quarter:quyMoi, label:"T"+next, ngay:"", has_data:false
              }, "week_number,year");
              setLockedWks(p=>({...p,[next]:false}));
              setActiveWk(next); setWk(next);
              setToast(res ? "✅ Đã tạo Tuần "+next+" trong Supabase" : "✅ Tuần "+next+" đã tạo (local)");
            };
            const currentW = wkData.find(w=>w.w===activeWk)||wkData[wkData.length-1]||WK_EMPTY_ROW(activeWk);
            // Aggregate production/revenue for current week
            const dt = currentW.pkd?.dt||0;
            const khdt = currentW.pkd?.kh||0;
            const nhomHT = currentW.nhom?.ht||0;
            const thepVAV = currentW.thep?.vav||0;
            const uptime = currentW.cd?.uptime||0;
            const vayCuoiTuan = currentW.tckt?.vayNH||0;
            const luotGH = currentW.gh?.luot||0;

            return (
            <div style={{display:"grid",gap:16}}>
              <SectionTitle sub="Mở tuần mới / Khóa tuần cũ · Tổng quan sản xuất & doanh thu theo tuần">📅 Quản lý tuần – CEO</SectionTitle>

              <AiInlinePanel buildSysPrompt={buildSysPrompt} callClaude={callClaude} wk={wk}
                contextExtra="Người dùng đang xem Quản lý Tuần. Hỗ trợ so sánh tuần, nhận xét hiệu suất, gợi ý chuẩn bị tuần mới."
                quickQuestions={["Tổng kết tuần " + wk + " cho CEO","So sánh tuần này vs tuần trước","KQ nổi bật cần ghi nhận?","Chuẩn bị gì cho tuần " + (wk+1) + "?"]}            />

              {/* Week timeline — compact grid */}
              <div style={{background:T.card,border:`1px solid ${T.border}`,borderRadius:12,padding:"16px 20px"}}>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:14}}>
                  <div style={{fontSize:14,fontWeight:700,color:"#fff"}}>📆 Trạng thái các tuần</div>
                  <div style={{display:"flex",gap:12,fontSize:12}}>
                    <span style={{color:T.green}}>🔒 Khóa</span>
                    <span style={{color:T.yellow}}>🔓 Mở</span>
                    <span style={{color:T.accent}}>▶ Đang xem</span>
                  </div>
                </div>
                {/* 2 charts: CHS trái | DT phải */}
                {(()=>{
                  const chartWks = wkData.filter(w=>w.hasData||chsData.find(x=>x.l===("T"+w.w))).slice(-12);
                  const chsRows  = chartWks.map(w=>{
                    const e=chsData.find(x=>x.l===("T"+w.w));
                    return {wk:"Tuần "+w.w+"/2026",chs:e?.chs??null,color:!e?.chs?"#475569":e.chs>=85?"#34d399":e.chs>=75?"#fbbf24":"#f87171"};
                  });
                  const dtRows   = chartWks.map(w=>{
                    const dt=w.pkd?.dt??null;
                    const kh=w.pkd?.kh??null;
                    return {wk:"T"+w.w,dt,kh,color:!dt?"#475569":kh>0&&dt/kh>=1?"#34d399":dt/kh>=0.8?"#fbbf24":"#f87171"};
                  });
                  // dùng ChsChartTip, DtChartTip từ ngoài scope
                  return (
                    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16,marginBottom:16}}>
                      {/* CHS chart */}
                      <div style={{background:"rgba(255,255,255,0.02)",borderRadius:10,padding:"12px 14px",border:"1px solid rgba(255,255,255,0.05)"}}>
                        <div style={{fontSize:13,fontWeight:700,color:"#fff",marginBottom:10}}>💓 Company Health Score theo tuần</div>
                        <ResponsiveContainer width="100%" height={160}>
                          <BarChart data={chsRows} margin={{top:18,right:4,bottom:0,left:0}} barCategoryGap="30%">
                            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false}/>
                            <XAxis dataKey="wk" tick={{fill:"#475569",fontSize:10}} axisLine={false} tickLine={false}/>
                            <YAxis domain={[0,120]} tick={{fill:"#475569",fontSize:9}} axisLine={false} tickLine={false} width={24}/>
                            <Tooltip content={<ChsChartTip/>}/>
                            <ReferenceLine y={85} stroke="rgba(52,211,153,0.35)"  strokeDasharray="4 3"/>
                            <ReferenceLine y={75} stroke="rgba(251,191,36,0.35)"  strokeDasharray="4 3"/>
                            <Bar dataKey="chs" radius={[5,5,0,0]} cursor="pointer"
                              onClick={(d)=>setActiveWkMgr(parseInt(d.wk.replace("T","")))}>
                              <LabelList dataKey="chs" position="top" style={{fill:"#94a3b8",fontSize:10,fontWeight:700}}/>
                              {chsRows.map((d,i)=><Cell key={i} fill={d.color+"cc"} stroke={activeWkMgr===parseInt(d.wk.replace("T",""))?d.color:"transparent"} strokeWidth={2}/>)}
                            </Bar>
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                      {/* DT chart */}
                      <div style={{background:"rgba(255,255,255,0.02)",borderRadius:10,padding:"12px 14px",border:"1px solid rgba(255,255,255,0.05)"}}>
                        <div style={{fontSize:13,fontWeight:700,color:"#fff",marginBottom:10}}>💰 Doanh Thu Thực / Kế Hoạch (tỷ)</div>
                        <ResponsiveContainer width="100%" height={160}>
                          <BarChart data={dtRows} margin={{top:18,right:4,bottom:0,left:0}} barCategoryGap="25%" barGap={3}>
                            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false}/>
                            <XAxis dataKey="wk" tick={{fill:"#475569",fontSize:10}} axisLine={false} tickLine={false}/>
                            <YAxis tick={{fill:"#475569",fontSize:9}} axisLine={false} tickLine={false} width={24} tickFormatter={v=>v+"B"}/>
                            <Tooltip content={<DtChartTip/>}/>
                            <Bar dataKey="kh" name="KH" fill="rgba(255,255,255,0.07)" radius={[4,4,0,0]} cursor="pointer"
                              onClick={(d)=>setActiveWkMgr(parseInt(d.wk.replace("T","")))}>
                              <LabelList dataKey="kh" position="top" style={{fill:"#475569",fontSize:9}}/>
                            </Bar>
                            <Bar dataKey="dt" name="Thực hiện" radius={[4,4,0,0]} cursor="pointer"
                              onClick={(d)=>setActiveWkMgr(parseInt(d.wk.replace("T","")))}>
                              <LabelList dataKey="dt" position="top" style={{fill:"#94a3b8",fontSize:10,fontWeight:700}}/>
                              {dtRows.map((d,i)=><Cell key={i} fill={d.color+"cc"} stroke={activeWkMgr===parseInt(d.wk.replace("T",""))?d.color:"transparent"} strokeWidth={2}/>)}
                            </Bar>
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  );
                })()}
                <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(88px,1fr))",gap:6}}>
                  {(()=>{
                    const maxW = Math.max(...wkData.map(x=>x.w), 0);
                    const showWks = wkData.filter(x => x.w >= maxW - 2);
                    return showWks;
                  })().map(w=>{
                    const locked = lockedWks[w.w];
                    const isActive = w.w===activeWk;
                    const chsEntry = chsData.find(c => c.l===`T${w.w}`);
                    const chs = chsEntry?.chs || null;
                    const chsColor = chs==null?"#475569":chs>=85?T.green:chs>=75?T.yellow:T.red;
                    const chsBg = chs==null?"transparent":chs>=85?"rgba(52,211,153,0.08)":chs>=75?"rgba(251,191,36,0.08)":"rgba(248,113,113,0.08)";
                    const dt = wkData.find(x=>x.w===w.w)?.pkd?.dt||null;
                    return (
                      <div key={w.w} onClick={()=>setActiveWk(w.w)} style={{
                        cursor:"pointer",borderRadius:9,padding:"8px 10px",textAlign:"center",
                        background:isActive?"rgba(37,99,235,0.15)":chsBg,
                        border:`1.5px solid ${isActive?T.accent:locked?"rgba(52,211,153,0.3)":T.yellow+"40"}`,
                        position:"relative",transition:"all .15s",
                      }}>
                        {/* Tuần label */}
                        <div style={{fontSize:13,fontWeight:900,color:isActive?T.accent:locked?T.green:T.yellow}}>T{w.w}</div>
                        {/* Date */}
                        {w.ngay&&<div style={{fontSize:10,color:"#475569",marginTop:1}}>{w.ngay}</div>}
                        {/* CHS */}
                        <div style={{margin:"5px 0 3px",fontSize:17,fontWeight:900,color:chsColor,lineHeight:1}}>
                          {chs!=null?chs:"—"}
                        </div>
                        <div style={{fontSize:9,color:"#475569",letterSpacing:"0.5px",marginBottom:5}}>CHS</div>
                        {/* DT mini */}
                        {dt!=null&&<div style={{fontSize:10,color:T.muted,marginBottom:4}}>{dt}B</div>}
                        {/* Lock badge */}
                        <div style={{fontSize:10,fontWeight:700,color:locked?T.green:T.yellow}}>{locked?"🔒":"🔓"}</div>
                        {/* Action buttons */}
                        {isCEO&&(
                          <div style={{marginTop:5}}>
                            {locked
                              ? <button onClick={e=>{e.stopPropagation();openWk(w.w);}} style={{
                                  padding:"2px 8px",borderRadius:4,fontSize:10,fontWeight:700,cursor:"pointer",width:"100%",
                                  background:"rgba(245,158,11,0.12)",border:`1px solid ${T.yellow}33`,color:T.yellow}}>
                                  Mở
                                </button>
                              : <button onClick={e=>{e.stopPropagation();lockWk(w.w);}} style={{
                                  padding:"2px 8px",borderRadius:4,fontSize:10,fontWeight:700,cursor:"pointer",width:"100%",
                                  background:"rgba(52,211,153,0.12)",border:`1px solid ${T.green}33`,color:T.green}}>
                                  Khóa
                                </button>
                            }
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
                {/* Add new week button */}
                <div style={{marginTop:12,display:"flex",gap:10,justifyContent:"flex-end"}}>
                  <button onClick={()=>cancelWk(activeWk)}
                    style={{display:!lockedWks[activeWk]&&activeWk>0?"inline-flex":"none",
                      padding:"7px 16px",borderRadius:8,background:"rgba(239,68,68,0.08)",
                      border:"1px solid rgba(239,68,68,0.3)",color:T.red,fontSize:14,fontWeight:700,cursor:"pointer",gap:6,alignItems:"center"}}>
                    🗑 Hủy tuần {activeWk}
                  </button>
                  {(() => {
                    const maxWk = Math.max(...wkData.map(w=>w.w), 0);
                    const cancelWk = async (n) => {
                      if(!window.confirm("Hủy tuần "+n+"? Dữ liệu vẫn giữ nguyên, chỉ đổi trạng thái.")) return;
                      setLockedWks(p=>({...p,[n]:true}));
                    };
                    const createNewWk = async () => {
                      const next = maxWk + 1;
                      if(next > 52) { alert("Đã hết tuần trong năm!"); return; }
                      setLockedWks(p=>({...p,[next]:false}));
                      setActiveWk(next); setWk(next);
                    };
                    const nextWk = maxWk + 1;
                    return (
                      <button onClick={async ()=>{
                        // Kiểm tra đã tồn tại chưa
                        const exists = wkData.find(w=>w.w===nextWk);
                        if(exists) { setWk(nextWk); setActiveWkMgr(nextWk); return; }
                        // Tính tháng/quý cho tuần mới
                        const thangMoi = nextWk<=4?1:nextWk<=9?2:nextWk<=13?3:nextWk<=17?4:nextWk<=22?5:nextWk<=26?6:nextWk<=31?7:nextWk<=35?8:nextWk<=39?9:nextWk<=44?10:nextWk<=48?11:12;
                        const quyMoi = thangMoi<=3?1:thangMoi<=6?2:thangMoi<=9?3:4;
                        // Ghi vào Supabase weekly_data TRƯỚC
                        const res = await sb.upsert("weekly_data", {
                          week_number: nextWk,
                          year: 2026,
                          month_number: thangMoi,
                          quarter: quyMoi,
                          label: "T"+nextWk,
                          ngay: "",
                          has_data: false,
                        }, "week_number,year");
                        // Cập nhật local state
                        const newRow = {...WK_EMPTY_ROW(nextWk), thang: thangMoi, quy: quyMoi};
                        setWeeklyData(p => {
                          const ex = p.find(w=>w.w===nextWk);
                          if(ex) return p;
                          return [...p, newRow];
                        });
                        setLockedWks(p=>({...p,[nextWk]:false}));
                        setActiveWkMgr(nextWk);
                        setWk(nextWk);
                        setToast(res ? `✅ Đã kích hoạt Tuần ${nextWk} · Đã lưu Supabase` : `✅ Tuần ${nextWk} đã kích hoạt (kiểm tra RLS Supabase)`);
                      }} style={{padding:"8px 20px",borderRadius:8,background:T.accent,color:"white",border:"none",cursor:"pointer",fontSize:16,fontWeight:700}}>
                        + Kích hoạt Tuần tiếp theo (T{nextWk})
                      </button>
                    );
                  })()}
                </div>
              </div>


              {/* Tổng quan tuần đang xem */}
              <div style={{background:T.card,border:`1px solid ${T.border}`,borderRadius:12,padding:"18px 20px"}}>
                <div style={{fontSize:15,color:T.muted,letterSpacing:"2px",textTransform:"uppercase",marginBottom:14}}>📊 Tổng quan Tuần {activeWk} – Sản xuất & Tài chính</div>
                <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:12}}>
                  {[
                    {l:"DT thực hiện",v:`${dt}B`,kh:`KH ${khdt}B`,pct:khdt>0?Math.round(dt/khdt*100):0,c:dt/khdt>=1?T.green:dt/khdt>=0.8?T.yellow:T.red,icon:"💰"},
                    {l:"% HT SX Nhôm",v:`${nhomHT}%`,kh:"KH 100%",pct:nhomHT,c:nhomHT>=100?T.green:nhomHT>=85?T.yellow:T.red,icon:"🔩"},
                    {l:"VAV Box hoàn thành",v:`${thepVAV}%`,kh:"KH 100%",pct:thepVAV,c:thepVAV>=100?T.green:thepVAV>=85?T.yellow:T.red,icon:"🏭"},
                    {l:"Uptime thiết bị",v:`${uptime}%`,kh:"KH 95%",pct:uptime,c:uptime>=95?T.green:uptime>=90?T.yellow:T.red,icon:"⚙️"},
                    {l:"Dư nợ NH",v:`${vayCuoiTuan}B`,kh:"KH ↓",pct:null,c:T.muted,icon:"🏦"},
                    {l:"Lượt giao hàng",v:`${luotGH}`,kh:"tuần",pct:null,c:T.muted,icon:"🚚"},
                    {l:"CHS tuần", v:(()=>{const c=chsData.find(x=>x.l==="T"+activeWk); return c?.chs!=null?c.chs+"đ":"Chưa có";})(), kh:"Target 80+", pct:chsData.find(x=>x.l==="T"+activeWk)?.chs||0, c:(chsData.find(x=>x.l==="T"+activeWk)?.chs||0)>=80?T.green:T.yellow, icon:"💓"},
                    {l:"Vay TDH",v:`${currentW.tckt?.vayTDH||0}B`,kh:"KH ↓",pct:null,c:T.muted,icon:"📈"},
                  ].map((item,i)=>(
                    <div key={i} style={{background:"rgba(255,255,255,0.02)",border:`1px solid ${T.border}`,borderRadius:8,padding:"12px 14px"}}>
                      <div style={{fontSize:20,marginBottom:4}}>{item.icon}</div>
                      <div style={{fontSize:15,color:T.muted,marginBottom:4}}>{item.l}</div>
                      <div style={{fontSize:24,fontWeight:900,color:item.c}}>{item.v}</div>
                      <div style={{fontSize:14,color:T.dim,marginTop:3}}>{item.kh}</div>
                      {item.pct!=null&&(
                        <div style={{marginTop:6,height:3,background:"rgba(255,255,255,0.05)",borderRadius:2}}>
                          <div style={{width:`${Math.min(100,item.pct)}%`,background:item.c,height:"100%",borderRadius:2}}/>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* P&L Tổng hợp Q1 từ data thực */}
              <div style={{background:T.card,border:`1px solid ${T.border}`,borderRadius:12,padding:"18px 20px"}}>
                <div style={{fontSize:15,color:T.muted,letterSpacing:"2px",textTransform:"uppercase",marginBottom:14}}>📋 Tổng hợp Q1/2026 – Từ dữ liệu thực ({_realWK.length} tuần)</div>
                {_realWK.length === 0 ? (
                  <div style={{textAlign:"center",padding:"24px",color:T.muted,fontSize:16}}>Chưa có tuần nào có data thực · Các phòng ban cần nộp báo cáo</div>
                ) : (
                  <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:12}}>
                    {[
                      {l:"Tổng DT Q1",    v:(_Q1.dt||0).toFixed(2)+"B",   sub:`KH: ${(14.76+12.94+20).toFixed(1)}B · ${pct(_Q1.dt||0, 14.76+12.94+20)}% đạt`, c:(_Q1.dt||0)>=(14.76+12.94+20)?T.green:T.orange},
                      {l:"Nợ PT TB",      v:(_Q1.pt||0).toFixed(2)+"B",   sub:"Trung bình các tuần",             c:T.yellow},
                      {l:"Nợ Quá hạn TB", v:(_Q1.qh||0).toFixed(2)+"B",   sub:"Ngưỡng cảnh báo: 5B",            c:(_Q1.qh||0)>=5?T.red:T.green},
                      {l:"Uptime TB CĐ",  v:(_Q1.uptime||0).toFixed(1)+"%",sub:"KH 98%",                         c:(_Q1.uptime||0)>=98?T.green:T.yellow},
                      {l:"FPY TB QLCL",   v:(_Q1.fpy||0).toFixed(1)+"%",  sub:"KH 96%",                         c:(_Q1.fpy||0)>=96?T.green:T.yellow},
                      {l:"Tổng vay TB",   v:(_Q1.tongVay||0).toFixed(2)+"B",sub:"Vay NH + TDH",                  c:T.muted},
                    ].map((r,i)=>(
                      <div key={i} style={{padding:"12px 14px",background:"rgba(255,255,255,0.02)",border:`1px solid ${T.border}`,borderRadius:8}}>
                        <div style={{fontSize:15,color:T.muted,marginBottom:4}}>{r.l}</div>
                        <div style={{fontSize:22,fontWeight:900,color:r.c}}>{r.v}</div>
                        <div style={{fontSize:14,color:T.dim,marginTop:3}}>{r.sub}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Quy trình khóa tuần */}
              <div style={{background:T.card,border:`1px solid ${T.border}`,borderRadius:12,padding:"18px 20px"}}>
                <div style={{fontSize:15,color:T.muted,letterSpacing:"2px",textTransform:"uppercase",marginBottom:14}}>⚙️ Quy trình phê duyệt & khóa dữ liệu tuần</div>
                {[
                  {step:"1",title:"Nộp báo cáo",desc:"Các phòng ban nộp BC trước 18:00 thứ 7",status:"auto"},
                  {step:"2",title:"TCKT tổng hợp",desc:"TCKT kiểm tra & tổng hợp số liệu tài chính",status:"manual"},
                  {step:"3",title:"CEO phê duyệt",desc:"CEO review dashboard và approve số liệu tuần",status:"manual"},
                  {step:"4",title:"Khóa dữ liệu",desc:"Hệ thống khóa – không thể chỉnh sửa sau khi khóa",status:"auto"},
                ].map(s=>(
                  <div key={s.step} style={{display:"flex",gap:14,padding:"10px 0",borderBottom:`1px solid ${T.border}`}}>
                    <div style={{width:26,height:26,borderRadius:"50%",background:"rgba(37,99,235,0.15)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:16,fontWeight:800,color:T.accent,flexShrink:0}}>{s.step}</div>
                    <div style={{flex:1}}>
                      <div style={{fontSize:15,fontWeight:700}}>{s.title}</div>
                      <div style={{fontSize:15,color:T.muted,marginTop:2}}>{s.desc}</div>
                    </div>
                    <div style={{fontSize:15,color:s.status==="auto"?T.cyan:T.yellow,alignSelf:"center"}}>{s.status==="auto"?"⚡ Tự động":"👤 Thủ công"}</div>
                  </div>
                ))}
              </div>
            </div>
            );
          })()}

          {/* ════════════════════════════════════
              TÀI LIỆU
          ════════════════════════════════════ */}
          {nav==="documents" && (() => {
            const extIcon = (name) => {
              const e = (name||"").split(".").pop().toLowerCase();
              if(["pdf"].includes(e)) return "📄";
              if(["xlsx","xls","csv"].includes(e)) return "📊";
              if(["docx","doc"].includes(e)) return "📝";
              if(["pptx","ppt"].includes(e)) return "📑";
              if(["jpg","jpeg","png","gif"].includes(e)) return "🖼";
              return "📁";
            };
            const loadDocs = async () => {
              setDocsLoading(true);
              const rows = await sb.get("documents","order=uploaded_at.desc&limit=100");
              if(rows) setDocs(rows);
              setDocsLoading(false);
            };
            const uploadDoc = async (file) => {
              if(!file) return;
              setDocUploading(true);
              // Store metadata in Supabase (no actual file storage - link only)
              const row = {
                name: file.name,
                size: file.size,
                type: file.type||"",
                uploaded_by: user.name,
                dept: user.dept||"",
                uploaded_at: new Date().toISOString(),
                status: "active",
                tag: user.dept||"Chung",
              };
              const res = await sb.insert("documents", row);
              if(res?.[0]) setDocs(prev=>[res[0],...prev]);
              setDocUploading(false);
              setToast("✅ Đã lưu tài liệu: "+file.name); setTimeout(()=>setToast(""),3000);
            };
            const recallDoc = async (d) => {
              if(!window.confirm("Thu hồi tài liệu '"+d.name+"'?")) return;
              await sb.update("documents",{status:"recalled"},`id=eq.${d.id}`);
              setDocs(prev=>prev.map(x=>x.id===d.id?{...x,status:"recalled"}:x));
              setToast("🗑 Đã thu hồi: "+d.name); setTimeout(()=>setToast(""),2500);
            };
            const deleteDoc = async (d) => {
              if(!window.confirm("Xóa hẳn tài liệu '"+d.name+"'?")) return;
              await fetch(`${SUPABASE_URL}/rest/v1/documents?id=eq.${d.id}`,{method:"DELETE",headers:sb.headers});
              setDocs(prev=>prev.filter(x=>x.id!==d.id));
              setToast("🗑 Đã xóa"); setTimeout(()=>setToast(""),2000);
            };

            // Load docs on first visit
            if(!docsLoading && docs.length===0) loadDocs();

            const activeDocs = docs.filter(d=>d.status!=="recalled");
            const recalledDocs = docs.filter(d=>d.status==="recalled");
            return (
              <div style={{display:"grid",gap:16}}>
                <SectionTitle sub="Kho tài liệu nội bộ · Upload và quản lý tài liệu">
                  📁 Tài liệu
                  <label style={{background:"linear-gradient(135deg,#2563eb,#1d4ed8)",borderRadius:8,padding:"9px 18px",
                    color:"white",fontSize:16,fontWeight:700,cursor:"pointer",display:"inline-flex",alignItems:"center",gap:6}}>
                    {docUploading?"⏳ Đang lưu...":"＋ Upload tài liệu"}
                    <input type="file" style={{display:"none"}} disabled={docUploading}
                      onChange={e=>{ if(e.target.files?.[0]) uploadDoc(e.target.files[0]); e.target.value=""; }}/>
                  </label>
                </SectionTitle>

                {docsLoading ? (
                  <div style={{textAlign:"center",padding:"40px",color:T.muted}}>⏳ Đang tải tài liệu...</div>
                ) : activeDocs.length===0 ? (
                  <div style={{background:T.card,border:`1px solid ${T.border}`,borderRadius:12,padding:"40px",textAlign:"center"}}>
                    <div style={{fontSize:36,marginBottom:12}}>📂</div>
                    <div style={{fontSize:18,fontWeight:700,marginBottom:8}}>Chưa có tài liệu nào</div>
                    <div style={{fontSize:15,color:T.muted}}>Nhấn "Upload tài liệu" để thêm file đầu tiên.</div>
                  </div>
                ) : (
                  <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:12}}>
                    {activeDocs.map(d=>(
                      <div key={d.id} style={{background:T.card,border:`1px solid ${T.border}`,borderRadius:12,padding:"16px",display:"flex",gap:12,alignItems:"flex-start"}}>
                        <div style={{fontSize:26,flexShrink:0}}>{extIcon(d.name)}</div>
                        <div style={{flex:1,minWidth:0}}>
                          <div style={{fontSize:15,fontWeight:700,marginBottom:3,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}} title={d.name}>{d.name}</div>
                          <div style={{fontSize:13,color:T.muted,marginBottom:6}}>{d.uploaded_by} · {new Date(d.uploaded_at).toLocaleDateString("vi-VN")}</div>
                          <div style={{display:"flex",gap:6,flexWrap:"wrap"}}>
                            <span style={{fontSize:13,background:"rgba(37,99,235,0.1)",borderRadius:4,padding:"2px 6px",color:T.accent}}>{d.tag||d.dept}</span>
                            {d.size && <span style={{fontSize:12,color:T.dim}}>{(d.size/1024/1024).toFixed(1)}MB</span>}
                          </div>
                        </div>
                        {(isCEO||d.uploaded_by===user?.name) && (
                          <div style={{display:"flex",flexDirection:"column",gap:4}}>
                            <button onClick={()=>recallDoc(d)}
                              style={{padding:"4px 10px",borderRadius:6,background:"rgba(245,158,11,0.1)",border:"1px solid rgba(245,158,11,0.3)",
                                color:T.yellow,fontSize:12,cursor:"pointer",fontWeight:700,whiteSpace:"nowrap"}}>Thu hồi</button>
                            {isCEO && <button onClick={()=>deleteDoc(d)}
                              style={{padding:"4px 10px",borderRadius:6,background:"rgba(239,68,68,0.08)",border:"1px solid rgba(239,68,68,0.25)",
                                color:T.red,fontSize:12,cursor:"pointer",fontWeight:700}}>🗑 Xóa</button>}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {recalledDocs.length>0 && (
                  <div>
                    <details>
                      <summary style={{background:"rgba(255,255,255,0.04)",border:`1px solid ${T.border}`,borderRadius:8,padding:"8px 16px",
                        color:T.muted,fontSize:14,cursor:"pointer",listStyle:"none",width:"100%",textAlign:"center"}}>
                        ▼ Xem {recalledDocs.length} tài liệu đã thu hồi
                      </summary>
                      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:12,marginTop:8,opacity:0.5}}>
                        {recalledDocs.map(d=>(
                          <div key={d.id} style={{background:T.card,border:`1px solid ${T.border}`,borderRadius:12,padding:"16px",display:"flex",gap:12,alignItems:"flex-start",filter:"grayscale(0.5)"}}>
                            <div style={{fontSize:26,flexShrink:0}}>{extIcon(d.name)}</div>
                            <div style={{flex:1,minWidth:0}}>
                              <div style={{fontSize:15,fontWeight:700,marginBottom:3,textDecoration:"line-through",color:T.muted}}>{d.name}</div>
                              <div style={{fontSize:13,color:T.dim}}>{d.uploaded_by} · Đã thu hồi</div>
                            </div>
                            {isCEO && <button onClick={()=>deleteDoc(d)}
                              style={{padding:"4px 10px",borderRadius:6,background:"rgba(239,68,68,0.08)",border:"1px solid rgba(239,68,68,0.25)",
                                color:T.red,fontSize:12,cursor:"pointer",fontWeight:700}}>🗑</button>}
                          </div>
                        ))}
                      </div>
                    </details>
                  </div>
                )}
              </div>
            );
          })()}

          {/* ════════════════════════════════════
              CẤU HÌNH
          ════════════════════════════════════ */}
          {nav==="config" && (
            <div style={{display:"grid",gap:16}}>
              <SectionTitle sub="Thiết lập hệ thống CIS · Kết nối dữ liệu · Thông báo">⚙️ Cấu hình</SectionTitle>

              {/* ── SETUP / KHỞI TẠO DATABASE ─────────────── */}
              {isAdmin && <SetupPanel />}
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14}}>
                {[
                  {title:"Kết nối Google Drive",icon:"📁",items:[
                    {l:"Drive Folder ID",v:"1nHDxj9CmHpbR...",status:"connected"},
                    {l:"TCKT subfolder",v:"1nLQcXwgy0DKj...",status:"connected"},
                    {l:"Auto-sync",v:"Mỗi 30 phút",status:"active"},
                  ]},
                  {title:"Ngưỡng cảnh báo CHS",icon:"💓",items:[
                    {l:"Mức Nguy hiểm",v:"< 65",status:"set"},
                    {l:"Mức Cảnh báo",v:"65–74",status:"set"},
                    {l:"Mức Ổn định",v:"75–84",status:"set"},
                  ]},
                  {title:"Thông báo Deadline BC",icon:"📑",items:[
                    {l:"Nhắc nhở trước",v:"2 giờ (16:00 thứ 7)",status:"active"},
                    {l:"Cảnh báo quá hạn",v:"Sau 18:00 thứ 7",status:"active"},
                    {l:"Kênh thông báo",v:"Zalo / Email",status:"pending"},
                  ]},
                  {title:"Phiên bản hệ thống",icon:"⚙️",items:[
                    {l:"CIS Version",v:"v6.3",status:"current"},
                    {l:"Dữ liệu tuần hiện tại",v:`Tuần ${wk}/2026`,status:"live"},
                    {l:"Last update",v:"10/03/2026",status:"info"},
                  ]},
                ].map((sec,i)=>(
                  <div key={i} style={{background:T.card,border:`1px solid ${T.border}`,borderRadius:12,padding:"18px"}}>
                    <div style={{fontSize:16,color:T.muted,letterSpacing:"2px",textTransform:"uppercase",marginBottom:14}}>{sec.icon} {sec.title}</div>
                    {sec.items.map(it=>(
                      <div key={it.l} style={{display:"flex",justifyContent:"space-between",padding:"8px 0",borderBottom:`1px solid ${T.border}`}}>
                        <span style={{fontSize:15,color:T.muted}}>{it.l}</span>
                        <div style={{display:"flex",gap:8,alignItems:"center"}}>
                          <span style={{fontSize:15,color:T.text,fontFamily:"Calibri,sans-serif"}}>{it.v}</span>
                          <span style={{fontSize:15,color:["connected","active","set","current","live"].includes(it.status)?T.green:T.yellow}}>
                            {["connected","active","set","current","live"].includes(it.status)?"●":"○"}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

          {/* ════════════════════════════════════
              ✨ AI ASSISTANT
          ════════════════════════════════════ */}

          {/* ══════ NHẮC NHỞ TỰ ĐỘNG ══════ */}
          {nav==="reminder" && (() => {
            const DEPT_CONTACTS = {
              "HCNS":       { name:"Đặng Thanh Sơn",   email:"sondt@nsca.vn" },
              "TCKT":       { name:"Nguyễn Tiến Duẩn", email:"duannt@nsca.vn" },
              "PKD":        { name:"Đào Nguyên Ngọc",  email:"ndao@nsca.vn" },
              "KHO":        { name:"Chị Hà cá kho",  email:"hant@nsca.vn" },
              "CƠ ĐIỆN":   { name:"Đinh Văn Phong",    email:"phongdv@nsca.vn" },
              "R&D":        { name:"Anh Nam R&D",    email:"namph@nsca.vn" },
              "QLCL":       { name:"Nguyễn Lương Tuấn",email:"tuannl@nsca.vn" },
              "SX NHÔM":   { name:"Nguyễn Văn Ngọc",  email:"ngocnv@nsca.vn" },
              "SX THÉP":   { name:"Hoàng Mạnh Tùng",  email:"tunghm@nsca.vn" },
              "CUNG ỨNG":  { name:"Đặng Thị Kim Anh", email:"anhdtk@nsca.vn" },
              "GIAO HÀNG": { name:"Việt Đức",          email:"ducvt@nsca.vn" },
              "BO":        { name:"Chị Tâm BO",   email:"tamntt@nsca.vn" },
              "Int. Dept": { name:"Anh Santi đẹp trai", email:"santiago@nsca.vn" },
            };

            const checkStatus = async () => {
              setReminderLoading(true);
              try {
                const r = await fetch(`/api/remind?week=${wk}`);
                const d = await r.json();
                setReminderStatus(d);
              } catch(e) { setReminderStatus({error: e.message}); }
              finally { setReminderLoading(false); }
            };

            const sendReminders = async (manual=true) => {
              setReminderLoading(true);
              try {
                const r = await fetch("/api/remind", {
                  method:"POST",
                  headers:{"Content-Type":"application/json"},
                  body: JSON.stringify({ manual: true, week: wk, attemptNum: 1 })
                });
                const d = await r.json();
                setReminderStatus(prev => ({...prev, lastSend: d}));
                alert(d.dryRun
                  ? "⚠️ Dry run: Chưa cấu hình Gmail. Xem console để debug."
                  : d.success
                    ? `✅ Đã gửi email nhắc ${d.totalMissing} phòng ban!`
                    : "❌ Lỗi: " + JSON.stringify(d));
              } catch(e) { alert("❌ " + e.message); }
              finally { setReminderLoading(false); checkStatus(); }
            };

            const schedules = [
              { time: "Thứ 7 — 21:00", cron: "0 14 * * 6",  note: "Nhắc lần 1 — cuối giờ làm" },
              { time: "Chủ Nhật — 09:00", cron: "0 2 * * 0",  note: "Nhắc lần 2 — sáng Chủ Nhật" },
              { time: "Chủ Nhật — 21:00", cron: "0 14 * * 0", note: "Nhắc lần 3 — tối Chủ Nhật" },
              { time: "Thứ 2 — 08:30",  cron: "30 1 * * 1",  note: "Nhắc lần 4 — trước họp giao ban" },
            ];

            return (
              <div style={{padding:"24px",maxWidth:900}}>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:24}}>
                  <div>
                    <div style={{fontSize:20,fontWeight:800,letterSpacing:"-0.5px"}}>🔔 Nhắc Nhở Tự Động</div>
                    <div style={{fontSize:15,color:T.muted,marginTop:4}}>Tự động gửi email cho phòng ban chưa nộp BC · Thứ 7 21:00 → Thứ 2 09:00</div>
                  </div>
                  <div style={{display:"flex",gap:8}}>
                    <button onClick={checkStatus} disabled={reminderLoading}
                      style={{background:"rgba(255,255,255,0.06)",border:`1px solid ${T.border}`,borderRadius:8,
                        padding:"8px 16px",color:T.text,fontSize:15,cursor:"pointer"}}>
                      {reminderLoading ? "⏳" : "🔄 Kiểm tra"}
                    </button>
                    <button onClick={()=>sendReminders(true)} disabled={reminderLoading}
                      style={{background:"linear-gradient(135deg,#2563eb,#1d4ed8)",border:"none",borderRadius:8,
                        padding:"8px 20px",color:"white",fontSize:15,cursor:"pointer",fontWeight:700}}>
                      📧 Gửi Ngay
                    </button>
                  </div>
                </div>

                {/* Tabs */}
                <div style={{display:"flex",gap:4,marginBottom:20,background:"rgba(255,255,255,0.03)",
                    borderRadius:10,padding:4,width:"fit-content"}}>
                  {[["status","📊 Trạng thái tuần này"],["schedule","⏰ Lịch cron"],["settings","⚙️ Cài đặt"]].map(([k,l])=>(
                    <button key={k} onClick={()=>setReminderTab(k)}
                      style={{padding:"6px 16px",borderRadius:7,border:"none",fontSize:15,cursor:"pointer",
                        background:reminderTab===k?"linear-gradient(135deg,#2563eb,#1d4ed8)":"transparent",
                        color:reminderTab===k?"white":T.muted,fontWeight:reminderTab===k?700:400}}>
                      {l}
                    </button>
                  ))}
                </div>

                {/* Tab: Trạng thái */}
                {reminderTab==="status" && (
                  <div>
                    {!reminderStatus && (
                      <div style={{textAlign:"center",padding:48,color:T.muted}}>
                        <div style={{fontSize:32,marginBottom:12}}>🔍</div>
                        <div>Nhấn <strong>Kiểm tra</strong> để xem phòng ban nào chưa nộp BC tuần {wk}</div>
                      </div>
                    )}
                    {reminderStatus && !reminderStatus.error && (
                      <div>
                        {/* Summary cards */}
                        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:12,marginBottom:20}}>
                          {[
                            { label:"Tuần", val: reminderStatus.week, color: T.accent },
                            { label:"Đã nộp", val: `${reminderStatus.submitted}/${reminderStatus.total}`, color: T.green },
                            { label:"Chưa nộp", val: reminderStatus.missingDepts?.length || 0, color: reminderStatus.missingDepts?.length>0 ? T.red : T.green },
                          ].map(c=>(
                            <div key={c.label} style={{background:"rgba(255,255,255,0.04)",border:`1px solid ${T.border}`,
                                borderRadius:10,padding:"16px",textAlign:"center"}}>
                              <div style={{fontSize:26,fontWeight:800,color:c.color}}>{c.val}</div>
                              <div style={{fontSize:14,color:T.muted,marginTop:4}}>{c.label}</div>
                            </div>
                          ))}
                        </div>

                        {/* Missing depts */}
                        {reminderStatus.missingDepts?.length > 0 ? (
                          <div>
                            <div style={{fontSize:16,fontWeight:700,marginBottom:10,color:T.red}}>
                              ❌ {reminderStatus.missingDepts.length} Phòng chưa nộp:
                            </div>
                            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))",gap:10}}>
                              {reminderStatus.missingDepts.map(dept => {
                                const c = DEPT_CONTACTS[dept];
                                return (
                                  <div key={dept} style={{background:"rgba(239,68,68,0.06)",border:`1px solid ${T.red}40`,
                                      borderRadius:10,padding:"14px 16px",display:"flex",alignItems:"center",gap:12}}>
                                    <div style={{width:36,height:36,borderRadius:"50%",background:T.redBg,
                                        display:"flex",alignItems:"center",justifyContent:"center",fontSize:16}}>📋</div>
                                    <div style={{flex:1}}>
                                      <div style={{fontWeight:700,fontSize:16}}>{dept}</div>
                                      <div style={{fontSize:14,color:T.muted}}>{c?.name} · {c?.email}</div>
                                    </div>
                                    <span style={{fontSize:11,color:T.red,background:T.redBg,
                                        padding:"3px 8px",borderRadius:6,fontWeight:700}}>Chưa nộp</span>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        ) : (
                          <div style={{textAlign:"center",padding:32,background:"rgba(34,197,94,0.06)",
                              border:`1px solid ${T.green}40`,borderRadius:12,color:T.green}}>
                            <div style={{fontSize:28,marginBottom:8}}>🎉</div>
                            <div style={{fontWeight:700}}>Tất cả phòng ban đã nộp báo cáo tuần {reminderStatus.week}!</div>
                          </div>
                        )}

                        {/* Submitted */}
                        {reminderStatus.submittedDepts?.length > 0 && (
                          <div style={{marginTop:16}}>
                            <div style={{fontSize:15,color:T.muted,marginBottom:8}}>✅ Đã nộp: {reminderStatus.submittedDepts.join(" · ")}</div>
                          </div>
                        )}

                        {/* Last send result */}
                        {reminderStatus.lastSend && (
                          <div style={{marginTop:16,background:"rgba(255,255,255,0.03)",border:`1px solid ${T.border}`,
                              borderRadius:10,padding:"14px"}}>
                            <div style={{fontSize:15,fontWeight:700,marginBottom:8}}>Kết quả gửi gần nhất:</div>
                            {reminderStatus.lastSend.dryRun && (
                              <div style={{color:T.yellow,fontSize:15}}>⚠️ Dry run — Chưa cấu hình Gmail SMTP trong Vercel Env Vars</div>
                            )}
                            {reminderStatus.lastSend.results?.map((r,i)=>(
                              <div key={i} style={{fontSize:14,color:r.status==="sent"?T.green:T.red,padding:"3px 0"}}>
                                {r.status==="sent"?"✅":"❌"} {r.dept} → {r.email} {r.error ? "("+r.error+")" : ""}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}

                {/* Tab: Lịch cron */}
                {reminderTab==="schedule" && (
                  <div>
                    <div style={{background:"rgba(59,130,246,0.06)",border:`1px solid ${T.accent}40`,
                        borderRadius:10,padding:"14px 18px",marginBottom:20,fontSize:15}}>
                      <strong>📌 Lưu ý:</strong> Cron jobs chạy tự động trên Vercel.
                      Giờ UTC (server) được quy đổi sang UTC+7 (Việt Nam).
                      Vercel Hobby plan: 1 cron/ngày. Pro plan: không giới hạn.
                    </div>
                    <div style={{display:"flex",flexDirection:"column",gap:10}}>
                      {schedules.map((s,i)=>(
                        <div key={i} style={{background:"rgba(255,255,255,0.04)",border:`1px solid ${T.border}`,
                            borderRadius:10,padding:"16px 20px",display:"flex",alignItems:"center",gap:16}}>
                          <div style={{width:32,height:32,borderRadius:"50%",background:"rgba(59,130,246,0.15)",
                              display:"flex",alignItems:"center",justifyContent:"center",
                              color:T.accent,fontWeight:800,fontSize:16}}>
                            {i+1}
                          </div>
                          <div style={{flex:1}}>
                            <div style={{fontWeight:700,fontSize:16}}>{s.time}</div>
                            <div style={{fontSize:14,color:T.muted,marginTop:2}}>{s.note}</div>
                          </div>
                          <code style={{background:"rgba(255,255,255,0.06)",padding:"4px 10px",borderRadius:6,
                              fontSize:14,color:T.cyan}}>{s.cron}</code>
                        </div>
                      ))}
                    </div>
                    <div style={{marginTop:16,fontSize:14,color:T.muted}}>
                      Cron được cấu hình trong <code>vercel.json</code>. Endpoint: <code>/api/remind</code> (POST)
                    </div>
                  </div>
                )}

                {/* Tab: Cài đặt */}
                {reminderTab==="settings" && (
                  <div>
                    <div style={{display:"flex",flexDirection:"column",gap:16}}>
                      {[
                        { key:"GMAIL_USER",        label:"Gmail gửi đi",      ph:"dhk@nsca.vn",             desc:"Email dùng để gửi nhắc nhở (phải bật 2FA + App Password)" },
                        { key:"GMAIL_APP_PASSWORD", label:"Gmail App Password", ph:"xxxx xxxx xxxx xxxx",       desc:"Tạo tại myaccount.google.com → Security → App passwords" },
                        { key:"CRON_SECRET",        label:"Cron Secret",        ph:"nsca-cron-2026",           desc:"Mã bảo mật cho cron job tự động" },
                        { key:"SUPABASE_SERVICE_KEY",label:"Supabase Service Key",ph:"eyJ...",                 desc:"Service role key từ Supabase dashboard (Settings → API)" },
                      ].map(field=>(
                        <div key={field.key} style={{background:"rgba(255,255,255,0.04)",border:`1px solid ${T.border}`,
                            borderRadius:10,padding:"16px 20px"}}>
                          <div style={{fontWeight:700,fontSize:16,marginBottom:4}}>{field.label}</div>
                          <code style={{fontSize:14,color:T.accent}}>{field.key}</code>
                          <div style={{fontSize:14,color:T.muted,margin:"6px 0 10px"}}>{field.desc}</div>
                          <div style={{background:"rgba(255,255,255,0.03)",border:`1px solid ${T.border}40`,
                              borderRadius:6,padding:"8px 12px",fontSize:14,color:T.dim,fontStyle:"italic"}}>
                            Giá trị ví dụ: {field.ph}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div style={{marginTop:20,background:"rgba(245,158,11,0.08)",border:`1px solid ${T.yellow}40`,
                        borderRadius:10,padding:"16px 20px",fontSize:15}}>
                      <strong style={{color:T.yellow}}>📌 Cách thiết lập:</strong><br/>
                      <ol style={{margin:"8px 0 0 16px",lineHeight:2,color:T.muted}}>
                        <li>Vào <strong>vercel.com</strong> → Project NSCA CIS → Settings → Environment Variables</li>
                        <li>Thêm 4 biến trên với giá trị thực</li>
                        <li>Redeploy để áp dụng</li>
                        <li>Kiểm tra bằng nút <strong>Kiểm tra</strong> + <strong>Gửi Ngay</strong> ở trên</li>
                      </ol>
                    </div>
                  </div>
                )}
              </div>
            );
          })()}

          {nav==="cis_ai" && (() => {
            const SUGGESTED = [
              "Giải thích công thức tính điểm KPI 0–120?",
              "CHS hiện tại ở mức nào? Cần làm gì?",
              "Quy trình nộp báo cáo tuần như thế nào?",
              "Khi nào thì KPI bị kích hoạt xử lý cấp 2?",
              "Ngưỡng CHS nào kích hoạt họp khẩn cấp?",
              "Van EI xuất khẩu đang ở đâu trong chiến lược?",
            ];
            const chs = chsData[wk-1]?.chs||80;
            const chsC = chs>=85?T.green:chs>=75?T.cyan:chs>=65?T.yellow:T.red;

            const sendMsg = async () => {
              if(!aiInput.trim()) return;
              const userMsg = {role:"user", content:aiInput.trim()};
              const history = [...aiChat, userMsg];
              setAiChat(history);
              setAiInput("");
              setAiLoading(true);
              try {
                const msgs = history.map(m=>({role:m.role,content:m.content}));
                const reply = await callClaude(msgs, buildSysPrompt("chat"), 1000, aiWebSearch);
                setAiChat([...history, {role:"assistant", content:reply}]);
              } catch(e) {
                setAiChat([...history, {role:"assistant", content:"⚠️ Lỗi: " + e.message}]);
              }
              setAiLoading(false);
            };

            const askSuggested = (q) => {
              setAiInput(q);
              setTimeout(()=>sendMsg(),50);
            };

            return (
            <div style={{display:"grid",gap:14,height:"calc(100vh - 120px)",gridTemplateRows:"auto 1fr auto"}}>
              {/* Header */}
              <div>
                <SectionTitle sub="Hỏi đáp KPI · Quy trình · Khuyến nghị · Phân tích chiến lược NSCA">✨ CIS AI Assistant</SectionTitle>
                {/* Context bar */}
                <div style={{display:"flex",gap:10,flexWrap:"wrap",marginTop:4}}>
                  {[
                    {l:"Tuần hiện tại",v:`T${wk}/2026`},
                    {l:"CHS",v:`${chs}`,c:chsC},
                    {l:"User",v:`${user?.name} (${user?.role})`},
                    {l:"Model",v:"Claude Sonnet 4",c:T.cyan},
                    ...(aiWebSearch?[{l:"Web",v:"🌐 Search ON",c:"#34d399"}]:[]),
                  ].map((i,idx)=>(
                    <div key={idx} style={{padding:"4px 12px",borderRadius:20,background:"rgba(255,255,255,0.04)",
                      border:`1px solid ${T.border}`,fontSize:15}}>
                      <span style={{color:T.dim}}>{i.l}: </span>
                      <span style={{color:i.c||T.muted,fontWeight:700}}>{i.v}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Chat area */}
              <div style={{background:T.card,border:`1px solid ${T.border}`,borderRadius:14,
                overflow:"auto",padding:"16px",display:"flex",flexDirection:"column",gap:12}}>
                {/* Welcome */}
                {aiChat.length===0&&(
                  <div style={{textAlign:"center",padding:"40px 20px"}}>
                    <div style={{marginBottom:12}}><img src={LENA_FACE} style={{width:64,height:64,borderRadius:"50%",marginBottom:12}}/></div>
                    <div style={{fontSize:20,fontWeight:700,marginBottom:6}}>Em chào {user?.name}! 🙏</div>
                    <div style={{fontSize:15,color:T.muted,marginBottom:24}}>Em là Đào Thị Lê Na - CIS AI Assistant của NSCA – hiểu rõ KPI, quy trình và chiến lược 2026</div>
                    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,maxWidth:580,margin:"0 auto",textAlign:"left"}}>
                      {SUGGESTED.map((q,i)=>(
                        <button key={i} onClick={()=>{setAiInput(q); setTimeout(()=>document.getElementById("ai-input")?.focus(),50);}}
                          style={{padding:"10px 14px",borderRadius:8,background:"rgba(37,99,235,0.08)",
                            border:`1px solid ${T.accent}30`,color:T.muted,cursor:"pointer",
                            fontSize:15,textAlign:"left",fontFamily:"Calibri,sans-serif",lineHeight:1.4}}>
                          💬 {q}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Messages */}
                {aiChat.map((m,i)=>(
                  <div key={i} style={{display:"flex",justifyContent:m.role==="user"?"flex-end":"flex-start",gap:10,alignItems:"flex-start"}}>
                    {m.role==="assistant"&&(
                      <img src={LENA_FACE} style={{width:26,height:26,borderRadius:"50%",flexShrink:0,verticalAlign:"middle"}}/>
                    )}
                    <div style={{maxWidth:"72%",padding:"12px 16px",borderRadius:m.role==="user"?"14px 14px 4px 14px":"14px 14px 14px 4px",
                      background:m.role==="user"?"rgba(37,99,235,0.2)":"rgba(255,255,255,0.04)",
                      border:`1px solid ${m.role==="user"?T.accent+"40":T.border}`,
                      fontSize:15,lineHeight:1.7,color:T.text,whiteSpace:"pre-wrap"}}>
                      {m.content}
                    </div>
                    {m.role==="user"&&(
                      <div style={{width:30,height:30,borderRadius:"50%",background:user?.color||T.accent,
                        display:"flex",alignItems:"center",justifyContent:"center",
                        fontSize:15,fontWeight:800,flexShrink:0,marginTop:2}}>
                        {user?.avatar||"U"}
                      </div>
                    )}
                  </div>
                ))}

                {/* Loading */}
                {aiLoading&&(
                  <div style={{display:"flex",gap:10,alignItems:"flex-start"}}>
                    <img src={LENA_FACE} style={{width:26,height:26,borderRadius:"50%",flexShrink:0,verticalAlign:"middle"}}/>
                    <div style={{padding:"14px 18px",borderRadius:"14px 14px 14px 4px",background:"rgba(255,255,255,0.04)",
                      border:`1px solid ${T.border}`,display:"flex",gap:6,alignItems:"center"}}>
                      {[0,1,2].map(j=>(
                        <div key={j} style={{width:8,height:8,borderRadius:"50%",background:T.accent,
                          animation:"bounce 1.2s infinite",animationDelay:`${j*0.2}s`,opacity:0.8}}/>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Input bar */}
              <div style={{background:T.card,border:`1px solid ${T.border}`,borderRadius:12,padding:"12px 14px",
                display:"flex",gap:10,alignItems:"center"}}>
                <input id="ai-input" value={aiInput} onChange={e=>setAiInput(e.target.value)}
                  onKeyDown={e=>{if(e.key==="Enter"&&!e.shiftKey){e.preventDefault();sendMsg();}}}
                  placeholder={aiWebSearch ? "🌐 Web search ON — Hỏi về HVAC, thị trường, tiêu chuẩn kỹ thuật..." : "Hỏi về KPI, quy trình, CHS, chiến lược NSCA... (Enter để gửi)"}
                  style={{flex:1,background:"transparent",border:"none",color:T.text,fontSize:15,
                    outline:"none",fontFamily:"Calibri,sans-serif"}}/>
                {aiChat.length>0&&(
                  <button onClick={()=>setAiChat([])} title="Xóa lịch sử"
                    style={{padding:"6px 10px",borderRadius:6,background:"rgba(255,255,255,0.05)",
                      border:`1px solid ${T.border}`,color:T.dim,cursor:"pointer",fontSize:14}}>
                    🗑
                  </button>
                )}
                <button onClick={()=>setAiWebSearch(p=>!p)} title={aiWebSearch?"Tắt web search":"Bật web search"}
                  style={{padding:"6px 10px",borderRadius:6,fontSize:13,fontWeight:700,cursor:"pointer",
                    background:aiWebSearch?"rgba(37,99,235,0.2)":"rgba(255,255,255,0.05)",
                    border:aiWebSearch?`1px solid ${T.accent}60`:`1px solid ${T.border}`,
                    color:aiWebSearch?T.accent:T.dim}}>
                  🌐{aiWebSearch?" ON":" OFF"}
                </button>
                <button onClick={sendMsg} disabled={!aiInput.trim()||aiLoading}
                  style={{padding:"8px 20px",borderRadius:8,
                    background:aiInput.trim()&&!aiLoading?"linear-gradient(135deg,#2563eb,#1d4ed8)":"rgba(255,255,255,0.05)",
                    color:aiInput.trim()&&!aiLoading?"white":T.dim,
                    border:"none",cursor:aiInput.trim()&&!aiLoading?"pointer":"default",
                    fontSize:16,fontWeight:700,fontFamily:"Calibri,sans-serif",transition:"all 0.2s"}}>
                  Gửi ↑
                </button>
              </div>
            </div>
            );
          })()}

      {/* ══════ MODALS ══════ */}

      {/* APPROVE REPORT */}
      {approveTarget && (
        <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.75)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1000,backdropFilter:"blur(4px)"}}>
          <div style={{background:T.bg2,border:`1px solid ${T.border}`,borderRadius:14,padding:"28px 32px",width:520,maxHeight:"80vh",overflow:"auto"}}>
            <div style={{fontSize:16,fontWeight:800,marginBottom:16}}>Phê duyệt Báo cáo</div>
            <div style={{background:"rgba(255,255,255,0.03)",borderRadius:8,padding:"14px",marginBottom:16}}>
              <div style={{fontWeight:700,marginBottom:4}}>{approveTarget.title}</div>
              <div style={{fontSize:16,color:T.muted}}>{approveTarget.user} · {approveTarget.submittedAt}</div>
              <div style={{marginTop:8,fontSize:16,color:"#94a3b8"}}>{approveTarget.issues}</div>
            </div>
            <textarea value={comment} onChange={e=>setComment(e.target.value)} placeholder="Nhận xét của CEO (không bắt buộc)..."
              rows={3} style={{width:"100%",background:"rgba(255,255,255,0.04)",border:`1px solid ${T.border}`,borderRadius:8,
                padding:"10px 12px",color:T.text,fontSize:17,outline:"none",resize:"none",boxSizing:"border-box",marginBottom:16}}/>
            <div style={{display:"flex",gap:10,justifyContent:"flex-end"}}>
              <button onClick={()=>setApproveTarget(null)} style={{background:"transparent",border:`1px solid ${T.border}`,borderRadius:8,padding:"8px 16px",color:T.muted,fontSize:17,cursor:"pointer"}}>Hủy</button>
              <button onClick={()=>doApprove(approveTarget.id,"revision")} style={{background:T.orangeBg,border:`1px solid ${T.orange}40`,borderRadius:8,padding:"8px 16px",color:T.orange,fontSize:17,cursor:"pointer",fontWeight:700}}>Cần bổ sung</button>
              <button onClick={()=>doApprove(approveTarget.id,"approved")} style={{background:"linear-gradient(135deg,#2563eb,#1d4ed8)",border:"none",borderRadius:8,padding:"8px 20px",color:"white",fontSize:17,cursor:"pointer",fontWeight:700}}>✓ Phê duyệt</button>
            </div>
          </div>
        </div>
      )}

      {/* VIEW ISSUE */}
      {viewIssue && (
        <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.75)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1000,backdropFilter:"blur(4px)"}}>
          <div style={{background:T.bg2,border:`1px solid ${T.border}`,borderRadius:14,padding:"28px 32px",width:560,maxHeight:"80vh",overflow:"auto"}}>
            <div style={{display:"flex",justifyContent:"space-between",marginBottom:16}}>
              <div style={{fontSize:16,fontWeight:800}}>{viewIssue.title}</div>
              <span style={{padding:"3px 10px",borderRadius:12,fontSize:15,fontWeight:700,color:viewIssue.priority==="high"?T.red:T.yellow,background:viewIssue.priority==="high"?T.redBg:T.yellowBg}}>{viewIssue.priority==="high"?"Ưu tiên cao":"Trung bình"}</span>
            </div>
            <div style={{fontSize:16,color:T.muted,marginBottom:12}}>{viewIssue.from} · {viewIssue.dept} · {viewIssue.createdAt}</div>
            <div style={{background:"rgba(255,255,255,0.03)",borderRadius:8,padding:"14px",marginBottom:16,fontSize:17,lineHeight:1.6}}>{viewIssue.desc}</div>
            {viewIssue.ceoComment && <div style={{background:T.greenBg,borderRadius:8,padding:"10px 14px",marginBottom:16,fontSize:16,color:T.green}}>CEO đã phản hồi: {viewIssue.ceoComment}</div>}
            {isCEO && viewIssue.status==="pending" && (
              <>
                <textarea value={comment} onChange={e=>setComment(e.target.value)} placeholder="Nhận xét / Chỉ đạo..."
                  rows={3} style={{width:"100%",background:"rgba(255,255,255,0.04)",border:`1px solid ${T.border}`,borderRadius:8,
                    padding:"10px 12px",color:T.text,fontSize:17,outline:"none",resize:"none",boxSizing:"border-box",marginBottom:14}}/>
                <div style={{display:"flex",gap:10,justifyContent:"flex-end"}}>
                  <button onClick={()=>setViewIssue(null)} style={{background:"transparent",border:`1px solid ${T.border}`,borderRadius:8,padding:"8px 16px",color:T.muted,fontSize:17,cursor:"pointer"}}>Đóng</button>
                  <button onClick={()=>doApproveIssue(viewIssue.id,"approved")} style={{background:"linear-gradient(135deg,#2563eb,#1d4ed8)",border:"none",borderRadius:8,padding:"8px 20px",color:"white",fontSize:17,cursor:"pointer",fontWeight:700}}>✓ Duyệt & Giao nhiệm vụ</button>
                </div>
              </>
            )}
            {(!isCEO || viewIssue.status!=="pending") && <button onClick={()=>setViewIssue(null)} style={{background:"transparent",border:`1px solid ${T.border}`,borderRadius:8,padding:"8px 16px",color:T.muted,fontSize:17,cursor:"pointer"}}>Đóng</button>}
          </div>
        </div>
      )}

      {/* SUBMIT REPORT */}
      {submitOpen && (
        <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.75)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1000,backdropFilter:"blur(4px)"}}>
          <div style={{background:T.bg2,border:`1px solid ${T.border}`,borderRadius:14,padding:"28px 32px",width:520}}>
            <div style={{fontSize:16,fontWeight:800,marginBottom:20}}>Nộp Báo cáo Tuần</div>
            {[{l:"Tiêu đề báo cáo",k:"title",ph:"VD: Báo cáo TCKT Tuần 10"},{l:"Vấn đề nổi bật",k:"issues",ph:"Các vấn đề cần CEO biết..."},{l:"Đề xuất",k:"proposals",ph:"Kiến nghị, đề xuất..."}].map(({l,k,ph})=>(
              <div key={k} style={{marginBottom:14}}>
                <div style={{fontSize:15,color:T.muted,letterSpacing:"1px",marginBottom:5}}>{l}</div>
                <input value={newReport[k]} onChange={e=>setNewReport(p=>({...p,[k]:e.target.value}))} placeholder={ph}
                  style={{width:"100%",background:"rgba(255,255,255,0.04)",border:`1px solid ${T.border}`,borderRadius:8,padding:"9px 12px",color:T.text,fontSize:17,outline:"none",boxSizing:"border-box"}}/>
              </div>
            ))}
            <div style={{display:"flex",gap:10,justifyContent:"flex-end",marginTop:4}}>
              <button onClick={()=>setSubmitOpen(false)} style={{background:"transparent",border:`1px solid ${T.border}`,borderRadius:8,padding:"8px 16px",color:T.muted,fontSize:17,cursor:"pointer"}}>Hủy</button>
              <button onClick={doSubmitReport} style={{background:"linear-gradient(135deg,#2563eb,#1d4ed8)",border:"none",borderRadius:8,padding:"8px 20px",color:"white",fontSize:17,cursor:"pointer",fontWeight:700}}>Nộp báo cáo →</button>
            </div>
          </div>
        </div>
      )}

      {/* SUBMIT ISSUE */}
      {issueOpen && (
        <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.75)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1000,backdropFilter:"blur(4px)"}}>
          <div style={{background:T.bg2,border:`1px solid ${T.border}`,borderRadius:14,padding:"28px 32px",width:520}}>
            <div style={{fontSize:16,fontWeight:800,marginBottom:20}}>Tạo Vấn đề / Đề xuất</div>
            <div style={{marginBottom:14}}>
              <div style={{fontSize:15,color:T.muted,letterSpacing:"1px",marginBottom:5}}>TIÊU ĐỀ</div>
              <input value={newIssue.title} onChange={e=>setNewIssue(p=>({...p,title:e.target.value}))} placeholder="Tiêu đề vấn đề..."
                style={{width:"100%",background:"rgba(255,255,255,0.04)",border:`1px solid ${T.border}`,borderRadius:8,padding:"9px 12px",color:T.text,fontSize:17,outline:"none",boxSizing:"border-box"}}/>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginBottom:14}}>
              <div>
                <div style={{fontSize:15,color:T.muted,letterSpacing:"1px",marginBottom:5}}>LOẠI</div>
                <select value={newIssue.type} onChange={e=>setNewIssue(p=>({...p,type:e.target.value}))}
                  style={{width:"100%",background:"rgba(255,255,255,0.04)",border:`1px solid ${T.border}`,borderRadius:8,padding:"9px 12px",color:T.text,fontSize:17,outline:"none"}}>
                  {["equipment","process","inventory","finance","hr","quality"].map(t=><option key={t} value={t}>{t}</option>)}
                </select>
              </div>
              <div>
                <div style={{fontSize:15,color:T.muted,letterSpacing:"1px",marginBottom:5}}>ƯU TIÊN</div>
                <select value={newIssue.priority} onChange={e=>setNewIssue(p=>({...p,priority:e.target.value}))}
                  style={{width:"100%",background:"rgba(255,255,255,0.04)",border:`1px solid ${T.border}`,borderRadius:8,padding:"9px 12px",color:T.text,fontSize:17,outline:"none"}}>
                  <option value="high">Cao</option>
                  <option value="medium">Trung bình</option>
                  <option value="low">Thấp</option>
                </select>
              </div>
            </div>
            <div style={{marginBottom:16}}>
              <div style={{fontSize:15,color:T.muted,letterSpacing:"1px",marginBottom:5}}>MÔ TẢ CHI TIẾT</div>
              <textarea value={newIssue.desc} onChange={e=>setNewIssue(p=>({...p,desc:e.target.value}))} placeholder="Mô tả chi tiết vấn đề..." rows={4}
                style={{width:"100%",background:"rgba(255,255,255,0.04)",border:`1px solid ${T.border}`,borderRadius:8,padding:"9px 12px",color:T.text,fontSize:17,outline:"none",resize:"none",boxSizing:"border-box"}}/>
            </div>
            <div style={{display:"flex",gap:10,justifyContent:"flex-end"}}>
              <button onClick={()=>setIssueOpen(false)} style={{background:"transparent",border:`1px solid ${T.border}`,borderRadius:8,padding:"8px 16px",color:T.muted,fontSize:17,cursor:"pointer"}}>Hủy</button>
              <button onClick={doSubmitIssue} style={{background:"linear-gradient(135deg,#2563eb,#1d4ed8)",border:"none",borderRadius:8,padding:"8px 20px",color:"white",fontSize:17,cursor:"pointer",fontWeight:700}}>Gửi vấn đề →</button>
            </div>
          </div>
        </div>
      )}

      {/* ══════ AI THANK YOU MODAL ══════ */}
      {submitThanks && (
        <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.8)",display:"flex",alignItems:"center",
          justifyContent:"center",zIndex:1100,backdropFilter:"blur(6px)"}}
          onClick={e=>{if(e.target===e.currentTarget)setSubmitThanks(null);}}>
          <div style={{background:T.bg2,border:`1px solid rgba(37,99,235,0.3)`,borderRadius:18,padding:"32px 36px",
            width:540,maxHeight:"80vh",overflow:"auto",boxShadow:"0 0 60px rgba(37,99,235,0.15)"}}>
            <div style={{textAlign:"center",marginBottom:24}}>
              <div style={{fontSize:52,marginBottom:8}}>🙏</div>
              <div style={{fontSize:22,fontWeight:900,color:"white",marginBottom:4}}>
                Cảm ơn, {submitThanks.name}!
              </div>
              <div style={{fontSize:16,color:T.muted}}>
                <span style={{background:`rgba(37,99,235,0.15)`,padding:"2px 10px",borderRadius:10,
                  border:`1px solid ${T.accent}30`,color:"#60a5fa",fontWeight:700}}>{submitThanks.dept}</span>
                {" · "}Tuần {submitThanks.week}/2026{" · "}
                <span style={{color:T.green,fontWeight:700}}>{submitThanks.linesCount} chỉ số</span> đã ghi nhận
              </div>
            </div>
            <div style={{background:"rgba(255,255,255,0.03)",border:`1px solid rgba(37,99,235,0.2)`,
              borderRadius:12,padding:"18px 20px",marginBottom:20,lineHeight:1.8,fontSize:15,
              color:T.muted,whiteSpace:"pre-wrap"}}>
              <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:10}}>
                <img src={LENA_FACE} style={{width:26,height:26,borderRadius:"50%",flexShrink:0,verticalAlign:"middle"}}/>
                <span style={{fontSize:15,color:T.dim,letterSpacing:"1px",textTransform:"uppercase"}}>CIS AI Analysis</span>
              </div>
              {submitThanks.analysis}
            </div>
            <div style={{display:"flex",gap:8,marginBottom:20,flexWrap:"wrap"}}>
              {["✅ Đã ghi nhận vào CIS","⏳ Chờ CEO phê duyệt","🔒 Lưu trữ bảo mật"].map((s,i)=>(
                <div key={i} style={{padding:"6px 12px",borderRadius:8,background:"rgba(52,211,153,0.08)",
                  border:`1px solid ${T.green}25`,fontSize:15,color:T.green}}>{s}</div>
              ))}
            </div>
            <div style={{display:"flex",gap:10,justifyContent:"flex-end"}}>
              <button onClick={()=>{setSubmitThanks(null);setNav("kpi");}}
                style={{padding:"9px 18px",borderRadius:9,background:"rgba(37,99,235,0.12)",
                  border:`1px solid ${T.accent}40`,color:"#60a5fa",cursor:"pointer",fontSize:16,fontWeight:700,fontFamily:"Calibri,sans-serif"}}>
                📈 Xem KPI của tôi
              </button>
              <button onClick={()=>setSubmitThanks(null)}
                style={{padding:"9px 22px",borderRadius:9,
                  background:"linear-gradient(135deg,#2563eb,#1d4ed8)",border:"none",
                  color:"white",cursor:"pointer",fontSize:16,fontWeight:700,fontFamily:"Calibri,sans-serif"}}>
                Tiếp tục ✓
              </button>
            </div>
          </div>
        </div>
      )}
      {/* ══════ MOBILE DRAWER ══════ */}
      {isMobile && mobileNavOpen && (
        <div style={{position:"fixed",inset:0,zIndex:500,display:"flex"}}>
          <div style={{position:"absolute",inset:0,background:"rgba(0,0,0,0.6)"}}
            onClick={()=>setMobileNavOpen(false)}/>
          <div style={{position:"relative",width:260,background:T.bg1,height:"100%",
            overflowY:"auto",display:"flex",flexDirection:"column",zIndex:501,
            boxShadow:"4px 0 32px rgba(0,0,0,0.5)"}}>
            <div style={{padding:"20px 16px 14px",borderBottom:`1px solid ${T.border}`,
              display:"flex",alignItems:"center",gap:12}}>
              <div style={{width:36,height:36,background:"linear-gradient(135deg,#2563eb,#1d4ed8)",
                borderRadius:9,display:"flex",alignItems:"center",justifyContent:"center",
                fontSize:16,fontWeight:900,color:"white"}}>NS</div>
              <div>
                <div style={{fontSize:16,fontWeight:800}}>NSCA CIS</div>
                <div style={{fontSize:12,color:T.muted}}>{user.name} · {user.role}</div>
              </div>
              <button onClick={()=>setMobileNavOpen(false)}
                style={{marginLeft:"auto",background:"none",border:"none",
                  color:T.muted,fontSize:22,cursor:"pointer",padding:"4px"}}>✕</button>
            </div>
            <div style={{flex:1,padding:"8px 8px",overflowY:"auto"}}>
              {NAV_GROUPS.map(g=>(
                <div key={g.group} style={{marginBottom:4}}>
                  <div style={{fontSize:11,fontWeight:800,letterSpacing:"1.5px",color:T.dim,
                    padding:"8px 8px 4px",textTransform:"uppercase"}}>{g.group}</div>
                  {g.items.map(n=>(
                    <button key={n.id} onClick={()=>{setNav(n.id);setMobileNavOpen(false);}}
                      style={{width:"100%",display:"flex",alignItems:"center",gap:10,
                        padding:"10px 10px",borderRadius:8,
                        background:nav===n.id?"rgba(37,99,235,0.18)":"transparent",
                        color:nav===n.id?"#60a5fa":T.muted,border:"none",cursor:"pointer",
                        fontSize:15,fontWeight:nav===n.id?700:400,textAlign:"left",marginBottom:2}}>
                      <span style={{fontSize:18,flexShrink:0}}>{n.icon}</span>
                      <span style={{flex:1}}>{n.label}</span>
                      {n.badge>0&&<span style={{background:T.red,color:"white",borderRadius:10,
                        padding:"1px 6px",fontSize:12,fontWeight:800}}>{n.badge}</span>}
                    </button>
                  ))}
                  <div style={{height:1,background:T.border,margin:"4px 4px 0"}}/>
                </div>
              ))}
            </div>
            <div style={{padding:"12px 16px",borderTop:`1px solid ${T.border}`}}>
              <button onClick={()=>setUser(null)} style={{width:"100%",background:"rgba(239,68,68,0.08)",
                border:`1px solid ${T.red}30`,borderRadius:8,padding:"9px",
                color:T.red,fontSize:15,cursor:"pointer",fontWeight:700}}>
                🚪 Đăng xuất
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ══════ BOTTOM NAV (Mobile) ══════ */}
      {isMobile && (
        <div style={{position:"fixed",bottom:0,left:0,right:0,height:58,
          background:T.bg1,borderTop:`1px solid ${T.border}`,
          display:"flex",alignItems:"stretch",zIndex:100,paddingBottom:"env(safe-area-inset-bottom)"}}>
          {[
            {id:"m_dash",    icon:"🏠", label:"Tổng quan"},
            {id:"issues",    icon:"⚠️",  label:"Vấn đề",   badge:issues.filter(i=>i.status==="open").length},
            {id:"actions",   icon:"✅", label:"Actions",   badge:actions.filter(a=>a.status!=="done"&&a.deadline&&new Date(a.deadline)<new Date()).length},
            {id:"bc_status", icon:"📋", label:"Báo cáo"},
            {id:"ceo_dec",   icon:"⚖️",  label:"Quyết định"},
            {id:"m_ai",      icon:"🤖", label:"Lê Na AI"},
          ].map(n=>{
            const active = nav===n.id||(n.id==="m_dash"&&nav==="dashboard"&&isMobile);
            return (
              <button key={n.id} onClick={()=>setNav(n.id)}
                style={{flex:1,display:"flex",flexDirection:"column",alignItems:"center",
                  justifyContent:"center",gap:2,background:"none",border:"none",cursor:"pointer",
                  color:active?"#60a5fa":T.dim,padding:"6px 0",position:"relative"}}>
                {active && <div style={{position:"absolute",top:0,left:"15%",right:"15%",
                  height:2,background:T.accent,borderRadius:"0 0 3px 3px"}}/>}
                {n.id==="m_ai"
                  ? <img src={LENA_FACE} style={{width:22,height:22,borderRadius:"50%"}}/>
                  : <span style={{fontSize:19,lineHeight:1}}>{n.icon}</span>}
                <span style={{fontSize:10,fontWeight:active?700:400}}>{n.label}</span>
                {n.badge>0&&<span style={{position:"absolute",top:3,right:"14%",
                  background:T.red,color:"white",borderRadius:8,
                  padding:"0 4px",fontSize:10,fontWeight:800,minWidth:16,textAlign:"center"}}>{n.badge}</span>}
              </button>
            );
          })}
        </div>
      )}
    </div>
    </>
  );
}