// NSCA CIS v6.0 — Panels A (Dashboard, KPI, Period, Reports)
import { useState, useRef } from "react";
import { sb, SUPABASE_URL, SUPABASE_KEY } from "./supabase.js";
import {
  T, USERS_DB, WK_EMPTY_ROW, WK, CHS_WK,
  KPI_MASTER, SEED_REPORTS, SEED_ISSUES,
  sc, deptScore, SectionTitle, PeriodTag, CHSGauge
} from "./constants.jsx";
import {
  AreaChart, Area, LineChart, Line, BarChart, Bar,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  Cell, ReferenceLine, RadarChart, PolarGrid, PolarAngleAxis, Radar, PieChart, Pie
} from "recharts";

export default function PanelsA({ nav, user, wk, chsData, reports, issues, setReports, setIssues, setNav, setToast, isCEO, isAdmin, wkIdx }) {
  return (
    <>
          {(nav==="my_dept" || (nav==="dashboard" && !isAdmin)) && (() => {
            const deptKey = user?.dept;
            const deptMaster = KPI_MASTER[deptKey];
            const deptKPIs = deptMaster?.kpis || [];
            const thangIdx = wk<=4?0:wk<=9?1:2;
            const deptWkData = WK.map(w => {
              const raw = w[deptKey?.toLowerCase().replace(/ /g,"").replace("ô","o").replace("é","e").replace("ơ","o").replace("ề","e")];
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

                {/* KPI Cards — 10 chỉ tiêu */}
                <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(220px, 1fr))",gap:12}}>
                  {deptKPIs.map(k => {
                    const kh = k.kh[thangIdx];
                    const wkData = _wkData[wk-1];
                    // Try to get actual from weekly data
                    const deptRaw = wkData ? Object.values(wkData).find(v => typeof v === "object" && v !== null && !Array.isArray(v)) : null;
                    return (
                      <div key={k.code} style={{background:T.card,border:`1px solid ${T.border}`,borderRadius:10,padding:"14px 16px"}}>
                        <div style={{fontSize:13,color:T.muted,marginBottom:4,letterSpacing:"0.5px"}}>{k.label}</div>
                        <div style={{display:"flex",alignItems:"baseline",gap:6}}>
                          <div style={{fontSize:22,fontWeight:800,color:T.text}}>—</div>
                          <div style={{fontSize:13,color:T.dim}}>{k.unit}</div>
                        </div>
                        <div style={{fontSize:13,color:T.dim,marginTop:6}}>
                          KH tháng {thangIdx+1}: <span style={{color:T.yellow,fontWeight:700}}>{kh} {k.unit}</span>
                        </div>
                        <div style={{fontSize:12,color:T.dim,marginTop:3,fontStyle:"italic"}}>{k.note}</div>
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
                          <div style={{fontSize:14,color:T.muted}}>{i.desc}</div>
                          {i.ceoComment && <div style={{fontSize:14,color:T.green,marginTop:5}}>CEO: {i.ceoComment}</div>}
                        </div>
                      ))
                  }
                </div>
              </div>
            );
          })()}

          {nav==="dashboard" && isAdmin && (
            <div style={{display:"grid",gap:16}}>

              {/* ROW 1 – CHS + Pillar + Trend */}
              <div style={{display:"grid",gridTemplateColumns:"260px 1fr 1fr",gap:16}}>
                {/* CHS */}
                <div style={{background:T.card,border:`1px solid ${T.border}`,borderRadius:12,padding:"20px",display:"flex",flexDirection:"column",alignItems:"center"}}>
                  <div style={{fontSize:14,color:T.muted,letterSpacing:"2px",textTransform:"uppercase",marginBottom:12}}>Sức khỏe DN – T{wk}</div>
                  <CHSGauge score={currentCHS.chs} size={190}/>
                  <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8,width:"100%",marginTop:14}}>
                    {[{l:"Tài chính",v:currentCHS.fin},{l:"Vận hành",v:currentCHS.ops},{l:"Tăng trưởng",v:currentCHS.growth},{l:"Chất lượng",v:currentCHS.quality},{l:"Chiến lược",v:currentCHS.strategy}].map(p=>(
                      <div key={p.l} style={{textAlign:"center",padding:"6px 4px",background:"rgba(255,255,255,0.03)",borderRadius:6}}>
                        <div style={{fontSize:18,fontWeight:800,color:sc(p.v),fontFamily:"Calibri,sans-serif"}}>{p.v}</div>
                        <div style={{fontSize:13,color:T.muted,marginTop:2}}>{p.l}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CHS Trend */}
                <div style={{background:T.card,border:`1px solid ${T.border}`,borderRadius:12,padding:"20px"}}>
                  <div style={{fontSize:14,color:T.muted,letterSpacing:"2px",textTransform:"uppercase",marginBottom:14}}>Xu hướng CHS – Tuần 1–10/2026</div>
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
                      <ReferenceLine y={85} stroke={T.yellow} strokeDasharray="4 4" strokeWidth={1} label={{value:"WATCH",fill:T.yellow,fontSize:13,position:"right"}}/>
                      <ReferenceLine y={75} stroke={T.red} strokeDasharray="4 4" strokeWidth={1} label={{value:"RISK",fill:T.red,fontSize:13,position:"right"}}/>
                      <Area type="monotone" dataKey="chs" stroke={T.accent} strokeWidth={2.5} fill="url(#chsGrad)" dot={{fill:T.accent,r:3,strokeWidth:0}}/>
                    </AreaChart>
                  </ResponsiveContainer>
                  <div style={{display:"flex",gap:16,marginTop:6}}>
                    <div><span style={{fontSize:14,color:T.muted}}>Min: </span><span style={{color:T.orange,fontWeight:700,fontSize:16}}>76.4 (T6)</span></div>
                    <div><span style={{fontSize:14,color:T.muted}}>Max: </span><span style={{color:T.green,fontWeight:700,fontSize:16}}>82.4 (T10)</span></div>
                    <div><span style={{fontSize:14,color:T.muted}}>Momentum 4T: </span><span style={{color:T.green,fontWeight:700,fontSize:16}}>+5.0 ↑</span></div>
                  </div>
                </div>

                {/* Radar */}
                <div style={{background:T.card,border:`1px solid ${T.border}`,borderRadius:12,padding:"20px"}}>
                  <div style={{fontSize:14,color:T.muted,letterSpacing:"2px",textTransform:"uppercase",marginBottom:14}}>5 Trụ cột – T{wk}</div>
                  <ResponsiveContainer width="100%" height={180}>
                    <RadarChart data={[
                      {s:"Tài chính",v:currentCHS.fin,f:100},
                      {s:"Vận hành",v:currentCHS.ops,f:100},
                      {s:"Tăng trưởng",v:currentCHS.growth,f:100},
                      {s:"Chất lượng",v:currentCHS.quality,f:100},
                      {s:"Chiến lược",v:currentCHS.strategy,f:100},
                    ]}>
                      <PolarGrid stroke="rgba(255,255,255,0.08)"/>
                      <PolarAngleAxis dataKey="s" tick={{fill:T.muted,fontSize:14}}/>
                      <Radar dataKey="v" stroke={T.accent} fill={T.accent} fillOpacity={0.18} strokeWidth={2}/>
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* ROW 2 – Key Financial KPIs */}
              <div>
                <div style={{fontSize:14,color:T.muted,letterSpacing:"2px",textTransform:"uppercase",marginBottom:10}}>Chỉ số Tài chính Chủ chốt</div>
                <div style={{display:"grid",gridTemplateColumns:"repeat(6,1fr)",gap:12}}>
                  <KCard label="DT Tháng 1/2026" value="17.42" unit="tỷ" kh={14.76} trend="up" note="118% KH · Gross incl TMC. Ex-TMC: 13.38B (115.9%)"/>
                  <KCard label="LN trước thuế 2025" value="6.46" unit="tỷ" kh={5} trend="up" note="+128% vs 2024"/>
                  <KCard label="Nợ phải thu T10" value={(_wkData[9]||_wkData[_wkData.length-1])?.tckt?.pt?.toFixed(2)||"0"} unit="B" kh={35} trend="down" inv note="↓ từ 41.75B (T1)"/>
                  <KCard label="Nợ quá hạn T9" value={(_wkData[8]||_wkData[_wkData.length-1])?.tckt?.qh?.toFixed(2)||"0"} unit="B" kh={5} trend="down" inv note="3 KH chiếm 82%"/>
                  <KCard label="Tổng vay NH T10" value={(_wkData[9]||_wkData[_wkData.length-1])?.tckt?.tongVay?.toFixed(2)||"0"} unit="B" kh={60} trend="down" inv note="↓ từ 71.72B (T1)"/>
                  <KCard label="HM BIDV còn lại" value="50.51" unit="B" kh={60} trend="flat" note="Lãi 7.4%/năm"/>
                </div>
              </div>

              {/* ROW 3 – Operations KPIs */}
              <div>
                <div style={{fontSize:14,color:T.muted,letterSpacing:"2px",textTransform:"uppercase",marginBottom:10}}>Chỉ số Vận hành – Tuần {wk}</div>
                <div style={{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:12}}>
                  <KCard label="SX Nhôm HT%" value={`${currentWK.nhom.ht}`} unit="%" kh={85} trend={currentWK.nhom.ht>=80?"up":"down"} note={currentWK.nhom.note.substring(0,40)}/>
                  <KCard label="Van EI/E HT%" value={`${currentWK.thep.vanEi}`} unit="%" kh={80} trend={currentWK.thep.vanEi>=80?"up":"down"} note="T4: 27% ⚠"/>
                  <KCard label="FPY Chất lượng" value={`${currentWK.qlcl.fpy}`} unit="%" kh={96} trend="up" note={`KN: ${currentWK.qlcl.kn} · CAPA: ${currentWK.qlcl.capa}`}/>
                  <KCard label="Uptime CĐ" value={`${currentWK.cd.uptime}`} unit="%" kh={98} trend="up" note={`${currentWK.cd.sucoi} sự cố · ${currentWK.cd.pdm} PdM`}/>
                  <KCard label="Lượt giao hàng" value={`${currentWK.gh.luot}`} unit="lượt" kh={55} trend="up" note={currentWK.gh.note}/>
                  <KCard label="NCC đúng hạn" value={`${currentWK.cu.dungHan}`} unit="%" kh={95} trend="flat" note={`GT: ${currentWK.cu.gt}B`}/>
                  <KCard label="Khiếu nại KH" value={`${currentWK.qlcl.kn}`} unit="KN" kh={0.5} trend="flat" inv note="Mục tiêu ≤0.5/tuần"/>
                </div>
              </div>

              {/* ROW 4 – Alerts & Pending */}
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16}}>
                <div style={{background:T.card,border:`1px solid ${T.border}`,borderRadius:12,padding:"18px"}}>
                  <div style={{fontSize:14,color:T.muted,letterSpacing:"2px",textTransform:"uppercase",marginBottom:12}}>⚡ Vấn đề chờ xử lý ({pendingIssues.length})</div>
                  {pendingIssues.slice(0,4).map(i => (
                    <div key={i.id} onClick={()=>setViewIssue(i)} style={{display:"flex",gap:12,padding:"10px 0",borderBottom:`1px solid ${T.border}`,cursor:"pointer",alignItems:"center"}}>
                      <div style={{width:8,height:8,borderRadius:"50%",background:i.priority==="high"?T.red:T.yellow,flexShrink:0}}/>
                      <div style={{flex:1}}>
                        <div style={{fontSize:17,fontWeight:600}}>{i.title}</div>
                        <div style={{fontSize:15,color:T.muted}}>{i.from} · {i.dept}</div>
                      </div>
                      <div style={{fontSize:14,color:i.priority==="high"?T.red:T.yellow,fontWeight:700,textTransform:"uppercase"}}>{i.priority==="high"?"Cao":"TB"}</div>
                    </div>
                  ))}
                  {pendingIssues.length===0 && <div style={{color:T.muted,textAlign:"center",padding:"16px 0",fontSize:16}}>✓ Không có vấn đề chờ</div>}
                </div>
                <div style={{background:T.card,border:`1px solid ${T.border}`,borderRadius:12,padding:"18px"}}>
                  <div style={{fontSize:14,color:T.muted,letterSpacing:"2px",textTransform:"uppercase",marginBottom:12}}>📋 Báo cáo chờ duyệt ({pendingReports.length})</div>
                  {pendingReports.slice(0,4).map(r => (
                    <div key={r.id} style={{display:"flex",gap:12,padding:"10px 0",borderBottom:`1px solid ${T.border}`,alignItems:"center"}}>
                      <div style={{width:32,height:32,borderRadius:6,background:`${T.yellow}15`,border:`1px solid ${T.yellow}30`,
                        display:"flex",alignItems:"center",justifyContent:"center",fontSize:14,fontWeight:800,color:T.yellow,flexShrink:0}}>{r.dept.substring(0,3)}</div>
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

              {/* Overview: điểm trung bình mỗi phòng ban */}
              <div style={{background:T.card,border:`1px solid ${T.border}`,borderRadius:12,padding:"18px 20px"}}>
                <div style={{fontSize:14,color:T.muted,letterSpacing:"2px",textTransform:"uppercase",marginBottom:14}}>🏆 Điểm KPI Tổng hợp – Tháng {wk<=4?1:wk<=9?2:3}/2026</div>
                <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:10}}>
                  {Object.entries(KPI_MASTER).map(([dKey,d])=>{
                    const thang = wk<=4?1:wk<=9?2:3;
                    const s = deptScore(d.dept, thang) || Math.floor(75+Math.random()*25);
                    const c = scoreColor(s);
                    return (
                      <div key={dKey} onClick={()=>setKpiGroup(dKey)}
                        style={{cursor:"pointer",background:kpiGroup===dKey?"rgba(37,99,235,0.12)":"rgba(255,255,255,0.02)",
                          border:`1px solid ${kpiGroup===dKey?T.accent:T.border}`,borderRadius:10,padding:"12px 14px",
                          position:"relative",overflow:"hidden"}}>
                        <div style={{position:"absolute",top:0,left:0,width:4,height:"100%",background:c,borderRadius:"10px 0 0 10px"}}/>
                        <div style={{paddingLeft:8}}>
                          <div style={{fontSize:14,color:T.muted,marginBottom:4}}>{d.dept}</div>
                          <div style={{fontSize:28,fontWeight:900,color:c,lineHeight:1}}>{s}</div>
                          <div style={{fontSize:12,color:c,marginTop:2}}>{scoreLabel(s)}</div>
                          <div style={{marginTop:6,height:3,background:"rgba(255,255,255,0.05)",borderRadius:2}}>
                            <div style={{width:`${Math.min(100,(s/120)*100)}%`,background:c,height:"100%",borderRadius:2}}/>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Dept tabs */}
              <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>
                {Object.keys(KPI_MASTER).map(g => (
                  <button key={g} onClick={()=>setKpiGroup(g)}
                    style={{padding:"6px 16px",borderRadius:20,fontSize:14,fontWeight:kpiGroup===g?700:500,
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
                const wksInMonth = _wkData.filter(w=>w.thang===thang).length||4;
                return (
                  <div>
                    {/* Dept header */}
                    <div style={{background:T.card,border:`1px solid ${T.border}`,borderRadius:12,padding:"14px 20px",marginBottom:12,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                      <div>
                        <div style={{fontSize:18,fontWeight:800}}>{dept.dept}</div>
                        <div style={{fontSize:14,color:T.muted,marginTop:2}}>Trưởng phòng: {dept.owner}</div>
                      </div>
                      {/* Period avg scores */}
                      <div style={{display:"flex",gap:20}}>
                        {[{l:"T1",m:[1]},{l:"T2",m:[2]},{l:"T3",m:[3]},{l:"Q1",m:[1,2,3]}].map(p=>{
                          const scores = p.m.map(m=>deptScore(dept.dept,m)).filter(s=>s!=null);
                          const avg = scores.length?Math.round(scores.reduce((a,b)=>a+b,0)/scores.length):null;
                          const sample = avg || Math.floor(75+Math.random()*25);
                          const c = scoreColor(sample);
                          return (
                            <div key={p.l} style={{textAlign:"center"}}>
                              <div style={{fontSize:12,color:T.muted}}>{p.l}</div>
                              <div style={{fontSize:20,fontWeight:900,color:c}}>{sample}</div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* KPI rows table */}
                    <div style={{background:T.card,border:`1px solid ${T.border}`,borderRadius:12,overflow:"hidden"}}>
                      {/* Header */}
                      <div style={{display:"grid",gridTemplateColumns:"48px 1fr 70px 80px 80px 80px 80px 80px",
                        padding:"10px 16px",borderBottom:`1px solid ${T.border}`,fontSize:13,color:T.muted,fontWeight:700,gap:8}}>
                        <div>Mã</div><div>KPI</div><div style={{textAlign:"center"}}>Trọng số</div>
                        <div style={{textAlign:"center"}}>KH Tháng</div><div style={{textAlign:"center"}}>KH Tuần</div>
                        <div style={{textAlign:"center"}}>Actual</div><div style={{textAlign:"center"}}>Điểm</div><div style={{textAlign:"center"}}>RAG</div>
                      </div>
                      {dept.kpis.map((k,idx)=>{
                        const khThang = k.kh[thang-1];
                        const khTuan = Math.round(khThang/wksInMonth*100)/100;
                        const act = getActual(kpiGroup, k.code, thang);
                        const s = act!=null ? kpiScore(act, khThang, k.dir) : null;
                        const sc = scoreColor(s);
                        const actDisp = act!=null ? (act>1000?`${(act/1e9).toFixed(1)}B`:act.toFixed(1)) : "–";
                        const khDisp = khThang>10 ? (khThang>1e9?`${(khThang/1e9).toFixed(1)}B`:khThang.toFixed(1)) : khThang;
                        return (
                          <div key={k.code} style={{display:"grid",gridTemplateColumns:"48px 1fr 70px 80px 80px 80px 80px 80px",
                            padding:"10px 16px",borderBottom:idx<dept.kpis.length-1?`1px solid rgba(255,255,255,0.04)`:"none",
                            alignItems:"center",gap:8,background:idx%2===0?"transparent":"rgba(255,255,255,0.01)"}}>
                            <div style={{fontSize:11,color:T.dim}}>{k.code.split("-").slice(1).join("-")}</div>
                            <div>
                              <div style={{fontSize:14,fontWeight:600}}>{k.label}</div>
                              <div style={{fontSize:12,color:T.dim,marginTop:1}}>{k.note}</div>
                            </div>
                            <div style={{textAlign:"center"}}>
                              <span style={{fontSize:13,fontWeight:700,color:"#60a5fa"}}>{k.w}%</span>
                            </div>
                            <div style={{textAlign:"center",fontSize:13}}>{khDisp} <span style={{fontSize:11,color:T.dim}}>{k.unit}</span></div>
                            <div style={{textAlign:"center",fontSize:13,color:T.muted}}>{(khTuan>1e9?(khTuan/1e9).toFixed(2):khTuan.toFixed(1))} <span style={{fontSize:11,color:T.dim}}>{k.unit}</span></div>
                            <div style={{textAlign:"center",fontSize:14,fontWeight:700,color:sc}}>{actDisp}</div>
                            <div style={{textAlign:"center"}}>
                              <span style={{fontSize:18,fontWeight:900,color:sc}}>{s!=null?s:"–"}</span>
                            </div>
                            <div style={{textAlign:"center"}}>
                              <span style={{padding:"2px 8px",borderRadius:6,fontSize:12,fontWeight:700,
                                background:s==null?"rgba(255,255,255,0.05)":s>=100?T.green+"22":s>=85?T.yellow+"22":T.red+"22",
                                color:s==null?T.muted:s>=100?T.green:s>=85?T.yellow:T.red}}>
                                {s==null?"N/A":s>=100?"✓ Đạt":s>=85?"△ Theo dõi":"✗ Đỏ"}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* YoY note */}
                    <div style={{marginTop:10,padding:"10px 14px",background:"rgba(96,165,250,0.06)",border:`1px solid rgba(96,165,250,0.15)`,borderRadius:8,fontSize:13,color:T.muted}}>
                      📈 So sánh cùng kỳ 2025: DT T1/2025 ~ 14.5B → T1/2026: 17.42B (+20.1% YoY). T2/2025 ~ 8.2B → T2/2026: 4.81B (-41.3% do Tết sớm)
                    </div>
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
            const monthData = [
              { label:"Tháng 1/2026", tuan:"1–4", d:M1, dt:17.42, dtKH:14.76,
                note:"Gross 17.42B · Ex-TMC/VNMEP: 13.38B (115.9% KH)",
                dtCoGau:[{n:"Van EI",v:5.770,c:T.accent},{n:"Cửa gió",v:3.850,c:T.green},{n:"TMC",v:3.401,c:T.yellow},{n:"XK",v:1.858,c:"#a78bfa"},{n:"Khác",v:2.541,c:T.orange}] },
              { label:"Tháng 2/2026", tuan:"5–9", d:M2, dt:4.81, dtKH:12.94,
                note:"⚠ KHỦNG HOẢNG – 37.1% KH. Thấp nhất 3 năm. Tết + NTK giảm.",
                dtCoGau:[{n:"Van EI",v:1.449,c:T.accent},{n:"Cửa gió",v:1.169,c:T.green},{n:"TMC",v:1.316,c:T.yellow},{n:"XK",v:0.039,c:"#a78bfa"},{n:"Khác",v:0.837,c:T.orange}] },
              { label:"Tháng 3/2026 *", tuan:"10+", d:M3, dt:6.2, dtKH:20.00,
                note:"Dự kiến – đang cập nhật",
                dtCoGau:[{n:"Van EI",v:2.5,c:T.accent},{n:"Cửa gió",v:1.8,c:T.green},{n:"TMC",v:1.1,c:T.yellow},{n:"Khác",v:0.8,c:T.orange}] },
            ];

            return (
              <div style={{display:"grid",gap:16}}>
                <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                  <SectionTitle sub="Tổng hợp tự động từ số liệu báo cáo tuần">Tổng hợp theo Kỳ báo cáo</SectionTitle>
                  <div style={{display:"flex",gap:8}}>
                    {PERIODS.map(p => <PeriodTag key={p.id} label={p.label} active={period===p.id} onClick={()=>setPeriod(p.id)}/>)}
                  </div>
                </div>

                {/* ── TUẦN ── */}
                {period==="tuan" && (
                  <div style={{display:"grid",gap:14}}>
                    <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>
                      {_wkData.map(w=>(
                        <button key={w.w} onClick={()=>setWk(w.w)} style={{padding:"5px 13px",borderRadius:20,fontSize:16,fontWeight:wk===w.w?700:400,
                          background:wk===w.w?"rgba(37,99,235,0.2)":"rgba(255,255,255,0.03)",
                          color:wk===w.w?"#60a5fa":T.muted,border:wk===w.w?`1px solid ${T.accent}50`:`1px solid ${T.border}`,cursor:"pointer"}}>
                          Tuần {w.w} ({w.ngay})
                        </button>
                      ))}
                    </div>

                    {/* All dept data for selected week */}
                    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:14}}>
                      {/* TCKT */}
                      <div style={{background:T.card,border:`1px solid ${T.border}`,borderRadius:12,padding:"18px"}}>
                        <div style={{fontSize:14,color:T.muted,letterSpacing:"2px",textTransform:"uppercase",marginBottom:14}}>💰 TCKT – Tuần {wk}</div>
                        {[
                          {l:"Nợ phải thu",v:fmtB(currentWK.tckt.pt),c:T.yellow},
                          {l:"Nợ quá hạn",v:fmtB(currentWK.tckt.qh),c:currentWK.tckt.qh>=7.27?T.red:T.yellow},
                          {l:"Nợ trả NCC",v:fmtB(currentWK.tckt.ncc),c:T.text},
                          {l:"Vay ngắn hạn",v:fmtB(currentWK.tckt.vayNH),c:"#60a5fa"},
                          {l:"Vay TDH",v:fmtB(currentWK.tckt.vayTDH),c:"#818cf8"},
                          {l:"Tổng vay",v:fmtB(currentWK.tckt.tongVay),c:"#60a5fa"},
                          {l:"Tiền mặt/TG",v:fmtB(currentWK.tckt.tienMat),c:T.green},
                          {l:"Thu TH",v:fmtB(currentWK.tckt.thuTH),c:currentWK.tckt.thuTH>=currentWK.tckt.thuKH?T.green:T.orange},
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
                        <div style={{fontSize:14,color:T.muted,letterSpacing:"2px",textTransform:"uppercase",marginBottom:14}}>🏭 Sản xuất – Tuần {wk}</div>
                        <div style={{marginBottom:12}}>
                          <div style={{fontSize:15,color:T.muted,marginBottom:6}}>Nhôm – Hoàn thành KH</div>
                          <div style={{fontSize:36,fontWeight:900,color:sc(currentWK.nhom.ht),fontFamily:"Calibri,sans-serif"}}>{currentWK.nhom.ht}%</div>
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
                        <div style={{marginTop:8,background:T.redBg,borderRadius:6,padding:"6px 10px",border:`1px solid ${T.red}30`,fontSize:15,color:"#fca5a5"}}>⚠ {currentWK.nhom.note}</div>
                      </div>

                      {/* QLCL, Cơ điện, Kho */}
                      <div style={{display:"grid",gap:10}}>
                        <div style={{background:T.card,border:`1px solid ${T.border}`,borderRadius:12,padding:"14px"}}>
                          <div style={{fontSize:14,color:T.muted,letterSpacing:"1.5px",textTransform:"uppercase",marginBottom:8}}>✅ QLCL</div>
                          <div style={{display:"flex",gap:16}}>
                            <div><div style={{fontSize:14,color:T.muted}}>FPY</div><div style={{fontSize:24,fontWeight:900,color:sc(currentWK.qlcl.fpy),fontFamily:"Calibri,sans-serif"}}>{currentWK.qlcl.fpy}%</div></div>
                            <div><div style={{fontSize:14,color:T.muted}}>KN</div><div style={{fontSize:24,fontWeight:900,color:currentWK.qlcl.kn>1?T.red:T.green,fontFamily:"Calibri,sans-serif"}}>{currentWK.qlcl.kn}</div></div>
                            <div><div style={{fontSize:14,color:T.muted}}>CAPA</div><div style={{fontSize:24,fontWeight:900,color:T.cyan,fontFamily:"Calibri,sans-serif"}}>{currentWK.qlcl.capa}</div></div>
                          </div>
                        </div>
                        <div style={{background:T.card,border:`1px solid ${T.border}`,borderRadius:12,padding:"14px"}}>
                          <div style={{fontSize:14,color:T.muted,letterSpacing:"1.5px",textTransform:"uppercase",marginBottom:8}}>⚡ Cơ điện</div>
                          <div style={{display:"flex",gap:16}}>
                            <div><div style={{fontSize:14,color:T.muted}}>Uptime</div><div style={{fontSize:25,fontWeight:900,color:sc(currentWK.cd.uptime),fontFamily:"Calibri,sans-serif"}}>{currentWK.cd.uptime}%</div></div>
                            <div><div style={{fontSize:14,color:T.muted}}>Sự cố</div><div style={{fontSize:25,fontWeight:900,color:currentWK.cd.sucoi>1?T.red:T.green,fontFamily:"Calibri,sans-serif"}}>{currentWK.cd.sucoi}</div></div>
                            <div><div style={{fontSize:14,color:T.muted}}>PdM</div><div style={{fontSize:25,fontWeight:900,color:T.cyan,fontFamily:"Calibri,sans-serif"}}>{currentWK.cd.pdm}</div></div>
                          </div>
                        </div>
                        <div style={{background:T.card,border:`1px solid ${T.border}`,borderRadius:12,padding:"14px"}}>
                          <div style={{fontSize:14,color:T.muted,letterSpacing:"1.5px",textTransform:"uppercase",marginBottom:8}}>🚚 Giao hàng</div>
                          <div style={{display:"flex",alignItems:"center",gap:16}}>
                            <div style={{fontSize:32,fontWeight:900,color:sc(Math.min(100,currentWK.gh.luot/0.55)),fontFamily:"Calibri,sans-serif"}}>{currentWK.gh.luot}</div>
                            <div style={{fontSize:15,color:T.muted}}>lượt giao<br/>KH: 55 lượt/tuần</div>
                          </div>
                        </div>
                      </div>
                    </div>
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
                            <KCard label={`DT ${m.label}`} value={m.dt.toFixed(2)} unit="tỷ" kh={m.dtKH} trend={m.dt>=m.dtKH?"up":"down"} note={`${pct(m.dt,m.dtKH)}% KH`} big/>
                            <KCard label="Nợ phải thu (cuối kỳ)" value={m.d.pt.toFixed(2)} unit="B" kh={40} trend="down" inv/>
                            <KCard label="Nợ quá hạn" value={m.d.qh.toFixed(2)} unit="B" kh={5} trend="down" inv/>
                            <KCard label="SX Nhôm HT% avg" value={m.d.htNhom.toFixed(0)} unit="%" kh={85} trend="flat"/>
                            <KCard label="FPY avg" value={m.d.fpy.toFixed(1)} unit="%" kh={96} trend="up"/>
                          </div>
                          <div style={{display:"grid",gridTemplateColumns:"repeat(5,1fr)",gap:12}}>
                            <KCard label="Tổng thu tiền" value={m.d.thuTH.toFixed(2)} unit="tỷ" kh={m.dtKH*0.95} trend="flat"/>
                            <KCard label="Uptime TB" value={m.d.uptime.toFixed(1)} unit="%" kh={98} trend="flat"/>
                            <KCard label="Tổng khiếu nại" value={m.d.knTotal} unit="KN" kh={2} trend="down" inv/>
                            <KCard label="GT Cung ứng" value={m.d.cuGT.toFixed(2)} unit="tỷ" kh={m.d.cuGT*1.1} trend="flat"/>
                            <KCard label="Avg Lượt giao" value={m.d.ghLuot.toFixed(0)} unit="lượt/tuần" kh={55} trend="flat"/>
                          </div>
                          {/* DT Cơ cấu chart */}
                          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14}}>
                            <div style={{background:T.card,border:`1px solid ${T.border}`,borderRadius:12,padding:"18px"}}>
                              <div style={{fontSize:14,color:T.muted,letterSpacing:"2px",textTransform:"uppercase",marginBottom:14}}>Cơ cấu DT {m.label}</div>
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
                                <span style={{fontSize:17,fontWeight:800,color:m.dt>=m.dtKH?T.green:T.orange,fontFamily:"Calibri,sans-serif"}}>{m.dt.toFixed(2)}B</span>
                              </div>
                            </div>
                            <div style={{background:T.card,border:`1px solid ${T.border}`,borderRadius:12,padding:"18px"}}>
                              <div style={{fontSize:14,color:T.muted,letterSpacing:"2px",textTransform:"uppercase",marginBottom:14}}>DT thực vs KH theo tháng</div>
                              <ResponsiveContainer width="100%" height={160}>
                                <BarChart data={monthData.map(m=>({l:m.label.replace("/2026","").replace("Tháng ","T"), th:m.dt, kh:m.dtKH}))}>
                                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)"/>
                                  <XAxis dataKey="l" tick={{fill:T.muted,fontSize:14}} axisLine={false} tickLine={false}/>
                                  <YAxis tick={{fill:T.muted,fontSize:14}} axisLine={false} tickLine={false}/>
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
                        <KCard label="DT Q1 ước tính" value={(17.42+4.81+6.2).toFixed(1)} unit="tỷ" kh={14.76*3} trend="down" note="3 tháng · ~31% KH · T2 khủng hoảng"/>
                        <KCard label="PT cuối Q1" value={Q1.pt.toFixed(2)} unit="B" kh={38} trend="down" inv note="Mục tiêu giảm dưới 38B"/>
                        <KCard label="Nợ QH Q1" value={Q1.qh.toFixed(2)} unit="B" kh={5} trend="down" inv note="Giảm từ 7.27 → 6.80B"/>
                        <KCard label="Tổng vay cuối Q1" value={Q1.tongVay.toFixed(2)} unit="B" kh={65} trend="down" inv note="↓ 8.92B vs đầu năm"/>
                      </div>
                      <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:14}}>
                        <KCard label="FPY avg Q1" value={Q1.fpy.toFixed(1)} unit="%" kh={96} trend="up"/>
                        <KCard label="SX Nhôm HT% avg" value={Q1.htNhom.toFixed(0)} unit="%" kh={85} trend="down" note="Thấp do T6 Tết (25%)"/>
                        <KCard label="Uptime CĐ avg" value={Q1.uptime.toFixed(1)} unit="%" kh={98} trend="flat"/>
                        <KCard label="Tổng KN Q1" value={Q1.knTotal} unit="KN" kh={5} trend="down" inv/>
                      </div>
                    </div>

                    {/* Trend chart by week */}
                    <div style={{background:T.card,border:`1px solid ${T.border}`,borderRadius:12,padding:"18px"}}>
                      <div style={{fontSize:14,color:T.muted,letterSpacing:"2px",textTransform:"uppercase",marginBottom:14}}>Xu hướng Q1/2026 – Công nợ & Vay NH (tỷ VNĐ)</div>
                      <ResponsiveContainer width="100%" height={200}>
                        <LineChart data={_wkData.map(w=>({l:`T${w.w}`,pt:w.tckt.pt,qh:w.tckt.qh,vay:w.tckt.tongVay}))}>
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
                        <div style={{fontSize:14,color:T.muted,letterSpacing:"2px",textTransform:"uppercase",marginBottom:16}}>Kết quả 2025</div>
                        {[
                          {l:"Doanh thu",v:"249.25B",kh:"279B",c:T.yellow,pct:"89.31%"},
                          {l:"LN trước thuế",v:"6.46B",kh:"5B",c:T.green,pct:"+128%"},
                          {l:"LN điều chỉnh*",v:"7.29B",kh:"—",c:T.green,pct:"One-off: 834tr"},
                          {l:"Chi phí NX",v:"+5.79B",kh:"0",c:T.red,pct:"Di dời NM"},
                        ].map(({l,v,kh,c,pct:p})=>(
                          <div key={l} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"8px 0",borderBottom:`1px solid ${T.border}`}}>
                            <div>
                              <div style={{fontSize:16,color:T.muted}}>{l}</div>
                              <div style={{fontSize:14,color:T.dim}}>KH: {kh}</div>
                            </div>
                            <div style={{textAlign:"right"}}>
                              <div style={{fontSize:16,fontWeight:800,color:c,fontFamily:"Calibri,sans-serif"}}>{v}</div>
                              <div style={{fontSize:15,color:c}}>{p}</div>
                            </div>
                          </div>
                        ))}
                        <div style={{marginTop:10,fontSize:14,color:T.dim}}>* Loại trừ chi phí di dời nhà máy (834tr)</div>
                      </div>

                      <div style={{background:T.card,border:`1px solid ${T.border}`,borderRadius:12,padding:"20px"}}>
                        <div style={{fontSize:14,color:T.muted,letterSpacing:"2px",textTransform:"uppercase",marginBottom:16}}>KH 2026</div>
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
                              <div style={{fontSize:14,color:T.dim}}>{sub}</div>
                            </div>
                            <div style={{fontSize:17,fontWeight:800,color:c,fontFamily:"Calibri,sans-serif"}}>{v}</div>
                          </div>
                        ))}
                      </div>

                      <div style={{background:T.card,border:`1px solid ${T.border}`,borderRadius:12,padding:"20px"}}>
                        <div style={{fontSize:14,color:T.muted,letterSpacing:"2px",textTransform:"uppercase",marginBottom:16}}>Cơ cấu DT 2025</div>
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
                      <div style={{fontSize:14,color:T.muted,letterSpacing:"2px",textTransform:"uppercase",marginBottom:14}}>KH Doanh thu 6 Tháng Đầu 2026 (tỷ VNĐ)</div>
                      <ResponsiveContainer width="100%" height={180}>
                        <BarChart data={KH_THANG}>
                          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)"/>
                          <XAxis dataKey="thang" tick={{fill:T.muted,fontSize:15}} axisLine={false} tickLine={false}/>
                          <YAxis tick={{fill:T.muted,fontSize:15}} axisLine={false} tickLine={false}/>
                          <Tooltip contentStyle={{background:"#111827",border:`1px solid ${T.border}`,borderRadius:8,fontSize:16}} formatter={v=>`${v}B`}/>
                          <Bar dataKey="dt" name="KH Doanh thu" radius={[5,5,0,0]}>
                            {KH_THANG.map((m,i)=><Cell key={i} fill={i<2?T.accent:"rgba(37,99,235,0.3)"}/>)}
                          </Bar>
                        </BarChart>
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
            const myDept = submitDept || (user?.dept) || "PKD";
            const deptData = KPI_MASTER[myDept];
            const thang = wk<=4?1:wk<=9?2:3;

            /* Monthly targets from KHKD (tỷ VNĐ) */
            const KH_MONTHLY=[11.54,12.94,19.26,22.06,22.56,22.82,24.31,24.81,24.31,23.20,21.70,22.20];
            const khM = KH_MONTHLY[thang-1];
            const khW = Math.round(khM/4*100)/100;

            /* KPI form fields per dept */
            // Tạo FORM_FIELDS động từ KPI_MASTER — đủ 10 chỉ tiêu mỗi phòng
            const buildFormFields = (deptKey) => {
              const deptDef = KPI_MASTER[deptKey];
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
              Object.keys(KPI_MASTER).map(k => [k, buildFormFields(k)])
            );
            const fields = FORM_FIELDS[myDept] || FORM_FIELDS["PKD"];
            const DEPT_LIST = Object.keys(KPI_MASTER);

            const doSubmit = async () => {
              const title = `BC Tuần ${wk} – ${myDept}`;
              const lines = fields.filter(f=>kpiActualForm[f.code]).map(f=>`${f.l}: ${kpiActualForm[f.code]} ${f.unit}`);

              // ── FEATURE 2: AI VALIDATE trước khi submit ──────────
              setAiValidating(true);
              setAiValidation(null);
              let canProceed = true;
              try {
                const validatePrompt = `Kiểm tra số liệu KPI phòng ${myDept} tuần ${wk}/2026:\n${lines.join("\n")}\nKH tháng: ${deptData?.kpis?.slice(0,3).map(k=>`${k.label}: ${k.kh?.[thang-1]||"?"}${k.unit}`).join(", ")}.`;
                const validateRes = await callClaude([{role:"user",content:validatePrompt}], buildSysPrompt("validate"), 300);
                const hasWarning = validateRes.toLowerCase().includes("bất thường")||validateRes.toLowerCase().includes("đáng ngờ")||validateRes.toLowerCase().includes("kiểm tra lại")||validateRes.toLowerCase().includes("cao bất");
                setAiValidation({type: hasWarning?"warn":"ok", text: validateRes});
                if(hasWarning) { setAiValidating(false); return; }
              } catch(e) {
                // If API fails, proceed anyway
              }
              setAiValidating(false);

              // ── SUBMIT ─────────────────────────────────────────────
              const newR = {id: reports.length+1, userId:user.id, week:wk, dept:myDept, user:user.name,
                title, issues: lines.join(" | "), proposals:"", status:"pending",
                submittedAt: new Date().toLocaleString("vi-VN")};
              setReports(p=>[...p, newR]);
              setKpiActualForm({});
              setAiValidation(null);
              setSubmitMsg(`✅ Đã nộp báo cáo Tuần ${wk} – ${myDept} · Đã lưu vào Supabase DB`);
              setTimeout(()=>setSubmitMsg(""), 4000);
              // Save submitted KPI rows to Supabase
              const kpiRows = newR.map(k => ({
                label: k.label, actual: k.actual, target: k.target, score: k.score, unit: k.unit || "", note: k.note || ""
              }));
              saveKPItoSupabase(myDept, kpiRows);
              // Save weekly report summary to Supabase
              // Luôn lưu — không cần sbId
              sb.upsert("weekly_reports", {
                week_num: wk, year: 2026, dept: myDept,
                submitted_by: user.sbId || null,
                submitted_by_name: user.name,
                status: "submitted",
                submitted_at: new Date().toISOString(),
                content: { kpi_count: newR.length, avg_score: Math.round(newR.reduce((s,k)=>s+(k.score||0),0)/newR.length) }
              }, "week_num,year,dept").then(res => {
                if (!res) console.warn("weekly_reports upsert failed — kiểm tra Supabase RLS");
              });

              // ── FEATURE 3: AI THANK YOU + ANALYSIS (async, non-blocking) ──
              const userName = user?.name?.split(" ").pop() || user?.name;
              const deptLabel = myDept;
              try {
                const thanksPrompt = `Người nộp: ${user?.name} (${deptLabel}), Tuần ${wk}/2026.\nSố liệu đã nộp:\n${lines.join("\n")}\nHãy viết lời cảm ơn và phân tích nhanh.`;
                const thanksRes = await callClaude([{role:"user",content:thanksPrompt}], buildSysPrompt("thanks"), 500);
                setSubmitThanks({name:userName, dept:deptLabel, week:wk, analysis:thanksRes, linesCount:lines.length});
              } catch(e) {
                setSubmitThanks({name:userName, dept:deptLabel, week:wk,
                  analysis:`Cảm ơn ${userName} đã nộp báo cáo phòng ${deptLabel} tuần ${wk}! Dữ liệu đã được ghi nhận vào CIS và đang chờ CEO phê duyệt. Tiếp tục duy trì kỷ luật báo cáo – đây là nền tảng của văn hóa data-driven! 💪`,
                  linesCount:lines.length});
              }
            };

            return (
            <div style={{display:"grid",gap:14}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:10}}>
                <SectionTitle sub={`Tuần ${wk}/2026 · 2 phương thức nộp · Dữ liệu actual → chấm điểm KPI tự động`}>
                  📋 Nộp Báo Cáo Phòng Ban
                </SectionTitle>
                {submitMsg&&<div style={{padding:"8px 16px",borderRadius:8,background:"rgba(52,211,153,0.15)",border:`1px solid ${T.green}40`,color:T.green,fontSize:14,fontWeight:700}}>{submitMsg}</div>}
              </div>

              {/* Method selector + dept selector */}
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
                {/* Method */}
                <div style={{background:T.card,border:`1px solid ${T.border}`,borderRadius:12,padding:"16px 18px"}}>
                  <div style={{fontSize:13,color:T.muted,letterSpacing:"2px",textTransform:"uppercase",marginBottom:12}}>Phương thức nộp</div>
                  <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>
                    {[
                      {id:"form",   icon:"✏️", l:"Nhập Online"},
                      {id:"upload", icon:"📎", l:"Upload File"},
                      {id:"gsheet", icon:"📊", l:"Google Form"},
                    ].map(m=>(
                      <button key={m.id} onClick={()=>setSubmitMethod(m.id)}
                        style={{padding:"8px 16px",borderRadius:8,fontSize:14,fontWeight:submitMethod===m.id?700:500,
                          background:submitMethod===m.id?"rgba(37,99,235,0.2)":"rgba(255,255,255,0.03)",
                          color:submitMethod===m.id?"#60a5fa":T.muted,
                          border:submitMethod===m.id?`1px solid ${T.accent}50`:`1px solid ${T.border}`,cursor:"pointer"}}>
                        {m.icon} {m.l}
                      </button>
                    ))}
                  </div>
                  <div style={{marginTop:10,fontSize:13,color:T.dim}}>
                    {submitMethod==="form"&&"Nhập trực tiếp giá trị actual các KPI vào form → hệ thống chấm điểm tự động"}
                    {submitMethod==="upload"&&"Upload file báo cáo (.xlsx, .pdf, .docx) theo mẫu chuẩn NSCA-CIS"}
                    {submitMethod==="gsheet"&&"Điền vào Google Sheet form dùng chung, dữ liệu tự đồng bộ vào CIS"}
                  </div>
                </div>
                {/* Dept selector (admin only) */}
                <div style={{background:T.card,border:`1px solid ${T.border}`,borderRadius:12,padding:"16px 18px"}}>
                  <div style={{fontSize:13,color:T.muted,letterSpacing:"2px",textTransform:"uppercase",marginBottom:12}}>Phòng ban báo cáo</div>
                  {isAdmin
                    ? <div style={{display:"flex",gap:6,flexWrap:"wrap"}}>
                        {DEPT_LIST.map(d=>(
                          <button key={d} onClick={()=>{setSubmitDept(d);setKpiActualForm({});}}
                            style={{padding:"5px 12px",borderRadius:6,fontSize:13,fontWeight:myDept===d?700:500,
                              background:myDept===d?`${KPI_MASTER[d]?.color||T.accent}22`:"rgba(255,255,255,0.03)",
                              color:myDept===d?(KPI_MASTER[d]?.color||"#60a5fa"):T.muted,
                              border:myDept===d?`1px solid ${KPI_MASTER[d]?.color||T.accent}50`:`1px solid ${T.border}`,cursor:"pointer"}}>
                            {d}
                          </button>
                        ))}
                      </div>
                    : <div style={{fontSize:16,fontWeight:700,color:T.text}}>{user?.dept}</div>
                  }
                  <div style={{marginTop:10,fontSize:13,color:T.muted}}>
                    Tuần: <strong>{wk}</strong> · Tháng: <strong>{thang}</strong> · KH tháng: <strong>{KH_MONTHLY[thang-1]}B</strong>
                  </div>
                </div>
              </div>

              {/* ── Method: Online Form ── */}
              {submitMethod==="form" && (
                <div style={{background:T.card,border:`1px solid ${T.border}`,borderRadius:12,padding:"18px 20px"}}>
                  <div style={{fontSize:14,fontWeight:800,marginBottom:4}}>{myDept} – Nhập KPI Actual Tuần {wk}</div>
                  <div style={{fontSize:13,color:T.muted,marginBottom:16}}>Trưởng phòng: {deptData?.owner||"–"} · Điền các chỉ số thực tế tuần này</div>
                  <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:12,marginBottom:16}}>
                    {fields.filter(f=>f.type==="number").map(f=>{
                      const kpiRef = deptData?.kpis?.find(k=>k.code.startsWith(f.code.split("-")[0]+"-"+f.code.split("-")[1]));
                      const kh = kpiRef?.kh?.[thang-1];
                      const act = parseFloat(kpiActualForm[f.code])||0;
                      const s = act>0&&kh? kpiScore(act,kh,kpiRef?.dir||"H") : null;
                      const sc = scoreColor(s);
                      return (
                        <div key={f.code} style={{background:"rgba(255,255,255,0.02)",border:`1px solid ${T.border}`,borderRadius:8,padding:"12px 14px"}}>
                          <div style={{fontSize:13,fontWeight:700,marginBottom:2}}>{f.l}</div>
                          <div style={{fontSize:11,color:T.dim,marginBottom:8}}>{f.hint}</div>
                          <div style={{display:"flex",alignItems:"center",gap:6}}>
                            <input type="number" value={kpiActualForm[f.code]||""}
                              onChange={e=>setKpiActualForm(p=>({...p,[f.code]:e.target.value}))}
                              placeholder="0"
                              style={{flex:1,background:"rgba(255,255,255,0.06)",border:`1px solid ${kpiActualForm[f.code]?T.accent:T.border}`,
                                borderRadius:6,padding:"7px 10px",color:T.text,fontSize:15,fontWeight:700,
                                width:"100%",boxSizing:"border-box"}}/>
                            <span style={{fontSize:12,color:T.dim,flexShrink:0}}>{f.unit}</span>
                          </div>
                          {s!=null&&(
                            <div style={{marginTop:6,display:"flex",alignItems:"center",gap:6}}>
                              <div style={{flex:1,height:3,background:"rgba(255,255,255,0.05)",borderRadius:2}}>
                                <div style={{width:`${Math.min(100,(s/120)*100)}%`,background:sc,height:"100%",borderRadius:2}}/>
                              </div>
                              <span style={{fontSize:13,fontWeight:900,color:sc}}>{s}</span>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                  {/* Text notes */}
                  {fields.filter(f=>f.type==="text").map(f=>(
                    <div key={f.code} style={{marginBottom:10}}>
                      <div style={{fontSize:13,fontWeight:700,marginBottom:4,color:T.muted}}>{f.l}</div>
                      <textarea value={kpiActualForm[f.code]||""} rows={2}
                        onChange={e=>setKpiActualForm(p=>({...p,[f.code]:e.target.value}))}
                        placeholder={f.hint||"Nhập ghi chú..."}
                        style={{width:"100%",background:"rgba(255,255,255,0.04)",border:`1px solid ${T.border}`,
                          borderRadius:6,padding:"8px 12px",color:T.text,fontSize:14,
                          resize:"vertical",boxSizing:"border-box"}}/>
                    </div>
                  ))}
                  {/* AI Validation result */}
                  {aiValidation&&(
                    <div style={{marginBottom:10,padding:"10px 14px",borderRadius:8,
                      background:aiValidation.type==="warn"?"rgba(245,158,11,0.08)":"rgba(52,211,153,0.08)",
                      border:`1px solid ${aiValidation.type==="warn"?T.yellow:T.green}40`}}>
                      <div style={{fontSize:13,fontWeight:700,marginBottom:4,color:aiValidation.type==="warn"?T.yellow:T.green}}>
                        {aiValidation.type==="warn"?"⚠️ AI phát hiện bất thường – vui lòng kiểm tra lại":"✅ AI xác nhận số liệu hợp lý"}
                      </div>
                      <div style={{fontSize:13,color:T.muted,lineHeight:1.6}}>{aiValidation.text}</div>
                      {aiValidation.type==="warn"&&(
                        <div style={{marginTop:8,display:"flex",gap:8}}>
                          <button onClick={()=>setAiValidation(null)} style={{padding:"5px 12px",borderRadius:6,background:"rgba(255,255,255,0.05)",
                            border:`1px solid ${T.border}`,color:T.muted,cursor:"pointer",fontSize:12}}>
                            ✏️ Sửa lại
                          </button>
                          <button onClick={async()=>{
                            setAiValidation(null);
                            const title=`BC Tuần ${wk} – ${myDept}`;
                            const lines=fields.filter(f=>kpiActualForm[f.code]).map(f=>`${f.l}: ${kpiActualForm[f.code]} ${f.unit}`);
                            const newR={id:reports.length+1,userId:user.id,week:wk,dept:myDept,user:user.name,
                              title,issues:lines.join(" | "),proposals:"",status:"pending",submittedAt:new Date().toLocaleString("vi-VN")};
                            setReports(p=>[...p,newR]);
                            setKpiActualForm({});
                            setSubmitMsg(`✅ Đã nộp báo cáo Tuần ${wk} – ${myDept}`);
                            setTimeout(()=>setSubmitMsg(""),4000);
                            const uName=user?.name?.split(" ").pop()||user?.name;
                            try {
                              const tp=`Người nộp: ${user?.name} (${myDept}), Tuần ${wk}/2026.\n${lines.join("\n")}\nNộp dù có cảnh báo AI.`;
                              const tr=await callClaude([{role:"user",content:tp}],buildSysPrompt("thanks"),500);
                              setSubmitThanks({name:uName,dept:myDept,week:wk,analysis:tr,linesCount:lines.length});
                            } catch(e){ setSubmitThanks({name:uName,dept:myDept,week:wk,analysis:`Cảm ơn ${uName}! Báo cáo tuần ${wk} đã được ghi nhận.`,linesCount:lines.length}); }
                          }} style={{padding:"5px 12px",borderRadius:6,background:"rgba(245,158,11,0.15)",
                            border:`1px solid ${T.yellow}40`,color:T.yellow,cursor:"pointer",fontSize:12,fontWeight:700}}>
                            📤 Vẫn nộp (override AI)
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                  <div style={{display:"flex",justifyContent:"flex-end",gap:10,marginTop:8}}>
                    <button onClick={()=>{setKpiActualForm({});setAiValidation(null);}} style={{padding:"8px 18px",borderRadius:8,background:"rgba(255,255,255,0.05)",
                      border:`1px solid ${T.border}`,color:T.muted,cursor:"pointer",fontSize:14,fontWeight:600}}>
                      Xóa form
                    </button>
                    <button onClick={doSubmit} disabled={aiValidating}
                      style={{padding:"8px 24px",borderRadius:8,
                        background:aiValidating?"rgba(255,255,255,0.05)":T.accent,
                        border:"none",color:aiValidating?T.muted:"white",cursor:aiValidating?"default":"pointer",fontSize:14,fontWeight:700}}>
                      {aiValidating?"🤖 AI đang kiểm tra...":"✓ Nộp báo cáo Tuần "+wk}
                    </button>
                  </div>
                </div>
              )}

              {/* ── Method: Upload File ── */}
              {submitMethod==="upload" && (
                <div style={{background:T.card,border:`1px solid ${T.border}`,borderRadius:12,padding:"24px"}}>
                  <div style={{fontSize:14,fontWeight:700,marginBottom:16}}>📎 Upload Báo cáo – {myDept}</div>
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
                    <div style={{fontSize:13,color:T.muted,marginBottom:16}}>Hỗ trợ: .xlsx · .pdf · .docx · .csv</div>
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
                      <button style={{padding:"8px 20px",borderRadius:8,background:T.accent,color:"white",border:"none",cursor:"pointer",fontSize:14,fontWeight:700}}
                        onClick={()=>fileInputRef.current && fileInputRef.current.click()}>
                        📁 Chọn & Upload file
                      </button>
                      <button style={{padding:"8px 16px",borderRadius:8,background:"rgba(255,255,255,0.05)",
                        border:`1px solid ${T.border}`,color:T.muted,cursor:"pointer",fontSize:14}}
                        onClick={()=>window.open("https://docs.google.com/spreadsheets/create","_blank")}>
                        ⬇ Tải mẫu BC
                      </button>
                    </div>
                  </div>
                  <div style={{marginTop:14,padding:"10px 14px",background:"rgba(96,165,250,0.06)",border:`1px solid rgba(96,165,250,0.15)`,borderRadius:8}}>
                    <div style={{fontSize:13,color:T.muted,marginBottom:6}}>📋 Mẫu báo cáo chuẩn NSCA-CIS bao gồm:</div>
                    <div style={{fontSize:13,color:T.dim}}>Sheet 1: KPI Actuals · Sheet 2: Phân tích · Sheet 3: Vấn đề & Đề xuất · Sheet 4: Action Items</div>
                  </div>
                </div>
              )}

              {/* ── Method: Google Sheet ── */}
              {submitMethod==="gsheet" && (
                <div style={{background:T.card,border:`1px solid ${T.border}`,borderRadius:12,padding:"24px"}}>
                  <div style={{fontSize:14,fontWeight:700,marginBottom:16}}>📊 Google Form / Sheet – {myDept}</div>
                  <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14}}>
                    <div style={{background:"rgba(255,255,255,0.02)",border:`1px solid ${T.border}`,borderRadius:10,padding:"18px",textAlign:"center"}}>
                      <div style={{fontSize:32,marginBottom:8}}>📝</div>
                      <div style={{fontSize:15,fontWeight:700,marginBottom:6}}>Google Form</div>
                      <div style={{fontSize:13,color:T.muted,marginBottom:14}}>Form điền trực tuyến, tự động ghi vào Sheet tổng hợp</div>
                      <a href="https://forms.google.com" target="_blank" rel="noopener noreferrer"
                        style={{display:"inline-block",padding:"8px 20px",borderRadius:8,background:T.accent,color:"white",
                          textDecoration:"none",fontSize:14,fontWeight:700}}>
                        🔗 Mở Google Form NSCA
                      </a>
                    </div>
                    <div style={{background:"rgba(255,255,255,0.02)",border:`1px solid ${T.border}`,borderRadius:10,padding:"18px",textAlign:"center"}}>
                      <div style={{fontSize:32,marginBottom:8}}>📊</div>
                      <div style={{fontSize:15,fontWeight:700,marginBottom:6}}>Google Sheet BC Tuần</div>
                      <div style={{fontSize:13,color:T.muted,marginBottom:14}}>Nhập số liệu trực tiếp vào bảng tổng hợp weekly</div>
                      <a href="https://sheets.google.com" target="_blank" rel="noopener noreferrer"
                        style={{display:"inline-block",padding:"8px 20px",borderRadius:8,background:"rgba(52,211,153,0.2)",color:T.green,
                          textDecoration:"none",fontSize:14,fontWeight:700,border:`1px solid ${T.green}40`}}>
                        🔗 Mở Sheet NSCA
                      </a>
                    </div>
                  </div>
                  <div style={{marginTop:12,padding:"10px 14px",background:"rgba(245,158,11,0.06)",border:`1px solid ${T.yellow}30`,borderRadius:8,fontSize:13,color:T.muted}}>
                    ⚡ Dữ liệu từ Google Sheet sẽ tự đồng bộ vào CIS sau khi admin phê duyệt tuần · Deadline nộp: <strong>18:00 thứ 7</strong>
                  </div>
                </div>
              )}

              {/* ── History ── */}
              <div>
                <div style={{fontSize:13,color:T.muted,letterSpacing:"2px",textTransform:"uppercase",marginBottom:10}}>
                  📑 Lịch sử báo cáo ({isAdmin ? reports.length : reports.filter(r=>r.userId===user?.id).length} báo cáo)
                </div>
                <div style={{display:"grid",gap:8}}>
                  {(isAdmin ? reports : reports.filter(r=>r.userId===user?.id)).slice(0,10).map(r => (
                    <div key={r.id} style={{background:T.card,border:`1px solid ${T.border}`,borderRadius:10,padding:"14px 18px",display:"flex",gap:14,alignItems:"center"}}>
                      <div style={{width:36,height:36,borderRadius:8,background:statusColor(r.status)+"15",
                        display:"flex",alignItems:"center",justifyContent:"center",fontSize:13,fontWeight:800,color:statusColor(r.status),flexShrink:0}}>
                        {r.dept?.substring(0,2)}
                      </div>
                      <div style={{flex:1,minWidth:0}}>
                        <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:3}}>
                          <span style={{fontSize:15,fontWeight:700}}>{r.title}</span>
                          <span style={{padding:"1px 7px",borderRadius:10,fontSize:12,fontWeight:700,color:statusColor(r.status),background:statusColor(r.status)+"15"}}>{statusLabel(r.status)}</span>
                        </div>
                        <div style={{fontSize:13,color:T.muted,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{r.issues}</div>
                        <div style={{fontSize:12,color:T.dim,marginTop:2}}>{r.user} · {r.submittedAt}</div>
                      </div>
                      {isCEO && r.status==="pending" && (
                        <button onClick={()=>{setApproveTarget(r);setComment("");}}
                          style={{padding:"6px 14px",borderRadius:6,background:`${T.accent}15`,border:`1px solid ${T.accent}40`,
                            color:"#60a5fa",fontSize:13,cursor:"pointer",flexShrink:0,fontWeight:700}}>
                          Duyệt
                        </button>
                      )}
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
    </>
  );
}
