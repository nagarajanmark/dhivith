"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  className?: string;
  variant?: "light" | "dark" | "full-color";
  size?: "sm" | "md" | "lg" | "xl";
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = "",
  variant = "full-color",
  size = "md",
  showText = false,
}) => {
  const sizeClasses = {
    sm: {
      image: 48,
      container: "h-10 sm:h-12",
    },
    md: {
      image: 68,
      container: "h-14 sm:h-16",
    },
    lg: {
      image: 84,
      container: "h-20 sm:h-24",
    },
    xl: {
      image: 104,
      container: "h-28 sm:h-32",
    },
  };

  const currentSize = sizeClasses[size];

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-3 group transition-transform duration-300 hover:scale-[1.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0750B8] rounded-2xl p-1 ${className}`}
      aria-label="DHIVITH EDU CARE - Home"
    >
      {/* Official School Brand Logo from /public/logo.png */}
      <div className={`relative flex-shrink-0 ${currentSize.container} aspect-square transition-transform duration-500 group-hover:scale-105`}>
        <Image
          src="/logo.png"
          alt="DHIVITH EDU CARE - A Montessori Pre-School"
          width={currentSize.image}
          height={currentSize.image}
          priority
          className="object-contain w-full h-full drop-shadow-md"
        />
      </div>

      {showText && (
        <div className="flex flex-col text-left">
          <span
            className={`font-display font-extrabold tracking-tight leading-none text-xl sm:text-2xl ${
              variant === "light" ? "text-white" : "text-[#121D28]"
            }`}
          >
            DHIVITH <span className="text-[#0750B8]">EDU</span> <span className="text-[#159447]">CARE</span>
          </span>
          <span
            className={`font-bold tracking-wider uppercase mt-1 text-[11px] ${
              variant === "light" ? "text-amber-300" : "text-[#F36B12]"
            }`}
          >
            A Montessori Pre-School
          </span>
        </div>
      )}
    </Link>
  );
};
