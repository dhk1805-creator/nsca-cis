// ═══════════════════════════════════════════════════════════
// NSCA CIS v6.3 — PKD Dashboard
// Tabs: Tổng thể | NPP | BD | Xuất khẩu | BO | Xu hướng
// ═══════════════════════════════════════════════════════════
import { useState, useRef } from "react";
import {
  BarChart, Bar, LineChart, Line, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  ComposedChart, AreaChart, Area, Legend,
} from "recharts";

// ── Theme ──────────────────────────────────────────────────
const T = {
  bg:"#0f172a", bg1:"#1e293b",
  card:"rgba(255,255,255,0.04)", border:"rgba(255,255,255,0.08)",
  text:"#e2e8f0", muted:"#94a3b8", dim:"#475569",
  accent:"#2563eb", green:"#34d399", red:"#f87171",
  yellow:"#fbbf24", orange:"#fb923c", cyan:"#22d3ee", purple:"#a78bfa",
};
const sc = v => v>=90?T.green:v>=80?T.cyan:v>=70?T.yellow:v>=60?T.orange:T.red;
const fB = (v,dec=2) => (v==null||isNaN(v)||v===0)?"—":`${Number(v).toFixed(dec)}B`;

// ── PKD KPI Master (5 bộ phận) ────────────────────────────
const PKD_KPI_MASTER = {
  "PKD": {
    label:"PKD Tổng (Bộc Béo)", color:"#f472b6",
    kpis:[
      {code:"PKD-01",label:"DT toàn công ty",   unit:"tỷ",  dir:"H",w:20,measure:"flow", kh:[11.5,12.9,19.3,22.1,22.6,22.8,24.3,24.8,24.3,23.2,21.7,22.2]},
      {code:"PKD-02",label:"DT nhóm Thép",       unit:"tỷ",  dir:"H",w:10,measure:"flow", kh:[6.4,7.2,10.8,12.4,12.7,12.8,13.7,14.0,13.7,13.1,12.2,12.5]},
      {code:"PKD-03",label:"DT nhóm Nhôm",       unit:"tỷ",  dir:"H",w:10,measure:"flow", kh:[5.1,5.7,8.5,9.7,9.9,10.0,10.6,10.8,10.6,10.1,9.5,9.7]},
      {code:"PKD-05",label:"Gross Margin",        unit:"%",   dir:"H",w:15,measure:"rate",  kh:[33.3,33.3,33.3,33.3,33.3,33.3,33.3,33.3,33.3,33.3,33.3,33.3]},
      {code:"PKD-06",label:"Win rate BG",         unit:"%",   dir:"H",w:10,measure:"rate",  kh:[35,35,35,35,35,35,35,35,35,35,35,35]},
      {code:"PKD-07",label:"DSO công nợ",         unit:"ngày",dir:"L",w:10,measure:"stock", kh:[45,45,45,45,45,45,45,45,45,45,45,45]},
      {code:"PKD-09",label:"Khiếu nại KH",        unit:"case",dir:"L",w:10,measure:"stock", kh:[1,1,1,1,1,1,1,1,1,1,1,1]},
      {code:"PKD-16",label:"Tỷ lệ xuất khẩu",    unit:"%",   dir:"H",w:15,measure:"rate",  kh:[20,20,20,20,20,20,20,20,20,20,20,20]},
    ]
  },
  "BD": {
    label:"BD/NPP (Đức BD)", color:"#fb923c",
    kpis:[
      {code:"BD-01",label:"DT NPP tổng",          unit:"tỷ",  dir:"H",w:25,measure:"flow", kh:[7.3,8.2,12.2,14.0,14.3,14.4,15.4,15.7,15.4,14.7,13.8,14.1]},
      {code:"BD-07",label:"Báo giá mới",           unit:"BG",  dir:"H",w:15,measure:"flow", kh:[20,20,20,20,20,20,20,20,20,20,20,20]},
      {code:"BD-08",label:"Giá trị báo giá",       unit:"tỷ",  dir:"H",w:15,measure:"flow", kh:[5,5,5,5,5,5,5,5,5,5,5,5]},
      {code:"BD-09",label:"Đơn hàng mới",          unit:"ĐH",  dir:"H",w:15,measure:"flow", kh:[10,10,10,10,10,10,10,10,10,10,10,10]},
      {code:"BD-10",label:"Dự án mới",             unit:"DA",  dir:"H",w:10,measure:"flow", kh:[3,3,3,3,3,3,3,3,3,3,3,3]},
      {code:"BD-11",label:"Gặp gỡ KH",            unit:"lần", dir:"H",w:10,measure:"flow", kh:[8,8,8,8,8,8,8,8,8,8,8,8]},
      {code:"BD-13",label:"Claim NPP",             unit:"case",dir:"L",w:10,measure:"stock", kh:[2,2,2,2,2,2,2,2,2,2,2,2]},
    ]
  },
  "XK": {
    label:"Xuất khẩu (Santi)", color:"#22d3ee",
    kpis:[
      {code:"INT-01",label:"DT xuất khẩu",        unit:"tỷ",  dir:"H",w:30,measure:"flow", kh:[1.16,1.3,1.93,2.21,2.26,2.28,2.43,2.48,2.43,2.32,2.17,2.22]},
      {code:"INT-02",label:"Đơn hàng mới",         unit:"ĐH",  dir:"H",w:20,measure:"flow", kh:[2,2,2,2,2,2,2,2,2,2,2,2]},
      {code:"INT-03",label:"OTD giao hàng XK",     unit:"%",   dir:"H",w:20,measure:"rate",  kh:[95,95,95,95,95,95,95,95,95,95,95,95]},
      {code:"INT-04",label:"KH quốc tế mới",       unit:"KH",  dir:"H",w:15,measure:"flow", kh:[2,2,2,2,2,2,2,2,2,2,2,2]},
      {code:"INT-05",label:"DT thị trường Mỹ",     unit:"tỷ",  dir:"H",w:15,measure:"flow", kh:[0.35,0.39,0.58,0.66,0.68,0.68,0.73,0.74,0.73,0.70,0.65,0.67]},
    ]
  },
  "BO": {
    label:"Back Office (Chị Tâm)", color:"#a78bfa",
    kpis:[
      {code:"BO-01",label:"HĐ ký mới",            unit:"HĐ",  dir:"H",w:25,measure:"flow", kh:[4,4,4,4,4,4,4,4,4,4,4,4]},
      {code:"BO-02",label:"Giá trị HĐ ký",         unit:"tỷ",  dir:"H",w:25,measure:"flow", kh:[8,9,13,15,16,16,17,17,17,16,15,15]},
      {code:"BO-03",label:"Công nợ quá hạn",       unit:"tỷ",  dir:"L",w:20,measure:"stock", kh:[3,3,3,3,3,3,3,3,3,3,3,3]},
      {code:"BO-04",label:"Hóa đơn xuất",          unit:"HĐ",  dir:"H",w:15,measure:"flow", kh:[20,20,20,20,20,20,20,20,20,20,20,20]},
      {code:"BO-05",label:"Hồ sơ tồn đọng",        unit:"HS",  dir:"L",w:15,measure:"stock", kh:[5,5,5,5,5,5,5,5,5,5,5,5]},
    ]
  },
  "PKD-BG": {
    label:"Báo giá tổng hợp", color:"#34d399",
    kpis:[
      {code:"BG-01",label:"Tổng BG gửi ra",        unit:"BG",  dir:"H",w:30,measure:"flow", kh:[25,25,25,25,25,25,25,25,25,25,25,25]},
      {code:"BG-02",label:"GT báo giá tổng",        unit:"tỷ",  dir:"H",w:30,measure:"flow", kh:[6,6,6,6,6,6,6,6,6,6,6,6]},
      {code:"BG-03",label:"Win rate tổng",          unit:"%",   dir:"H",w:25,measure:"rate",  kh:[35,35,35,35,35,35,35,35,35,35,35,35]},
      {code:"BG-04",label:"Tỷ lệ BG → ĐH",         unit:"%",   dir:"H",w:15,measure:"rate",  kh:[40,40,40,40,40,40,40,40,40,40,40,40]},
    ]
  },
};

// ── Hàm lấy actual PKD theo dept/kpi/measure ─────────────
const pkdActualFromWk = (dept, code, wk) => {
  const m = {
    "PKD": {"PKD-01":w=>w.pkd?.dt||0,"PKD-02":w=>w.pkd?.dtThep||0,"PKD-03":w=>w.pkd?.dtNhom||0,
             "PKD-05":w=>w.pkd?.margin||0,"PKD-06":w=>w.pkd?.winRate||0,"PKD-07":w=>w.pkd?.dso||0,
             "PKD-09":w=>w.pkd?.kn||0,"PKD-16":w=>w.pkd?.xkRatio||0},
    "BD":  {"BD-01":w=>(w.bd?.dtNtk||0)+(w.bd?.dtGalaxy||0)+(w.bd?.dtImp||0)+(w.bd?.dtVnmep||0)+(w.bd?.dtMepco||0)+(w.bd?.dtTrucTiep||0),
             "BD-07":w=>w.bd?.bgTong||0,"BD-08":w=>w.bd?.gtBg||0,"BD-09":w=>w.bd?.dhMoi||0,
             "BD-10":w=>w.bd?.duAnMoi||0,"BD-11":w=>w.bd?.gapGo||0,"BD-13":w=>w.bd?.claim||0},
    "XK":  {"INT-01":w=>w.intl?.dtXk||0,"INT-02":w=>w.intl?.donMoi||0,"INT-03":w=>w.intl?.otd||0,
             "INT-04":w=>w.intl?.khMoi||0,"INT-05":w=>w.intl?.dtMy||0},
    "BO":  {"BO-01":w=>w.bo?.hdKyMoi||0,"BO-02":w=>w.bo?.gtHdKy||0,"BO-03":w=>w.bo?.congNoQuaHan||0,
             "BO-04":w=>w.bo?.hoaDonXuat||0,"BO-05":w=>w.bo?.hsTonDong||0},
    "PKD-BG":{"BG-01":w=>(w.pkd?.bgTong||0)+(w.bd?.bgTong||0),
              "BG-02":w=>(w.pkd?.gtBg||0)+(w.bd?.gtBg||0),
              "BG-03":w=>w.pkd?.winRate||0,"BG-04":w=>w.bd?.conversionRate||w.pkd?.winRate||0},
  };
  const fn = (m[dept]||{})[code];
  return fn ? fn(wk) : null;
};

