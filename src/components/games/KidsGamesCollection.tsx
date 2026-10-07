"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Trophy,
  RotateCcw,
  Volume2,
  VolumeX,
  Star,
  Sparkles,
  Play,
  Heart,
  Palette,
  Music,
  Maximize2,
  Minimize2,
  CheckCircle2,
  Eraser,
  Trash2,
  Download,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

// Web Audio API helper for rich realistic kids sound effects
export const playChime = (type: "pop" | "win" | "wrong" | "ding" | "piano", noteFreq?: number) => {
  if (typeof window === "undefined") return;
  try {
    const AudioCtx =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();

    if (type === "piano" && noteFreq) {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(noteFreq, ctx.currentTime);
      gain.gain.setValueAtTime(0.35, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.8);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.8);
    } else if (type === "ding" || type === "pop") {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(type === "ding" ? 587.33 : 440, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(type === "ding" ? 880 : 880, ctx.currentTime + 0.15);
      gain.gain.setValueAtTime(0.3, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.2);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.2);
    } else if (type === "win") {
      [523.25, 659.25, 783.99, 1046.5].forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "triangle";
        osc.frequency.setValueAtTime(freq, ctx.currentTime + i * 0.1);
        gain.gain.setValueAtTime(0.25, ctx.currentTime + i * 0.1);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + i * 0.1 + 0.3);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + i * 0.1);
        osc.stop(ctx.currentTime + i * 0.1 + 0.3);
      });
    } else if (type === "wrong") {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(220, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(110, ctx.currentTime + 0.25);
      gain.gain.setValueAtTime(0.2, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.25);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.25);
    }
  } catch {
    // Ignore audio failures if restricted
  }
};

export type GameId =
  | "tower"
  | "shapes"
  | "balloon"
  | "memory"
  | "basket"
  | "phonics"
  | "drawing"
  | "piano";

export interface GameMetadata {
  id: GameId;
  titleEn: string;
  titleTa: string;
  category: "sensory" | "math" | "art" | "memory";
  emoji: string;
  color: string;
  bgGrad: string;
  badgeEn: string;
  badgeTa: string;
  descEn: string;
  descTa: string;
  recommendedAge: string;
}

export const KIDS_GAMES_LIST: GameMetadata[] = [
  {
    id: "tower",
    titleEn: "Pink Tower Builder",
    titleTa: "பிங்க் டவர் அடுக்குதல்",
    category: "sensory",
    emoji: "🏗️",
    color: "#F36B12",
    bgGrad: "from-[#FFF2E8] to-white",
    badgeEn: "Montessori Classic",
    badgeTa: "மாண்டிசோரி முறை",
    descEn: "Stack 6 wooden blocks from largest base to the smallest top block to test spatial balance.",
    descTa: "அடிப்பகுதி முதல் உச்சி வரை தொகுதிகளை வரிசையாக அடுக்கி டவர் உருவாக்கும் விளையாட்டு.",
    recommendedAge: "Age 2 - 6",
  },
  {
    id: "shapes",
    titleEn: "Shape & Color Sorter",
    titleTa: "வடிவம் & நிறப் பொருத்தம்",
    category: "sensory",
    emoji: "🔷",
    color: "#0750B8",
    bgGrad: "from-[#EBF3FF] to-white",
    badgeEn: "Sensorial Logic",
    badgeTa: "அறிவாற்றல் வளர்ச்சி",
    descEn: "Match glowing colorful geometric shapes into their matching target silhouettes.",
    descTa: "வட்டம், முக்கோணம், நட்சத்திரம் போன்ற வடிவங்களை சரியான இடங்களில் பொருத்துங்கள்.",
    recommendedAge: "Age 2 - 5",
  },
  {
    id: "balloon",
    titleEn: "Balloon Math & Pop",
    titleTa: "பலூன் கணித விளையாட்டு",
    category: "math",
    emoji: "🎈",
    color: "#159447",
    bgGrad: "from-[#EAF8EF] to-white",
    badgeEn: "Speed Math",
    badgeTa: "எளிய கூட்டல்",
    descEn: "Solve addition puzzles by popping the balloon displaying the correct sum.",
    descTa: "சரியான விடை கொண்ட வண்ணமயமான பலூன்களை வெடித்து புள்ளிகள் பெறுங்கள்.",
    recommendedAge: "Age 4 - 8",
  },
  {
    id: "memory",
    titleEn: "Safari Animal Memory",
    titleTa: "விலங்குகள் நினைவாற்றல்",
    category: "memory",
    emoji: "🦁",
    color: "#D97706",
    bgGrad: "from-amber-50 to-white",
    badgeEn: "Brain Booster",
    badgeTa: "நினைவாற்றல் பயிற்சி",
    descEn: "Flip and match pairs of joyful jungle animals: Lion, Elephant, Panda, Monkey, and Giraffe.",
    descTa: "அட்டைகளை திருப்பி ஒரே மாதிரியான விலங்கு ஜோடிகளை கண்டுபிடிக்கும் நினைவாற்றல் விளையாட்டு.",
    recommendedAge: "Age 3 - 8",
  },
  {
    id: "basket",
    titleEn: "Fruit Harvest Counting",
    titleTa: "பழங்கள் எண்ணும் கூடை",
    category: "math",
    emoji: "🍎",
    color: "#E11D48",
    bgGrad: "from-rose-50 to-white",
    badgeEn: "Early Counting",
    badgeTa: "எண்ணிக்கை பயிற்சி",
    descEn: "Tap and collect delicious fruits into the harvest basket to match the target number.",
    descTa: "கேட்கப்படும் எண்ணிக்கைக்கு ஏற்ப ஆப்பிள், மாம்பழம் ஆகியவற்றை கூடையில் சேருங்கள்.",
    recommendedAge: "Age 2 - 6",
  },
  {
    id: "phonics",
    titleEn: "Phonics & Letter Safari",
    titleTa: "ஃபோனிக்ஸ் ஒலிப்பயிற்சி",
    category: "memory",
    emoji: "🔤",
    color: "#7C3AED",
    bgGrad: "from-purple-50 to-white",
    badgeEn: "Reading & Speech",
    badgeTa: "ஒலி உச்சரிப்பு",
    descEn: "Explore alphabet letter sounds with interactive illustrations, words, and clear phonics.",
    descTa: "ஒவ்வொரு ஆங்கில எழுத்தின் ஒலி மற்றும் படங்களை தொட்டுப் பார்த்து கற்றுக்கொள்ளுங்கள்.",
    recommendedAge: "Age 3 - 7",
  },
  {
    id: "drawing",
    titleEn: "Magic Drawing Canvas",
    titleTa: "வர்ணஜாலம் ஓவிய பலகை",
    category: "art",
    emoji: "🎨",
    color: "#EC4899",
    bgGrad: "from-pink-50 to-white",
    badgeEn: "Creative Arts",
    badgeTa: "கற்பனை ஓவியம்",
    descEn: "Freehand drawing pad with rainbow palette, brush sizes, fun stickers, and eraser.",
    descTa: "வண்ணங்கள், பிரஷ் அளவுகள் மற்றும் ஸ்டிக்கர்களைப் பயன்படுத்தி அழகான ஓவியங்களை வரையலாம்.",
    recommendedAge: "Age 2 - 10",
  },
  {
    id: "piano",
    titleEn: "Rainbow Kids Piano",
    titleTa: "வானவில் இசைப் பியானோ",
    category: "art",
    emoji: "🎹",
    color: "#0284C7",
    bgGrad: "from-sky-50 to-white",
    badgeEn: "Musical Chimes",
    badgeTa: "இசை உணர்வு",
    descEn: "8-key interactive melody piano to compose cute nursery rhymes and explore notes.",
    descTa: "வானவில் வண்ணக் கட்டைகளைத் தட்டி இனிமையான பாடல்களையும் ஒலிகளையும் இசைக்கலாம்.",
    recommendedAge: "Age 2 - 8",
  },
];

