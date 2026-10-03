import Image from "next/image";
import { images } from "@/lib/images";

function Arrow() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="#d4a017"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function WhyAldhiyaHero() {
  return (
    <section
      id="why-aldhiya"
      className="relative isolate min-h-[420px] overflow-hidden sm:min-h-[480px] lg:min-h-[540px]"
      aria-labelledby="why-aldhiya-heading"
    >
      <Image
        src={images.whyAldhiyaHero}
        alt=""
        fill
        className="object-cover object-center"
        priority
        sizes="100vw"
      />

      <div
        className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/55 to-navy/20"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex max-w-7xl items-end px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24 xl:px-10">
        <div className="max-w-xl">
          <h1
            id="why-aldhiya-heading"
            className="text-[2rem] font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-[3.25rem]"
          >
            Why <span className="text-gold">Al Dhiya?</span>
          </h1>

          <p className="mt-4 max-w-md text-[14px] leading-relaxed text-white/95 sm:mt-5 sm:text-[15px] md:text-base">
            At Al Dhiya International School, we are more than an educational
            institution - we are a community that nurtures young minds, builds
            character, and empowers students to achieve their full potential.
          </p>

          <a
            href="/student-life"
            className="mt-6 inline-flex items-center gap-2.5 rounded-xl bg-[#d4dce8]/90 px-6 py-3.5 text-[15px] font-bold text-navy backdrop-blur-sm transition hover:bg-[#d4dce8] sm:mt-8 sm:px-7 sm:py-4"
          >
            Discover Student Life
            <Arrow />
          </a>
        </div>
      </div>
    </section>
  );
}
