"use client";

import { useEffect, useId, useState } from "react";
import SectionHeading from "@/components/SectionHeading";

type FaqItem = {
  id: string;
  question: string;
  answer: string;
  bullets?: string[];
  afterBullets?: string;
};

const faqs: FaqItem[] = [
  {
    id: "faq-conduct",
    question: "What are the school rules and student code of conduct?",
    answer: "Students are expected to follow the school's code of conduct by:",
    bullets: [
      "Wearing the correct school uniform.",
      "Respecting teachers, staff, and fellow students.",
      "Demonstrating good behaviour and responsibility at all times.",
      "Arriving on time and attending classes regularly.",
      "Taking care of school property and maintaining a safe learning environment.",
      "Following all school policies and academic regulations.",
    ],
  },
  {
    id: "faq-hours",
    question: "What are the school hours?",
    answer: "School operates Sunday to Thursday.",
    bullets: [
      "KG 1 & KG 2: 7:00 a.m. – 1:00 p.m.",
      "Grade 1 – Grade 12: 7:00 a.m. – 1:45 p.m.",
    ],
  },
  {
    id: "faq-transport",
    question: "Is transportation available?",
    answer:
      "Yes. School transportation is available on selected routes. Please contact the Admissions Office for route availability, pickup locations, and transportation fees.",
  },
  {
    id: "faq-fees",
    question: "Are there any other fees?",
    answer:
      "Yes. In addition to the tuition fees and the one-time application fee of OMR 50 per student, there are school books fees. For detailed information about book fees and any other applicable charges, please contact the Admissions Office.",
  },
  {
    id: "faq-exams",
    question: "Are there any entrance exams?",
    answer:
      "Yes. Students may be required to complete an age-appropriate assessment or placement test before admission to ensure they are placed in the appropriate grade level.",
  },
  {
    id: "faq-international",
    question: "Can international students apply?",
    answer:
      "Yes. Al-Dhiya International School welcomes applications from both Omani and international students, subject to meeting the school's admission requirements and Ministry of Education regulations.",
  },
  {
    id: "faq-scholarships",
    question: "Do you offer scholarships?",
    answer:
      "At present, Al-Dhiya International School does not offer scholarship programmes. Please contact the Admissions Office for information about any future scholarship opportunities.",
  },
  {
    id: "faq-status",
    question: "How will I know about my application status?",
    answer:
      "Once the admissions assessment and document review have been completed, the Admissions Team will contact you directly to inform you of the application outcome and the next steps.",
  },
  {
    id: "faq-payment",
    question: "How can I pay the tuition fees?",
    answer: "Tuition fees can be paid in two ways:",
    bullets: ["Cash payment", "Bank transfer"],
    afterBullets:
      "For complete payment instructions, bank details, and other payment-related information, please contact the Admissions Office.",
  },
  {
    id: "faq-sibling",
    question: "Is there a sibling discount?",
    answer:
      "Yes. Al-Dhiya International School offers a 10% sibling discount for each child. Please contact the Admissions Office for full eligibility details.",
  },
];

/** Two-column order matching the admissions FAQ layout */
const leftColumn = [
  "faq-conduct",
  "faq-transport",
  "faq-exams",
  "faq-scholarships",
  "faq-payment",
];
const rightColumn = [
  "faq-hours",
  "faq-fees",
  "faq-international",
  "faq-status",
  "faq-sibling",
];

const faqById = Object.fromEntries(faqs.map((item) => [item.id, item]));
const faqIds = new Set(faqs.map((item) => item.id));

function PlusMinus({ open }: { open: boolean }) {
  return (
    <span
      className="flex h-7 w-7 shrink-0 items-center justify-center text-[22px] font-light leading-none text-navy"
      aria-hidden="true"
    >
      {open ? "−" : "+"}
    </span>
  );
}

function FaqCard({
  item,
  isOpen,
  baseId,
  onToggle,
}: {
  item: FaqItem;
  isOpen: boolean;
  baseId: string;
  onToggle: () => void;
}) {
  const panelId = `${baseId}-${item.id}-panel`;
  const buttonId = `${baseId}-${item.id}-button`;

  return (
    <div
      id={item.id}
      className="scroll-mt-28 overflow-hidden rounded-xl border border-navy/10 bg-white"
    >
      <button
        id={buttonId}
        type="button"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left transition hover:bg-navy/[0.02] sm:px-5 sm:py-4"
      >
        <span className="text-[13.5px] font-semibold leading-snug text-navy sm:text-[14px]">
          {item.question}
        </span>
        <PlusMinus open={isOpen} />
      </button>

      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        hidden={!isOpen}
        className="border-t border-navy/5 px-4 pb-4 pt-2 sm:px-5 sm:pb-5"
      >
        <p className="text-[13px] leading-relaxed text-slate sm:text-[13.5px]">
          {item.answer}
        </p>
        {item.bullets ? (
          <ul className="mt-2.5 list-disc space-y-1.5 pl-5 text-[13px] leading-relaxed text-slate sm:text-[13.5px]">
            {item.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        ) : null}
        {item.afterBullets ? (
          <p className="mt-2.5 text-[13px] leading-relaxed text-slate sm:text-[13.5px]">
            {item.afterBullets}
          </p>
        ) : null}
      </div>
    </div>
  );
}

export default function FAQ() {
  const baseId = useId();
  const [openId, setOpenId] = useState<string | null>(null);

  useEffect(() => {
    const syncFromHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash === "faq") {
        setOpenId((current) => current ?? "faq-hours");
        return;
      }
      if (faqIds.has(hash)) setOpenId(hash);
    };

    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, []);

  const renderColumn = (ids: string[]) =>
    ids.map((id) => {
      const item = faqById[id];
      if (!item) return null;
      const isOpen = openId === item.id;
      return (
        <FaqCard
          key={item.id}
          item={item}
          isOpen={isOpen}
          baseId={baseId}
          onToggle={() => setOpenId(isOpen ? null : item.id)}
        />
      );
    });

  return (
    <section
      id="faq"
      className="scroll-mt-28 bg-white"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 md:py-16 lg:px-8 xl:px-10">
        <div className="text-center">
          <SectionHeading id="faq-heading">
            Frequently Asked Questions
          </SectionHeading>
          <p className="mx-auto mt-4 max-w-3xl text-[14px] leading-relaxed text-slate sm:mt-5 sm:text-[15px]">
            Find answers about school hours, fees, admissions, and student life
            at Al Dhiya International School
          </p>
        </div>

        <div className="mt-8 rounded-2xl bg-[#f3f4f6] p-4 sm:mt-10 sm:p-6 md:p-8">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4">
            <div className="flex flex-col gap-3">{renderColumn(leftColumn)}</div>
            <div className="flex flex-col gap-3">{renderColumn(rightColumn)}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
