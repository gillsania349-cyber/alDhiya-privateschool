import Image from "next/image";
import { images } from "@/lib/images";

const articles = [
  {
    date: "26/06/2026",
    dateTime: "2026-06-26",
    title: "Al-Dhiya Celebrates the Graduation of Its Grade 12 Class of 2026",
    description:
      "Al-Dhiya International Private School proudly celebrated the graduation of its Grade 12 Class of 2026 in a memorable ceremony filled with joy, pride, and achievement.",
    image: images.news.graduation,
    alt: "Grade 12 Class of 2026 graduates in caps and gowns",
  },
  {
    date: "23/02/2026",
    dateTime: "2026-02-23",
    title: "Al-Dhiya Triumphs in Inter-School Football Tournament",
    description:
      "Al-Dhiya International Private School celebrated a remarkable victory as its football team emerged champions of the Inter-School Football Tournament.",
    image: images.news.football,
    alt: "Football team students holding certificates and trophy",
  },
  {
    date: "28/07/2026",
    dateTime: "2026-07-28",
    title: "Al-Dhiya Celebrates Excellent IGCSE Results for 2025/2026 Academic Year",
    description:
      "Al-Dhiya International Private School is proud to announce the outstanding IGCSE results achieved by its students for the 2025/2026 academic year.",
    image: images.news.igcse,
    alt: "Students presenting science and robotics project achievements",
  },
];

function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
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

export default function LatestNews() {
  return (
    <section id="news" className="bg-white" aria-labelledby="news-heading">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 md:py-16 lg:px-8 lg:py-20 xl:px-10">
        <div className="mb-7 flex items-center gap-3 sm:mb-9 sm:gap-4 md:mb-10">
          <h2
            id="news-heading"
            className="text-xl font-bold tracking-tight text-navy sm:text-2xl md:text-3xl"
          >
            Latest News
          </h2>
          <span className="h-[3px] w-10 shrink-0 rounded-full bg-gold sm:w-12 md:w-14" />
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-7">
          {articles.map((article, index) => (
            <article
              key={article.title}
              className={`flex flex-col overflow-hidden rounded-2xl bg-white shadow-[0_8px_30px_rgba(11,31,77,0.08)] sm:rounded-3xl ${
                index === 2
                  ? "sm:col-span-2 sm:mx-auto sm:max-w-md lg:col-span-1 lg:mx-0 lg:max-w-none"
                  : ""
              }`}
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.alt}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              <div className="flex flex-1 flex-col px-4 py-4 sm:px-5 sm:py-5 md:px-6 md:py-6">
                <time
                  dateTime={article.dateTime}
                  className="text-[12px] text-[#9aa8bc] sm:text-[13px]"
                >
                  {article.date}
                </time>
                <h3 className="mt-2 text-[14px] font-bold leading-snug text-navy sm:text-[15px] md:text-base">
                  {article.title}
                </h3>
                <p className="mt-2 flex-1 text-[12.5px] leading-relaxed text-slate sm:mt-2.5 sm:text-[13px] md:text-[13.5px]">
                  {article.description}
                </p>
                <a
                  href="#news"
                  className="mt-4 inline-flex w-fit items-center gap-2 rounded-lg bg-navy px-4 py-2.5 text-[13px] font-semibold text-white transition hover:bg-navy-deep sm:mt-5"
                >
                  Read More
                  <Arrow className="text-gold" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex justify-center sm:mt-10 md:mt-12">
          <a
            href="#news"
            className="inline-flex w-full max-w-xs items-center justify-center gap-2.5 rounded-xl border-2 border-gold bg-white px-5 py-3 text-[14px] font-semibold text-navy transition hover:bg-gold/5 sm:w-auto sm:max-w-none sm:px-7 sm:py-3.5 sm:text-[15px]"
          >
            View All News
            <Arrow className="text-gold h-[18px] w-[18px]" />
          </a>
        </div>
      </div>
    </section>
  );
}
