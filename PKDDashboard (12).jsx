// ═══════════════════════════════════════════════════════════
// NSCA CIS v6.3 — PKD Dashboard
// Tabs: Tổng thể | NPP | BD | Xuất khẩu | BO | Xu hướng
// ═══════════════════════════════════════════════════════════
import React, { useState, useRef } from "react";
import {
  BarChart, Bar, LineChart, Line, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  ComposedChart, AreaChart, Area, Legend, LabelList,
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

function FormatReply({text}) {
  const lines = (text||"").split("\n");
  return (
    <div style={{display:"grid",gap:5}}>
      {lines.map((line,i) => {
        if(!line.trim()) return <div key={i} style={{height:3}}/>;
        if(/^[▌#=]{1,3}/.test(line.trim())) return (
          <div key={i} style={{fontSize:13,fontWeight:800,color:"#60a5fa",
            borderLeft:"3px solid #2563eb",paddingLeft:9,marginTop:5}}>
            {line.replace(/^[▌#=\s]+/,"")}
          </div>
        );
        if(/^[•\-\*]\s/.test(line.trim())) return (
          <div key={i} style={{display:"flex",gap:7,paddingLeft:6,fontSize:13,lineHeight:1.65}}>
            <span style={{color:"#60a5fa",flexShrink:0,marginTop:1}}>•</span>
            <span style={{color:"#e2e8f0"}}>{line.replace(/^[•\-\*]\s/,"")}</span>
          </div>
        );
        if(/^[🔴🟡🟢✅⚠️📊💡🎯📈📉⚡🏆]/.test(line.trim())) return (
          <div key={i} style={{padding:"5px 10px",borderRadius:6,
            background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.07)",
            fontSize:13,color:"#e2e8f0",lineHeight:1.6}}>
            {line.trim()}
          </div>
        );
        return <div key={i} style={{fontSize:13,color:"#cbd5e1",lineHeight:1.65,paddingLeft:3}}>{line}</div>;
      })}
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
// ─── DEPT OVERVIEW — So sánh 4 kỳ, hiện auto trong mỗi tab ───────────
function DeptOverview({ src, weeklyData, wk, kpis, color }) {
  const [selPeriod, setSelPeriod] = React.useState("wk");

  const clr = (pct) => pct>=100?"#34d399":pct>=80?"#22d3ee":pct>=60?"#fbbf24":pct>=40?"#fb923c":"#f87171";
  const real = weeklyData.filter(w=>w.hasData===true);
  const sumP = (wks) => {
    const obj={};
    wks.forEach(w=>{const d=w[src]||{};Object.keys(d).forEach(k=>{if(typeof d[k]==="number")obj[k]=(obj[k]||0)+d[k];});});
    return obj;
  };

  const curM = wk<=4?1:wk<=9?2:wk<=13?3:wk<=17?4:wk<=22?5:wk<=26?6:7;
  const curQ = Math.ceil(curM/3);
  const mRange = (m) => real.filter(w=>(m===1&&w.w<=4)||(m===2&&w.w>=5&&w.w<=9)||(m===3&&w.w>=10&&w.w<=13)||(m===4&&w.w>=14&&w.w<=17)||(m===5&&w.w>=18&&w.w<=22)||(m===6&&w.w>=23&&w.w<=26));
  const qRange = (q) => real.filter(w=>Math.ceil((w.w<=4?1:w.w<=9?2:w.w<=13?3:4)/3)===q);

  const curWk  = real.find(w=>w.w===wk);
  const prevWk = real.find(w=>w.w===wk-1);
  const dsets = {
    wk:  { cur: curWk?(curWk[src]||{}):{},   prev: prevWk?(prevWk[src]||{}):{},  label:"tuần",  prevLabel:"Tuần "+(wk-1), curLabel:"Tuần "+wk },
    mo:  { cur: sumP(mRange(curM)),            prev: sumP(mRange(curM-1)),          label:"tháng", prevLabel:"Tháng "+(curM-1),curLabel:"Tháng "+curM },
    q:   { cur: sumP(qRange(curQ)),            prev: sumP(qRange(curQ-1)),          label:"quý",   prevLabel:"Quý "+(curQ-1),curLabel:"Quý "+curQ },
    yr:  { cur: sumP(real),                    prev: {},                             label:"năm",   prevLabel:"",             curLabel:"Cả năm 2026" },
  };
  const ds = dsets[selPeriod];

  // Build bar chart data — mỗi KPI là 1 cặp cột
  const chartData = kpis.map(k => {
    const curV  = ds.cur[k.key]  ?? 0;
    const prevV = ds.prev[k.key] ?? 0;
    const pct   = prevV>0 ? Math.round((curV-prevV)/Math.abs(prevV)*100) : null;
    return { name: k.label, cur: curV, prev: prevV, unit: k.unit, fmt: k.fmt, pct, key: k.key };
  });

  const tabs = [
    {id:"wk", label:"Tuần"},
    {id:"mo", label:"Tháng"},
    {id:"q",  label:"Quý"},
    {id:"yr", label:"Năm"},
  ];

  // Custom bar label
  const BarLabel = ({ x, y, width, value, unit, fmt }) => {
    const v = value>0?(fmt?fmt(value):value):null;
    if(!v||width<28) return null;
    return <text x={x+width/2} y={y-5} textAnchor="middle" fill="#94a3b8" fontSize={10}>{v}{unit&&unit.length<=2?unit:""}</text>;
  };

  // Tooltip
  const ChartTip = ({ active, payload, label }) => {
    if(!active||!payload?.length) return null;
    const row = chartData.find(d=>d.name===label)||{};
    const cur  = payload.find(p=>p.dataKey==="cur");
    const prev = payload.find(p=>p.dataKey==="prev");
    const pct  = row.pct;
    return (
      <div style={{background:"#1e293b",border:"1px solid rgba(255,255,255,0.1)",borderRadius:8,padding:"10px 14px",fontSize:12}}>
        <div style={{fontWeight:800,color:"#e2e8f0",marginBottom:6}}>{label}</div>
        {cur&&<div style={{color:"#60a5fa"}}>{ds.curLabel}: <b>{row.fmt?row.fmt(cur.value):cur.value} {row.unit}</b></div>}
        {prev&&prev.value>0&&<div style={{color:"#94a3b8"}}>{ds.prevLabel}: <b>{row.fmt?row.fmt(prev.value):prev.value} {row.unit}</b></div>}
        {pct!=null&&<div style={{color:pct>0?"#34d399":pct<0?"#f87171":"#94a3b8",fontWeight:700,marginTop:4}}>
          {pct>0?"↑ +":"↓ "}{Math.abs(pct)}% so kỳ trước
        </div>}
      </div>
    );
  };

  return (
    <div style={{background:"rgba(255,255,255,0.02)",border:"1px solid rgba(255,255,255,0.06)",borderRadius:12,padding:"14px 16px"}}>
      {/* Period selector + title */}
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:14}}>
        <div style={{fontSize:13,fontWeight:800,color:"#e2e8f0"}}>
          {ds.curLabel}{ds.prevLabel ? " vs " + ds.prevLabel : ""}
        </div>
        <div style={{display:"flex",gap:4}}>
          {tabs.map(t=>(
            <button key={t.id} onClick={()=>setSelPeriod(t.id)} style={{
              padding:"4px 12px",borderRadius:6,border:"none",cursor:"pointer",fontSize:12,fontWeight:t.id===selPeriod?700:400,
              background:t.id===selPeriod?color+"33":"rgba(255,255,255,0.05)",
              color:t.id===selPeriod?"#e2e8f0":"#64748b",
              outline:t.id===selPeriod?`1px solid ${color}55`:"none",
            }}>{t.label}</button>
          ))}
        </div>
      </div>

      {/* Bar chart */}
      <ResponsiveContainer width="100%" height={160}>
        <BarChart data={chartData} barCategoryGap="30%" barGap={3} margin={{top:18,right:8,bottom:0,left:0}}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false}/>
          <XAxis dataKey="name" tick={{fill:"#64748b",fontSize:11}} axisLine={false} tickLine={false}/>
          <YAxis hide/>
          <Tooltip content={<ChartTip/>}/>
          {selPeriod!=="yr" && (
            <Bar dataKey="prev" name={ds.prevLabel} fill="rgba(255,255,255,0.08)" radius={[4,4,0,0]}>
              <LabelList dataKey="prev" content={(props)=><BarLabel {...props} unit={chartData[props.index]?.unit} fmt={chartData[props.index]?.fmt}/>}/>
            </Bar>
          )}
          <Bar dataKey="cur" name={ds.curLabel} radius={[4,4,0,0]}
            fill={selPeriod==="yr"?"rgba(255,255,255,0.08)":color}>
            <LabelList dataKey="cur" content={(props)=><BarLabel {...props} unit={chartData[props.index]?.unit} fmt={chartData[props.index]?.fmt}/>}/>
            {chartData.map((d,i)=>(
              <Cell key={i} fill={selPeriod==="yr"
                ? (color+"cc")
                : d.prev>0
                  ? (d.cur>=d.prev?color:color+"66")
                  : color}/>
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>

      {/* Change summary row */}
      <div style={{display:"flex",gap:6,marginTop:10,flexWrap:"wrap"}}>
        {chartData.map((d,i)=>{
          const chg = d.pct;
          const val = d.cur>0?(d.fmt?d.fmt(d.cur):d.cur):null;
          return (
            <div key={i} style={{display:"flex",alignItems:"center",gap:5,
              padding:"3px 10px",borderRadius:20,
              background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.07)"}}>
              <span style={{fontSize:11,color:"#64748b"}}>{d.name}</span>
              <span style={{fontSize:12,fontWeight:800,color:val!=null?"#e2e8f0":"#475569"}}>
                {val!=null?val+"":"—"}<span style={{fontSize:10,color:"#475569",marginLeft:2}}>{val!=null?d.unit:""}</span>
              </span>
              {chg!=null&&selPeriod!=="yr"&&(
                <span style={{fontSize:11,fontWeight:700,color:chg>0?"#34d399":chg<0?"#f87171":"#94a3b8"}}>
                  {chg>0?"↑":"↓"}{Math.abs(chg)}%
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function PKDDashboard({weeklyData=[],wk=1,userDept="PKD",issues=[],actions=[]}) {
  const defaultTab = userDept==="BO"?"bo":userDept==="Int. Dept"?"xk":userDept==="PKD-BD"?"bd":"plan";
  const [tab,setTab]     = useState(defaultTab);
  const [selNPP,setSelNPP] = useState(null);
  const [aiMsgs,setAiMsgs]   = useState([]);
  const [aiInput,setAiInput] = useState("");
  const [aiLoading,setAiLoading] = useState(false);
  const aiEndRef = useRef(null);

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

NHIỆM VỤ: Em là CIS AI — trợ lý của team PKD/Kinh doanh NSCA.
PHẠM VI TRẢ LỜI (theo thứ tự ưu tiên):
1. Data nội bộ PKD/NSCA — KPI, NPP, xuất khẩu, BO, issues, actions (ưu tiên cao nhất)
2. Nghiệp vụ bán hàng & Marketing — chiến lược NPP, B2B, pricing, CRM, pipeline
3. Kỹ thuật HVAC — sản phẩm Van EI, Cửa gió, VAV, tiêu chuẩn AMCA/AHRI
4. Tài chính kinh doanh — margin, DSO, công nợ, dòng tiền
5. Quản trị team — OKR, KPI, quản lý đội nhóm, hiệu suất
6. Tin tức & Thị trường — ngành xây dựng, HVAC Việt Nam & quốc tế
KHÔNG trả lời: nội dung không liên quan đến kinh doanh/kỹ thuật/quản trị.
CÁCH TRẢ LỜI:
- Câu hỏi về PKD/NPP/XK/BO → dùng data thực, tóm tắt cô đọng
- Câu hỏi nghiệp vụ/thị trường → trả lời chuyên sâu, kết nối với NSCA khi phù hợp
- Xưng "em". Trả lời bằng ngôn ngữ người hỏi dùng.`;

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
          {hasData?`${realWks.length} tuần đã nộp · Tuần ${wk} · Tháng ${curMonth}/2026`:"⚠️ Chưa có dữ liệu"}
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
        ].map(t=>(
          <button key={t.id} onClick={()=>setTab(t.id)} style={{
            padding:"7px 16px",borderRadius:7,border:"none",cursor:"pointer",fontSize:13,
            background:tab===t.id?T.accent:"rgba(255,255,255,0.06)",
            color:tab===t.id?"#fff":T.muted,fontWeight:tab===t.id?700:400,
          }}>{t.label}</button>
        ))}
      </div>

      {/* ─── AI TƯ VẤN — Luôn hiển thị dưới tabs ─── */}
      <div style={{background:"rgba(15,23,42,0.97)",border:"1px solid rgba(37,99,235,0.35)",
        borderRadius:16,padding:"18px 22px",boxShadow:"0 8px 32px rgba(0,0,0,0.4)"}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:aiMsgs.length>0?12:0}}>
          <div style={{display:"flex",alignItems:"center",gap:10}}>
            <div style={{width:36,height:36,borderRadius:10,
              background:"linear-gradient(135deg,rgba(37,99,235,0.3),rgba(99,102,241,0.2))",
              display:"flex",alignItems:"center",justifyContent:"center",fontSize:18,
              border:"1px solid rgba(37,99,235,0.4)"}}>🤖</div>
            <div>
              <div style={{fontSize:15,fontWeight:900,color:"#60a5fa"}}>AI Phân tích & Tư vấn — PKD</div>
              <div style={{fontSize:12,color:"#475569"}}>Tuần {wk} · Tháng {curMonth}/2026 · Hỏi bất kỳ về KPI, thị trường, nghiệp vụ</div>
            </div>
          </div>
          {aiMsgs.length>0&&(
            <button onClick={()=>setAiMsgs([])} style={{
              padding:"4px 12px",borderRadius:7,border:"1px solid rgba(255,255,255,0.08)",
              background:"rgba(255,255,255,0.04)",color:"#64748b",cursor:"pointer",fontSize:13}}>
              Xóa chat
            </button>
          )}
        </div>

        {/* Quick questions — chỉ hiện khi chưa có chat */}
        {aiMsgs.length===0&&(
          <div style={{display:"flex",flexWrap:"wrap",gap:7,margin:"12px 0"}}>
            {(tab==="plan"?[
              "Tóm tắt tình hình PKD tuần "+wk,
              "DT ngành hàng nào đang tốt nhất?",
              "So sánh tuần "+wk+" vs tuần "+(wk-1),
              "Đề xuất action cho tuần sau",
            ]:tab==="bd"?[
              "Phân tích BD tuần "+wk,
              "NPP nào tốt nhất và kém nhất?",
              "Claim và issues BD cần xử lý?",
              "KH nào có tiềm năng tăng trưởng?",
            ]:tab==="xk"?[
              "Tình hình xuất khẩu tuần "+wk,
              "Thị trường nào đang tăng mạnh?",
              "OTD có đạt KH 95% không?",
              "Cơ hội mở rộng thị trường mới?",
            ]:tab==="bo"?[
              "Tình hình hợp đồng & công nợ",
              "Công nợ quá hạn có rủi ro không?",
              "HĐ VAT tuần này đạt KH chưa?",
            ]:[
              "Tóm tắt tình hình PKD tuần "+wk,
              "KPI nào đang cảnh báo đỏ?",
              "So sánh với tuần trước",
              "Đề xuất action ưu tiên",
            ]).map((q,i)=>(
              <button key={i} onClick={()=>callPKDAI(q)} style={{
                padding:"6px 14px",borderRadius:20,fontSize:13,cursor:"pointer",
                border:"1px solid rgba(37,99,235,0.25)",
                background:"rgba(37,99,235,0.07)",
                color:"#93c5fd",fontFamily:"Calibri,sans-serif"}}>
                {q}
              </button>
            ))}
          </div>
        )}

        {/* Chat messages */}
        {aiMsgs.length>0&&(
          <div style={{display:"flex",flexDirection:"column",gap:12,margin:"14px 0"}}>
            {aiMsgs.map((m,i)=>(
              <div key={i} style={{display:"flex",justifyContent:m.role==="user"?"flex-end":"flex-start"}}>
                {m.role==="assistant"?(
                  <div style={{width:"100%",padding:"14px 16px",borderRadius:12,
                    background:"rgba(255,255,255,0.03)",border:"1px solid rgba(37,99,235,0.22)"}}>
                    <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:10}}>
                      <span style={{fontSize:14}}>🤖</span>
                      <span style={{fontSize:13,color:"#60a5fa",fontWeight:800}}>CIS AI · Tuần {wk}/2026</span>
                    </div>
                    <FormatReply text={m.content}/>
                  </div>
                ):(
                  <div style={{maxWidth:"65%",padding:"9px 14px",borderRadius:10,
                    background:"linear-gradient(135deg,rgba(37,99,235,0.22),rgba(99,102,241,0.15))",
                    border:"1px solid rgba(37,99,235,0.3)",fontSize:14,color:"#e2e8f0"}}>
                    {m.content}
                  </div>
                )}
              </div>
            ))}
            {aiLoading&&(
              <div style={{padding:"12px 16px",borderRadius:10,
                background:"rgba(255,255,255,0.03)",border:"1px solid rgba(37,99,235,0.2)"}}>
                <div style={{display:"flex",alignItems:"center",gap:10}}>
                  <span>🤖</span>
                  <span style={{fontSize:13,color:"#60a5fa",fontWeight:700}}>CIS AI đang phân tích...</span>
                  <div style={{display:"flex",gap:5}}>
                    {[0,1,2].map(j=><div key={j} style={{width:7,height:7,borderRadius:"50%",background:["#2563eb","#6366f1","#8b5cf6"][j],opacity:0.8}}/>)}
                  </div>
                </div>
              </div>
            )}
            <div ref={aiEndRef}/>
          </div>
        )}

        {/* Input */}
        <div style={{display:"flex",gap:8,marginTop:aiMsgs.length>0?0:8}}>
          <input value={aiInput} onChange={e=>setAiInput(e.target.value)}
            onKeyDown={e=>e.key==="Enter"&&!e.shiftKey&&callPKDAI(aiInput)}
            placeholder={`Hỏi về KPI tuần ${wk}, xu hướng, nghiệp vụ HVAC, thị trường...`}
            style={{flex:1,background:"rgba(255,255,255,0.07)",
              border:"1px solid rgba(255,255,255,0.14)",borderRadius:10,
              padding:"10px 14px",color:"#e2e8f0",fontSize:14,outline:"none",
              fontFamily:"Calibri,sans-serif"}}/>
          <button onClick={()=>callPKDAI(aiInput)} disabled={aiLoading||!aiInput.trim()} style={{
            padding:"10px 22px",borderRadius:10,border:"none",fontWeight:800,fontSize:15,
            cursor:aiLoading||!aiInput.trim()?"default":"pointer",
            fontFamily:"Calibri,sans-serif",
            background:aiLoading||!aiInput.trim()
              ?"rgba(255,255,255,0.06)"
              :"linear-gradient(135deg,#2563eb,#4f46e5)",
            color:aiLoading||!aiInput.trim()?"#475569":"white",
            boxShadow:aiLoading||!aiInput.trim()?"none":"0 4px 14px rgba(37,99,235,0.35)"}}>
            Gửi
          </button>
        </div>
      </div>


      {/* ─── PLAN ─── */}
      {tab==="plan" && (
        <div style={{display:"grid",gap:14}}>
                {/* Tổng quan so sánh PKD */}
      {(userDept==="PKD"||userDept==="CEO"||userDept==="Admin"||userDept==="Director") && (
        <DeptOverview src="pkd" weeklyData={weeklyData} wk={wk}
          kpis={[
          {label:"DT Tổng",key:"dt",unit:"tỷ",fmt:v=>v?.toFixed(2)},
          {label:"DT Thép",key:"dtThep",unit:"tỷ",fmt:v=>v?.toFixed(2)},
          {label:"DT Nhôm",key:"dtNhom",unit:"tỷ",fmt:v=>v?.toFixed(2)},
          {label:"Win Rate",key:"winRate",unit:"%",fmt:v=>v?.toFixed(1)},
          {label:"Margin",key:"margin",unit:"%",fmt:v=>v?.toFixed(1)},
        ]}
          color="#f472b6" callPKDAI={callPKDAI}/>
      )}

      <Section title={`Doanh Thu Ngành Hàng — Lũy Kế Tuần ${wk}/2026`}>
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

          <Section title={`Chi Tiết DT Theo Kênh NPP — Lũy Kế Tuần ${wk}/2026`}>
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

          <DeptOverview src="bd" weeklyData={weeklyData} wk={wk}
            kpis={[
          {label:"DT NTK",key:"dtNtk",unit:"tỷ",fmt:v=>v?.toFixed(2)},
          {label:"DT Galaxy",key:"dtGalaxy",unit:"tỷ",fmt:v=>v?.toFixed(2)},
          {label:"BG",key:"bgTong",unit:"BG",fmt:v=>Math.round(v||0)},
          {label:"Đơn hàng",key:"dhMoi",unit:"ĐH",fmt:v=>Math.round(v||0)},
          {label:"Gặp NPP",key:"gapGo",unit:"cuộc",fmt:v=>Math.round(v||0)},
        ]}
            color="#fb923c" callPKDAI={callPKDAI}/>

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

          <DeptOverview src="intl" weeklyData={weeklyData} wk={wk}
            kpis={[
          {label:"DT XK",key:"dtXk",unit:"tỷ",fmt:v=>v?.toFixed(2)},
          {label:"Đơn XK",key:"donMoi",unit:"đơn",fmt:v=>Math.round(v||0)},
          {label:"OTD",key:"otd",unit:"%",fmt:v=>v?.toFixed(1)},
          {label:"KH QT mới",key:"khMoi",unit:"KH",fmt:v=>Math.round(v||0)},
          {label:"DT Mỹ",key:"dtMy",unit:"tỷ",fmt:v=>v?.toFixed(2)},
        ]}
            color="#34d399" callPKDAI={callPKDAI}/>

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

          <DeptOverview src="bo" weeklyData={weeklyData} wk={wk}
            kpis={[
          {label:"HĐ Ký",key:"hdKyMoi",unit:"HĐ",fmt:v=>Math.round(v||0)},
          {label:"GT HĐ",key:"gtHdKy",unit:"tỷ",fmt:v=>v?.toFixed(2)},
          {label:"HĐ VAT",key:"hoaDonXuat",unit:"HĐ",fmt:v=>Math.round(v||0)},
          {label:"Công nợ QH",key:"congNoQuaHan",unit:"tỷ",fmt:v=>v?.toFixed(2)},
        ]}
            color="#a78bfa" callPKDAI={callPKDAI}/>

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

      {/* ─── AI TƯ VẤN ─── */}
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
    </div>
  );
}
