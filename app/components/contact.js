"use client";

import { motion } from "motion/react"; // framer-motion kullanıyorsan: "framer-motion"
import Image from "next/image";
import Link from "next/link";

const PALETTE = {
  line: "#CBB8A2",
};

const posts = [
  {
    src: "/1.jpg",
    href: "https://www.instagram.com/p/C35rr54M9Cq/?img_index=1",
  },
  {
    src: "/2.jpg",
    href: "https://www.instagram.com/p/C35rr54M9Cq/?img_index=1",
  },
  {
    src: "/3.jpg",
    href: "https://www.instagram.com/p/C35rr54M9Cq/?img_index=1",
  },
  {
    src: "/4.jpg",
    href: "https://www.instagram.com/p/C35rr54M9Cq/?img_index=1",
  },
  {
    src: "/5.jpg",
    href: "https://www.instagram.com/p/C35rr54M9Cq/?img_index=1",
  },
];

const rail = [...posts, ...posts];

export default function ExploreMoreSection() {
  return (
    <section id="more" className="relative bg-white py-20">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-neutral-900">
        Daha Fazlasını Gör
      </h2>
      {/* Zarif ayraç */}
      <div
        className="mx-auto mb-12 h-px w-24"
        style={{
          background: `linear-gradient(90deg, transparent, ${PALETTE.line}, transparent)`,
        }}
      />

      {/* 3’lü rail – yalnızca görseller */}
      <div className="container mx-auto">
        <div className="flex gap-4 w-full justify-center">
          <ScrollColumn direction="down" images={rail} />
          <ScrollColumn direction="up" images={rail} />
          <ScrollColumn direction="down" images={rail} />
        </div>
      </div>
    </section>
  );
}

function ScrollColumn({ direction, images }) {
  return (
    <div
      className="relative h-[500px] w-[300px] overflow-hidden rounded-2xl border bg-white shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-all duration-300 hover:shadow-[0_16px_50px_rgba(0,0,0,0.15)]"
      style={{ borderColor: `${PALETTE.line}55` }}
    >
      <motion.div
        className="absolute flex flex-col gap-4"
        animate={{ y: direction === "down" ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ duration: 30, ease: "linear", repeat: Infinity }}
      >
        {images.map(({ src, href }, i) => (
          <Link
            key={`${src}-${i}`}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-[300px] h-[250px] group"
            aria-label={`Instagram post ${i + 1}`}
          >
            <Image
              src={src}
              alt={`Instagram post ${i}`}
              fill
              className="object-cover rounded-xl transition-transform duration-500 group-hover:scale-[1.03]"
            />
            {/* köşe ikon */}
            <div className="absolute bottom-3 right-3 bg-white/90 text-black rounded-full p-1 shadow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z" />
              </svg>
            </div>
          </Link>
        ))}
      </motion.div>
    </div>
  );
}
