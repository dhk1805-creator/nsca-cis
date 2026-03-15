// NSCA CIS v6.0 — Panels B (Issues, Users, Health, Config, AI)
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
import { MinutesPanel } from "./App.jsx";
import PKDDashboard from "./PKDDashboard.jsx";

export default function PanelsB({ nav, user, wk, chsData, reports, issues, setReports, setIssues, setNav, setToast, isCEO, isAdmin, wkIdx }) {
  return (
    <>
          {nav==="issues" && (
            <div style={{display:"grid",gap:14}}>
              <SectionTitle sub={`${issues.length} vấn đề · ${pendingIssues.length} chờ xử lý`}>
                Vấn đề & Đề xuất
                <button onClick={()=>setIssueOpen(true)} style={{background:"linear-gradient(135deg,#2563eb,#1d4ed8)",border:"none",borderRadius:8,
                  padding:"9px 18px",color:"white",fontSize:16,fontWeight:700,cursor:"pointer"}}>＋ Tạo vấn đề</button>
              </SectionTitle>
              {(isAdmin ? issues : issues.filter(i=>i.fromId===user.id)).map(issue => (
                <div key={issue.id} onClick={()=>{setViewIssue(issue);setComment(issue.ceoComment||"");}}
                  style={{background:T.card,border:`1px solid ${T.border}`,borderRadius:12,padding:"18px 20px",cursor:"pointer",display:"flex",gap:16,alignItems:"flex-start",
                    transition:"background 0.15s"}}>
                  <div style={{width:10,height:10,borderRadius:"50%",background:issue.priority==="high"?T.red:T.yellow,marginTop:4,flexShrink:0}}/>
                  <div style={{flex:1}}>
                    <div style={{display:"flex",gap:10,alignItems:"center",marginBottom:6}}>
                      <span style={{fontSize:17,fontWeight:700}}>{issue.title}</span>
                      <span style={{padding:"2px 8px",borderRadius:12,fontSize:14,fontWeight:700,color:statusColor(issue.status),background:statusColor(issue.status)+"15"}}>{statusLabel(issue.status)}</span>
                      <span style={{padding:"2px 8px",borderRadius:12,fontSize:14,color:issue.priority==="high"?T.red:T.yellow,background:issue.priority==="high"?T.redBg:T.yellowBg}}>{issue.priority==="high"?"Ưu tiên cao":"Trung bình"}</span>
                    </div>
                    <div style={{fontSize:16,color:T.muted,marginBottom:4}}>{issue.from} · {issue.dept} · {issue.createdAt}</div>
                    <div style={{fontSize:16,color:"#94a3b8"}}>{issue.desc}</div>
                    {issue.ceoComment && <div style={{marginTop:6,background:T.greenBg,borderRadius:6,padding:"5px 10px",fontSize:15,color:T.green}}>💬 CEO: {issue.ceoComment}</div>}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ════════════════════════════════════
              USERS
          ════════════════════════════════════ */}
          {nav==="users" && isAdmin && (() => {
            const newUser = newUserForm;
            const setNewUser = setNewUserForm;
            const showAdd = showAddUser;
            const setShowAdd = setShowAddUser;
            const activeUsers = users.filter(u=>u.active!==false);
            const inactiveUsers = users.filter(u=>u.active===false);
            const DEPTS = ["BAN LÃNH ĐẠO","PKD","TCKT","HCNS","SX NHÔM","SX THÉP","QLCL","CƠ ĐIỆN","GIAO HÀNG","KHO","CUNG ỨNG","R&D","BO","Int. Dept"];
            const ROLES = ["CEO","Director","Manager","Staff","Admin"];
            const initials = n => n.split(" ").slice(-2).map(w=>w[0]).join("").toUpperCase();
            const addUser = () => {
              if(!newUser.name||!newUser.pass) return;
              const id = Math.max(...users.map(u=>u.id))+1;
              const colors = ["#f472b6","#60a5fa","#34d399","#f59e0b","#a78bfa","#f97316"];
              setUsers(p=>[...p,{...newUser,id,avatar:initials(newUser.name),color:colors[id%colors.length],active:true}]);
              setNewUser({name:"",dept:"HCNS",role:"Manager",pass:""});
              setShowAdd(false);
            };
            const toggleUser = (id) => setUsers(p=>p.map(u=>u.id===id?{...u,active:!u.active}:u));
            return (
              <div style={{display:"grid",gap:16}}>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                  <SectionTitle sub={`${activeUsers.length} đang hoạt động · ${inactiveUsers.length} đã tắt`}>👤 Quản lý Người dùng</SectionTitle>
                  {isCEO&&<button onClick={()=>setShowAdd(!showAdd)} style={{padding:"8px 20px",borderRadius:8,background:T.accent,color:"white",border:"none",cursor:"pointer",fontSize:14,fontWeight:700}}>
                    {showAdd?"✕ Đóng":"+ Thêm user"}
                  </button>}
                </div>

                {/* Add user form */}
                {showAdd&&isCEO&&(
                  <div style={{background:"rgba(37,99,235,0.08)",border:`1px solid ${T.accent}40`,borderRadius:12,padding:"20px"}}>
                    <div style={{fontSize:16,fontWeight:700,marginBottom:14,color:"#60a5fa"}}>➕ Thêm người dùng mới</div>
                    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr auto",gap:10,alignItems:"end"}}>
                      <div>
                        <div style={{fontSize:12,color:T.muted,marginBottom:4}}>Họ và tên *</div>
                        <input value={newUser.name} onChange={e=>setNewUser(p=>({...p,name:e.target.value}))}
                          placeholder="Nguyễn Văn A" style={{width:"100%",background:"rgba(255,255,255,0.06)",border:`1px solid ${T.border}`,
                          borderRadius:6,padding:"8px 12px",color:T.text,fontSize:14,boxSizing:"border-box"}}/>
                      </div>
                      <div>
                        <div style={{fontSize:12,color:T.muted,marginBottom:4}}>Phòng ban</div>
                        <select value={newUser.dept} onChange={e=>setNewUser(p=>({...p,dept:e.target.value}))}
                          style={{width:"100%",background:T.bg2,border:`1px solid ${T.border}`,borderRadius:6,padding:"8px 12px",color:T.text,fontSize:14}}>
                          {DEPTS.map(d=><option key={d}>{d}</option>)}
                        </select>
                      </div>
                      <div>
                        <div style={{fontSize:12,color:T.muted,marginBottom:4}}>Vai trò</div>
                        <select value={newUser.role} onChange={e=>setNewUser(p=>({...p,role:e.target.value}))}
                          style={{width:"100%",background:T.bg2,border:`1px solid ${T.border}`,borderRadius:6,padding:"8px 12px",color:T.text,fontSize:14}}>
                          {ROLES.map(r=><option key={r}>{r}</option>)}
                        </select>
                      </div>
                      <div>
                        <div style={{fontSize:12,color:T.muted,marginBottom:4}}>Mật khẩu *</div>
                        <input value={newUser.pass} onChange={e=>setNewUser(p=>({...p,pass:e.target.value}))}
                          placeholder="password" style={{width:"100%",background:"rgba(255,255,255,0.06)",border:`1px solid ${T.border}`,
                          borderRadius:6,padding:"8px 12px",color:T.text,fontSize:14,boxSizing:"border-box"}}/>
                      </div>
                      <button onClick={addUser} style={{padding:"8px 20px",borderRadius:6,background:T.green,color:"white",border:"none",cursor:"pointer",fontSize:14,fontWeight:700,whiteSpace:"nowrap"}}>
                        ✓ Tạo
                      </button>
                    </div>
                  </div>
                )}

                {/* Active users */}
                <div>
                  <div style={{fontSize:13,color:T.muted,letterSpacing:"2px",textTransform:"uppercase",marginBottom:10}}>✅ Đang hoạt động ({activeUsers.length})</div>
                  <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:10}}>
                    {activeUsers.map(u=>(
                      <div key={u.id} style={{background:T.card,border:`1px solid ${T.border}`,borderRadius:12,padding:"14px 16px",display:"flex",gap:12,alignItems:"center"}}>
                        <div style={{width:44,height:44,borderRadius:"50%",background:u.color+"33",border:`2px solid ${u.color}`,
                          display:"flex",alignItems:"center",justifyContent:"center",fontSize:14,fontWeight:900,color:u.color,flexShrink:0}}>
                          {u.avatar}
                        </div>
                        <div style={{flex:1,minWidth:0}}>
                          <div style={{fontSize:15,fontWeight:700,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{u.name}</div>
                          <div style={{fontSize:13,color:T.muted,marginTop:1}}>{u.role} · {u.dept}</div>
                          <div style={{fontSize:12,color:T.dim,fontFamily:"monospace",marginTop:1}}>🔑 {u.pass}</div>
                        </div>
                        {isCEO&&u.role!=="CEO"&&(
                          <button onClick={()=>toggleUser(u.id)} style={{padding:"5px 10px",borderRadius:6,background:T.red+"22",
                            border:`1px solid ${T.red}40`,color:T.red,cursor:"pointer",fontSize:12,fontWeight:700,whiteSpace:"nowrap"}}>
                            Tắt
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Inactive users */}
                {inactiveUsers.length>0&&(
                  <div>
                    <div style={{fontSize:13,color:T.muted,letterSpacing:"2px",textTransform:"uppercase",marginBottom:10}}>❌ Đã vô hiệu ({inactiveUsers.length})</div>
                    <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:10}}>
                      {inactiveUsers.map(u=>(
                        <div key={u.id} style={{background:"rgba(255,255,255,0.01)",border:`1px solid ${T.border}`,borderRadius:12,padding:"14px 16px",display:"flex",gap:12,alignItems:"center",opacity:0.5}}>
                          <div style={{width:44,height:44,borderRadius:"50%",background:"rgba(255,255,255,0.05)",border:`2px solid ${T.dim}`,
                            display:"flex",alignItems:"center",justifyContent:"center",fontSize:14,fontWeight:900,color:T.dim,flexShrink:0}}>
                            {u.avatar}
                          </div>
                          <div style={{flex:1,minWidth:0}}>
                            <div style={{fontSize:15,fontWeight:700,color:T.muted,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>🚫 {u.name}</div>
                            <div style={{fontSize:13,color:T.dim,marginTop:1}}>{u.role} · {u.dept}</div>
                          </div>
                          {isCEO&&(
                            <button onClick={()=>toggleUser(u.id)} style={{padding:"5px 10px",borderRadius:6,background:T.green+"22",
                              border:`1px solid ${T.green}40`,color:T.green,cursor:"pointer",fontSize:12,fontWeight:700,whiteSpace:"nowrap"}}>
                              Mở lại
                            </button>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })()}

          {/* ════════════════════════════════════
              HEALTH SCORE (formerly Finance detail)
          ════════════════════════════════════ */}
          {nav==="health" && (
            <div style={{display:"grid",gap:16}}>
              <SectionTitle sub="Sức khỏe doanh nghiệp chi tiết theo tuần · CHS = f(Tài chính, Vận hành, Tăng trưởng, Chất lượng, Chiến lược)">💓 Health Score</SectionTitle>
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
                  <div style={{fontSize:14,color:T.muted,letterSpacing:"2px",textTransform:"uppercase",marginBottom:14}}>📈 Diễn biến CHS theo tuần</div>
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
                  <div style={{fontSize:14,color:T.muted,letterSpacing:"2px",textTransform:"uppercase",marginBottom:14}}>🏦 Tín dụng & Thanh khoản</div>
                  {[
                    {l:"Vay NH (BIDV+MSB)",v:`${currentWK.tckt.vayNH.toFixed(2)}B`,bar:currentWK.tckt.vayNH/60,c:T.accent},
                    {l:"Vay TDH",v:`${currentWK.tckt.vayTDH.toFixed(2)}B`,bar:currentWK.tckt.vayTDH/20,c:"#818cf8"},
                    {l:"Tổng vay",v:`${currentWK.tckt.tongVay.toFixed(2)}B`,bar:currentWK.tckt.tongVay/75,c:T.orange},
                    {l:"Tiền mặt/TG",v:`${currentWK.tckt.tienMat.toFixed(2)}B`,bar:currentWK.tckt.tienMat/20,c:T.green},
                    {l:"Phải thu",v:`${currentWK.tckt.pt.toFixed(2)}B`,bar:currentWK.tckt.pt/50,c:T.yellow},
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
              <SectionTitle sub="Căn cứ ngày giờ tạo file trong Google Drive · Deadline: 18:00 thứ 7 hàng tuần">📑 Tình trạng nộp báo cáo</SectionTitle>
              <div style={{background:T.card,border:`1px solid ${T.border}`,borderRadius:12,padding:"20px"}}>
                <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:10,marginBottom:16}}>
                  {[{l:"Nộp đúng hạn",v:"8",c:T.green},{l:"Nộp trễ",v:"2",c:T.red},{l:"Chưa nộp",v:"1",c:T.yellow},{l:"Tổng phòng ban",v:"11",c:T.muted}].map(s=>(
                    <div key={s.l} style={{background:"rgba(255,255,255,0.03)",borderRadius:8,padding:"14px",textAlign:"center"}}>
                      <div style={{fontSize:24,fontWeight:900,color:s.c}}>{s.v}</div>
                      <div style={{fontSize:14,color:T.muted,marginTop:4}}>{s.l}</div>
                    </div>
                  ))}
                </div>
                <div style={{overflowX:"auto"}}>
                  <table style={{width:"100%",borderCollapse:"collapse",fontSize:16}}>
                    <thead>
                      <tr style={{borderBottom:`1px solid ${T.border}`}}>
                        {["Phòng ban","Người nộp","Deadline","Nộp lúc","Trạng thái","Ghi chú"].map(h=>(
                          <th key={h} style={{padding:"8px 12px",textAlign:"left",color:T.muted,fontWeight:600,fontSize:14,letterSpacing:"1px",textTransform:"uppercase"}}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        {dept:"TCKT",user:"Nguyễn Tiến Duẩn",deadline:"Thứ 7 18:00",submitted:"Thứ 6 14:23",status:"early",note:"Tuần 9"},
                        {dept:"PKD",user:"Phòng KD",deadline:"Thứ 7 18:00",submitted:"Thứ 7 17:45",status:"ok",note:"Đúng hạn"},
                        {dept:"SX Nhôm",user:"Nguyễn Văn Ngọc",deadline:"Thứ 7 18:00",submitted:"Thứ 7 20:11",status:"late",note:"Trễ 2h11p"},
                        {dept:"SX Thép",user:"Hoàng Mạnh Tùng",deadline:"Thứ 7 18:00",submitted:"Thứ 6 09:00",status:"early",note:"Sớm 1 ngày"},
                        {dept:"QLCL",user:"Nguyễn Lương Tuấn",deadline:"Thứ 7 18:00",submitted:"Thứ 7 16:30",status:"ok",note:"Đúng hạn"},
                        {dept:"Cơ điện",user:"Kỹ thuật",deadline:"Thứ 7 18:00",submitted:"Thứ 7 15:00",status:"ok",note:"Đúng hạn"},
                        {dept:"Giao hàng",user:"Bộ phận GH",deadline:"Thứ 7 18:00",submitted:"Thứ 7 18:45",status:"late",note:"Trễ 45 phút"},
                        {dept:"Kho",user:"Thủ kho",deadline:"Thứ 7 18:00",submitted:"Thứ 6 16:00",status:"early",note:"Sớm"},
                        {dept:"Cung ứng",user:"Mua hàng",deadline:"Thứ 7 18:00",submitted:"Thứ 6 11:00",status:"early",note:"Sớm"},
                        {dept:"HCNS",user:"Nhân sự",deadline:"Thứ 7 18:00",submitted:"Thứ 7 17:55",status:"ok",note:"Đúng hạn"},
                        {dept:"RD",user:"Phòng RD",deadline:"Thứ 7 18:00",submitted:"—",status:"missing",note:"Chưa nộp T9"},
                      ].map((r,i)=>{
                        const sc2 = r.status==="early"?T.cyan:r.status==="ok"?T.green:r.status==="late"?T.red:T.yellow;
                        const sl = r.status==="early"?"⏫ Sớm":r.status==="ok"?"✅ Đúng hạn":r.status==="late"?"⏰ Trễ":"❌ Chưa nộp";
                        return (
                          <tr key={r.dept} style={{borderBottom:`1px solid ${T.border}`,background:i%2===0?"transparent":"rgba(255,255,255,0.01)"}}>
                            <td style={{padding:"8px 12px",fontWeight:700}}>{r.dept}</td>
                            <td style={{padding:"8px 12px",color:T.muted}}>{r.user}</td>
                            <td style={{padding:"8px 12px",color:T.muted}}>{r.deadline}</td>
                            <td style={{padding:"8px 12px",color:T.text}}>{r.submitted}</td>
                            <td style={{padding:"8px 12px"}}><span style={{color:sc2,fontWeight:700,fontSize:15}}>{sl}</span></td>
                            <td style={{padding:"8px 12px",color:T.muted,fontSize:15}}>{r.note}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
                <div style={{marginTop:12,padding:"10px 12px",background:"rgba(37,99,235,0.08)",borderRadius:8,fontSize:15,color:T.muted}}>
                  ℹ️ Trạng thái được xác định tự động từ timestamp tạo file trên Google Drive. Kết nối Drive API để cập nhật real-time.
                </div>
              </div>
            </div>
          )}

          {/* ════════════════════════════════════
              RECOMMENDATIONS – Khuyến nghị
          ════════════════════════════════════ */}
          {nav==="recs" && (
            <div style={{display:"grid",gap:16}}>
              <SectionTitle sub="Khuyến nghị từ hệ thống CIS dựa trên phân tích KPI và xu hướng dữ liệu">💡 Khuyến nghị</SectionTitle>
              {[
                {pri:"🔴",title:"Khủng hoảng doanh thu T2/2026",body:"DT T2 chỉ đạt 4.81B (37.1% KH). Cần họp khẩn PKD+CEO để phân tích nguyên nhân và phương án ứng phó ngay trong T3.",action:"Họp khẩn trước 15/03",dept:"PKD + CEO",status:"urgent"},
                {pri:"🟡",title:"Tồn kho EUY – 600 cái chờ khuôn",body:"600 cái Van EUY chờ khuôn mới. Khuôn đã đặt nhưng chưa nhận. Cân nhắc đặt hàng khẩn hoặc tìm phương án thay thế tạm thời.",action:"Xác nhận ETA khuôn với NCC",dept:"SX Nhôm + Cung ứng",status:"high"},
                {pri:"🟡",title:"36 đơn GALAXYTECH chờ chốt màu sơn",body:"36 đơn đang tồn do chờ KH xác nhận màu. PKD cần follow-up khách hàng để giải phóng đơn hàng.",action:"PKD gọi cho GALAXYTECH trong tuần này",dept:"PKD",status:"high"},
                {pri:"🟡",title:"Encoder CNC dự phòng",body:"Encoder CNC bị lỗi T8 gây sự cố 2 lần. Hiện chưa có dự phòng. Đề xuất mua 2 cái encoder dự phòng (~15tr/cái).",action:"Duyệt PO mua encoder",dept:"Cơ điện",status:"medium"},
                {pri:"🟢",title:"Vay NH giảm liên tục",body:"Vay ngắn hạn đã giảm từ 57.76B (T0) xuống 48.60B (T9) – giảm 9.16B trong 9 tuần. Tiếp tục tối ưu dòng tiền.",action:"Duy trì kế hoạch trả nợ BIDV",dept:"TCKT",status:"good"},
              ].map((r,i)=>(
                <div key={i} style={{background:T.card,border:`1px solid ${r.status==="urgent"?T.red:r.status==="good"?T.green:T.border}`,borderRadius:12,padding:"18px 20px"}}>
                  <div style={{display:"flex",gap:12,alignItems:"flex-start"}}>
                    <div style={{fontSize:23,lineHeight:1,flexShrink:0}}>{r.pri}</div>
                    <div style={{flex:1}}>
                      <div style={{fontSize:18,fontWeight:700,marginBottom:6}}>{r.title}</div>
                      <div style={{fontSize:16,color:"#94a3b8",marginBottom:10}}>{r.body}</div>
                      <div style={{display:"flex",gap:8}}>
                        <span style={{background:"rgba(37,99,235,0.12)",borderRadius:6,padding:"4px 10px",fontSize:15,color:T.accent}}>→ {r.action}</span>
                        <span style={{background:"rgba(255,255,255,0.05)",borderRadius:6,padding:"4px 10px",fontSize:15,color:T.muted}}>{r.dept}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ════════════════════════════════════
              ACTION TRACKER
          ════════════════════════════════════ */}
          {nav==="actions" && (
            <div style={{display:"grid",gap:16}}>
              <SectionTitle sub="Theo dõi tiến độ hành động từ các quyết định CEO và phiên họp giao ban">✅ Action Tracker</SectionTitle>
              <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:10,marginBottom:4}}>
                {[{l:"Đang thực hiện",v:"5",c:T.accent},{l:"Quá hạn",v:"2",c:T.red},{l:"Hoàn thành",v:"8",c:T.green},{l:"Tổng actions",v:"15",c:T.muted}].map(s=>(
                  <div key={s.l} style={{background:T.card,border:`1px solid ${T.border}`,borderRadius:10,padding:"14px",textAlign:"center"}}>
                    <div style={{fontSize:25,fontWeight:900,color:s.c}}>{s.v}</div>
                    <div style={{fontSize:14,color:T.muted,marginTop:3}}>{s.l}</div>
                  </div>
                ))}
              </div>
              {[
                {id:"A01",title:"Mua 2 encoder CNC dự phòng",owner:"Cơ điện",deadline:"15/03/2026",status:"overdue",from:"CEO T8",progress:20},
                {id:"A02",title:"Họp PKD phân tích DT T2 thấp",owner:"PKD + CEO",deadline:"14/03/2026",status:"open",from:"CIS Rec",progress:0},
                {id:"A03",title:"Follow-up GALAXYTECH màu sơn",owner:"PKD",deadline:"13/03/2026",status:"open",from:"CIS Rec",progress:40},
                {id:"A04",title:"Trả gốc BIDV kỳ Q1",owner:"TCKT",deadline:"31/03/2026",status:"open",from:"KH TCKT",progress:60},
                {id:"A05",title:"Triển khai SPC Van EI thường xuyên",owner:"QLCL",deadline:"31/03/2026",status:"open",from:"KPI Lead",progress:60},
                {id:"A06",title:"Cập nhật tồn kho theo nhóm VT HVAC",owner:"Kho",deadline:"07/03/2026",status:"overdue",from:"CEO comment",progress:30},
                {id:"A07",title:"Nhập khuôn EUY mới",owner:"Cung ứng",deadline:"20/03/2026",status:"open",from:"SX Nhôm",progress:70},
                {id:"A08",title:"Hoàn thiện báo cáo BCTC tháng 1",owner:"TCKT",deadline:"28/02/2026",status:"done",from:"Quy trình",progress:100},
              ].map(a=>{
                const sc3 = a.status==="done"?T.green:a.status==="overdue"?T.red:T.accent;
                const sl = a.status==="done"?"✅ Xong":a.status==="overdue"?"⏰ Quá hạn":"🔄 Đang làm";
                return (
                  <div key={a.id} style={{background:T.card,border:`1px solid ${a.status==="overdue"?T.red+"50":T.border}`,borderRadius:10,padding:"14px 18px",display:"flex",gap:14,alignItems:"center"}}>
                    <div style={{fontSize:15,fontWeight:800,color:T.dim,width:36}}>{a.id}</div>
                    <div style={{flex:1}}>
                      <div style={{display:"flex",gap:8,alignItems:"center",marginBottom:4}}>
                        <span style={{fontSize:17,fontWeight:700}}>{a.title}</span>
                        <span style={{fontSize:14,color:sc3,fontWeight:700}}>{sl}</span>
                      </div>
                      <div style={{display:"flex",gap:8,marginBottom:6}}>
                        <span style={{fontSize:15,color:T.muted}}>👤 {a.owner}</span>
                        <span style={{fontSize:15,color:T.muted}}>📅 {a.deadline}</span>
                        <span style={{fontSize:15,color:T.dim}}>từ: {a.from}</span>
                      </div>
                      <div style={{display:"flex",alignItems:"center",gap:8}}>
                        <div style={{flex:1,height:4,borderRadius:2,background:"rgba(255,255,255,0.06)"}}>
                          <div style={{height:"100%",width:`${a.progress}%`,background:sc3,borderRadius:2,transition:"width 0.5s"}}/>
                        </div>
                        <span style={{fontSize:15,color:T.muted,width:28}}>{a.progress}%</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* ════════════════════════════════════
              HỌP GIAO BAN
          ════════════════════════════════════ */}
          {nav==="meeting" && (
            <div style={{display:"grid",gap:16}}>
              <SectionTitle sub="Lịch sử và nội dung họp giao ban hàng tuần">🤝 Họp giao ban</SectionTitle>
              <div style={{display:"grid",gridTemplateColumns:"300px 1fr",gap:16}}>
                <div style={{background:T.card,border:`1px solid ${T.border}`,borderRadius:12,padding:"16px"}}>
                  <div style={{fontSize:14,color:T.muted,letterSpacing:"2px",textTransform:"uppercase",marginBottom:12}}>📅 Các phiên họp</div>
                  {_wkData.slice().reverse().map(w=>(
                    <div key={w.w} style={{padding:"10px 12px",borderRadius:8,background:"rgba(255,255,255,0.03)",marginBottom:6,cursor:"pointer",border:`1px solid ${T.border}`}}>
                      <div style={{fontSize:16,fontWeight:700}}>Tuần {w.w} · {w.ngay}/01/2026</div>
                      <div style={{fontSize:14,color:T.muted,marginTop:2}}>Giao ban thứ 2 sáng · 8:00</div>
                    </div>
                  ))}
                </div>
                <div style={{background:T.card,border:`1px solid ${T.border}`,borderRadius:12,padding:"20px"}}>
                  <div style={{fontSize:14,color:T.muted,letterSpacing:"2px",textTransform:"uppercase",marginBottom:16}}>📋 Nội dung họp Tuần 9</div>
                  {[
                    {time:"8:00",item:"Điểm qua KPI tuần 8 – TCKT báo cáo tài chính",status:"done"},
                    {time:"8:15",item:"SX Nhôm: tình trạng đơn EUY 600 cái chờ khuôn",status:"done"},
                    {time:"8:25",item:"PKD: phân tích DT T2 thấp – nguyên nhân và kế hoạch T3",status:"done"},
                    {time:"8:40",item:"Cơ điện: báo cáo sự cố encoder CNC – đề xuất mua dự phòng",status:"done"},
                    {time:"8:50",item:"Phân công action items tuần 10",status:"done"},
                  ].map((it,i)=>(
                    <div key={i} style={{display:"flex",gap:14,padding:"10px 0",borderBottom:`1px solid ${T.border}`}}>
                      <div style={{fontSize:15,color:T.accent,fontWeight:700,width:36}}>{it.time}</div>
                      <div style={{flex:1,fontSize:16,color:T.text}}>{it.item}</div>
                      <div style={{fontSize:14,color:T.green}}>✓</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ════════════════════════════════════
              QUYẾT ĐỊNH CEO
          ════════════════════════════════════ */}
          {nav==="ceo_dec" && (
            <div style={{display:"grid",gap:16}}>
              <SectionTitle sub="Ghi nhận và tra cứu các quyết định của CEO theo thời gian">⚖️ Quyết định CEO</SectionTitle>
              {[
                {date:"28/02/2026",w:"T9",title:"Duyệt phương án chuyển SX Louver thay Van EI",context:"Van EI thiếu đầu vào, NS nhà máy giảm. Louver có đủ vật tư.",dec:"Đồng ý chuyển dịch tạm thời sang Louver để duy trì năng suất. Tái đánh giá T11.",type:"Sản xuất",status:"active"},
                {date:"28/02/2026",w:"T9",title:"Phê duyệt kế hoạch trả nợ BIDV Q1/2026",context:"BIDV yêu cầu trả gốc định kỳ. TCKT đề xuất lộ trình 3B/tháng.",dec:"Chấp thuận kế hoạch. TCKT thực hiện đúng tiến độ. Báo cáo CEO hàng tuần.",type:"Tài chính",status:"active"},
                {date:"09/01/2026",w:"T1",title:"Cập nhật giới hạn nợ quá hạn cho phép",context:"Nợ QH 7.27B (17.9% tổng PT). 3 KH lớn chiếm 82%.",dec:"Duy trì mức QH dưới 15%. Giao TCKT theo dõi và report tuần. Làm việc trực tiếp với 3 KH lớn.",type:"Tài chính",status:"active"},
              ].map((d,i)=>(
                <div key={i} style={{background:T.card,border:`1px solid ${T.border}`,borderRadius:12,padding:"20px"}}>
                  <div style={{display:"flex",gap:12,marginBottom:12}}>
                    <span style={{fontSize:14,background:"rgba(37,99,235,0.12)",borderRadius:6,padding:"3px 8px",color:T.accent,fontWeight:700}}>{d.type}</span>
                    <span style={{fontSize:14,color:T.muted}}>{d.date} · Tuần {d.w}</span>
                    <span style={{marginLeft:"auto",fontSize:14,color:T.green,fontWeight:700}}>● Còn hiệu lực</span>
                  </div>
                  <div style={{fontSize:17,fontWeight:800,marginBottom:8}}>{d.title}</div>
                  <div style={{fontSize:16,color:T.muted,marginBottom:8,fontStyle:"italic"}}>Bối cảnh: {d.context}</div>
                  <div style={{background:"rgba(37,99,235,0.07)",borderRadius:8,padding:"12px",borderLeft:`3px solid ${T.accent}`}}>
                    <div style={{fontSize:14,color:T.accent,letterSpacing:"1px",marginBottom:4}}>QUYẾT ĐỊNH CEO</div>
                    <div style={{fontSize:16,color:T.text}}>{d.dec}</div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ════════════════════════════════════
              BIÊN BẢN HỌP
          ════════════════════════════════════ */}
          {nav==="minutes" && <MinutesPanel />}

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
            const currentW = _wkData[activeWk-1]||_wkData[_wkData.length-1]||WK_EMPTY_ROW(activeWk);
            // Aggregate production/revenue for current week
            const dt = currentW.pkd?.dt||0;
            const khdt = currentW.pkd?.kh||0;
            const nhomHT = currentW.nhom?.ht||0;
            const thepVAV = currentW.thep?.vav||0;
            const uptime = currentW.cd?.uptime||0;
            const vayCuoiTuan = currentW.tc?.vayNH||0;
            const luotGH = currentW.gh?.luot||0;

            return (
            <div style={{display:"grid",gap:16}}>
              <SectionTitle sub="Mở tuần mới / Khóa tuần cũ · Tổng quan sản xuất & doanh thu theo tuần">📅 Quản lý tuần – CEO</SectionTitle>

              {/* Week timeline */}
              <div style={{background:T.card,border:`1px solid ${T.border}`,borderRadius:12,padding:"18px 20px"}}>
                <div style={{fontSize:13,color:T.muted,letterSpacing:"2px",textTransform:"uppercase",marginBottom:14}}>📆 Trạng thái các tuần · Q1/2026</div>
                <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>
                  {_wkData.map(w=>{
                    const locked = lockedWks[w.w];
                    const isActive = w.w===activeWk;
                    const chs = (chsData[w.w-1]||chsData[0]).chs;
                    const chsColor = chs>=80?T.green:chs>=75?T.yellow:T.red;
                    return (
                      <div key={w.w} style={{flex:"0 0 calc(20% - 8px)",background:isActive?"rgba(37,99,235,0.12)":locked?"rgba(52,211,153,0.04)":"rgba(255,255,255,0.02)",
                        border:`1px solid ${isActive?T.accent:locked?"rgba(52,211,153,0.25)":T.yellow+"40"}`,borderRadius:10,padding:"12px 10px",textAlign:"center"}}>
                        <div style={{fontSize:15,fontWeight:900,color:isActive?T.accent:locked?T.green:T.yellow}}>T{w.w}</div>
                        <div style={{fontSize:12,color:T.dim,marginTop:2}}>{w.ngay}/2026</div>
                        <div style={{margin:"6px 0",fontSize:18,fontWeight:900,color:chsColor}}>{chs}</div>
                        <div style={{fontSize:11,color:T.dim,marginBottom:8}}>CHS</div>
                        {locked
                          ? <div style={{display:"flex",flexDirection:"column",gap:4}}>
                              <div style={{fontSize:11,fontWeight:700,color:T.green}}>🔒 Đã khóa</div>
                              {isCEO&&<button onClick={()=>openWk(w.w)} style={{padding:"3px 8px",borderRadius:4,background:"rgba(245,158,11,0.15)",border:`1px solid ${T.yellow}40`,color:T.yellow,cursor:"pointer",fontSize:11,fontWeight:700}}>Mở lại</button>}
                            </div>
                          : <div style={{display:"flex",flexDirection:"column",gap:4}}>
                              <div style={{fontSize:11,fontWeight:700,color:T.yellow}}>🔓 Đang mở</div>
                              {isCEO&&<button onClick={()=>lockWk(w.w)} style={{padding:"3px 8px",borderRadius:4,background:"rgba(52,211,153,0.15)",border:`1px solid ${T.green}40`,color:T.green,cursor:"pointer",fontSize:11,fontWeight:700}}>Khóa</button>}
                            </div>
                        }
                      </div>
                    );
                  })}
                </div>
                {/* Add new week button */}
                <div style={{marginTop:12,display:"flex",justifyContent:"flex-end"}}>
                  <button onClick={()=>{ setWk(10); setActiveWk(10); }} style={{padding:"8px 20px",borderRadius:8,background:T.accent,color:"white",border:"none",cursor:"pointer",fontSize:14,fontWeight:700}}>
                    + Kích hoạt Tuần tiếp theo (T11)
                  </button>
                </div>
              </div>

              {/* Tổng quan tuần đang xem */}
              <div style={{background:T.card,border:`1px solid ${T.border}`,borderRadius:12,padding:"18px 20px"}}>
                <div style={{fontSize:13,color:T.muted,letterSpacing:"2px",textTransform:"uppercase",marginBottom:14}}>📊 Tổng quan Tuần {activeWk} – Sản xuất & Tài chính</div>
                <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:12}}>
                  {[
                    {l:"DT thực hiện",v:`${dt}B`,kh:`KH ${khdt}B`,pct:khdt>0?Math.round(dt/khdt*100):0,c:dt/khdt>=1?T.green:dt/khdt>=0.8?T.yellow:T.red,icon:"💰"},
                    {l:"% HT SX Nhôm",v:`${nhomHT}%`,kh:"KH 100%",pct:nhomHT,c:nhomHT>=100?T.green:nhomHT>=85?T.yellow:T.red,icon:"🔩"},
                    {l:"VAV Box hoàn thành",v:`${thepVAV}%`,kh:"KH 100%",pct:thepVAV,c:thepVAV>=100?T.green:thepVAV>=85?T.yellow:T.red,icon:"🏭"},
                    {l:"Uptime thiết bị",v:`${uptime}%`,kh:"KH 95%",pct:uptime,c:uptime>=95?T.green:uptime>=90?T.yellow:T.red,icon:"⚙️"},
                    {l:"Dư nợ NH",v:`${vayCuoiTuan}B`,kh:"KH ↓",pct:null,c:T.muted,icon:"🏦"},
                    {l:"Lượt giao hàng",v:`${luotGH}`,kh:"tuần",pct:null,c:T.muted,icon:"🚚"},
                    {l:"CHS tuần",v:`${(chsData[activeWk-1]||chsData[0]).chs}`,kh:"Target 80+",pct:(chsData[activeWk-1]||chsData[0]).chs,c:(chsData[activeWk-1]||chsData[0]).chs>=80?T.green:T.yellow,icon:"💓"},
                    {l:"Vay TDH",v:`${currentW.tc?.vayTDH||14.9}B`,kh:"KH ↓",pct:null,c:T.muted,icon:"📈"},
                  ].map((item,i)=>(
                    <div key={i} style={{background:"rgba(255,255,255,0.02)",border:`1px solid ${T.border}`,borderRadius:8,padding:"12px 14px"}}>
                      <div style={{fontSize:20,marginBottom:4}}>{item.icon}</div>
                      <div style={{fontSize:13,color:T.muted,marginBottom:4}}>{item.l}</div>
                      <div style={{fontSize:24,fontWeight:900,color:item.c}}>{item.v}</div>
                      <div style={{fontSize:12,color:T.dim,marginTop:3}}>{item.kh}</div>
                      {item.pct!=null&&(
                        <div style={{marginTop:6,height:3,background:"rgba(255,255,255,0.05)",borderRadius:2}}>
                          <div style={{width:`${Math.min(100,item.pct)}%`,background:item.c,height:"100%",borderRadius:2}}/>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* P&L Tổng hợp Q1 */}
              <div style={{background:T.card,border:`1px solid ${T.border}`,borderRadius:12,padding:"18px 20px"}}>
                <div style={{fontSize:13,color:T.muted,letterSpacing:"2px",textTransform:"uppercase",marginBottom:14}}>📋 P&L Tổng hợp – Q1/2026 (ước tính)</div>
                <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:12}}>
                  {[
                    {l:"Tổng DT",v:"28.4B",sub:"T1:17.4 + T2:4.8 + T3:~6.2B",c:T.text},
                    {l:"KH DT Q1",v:"45.7B",sub:"Kế hoạch quý 1",c:T.muted},
                    {l:"% Đạt DT Q1",v:"62%",sub:"⚠ Cần tăng tốc T3",c:T.red},
                    {l:"Tổng biến phí",v:"~19B",sub:"Est. 67% doanh thu",c:T.text},
                    {l:"Lợi nhuận gộp",v:"~9.4B",sub:"Biên GP ~33%",c:T.green},
                    {l:"YoY so Q1/2025",v:"DT tương đương",sub:"Tết sớm ảnh hưởng T2",c:T.muted},
                  ].map((r,i)=>(
                    <div key={i} style={{padding:"12px 14px",background:"rgba(255,255,255,0.02)",border:`1px solid ${T.border}`,borderRadius:8}}>
                      <div style={{fontSize:13,color:T.muted,marginBottom:4}}>{r.l}</div>
                      <div style={{fontSize:22,fontWeight:900,color:r.c}}>{r.v}</div>
                      <div style={{fontSize:12,color:T.dim,marginTop:3}}>{r.sub}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quy trình khóa tuần */}
              <div style={{background:T.card,border:`1px solid ${T.border}`,borderRadius:12,padding:"18px 20px"}}>
                <div style={{fontSize:13,color:T.muted,letterSpacing:"2px",textTransform:"uppercase",marginBottom:14}}>⚙️ Quy trình phê duyệt & khóa dữ liệu tuần</div>
                {[
                  {step:"1",title:"Nộp báo cáo",desc:"Các phòng ban nộp BC trước 18:00 thứ 7",status:"auto"},
                  {step:"2",title:"TCKT tổng hợp",desc:"TCKT kiểm tra & tổng hợp số liệu tài chính",status:"manual"},
                  {step:"3",title:"CEO phê duyệt",desc:"CEO review dashboard và approve số liệu tuần",status:"manual"},
                  {step:"4",title:"Khóa dữ liệu",desc:"Hệ thống khóa – không thể chỉnh sửa sau khi khóa",status:"auto"},
                ].map(s=>(
                  <div key={s.step} style={{display:"flex",gap:14,padding:"10px 0",borderBottom:`1px solid ${T.border}`}}>
                    <div style={{width:26,height:26,borderRadius:"50%",background:"rgba(37,99,235,0.15)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:14,fontWeight:800,color:T.accent,flexShrink:0}}>{s.step}</div>
                    <div style={{flex:1}}>
                      <div style={{fontSize:15,fontWeight:700}}>{s.title}</div>
                      <div style={{fontSize:13,color:T.muted,marginTop:2}}>{s.desc}</div>
                    </div>
                    <div style={{fontSize:13,color:s.status==="auto"?T.cyan:T.yellow,alignSelf:"center"}}>{s.status==="auto"?"⚡ Tự động":"👤 Thủ công"}</div>
                  </div>
                ))}
              </div>
            </div>
            );
          })()}

          {/* ════════════════════════════════════
              TÀI LIỆU
          ════════════════════════════════════ */}
          {nav==="documents" && (
            <div style={{display:"grid",gap:16}}>
              <SectionTitle sub="Kho tài liệu nội bộ · Kết nối Google Drive NSCA">📁 Tài liệu</SectionTitle>
              <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:12}}>
                {[
                  {icon:"📊",title:"Chiến lược 2026-2030",sub:"TÀI LIỆU CHIẾN LƯỢC NSCA",date:"01/2026",tag:"Chiến lược"},
                  {icon:"📈",title:"KPI Master 2026",sub:"Bộ chỉ số KPI Doanh nghiệp",date:"01/2026",tag:"KPI"},
                  {icon:"🏭",title:"KHSX Quý 1/2026",sub:"Kế hoạch sản xuất Q1",date:"02/2026",tag:"SX"},
                  {icon:"💰",title:"BCTC Năm 2025",sub:"Báo cáo tài chính quản trị",date:"12/2025",tag:"TCKT"},
                  {icon:"📋",title:"Mô hình tổ chức 2025-2030",sub:"Cơ cấu nhân sự",date:"01/2026",tag:"HCNS"},
                  {icon:"🌿",title:"Sổ tay chất thải Starduct",sub:"Quy trình môi trường",date:"2025",tag:"QLCL"},
                  {icon:"📦",title:"Catalogue sản phẩm 2024-25",sub:"Brief catalogue HVAC",date:"2024",tag:"KD"},
                  {icon:"🔬",title:"Kế hoạch RD 2026",sub:"Nghiên cứu phát triển",date:"01/2026",tag:"RD"},
                  {icon:"⚠️",title:"Báo cáo phân tích Rủi ro 2026",sub:"Risk assessment",date:"01/2026",tag:"CEO"},
                ].map((d,i)=>(
                  <div key={i} style={{background:T.card,border:`1px solid ${T.border}`,borderRadius:12,padding:"16px",cursor:"pointer",display:"flex",gap:12,alignItems:"flex-start"}}>
                    <div style={{fontSize:24,flexShrink:0}}>{d.icon}</div>
                    <div style={{flex:1}}>
                      <div style={{fontSize:16,fontWeight:700,marginBottom:3}}>{d.title}</div>
                      <div style={{fontSize:14,color:T.muted,marginBottom:6}}>{d.sub}</div>
                      <div style={{display:"flex",gap:6}}>
                        <span style={{fontSize:13,background:"rgba(37,99,235,0.1)",borderRadius:4,padding:"2px 6px",color:T.accent}}>{d.tag}</span>
                        <span style={{fontSize:13,color:T.dim}}>{d.date}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

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
                    {l:"CIS Version",v:"v5.0",status:"current"},
                    {l:"Dữ liệu tuần hiện tại",v:`Tuần ${wk}/2026`,status:"live"},
                    {l:"Last update",v:"10/03/2026",status:"info"},
                  ]},
                ].map((sec,i)=>(
                  <div key={i} style={{background:T.card,border:`1px solid ${T.border}`,borderRadius:12,padding:"18px"}}>
                    <div style={{fontSize:14,color:T.muted,letterSpacing:"2px",textTransform:"uppercase",marginBottom:14}}>{sec.icon} {sec.title}</div>
                    {sec.items.map(it=>(
                      <div key={it.l} style={{display:"flex",justifyContent:"space-between",padding:"8px 0",borderBottom:`1px solid ${T.border}`}}>
                        <span style={{fontSize:15,color:T.muted}}>{it.l}</span>
                        <div style={{display:"flex",gap:8,alignItems:"center"}}>
                          <span style={{fontSize:15,color:T.text,fontFamily:"Calibri,sans-serif"}}>{it.v}</span>
                          <span style={{fontSize:13,color:["connected","active","set","current","live"].includes(it.status)?T.green:T.yellow}}>
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

          {/* ════════════════════════════════════
              🤖 AI ASSISTANT
          ════════════════════════════════════ */}

          {/* ══════ NHẮC NHỞ TỰ ĐỘNG ══════ */}
          {nav==="reminder" && (() => {
            const DEPT_CONTACTS = {
              "HCNS":       { name:"Đặng Thanh Sơn",   email:"sondt@nsca.vn" },
              "TCKT":       { name:"Nguyễn Tiến Duẩn", email:"duannt@nsca.vn" },
              "PKD":        { name:"Đào Nguyên Ngọc",  email:"ndao@nsca.vn" },
              "KHO":        { name:"Nguyễn Thị Hà",    email:"hant@nsca.vn" },
              "CƠ ĐIỆN":   { name:"Đinh Văn Phong",    email:"phongdv@nsca.vn" },
              "R&D":        { name:"Phạm Hoài Nam",     email:"namph@nsca.vn" },
              "QLCL":       { name:"Nguyễn Lương Tuấn",email:"tuannl@nsca.vn" },
              "SX NHÔM":   { name:"Nguyễn Văn Ngọc",  email:"ngocnv@nsca.vn" },
              "SX THÉP":   { name:"Hoàng Mạnh Tùng",  email:"tunghm@nsca.vn" },
              "CUNG ỨNG":  { name:"Đặng Thị Kim Anh", email:"anhdtk@nsca.vn" },
              "GIAO HÀNG": { name:"Việt Đức",          email:"ducvt@nsca.vn" },
              "BO":        { name:"Chị Tâm BO",   email:"tamntt@nsca.vn" },
              "Int. Dept": { name:"Anh Santi",           email:"santiago@nsca.vn" },
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
                    <div style={{fontSize:13,color:T.muted,marginTop:4}}>Tự động gửi email cho phòng ban chưa nộp BC · Thứ 7 21:00 → Thứ 2 09:00</div>
                  </div>
                  <div style={{display:"flex",gap:8}}>
                    <button onClick={checkStatus} disabled={reminderLoading}
                      style={{background:"rgba(255,255,255,0.06)",border:`1px solid ${T.border}`,borderRadius:8,
                        padding:"8px 16px",color:T.text,fontSize:13,cursor:"pointer"}}>
                      {reminderLoading ? "⏳" : "🔄 Kiểm tra"}
                    </button>
                    <button onClick={()=>sendReminders(true)} disabled={reminderLoading}
                      style={{background:"linear-gradient(135deg,#2563eb,#1d4ed8)",border:"none",borderRadius:8,
                        padding:"8px 20px",color:"white",fontSize:13,cursor:"pointer",fontWeight:700}}>
                      📧 Gửi Ngay
                    </button>
                  </div>
                </div>

                {/* Tabs */}
                <div style={{display:"flex",gap:4,marginBottom:20,background:"rgba(255,255,255,0.03)",
                    borderRadius:10,padding:4,width:"fit-content"}}>
                  {[["status","📊 Trạng thái tuần này"],["schedule","⏰ Lịch cron"],["settings","⚙️ Cài đặt"]].map(([k,l])=>(
                    <button key={k} onClick={()=>setReminderTab(k)}
                      style={{padding:"6px 16px",borderRadius:7,border:"none",fontSize:13,cursor:"pointer",
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
                              <div style={{fontSize:12,color:T.muted,marginTop:4}}>{c.label}</div>
                            </div>
                          ))}
                        </div>

                        {/* Missing depts */}
                        {reminderStatus.missingDepts?.length > 0 ? (
                          <div>
                            <div style={{fontSize:14,fontWeight:700,marginBottom:10,color:T.red}}>
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
                                      <div style={{fontWeight:700,fontSize:14}}>{dept}</div>
                                      <div style={{fontSize:12,color:T.muted}}>{c?.name} · {c?.email}</div>
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
                            <div style={{fontSize:13,color:T.muted,marginBottom:8}}>✅ Đã nộp: {reminderStatus.submittedDepts.join(" · ")}</div>
                          </div>
                        )}

                        {/* Last send result */}
                        {reminderStatus.lastSend && (
                          <div style={{marginTop:16,background:"rgba(255,255,255,0.03)",border:`1px solid ${T.border}`,
                              borderRadius:10,padding:"14px"}}>
                            <div style={{fontSize:13,fontWeight:700,marginBottom:8}}>Kết quả gửi gần nhất:</div>
                            {reminderStatus.lastSend.dryRun && (
                              <div style={{color:T.yellow,fontSize:13}}>⚠️ Dry run — Chưa cấu hình Gmail SMTP trong Vercel Env Vars</div>
                            )}
                            {reminderStatus.lastSend.results?.map((r,i)=>(
                              <div key={i} style={{fontSize:12,color:r.status==="sent"?T.green:T.red,padding:"3px 0"}}>
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
                        borderRadius:10,padding:"14px 18px",marginBottom:20,fontSize:13}}>
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
                              color:T.accent,fontWeight:800,fontSize:14}}>
                            {i+1}
                          </div>
                          <div style={{flex:1}}>
                            <div style={{fontWeight:700,fontSize:14}}>{s.time}</div>
                            <div style={{fontSize:12,color:T.muted,marginTop:2}}>{s.note}</div>
                          </div>
                          <code style={{background:"rgba(255,255,255,0.06)",padding:"4px 10px",borderRadius:6,
                              fontSize:12,color:T.cyan}}>{s.cron}</code>
                        </div>
                      ))}
                    </div>
                    <div style={{marginTop:16,fontSize:12,color:T.muted}}>
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
                          <div style={{fontWeight:700,fontSize:14,marginBottom:4}}>{field.label}</div>
                          <code style={{fontSize:12,color:T.accent}}>{field.key}</code>
                          <div style={{fontSize:12,color:T.muted,margin:"6px 0 10px"}}>{field.desc}</div>
                          <div style={{background:"rgba(255,255,255,0.03)",border:`1px solid ${T.border}40`,
                              borderRadius:6,padding:"8px 12px",fontSize:12,color:T.dim,fontStyle:"italic"}}>
                            Giá trị ví dụ: {field.ph}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div style={{marginTop:20,background:"rgba(245,158,11,0.08)",border:`1px solid ${T.yellow}40`,
                        borderRadius:10,padding:"16px 20px",fontSize:13}}>
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
                const reply = await callClaude(msgs, buildSysPrompt("chat"), 1000);
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
                <SectionTitle sub="Hỏi đáp KPI · Quy trình · Khuyến nghị · Phân tích chiến lược NSCA">🤖 CIS AI Assistant</SectionTitle>
                {/* Context bar */}
                <div style={{display:"flex",gap:10,flexWrap:"wrap",marginTop:4}}>
                  {[
                    {l:"Tuần hiện tại",v:`T${wk}/2026`},
                    {l:"CHS",v:`${chs}`,c:chsC},
                    {l:"User",v:`${user?.name} (${user?.role})`},
                    {l:"Model",v:"Claude Sonnet 4",c:T.cyan},
                  ].map((i,idx)=>(
                    <div key={idx} style={{padding:"4px 12px",borderRadius:20,background:"rgba(255,255,255,0.04)",
                      border:`1px solid ${T.border}`,fontSize:13}}>
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
                    <div style={{fontSize:48,marginBottom:12}}>🤖</div>
                    <div style={{fontSize:20,fontWeight:700,marginBottom:6}}>Xin chào, {user?.name?.split(" ").pop()}!</div>
                    <div style={{fontSize:15,color:T.muted,marginBottom:24}}>Tôi là AI Assistant của CIS – hiểu rõ NSCA, KPI, quy trình và chiến lược 2026</div>
                    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,maxWidth:580,margin:"0 auto",textAlign:"left"}}>
                      {SUGGESTED.map((q,i)=>(
                        <button key={i} onClick={()=>{setAiInput(q); setTimeout(()=>document.getElementById("ai-input")?.focus(),50);}}
                          style={{padding:"10px 14px",borderRadius:8,background:"rgba(37,99,235,0.08)",
                            border:`1px solid ${T.accent}30`,color:T.muted,cursor:"pointer",
                            fontSize:13,textAlign:"left",fontFamily:"Calibri,sans-serif",lineHeight:1.4}}>
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
                      <div style={{width:30,height:30,borderRadius:"50%",background:"rgba(37,99,235,0.2)",
                        border:`1px solid ${T.accent}40`,display:"flex",alignItems:"center",justifyContent:"center",
                        fontSize:14,flexShrink:0,marginTop:2}}>🤖</div>
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
                        fontSize:13,fontWeight:800,flexShrink:0,marginTop:2}}>
                        {user?.avatar||"U"}
                      </div>
                    )}
                  </div>
                ))}

                {/* Loading */}
                {aiLoading&&(
                  <div style={{display:"flex",gap:10,alignItems:"flex-start"}}>
                    <div style={{width:30,height:30,borderRadius:"50%",background:"rgba(37,99,235,0.2)",
                      border:`1px solid ${T.accent}40`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:14}}>🤖</div>
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
                  placeholder="Hỏi về KPI, quy trình, CHS, chiến lược NSCA... (Enter để gửi)"
                  style={{flex:1,background:"transparent",border:"none",color:T.text,fontSize:15,
                    outline:"none",fontFamily:"Calibri,sans-serif"}}/>
                {aiChat.length>0&&(
                  <button onClick={()=>setAiChat([])} title="Xóa lịch sử"
                    style={{padding:"6px 10px",borderRadius:6,background:"rgba(255,255,255,0.05)",
                      border:`1px solid ${T.border}`,color:T.dim,cursor:"pointer",fontSize:12}}>
                    🗑
                  </button>
                )}
                <button onClick={sendMsg} disabled={!aiInput.trim()||aiLoading}
                  style={{padding:"8px 20px",borderRadius:8,
                    background:aiInput.trim()&&!aiLoading?"linear-gradient(135deg,#2563eb,#1d4ed8)":"rgba(255,255,255,0.05)",
                    color:aiInput.trim()&&!aiLoading?"white":T.dim,
                    border:"none",cursor:aiInput.trim()&&!aiLoading?"pointer":"default",
                    fontSize:14,fontWeight:700,fontFamily:"Calibri,sans-serif",transition:"all 0.2s"}}>
                  Gửi ↑
                </button>
              </div>
            </div>
            );
          })()}

          {nav==="pkd_dashboard" && (
            <PKDDashboard user={user} wkIdx={wkIdx} />
          )}

    </>
  );
}
