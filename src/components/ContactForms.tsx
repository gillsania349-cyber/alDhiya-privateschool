"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import GradeSelect from "@/components/GradeSelect";

type InquiryType = "general" | "admissions";
type Status = "idle" | "loading" | "success" | "error";

const grades = [
  "KG 1",
  "KG 2",
  "Grade 1",
  "Grade 2",
  "Grade 3",
  "Grade 4",
  "Grade 5",
  "Grade 6",
  "Grade 7",
  "Grade 8",
  "Grade 9",
  "Grade 10",
  "Grade 11",
  "Grade 12",
];

const fieldClass =
  "w-full rounded-2xl border border-navy/10 bg-[#f8fafc] px-4 py-3.5 text-[14px] font-medium text-navy outline-none transition duration-200 placeholder:font-normal placeholder:text-navy/40 hover:border-navy/25 hover:bg-white focus:border-gold focus:bg-white focus:shadow-[0_0_0_4px_rgba(212,160,23,0.18)]";

const labelClass =
  "mb-2 block text-[12.5px] font-bold tracking-[0.02em] text-navy";

export default function ContactForms() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const [type, setType] = useState<InquiryType>("general");
  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [childAge, setChildAge] = useState("");
  const [grade, setGrade] = useState("");
  const [preferredStartDate, setPreferredStartDate] = useState("");

  useEffect(() => {
    setType(
      searchParams.get("type") === "admissions" ? "admissions" : "general",
    );
  }, [searchParams]);

  useEffect(() => {
    // Never keep a leftover grade when the form type changes
    setChildAge("");
    setGrade("");
    setPreferredStartDate("");
    setStatus("idle");
    setFeedback("");
  }, [type]);

  const selectType = (next: InquiryType) => {
    setType(next);
    const params = new URLSearchParams(searchParams.toString());
    if (next === "admissions") params.set("type", "admissions");
    else params.delete("type");
    const qs = params.toString();
    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  };

  useEffect(() => {
    if (status !== "success") return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setStatus("idle");
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [status]);

  const heading = useMemo(
    () => (type === "admissions" ? "Admissions inquiry" : "General inquiry"),
    [type],
  );

  const resetForm = () => {
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
    setChildAge("");
    setGrade("");
    setPreferredStartDate("");
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setFeedback("");

    const payload =
      type === "general"
        ? { type, name, email, phone, message }
        : {
            type,
            name,
            email,
            phone,
            message: message || undefined,
            childAge,
            grade,
            preferredStartDate,
          };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await response.json()) as {
        ok?: boolean;
        message?: string;
        error?: string;
      };

      if (!response.ok || !data.ok) {
        setStatus("error");
        setFeedback(data.error || "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      resetForm();
    } catch {
      setStatus("error");
      setFeedback(
        "We could not send your inquiry right now. Please try again or call +968 9588 2848.",
      );
    }
  };

  return (
    <div className="mx-auto w-full max-w-2xl">
      <div
        className="grid grid-cols-2 gap-1.5 rounded-2xl border border-navy/8 bg-white/70 p-1.5 shadow-sm backdrop-blur-sm"
        role="tablist"
        aria-label="Inquiry type"
      >
        <button
          type="button"
          role="tab"
          aria-selected={type === "general"}
          onClick={() => selectType("general")}
          className={`rounded-xl px-3 py-3 text-[13px] font-semibold transition sm:text-[14px] ${
            type === "general"
              ? "bg-navy text-white shadow-[0_10px_24px_-12px_rgba(11,31,77,0.8)]"
              : "text-slate hover:bg-navy/5"
          }`}
        >
          General inquiry
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={type === "admissions"}
          onClick={() => selectType("admissions")}
          className={`rounded-xl px-3 py-3 text-[13px] font-semibold transition sm:text-[14px] ${
            type === "admissions"
              ? "bg-navy text-white shadow-[0_10px_24px_-12px_rgba(11,31,77,0.8)]"
              : "text-slate hover:bg-navy/5"
          }`}
        >
          Admissions inquiry
        </button>
      </div>

      <form
        onSubmit={onSubmit}
        className="mt-6 space-y-5 rounded-[1.75rem] border border-navy/10 bg-white p-5 shadow-[0_24px_60px_-36px_rgba(11,31,77,0.45)] sm:p-8"
        noValidate
      >
        <div className="border-b border-navy/8 pb-5">
          <div className="inline-flex items-center gap-2 rounded-full bg-gold/12 px-3 py-1 text-[11px] font-bold tracking-[0.14em] text-navy uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            {type === "admissions" ? "Admissions" : "Contact"}
          </div>
          <h2 className="mt-3 font-[family-name:var(--font-poppins)] text-xl font-bold tracking-[-0.02em] text-navy sm:text-2xl">
            {heading}
          </h2>
          <p className="mt-2 text-[13.5px] leading-relaxed text-slate sm:text-[14px]">
            {type === "admissions"
              ? "Tell us about your child and when you hope to join. Our admissions team will follow up with next steps."
              : "Send a message to the school office. We typically respond during school hours, Sunday to Thursday."}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
          <div className="sm:col-span-2">
            <label htmlFor="contact-name" className={labelClass}>
              Full name
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              autoComplete="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={fieldClass}
              placeholder="Your full name"
            />
          </div>

          <div>
            <label htmlFor="contact-email" className={labelClass}>
              Email
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={fieldClass}
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="contact-phone" className={labelClass}>
              Phone
            </label>
            <input
              id="contact-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className={fieldClass}
              placeholder="+968 ..."
            />
          </div>

          {type === "admissions" && (
            <>
              <div>
                <label htmlFor="contact-child-age" className={labelClass}>
                  Child&apos;s age
                </label>
                <input
                  id="contact-child-age"
                  name="childAge"
                  type="number"
                  min={3}
                  max={20}
                  required
                  value={childAge}
                  onChange={(e) => setChildAge(e.target.value)}
                  className={fieldClass}
                  placeholder="e.g. 7"
                />
              </div>

              <div>
                <label htmlFor="contact-grade" className={labelClass}>
                  Grade applying for
                </label>
                <GradeSelect
                  key="admissions-grade"
                  id="contact-grade"
                  name="gradeApplyingFor"
                  required
                  value={grade}
                  options={grades}
                  placeholder="Select grade"
                  onChange={setGrade}
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="contact-start-date" className={labelClass}>
                  Preferred start date
                </label>
                <input
                  id="contact-start-date"
                  name="preferredStartDate"
                  type="date"
                  required
                  value={preferredStartDate}
                  onChange={(e) => setPreferredStartDate(e.target.value)}
                  className={`${fieldClass} [color-scheme:light]`}
                />
              </div>
            </>
          )}

          <div className="sm:col-span-2">
            <label htmlFor="contact-message" className={labelClass}>
              {type === "admissions" ? "Additional notes (optional)" : "Message"}
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={5}
              required={type === "general"}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={`${fieldClass} min-h-[130px] resize-y`}
              placeholder={
                type === "admissions"
                  ? "Anything else we should know about your child or family?"
                  : "How can we help?"
              }
            />
          </div>
        </div>

        {status === "error" && feedback && (
          <div
            role="alert"
            className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3.5 text-[13.5px] leading-relaxed text-red-800"
          >
            {feedback}
          </div>
        )}

        <div className="flex flex-col gap-3 border-t border-navy/8 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[12.5px] leading-relaxed text-slate/80">
            We usually reply during school hours, Sunday–Thursday.
          </p>
          <button
            type="submit"
            disabled={status === "loading"}
            className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-navy px-7 py-3.5 text-[15px] font-bold text-white shadow-[0_14px_30px_-16px_rgba(11,31,77,0.85)] transition hover:bg-navy-deep hover:shadow-[0_18px_34px_-14px_rgba(11,31,77,0.9)] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto sm:min-w-[190px]"
          >
            {status === "loading" ? "Sending…" : "Send inquiry"}
            {status !== "loading" && (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12h14M13 6l6 6-6 6"
                  stroke="#d4a017"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>
        </div>
      </form>

      {status === "success" && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-navy/50 p-4 backdrop-blur-sm"
          onClick={() => setStatus("idle")}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="inquiry-success-title"
            className="w-full max-w-sm animate-[whatsapp-pop_220ms_ease-out] rounded-[1.75rem] bg-white p-7 text-center shadow-[0_24px_60px_-20px_rgba(11,31,77,0.6)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold/15">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M5 12.5l4.5 4.5L19 7.5"
                  stroke="#d4a017"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3
              id="inquiry-success-title"
              className="mt-4 font-[family-name:var(--font-poppins)] text-xl font-bold tracking-[-0.02em] text-navy"
            >
              Submitted successfully
            </h3>
            <p className="mt-2 text-[14px] leading-relaxed text-slate">
              Your information has been submitted. Our team will get back to
              you soon.
            </p>
            <button
              type="button"
              autoFocus
              onClick={() => setStatus("idle")}
              className="mt-6 w-full rounded-2xl bg-navy px-6 py-3 text-[15px] font-bold text-white transition hover:bg-navy-deep"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}