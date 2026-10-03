import Image from "next/image";
import { images } from "@/lib/images";

const cards = [
  {
    title: "International Curriculum",
    description:
      "Cambridge & Pearson Edexcel pathways that develop critical thinkers and global citizens.",
    image: images.whatMakesUsDifferent.internationalCurriculum,
    alt: "Students learning in a modern classroom",
  },
  {
    title: "Strong Community",
    description:
      "Partnering with families to build a supportive and thriving school community.",
    image: images.whatMakesUsDifferent.strongCommunity,
    alt: "Al Dhiya International School building with the Omani flag",
  },
  {
    title: "Holistic Development",
    description:
      "Focus on academics, sports, arts, leadership and character building.",
    image: images.whatMakesUsDifferent.holisticDevelopment,
    alt: "Students celebrating sports day",
  },
  {
    title: "Pathways to Success",
    description:
      "Preparing students for top universities and future careers worldwide.",
    image: images.whatMakesUsDifferent.pathwaysToSuccess,
    alt: "Graduating students in academic gowns",
  },
  {
    title: "Modern Facilities",
    description:
      "Smart classrooms, science labs, sports facilities and technology-enabled learning.",
    image: images.whatMakesUsDifferent.modernFacilities,
    alt: "Students working in a science laboratory",
  },
  {
    title: "Rooted in Values",
    description:
      "Instilling Islamic values and cultural identity alongside academic excellence.",
    image: images.whatMakesUsDifferent.rootedInValues,
    alt: "Students in traditional dress on the school grounds",
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

export default function WhatMakesUsDifferent() {
  return (
    <section className="bg-white" aria-labelledby="what-makes-us-different-heading">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 md:py-20 lg:px-8 xl:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex items-center justify-center gap-3 sm:gap-4">
            <TitleOrnament />
            <h2
              id="what-makes-us-different-heading"
              className="text-2xl font-bold tracking-tight text-[#033F94] sm:text-3xl md:text-[2rem]"
            >
              What Make Us Different?
            </h2>
            <TitleOrnament flip />
          </div>

          <p className="mx-auto mt-4 max-w-xl text-[14px] leading-relaxed text-slate sm:mt-5 sm:text-[15px]">
            A well-rounded education that prepares students for life.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:mt-10 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-7">
          {cards.map((card) => (
            <article
              key={card.title}
              className="overflow-hidden rounded-2xl bg-white shadow-[0_8px_30px_rgba(11,31,77,0.08)] sm:rounded-3xl"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              <div className="px-4 py-4 sm:px-5 sm:py-5 md:px-6 md:py-6">
                <h3 className="text-[15px] font-bold leading-snug text-[#033F94] sm:text-base">
                  {card.title}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-slate sm:text-[13.5px]">
                  {card.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
