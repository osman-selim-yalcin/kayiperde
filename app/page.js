"use client";

import ContactSection from "./components/more";
import ExploreProjectsSection from "./components/explore";
import Footer from "./components/footer";
import HeroSection from "./components/hero";
import PhilosophySection from "./components/philo";

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />

        <PhilosophySection />

        <ExploreProjectsSection />

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
