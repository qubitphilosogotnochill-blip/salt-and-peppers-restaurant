"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface EmbossedLogoProps {
  size?: "sm" | "md" | "lg";
  variant?: "gold" | "cream" | "dark";
  showTagline?: boolean;
}

export default function EmbossedLogo({
  size = "md",
  variant = "gold",
  showTagline = true,
}: EmbossedLogoProps) {
  const sizeClasses = {
    sm: "w-16 h-16",
    md: "w-24 h-24 sm:w-28 sm:h-28",
    lg: "w-24 h-24 sm:w-32 sm:h-32 lg:w-36 lg:h-36",
  };

  const imageSizes = {
    sm: 52,
    md: 84,
    lg: 110,
  };

  return (
    <div className="flex flex-col items-center justify-center text-center select-none">
      {/* 3D Embossed Medallion Container */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        whileHover={{ scale: 1.05, rotate: [0, -1, 1, 0] }}
        className={`relative ${sizeClasses[size]} rounded-full p-2 flex items-center justify-center transition-all duration-300 shadow-xl`}
        style={{
          background:
            variant === "dark"
              ? "radial-gradient(circle at 35% 35%, #2e4d40, #192b23 80%)"
              : variant === "cream"
              ? "radial-gradient(circle at 35% 35%, #ffffff, #E7DCCB 85%)"
              : "radial-gradient(circle at 35% 35%, #f4e4c1, #B58A50 65%, #7a5824 100%)",
          boxShadow:
            "0 12px 28px -6px rgba(36, 61, 50, 0.35), inset 0 2px 4px rgba(255, 255, 255, 0.7), inset 0 -3px 6px rgba(0, 0, 0, 0.4)",
          border: "3.5px solid #B58A50",
        }}
      >
        {/* Outer Engraved Beaded Ring */}
        <div className="absolute inset-1 rounded-full border border-dashed border-[#8c6732]/60 pointer-events-none" />

        {/* Inner Plate holding the Exact Restaurant Logo */}
        <div
          className="w-full h-full rounded-full flex items-center justify-center relative overflow-hidden bg-white shadow-inner p-1"
          style={{
            boxShadow: "inset 0 3px 8px rgba(0, 0, 0, 0.2)",
            border: "1.5px solid rgba(181, 138, 80, 0.4)",
          }}
        >
          <Image
            src="/images/logo.png"
            alt="Salt and Peppers Restaurant Official Logo"
            width={imageSizes[size]}
            height={imageSizes[size]}
            loading="eager"
            className="w-full h-full object-contain filter drop-shadow-sm"
          />
        </div>
      </motion.div>

      {/* Embossed Brand Title & Details below medallion */}
      {showTagline && (
        <motion.div
          initial={{ y: 8, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-3 flex flex-col items-center"
        >
          {/* Winged Gold Flourish Ornament */}
          <div className="flex items-center gap-3 w-full max-w-xs mb-1">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#B58A50] to-[#B58A50]/60" />
            <span className="text-[#B58A50] text-[11px] font-serif tracking-widest uppercase">
              ✦ EST. NAJAFGARH ✦
            </span>
            <span className="h-px flex-1 bg-gradient-to-l from-transparent via-[#B58A50] to-[#B58A50]/60" />
          </div>

          <h3
            className="font-serif text-2xl sm:text-3xl font-extrabold tracking-wider uppercase"
            style={{
              color: variant === "dark" ? "#F5F0E7" : "#A6533C",
              textShadow:
                variant === "dark"
                  ? "0 2px 4px rgba(0,0,0,0.6)"
                  : "0 1px 2px rgba(181, 138, 80, 0.4)",
            }}
          >
            SALT AND PEPPERS
          </h3>

          <div className="flex items-center gap-2 mt-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 inline-block"></span>
            <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#243D32] uppercase font-sans">
              Pure Vegetarian • Family Bistro
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 inline-block"></span>
          </div>

          <p className="text-[11px] text-[#85876A] tracking-wider mt-0.5">
            Najafgarh Thana Road, New Delhi – 110043
          </p>
        </motion.div>
      )}
    </div>
  );
}
