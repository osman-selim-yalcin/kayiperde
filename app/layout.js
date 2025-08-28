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
  title: "Kayı Perde | Denizli’nin Öncü Perde Tasarım Atölyesi",
  description:
    "Fon perde, tül perde, jaluzi, stor perde ve perde tamiri. Zarif tasarım ve kaliteli işçilik. Denizli’nin Öncü Perde Tasarım Atölyesi",
  openGraph: {
    title: "Kayı Perde",
    description: "Denizli’de perde tasarımı ve uygulaması",
    url: "https://kayiperde.com",
    siteName: "Kayı Perde",
    images: [
      {
        url: "/facicon.png",
        width: 1200,
        height: 630,
        alt: "Kayı Perde",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kayı Perde",
    description: "Denizli’de perde tasarımı ve uygulaması",
    images: ["/facicon.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className={`${cormorant.variable} ${montserrat.variable}`}>
      <body className="antialiased" suppressHydrationWarning>
        <Lenis>{children}</Lenis>
      </body>
    </html>
  );
}