const pkdGetActualMonth = (dept, code, measure, month, wkData) => {
  const wks = wkData.filter(w=>w.hasData===true && (w.thang||1)===month);
  if(!wks.length) return null;
  const vals = wks.map(w=>pkdActualFromWk(dept,code,w)).filter(v=>v!=null);
  if(!vals.length) return null;
  if(measure==="flow")  return vals.reduce((a,b)=>a+b,0);
  if(measure==="stock") return vals[vals.length-1];
  return vals.reduce((a,b)=>a+b,0)/vals.length; // rate
};

const pkdKpiScore = (actual, target, dir) => {
  if(actual==null||target==null||target===0) return null;
  const ratio = dir==="L" ? target/actual : actual/target;
  return Math.min(120, Math.max(0, Math.round(ratio*100)));
};

const pkdDeptScore = (dept, month, wkData) => {
  const d = PKD_KPI_MASTER[dept];
  if(!d) return null;
  const wks = wkData.filter(w=>w.hasData===true && (w.thang||1)===month);
  if(!wks.length) return null;
  let totalW=0, totalWS=0;
  d.kpis.forEach(k=>{
    const act = pkdGetActualMonth(dept, k.code, k.measure, month, wkData);
    const s = pkdKpiScore(act, k.kh[month-1], k.dir);
    if(s!=null){ totalWS += s*k.w; totalW += k.w; }
  });
  return totalW>0 ? Math.round(totalWS/totalW) : null;
};

const pkdPeriodScore = (dept, months, wkData) => {
  const scores = months.map(m=>pkdDeptScore(dept,m,wkData)).filter(s=>s!=null);
  return scores.length ? Math.round(scores.reduce((a,b)=>a+b,0)/scores.length) : null;
};

// ── NPP thực tế ────────────────────────────────────────────
const NPP_LIST = [
  {id:"ntk",    name:"NTK",          mau:"#3b82f6", key:"dtNtk",      kh:3.5},
  {id:"galaxy", name:"GALAXY",       mau:"#f59e0b", key:"dtGalaxy",   kh:1.5},
  {id:"imp",    name:"IMP",          mau:"#10b981", key:"dtImp",      kh:1.0},
  {id:"vnmep",  name:"VNMEP",        mau:"#8b5cf6", key:"dtVnmep",    kh:0.8},
  {id:"mepco",  name:"MEPCO",        mau:"#ec4899", key:"dtMepco",    kh:0.5},
  {id:"tt",     name:"KH Trực tiếp", mau:"#22d3ee", key:"dtTrucTiep", kh:1.0},
];

const XK_MARKETS = [
  {id:"us",  name:"🇺🇸 Mỹ",         color:"#3b82f6", share:0.30},
  {id:"ph",  name:"🇵🇭 Philippines", color:"#f59e0b", share:0.20},
  {id:"id",  name:"🇮🇩 Indonesia",   color:"#ef4444", share:0.18},
  {id:"my",  name:"🇲🇾 Malaysia",    color:"#10b981", share:0.15},
  {id:"kh",  name:"🇰🇭 Cambodia",    color:"#8b5cf6", share:0.10},
  {id:"oth", name:"🌍 Khác",         color:"#6b7280", share:0.07},
];

const KH_BY_MONTH = [11.545,12.945,19.263,22.063,22.563,22.820,24.313,24.813,24.313,23.205,21.705,22.205];

// ── Components (định nghĩa BÊN NGOÀI component chính) ──────
function Card({label,val,sub,c,big}) {
  return (
    <div style={{background:T.card,border:`1px solid ${T.border}`,borderRadius:10,padding:"12px 14px"}}>
      <div style={{fontSize:11,color:T.muted}}>{label}</div>
      <div style={{fontSize:big?26:20,fontWeight:900,color:c||T.text,margin:"3px 0 2px"}}>{val||"—"}</div>
      {sub&&<div style={{fontSize:11,color:T.dim}}>{sub}</div>}
    </div>
  );
}

function ProgRow({label,val,kh,c}) {
  const p = kh>0?Math.min(120,Math.round((val||0)/kh*100)):0;
  return (
    <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:8}}>
      <span style={{fontSize:12,color:T.muted,minWidth:115}}>{label}</span>
      <div style={{flex:1,background:"rgba(255,255,255,0.05)",borderRadius:4,height:7,overflow:"hidden"}}>
        <div style={{width:`${Math.min(100,p)}%`,background:c||T.accent,height:"100%",borderRadius:4,transition:"width .5s"}}/>
      </div>
      <span style={{fontSize:13,fontWeight:800,color:c||T.accent,width:55,textAlign:"right"}}>{fB(val)}</span>
      <span style={{fontSize:11,color:sc(p),width:38,textAlign:"right"}}>{p>0?`${p}%`:""}</span>
    </div>
  );
}

function Tip({active,payload,label}) {
  if(!active||!payload?.length) return null;
  return (
    <div style={{background:T.bg1,border:`1px solid ${T.border}`,borderRadius:8,padding:"10px 14px",fontSize:12}}>
      <div style={{fontWeight:700,color:T.accent,marginBottom:4}}>{label}</div>
      {payload.map((p,i)=>(
        <div key={i} style={{color:p.color||"#fff",marginBottom:2}}>
          {p.name}: <b>{typeof p.value==="number"?p.value.toFixed(2):p.value||"—"}</b>
        </div>
      ))}
    </div>
  );
}

function Section({title,children}) {
  return (
    <div style={{background:T.card,border:`1px solid ${T.border}`,borderRadius:10,padding:14}}>
      {title&&<div style={{fontSize:13,fontWeight:700,color:"#fff",marginBottom:12}}>{title}</div>}
      {children}
    </div>
  );
}

function PersonHeader({avatar,color,name,role}) {
  return (
    <div style={{background:T.card,border:`1px solid ${color}44`,borderRadius:10,padding:"12px 16px",display:"flex",alignItems:"center",gap:10}}>
      <div style={{width:36,height:36,borderRadius:"50%",background:`${color}22`,border:`1.5px solid ${color}55`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:15,fontWeight:900,color:color}}>{avatar}</div>
      <div>
        <div style={{fontSize:14,fontWeight:800,color:"#fff"}}>{name}</div>
        <div style={{fontSize:12,color:T.muted}}>{role}</div>
      </div>
    </div>
  );
}

