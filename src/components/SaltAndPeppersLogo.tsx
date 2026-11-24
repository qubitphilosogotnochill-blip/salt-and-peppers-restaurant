"use client";

import Image from "next/image";

interface SaltAndPeppersLogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
  textColor?: "light" | "dark";
}

export default function SaltAndPeppersLogo({
  className = "",
  size = 48,
  showText = false,
  textColor = "light",
}: SaltAndPeppersLogoProps) {
  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Exact Circular Emblem with Salt Shaker & Curled Red Chilli with Aroma Steam */}
      <div
        className="relative rounded-full overflow-hidden shrink-0 shadow-md transition-transform duration-300 hover:scale-105"
        style={{
          width: `${size}px`,
          height: `${size}px`,
        }}
      >
        <Image
          src="/images/logo.png"
          alt="Salt and Peppers Restaurant Logo"
          width={size}
          height={size}
          priority
          className="w-full h-full object-contain"
        />
      </div>

      {showText && (
        <div className="flex flex-col">
          <span
            className={`font-serif font-extrabold tracking-wider leading-tight ${
              textColor === "light" ? "text-[#F5F0E7]" : "text-[#243D32]"
            }`}
            style={{ fontSize: size > 40 ? "1.25rem" : "1rem" }}
          >
            SALT AND PEPPERS
          </span>
          <span className="text-[10px] tracking-widest text-[#B58A50] font-semibold uppercase">
            Pure Veg • Bistro Dining
          </span>
        </div>
      )}
    </div>
  );
}
