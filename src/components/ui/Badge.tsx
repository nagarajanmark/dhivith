"use client";
import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "blue" | "green" | "orange" | "yellow" | "cream" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "blue",
  size = "md",
  className = "",
  icon,
}) => {
  const variantStyles = {
    blue: "bg-[#EBF3FF] text-[#0750B8] border border-[#0750B8]/20",
    green: "bg-[#EAF8EF] text-[#159447] border border-[#159447]/20",
    orange: "bg-[#FFF2E8] text-[#F36B12] border border-[#F36B12]/20",
    yellow: "bg-[#FFF9E5] text-[#9A6700] border border-[#F5B900]/30",
    cream: "bg-gray-100 text-[#2A343D] border border-gray-200",
    outline: "bg-white/80 backdrop-blur-sm text-[#121D28] border border-[#0750B8]/15",
  };

  const sizeStyles = {
    sm: "px-2.5 py-0.5 text-xs font-medium rounded-full",
    md: "px-3.5 py-1 text-xs md:text-sm font-semibold rounded-full",
    lg: "px-4 py-1.5 text-sm font-semibold rounded-full",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 transition-all duration-200 ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};
