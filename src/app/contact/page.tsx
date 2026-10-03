import type { Metadata } from "next";
import { Suspense } from "react";
import ContactForms from "@/components/ContactForms";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Contact | Al Dhiya International Private School",
  description:
    "Contact Al Dhiya International Private School for general inquiries or admissions — Salalah, Sultanate of Oman.",
};

export default function ContactPage() {
  return (
    <>
      <main className="flex-1">
        <Header />

        <section className="relative isolate overflow-hidden bg-[#f7f9fc]">
          <div
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(11,31,77,0.12) 1px, transparent 0)",
              backgroundSize: "22px 22px",
            }}
            aria-hidden="true"
          />

          <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 xl:px-10">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-[12px] font-semibold tracking-[0.18em] text-gold uppercase">
                Get in touch
              </p>
              <h1 className="mt-3 font-[family-name:var(--font-poppins)] text-3xl font-bold tracking-[-0.02em] text-navy sm:text-4xl md:text-[2.75rem]">
                Contact Al Dhiya
              </h1>
              <p className="mt-3 text-[14px] leading-relaxed text-slate sm:text-[15px]">
                Use the form below for a general question or an admissions
                inquiry. Prefer to call? Reach us on{" "}
                <a
                  href="tel:+96895882848"
                  className="font-semibold text-navy underline decoration-gold/50 underline-offset-2 hover:decoration-gold"
                >
                  +968 9588 2848
                </a>
                .
              </p>
            </div>

            <div className="mt-8 sm:mt-10">
              <Suspense
                fallback={
                  <div className="mx-auto h-96 max-w-2xl animate-pulse rounded-2xl bg-white/80" />
                }
              >
                <ContactForms />
              </Suspense>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}