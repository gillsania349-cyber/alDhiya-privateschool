import HeroIllustration from "./HeroIllustration";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.2]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(11,31,77,0.06) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-4 py-10 sm:gap-10 sm:px-6 sm:py-14 md:py-16 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:py-20 xl:gap-12 xl:px-10">
        <div className="animate-fade-up order-1 mx-auto w-full max-w-xl text-center lg:mx-0 lg:text-left">
          <p className="mb-3 text-[11px] font-semibold tracking-[0.18em] text-gold sm:mb-4 sm:text-[12px] sm:tracking-[0.22em] md:text-[13px]">
            <span className="inline-block">VALUES</span>
            <span className="mx-2 sm:mx-3" aria-hidden="true">
              ·
            </span>
            <span className="inline-block">KNOWLEDGE</span>
            <span className="mx-2 sm:mx-3" aria-hidden="true">
              ·
            </span>
            <span className="inline-block">EXCELLENCE</span>
          </p>

          <h1 className="text-[1.75rem] font-extrabold leading-[1.15] tracking-tight text-navy sm:text-4xl md:text-[2.75rem] lg:text-[2.85rem] xl:text-[3.25rem]">
            Nurturing Tomorrow,
            <br className="hidden sm:block" />{" "}
            <span className="sm:inline">Guided by Values</span>
          </h1>

          <p className="mx-auto mt-4 max-w-md text-[14px] leading-relaxed text-slate sm:mt-5 sm:text-[15px] md:mt-6 md:text-base lg:mx-0 lg:text-[17px]">
            Al Dhiya International Private School is dedicated to academic
            excellence and values, preparing students to become confident,
            compassionate and responsible global citizens.
          </p>

          <a
            href="/why-aldhiya"
            className="mt-7 inline-flex w-full max-w-xs items-center justify-center gap-2.5 rounded-xl bg-navy px-6 py-3.5 text-[15px] font-semibold text-white shadow-lg shadow-navy/15 transition hover:bg-navy-deep hover:shadow-xl sm:mt-9 sm:w-auto sm:max-w-none sm:px-7 sm:py-4 sm:text-base lg:mt-10"
          >
            Discover Our School
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M5 12h14M13 6l6 6-6 6"
                stroke="#d4a017"
                strokeWidth="2.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        <div
          className="animate-fade-up order-2 w-full lg:justify-self-end"
          style={{ animationDelay: "120ms" }}
        >

 <img src="/a55aee723c578c5e8f53cb111c0e9abfd9b7b9bd.webp" alt="" />       </div>
      </div>
    </section>
  );
}
