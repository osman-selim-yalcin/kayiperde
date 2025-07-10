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
      const triggerPoint = sectionTop + sectionHeight * 0.5; // %30'u görününce tetikle

      if (latest >= triggerPoint) {
        controls.start("visible");
        unsubscribe(); // Sadece bir kere tetikle
      }
    });

    return () => unsubscribe();
  }, [controls, scrollY]);

  // Yeni animasyon varyantları (sadece efekt değişti)
  const containerVariants = {
    hidden: { opacity: 1 }, // Container opacity sabit
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.012, // Harfler arası gecikme azaltıldı
        delayChildren: 0.1, // Başlangıç gecikmesi
      },
    },
  };
  const letterVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      x: -1, // Hafif sola kaydırma
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 300,
        mass: 0.5,
      },
    },
  };

  const splitLetters = (text, className = "") => {
    // Önce kelimelere böl, sonra harflere böl
    return text.split(" ").map((word, wordIndex) => (
      <span
        key={`word-${wordIndex}`}
        className="inline-block whitespace-nowrap"
      >
        {word.split("").map((char, charIndex) => (
          <motion.span
            key={`char-${wordIndex}-${charIndex}`}
            variants={letterVariants}
            className={`inline-block ${className}`}
            style={{
              verticalAlign: "top", // Tüm harfleri üstte hizala
              whiteSpace: "normal", // Normal boşluk davranışı
            }}
          >
            {char}
          </motion.span>
        ))}
        {/* Kelimeler arasına boşluk ekle (son kelime hariç) */}
        {wordIndex < text.split(" ").length - 1 && "\u00A0"}
      </span>
    ));
  };

  return (
    <div ref={containerRef} className="w-full">
      <section
        ref={sectionRef}
        className="relative h-screen flex items-center justify-center px-6 text-center bg-white w-full"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/lines.jpg"
            alt="Background pattern"
            fill
            className="object-cover"
            quality={80}
          />
        </div>

        <motion.div
          className="relative z-10 max-w-4xl p-8 bg-white bg-opacity-70 backdrop-blur-sm rounded-xl"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          style={{ letterSpacing: "0.001em" }}
        >
          <div className="text-xs uppercase tracking-widest font-medium mb-6">
            {splitLetters("Perde · Kumaş · Tasarım")}
          </div>

          <div
            className="text-lg md:text-2xl leading-relaxed text-gray-800 font-bold"
            style={{ letterSpacing: "0.4px", lineHeight: "1.3" }}
          >
            {splitLetters(
              "Zamana meydan okuyan dokularla mekânlara hayat veriyoruz, "
            )}
            {splitLetters(
              "İncelikle seçilmiş kumaşlar, zanaatın ustalığıyla buluşuyor. "
            )}
            {splitLetters(
              "Perde, sadece bir aksesuar değil; yaşanmışlığın zarif bir yansımasıdır."
            )}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
