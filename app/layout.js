import Lenis from "@/app/lenis";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";

// Başlıklar için
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  style: ["normal", "italic"],
  display: "swap",
});

// Ana metinler için
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata = {
  title: "Kayı Perde",
  description: "Denizli'nin öncü perde tasarım atölyesi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className={`${cormorant.variable} ${montserrat.variable}`}>
      <body className="font-sans antialiased">
        <Lenis>{children}</Lenis>
      </body>
    </html>
  );
}
