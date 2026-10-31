import Image from "next/image";
import { images } from "@/lib/images";

const stats = [
  {
    title: "KG1 – Grade 12",
    subtitle: "From Early years to Sixth Form",
    icon: images.stats.kgGrade12,
  },
  {
    title: "20+",
    subtitle: "Years of Educational Excellence",
    icon: images.stats.years,
  },
  {
    title: "40+",
    subtitle: "Nationalities in Our Diverse Communities",
    icon: images.stats.nationalities,
  },
  {
    title: "Reasonable Class Sizes",
    subtitle: "Personalised Learning, Stronger Outcomes",
    icon: images.stats.classSizes,
  },
];

export default function Stats() {
  return (
    <section
      className="border-t border-navy/5 bg-white"
      aria-label="School highlights"
    >
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 md:py-14 lg:px-8 lg:py-16 xl:px-10">
        <div className="grid grid-cols-2 gap-6 sm:gap-8 md:gap-x-8 md:gap-y-10 lg:grid-cols-4 lg:gap-6">
          {stats.map((item) => (
            <article
              key={item.title}
              className="flex flex-col items-center px-1 text-center"
            >
              <div className="mb-2 flex h-[68px] w-[99px] shrink-0 items-center justify-center sm:mb-4">
                <Image
                  src={item.icon}
                  alt=""
                  width={99}
                  height={68}
                  className="h-[68px] w-[99px] object-contain"
                />
              </div>
              <h3 className="mx-auto max-w-[9rem] text-[13px] font-bold leading-snug text-navy sm:text-base md:text-lg">
                {item.title}
              </h3>
              <p className="mx-auto mt-1 max-w-[9rem] text-[11px] leading-snug text-slate sm:mt-1.5 sm:text-[13px] md:text-sm">
                {item.subtitle}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
