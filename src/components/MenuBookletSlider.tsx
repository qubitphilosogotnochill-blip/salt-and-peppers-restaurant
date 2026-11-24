"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  ZoomIn,
  ZoomOut,
  BookOpen,
  Columns,
  Square,
  Sparkles,
  X,
  List,
} from "lucide-react";
import { RESTAURANT_DATA } from "@/data/restaurantData";
import EmbossedLogo from "@/components/EmbossedLogo";

interface MenuBookletSliderProps {
  initialSpreadIndex?: number;
  showEmbossedLogo?: boolean;
}

export default function MenuBookletSlider({
  initialSpreadIndex = 0,
  showEmbossedLogo = true,
}: MenuBookletSliderProps) {
  // 6 two-page spreads: 0 = (p1, p2), 1 = (p3, p4), 2 = (p5, p6), 3 = (p7, p8), 4 = (p9, p10), 5 = (p11, p12)
  const [currentSpread, setCurrentSpread] = useState(initialSpreadIndex);
  const [direction, setDirection] = useState<number>(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [layoutMode, setLayoutMode] = useState<"twoPage" | "singlePage">("twoPage");
  const [viewMode, setViewMode] = useState<"scan4k" | "details">("scan4k");

  // Single page tracking (0 to 11) if single page mode is chosen
  const [singlePageIndex, setSinglePageIndex] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const totalPages = RESTAURANT_DATA.menuBooklet.length; // 12
  const totalSpreads = Math.ceil(totalPages / 2); // 6

  const leftPageIndex = currentSpread * 2;
  const rightPageIndex = currentSpread * 2 + 1;
  const leftPage = RESTAURANT_DATA.menuBooklet[leftPageIndex];
  const rightPage = rightPageIndex < totalPages ? RESTAURANT_DATA.menuBooklet[rightPageIndex] : null;

  const goToNext = useCallback(() => {
    setDirection(1);
    if (layoutMode === "twoPage") {
      setCurrentSpread((prev) => (prev + 1) % totalSpreads);
    } else {
      setSinglePageIndex((prev) => (prev + 1) % totalPages);
    }
    setZoomLevel(1);
  }, [layoutMode, totalSpreads, totalPages]);

  const goToPrev = useCallback(() => {
    setDirection(-1);
    if (layoutMode === "twoPage") {
      setCurrentSpread((prev) => (prev - 1 + totalSpreads) % totalSpreads);
    } else {
      setSinglePageIndex((prev) => (prev - 1 + totalPages) % totalPages);
    }
    setZoomLevel(1);
  }, [layoutMode, totalSpreads, totalPages]);

  const goToSpread = (spreadIdx: number) => {
    setDirection(spreadIdx > currentSpread ? 1 : -1);
    setCurrentSpread(spreadIdx);
    setSinglePageIndex(spreadIdx * 2);
    setZoomLevel(1);
  };

  const goToSinglePage = (pageIdx: number) => {
    setDirection(pageIdx > singlePageIndex ? 1 : -1);
    setSinglePageIndex(pageIdx);
    setCurrentSpread(Math.floor(pageIdx / 2));
    setZoomLevel(1);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        goToNext();
      } else if (e.key === "ArrowLeft") {
        goToPrev();
      } else if (e.key === "Escape" && isFullscreen) {
        setIsFullscreen(false);
        setZoomLevel(1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToNext, goToPrev, isFullscreen]);

  // Zoom controls
  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.35, 3));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.35, 1));
  const handleZoomReset = () => setZoomLevel(1);

  // 3D Spread Turn variants
  const spreadVariants = {
    enter: (dir: number) => ({
      rotateY: dir > 0 ? 25 : -25,
      x: dir > 0 ? 70 : -70,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      rotateY: 0,
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 260,
        damping: 26,
        mass: 0.9,
      },
    },
    exit: (dir: number) => ({
      rotateY: dir > 0 ? -25 : 25,
      x: dir > 0 ? -70 : 70,
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.25,
        ease: "easeInOut" as const,
      },
    }),
  };

  return (
    <div className="w-full relative" ref={containerRef}>
      {/* 3D Embossed Logo Header Above Menu */}
      {showEmbossedLogo && (
        <div className="mb-10 flex flex-col items-center justify-center">
          <EmbossedLogo size="lg" variant="gold" showTagline={true} />
        </div>
      )}

      {/* Control Bar: Mode Toggles & Fast Category Jumping */}
      <div className="mb-6 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Category Jumping Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none w-full md:w-auto">
          {[
            { label: "Starters & Chinese", spread: 0 },
            { label: "Combos & Momos", spread: 1 },
            { label: "Pizza, Burger & Pasta", spread: 2 },
            { label: "Indian Curries & Breads", spread: 3 },
            { label: "Thali & South Indian", spread: 4 },
            { label: "Mocktails & Ice Cream", spread: 5 },
          ].map((cat) => {
            const isActive = currentSpread === cat.spread;
            return (
              <motion.button
                key={cat.label}
                onClick={() => goToSpread(cat.spread)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className={`relative text-xs px-3.5 py-1.5 rounded-full whitespace-nowrap transition-colors font-medium ${
                  isActive
                    ? "text-[#F5F0E7] font-semibold"
                    : "bg-[#E7DCCB]/60 text-[#252522] hover:bg-[#E7DCCB]"
                  }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeSpreadPill"
                    className="absolute inset-0 bg-[#243D32] rounded-full border border-[#B58A50] shadow-sm -z-0"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1">
                  <span className="opacity-70 text-[10px]">S.{cat.spread + 1}</span>
                  <span>{cat.label}</span>
                </span>
              </motion.button>
            );
          })}
        </div>

        {/* View Mode & Spread Toggles */}
        <div className="flex items-center gap-2 bg-[#E7DCCB]/70 p-1 rounded-xl self-end shrink-0">
          {/* 2-Page View Button */}
          <button
            onClick={() => setLayoutMode("twoPage")}
            className={`flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg transition-all font-medium ${
              layoutMode === "twoPage"
                ? "bg-[#243D32] text-[#F5F0E7] shadow-sm"
                : "text-[#252522] hover:text-[#243D32]"
              }`}
            title="Open Book 2-Page Spread View"
          >
            <Columns className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">2-Page Spread</span>
            <span className="sm:hidden">2-Page</span>
          </button>

          {/* 1-Page View Button */}
          <button
            onClick={() => setLayoutMode("singlePage")}
            className={`flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg transition-all font-medium ${
              layoutMode === "singlePage"
                ? "bg-[#243D32] text-[#F5F0E7] shadow-sm"
                : "text-[#252522] hover:text-[#243D32]"
              }`}
            title="Single Page Focused View"
          >
            <Square className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Single Page</span>
            <span className="sm:hidden">1-Page</span>
          </button>

          {/* 4K HD Text Toggle */}
          <button
            onClick={() => setViewMode(viewMode === "scan4k" ? "details" : "scan4k")}
            className={`flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg transition-all font-medium border ${
              viewMode === "details"
                ? "bg-[#A6533C] text-white border-[#A6533C] shadow-sm"
                : "bg-white text-[#243D32] border-[#B58A50]/40 hover:bg-[#FAF7F2]"
            }`}
            title="Toggle Parsed Ultra HD Text"
          >
            <List className="w-3.5 h-3.5 text-[#B58A50]" />
            <span className="font-bold">4K HD Text</span>
          </button>
        </div>
      </div>

      {/* Main Open Booklet Outer Frame */}
      <div className="bg-[#FAF7F2] rounded-3xl border-2 border-[#B58A50]/45 shadow-2xl shadow-[#243D32]/15 overflow-hidden transition-all">
        {/* Top Header of Booklet Frame */}
        <div className="bg-[#243D32] text-[#F5F0E7] px-4 sm:px-8 py-3.5 flex items-center justify-between border-b border-[#B58A50]/30">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-[#192b23] border border-[#B58A50]/70 text-xs text-[#B58A50] font-bold shadow-inner">
              {layoutMode === "twoPage"
                ? `Pages ${leftPageIndex + 1} & ${rightPageIndex + 1}`
                : `Page ${singlePageIndex + 1}`}
            </span>
            <div className="hidden sm:block">
              <h3 className="font-serif text-base font-bold text-[#F5F0E7] leading-tight">
                {layoutMode === "twoPage"
                  ? `${leftPage.category} • ${rightPage?.category || ""}`
                  : RESTAURANT_DATA.menuBooklet[singlePageIndex].title}
              </h3>
              <p className="text-xs text-[#B58A50] tracking-wider">
                Ultra HD 4K Original Restaurant Menu Scans
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Zoom Controls */}
            <div className="flex items-center gap-1 bg-[#192b23] rounded-lg p-0.5 border border-[#B58A50]/30 text-xs">
              <button
                onClick={handleZoomOut}
                disabled={zoomLevel <= 1}
                className="p-1.5 hover:text-[#B58A50] disabled:opacity-40 transition-colors"
                title="Zoom Out"
                aria-label="Zoom Out"
              >
                <ZoomOut className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={handleZoomReset}
                className="px-2 py-0.5 text-[11px] font-mono text-[#B58A50] hover:text-white"
                title="Reset Zoom"
              >
                {Math.round(zoomLevel * 100)}%
              </button>
              <button
                onClick={handleZoomIn}
                disabled={zoomLevel >= 3}
                className="p-1.5 hover:text-[#B58A50] disabled:opacity-40 transition-colors"
                title="Zoom In"
                aria-label="Zoom In"
              >
                <ZoomIn className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* 4K HD Quality Badge */}
            <span className="hidden md:inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#A6533C]/20 border border-[#A6533C]/50 text-white text-[10px] font-bold tracking-widest uppercase">
              <Sparkles className="w-3 h-3 text-[#B58A50]" />
              4K ULTRA HD
            </span>

            {/* Fullscreen Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsFullscreen(true)}
              className="p-2 rounded-lg bg-[#192b23] hover:bg-[#A6533C] text-[#F5F0E7] border border-[#B58A50]/30 transition-all text-xs flex items-center gap-1.5"
              title="Open Fullscreen 4K Viewer"
              aria-label="Open Fullscreen Menu"
            >
              <Maximize2 className="w-4 h-4" />
              <span className="hidden md:inline">Fullscreen</span>
            </motion.button>
          </div>
        </div>

        {/* 2-PAGE SPREAD / BOOKLET DISPLAY CONTAINER */}
        <div
          className="relative min-h-[540px] sm:min-h-[640px] max-h-[820px] flex items-center justify-center p-3 sm:p-6 bg-gradient-to-b from-[#FAF7F2] via-[#F4EFE6] to-[#EAE0D0] select-none overflow-hidden"
          style={{ perspective: "1500px" }}
        >
          {viewMode === "scan4k" ? (
            /* 4K SCANNED BOOKLET SPREAD VIEW */
            <div className="w-full h-full flex flex-col items-center justify-center">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={layoutMode === "twoPage" ? `spread-${currentSpread}` : `single-${singlePageIndex}`}
                  custom={direction}
                  variants={spreadVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={(_, info) => {
                    if (info.offset.x < -60) goToNext();
                    else if (info.offset.x > 60) goToPrev();
                  }}
                  className="w-full flex items-center justify-center cursor-grab active:cursor-grabbing"
                  style={{
                    transform: `scale(${zoomLevel})`,
                    transformStyle: "preserve-3d",
                  }}
                >
                  {layoutMode === "twoPage" ? (
                    /* 2-PAGE OPEN BOOK SPREAD (Side by Side) */
                    <div className="w-full max-w-5xl bg-[#192b23] rounded-2xl p-2 sm:p-3 shadow-2xl border-4 border-[#B58A50]/50 relative">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 relative bg-white rounded-xl overflow-hidden shadow-inner">
                        {/* LEFT PAGE */}
                        <div className="relative flex flex-col items-center justify-center bg-white border-b md:border-b-0 md:border-r border-[#E7DCCB] p-2 sm:p-3 group">
                          {/* Inner spine shadow on right edge of left page */}
                          <div className="hidden md:block absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-black/15 to-transparent pointer-events-none z-10" />

                          <div className="w-full flex items-center justify-between pb-1.5 mb-1 border-b border-[#B58A50]/20 text-[11px] text-[#A6533C] font-semibold uppercase">
                            <span>Page {leftPageIndex + 1}: {leftPage.category}</span>
                            <span className="text-[10px] text-[#85876A]">Salt and Peppers</span>
                          </div>

                          <div className="relative w-full max-h-[540px] sm:max-h-[620px] flex items-center justify-center overflow-hidden">
                            <Image
                              src={leftPage.image}
                              alt={leftPage.title}
                              width={1371}
                              height={1956}
                              priority
                              quality={100}
                              className="object-contain max-h-[500px] sm:max-h-[580px] w-auto h-auto rounded filter contrast-[1.03]"
                              style={{ imageRendering: "auto" }}
                            />
                          </div>

                          <span className="text-[10px] font-mono text-[#85876A] mt-1">
                            — Page {leftPageIndex + 1} of {totalPages} —
                          </span>
                        </div>

                        {/* CENTER SPINE STITCHING EFFECT (Desktop) */}
                        <div className="hidden md:flex absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-4 z-20 pointer-events-none items-center justify-center">
                          <div className="w-0.5 h-full bg-[#B58A50]/50 shadow-md" />
                          <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-black/25" />
                        </div>

                        {/* RIGHT PAGE */}
                        {rightPage ? (
                          <div className="relative flex flex-col items-center justify-center bg-white p-2 sm:p-3 group">
                            {/* Inner spine shadow on left edge of right page */}
                            <div className="hidden md:block absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-black/15 to-transparent pointer-events-none z-10" />

                            <div className="w-full flex items-center justify-between pb-1.5 mb-1 border-b border-[#B58A50]/20 text-[11px] text-[#A6533C] font-semibold uppercase">
                              <span className="text-[10px] text-[#85876A]">Najafgarh, Delhi</span>
                              <span>Page {rightPageIndex + 1}: {rightPage.category}</span>
                            </div>

                            <div className="relative w-full max-h-[540px] sm:max-h-[620px] flex items-center justify-center overflow-hidden">
                              <Image
                                src={rightPage.image}
                                alt={rightPage.title}
                                width={1371}
                                height={1956}
                                priority
                                quality={100}
                                className="object-contain max-h-[500px] sm:max-h-[580px] w-auto h-auto rounded filter contrast-[1.03]"
                                style={{ imageRendering: "auto" }}
                              />
                            </div>

                            <span className="text-[10px] font-mono text-[#85876A] mt-1">
                              — Page {rightPageIndex + 1} of {totalPages} —
                            </span>
                          </div>
                        ) : (
                          <div className="flex items-center justify-center bg-[#FAF7F2] p-8 text-center text-xs text-[#85876A]">
                            End of Menu Booklet
                          </div>
                        )}
                      </div>
                    </div>
                  ) : (
                    /* SINGLE PAGE VIEW */
                    <div className="max-w-lg w-full bg-white rounded-2xl p-3 shadow-2xl border-2 border-[#B58A50]/40 flex flex-col items-center">
                      <div className="w-full flex items-center justify-between pb-2 mb-2 border-b border-[#B58A50]/20 text-xs text-[#A6533C] font-semibold uppercase">
                        <span>
                          Page {singlePageIndex + 1}: {RESTAURANT_DATA.menuBooklet[singlePageIndex].title}
                        </span>
                        <span className="text-[10px] bg-[#243D32] text-white px-2 py-0.5 rounded font-mono">
                          4K HD
                        </span>
                      </div>

                      <Image
                        src={RESTAURANT_DATA.menuBooklet[singlePageIndex].image}
                        alt={RESTAURANT_DATA.menuBooklet[singlePageIndex].title}
                        width={1371}
                        height={1956}
                        priority
                        quality={100}
                        className="object-contain max-h-[540px] sm:max-h-[620px] w-auto h-auto rounded shadow-sm"
                      />

                      <span className="text-xs font-mono text-[#85876A] mt-2">
                        Page {singlePageIndex + 1} of {totalPages}
                      </span>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              <p className="text-[11px] text-[#85876A] mt-3">
                {layoutMode === "twoPage"
                  ? "Showing 2-Page Open Spread • Use navigation arrows or drag to flip spread"
                  : "Showing Focused Single Page • Drag left/right to flip page"}
              </p>
            </div>
          ) : (
            /* 4K ULTRA HD VECTOR RENDERED TEXT VIEW */
            <div className="w-full h-full max-h-[640px] overflow-y-auto px-2 sm:px-6 py-4">
              <div className="max-w-4xl mx-auto space-y-6">
                <div className="bg-[#243D32] text-white p-5 rounded-2xl border border-[#B58A50]/50 shadow-md flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-[#d4a96a] tracking-widest uppercase">
                      4K Ultra-Crisp Vector Render
                    </span>
                    <h4 className="font-serif text-xl sm:text-2xl font-bold">
                      {layoutMode === "twoPage"
                        ? `${leftPage.title} & ${rightPage?.title || ""}`
                        : RESTAURANT_DATA.menuBooklet[singlePageIndex].title}
                    </h4>
                  </div>
                  <button
                    onClick={() => setViewMode("scan4k")}
                    className="px-3.5 py-1.5 rounded-xl bg-[#B58A50] text-[#192b23] text-xs font-bold uppercase tracking-wider flex items-center gap-1.5"
                  >
                    <BookOpen className="w-4 h-4" />
                    <span>View Scans</span>
                  </button>
                </div>

                {/* Subcategories for both pages if 2-page, or single page */}
                {(layoutMode === "twoPage"
                  ? [leftPage, ...(rightPage ? [rightPage] : [])]
                  : [RESTAURANT_DATA.menuBooklet[singlePageIndex]]
                ).map((pageObj, pIdx) => (
                  <div key={pIdx} className="space-y-4">
                    <div className="flex items-center gap-2 pt-2">
                      <span className="w-6 h-6 rounded-full bg-[#A6533C] text-white flex items-center justify-center font-bold text-xs">
                        {pageObj.pageNumber}
                      </span>
                      <h5 className="font-serif text-lg font-bold text-[#243D32]">
                        {pageObj.title} ({pageObj.category})
                      </h5>
                    </div>

                    {pageObj.subcategories.map((sub, sIdx) => (
                      <div
                        key={sIdx}
                        className="bg-white/90 rounded-2xl p-5 border border-[#B58A50]/25 shadow-sm"
                      >
                        <h6 className="font-serif text-base font-bold text-[#A6533C] mb-3 pb-2 border-b border-[#E7DCCB] flex items-center justify-between">
                          <span>{sub.title}</span>
                          <span className="text-xs text-[#85876A] font-sans font-normal">
                            {sub.items.length} items
                          </span>
                        </h6>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {sub.items.map((item, iIdx) => (
                            <div
                              key={iIdx}
                              className="flex items-start justify-between gap-3 p-3 rounded-xl hover:bg-[#F5F0E7] transition-all border border-transparent hover:border-[#B58A50]/30"
                            >
                              <div className="flex-1">
                                <div className="flex items-center gap-2">
                                  <span className="w-2 h-2 rounded-full bg-emerald-600 shrink-0"></span>
                                  <span className="font-medium text-sm text-[#252522]">
                                    {item.name}
                                  </span>
                                  {item.badge && (
                                    <span className="text-[10px] px-2 py-0.5 rounded-full font-semibold bg-[#A6533C]/10 text-[#A6533C] border border-[#A6533C]/20">
                                      {item.badge}
                                    </span>
                                  )}
                                </div>
                                {item.description && (
                                  <p className="text-xs text-[#85876A] mt-1 pl-4 leading-relaxed">
                                    {item.description}
                                  </p>
                                )}
                              </div>
                              <span className="font-serif font-bold text-sm text-[#243D32] whitespace-nowrap bg-[#E7DCCB]/40 px-2.5 py-1 rounded-lg">
                                {item.price}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Left Arrow */}
          <motion.button
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.9 }}
            onClick={goToPrev}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#243D32]/95 hover:bg-[#A6533C] text-white flex items-center justify-center shadow-xl transition-colors border border-[#B58A50]/50 z-30"
            aria-label="Previous Spread"
            title="Previous (Left Arrow)"
          >
            <ChevronLeft className="w-7 h-7" />
          </motion.button>

          {/* Right Arrow */}
          <motion.button
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.9 }}
            onClick={goToNext}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#243D32]/95 hover:bg-[#A6533C] text-white flex items-center justify-center shadow-xl transition-colors border border-[#B58A50]/50 z-30"
            aria-label="Next Spread"
            title="Next (Right Arrow)"
          >
            <ChevronRight className="w-7 h-7" />
          </motion.button>
        </div>

        {/* Bottom Control Bar & Pagination Dots */}
        <div className="bg-[#E7DCCB]/50 px-4 sm:px-8 py-3.5 border-t border-[#B58A50]/20 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs font-medium text-[#243D32] flex items-center gap-2">
            <span className="font-serif text-sm font-bold text-[#A6533C]">
              {layoutMode === "twoPage"
                ? `Spread ${currentSpread + 1} of ${totalSpreads}`
                : `Page ${singlePageIndex + 1} of ${totalPages}`}
            </span>
            <span className="text-[#85876A]">•</span>
            <span className="text-xs text-[#85876A]">
              12 Pages Complete Menu • 100% Verified Pricing
            </span>
          </div>

          {/* Pagination Dots */}
          <div className="flex items-center gap-1.5 flex-wrap justify-center">
            {layoutMode === "twoPage"
              ? Array.from({ length: totalSpreads }).map((_, idx) => (
                  <motion.button
                    key={idx}
                    onClick={() => goToSpread(idx)}
                    whileHover={{ scale: 1.25 }}
                    className={`transition-all rounded-full ${
                      currentSpread === idx
                        ? "w-8 h-2.5 bg-[#A6533C]"
                        : "w-2.5 h-2.5 bg-[#85876A]/40 hover:bg-[#85876A]"
                    }`}
                    title={`Go to Spread ${idx + 1} (Pages ${idx * 2 + 1} & ${idx * 2 + 2})`}
                  />
                ))
              : RESTAURANT_DATA.menuBooklet.map((_, idx) => (
                  <motion.button
                    key={idx}
                    onClick={() => goToSinglePage(idx)}
                    whileHover={{ scale: 1.25 }}
                    className={`transition-all rounded-full ${
                      singlePageIndex === idx
                        ? "w-8 h-2.5 bg-[#A6533C]"
                        : "w-2.5 h-2.5 bg-[#85876A]/40 hover:bg-[#85876A]"
                    }`}
                    title={`Go to Page ${idx + 1}`}
                  />
                ))}
          </div>

          <div className="flex items-center gap-2">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={goToPrev}
              className="text-xs px-3.5 py-1.5 rounded-lg bg-[#FAF7F2] hover:bg-white text-[#243D32] border border-[#B58A50]/30 font-medium transition-colors"
            >
              Previous Spread
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={goToNext}
              className="text-xs px-3.5 py-1.5 rounded-lg bg-[#243D32] hover:bg-[#192b23] text-white border border-[#B58A50]/30 font-medium transition-colors"
            >
              Next Spread
            </motion.button>
          </div>
        </div>
      </div>

      {/* Quick Spreads Thumbnail Strip */}
      <div className="mt-5 pt-2">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold text-[#243D32] tracking-wider uppercase flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#B58A50]" />
            2-Page Spreads Quick Navigation
          </span>
          <span className="text-xs text-[#85876A]">Click any spread to open</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {Array.from({ length: totalSpreads }).map((_, sIdx) => {
            const pL = RESTAURANT_DATA.menuBooklet[sIdx * 2];
            const pR = RESTAURANT_DATA.menuBooklet[sIdx * 2 + 1];
            const isActive = currentSpread === sIdx;
            return (
              <motion.button
                key={sIdx}
                onClick={() => goToSpread(sIdx)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`group flex flex-col items-center rounded-2xl overflow-hidden p-1.5 transition-all border-2 ${
                  isActive
                    ? "border-[#A6533C] bg-white shadow-lg ring-2 ring-[#B58A50]/40"
                    : "border-transparent bg-[#FAF7F2] hover:border-[#B58A50]/40 opacity-80 hover:opacity-100"
                }`}
                title={`Spread ${sIdx + 1}: ${pL.title}`}
              >
                {/* Side by side mini previews */}
                <div className="w-full flex gap-1 h-20 rounded-lg overflow-hidden bg-[#243D32] p-1">
                  <div className="relative flex-1 h-full rounded overflow-hidden bg-white">
                    <Image src={pL.image} alt={pL.title} fill sizes="80px" className="object-cover" />
                  </div>
                  {pR && (
                    <div className="relative flex-1 h-full rounded overflow-hidden bg-white">
                      <Image src={pR.image} alt={pR.title} fill sizes="80px" className="object-cover" />
                    </div>
                  )}
                </div>
                <div className="mt-1 text-center w-full">
                  <span className="text-[11px] font-bold text-[#243D32] block">
                    Spread {sIdx + 1}
                  </span>
                  <span className="text-[9px] text-[#85876A] truncate block">
                    P.{sIdx * 2 + 1} & P.{sIdx * 2 + 2}
                  </span>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* FULLSCREEN 4K ULTRA HD LIGHTBOX */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 text-white"
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between border-b border-white/20 pb-4">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-[#B58A50] text-[#192b23] font-bold text-xs uppercase">
                  {layoutMode === "twoPage"
                    ? `Spread ${currentSpread + 1}: Pages ${leftPageIndex + 1} & ${rightPageIndex + 1}`
                    : `Page ${singlePageIndex + 1}`}
                </span>
                <div>
                  <h4 className="font-serif text-lg sm:text-xl font-bold text-white">
                    {layoutMode === "twoPage"
                      ? `${leftPage.title} • ${rightPage?.title || ""}`
                      : RESTAURANT_DATA.menuBooklet[singlePageIndex].title}
                  </h4>
                  <p className="text-xs text-[#E7DCCB]/80">4K Ultra HD Authentic Restaurant Scan</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                {/* Fullscreen Zoom */}
                <div className="flex items-center gap-1 bg-white/10 rounded-lg p-1 border border-white/20">
                  <button
                    onClick={handleZoomOut}
                    disabled={zoomLevel <= 1}
                    className="p-1.5 hover:text-[#B58A50] disabled:opacity-30"
                    title="Zoom Out"
                  >
                    <ZoomOut className="w-4 h-4" />
                  </button>
                  <button onClick={handleZoomReset} className="px-2 text-xs font-mono" title="Reset">
                    {Math.round(zoomLevel * 100)}%
                  </button>
                  <button
                    onClick={handleZoomIn}
                    disabled={zoomLevel >= 3}
                    className="p-1.5 hover:text-[#B58A50] disabled:opacity-30"
                    title="Zoom In"
                  >
                    <ZoomIn className="w-4 h-4" />
                  </button>
                </div>

                <button
                  onClick={() => setLayoutMode(layoutMode === "twoPage" ? "singlePage" : "twoPage")}
                  className="px-3 py-1.5 rounded-lg bg-white/15 hover:bg-white/25 text-xs text-white"
                >
                  {layoutMode === "twoPage" ? "Single Page View" : "2-Page Spread View"}
                </button>

                <button
                  onClick={() => {
                    setIsFullscreen(false);
                    setZoomLevel(1);
                  }}
                  className="p-2 rounded-xl bg-white/15 hover:bg-[#A6533C] text-white transition-colors"
                  title="Close Fullscreen (Esc)"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Center Container in Fullscreen */}
            <div className="flex-1 relative flex items-center justify-center overflow-auto my-4">
              <motion.div
                key={`fullscreen-${currentSpread}-${layoutMode}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
                className="relative flex items-center justify-center"
                style={{
                  transform: `scale(${zoomLevel})`,
                }}
              >
                {layoutMode === "twoPage" ? (
                  <div className="flex flex-col md:flex-row items-center gap-4 max-h-[75vh]">
                    <Image
                      src={leftPage.image}
                      alt={leftPage.title}
                      width={1371}
                      height={1956}
                      quality={100}
                      className="object-contain max-h-[70vh] w-auto h-auto rounded-lg shadow-2xl border border-white/20"
                    />
                    {rightPage && (
                      <Image
                        src={rightPage.image}
                        alt={rightPage.title}
                        width={1371}
                        height={1956}
                        quality={100}
                        className="object-contain max-h-[70vh] w-auto h-auto rounded-lg shadow-2xl border border-white/20"
                      />
                    )}
                  </div>
                ) : (
                  <Image
                    src={RESTAURANT_DATA.menuBooklet[singlePageIndex].image}
                    alt={RESTAURANT_DATA.menuBooklet[singlePageIndex].title}
                    width={1371}
                    height={1956}
                    quality={100}
                    className="object-contain max-h-[75vh] w-auto h-auto rounded-xl shadow-2xl border border-white/20"
                  />
                )}
              </motion.div>

              {/* Left Nav */}
              <motion.button
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                onClick={goToPrev}
                className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 hover:bg-[#A6533C] text-white flex items-center justify-center transition-all backdrop-blur-sm"
              >
                <ChevronLeft className="w-7 h-7" />
              </motion.button>

              {/* Right Nav */}
              <motion.button
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                onClick={goToNext}
                className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 hover:bg-[#A6533C] text-white flex items-center justify-center transition-all backdrop-blur-sm"
              >
                <ChevronRight className="w-7 h-7" />
              </motion.button>
            </div>

            {/* Bottom Info */}
            <div className="flex items-center justify-between border-t border-white/20 pt-4 text-xs text-white/70">
              <span>
                Use Left/Right arrow keys to flip spread • Zoom up to 300% for 4K detail
              </span>
              <div className="flex items-center gap-2">
                <button onClick={goToPrev} className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white">
                  Previous Spread
                </button>
                <button
                  onClick={goToNext}
                  className="px-3 py-1.5 rounded-lg bg-[#B58A50] hover:bg-[#d4a96a] text-[#192b23] font-bold"
                >
                  Next Spread
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
