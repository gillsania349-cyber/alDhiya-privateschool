import Image from "next/image";
import { images } from "@/lib/images";

export default function AdmissionsApply() {
  return (
    <section
      id="apply"
      className="bg-navy"
      aria-labelledby="apply-heading"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-8 sm:flex-row sm:gap-8 sm:px-6 sm:py-10 lg:gap-10 lg:px-8 xl:px-10">
        <div className="relative h-20 w-20 shrink-0 sm:h-24 sm:w-24">
          <Image
            src={images.admissions.applyIcon}
            alt=""
            fill
            className="object-contain"
            sizes="96px"
          />
        </div>

        <div className="min-w-0 flex-1 text-center sm:text-left">
          <h2
            id="apply-heading"
            className="font-[family-name:var(--font-poppins)] text-xl font-bold leading-none tracking-[-0.02em] text-gold sm:text-2xl md:text-[1.75rem]"
          >
            Ready To Take The Next Step?
          </h2>
          <p className="mt-2 text-[13.5px] leading-relaxed text-white/90 sm:text-[14.5px] md:text-[15px]">
            Join a community that inspires learning, builds character and shapes
            successful futures.
          </p>
        </div>

        <a
          href="/contact?type=admissions"
          className="inline-flex shrink-0 items-center justify-center rounded-xl bg-gold px-7 py-3.5 text-[15px] font-bold text-navy transition hover:bg-gold-soft sm:px-8 sm:py-4"
        >
          Apply Now
        </a>
      </div>
    </section>
  );
}
