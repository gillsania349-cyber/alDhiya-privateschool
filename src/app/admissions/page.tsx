import type { Metadata } from "next";
import AdmissionsApply from "@/components/AdmissionsApply";
import AdmissionsHero from "@/components/AdmissionsHero";
import AdmissionsSections from "@/components/AdmissionsSections";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NextSteps from "@/components/NextSteps";

export const metadata: Metadata = {
  title: "Admissions | Al Dhiya International Private School",
  description:
    "Join Al Dhiya International School — a simple, welcoming admissions process combining Cambridge programmes with Omani values.",
};

export default function AdmissionsPage() {
  return (
    <>
      <main className="flex-1">
        <Header />
        <AdmissionsHero />
        <AdmissionsSections />
        <AdmissionsApply />
        <FAQ />
        <NextSteps />
      </main>
      <Footer />
    </>
  );
}
