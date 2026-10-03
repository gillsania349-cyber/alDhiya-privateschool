import Image from "next/image";
import type { ReactNode } from "react";
import { images } from "@/lib/images";

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

function VisionMissionBlock({
  icon,
  title,
  children,
}: {
  icon: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <article className="flex gap-5 sm:gap-6">
      <div className="shrink-0">
        <Image
          src={icon}
          alt=""
          width={150}
          height={150}
          className="h-[150px] w-[150px] object-contain"
        />
      </div>
      <div className="min-w-0">
        <h3 className="text-lg font-bold text-gold sm:text-xl">{title}</h3>
        <p className="mt-2 text-[13px] leading-relaxed text-white/95 sm:text-[14px] md:text-[15px]">
          {children}
        </p>
      </div>
    </article>
  );
}

export default function VisionMission() {
  return (
    <section className="bg-navy" aria-labelledby="vision-mission-heading">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 md:py-20 lg:px-8 xl:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex items-center justify-center gap-3 sm:gap-4">
            <TitleOrnament />
            <h2
              id="vision-mission-heading"
              className="text-2xl font-bold tracking-tight sm:text-3xl md:text-[2rem]"
            >
              <span className="text-white">Our Vision </span>
              <span className="text-gold">&amp;</span>
              <span className="text-white"> Mission</span>
            </h2>
            <TitleOrnament flip />
          </div>

          <p className="mx-auto mt-5 max-w-2xl text-[14px] leading-relaxed text-white/95 sm:mt-6 sm:text-[15px] md:text-base">
            Our values are at the heart of teaching and learning and all of our
            decision-making. As such, we regularly make connections and
            references to them with the children to ensure we are living and
            breathing our values throughout the school day.
          </p>
        </div>

        <div className="mt-10 grid gap-8 sm:mt-12 lg:mt-14 lg:grid-cols-2 lg:gap-10 xl:gap-12">
          <VisionMissionBlock icon={images.visionMission.vision} title="Vision">
            To achieve academic excellence while preparing all students,
            including those with unique challenges, to become intellectually
            capable, imaginative, physically healthy, ethically strong,
            compassionate leaders who respect diversity and positively impact
            the world.
          </VisionMissionBlock>

          <VisionMissionBlock icon={images.visionMission.mission} title="Mission">
            To develop academic mastery, a love of learning, self-discipline,
            good manners, effective study habits, respect, and the application
            of knowledge in a safe, inclusive environment with strong family
            and community partnerships.
          </VisionMissionBlock>
        </div>

        <div className="mt-12 flex flex-col items-center gap-5 sm:mt-14 sm:flex-row sm:justify-center sm:gap-6 md:mt-16">
          <Image
            src={images.visionMission.motto}
            alt=""
            width={150}
            height={150}
            className="h-[150px] w-[150px] shrink-0 object-contain"
          />
          <div className="text-center sm:text-left">
            <p className="text-lg font-bold text-gold sm:text-xl">Our Motto</p>
            <p className="mt-1 text-xl font-bold sm:text-2xl md:text-[1.75rem]">
              <span className="text-white">We </span>
              <span className="text-gold">Care.</span>
              <span className="text-white"> We </span>
              <span className="text-gold">Share.</span>
              <span className="text-white"> We </span>
              <span className="text-gold">Achieve</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
