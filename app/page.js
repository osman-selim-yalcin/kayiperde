"use client";

import curtain1 from "@/public/1.jpg";
import curtain10 from "@/public/10.jpg";
import curtain2 from "@/public/2.jpg";
import curtain3 from "@/public/3.jpg";
import curtain4 from "@/public/4.jpg";
import curtain5 from "@/public/5.jpg";
import curtain6 from "@/public/6.jpg";
import curtain7 from "@/public/7.jpg";
import curtain8 from "@/public/8.jpg";
import curtain9 from "@/public/9.jpg";
import logo from "@/public/logo.png";
import clsx from "clsx";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import PhilosophySection from "./philo";

export default function Home() {
  const gallery = useRef(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });
  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);
  useEffect(() => {
    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };
    resize();
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);
  return (
    <>
      <main>
        <div className="h-screen relative flex font-cormorant overflow-hidden shadow-[0_25px_35px_rgba(0,0,0,0.25)]">
          <Image
            src={"/cover.jpg"}
            alt="Arka plan perde"
            fill
            className="absolute"
          />
          <Image
            src={logo}
            alt="Kayı Perde Logo"
            className="absolute w-2/5 -right-16 -top-20"
          />
          <p className="absolute top-4/5 right-18 text-xl w-[400px] text-right font-bold">
            Perde, odanın ruhunu yumuşaklık ve zarafetle saran büyülü bir
            ayrıntıdır.
          </p>
        </div>
        <div className="flex justify-center items-center sticky bottom-0 -z-10 h-[100vh]">
          <PhilosophySection />
        </div>
        <div
          ref={gallery}
          className="h-[175vh] bg-[#e0ded8] relative flex gap-[2vw] p-[2vw] box-border overflow-hidden shadow-[0_-25px_35px_rgba(0,0,0,0.25)]"
        >
          <Column
            images={[curtain1, curtain2]}
            y={y4}
            className={"-top-15/20"}
          />
          <Column
            images={[curtain4, curtain5, curtain6]}
            y={y2}
            className={"-top-19/20"}
          />
          <Column
            images={[curtain7, curtain8, curtain9]}
            y={y3}
            className={"-top-9/20"}
          />
          <Column
            images={[curtain10, curtain3]}
            y={y}
            className={"-top-9/20"}
          />
        </div>
        <div>
          <h2 className="text-xl font-bold text-center">Bize Ulaşın</h2>
          <div className="mx-auto flex justify-around py-16 items-center">
            <iframe
              className="w-[600px] h-[450px]"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d50469.565010237995!2d29.092132!3d37.758442!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c73f579ae1ccef%3A0x9e7476dcd8097b05!2sKay%C4%B1%20Perde!5e0!3m2!1str!2str!4v1750335623134!5m2!1str!2str"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div>
              <p className="font-bold">İBRAHİM KÖSEOĞLU</p>
              <a href="tel:05446655150">0544 665 51 50</a>
              <p>
                <a href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x14c73f579ae1ccef:0x9e7476dcd8097b05?sa=X&amp;ved=1t:8290&amp;ictx=111">
                  İncilipınar Mah. Zübeyde Hanım Cad, 3371/1. Sk. No:4/A, 20010
                  Pamukkale/Denizli
                </a>
              </p>
              <table className="my-16 table-auto w-1/2">
                <tbody>
                  <tr>
                    <td className="font-bold">Pazartesi</td>
                    <td>09:00 - 20:30</td>
                  </tr>
                  <tr>
                    <td className="font-bold">Salı</td>
                    <td>09:00 - 20:30</td>
                  </tr>
                  <tr>
                    <td className="font-bold">Çarşamba</td>
                    <td>09:00 - 20:30</td>
                  </tr>
                  <tr>
                    <td className="font-bold">Perşembe</td>
                    <td>09:00 - 20:30</td>
                  </tr>
                  <tr>
                    <td className="font-bold">Cuma</td>
                    <td>09:00 - 20:30</td>
                  </tr>
                  <tr>
                    <td className="font-bold">Cumartesi</td>
                    <td>09:00 - 20:30</td>
                  </tr>
                  <tr>
                    <td className="font-bold">Pazar</td>
                    <td>Kapalı</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
      <footer className="text-center py-4 bg-slate-700 text-neutral-200">
        KayıPerde
      </footer>
    </>
  );
}

const Column = ({ images, y, className }) => {
  return (
    <motion.div
      className={clsx([
        "relative h-full w-1/4 min-w-[250px] flex flex-col gap-[2vw]",
        className,
      ])}
      style={{ y }}
    >
      {images.map((src, i) => {
        return (
          <div
            key={i}
            className={"h-full w-full relative rounded-[2vw] overflow-hidden"}
          >
            <Image src={src} alt="image" fill className="object-cover" />
          </div>
        );
      })}
    </motion.div>
  );
};
