import ChairmanMessage from "@/components/ChairmanMessage";
import Difference from "@/components/Difference";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LatestNews from "@/components/LatestNews";
import NextSteps from "@/components/NextSteps";
import Stats from "@/components/Stats";
import Welcome from "@/components/Welcome";

export default function Home() {
  return (
    <>
      <main className="flex-1">
        <Header />
        <Hero />
        <Features />
        <Welcome />
        <Stats />
        <ChairmanMessage />
        <Difference />
        <LatestNews />
        <NextSteps />
      </main>
      <Footer />
    </>
  );
}
