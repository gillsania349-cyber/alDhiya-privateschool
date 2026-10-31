import Image from "next/image";
import { images } from "@/lib/images";

const features = [
  {
    title: "Internationally Recognised Education",
    description:
      "We deliver the Omani National Curriculum alongside Cambridge, Pearson Edexcel, IGCSE and AS Level programmes, providing students with an education that combines national identity with global academic standards.",
    icon: images.features.book,
  },
  {
    title: "Growing Confident Leaders",
    description:
      "At Al Dhiya, we nurture the whole child through character education, leadership opportunities, sports, cultural activities and values-based learning, helping every student develop confidence, responsibility and respect.",
    icon: images.features.leaders,
  },
  {
    title: "Learning Beyond the Classroom",
    description:
      "Our school culture is built on Tolerance, Respect, Responsibility, Trust, Success and Teamwork. We believe education is not only about academic achievement, but also about developing strong character and lifelong values.",
    icon: images.features.star,
  },
  {
    title: "Preparing Students for the Future",
    description:
      "Our internationally recognised qualifications prepare students for leading universities around the world while equipping them with critical thinking, creativity and the skills needed to thrive in an ever-changing world.",
    icon: images.features.globe,
  },
];

export default function Features() {
  return (
    <section
      id="school-values"
      className="border-t border-navy/5 bg-white"
      aria-label="Why Al Dhiya"
    >
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 md:py-20 lg:px-8 xl:px-10">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-14 lg:grid-cols-4 lg:gap-8 xl:gap-10">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-6 flex h-[88px] w-[88px] shrink-0 items-center justify-center sm:mb-7 lg:mb-8">
                <Image
                  src={feature.icon}
                  alt=""
                  width={88}
                  height={88}
                  className="h-[88px] w-[88px] object-contain"
                />
              </div>

              <h2 className="mx-auto max-w-[11rem] text-[15px] font-bold leading-snug text-navy sm:text-base lg:text-[17px]">
                {feature.title}
              </h2>

              <p className="mx-auto mt-3 max-w-[11.5rem] text-[13px] leading-[1.7] text-slate sm:mt-3.5 sm:text-[13.5px] lg:text-[14px]">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