function KpiMini({label,val,sub,pct,hasData}) {
  return (
    <div style={{background:"rgba(255,255,255,0.03)",borderRadius:8,padding:"10px 12px",border:`1px solid ${T.border}`}}>
      <div style={{fontSize:11,color:T.muted}}>{label}</div>
      <div style={{fontSize:17,fontWeight:900,color:hasData?sc(pct||0):T.dim,margin:"4px 0 2px"}}>{val||"—"}</div>
      <div style={{fontSize:11,color:T.dim}}>{sub}</div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════
export default function PKDDashboard({weeklyData=[],wk=1,userDept="PKD",issues=[],actions=[]}) {
  const defaultTab = userDept==="BO"?"bo":userDept==="Int. Dept"?"xk":userDept==="PKD-BD"?"bd":"plan";
  const [tab,setTab]     = useState(defaultTab);
  const [selNPP,setSelNPP] = useState(null);
  const [aiMsgs,setAiMsgs]   = useState([]);
  const [aiInput,setAiInput] = useState("");
  const [aiLoading,setAiLoading] = useState(false);
  const aiEndRef = useRef(null);
  const [selDept, setSelDept] = useState("PKD");

  const callPKDAI = async (question) => {
    if(!question.trim()) return;
    const userMsg = {role:"user", content:question};
    setAiMsgs(prev=>[...prev, userMsg]);
    setAiInput("");
    setAiLoading(true);
    try {
      // ── Build context đầy đủ ──────────────────────────────────
      const nppLines = NPP_LIST.map(n=>{
        const act = realWks.reduce((s,w)=>s+(w.bd?.[n.key]||0),0);
        const p = n.kh>0?Math.round(act/n.kh*100):0;
        const trend = realWks.length>=2 ? (
          (realWks[realWks.length-1].bd?.[n.key]||0) > (realWks[realWks.length-2].bd?.[n.key]||0) ? "↑" : "↓"
        ) : "";
        return `  ${n.name}: ${act>0?act.toFixed(2)+"B ("+p+"%) "+trend:" chưa có"}`;
      }).join("\n");

      // Lịch sử DT 6 tuần gần nhất
      const dtHistory = realWks.slice(-6).map(w =>
        `T${w.w}: ${w.pkd?.dt ? w.pkd.dt.toFixed(2)+"B" : "–"}${w.bd?.dtNtk ? " NTK:"+w.bd.dtNtk+"B" : ""}${w.intl?.dtXk ? " XK:"+w.intl.dtXk+"B" : ""}`
      ).join(" → ") || "Chưa có lịch sử";

      // Lịch sử BG & ĐH 6 tuần (Đức BD)
      const bdHistory = realWks.slice(-6).map(w =>
        `T${w.w}: ${w.bd?.bgTong ? w.bd.bgTong+"BG/"+fB(w.bd.gtBg) : "–"} ${w.bd?.dhMoi ? w.bd.dhMoi+"ĐH" : ""}`
      ).join(" → ") || "Chưa có";

      // Issues PKD đang mở
      const pkdIssues = issues
        .filter(i => i.status==="pending" && ["PKD","PKD-BD","BO","Int. Dept"].includes(i.dept))
        .slice(0,6)
        .map(i => `  [${i.priority==="high"?"🔴":i.priority==="medium"?"🟡":"🟢"}] ${i.dept}: ${i.title}`)
        .join("\n") || "  Không có";

      // Action items PKD chưa xong
      const now = new Date();
      const pkdActions = actions
        .filter(a => a.status!=="done" && ["PKD","PKD-BD","BO","Int. Dept"].includes(a.dept))
        .slice(0,6)
        .map(a => {
          const dl = a.deadline ? new Date(a.deadline) : null;
          const flag = dl && dl < now ? "⚠️QH " : "";
          return `  ${flag}[${a.status}] ${a.owner||"?"}: ${a.title}${dl?" →"+a.deadline:""}`;
        })
        .join("\n") || "  Không có";

      const context = `Em là Đào Thị Lê Na - CIS AI Assistant của NSCA, chuyên về phòng Kinh doanh (PKD).
XƯNG HÔ: Em xưng "em". Người dùng: ${userDept} — PKD Team.

════════════════════════════════════
PKD DASHBOARD | Tuần ${wk}/2026 | Tháng ${curMonth} | KH: ${khThang}B
════════════════════════════════════

▌PKD (Bộc Béo) — Trưởng phòng
• DT tổng: ${totDt>0?totDt.toFixed(2)+"B ("+pctKH+"% KH)":"chưa có"}
• Win rate: ${avgWinRate>0?avgWinRate.toFixed(1)+"%":"–"} | Margin: ${avgMargin>0?avgMargin.toFixed(1)+"%":"–"} | DSO: ${avgDso>0?avgDso.toFixed(0)+" ngày":"–"}
• DT ngành: Thép ${fB(totDtThep)} | Nhôm ${fB(totDtNhom)} | Van EI ${fB(totDtVanEi)} | CG ${fB(totDtCuaGio)}

▌BD/NPP (Đức BD) — Nội địa
${nppLines}
• Claim tồn: ${lastClaim||0} case
• BG: ${totBdBg>0?totBdBg+" BG (GT:"+fB(totBdGtBg)+")":"chưa có"} | ĐH mới: ${totBdDh||0} | DA mới: ${totBdDa||0}
• Gặp NPP/CĐT: ${totGapGo||0} cuộc | Spec-in: ${totSpecIn||0} DA

▌XUẤT KHẨU (Santi — Int. Dept)
• DT XK: ${totDtXk>0?totDtXk.toFixed(2)+"B":"chưa có"} | Đơn mới: ${totDonXk||0} | OTD: ${avgOtdXk>0?avgOtdXk.toFixed(1)+"%":"–"}
• KH QT mới: ${totKhMoiXk||0} | DT Mỹ: ${fB(totDtMy)}

▌BACK OFFICE (Chị Tâm)
• HĐ ký: ${lastHdKy||0} HĐ (GT: ${fB(lastGtHd)}) | Công nợ QH: ${fB(lastCongNo)}
• HĐ VAT: ${lastHdVat||0} | Hồ sơ tồn: ${lastHsTon||0} HS

▌LỊCH SỬ DT (6 tuần)
${dtHistory}

▌LỊCH SỬ BG & ĐH BD (6 tuần)
${bdHistory}

▌ISSUES PKD ĐANG MỞ
${pkdIssues}

▌ACTION ITEMS PKD CHƯA XONG
${pkdActions}
════════════════════════════════════

NHIỆM VỤ: Tư vấn, phân tích, trả lời câu hỏi về PKD team dựa trên data đầy đủ ở trên.
Trả lời TÓM TẮT CÔ ĐỌNG — ưu tiên số liệu thực, nhận xét, đề xuất hành động cụ thể.
Tiếng Việt. Xưng "em".`;

      const history = [...aiMsgs, userMsg].slice(-10);
      const API_URL = (typeof import.meta !== "undefined" && import.meta.env?.VITE_API_URL) || "https://nsca-cis.vercel.app";
      const res = await fetch(`${API_URL}/api/ai`, {
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify({
          model:"claude-sonnet-4-5",
          max_tokens:800,
          system: context,
          messages: history,
        })
      });
      if(!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      const reply = data.content?.[0]?.text || "Em không thể phân tích lúc này.";
      setAiMsgs(prev=>[...prev, {role:"assistant", content:reply}]);
    } catch(e) {
      setAiMsgs(prev=>[...prev, {role:"assistant", content:"Lỗi kết nối AI: "+e.message}]);
    }
    setAiLoading(false);
    setTimeout(()=>aiEndRef.current?.scrollIntoView({behavior:"smooth"}),100);
  };

  const realWks = weeklyData.filter(w=>w.hasData===true);
  const sum  = (src,key) => realWks.reduce((s,w)=>s+(w[src]?.[key]||0),0);
  const avg  = (src,key) => realWks.length>0?sum(src,key)/realWks.length:0;
  const last = (src,key) => realWks.length>0?(realWks[realWks.length-1][src]?.[key]||0):0;

  // PKD (Bộc Béo)
  const totDt      = sum("pkd","dt");
  const totDtThep  = sum("pkd","dtThep");
  const totDtNhom  = sum("pkd","dtNhom");
  const totDtVanEi = sum("pkd","dtVanEi");
  const totDtCuaGio= sum("pkd","dtCuaGio");
  const totDtVcd   = sum("pkd","dtVcd");
  const totDtVav   = sum("pkd","dtVav");
  const totDtTamNan= sum("pkd","dtTamNan");
  const avgWinRate = avg("pkd","winRate");
  const avgMargin  = avg("pkd","margin");
  const avgDso     = avg("pkd","dso");
  const avgXkRatio = avg("pkd","xkRatio");

  // BD (Đức BD)
  const nppTotals  = NPP_LIST.map(n=>({...n,actual:sum("bd",n.key)}));
  const totNppAct  = nppTotals.reduce((s,n)=>s+n.actual,0);
  const totBdBg    = sum("bd","bgTong");
  const totBdGtBg  = sum("bd","gtBg");
  const totBdDh    = sum("bd","dhMoi");
  const totBdDa    = sum("bd","duAnMoi");
  const totGapGo   = sum("bd","gapGo");
  const totSpecIn  = sum("bd","specIn");
  const lastClaim  = last("bd","claim");

  // XK (Santi)
  const totDtXk    = sum("intl","dtXk");
  const totDonXk   = sum("intl","donMoi");
  const avgOtdXk   = avg("intl","otd");
  const totKhMoiXk = sum("intl","khMoi");
  const totDtMy    = sum("intl","dtMy");

  // BO (Tâm)
  const lastHdKy   = last("bo","hdKyMoi");
  const lastGtHd   = last("bo","gtHdKy");
  const lastCongNo = last("bo","congNoQuaHan");
  const lastHdVat  = last("bo","hoaDonXuat");
  const lastHsTon  = last("bo","hsTonDong");

  const curMonth = wk<=4?1:wk<=9?2:wk<=13?3:wk<=17?4:wk<=22?5:wk<=26?6:wk<=30?7:wk<=35?8:wk<=39?9:wk<=43?10:wk<=48?11:12;
  const khThang  = KH_BY_MONTH[curMonth-1]||0;
  const pctKH    = khThang>0?Math.round(totDt/khThang*100):0;
  const hasData  = realWks.length>0;
  const wksN     = Math.max(realWks.length,1);

  return (
    <div style={{padding:16,fontFamily:"Calibri,sans-serif",color:T.text}}>

      {/* HEADER */}
      <div style={{marginBottom:14}}>
        <div style={{fontSize:20,fontWeight:900,color:"#fff"}}>📊 PKD — Dashboard Kinh Doanh 2026</div>
        <div style={{fontSize:12,color:T.muted,marginTop:2}}>
          {hasData?`${realWks.length} tuần · T${wk} · Tháng ${curMonth}/2026`:"⚠️ Chưa có dữ liệu"}
        </div>
      </div>

      {/* KPI TỔNG QUAN */}
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(140px,1fr))",gap:10,marginBottom:14}}>
        <Card label="DT Thực Tế"   val={totDt>0?`${totDt.toFixed(2)}B`:"—"}     sub={`KH T${curMonth}: ${khThang}B`} c={sc(pctKH)} big />
        <Card label="% Hoàn Thành" val={totDt>0?`${pctKH}%`:"—"}                sub={pctKH>=100?"✅ Đạt":"⚠️ Chưa"} c={sc(pctKH)} />
        <Card label="BG (Đức BD)"  val={totBdBg>0?`${totBdBg} BG`:"—"}          sub={`GT: ${fB(totBdGtBg)}`}         c={T.cyan} />
        <Card label="ĐH (Đức BD)"  val={totBdDh>0?`${totBdDh} ĐH`:"—"}          sub="Nội địa"                        c={T.green} />
        <Card label="Claim Tồn"    val={`${lastClaim||0} case`}                  sub={lastClaim>2?"⚠️ Vượt":"✅ OK"}  c={lastClaim>2?T.red:T.green} />
        <Card label="DT Xuất Khẩu" val={totDtXk>0?`${totDtXk.toFixed(2)}B`:"—"} sub="Santi"                          c={T.green} />
        <Card label="HĐ BO Ký"     val={lastHdKy>0?`${lastHdKy} HĐ`:"—"}        sub={`GT: ${fB(lastGtHd)}`}          c={T.purple} />
      </div>

      {/* TABS */}
      <div style={{display:"flex",gap:6,marginBottom:14,flexWrap:"wrap"}}>
        {[
          {id:"plan", label:"📋 Tổng thể"},
          {id:"npp",  label:"🏪 NPP Nội địa"},
          {id:"bd",   label:"🎯 BD"},
          {id:"xk",   label:"✈️ Xuất khẩu"},
          {id:"bo",   label:"📄 BO"},
          {id:"trend",label:"📈 Xu hướng"},
          {id:"ai",   label:"🤖 Đào Thị Lê Na - AI Tư vấn"},
          {id:"score",label:"🏆 Chấm điểm KPI"},
        ].map(t=>(
          <button key={t.id} onClick={()=>setTab(t.id)} style={{
            padding:"7px 16px",borderRadius:7,border:"none",cursor:"pointer",fontSize:13,
            background:tab===t.id?T.accent:"rgba(255,255,255,0.06)",
            color:tab===t.id?"#fff":T.muted,fontWeight:tab===t.id?700:400,
          }}>{t.label}</button>
        ))}
      </div>

      {/* ─── PLAN ─── */}
      {tab==="plan" && (
        <div style={{display:"grid",gap:14}}>
          <Section title={`Doanh Thu Ngành Hàng — Lũy Kế T${wk}/2026`}>
            <ProgRow label="Van EI/E"     val={totDtVanEi}  kh={5.705} c="#f472b6" />
            <ProgRow label="Cửa gió"      val={totDtCuaGio} kh={4.605} c={T.green} />
            <ProgRow label="Van cơ khí"   val={totDtVcd}    kh={2.399} c={T.orange} />
            <ProgRow label="TMC/VAV/CAV"  val={totDtVav}    kh={0.502} c={T.cyan} />
            <ProgRow label="Tấm nan/EGG"  val={totDtTamNan} kh={1.183} c={T.purple} />
          </Section>

          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14}}>
            <Section title="Nội Địa vs Xuất Khẩu">
              {totDt>0?(
                <ResponsiveContainer width="100%" height={190}>
                  <PieChart>
                    <Pie data={[
                      {name:"Nội địa",   value:Math.max(0,totDt-totDt*(avgXkRatio/100))},
                      {name:"Xuất khẩu", value:Math.max(0,totDt*(avgXkRatio/100))},
                    ]} dataKey="value" cx="50%" cy="50%" outerRadius={70} innerRadius={35}
                      label={({name,percent})=>`${name}: ${(percent*100).toFixed(0)}%`} labelLine={false} fontSize={11}>
                      <Cell fill={T.accent}/><Cell fill={T.green}/>
                    </Pie>
                    <Tooltip formatter={v=>`${Number(v).toFixed(2)}B`}/>
                  </PieChart>
                </ResponsiveContainer>
              ):(
                <div style={{height:190,display:"flex",alignItems:"center",justifyContent:"center",color:T.dim,fontSize:13}}>Chưa có dữ liệu</div>
              )}
            </Section>
            <Section title="KH vs Thực Hiện Theo Tháng">
              <ResponsiveContainer width="100%" height={190}>
                <BarChart data={[1,2,3,4].map(m=>{
                  const mw=weeklyData.filter(w=>w.hasData&&(m===1?w.w<=4:m===2?(w.w>=5&&w.w<=9):m===3?(w.w>=10&&w.w<=13):(w.w>=14&&w.w<=17)));
                  return {month:`T${m}`,KH:KH_BY_MONTH[m-1],TH:mw.reduce((s,w)=>s+(w.pkd?.dt||0),0)};
                })}>
                  <CartesianGrid strokeDasharray="3 3" stroke={T.border}/>
                  <XAxis dataKey="month" tick={{fill:T.muted,fontSize:11}}/>
                  <YAxis tick={{fill:T.muted,fontSize:10}} tickFormatter={v=>`${v}B`}/>
                  <Tooltip content={<Tip/>}/>
                  <Legend formatter={v=><span style={{color:"#fff",fontSize:11}}>{v}</span>}/>
                  <Bar dataKey="KH" fill="rgba(255,255,255,0.1)" radius={[4,4,0,0]}/>
                  <Bar dataKey="TH" fill={T.accent} radius={[4,4,0,0]}/>
                </BarChart>
              </ResponsiveContainer>
            </Section>
          </div>

          <Section title="KPI Thương Mại">
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(155px,1fr))",gap:10}}>
              {[
                {label:"Gross Margin", val:`${avgMargin.toFixed(1)}%`,  kh:"≥33.3%", pct:avgMargin/33.3*100},
                {label:"Win Rate BG",  val:`${avgWinRate.toFixed(1)}%`, kh:"≥35%",   pct:avgWinRate/35*100},
                {label:"DSO",          val:`${avgDso.toFixed(0)} ngày`, kh:"≤45",    pct:avgDso>0?(45/Math.max(avgDso,1))*100:0},
                {label:"Tỷ lệ XK",    val:`${avgXkRatio.toFixed(1)}%`, kh:"≥20%",   pct:avgXkRatio/20*100},
              ].map((k,i)=>(
                <div key={i} style={{background:"rgba(255,255,255,0.03)",borderRadius:8,padding:"10px 12px",border:`1px solid ${T.border}`}}>
                  <div style={{fontSize:11,color:T.muted}}>{k.label}</div>
                  <div style={{fontSize:18,fontWeight:900,color:hasData?sc(k.pct||0):T.dim,margin:"4px 0 2px"}}>{hasData?k.val:"—"}</div>
                  <div style={{fontSize:11,color:T.dim}}>KH: {k.kh}</div>
                </div>
              ))}
            </div>
          </Section>
        </div>
      )}

      {/* ─── NPP ─── */}
      {tab==="npp" && (
        <div style={{display:"grid",gap:14}}>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(140px,1fr))",gap:10}}>
            {nppTotals.map((n,i)=>{
              const p=n.kh>0?Math.round(n.actual/n.kh*100):0;
              return(
                <div key={i} onClick={()=>setSelNPP(selNPP?.id===n.id?null:n)}
                  style={{background:T.card,border:`2px solid ${selNPP?.id===n.id?n.mau:T.border}`,borderRadius:10,padding:"12px 14px",cursor:"pointer"}}>
                  <div style={{display:"flex",alignItems:"center",gap:6,marginBottom:4}}>
                    <div style={{width:8,height:8,borderRadius:"50%",background:n.mau}}/>
                    <span style={{fontSize:12,color:T.muted,fontWeight:600}}>{n.name}</span>
                  </div>
                  <div style={{fontSize:20,fontWeight:900,color:n.actual>0?sc(p):T.dim}}>{n.actual>0?`${n.actual.toFixed(2)}B`:"—"}</div>
                  <div style={{fontSize:11,color:T.dim}}>KH: {n.kh.toFixed(2)}B{n.actual>0?` · ${p}%`:""}</div>
                </div>
              );
            })}
          </div>

          {!hasData&&(
            <div style={{padding:"12px 16px",background:"rgba(251,191,36,0.08)",border:`1px solid ${T.yellow}40`,borderRadius:8,fontSize:13,color:T.yellow}}>
              ⚠️ Đức BD chưa nộp KPI tuần — cần điền DT từng kênh NPP trong form báo cáo (dept: PKD-BD).
            </div>
          )}

          <Section title={`Chi Tiết DT Theo Kênh NPP — Lũy Kế T${wk}/2026`}>
            <div style={{overflowX:"auto"}}>
              <table style={{width:"100%",borderCollapse:"collapse",fontSize:13,minWidth:480}}>
                <thead>
                  <tr style={{borderBottom:`1px solid ${T.border}`}}>
                    {["Kênh","KH Tháng","DT Thực","% KH","Trend"].map((h,i)=>(
                      <th key={i} style={{textAlign:i===0?"left":"right",padding:"8px 10px",color:T.muted,fontWeight:600,fontSize:12}}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {nppTotals.map(n=>{
                    const p=n.kh>0?Math.round(n.actual/n.kh*100):0;
                    const wv=realWks.map(w=>w.bd?.[n.key]||0);
                    const trend=wv.length>=2?(wv[wv.length-1]>wv[wv.length-2]?"↑":"↓"):"—";
                    return(
                      <tr key={n.id} onClick={()=>setSelNPP(selNPP?.id===n.id?null:n)}
                        style={{borderBottom:`1px solid ${T.border}22`,cursor:"pointer",background:selNPP?.id===n.id?"rgba(37,99,235,0.08)":"transparent"}}>
                        <td style={{padding:"10px 10px"}}>
                          <div style={{display:"flex",alignItems:"center",gap:8}}>
                            <div style={{width:9,height:9,borderRadius:"50%",background:n.mau}}/>
                            <span style={{color:"#fff",fontWeight:700}}>{n.name}</span>
                          </div>
                        </td>
                        <td style={{padding:"10px 10px",textAlign:"right",color:T.muted}}>{n.kh.toFixed(2)}B</td>
                        <td style={{padding:"10px 10px",textAlign:"right",color:"#fff",fontWeight:700}}>{n.actual>0?`${n.actual.toFixed(2)}B`:"—"}</td>
                        <td style={{padding:"10px 10px",textAlign:"right"}}>
                          {n.actual>0?<span style={{background:sc(p)+"22",color:sc(p),borderRadius:20,padding:"2px 10px",fontWeight:900}}>{p}%</span>:<span style={{color:T.dim}}>—</span>}
                        </td>
                        <td style={{padding:"10px 10px",textAlign:"right",color:trend==="↑"?T.green:trend==="↓"?T.red:T.dim,fontWeight:900,fontSize:18}}>{trend}</td>
                      </tr>
                    );
                  })}
                </tbody>
                <tfoot>
                  <tr style={{borderTop:`2px solid ${T.border}`}}>
                    <td style={{padding:"8px 10px",fontWeight:900,color:"#fff"}}>TỔNG NPP</td>
                    <td style={{padding:"8px 10px",textAlign:"right",color:T.muted}}>{NPP_LIST.reduce((s,n)=>s+n.kh,0).toFixed(2)}B</td>
                    <td style={{padding:"8px 10px",textAlign:"right",color:"#fff",fontWeight:900}}>{totNppAct>0?`${totNppAct.toFixed(2)}B`:"—"}</td>
                    <td colSpan={2} style={{padding:"8px 10px",textAlign:"right"}}>
                      {totNppAct>0&&<span style={{color:sc(Math.round(totNppAct/NPP_LIST.reduce((s,n)=>s+n.kh,0)*100)),fontWeight:900}}>{Math.round(totNppAct/NPP_LIST.reduce((s,n)=>s+n.kh,0)*100)}%</span>}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </Section>

          {selNPP&&realWks.length>0&&(
            <Section title={`📊 ${selNPP.name} — DT theo tuần`}>
              <ResponsiveContainer width="100%" height={180}>
                <BarChart data={realWks.map(w=>({wk:`T${w.w}`,"DT Thực":w.bd?.[selNPP.key]||0,"KH/tuần":selNPP.kh/4}))}>
                  <CartesianGrid strokeDasharray="3 3" stroke={T.border}/>
                  <XAxis dataKey="wk" tick={{fill:T.muted,fontSize:11}}/>
                  <YAxis tick={{fill:T.muted,fontSize:10}} tickFormatter={v=>`${v}B`}/>
                  <Tooltip content={<Tip/>}/>
                  <Legend formatter={v=><span style={{color:"#fff",fontSize:11}}>{v}</span>}/>
                  <Bar dataKey="DT Thực" fill={selNPP.mau} radius={[4,4,0,0]}/>
                  <Bar dataKey="KH/tuần" fill={`${selNPP.mau}44`} radius={[4,4,0,0]}/>
                </BarChart>
              </ResponsiveContainer>
            </Section>
          )}

          {totNppAct>0&&(
            <Section title="Cơ Cấu DT Theo Kênh">
              <ResponsiveContainer width="100%" height={220}>
                <PieChart>
                  <Pie data={nppTotals.filter(n=>n.actual>0).map(n=>({name:n.name,value:n.actual}))}
                    dataKey="value" cx="50%" cy="50%" outerRadius={85} innerRadius={40}
                    label={({name,percent})=>`${name}: ${(percent*100).toFixed(0)}%`} fontSize={11}>
                    {nppTotals.filter(n=>n.actual>0).map((n,i)=><Cell key={i} fill={n.mau}/>)}
                  </Pie>
                  <Tooltip formatter={v=>`${Number(v).toFixed(2)}B`}/>
                </PieChart>
              </ResponsiveContainer>
            </Section>
          )}
        </div>
      )}

      {/* ─── BD ─── */}
      {tab==="bd" && (
        <div style={{display:"grid",gap:14}}>
          <PersonHeader avatar="ĐB" color="#fb923c" name="Anh Đức BD — Business Development" role="Phát triển thị trường nội địa · Chăm sóc & hỗ trợ NPP · Báo giá & đơn hàng"/>

          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(145px,1fr))",gap:10}}>
            {nppTotals.map((n,i)=>{
              const p=n.kh>0?Math.round(n.actual/n.kh*100):0;
              return <KpiMini key={i} label={`DT ${n.name}`} val={n.actual>0?`${n.actual.toFixed(2)}B`:"—"} sub={`KH: ${n.kh.toFixed(2)}B/tháng`} pct={p} hasData={hasData}/>;
            })}
            <KpiMini label="Báo Giá (số)"   val={totBdBg>0?`${totBdBg} BG`:"—"}  sub={`GT: ${fB(totBdGtBg)}`}       pct={totBdBg/wksN/20*100}  hasData={hasData}/>
            <KpiMini label="Đơn Hàng Nhận"  val={totBdDh>0?`${totBdDh} ĐH`:"—"}  sub="KH: 20 ĐH/tuần"              pct={totBdDh/wksN/20*100}  hasData={hasData}/>
            <KpiMini label="Dự Án BD Mới"   val={totBdDa>0?`${totBdDa} DA`:"—"}  sub="KH: 8 DA/tuần"               pct={totBdDa/wksN/8*100}   hasData={hasData}/>
            <KpiMini label="Gặp NPP/CĐT"    val={totGapGo>0?`${totGapGo} cuộc`:"—"} sub="KH: 5 cuộc/tuần"         pct={totGapGo/wksN/5*100}  hasData={hasData}/>
            <KpiMini label="Spec-In Mới"    val={totSpecIn>0?`${totSpecIn} DA`:"—"} sub="KH: 3 DA/tuần"            pct={totSpecIn/wksN/3*100} hasData={hasData}/>
            <KpiMini label="Claim Tồn Đọng" val={`${lastClaim||0} case`}          sub="KH ≤2 case"                  pct={lastClaim>0?(2/lastClaim)*100:100} hasData={hasData}/>
          </div>

          {hasData?(
            <>
              <Section title="Hoạt Động BD & Bán Hàng Theo Tuần">
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={realWks.map(w=>({wk:`T${w.w}`,"Gặp CĐT":w.bd?.gapGo||0,"Spec-in":w.bd?.specIn||0,"Đơn mới":w.bd?.dhMoi||0,"DA mới":w.bd?.duAnMoi||0}))}>
                    <CartesianGrid strokeDasharray="3 3" stroke={T.border}/>
                    <XAxis dataKey="wk" tick={{fill:T.muted,fontSize:11}}/>
                    <YAxis tick={{fill:T.muted,fontSize:10}}/>
                    <Tooltip content={<Tip/>}/>
                    <Legend formatter={v=><span style={{color:"#fff",fontSize:11}}>{v}</span>}/>
                    <Bar dataKey="Gặp CĐT" fill={T.accent} radius={[4,4,0,0]}/>
                    <Bar dataKey="Spec-in"  fill={T.green}  radius={[4,4,0,0]}/>
                    <Bar dataKey="Đơn mới" fill={T.cyan}   radius={[4,4,0,0]}/>
                    <Bar dataKey="DA mới"  fill={T.purple} radius={[4,4,0,0]}/>
                  </BarChart>
                </ResponsiveContainer>
              </Section>

              <Section title="GT Báo Giá & Đơn Hàng Theo Tuần">
                <ResponsiveContainer width="100%" height={160}>
                  <BarChart data={realWks.map(w=>({wk:`T${w.w}`,"GT BG (tỷ)":w.bd?.gtBg||0,"Đơn hàng":w.bd?.dhMoi||0,"DA mới":w.bd?.duAnMoi||0}))}>
                    <CartesianGrid strokeDasharray="3 3" stroke={T.border}/>
                    <XAxis dataKey="wk" tick={{fill:T.muted,fontSize:11}}/>
                    <YAxis yAxisId="left" tick={{fill:T.muted,fontSize:10}} tickFormatter={v=>`${v}B`}/>
                    <YAxis yAxisId="right" orientation="right" tick={{fill:T.muted,fontSize:10}}/>
                    <Tooltip content={<Tip/>}/>
                    <Legend formatter={v=><span style={{color:"#fff",fontSize:11}}>{v}</span>}/>
                    <Bar yAxisId="left"  dataKey="GT BG (tỷ)" fill={T.yellow} radius={[4,4,0,0]}/>
                    <Bar yAxisId="right" dataKey="Đơn hàng"   fill={T.green}  radius={[4,4,0,0]}/>
                    <Bar yAxisId="right" dataKey="DA mới"     fill={T.accent} radius={[4,4,0,0]}/>
                  </BarChart>
                </ResponsiveContainer>
              </Section>
            </>
          ):(
            <div style={{padding:"30px",textAlign:"center",color:T.dim,fontSize:13,background:T.card,borderRadius:10,border:`1px solid ${T.border}`}}>
              Anh Đức BD cần nộp báo cáo (dept: PKD-BD) để hiển thị data
            </div>
          )}
        </div>
      )}

      {/* ─── XK ─── */}
      {tab==="xk" && (
        <div style={{display:"grid",gap:14}}>
          <PersonHeader avatar="AS" color="#34d399" name="Anh Santi — International Department" role="Bán hàng & phát triển thị trường quốc tế"/>

          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(150px,1fr))",gap:10}}>
            <KpiMini label="DT Xuất Khẩu"     val={totDtXk>0?`${totDtXk.toFixed(2)}B`:"—"}     sub="Tổng lũy kế"      pct={totDtXk/(1.93*wksN)*100} hasData={hasData}/>
            <KpiMini label="Đơn Hàng XK Mới"  val={totDonXk>0?`${totDonXk} đơn`:"—"}           sub="KH: 3 đơn/tuần"   pct={totDonXk/wksN/3*100}     hasData={hasData}/>
            <KpiMini label="OTD Xuất Khẩu"    val={avgOtdXk>0?`${avgOtdXk.toFixed(1)}%`:"—"}   sub="KH ≥95%"          pct={avgOtdXk/95*100}         hasData={hasData}/>
            <KpiMini label="KH QT Mới"        val={totKhMoiXk>0?`${totKhMoiXk} KH`:"—"}        sub="KH: 2 KH/tuần"    pct={totKhMoiXk/wksN/2*100}   hasData={hasData}/>
            <KpiMini label="DT Thị Trường Mỹ" val={totDtMy>0?`${totDtMy.toFixed(2)}B`:"—"}     sub="~30% tổng XK"     pct={totDtXk>0?totDtMy/totDtXk/0.3*100:0} hasData={hasData}/>
          </div>

          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(210px,1fr))",gap:10}}>
            {XK_MARKETS.map(mkt=>{
              const actual=totDtXk*mkt.share;
              const p=actual>0?Math.min(120,Math.round(actual/(1.93*mkt.share*wksN)*100)):0;
              return(
                <div key={mkt.id} style={{background:T.card,border:`1px solid ${T.border}`,borderRadius:10,padding:14}}>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8}}>
                    <div style={{fontSize:13,fontWeight:700,color:"#fff"}}>{mkt.name}</div>
                    {actual>0&&<span style={{background:sc(p)+"22",color:sc(p),borderRadius:20,padding:"2px 8px",fontSize:12,fontWeight:900}}>{p}%</span>}
                  </div>
                  <div style={{fontSize:18,fontWeight:900,color:mkt.color,marginBottom:4}}>{actual>0?`${actual.toFixed(2)}B`:"—"}</div>
                  <div style={{fontSize:11,color:T.dim}}>Tỷ trọng: {(mkt.share*100).toFixed(0)}% tổng XK</div>
                  <div style={{height:4,background:"rgba(255,255,255,0.05)",borderRadius:2,overflow:"hidden",marginTop:8}}>
                    <div style={{width:`${Math.min(100,p)}%`,background:mkt.color,height:"100%",borderRadius:2}}/>
                  </div>
                </div>
              );
            })}
          </div>

          {hasData?(
            <Section title="Xu Hướng Xuất Khẩu Theo Tuần">
              <ResponsiveContainer width="100%" height={200}>
                <ComposedChart data={realWks.map(w=>({wk:`T${w.w}`,"DT XK":w.intl?.dtXk||0,"Đơn mới":w.intl?.donMoi||0,"KH/tuần":1.93}))}>
                  <defs>
                    <linearGradient id="gXK" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%"  stopColor={T.green} stopOpacity={0.3}/>
                      <stop offset="95%" stopColor={T.green} stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke={T.border}/>
                  <XAxis dataKey="wk" tick={{fill:T.muted,fontSize:11}}/>
                  <YAxis yAxisId="left" tick={{fill:T.muted,fontSize:10}} tickFormatter={v=>`${v}B`}/>
                  <YAxis yAxisId="right" orientation="right" tick={{fill:T.muted,fontSize:10}}/>
                  <Tooltip content={<Tip/>}/>
                  <Legend formatter={v=><span style={{color:"#fff",fontSize:11}}>{v}</span>}/>
                  <Area yAxisId="left"  type="monotone" dataKey="DT XK"    stroke={T.green}  fill="url(#gXK)" strokeWidth={2.5}/>
                  <Bar  yAxisId="right"                 dataKey="Đơn mới"  fill={T.accent} radius={[4,4,0,0]}/>
                  <Line yAxisId="left"  type="monotone" dataKey="KH/tuần"  stroke={T.yellow} strokeDasharray="5 5" strokeWidth={1.5} dot={false}/>
                </ComposedChart>
              </ResponsiveContainer>
            </Section>
          ):(
            <div style={{padding:"30px",textAlign:"center",color:T.dim,fontSize:13,background:T.card,borderRadius:10,border:`1px solid ${T.border}`}}>
              Anh Santi cần nộp báo cáo Int. Dept để hiển thị data
            </div>
          )}
        </div>
      )}

      {/* ─── BO ─── */}
      {tab==="bo" && (
        <div style={{display:"grid",gap:14}}>
          <PersonHeader avatar="TB" color="#a78bfa" name="Chị Tâm — Sales Back Office" role="Hợp đồng · Công nợ · Hóa đơn VAT · Hồ sơ pháp lý"/>

          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(160px,1fr))",gap:10}}>
            <KpiMini label="HĐ Ký Mới"       val={lastHdKy>0?`${lastHdKy} HĐ`:"—"}             sub="KH: 4 HĐ/tuần"  pct={lastHdKy/4*100}                              hasData={hasData}/>
            <KpiMini label="Giá Trị HĐ"      val={lastGtHd>0?`${lastGtHd.toFixed(2)}B`:"—"}    sub="KH: 4B/tuần"    pct={lastGtHd/4*100}                              hasData={hasData}/>
            <KpiMini label="Công Nợ Quá Hạn" val={lastCongNo>0?`${lastCongNo.toFixed(2)}B`:"0B"} sub="KH ≤2B"       pct={lastCongNo>0?(2/lastCongNo)*100:100}          hasData={hasData}/>
            <KpiMini label="HĐ VAT Xuất"     val={lastHdVat>0?`${lastHdVat} HĐ`:"—"}           sub="KH: 20 HĐ/tuần" pct={lastHdVat/20*100}                            hasData={hasData}/>
            <KpiMini label="Hồ Sơ Tồn Đọng" val={lastHsTon>0?`${lastHsTon} HS`:"0 HS"}        sub="KH ≤3 HS"       pct={lastHsTon>0?(3/Math.max(lastHsTon,1))*100:100} hasData={hasData}/>
          </div>

          {hasData?(
            <>
              <Section title="HĐ Ký Mới & Hóa Đơn VAT Theo Tuần">
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={realWks.map(w=>({wk:`T${w.w}`,"HĐ ký mới":w.bo?.hdKyMoi||0,"HĐ VAT":w.bo?.hoaDonXuat||0}))}>
                    <CartesianGrid strokeDasharray="3 3" stroke={T.border}/>
                    <XAxis dataKey="wk" tick={{fill:T.muted,fontSize:11}}/>
                    <YAxis tick={{fill:T.muted,fontSize:10}}/>
                    <Tooltip content={<Tip/>}/>
                    <Legend formatter={v=><span style={{color:"#fff",fontSize:11}}>{v}</span>}/>
                    <Bar dataKey="HĐ ký mới" fill={T.purple} radius={[4,4,0,0]}/>
                    <Bar dataKey="HĐ VAT"    fill={T.cyan}   radius={[4,4,0,0]}/>
                  </BarChart>
                </ResponsiveContainer>
              </Section>
              <Section title="Giá Trị HĐ & Công Nợ Quá Hạn (tỷ)">
                <ResponsiveContainer width="100%" height={180}>
                  <LineChart data={realWks.map(w=>({wk:`T${w.w}`,"GT HĐ ký":w.bo?.gtHdKy||0,"Công nợ QH":w.bo?.congNoQuaHan||0,"KH HĐ":4,"Ngưỡng NQ":2}))}>
                    <CartesianGrid strokeDasharray="3 3" stroke={T.border}/>
                    <XAxis dataKey="wk" tick={{fill:T.muted,fontSize:11}}/>
                    <YAxis tick={{fill:T.muted,fontSize:10}} tickFormatter={v=>`${v}B`}/>
                    <Tooltip content={<Tip/>}/>
                    <Legend formatter={v=><span style={{color:"#fff",fontSize:11}}>{v}</span>}/>
                    <Line type="monotone" dataKey="GT HĐ ký"  stroke={T.purple} strokeWidth={2.5} dot={{r:4}}/>
                    <Line type="monotone" dataKey="Công nợ QH" stroke={T.red}   strokeWidth={2.5} dot={{r:4}}/>
                    <Line type="monotone" dataKey="KH HĐ"     stroke={T.green}  strokeDasharray="5 5" strokeWidth={1.5} dot={false}/>
                    <Line type="monotone" dataKey="Ngưỡng NQ" stroke={T.yellow} strokeDasharray="5 5" strokeWidth={1.5} dot={false}/>
                  </LineChart>
                </ResponsiveContainer>
              </Section>
            </>
          ):(
            <div style={{padding:"30px",textAlign:"center",color:T.dim,fontSize:13,background:T.card,borderRadius:10,border:`1px solid ${T.border}`}}>
              Chị Tâm cần nộp báo cáo BO tuần để hiển thị data
            </div>
          )}
        </div>
      )}

      {/* ─── Đào Thị Lê Na - AI Tư vấn ─── */}
      {tab==="ai" && (
        <div style={{display:"grid",gap:14}}>
          <div style={{background:T.card,border:`1px solid ${T.border}`,borderRadius:10,padding:14}}>
            <div style={{fontSize:13,fontWeight:700,color:"#fff",marginBottom:4}}>🤖 PKD AI — Tư Vấn & Phân Tích</div>
            <div style={{fontSize:12,color:T.muted,marginBottom:14}}>Hỏi về doanh số, NPP, xuất khẩu, hợp đồng, hiệu suất team PKD...</div>

            {/* Gợi ý câu hỏi */}
            {aiMsgs.length===0&&(
              <div style={{display:"flex",flexWrap:"wrap",gap:8,marginBottom:16}}>
                {[
                  "Tóm tắt tình hình PKD tuần này",
                  "NPP nào đang hoàn thành tốt nhất và kém nhất?",
                  "Xuất khẩu đang ra sao, xu hướng thế nào?",
                  "Claim và issues PKD cần xử lý gì?",
                  "So sánh DT tuần này với các tuần trước",
                  "Action items nào đang quá hạn?",
                ].map((q,i)=>(
                  <button key={i} onClick={()=>callPKDAI(q)}
                    style={{padding:"6px 12px",borderRadius:20,border:`1px solid ${T.border}`,
                      background:"rgba(255,255,255,0.04)",color:T.muted,fontSize:12,cursor:"pointer"}}>
                    {q}
                  </button>
                ))}
              </div>
            )}

            {/* Chat history */}
            <div style={{maxHeight:400,overflowY:"auto",display:"flex",flexDirection:"column",gap:12,marginBottom:14}}>
              {aiMsgs.map((m,i)=>(
                <div key={i} style={{display:"flex",justifyContent:m.role==="user"?"flex-end":"flex-start"}}>
                  <div style={{
                    maxWidth:"82%",padding:"10px 14px",borderRadius:10,fontSize:14,lineHeight:1.7,
                    background:m.role==="user"?"rgba(37,99,235,0.18)":"rgba(255,255,255,0.05)",
                    border:`1px solid ${m.role==="user"?"rgba(37,99,235,0.3)":T.border}`,
                    color:T.text,whiteSpace:"pre-wrap",
                  }}>
                    {m.role==="assistant"&&<span style={{fontSize:11,color:T.accent,display:"block",marginBottom:4}}>🤖 CIS AI</span>}
                    {m.content}
                  </div>
                </div>
              ))}
              {aiLoading&&(
                <div style={{display:"flex",justifyContent:"flex-start"}}>
                  <div style={{padding:"10px 14px",borderRadius:10,background:"rgba(255,255,255,0.05)",border:`1px solid ${T.border}`,color:T.muted,fontSize:13}}>
                    🤖 Đang phân tích...
                  </div>
                </div>
              )}
              <div ref={aiEndRef}/>
            </div>

            {/* Input */}
            <div style={{display:"flex",gap:8}}>
              <input
                value={aiInput}
                onChange={e=>setAiInput(e.target.value)}
                onKeyDown={e=>e.key==="Enter"&&!e.shiftKey&&callPKDAI(aiInput)}
                placeholder="Hỏi về doanh số, NPP, xuất khẩu, hợp đồng..."
                style={{flex:1,background:"rgba(255,255,255,0.06)",border:`1px solid ${T.border}`,
                  borderRadius:8,padding:"10px 14px",color:T.text,fontSize:14,outline:"none"}}
              />
              <button onClick={()=>callPKDAI(aiInput)} disabled={aiLoading||!aiInput.trim()}
                style={{padding:"10px 20px",borderRadius:8,border:"none",
                  background:aiLoading||!aiInput.trim()?"rgba(255,255,255,0.08)":"linear-gradient(135deg,#2563eb,#1d4ed8)",
                  color:aiLoading||!aiInput.trim()?T.dim:"white",cursor:aiLoading||!aiInput.trim()?"default":"pointer",
                  fontWeight:700,fontSize:14}}>
                Gửi
              </button>
              {aiMsgs.length>0&&(
                <button onClick={()=>setAiMsgs([])}
                  style={{padding:"10px 14px",borderRadius:8,border:`1px solid ${T.border}`,
                    background:"transparent",color:T.dim,cursor:"pointer",fontSize:13}}>
                  Xóa
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ─── TREND ─── */}
      {tab==="trend" && (
        <div style={{display:"grid",gap:14}}>
          {!hasData?(
            <div style={{padding:"40px",textAlign:"center",color:T.dim,fontSize:14,background:T.card,borderRadius:10,border:`1px solid ${T.border}`}}>
              Chưa có dữ liệu. Các thành viên PKD cần nộp báo cáo ít nhất 1 tuần.
            </div>
          ):(
            <>
              <Section title="Xu Hướng DT — Thép, Nhôm & Xuất Khẩu (tỷ)">
                <ResponsiveContainer width="100%" height={200}>
                  <AreaChart data={realWks.map(w=>({wk:`T${w.w}`,"Nhóm Thép":w.pkd?.dtThep||0,"Nhóm Nhôm":w.pkd?.dtNhom||0,"XK (Santi)":w.intl?.dtXk||0,"NPP NTK":w.bd?.dtNtk||0}))}>
                    <defs>
                      <linearGradient id="gTH" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="#f472b6" stopOpacity={0.3}/><stop offset="95%" stopColor="#f472b6" stopOpacity={0}/></linearGradient>
                      <linearGradient id="gNH" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor={T.green} stopOpacity={0.3}/><stop offset="95%" stopColor={T.green} stopOpacity={0}/></linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke={T.border}/>
                    <XAxis dataKey="wk" tick={{fill:T.muted,fontSize:11}}/>
                    <YAxis tick={{fill:T.muted,fontSize:10}} tickFormatter={v=>`${v}B`}/>
                    <Tooltip content={<Tip/>}/>
                    <Legend formatter={v=><span style={{color:"#fff",fontSize:11}}>{v}</span>}/>
                    <Area type="monotone" dataKey="Nhóm Thép" stroke="#f472b6" fill="url(#gTH)" strokeWidth={2.5}/>
                    <Area type="monotone" dataKey="Nhóm Nhôm" stroke={T.green} fill="url(#gNH)" strokeWidth={2.5}/>
                    <Line type="monotone" dataKey="XK (Santi)" stroke={T.yellow} strokeWidth={2} dot={{r:3}}/>
                    <Line type="monotone" dataKey="NPP NTK"    stroke="#3b82f6"  strokeWidth={1.5} dot={{r:3}} strokeDasharray="4 2"/>
                  </AreaChart>
                </ResponsiveContainer>
              </Section>

              <Section title="Win Rate & Gross Margin (%)">
                <ResponsiveContainer width="100%" height={180}>
                  <LineChart data={realWks.map(w=>({wk:`T${w.w}`,"Win Rate":w.pkd?.winRate||null,"Gross Margin":w.pkd?.margin||null}))}>
                    <CartesianGrid strokeDasharray="3 3" stroke={T.border}/>
                    <XAxis dataKey="wk" tick={{fill:T.muted,fontSize:11}}/>
                    <YAxis tick={{fill:T.muted,fontSize:10}} tickFormatter={v=>`${v}%`} domain={[0,60]}/>
                    <Tooltip content={<Tip/>}/>
                    <Legend formatter={v=><span style={{color:"#fff",fontSize:11}}>{v}</span>}/>
                    <Line type="monotone" dataKey="Win Rate"    stroke={T.cyan}  strokeWidth={2.5} dot={{r:4}} connectNulls/>
                    <Line type="monotone" dataKey="Gross Margin" stroke={T.green} strokeWidth={2.5} dot={{r:4}} connectNulls/>
                  </LineChart>
                </ResponsiveContainer>
              </Section>

              <Section title="DT Chi Tiết Ngành Hàng × Tuần (tỷ)">
                <div style={{overflowX:"auto"}}>
                  <table style={{width:"100%",borderCollapse:"collapse",fontSize:11,minWidth:500}}>
                    <thead>
                      <tr style={{borderBottom:`1px solid ${T.border}`}}>
                        <th style={{textAlign:"left",padding:"5px 8px",color:T.muted}}>Ngành hàng</th>
                        {realWks.map(w=><th key={w.w} style={{textAlign:"center",padding:"5px 8px",color:T.muted}}>T{w.w}</th>)}
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        {label:"Van EI/E",   key:"dtVanEi",  kh:5.705, c:"#f472b6"},
                        {label:"Cửa gió",    key:"dtCuaGio", kh:4.605, c:T.green},
                        {label:"Van cơ khí", key:"dtVcd",    kh:2.399, c:T.orange},
                        {label:"VAV/CAV",    key:"dtVav",    kh:0.502, c:T.cyan},
                        {label:"Tấm nan",    key:"dtTamNan", kh:1.183, c:T.purple},
                      ].map(row=>(
                        <tr key={row.key} style={{borderBottom:`1px solid ${T.border}22`}}>
                          <td style={{padding:"5px 8px",color:row.c,fontWeight:700}}>{row.label}</td>
                          {realWks.map(w=>{
                            const v=w.pkd?.[row.key]||0;
                            const p=row.kh>0?Math.round(v/row.kh*100):0;
                            return(
                              <td key={w.w} style={{textAlign:"center",padding:"4px 6px"}}>
                                {v>0?<span style={{background:sc(p)+"33",color:sc(p),padding:"1px 6px",borderRadius:4,fontWeight:700}}>{v.toFixed(2)}B</span>:<span style={{color:T.dim}}>—</span>}
                              </td>
                            );
                          })}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Section>
            </>
          )}
        </div>
      )}
      {/* ─── CHẤM ĐIỂM KPI ─── */}
      {tab==="score" && (()=>{
        const thang = wk<=4?1:wk<=9?2:3;
        const DEPTS = Object.entries(PKD_KPI_MASTER);
        const PERIODS = [
          {label:"Tháng này",id:"m",  months:[thang]},
          {label:"Tháng trước",id:"m0",months:[Math.max(1,thang-1)]},
          {label:"Quý 1",    id:"q1", months:[1,2,3]},
          {label:"Năm 2026", id:"yr", months:[1,2,3,4,5,6,7,8,9,10,11,12]},
        ];
        const scoreColor = s=>s==null?T.dim:s>=100?T.green:s>=85?T.yellow:T.red;
        const scoreBg    = s=>s==null?"rgba(255,255,255,0.03)":s>=100?"rgba(52,211,153,0.08)":s>=85?"rgba(251,191,36,0.08)":"rgba(248,113,113,0.08)";
        return (
          <div style={{display:"grid",gap:14}}>
            {/* Header */}
            <div style={{fontSize:15,fontWeight:800,color:"#fff"}}>
              🏆 Chấm điểm KPI PKD — Th.{thang}/2026
            </div>

            {/* Ma trận tổng quan: 5 bộ phận × 4 kỳ */}
            <div style={{background:T.card,border:`1px solid ${T.border}`,borderRadius:12,overflow:"hidden"}}>
              <div style={{padding:"12px 16px",borderBottom:`1px solid ${T.border}`,fontSize:13,fontWeight:700,color:"#fff"}}>
                Điểm tổng hợp theo kỳ
              </div>
              <div style={{overflowX:"auto"}}>
                <table style={{width:"100%",borderCollapse:"collapse",fontSize:13}}>
                  <thead>
                    <tr style={{borderBottom:`1px solid ${T.border}`}}>
                      <th style={{padding:"8px 14px",textAlign:"left",color:T.muted,fontWeight:700}}>Bộ phận</th>
                      {PERIODS.map(p=>(
                        <th key={p.id} style={{padding:"8px 14px",textAlign:"center",color:T.muted,fontWeight:700}}>{p.label}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {DEPTS.map(([dKey,d])=>(
                      <tr key={dKey} style={{borderBottom:`1px solid rgba(255,255,255,0.04)`,cursor:"pointer",
                        background:selDept===dKey?"rgba(37,99,235,0.08)":"transparent"}}
                        onClick={()=>setSelDept(dKey)}>
                        <td style={{padding:"10px 14px"}}>
                          <div style={{display:"flex",alignItems:"center",gap:8}}>
                            <div style={{width:10,height:10,borderRadius:"50%",background:d.color,flexShrink:0}}/>
                            <div>
                              <div style={{fontSize:13,fontWeight:700,color:"#e2e8f0"}}>{d.label}</div>
                              <div style={{fontSize:11,color:T.dim}}>{d.kpis.length} chỉ tiêu</div>
                            </div>
                          </div>
                        </td>
                        {PERIODS.map(p=>{
                          const s = pkdPeriodScore(dKey, p.months, weeklyData);
                          return (
                            <td key={p.id} style={{padding:"10px 14px",textAlign:"center",background:scoreBg(s)}}>
                              <div style={{fontSize:20,fontWeight:900,color:scoreColor(s)}}>{s!=null?s:"–"}</div>
                              <div style={{fontSize:10,color:T.dim}}>{s!=null?(s>=100?"✓ Đạt":s>=85?"△ Theo dõi":"✗ Cảnh báo"):"Chưa có data"}</div>
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Chi tiết bộ phận đang chọn */}
            {(()=>{
              const d = PKD_KPI_MASTER[selDept];
              if(!d) return null;
              return (
                <div style={{background:T.card,border:`1px solid ${T.border}`,borderRadius:12,overflow:"hidden"}}>
                  <div style={{padding:"12px 16px",borderBottom:`1px solid ${T.border}`,
                    display:"flex",alignItems:"center",gap:10}}>
                    <div style={{width:12,height:12,borderRadius:"50%",background:d.color}}/>
                    <div style={{fontSize:14,fontWeight:800,color:"#fff"}}>{d.label}</div>
                    <div style={{marginLeft:"auto",fontSize:12,color:T.muted}}>{d.kpis.length} KPI · Th.{thang}/2026</div>
                  </div>
                  <div style={{overflowX:"auto"}}>
                    <table style={{width:"100%",borderCollapse:"collapse",fontSize:12}}>
                      <thead>
                        <tr style={{borderBottom:`1px solid ${T.border}`}}>
                          <th style={{padding:"8px 12px",textAlign:"left",color:T.muted,fontWeight:700}}>KPI</th>
                          <th style={{padding:"8px 12px",textAlign:"center",color:T.muted,fontWeight:700}}>W%</th>
                          <th style={{padding:"8px 12px",textAlign:"center",color:T.muted,fontWeight:700}}>KH Tháng</th>
                          <th style={{padding:"8px 12px",textAlign:"center",color:T.muted,fontWeight:700}}>Actual</th>
                          <th style={{padding:"8px 12px",textAlign:"center",color:T.muted,fontWeight:700}}>Loại</th>
                          <th style={{padding:"8px 12px",textAlign:"center",color:T.muted,fontWeight:700}}>Điểm</th>
                          <th style={{padding:"8px 12px",textAlign:"center",color:T.muted,fontWeight:700}}>RAG</th>
                        </tr>
                      </thead>
                      <tbody>
                        {d.kpis.map((k,idx)=>{
                          const act = pkdGetActualMonth(selDept,k.code,k.measure,thang,weeklyData);
                          const kh  = k.kh[thang-1];
                          const s   = pkdKpiScore(act,kh,k.dir);
                          const sc2 = scoreColor(s);
                          const actStr = act!=null?(act>=10?act.toFixed(1):act.toFixed(2)):"–";
                          const khStr  = kh>=10?kh.toFixed(1):kh.toFixed(2);
                          const mBadge = k.measure==="flow"?"∑":k.measure==="stock"?"📌":"∅";
                          const mColor = k.measure==="flow"?"#60a5fa":k.measure==="stock"?"#fbbf24":"#34d399";
                          return (
                            <tr key={k.code} style={{borderBottom:idx<d.kpis.length-1?`1px solid rgba(255,255,255,0.04)`:"none",
                              background:idx%2===0?"transparent":"rgba(255,255,255,0.01)"}}>
                              <td style={{padding:"8px 12px"}}>
                                <div style={{fontWeight:600,color:"#e2e8f0"}}>{k.label}</div>
                                <div style={{fontSize:10,color:T.dim}}>{k.code}</div>
                              </td>
                              <td style={{textAlign:"center",padding:"8px 12px",color:"#60a5fa",fontWeight:700}}>{k.w}%</td>
                              <td style={{textAlign:"center",padding:"8px 12px",color:T.muted}}>{khStr} <span style={{fontSize:10,color:T.dim}}>{k.unit}</span></td>
                              <td style={{textAlign:"center",padding:"8px 12px",color:sc2,fontWeight:700}}>{actStr} <span style={{fontSize:10,color:T.dim,fontWeight:400}}>{act!=null?k.unit:""}</span></td>
                              <td style={{textAlign:"center",padding:"8px 12px"}}>
                                <span style={{fontSize:11,color:mColor,background:mColor+"22",borderRadius:4,padding:"1px 5px"}}>{mBadge}</span>
                              </td>
                              <td style={{textAlign:"center",padding:"8px 12px"}}>
                                <span style={{fontSize:17,fontWeight:900,color:sc2}}>{s!=null?s:"–"}</span>
                              </td>
                              <td style={{textAlign:"center",padding:"8px 12px"}}>
                                <span style={{padding:"2px 8px",borderRadius:5,fontSize:11,fontWeight:700,
                                  background:s==null?"rgba(255,255,255,0.05)":s>=100?T.green+"22":s>=85?T.yellow+"22":T.red+"22",
                                  color:s==null?T.muted:s>=100?T.green:s>=85?T.yellow:T.red}}>
                                  {s==null?"–":s>=100?"✓ Đạt":s>=85?"△ Theo dõi":"✗ Đỏ"}
                                </span>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              );
            })()}
          </div>
        );
      })()}

    </div>
  );
}
