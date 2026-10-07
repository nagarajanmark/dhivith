"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  X,
  RotateCcw,
  Volume2,
  VolumeX,
  Star,
  ExternalLink,
} from "lucide-react";
import {
  KIDS_GAMES_LIST,
  GameId,
  TowerBuilderGame,
  ShapeMatchGame,
  BalloonMathGame,
  AnimalMemoryGame,
  FruitCountingGame,
  PhonicsSafariGame,
  MagicDrawingGame,
  RainbowPianoGame,
  playChime,
} from "@/components/games/KidsGamesCollection";
import { useLanguage } from "@/context/LanguageContext";

interface KidsGameArenaModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialGame?: GameId;
}

export const KidsGameArenaModal: React.FC<KidsGameArenaModalProps> = ({
  isOpen,
  onClose,
  initialGame = "tower",
}) => {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState<GameId>(initialGame);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [totalStars, setTotalStars] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setActiveTab(initialGame);
    }
  }, [isOpen, initialGame]);

  const playSound = (type: "pop" | "win" | "wrong" | "ding" | "piano", noteFreq?: number) => {
    if (soundEnabled) playChime(type, noteFreq);
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
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
                  {language === "ta" ? "திவித் குழந்தைகள் விளையாட்டு உலகம்" : "Dhivith Kids Wonder Play Zone"}
                </h3>
                <span className="px-2 py-0.5 rounded-full bg-white text-[#F36B12] text-[10px] font-black uppercase tracking-wider shadow-xs">
                  {language === "ta" ? "8+ விளையாட்டுகள்" : "8+ Games"}
                </span>
              </div>
              <p className="text-white/90 text-xs font-medium mt-0.5">
                {language === "ta"
                  ? "மழலையர் கற்றல் விளையாட்டுகள் • பாதுகாப்பானது • விளம்பரங்கள் இல்லை"
                  : "Montessori sensory learning • 100% safe & ad-free"}
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

        {/* Game Selector Horizontal Strip */}
        <div className="flex items-center gap-2 p-3 bg-gray-50 border-b border-gray-200/80 overflow-x-auto scrollbar-none flex-shrink-0">
          {KIDS_GAMES_LIST.map((game) => (
            <button
              key={game.id}
              onClick={() => {
                setActiveTab(game.id);
                playSound("pop");
              }}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 flex-shrink-0 cursor-pointer ${
                activeTab === game.id
                  ? "bg-[#F36B12] text-white shadow-md scale-102"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200/80"
              }`}
            >
              <span>{game.emoji}</span>
              <span>{language === "ta" ? game.titleTa : game.titleEn}</span>
            </button>
          ))}
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
                setTotalStars((s) => s + 4);
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

          {activeTab === "memory" && (
            <AnimalMemoryGame
              onWin={() => {
                setTotalStars((s) => s + 6);
                playSound("win");
              }}
              onPlaySound={playSound}
            />
          )}

          {activeTab === "basket" && (
            <FruitCountingGame
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

          {activeTab === "drawing" && (
            <MagicDrawingGame
              onWin={() => {
                setTotalStars((s) => s + 2);
                playSound("ding");
              }}
              onPlaySound={playSound}
            />
          )}

          {activeTab === "piano" && (
            <RainbowPianoGame
              onWin={() => {
                setTotalStars((s) => s + 3);
                playSound("win");
              }}
              onPlaySound={playSound}
            />
          )}
        </div>

        {/* Bottom Full Page Link Footer */}
        <div className="p-3 bg-gray-50 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-gray-500 flex-shrink-0">
          <span>{language === "ta" ? "8+ மாண்டிசோரி கற்றல் விளையாட்டுகள்" : "8+ Fun Interactive Montessori Games"}</span>
          <Link
            href="/games"
            onClick={onClose}
            className="inline-flex items-center gap-1.5 text-[#0750B8] hover:text-[#053c8b] font-bold underline"
          >
            <span>{language === "ta" ? "முழு விளையாட்டு பக்கத்திற்கு செல்ல" : "Open Full Games Page"}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};
