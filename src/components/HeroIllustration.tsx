import Image from "next/image";
import { images } from "@/lib/images";

export default function HeroIllustration({ className = "" }: { className?: string }) {
  return (
    <div className={`relative mx-auto w-full max-w-[440px] sm:max-w-[520px] lg:max-w-[600px] ${className}`}>
      <div className="relative aspect-[3/2] w-full">
        <Image
          src={images.heroIllustration}
          alt="Educational journey from KG through Primary, Secondary IGCSE, and A-Level around the Al Dhiya crest"
          fill
          priority
          className="object-contain object-center"
          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 520px, 600px"
        />
      </div>
    </div>
  );
}
