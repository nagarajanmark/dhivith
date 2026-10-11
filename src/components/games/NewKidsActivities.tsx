"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  Trophy,
  RotateCcw,
  Volume2,
  VolumeX,
  Star,
  Sparkles,
  Play,
  Pause,
  SkipForward,
  SkipBack,
  ChevronRight,
  ChevronLeft,
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  CheckCircle2,
  HelpCircle,
  Puzzle,
  Mic,
  BookOpen,
  Music,
  Compass,
  Smile,
  Heart,
  Grid,
  RefreshCw,
  Award,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

// Dynamic confetti trigger
export const triggerConfettiCelebration = () => {
  if (typeof window === "undefined") return;
  try {
    import("canvas-confetti").then((module) => {
      const confetti = module.default;
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.65 },
        colors: ["#F36B12", "#0750B8", "#159447", "#E11D48", "#FBBF24", "#8B5CF6"],
      });
    });
  } catch {
    // fallback if confetti fails
  }
};

// Web Audio API Audio Synthesizer for rich, offline, instant sounds
export const playKidAudio = (
  type:
    | "pop"
    | "win"
    | "wrong"
    | "ding"
    | "snap"
    | "chime"
    | "dot"
    | "animal"
    | "melodyNote",
  options?: { freq?: number; duration?: number; animalKey?: string; noteIndex?: number }
) => {
  if (typeof window === "undefined") return;
  try {
    const AudioCtx =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    const now = ctx.currentTime;

    if (type === "pop" || type === "snap") {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(450, now);
      osc.frequency.exponentialRampToValueAtTime(800, now + 0.1);
      gain.gain.setValueAtTime(0.3, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.12);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(now + 0.12);
    } else if (type === "ding" || type === "chime") {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(options?.freq || 659.25, now);
      gain.gain.setValueAtTime(0.3, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(now + 0.4);
    } else if (type === "dot") {
      // Pentatonic ascending note for dot connecting
      const scale = [261.63, 293.66, 329.63, 392.0, 440.0, 523.25, 587.33, 659.25, 783.99, 880.0, 1046.5];
      const noteIdx = (options?.noteIndex || 0) % scale.length;
      const freq = scale[noteIdx];
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, now);
      gain.gain.setValueAtTime(0.35, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(now + 0.3);
    } else if (type === "win") {
      const notes = [523.25, 659.25, 783.99, 1046.5, 1318.5];
      notes.forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "triangle";
        osc.frequency.setValueAtTime(freq, now + i * 0.08);
        gain.gain.setValueAtTime(0.25, now + i * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.01, now + i * 0.08 + 0.3);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + i * 0.08);
        osc.stop(now + i * 0.08 + 0.3);
      });
    } else if (type === "wrong") {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(220, now);
      osc.frequency.exponentialRampToValueAtTime(130, now + 0.25);
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.25);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(now + 0.25);
    } else if (type === "melodyNote") {
      const freq = options?.freq || 440;
      const dur = options?.duration || 0.4;
      const osc = ctx.createOscillator();
      const oscHarmonic = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, now);
      oscHarmonic.type = "triangle";
      oscHarmonic.frequency.setValueAtTime(freq * 2, now);

      gain.gain.setValueAtTime(0.3, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + dur);

      osc.connect(gain);
      oscHarmonic.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      oscHarmonic.start();
      osc.stop(now + dur);
      oscHarmonic.stop(now + dur);
    } else if (type === "animal") {
      const key = options?.animalKey || "cat";
      if (key === "cat") {
        // Meow: slide 600 -> 800 -> 500
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sawtooth";
        osc.frequency.setValueAtTime(600, now);
        osc.frequency.exponentialRampToValueAtTime(850, now + 0.25);
        osc.frequency.exponentialRampToValueAtTime(450, now + 0.6);
        gain.gain.setValueAtTime(0.25, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.65);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(now + 0.65);
      } else if (key === "dog") {
        // Woof: two punchy bursts
        [0, 0.18].forEach((offset) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = "triangle";
          osc.frequency.setValueAtTime(280, now + offset);
          osc.frequency.exponentialRampToValueAtTime(140, now + offset + 0.12);
          gain.gain.setValueAtTime(0.35, now + offset);
          gain.gain.exponentialRampToValueAtTime(0.01, now + offset + 0.14);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(now + offset);
          osc.stop(now + offset + 0.14);
        });
      } else if (key === "cow") {
        // Moo: low resonant vibration
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "triangle";
        osc.frequency.setValueAtTime(145, now);
        osc.frequency.exponentialRampToValueAtTime(130, now + 0.8);
        gain.gain.setValueAtTime(0.3, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.9);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(now + 0.9);
      } else if (key === "lion") {
        // Roar: low frequency noise/sawtooth
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sawtooth";
        osc.frequency.setValueAtTime(110, now);
        osc.frequency.exponentialRampToValueAtTime(80, now + 0.7);
        gain.gain.setValueAtTime(0.3, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.8);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(now + 0.8);
      } else if (key === "frog") {
        // Ribbit: short pulses
        [0, 0.14].forEach((offset) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = "sawtooth";
          osc.frequency.setValueAtTime(180, now + offset);
          osc.frequency.exponentialRampToValueAtTime(110, now + offset + 0.1);
          gain.gain.setValueAtTime(0.25, now + offset);
          gain.gain.exponentialRampToValueAtTime(0.01, now + offset + 0.12);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(now + offset);
          osc.stop(now + offset + 0.12);
        });
      } else if (key === "duck") {
        // Quack: nasal buzzy pulses
        [0, 0.16].forEach((offset) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = "sawtooth";
          osc.frequency.setValueAtTime(340, now + offset);
          osc.frequency.exponentialRampToValueAtTime(240, now + offset + 0.12);
          gain.gain.setValueAtTime(0.25, now + offset);
          gain.gain.exponentialRampToValueAtTime(0.01, now + offset + 0.13);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(now + offset);
          osc.stop(now + offset + 0.13);
        });
      } else if (key === "elephant") {
        // Trumpet
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sawtooth";
        osc.frequency.setValueAtTime(320, now);
        osc.frequency.exponentialRampToValueAtTime(680, now + 0.35);
        gain.gain.setValueAtTime(0.3, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.55);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(now + 0.55);
      } else if (key === "sheep") {
        // Baa: vibrato frequency
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "triangle";
        osc.frequency.setValueAtTime(240, now);
        osc.frequency.setValueAtTime(260, now + 0.15);
        osc.frequency.setValueAtTime(230, now + 0.3);
        gain.gain.setValueAtTime(0.3, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.6);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(now + 0.6);
      }
    }
  } catch {
    // audio failure fallback
  }
};

// Text-to-speech helper (pronunciation & narration)
export const speakKidPhrase = (phrase: string, lang: "en" | "ta" = "en") => {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
  try {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(phrase);
    utterance.rate = 0.9;
    utterance.pitch = 1.2;
    utterance.lang = lang === "ta" ? "ta-IN" : "en-US";
    window.speechSynthesis.speak(utterance);
  } catch {
    // speech failure fallback
  }
};

// =========================================================================
// 1. JIGSAW PUZZLE GAME
// =========================================================================
interface JigsawTheme {
  id: string;
  titleEn: string;
  titleTa: string;
  emoji: string;
  bgGrad: string;
  gridSize: 2 | 3; // 2x2 = 4 tiles, 3x3 = 9 tiles
  tiles: { id: number; symbol: string; labelEn: string; labelTa: string; color: string }[];
}

const JIGSAW_THEMES: JigsawTheme[] = [
  {
    id: "lion",
    titleEn: "Joyful Lion King",
    titleTa: "மகிழ்ச்சியான சிங்க ராஜா",
    emoji: "🦁",
    bgGrad: "from-amber-100 to-orange-50",
    gridSize: 2,
    tiles: [
      { id: 0, symbol: "👑", labelEn: "Golden Crown", labelTa: "பொன் கிரீடம்", color: "#F59E0B" },
      { id: 1, symbol: "🦁", labelEn: "Fluffy Mane", labelTa: "அடர்ந்த பிடரி", color: "#F97316" },
      { id: 2, symbol: "🐾", labelEn: "Friendly Paws", labelTa: "அன்பான பாதங்கள்", color: "#EA580C" },
      { id: 3, symbol: "🌴", labelEn: "Jungle Tree", labelTa: "காட்டு மரம்", color: "#16A34A" },
    ],
  },
  {
    id: "rocket",
    titleEn: "Cosmic Space Rocket",
    titleTa: "விண்வெளி ராக்கெட்",
    emoji: "🚀",
    bgGrad: "from-indigo-100 to-sky-50",
    gridSize: 2,
    tiles: [
      { id: 0, symbol: "🚀", labelEn: "Rocket Nose", labelTa: "ராக்கெட் முனை", color: "#3B82F6" },
      { id: 1, symbol: "⭐", labelEn: "Twinkling Star", labelTa: "மின்னும் நட்சத்திரம்", color: "#FBBF24" },
      { id: 2, symbol: "🔥", labelEn: "Blazing Boost", labelTa: "நெருப்பு உந்துதல்", color: "#EF4444" },
      { id: 3, symbol: "🪐", labelEn: "Ringed Planet", labelTa: "வளைய கிரகம்", color: "#8B5CF6" },
    ],
  },
  {
    id: "garden",
    titleEn: "Sunny Fruit Garden",
    titleTa: "பழத்தோட்ட உலா",
    emoji: "🍎",
    bgGrad: "from-emerald-100 to-amber-50",
    gridSize: 3,
    tiles: [
      { id: 0, symbol: "☀️", labelEn: "Sun", labelTa: "சூரியன்", color: "#F59E0B" },
      { id: 1, symbol: "☁️", labelEn: "Cloud", labelTa: "மேகம்", color: "#60A5FA" },
      { id: 2, symbol: "🐦", labelEn: "Bird", labelTa: "பறவை", color: "#06B6D4" },
      { id: 3, symbol: "🍎", labelEn: "Apple", labelTa: "ஆப்பிள்", color: "#EF4444" },
      { id: 4, symbol: "🌳", labelEn: "Tree", labelTa: "மரம்", color: "#15803D" },
      { id: 5, symbol: "🍌", labelEn: "Banana", labelTa: "வாழைப்பழம்", color: "#EAB308" },
      { id: 6, symbol: "🌻", labelEn: "Sunflower", labelTa: "சூரியகாந்தி", color: "#F59E0B" },
      { id: 7, symbol: "🦋", labelEn: "Butterfly", labelTa: "வண்ணத்துப்பூச்சி", color: "#EC4899" },
      { id: 8, symbol: "🍓", labelEn: "Berry", labelTa: "ஸ்ட்ராபெர்ரி", color: "#DC2626" },
    ],
  },
];

