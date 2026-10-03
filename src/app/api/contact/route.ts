import { NextResponse } from "next/server";
import {
  sendInquiryEmail,
  type ContactPayload,
  type InquiryType,
} from "@/lib/mail";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function asString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function validate(payload: ContactPayload) {
  const errors: string[] = [];

  if (!payload.name || payload.name.length < 2) {
    errors.push("Please enter your name.");
  }
  if (!payload.email || !EMAIL_RE.test(payload.email)) {
    errors.push("Please enter a valid email address.");
  }
  if (!payload.phone || payload.phone.length < 6) {
    errors.push("Please enter a valid phone number.");
  }

  if (payload.type === "general") {
    if (!payload.message || payload.message.length < 10) {
      errors.push("Please enter a message (at least 10 characters).");
    }
  }

  if (payload.type === "admissions") {
    if (!payload.childAge) {
      errors.push("Please enter the child's age.");
    }
    if (!payload.grade) {
      errors.push("Please select a grade.");
    }
    if (!payload.preferredStartDate) {
      errors.push("Please choose a preferred start date.");
    }
  }

  return errors;
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 },
    );
  }

  const data = (body ?? {}) as Record<string, unknown>;
  const type = asString(data.type) as InquiryType;

  if (type !== "general" && type !== "admissions") {
    return NextResponse.json(
      { ok: false, error: "Unknown inquiry type." },
      { status: 400 },
    );
  }

  const payload: ContactPayload = {
    type,
    name: asString(data.name),
    email: asString(data.email),
    phone: asString(data.phone),
    message: asString(data.message) || undefined,
    childAge: asString(data.childAge) || undefined,
    grade: asString(data.grade) || undefined,
    preferredStartDate: asString(data.preferredStartDate) || undefined,
  };

  const errors = validate(payload);
  if (errors.length) {
    return NextResponse.json(
      { ok: false, error: errors[0], errors },
      { status: 400 },
    );
  }

  try {
    const result = await sendInquiryEmail(payload);
    return NextResponse.json({
      ok: true,
      delivered: result.delivered,
      mode: result.mode,
      message: result.delivered
        ? "Thank you — your inquiry has been sent to the school."
        : "Thank you — your inquiry was received (email delivery is not configured yet, so it was logged for review).",
    });
  } catch (error) {
    console.error("[contact] failed to send inquiry", error);
    return NextResponse.json(
      {
        ok: false,
        error:
          "We could not send your inquiry right now. Please try again or call +968 9588 2848.",
      },
      { status: 500 },
    );
  }
}