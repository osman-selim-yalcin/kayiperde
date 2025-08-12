"use client";
import { motion, useAnimation, useScroll } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function PhilosophySection() {
  const controls = useAnimation();
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      if (!sectionRef.current) return;
      const sectionTop = sectionRef.current.offsetTop;
      const sectionHeight = sectionRef.current.offsetHeight;
      const triggerPoint = sectionTop + sectionHeight * 0.5;
      if (latest >= triggerPoint) {
        controls.start("visible");
        unsubscribe();
      }
    });
    return () => unsubscribe();
  }, [controls, scrollY]);

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.08 },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 220, damping: 22, mass: 0.6 },
    },
  };

  return (
    <div className="flex justify-center items-center sticky bottom-0 -z-10 h-[100vh]">
      <div ref={containerRef} className="w-full">
        <section
          ref={sectionRef}
          className="relative h-screen flex items-center justify-center w-full"
          aria-label="Atölye Manifestosu"
        >
          {/* Arka plan: çizgisel doku + üstten yumuşak beyaz fade (perde kalkışıyla uyumlu) */}
          <div className="absolute inset-0 -z-10">
            <Image
              src="/lines.jpg"
              alt="Dokulu arka plan"
              fill
              className="object-cover"
              quality={80}
            />
            {/* Üstten beyaza fade */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 20%, rgba(255,255,255,0.75) 40%, rgba(255,255,255,0.6) 60%, rgba(255,255,255,0.5) 100%)",
              }}
            />
          </div>

          {/* İnce kenar çizgisi */}
          <div
            className="pointer-events-none absolute inset-0 rounded-[18px] m-3"
            style={{ border: "1px solid #CBB8A24D" }}
          />

          {/* İçerik */}
          <motion.div
            className="relative z-10 w-full max-w-6xl px-6"
            initial="hidden"
            animate={controls}
            variants={containerVariants}
          >
            <motion.p
              variants={itemVariants}
              className="text-center uppercase tracking-[0.18em] text-sm md:text-base text-[#CBB8A2] mb-5 font-medium bg-white/50 px-4 py-1 rounded-full "
            >
              Malzeme · İşçilik · Denge
            </motion.p>

            {/* Ana satır */}
            <motion.h2
              variants={itemVariants}
              className="text-center text-[clamp(22px,4.2vw,38px)] font-semibold text-[#2B2723]"
            >
              Her mekâna <span className="text-[#7A5E45]">zarafeti</span>{" "}
              taşıyoruz.
            </motion.h2>

            {/* Üçlü sütun: açık tema, bej vurgu */}
            <motion.ul
              variants={containerVariants}
              className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5"
            >
              {/* 1 */}
              <motion.li
                variants={itemVariants}
                className="rounded-2xl border bg-white/80 shadow-[0_8px_28px_rgba(0,0,0,0.08)] p-6 text-center"
                style={{
                  borderColor: "#CBB8A233",
                  backdropFilter: "blur(6px)",
                }}
              >
                <div
                  className="mx-auto mb-4 h-12 w-12 rounded-full border flex items-center justify-center"
                  style={{ borderColor: "#CBB8A2" }}
                >
                  {/* Rulo kumaş ikonu */}
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#7A5E45"
                    strokeWidth="1.5"
                  >
                    <path d="M4 7a3 3 0 106 0v10" />
                    <path d="M10 7a3 3 0 113 3h-3" />
                    <path d="M13 10h6v7a2 2 0 01-2 2H8" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-[#2B2723]">
                  Seçilmiş Malzemeler
                </h3>
                <p className="mt-2 text-sm text-neutral-700">
                  Her ton ve dokuda, mekânınıza uyum sağlayan özel perdeler.
                </p>
              </motion.li>

              {/* 2 */}
              <motion.li
                variants={itemVariants}
                className="rounded-2xl border bg-white/80 shadow-[0_8px_28px_rgba(0,0,0,0.08)] p-6 text-center"
                style={{
                  borderColor: "#CBB8A233",
                  backdropFilter: "blur(6px)",
                }}
              >
                <div
                  className="mx-auto mb-4 h-12 w-12 rounded-full border flex items-center justify-center"
                  style={{ borderColor: "#CBB8A2" }}
                >
                  {/* İğne-iplik ikonu */}
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#7A5E45"
                    strokeWidth="1.5"
                  >
                    <path d="M20 4L8 16" />
                    <path d="M14 4c0 3-5 6-8 6" />
                    <circle
                      cx="20"
                      cy="4"
                      r="1.5"
                      fill="#7A5E45"
                      stroke="none"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-[#2B2723]">
                  Usta İşçilik
                </h3>
                <p className="mt-2 text-sm text-neutral-700">
                  Terzi işi detay, net pile; her mekâna özel ölçü ve uygulama.
                </p>
              </motion.li>

              {/* 3 */}
              <motion.li
                variants={itemVariants}
                className="rounded-2xl border bg-white/80 shadow-[0_8px_28px_rgba(0,0,0,0.08)] p-6 text-center"
                style={{
                  borderColor: "#CBB8A233",
                  backdropFilter: "blur(6px)",
                }}
              >
                <div
                  className="mx-auto mb-4 h-12 w-12 rounded-full border flex items-center justify-center"
                  style={{ borderColor: "#CBB8A2" }}
                >
                  {/* Denge ikonu */}
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#7A5E45"
                    strokeWidth="1.5"
                  >
                    <path d="M12 3v18" />
                    <path d="M5 7h14" />
                    <path d="M7 7l-3 6h6l-3-6zM17 7l-3 6h6l-3-6z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-[#2B2723]">
                  Rahat Denge
                </h3>
                <p className="mt-2 text-sm text-neutral-700">
                  Işığı yumuşatıp mekânın akışına eşlik eden sakin bir estetik.
                </p>
              </motion.li>
            </motion.ul>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
