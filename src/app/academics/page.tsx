import type { Metadata } from "next";
import AcademicJourney from "@/components/AcademicJourney";
import AcademicsHero from "@/components/AcademicsHero";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NextSteps from "@/components/NextSteps";

export const metadata: Metadata = {
  title: "Academics | Al Dhiya International Private School",
  description:
    "Academic excellence at every stage — comprehensive programmes, internationally recognised pathways, and exceptional teaching at Al Dhiya International School.",
};

export default function AcademicsPage() {
  return (
    <>
      <main className="flex-1">
        <Header />
        <AcademicsHero />
        <AcademicJourney />
        <NextSteps />
      </main>
      <Footer />
    </>
  );
}
