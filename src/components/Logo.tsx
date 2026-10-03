import Image from "next/image";
import { images } from "@/lib/images";

type LogoProps = {
  size?: number;
  className?: string;
};

export default function Logo({ size = 56, className = "" }: LogoProps) {
  return (
    <Image
      src={images.logo}
      alt="Al Dhiya International Private School logo"
      width={size}
      height={size}
      className={`object-contain ${className}`}
      priority
    />
  );
}
