// ═══════════════════════════════════════════════════════════
// NSCA CIS v6.0 — Constants, Data & UI Components
// ═══════════════════════════════════════════════════════════

/* ═══════════════════════════════════════════════════════════
   DESIGN TOKENS
═══════════════════════════════════════════════════════════ */
export const T = {
  bg0: "#050810",
  bg1: "#0a0f1e",
  bg2: "#0f1628",
  card: "rgba(255,255,255,0.032)",
  cardHover: "rgba(255,255,255,0.055)",
  border: "rgba(255,255,255,0.07)",
  borderBright: "rgba(255,255,255,0.14)",
  text: "#ffffff",
  muted: "#b0bcd4",
  dim: "#6b7a99",
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
export const USERS_DB = [
  { id:1,  username:"dhk",      name:"Đào Huy Khánh",        role:"CEO",      dept:"BAN LÃNH ĐẠO", pass:"ceo123",   avatar:"ĐK", color:T.accent  , active:true },
  { id:2,  username:"mai",      name:"Nguyễn Thị Thùy Mai",  role:"Admin",    dept:"BAN LÃNH ĐẠO", pass:"admin123", avatar:"TM", color:T.purple  , active:true },
  { id:3,  username:"hong",     name:"Nguyễn Thị Thùy Hồng", role:"Director", dept:"BAN LÃNH ĐẠO", pass:"gd123",    avatar:"TH", color:T.cyan    , active:true },
  { id:4,  username:"son",      name:"Đặng Thanh Sơn",       role:"Manager",  dept:"HCNS",          pass:"hcns123",  avatar:"TS", color:T.green   , active:true },
  { id:5,  username:"duan",     name:"Nguyễn Tiến Duẩn",     role:"Manager",  dept:"TCKT",          pass:"tckt123",  avatar:"TD", color:T.yellow  , active:true },
  { id:15, username:"ngoc_pkd", name:"Đào Nguyên Ngọc",      role:"Manager",  dept:"PKD",           pass:"pkd123",   avatar:"ĐN", color:"#f472b6" , active:true },
  { id:6,  username:"ha",       name:"Nguyễn Thị Hà",        role:"Manager",  dept:"KHO",           pass:"kho123",   avatar:"NH", color:T.red     , active:true },
  { id:7,  username:"phong",    name:"Đinh Văn Phong",        role:"Manager",  dept:"CƠ ĐIỆN",       pass:"cd123",    avatar:"VP", color:T.purple  , active:true },
  { id:8,  username:"nam",      name:"Phạm Hoài Nam",         role:"Manager",  dept:"R&D",           pass:"rd123",    avatar:"HN", color:T.cyan    , active:true },
  { id:9,  username:"tuan",     name:"Nguyễn Lương Tuấn",    role:"Manager",  dept:"QLCL",          pass:"qlcl123",  avatar:"LT", color:T.green   , active:true },
  { id:10, username:"ngoc_sx",  name:"Nguyễn Văn Ngọc",      role:"Manager",  dept:"SX NHÔM",       pass:"nhom123",  avatar:"VN", color:T.orange  , active:true },
  { id:11, username:"tung",     name:"Hoàng Mạnh Tùng",      role:"Manager",  dept:"SX THÉP",       pass:"thep123",  avatar:"MT", color:"#ec4899" , active:true },
  { id:12, username:"anh",      name:"Đặng Thị Kim Anh",     role:"Manager",  dept:"CUNG ỨNG",      pass:"cu123",    avatar:"KA", color:T.cyan    , active:true },
  { id:13, username:"duc",      name:"Việt Đức",              role:"Manager",  dept:"GIAO HÀNG",     pass:"gh123",    avatar:"VĐ", color:T.accent  , active:true },
  { id:14, username:"xuan",     name:"Nguyễn Thị Xuân",      role:"Staff",    dept:"SX NHÔM",       pass:"xuan123",  avatar:"TX", color:"#d97706" , active:true },
];

/* ═══════════════════════════════════════════════════════════
   WEEKLY DATA  (số liệu thực từ BC TCKT tuần 1/3/4/9/2026)
═══════════════════════════════════════════════════════════ */
// ═══ DỮ LIỆU TUẦN — ĐỌC TỪ SUPABASE ═══════════════════════
// WK và CHS_WK bây giờ là state động, không hardcode nữa
// Fallback 1 row để React không crash trước khi data load xong
export const WK_EMPTY_ROW = (n) => ({
  w:n, thang:1, quy:1, label:`T${n}`, ngay:"--",
  tckt:{ pt:0,qh:0,ncc:0,vayNH:0,vayTDH:0,tongVay:0,tienMat:0,khUT:0,thuTH:0,thuKH:0,laiVay:0 },
  nhom:{ ht:0,ton:0,note:"Đang tải..." },
  thep:{ vav:0,vanEi:0,tmc:0,cable:0,note:"Đang tải..." },
  gh:{   luot:0,oto:0,note:"Đang tải..." },
  kho:{  nhap:0,xuat:0,ton:0,note:"Đang tải..." },
  cd:{   sucoi:0,pdm:0,uptime:0,note:"Đang tải..." },
  qlcl:{ fpy:0,kn:0,capa:0,note:"Đang tải..." },
  cu:{   gt:0,donHang:0,dungHan:0,note:"Đang tải..." },
  pkd:{  dt:0,kh:0,pipeline:0,doiTac:0,conversion:0,note:"Đang tải..." },
});
// Placeholder 10 tuần — sẽ được ghi đè ngay sau khi fetch Supabase
export let WK = Array.from({length:10}, (_,i) => WK_EMPTY_ROW(i+1));
export let CHS_WK = Array.from({length:10}, (_,i) => ({
  l:`T${i+1}`, chs:0, fin:0, ops:0, growth:0, quality:0, strategy:0
}));


/* ═══════════════════════════════════════════════════════════
   KPI MASTER  (từ KPI_SMART_QLSX_2026 + KPI Master docs)
═══════════════════════════════════════════════════════════ */
export const KPI_MASTER = {
  "PKD": {
    owner:"Đào Nguyên Ngọc", dept:"PKD", color:"#f472b6",
    kpis:[
      {code:"PKD-01",label:"DT toàn công ty",  dir:"H",w:20,unit:"tỷ",  kh:[11.54,12.94,19.26,22.06,22.56,22.82,24.31,24.81,24.31,23.20,21.70,22.20], note:"KHKD chốt 2026"},
      {code:"PKD-02",label:"DT nhóm Thép",     dir:"H",w:12,unit:"tỷ",  kh:[6.57,7.07,12.74,13.98,14.48,14.74,15.14,15.64,15.14,14.52,13.52,14.02], note:"Van EI+VCD KH tháng (46%+12% mix)"},
      {code:"PKD-03",label:"DT nhóm Nhôm",     dir:"H",w:12,unit:"tỷ",  kh:[4.97,5.87,6.52,8.08,8.08,8.08,9.17,9.17,9.17,8.69,8.19,8.19], note:"Cửa gió+VAV KH tháng (27%+7% mix)"},
      {code:"PKD-04",label:"Tăng trưởng YoY",  dir:"H",w:10,unit:"%",   kh:[15,15,15,15,15,15,15,15,15,15,15,15], note:"Cam kết +15% vs 2025"},
      {code:"PKD-05",label:"Gross Margin",      dir:"H",w:10,unit:"%",   kh:[33.3,33.3,33.3,33.3,33.3,33.3,33.3,33.3,33.3,33.3,33.3,33.3], note:"1 - Biến phí/DT"},
      {code:"PKD-06",label:"Win rate BG",       dir:"H",w:8, unit:"%",   kh:[35,35,35,35,35,35,35,35,35,35,35,35], note:"Đơn trúng/Báo giá"},
      {code:"PKD-07",label:"DSO",               dir:"L",w:8, unit:"ngày",kh:[45,45,45,45,45,45,45,45,45,45,45,45], note:"Ngày thu hồi công nợ"},
      {code:"PKD-08",label:"Thu hồi CN đúng hạn",dir:"H",w:8,unit:"%",  kh:[95,95,95,95,95,95,95,95,95,95,95,95], note:"Phối hợp TCKT"},
      {code:"PKD-09",label:"Khiếu nại KH",      dir:"L",w:6, unit:"KN", kh:[1,1,1,1,1,1,1,1,1,1,1,1], note:"Case/100 đơn"},
      {code:"PKD-10",label:"BC tuần đúng hạn",  dir:"H",w:6, unit:"%",  kh:[100,100,100,100,100,100,100,100,100,100,100,100], note:"CIS workflow"},
    ]
  },
  "TCKT": {
    owner:"Nguyễn Tiến Duẩn", dept:"TCKT", color:"#f59e0b",
    kpis:[
      {code:"TC-01",label:"Biến phí tổng",    dir:"L",w:18,unit:"tỷ",  kh:[7.7,8.6,12.9,14.7,15.1,15.2,16.2,16.6,16.2,15.5,14.5,14.8], note:"Chi phí biến đổi KH"},
      {code:"TC-02",label:"CP gián tiếp",     dir:"L",w:12,unit:"tỷ",  kh:[2.8,3.2,4.8,5.4,5.6,5.6,6.0,6.1,6.0,5.7,5.4,5.5], note:"SXC+QLDN plan"},
      {code:"TC-03",label:"CP quản lý",       dir:"L",w:10,unit:"tỷ",  kh:[1.0,1.1,1.7,1.9,1.9,2.0,2.1,2.1,2.1,2.0,1.9,1.9], note:"QLDN KH"},
      {code:"TC-04",label:"CP tài chính",     dir:"L",w:10,unit:"tỷ",  kh:[0.25,0.28,0.42,0.48,0.49,0.49,0.52,0.54,0.52,0.50,0.47,0.48], note:"Lãi vay KH"},
      {code:"TC-05",label:"Tiết kiệm OPEX",   dir:"H",w:10,unit:"%",   kh:[2,2,2,2,2,2,2,2,2,2,2,2], note:"≥2% vs dự trù"},
      {code:"TC-06",label:"CFO dương",         dir:"H",w:10,unit:"pass",kh:[1,1,1,1,1,1,1,1,1,1,1,1], note:"Operating cash flow >0"},
      {code:"TC-07",label:"DSO",               dir:"L",w:8, unit:"ngày",kh:[45,45,45,45,45,45,45,45,45,45,45,45], note:"Guardrail cash"},
      {code:"TC-08",label:"Sai sót BC/thuế",   dir:"L",w:8, unit:"%",   kh:[1,1,1,1,1,1,1,1,1,1,1,1], note:"≤1% lỗi"},
      {code:"TC-09",label:"Đóng BC đúng hạn",  dir:"H",w:7, unit:"ngày",kh:[5,5,5,5,5,5,5,5,5,5,5,5], note:"≤5 ngày sau chốt tháng"},
      {code:"TC-10",label:"BC tuần TCKT",       dir:"H",w:7, unit:"%",   kh:[100,100,100,100,100,100,100,100,100,100,100,100], note:"CIS workflow"},
    ]
  },
  "SX THÉP": {
    owner:"Hoàng Mạnh Tùng", dept:"SX THÉP", color:"#ec4899",
    kpis:[
      {code:"SX-T-01",label:"DT kế hoạch Thép",  dir:"H",w:15,unit:"tỷ",kh:[6.6,7.1,12.7,14.0,14.5,14.7,15.1,15.6,15.1,14.5,13.5,14.0], note:"Proxy doanh thu"},
      {code:"SX-T-02",label:"% HT KH sản xuất",   dir:"H",w:10,unit:"%", kh:[100,100,100,100,100,100,100,100,100,100,100,100], note:"Actual/KH tháng"},
      {code:"SX-T-03",label:"OTD Thép",            dir:"H",w:10,unit:"%", kh:[95,95,95,95,95,95,95,95,95,95,95,95], note:"Giao đúng hạn"},
      {code:"SX-T-04",label:"Defect rate",          dir:"L",w:10,unit:"%", kh:[1.5,1.5,1.5,1.5,1.5,1.5,1.5,1.5,1.5,1.5,1.5,1.5], note:"≤1.5%"},
      {code:"SX-T-05",label:"Năng suất LĐ",        dir:"H",w:10,unit:"idx",kh:[100,100,100,100,100,100,100,100,100,100,100,100], note:"Index baseline"},
      {code:"SX-T-06",label:"Định mức nhân công",  dir:"L",w:10,unit:"người",kh:[120,120,120,120,120,120,120,120,120,120,120,120], note:"Số CN kế hoạch"},
      {code:"SX-T-07",label:"OEE thiết bị",         dir:"H",w:10,unit:"%", kh:[90,90,90,90,90,90,90,90,90,90,90,90], note:"Hiệu suất máy"},
      {code:"SX-T-08",label:"Tiết kiệm biến phí",  dir:"H",w:8, unit:"%", kh:[2,2,2,2,2,2,2,2,2,2,2,2], note:"≥2% vs định mức"},
      {code:"SX-T-09",label:"5S & An toàn",          dir:"H",w:7, unit:"điểm",kh:[85,85,85,85,85,85,85,85,85,85,85,85], note:"Audit hàng tháng"},
      {code:"SX-T-10",label:"BC tuần Thép",          dir:"H",w:10,unit:"%", kh:[100,100,100,100,100,100,100,100,100,100,100,100], note:"CIS workflow"},
    ]
  },
  "SX NHÔM": {
    owner:"Nguyễn Văn Ngọc", dept:"SX NHÔM", color:"#f97316",
    kpis:[
      {code:"SX-A-01",label:"DT kế hoạch Nhôm",  dir:"H",w:15,unit:"tỷ",kh:[5.0,5.9,6.5,8.1,8.1,8.1,9.2,9.2,9.2,8.7,8.2,8.2], note:"Proxy doanh thu"},
      {code:"SX-A-02",label:"% HT KH sản xuất",   dir:"H",w:10,unit:"%", kh:[100,100,100,100,100,100,100,100,100,100,100,100], note:"Actual/KH tháng"},
      {code:"SX-A-03",label:"OTD Nhôm",            dir:"H",w:10,unit:"%", kh:[95,95,95,95,95,95,95,95,95,95,95,95], note:"Giao đúng hạn"},
      {code:"SX-A-04",label:"Defect rate",          dir:"L",w:10,unit:"%", kh:[1.5,1.5,1.5,1.5,1.5,1.5,1.5,1.5,1.5,1.5,1.5,1.5], note:"≤1.5%"},
      {code:"SX-A-05",label:"Năng suất LĐ",        dir:"H",w:10,unit:"idx",kh:[100,100,100,100,100,100,100,100,100,100,100,100], note:"Index baseline"},
      {code:"SX-A-06",label:"Định mức nhân công",  dir:"L",w:10,unit:"người",kh:[103,103,103,103,103,103,103,103,103,103,103,103], note:"Số CN kế hoạch"},
      {code:"SX-A-07",label:"OEE thiết bị",         dir:"H",w:10,unit:"%", kh:[90,90,90,90,90,90,90,90,90,90,90,90], note:"Hiệu suất máy"},
      {code:"SX-A-08",label:"Tiết kiệm biến phí",  dir:"H",w:8, unit:"%", kh:[2,2,2,2,2,2,2,2,2,2,2,2], note:"≥2% vs định mức"},
      {code:"SX-A-09",label:"5S & An toàn",          dir:"H",w:7, unit:"điểm",kh:[85,85,85,85,85,85,85,85,85,85,85,85], note:"Audit hàng tháng"},
      {code:"SX-A-10",label:"BC tuần Nhôm",          dir:"H",w:10,unit:"%", kh:[100,100,100,100,100,100,100,100,100,100,100,100], note:"CIS workflow"},
    ]
  },
  "QLCL": {
    owner:"Nguyễn Lương Tuấn", dept:"QLCL", color:"#10b981",
    kpis:[
      {code:"QC-01",label:"Defect rate tổng",  dir:"L",w:16,unit:"%",   kh:[1.5,1.5,1.5,1.5,1.5,1.5,1.5,1.5,1.5,1.5,1.5,1.5], note:"Guardrail chất lượng"},
      {code:"QC-02",label:"CAPA đúng hạn",     dir:"H",w:12,unit:"%",   kh:[90,90,90,90,90,90,90,90,90,90,90,90], note:"≥90%"},
      {code:"QC-03",label:"IQC pass rate",     dir:"H",w:10,unit:"%",   kh:[98,98,98,98,98,98,98,98,98,98,98,98], note:"≥98%"},
      {code:"QC-04",label:"PQC pass rate",     dir:"H",w:10,unit:"%",   kh:[98,98,98,98,98,98,98,98,98,98,98,98], note:"≥98%"},
      {code:"QC-05",label:"FQC pass rate",     dir:"H",w:10,unit:"%",   kh:[99,99,99,99,99,99,99,99,99,99,99,99], note:"≥99%"},
      {code:"QC-06",label:"Xử lý KN ≤3 ngày", dir:"L",w:10,unit:"ngày",kh:[3,3,3,3,3,3,3,3,3,3,3,3], note:"≤3 ngày"},
      {code:"QC-07",label:"COPQ/DT",           dir:"L",w:8, unit:"%",   kh:[1,1,1,1,1,1,1,1,1,1,1,1], note:"Cost of Poor Quality"},
      {code:"QC-08",label:"Audit ISO nội bộ",  dir:"H",w:8, unit:"điểm",kh:[85,85,85,85,85,85,85,85,85,85,85,85], note:"≥85 điểm"},
      {code:"QC-09",label:"Major NCR = 0",     dir:"L",w:8, unit:"case", kh:[0,0,0,0,0,0,0,0,0,0,0,0], note:"0 major NCR/năm"},
      {code:"QC-10",label:"BC tuần QLCL",      dir:"H",w:8, unit:"%",   kh:[100,100,100,100,100,100,100,100,100,100,100,100], note:"CIS workflow"},
    ]
  },
  "CƠ ĐIỆN": {
    owner:"Đinh Văn Phong", dept:"CƠ ĐIỆN", color:"#8b5cf6",
    kpis:[
      {code:"CD-01",label:"Uptime thiết bị",   dir:"H",w:12,unit:"%",   kh:[95,95,95,95,95,95,95,95,95,95,95,95], note:"≥95%"},
      {code:"CD-02",label:"MTTR",               dir:"L",w:10,unit:"giờ", kh:[4,4,4,4,4,4,4,4,4,4,4,4], note:"≤4h"},
      {code:"CD-03",label:"PM Compliance",      dir:"H",w:10,unit:"%",   kh:[95,95,95,95,95,95,95,95,95,95,95,95], note:"Bảo trì đúng lịch"},
      {code:"CD-04",label:"Sự cố lặp lại",      dir:"L",w:10,unit:"case",kh:[2,2,2,2,2,2,2,2,2,2,2,2], note:"≤2 case/tháng"},
      {code:"CD-05",label:"CP cơ điện/KH",      dir:"L",w:10,unit:"tỷ",  kh:[2.9,2.9,2.9,2.9,2.9,2.9,2.9,2.9,2.9,2.9,2.9,2.9], note:"TK627 proxy"},
      {code:"CD-06",label:"Tiết kiệm điện",     dir:"H",w:10,unit:"idx", kh:[100,100,100,100,100,100,100,100,100,100,100,100], note:"kWh/Output index"},
      {code:"CD-07",label:"Vi phạm PCCC",       dir:"L",w:8, unit:"case",kh:[0,0,0,0,0,0,0,0,0,0,0,0], note:"0 vi phạm nghiêm trọng"},
      {code:"CD-08",label:"Nghiệm thu sửa chữa",dir:"H",w:10,unit:"%",  kh:[100,100,100,100,100,100,100,100,100,100,100,100], note:"Đủ biên bản"},
      {code:"CD-09",label:"Lead time xử lý",    dir:"L",w:10,unit:"giờ", kh:[24,24,24,24,24,24,24,24,24,24,24,24], note:"≤24h yêu cầu thường"},
      {code:"CD-10",label:"BC tuần Cơ điện",    dir:"H",w:10,unit:"%",   kh:[100,100,100,100,100,100,100,100,100,100,100,100], note:"CIS workflow"},
    ]
  },
  "GIAO HÀNG": {
    owner:"Việt Đức", dept:"GIAO HÀNG", color:"#2563eb",
    kpis:[
      {code:"GH-01",label:"OTD tổng",           dir:"H",w:12,unit:"%",      kh:[95,95,95,95,95,95,95,95,95,95,95,95], note:"On-time delivery"},
      {code:"GH-02",label:"Giao đủ (In-full)",  dir:"H",w:10,unit:"%",      kh:[98,98,98,98,98,98,98,98,98,98,98,98], note:"Đúng số lượng"},
      {code:"GH-03",label:"Chứng từ đúng hạn",  dir:"H",w:10,unit:"%",      kh:[99,99,99,99,99,99,99,99,99,99,99,99], note:"Hóa đơn/COC"},
      {code:"GH-04",label:"CP logistics/DT",    dir:"L",w:10,unit:"%",      kh:[2.5,2.5,2.5,2.5,2.5,2.5,2.5,2.5,2.5,2.5,2.5,2.5], note:"≤2.5%"},
      {code:"GH-05",label:"Hoàn trả do lỗi GH", dir:"L",w:10,unit:"%",      kh:[0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5], note:"≤0.5% đơn"},
      {code:"GH-06",label:"Xử lý KN ≤48h",      dir:"H",w:10,unit:"%",      kh:[90,90,90,90,90,90,90,90,90,90,90,90], note:"Phối hợp PKD"},
      {code:"GH-07",label:"Tuân thủ lịch GH",   dir:"H",w:8, unit:"%",      kh:[95,95,95,95,95,95,95,95,95,95,95,95], note:"Liên kết KH tháng"},
      {code:"GH-08",label:"Năng suất GH",        dir:"H",w:10,unit:"đơn/ngày",kh:[100,100,100,100,100,100,100,100,100,100,100,100], note:"Index baseline"},
      {code:"GH-09",label:"Sự cố vận chuyển",    dir:"L",w:10,unit:"case",   kh:[0,0,0,0,0,0,0,0,0,0,0,0], note:"0 sự cố nghiêm trọng"},
      {code:"GH-10",label:"BC tuần Giao hàng",   dir:"H",w:10,unit:"%",      kh:[100,100,100,100,100,100,100,100,100,100,100,100], note:"CIS workflow"},
    ]
  },
  "KHO": {
    owner:"Nguyễn Thị Hà", dept:"KHO", color:"#ef4444",
    kpis:[
      {code:"KHO-01",label:"Độ chính xác tồn kho",dir:"H",w:12,unit:"%",   kh:[98,98,98,98,98,98,98,98,98,98,98,98], note:"Cycle count"},
      {code:"KHO-02",label:"Vòng quay tồn kho",   dir:"H",w:10,unit:"vòng",kh:[6,6,6,6,6,6,6,6,6,6,6,6], note:"≥6 vòng/năm"},
      {code:"KHO-03",label:"Hàng chậm luân chuyển",dir:"L",w:10,unit:"%",  kh:[3,3,3,3,3,3,3,3,3,3,3,3], note:"≤3% giá trị TK"},
      {code:"KHO-04",label:"Cấp phát đúng–đủ–hạn", dir:"H",w:10,unit:"%", kh:[98,98,98,98,98,98,98,98,98,98,98,98], note:"Cho SX & GH"},
      {code:"KHO-05",label:"Hư hỏng/mất mát kho",  dir:"L",w:10,unit:"%",  kh:[0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2], note:"≤0.2% giá trị"},
      {code:"KHO-06",label:"Lead time nhập kho",    dir:"L",w:10,unit:"giờ",kh:[24,24,24,24,24,24,24,24,24,24,24,24], note:"Dock-to-stock ≤24h"},
      {code:"KHO-07",label:"Lead time xuất kho",    dir:"L",w:8, unit:"giờ",kh:[12,12,12,12,12,12,12,12,12,12,12,12], note:"≤12h"},
      {code:"KHO-08",label:"An toàn & PCCC kho",    dir:"H",w:10,unit:"điểm",kh:[85,85,85,85,85,85,85,85,85,85,85,85], note:"Audit nội bộ"},
      {code:"KHO-09",label:"Chứng từ kho đầy đủ",   dir:"H",w:10,unit:"%",  kh:[100,100,100,100,100,100,100,100,100,100,100,100], note:"Đủ phiếu & ký nhận"},
      {code:"KHO-10",label:"BC tuần Kho",            dir:"H",w:10,unit:"%",  kh:[100,100,100,100,100,100,100,100,100,100,100,100], note:"CIS workflow"},
    ]
  },
  "CUNG ỨNG": {
    owner:"Đặng Thị Kim Anh", dept:"CUNG ỨNG", color:"#06b6d4",
    kpis:[
      {code:"MH-01",label:"Mua hàng đúng tiến độ",  dir:"H",w:12,unit:"%",   kh:[95,95,95,95,95,95,95,95,95,95,95,95], note:"≥95% PO đúng hạn"},
      {code:"MH-02",label:"Thiếu VT gây dừng chuyền",dir:"L",w:10,unit:"%",  kh:[1,1,1,1,1,1,1,1,1,1,1,1], note:"≤1% đơn/lot"},
      {code:"MH-03",label:"Chênh lệch giá vs plan",  dir:"L",w:10,unit:"%",  kh:[1,1,1,1,1,1,1,1,1,1,1,1], note:"≤1% vs định mức"},
      {code:"MH-04",label:"NCC đạt chuẩn",           dir:"H",w:10,unit:"%",  kh:[95,95,95,95,95,95,95,95,95,95,95,95], note:"IQC + đánh giá"},
      {code:"MH-05",label:"Lead time mua hàng",       dir:"L",w:10,unit:"ngày",kh:[7,7,7,7,7,7,7,7,7,7,7,7], note:"≤7 ngày"},
      {code:"MH-06",label:"PO có đủ hồ sơ",          dir:"H",w:10,unit:"%",  kh:[100,100,100,100,100,100,100,100,100,100,100,100], note:"Báo giá+HĐ+NT"},
      {code:"MH-07",label:"Tiết kiệm mua hàng",       dir:"H",w:8, unit:"%",  kh:[1,1,1,1,1,1,1,1,1,1,1,1], note:"Negotiation saving"},
      {code:"MH-08",label:"KN NCC xử lý đúng hạn",   dir:"H",w:10,unit:"%",  kh:[90,90,90,90,90,90,90,90,90,90,90,90], note:"Liên kết CAPA"},
      {code:"MH-09",label:"Độ chính xác dự báo MH",  dir:"H",w:10,unit:"%",  kh:[90,90,90,90,90,90,90,90,90,90,90,90], note:"vs KH SX tháng"},
      {code:"MH-10",label:"BC tuần Cung ứng",          dir:"H",w:10,unit:"%",  kh:[100,100,100,100,100,100,100,100,100,100,100,100], note:"CIS workflow"},
    ]
  },
  "HCNS": {
    owner:"Đặng Thanh Sơn", dept:"HCNS", color:"#10b981",
    kpis:[
      {code:"HR-01",label:"CP NS gián tiếp/KH",  dir:"L",w:14,unit:"tỷ",  kh:[1.2,1.2,1.2,1.2,1.2,1.2,1.2,1.2,1.2,1.2,1.2,1.2], note:"B1.1+B2+B3 KH"},
      {code:"HR-02",label:"Tuyển dụng đúng hạn", dir:"H",w:10,unit:"%",   kh:[95,95,95,95,95,95,95,95,95,95,95,95], note:"≥95%"},
      {code:"HR-03",label:"Tỷ lệ nghỉ việc",     dir:"L",w:10,unit:"%",   kh:[8,8,8,8,8,8,8,8,8,8,8,8], note:"Turnover/quý"},
      {code:"HR-04",label:"Hoàn thành đào tạo",  dir:"H",w:10,unit:"%",   kh:[90,90,90,90,90,90,90,90,90,90,90,90], note:"≥90%"},
      {code:"HR-05",label:"Điểm hài lòng NV",    dir:"H",w:10,unit:"điểm",kh:[80,80,80,80,80,80,80,80,80,80,80,80], note:"eNPS/năm"},
      {code:"HR-06",label:"Tuân thủ nội quy",    dir:"H",w:10,unit:"%",   kh:[10,10,10,10,10,10,10,10,10,10,10,10], note:"Giảm ≥10% vi phạm"},
      {code:"HR-07",label:"Sự cố PCCC/AT",       dir:"L",w:9, unit:"case",kh:[0,0,0,0,0,0,0,0,0,0,0,0], note:"0 sự cố nghiêm trọng"},
      {code:"HR-08",label:"HC ticket đúng hạn",  dir:"H",w:9, unit:"%",   kh:[95,95,95,95,95,95,95,95,95,95,95,95], note:"≥95%"},
      {code:"HR-09",label:"5S nhà xưởng",        dir:"H",w:9, unit:"điểm",kh:[85,85,85,85,85,85,85,85,85,85,85,85], note:"≥85"},
      {code:"HR-10",label:"BC tuần HCNS",        dir:"H",w:9, unit:"%",   kh:[100,100,100,100,100,100,100,100,100,100,100,100], note:"CIS workflow"},
      {code:"HR-11",label:"CP NS/Doanh thu",     dir:"L",w:10,unit:"%",   kh:[5.74,5.74,5.74,5.74,5.74,5.74,5.74,5.74,5.74,5.74,5.74,5.74], note:"Overhead ratio"},
    ]
  },
  "R&D": {
    owner:"Phạm Hoài Nam", dept:"R&D", color:"#06b6d4",
    kpis:[
      {code:"RD-01",label:"DT từ SP mới",          dir:"H",w:18,unit:"tỷ",kh:[1.15,1.29,1.93,2.21,2.26,2.28,2.43,2.48,2.43,2.32,2.17,2.22], note:"10% tổng DT KH"},
      {code:"RD-02",label:"Giảm cost BOM",         dir:"H",w:12,unit:"%", kh:[3,3,3,3,3,3,3,3,3,3,3,3], note:"≥3% tối ưu BOM"},
      {code:"RD-03",label:"Dự án SP mới đúng hạn", dir:"H",w:10,unit:"%", kh:[90,90,90,90,90,90,90,90,90,90,90,90], note:"≥90% milestone"},
      {code:"RD-04",label:"FTR (test pass lần đầu)",dir:"H",w:10,unit:"%", kh:[90,90,90,90,90,90,90,90,90,90,90,90], note:"≥90%"},
      {code:"RD-05",label:"Lỗi do thiết kế",       dir:"L",w:10,unit:"%", kh:[5,5,5,5,5,5,5,5,5,5,5,5], note:"≤5% tổng lỗi"},
      {code:"RD-06",label:"Chứng nhận/roadmap",    dir:"H",w:10,unit:"%", kh:[100,100,100,100,100,100,100,100,100,100,100,100], note:"AMCA/AHRI/UL"},
      {code:"RD-07",label:"Số ECO cải tiến SX",    dir:"H",w:8, unit:"case",kh:[2,2,2,2,2,2,2,2,2,2,2,2], note:"≥2 ECO/tháng"},
      {code:"RD-08",label:"Tiết kiệm từ cải tiến", dir:"H",w:8, unit:"%", kh:[2,2,2,2,2,2,2,2,2,2,2,2], note:"Policy 50% saving"},
      {code:"RD-09",label:"Rút ngắn cycle time",   dir:"H",w:7, unit:"%", kh:[15,15,15,15,15,15,15,15,15,15,15,15], note:"vs baseline"},
      {code:"RD-10",label:"BC tuần R&D",           dir:"H",w:7, unit:"%", kh:[100,100,100,100,100,100,100,100,100,100,100,100], note:"CIS workflow"},
    ]
  },
};

/* KPI Scoring: 0–120 (capped), formula per direction */
const kpiScore = (actual, target, dir) => {
  if(actual==null||target==null) return null;
  if(dir==="L") { // lower better
    if(target===0) return actual===0 ? 100 : 0;
    const ratio = target / actual; // ratio>1 if actual < target (good)
    return Math.min(120, Math.max(0, Math.round(ratio * 100)));
  }
  if(dir==="B") return actual>=1 ? 100 : 0; // binary
  // HIGHER_BETTER
  const ratio = actual / target;
  return Math.min(120, Math.max(0, Math.round(ratio * 100)));
};

/* Dept weighted score 0–120 */
export const deptScore = (dept, month) => {
  const d = KPI_MASTER[dept];
  if(!d) return null;
  let totalW = 0, totalWS = 0;
  d.kpis.forEach(k => {
    const act = k.actuals?.[month-1];
    const tgt = k.kh[month-1];
    const s = kpiScore(act, tgt, k.dir);
    if(s!=null) { totalWS += s * k.w; totalW += k.w; }
  });
  return totalW > 0 ? Math.round(totalWS / totalW) : null;
};

/* Period avg: array of months */
const periodAvg = (dept, months) => {
  const scores = months.map(m => deptScore(dept, m)).filter(s => s!=null);
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
const getActual = (deptKey, kpiCode, thang) => {
  const wks = _wkData.filter(w => w.thang===thang);
  if(wks.length===0) return null;
  const last = wks[wks.length-1];
  const MAP = {
    "SX THÉP": { "SX-T-02": v=>v.thep?.vav,  "SX-T-04": v=>v.qlcl?.fpy!=null?2.5:null,
                 "SX-T-07": v=>v.cd?.uptime, "SX-T-10": v=>100 },
    "SX NHÔM": { "SX-A-02": v=>v.nhom?.ht,  "SX-A-07": v=>v.cd?.uptime,
                 "SX-A-10": v=>100 },
    "QLCL":    { "QC-01": v=>v.qlcl?.fpy!=null?2.5:null,
                 "QC-10": v=>100 },
    "CƠ ĐIỆN":{ "CD-01": v=>v.cd?.uptime, "CD-04": v=>v.cd?.sucoi,
                "CD-10": v=>100 },
    "GIAO HÀNG":{ "GH-01": v=>v.gh?.luot!=null?92:null, "GH-10":v=>100 },
    "KHO":     { "KHO-01": v=>v.kho?.nhap!=null?97.2:null, "KHO-10":v=>100 },
    "CUNG ỨNG":{ "MH-01": v=>v.cu?.dungHan, "MH-10":v=>100 },
    "HCNS":    { "HR-10": v=>100 },
    "PKD":     { "PKD-01": v=>v.pkd?.dt!=null?v.pkd.dt*wks.length:null, "PKD-10":v=>100 },
    "TCKT":    { "TC-10": v=>100 },
    "R&D":     { "RD-10": v=>100 },
  };
  const deptMap = MAP[deptKey]||{};
  const fn = deptMap[kpiCode];
  return fn ? fn(last) : null;
};

/* Weekly KPI targets (phân rã tuần từ tháng) */
const weeklyTarget = (kh_month, weeksInMonth) => kh_month / weeksInMonth;



/* ═══════════════════════════════════════════════════════════
   ISSUES & REPORTS  (seed)
═══════════════════════════════════════════════════════════ */
export const SEED_ISSUES = [
  { id:1, from:"Đinh Văn Phong", fromId:7, dept:"CƠ ĐIỆN", title:"Mua encoder dự phòng máy CNC",
    type:"equipment", priority:"high", status:"approved", createdAt:"01/03/2026",
    desc:"Máy CNC hỏng encoder T8, mất 6h sửa. Đề xuất mua 2 encoder + 1 biến tần dự phòng.",
    ceoComment:"Duyệt. TCKT lập phiếu mua trong tuần này." },
  { id:2, from:"Nguyễn Thị Xuân", fromId:14, dept:"SX NHÔM", title:"PKD xác nhận màu sơn trong 48h",
    type:"process", priority:"high", status:"pending", createdAt:"01/03/2026",
    desc:"36 đơn GALAXYTECH tồn do chờ chốt màu. PKD phối hợp xác nhận khẩn.",
    ceoComment:"" },
  { id:3, from:"Nguyễn Thị Hà", fromId:6, dept:"KHO", title:"Danh sách slow-moving Q1/2026",
    type:"inventory", priority:"medium", status:"pending", createdAt:"02/03/2026",
    desc:"Ước tính 15-18% tồn kho thuộc nhóm slow-moving. Cần quyết định thanh lý / chuyển dùng.",
    ceoComment:"" },
  { id:4, from:"Nguyễn Tiến Duẩn", fromId:5, dept:"TCKT", title:"3 KH nợ quá hạn – họp riêng",
    type:"finance", priority:"high", status:"approved", createdAt:"28/02/2026",
    desc:"Nợ QH 7.16B – 3 KH chiếm 82%. Đề xuất CEO tham gia họp thu hồi trước 15/3.",
    ceoComment:"Đồng ý. Thùy Mai lên lịch." },
];
export const SEED_REPORTS = [
  { id:1, dept:"TCKT", user:"Nguyễn Tiến Duẩn", userId:5, week:9,
    title:"BC Tuần 9 & Tổng kết T2/2026", submittedAt:"28/02/2026 17:30",
    status:"approved", ceoComment:"Duyệt. Chú ý nợ QH.", issues:"Nợ PT 38.33B, QH 7.16B" },
  { id:2, dept:"CĐ",  user:"Đinh Văn Phong",  userId:7, week:9,
    title:"BC Cơ điện Tuần 9", submittedAt:"28/02/2026 16:45",
    status:"pending", ceoComment:"", issues:"CNC encoder T8 – đã sửa. Cần mua dự phòng." },
  { id:3, dept:"NHÔM",user:"Nguyễn Thị Xuân", userId:14, week:9,
    title:"BC SX Nhôm Tuần 9", submittedAt:"28/02/2026 18:00",
    status:"pending", ceoComment:"", issues:"HT 39% KH. EUY 600c chờ VT. 36 đơn chờ màu sơn." },
  { id:4, dept:"THÉP",user:"Hoàng Mạnh Tùng",  userId:11, week:9,
    title:"BC SX Thép Tuần 9", submittedAt:"28/02/2026 17:15",
    status:"approved", ceoComment:"Chuyển Louver là đúng. Tiếp tục.", issues:"Thiếu đầu vào mảng Van. Chuyển SX Louver." },
  { id:5, dept:"KHO", user:"Nguyễn Thị Hà",   userId:6, week:9,
    title:"BC Kho Tuần 9", submittedAt:"28/02/2026 17:00",
    status:"revision", ceoComment:"Bổ sung số liệu tồn kho theo nhóm VT HVAC.", issues:"CCDC tăng mạnh. Nhập 742, xuất 534." },
];

/* ═══════════════════════════════════════════════════════════
   HELPERS
═══════════════════════════════════════════════════════════ */
export const sc = v => v>=90?T.green:v>=80?T.cyan:v>=70?T.yellow:v>=60?T.orange:T.red;
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

function KCard({label, value, unit, kh, trend, note, inv=false, big=false}) {
  const c = kh != null ? kpiColor(parseFloat(value)||0, kh, inv) : T.text;
  const pctVal = kh != null ? pct(parseFloat(value)||0, kh) : null;
  const arrows = {up:"↑",down:"↓",flat:"→"};
  const arrowC = {up:T.green,down:T.red,flat:T.muted};
  return (
    <div style={{background:T.card,border:`1px solid ${T.border}`,borderRadius:10,padding:"14px 16px",position:"relative",overflow:"hidden"}}>
      <div style={{position:"absolute",top:0,left:0,width:3,height:"100%",background:c,borderRadius:"10px 0 0 10px"}}/>
      <div style={{fontSize:14,color:T.muted,letterSpacing:"1.2px",textTransform:"uppercase",marginBottom:6,paddingLeft:6}}>{label}</div>
      <div style={{display:"flex",alignItems:"baseline",gap:5,paddingLeft:6}}>
        <div style={{fontSize:big?40:30,fontWeight:900,color:c,fontFamily:"Calibri,sans-serif",lineHeight:1}}>{value}</div>
        <div style={{fontSize:16,color:T.muted}}>{unit}</div>
      </div>
      {kh != null && (
        <div style={{display:"flex",alignItems:"center",gap:8,marginTop:5,paddingLeft:6}}>
          <span style={{fontSize:14,color:T.muted}}>KH: {fmt(kh)} {unit}</span>
          <span style={{fontSize:15,fontWeight:700,color:pctVal>=95?T.green:pctVal>=80?T.yellow:T.red}}>{pctVal}%</span>
          {trend && <span style={{fontSize:17,color:arrowC[trend]}}>{arrows[trend]}</span>}
        </div>
      )}
      {note && <div style={{fontSize:14,color:T.muted,marginTop:4,paddingLeft:6,lineHeight:1.4}}>{note}</div>}
    </div>
  );
}

export function SectionTitle({children, sub, action}) {
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

export function PeriodTag({label, active, onClick}) {
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

/* ═══════════════════════════════════════════════════════════
   GAUGE
═══════════════════════════════════════════════════════════ */
export function CHSGauge({score, size=180}) {
  const cx=90, cy=90, r=68;
  const ang = -135 + (score/100)*270;
  const pt = (a,rd) => ({x:cx+rd*Math.cos((a-90)*Math.PI/180),y:cy+rd*Math.sin((a-90)*Math.PI/180)});
  const arc = (a1,a2,rd) => {const s=pt(a1,rd),e=pt(a2,rd),l=(a2-a1)>180?1:0;return`M${s.x},${s.y}A${rd},${rd} 0 ${l} 1 ${e.x},${e.y}`;};
  const c = sc(score);
  const nd = pt(ang,52);
  const n1 = pt(ang+90,6), n2 = pt(ang-90,6);
  const status = score>=95?"HEALTHY":score>=85?"WATCH":score>=75?"RISK":"CRITICAL";
  const statusC = score>=95?T.green:score>=85?T.cyan:score>=75?T.yellow:T.red;
  return (
    <svg viewBox="0 0 180 135" style={{width:size,height:size*0.75,display:"block"}}>
      {[[-135,-45,T.red],[-45,0,T.orange],[0,45,T.yellow],[45,135,T.green]].map(([a1,a2,col],i)=>(
        <path key={i} d={arc(a1,a2,r)} fill="none" stroke={col} strokeWidth={10} strokeLinecap="round" opacity={0.15}/>
      ))}
      <path d={arc(-135,ang,r)} fill="none" stroke={c} strokeWidth={10} strokeLinecap="round"/>
      <polygon points={`${nd.x},${nd.y} ${n1.x},${n1.y} ${n2.x},${n2.y}`} fill={c}/>
      <circle cx={cx} cy={cy} r={4} fill={c}/>
      <text x={cx} y={cy+20} textAnchor="middle" fill="white" fontSize="31" fontWeight="900" fontFamily="Calibri,sans-serif">{score.toFixed(1)}</text>
      <text x={cx} y={cy+33} textAnchor="middle" fill={statusC} fontSize="11" fontWeight="700" letterSpacing="2">{status}</text>
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════════
   MAIN APP
═══════════════════════════════════════════════════════════ */
