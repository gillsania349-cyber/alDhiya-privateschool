import Image from "next/image";
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

export default function CoreValues() {
  return (
    <section className="bg-white" aria-labelledby="core-values-heading">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 md:py-20 lg:px-8 xl:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex items-center justify-center gap-3 sm:gap-4">
            <TitleOrnament />
            <h2
              id="core-values-heading"
              className="text-2xl font-bold tracking-tight text-[#033F94] sm:text-3xl md:text-[2rem]"
            >
              Our Core Values
            </h2>
            <TitleOrnament flip />
          </div>

          <p className="mx-auto mt-4 max-w-xl text-[14px] leading-relaxed text-slate sm:mt-5 sm:text-[15px]">
            The values that shape our community and guide everything we do
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-4xl sm:mt-10 md:mt-12">
          <Image
            src={images.coreValues.diagram}
            alt="Our core values: Trust, Nurture, Community, Learning, and Empowerment — together we grow successful learners, responsible citizens, and safe and happy individuals"
            width={960}
            height={720}
            className="h-auto w-full object-contain"
            sizes="(max-width: 1024px) 100vw, 960px"
          />
        </div>
      </div>
    </section>
  );
}
