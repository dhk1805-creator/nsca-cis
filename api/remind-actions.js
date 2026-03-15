// api/remind-actions.js — Gửi email nhắc deadline action items
// POST { to, name, task, deadline, status, emailBody }

const RESEND_KEY = process.env.RESEND_API_KEY;
const FROM_EMAIL = "CIS NSCA <remind@nsca.vn>";
const FROM_FALLBACK = "CIS NSCA <onboarding@resend.dev>";

// Map tên → email (sync với USERS_DB trong Dashboard.jsx)
const USER_EMAILS = {
  "Đào Huy Khánh":          "dhk@nsca.vn",
  "Nguyễn Thị Thùy Mai":    "mai@nsca.vn",
  "Nguyễn Thị Thùy Hồng":  "hong@nsca.vn",
  "Đặng Thanh Sơn":         "sondt@nsca.vn",
  "Nguyễn Tiến Duẩn":       "duannt@nsca.vn",
  "Đào Nguyên Ngọc":        "ndao@nsca.vn",
  "Nguyễn Thị Hà":          "hant@nsca.vn",
  "Đinh Văn Phong":          "phongdv@nsca.vn",
  "Phạm Hoài Nam":           "namph@nsca.vn",
  "Nguyễn Lương Tuấn":      "tuannl@nsca.vn",
  "Nguyễn Văn Ngọc":        "ngocnv@nsca.vn",
  "Hoàng Mạnh Tùng":        "tunghm@nsca.vn",
  "Đặng Thị Kim Anh":       "anhdtk@nsca.vn",
  "Việt Đức":               "ducvt@nsca.vn",
};

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const { name, task, deadline, status, emailBody } = req.body || {};

  if (!name) return res.status(400).json({ error: "Thiếu tên người nhận" });

  // Resolve email
  const toEmail = USER_EMAILS[name];
  if (!toEmail) return res.status(400).json({ error: "Không tìm thấy email của " + name });

  // Dry run nếu chưa có RESEND_KEY
  if (!RESEND_KEY) {
    return res.status(200).json({
      dryRun: true,
      message: "Chưa có RESEND_API_KEY",
      wouldSendTo: toEmail,
      name, task, deadline, status
    });
  }

  const isOverdue = status === "overdue";
  const urgencyColor = isOverdue ? "#ef4444" : "#f59e0b";
  const urgencyLabel = isOverdue ? "⚠️ ĐÃ QUÁ HẠN" : "⏰ Sắp đến hạn";

  const html = `
<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#0f172a;color:#e2e8f0;border-radius:12px;overflow:hidden">
  <div style="background:linear-gradient(135deg,#1e3a5f,#1e40af);padding:24px 32px">
    <div style="font-size:20px;font-weight:800;color:white">🏭 NSCA · CIS</div>
    <div style="font-size:12px;color:#93c5fd;margin-top:3px">Company Intelligence System</div>
  </div>
  <div style="padding:28px 32px">
    <p style="font-size:16px;margin:0 0 14px">Kính gửi <strong>${name}</strong>,</p>

    <div style="background:#1e293b;border-left:4px solid ${urgencyColor};border-radius:8px;padding:16px 20px;margin-bottom:20px">
      <div style="font-size:12px;color:${urgencyColor};font-weight:700;margin-bottom:8px">${urgencyLabel}</div>
      <div style="font-size:16px;font-weight:700;color:#f8fafc;margin-bottom:6px">${task}</div>
      <div style="font-size:14px;color:#94a3b8">📅 Deadline: <strong style="color:${urgencyColor}">${deadline || "Chưa xác định"}</strong></div>
    </div>

    ${emailBody ? `<div style="font-size:14px;line-height:1.8;color:#cbd5e1;margin-bottom:20px;white-space:pre-wrap">${emailBody}</div>` : ""}

    <a href="https://nsca-cis.vercel.app/"
       style="display:inline-block;background:linear-gradient(135deg,#2563eb,#1d4ed8);color:white;padding:11px 24px;border-radius:8px;text-decoration:none;font-weight:700;font-size:14px">
      ✅ Cập nhật tiến độ →
    </a>

    <p style="font-size:12px;color:#475569;margin-top:24px;border-top:1px solid #1e293b;padding-top:14px">
      Email tự động từ NSCA CIS · Chỉ CEO mới gửi được nhắc này<br>
      Liên hệ: <a href="mailto:dhk@nsca.vn" style="color:#60a5fa">dhk@nsca.vn</a>
    </p>
  </div>
</div>`;

  try {
    const r = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM_FALLBACK,
        to: [toEmail],
        subject: `[NSCA CIS] Nhắc việc: ${task.slice(0, 50)} · Deadline ${deadline}`,
        html,
      }),
    });
    const data = await r.json();
    if (!r.ok) return res.status(500).json({ error: data });
    return res.status(200).json({ success: true, sentTo: toEmail, messageId: data.id });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
}