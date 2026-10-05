"use client";

import React, {
  useRef,
  useMemo,
} from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const IMAGES = [
  "/school_images/1000453992.webp",
  "/school_images/1000449608.webp",
  "/school_images/1000450316.webp",
  "/school_images/1000452018.webp",
  "/school_images/1000452097.webp",
  "/school_images/1000454520.webp",
  "/school_images/1000501517.webp",
  "/school_images/1000501518.webp",
  "/school_images/1000227874.webp",
  "/school_images/1000227888.webp",
  "/school_images/1000223395.webp",
  "/school_images/1000223404.webp",
  "/school_images/1000227870.webp",
  "/school_images/1000591351.webp",
  "/school_images/1000591345.webp",
  "/school_images/1000264797.webp",
];

interface ImageCardProps {
  src: string;
  theme?: "light" | "dark";
}

const ImageCard = ({ src, theme = "light" }: ImageCardProps) => {
  return (
    <div
      className={`w-full h-[280px] sm:h-[350px] md:h-[420px] flex-shrink-0 transition-all duration-300 hover:scale-[1.03] cursor-pointer relative will-change-transform backface-hidden preserve-3d rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl ${
        theme === "light"
          ? "bg-slate-100 border-2 border-white shadow-md ring-1 ring-black/5"
          : "bg-[#111] border border-white/10"
      }`}
    >
      <img
        src={src}
        alt="Montessori Campus Activity"
        loading="eager"
        className="w-full h-full object-cover block select-none"
      />
    </div>
  );
};

interface ThreeDParallaxProps {
  theme?: "light" | "dark";
  className?: string;
}

export default function ThreeDParallaxUnfurlingGallery({
  theme = "light",
  className = "",
}: ThreeDParallaxProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isLight = theme === "light";

  const colMedia = useMemo(() => {
    const col1Base = IMAGES.filter((_, i) => i % 4 === 0);
    const col2Base = IMAGES.filter((_, i) => i % 4 === 1);
    const col3Base = IMAGES.filter((_, i) => i % 4 === 2);
    const col4Base = IMAGES.filter((_, i) => i % 4 === 3);

    return {
      col1: [...col1Base, ...col1Base, ...col1Base, ...col1Base],
      col2: [...col2Base, ...col2Base, ...col2Base, ...col2Base],
      col3: [...col3Base, ...col3Base, ...col3Base, ...col3Base],
      col4: [...col4Base, ...col4Base, ...col4Base, ...col4Base],
    };
  }, []);

  // Window scroll linked directly to the sticky container track with slow comfortable progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 85,
    damping: 24,
    mass: 0.35,
    restDelta: 0.001,
  });

  // 3D Matrix animations (Gentle angled 3D to frontal perspective - keeps cards covering full screen)
  const rotateY = useTransform(smoothProgress, [0, 1], [-14, 0]);
  const rotateX = useTransform(smoothProgress, [0, 1], [4, 0]);
  const rotateZ = useTransform(smoothProgress, [0, 1], [3, 0]);
  const scale = useTransform(smoothProgress, [0, 1], [1.02, 1.0]);

  // Column parallax tracks using controlled pixel translations so cards NEVER leave gaps
  const yCol1 = useTransform(smoothProgress, [0, 1], [40, -140]);
  const yCol2 = useTransform(smoothProgress, [0, 1], [-140, 40]);
  const yCol3 = useTransform(smoothProgress, [0, 1], [20, -100]);
  const yCol4 = useTransform(smoothProgress, [0, 1], [-100, 20]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-[180vh] sm:h-[200vh] ${
        isLight ? "bg-white" : "bg-[#050505]"
      } ${className}`}
    >
      {/* Sticky Fullscreen Stage */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center items-center overflow-hidden">
        {/* Parallax 3D Perspective Stage */}
        <div
          className="relative w-full h-full flex items-center justify-center overflow-hidden"
          style={{ perspective: "1200px" }}
        >
          {/* Subtle edge fade */}
          {isLight ? (
            <>
              <div className="absolute inset-0 z-20 pointer-events-none shadow-[inset_0_50px_50px_-25px_rgba(255,255,255,0.7),inset_0_-40px_40px_-25px_rgba(255,255,255,0.4)]" />
              <div className="absolute inset-0 z-20 pointer-events-none shadow-[inset_50px_0_50px_-25px_rgba(255,255,255,0.6),inset_-50px_0_50px_-25px_rgba(255,255,255,0.6)]" />
            </>
          ) : (
            <>
              <div className="absolute inset-0 z-20 pointer-events-none shadow-[inset_0_60px_60px_-25px_rgba(0,0,0,0.8),inset_0_-50px_50px_-25px_rgba(0,0,0,0.6)]" />
              <div className="absolute inset-0 z-20 pointer-events-none shadow-[inset_60px_0_60px_-25px_rgba(0,0,0,0.7),inset_-60px_0_60px_-25px_rgba(0,0,0,0.7)]" />
            </>
          )}

          {/* Dynamic 3D Matrix that fully fills the screen */}
          <motion.div
            style={{
              rotateX,
              rotateY,
              rotateZ,
              scale,
              transformStyle: "preserve-3d",
            }}
            className="flex gap-4 sm:gap-6 md:gap-8 justify-center items-center w-[120vw] sm:w-[108vw] origin-center will-change-transform backface-hidden"
          >
            {/* Column 1 */}
            <motion.div
              style={{ y: yCol1 }}
              className="flex flex-col gap-4 sm:gap-6 md:gap-8 w-[24vw] min-w-[200px] pointer-events-auto"
            >
              {colMedia.col1.map((src, index) => (
                <ImageCard
                  key={`col1-${index}`}
                  src={src}
                  theme={theme}
                />
              ))}
            </motion.div>

            {/* Column 2 */}
            <motion.div
              style={{ y: yCol2 }}
              className="flex flex-col gap-4 sm:gap-6 md:gap-8 w-[24vw] min-w-[200px] pointer-events-auto"
            >
              {colMedia.col2.map((src, index) => (
                <ImageCard
                  key={`col2-${index}`}
                  src={src}
                  theme={theme}
                />
              ))}
            </motion.div>

            {/* Column 3 */}
            <motion.div
              style={{ y: yCol3 }}
              className="flex flex-col gap-4 sm:gap-6 md:gap-8 w-[24vw] min-w-[200px] pointer-events-auto"
            >
              {colMedia.col3.map((src, index) => (
                <ImageCard
                  key={`col3-${index}`}
                  src={src}
                  theme={theme}
                />
              ))}
            </motion.div>

            {/* Column 4 */}
            <motion.div
              style={{ y: yCol4 }}
              className="flex flex-col gap-4 sm:gap-6 md:gap-8 w-[24vw] min-w-[200px] pointer-events-auto"
            >
              {colMedia.col4.map((src, index) => (
                <ImageCard
                  key={`col4-${index}`}
                  src={src}
                  theme={theme}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
