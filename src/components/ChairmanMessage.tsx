import Image from "next/image";

const paragraphs = [
  "Al Dhiya Private School was established in 2006 with a humble beginning. Today, we are proud to have grown into a thriving educational community guided by excellence and commitment. Our success is built upon the dedication and expertise of our highly qualified teaching staff.",
  "The evolving global landscape called for a new educational philosophy — one that preserves the finest values of our society while equipping our students to thrive and compete confidently on the international stage.",
  "As we embark on this academic year, I do so with a deep sense of anticipation and optimism. I am confident that both our students and staff will continue to achieve remarkable accomplishments.",
  "We look forward to welcoming you to Al Dhiya, where excellence is a shared journey.",
];

export default function ChairmanMessage() {
  return (
    <section className="bg-[#F5F6F6]" aria-labelledby="chairman-heading">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 md:py-20 lg:px-8 lg:py-24 xl:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-20">
          <div className="relative mx-auto w-full max-w-xl lg:mx-0 lg:max-w-none">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.25rem] sm:rounded-3xl lg:aspect-[5/6] lg:min-h-[540px]">
              <Image
                src="/e14b8c0fce06bb2e7d77810def6a887dcaf76c93.webp"
                alt="Dr Zayid Ali Alghassani, Chairman of Al Dhiya International Private School"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          <div className="min-w-0 lg:py-2">
            <h2
              id="chairman-heading"
              className="text-[1.375rem] font-bold leading-snug tracking-tight text-navy sm:text-2xl md:text-[1.85rem]"
            >
              A Message from the Chairman
            </h2>

            <div className="mt-6 space-y-5 sm:mt-7 sm:space-y-6">
              {paragraphs.map((text) => (
                <p
                  key={text.slice(0, 48)}
                  className="text-[14px] leading-[1.75] text-slate sm:text-[15px] md:text-[15.5px]"
                >
                  {text}
                </p>
              ))}
            </div>

            <p className="mt-8 text-[15px] font-bold text-navy sm:mt-10 sm:text-base">
              Dr Zayid Ali Alghassani
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
