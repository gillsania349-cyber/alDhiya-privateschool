"use client";

import { useEffect, useId, useState } from "react";

const WHATSAPP_NUMBER = "96899858378";
const WHATSAPP_MESSAGE =
  "Assalamu Alaikum, I would like to inquire about Al Dhiya International Private School.";

const whatsappUrl =
  "https://wa.me/" +
  WHATSAPP_NUMBER +
  "?text=" +
  encodeURIComponent(WHATSAPP_MESSAGE);

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M16.04 3C9.4 3 4 8.28 4 14.76c0 2.08.58 4.1 1.68 5.88L4 29l8.6-1.62a12.3 12.3 0 0 0 3.44.48c6.64 0 12.04-5.28 12.04-11.76C28.08 8.28 22.68 3 16.04 3Zm0 21.5c-1.14 0-2.26-.28-3.26-.82l-.23-.12-5.1.96.98-4.9-.15-.24a9.4 9.4 0 0 1-1.5-5.12c0-5.2 4.36-9.44 9.26-9.44s9.26 4.24 9.26 9.44-4.36 9.24-9.26 9.24Zm5.1-7.06c-.28-.14-1.66-.82-1.92-.9-.26-.1-.44-.14-.63.14-.18.28-.72.9-.88 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.42-2.24-1.36-.83-.72-1.38-1.62-1.54-1.9-.16-.28-.02-.42.12-.56.12-.12.28-.32.42-.48.14-.16.18-.28.28-.46.1-.18.04-.34-.02-.48-.06-.14-.63-1.5-.86-2.06-.22-.54-.46-.46-.63-.46h-.54c-.18 0-.48.08-.72.34-.26.28-.96.94-.96 2.28s.98 2.64 1.12 2.82c.14.18 1.92 2.92 4.66 4.1 1.74.74 2.42.8 3.28.68.53-.08 1.66-.66 1.9-1.3.24-.64.24-1.18.16-1.3-.06-.1-.24-.18-.52-.32Z" />
    </svg>
  );
}

export default function WhatsAppChat() {
  const titleId = useId();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setOpen(true), 1800);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="pointer-events-none fixed right-4 bottom-5 z-[70] flex flex-col items-end gap-3 sm:right-6 sm:bottom-6">
      {open && (
        <div
          role="dialog"
          aria-labelledby={titleId}
          className="pointer-events-auto w-[300px] max-w-[calc(100vw-2rem)] origin-bottom-right animate-[whatsapp-pop_220ms_ease-out] overflow-hidden rounded-2xl border border-[#128C7E]/15 bg-white shadow-[0_18px_40px_-18px_rgba(7,94,84,0.55)]"
        >
          <div className="flex items-start gap-3 bg-[#075E54] px-4 py-3.5 text-white">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15">
              <WhatsAppIcon className="h-6 w-6" />
            </span>
            <div className="min-w-0 flex-1 pt-0.5">
              <p id={titleId} className="truncate text-[14px] font-semibold">
                Al Dhiya School
              </p>
              <p className="text-[12px] text-white/75">Typically replies soon</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-full p-1 text-white/70 transition hover:bg-white/10 hover:text-white"
              aria-label="Close WhatsApp chat"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          <div className="bg-[#ECE5DD] px-3.5 py-4">
            <div className="max-w-[92%] rounded-2xl rounded-tl-md bg-white px-3.5 py-2.5 text-[13px] leading-relaxed text-navy shadow-sm">
              Assalamu Alaikum! How can we help you today? Chat with us on
              WhatsApp for quick admissions support.
            </div>
          </div>

          <div className="border-t border-navy/5 bg-white p-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-[#25D366] text-[14px] font-semibold text-white transition hover:bg-[#1ebe57]"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Chat on WhatsApp
            </a>
            <p className="mt-2 text-center text-[11px] text-slate">
              +968 9985 8378
            </p>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="pointer-events-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_28px_-10px_rgba(37,211,102,0.85)] transition hover:scale-[1.04] hover:bg-[#1ebe57] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]/50 focus-visible:ring-offset-2"
        aria-expanded={open}
        aria-label={open ? "Close WhatsApp chat" : "Open WhatsApp chat"}
      >
        {open ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path
              d="M6 6l12 12M18 6L6 18"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
          </svg>
        ) : (
          <WhatsAppIcon className="h-7 w-7" />
        )}
      </button>
    </div>
  );
}