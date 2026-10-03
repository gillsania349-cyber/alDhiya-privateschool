import Image from "next/image";
import { images } from "@/lib/images";
import AdmissionsEntryRequirements from "@/components/AdmissionsEntryRequirements";
import SectionHeading from "@/components/SectionHeading";

const panels = [
  {
    id: "process",
    desktop: images.admissions.process,
    mobile: images.admissions.processMobile,
    alt: "Admissions process at Al Dhiya International School",
    desktopWidth: 827,
    desktopHeight: 442,
    mobileWidth: 1003,
    mobileHeight: 1569,
  },
  {
    id: "fees",
    desktop: images.admissions.schoolFees,
    mobile: images.admissions.schoolFeesMobile,
    alt: "School fees information at Al Dhiya International School",
    desktopWidth: 1733,
    desktopHeight: 908,
    mobileWidth: 949,
    mobileHeight: 1657,
  },
];

export default function AdmissionsSections() {
  return (
    <>
      <section
        id={panels[0].id}
        className="scroll-mt-28 bg-white py-8 sm:py-10 md:py-12"
        aria-label={panels[0].alt}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-10">
          <Image
            src={panels[0].mobile}
            alt={panels[0].alt}
            width={panels[0].mobileWidth}
            height={panels[0].mobileHeight}
            className="h-auto w-full object-contain md:hidden"
            sizes="100vw"
          />
          <Image
            src={panels[0].desktop}
            alt={panels[0].alt}
            width={panels[0].desktopWidth}
            height={panels[0].desktopHeight}
            className="hidden h-auto w-full object-contain md:block"
            sizes="(max-width: 1280px) 100vw, 1200px"
          />
        </div>
      </section>

      <AdmissionsEntryRequirements />

      <section
        id={panels[1].id}
        className="scroll-mt-28 bg-white py-10 sm:py-12 md:py-14"
        aria-labelledby="school-fees-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="mb-8 sm:mb-10">
            <SectionHeading id="school-fees-heading">School Fees</SectionHeading>
          </div>

          <Image
            src={panels[1].mobile}
            alt={panels[1].alt}
            width={panels[1].mobileWidth}
            height={panels[1].mobileHeight}
            className="h-auto w-full object-contain md:hidden"
            sizes="100vw"
          />
          <Image
            src={panels[1].desktop}
            alt={panels[1].alt}
            width={panels[1].desktopWidth}
            height={panels[1].desktopHeight}
            className="hidden h-auto w-full object-contain md:block"
            sizes="(max-width: 1280px) 100vw, 1200px"
          />
        </div>
      </section>
    </>
  );
}
