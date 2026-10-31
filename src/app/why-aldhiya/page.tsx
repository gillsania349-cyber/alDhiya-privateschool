import type { Metadata } from "next";
import CoreValues from "@/components/CoreValues";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NextSteps from "@/components/NextSteps";
import VisionMission from "@/components/VisionMission";
import WhatMakesUsDifferent from "@/components/WhatMakesUsDifferent";
import WhoWeAre from "@/components/WhoWeAre";
import WhyAldhiyaHero from "@/components/WhyAldhiyaHero";

export const metadata: Metadata = {
  title: "Why Al Dhiya? | Al Dhiya International Private School",
  description:
    "Discover why Al Dhiya International School is more than an educational institution — a community that nurtures young minds, builds character, and empowers students.",
};

export default function WhyAldhiyaPage() {
  return (
    <>
      <main className="flex-1">
        <Header />
        <WhyAldhiyaHero />
        <WhoWeAre />
        <VisionMission />
        <CoreValues />
        <WhatMakesUsDifferent />
        <NextSteps />
      </main>
      <Footer />
    </>
  );
}
