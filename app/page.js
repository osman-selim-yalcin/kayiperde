"use client";

import logo from "@/public/logo.png";
import Image from "next/image";
import ContactSection from "./components/contact";
import ExploreProjectsSection from "./components/explore";
import Footer from "./components/footer";
import PhilosophySection from "./components/philo";

export default function Home() {
  return (
    <>
      <main>
        <div className="h-screen relative flex overflow-hidden shadow-[0_25px_35px_rgba(0,0,0,0.25)]">
          <Image
            src={"/cover.jpg"}
            alt="Arka plan perde"
            fill
            className="absolute"
          />
          <Image
            src={logo}
            alt="Kayı Perde Logo"
            className="absolute w-2/5 -right-16 top-16"
          />
          {/* <p className="absolute top-4/5 right-18 text-xl w-[400px] text-right font-bold">
            Perde, odanın ruhunu yumuşaklık ve zarafetle saran büyülü bir
            ayrıntıdır.
          </p> */}
        </div>

        <div className="flex justify-center items-center sticky bottom-0 -z-10 h-[100vh]">
          <PhilosophySection />
        </div>

        <div>
          <ExploreProjectsSection />
        </div>

        <div>
          <ContactSection />
        </div>
      </main>
      <Footer />
    </>
  );
}
