"use client";

import React, { useState, useEffect } from "react";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { TourBookingModal } from "@/components/modals/TourBookingModal";
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
import {
  Star,
  Sparkles,
  Volume2,
  VolumeX,
  ShieldCheck,
  RotateCcw,
  Trophy,
  Gamepad2,
  Heart,
  Smile,
  Zap,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function GamesPage() {
  const { language, t } = useLanguage();
  const [isTourModalOpen, setIsTourModalOpen] = useState(false);
  const [activeGameId, setActiveGameId] = useState<GameId>("tower");
  const [selectedCategory, setSelectedCategory] = useState<"all" | "sensory" | "math" | "art" | "memory">("all");
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [totalStars, setTotalStars] = useState(12);

  const activeGameMeta = KIDS_GAMES_LIST.find((g) => g.id === activeGameId) || KIDS_GAMES_LIST[0];

  const filteredGames = KIDS_GAMES_LIST.filter((g) => {
    if (selectedCategory === "all") return true;
    return g.category === selectedCategory;
  });

  const playSound = (type: "pop" | "win" | "wrong" | "ding" | "piano", noteFreq?: number) => {
    if (soundEnabled) {
      playChime(type, noteFreq);
    }
  };

  const handleWin = (starsToAdd: number = 3) => {
    setTotalStars((prev) => prev + starsToAdd);
  };

  return (
    <main className="min-h-screen flex flex-col bg-slate-50 text-[#121D28]">
      <Navbar onOpenTourModal={() => setIsTourModalOpen(true)} />

      <PageHeader
        breadcrumb={t.gamesPage.breadcrumb}
        title={t.gamesPage.title}
        highlightedWord={t.gamesPage.highlight}
        description={t.gamesPage.desc}
        bannerImage="/school_images/1000264802.webp"
        gradientTheme="amber"
      />

      {/* Main Interactive Games Experience */}
      <section className="py-8 sm:py-12 lg:py-16 relative">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          
          {/* Top: 8 Games Selection Grid (Clean at Top, No Scrolling) */}
          <div className="mb-8">
            <div className="text-center mb-4">
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#F36B12] bg-[#FFF2E8] px-3.5 py-1 rounded-full border border-[#F36B12]/20">
                {language === "ta" ? "விளையாட்டை தேர்ந்தெடுக்கவும்" : "Select A Game To Play"}
              </span>
            </div>

            {/* 8-Game Grid Cards (Fully visible at top, no scroll needed) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5 sm:gap-3">
              {KIDS_GAMES_LIST.map((game) => {
                const isActive = activeGameId === game.id;
                return (
                  <button
                    key={game.id}
                    onClick={() => {
                      setActiveGameId(game.id);
                      playSound("pop");
                    }}
                    className={`p-3 rounded-2xl text-center transition-all duration-300 flex flex-col items-center justify-between border-2 cursor-pointer ${
                      isActive
                        ? "bg-white border-[#F36B12] shadow-lg scale-105 ring-2 ring-[#F36B12]/30"
                        : "bg-white hover:bg-gray-50/80 border-gray-200/80 hover:border-gray-300 shadow-xs hover:scale-102"
                    }`}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-2xl mb-1.5 shadow-xs"
                      style={{ backgroundColor: `${game.color}15`, color: game.color }}
                    >
                      {game.emoji}
                    </div>

                    <h4 className="font-display font-bold text-xs text-[#0F172A] leading-tight line-clamp-2">
                      {language === "ta" ? game.titleTa : game.titleEn}
                    </h4>

                    <span
                      className="mt-1.5 px-1.5 py-0.5 rounded text-[9px] font-extrabold uppercase tracking-wider"
                      style={{ backgroundColor: `${game.color}15`, color: game.color }}
                    >
                      {language === "ta" ? game.badgeTa : game.badgeEn}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Full-Width Focused Playable Arena */}
          <div className="max-w-4xl mx-auto">
            
            {/* Top Bar for the Active Game: Title, Age, Star Counter & Sound */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-3.5 sm:p-5 shadow-xl border border-gray-100 mb-5 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div
                  className="w-11 h-11 rounded-2xl flex items-center justify-center text-2xl shadow-sm"
                  style={{ backgroundColor: `${activeGameMeta.color}20`, color: activeGameMeta.color }}
                >
                  {activeGameMeta.emoji}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="font-display font-black text-base sm:text-xl text-[#0F172A] leading-tight">
                      {language === "ta" ? activeGameMeta.titleTa : activeGameMeta.titleEn}
                    </h2>
                    <span className="w-2 h-2 rounded-full bg-[#159447] animate-pulse" />
                  </div>
                  <p className="text-[11px] sm:text-xs text-gray-500 font-medium mt-0.5">
                    {language === "ta" ? activeGameMeta.descTa : activeGameMeta.descEn}
                  </p>
                </div>
              </div>

              {/* Quick Star Score & Sound Controls */}
              <div className="flex items-center gap-2 sm:gap-3 ml-auto">
                <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 font-black text-xs sm:text-sm shadow-xs">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400 animate-spin-slow" />
                  <span>{totalStars}</span>
                  <span className="text-[11px] font-semibold text-amber-700 hidden sm:inline">
                    {language === "ta" ? "நட்சத்திரங்கள்" : "Stars"}
                  </span>
                </div>

                <button
                  onClick={() => setSoundEnabled(!soundEnabled)}
                  className={`p-2 sm:p-2.5 rounded-xl border transition-all flex items-center gap-1.5 text-xs font-bold cursor-pointer ${
                    soundEnabled
                      ? "bg-[#EBF3FF] text-[#0750B8] border-blue-200 shadow-xs"
                      : "bg-gray-100 text-gray-500 border-gray-200"
                  }`}
                >
                  {soundEnabled ? <Volume2 className="w-4 h-4 text-[#0750B8]" /> : <VolumeX className="w-4 h-4" />}
                  <span className="hidden sm:inline">
                    {soundEnabled ? t.gamesPage.soundOn : t.gamesPage.soundOff}
                  </span>
                </button>
              </div>
            </div>

            {/* Active Playable Stage */}
            <div className="bg-white rounded-3xl sm:rounded-[36px] shadow-2xl border-2 sm:border-4 border-white p-4 sm:p-8 min-h-[440px] sm:min-h-[500px] flex flex-col justify-between relative overflow-hidden">
              {/* Ambient Glows */}
              <div className="absolute -top-12 -right-12 w-56 h-56 bg-amber-100/60 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-12 -left-12 w-56 h-56 bg-blue-100/60 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 w-full flex-1 flex flex-col justify-center">
                {activeGameId === "tower" && (
                  <TowerBuilderGame
                    onWin={() => handleWin(5)}
                    onPlaySound={playSound}
                  />
                )}

                {activeGameId === "shapes" && (
                  <ShapeMatchGame
                    onWin={() => handleWin(4)}
                    onPlaySound={playSound}
                  />
                )}

                {activeGameId === "balloon" && (
                  <BalloonMathGame
                    onWin={() => handleWin(4)}
                    onPlaySound={playSound}
                  />
                )}

                {activeGameId === "memory" && (
                  <AnimalMemoryGame
                    onWin={() => handleWin(6)}
                    onPlaySound={playSound}
                  />
                )}

                {activeGameId === "basket" && (
                  <FruitCountingGame
                    onWin={() => handleWin(4)}
                    onPlaySound={playSound}
                  />
                )}

                {activeGameId === "phonics" && (
                  <PhonicsSafariGame
                    onWin={() => handleWin(2)}
                    onPlaySound={playSound}
                  />
                )}

                {activeGameId === "drawing" && (
                  <MagicDrawingGame
                    onWin={() => handleWin(2)}
                    onPlaySound={playSound}
                  />
                )}

                {activeGameId === "piano" && (
                  <RainbowPianoGame
                    onWin={() => handleWin(3)}
                    onPlaySound={playSound}
                  />
                )}
              </div>
            </div>

          </div>

          {/* Child Safety & Educational Benefits Strip */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-xs sm:text-sm text-[#0F172A]">
                  {language === "ta" ? "100% பாதுகாப்பானது" : "100% Child-Safe & Ad-Free"}
                </h4>
                <p className="text-[11px] text-gray-500 mt-0.5">
                  {language === "ta" ? "விளம்பரங்கள் இல்லை, பாதுகாப்பான கற்றல் சூழல்" : "Zero third-party advertisements or distractions"}
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0750B8] flex items-center justify-center flex-shrink-0">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-xs sm:text-sm text-[#0F172A]">
                  {language === "ta" ? "உடனடி ஆஃப்லைன் வேகம்" : "Instant & Offline Ready"}
                </h4>
                <p className="text-[11px] text-gray-500 mt-0.5">
                  {language === "ta" ? "அனைத்து போன் மற்றும் கணினிகளிலும் எளிதாக இயங்கும்" : "Built with Web Audio & lightweight HTML5"}
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-xs sm:text-sm text-[#0F172A]">
                  {language === "ta" ? "மாண்டிசோரி அறிவியல் அடித்தளம்" : "Montessori Pedagogy"}
                </h4>
                <p className="text-[11px] text-gray-500 mt-0.5">
                  {language === "ta" ? "வடிவியல், கணிதம் மற்றும் மொழித் திறனை வளர்க்கும்" : "Nurtures sensory order, numerical logic & fine motor"}
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer onOpenTourModal={() => setIsTourModalOpen(true)} />
      <TourBookingModal
        isOpen={isTourModalOpen}
        onClose={() => setIsTourModalOpen(false)}
      />
    </main>
  );
}
