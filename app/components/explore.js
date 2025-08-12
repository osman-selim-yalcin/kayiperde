"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ExploreProjectsSection() {
  const images = [
    "https://images.prismic.io/elitis/ZlCT0yol0Zci9bRf_elitis-project-kelly-wearstler.jpg?auto=format,compress",
    "https://images.prismic.io/elitis/ZlCT1Col0Zci9bRg_elitis-project-ixchel-restaurant.jpg?auto=format,compress",
    "https://images.prismic.io/elitis/ZlCT8Col0Zci9bRo_elitis-project-j-morris-design.jpg?auto=format,compress",
    "https://images.prismic.io/elitis/ZlCT3iol0Zci9bRi_elitis-project-ixchel-restaurant-chairs.jpg?auto=format,compress",
    "https://images.prismic.io/elitis/ZlCT5Sol0Zci9bRm_elitis-project-l-amour-toujours.jpg?auto=format,compress",
  ];

  return (
    <section className="relative py-24 text-[#EDE5D9]">
      {/* Koyu arka plan + noise */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(26,20,14,0.92), rgba(26,20,14,0.7), rgba(26,20,14,0.92))",
          }}
        />
        <div className="absolute inset-0 opacity-[0.06] mix-blend-overlay " />
      </div>

      {/* İnce çerçeve */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[18px] m-3"
        style={{ border: "1px solid #CBB8A24D" }}
      />

      <div className="max-w-7xl mx-auto text-center">
        {/* Başlık */}
        <div className="mb-12">
          <p className="uppercase tracking-[0.25em] font-medium text-xs text-[#CBB8A2]">
            Elitis Projects
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold mt-2 text-[#F4EFE8]">
            Imagine the poetry of the world
          </h2>
        </div>

        {/* Görseller */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              className="group relative overflow-hidden rounded-2xl border shadow-[0_18px_55px_rgba(0,0,0,0.35)]"
              style={{
                borderColor: "#CBB8A233",
                backgroundColor: "rgba(62,47,32,0.28)",
              }}
            >
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src={src}
                  alt={`Project ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                  priority={i < 2}
                />
              </div>

              {/* Alt bej çizgi */}
              <div
                className="absolute bottom-0 left-6 right-6 h-px mb-6"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(237,229,217,0.85), transparent)",
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Açıklama ve buton */}
        <div className="mt-12 max-w-xl mx-auto text-sm text-[#EDE5D9]/85">
          <p className="mb-5">
            Discover the creations of designers and interior architects we work
            hand in hand with and find inspiration in the Élitis projects.
          </p>
          <a href="/en/projects">
            <button
              className="px-6 py-2 rounded-2xl border uppercase text-xs tracking-[0.2em] transition
                         hover:-translate-y-[1px] shadow-[0_8px_20px_rgba(0,0,0,0.25)]"
              style={{
                borderColor: "#CBB8A2",
                color: "#F4EFE8",
                backgroundColor: "rgba(62,47,32,0.55)",
              }}
            >
              Explore
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
