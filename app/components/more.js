"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const PALETTE = { line: "#CBB8A2" };
const EAGER_COUNT = 3;

const posts = [
  { src: "/1.jpg", href: "https://www.instagram.com/p/CzBDpPesxdb/" },
  { src: "/2.jpg", href: "https://www.instagram.com/p/C0JeQ7OiDSL/" },
  { src: "/3.jpg", href: "https://www.instagram.com/p/C1bePUDMv7T/" },
  { src: "/4.jpg", href: "https://www.instagram.com/p/C6WvYqRM-C9/" },
  { src: "/5.jpg", href: "https://www.instagram.com/p/C35rr54M9Cq/" },
  { src: "/6.jpg", href: "https://www.instagram.com/p/C0i5GV-M3Vu/" },
  { src: "/9.jpg", href: "https://www.instagram.com/p/CzEjb0UItlD/" },
  { src: "/10.jpg", href: "https://www.instagram.com/p/CzoMfE3I0PG/" },
];

const rail = [...posts, ...posts];

export default function ExploreMoreSection() {
  return (
    <section id="more" className="relative bg-white py-14 md:py-20">
      <h2 className="text-xl md:text-3xl font-bold text-center mb-4 text-neutral-900">
        Daha Fazlasını Gör
      </h2>
      <div
        className="mx-auto mb-8 md:mb-12 h-px w-16 md:w-24"
        style={{
          background: `linear-gradient(90deg, transparent, ${PALETTE.line}, transparent)`,
        }}
      />

      <div className="container mx-auto">
        <div className="flex flex-wrap md:flex-nowrap justify-center gap-5 lg:gap-8">
          <div className="w-full flex justify-center md:block md:w-auto">
            <ScrollColumn direction="down" images={rail} priority />
          </div>
          <div className="hidden sm:flex justify-center md:block md:w-auto">
            <ScrollColumn direction="up" images={rail} />
          </div>
        </div>
      </div>
    </section>
  );
}

function ScrollColumn({ direction, images, priority = false }) {
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <div
      className="relative overflow-hidden rounded-2xl border bg-white shadow-[0_8px_26px_rgba(0,0,0,0.06)]
                 w-[90vw] max-w-[340px] sm:max-w-[360px] md:max-w-[440px] lg:max-w-[560px]
                 h-[420px] sm:h-[480px] md:h-[560px] lg:h-[680px]"
      style={{
        borderColor: `${PALETTE.line}55`,
        WebkitMaskImage:
          "linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)",
        maskImage:
          "linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)",
      }}
    >
      <motion.div
        className="absolute flex flex-col gap-3 sm:gap-4 will-change-transform"
        style={{ transform: "translateZ(0)" }}
        animate={
          prefersReducedMotion
            ? undefined
            : { y: direction === "down" ? ["0%", "-50%"] : ["-50%", "0%"] }
        }
        transition={
          prefersReducedMotion
            ? undefined
            : { duration: 36, ease: "linear", repeat: Infinity }
        }
      >
        {images.map(({ src, href }, i) => {
          const eager = i < EAGER_COUNT; // ilk 3 görsel eager
          const isPriority = priority && i === 0; // sütunun ilk görseli preload

          return (
            <Link
              key={`${src}-${i}`}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-[90vw] max-w-[340px] sm:max-w-[360px] md:max-w-[440px] lg:max-w-[560px]
                         h-[180px] sm:h-[220px] md:h-[280px] lg:h-[320px] group"
              aria-label={`Instagram post ${i + 1}`}
            >
              <Image
                src={src}
                alt={`Instagram post ${i}`}
                fill
                priority={isPriority}
                loading={eager ? "eager" : "lazy"}
                quality={85}
                sizes="(max-width: 640px) 90vw, (max-width: 768px) 360px, (max-width: 1024px) 440px, 560px"
                className="object-cover rounded-xl transition-transform duration-600 group-hover:scale-[1.035]"
              />
              <div className="absolute bottom-2 right-2 lg:bottom-3 lg:right-3 bg-white/90 text-black rounded-full p-1 shadow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5 lg:h-4 lg:w-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z" />
                </svg>
              </div>
            </Link>
          );
        })}
      </motion.div>
    </div>
  );
}
