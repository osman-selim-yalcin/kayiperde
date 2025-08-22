"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      aria-label="Kayı Perde Kahraman Bölüm"
      className="
        relative overflow-hidden
        h-screen min-h-[100svh] /* iOS/Android safe viewport */
        pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]
      "
    >
      {/* Arka plan */}
      <Image
        src="/cover.jpg"
        alt="Zarif bir oturma odasında perde"
        fill
        priority
        className="
          object-cover
          object-[position:55%_50%]  /* mobilde daha iyi kadraj */
          sm:object-center
        "
      />

      {/* Degrade + vignette (Safari uyumlu, mask yok) */}
      <div className="pointer-events-none absolute inset-0">
        {/* üst-alt koyulaştırma */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(24,18,12,0.60),rgba(24,18,12,0.28),rgba(24,18,12,0.60))]" />
        {/* yumuşak merkez vignette */}
        <div
          className="
          absolute inset-0
          bg-[radial-gradient(60%_55%_at_50%_40%,rgba(0,0,0,0.22),transparent_70%)]
        "
        />
      </div>

      {/* İçerik */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-[640px] sm:max-w-[680px]">
            {/* <Image
              src={logo}
              alt="Kayı Perde Logo"
              width={420}
              height={140}
              priority
              className="
                w-[58%] max-w-[360px]
                sm:w-[60%] sm:max-w-[420px]
              "
            /> */}

            <h1
              className="
                mt-6 sm:mt-8
                text-[clamp(22px,6.2vw,56px)]
                leading-[1.15]
                text-[#EDE5D9]
                tracking-[0.01em]
                drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]
              "
            >
              Mekânınıza{" "}
              <span className="text-[#C1A585] font-semibold">zamansız</span> bir
              zarafet
            </h1>
          </div>
        </div>
      </div>
     <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-[#EDE5D9]/70 animate-bounce"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
</div>


      {/* İnce çerçeve (mobilde daha az margin/radius) */}
      <div
        className="
          pointer-events-none absolute inset-0
          border border-[#CBB8A2]/30
          rounded-xl m-2
          sm:rounded-[18px] sm:m-3
        "
      />
    </section>
  );
}