// ==========================================
// 1. TOWER BUILDER GAME
// ==========================================
const TOWER_SIZES = [100, 85, 70, 55, 40, 25]; // From base to top

export const TowerBuilderGame: React.FC<{
  onWin: () => void;
  onPlaySound: (type: "pop" | "win" | "wrong" | "ding") => void;
}> = ({ onWin, onPlaySound }) => {
  const { language } = useLanguage();
  const [stacked, setStacked] = useState<number[]>([]);
  const [available, setAvailable] = useState<number[]>([40, 100, 25, 85, 55, 70]);
  const [gameOver, setGameOver] = useState(false);

  const resetGame = () => {
    setStacked([]);
    setAvailable([40, 100, 25, 85, 55, 70]);
    setGameOver(false);
  };

  const handlePlaceBlock = (size: number) => {
    const nextIndex = stacked.length;
    const expectedSize = TOWER_SIZES[nextIndex];

    if (size === expectedSize) {
      onPlaySound("pop");
      const nextStacked = [...stacked, size];
      setStacked(nextStacked);
      setAvailable(available.filter((s) => s !== size));

      if (nextStacked.length === TOWER_SIZES.length) {
        setGameOver(true);
        onPlaySound("win");
        onWin();
      }
    } else {
      onPlaySound("wrong");
    }
  };

  return (
    <div className="flex flex-col items-center justify-between min-h-[340px] sm:min-h-[380px] w-full">
      <div className="text-center mb-3">
        <h4 className="font-display font-black text-lg sm:text-xl text-[#0F172A]">
          {language === "ta" ? "மாண்டிசோரி பிங்க் டவர்" : "Montessori Pink Tower"}
        </h4>
        <p className="text-[11px] sm:text-xs text-gray-500 font-medium">
          {language === "ta"
            ? "பெரிய அடித்தளத்திலிருந்து சிறிய தொகுதி வரை வரிசையாக அடுக்குக!"
            : "Tap largest base block first, then stack to smallest!"}
        </p>
      </div>

      {/* Tower Display Stage */}
      <div className="relative w-full max-w-[280px] sm:max-w-sm h-48 sm:h-56 bg-gradient-to-b from-sky-50/50 to-amber-50/50 rounded-2xl border-2 border-dashed border-gray-200 flex flex-col-reverse items-center justify-start p-2 sm:p-3 shadow-inner">
        {/* Base line */}
        <div className="w-40 sm:w-48 h-2.5 sm:h-3 bg-amber-800/80 rounded-full mb-1 shadow-sm" />

        {stacked.map((size, idx) => (
          <div
            key={idx}
            style={{ width: `calc(${size}% * 1.8 + 20px)`, maxWidth: "240px", height: "22px" }}
            className="bg-gradient-to-r from-pink-500 via-rose-400 to-pink-600 rounded-lg shadow-md border border-pink-300 flex items-center justify-center text-white text-[10px] font-black animate-scaleUp my-0.5"
          >
            ⭐ {idx + 1}
          </div>
        ))}

        {stacked.length === 0 && (
          <div className="text-[11px] sm:text-xs font-bold text-gray-400 my-auto animate-pulse text-center px-2">
            {language === "ta" ? "கீழே உள்ள பெரிய கட்டியைத் தொடுங்கள் ⬇️" : "Tap the biggest block below to start ⬇️"}
          </div>
        )}
      </div>

      {/* Available Blocks to Pick */}
      {!gameOver ? (
        <div className="w-full mt-3">
          <div className="text-[10px] sm:text-[11px] font-bold text-gray-400 text-center mb-1.5 uppercase tracking-wider">
            {language === "ta" ? "கிடைக்கும் தொகுதிகள் (சரியானதை தேர்ந்தெடுக்கவும்)" : "Available Blocks (Tap to place)"}
          </div>
          <div className="flex items-center justify-center gap-1.5 sm:gap-3 flex-wrap">
            {available.map((size) => (
              <button
                key={size}
                onClick={() => handlePlaceBlock(size)}
                className="w-11 sm:w-14 h-10 sm:h-12 bg-gradient-to-br from-pink-400 to-rose-500 hover:from-pink-500 hover:to-rose-600 active:scale-90 rounded-xl shadow-md border-2 border-white text-white font-bold text-xs flex items-center justify-center transition-all cursor-pointer hover:shadow-lg"
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="w-full mt-3 p-3.5 sm:p-4 bg-emerald-50 border-2 border-emerald-300 rounded-2xl text-center animate-scaleUp shadow-sm">
          <div className="text-xl sm:text-2xl mb-1">🎉 🏆 ⭐</div>
          <h5 className="font-display font-extrabold text-base sm:text-lg text-emerald-800">
            {language === "ta" ? "அருமை! டவர் முழுமை பெற்றது!" : "Spectacular! Tower Complete!"}
          </h5>
          <p className="text-[11px] sm:text-xs text-emerald-700 font-semibold mb-2.5">
            {language === "ta" ? "சிறந்த இடஞ்சார்ந்த சமநிலை அறிவு • +5 நட்சத்திரங்கள் ⭐" : "Excellent Spatial Logic • +5 Stars Awarded!"}
          </p>
          <button
            onClick={resetGame}
            className="px-5 py-2 rounded-full bg-[#159447] text-white font-bold text-xs shadow-md hover:bg-[#117a3a] transition-all flex items-center gap-1.5 mx-auto cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>{language === "ta" ? "மீண்டும் விளையாடு" : "Play Again"}</span>
          </button>
        </div>
      )}
    </div>
  );
};

// ==========================================
// 2. SHAPE & COLOR SORTER GAME
// ==========================================
const SHAPES = [
  { id: "circle", labelEn: "Circle", labelTa: "வட்டம்", icon: "🔴", color: "bg-red-500" },
  { id: "triangle", labelEn: "Triangle", labelTa: "முக்கோணம்", icon: "🔺", color: "bg-amber-500" },
  { id: "square", labelEn: "Square", labelTa: "சதுரம்", icon: "🟦", color: "bg-blue-500" },
  { id: "star", labelEn: "Star", labelTa: "நட்சத்திரம்", icon: "⭐", color: "bg-yellow-400" },
  { id: "heart", labelEn: "Heart", labelTa: "இதயம்", icon: "💖", color: "bg-pink-500" },
  { id: "diamond", labelEn: "Diamond", labelTa: "வைரம்", icon: "💎", color: "bg-cyan-400" },
];

export const ShapeMatchGame: React.FC<{
  onWin: () => void;
  onPlaySound: (type: "pop" | "win" | "wrong" | "ding") => void;
}> = ({ onWin, onPlaySound }) => {
  const { language } = useLanguage();
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  const targetShape = SHAPES[currentIdx % SHAPES.length];

  const handleSelect = (shapeId: string) => {
    if (shapeId === targetShape.id) {
      onPlaySound("pop");
      const nextScore = score + 1;
      setScore(nextScore);

      if (nextScore >= 6) {
        setCompleted(true);
        onPlaySound("win");
        onWin();
      } else {
        setCurrentIdx((prev) => prev + 1);
      }
    } else {
      onPlaySound("wrong");
    }
  };

  const restart = () => {
    setScore(0);
    setCurrentIdx(0);
    setCompleted(false);
  };

  return (
    <div className="flex flex-col items-center justify-between min-h-[340px] sm:min-h-[380px] w-full text-center">
      <div>
        <h4 className="font-display font-black text-lg sm:text-xl text-[#0F172A]">
          {language === "ta" ? "வடிவம் & நிறப் பொருத்தம்" : "Shape & Color Sorter"}
        </h4>
        <p className="text-[11px] sm:text-xs text-gray-500 font-medium">
          {language === "ta" ? "காட்டப்படும் வடிவத்தை கீழே உள்ளவற்றில் தேர்ந்தெடுக்கவும்" : "Find and tap the matching silhouette shape below"}
        </p>
      </div>

      {!completed ? (
        <div className="w-full max-w-sm space-y-4 sm:space-y-6 my-auto">
          {/* Target silhouette card */}
          <div className="p-4 sm:p-6 bg-gradient-to-b from-blue-50 to-indigo-50/50 rounded-3xl border-2 border-blue-200 shadow-md flex flex-col items-center justify-center animate-scaleUp">
            <div className="text-5xl sm:text-6xl mb-1.5 drop-shadow-md animate-bounce">
              {targetShape.icon}
            </div>
            <div className="font-display font-black text-lg sm:text-xl text-[#0750B8]">
              {language === "ta" ? targetShape.labelTa : targetShape.labelEn}
            </div>
            <div className="text-[10px] sm:text-[11px] font-bold text-gray-400 mt-0.5">
              {language === "ta" ? "வெற்றிகள்:" : "Matches:"} {score} / 6 ⭐
            </div>
          </div>

          {/* Options grid */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            {SHAPES.map((shape) => (
              <button
                key={shape.id}
                onClick={() => handleSelect(shape.id)}
                className="p-2 sm:p-3 rounded-2xl bg-white hover:bg-blue-50/60 border-2 border-gray-200 hover:border-[#0750B8] shadow-xs hover:shadow-sm transition-all flex flex-col items-center gap-0.5 active:scale-95 cursor-pointer"
              >
                <span className="text-2xl sm:text-3xl">{shape.icon}</span>
                <span className="text-[11px] sm:text-xs font-bold text-gray-700">
                  {language === "ta" ? shape.labelTa : shape.labelEn}
                </span>
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="w-full max-w-sm p-5 sm:p-6 bg-blue-50 border-2 border-blue-200 rounded-3xl text-center animate-scaleUp my-auto">
          <div className="text-3xl sm:text-4xl mb-1.5">🎉 🔷 ⭐</div>
          <h5 className="font-display font-extrabold text-lg sm:text-xl text-blue-900">
            {language === "ta" ? "அருமையான வடிவியல் அறிவு!" : "Geometry Champ!"}
          </h5>
          <p className="text-[11px] sm:text-xs text-blue-700 font-semibold mb-3.5">
            {language === "ta" ? "6 வடிவங்களையும் சரியாகப் பொருத்தினீர்கள்! +4 நட்சத்திரங்கள் ⭐" : "Matched 6 geometric silhouettes! +4 Stars Awarded"}
          </p>
          <button
            onClick={restart}
            className="px-5 py-2 rounded-full bg-[#0750B8] text-white font-bold text-xs shadow-md hover:bg-blue-800 transition-all cursor-pointer"
          >
            {language === "ta" ? "மீண்டும் விளையாடு" : "Play Again"}
          </button>
        </div>
      )}
    </div>
  );
};

// ==========================================
// 3. BALLOON MATH POP GAME
// ==========================================
export const BalloonMathGame: React.FC<{
  onWin: () => void;
  onPlaySound: (type: "pop" | "win" | "wrong" | "ding") => void;
}> = ({ onWin, onPlaySound }) => {
  const { language } = useLanguage();
  const [numA, setNumA] = useState(3);
  const [numB, setNumB] = useState(4);
  const [options, setOptions] = useState<number[]>([7, 5, 8, 9]);
  const [score, setScore] = useState(0);
  const [gameWon, setGameWon] = useState(false);

  const generateProblem = (currentScore: number) => {
    const a = Math.floor(Math.random() * 5) + 1;
    const b = Math.floor(Math.random() * 5) + 1;
    const correct = a + b;
    const wrongs = new Set<number>();
    while (wrongs.size < 3) {
      const r = Math.floor(Math.random() * 10) + 2;
      if (r !== correct) wrongs.add(r);
    }
    const all = [correct, ...Array.from(wrongs)].sort(() => Math.random() - 0.5);
    setNumA(a);
    setNumB(b);
    setOptions(all);

    if (currentScore >= 5) {
      setGameWon(true);
      onWin();
    }
  };

  const handlePop = (val: number) => {
    if (val === numA + numB) {
      onPlaySound("pop");
      const next = score + 1;
      setScore(next);
      generateProblem(next);
    } else {
      onPlaySound("wrong");
    }
  };

  const restart = () => {
    setScore(0);
    setGameWon(false);
    generateProblem(0);
  };

  const balloonGradients = [
    "from-red-400 to-rose-600",
    "from-sky-400 to-blue-600",
    "from-emerald-400 to-green-600",
    "from-amber-400 to-orange-600",
  ];

  return (
    <div className="flex flex-col items-center justify-between min-h-[340px] sm:min-h-[380px] w-full text-center">
      <div>
        <h4 className="font-display font-black text-lg sm:text-xl text-[#0F172A]">
          {language === "ta" ? "பலூன் கணித விளையாட்டு" : "Balloon Math Pop"}
        </h4>
        <p className="text-[11px] sm:text-xs text-gray-500 font-medium">
          {language === "ta" ? "சரியான விடை கொண்ட பலூனை தொட்டு வெடிக்கச் செய்யுங்கள்!" : "Pop the balloon with the correct sum answer!"}
        </p>
      </div>

      {!gameWon ? (
        <div className="w-full max-w-sm space-y-4 sm:space-y-5 my-auto">
          {/* Question banner */}
          <div className="p-3.5 sm:p-5 bg-gradient-to-r from-[#159447] to-[#1bb557] rounded-3xl text-white shadow-lg flex items-center justify-center gap-2.5 sm:gap-3">
            <span className="font-display font-black text-2xl sm:text-3xl">{numA}</span>
            <span className="text-xl sm:text-2xl font-bold">+</span>
            <span className="font-display font-black text-2xl sm:text-3xl">{numB}</span>
            <span className="text-xl sm:text-2xl font-bold">=</span>
            <span className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-white/30 backdrop-blur-md flex items-center justify-center font-black text-xl sm:text-2xl">
              ?
            </span>
          </div>

          <div className="text-[11px] sm:text-xs font-bold text-gray-400">
            {language === "ta" ? "தீர்க்கப்பட்ட புதிர்கள்:" : "Puzzles Solved:"} <span className="text-[#159447]">{score} / 5 ⭐</span>
          </div>

          {/* 4 Balloon Buttons */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {options.map((opt, i) => (
              <button
                key={i}
                onClick={() => handlePop(opt)}
                className={`p-4 sm:p-6 rounded-full bg-gradient-to-b ${balloonGradients[i % balloonGradients.length]} text-white font-display font-black text-2xl sm:text-3xl shadow-lg hover:scale-105 active:scale-95 transition-transform flex items-center justify-center cursor-pointer border-2 border-white/40`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="p-6 sm:p-8 bg-emerald-50 rounded-3xl border-2 border-emerald-300 text-center animate-scaleUp my-auto">
          <div className="text-4xl sm:text-5xl mb-1.5">🎉 🎈 ⭐</div>
          <h4 className="font-display font-extrabold text-xl sm:text-2xl text-emerald-900">
            {language === "ta" ? "கணித சாதனையாளர்!" : "Math Superstar!"}
          </h4>
          <p className="text-[11px] sm:text-xs text-emerald-700 font-semibold mt-0.5 mb-3.5">
            {language === "ta" ? "5 கணித புதிர்களை தீர்த்தீர்கள் • +4 நட்சத்திரங்கள் ⭐" : "Solved 5 math puzzles with speed • +4 Stars ⭐"}
          </p>
          <button
            onClick={restart}
            className="px-5 py-2 rounded-full bg-[#159447] text-white text-xs font-bold shadow-md cursor-pointer hover:bg-[#117a3a]"
          >
            {language === "ta" ? "மீண்டும் விளையாடு" : "Play Again"}
          </button>
        </div>
      )}
    </div>
  );
};

// ==========================================
// 4. SAFARI ANIMAL MEMORY MATCH GAME
// ==========================================
const SAFARI_ANIMALS = [
  { id: "lion", emoji: "🦁", nameEn: "Lion", nameTa: "சிங்கம்" },
  { id: "elephant", emoji: "🐘", nameEn: "Elephant", nameTa: "யானை" },
  { id: "monkey", emoji: "🐵", nameEn: "Monkey", nameTa: "குரங்கு" },
  { id: "panda", emoji: "🐼", nameEn: "Panda", nameTa: "பாண்டா" },
  { id: "giraffe", emoji: "🦒", nameEn: "Giraffe", nameTa: "ஒட்டகச்சிவிங்கி" },
  { id: "penguin", emoji: "🐧", nameEn: "Penguin", nameTa: "பென்குயின்" },
];

export const AnimalMemoryGame: React.FC<{
  onWin: () => void;
  onPlaySound: (type: "pop" | "win" | "wrong" | "ding") => void;
}> = ({ onWin, onPlaySound }) => {
  const { language } = useLanguage();
  const [cards, setCards] = useState<Array<{ uid: number; animalId: string; emoji: string; isFlipped: boolean; isMatched: boolean }>>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [matchesCount, setMatchesCount] = useState(0);
  const [isWon, setIsWon] = useState(false);

  const initGame = () => {
    const deck = [...SAFARI_ANIMALS, ...SAFARI_ANIMALS]
      .sort(() => Math.random() - 0.5)
      .map((item, index) => ({
        uid: index,
        animalId: item.id,
        emoji: item.emoji,
        isFlipped: false,
        isMatched: false,
      }));
    setCards(deck);
    setFlippedCards([]);
    setMatchesCount(0);
    setIsWon(false);
  };

  useEffect(() => {
    initGame();
  }, []);

  const handleCardClick = (uid: number) => {
    if (flippedCards.length === 2) return;
    const clicked = cards.find((c) => c.uid === uid);
    if (!clicked || clicked.isFlipped || clicked.isMatched) return;

    onPlaySound("ding");
    const updated = cards.map((c) => (c.uid === uid ? { ...c, isFlipped: true } : c));
    setCards(updated);

    const newFlipped = [...flippedCards, uid];
    setFlippedCards(newFlipped);

    if (newFlipped.length === 2) {
      const [firstUid, secondUid] = newFlipped;
      const card1 = updated.find((c) => c.uid === firstUid);
      const card2 = updated.find((c) => c.uid === secondUid);

      if (card1 && card2 && card1.animalId === card2.animalId) {
        onPlaySound("pop");
        const matchedCards = updated.map((c) =>
          c.uid === firstUid || c.uid === secondUid ? { ...c, isMatched: true } : c
        );
        setCards(matchedCards);
        setFlippedCards([]);
        const nextMatches = matchesCount + 1;
        setMatchesCount(nextMatches);

        if (nextMatches === SAFARI_ANIMALS.length) {
          setIsWon(true);
          onPlaySound("win");
          onWin();
        }
      } else {
        setTimeout(() => {
          onPlaySound("wrong");
          setCards((prev) =>
            prev.map((c) => (c.uid === firstUid || c.uid === secondUid ? { ...c, isFlipped: false } : c))
          );
          setFlippedCards([]);
        }, 800);
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-between min-h-[340px] sm:min-h-[380px] w-full text-center">
      <div>
        <h4 className="font-display font-black text-lg sm:text-xl text-[#0F172A]">
          {language === "ta" ? "விலங்குகள் நினைவாற்றல் விளையாட்டு" : "Safari Animal Memory Match"}
        </h4>
        <p className="text-[11px] sm:text-xs text-gray-500 font-medium">
          {language === "ta" ? "அட்டைகளைத் திருப்பி ஒரே மாதிரியான 6 ஜோடி விலங்குகளை இணையுங்கள்!" : "Flip cards to match 6 jungle animal pairs!"}
        </p>
      </div>

      {!isWon ? (
        <div className="w-full max-w-sm space-y-3 sm:space-y-4 my-auto">
          <div className="grid grid-cols-4 gap-1.5 sm:gap-2.5">
            {cards.map((card) => (
              <button
                key={card.uid}
                onClick={() => handleCardClick(card.uid)}
                className={`aspect-square rounded-2xl text-2xl sm:text-3xl font-bold flex items-center justify-center transition-all duration-300 transform shadow-xs cursor-pointer ${
                  card.isFlipped || card.isMatched
                    ? "bg-gradient-to-br from-amber-100 to-amber-200 border-2 border-amber-400 scale-100"
                    : "bg-gradient-to-br from-[#0750B8] to-[#1E3A8A] text-white border-2 border-white/30 hover:scale-105"
                }`}
              >
                {card.isFlipped || card.isMatched ? card.emoji : "🐾"}
              </button>
            ))}
          </div>
          <div className="text-[11px] sm:text-xs font-bold text-gray-400">
            {language === "ta" ? "இணைக்கப்பட்ட ஜோடிகள்:" : "Pairs Matched:"} <span className="text-amber-600">{matchesCount} / 6 ⭐</span>
          </div>
        </div>
      ) : (
        <div className="p-6 sm:p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 text-center animate-scaleUp my-auto">
          <div className="text-4xl sm:text-5xl mb-1.5">🎉 🦁 ⭐</div>
          <h4 className="font-display font-extrabold text-xl sm:text-2xl text-amber-900">
            {language === "ta" ? "சூப்பர் நினைவாற்றல்!" : "Memory Champion!"}
          </h4>
          <p className="text-[11px] sm:text-xs text-amber-800 font-semibold mt-0.5 mb-3.5">
            {language === "ta" ? "அனைத்து விலங்கு ஜோடிகளையும் கண்டுபிடித்தீர்கள்! +6 நட்சத்திரங்கள் ⭐" : "Found all 6 safari animal pairs! +6 Stars ⭐"}
          </p>
          <button
            onClick={initGame}
            className="px-5 py-2 rounded-full bg-amber-600 text-white text-xs font-bold shadow-md cursor-pointer hover:bg-amber-700"
          >
            {language === "ta" ? "மீண்டும் விளையாடு" : "Play Again"}
          </button>
        </div>
      )}
    </div>
  );
};

// ==========================================
// 5. FRUIT HARVEST COUNTING BASKET GAME
// ==========================================
const FRUITS = [
  { name: "Apple", emoji: "🍎" },
  { name: "Mango", emoji: "🥭" },
  { name: "Strawberry", emoji: "🍓" },
  { name: "Banana", emoji: "🍌" },
  { name: "Orange", emoji: "🍊" },
];

export const FruitCountingGame: React.FC<{
  onWin: () => void;
  onPlaySound: (type: "pop" | "win" | "wrong" | "ding") => void;
}> = ({ onWin, onPlaySound }) => {
  const { language } = useLanguage();
  const [targetCount, setTargetCount] = useState(5);
  const [collectedFruits, setCollectedFruits] = useState<string[]>([]);
  const [completed, setCompleted] = useState(false);

  const handleCollect = (fruitEmoji: string) => {
    if (collectedFruits.length < targetCount) {
      onPlaySound("pop");
      const next = [...collectedFruits, fruitEmoji];
      setCollectedFruits(next);

      if (next.length === targetCount) {
        setCompleted(true);
        onPlaySound("win");
        onWin();
      }
    }
  };

  const restart = () => {
    const nextTarget = Math.floor(Math.random() * 4) + 4; // 4 to 7
    setTargetCount(nextTarget);
    setCollectedFruits([]);
    setCompleted(false);
  };

  return (
    <div className="flex flex-col items-center justify-between min-h-[340px] sm:min-h-[380px] w-full text-center">
      <div>
        <h4 className="font-display font-black text-lg sm:text-xl text-[#0F172A]">
          {language === "ta" ? "பழங்கள் எண்ணும் கூடை" : "Fruit Harvest Counting"}
        </h4>
        <p className="text-[11px] sm:text-xs text-gray-500 font-medium">
          {language === "ta"
            ? `கூடையில் ${targetCount} பழங்களைச் சேர்த்து இலக்கை அடையுங்கள்!`
            : `Tap fruits below to harvest exactly ${targetCount} fruits!`}
        </p>
      </div>

      {!completed ? (
        <div className="w-full max-w-sm space-y-3.5 my-auto">
          {/* Basket Visual */}
          <div className="p-4 sm:p-6 bg-gradient-to-b from-rose-50 to-amber-50 rounded-3xl border-2 border-rose-200 shadow-inner flex flex-col items-center justify-center min-h-[120px]">
            <div className="text-3xl sm:text-4xl mb-1">🧺</div>
            <div className="flex flex-wrap items-center justify-center gap-1.5 min-h-[36px]">
              {collectedFruits.map((emoji, i) => (
                <span key={i} className="text-2xl sm:text-3xl animate-scaleUp">
                  {emoji}
                </span>
              ))}
            </div>
            <div className="text-[11px] sm:text-xs font-bold text-rose-800 mt-1.5">
              {language === "ta" ? "கூடையில் உள்ள பழங்கள்:" : "Harvested:"} {collectedFruits.length} / {targetCount} 🍎
            </div>
          </div>

          {/* Fruit Selection Row */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
            {FRUITS.map((fruit, idx) => (
              <button
                key={idx}
                onClick={() => handleCollect(fruit.emoji)}
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white hover:bg-rose-50 border-2 border-gray-200 hover:border-rose-400 shadow-xs hover:scale-105 active:scale-95 transition-transform text-2xl sm:text-3xl flex items-center justify-center cursor-pointer"
              >
                {fruit.emoji}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="p-6 sm:p-8 bg-rose-50 rounded-3xl border-2 border-rose-300 text-center animate-scaleUp my-auto">
          <div className="text-4xl sm:text-5xl mb-1.5">🎉 🍎 ⭐</div>
          <h4 className="font-display font-extrabold text-xl sm:text-2xl text-rose-900">
            {language === "ta" ? "அருமையான அறுவடை!" : "Harvest Star!"}
          </h4>
          <p className="text-[11px] sm:text-xs text-rose-800 font-semibold mt-0.5 mb-3.5">
            {language === "ta" ? `சரியாக ${targetCount} பழங்களை எண்ணி சேர்த்தீர்கள்! +4 நட்சத்திரங்கள் ⭐` : `Accurately counted & collected ${targetCount} fruits! +4 Stars ⭐`}
          </p>
          <button
            onClick={restart}
            className="px-5 py-2 rounded-full bg-rose-600 text-white text-xs font-bold shadow-md cursor-pointer hover:bg-rose-700"
          >
            {language === "ta" ? "அடுத்த சுற்று" : "Next Round"}
          </button>
        </div>
      )}
    </div>
  );
};

// ==========================================
// 6. PHONICS SAFARI SOUND & LETTER GAME (A to Z)
// ==========================================
const PHONICS_ITEMS = [
  { letter: "A", word: "Apple", emoji: "🍎", sound: "Ah", wordTa: "ஆப்பிள்" },
  { letter: "B", word: "Butterfly", emoji: "🦋", sound: "Buh", wordTa: "வண்ணத்துப்பூச்சி" },
  { letter: "C", word: "Cat", emoji: "🐱", sound: "Kuh", wordTa: "பூனை" },
  { letter: "D", word: "Dolphin", emoji: "🐬", sound: "Duh", wordTa: "டால்பின்" },
  { letter: "E", word: "Elephant", emoji: "🐘", sound: "Eh", wordTa: "யானை" },
  { letter: "F", word: "Flower", emoji: "🌸", sound: "Fff", wordTa: "மலர்" },
  { letter: "G", word: "Giraffe", emoji: "🦒", sound: "Juh", wordTa: "ஒட்டகச்சிவிங்கி" },
  { letter: "H", word: "House", emoji: "🏠", sound: "Huh", wordTa: "வீடு" },
  { letter: "I", word: "Ice Cream", emoji: "🍦", sound: "Ih", wordTa: "ஐஸ்கிரீம்" },
  { letter: "J", word: "Juice", emoji: "🧃", sound: "Juh", wordTa: "பழச்சாறு" },
  { letter: "K", word: "Kite", emoji: "🪁", sound: "Kuh", wordTa: "பட்டம்" },
  { letter: "L", word: "Lion", emoji: "🦁", sound: "Lll", wordTa: "சிங்கம்" },
  { letter: "M", word: "Monkey", emoji: "🐵", sound: "Mmm", wordTa: "குரங்கு" },
  { letter: "N", word: "Nest", emoji: "🪺", sound: "Nnn", wordTa: "கூடு" },
  { letter: "O", word: "Owl", emoji: "🦉", sound: "Ah", wordTa: "ஆந்தை" },
  { letter: "P", word: "Penguin", emoji: "🐧", sound: "Puh", wordTa: "பென்குயின்" },
  { letter: "Q", word: "Queen", emoji: "👑", sound: "Kwuh", wordTa: "அரசி" },
  { letter: "R", word: "Rainbow", emoji: "🌈", sound: "Rrr", wordTa: "வானவில்" },
  { letter: "S", word: "Sun", emoji: "☀️", sound: "Sss", wordTa: "சூரியன்" },
  { letter: "T", word: "Tiger", emoji: "🐯", sound: "Tuh", wordTa: "புலி" },
  { letter: "U", word: "Umbrella", emoji: "☂️", sound: "Uh", wordTa: "குடை" },
  { letter: "V", word: "Violin", emoji: "🎻", sound: "Vvv", wordTa: "வயலின்" },
  { letter: "W", word: "Whale", emoji: "🐋", sound: "Wuh", wordTa: "திமிங்கிலம்" },
  { letter: "X", word: "Xylophone", emoji: "🎼", sound: "Zyl", wordTa: "சைலோஃபோன்" },
  { letter: "Y", word: "Yacht", emoji: "⛵", sound: "Yuh", wordTa: "படகு" },
  { letter: "Z", word: "Zebra", emoji: "🦓", sound: "Zzz", wordTa: "வரிக்குதிரை" },
];

export const PhonicsSafariGame: React.FC<{
  onWin: () => void;
  onPlaySound: (type: "pop" | "win" | "wrong" | "ding") => void;
}> = ({ onWin, onPlaySound }) => {
  const { language } = useLanguage();
  const [selected, setSelected] = useState(PHONICS_ITEMS[0]);

  const handleSelect = (item: typeof PHONICS_ITEMS[0]) => {
    setSelected(item);
    onPlaySound("ding");
    onWin();
  };

  return (
    <div className="flex flex-col items-center justify-between min-h-[340px] sm:min-h-[380px] w-full text-center">
      <div>
        <h4 className="font-display font-black text-lg sm:text-xl text-[#0F172A]">
          {language === "ta" ? "மாண்டிசோரி ஃபோனிக்ஸ் (A - Z)" : "Montessori Phonics Safari (A - Z)"}
        </h4>
        <p className="text-[11px] sm:text-xs text-gray-500 font-medium">
          {language === "ta" ? "A முதல் Z வரை உள்ள எழுத்துக்களைத் தொட்டு ஒலிகளைக் கற்கலாம்!" : "Tap any letter from A to Z to explore sounds & words!"}
        </p>
      </div>

      {/* Featured Card */}
      <div className="w-full max-w-sm p-3.5 sm:p-5 bg-gradient-to-b from-purple-50 to-white rounded-3xl border-2 border-purple-200 shadow-md my-2 sm:my-3 animate-scaleUp">
        <div className="flex items-center justify-center gap-3 sm:gap-4">
          <div className="w-13 h-13 sm:w-16 sm:h-16 rounded-2xl bg-purple-600 text-white font-display font-black text-3xl sm:text-4xl flex items-center justify-center shadow-lg">
            {selected.letter}
          </div>
          <div className="text-4xl sm:text-5xl drop-shadow-sm">{selected.emoji}</div>
        </div>
        <h5 className="font-display font-black text-xl sm:text-2xl text-[#0F172A] mt-1.5 sm:mt-2">
          {selected.letter} for {selected.word}
        </h5>
        <p className="text-[11px] sm:text-xs font-bold text-purple-600 mt-0.5">
          {language === "ta" ? `ஒலிப்பு: "${selected.sound}" • (${selected.wordTa})` : `Phonic Sound: "${selected.sound}"`}
        </p>
      </div>

      {/* 26 Letters Full A to Z Responsive Grid */}
      <div className="w-full max-w-lg">
        <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-9 gap-1 sm:gap-1.5 p-1.5 sm:p-2 bg-gray-50/80 rounded-2xl border border-gray-200/80 max-h-[170px] sm:max-h-[220px] overflow-y-auto scrollbar-thin">
          {PHONICS_ITEMS.map((item) => (
            <button
              key={item.letter}
              onClick={() => handleSelect(item)}
              className={`p-1 sm:p-2 rounded-xl border-2 transition-all flex flex-col items-center justify-center gap-0.5 cursor-pointer ${
                selected.letter === item.letter
                  ? "bg-purple-600 text-white border-purple-700 shadow-md scale-105"
                  : "bg-white text-gray-800 border-gray-200 hover:border-purple-300 hover:bg-purple-50/50"
              }`}
            >
              <span className="text-sm sm:text-base leading-none">{item.emoji}</span>
              <span className="font-extrabold text-[10px] sm:text-xs leading-none mt-0.5">{item.letter}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 7. MAGIC DRAWING & COLORING PAD
// ==========================================
export const MagicDrawingGame: React.FC<{
  onWin: () => void;
  onPlaySound: (type: "pop" | "win" | "wrong" | "ding") => void;
}> = ({ onWin, onPlaySound }) => {
  const { language } = useLanguage();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [color, setColor] = useState("#F36B12");
  const [lineWidth, setLineWidth] = useState(6);
  const [isDrawing, setIsDrawing] = useState(false);

  const colors = ["#F36B12", "#0750B8", "#159447", "#E11D48", "#8B5CF6", "#F5B900", "#121D28"];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
  }, []);

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;

    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    ctx.beginPath();
    ctx.moveTo(clientX - rect.left, clientY - rect.top);
    setIsDrawing(true);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;

    ctx.lineTo(clientX - rect.left, clientY - rect.top);
    ctx.stroke();
  };

  const stopDrawing = () => {
    if (isDrawing) {
      setIsDrawing(false);
      onPlaySound("ding");
      onWin();
    }
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    onPlaySound("pop");
  };

  return (
    <div className="flex flex-col items-center justify-between min-h-[340px] sm:min-h-[380px] w-full text-center">
      <div>
        <h4 className="font-display font-black text-lg sm:text-xl text-[#0F172A]">
          {language === "ta" ? "வர்ணஜாலம் & ஓவிய பலகை" : "Magic Drawing & Coloring Pad"}
        </h4>
        <p className="text-[11px] sm:text-xs text-gray-500 font-medium">
          {language === "ta" ? "வண்ணங்களைத் தொட்டு விரல் அல்லது மவுஸ் மூலம் ஓவியம் வரையுங்கள்!" : "Pick colors and draw creative art with touch or mouse!"}
        </p>
      </div>

      {/* Canvas Box */}
      <div className="w-full max-w-md bg-white rounded-2xl border-4 border-dashed border-pink-200 shadow-inner overflow-hidden my-2 sm:my-3 relative">
        <canvas
          ref={canvasRef}
          width={400}
          height={200}
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
          onTouchStart={startDrawing}
          onTouchMove={draw}
          onTouchEnd={stopDrawing}
          className="w-full h-[180px] sm:h-[200px] bg-white cursor-crosshair touch-none"
        />
      </div>

      {/* Controls */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 w-full max-w-md">
        {/* Colors Palette */}
        <div className="flex items-center gap-1 sm:gap-1.5 p-1 sm:p-1.5 bg-gray-100 rounded-full">
          {colors.map((c) => (
            <button
              key={c}
              onClick={() => setColor(c)}
              style={{ backgroundColor: c }}
              className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full transition-transform cursor-pointer ${
                color === c ? "scale-125 ring-2 ring-offset-2 ring-gray-600" : "hover:scale-110"
              }`}
            />
          ))}
        </div>

        {/* Clear Button */}
        <button
          onClick={clearCanvas}
          className="px-3.5 py-1 sm:py-1.5 rounded-full bg-rose-100 text-rose-700 hover:bg-rose-200 text-[11px] sm:text-xs font-bold flex items-center gap-1 cursor-pointer transition-all"
        >
          <Trash2 className="w-3.5 h-3.5" />
          <span>{language === "ta" ? "அழிக்க" : "Clear"}</span>
        </button>
      </div>
    </div>
  );
};

// ==========================================
// 8. RAINBOW KIDS MELODY PIANO GAME
// ==========================================
const PIANO_KEYS = [
  { note: "C", freq: 261.63, label: "Do", color: "bg-red-500", keyEn: "C" },
  { note: "D", freq: 293.66, label: "Re", color: "bg-orange-500", keyEn: "D" },
  { note: "E", freq: 329.63, label: "Mi", color: "bg-amber-400", keyEn: "E" },
  { note: "F", freq: 349.23, label: "Fa", color: "bg-emerald-500", keyEn: "F" },
  { note: "G", freq: 392.0, label: "So", color: "bg-cyan-500", keyEn: "G" },
  { note: "A", freq: 440.0, label: "La", color: "bg-blue-600", keyEn: "A" },
  { note: "B", freq: 493.88, label: "Ti", color: "bg-purple-600", keyEn: "B" },
  { note: "C2", freq: 523.25, label: "Do", color: "bg-pink-500", keyEn: "C" },
];

export const RainbowPianoGame: React.FC<{
  onWin: () => void;
  onPlaySound: (type: "pop" | "win" | "wrong" | "ding" | "piano", freq?: number) => void;
}> = ({ onWin, onPlaySound }) => {
  const { language } = useLanguage();
  const [activeKey, setActiveKey] = useState<string | null>(null);
  const [notesPlayed, setNotesPlayed] = useState(0);

  const handleKeyPress = (key: (typeof PIANO_KEYS)[0]) => {
    setActiveKey(key.note);
    onPlaySound("piano", key.freq);
    setNotesPlayed((p) => p + 1);
    if (notesPlayed >= 5) {
      onWin();
    }
    setTimeout(() => setActiveKey(null), 250);
  };

  return (
    <div className="flex flex-col items-center justify-between min-h-[340px] sm:min-h-[380px] w-full text-center">
      <div>
        <h4 className="font-display font-black text-lg sm:text-xl text-[#0F172A]">
          {language === "ta" ? "வானவில் இசைப் பியானோ" : "Rainbow Kids Melody Piano"}
        </h4>
        <p className="text-[11px] sm:text-xs text-gray-500 font-medium">
          {language === "ta" ? "வண்ணக் கட்டைகளைத் தட்டி உங்கள் சொந்த மெல்லிசையை உருவாக்குங்கள்!" : "Tap the colorful piano keys to play sweet melodies and notes!"}
        </p>
      </div>

      {/* Piano Stage */}
      <div className="w-full max-w-md p-2.5 sm:p-4 bg-slate-900 rounded-3xl shadow-2xl border-4 border-slate-700 my-auto">
        <div className="flex items-end justify-center gap-1 sm:gap-1.5 h-36 sm:h-52 p-1.5 sm:p-2 bg-slate-950 rounded-2xl">
          {PIANO_KEYS.map((k) => (
            <button
              key={k.note}
              onClick={() => handleKeyPress(k)}
              className={`flex-1 h-full rounded-b-xl ${k.color} text-white font-display font-black text-[10px] sm:text-sm flex flex-col justify-end pb-2 sm:pb-3 items-center shadow-lg transition-all cursor-pointer border-t-4 border-white/20 active:translate-y-1.5 ${
                activeKey === k.note ? "scale-95 brightness-125 ring-2 ring-white" : "hover:brightness-110"
              }`}
            >
              <span className="text-[8px] sm:text-[10px] opacity-80">{k.note}</span>
              <span className="font-extrabold text-[9px] sm:text-xs">{k.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="text-[11px] sm:text-xs font-bold text-gray-400 mt-2">
        {language === "ta" ? "இசைத்த ஒலிகள்:" : "Notes Played:"} <span className="text-purple-600">{notesPlayed} 🎵</span>
      </div>
    </div>
  );
};
