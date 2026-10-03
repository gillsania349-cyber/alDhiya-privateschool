import nodemailer from "nodemailer";

export type InquiryType = "general" | "admissions";

export type ContactPayload = {
  type: InquiryType;
  name: string;
  email: string;
  phone: string;
  message?: string;
  childAge?: string;
  grade?: string;
  preferredStartDate?: string;
};

function requiredEnv(name: string) {
  const value = process.env[name]?.trim();
  return value || null;
}

export function isMailConfigured() {
  return Boolean(
    requiredEnv("SMTP_HOST") &&
      requiredEnv("SMTP_USER") &&
      requiredEnv("SMTP_PASS") &&
      requiredEnv("ADMIN_EMAIL"),
  );
}

function buildSubject(payload: ContactPayload) {
  if (payload.type === "admissions") {
    return `Admissions inquiry — ${payload.name}${payload.grade ? ` (${payload.grade})` : ""}`;
  }
  return `General inquiry — ${payload.name}`;
}

function buildText(payload: ContactPayload) {
  const lines = [
    `Type: ${payload.type === "admissions" ? "Admissions inquiry" : "General inquiry"}`,
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Phone: ${payload.phone}`,
  ];

  if (payload.type === "admissions") {
    lines.push(
      `Child's age: ${payload.childAge || "—"}`,
      `Grade: ${payload.grade || "—"}`,
      `Preferred start date: ${payload.preferredStartDate || "—"}`,
    );
  }

  if (payload.message?.trim()) {
    lines.push("", "Message:", payload.message.trim());
  }

  return lines.join("\n");
}

function buildHtml(payload: ContactPayload) {
  const row = (label: string, value: string) =>
    `<tr><td style="padding:8px 12px;font-weight:600;color:#0b1f4d;vertical-align:top">${label}</td><td style="padding:8px 12px;color:#1e447c">${value}</td></tr>`;

  const rows = [
    row(
      "Type",
      payload.type === "admissions" ? "Admissions inquiry" : "General inquiry",
    ),
    row("Name", payload.name),
    row("Email", payload.email),
    row("Phone", payload.phone),
  ];

  if (payload.type === "admissions") {
    rows.push(
      row("Child's age", payload.childAge || "—"),
      row("Grade", payload.grade || "—"),
      row("Preferred start date", payload.preferredStartDate || "—"),
    );
  }

  if (payload.message?.trim()) {
    rows.push(row("Message", payload.message.trim().replace(/\n/g, "<br />")));
  }

  return `
    <div style="font-family:Arial,sans-serif;max-width:640px;margin:0 auto">
      <h2 style="color:#0b1f4d;margin-bottom:4px">New website inquiry</h2>
      <p style="color:#1e447c;margin-top:0">Submitted via Al Dhiya International Private School website.</p>
      <table style="width:100%;border-collapse:collapse;border:1px solid #e5e7eb;border-radius:8px">
        ${rows.join("")}
      </table>
    </div>
  `;
}

export async function sendInquiryEmail(payload: ContactPayload) {
  const adminEmail = requiredEnv("ADMIN_EMAIL");
  const smtpHost = requiredEnv("SMTP_HOST");
  const smtpUser = requiredEnv("SMTP_USER");
  const smtpPass = requiredEnv("SMTP_PASS");
  const smtpPort = Number(process.env.SMTP_PORT || "587");
  const fromEmail =
    requiredEnv("SMTP_FROM") || smtpUser || "noreply@aldhiya.local";

  if (!adminEmail || !smtpHost || !smtpUser || !smtpPass) {
    if (process.env.NODE_ENV !== "production") {
      console.info("[contact] SMTP not configured — logging inquiry instead:");
      console.info(buildText(payload));
      return { delivered: false as const, mode: "logged" as const };
    }
    throw new Error(
      "Email is not configured. Set ADMIN_EMAIL, SMTP_HOST, SMTP_USER, and SMTP_PASS.",
    );
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  await transporter.sendMail({
    from: `Al Dhiya Website <${fromEmail}>`,
    to: adminEmail,
    replyTo: payload.email,
    subject: buildSubject(payload),
    text: buildText(payload),
    html: buildHtml(payload),
  });

  return { delivered: true as const, mode: "email" as const };
}