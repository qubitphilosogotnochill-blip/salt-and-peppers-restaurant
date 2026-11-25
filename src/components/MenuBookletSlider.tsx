"use client";

import { useState, useEffect, useRef, useCallback, useSyncExternalStore } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  ZoomIn,
  ZoomOut,
  Columns,
  Square,
  Sparkles,
  X,
  List,
  LogOut,
} from "lucide-react";
import { RESTAURANT_DATA } from "@/data/restaurantData";
import EmbossedLogo from "@/components/EmbossedLogo";

interface MenuBookletSliderProps {
  initialSpreadIndex?: number;
  showEmbossedLogo?: boolean;
  exitHref?: string;
}

const MOBILE_MEDIA_QUERY = "(max-width: 767px)";

function subscribeIsMobile(callback: () => void) {
  const mq = window.matchMedia(MOBILE_MEDIA_QUERY);
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

function getIsMobileSnapshot() {
  return window.matchMedia(MOBILE_MEDIA_QUERY).matches;
}

function getIsMobileServerSnapshot() {
  return false;
}

export default function MenuBookletSlider({
  initialSpreadIndex = 0,
  showEmbossedLogo = true,
  exitHref,
}: MenuBookletSliderProps) {
  // Automatically adapt default mode: 1-Page focused reader on phones (<768px), 2-Page open book spread on tabs & laptops
  const isMobileViewport = useSyncExternalStore(
    subscribeIsMobile,
    getIsMobileSnapshot,
    getIsMobileServerSnapshot
  );
  const [manualLayoutMode, setManualLayoutMode] = useState<"twoPage" | "singlePage" | null>(null);
  const layoutMode = manualLayoutMode ?? (isMobileViewport ? "singlePage" : "twoPage");

  // 6 two-page spreads: 0 = (p1, p2), 1 = (p3, p4), 2 = (p5, p6), 3 = (p7, p8), 4 = (p9, p10), 5 = (p11, p12)
  const [currentSpread, setCurrentSpread] = useState(initialSpreadIndex);
  const [singlePageIndex, setSinglePageIndex] = useState(initialSpreadIndex * 2);
  const [direction, setDirection] = useState<number>(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [viewMode, setViewMode] = useState<"scan4k" | "details">("scan4k");

  const containerRef = useRef<HTMLDivElement>(null);
  const totalPages = RESTAURANT_DATA.menuBooklet.length; // 12
  const totalSpreads = Math.ceil(totalPages / 2); // 6

  const activeSpread = layoutMode === "twoPage" ? currentSpread : Math.floor(singlePageIndex / 2);
  const leftPageIndex = currentSpread * 2;
  const rightPageIndex = currentSpread * 2 + 1;
  const leftPage = RESTAURANT_DATA.menuBooklet[leftPageIndex];
  const rightPage = rightPageIndex < totalPages ? RESTAURANT_DATA.menuBooklet[rightPageIndex] : null;
  const activeSinglePage = RESTAURANT_DATA.menuBooklet[singlePageIndex];

  const goToNext = useCallback(() => {
    setDirection(1);
    if (layoutMode === "twoPage") {
      const nextSpread = (currentSpread + 1) % totalSpreads;
      setCurrentSpread(nextSpread);
      setSinglePageIndex(nextSpread * 2);
    } else {
      const nextPage = (singlePageIndex + 1) % totalPages;
      setSinglePageIndex(nextPage);
      setCurrentSpread(Math.floor(nextPage / 2));
    }
    setZoomLevel(1);
  }, [layoutMode, currentSpread, singlePageIndex, totalSpreads, totalPages]);

  const goToPrev = useCallback(() => {
    setDirection(-1);
    if (layoutMode === "twoPage") {
      const prevSpread = (currentSpread - 1 + totalSpreads) % totalSpreads;
      setCurrentSpread(prevSpread);
      setSinglePageIndex(prevSpread * 2);
    } else {
      const prevPage = (singlePageIndex - 1 + totalPages) % totalPages;
      setSinglePageIndex(prevPage);
      setCurrentSpread(Math.floor(prevPage / 2));
    }
    setZoomLevel(1);
  }, [layoutMode, currentSpread, singlePageIndex, totalSpreads, totalPages]);

  const goToSpread = (spreadIdx: number) => {
    setDirection(spreadIdx >= activeSpread ? 1 : -1);
    setCurrentSpread(spreadIdx);
    setSinglePageIndex(spreadIdx * 2);
    setZoomLevel(1);
  };

  const goToSinglePage = (pageIdx: number) => {
    setDirection(pageIdx >= singlePageIndex ? 1 : -1);
    setSinglePageIndex(pageIdx);
    setCurrentSpread(Math.floor(pageIdx / 2));
    setZoomLevel(1);
  };

  const handleLayoutToggle = (mode: "twoPage" | "singlePage") => {
    setManualLayoutMode(mode);
    setZoomLevel(1);
    if (mode === "twoPage") {
      setCurrentSpread(Math.floor(singlePageIndex / 2));
    } else {
      setSinglePageIndex(currentSpread * 2);
    }
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
        <div className="mb-8 sm:mb-10 flex flex-col items-center justify-center">
          <EmbossedLogo size="lg" variant="gold" showTagline={true} />
        </div>
      )}

      {/* Control Bar: Mode Toggles & Fast Category Jumping */}
      <div className="mb-5 sm:mb-6 flex flex-col lg:flex-row lg:items-center justify-between gap-3 sm:gap-4">
        {/* Category Jumping Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto md:flex-wrap pb-2 lg:pb-0 snap-x scrollbar-none w-full lg:w-auto">
          {[
            { label: "Starters & Chinese", spread: 0 },
            { label: "Combos & Momos", spread: 1 },
            { label: "Pizza, Burger & Pasta", spread: 2 },
            { label: "Indian Curries & Breads", spread: 3 },
            { label: "Thali & South Indian", spread: 4 },
            { label: "Mocktails & Ice Cream", spread: 5 },
          ].map((cat) => {
            const isActive = activeSpread === cat.spread;
            return (
              <motion.button
                key={cat.label}
                onClick={() => goToSpread(cat.spread)}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className={`relative text-[11px] sm:text-xs px-3 sm:px-3.5 py-1.5 rounded-full whitespace-nowrap snap-start transition-colors font-medium shrink-0 ${isActive
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
        <div className="flex flex-wrap items-center justify-center sm:justify-end gap-1.5 sm:gap-2 bg-[#E7DCCB]/70 p-1 rounded-xl w-full sm:w-auto sm:self-end lg:self-auto shrink-0">
          {/* 2-Page View Button */}
          <button
            onClick={() => handleLayoutToggle("twoPage")}
            className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 text-[11px] sm:text-xs px-2.5 sm:px-3 py-1.5 rounded-lg transition-all font-medium ${layoutMode === "twoPage"
              ? "bg-[#243D32] text-[#F5F0E7] shadow-sm"
              : "text-[#252522] hover:text-[#243D32]"
              }`}
            title="Open Book 2-Page Spread View"
          >
            <Columns className="w-3.5 h-3.5 shrink-0" />
            <span className="hidden sm:inline">2-Page Spread</span>
            <span className="sm:hidden">2-Page</span>
          </button>

          {/* 1-Page View Button */}
          <button
            onClick={() => handleLayoutToggle("singlePage")}
            className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 text-[11px] sm:text-xs px-2.5 sm:px-3 py-1.5 rounded-lg transition-all font-medium ${layoutMode === "singlePage"
              ? "bg-[#243D32] text-[#F5F0E7] shadow-sm"
              : "text-[#252522] hover:text-[#243D32]"
              }`}
            title="Single Page Focused View"
          >
            <Square className="w-3.5 h-3.5 shrink-0" />
            <span className="hidden sm:inline">Single Page</span>
            <span className="sm:hidden">1-Page</span>
          </button>

          {/* 4K HD Text Toggle */}
          <button
            onClick={() => setViewMode(viewMode === "scan4k" ? "details" : "scan4k")}
            className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 text-[11px] sm:text-xs px-2.5 sm:px-3 py-1.5 rounded-lg transition-all font-medium border whitespace-nowrap ${viewMode === "details"
              ? "bg-[#A6533C] text-white border-[#A6533C] shadow-sm"
              : "bg-white text-[#243D32] border-[#B58A50]/40 hover:bg-[#FAF7F2]"
              }`}
            title="Toggle Parsed Ultra HD Text"
          >
            <List className={`w-3.5 h-3.5 shrink-0 ${viewMode === "details" ? "text-white" : "text-[#B58A50]"}`} />
            <span className="font-bold">HD Text</span>
          </button>
        </div>
      </div>

      {/* Main Open Booklet Outer Frame */}
      <div className="bg-[#FAF7F2] rounded-2xl sm:rounded-3xl border-2 border-[#B58A50]/45 shadow-2xl shadow-[#243D32]/15 overflow-hidden transition-all">
        {/* Top Header of Booklet Frame */}
        <div className="bg-[#243D32] text-[#F5F0E7] px-3 sm:px-6 lg:px-8 py-3 sm:py-3.5 flex flex-wrap items-center justify-between gap-2 border-b border-[#B58A50]/30">
          <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
            <span className="px-2.5 sm:px-3 py-1 rounded-full bg-[#192b23] border border-[#B58A50]/70 text-[11px] sm:text-xs text-[#B58A50] font-bold shadow-inner whitespace-nowrap shrink-0">
              {layoutMode === "twoPage"
                ? `Pages ${leftPageIndex + 1} & ${rightPageIndex + 1}`
                : `Page ${singlePageIndex + 1}/${totalPages}`}
            </span>
            <div className="min-w-0">
              <h3 className="font-serif text-xs sm:text-base font-bold text-[#F5F0E7] leading-tight truncate">
                {layoutMode === "twoPage"
                  ? `${leftPage.category}${rightPage ? ` • ${rightPage.category}` : ""}`
                  : activeSinglePage.title}
              </h3>
              <p className="hidden sm:block text-[11px] sm:text-xs text-[#B58A50] tracking-wider">
                Ultra HD 4K Original Restaurant Menu Scans
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* Zoom Controls */}
            <div className="flex items-center gap-0.5 sm:gap-1 bg-[#192b23] rounded-lg p-0.5 border border-[#B58A50]/30 text-xs">
              <button
                onClick={handleZoomOut}
                disabled={zoomLevel <= 1}
                className="p-1 sm:p-1.5 hover:text-[#B58A50] disabled:opacity-40 transition-colors"
                title="Zoom Out"
                aria-label="Zoom Out"
              >
                <ZoomOut className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={handleZoomReset}
                className="px-1.5 sm:px-2 py-0.5 text-[10px] sm:text-[11px] font-mono text-[#B58A50] hover:text-white"
                title="Reset Zoom"
              >
                {Math.round(zoomLevel * 100)}%
              </button>
              <button
                onClick={handleZoomIn}
                disabled={zoomLevel >= 3}
                className="p-1 sm:p-1.5 hover:text-[#B58A50] disabled:opacity-40 transition-colors"
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
              className="p-1.5 sm:p-2 rounded-lg bg-[#192b23] hover:bg-[#A6533C] text-[#F5F0E7] border border-[#B58A50]/30 transition-all text-xs flex items-center gap-1.5"
              title="Open Fullscreen 4K Viewer"
              aria-label="Open Fullscreen Menu"
            >
              <Maximize2 className="w-4 h-4" />
              <span className="hidden md:inline">Fullscreen</span>
            </motion.button>

            {/* Exit Menu Button (when on /menu page or zoomed/HD text active) */}
            {(exitHref || viewMode === "details" || zoomLevel > 1) && (
              exitHref && viewMode === "scan4k" && zoomLevel === 1 ? (
                <Link
                  href={exitHref}
                  className="px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg bg-[#A6533C] hover:bg-[#ba644c] text-white border border-[#B58A50]/40 transition-all text-xs font-semibold flex items-center gap-1.5 shadow-sm"
                  title="Exit Menu"
                  aria-label="Exit Menu"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>Exit</span>
                </Link>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    if (viewMode === "details") setViewMode("scan4k");
                    if (zoomLevel > 1) setZoomLevel(1);
                  }}
                  className="px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg bg-[#A6533C] hover:bg-[#ba644c] text-white border border-[#B58A50]/40 transition-all text-xs font-semibold flex items-center gap-1.5 shadow-sm"
                  title={viewMode === "details" ? "Exit HD Text View" : "Exit Zoom"}
                  aria-label="Exit Current Menu Mode"
                >
                  <X className="w-3.5 h-3.5" />
                  <span>Exit</span>
                </button>
              )
            )}
          </div>
        </div>

        {/* 2-PAGE SPREAD / BOOKLET DISPLAY CONTAINER */}
        <div
          className={`relative min-h-[380px] sm:min-h-[540px] lg:min-h-[620px] flex items-center justify-center p-2 sm:p-5 lg:p-6 bg-gradient-to-b from-[#FAF7F2] via-[#F4EFE6] to-[#EAE0D0] select-none ${
            zoomLevel > 1 ? "overflow-auto touch-pan-x touch-pan-y" : "overflow-x-hidden"
          }`}
          style={{ perspective: "1500px" }}
        >
          {viewMode === "scan4k" ? (
            /* 4K SCANNED BOOKLET SPREAD VIEW */
            <div className="w-full flex flex-col items-center justify-center">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={layoutMode === "twoPage" ? `spread-${currentSpread}` : `single-${singlePageIndex}`}
                  custom={direction}
                  variants={spreadVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  drag={zoomLevel === 1 ? "x" : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={(_, info) => {
                    if (info.offset.x < -50) goToNext();
                    else if (info.offset.x > 50) goToPrev();
                  }}
                  className={`w-full flex items-center justify-center ${
                    zoomLevel === 1 ? "cursor-grab active:cursor-grabbing" : ""
                  }`}
                  style={{
                    transform: `scale(${zoomLevel})`,
                    transformOrigin: zoomLevel > 1 ? "top center" : "center center",
                    transformStyle: "preserve-3d",
                  }}
                >
                  {layoutMode === "twoPage" ? (
                    /* 2-PAGE OPEN BOOK SPREAD (Side by Side on Tabs/Laptops, Clean Stack on Mobile if Chosen) */
                    <div className="w-full max-w-5xl bg-[#192b23] rounded-xl sm:rounded-2xl p-1.5 sm:p-3 shadow-2xl border-2 sm:border-4 border-[#B58A50]/50 relative">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 relative bg-white rounded-lg sm:rounded-xl overflow-hidden shadow-inner">
                        {/* LEFT PAGE */}
                        <div className="relative flex flex-col items-center justify-center bg-white border-b md:border-b-0 md:border-r border-[#E7DCCB] p-2 sm:p-3 group">
                          {/* Inner spine shadow on right edge of left page */}
                          <div className="hidden md:block absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-black/15 to-transparent pointer-events-none z-10" />

                          <div className="w-full flex items-center justify-between pb-1.5 mb-1 border-b border-[#B58A50]/20 text-[10px] sm:text-[11px] text-[#A6533C] font-semibold uppercase">
                            <span className="truncate pr-2">Page {leftPageIndex + 1}: {leftPage.category}</span>
                            <span className="text-[9px] sm:text-[10px] text-[#85876A] shrink-0">Salt and Peppers</span>
                          </div>

                          <div className="relative w-full flex items-center justify-center overflow-hidden">
                            <Image
                              src={leftPage.image}
                              alt={leftPage.title}
                              width={1371}
                              height={1956}
                              loading="eager"
                              quality={100}
                              className="object-contain max-h-[65vh] sm:max-h-[540px] lg:max-h-[580px] w-auto h-auto rounded filter contrast-[1.03]"
                            />
                          </div>

                          <span className="text-[10px] font-mono text-[#85876A] mt-1">
                            — Page {leftPageIndex + 1} of {totalPages} —
                          </span>
                        </div>

                        {/* CENTER SPINE STITCHING EFFECT (Tablet & Desktop) */}
                        <div className="hidden md:flex absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-4 z-20 pointer-events-none items-center justify-center">
                          <div className="w-0.5 h-full bg-[#B58A50]/50 shadow-md" />
                          <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-black/25" />
                        </div>

                        {/* RIGHT PAGE */}
                        {rightPage ? (
                          <div className="relative flex flex-col items-center justify-center bg-white p-2 sm:p-3 group">
                            {/* Inner spine shadow on left edge of right page */}
                            <div className="hidden md:block absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-black/15 to-transparent pointer-events-none z-10" />

                            <div className="w-full flex items-center justify-between pb-1.5 mb-1 border-b border-[#B58A50]/20 text-[10px] sm:text-[11px] text-[#A6533C] font-semibold uppercase">
                              <span className="text-[9px] sm:text-[10px] text-[#85876A] shrink-0">Najafgarh, Delhi</span>
                              <span className="truncate pl-2">Page {rightPageIndex + 1}: {rightPage.category}</span>
                            </div>

                            <div className="relative w-full flex items-center justify-center overflow-hidden">
                              <Image
                                src={rightPage.image}
                                alt={rightPage.title}
                                width={1371}
                                height={1956}
                                loading="eager"
                                quality={100}
                                className="object-contain max-h-[65vh] sm:max-h-[540px] lg:max-h-[580px] w-auto h-auto rounded filter contrast-[1.03]"
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
                    /* SINGLE PAGE FOCUSED VIEW (Default on Phones, Selectable on Tabs/Laptops) */
                    <div className="max-w-lg w-full bg-white rounded-xl sm:rounded-2xl p-2 sm:p-3 shadow-2xl border-2 border-[#B58A50]/40 flex flex-col items-center">
                      <div className="w-full flex items-center justify-between gap-2 pb-1.5 sm:pb-2 mb-1.5 sm:mb-2 border-b border-[#B58A50]/20 text-[11px] sm:text-xs text-[#A6533C] font-semibold uppercase">
                        <span className="truncate">
                          Page {singlePageIndex + 1}: {activeSinglePage.title}
                        </span>
                        <span className="text-[9px] sm:text-[10px] bg-[#243D32] text-white px-2 py-0.5 rounded font-mono shrink-0">
                          4K HD
                        </span>
                      </div>

                      <Image
                        src={activeSinglePage.image}
                        alt={activeSinglePage.title}
                        width={1371}
                        height={1956}
                        loading="eager"
                        quality={100}
                        className="object-contain max-h-[68vh] sm:max-h-[600px] w-auto h-auto rounded shadow-sm"
                      />

                      <span className="text-[11px] sm:text-xs font-mono text-[#85876A] mt-2">
                        Page {singlePageIndex + 1} of {totalPages}
                      </span>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              <p className="text-[11px] text-[#85876A] mt-3 text-center px-2">
                {layoutMode === "twoPage"
                  ? "Showing 2-Page Open Spread • Use arrows or drag horizontally to flip"
                  : "Focused Page View • Swipe left or right to turn pages"}
              </p>
            </div>
          ) : (
            /* 4K ULTRA HD VECTOR RENDERED TEXT VIEW */
            <div className="w-full max-h-[600px] sm:max-h-[640px] overflow-y-auto px-1 sm:px-6 py-2 sm:py-4">
              <div className="max-w-4xl mx-auto space-y-5 sm:space-y-6">
                <div className="bg-[#243D32] text-white p-4 sm:p-5 rounded-2xl border border-[#B58A50]/50 shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <span className="text-[11px] sm:text-xs font-bold text-[#d4a96a] tracking-widest uppercase">
                      4K Ultra-Crisp Digital Menu
                    </span>
                    <h4 className="font-serif text-lg sm:text-2xl font-bold">
                      {layoutMode === "twoPage"
                        ? `${leftPage.title}${rightPage ? ` & ${rightPage.title}` : ""}`
                        : activeSinglePage.title}
                    </h4>
                  </div>
                  <button
                    onClick={() => setViewMode("scan4k")}
                    className="self-start sm:self-auto px-3.5 py-1.5 rounded-xl bg-[#A6533C] hover:bg-[#ba644c] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shrink-0 transition-colors"
                  >
                    <X className="w-4 h-4" />
                    <span>Exit Text View</span>
                  </button>
                </div>

                {/* Subcategories for both pages if 2-page, or single page */}
                {(layoutMode === "twoPage"
                  ? [leftPage, ...(rightPage ? [rightPage] : [])]
                  : [activeSinglePage]
                ).map((pageObj, pIdx) => (
                  <div key={pIdx} className="space-y-4">
                    <div className="flex items-center gap-2 pt-2">
                      <span className="w-6 h-6 rounded-full bg-[#A6533C] text-white flex items-center justify-center font-bold text-xs shrink-0">
                        {pageObj.pageNumber}
                      </span>
                      <h5 className="font-serif text-base sm:text-lg font-bold text-[#243D32]">
                        {pageObj.title} ({pageObj.category})
                      </h5>
                    </div>

                    {pageObj.subcategories.map((sub, sIdx) => (
                      <div
                        key={sIdx}
                        className="bg-white/90 rounded-2xl p-4 sm:p-5 border border-[#B58A50]/25 shadow-sm"
                      >
                        <h6 className="font-serif text-base font-bold text-[#A6533C] mb-3 pb-2 border-b border-[#E7DCCB] flex items-center justify-between gap-2">
                          <span>{sub.title}</span>
                          <span className="text-xs text-[#85876A] font-sans font-normal shrink-0">
                            {sub.items.length} items
                          </span>
                        </h6>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 sm:gap-3">
                          {sub.items.map((item, iIdx) => (
                            <div
                              key={iIdx}
                              className="flex items-start justify-between gap-3 p-2.5 sm:p-3 rounded-xl hover:bg-[#F5F0E7] transition-all border border-transparent hover:border-[#B58A50]/30"
                            >
                              <div className="flex-1 min-w-0">
                                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
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
                              <span className="font-serif font-bold text-sm text-[#243D32] whitespace-nowrap bg-[#E7DCCB]/40 px-2.5 py-1 rounded-lg shrink-0">
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
            className="absolute left-1.5 sm:left-3 lg:left-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-full bg-[#243D32]/85 hover:bg-[#A6533C] text-white flex items-center justify-center shadow-xl transition-colors border border-[#B58A50]/50 z-30 backdrop-blur-sm"
            aria-label="Previous Menu View"
            title="Previous (Left Arrow)"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
          </motion.button>

          {/* Right Arrow */}
          <motion.button
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.9 }}
            onClick={goToNext}
            className="absolute right-1.5 sm:right-3 lg:right-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-full bg-[#243D32]/85 hover:bg-[#A6533C] text-white flex items-center justify-center shadow-xl transition-colors border border-[#B58A50]/50 z-30 backdrop-blur-sm"
            aria-label="Next Menu View"
            title="Next (Right Arrow)"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
          </motion.button>
        </div>

        {/* Bottom Control Bar & Pagination Dots */}
        <div className="bg-[#E7DCCB]/50 px-3 sm:px-6 lg:px-8 py-3.5 border-t border-[#B58A50]/20 flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="text-xs font-medium text-[#243D32] flex items-center gap-2">
            <span className="font-serif text-sm font-bold text-[#A6533C]">
              {layoutMode === "twoPage"
                ? `Spread ${currentSpread + 1} of ${totalSpreads}`
                : `Page ${singlePageIndex + 1} of ${totalPages}`}
            </span>
            <span className="text-[#85876A]">•</span>
            <span className="text-xs text-[#85876A]">
              12 Pages • Verified Pricing
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
                  aria-label={`Go to Spread ${idx + 1}`}
                  className={`transition-all rounded-full ${currentSpread === idx
                    ? "w-7 sm:w-8 h-2.5 bg-[#A6533C]"
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
                  aria-label={`Go to Page ${idx + 1}`}
                  className={`transition-all rounded-full ${singlePageIndex === idx
                    ? "w-6 sm:w-8 h-2.5 bg-[#A6533C]"
                    : "w-2 h-2 sm:w-2.5 sm:h-2.5 bg-[#85876A]/40 hover:bg-[#85876A]"
                    }`}
                  title={`Go to Page ${idx + 1}`}
                />
              ))}
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto justify-center">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={goToPrev}
              className="flex-1 sm:flex-initial text-xs px-3.5 py-2 sm:py-1.5 rounded-lg bg-[#FAF7F2] hover:bg-white text-[#243D32] border border-[#B58A50]/30 font-medium transition-colors"
            >
              {layoutMode === "twoPage" ? "Previous Spread" : "Previous Page"}
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={goToNext}
              className="flex-1 sm:flex-initial text-xs px-3.5 py-2 sm:py-1.5 rounded-lg bg-[#243D32] hover:bg-[#192b23] text-white border border-[#B58A50]/30 font-medium transition-colors"
            >
              {layoutMode === "twoPage" ? "Next Spread" : "Next Page"}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Quick Spreads Thumbnail Strip */}
      <div className="mt-5 pt-2">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[11px] sm:text-xs font-semibold text-[#243D32] tracking-wider uppercase flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#B58A50]" />
            Menu Sections Quick Navigation
          </span>
          <span className="text-[11px] sm:text-xs text-[#85876A]">Tap to jump</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3">
          {Array.from({ length: totalSpreads }).map((_, sIdx) => {
            const pL = RESTAURANT_DATA.menuBooklet[sIdx * 2];
            const pR = RESTAURANT_DATA.menuBooklet[sIdx * 2 + 1];
            const isActive = activeSpread === sIdx;
            return (
              <motion.button
                key={sIdx}
                onClick={() => goToSpread(sIdx)}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`group flex flex-col items-center rounded-2xl overflow-hidden p-1.5 transition-all border-2 ${isActive
                  ? "border-[#A6533C] bg-white shadow-lg ring-2 ring-[#B58A50]/40"
                  : "border-transparent bg-[#FAF7F2] hover:border-[#B58A50]/40 opacity-85 hover:opacity-100"
                  }`}
                title={`Spread ${sIdx + 1}: ${pL.title}`}
              >
                {/* Side by side mini previews */}
                <div className="w-full flex gap-1 h-16 sm:h-20 rounded-lg overflow-hidden bg-[#243D32] p-1">
                  <div className="relative flex-1 h-full rounded overflow-hidden bg-white">
                    <Image src={pL.image} alt={pL.title} fill sizes="90px" className="object-cover" />
                  </div>
                  {pR && (
                    <div className="relative flex-1 h-full rounded overflow-hidden bg-white">
                      <Image src={pR.image} alt={pR.title} fill sizes="90px" className="object-cover" />
                    </div>
                  )}
                </div>
                <div className="mt-1 text-center w-full px-1">
                  <span className="text-[11px] font-bold text-[#243D32] block truncate">
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
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-3 sm:p-6 text-white"
          >
            {/* Top Bar (Mobile-safe wrapping) */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 border-b border-white/20 pb-3 sm:pb-4">
              <div className="flex items-center justify-between sm:justify-start gap-2.5 min-w-0">
                <div className="flex items-center gap-2.5 min-w-0">
                  <span className="px-2.5 sm:px-3 py-1 rounded-full bg-[#B58A50] text-[#192b23] font-bold text-[10px] sm:text-xs uppercase shrink-0">
                    {layoutMode === "twoPage"
                      ? `Spread ${currentSpread + 1}`
                      : `Page ${singlePageIndex + 1}/${totalPages}`}
                  </span>
                  <div className="min-w-0">
                    <h4 className="font-serif text-sm sm:text-xl font-bold text-white truncate">
                      {layoutMode === "twoPage"
                        ? `${leftPage.title}${rightPage ? ` • ${rightPage.title}` : ""}`
                        : activeSinglePage.title}
                    </h4>
                    <p className="text-[10px] sm:text-xs text-[#E7DCCB]/80 truncate">
                      4K Ultra HD Authentic Restaurant Scan
                    </p>
                  </div>
                </div>

                {/* Exit button on mobile top-right */}
                <button
                  onClick={() => {
                    setIsFullscreen(false);
                    setZoomLevel(1);
                  }}
                  className="sm:hidden px-3 py-1.5 rounded-xl bg-[#A6533C] hover:bg-[#ba644c] text-white text-xs font-bold flex items-center gap-1 transition-colors shrink-0 shadow-md"
                  aria-label="Exit Fullscreen Menu"
                >
                  <X className="w-4 h-4" />
                  <span>Exit</span>
                </button>
              </div>

              <div className="flex items-center justify-between sm:justify-end gap-2 sm:gap-3 shrink-0">
                {/* Fullscreen Zoom */}
                <div className="flex items-center gap-1 bg-white/10 rounded-lg p-1 border border-white/20">
                  <button
                    onClick={handleZoomOut}
                    disabled={zoomLevel <= 1}
                    className="p-1 sm:p-1.5 hover:text-[#B58A50] disabled:opacity-30"
                    title="Zoom Out"
                    aria-label="Zoom Out"
                  >
                    <ZoomOut className="w-4 h-4" />
                  </button>
                  <button onClick={handleZoomReset} className="px-2 text-xs font-mono" title="Reset">
                    {Math.round(zoomLevel * 100)}%
                  </button>
                  <button
                    onClick={handleZoomIn}
                    disabled={zoomLevel >= 3}
                    className="p-1 sm:p-1.5 hover:text-[#B58A50] disabled:opacity-30"
                    title="Zoom In"
                    aria-label="Zoom In"
                  >
                    <ZoomIn className="w-4 h-4" />
                  </button>
                </div>

                <button
                  onClick={() => handleLayoutToggle(layoutMode === "twoPage" ? "singlePage" : "twoPage")}
                  className="px-2.5 sm:px-3 py-1.5 rounded-lg bg-white/15 hover:bg-white/25 text-xs text-white whitespace-nowrap"
                >
                  {layoutMode === "twoPage" ? "1-Page View" : "2-Page Spread"}
                </button>

                <button
                  onClick={() => {
                    setIsFullscreen(false);
                    setZoomLevel(1);
                  }}
                  className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#A6533C] hover:bg-[#ba644c] text-white text-xs font-bold tracking-wide transition-colors shadow-md"
                  title="Exit Fullscreen (Esc)"
                  aria-label="Exit Fullscreen Menu"
                >
                  <X className="w-4 h-4" />
                  <span>Exit Menu</span>
                </button>
              </div>
            </div>

            {/* Center Container in Fullscreen */}
            <div className="flex-1 relative flex items-center justify-center overflow-auto touch-pan-x touch-pan-y my-2 sm:my-4">
              <motion.div
                key={`fullscreen-${layoutMode === "twoPage" ? currentSpread : singlePageIndex}-${layoutMode}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
                drag={zoomLevel === 1 ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -50) goToNext();
                  else if (info.offset.x > 50) goToPrev();
                }}
                className="relative flex items-center justify-center"
                style={{
                  transform: `scale(${zoomLevel})`,
                  transformOrigin: zoomLevel > 1 ? "top center" : "center center",
                }}
              >
                {layoutMode === "twoPage" ? (
                  <div className="flex flex-col md:flex-row items-center gap-3 sm:gap-4 max-h-full">
                    <Image
                      src={leftPage.image}
                      alt={leftPage.title}
                      width={1371}
                      height={1956}
                      quality={100}
                      className="object-contain max-h-[64vh] md:max-h-[72vh] w-auto h-auto rounded-lg shadow-2xl border border-white/20"
                    />
                    {rightPage && (
                      <Image
                        src={rightPage.image}
                        alt={rightPage.title}
                        width={1371}
                        height={1956}
                        quality={100}
                        className="object-contain max-h-[64vh] md:max-h-[72vh] w-auto h-auto rounded-lg shadow-2xl border border-white/20"
                      />
                    )}
                  </div>
                ) : (
                  <Image
                    src={activeSinglePage.image}
                    alt={activeSinglePage.title}
                    width={1371}
                    height={1956}
                    quality={100}
                    className="object-contain max-h-[72vh] sm:max-h-[76vh] w-auto h-auto rounded-xl shadow-2xl border border-white/20"
                  />
                )}
              </motion.div>

              {/* Left Nav */}
              <motion.button
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                onClick={goToPrev}
                className="fixed left-2 sm:left-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 hover:bg-[#A6533C] text-white flex items-center justify-center transition-all backdrop-blur-sm z-20"
                aria-label="Previous Fullscreen View"
              >
                <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" />
              </motion.button>

              {/* Right Nav */}
              <motion.button
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                onClick={goToNext}
                className="fixed right-2 sm:right-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 hover:bg-[#A6533C] text-white flex items-center justify-center transition-all backdrop-blur-sm z-20"
                aria-label="Next Fullscreen View"
              >
                <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" />
              </motion.button>
            </div>

            {/* Bottom Info */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-2 border-t border-white/20 pt-3 text-xs text-white/70">
              <span className="hidden sm:inline">
                Use Left/Right arrow keys to flip • Zoom up to 300% for 4K detail
              </span>
              <span className="sm:hidden text-[11px]">
                Swipe or tap buttons to browse • Pinch/Zoom up to 300%
              </span>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  onClick={goToPrev}
                  className="flex-1 sm:flex-initial px-3 py-2 sm:py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white"
                >
                  {layoutMode === "twoPage" ? "Previous Spread" : "Previous Page"}
                </button>
                <button
                  onClick={goToNext}
                  className="flex-1 sm:flex-initial px-3 py-2 sm:py-1.5 rounded-lg bg-[#B58A50] hover:bg-[#d4a96a] text-[#192b23] font-bold"
                >
                  {layoutMode === "twoPage" ? "Next Spread" : "Next Page"}
                </button>
                <button
                  onClick={() => {
                    setIsFullscreen(false);
                    setZoomLevel(1);
                  }}
                  className="px-3.5 py-2 sm:py-1.5 rounded-lg bg-[#A6533C] hover:bg-[#ba644c] text-white font-bold flex items-center justify-center gap-1 shrink-0"
                  aria-label="Exit Fullscreen"
                >
                  <X className="w-3.5 h-3.5" />
                  <span>Exit</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
