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
} from "lucide-react";

interface CampusVideoShowcaseProps {
  onOpenTourModal: () => void;
}

interface VideoTrack {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  src: string;
  badge: string;
  tagline: string;
}

const VIDEO_PLAYLIST: VideoTrack[] = [
  {
    id: "campus-experience",
    title: "A Day at Dhivith Edu Care",
    subtitle: "Explore our Montessori classrooms, sensory activities & happy children.",
    duration: "Campus Tour",
    src: "/Dhivith_School_website_video_banner_20261005204114.mp4",
    badge: "Featured Experience",
    tagline: "Live Montessori Method in Action",
  },
  {
    id: "interactive-learning",
    title: "Joyful Learning & Play",
    subtitle: "Independent child-led exploration with certified Montessori apparatus.",
    duration: "Classroom Life",
    src: "/banner-video.mp4",
    badge: "Classroom Focus",
    tagline: "Hands-on Practical Life & Sensorial Work",
  },
];

export const CampusVideoShowcase: React.FC<CampusVideoShowcaseProps> = ({
  onOpenTourModal,
}) => {
  const [activeTrackIndex, setActiveTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const activeTrack = VIDEO_PLAYLIST[activeTrackIndex];

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

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
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

  const handleFullscreen = () => {
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
          <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-[#EAF8EF] text-[#159447] text-[11px] sm:text-xs font-bold uppercase tracking-wider border border-[#159447]/20 mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#159447]" />
            <span>Virtual Campus Experience</span>
          </div>

          <h2 className="font-display font-extrabold text-2xl sm:text-4xl lg:text-5xl text-[#121D28] tracking-tight leading-tight px-2">
            See the Magic of Montessori in Action
          </h2>

          <p className="text-xs sm:text-base text-[#5E6D7A] mt-2.5 max-w-2xl mx-auto px-2">
            Watch our children discover, learn, and grow every day in our
            peaceful, activity-filled environment in Kinathukadavu.
          </p>
        </div>

        {/* Main Video Player Card */}
        <div className="relative rounded-2xl sm:rounded-[36px] overflow-hidden border-2 border-gray-200/90 bg-white shadow-xl">
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
              onClick={togglePlay}
              className="w-full h-full object-cover cursor-pointer"
            />

            {/* Video overlay vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/40 pointer-events-none" />

            {/* Top Bar inside Video: Title & Live Badge */}
            <div className="absolute top-3 sm:top-6 inset-x-3 sm:inset-x-8 flex items-center justify-between z-20 pointer-events-none">
              <div className="flex items-center gap-1.5 sm:gap-3">
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

              {/* Volume & Fullscreen Quick Buttons */}
              <div className="flex items-center gap-1.5 sm:gap-2 pointer-events-auto">
                <button
                  onClick={toggleMute}
                  aria-label={isMuted ? "Unmute" : "Mute"}
                  className="p-2 sm:p-3 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-md border border-white/25 text-white transition-transform active:scale-95 cursor-pointer shadow-md"
                >
                  {isMuted ? (
                    <VolumeX className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-300" />
                  ) : (
                    <Volume2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400" />
                  )}
                </button>
                <button
                  onClick={handleFullscreen}
                  aria-label="Fullscreen"
                  className="p-2 sm:p-3 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-md border border-white/25 text-white transition-transform active:scale-95 cursor-pointer hidden sm:flex shadow-md"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Center Big Play Button (when paused) */}
            {!isPlaying && (
              <button
                onClick={togglePlay}
                aria-label="Play video"
                className="absolute z-30 w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-[#0750B8] hover:bg-[#0962dc] text-white flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
              >
                <Play className="w-6 h-6 sm:w-9 sm:h-9 ml-1 fill-current" />
              </button>
            )}

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

                {/* Tour Button on Tablet/Desktop */}
                <div className="hidden sm:flex items-center gap-3 flex-shrink-0">
                  <button
                    onClick={onOpenTourModal}
                    className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-white text-[#0750B8] hover:bg-gray-100 font-bold text-xs sm:text-sm shadow-lg transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#F36B12]" />
                    <span>Book a Campus Tour</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Light Theme Video Switcher Tabs (2 Videos) */}
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-100 bg-gray-50/80 p-2.5 sm:p-4">
            {VIDEO_PLAYLIST.map((track, idx) => {
              const isSelected = activeTrackIndex === idx;
              return (
                <button
                  key={track.id}
                  onClick={() => setActiveTrackIndex(idx)}
                  className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl text-left transition-all duration-300 flex items-start gap-3 cursor-pointer ${
                    isSelected
                      ? "bg-white border border-[#0750B8]/20 shadow-sm"
                      : "hover:bg-white/60 opacity-80 hover:opacity-100"
                  }`}
                >
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
                </button>
              );
            })}
          </div>

          {/* Mobile Direct Action Button below tabs */}
          <div className="p-3 bg-white border-t border-gray-100 sm:hidden">
            <button
              onClick={onOpenTourModal}
              className="w-full py-3 rounded-xl bg-[#0750B8] text-white font-bold text-xs shadow-md flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4 text-amber-300" />
              <span>Book a Campus Tour</span>
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
                Safe & Caring Campus
              </div>
              <div className="text-[11px] text-[#5E6D7A]">
                Live supervision & kid-safe spaces
              </div>
            </div>
          </div>

          <div className="p-3.5 sm:p-4 rounded-2xl bg-gray-50/70 border border-gray-200/80 shadow-xs flex items-center gap-3">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#EBF3FF] text-[#0750B8] flex items-center justify-center flex-shrink-0">
              <Award className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <div className="font-bold text-xs sm:text-sm text-[#121D28]">
                Certified Teachers
              </div>
              <div className="text-[11px] text-[#5E6D7A]">
                Trained in genuine Montessori
              </div>
            </div>
          </div>

          <div className="p-3.5 sm:p-4 rounded-2xl bg-gray-50/70 border border-gray-200/80 shadow-xs flex items-center gap-3">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#FFF9E5] text-[#9A6700] flex items-center justify-center flex-shrink-0">
              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <div className="font-bold text-xs sm:text-sm text-[#121D28]">
                Individual Attention
              </div>
              <div className="text-[11px] text-[#5E6D7A]">
                Small batch sizes for every child
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
