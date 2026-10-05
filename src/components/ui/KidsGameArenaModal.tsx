"use client";

import React, { useState, useEffect } from "react";
import {
  X,
  Trophy,
  RotateCcw,
  Volume2,
  VolumeX,
  Star,
} from "lucide-react";

interface KidsGameArenaModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialGame?: "tower" | "shapes" | "balloon" | "phonics";
}

// Web Audio API sound effect player (no external assets needed)
const playChime = (type: "pop" | "win" | "wrong" | "ding") => {
  if (typeof window === "undefined") return;
  try {
    const AudioCtx =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();

    if (type === "ding" || type === "pop") {
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
    // Ignore audio context errors if blocked by browser policy
  }
};

export const KidsGameArenaModal: React.FC<KidsGameArenaModalProps> = ({
  isOpen,
  onClose,
  initialGame = "tower",
}) => {
  const [activeTab, setActiveTab] = useState<"tower" | "shapes" | "balloon" | "phonics">(initialGame);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [totalStars, setTotalStars] = useState(0);

  // Sync initial tab when opened
  useEffect(() => {
    if (isOpen) {
      setActiveTab(initialGame);
    }
  }, [isOpen, initialGame]);

  const playSound = (type: "pop" | "win" | "wrong" | "ding") => {
    if (soundEnabled) playChime(type);
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-md animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-2xl bg-white rounded-[32px] shadow-2xl border-4 border-[#FFF2E8] overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Top Header Strip */}
        <div className="bg-gradient-to-r from-[#F36B12] via-[#f7883e] to-[#F5B900] p-4 sm:p-5 text-white flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-xl shadow-inner">
              🎮
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-display font-extrabold text-lg sm:text-xl tracking-tight leading-tight">
                  Dhivith Kids Game Arena
                </h3>
                <span className="px-2 py-0.5 rounded-full bg-white text-[#F36B12] text-[10px] font-black uppercase tracking-wider shadow-xs">
                  Montessori Play
                </span>
              </div>
              <p className="text-white/90 text-xs font-medium mt-0.5">
                Fun interactive learning games • No ads • Safe for children
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Star Counter */}
            <div className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-black/20 backdrop-blur-md text-amber-200 text-xs font-bold">
              <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
              <span>{totalStars}</span>
            </div>

            {/* Sound Toggle */}
            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              className="p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-all cursor-pointer"
              title={soundEnabled ? "Mute sounds" : "Enable sounds"}
            >
              {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>

            {/* Close */}
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-all cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Game Selector Tabs */}
        <div className="flex items-center gap-2 p-3 bg-gray-50 border-b border-gray-200/80 overflow-x-auto scrollbar-none flex-shrink-0">
          <button
            onClick={() => setActiveTab("tower")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 flex-shrink-0 cursor-pointer ${
              activeTab === "tower"
                ? "bg-[#F36B12] text-white shadow-md scale-102"
                : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200/80"
            }`}
          >
            <span>🏗️</span>
            <span>Tower Builder</span>
          </button>

          <button
            onClick={() => setActiveTab("shapes")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 flex-shrink-0 cursor-pointer ${
              activeTab === "shapes"
                ? "bg-[#0750B8] text-white shadow-md scale-102"
                : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200/80"
            }`}
          >
            <span>🔷</span>
            <span>Shape & Color Match</span>
          </button>

          <button
            onClick={() => setActiveTab("balloon")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 flex-shrink-0 cursor-pointer ${
              activeTab === "balloon"
                ? "bg-[#159447] text-white shadow-md scale-102"
                : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200/80"
            }`}
          >
            <span>🎈</span>
            <span>Balloon Math Pop</span>
          </button>

          <button
            onClick={() => setActiveTab("phonics")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 flex-shrink-0 cursor-pointer ${
              activeTab === "phonics"
                ? "bg-[#8B5CF6] text-white shadow-md scale-102"
                : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200/80"
            }`}
          >
            <span>🦁</span>
            <span>Phonics Safari</span>
          </button>
        </div>

        {/* Active Game Body */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 flex flex-col justify-between">
          {activeTab === "tower" && (
            <TowerBuilderGame
              onWin={() => {
                setTotalStars((s) => s + 5);
                playSound("win");
              }}
              onPlaySound={playSound}
            />
          )}

          {activeTab === "shapes" && (
            <ShapeMatchGame
              onWin={() => {
                setTotalStars((s) => s + 3);
                playSound("win");
              }}
              onPlaySound={playSound}
            />
          )}

          {activeTab === "balloon" && (
            <BalloonMathGame
              onWin={() => {
                setTotalStars((s) => s + 4);
                playSound("win");
              }}
              onPlaySound={playSound}
            />
          )}

          {activeTab === "phonics" && (
            <PhonicsSafariGame
              onWin={() => {
                setTotalStars((s) => s + 2);
                playSound("ding");
              }}
              onPlaySound={playSound}
            />
          )}
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 1. TOWER BUILDER GAME (Montessori Pink Tower)
// ==========================================
const TOWER_SIZES = [100, 85, 70, 55, 40, 25]; // From base to top

const TowerBuilderGame: React.FC<{
  onWin: () => void;
  onPlaySound: (type: "pop" | "win" | "wrong" | "ding") => void;
}> = ({ onWin, onPlaySound }) => {
  const [stacked, setStacked] = useState<number[]>([]);
  const [available, setAvailable] = useState<number[]>([40, 100, 25, 85, 55, 70]);
  const [gameOver, setGameOver] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const [score, setScore] = useState(0);

  const resetGame = () => {
    setStacked([]);
    setAvailable([40, 100, 25, 85, 55, 70].sort(() => Math.random() - 0.5));
    setGameOver(false);
    setGameWon(false);
    setScore(0);
  };

  const handlePickBlock = (size: number) => {
    const nextExpected = TOWER_SIZES[stacked.length];

    if (size === nextExpected) {
      onPlaySound("ding");
      const nextStacked = [...stacked, size];
      setStacked(nextStacked);
      setAvailable((prev) => prev.filter((s) => s !== size));
      setScore((s) => s + 20);

      if (nextStacked.length === TOWER_SIZES.length) {
        setGameWon(true);
        setGameOver(true);
        onWin();
      }
    } else {
      onPlaySound("wrong");
      setGameOver(true);
      setGameWon(false);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="text-center mb-3">
        <h4 className="font-display font-extrabold text-lg sm:text-xl text-[#0F172A]">
          Montessori Pink Tower Stacking
        </h4>
        <p className="text-xs text-gray-500 mt-0.5">
          Tap the blocks in order from <strong>Largest (Base)</strong> to <strong>Smallest (Top)</strong>!
        </p>
      </div>

      {/* Stacking Floor Area */}
      <div className="relative w-full max-w-sm h-64 bg-gradient-to-b from-blue-50/50 to-orange-50/50 rounded-2xl border-2 border-dashed border-gray-300 flex flex-col justify-end items-center p-4 overflow-hidden shadow-inner mb-4">
        {/* Foundation Desk */}
        <div className="w-full h-3 bg-gradient-to-r from-amber-700 to-amber-900 rounded-full shadow-md mb-1" />

        {/* Blocks Stacking upward */}
        <div className="flex flex-col-reverse items-center gap-1.5 w-full">
          {stacked.map((size, idx) => (
            <div
              key={idx}
              className="h-7 rounded-xl bg-gradient-to-r from-[#F36B12] via-[#f7883e] to-[#F5B900] shadow-md border-2 border-white flex items-center justify-center text-white text-[11px] font-extrabold animate-scaleUp"
              style={{ width: `${size}%` }}
            >
              Floor {idx + 1}
            </div>
          ))}
        </div>

        {/* Win Modal Overlay */}
        {gameWon && (
          <div className="absolute inset-0 bg-white/95 backdrop-blur-sm flex flex-col items-center justify-center p-4 animate-fadeIn">
            <Trophy className="w-14 h-14 text-amber-500 animate-bounce mb-2" />
            <h4 className="font-display font-extrabold text-2xl text-[#0F172A]">
              Perfect Stacking! 🏆
            </h4>
            <p className="text-sm font-bold text-[#159447] mt-1">
              Score: 120 Points • +5 Stars ⭐
            </p>
            <p className="text-xs text-gray-500 mt-1 max-w-xs text-center">
              Great spatial awareness and Montessori concentration cycle mastered!
            </p>
            <button
              onClick={resetGame}
              className="mt-4 px-6 py-2.5 rounded-full bg-[#159447] hover:bg-[#117a3a] text-white font-bold text-xs shadow-md transition-all cursor-pointer"
            >
              Play Again
            </button>
          </div>
        )}

        {/* Wobbled Failure Overlay */}
        {gameOver && !gameWon && (
          <div className="absolute inset-0 bg-white/95 backdrop-blur-sm flex flex-col items-center justify-center p-4 animate-fadeIn">
            <div className="text-4xl mb-2">🏗️</div>
            <h4 className="font-display font-extrabold text-xl text-[#0F172A]">
              Tower Wobbled!
            </h4>
            <p className="text-xs text-[#F36B12] font-semibold mt-1 text-center">
              Remember to select the widest block first, followed by the next largest.
            </p>
            <button
              onClick={resetGame}
              className="mt-4 px-6 py-2.5 rounded-full bg-[#0750B8] hover:bg-[#063f91] text-white font-bold text-xs shadow-md flex items-center gap-2 transition-all cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Try Again</span>
            </button>
          </div>
        )}
      </div>

      {/* Block Choice Buttons */}
      {!gameOver && (
        <div className="w-full max-w-sm">
          <div className="flex items-center justify-between text-xs font-bold text-gray-600 mb-2">
            <span>Tap Next Block (Step {stacked.length + 1} of 6):</span>
            <span className="text-[#F36B12]">Score: {score}</span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {available.map((sz) => (
              <button
                key={sz}
                onClick={() => handlePickBlock(sz)}
                className="py-3 px-2 rounded-2xl bg-white border-2 border-[#F36B12]/40 hover:border-[#F36B12] hover:bg-[#FFF2E8] text-[#0F172A] font-extrabold text-xs shadow-sm hover:scale-105 active:scale-95 transition-all flex flex-col items-center gap-1 cursor-pointer"
              >
                <div
                  className="h-3 rounded-full bg-gradient-to-r from-[#F36B12] to-[#F5B900]"
                  style={{ width: `${sz}%` }}
                />
                <span>Size {sz}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// ==========================================
// 2. SHAPE & COLOR MATCH GAME
// ==========================================
const SHAPES_DATA = [
  { id: "circle", label: "Red Circle", shape: "🔴" },
  { id: "square", label: "Blue Square", shape: "🟦" },
  { id: "triangle", label: "Green Triangle", shape: "🔺" },
  { id: "star", label: "Yellow Star", shape: "⭐" },
];

const ShapeMatchGame: React.FC<{
  onWin: () => void;
  onPlaySound: (type: "pop" | "win" | "wrong" | "ding") => void;
}> = ({ onWin, onPlaySound }) => {
  const [targetIndex, setTargetIndex] = useState(0);
  const [matchedCount, setMatchedCount] = useState(0);
  const [gameWon, setGameWon] = useState(false);

  const currentTarget = SHAPES_DATA[targetIndex];

  const handleSelectShape = (id: string) => {
    if (id === currentTarget.id) {
      onPlaySound("ding");
      const nextCount = matchedCount + 1;
      setMatchedCount(nextCount);

      if (nextCount >= 6) {
        setGameWon(true);
        onWin();
      } else {
        setTargetIndex((prev) => (prev + 1) % SHAPES_DATA.length);
      }
    } else {
      onPlaySound("wrong");
    }
  };

  const restart = () => {
    setMatchedCount(0);
    setTargetIndex(Math.floor(Math.random() * SHAPES_DATA.length));
    setGameWon(false);
  };

  return (
    <div className="flex flex-col items-center text-center">
      <div className="mb-4">
        <h4 className="font-display font-extrabold text-lg sm:text-xl text-[#0F172A]">
          Shape & Color Matcher
        </h4>
        <p className="text-xs text-gray-500 mt-0.5">
          Find and tap the matching geometric Montessori shape!
        </p>
      </div>

      {gameWon ? (
        <div className="p-8 bg-emerald-50 rounded-3xl border border-emerald-200 text-center animate-scaleUp">
          <div className="text-5xl mb-2">🌟</div>
          <h4 className="font-display font-extrabold text-2xl text-emerald-900">
            Montessori Shapes Mastered!
          </h4>
          <p className="text-xs text-emerald-700 font-semibold mt-1">
            Completed 6 shape matches • +3 Stars ⭐
          </p>
          <button
            onClick={restart}
            className="mt-4 px-6 py-2.5 rounded-full bg-[#0750B8] text-white text-xs font-bold shadow-md cursor-pointer hover:bg-[#063f91]"
          >
            Play Another Round
          </button>
        </div>
      ) : (
        <div className="w-full max-w-sm space-y-5">
          {/* Target Card */}
          <div className="p-6 bg-gradient-to-b from-blue-50 to-white rounded-3xl border-2 border-[#0750B8]/30 shadow-md">
            <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block">
              Match This Shape:
            </span>
            <div className="text-6xl my-3 animate-pulse">{currentTarget.shape}</div>
            <span className="font-display font-extrabold text-lg text-[#0F172A]">
              {currentTarget.label}
            </span>
            <div className="text-xs text-[#0750B8] font-bold mt-1">
              Score: {matchedCount} / 6
            </div>
          </div>

          {/* 4 Choices */}
          <div className="grid grid-cols-2 gap-3">
            {SHAPES_DATA.map((item) => (
              <button
                key={item.id}
                onClick={() => handleSelectShape(item.id)}
                className="p-4 rounded-2xl bg-white border-2 border-gray-200 hover:border-[#0750B8] hover:bg-blue-50/50 shadow-xs hover:scale-105 active:scale-95 transition-all flex flex-col items-center gap-1 cursor-pointer"
              >
                <span className="text-4xl">{item.shape}</span>
                <span className="text-xs font-bold text-gray-700">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// ==========================================
// 3. BALLOON MATH POP GAME
// ==========================================
const BalloonMathGame: React.FC<{
  onWin: () => void;
  onPlaySound: (type: "pop" | "win" | "wrong" | "ding") => void;
}> = ({ onWin, onPlaySound }) => {
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

  const balloonColors = ["bg-red-400", "bg-sky-400", "bg-emerald-400", "bg-amber-400"];

  return (
    <div className="flex flex-col items-center text-center">
      <div className="mb-4">
        <h4 className="font-display font-extrabold text-lg sm:text-xl text-[#0F172A]">
          Balloon Arithmetic Pop
        </h4>
        <p className="text-xs text-gray-500 mt-0.5">
          Pop the balloon with the correct answer!
        </p>
      </div>

      {gameWon ? (
        <div className="p-8 bg-amber-50 rounded-3xl border border-amber-200 text-center animate-scaleUp">
          <div className="text-5xl mb-2">🎉</div>
          <h4 className="font-display font-extrabold text-2xl text-amber-900">
            Math Superstar!
          </h4>
          <p className="text-xs text-amber-700 font-semibold mt-1">
            Solved 5 Math Puzzles • +4 Stars ⭐
          </p>
          <button
            onClick={restart}
            className="mt-4 px-6 py-2.5 rounded-full bg-[#159447] text-white text-xs font-bold shadow-md cursor-pointer hover:bg-[#117a3a]"
          >
            Play Again
          </button>
        </div>
      ) : (
        <div className="w-full max-w-sm space-y-6">
          {/* Question banner */}
          <div className="p-5 bg-gradient-to-r from-[#159447] to-[#1bb557] rounded-3xl text-white shadow-lg flex items-center justify-center gap-3">
            <span className="font-display font-black text-3xl">{numA}</span>
            <span className="text-2xl font-bold">+</span>
            <span className="font-display font-black text-3xl">{numB}</span>
            <span className="text-2xl font-bold">=</span>
            <span className="w-10 h-10 rounded-2xl bg-white/30 backdrop-blur-md flex items-center justify-center font-black text-2xl">
              ?
            </span>
          </div>

          <div className="text-xs font-bold text-gray-400">
            Puzzles Solved: <span className="text-[#159447]">{score} / 5</span>
          </div>

          {/* 4 Balloon Buttons */}
          <div className="grid grid-cols-2 gap-4">
            {options.map((opt, i) => (
              <button
                key={i}
                onClick={() => handlePop(opt)}
                className={`p-6 rounded-full ${balloonColors[i % balloonColors.length]} text-white font-display font-black text-3xl shadow-lg hover:scale-110 active:scale-90 transition-transform flex items-center justify-center cursor-pointer`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// ==========================================
// 4. PHONICS SAFARI SOUND & LETTER GAME
// ==========================================
const PHONICS_ITEMS = [
  { letter: "A", word: "Apple", emoji: "🍎", sound: "Ah" },
  { letter: "B", word: "Butterfly", emoji: "🦋", sound: "Buh" },
  { letter: "C", word: "Cat", emoji: "🐱", sound: "Kuh" },
  { letter: "D", word: "Dolphin", emoji: "🐬", sound: "Duh" },
  { letter: "E", word: "Elephant", emoji: "🐘", sound: "Eh" },
  { letter: "F", word: "Flower", emoji: "🌸", sound: "Fff" },
  { letter: "G", word: "Giraffe", emoji: "🦒", sound: "Juh" },
  { letter: "H", word: "House", emoji: "🏠", sound: "Huh" },
];

const PhonicsSafariGame: React.FC<{
  onWin: () => void;
  onPlaySound: (type: "pop" | "win" | "wrong" | "ding") => void;
}> = ({ onWin, onPlaySound }) => {
  const [selected, setSelected] = useState(PHONICS_ITEMS[0]);

  const handleSelect = (item: typeof PHONICS_ITEMS[0]) => {
    setSelected(item);
    onPlaySound("ding");
    onWin();
  };

  return (
    <div className="flex flex-col items-center text-center">
      <div className="mb-4">
        <h4 className="font-display font-extrabold text-lg sm:text-xl text-[#0F172A]">
          Montessori Phonics Safari
        </h4>
        <p className="text-xs text-gray-500 mt-0.5">
          Tap letters to explore phonics sounds and tactile word vocabulary!
        </p>
      </div>

      {/* Featured Card */}
      <div className="w-full max-w-sm p-6 bg-gradient-to-b from-purple-50 to-white rounded-3xl border-2 border-purple-200 shadow-md mb-4 animate-scaleUp">
        <div className="flex items-center justify-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-purple-600 text-white font-display font-black text-4xl flex items-center justify-center shadow-lg">
            {selected.letter}
          </div>
          <div className="text-6xl">{selected.emoji}</div>
        </div>
        <h5 className="font-display font-black text-2xl text-[#0F172A] mt-3">
          {selected.letter} for {selected.word}
        </h5>
        <p className="text-xs font-bold text-purple-600 mt-1">
          Phonic Sound: &quot;{selected.sound}&quot;
        </p>
      </div>

      {/* Grid of Letters */}
      <div className="grid grid-cols-4 gap-2 w-full max-w-sm">
        {PHONICS_ITEMS.map((item) => (
          <button
            key={item.letter}
            onClick={() => handleSelect(item)}
            className={`p-3 rounded-2xl border-2 transition-all flex flex-col items-center gap-0.5 cursor-pointer ${
              selected.letter === item.letter
                ? "bg-purple-600 text-white border-purple-700 shadow-md scale-105"
                : "bg-white text-gray-800 border-gray-200 hover:border-purple-300 hover:bg-purple-50/50"
            }`}
          >
            <span className="text-xl">{item.emoji}</span>
            <span className="font-bold text-sm">{item.letter}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
