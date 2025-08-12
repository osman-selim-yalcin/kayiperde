"use client";

import logo from "@/public/logo.png";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      className={`relative h-screen overflow-hidden`}
      aria-label="Kayı Perde Kahraman Bölüm"
    >
      {/* Arka plan */}
      <Image
        src="/cover.jpg"
        alt="Zarif bir oturma odasında perde"
        fill
        priority
        className="object-cover"
      />

      {/* Üst degrade + vignette (okunabilirlik ve premium hissi) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(24,18,12,0.55),rgba(24,18,12,0.25),rgba(24,18,12,0.55))]" />
        <div className="absolute inset-0 [mask-image:radial-gradient(60%_60%_at_50%_40%,black,transparent_90%)]" />
      </div>

      {/* İnce dokulu noise (çok hafif) */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay bg-[url('/noise.png')]" />

      {/* Logo + slogan + CTA */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto">
          <div className="max-w-[680px]">
            <Image
              src={logo}
              alt="Kayı Perde Logo"
              width={420}
              height={140}
              className="w-[60%] max-w-[420px]"
              priority
            />

            <h1 className="mt-8 text-[clamp(28px,6vw,56px)] leading-tight text-[#EDE5D9] tracking-[0.02em]">
              Mekânınıza{" "}
              <span className="text-[#C1A585] font-semibold">zamansız</span> bir
              zarafet
            </h1>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 border border-[#CBB8A2]/30 rounded-[18px] m-3" />
    </section>
  );
}
