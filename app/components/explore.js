"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const PALETTE = {
  line: "#CBB8A2",
  beige: "#EDE5D9",
  beigeSoft: "#F4EFE8",
  card: "rgba(62,47,32,0.28)",
};

const PRODUCTS = [
  {
    key: "fon",
    title: "Fon Perdeler",
    tagline: "Zamansız Dokular",
    desc: "Kalın dokulu, dökümlü fonlar; mekâna derinlik ve sıcaklık katar. El işçiliği pile ve kusursuz terzi işiyle kusursuz bitiş.",
    image: "/fon.jpg",
  },
  {
    key: "jaluzi",
    title: "Jaluzi",
    tagline: "Işığı Hassas Kontrol",
    desc: "Ahşap veya alüminyum lamellerle ışığı milim milim yönet. Modern çizgi, sade form ve yüksek işlev bir arada.",
    image: "/jaluzi.jpg",
  },
  {
    key: "tul",
    title: "Tül Perdeler",
    tagline: "Hafiflik & Zarafet",
    desc: "İnce dokulu tüllerle gün ışığını yumuşat; ferah ve sofistike bir atmosfer yarat.",
    image: "/tul.jpg",
  },
];

const container = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};
const item = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 220, damping: 22, mass: 0.6 },
  },
};

export default function ExploreProductsSection() {
  const [lightbox, setLightbox] = useState(null); // { src, title } | null

  return (
    <section id="explore" className="relative py-20 text-[#EDE5D9]">
      {/* ELİT ARKA PLAN – ipeksi derinlik + ince doku */}
      <div className="absolute inset-0 -z-10">
        {/* 1) İpeksi baz: konik parlama + koyu degrade */}
        <div
          className="absolute inset-0"
          style={{
            background: `
        conic-gradient(from 210deg at 50% 20%,
          rgba(193,165,133,0.10),
          rgba(26,20,14,0.0) 35%,
          rgba(26,20,14,0.0) 65%,
          rgba(193,165,133,0.08) 100%
        ),
        linear-gradient(180deg,
          #1E1712 0%,
          #1A140E 38%,
          #17110D 100%
        )
      `,
          }}
        />

        {/* 2) Yumuşak “spotlight”lar: sağ-sol kenardan çok hafif */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
        radial-gradient(60% 50% at 15% 40%, rgba(203,184,162,0.08), transparent 60%),
        radial-gradient(60% 50% at 85% 60%, rgba(203,184,162,0.06), transparent 60%)
      `,
          }}
        />

        {/* 3) İnce dikey “sheen” (merkezde saç teli gibi parlama) */}
        {/* <div
          className="absolute inset-y-6 left-1/2 w-px -translate-x-1/2 opacity-60"
          style={{
            background:
              "linear-gradient(180deg, transparent, rgba(203,184,162,0.35) 15%, rgba(203,184,162,0.15) 50%, transparent 85%)",
            filter: "blur(0.3px)",
          }}
        /> */}

        {/* 4) Çok hafif diyagonal dikiş çizgileri (premium dokunuş) */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.035] mix-blend-overlay"
          style={{
            background:
              "repeating-linear-gradient(135deg, rgba(203,184,162,0.8) 0 1px, transparent 1px 18px)",
          }}
        />

        {/* 5) Kenarlardan vinyet (merkeze odak) */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(120% 120% at 50% 50%, transparent 55%, rgba(0,0,0,0.35) 100%)",
          }}
        />
      </div>

      <div
        className="pointer-events-none absolute inset-0 rounded-[18px] m-3"
        style={{ border: `1px solid ${PALETTE.line}4D` }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="uppercase tracking-[0.25em] font-medium text-xs text-[#CBB8A2]">
            Koleksiyon
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold mt-2 text-[#F4EFE8]">
            Fon · Jaluzi · Tül
          </h2>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10% 0px" }}
          className="space-y-10 md:space-y-14 relative"
        >
          <div
            className="absolute left-1/2 w-px -translate-x-1/2 opacity-60 hidden md:block h-[120%] "
            style={{
              top: 0,
              bottom: 0,
              background:
                "linear-gradient(180deg, transparent, rgba(203,184,162,0.35) 15%, rgba(203,184,162,0.15) 50%, transparent 85%)",
              filter: "blur(0.3px)",
            }}
          />

          {PRODUCTS.map((p, i) => (
            <motion.article
              key={p.key}
              variants={item}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center rounded-2xl border shadow-[0_18px_55px_rgba(0,0,0,0.35)] overflow-hidden"
              style={{
                borderColor: "#CBB8A233",
                backgroundColor: PALETTE.card,
              }}
            >
              {/* Görsel (kart tıklanınca büyüt) */}
              <div className={`${i % 2 === 1 ? "md:order-2" : ""}`}>
                <button
                  onClick={() => setLightbox({ src: p.image, title: p.title })}
                  className="relative w-full aspect-[4/3] group cursor-zoom-in"
                  aria-label={`${p.title} büyük görseli`}
                >
                  <Image
                    src={p.image}
                    alt={`${p.title} görseli`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={i === 0}
                  />
                  <div className="absolute right-3 bottom-3 rounded-full bg-black/35 px-2 py-1 text-[11px] tracking-wide">
                    Görseli büyüt
                  </div>
                </button>
              </div>

              {/* Metin + küçük aksiyon linkleri */}
              <div className={`p-6 sm:p-8 ${i % 2 === 1 ? "md:order-1" : ""}`}>
                <p className="uppercase tracking-[0.22em] text-xs text-[#CBB8A2]">
                  {p.tagline}
                </p>
                <h3 className="text-2xl md:text-3xl font-semibold mt-2 text-[#F4EFE8]">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm md:text-base text-[#EDE5D9]/85 leading-relaxed">
                  {p.desc}
                </p>

                {/* <div className="mt-6 flex flex-wrap items-center gap-4 text-sm">
                  <Link
                    href="https://www.instagram.com/kayiperde"
                    target="_blank"
                    className="underline underline-offset-4 decoration-[#CBB8A2]/60 hover:decoration-[#CBB8A2] transition"
                  >
                    Instagram’da gör
                  </Link>
                  <a
                    href={`https://wa.me/905446655150?text=${encodeURIComponent(
                      `Merhaba, ${p.title} hakkında bilgi almak istiyorum.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border px-3 py-1.5 hover:-translate-y-[1px] transition"
                    style={{ borderColor: PALETTE.line }}
                  >
                    <span>WhatsApp’tan sor</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      fill="#EDE5D9"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .25a11.75 11.75 0 00-10.16 17.7L.25 23.75l5.94-1.55A11.75 11.75 0 1012 .25z" />
                    </svg>
                  </a>
                </div> */}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>

      {/* Basit Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-4xl">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src={lightbox.src}
                alt={lightbox.title}
                fill
                className="object-contain bg-black/40"
              />
            </div>
            <div className="mt-3 text-center text-sm text-[#EDE5D9]">
              {lightbox.title}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
