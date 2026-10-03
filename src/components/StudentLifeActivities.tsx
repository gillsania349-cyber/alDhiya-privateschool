import Image from "next/image";
import { images } from "@/lib/images";

const activities = [
  {
    title: "Football",
    description:
      "Developing teamwork, discipline, and sportsmanship through competitive play.",
    image: images.studentLife.football,
    alt: "Al Dhiya students in football kit on the field",
  },
  {
    title: "Volleyball",
    description: "Building confidence, coordination, and effective teamwork.",
    image: images.studentLife.volleyball,
    alt: "Students practising volleyball activities outdoors",
  },
  {
    title: "Badminton",
    description: "Enhancing agility, focus, and hand-eye coordination.",
    image: images.studentLife.badminton,
    alt: "Students playing badminton on the school grounds",
  },
  {
    title: "Chemistry Lab",
    description:
      "Encouraging scientific inquiry through practical experiments.",
    image: images.studentLife.chemistryLab,
    alt: "Students working with apparatus in the chemistry laboratory",
  },
  {
    title: "Physics Lab",
    description:
      "Exploring scientific principles through hands-on investigations.",
    image: images.studentLife.physicsLab,
    alt: "Students in lab coats in the physics laboratory",
  },
  {
    title: "Computer Lab",
    description: "Developing digital literacy and essential technology skills.",
    image: images.studentLife.computerLab,
    alt: "Computer lab workstation and student project model",
  },
  {
    title: "Library",
    description:
      "Inspiring a love of reading, research, and independent learning.",
    image: images.studentLife.library,
    alt: "Al Dhiya school library with bookshelves and reading area",
  },
  {
    title: "Art",
    description: "Fostering creativity, imagination, and artistic expression.",
    image: images.studentLife.art,
    alt: "Students creating clay art projects in class",
  },
  {
    title: "School Events & Celebration",
    description:
      "Encouraging cultural appreciation, participation, and school spirit.",
    image: images.studentLife.events,
    alt: "Students performing at a school celebration event",
  },
];

function TitleOrnament({ flip = false }: { flip?: boolean }) {
  return (
    <span className="flex items-center gap-2" aria-hidden="true">
      {flip ? (
        <>
          <span className="h-2 w-2 rounded-full bg-gold" />
          <span className="h-px w-10 bg-gold sm:w-14 md:w-16" />
        </>
      ) : (
        <>
          <span className="h-px w-10 bg-gold sm:w-14 md:w-16" />
          <span className="h-2 w-2 rounded-full bg-gold" />
        </>
      )}
    </span>
  );
}

export default function StudentLifeActivities() {
  return (
    <section
      id="activities"
      className="scroll-mt-28 bg-[#f7f8fb]"
      aria-labelledby="activities-heading"
    >
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 md:py-20 lg:px-8 xl:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex items-center justify-center gap-3 sm:gap-4">
            <TitleOrnament />
            <h2
              id="activities-heading"
              className="text-xl font-bold tracking-tight text-[#033F94] sm:text-2xl md:text-[1.85rem]"
            >
              A Well-Rounded School Experience
            </h2>
            <TitleOrnament flip />
          </div>

          <p className="mx-auto mt-5 max-w-2xl text-[14px] leading-relaxed text-slate sm:mt-6 sm:text-[15px]">
            We believe in nurturing the whole child—academically, socially,
            physically, and emotionally. Our diverse opportunities help students
            explore their interests, build confidence, and develop lifelong
            skills.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-7">
          {activities.map((activity) => (
            <article
              key={activity.title}
              className="overflow-hidden rounded-2xl bg-white shadow-[0_8px_28px_rgba(11,31,77,0.08)]"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src={activity.image}
                  alt={activity.alt}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="px-5 py-4 sm:px-6 sm:py-5">
                <h3 className="text-[15px] font-bold text-[#033F94] sm:text-base">
                  {activity.title}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-slate sm:text-[13.5px]">
                  {activity.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
