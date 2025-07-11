"use client";

import InstagramRail from "./instagram";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-white py-20">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
        Bize Ulaşın
      </h2>

      <div className="container mx-auto flex flex-col md:flex-row gap-10">
        <InstagramRail />

        {/* SAĞ: Harita + detaylar */}
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <iframe
            className="w-full h-[500px] rounded-xl shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d50469.565010237995!2d29.092132!3d37.758442!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c73f579ae1ccef%3A0x9e7476dcd8097b05!2sKay%C4%B1%20Perde!5e0!3m2!1str!2str!4v1750335623134"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
