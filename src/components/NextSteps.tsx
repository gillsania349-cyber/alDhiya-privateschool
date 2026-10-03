import Image from "next/image";
import { images } from "@/lib/images";

const actions = [
  {
    label: "Explore Our Curriculum",
    href: "/academics",
  },
  {
    label: "Contact for Admissions",
    href: "/contact?type=admissions",
  },
  {
    label: "Explore Student Life",
    href: "/student-life",
  },
];

function Arrow() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
    >
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function NextSteps() {
  return (
    <section
      id="next-steps"
      className="relative isolate overflow-hidden"
      aria-labelledby="next-steps-heading"
    >
      <Image
        src={images.schoolBuilding}
        alt=""
        fill
        className="object-cover object-[center_40%]"
        sizes="100vw"
        priority={false}
      />

      <div className="absolute inset-0 bg-navy/65" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/45 to-navy/30"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 md:py-20 lg:px-10 lg:py-24">
        <h2
          id="next-steps-heading"
          className="font-[family-name:var(--font-poppins)] text-3xl font-bold leading-none tracking-[-0.02em] text-white sm:text-4xl md:text-[40px]"
        >
          Next Steps
        </h2>
        <div className="mt-3 h-[3px] w-16 rounded-full bg-gold" />

        <div className="mt-8 grid grid-cols-1 gap-3 sm:mt-10 sm:grid-cols-3 sm:gap-4 lg:mt-12 lg:gap-5">
          {actions.map((action) => (
            <a
              key={action.label}
              href={action.href}
              className="group flex items-center justify-between gap-3 rounded-xl border border-gold bg-white/75 px-5 py-5 shadow-sm backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/90 sm:px-6 sm:py-6"
            >
              <h3 className="text-[15px] font-bold leading-snug text-navy sm:text-base">
                {action.label}
              </h3>
              <span className="flex h-8 w-8 shrink-0 items-center justify-center text-gold">
                <Arrow />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
