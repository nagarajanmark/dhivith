"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  Sparkles,
  Calendar,
  ShieldCheck,
  Award,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { SCHOOL_INFO } from "@/data/schoolData";

interface CampusVideoShowcaseProps {
  onOpenTourModal: () => void;
}

export const CampusVideoShowcase: React.FC<CampusVideoShowcaseProps> = ({
  onOpenTourModal,
}) => {
  const { t, language } = useLanguage();
  const [activeTrackIndex, setActiveTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const playlist = [
    {
      id: "campus-experience",
      title: t.video.track1Title,
      subtitle: t.video.track1Subtitle,
      duration: t.video.track1Duration,
      src: "/Dhivith_School_website_video_banner_20261005204114.mp4",
      youtubeUrl: SCHOOL_INFO.youtube,
      badge: t.video.track1Badge,
      tagline: t.video.track1Tagline,
    },
    {
      id: "interactive-learning",
      title: t.video.track2Title,
      subtitle: t.video.track2Subtitle,
      duration: t.video.track2Duration,
      src: "/banner-video.mp4",
      youtubeUrl: SCHOOL_INFO.youtube,
      badge: t.video.track2Badge,
      tagline: t.video.track2Tagline,
    },
  ];

  const activeTrack = playlist[activeTrackIndex] || playlist[0];

  // Auto-play when switching video tracks
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  }, [activeTrackIndex]);

  const openYouTube = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    const url = activeTrack.youtubeUrl || SCHOOL_INFO.youtube || "https://www.youtube.com";
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const togglePlay = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime;
    const total = videoRef.current.duration;
    if (total > 0) {
      setProgress((current / total) * 100);
    }
  };

  const handleFullscreen = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  return (
    <section className="py-14 sm:py-16 lg:py-24 bg-white border-t border-gray-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Title in White Theme */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="flex flex-wrap items-center justify-center gap-2 mb-3">
            <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-[#EAF8EF] text-[#159447] text-[11px] sm:text-xs font-bold uppercase tracking-wider border border-[#159447]/20 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#159447]" />
              <span>{t.video.badge}</span>
            </div>

            {/* Direct YouTube channel link in header */}
            <a
              href={SCHOOL_INFO.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FF0000]/10 hover:bg-[#FF0000] text-[#FF0000] hover:text-white text-[11px] sm:text-xs font-bold border border-[#FF0000]/20 shadow-xs transition-all duration-200"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              <span>{language === "ta" ? "YouTube சேனல்" : "YouTube Channel"}</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-3xl xl:text-4xl text-[#121D28] tracking-tight leading-tight px-2">
            {t.video.title}
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-[#5E6D7A] mt-2.5 max-w-2xl mx-auto px-2">
            {t.video.subtitle}
          </p>
        </div>

        {/* Main Video Player Card — Clicking anywhere opens YouTube */}
        <div
          onClick={openYouTube}
          className="relative rounded-2xl sm:rounded-[36px] overflow-hidden border-2 border-gray-200/90 bg-white shadow-xl cursor-pointer group"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") openYouTube();
          }}
          aria-label={language === "ta" ? "YouTube-ல் வீடியோ பார்க்க கிளிக் செய்யவும்" : "Click to watch video on YouTube"}
        >
          {/* Main Video Element */}
          <div className="relative aspect-[16/10] sm:aspect-[21/9] md:aspect-[16/8] w-full overflow-hidden flex items-center justify-center bg-black">
            <video
              ref={videoRef}
              src={activeTrack.src}
              autoPlay
              loop
              muted={isMuted}
              playsInline
              onTimeUpdate={handleTimeUpdate}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            />

            {/* Video overlay vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/40 pointer-events-none group-hover:bg-black/30 transition-colors" />



            {/* Top Bar inside Video: Title & Live Badge + Direct YouTube button */}
            <div className="absolute top-3 sm:top-6 inset-x-3 sm:inset-x-8 flex items-center justify-between z-20">
              <div className="flex items-center gap-1.5 sm:gap-3 pointer-events-none">
                <span className="flex h-2 w-2 sm:h-2.5 sm:w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-emerald-500" />
                </span>
                <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-emerald-300">
                  {activeTrack.badge}
                </span>
                <span className="hidden md:inline-block text-xs text-white/90 font-medium drop-shadow">
                  {activeTrack.tagline}
                </span>
              </div>

              {/* YouTube badge button + Volume & Fullscreen Quick Buttons */}
              <div className="flex items-center gap-1.5 sm:gap-2">
                <button
                  type="button"
                  onClick={openYouTube}
                  className="px-3 py-1.5 sm:px-3.5 sm:py-1.5 rounded-full bg-[#FF0000] hover:bg-[#CC0000] text-white text-[11px] sm:text-xs font-bold flex items-center gap-1.5 shadow-lg transition-transform active:scale-95 cursor-pointer"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                  <span className="hidden xs:inline">{language === "ta" ? "YouTube" : "YouTube"}</span>
                  <ExternalLink className="w-3 h-3" />
                </button>

                <button
                  type="button"
                  onClick={toggleMute}
                  aria-label={isMuted ? "Unmute" : "Mute"}
                  className="p-2 sm:p-2.5 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-md border border-white/25 text-white transition-transform active:scale-95 cursor-pointer shadow-md"
                >
                  {isMuted ? (
                    <VolumeX className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-300" />
                  ) : (
                    <Volume2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400" />
                  )}
                </button>
                <button
                  type="button"
                  onClick={handleFullscreen}
                  aria-label="Fullscreen"
                  className="p-2 sm:p-2.5 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-md border border-white/25 text-white transition-transform active:scale-95 cursor-pointer hidden sm:flex shadow-md"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Bottom Controls Bar inside Video */}
            <div className="absolute bottom-0 inset-x-0 p-3 sm:p-6 z-20 flex flex-col gap-2 sm:gap-3">
              {/* Timeline progress line */}
              <div className="w-full bg-white/30 h-1 sm:h-1.5 rounded-full overflow-hidden">
                <div
                  className="bg-gradient-to-r from-[#0750B8] via-emerald-400 to-[#159447] h-full transition-all duration-150"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Bottom Details Row */}
              <div className="flex items-center justify-between gap-3 pt-0.5 sm:pt-1">
                <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                  <button
                    type="button"
                    onClick={togglePlay}
                    className="p-2 sm:p-2.5 rounded-lg sm:rounded-xl bg-white/25 hover:bg-white/35 backdrop-blur-md border border-white/30 text-white transition-transform active:scale-95 cursor-pointer flex items-center justify-center flex-shrink-0"
                  >
                    {isPlaying ? (
                      <Pause className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" />
                    ) : (
                      <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current ml-0.5" />
                    )}
                  </button>

                  <div className="min-w-0">
                    <h3 className="font-display font-bold text-xs sm:text-lg text-white drop-shadow truncate">
                      {activeTrack.title}
                    </h3>
                    <p className="text-[11px] text-white/90 hidden md:block">
                      {activeTrack.subtitle}
                    </p>
                  </div>
                </div>

                {/* Direct Action Buttons on Tablet/Desktop */}
                <div className="hidden sm:flex items-center gap-2.5 flex-shrink-0">
                  <button
                    type="button"
                    onClick={openYouTube}
                    className="px-4 py-2 sm:py-2.5 rounded-xl bg-[#FF0000] hover:bg-[#CC0000] text-white font-bold text-xs sm:text-sm shadow-lg transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                    <span>{language === "ta" ? "YouTube-ல் திறக்க" : "Open in YouTube"}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenTourModal();
                    }}
                    className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-white text-[#0750B8] hover:bg-gray-100 font-bold text-xs sm:text-sm shadow-lg transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
                  >
                    <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#F36B12]" />
                    <span>{t.video.bookTour}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Light Theme Video Switcher Tabs (2 Videos) */}
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-100 bg-gray-50/80 p-2.5 sm:p-4">
            {playlist.map((track, idx) => {
              const isSelected = activeTrackIndex === idx;
              return (
                <div
                  key={track.id}
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveTrackIndex(idx);
                  }}
                  className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl text-left transition-all duration-300 flex items-start justify-between gap-3 cursor-pointer ${
                    isSelected
                      ? "bg-white border border-[#0750B8]/20 shadow-sm"
                      : "hover:bg-white/60 opacity-80 hover:opacity-100"
                  }`}
                >
                  <div className="flex items-start gap-3 min-w-0">
                    <div
                      className={`w-8 h-8 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        isSelected
                          ? "bg-[#0750B8] text-white shadow-md"
                          : "bg-gray-200/80 text-[#5E6D7A]"
                      }`}
                    >
                      {isSelected && isPlaying ? (
                        <span className="flex gap-0.5 items-end h-3">
                          <span className="w-0.5 sm:w-1 bg-white h-full animate-bounce" />
                          <span className="w-0.5 sm:w-1 bg-white h-2/3 animate-bounce [animation-delay:0.2s]" />
                          <span className="w-0.5 sm:w-1 bg-white h-4/5 animate-bounce [animation-delay:0.4s]" />
                        </span>
                      ) : (
                        <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                      )}
                    </div>

                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span
                          className={`text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider ${
                            isSelected ? "text-[#0750B8]" : "text-[#5E6D7A]"
                          }`}
                        >
                          {track.duration}
                        </span>
                      </div>
                      <div
                        className={`font-bold text-xs sm:text-sm truncate mt-0.5 ${
                          isSelected ? "text-[#0750B8]" : "text-[#121D28]"
                        }`}
                      >
                        {track.title}
                      </div>
                      <div className="text-[11px] sm:text-xs text-[#5E6D7A] line-clamp-1 mt-0.5">
                        {track.subtitle}
                      </div>
                    </div>
                  </div>

                  {/* Direct YouTube click button on tab */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      openYouTube(e);
                    }}
                    title={language === "ta" ? "YouTube-ல் காண்க" : "Watch on YouTube"}
                    className="p-2 rounded-lg bg-gray-100 hover:bg-[#FF0000] text-gray-600 hover:text-white transition-colors flex-shrink-0"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </button>
                </div>
              );
            })}
          </div>

          {/* Mobile Direct Action Buttons below tabs */}
          <div className="p-3 bg-white border-t border-gray-100 sm:hidden flex items-center gap-2">
            <button
              type="button"
              onClick={openYouTube}
              className="flex-1 py-3 rounded-xl bg-[#FF0000] text-white font-bold text-xs shadow-md flex items-center justify-center gap-1.5"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              <span>{language === "ta" ? "YouTube-ல் காண்க" : "Watch on YouTube"}</span>
              <ExternalLink className="w-3 h-3" />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onOpenTourModal();
              }}
              className="flex-1 py-3 rounded-xl bg-[#0750B8] text-white font-bold text-xs shadow-md flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4 text-amber-300" />
              <span>{t.video.bookTour}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 3 Value Badges under Video in Light Theme */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mt-6 sm:mt-8 max-w-5xl mx-auto">
          <div className="p-3.5 sm:p-4 rounded-2xl bg-gray-50/70 border border-gray-200/80 shadow-xs flex items-center gap-3">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#EAF8EF] text-[#159447] flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <div className="font-bold text-xs sm:text-sm text-[#121D28]">
                {t.video.val1Title}
              </div>
              <div className="text-[11px] text-[#5E6D7A]">
                {t.video.val1Desc}
              </div>
            </div>
          </div>

          <div className="p-3.5 sm:p-4 rounded-2xl bg-gray-50/70 border border-gray-200/80 shadow-xs flex items-center gap-3">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#EBF3FF] text-[#0750B8] flex items-center justify-center flex-shrink-0">
              <Award className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <div className="font-bold text-xs sm:text-sm text-[#121D28]">
                {t.video.val2Title}
              </div>
              <div className="text-[11px] text-[#5E6D7A]">
                {t.video.val2Desc}
              </div>
            </div>
          </div>

          <div className="p-3.5 sm:p-4 rounded-2xl bg-gray-50/70 border border-gray-200/80 shadow-xs flex items-center gap-3">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#FFF9E5] text-[#9A6700] flex items-center justify-center flex-shrink-0">
              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <div className="font-bold text-xs sm:text-sm text-[#121D28]">
                {t.video.val3Title}
              </div>
              <div className="text-[11px] text-[#5E6D7A]">
                {t.video.val3Desc}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
