import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NextSteps from "@/components/NextSteps";
import StudentLifeActivities from "@/components/StudentLifeActivities";
import StudentLifeFollow from "@/components/StudentLifeFollow";
import StudentLifeHero from "@/components/StudentLifeHero";

export const metadata: Metadata = {
  title: "Student Life | Al Dhiya International Private School",
  description:
    "Discover student life at Al Dhiya International School — passions, character, activities, and a supportive community where every student can thrive.",
};

export default function StudentLifePage() {
  return (
    <>
      <main className="flex-1">
        <Header />
        <StudentLifeHero />
        <StudentLifeActivities />
        <StudentLifeFollow />
        <NextSteps />
      </main>
      <Footer />
    </>
  );
}
