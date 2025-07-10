export default function Footer() {
  return (
    <footer className="bg-slate-800 text-neutral-200 px-6 py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
        {/* Firma Bilgisi */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Kayı Perde</h3>
          <p className="text-gray-400">İbrahim Köseoğlu</p>
          <a href="tel:05446655150" className="block mt-1 hover:underline">
            0544 665 51 50
          </a>
        </div>

        {/* Adres */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Adres</h4>
          <p className="text-gray-400 leading-relaxed">
            İncilipınar Mah. Zübeyde Hanım Cad.<br />
            3371/1 Sk. No:4/A, Pamukkale / Denizli
          </p>
          <a
            href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x14c73f579ae1ccef:0x9e7476dcd8097b05?sa=X"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 text-xs underline mt-2 inline-block"
          >
            Haritada Görüntüle
          </a>
        </div>

        {/* Çalışma Saatleri */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Çalışma Saatleri</h4>
          <table className="text-gray-400 w-full">
            <tbody>
              {[
                ["Pazartesi", "09:00 – 20:30"],
                ["Salı", "09:00 – 20:30"],
                ["Çarşamba", "09:00 – 20:30"],
                ["Perşembe", "09:00 – 20:30"],
                ["Cuma", "09:00 – 20:30"],
                ["Cumartesi", "09:00 – 20:30"],
                ["Pazar", "Kapalı"],
              ].map(([day, hour]) => (
                <tr key={day}>
                  <td className="pr-4">{day}</td>
                  <td>{hour}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="text-center text-gray-500 mt-10 text-xs">
        © {new Date().getFullYear()} Kayı Perde – Tüm hakları saklıdır.
      </div>
    </footer>
  );
}
