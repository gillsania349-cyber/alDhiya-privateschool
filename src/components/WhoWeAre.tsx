import Image from "next/image";
import { images } from "@/lib/images";

const columns = [
  {
    src: images.whoWeAre.established,
    alt: "Established 2006 — Building a legacy of excellence",
  },
  {
    src: images.whoWeAre.students,
    alt: "450+ students from diverse backgrounds",
  },
  {
    src: images.whoWeAre.educators,
    alt: "Qualified and experienced educators dedicated to student success",
  },
  {
    src: images.whoWeAre.recognized,
    alt: "Internationally recognized Cambridge and Pearson Edexcel pathways",
  },
];

function TitleOrnament({ flip = false }: { flip?: boolean }) {
  return (
    <span className="flex items-center gap-2" aria-hidden="true">
      {flip ? (
        <>
          <span className="h-2 w-2 rotate-45 bg-gold" />
          <span className="h-px w-10 bg-gold sm:w-14 md:w-16" />
        </>
      ) : (
        <>
          <span className="h-px w-10 bg-gold sm:w-14 md:w-16" />
          <span className="h-2 w-2 rotate-45 bg-gold" />
        </>
      )}
    </span>
  );
}

export default function WhoWeAre() {
  return (
    <section className="bg-white" aria-labelledby="who-we-are-heading">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 md:py-20 lg:px-8 xl:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex items-center justify-center gap-3 sm:gap-4">
            <TitleOrnament />
            <h2
              id="who-we-are-heading"
              className="text-2xl font-bold tracking-tight text-[#033F94] sm:text-3xl md:text-[2rem]"
            >
              Who We Are
            </h2>
            <TitleOrnament flip />
          </div>

          <p className="mx-auto mt-5 max-w-2xl text-[14px] leading-relaxed text-slate sm:mt-6 sm:text-[15px] md:text-base">
            Founded with a vision to deliver world-class education rooted in
            values, Al Dhiya International School has grown into one of
            Salalah&apos;s leading international schools, trusted by families and
            recognised for excellence.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:mt-14 lg:grid-cols-4 lg:gap-5 xl:gap-6">
          {columns.map((column) => (
            <article key={column.src} className="flex justify-center">
              <Image
                src={column.src}
                alt={column.alt}
                width={280}
                height={360}
                className="h-auto w-full max-w-[280px] object-contain"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
