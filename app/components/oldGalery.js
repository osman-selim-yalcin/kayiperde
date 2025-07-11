import clsx from "clsx";
import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";

export default function OldGallery() {
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
    <div
      ref={gallery}
      className="h-[175vh] bg-[#e0ded8] relative flex gap-[2vw] p-[2vw] box-border overflow-hidden shadow-[0_-25px_35px_rgba(0,0,0,0.25)]"
    >
      <Column images={[curtain1, curtain2]} y={y4} className={"-top-15/20"} />
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
      <Column images={[curtain10, curtain3]} y={y} className={"-top-9/20"} />
    </div>
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
