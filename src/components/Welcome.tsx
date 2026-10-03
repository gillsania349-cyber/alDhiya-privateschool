import Image from "next/image";
import { images } from "@/lib/images";

const paragraphs = [
  "At Al Dhiya International School, we are committed to academic excellence, strong values, and preparing students for a successful future. Since 2006, we have provided a safe, inclusive, and inspiring learning environment where every child is encouraged to achieve their full potential.",
  "We offer internationally recognised programmes, including the Cambridge International, Pearson Edexcel, IGCSE, AS Level, alongside the Omani National Curriculum, providing a balanced education that combines national identity with a global perspective.",
  'Guided by our motto, “We Care, We Share, We Achieve,” we nurture confident, compassionate, and responsible learners through high-quality teaching, active learning, character development, and a wide range of sports and extracurricular activities.',
];

export default function Welcome() {
  return (
    <section
      id="academics"
      className="bg-navy"
      aria-labelledby="welcome-heading"
    >
      <div className="mx-auto grid max-w-7xl items-stretch gap-6 px-4 py-10 sm:gap-8 sm:px-6 sm:py-12 md:gap-10 md:py-14 lg:grid-cols-2 lg:gap-10 lg:px-8 lg:py-16 xl:gap-12 xl:px-10 xl:py-20">
        <div className="order-2 flex min-w-0 flex-col justify-center lg:order-1">
          <h2
            id="welcome-heading"
            className="text-xl font-bold tracking-tight text-gold sm:text-2xl md:text-3xl lg:text-[2rem]"
          >
            Welcome to Al Dhiya
          </h2>

          <div className="mt-4 space-y-3.5 sm:mt-5 sm:space-y-4 md:mt-6 md:space-y-5">
            {paragraphs.map((text) => (
              <p
                key={text.slice(0, 40)}
                className="text-[13px] leading-relaxed text-white/95 sm:text-[14px] md:text-[14.5px] lg:text-[15px]"
              >
                {text}
              </p>
            ))}
          </div>
        </div>

        <div className="relative order-1 w-full lg:order-2">
          <div className="relative min-h-[280px] overflow-hidden rounded-xl sm:min-h-[340px] sm:rounded-2xl md:min-h-[380px] md:rounded-3xl lg:h-full lg:min-h-[420px]">
            <Image
              src={images.welcome}
              alt="Al Dhiya students in lab coats in the science laboratory"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
