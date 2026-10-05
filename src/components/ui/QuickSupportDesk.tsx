"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  Phone,
  MessageSquare,
  X,
  ChevronRight,
  Gamepad2,
  Sparkles,
  Trophy,
  RotateCcw,
  Volume2,
} from "lucide-react";
import confetti from "canvas-confetti";
import { SCHOOL_INFO } from "@/data/schoolData";

export const QuickSupportDesk: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isGameModalOpen, setIsGameModalOpen] = useState(false);

  // Pink Tower Mini Game State
  const [towerBlocks, setTowerBlocks] = useState<number[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [gameWon, setGameWon] = useState(false);

  const blockSizes = [100, 85, 70, 55, 40, 25]; // Montessori 6-tier pink tower
  const nextTargetIndex = towerBlocks.length;

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      "Hello Mrs. S Tharani / Dhivith Edu Care Support Desk! I would like to get instant information regarding preschool admissions and tuition classes."
    );
    window.open(`https://wa.me/${SCHOOL_INFO.whatsapp}?text=${text}`, "_blank");
  };

  const startNewGame = () => {
    setTowerBlocks([]);
    setScore(0);
    setGameOver(false);
    setGameWon(false);
  };

  const handlePlaceBlock = (size: number) => {
    const expectedSize = blockSizes[nextTargetIndex];
    if (size === expectedSize) {
      const nextBlocks = [...towerBlocks, size];
      setTowerBlocks(nextBlocks);
      const newScore = (nextTargetIndex + 1) * 20;
      setScore(newScore);

      if (nextBlocks.length === blockSizes.length) {
        setGameWon(true);
        try {
          confetti({
            particleCount: 90,
            spread: 80,
            origin: { y: 0.6 },
            colors: ["#F36B12", "#F5B900", "#159447", "#0750B8"],
          });
        } catch {}
      }
    } else {
      setGameOver(true);
    }
  };

  return (
    <>
      <aside
        aria-label="Quick Support Desk"
        className="fixed bottom-6 right-6 z-40 pointer-events-auto"
      >
        {/* Floating Fast Desk Card (Matched Exactly to Reference Design) */}
        {isOpen && (
          <div className="absolute bottom-16 right-0 w-[310px] sm:w-[340px] bg-white rounded-[28px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.25)] border border-gray-100 p-4 sm:p-5 mb-2 animate-slideUp overflow-hidden">
            {/* Header with Icon and Close Button */}
            <div className="flex items-center justify-between pb-3.5 mb-3 border-b border-gray-100">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-[#FFF2E8] text-[#F36B12] flex items-center justify-center shadow-xs">
                  <span className="text-base font-bold">🏫</span>
                </div>
                <h4 className="font-display font-black text-sm text-[#121D28] uppercase tracking-wider">
                  DHIVITH FAST DESK
                </h4>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors focus:outline-none"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* List of 3 Fast Actions */}
            <div className="space-y-3">
              {/* Option 1: WhatsApp Advisor (Green Card) */}
              <button
                onClick={handleWhatsApp}
                className="w-full p-3.5 rounded-2xl bg-[#EAF8EF]/60 hover:bg-[#EAF8EF] border border-[#159447]/30 transition-all flex items-center justify-between group text-left cursor-pointer shadow-xs hover:shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#D1F2DD] text-[#159447] flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-sm text-[#121D28]">
                      WhatsApp Advisor
                    </div>
                    <div className="text-xs font-semibold text-[#159447]">
                      Instant 2-min response
                    </div>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#159447] group-hover:translate-x-0.5 transition-all" />
              </button>

              {/* Option 2: Direct Helpline (Blue/Slate Card) */}
              <a
                href={`tel:${SCHOOL_INFO.phoneRaw}`}
                className="w-full p-3.5 rounded-2xl bg-[#F0F5FA]/80 hover:bg-[#EBF3FF] border border-[#0750B8]/20 transition-all flex items-center justify-between group text-left cursor-pointer shadow-xs hover:shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#D9E9FC] text-[#0750B8] flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-sm text-[#121D28]">
                      Direct Helpline
                    </div>
                    <div className="text-xs font-semibold text-[#5E6D7A]">
                      +91 {SCHOOL_INFO.phone}
                    </div>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#0750B8] group-hover:translate-x-0.5 transition-all" />
              </a>

              {/* Option 3: Tower Builder Game (Coral/Red Card) */}
              <button
                onClick={() => {
                  setIsOpen(false);
                  setIsGameModalOpen(true);
                  startNewGame();
                }}
                className="w-full p-3.5 rounded-2xl bg-[#FFF2E8]/60 hover:bg-[#FFF2E8] border border-[#F36B12]/30 transition-all flex items-center justify-between group text-left cursor-pointer shadow-xs hover:shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#FFE4D4] text-[#F36B12] flex items-center justify-center flex-shrink-0">
                    <Gamepad2 className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-display font-bold text-sm text-[#121D28]">
                        Tower Builder Game
                      </span>
                      <span className="px-1.5 py-0.5 rounded-md bg-[#F36B12] text-white text-[9px] font-black uppercase tracking-wider">
                        PLAY
                      </span>
                    </div>
                    <div className="text-xs font-semibold text-[#F36B12]">
                      Stack floors <span className="text-gray-400 font-normal">• Works Offline</span>
                    </div>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#F36B12] group-hover:translate-x-0.5 transition-all" />
              </button>
            </div>
          </div>
        )}

        {/* Main Floating Trigger Pill in Brand Green */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center gap-2.5 px-5 py-3 rounded-full bg-[#159447] hover:bg-[#117a3a] text-white font-display font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-[0_10px_30px_rgba(21,148,71,0.4)] hover:shadow-[0_14px_40px_rgba(21,148,71,0.5)] hover:scale-105 active:scale-95 transition-all duration-300 border-2 border-white/40 cursor-pointer"
          aria-expanded={isOpen}
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white" />
          </span>
          <span className="tracking-wide">QUICK SUPPORT DESK</span>
          <Phone className="w-4 h-4" />
        </button>
      </aside>

      {/* Interactive Montessori Tower Builder Mini-Game Modal */}
      {isGameModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fadeIn"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsGameModalOpen(false);
          }}
        >
          <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden my-auto p-6 text-center">
            {/* Header */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <span className="text-xl">🧱</span>
                <h3 className="font-display font-bold text-lg text-[#121D28]">
                  Montessori Pink Tower Builder
                </h3>
              </div>
              <button
                onClick={() => setIsGameModalOpen(false)}
                className="p-1.5 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-[#5E6D7A] mb-4">
              Tap the blocks in order from <strong>Largest (Base)</strong> to <strong>Smallest (Top)</strong>!
            </p>

            {/* Tower Stacking Canvas Area */}
            <div className="relative h-64 bg-gray-50 rounded-2xl border border-gray-200 flex flex-col justify-end items-center p-4 mb-4 overflow-hidden shadow-inner">
              {/* Base table line */}
              <div className="w-full h-2 bg-[#121D28]/20 rounded-full mb-1" />

              {/* Stacked Blocks */}
              <div className="flex flex-col-reverse items-center gap-1 w-full">
                {towerBlocks.map((size, idx) => (
                  <div
                    key={idx}
                    className="h-7 rounded-lg bg-gradient-to-r from-[#F36B12] via-[#f7883e] to-[#F5B900] shadow-md border border-white/60 animate-bounce duration-300 flex items-center justify-center text-white text-[10px] font-bold"
                    style={{ width: `${size}%` }}
                  >
                    Level {idx + 1}
                  </div>
                ))}
              </div>

              {/* Win/Loss Overlays */}
              {gameWon && (
                <div className="absolute inset-0 bg-white/95 backdrop-blur-sm flex flex-col items-center justify-center p-4">
                  <Trophy className="w-12 h-12 text-[#F5B900] animate-bounce mb-2" />
                  <h4 className="font-display font-extrabold text-xl text-[#121D28]">
                    Brilliant Spatial Logic!
                  </h4>
                  <p className="text-xs text-[#159447] font-bold mt-1">
                    Score: {score} / 120 Points
                  </p>
                  <p className="text-[11px] text-[#5E6D7A] mt-2">
                    Montessori spatial grading mastered!
                  </p>
                  <button
                    onClick={startNewGame}
                    className="mt-4 px-5 py-2 rounded-xl bg-[#159447] text-white text-xs font-bold shadow-md hover:bg-[#117a3a]"
                  >
                    Play Again
                  </button>
                </div>
              )}

              {gameOver && !gameWon && (
                <div className="absolute inset-0 bg-white/95 backdrop-blur-sm flex flex-col items-center justify-center p-4">
                  <div className="text-3xl mb-1">🏗️</div>
                  <h4 className="font-display font-extrabold text-lg text-[#121D28]">
                    Tower Wobbled!
                  </h4>
                  <p className="text-xs text-[#F36B12] mt-1">
                    Remember to choose the next largest block.
                  </p>
                  <button
                    onClick={startNewGame}
                    className="mt-4 px-5 py-2 rounded-xl bg-[#0750B8] text-white text-xs font-bold shadow-md hover:bg-[#063f91] flex items-center gap-1.5"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Try Again</span>
                  </button>
                </div>
              )}
            </div>

            {/* Block Selection Buttons */}
            {!gameOver && !gameWon && (
              <div className="space-y-2">
                <div className="text-[11px] font-bold text-[#121D28] uppercase tracking-wider">
                  Select Next Block ({nextTargetIndex + 1}/6):
                </div>
                <div className="flex items-center justify-center gap-2 flex-wrap">
                  {[40, 100, 25, 85, 55, 70]
                    .filter((sz) => !towerBlocks.includes(sz))
                    .map((sz) => (
                      <button
                        key={sz}
                        onClick={() => handlePlaceBlock(sz)}
                        className="px-3 py-2 rounded-xl bg-white border border-[#0750B8]/20 hover:border-[#0750B8] text-xs font-bold text-[#121D28] shadow-xs hover:bg-[#EBF3FF] hover:scale-105 transition-all"
                      >
                        Size {sz}
                      </button>
                    ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