export const JigsawPuzzleGame: React.FC<{
  onWin: () => void;
  onPlaySound: (type: "pop" | "win" | "wrong" | "ding") => void;
}> = ({ onWin, onPlaySound }) => {
  const { language } = useLanguage();
  const [themeIdx, setThemeIdx] = useState(0);
  const activeTheme = JIGSAW_THEMES[themeIdx];
  const totalTiles = activeTheme.tiles.length;

  // boardSlots[slotIndex] = tileId or null
  const [boardSlots, setBoardSlots] = useState<(number | null)[]>([]);
  // Tray contains remaining tile IDs shuffled
  const [trayTiles, setTrayTiles] = useState<number[]>([]);
  const [selectedTileId, setSelectedTileId] = useState<number | null>(null);
  const [showHint, setShowHint] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  // Initialize or reset puzzle
  const initPuzzle = useCallback((theme: JigsawTheme) => {
    setBoardSlots(new Array(theme.tiles.length).fill(null));
    // Shuffle tiles into tray
    const ids = theme.tiles.map((t) => t.id).sort(() => Math.random() - 0.5);
    setTrayTiles(ids);
    setSelectedTileId(null);
    setIsCompleted(false);
  }, []);

  useEffect(() => {
    initPuzzle(activeTheme);
  }, [activeTheme, initPuzzle]);

  const handleTileSelect = (id: number) => {
    onPlaySound("pop");
    setSelectedTileId(selectedTileId === id ? null : id);
  };

  const handleSlotClick = (slotIdx: number) => {
    if (boardSlots[slotIdx] !== null) {
      // Slot already occupied
      return;
    }
    if (selectedTileId === null) {
      return;
    }

    // Check if selectedTileId matches slotIdx
    if (selectedTileId === slotIdx) {
      onPlaySound("ding");
      const nextBoard = [...boardSlots];
      nextBoard[slotIdx] = selectedTileId;
      setBoardSlots(nextBoard);
      setTrayTiles((prev) => prev.filter((id) => id !== selectedTileId));
      setSelectedTileId(null);

      // Check win
      const remainingCount = trayTiles.length - 1;
      if (remainingCount === 0) {
        setIsCompleted(true);
        onPlaySound("win");
        triggerConfettiCelebration();
        onWin();
      }
    } else {
      onPlaySound("wrong");
    }
  };

  const placedCount = boardSlots.filter((s) => s !== null).length;

  return (
    <div className="flex flex-col items-center justify-between w-full max-w-xl mx-auto py-2">
      {/* Top Header & Theme Selector */}
      <div className="w-full flex items-center justify-between mb-3 px-2">
        <div className="flex items-center gap-2">
          <span className="text-2xl">{activeTheme.emoji}</span>
          <div>
            <h3 className="font-display font-black text-sm sm:text-base text-gray-900 leading-tight">
              {language === "ta" ? activeTheme.titleTa : activeTheme.titleEn}
            </h3>
            <span className="text-[10px] text-gray-500 font-semibold">
              {language === "ta"
                ? `${activeTheme.gridSize}x${activeTheme.gridSize} கட்டங்கள் (${placedCount}/${totalTiles})`
                : `${activeTheme.gridSize}x${activeTheme.gridSize} Puzzle (${placedCount}/${totalTiles} Placed)`}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setShowHint(!showHint)}
            className={`px-2.5 py-1 rounded-xl text-xs font-bold border transition-colors flex items-center gap-1 ${
              showHint ? "bg-amber-100 text-amber-800 border-amber-300" : "bg-white text-gray-600 border-gray-200"
            }`}
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span className="text-[11px]">{language === "ta" ? "உதவி" : "Hint"}</span>
          </button>

          <button
            onClick={() => setThemeIdx((prev) => (prev + 1) % JIGSAW_THEMES.length)}
            className="px-2.5 py-1 rounded-xl text-xs font-bold bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 transition-colors flex items-center gap-1"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span className="text-[11px]">{language === "ta" ? "வேறு படம்" : "Next"}</span>
          </button>
        </div>
      </div>

      {/* Main Puzzle Board & Tray Area */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 items-center justify-center p-3 sm:p-4 rounded-3xl bg-gradient-to-br from-slate-50 to-orange-50/40 border border-gray-200/80">
        {/* The Target Assembly Board */}
        <div className="flex flex-col items-center">
          <span className="text-[11px] font-extrabold uppercase tracking-wider text-gray-500 mb-2">
            {language === "ta" ? "புதிர் பலகை (இங்கே வைக்கவும்)" : "Assembly Board"}
          </span>

          <div
            className={`grid gap-2 p-2.5 rounded-2xl bg-white border-2 border-dashed ${
              selectedTileId !== null ? "border-[#F36B12] shadow-md" : "border-gray-300"
            }`}
            style={{
              gridTemplateColumns: `repeat(${activeTheme.gridSize}, minmax(0, 1fr))`,
              width: activeTheme.gridSize === 2 ? "210px" : "260px",
              height: activeTheme.gridSize === 2 ? "210px" : "260px",
            }}
          >
            {boardSlots.map((tileId, slotIdx) => {
              const placedTile = tileId !== null ? activeTheme.tiles.find((t) => t.id === tileId) : null;
              const expectedTile = activeTheme.tiles[slotIdx];

              return (
                <button
                  key={slotIdx}
                  onClick={() => handleSlotClick(slotIdx)}
                  className={`relative rounded-xl border flex flex-col items-center justify-center transition-all ${
                    placedTile
                      ? "bg-gradient-to-br from-white to-amber-50/60 border-amber-300 shadow-sm"
                      : selectedTileId !== null
                      ? "bg-amber-50/30 border-amber-400 hover:bg-amber-100/50 cursor-pointer animate-pulse"
                      : "bg-gray-50/60 border-gray-200"
                  }`}
                >
                  {placedTile ? (
                    <div className="text-center p-1 animate-scaleUp">
                      <span className="text-2xl sm:text-3xl block">{placedTile.symbol}</span>
                      <span className="text-[9px] font-bold text-gray-700 block truncate max-w-[65px]">
                        {language === "ta" ? placedTile.labelTa : placedTile.labelEn}
                      </span>
                    </div>
                  ) : showHint ? (
                    <div className="opacity-25 text-center p-1 pointer-events-none">
                      <span className="text-xl sm:text-2xl block">{expectedTile.symbol}</span>
                      <span className="text-[8px] font-semibold text-gray-500">#{slotIdx + 1}</span>
                    </div>
                  ) : (
                    <span className="text-[10px] font-bold text-gray-400">#{slotIdx + 1}</span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* The Pieces Tray */}
        <div className="flex flex-col items-center">
          <span className="text-[11px] font-extrabold uppercase tracking-wider text-gray-500 mb-2">
            {language === "ta" ? "துண்டுகள் (தொட்டு தேர்ந்தெடுக்கவும்)" : "Pieces Tray"}
          </span>

          <div className="min-h-[170px] w-full max-w-[240px] p-3 rounded-2xl bg-white border border-gray-200 flex flex-wrap items-center justify-center gap-2 shadow-inner">
            {trayTiles.length === 0 ? (
              <div className="text-center py-6 text-emerald-600 font-bold text-xs animate-bounce">
                🎉 {language === "ta" ? "அனைத்து துண்டுகளும் பொருத்தப்பட்டன!" : "All pieces placed!"}
              </div>
            ) : (
              trayTiles.map((tileId) => {
                const tile = activeTheme.tiles.find((t) => t.id === tileId)!;
                const isSelected = selectedTileId === tileId;
                return (
                  <button
                    key={tileId}
                    onClick={() => handleTileSelect(tileId)}
                    className={`p-2.5 rounded-xl border-2 transition-all flex flex-col items-center justify-center cursor-pointer ${
                      isSelected
                        ? "bg-[#FFF2E8] border-[#F36B12] shadow-lg scale-110 ring-2 ring-[#F36B12]/40"
                        : "bg-white border-gray-200 hover:border-gray-300 shadow-xs hover:scale-105"
                    }`}
                    style={{ width: "68px", height: "68px" }}
                  >
                    <span className="text-2xl">{tile.symbol}</span>
                    <span className="text-[8px] font-bold text-gray-700 truncate max-w-[55px]">
                      {language === "ta" ? tile.labelTa : tile.labelEn}
                    </span>
                  </button>
                );
              })
            )}
          </div>
        </div>
      </div>

      {/* Completion Banner */}
      {isCompleted && (
        <div className="mt-3 p-3 w-full bg-emerald-50 border-2 border-emerald-400 rounded-2xl flex items-center justify-between animate-scaleUp">
          <div className="flex items-center gap-2">
            <Award className="w-6 h-6 text-emerald-600" />
            <div>
              <p className="font-display font-black text-xs sm:text-sm text-emerald-900">
                {language === "ta" ? "அருமை! புதிர் முடிந்தது!" : "Awesome Job! Puzzle Solved!"}
              </p>
              <p className="text-[10px] text-emerald-700 font-semibold">
                {language === "ta" ? "+4 நட்சத்திரங்கள் வென்றீர்கள்!" : "+4 Stars Earned!"}
              </p>
            </div>
          </div>
          <button
            onClick={() => initPuzzle(activeTheme)}
            className="px-3 py-1.5 rounded-xl bg-emerald-600 text-white font-bold text-xs shadow-md hover:bg-emerald-700 transition-colors flex items-center gap-1"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>{language === "ta" ? "மீண்டும்" : "Play Again"}</span>
          </button>
        </div>
      )}
    </div>
  );
};

// =========================================================================
// 2. ANIMAL SOUND GUESSING GAME
// =========================================================================
interface AnimalSoundItem {
  id: string;
  emoji: string;
  nameEn: string;
  nameTa: string;
  soundNameEn: string;
  soundNameTa: string;
  color: string;
}

const ANIMALS_DATA: AnimalSoundItem[] = [
  { id: "cat", emoji: "🐱", nameEn: "Cat", nameTa: "பூனை", soundNameEn: "Meow! Meow!", soundNameTa: "மியாவ்! மியாவ்!", color: "#F59E0B" },
  { id: "dog", emoji: "🐶", nameEn: "Dog", nameTa: "நாய்", soundNameEn: "Woof! Woof!", soundNameTa: "லொள்! லொள்!", color: "#3B82F6" },
  { id: "cow", emoji: "🐮", nameEn: "Cow", nameTa: "பசு மாடு", soundNameEn: "Moo! Moo!", soundNameTa: "ம்மாஆ! ம்மாஆ!", color: "#10B981" },
  { id: "lion", emoji: "🦁", nameEn: "Lion", nameTa: "சிங்கம்", soundNameEn: "Roarrr!", soundNameTa: "கர்ஜனை!", color: "#EA580C" },
  { id: "frog", emoji: "🐸", nameEn: "Frog", nameTa: "தவளை", soundNameEn: "Ribbit! Ribbit!", soundNameTa: "கிராக்! கிராக்!", color: "#16A34A" },
  { id: "duck", emoji: "🦆", nameEn: "Duck", nameTa: "வாத்து", soundNameEn: "Quack! Quack!", soundNameTa: "குவாக்! குவாக்!", color: "#EAB308" },
  { id: "elephant", emoji: "🐘", nameEn: "Elephant", nameTa: "யானை", soundNameEn: "Trumpet!", soundNameTa: "பிளிறல்!", color: "#6366F1" },
  { id: "sheep", emoji: "🐑", nameEn: "Sheep", nameTa: "செம்மறி ஆடு", soundNameEn: "Baaa! Baaa!", soundNameTa: "மேஏஏ! மேஏஏ!", color: "#EC4899" },
];

export const AnimalSoundGuessGame: React.FC<{
  onWin: () => void;
  onPlaySound: (type: "pop" | "win" | "wrong" | "ding") => void;
}> = ({ onWin, onPlaySound }) => {
  const { language } = useLanguage();
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [roundNumber, setRoundNumber] = useState(1);
  const [choices, setChoices] = useState<AnimalSoundItem[]>([]);
  const [targetAnimal, setTargetAnimal] = useState<AnimalSoundItem>(ANIMALS_DATA[0]);
  const [isPlayingSound, setIsPlayingSound] = useState(false);
  const [feedback, setFeedback] = useState<"correct" | "wrong" | null>(null);

  const setupRound = useCallback((round: number) => {
    // Pick target animal
    const target = ANIMALS_DATA[(round - 1) % ANIMALS_DATA.length];
    setTargetAnimal(target);

    // Pick 3 other random animals
    const others = ANIMALS_DATA.filter((a) => a.id !== target.id)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);
    const roundChoices = [target, ...others].sort(() => Math.random() - 0.5);
    setChoices(roundChoices);
    setFeedback(null);
  }, []);

  useEffect(() => {
    setupRound(roundNumber);
  }, [roundNumber, setupRound]);

  const playActiveSound = () => {
    setIsPlayingSound(true);
    playKidAudio("animal", { animalKey: targetAnimal.id });
    speakKidPhrase(targetAnimal.soundNameEn, "en");
    setTimeout(() => setIsPlayingSound(false), 900);
  };

  useEffect(() => {
    // Auto-play sound slightly after round setup
    const t = setTimeout(() => {
      playActiveSound();
    }, 400);
    return () => clearTimeout(t);
  }, [targetAnimal]);

  const handleSelectAnimal = (animal: AnimalSoundItem) => {
    if (feedback !== null) return;

    if (animal.id === targetAnimal.id) {
      setFeedback("correct");
      onPlaySound("win");
      triggerConfettiCelebration();
      setScore((prev) => prev + 1);
      speakKidPhrase(animal.nameEn, "en");

      setTimeout(() => {
        if (roundNumber >= 6) {
          onWin();
          setRoundNumber(1);
        } else {
          setRoundNumber((prev) => prev + 1);
        }
      }, 1400);
    } else {
      setFeedback("wrong");
      onPlaySound("wrong");
      setTimeout(() => setFeedback(null), 900);
    }
  };

  return (
    <div className="flex flex-col items-center justify-between w-full max-w-xl mx-auto py-2">
      {/* Round & Score Pill */}
      <div className="w-full flex items-center justify-between mb-3 px-2">
        <span className="text-xs font-bold text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
          {language === "ta" ? `சுற்று ${roundNumber}/6` : `Round ${roundNumber}/6`}
        </span>
        <div className="flex items-center gap-1.5 text-xs font-black text-amber-800 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          <span>{score}</span>
        </div>
      </div>

      {/* Main Listen Card */}
      <div className="w-full bg-gradient-to-br from-blue-50/80 via-white to-amber-50/60 p-5 rounded-3xl border border-gray-200 shadow-sm text-center flex flex-col items-center mb-5">
        <h3 className="font-display font-black text-base sm:text-lg text-[#0F172A] mb-1">
          {language === "ta" ? "இந்த ஒலி யாருடையது? கேளுங்கள்!" : "Listen Closely! Who Makes This Sound?"}
        </h3>
        <p className="text-xs text-gray-500 mb-4">
          {language === "ta" ? "ஒலியை மீண்டும் கேட்க பொத்தானை அழுத்தவும்" : "Tap the sound speaker to hear again"}
        </p>

        {/* Big Audio Pulsing Button */}
        <button
          onClick={playActiveSound}
          className={`relative p-5 rounded-3xl cursor-pointer transition-all duration-300 shadow-lg border-2 ${
            isPlayingSound
              ? "bg-[#0750B8] border-blue-400 text-white scale-110 shadow-blue-200"
              : "bg-white hover:bg-blue-50 border-blue-200 text-[#0750B8] hover:scale-105"
          }`}
        >
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-1">
            <Volume2 className={`w-8 h-8 ${isPlayingSound ? "animate-bounce" : ""}`} />
          </div>
          <span className="text-xs font-bold block">
            {language === "ta" ? "ஒலி கேட்கவும் 🔊" : "Tap To Hear 🔊"}
          </span>
        </button>
      </div>

      {/* 4 Animal Choices */}
      <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-3">
        {choices.map((animal) => {
          const isTarget = animal.id === targetAnimal.id;
          const isSelectedCorrect = feedback === "correct" && isTarget;

          return (
            <button
              key={animal.id}
              onClick={() => handleSelectAnimal(animal)}
              className={`p-3.5 rounded-2xl border-2 transition-all flex flex-col items-center justify-between cursor-pointer ${
                isSelectedCorrect
                  ? "bg-emerald-50 border-emerald-500 scale-105 shadow-lg ring-4 ring-emerald-200"
                  : "bg-white hover:bg-gray-50 border-gray-200 hover:border-gray-300 shadow-xs hover:scale-102"
              }`}
            >
              <span className={`text-4xl sm:text-5xl mb-2 ${isSelectedCorrect ? "animate-bounce" : ""}`}>
                {animal.emoji}
              </span>

              <h4 className="font-bold text-xs sm:text-sm text-gray-900">
                {language === "ta" ? animal.nameTa : animal.nameEn}
              </h4>

              <span className="text-[10px] text-gray-500 font-semibold mt-1">
                {language === "ta" ? animal.soundNameTa : animal.soundNameEn}
              </span>
            </button>
          );
        })}
      </div>

      {/* Feedback banner */}
      {feedback === "wrong" && (
        <div className="mt-4 text-xs font-bold text-rose-600 bg-rose-50 px-4 py-2 rounded-xl border border-rose-200 animate-shake">
          {language === "ta" ? "மறுபடியும் முயற்சி செய்யுங்கள்! 🎧" : "Almost! Listen closely and try again! 🎧"}
        </div>
      )}
    </div>
  );
};

// =========================================================================
// 3. FRUIT IDENTIFICATION & EXPLORER
// =========================================================================
interface FruitItem {
  id: string;
  emoji: string;
  nameEn: string;
  nameTa: string;
  colorNameEn: string;
  colorNameTa: string;
  tasteEn: string;
  tasteTa: string;
  clueEn: string;
  clueTa: string;
  funFactEn: string;
  funFactTa: string;
  accent: string;
}

const FRUITS_LIST: FruitItem[] = [
  {
    id: "mango",
    emoji: "🥭",
    nameEn: "Mango",
    nameTa: "மாம்பழம்",
    colorNameEn: "Golden Yellow",
    colorNameTa: "தங்க மஞ்சள்",
    tasteEn: "Sweet & Juicy",
    tasteTa: "இனிப்பு மற்றும் சாறு",
    clueEn: "I am golden yellow and crowned the sweet King of Fruits!",
    clueTa: "நான் பழங்களின் ராஜா என்று அழைக்கப்படுகிறேன்!",
    funFactEn: "Mangoes are packed with Vitamin A and delicious sweetness!",
    funFactTa: "மாம்பழம் வைட்டமின் ஏ நிறைந்தது மற்றும் சுவையானது!",
    accent: "#F59E0B",
  },
  {
    id: "apple",
    emoji: "🍎",
    nameEn: "Apple",
    nameTa: "ஆப்பிள்",
    colorNameEn: "Ruby Red",
    colorNameTa: "சிவப்பு",
    tasteEn: "Crisp & Sweet",
    tasteTa: "மொறுமொறுப்பான இனிப்பு",
    clueEn: "I am crunchy and red, keeping doctors away when eaten daily!",
    clueTa: "தினமும் என்னை சாப்பிட்டால் மருத்துவரிடம் செல்ல வேண்டியதில்லை!",
    funFactEn: "Apples float in water because 25% of their volume is air!",
    funFactTa: "ஆப்பிளில் 25% காற்று உள்ளதால் தண்ணீரில் மிதக்கும்!",
    accent: "#EF4444",
  },
  {
    id: "banana",
    emoji: "🍌",
    nameEn: "Banana",
    nameTa: "வாழைப்பழம்",
    colorNameEn: "Bright Yellow",
    colorNameTa: "மஞ்சள்",
    tasteEn: "Creamy & Sweet",
    tasteTa: "மென்மையான இனிப்பு",
    clueEn: "I have a yellow peel and give instant energy to runners and monkeys!",
    clueTa: "நான் மஞ்சள் தோல் கொண்டது, உடலுக்கு உடனடி ஆற்றல் தருவேன்!",
    funFactEn: "Bananas are rich in potassium that helps kids stay strong and energized!",
    funFactTa: "வாழைப்பழத்தில் பொட்டாசியம் சத்து நிறைந்துள்ளது!",
    accent: "#EAB308",
  },
  {
    id: "strawberry",
    emoji: "🍓",
    nameEn: "Strawberry",
    nameTa: "ஸ்ட்ராபெர்ரி",
    colorNameEn: "Bright Red",
    colorNameTa: "சிவப்பு",
    tasteEn: "Sweet & Tangy",
    tasteTa: "இனிப்பும் புளிப்பும்",
    clueEn: "I wear tiny little seeds right on the outside of my red skin!",
    clueTa: "என் தோலின் வெளிப்புறத்திலேயே சிறிய விதைகள் இருக்கும்!",
    funFactEn: "Strawberries are the only fruit with seeds on the outside!",
    funFactTa: "வெளிப்புறத்தில் விதைகள் கொண்ட ஒரே பழம் ஸ்ட்ராபெர்ரி!",
    accent: "#E11D48",
  },
  {
    id: "orange",
    emoji: "🍊",
    nameEn: "Orange",
    nameTa: "ஆரஞ்சு",
    colorNameEn: "Vibrant Orange",
    colorNameTa: "ஆரஞ்சு",
    tasteEn: "Citrusy & Juicy",
    tasteTa: "சாறுள்ள புளிப்பு இனிப்பு",
    clueEn: "I am named after my color and bursting with Vitamin C sunshine!",
    clueTa: "என் நிறமே என் பெயர்! வைட்டமின் சி நிறைந்தது!",
    funFactEn: "One juicy orange gives you all the Vitamin C needed for a whole day!",
    funFactTa: "ஒரு ஆரஞ்சு பழம் ஒரு நாளுக்கான வைட்டமின் சி தேவையை பூர்த்தி செய்யும்!",
    accent: "#F97316",
  },
  {
    id: "watermelon",
    emoji: "🍉",
    nameEn: "Watermelon",
    nameTa: "தர்பூசணி",
    colorNameEn: "Green & Red",
    colorNameTa: "பச்சை & சிவப்பு",
    tasteEn: "Cool & Refreshing",
    tasteTa: "குளிர்ச்சியான சாறு",
    clueEn: "I have green stripes outside and cool pink sweet crunch inside!",
    clueTa: "வெளியே பச்சை கோடுகள், உள்ளே குளிர்ந்த சிவப்பு சுவை!",
    funFactEn: "Watermelon is over 92% refreshing pure water!",
    funFactTa: "தர்பூசணியில் 92% தூய நீர்ச்சத்து உள்ளது!",
    accent: "#10B981",
  },
  {
    id: "grapes",
    emoji: "🍇",
    nameEn: "Grapes",
    nameTa: "திராட்சை",
    colorNameEn: "Purple / Green",
    colorNameTa: "ஊதா / பச்சை",
    tasteEn: "Sweet & Pop-in-mouth",
    tasteTa: "இனிப்பு மணி பழங்கள்",
    clueEn: "We grow in cheerful bunches and make healthy raisins!",
    clueTa: "நாங்கள் கொத்து கொத்தாக வளருவோம்!",
    funFactEn: "Grapes grow on climbing vines that can live for over 50 years!",
    funFactTa: "திராட்சைக் கொடிகள் 50 ஆண்டுகளுக்கும் மேலாக வாழக்கூடியவை!",
    accent: "#8B5CF6",
  },
  {
    id: "pineapple",
    emoji: "🍍",
    nameEn: "Pineapple",
    nameTa: "அன்னாசி பழம்",
    colorNameEn: "Golden Brown",
    colorNameTa: "தங்க பழுப்பு",
    tasteEn: "Sweet & Zesty",
    tasteTa: "இனிய மணமுடைய சுவை",
    clueEn: "I wear a spiky green crown on my head like royalty!",
    clueTa: "என் தலையில் முட்கள் போன்ற அழகான கிரீடம் உண்டு!",
    funFactEn: "It takes almost two whole years for a single pineapple to grow!",
    funFactTa: "ஒரு அன்னாசி பழம் வளர கிட்டத்தட்ட இரண்டு ஆண்டுகள் ஆகும்!",
    accent: "#D97706",
  },
];

export const FruitIdentificationGame: React.FC<{
  onWin: () => void;
  onPlaySound: (type: "pop" | "win" | "wrong" | "ding") => void;
}> = ({ onWin, onPlaySound }) => {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState<"quiz" | "explorer">("quiz");
  const [quizIdx, setQuizIdx] = useState(0);
  const [selectedFruit, setSelectedFruit] = useState<FruitItem | null>(null);
  const [quizChoices, setQuizChoices] = useState<FruitItem[]>([]);
  const [answeredState, setAnsweredState] = useState<"correct" | "wrong" | null>(null);

  const targetFruit = FRUITS_LIST[quizIdx % FRUITS_LIST.length];

  const setupQuiz = useCallback((fruit: FruitItem) => {
    const others = FRUITS_LIST.filter((f) => f.id !== fruit.id)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);
    setQuizChoices([fruit, ...others].sort(() => Math.random() - 0.5));
    setAnsweredState(null);
  }, []);

  useEffect(() => {
    setupQuiz(targetFruit);
  }, [targetFruit, setupQuiz]);

  const handleAnswer = (fruit: FruitItem) => {
    if (answeredState !== null) return;
    if (fruit.id === targetFruit.id) {
      setAnsweredState("correct");
      onPlaySound("win");
      triggerConfettiCelebration();
      speakKidPhrase(fruit.nameEn, "en");

      setTimeout(() => {
        onWin();
        setQuizIdx((prev) => (prev + 1) % FRUITS_LIST.length);
      }, 1500);
    } else {
      setAnsweredState("wrong");
      onPlaySound("wrong");
      setTimeout(() => setAnsweredState(null), 900);
    }
  };

  const handleExploreFruit = (fruit: FruitItem) => {
    setSelectedFruit(fruit);
    onPlaySound("pop");
    speakKidPhrase(language === "ta" ? fruit.nameTa : fruit.nameEn, language === "ta" ? "ta" : "en");
  };

  return (
    <div className="flex flex-col items-center justify-between w-full max-w-xl mx-auto py-2">
      {/* Mode Switcher */}
      <div className="w-full flex items-center justify-between mb-3 px-2">
        <div className="flex bg-gray-100 p-1 rounded-2xl gap-1">
          <button
            onClick={() => setActiveTab("quiz")}
            className={`px-3 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === "quiz" ? "bg-white text-gray-900 shadow-xs" : "text-gray-500 hover:text-gray-900"
            }`}
          >
            {language === "ta" ? "🎯 வினாடி வினா" : "🎯 Quiz Challenge"}
          </button>
          <button
            onClick={() => setActiveTab("explorer")}
            className={`px-3 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === "explorer" ? "bg-white text-gray-900 shadow-xs" : "text-gray-500 hover:text-gray-900"
            }`}
          >
            {language === "ta" ? "🔍 பழங்களை அறிய" : "🔍 Fruit Explorer"}
          </button>
        </div>

        <button
          onClick={() => {
            speakKidPhrase(targetFruit.nameEn, "en");
            onPlaySound("pop");
          }}
          className="p-1.5 rounded-xl bg-amber-50 text-amber-800 border border-amber-200 text-xs font-bold flex items-center gap-1 cursor-pointer"
        >
          <Volume2 className="w-4 h-4" />
          <span className="text-[11px]">{language === "ta" ? "ஒலி" : "Pronounce"}</span>
        </button>
      </div>

      {activeTab === "quiz" ? (
        <div className="w-full flex flex-col items-center">
          {/* Riddle / Clue Card */}
          <div className="w-full bg-gradient-to-br from-rose-50/70 via-white to-amber-50/50 p-4 sm:p-5 rounded-3xl border border-rose-200 shadow-sm text-center mb-4">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#E11D48] bg-rose-100/60 px-3 py-0.5 rounded-full mb-2 inline-block">
              {language === "ta" ? "பழத்தை கண்டுபிடிக்க முடியுமா?" : "Can you identify this fruit?"}
            </span>

            <p className="font-display font-black text-sm sm:text-base text-gray-900 max-w-md mx-auto my-2">
              &quot;{language === "ta" ? targetFruit.clueTa : targetFruit.clueEn}&quot;
            </p>

            <div className="flex flex-wrap items-center justify-center gap-2 mt-2">
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-lg bg-white border border-gray-200 text-gray-600">
                🎨 {language === "ta" ? targetFruit.colorNameTa : targetFruit.colorNameEn}
              </span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-lg bg-white border border-gray-200 text-gray-600">
                😋 {language === "ta" ? targetFruit.tasteTa : targetFruit.tasteEn}
              </span>
            </div>
          </div>

          {/* 4 Fruit Choice Buttons */}
          <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-3">
            {quizChoices.map((fruit) => {
              const isCorrectTarget = fruit.id === targetFruit.id;
              const isWinSelected = answeredState === "correct" && isCorrectTarget;

              return (
                <button
                  key={fruit.id}
                  onClick={() => handleAnswer(fruit)}
                  className={`p-3.5 rounded-2xl border-2 transition-all flex flex-col items-center justify-between cursor-pointer ${
                    isWinSelected
                      ? "bg-emerald-50 border-emerald-500 scale-105 shadow-md ring-4 ring-emerald-200"
                      : "bg-white hover:bg-rose-50/40 border-gray-200 hover:border-rose-300 shadow-xs hover:scale-102"
                  }`}
                >
                  <span className="text-4xl sm:text-5xl mb-2">{fruit.emoji}</span>
                  <h4 className="font-display font-bold text-xs sm:text-sm text-gray-900">
                    {language === "ta" ? fruit.nameTa : fruit.nameEn}
                  </h4>
                </button>
              );
            })}
          </div>

          {/* Correct Fact Reveal */}
          {answeredState === "correct" && (
            <div className="mt-3 p-3 bg-emerald-50 border border-emerald-300 rounded-2xl w-full text-center animate-scaleUp">
              <p className="text-xs font-black text-emerald-900">
                🎉 {language === "ta" ? targetFruit.nameTa : targetFruit.nameEn}!
              </p>
              <p className="text-[11px] text-emerald-700 mt-0.5">
                {language === "ta" ? targetFruit.funFactTa : targetFruit.funFactEn}
              </p>
            </div>
          )}
        </div>
      ) : (
        /* Explorer Mode: Grid of 8 fruits */
        <div className="w-full">
          <div className="grid grid-cols-4 gap-2 mb-3">
            {FRUITS_LIST.map((fruit) => {
              const isSelected = selectedFruit?.id === fruit.id;
              return (
                <button
                  key={fruit.id}
                  onClick={() => handleExploreFruit(fruit)}
                  className={`p-2.5 rounded-2xl border-2 text-center transition-all cursor-pointer ${
                    isSelected
                      ? "bg-amber-50 border-amber-500 shadow-md scale-105"
                      : "bg-white border-gray-200 hover:border-gray-300 shadow-xs"
                  }`}
                >
                  <span className="text-3xl block mb-1">{fruit.emoji}</span>
                  <span className="text-[10px] font-bold text-gray-800 block truncate">
                    {language === "ta" ? fruit.nameTa : fruit.nameEn}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Selected Fruit Info Card */}
          {selectedFruit && (
            <div className="p-4 rounded-3xl bg-white border border-gray-200 shadow-sm flex items-center gap-4 animate-scaleUp">
              <span className="text-5xl">{selectedFruit.emoji}</span>
              <div>
                <h4 className="font-display font-black text-base text-gray-900">
                  {language === "ta" ? selectedFruit.nameTa : selectedFruit.nameEn}
                </h4>
                <p className="text-[11px] text-gray-500 font-medium">
                  {language === "ta" ? selectedFruit.funFactTa : selectedFruit.funFactEn}
                </p>
                <div className="flex gap-2 mt-1.5">
                  <span className="text-[9px] font-bold px-2 py-0.5 rounded bg-amber-50 text-amber-800">
                    {language === "ta" ? selectedFruit.tasteTa : selectedFruit.tasteEn}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

// =========================================================================
// 4. CONNECT-THE-DOTS GAME
// =========================================================================
interface DotShape {
  id: string;
  titleEn: string;
  titleTa: string;
  emoji: string;
  dots: { x: number; y: number }[]; // In SVG 0-100 coordinate space
  fillColor: string;
}

const DOT_SHAPES: DotShape[] = [
  {
    id: "star",
    titleEn: "Golden Star",
    titleTa: "தங்க நட்சத்திரம்",
    emoji: "⭐",
    fillColor: "#FBBF24",
    dots: [
      { x: 50, y: 15 },
      { x: 62, y: 38 },
      { x: 88, y: 40 },
      { x: 68, y: 56 },
      { x: 75, y: 82 },
      { x: 50, y: 68 },
      { x: 25, y: 82 },
      { x: 32, y: 56 },
      { x: 12, y: 40 },
      { x: 38, y: 38 },
    ],
  },
  {
    id: "boat",
    titleEn: "Ocean Sailboat",
    titleTa: "படகுக் கப்பல்",
    emoji: "⛵",
    fillColor: "#38BDF8",
    dots: [
      { x: 50, y: 15 },
      { x: 75, y: 50 },
      { x: 50, y: 50 },
      { x: 50, y: 65 },
      { x: 85, y: 65 },
      { x: 75, y: 85 },
      { x: 25, y: 85 },
      { x: 15, y: 65 },
      { x: 50, y: 65 },
      { x: 28, y: 50 },
    ],
  },
  {
    id: "house",
    titleEn: "Happy Home",
    titleTa: "இனிய இல்லம்",
    emoji: "🏠",
    fillColor: "#F472B6",
    dots: [
      { x: 50, y: 18 },
      { x: 80, y: 42 },
      { x: 75, y: 82 },
      { x: 25, y: 82 },
      { x: 20, y: 42 },
    ],
  },
];

export const ConnectTheDotsGame: React.FC<{
  onWin: () => void;
  onPlaySound: (type: "pop" | "win" | "wrong" | "ding") => void;
}> = ({ onWin, onPlaySound }) => {
  const { language } = useLanguage();
  const [shapeIdx, setShapeIdx] = useState(0);
  const activeShape = DOT_SHAPES[shapeIdx];
  const [connectedCount, setConnectedCount] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const resetGame = useCallback(() => {
    setConnectedCount(0);
    setIsCompleted(false);
  }, []);

  useEffect(() => {
    resetGame();
  }, [activeShape, resetGame]);

  const handleDotClick = (index: number) => {
    if (isCompleted) return;

    if (index === connectedCount) {
      playKidAudio("dot", { noteIndex: index });
      const nextCount = connectedCount + 1;
      setConnectedCount(nextCount);

      if (nextCount === activeShape.dots.length) {
        setIsCompleted(true);
        onPlaySound("win");
        triggerConfettiCelebration();
        onWin();
      }
    } else {
      onPlaySound("wrong");
    }
  };

  // Build SVG path for connected dots
  const connectedPath = activeShape.dots
    .slice(0, connectedCount)
    .map((d, i) => `${i === 0 ? "M" : "L"} ${d.x * 3} ${d.y * 3}`)
    .join(" ");

  const closedPath =
    connectedPath + (isCompleted && connectedCount > 0 ? " Z" : "");

  return (
    <div className="flex flex-col items-center justify-between w-full max-w-xl mx-auto py-2">
      {/* Top Header & Switcher */}
      <div className="w-full flex items-center justify-between mb-2 px-2">
        <div className="flex items-center gap-2">
          <span className="text-2xl">{activeShape.emoji}</span>
          <div>
            <h3 className="font-display font-black text-sm sm:text-base text-gray-900 leading-tight">
              {language === "ta" ? activeShape.titleTa : activeShape.titleEn}
            </h3>
            <span className="text-[11px] text-gray-500 font-semibold">
              {language === "ta"
                ? `புள்ளிகளை 1 முதல் ${activeShape.dots.length} வரை இணைக்கவும்`
                : `Connect dots 1 to ${activeShape.dots.length}`}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setShapeIdx((prev) => (prev + 1) % DOT_SHAPES.length)}
            className="px-2.5 py-1 rounded-xl text-xs font-bold bg-white hover:bg-gray-50 border border-gray-200 transition-colors flex items-center gap-1"
          >
            <RefreshCw className="w-3.5 h-3.5 text-gray-600" />
            <span className="text-[11px]">{language === "ta" ? "அடுத்த படம்" : "Next Shape"}</span>
          </button>
        </div>
      </div>

      {/* Interactive Dot Canvas */}
      <div className="relative w-full max-w-[320px] sm:max-w-[340px] h-[300px] sm:h-[320px] bg-gradient-to-b from-sky-50/50 to-amber-50/40 rounded-3xl border-2 border-dashed border-gray-200 flex items-center justify-center p-2 shadow-inner my-2">
        <svg
          viewBox="0 0 300 300"
          className="w-full h-full overflow-visible"
        >
          {/* Completed Fill Area */}
          {isCompleted && (
            <path
              d={closedPath}
              fill={activeShape.fillColor}
              fillOpacity={0.35}
              className="animate-fadeIn"
            />
          )}

          {/* Connected Lines */}
          {connectedCount > 1 && (
            <path
              d={isCompleted ? closedPath : connectedPath}
              stroke="#F36B12"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          )}

          {/* Dots */}
          {activeShape.dots.map((dot, idx) => {
            const isConnected = idx < connectedCount;
            const isNext = idx === connectedCount;
            const cx = dot.x * 3;
            const cy = dot.y * 3;

            return (
              <g
                key={idx}
                onClick={() => handleDotClick(idx)}
                className="cursor-pointer"
              >
                {/* Pulsing ring for next dot */}
                {isNext && (
                  <circle
                    cx={cx}
                    cy={cy}
                    r="16"
                    fill="none"
                    stroke="#F36B12"
                    strokeWidth="2.5"
                    strokeDasharray="4 4"
                    className="animate-spin-slow"
                  />
                )}

                {/* Dot Base */}
                <circle
                  cx={cx}
                  cy={cy}
                  r={isNext ? "11" : "9"}
                  fill={isConnected ? "#159447" : isNext ? "#F36B12" : "#94A3B8"}
                  stroke="#FFFFFF"
                  strokeWidth="2.5"
                  className="transition-all duration-200"
                />

                {/* Number Label */}
                <text
                  x={cx}
                  y={cy + 3.5}
                  textAnchor="middle"
                  fill="#FFFFFF"
                  fontSize="10"
                  fontWeight="900"
                  fontFamily="system-ui"
                  pointerEvents="none"
                >
                  {idx + 1}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Progress & Helper Hint */}
      <div className="w-full text-center">
        {!isCompleted ? (
          <p className="text-xs font-bold text-gray-600 bg-white px-4 py-1.5 rounded-full border border-gray-200 inline-block shadow-xs">
            👉 {language === "ta" ? `புள்ளி #${connectedCount + 1}-ஐ தொடவும்` : `Tap Dot #${connectedCount + 1}`}
          </p>
        ) : (
          <div className="p-2.5 bg-emerald-50 border border-emerald-300 rounded-2xl flex items-center justify-between animate-scaleUp">
            <span className="text-xs font-bold text-emerald-800">
              🎉 {language === "ta" ? "அற்புதம்! முழு உருவம் நிறைவடைந்தது!" : "Wonderful! Shape Complete!"}
            </span>
            <button
              onClick={resetGame}
              className="px-3 py-1 bg-emerald-600 text-white text-xs font-bold rounded-xl shadow-xs hover:bg-emerald-700"
            >
              {language === "ta" ? "மீண்டும் செய்" : "Redraw"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

// =========================================================================
// 5. PICTURE-BASED STORYTELLING
// =========================================================================
interface StoryPage {
  pageNumber: number;
  titleEn: string;
  titleTa: string;
  textEn: string;
  textTa: string;
  sceneEmoji: string;
  bgGrad: string;
  interactiveElements: {
    emoji: string;
    labelEn: string;
    labelTa: string;
    sound: "pop" | "ding" | "animal" | "win";
    animalKey?: string;
  }[];
}

const STORY_PAGES: StoryPage[] = [
  {
    pageNumber: 1,
    titleEn: "Ellie's Sunny Morning",
    titleTa: "குட்டி யானையின் இனிய காலை",
    textEn: "Once upon a time in a lush green jungle, Ellie the baby elephant woke up to the warm golden sunshine.",
    textTa: "அழகிய பசுமையான காட்டில், எலி என்ற குட்டி யானை இனிய காலைக் கதிரவனின் ஒளியில் கண்விழித்தது.",
    sceneEmoji: "🐘☀️🌴",
    bgGrad: "from-amber-100 via-emerald-50 to-sky-100",
    interactiveElements: [
      { emoji: "☀️", labelEn: "Smiling Sun", labelTa: "சூரியன்", sound: "ding" },
      { emoji: "🐘", labelEn: "Baby Ellie", labelTa: "குட்டி எலி", sound: "animal", animalKey: "elephant" },
      { emoji: "🐦", labelEn: "Chirpy Bird", labelTa: "பறவை", sound: "pop" },
    ],
  },
  {
    pageNumber: 2,
    titleEn: "The Sparkling River",
    titleTa: "மின்னும் நதிக்கரை",
    textEn: "Ellie walked to the crystal river and saw a gentle turtle swimming happily between colorful stones.",
    textTa: "எலி படபடக்கும் நீரோடைக்கு சென்றது. அங்கே வண்ணக் கற்களுக்கு நடுவே நீந்தும் ஓர் அன்பான ஆமையைக் கண்டது.",
    sceneEmoji: "💧🐢🌊",
    bgGrad: "from-sky-100 via-blue-50 to-emerald-100",
    interactiveElements: [
      { emoji: "🐢", labelEn: "Wise Turtle", labelTa: "ஆமை", sound: "pop" },
      { emoji: "🐟", labelEn: "Golden Fish", labelTa: "தங்க மீன்", sound: "ding" },
      { emoji: "💧", labelEn: "Water Splash", labelTa: "நீர் தெறிப்பு", sound: "pop" },
    ],
  },
  {
    pageNumber: 3,
    titleEn: "The Dancing Butterfly",
    titleTa: "நடனமாடும் வண்ணத்துப்பூச்சி",
    textEn: "A bright rainbow butterfly fluttered by and landed right on Ellie's trunk! Ellie giggled happily.",
    textTa: "வண்ண வண்ண இறக்கைகளைக் கொண்ட ஒரு பட்டாம்பூச்சி பறந்து வந்து எலியின் தும்பிக்கையில் அமர்ந்தது!",
    sceneEmoji: "🦋🌸🌿",
    bgGrad: "from-rose-100 via-purple-50 to-amber-100",
    interactiveElements: [
      { emoji: "🦋", labelEn: "Rainbow Butterfly", labelTa: "பட்டாம்பூச்சி", sound: "ding" },
      { emoji: "🌸", labelEn: "Blossom Flower", labelTa: "மலர்", sound: "pop" },
      { emoji: "🐸", labelEn: "Hoppy Frog", labelTa: "தவளை", sound: "animal", animalKey: "frog" },
    ],
  },
  {
    pageNumber: 4,
    titleEn: "The Sunset Celebration",
    titleTa: "மாலையில் குடும்ப சங்கமம்",
    textEn: "As golden sunset painted the sky, Ellie returned home to mummy elephant for a sweet bedtime hug.",
    textTa: "மாலை நேரத்தில் வானம் பொன் நிறமாக மாறியது. எலி தன் அம்மாவிடம் சென்று அன்பான கட்டிப்பிடிப்புடன் உறங்கியது.",
    sceneEmoji: "🌅🐘❤️",
    bgGrad: "from-orange-100 via-rose-100 to-indigo-100",
    interactiveElements: [
      { emoji: "❤️", labelEn: "Warm Hug", labelTa: "அன்பான அணைப்பு", sound: "win" },
      { emoji: "🌙", labelEn: "Rising Moon", labelTa: "நிலா", sound: "ding" },
      { emoji: "⭐", labelEn: "Night Star", labelTa: "நட்சத்திரம்", sound: "ding" },
    ],
  },
];

export const StorytellingGame: React.FC<{
  onWin: () => void;
  onPlaySound: (type: "pop" | "win" | "wrong" | "ding") => void;
}> = ({ onWin, onPlaySound }) => {
  const { language } = useLanguage();
  const [currentPageIdx, setCurrentPageIdx] = useState(0);
  const activePage = STORY_PAGES[currentPageIdx];
  const [isReading, setIsReading] = useState(false);

  const handleReadAloud = () => {
    setIsReading(true);
    const textToRead = language === "ta" ? activePage.textTa : activePage.textEn;
    speakKidPhrase(textToRead, language === "ta" ? "ta" : "en");
    setTimeout(() => setIsReading(false), 4500);
  };

  const handleNextPage = () => {
    onPlaySound("pop");
    if (currentPageIdx < STORY_PAGES.length - 1) {
      setCurrentPageIdx((prev) => prev + 1);
    } else {
      onPlaySound("win");
      triggerConfettiCelebration();
      onWin();
      setCurrentPageIdx(0);
    }
  };

  const handlePrevPage = () => {
    onPlaySound("pop");
    if (currentPageIdx > 0) {
      setCurrentPageIdx((prev) => prev - 1);
    }
  };

  const handleInteract = (item: StoryPage["interactiveElements"][0]) => {
    if (item.sound === "animal") {
      playKidAudio("animal", { animalKey: item.animalKey });
    } else if (item.sound === "ding") {
      onPlaySound("ding");
    } else {
      onPlaySound("pop");
    }
    speakKidPhrase(language === "ta" ? item.labelTa : item.labelEn, language === "ta" ? "ta" : "en");
  };

  return (
    <div className="flex flex-col items-center justify-between w-full max-w-xl mx-auto py-2">
      {/* Top Bar */}
      <div className="w-full flex items-center justify-between mb-3 px-2">
        <div className="flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-[#F36B12]" />
          <h3 className="font-display font-black text-sm sm:text-base text-gray-900 leading-tight">
            {language === "ta" ? activePage.titleTa : activePage.titleEn}
          </h3>
        </div>

        <span className="text-xs font-bold text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full">
          {language === "ta"
            ? `பக்கம் ${activePage.pageNumber}/${STORY_PAGES.length}`
            : `Page ${activePage.pageNumber}/${STORY_PAGES.length}`}
        </span>
      </div>

      {/* Illustrated Story Stage */}
      <div
        className={`w-full rounded-3xl p-5 sm:p-6 bg-gradient-to-br ${activePage.bgGrad} border border-gray-200/80 shadow-md flex flex-col justify-between min-h-[260px] relative overflow-hidden transition-all duration-500`}
      >
        {/* Big Scene Character Spread */}
        <div className="flex items-center justify-center gap-6 my-auto py-4">
          {activePage.interactiveElements.map((elem, i) => (
            <button
              key={i}
              onClick={() => handleInteract(elem)}
              className="p-3 bg-white/80 hover:bg-white rounded-2xl shadow-sm border border-white/60 hover:scale-110 active:scale-95 transition-all cursor-pointer flex flex-col items-center group"
            >
              <span className="text-4xl sm:text-5xl group-hover:animate-bounce">{elem.emoji}</span>
              <span className="text-[10px] font-bold text-gray-700 mt-1 opacity-80 group-hover:opacity-100">
                {language === "ta" ? elem.labelTa : elem.labelEn}
              </span>
            </button>
          ))}
        </div>

        {/* Story Text Box */}
        <div className="bg-white/95 backdrop-blur-xs p-4 rounded-2xl border border-white/80 shadow-xs">
          <p className="font-display font-bold text-xs sm:text-sm text-gray-800 leading-relaxed text-center">
            {language === "ta" ? activePage.textTa : activePage.textEn}
          </p>
        </div>
      </div>

      {/* Bottom Controls: Read Aloud & Page Navigation */}
      <div className="w-full flex items-center justify-between mt-4 px-2">
        <button
          onClick={handlePrevPage}
          disabled={currentPageIdx === 0}
          className={`p-2 sm:px-3 sm:py-2 rounded-xl text-xs font-bold border transition-colors flex items-center gap-1 ${
            currentPageIdx === 0
              ? "opacity-40 cursor-not-allowed bg-gray-100 text-gray-400 border-gray-200"
              : "bg-white hover:bg-gray-50 text-gray-700 border-gray-200 shadow-xs cursor-pointer"
          }`}
        >
          <ChevronLeft className="w-4 h-4" />
          <span className="hidden sm:inline">{language === "ta" ? "முந்தைய" : "Previous"}</span>
        </button>

        <button
          onClick={handleReadAloud}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-xs flex items-center gap-2 cursor-pointer ${
            isReading
              ? "bg-[#0750B8] text-white animate-pulse"
              : "bg-blue-50 text-[#0750B8] hover:bg-blue-100 border border-blue-200"
          }`}
        >
          <Volume2 className="w-4 h-4" />
          <span>{language === "ta" ? "கதை வாசிக்க 🔊" : "Read Aloud 🔊"}</span>
        </button>

        <button
          onClick={handleNextPage}
          className="p-2 sm:px-4 sm:py-2 rounded-xl text-xs font-black bg-[#F36B12] hover:bg-[#E05A05] text-white shadow-md transition-all flex items-center gap-1 cursor-pointer"
        >
          <span className="hidden sm:inline">
            {currentPageIdx === STORY_PAGES.length - 1
              ? language === "ta"
                ? "நிறைவு"
                : "Finish"
              : language === "ta"
              ? "அடுத்த பக்கம்"
              : "Next"}
          </span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

// =========================================================================
// 6. SIMPLE MAZE GAME
// =========================================================================
interface MazeTheme {
  playerEmoji: string;
  goalEmoji: string;
  titleEn: string;
  titleTa: string;
  // 5x5 grid: 0 = path, 1 = wall
  grid: number[][];
}

const MAZE_LEVELS: MazeTheme[] = [
  {
    playerEmoji: "🐰",
    goalEmoji: "🥕",
    titleEn: "Bunny Carrot Trail",
    titleTa: "முயல் கேரட் பாதை",
    grid: [
      [0, 0, 1, 0, 0],
      [1, 0, 0, 0, 1],
      [1, 0, 1, 0, 0],
      [0, 0, 1, 1, 0],
      [1, 0, 0, 0, 0],
    ],
  },
  {
    playerEmoji: "🐶",
    goalEmoji: "🦴",
    titleEn: "Puppy Bone Journey",
    titleTa: "நாய்க்குட்டி எலும்புத் தேடல்",
    grid: [
      [0, 0, 0, 1, 0],
      [1, 1, 0, 0, 0],
      [0, 0, 0, 1, 0],
      [0, 1, 0, 1, 0],
      [0, 0, 0, 0, 0],
    ],
  },
  {
    playerEmoji: "🐝",
    goalEmoji: "🌸",
    titleEn: "Busy Bee Flower Path",
    titleTa: "தேனீ மலர் உலா",
    grid: [
      [0, 1, 0, 0, 0],
      [0, 0, 0, 1, 0],
      [1, 1, 0, 0, 0],
      [0, 0, 0, 1, 0],
      [0, 1, 0, 0, 0],
    ],
  },
];

export const SimpleMazeGame: React.FC<{
  onWin: () => void;
  onPlaySound: (type: "pop" | "win" | "wrong" | "ding") => void;
}> = ({ onWin, onPlaySound }) => {
  const { language } = useLanguage();
  const [levelIdx, setLevelIdx] = useState(0);
  const activeLevel = MAZE_LEVELS[levelIdx];
  const [playerPos, setPlayerPos] = useState({ r: 0, c: 0 });
  const [breadcrumbs, setBreadcrumbs] = useState<string[]>(["0,0"]);
  const [isWon, setIsWon] = useState(false);

  const goalPos = { r: 4, c: 4 };

  const resetMaze = useCallback(() => {
    setPlayerPos({ r: 0, c: 0 });
    setBreadcrumbs(["0,0"]);
    setIsWon(false);
  }, []);

  useEffect(() => {
    resetMaze();
  }, [activeLevel, resetMaze]);

  const movePlayer = (dr: number, dc: number) => {
    if (isWon) return;
    const nr = playerPos.r + dr;
    const nc = playerPos.c + dc;

    // Bounds check
    if (nr < 0 || nr > 4 || nc < 0 || nc > 4) {
      onPlaySound("wrong");
      return;
    }

    // Wall check
    if (activeLevel.grid[nr][nc] === 1) {
      onPlaySound("wrong");
      return;
    }

    onPlaySound("pop");
    setPlayerPos({ r: nr, c: nc });
    setBreadcrumbs((prev) => (prev.includes(`${nr},${nc}`) ? prev : [...prev, `${nr},${nc}`]));

    // Check goal
    if (nr === goalPos.r && nc === goalPos.c) {
      setIsWon(true);
      onPlaySound("win");
      triggerConfettiCelebration();
      onWin();
    }
  };

  return (
    <div className="flex flex-col items-center justify-between w-full max-w-xl mx-auto py-2">
      {/* Top Header */}
      <div className="w-full flex items-center justify-between mb-3 px-2">
        <div className="flex items-center gap-2">
          <Compass className="w-5 h-5 text-[#F36B12]" />
          <div>
            <h3 className="font-display font-black text-sm sm:text-base text-gray-900 leading-tight">
              {language === "ta" ? activeLevel.titleTa : activeLevel.titleEn}
            </h3>
            <span className="text-[10px] text-gray-500 font-semibold">
              {language === "ta"
                ? `${activeLevel.playerEmoji} ஐ ${activeLevel.goalEmoji} நோக்கி வழிநடத்துங்கள்!`
                : `Guide ${activeLevel.playerEmoji} to reach ${activeLevel.goalEmoji}!`}
            </span>
          </div>
        </div>

        <button
          onClick={() => setLevelIdx((prev) => (prev + 1) % MAZE_LEVELS.length)}
          className="px-2.5 py-1 rounded-xl text-xs font-bold bg-white hover:bg-gray-50 border border-gray-200 transition-colors flex items-center gap-1 cursor-pointer"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span className="text-[11px]">{language === "ta" ? "அடுத்த பாதை" : "Next Maze"}</span>
        </button>
      </div>

      {/* 5x5 Maze Grid */}
      <div className="p-3 bg-gradient-to-br from-amber-50/60 to-emerald-50/60 rounded-3xl border-2 border-gray-200 shadow-inner mb-4">
        <div className="grid grid-cols-5 gap-2 w-[240px] sm:w-[270px] h-[240px] sm:h-[270px]">
          {activeLevel.grid.map((row, r) =>
            row.map((cell, c) => {
              const isPlayer = playerPos.r === r && playerPos.c === c;
              const isGoal = goalPos.r === r && goalPos.c === c;
              const isWall = cell === 1;
              const hasBreadcrumb = breadcrumbs.includes(`${r},${c}`);

              return (
                <div
                  key={`${r}-${c}`}
                  onClick={() => {
                    // Tap adjacent tile to move
                    const dr = r - playerPos.r;
                    const dc = c - playerPos.c;
                    if (Math.abs(dr) + Math.abs(dc) === 1) {
                      movePlayer(dr, dc);
                    }
                  }}
                  className={`relative rounded-xl border flex items-center justify-center text-xl sm:text-2xl transition-all select-none ${
                    isWall
                      ? "bg-slate-300 border-slate-400 shadow-inner"
                      : isPlayer
                      ? "bg-white border-amber-400 shadow-md ring-2 ring-amber-300"
                      : isGoal
                      ? "bg-emerald-100 border-emerald-400 shadow-sm animate-pulse"
                      : hasBreadcrumb
                      ? "bg-amber-50/80 border-amber-200"
                      : "bg-white/80 border-gray-200 hover:bg-amber-50/40 cursor-pointer"
                  }`}
                >
                  {isPlayer && <span className="animate-bounce">{activeLevel.playerEmoji}</span>}
                  {!isPlayer && isGoal && <span>{activeLevel.goalEmoji}</span>}
                  {!isPlayer && !isGoal && hasBreadcrumb && (
                    <span className="w-2 h-2 rounded-full bg-amber-400 opacity-60" />
                  )}
                  {isWall && <span className="text-xs opacity-30">🧱</span>}
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* Tactile D-Pad Directional Controls */}
      <div className="flex flex-col items-center gap-1.5">
        <button
          onClick={() => movePlayer(-1, 0)}
          className="w-12 h-11 bg-white hover:bg-gray-50 border-2 border-gray-200 rounded-xl shadow-xs flex items-center justify-center font-black active:scale-90 cursor-pointer text-gray-700"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
        <div className="flex gap-2">
          <button
            onClick={() => movePlayer(0, -1)}
            className="w-12 h-11 bg-white hover:bg-gray-50 border-2 border-gray-200 rounded-xl shadow-xs flex items-center justify-center font-black active:scale-90 cursor-pointer text-gray-700"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => movePlayer(1, 0)}
            className="w-12 h-11 bg-white hover:bg-gray-50 border-2 border-gray-200 rounded-xl shadow-xs flex items-center justify-center font-black active:scale-90 cursor-pointer text-gray-700"
          >
            <ArrowDown className="w-5 h-5" />
          </button>
          <button
            onClick={() => movePlayer(0, 1)}
            className="w-12 h-11 bg-white hover:bg-gray-50 border-2 border-gray-200 rounded-xl shadow-xs flex items-center justify-center font-black active:scale-90 cursor-pointer text-gray-700"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Win Banner */}
      {isWon && (
        <div className="mt-3 p-3 w-full bg-emerald-50 border-2 border-emerald-400 rounded-2xl flex items-center justify-between animate-scaleUp">
          <div className="flex items-center gap-2">
            <Trophy className="w-6 h-6 text-emerald-600" />
            <p className="font-display font-black text-xs sm:text-sm text-emerald-900">
              {language === "ta" ? "வெற்றி! இலக்கை அடைந்தது!" : "Hooray! Goal Reached!"}
            </p>
          </div>
          <button
            onClick={resetMaze}
            className="px-3 py-1 bg-emerald-600 text-white font-bold text-xs rounded-xl shadow-xs hover:bg-emerald-700 cursor-pointer"
          >
            {language === "ta" ? "மீண்டும்" : "Play Again"}
          </button>
        </div>
      )}
    </div>
  );
};

// =========================================================================
// 7. NURSERY RHYMES JUKEBOX WITH PLAY/PAUSE
// =========================================================================
interface RhymeSong {
  id: string;
  titleEn: string;
  titleTa: string;
  emoji: string;
  bgGrad: string;
  notes: { word: string; freq: number; dur: number }[];
  tamilSummary: string;
}

const RHYMES_LIST: RhymeSong[] = [
  {
    id: "twinkle",
    titleEn: "Twinkle Twinkle Little Star",
    titleTa: "ட்விங்கிள் ட்விங்கிள் லிட்டில் ஸ்டார்",
    emoji: "⭐",
    bgGrad: "from-indigo-900/10 via-purple-50 to-amber-50",
    tamilSummary: "வானில் மின்னும் அழகான குட்டி நட்சத்திரப் பாடல்",
    notes: [
      { word: "Twin-kle", freq: 261.63, dur: 0.35 },
      { word: "twin-kle", freq: 261.63, dur: 0.35 },
      { word: "lit-tle", freq: 392.0, dur: 0.35 },
      { word: "star,", freq: 392.0, dur: 0.6 },
      { word: "How", freq: 440.0, dur: 0.35 },
      { word: "I", freq: 440.0, dur: 0.35 },
      { word: "won-der", freq: 392.0, dur: 0.6 },
      { word: "what", freq: 349.23, dur: 0.35 },
      { word: "you", freq: 349.23, dur: 0.35 },
      { word: "are!", freq: 329.63, dur: 0.6 },
      { word: "Up", freq: 329.63, dur: 0.35 },
      { word: "a-bove", freq: 293.66, dur: 0.35 },
      { word: "the", freq: 293.66, dur: 0.35 },
      { word: "world", freq: 261.63, dur: 0.6 },
      { word: "so", freq: 392.0, dur: 0.35 },
      { word: "high,", freq: 392.0, dur: 0.6 },
      { word: "Like", freq: 349.23, dur: 0.35 },
      { word: "a", freq: 349.23, dur: 0.35 },
      { word: "dia-mond", freq: 329.63, dur: 0.35 },
      { word: "in", freq: 329.63, dur: 0.35 },
      { word: "the", freq: 293.66, dur: 0.35 },
      { word: "sky!", freq: 261.63, dur: 0.7 },
    ],
  },
  {
    id: "macdonald",
    titleEn: "Old MacDonald Had a Farm",
    titleTa: "ஓல்ட் மெக்டொனால்டு பண்ணைப் பாடல்",
    emoji: "🚜",
    bgGrad: "from-emerald-50 via-amber-50 to-blue-50",
    tamilSummary: "பண்ணை விலங்குகளின் இனிமையான ஒலிப் பாடல்",
    notes: [
      { word: "Old", freq: 261.63, dur: 0.35 },
      { word: "Mac-Don-ald", freq: 261.63, dur: 0.35 },
      { word: "had", freq: 261.63, dur: 0.35 },
      { word: "a", freq: 196.0, dur: 0.35 },
      { word: "farm,", freq: 220.0, dur: 0.6 },
      { word: "E-", freq: 220.0, dur: 0.35 },
      { word: "I-", freq: 196.0, dur: 0.6 },
      { word: "E-", freq: 329.63, dur: 0.35 },
      { word: "I-", freq: 329.63, dur: 0.35 },
      { word: "O!", freq: 293.66, dur: 0.7 },
      { word: "And", freq: 293.66, dur: 0.35 },
      { word: "on", freq: 261.63, dur: 0.6 },
      { word: "that", freq: 261.63, dur: 0.35 },
      { word: "farm", freq: 261.63, dur: 0.35 },
      { word: "he", freq: 196.0, dur: 0.35 },
      { word: "had", freq: 220.0, dur: 0.35 },
      { word: "a", freq: 220.0, dur: 0.35 },
      { word: "cow!", freq: 196.0, dur: 0.7 },
    ],
  },
  {
    id: "bus",
    titleEn: "The Wheels on the Bus",
    titleTa: "பேருந்தின் சக்கரங்கள் பாடல்",
    emoji: "🚌",
    bgGrad: "from-yellow-50 via-sky-50 to-orange-50",
    tamilSummary: "ஊர் சுற்றும் பள்ளிக் குழந்தைகளுக்கான பேருந்து பாடல்",
    notes: [
      { word: "The", freq: 261.63, dur: 0.3 },
      { word: "wheels", freq: 349.23, dur: 0.3 },
      { word: "on", freq: 349.23, dur: 0.3 },
      { word: "the", freq: 349.23, dur: 0.3 },
      { word: "bus", freq: 349.23, dur: 0.4 },
      { word: "go", freq: 440.0, dur: 0.3 },
      { word: "round", freq: 523.25, dur: 0.3 },
      { word: "and", freq: 440.0, dur: 0.3 },
      { word: "round,", freq: 349.23, dur: 0.5 },
      { word: "Round", freq: 392.0, dur: 0.3 },
      { word: "and", freq: 392.0, dur: 0.3 },
      { word: "round,", freq: 392.0, dur: 0.5 },
      { word: "All", freq: 349.23, dur: 0.3 },
      { word: "through", freq: 329.63, dur: 0.3 },
      { word: "the", freq: 293.66, dur: 0.3 },
      { word: "town!", freq: 261.63, dur: 0.7 },
    ],
  },
];

export const NurseryRhymesGame: React.FC<{
  onWin: () => void;
  onPlaySound: (type: "pop" | "win" | "wrong" | "ding") => void;
}> = ({ onWin, onPlaySound }) => {
  const { language } = useLanguage();
  const [songIdx, setSongIdx] = useState(0);
  const activeSong = RHYMES_LIST[songIdx];
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeWordIdx, setActiveWordIdx] = useState<number>(-1);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const stopPlayback = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    setIsPlaying(false);
    setActiveWordIdx(-1);
  }, []);

  useEffect(() => {
    stopPlayback();
  }, [activeSong, stopPlayback]);

  const playSongFromWord = (idx: number) => {
    if (idx >= activeSong.notes.length) {
      stopPlayback();
      onWin();
      triggerConfettiCelebration();
      return;
    }

    setActiveWordIdx(idx);
    const note = activeSong.notes[idx];
    playKidAudio("melodyNote", { freq: note.freq, duration: note.dur });

    timerRef.current = setTimeout(() => {
      playSongFromWord(idx + 1);
    }, note.dur * 1000 + 70);
  };

  const handleTogglePlay = () => {
    if (isPlaying) {
      stopPlayback();
    } else {
      setIsPlaying(true);
      playSongFromWord(0);
    }
  };

  return (
    <div className="flex flex-col items-center justify-between w-full max-w-xl mx-auto py-2">
      {/* Top Header & Jukebox Tabs */}
      <div className="w-full flex items-center justify-between mb-3 px-2">
        <div className="flex items-center gap-2">
          <Music className="w-5 h-5 text-[#0750B8]" />
          <h3 className="font-display font-black text-sm sm:text-base text-gray-900 leading-tight">
            {language === "ta" ? activeSong.titleTa : activeSong.titleEn}
          </h3>
        </div>

        {/* Rhyme selector dropdown */}
        <select
          value={songIdx}
          onChange={(e) => {
            setSongIdx(Number(e.target.value));
            stopPlayback();
          }}
          className="bg-white border border-gray-200 text-xs font-bold text-gray-700 rounded-xl px-2.5 py-1 shadow-xs cursor-pointer focus:outline-none"
        >
          {RHYMES_LIST.map((song, i) => (
            <option key={song.id} value={i}>
              {song.emoji} {song.titleEn}
            </option>
          ))}
        </select>
      </div>

      {/* Main Jukebox Stage */}
      <div
        className={`w-full rounded-3xl p-5 sm:p-6 bg-gradient-to-br ${activeSong.bgGrad} border border-gray-200/80 shadow-md flex flex-col justify-between min-h-[260px] relative overflow-hidden`}
      >
        {/* Animated Visual Mascot */}
        <div className="text-center py-2">
          <span className={`text-6xl sm:text-7xl block mb-2 ${isPlaying ? "animate-bounce" : ""}`}>
            {activeSong.emoji}
          </span>
          <p className="text-[11px] font-semibold text-gray-500">
            {language === "ta" ? activeSong.tamilSummary : "Sing along with joyful chimes!"}
          </p>
        </div>

        {/* Karaoke Lyrics Display */}
        <div className="bg-white/95 backdrop-blur-xs p-4 rounded-2xl border border-white/80 shadow-inner flex flex-wrap items-center justify-center gap-2 max-w-md mx-auto">
          {activeSong.notes.map((note, idx) => {
            const isCurrent = activeWordIdx === idx;
            return (
              <span
                key={idx}
                className={`px-2 py-1 rounded-xl text-xs sm:text-sm font-black transition-all ${
                  isCurrent
                    ? "bg-[#F36B12] text-white scale-125 shadow-md ring-2 ring-orange-300"
                    : "text-gray-700 bg-gray-50/60"
                }`}
              >
                {note.word}
              </span>
            );
          })}
        </div>
      </div>

      {/* Media Playback Controls */}
      <div className="w-full flex items-center justify-center gap-4 mt-4">
        <button
          onClick={stopPlayback}
          className="p-3 bg-white hover:bg-gray-50 text-gray-700 rounded-2xl border border-gray-200 shadow-xs cursor-pointer active:scale-95 transition-all"
        >
          <RotateCcw className="w-5 h-5" />
        </button>

        <button
          onClick={handleTogglePlay}
          className={`px-6 py-3 rounded-2xl font-black text-sm shadow-md transition-all flex items-center gap-2 cursor-pointer ${
            isPlaying
              ? "bg-amber-500 hover:bg-amber-600 text-white"
              : "bg-[#0750B8] hover:bg-blue-700 text-white"
          }`}
        >
          {isPlaying ? (
            <>
              <Pause className="w-5 h-5" />
              <span>{language === "ta" ? "நிறுத்து" : "Pause"}</span>
            </>
          ) : (
            <>
              <Play className="w-5 h-5 fill-current" />
              <span>{language === "ta" ? "பாடலை இசைக்க" : "Play Rhyme"}</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

// =========================================================================
// 8. DRAG-AND-DROP OBJECT SORTING
// =========================================================================
interface SortCategory {
  id: string;
  titleEn: string;
  titleTa: string;
  color: string;
  emoji: string;
}

interface SortItem {
  id: string;
  emoji: string;
  nameEn: string;
  nameTa: string;
  categoryId: string;
}

const SORTING_THEMES = [
  {
    themeId: "nature",
    titleEn: "Animals vs Fruits Sorting",
    titleTa: "விலங்குகள் & பழங்கள் வகைப்படுத்துதல்",
    categories: [
      { id: "fruits", titleEn: "Fruits Basket", titleTa: "பழங்கள் கூடை", color: "#EF4444", emoji: "🍎" },
      { id: "animals", titleEn: "Wild Animals", titleTa: "விலங்குகள் காடு", color: "#10B981", emoji: "🦁" },
    ],
    items: [
      { id: "1", emoji: "🍌", nameEn: "Banana", nameTa: "வாழைப்பழம்", categoryId: "fruits" },
      { id: "2", emoji: "🐘", nameEn: "Elephant", nameTa: "யானை", categoryId: "animals" },
      { id: "3", emoji: "🍓", nameEn: "Berry", nameTa: "ஸ்ட்ராபெர்ரி", categoryId: "fruits" },
      { id: "4", emoji: "🐶", nameEn: "Dog", nameTa: "நாய்", categoryId: "animals" },
      { id: "5", emoji: "🥭", nameEn: "Mango", nameTa: "மாம்பழம்", categoryId: "fruits" },
      { id: "6", emoji: "🦁", nameEn: "Lion", nameTa: "சிங்கம்", categoryId: "animals" },
    ],
  },
  {
    themeId: "colors",
    titleEn: "Red vs Blue Box Sorting",
    titleTa: "சிவப்பு & நீல நிறப் பெட்டிகள்",
    categories: [
      { id: "red", titleEn: "Red Box", titleTa: "சிவப்புப் பெட்டி", color: "#E11D48", emoji: "🔴" },
      { id: "blue", titleEn: "Blue Box", titleTa: "நீலப் பெட்டி", color: "#2563EB", emoji: "🔵" },
    ],
    items: [
      { id: "1", emoji: "🍎", nameEn: "Red Apple", nameTa: "சிவப்பு ஆப்பிள்", categoryId: "red" },
      { id: "2", emoji: "🫐", nameEn: "Blueberry", nameTa: "ப்ளூபெர்ரி", categoryId: "blue" },
      { id: "3", emoji: "🚒", nameEn: "Fire Truck", nameTa: "தீயணைப்பு வண்டி", categoryId: "red" },
      { id: "4", emoji: "🐳", nameEn: "Blue Whale", nameTa: "நீல திமிங்கலம்", categoryId: "blue" },
      { id: "5", emoji: "🌹", nameEn: "Red Rose", nameTa: "சிவப்பு ரோஜா", categoryId: "red" },
      { id: "6", emoji: "🚙", nameEn: "Blue Car", nameTa: "நீல கார்", categoryId: "blue" },
    ],
  },
];

export const ObjectSortingGame: React.FC<{
  onWin: () => void;
  onPlaySound: (type: "pop" | "win" | "wrong" | "ding") => void;
}> = ({ onWin, onPlaySound }) => {
  const { language } = useLanguage();
  const [themeIdx, setThemeIdx] = useState(0);
  const activeTheme = SORTING_THEMES[themeIdx];
  const [unplacedItems, setUnplacedItems] = useState<SortItem[]>([]);
  // placedMap: { [categoryId]: SortItem[] }
  const [placedMap, setPlacedMap] = useState<Record<string, SortItem[]>>({});
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);
  const [isCompleted, setIsCompleted] = useState(false);

  const resetTheme = useCallback((theme: typeof SORTING_THEMES[0]) => {
    const initialMap: Record<string, SortItem[]> = {};
    theme.categories.forEach((cat) => {
      initialMap[cat.id] = [];
    });
    setPlacedMap(initialMap);
    // Shuffle items
    setUnplacedItems([...theme.items].sort(() => Math.random() - 0.5));
    setSelectedItemId(null);
    setIsCompleted(false);
  }, []);

  useEffect(() => {
    resetTheme(activeTheme);
  }, [activeTheme, resetTheme]);

  // Handle tap item to select
  const handleItemSelect = (item: SortItem) => {
    onPlaySound("pop");
    setSelectedItemId(selectedItemId === item.id ? null : item.id);
  };

  // Handle drop or assign to category
  const handleAssignToCategory = (targetCategoryId: string) => {
    if (!selectedItemId) return;
    const item = unplacedItems.find((i) => i.id === selectedItemId);
    if (!item) return;

    if (item.categoryId === targetCategoryId) {
      onPlaySound("ding");
      setPlacedMap((prev) => ({
        ...prev,
        [targetCategoryId]: [...(prev[targetCategoryId] || []), item],
      }));
      const nextRemaining = unplacedItems.filter((i) => i.id !== selectedItemId);
      setUnplacedItems(nextRemaining);
      setSelectedItemId(null);

      if (nextRemaining.length === 0) {
        setIsCompleted(true);
        onPlaySound("win");
        triggerConfettiCelebration();
        onWin();
      }
    } else {
      onPlaySound("wrong");
    }
  };

  return (
    <div className="flex flex-col items-center justify-between w-full max-w-xl mx-auto py-2">
      {/* Top Header & Switcher */}
      <div className="w-full flex items-center justify-between mb-3 px-2">
        <div>
          <h3 className="font-display font-black text-sm sm:text-base text-gray-900 leading-tight">
            {language === "ta" ? activeTheme.titleTa : activeTheme.titleEn}
          </h3>
          <span className="text-[10px] text-gray-500 font-semibold">
            {language === "ta"
              ? "பொருளைத் தொட்டு, சரியான பெட்டியில் வைக்கவும்"
              : "Tap an item, then tap the matching basket!"}
          </span>
        </div>

        <button
          onClick={() => setThemeIdx((prev) => (prev + 1) % SORTING_THEMES.length)}
          className="px-2.5 py-1 rounded-xl text-xs font-bold bg-white hover:bg-gray-50 border border-gray-200 transition-colors flex items-center gap-1 cursor-pointer"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span className="text-[11px]">{language === "ta" ? "வேறு தலைப்பு" : "Switch Theme"}</span>
        </button>
      </div>

      {/* Target Category Bins */}
      <div className="w-full grid grid-cols-2 gap-3 mb-4">
        {activeTheme.categories.map((cat) => {
          const itemsInCat = placedMap[cat.id] || [];
          return (
            <div
              key={cat.id}
              onClick={() => handleAssignToCategory(cat.id)}
              className={`p-3.5 rounded-3xl border-2 transition-all cursor-pointer min-h-[140px] flex flex-col justify-between ${
                selectedItemId !== null
                  ? "border-[#F36B12] bg-orange-50/40 hover:bg-orange-100/60 shadow-md ring-2 ring-[#F36B12]/20"
                  : "border-gray-200 bg-white hover:border-gray-300 shadow-xs"
              }`}
            >
              <div className="flex items-center gap-2 mb-2 pb-1.5 border-b border-gray-100">
                <span className="text-2xl">{cat.emoji}</span>
                <div>
                  <h4 className="font-display font-black text-xs sm:text-sm text-gray-900 leading-tight">
                    {language === "ta" ? cat.titleTa : cat.titleEn}
                  </h4>
                  <span className="text-[10px] text-gray-500 font-bold">
                    {itemsInCat.length} {language === "ta" ? "பொருட்கள்" : "Items"}
                  </span>
                </div>
              </div>

              {/* Items placed inside this bin */}
              <div className="flex flex-wrap gap-1.5 min-h-[48px] items-center">
                {itemsInCat.length === 0 ? (
                  <span className="text-[10px] text-gray-400 font-medium italic mx-auto">
                    {language === "ta" ? "இங்கே போடவும் ⬇️" : "Drop here ⬇️"}
                  </span>
                ) : (
                  itemsInCat.map((item) => (
                    <span
                      key={item.id}
                      className="text-2xl p-1 bg-gray-50 rounded-xl shadow-xs border border-gray-200 animate-scaleUp"
                      title={language === "ta" ? item.nameTa : item.nameEn}
                    >
                      {item.emoji}
                    </span>
                  ))
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Tray of Unplaced Items */}
      <div className="w-full p-4 rounded-3xl bg-gradient-to-br from-slate-50 to-orange-50/30 border border-gray-200 text-center">
        <span className="text-[10px] font-extrabold uppercase tracking-wider text-gray-500 block mb-2">
          {language === "ta"
            ? `வரிசைப்படுத்த வேண்டியவை (${unplacedItems.length} மீதம்)`
            : `Items To Sort (${unplacedItems.length} Remaining)`}
        </span>

        <div className="flex flex-wrap items-center justify-center gap-2.5 min-h-[64px]">
          {unplacedItems.length === 0 ? (
            <div className="text-emerald-600 font-bold text-xs py-2 animate-bounce">
              🎉 {language === "ta" ? "அனைத்து பொருட்களும் சரியாக பிரிக்கப்பட்டன!" : "All items sorted perfectly!"}
            </div>
          ) : (
            unplacedItems.map((item) => {
              const isSelected = selectedItemId === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleItemSelect(item)}
                  className={`p-2.5 rounded-2xl border-2 transition-all flex flex-col items-center justify-center cursor-pointer ${
                    isSelected
                      ? "bg-[#FFF2E8] border-[#F36B12] shadow-md scale-110 ring-2 ring-[#F36B12]/40"
                      : "bg-white border-gray-200 hover:border-gray-300 shadow-xs hover:scale-105"
                  }`}
                  style={{ width: "65px", height: "65px" }}
                >
                  <span className="text-2xl">{item.emoji}</span>
                  <span className="text-[8px] font-bold text-gray-700 truncate max-w-[55px] mt-0.5">
                    {language === "ta" ? item.nameTa : item.nameEn}
                  </span>
                </button>
              );
            })
          )}
        </div>
      </div>

      {/* Completion Banner */}
      {isCompleted && (
        <div className="mt-3 p-3 w-full bg-emerald-50 border-2 border-emerald-400 rounded-2xl flex items-center justify-between animate-scaleUp">
          <div className="flex items-center gap-2">
            <Trophy className="w-6 h-6 text-emerald-600" />
            <div>
              <p className="font-display font-black text-xs sm:text-sm text-emerald-900">
                {language === "ta" ? "சிறப்பு! அனைத்தும் வரிசைப்படுத்தப்பட்டது!" : "Great Sorting Skills!"}
              </p>
              <p className="text-[10px] text-emerald-700 font-semibold">
                {language === "ta" ? "+4 நட்சத்திரங்கள் வென்றீர்கள்!" : "+4 Stars Earned!"}
              </p>
            </div>
          </div>
          <button
            onClick={() => resetTheme(activeTheme)}
            className="px-3 py-1 bg-emerald-600 text-white font-bold text-xs rounded-xl shadow-xs hover:bg-emerald-700 cursor-pointer"
          >
            {language === "ta" ? "மீண்டும்" : "Play Again"}
          </button>
        </div>
      )}
    </div>
  );
};
