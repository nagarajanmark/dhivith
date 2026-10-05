"use client";

import React, { useEffect, useState, useRef } from "react";

export const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isMediaHovered, setIsMediaHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  const trailingPosition = useRef({ x: -100, y: -100 });
  const requestRef = useRef<number | null>(null);

  useEffect(() => {
    // Detect touch device
    if (
      typeof window !== "undefined" &&
      (window.matchMedia("(pointer: coarse)").matches ||
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0)
    ) {
      setIsTouch(true);
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const onMouseDown = () => setIsClicked(true);
    const onMouseUp = () => setIsClicked(false);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      // Check if hovering interactive buttons, links, or clickable items
      const isInteractive =
        target.closest("a, button, [role='button'], input, select, textarea, .cursor-pointer") !==
        null;
      setIsHovered(isInteractive);

      // Check if hovering media / gallery / images / cards
      const isMedia =
        target.closest("img, video, [data-cursor='view'], #marquee-gallery .group") !== null;
      setIsMediaHovered(isMedia);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("mouseover", onMouseOver, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    // Smooth Lerp Animation for Trailing Outer Ring
    const animate = () => {
      trailingPosition.current.x +=
        (mousePosition.x - trailingPosition.current.x) * 0.18;
      trailingPosition.current.y +=
        (mousePosition.y - trailingPosition.current.y) * 0.18;

      const ring = document.getElementById("custom-cursor-ring");
      if (ring) {
        ring.style.transform = `translate3d(${trailingPosition.current.x}px, ${trailingPosition.current.y}px, 0)`;
      }

      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [mousePosition, isVisible]);

  if (isTouch || !isVisible) return null;

  return (
    <>
      {/* 1. Precise Fast Center Dot */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[99999] -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out will-change-transform"
        style={{
          transform: `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0) scale(${
            isClicked ? 0.7 : isHovered ? 1.4 : 1
          })`,
        }}
      >
        <div
          className={`rounded-full transition-all duration-200 ${
            isHovered
              ? "w-2.5 h-2.5 bg-amber-400 shadow-[0_0_12px_rgba(245,185,0,0.8)]"
              : isMediaHovered
              ? "w-2 h-2 bg-[#159447] shadow-[0_0_10px_rgba(21,148,71,0.6)]"
              : "w-2 h-2 bg-[#0750B8] shadow-[0_0_8px_rgba(7,80,184,0.5)]"
          }`}
        />
      </div>

      {/* 2. Fluid Magnetic Trailing Outer Ring */}
      <div
        id="custom-cursor-ring"
        className="fixed top-0 left-0 pointer-events-none z-[99998] -translate-x-1/2 -translate-y-1/2 will-change-transform"
        style={{
          transform: `translate3d(${trailingPosition.current.x}px, ${trailingPosition.current.y}px, 0)`,
        }}
      >
        <div
          className={`rounded-full border transition-all duration-300 ease-out flex items-center justify-center ${
            isClicked
              ? "w-8 h-8 border-amber-400 bg-amber-400/20 scale-90"
              : isMediaHovered
              ? "w-14 h-14 border-[#0750B8] bg-[#0750B8]/10 backdrop-blur-[2px] shadow-lg scale-110"
              : isHovered
              ? "w-12 h-12 border-amber-400/80 bg-amber-400/10 backdrop-blur-[1px] shadow-md scale-115"
              : "w-9 h-9 border-[#0750B8]/40 bg-[#0750B8]/5"
          }`}
        >
          {isMediaHovered && (
            <span className="text-[9px] font-black tracking-widest text-[#0750B8] uppercase">
              VIEW
            </span>
          )}
        </div>
      </div>
    </>
  );
};
