import Image from "next/image";
import { images } from "@/lib/images";

const stages = [
  {
    label: "KG",
    illustration: images.academicJourney.kg,
    title: "Building Strong Foundations",
    description:
      "Our Kindergarten programme creates a nurturing environment where young learners develop confidence, independence, and a love for learning through exploration and play.",
    listTitle: "Key Areas of Learning",
    items: [
      "Phonics",
      "English Language",
      "Arabic Language",
      "Social Development",
      "Mathematics",
      "Islamic Values",
      "Storytelling & Communication",
    ],
  },
  {
    label: "PRIMARY",
    illustration: images.academicJourney.primary,
    title: "Inspiring Curiosity & Growth",
    description:
      "The primary years focus on developing strong academic foundations while encouraging curiosity, creativity and independent thinking.",
    listTitle: "Core Subjects",
    items: [
      "English",
      "Mathematics",
      "Science",
      "Arabic",
      "Islamic Studies",
      "Social Studies",
      "ICT",
      "Art",
      "Physical Education",
      "Music",
      "Global Perspectives",
    ],
  },
  {
    label: "GCSE",
    illustration: images.academicJourney.gcse,
    title: "Preparing Global Learners",
    description:
      "Our Secondary and IGCSE programmes challenge students to think critically, work independently, and achieve academic excellence.",
    listTitle: "Subjects",
    items: [
      "English Language",
      "Mathematics",
      "Biology",
      "Chemistry",
      "Physics",
      "Arabic",
      "ICT",
      "Computer Science",
      "Islamic Studies",
      "Social Studies",
    ],
  },
  {
    label: "A-LEVEL",
    illustration: images.academicJourney.aLevel,
    title: "Preparing for University and Beyond",
    description:
      "The A-Level programme provides students with advanced subject knowledge and analytical skills required for higher education and future careers.",
    listTitle: "Subjects",
    items: [
      "Mathematics",
      "Biology",
      "Chemistry",
      "Physics",
      "Environmental Management",
      "Business",
      "Accounting",
      "Computer Science",
      "Economics",
      "Social Studies",
    ],
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

export default function AcademicJourney() {
  return (
    <>
      <section
        id="curriculum"
        className="bg-white"
        aria-labelledby="academic-journey-heading"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 md:py-20 lg:px-8 xl:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex items-center justify-center gap-3 sm:gap-4">
              <TitleOrnament />
              <h2
                id="academic-journey-heading"
                className="text-2xl font-bold tracking-tight text-[#033F94] sm:text-3xl md:text-[2rem]"
              >
                Our Academic Journey
              </h2>
              <TitleOrnament flip />
            </div>

            <p className="mx-auto mt-5 max-w-2xl text-[14px] leading-relaxed text-slate sm:mt-6 sm:text-[15px] md:text-base">
              Founded with a vision to deliver world-class education rooted in
              values, Al Dhiya International School has grown into one of
              Salalah&apos;s leading international schools, trusted by families
              and recognised for excellence.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6 xl:gap-8">
            {stages.map((stage) => (
              <article key={stage.label} className="flex flex-col">
                <div className="flex justify-center">
                  <Image
                    src={stage.illustration}
                    alt={`${stage.label} stage illustration`}
                    width={280}
                    height={220}
                    className="h-auto w-full max-w-[240px] object-contain"
                  />
                </div>

                <div className="mt-4 flex flex-1 flex-col rounded-2xl border border-gold/80 bg-white p-4 shadow-[0_4px_20px_rgba(11,31,77,0.06)] sm:p-5">
                  <h3 className="text-[15px] font-bold leading-snug text-[#033F94] sm:text-base">
                    {stage.title}
                  </h3>
                  <p className="mt-2 text-[12.5px] leading-relaxed text-slate sm:text-[13px]">
                    {stage.description}
                  </p>
                  <p className="mt-4 text-[13px] font-bold text-[#033F94]">
                    {stage.listTitle}
                  </p>
                  <ul className="mt-2 space-y-1 text-[12.5px] leading-relaxed text-slate sm:text-[13px]">
                    {stage.items.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-[#033F94]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white pb-14 sm:pb-16 md:pb-20" aria-label="Curriculum pathways">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-10">
          <Image
            src={images.academicJourney.curriculumPanelMobile}
            alt="Cambridge International Curriculum, Omani Bilingual Pathway, IGCSE and A Level examination options, and academic structure"
            width={826}
            height={1903}
            className="h-auto w-full object-contain md:hidden"
            sizes="100vw"
            priority={false}
          />
          <Image
            src={images.academicJourney.curriculumPanel}
            alt="Cambridge International Curriculum, Omani Bilingual Pathway, IGCSE and A Level examination options, and academic structure"
            width={1774}
            height={887}
            className="hidden h-auto w-full object-contain md:block"
            sizes="(max-width: 1280px) 100vw, 1200px"
          />
        </div>
      </section>

      <section className="bg-white pb-14 sm:pb-16 md:pb-20" aria-label="Teaching, learning and assessment">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-10">
          <Image
            src={images.academicJourney.teachingAssessmentMobile}
            alt="Teaching and learning approach and assessment and progress at Al Dhiya"
            width={863}
            height={1823}
            className="h-auto w-full object-contain md:hidden"
            sizes="100vw"
          />
          <Image
            src={images.academicJourney.teachingAssessment}
            alt="Teaching and learning approach and assessment and progress at Al Dhiya"
            width={1881}
            height={836}
            className="hidden h-auto w-full object-contain md:block"
            sizes="(max-width: 1280px) 100vw, 1200px"
          />
        </div>
      </section>
    </>
  );
}
