"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ExploreProjectsSection() {
  return (
    <section className="relative py-24 px-6 bg-white text-neutral-800">
      <div className="max-w-6xl mx-auto text-center">
        {/* Başlık */}
        <div className="mb-12">
          <p className="uppercase tracking-widest font-semibold text-sm text-gray-500">
            Elitis Projects
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mt-2">
            Imagine the poetry of the world
          </h2>
        </div>

        {/* Görseller */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            "https://images.prismic.io/elitis/ZlCT0yol0Zci9bRf_elitis-project-kelly-wearstler.jpg?auto=format,compress",
            "https://images.prismic.io/elitis/ZlCT1Col0Zci9bRg_elitis-project-ixchel-restaurant.jpg?auto=format,compress",
            "https://images.prismic.io/elitis/ZlCT8Col0Zci9bRo_elitis-project-j-morris-design.jpg?auto=format,compress",
            "https://images.prismic.io/elitis/ZlCT3iol0Zci9bRi_elitis-project-ixchel-restaurant-chairs.jpg?auto=format,compress",
            "https://images.prismic.io/elitis/ZlCT5Sol0Zci9bRm_elitis-project-l-amour-toujours.jpg?auto=format,compress",
          ].map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-lg shadow-md"
            >
              <Image
                src={src}
                alt={`Project ${i + 1}`}
                width={400}
                height={300}
                className="w-full h-[250px] object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>

        {/* Açıklama ve buton */}
        <div className="mt-12 max-w-xl mx-auto text-gray-600 text-sm">
          <p className="mb-4">
            Discover the creations of designers and interior architects we work
            hand in hand with and find inspiration in the Élitis projects.
          </p>
          <a href="/en/projects">
            <button className="px-6 py-2 bg-black text-white uppercase text-xs tracking-widest rounded hover:bg-neutral-800 transition">
              Explore
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
