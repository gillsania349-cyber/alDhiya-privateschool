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

export default function AcademicsHero() {
  return (
    <section
      id="academics"
      className="relative isolate min-h-[420px] overflow-hidden sm:min-h-[480px] lg:min-h-[540px]"
      aria-labelledby="academics-heading"
    >
      <Image
        src={images.academicsHero}
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
            id="academics-heading"
            className="text-[2rem] font-bold leading-tight tracking-tight sm:text-5xl md:text-[3.25rem]"
          >
            <span className="text-gold">Academic Excellence</span>
            <br />
            <span className="text-white">at Every Stage</span>
          </h1>

          <p className="mt-4 max-w-md text-[14px] leading-relaxed text-white/95 sm:mt-5 sm:text-[15px] md:text-base">
            At Al-Dhiya International School, we provide a comprehensive
            educational journey designed to nurture curiosity, inspire achievement,
            and prepare students for future success. Through internationally
            recognised programmes and exceptional teaching, students develop
            knowledge, skills and confidence needed to thrive in an ever-changing
            world.
          </p>

          <a
            href="#curriculum"
            className="mt-6 inline-flex items-center gap-2.5 rounded-xl bg-[#d4dce8]/90 px-6 py-3.5 text-[15px] font-bold text-navy backdrop-blur-sm transition hover:bg-[#d4dce8] sm:mt-8 sm:px-7 sm:py-4"
          >
            Explore Our Curriculum
            <Arrow />
          </a>
        </div>
      </div>
    </section>
  );
}
