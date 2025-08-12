"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  const hours = [
    ["Pazartesi", "09:00 – 20:30"],
    ["Salı", "09:00 – 20:30"],
    ["Çarşamba", "09:00 – 20:30"],
    ["Perşembe", "09:00 – 20:30"],
    ["Cuma", "09:00 – 20:30"],
    ["Cumartesi", "09:00 – 20:30"],
    ["Pazar", "Kapalı"],
  ];

  return (
    <footer
      className="relative mt-1 text-[#F4EFE8] "
      style={{
        background:
          "linear-gradient(to bottom, #1A140E 0%, #201711 40%, #241913 100%)",
      }}
    >
      {/* Üst içerik: 3 kolon */}
      <div className="container mx-auto py-12">
        {/* 1) İletişim */}
        <div className="flex grid-cols-1 md:grid-cols-3 justify-center gap-45">
          <div className="space-y-4">
            <h4 className="text-xl font-bold tracking-wide text-[#EDE5D9] mb-3">
              İletişim
            </h4>

            <div className="text-sm text-[#EDE5D9]/90">İbrahim Köseoğlu</div>
            <div className="text-sm text-[#EDE5D9]/90">Ara: 0544 665 51 50</div>

            {/* Sosyal ikonlar */}
            <div className="flex items-center gap-3 pt-2">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/kayiperde"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2 rounded-full border hover:scale-105 transition"
                style={{ borderColor: "#CBB8A2" }}
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="#EDE5D9">
                  <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 5a5 5 0 100 10 5 5 0 000-10zm6-1a1 1 0 110 2 1 1 0 010-2z" />
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/905446655150"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="p-2 rounded-full border hover:scale-105 transition"
                style={{ borderColor: "#CBB8A2" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#EDE5D9"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .25a11.75 11.75 0 00-10.16 17.7L.25 23.75l5.94-1.55A11.75 11.75 0 1012 .25zm0 21.5a9.72 9.72 0 01-4.94-1.35l-.35-.21-3.53.92.94-3.44-.23-.35A9.75 9.75 0 1112 21.75zm5.64-7.34c-.31-.16-1.84-.91-2.13-1.01-.29-.1-.5-.16-.71.16-.21.31-.82 1.01-1 1.22-.18.21-.37.23-.68.08-.31-.16-1.3-.48-2.48-1.52-.92-.82-1.54-1.84-1.72-2.15-.18-.31-.02-.48.13-.63.13-.13.31-.34.47-.5.16-.16.21-.27.31-.45.1-.18.05-.34-.03-.5-.08-.16-.71-1.71-.97-2.34-.26-.63-.52-.54-.71-.55h-.61c-.21 0-.55.08-.84.39-.29.31-1.1 1.07-1.1 2.61 0 1.54 1.13 3.03 1.29 3.24.16.21 2.21 3.38 5.36 4.74.75.32 1.33.51 1.78.65.75.24 1.43.21 1.97.13.6-.09 1.84-.75 2.1-1.47.26-.72.26-1.33.18-1.47-.08-.13-.29-.21-.6-.37z" />
                </svg>
              </a>
            </div>
          </div>

          {/* 2) Çalışma Saatleri */}
          <div>
            <h4 className="text-lg font-semibold text-[#EDE5D9] mb-3">
              Çalışma Saatleri
            </h4>
            <table className="w-full text-sm text-[#F4EFE8]/90">
              <tbody>
                {hours.map(([day, hour]) => (
                  <tr key={day}>
                    <td className="pr-4 py-1">{day}</td>
                    <td className="py-1">{hour}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 3) Adres */}
          <div>
            <h4 className="text-lg font-semibold text-[#EDE5D9] mb-3">Adres</h4>
            <address className="not-italic text-sm leading-relaxed text-[#F4EFE8]/90 mb-3">
              İncilipınar Mah. Zübeyde Hanım Cad.
              <br />
              3371/1 Sk. No:4/A, Pamukkale / Denizli
            </address>
            <a
              href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x14c73f579ae1ccef:0x9e7476dcd8097b05?sa=X"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-xl border px-3 py-2 text-sm transition hover:-translate-y-px"
              style={{ borderColor: "#CBB8A2" }}
            >
              Haritada Görüntüle
            </a>
          </div>
        </div>
      </div>

      {/* Alt bar: ortalanmış telif */}
      <div
        className="border-t/10"
        style={{ borderTop: "1px solid rgba(203,184,162,0.25)" }}
      >
        <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-center text-xs">
          <span className="text-[#EDE5D9]/75">
            © {year} Kayı Perde – Tüm hakları saklıdır.
          </span>
        </div>
      </div>

      {/* Çok hafif grid doku */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          background:
            "linear-gradient(to right, #CBB8A2 1px, transparent 1px), linear-gradient(to bottom, #CBB8A2 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
        }}
      />
    </footer>
  );
}
