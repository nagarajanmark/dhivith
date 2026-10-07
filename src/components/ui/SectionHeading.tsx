"use client";
import React from "react";
import { Badge } from "./Badge";

interface SectionHeadingProps {
  badgeText?: string;
  badgeVariant?: "blue" | "green" | "orange" | "yellow" | "cream";
  title: string;
  highlightedWord?: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badgeText,
  badgeVariant = "blue",
  title,
  highlightedWord,
  subtitle,
  align = "center",
  className = "",
  titleClassName = "",
  subtitleClassName = "",
}) => {
  const alignClasses = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  const renderTitle = () => {
    if (!highlightedWord) return title;

    const parts = title.split(highlightedWord);
    return (
      <>
        {parts[0]}
        <span className="relative inline-block text-[#0750B8] underline decoration-[#F5B900] decoration-wavy decoration-2 underline-offset-8">
          {highlightedWord}
        </span>
        {parts[1]}
      </>
    );
  };

  return (
    <div className={`flex flex-col max-w-3xl ${alignClasses[align]} ${className}`}>
      {badgeText && (
        <div className="mb-3.5">
          <Badge variant={badgeVariant} size="md">
            {badgeText}
          </Badge>
        </div>
      )}

      <h2
        className={`font-display font-extrabold text-2xl sm:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl tracking-tight text-[#121D28] leading-[1.2] ${titleClassName}`}
      >
        {renderTitle()}
      </h2>

      {subtitle && (
        <p
          className={`mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-[#5E6D7A] font-normal leading-relaxed ${subtitleClassName}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
