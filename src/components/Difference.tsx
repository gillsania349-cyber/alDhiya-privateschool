import Image from "next/image";
import { images } from "@/lib/images";

const intro =
  "What does it mean to be an Al Dhiya student? It means being part of a school that inspires excellence, nurtures character, and prepares students to thrive in an ever-changing world. At Al Dhiya International School, we believe that education extends beyond the classroom—it is about developing confident, compassionate, and responsible individuals who are ready to make a positive impact.";

const pillars = [
  {
    title: "Compassion",
    description:
      "We foster kindness and empathy, encouraging our students to support and uplift those around them.",
    image: images.difference.compassion,
    alt: "Young Al Dhiya students smiling and making peace signs",
  },
  {
    title: "Aspiration",
    description:
      "Every Al Dhiya student is encouraged to dream big, set ambitious goals, and work towards excellence in all she does.",
    image: images.difference.aspiration,
    alt: "Students conducting a science experiment in the laboratory",
  },
  {
    title: "Collaboration",
    description:
      "Teamwork is at the heart of our learning approach, teaching students to listen, share ideas, and achieve more together.",
    image: images.difference.collaboration,
    alt: "Students presenting their Robotic Water Way Cleaner project",
  },
  {
    title: "Creativity",
    description:
      "Innovation and imagination are celebrated, inspiring students to think independently and express themselves confidently.",
    image: images.difference.creativity,
    alt: "Student exploring materials with squash, bend, and stretch word cards",
  },
];

export default function Difference() {
  return (
    <section
      id="student-life"
      className="bg-white"
      aria-labelledby="difference-heading"
    >
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 md:py-16 lg:px-8 lg:py-20 xl:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="difference-heading"
            className="text-xl font-bold tracking-tight text-navy sm:text-2xl md:text-3xl lg:text-[2rem]"
          >
            The Al Dhiya Difference
          </h2>
          <div className="mx-auto mt-2.5 h-[3px] w-12 rounded-full bg-gold sm:mt-3 sm:w-14" />
          <p className="mt-4 px-1 text-[13px] leading-relaxed text-slate sm:mt-5 sm:text-[14px] md:mt-6 md:text-[15px]">
            {intro}
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:mt-10 sm:grid-cols-2 sm:gap-6 md:mt-12 md:gap-7 lg:mt-14 lg:gap-8">
          {pillars.map((pillar) => (
            <article
              key={pillar.title}
              className="overflow-hidden rounded-2xl bg-white shadow-[0_8px_30px_rgba(11,31,77,0.08)] sm:rounded-3xl"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden sm:aspect-[16/9] md:aspect-[16/10]">
                <Image
                  src={pillar.image}
                  alt={pillar.alt}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
              <div className="px-5 py-4 sm:px-6 sm:py-5 md:px-7 md:py-6">
                <h3 className="text-base font-bold text-navy sm:text-lg md:text-xl">
                  {pillar.title}
                </h3>
                <div className="mt-1.5 h-[3px] w-9 rounded-full bg-gold sm:mt-2 sm:w-10" />
                <p className="mt-2.5 text-[13px] leading-relaxed text-slate sm:mt-3 sm:text-[13.5px] md:text-[14.5px]">
                  {pillar.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
