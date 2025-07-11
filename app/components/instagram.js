"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

// Listeyi istediğin gibi uzat
const posts = [
  { src: "/1.jpg", href: "https://www.instagram.com/p/1" },
  { src: "/2.jpg", href: "https://www.instagram.com/p/2" },
  { src: "/3.jpg", href: "https://www.instagram.com/p/3" },
  { src: "/4.jpg", href: "https://www.instagram.com/p/4" },
  { src: "/5.jpg", href: "https://www.instagram.com/p/5" },
];

const rail = [...posts, ...posts]; // sonsuz scroll için tekrar

export default function InstagramRail() {
  return (
    <div className="flex gap-4 w-full justify-center">
      {/* Sol: aşağı doğru */}
      <ScrollColumn direction="down" images={rail} />

      {/* Orta: yukarı doğru */}
      <ScrollColumn direction="up" images={rail} />

      {/* Sağ: aşağı doğru */}
      <ScrollColumn direction="down" images={rail} />
    </div>
  );
}

function ScrollColumn({ direction, images }) {
  return (
    <div className="relative h-[500px] w-[300px] overflow-hidden rounded-xl shadow-md">
      <motion.div
        className="absolute flex flex-col gap-4"
        animate={{
          y: direction === "down" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          duration: 30,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {images.map(({ src, href }, i) => (
          <Link
            key={i}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-[300px] h-[250px]"
          >
            <Image
              src={src}
              alt={`Instagram post ${i}`}
              fill
              className="object-cover rounded-xl"
            />
            <div className="absolute bottom-3 right-3 bg-white/80 rounded-full p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-black"
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
