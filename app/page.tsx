"use client";

import React, { useState, useEffect } from "react";
import { useTranslation, Language } from "../hooks/useTranslation";
import Link from 'next/link';
export default function Home() {
  const { lang, t, tArray, changeLanguage, mounted } = useTranslation();
  const [progress, setProgress] = useState(0);

  // Simulated game loading progress
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        // Random increment between 1 and 4
        const increment = Math.floor(Math.random() * 3) + 1;
        return Math.min(prev + increment, 100);
      });
    }, 120);

    return () => clearInterval(timer);
  }, []);

  const bootSteps = tArray("bootSteps");
  const loadingSteps = [
    { max: 15, text: bootSteps[0] || "Initializing system..." },
    { max: 35, text: bootSteps[1] || "Compiling resources..." },
    { max: 60, text: bootSteps[2] || "Generating world..." },
    { max: 80, text: bootSteps[3] || "Connecting to core..." },
    { max: 95, text: bootSteps[4] || "Calibrating cycles..." },
    { max: 100, text: bootSteps[5] || "System ready." }
  ];

  // Find appropriate loading text based on active progress
  const activeStep = loadingSteps.find(s => progress <= s.max) || loadingSteps[loadingSteps.length - 1];
  const loadingText = activeStep.text;

  // Formatting copyright year
  const currentYear = new Date().getFullYear().toString();
  const formattedCopyright = t("footerCopyright").replace("{year}", currentYear);

  return (
    <div
      className="min-h-screen bg-[#03000a] text-zinc-100 flex flex-col relative font-sans select-none"
      style={{
        backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.015) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }}
    >
      {/* Background Ambient Glows */}
      <div className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] bg-blue-900/10 rounded-full blur-[140px] animate-float-slow pointer-events-none" />
      <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] bg-cyan-500/5 rounded-full blur-[140px] animate-float-medium pointer-events-none" />
      <div className="absolute top-[50%] left-[10%] w-[60%] h-[60%] bg-blue-950/10 rounded-full blur-[160px] animate-pulse-slow pointer-events-none" />

      {/* Main Container */}
      <div className="z-10 flex-1 flex flex-col max-w-6xl mx-auto w-full px-6 sm:px-12 py-4 justify-between">

        {/* Header */}
        <header className="flex justify-between items-center py-6 border-b border-white/[0.04] sticky top-0 bg-[#03000a]/80 backdrop-blur-md z-50">
          <div className="flex items-center gap-3">
            <span className="font-display font-bold text-xl tracking-wider text-white">
              GG GAMES LABS
            </span>
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </div>
          </div>

          {/* Navigation & Language Select */}
          <div className="flex items-center gap-6 sm:gap-8">
            <nav className="hidden md:flex items-center gap-6 text-xs font-mono uppercase tracking-widest text-zinc-500">
              <a href="#games" className="hover:text-blue-400 transition-colors">{t("navGames")}</a>
              <a href="#vision" className="hover:text-blue-400 transition-colors">{t("navVision")}</a>
              <a href="#contact" className="hover:text-blue-400 transition-colors">{t("navContact")}</a>
            </nav>

            <div className="px-3.5 py-1.5 rounded-full bg-zinc-950/60 border border-zinc-800/80 backdrop-blur-md text-[10px] font-mono text-zinc-400 flex items-center gap-2 tracking-widest uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981] animate-pulse"></span>
              {t("statusActiveDev")}
            </div>

            {/* Language Switcher */}
            <div className="flex items-center gap-1.5 bg-zinc-950/40 border border-white/[0.05] rounded-full p-1 text-[10px] font-mono">
              <button
                onClick={() => changeLanguage("en")}
                className={`px-2 py-0.5 rounded-full transition-all duration-300 ${lang === "en"
                    ? "bg-blue-600/20 text-blue-300 border border-blue-500/30"
                    : "text-zinc-500 hover:text-zinc-300"
                  }`}
              >
                EN
              </button>
              <button
                onClick={() => changeLanguage("fr")}
                className={`px-2 py-0.5 rounded-full transition-all duration-300 ${lang === "fr"
                    ? "bg-blue-600/20 text-blue-300 border border-blue-500/30"
                    : "text-zinc-500 hover:text-zinc-300"
                  }`}
              >
                FR
              </button>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 py-16 lg:py-24 items-center min-h-[70vh]">

          {/* Left Column: Hero & Loading Bar */}
          <div className="lg:col-span-7 flex flex-col space-y-8 text-left">
            <div className="space-y-4">
              <div className="inline-flex px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-300 uppercase tracking-widest">
                {t("incomingTransmission")}
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-white uppercase">
                {t("heroTitle1")}<br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400">
                  {t("heroTitle2")}
                </span>
              </h1>
            </div>

            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-xl">
              {t("heroSubtitle")}
            </p>

            {/* Simulated Loading Console */}
            <div className="bg-zinc-950/50 border border-zinc-900 rounded-xl p-5 font-mono text-xs text-zinc-400 space-y-3.5 backdrop-blur-sm max-w-xl">
              <div className="flex justify-between items-center text-[10px] text-zinc-500 border-b border-zinc-900 pb-2">
                <span>{t("bootLogTitle")}</span>
                <span>{progress}%</span>
              </div>

              <div className="flex items-center space-x-2">
                <span className="text-blue-400 animate-pulse">&gt;</span>
                <span className="text-zinc-300 truncate">{loadingText}</span>
              </div>

              {/* Progress Bar Container */}
              <div className="relative h-2 w-full bg-zinc-900/60 rounded-full overflow-hidden border border-white/[0.03]">
                <div
                  className="h-full bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-400 rounded-full transition-all duration-150 ease-out shadow-[0_0_12px_rgba(59,130,246,0.4)]"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className="flex justify-between items-center text-[10px] text-zinc-600 pt-1">
                <span>STABLE_BUILD_V0.1.0</span>
                <span>EST: QUANTUM_TIME</span>
              </div>
            </div>
          </div>

          {/* Right Column: Status Info Box */}
          <div className="lg:col-span-5 relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-500 rounded-2xl blur opacity-15 group-hover:opacity-25 transition duration-700 pointer-events-none" />

            {/* Status Card */}
            <div className="relative bg-zinc-950/40 backdrop-blur-xl border border-white/[0.05] hover:border-white/[0.08] transition-colors rounded-2xl p-6 sm:p-8 flex flex-col justify-center">
              <div className="space-y-6 py-4">
                <div className="mx-auto w-12 h-12 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                  <svg className="w-6 h-6 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.05 8.05a9 9 0 0 1 13.9 0M8.59 11.59a4.978 4.978 0 0 1 6.82 0M12 14.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                  </svg>
                </div>

                <div className="space-y-2 text-center">
                  <h3 className="font-display font-bold text-lg sm:text-xl text-white tracking-wide uppercase">
                    {t("cardTitle")}
                  </h3>
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                    {t("cardSubtitle")}
                  </p>
                </div>

                <div className="p-4 bg-zinc-950/70 border border-zinc-900 rounded-xl space-y-2.5">
                  <div className="text-[10px] font-mono text-zinc-500 flex justify-between border-b border-zinc-900 pb-1.5">
                    <span>{t("cardProtocol")}</span>
                    <span className="text-blue-400">{t("cardOnline")}</span>
                  </div>
                  <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                    {t("cardText")}
                  </p>
                </div>

                <div className="text-center">
                  <Link href="/games/smash-dice" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-zinc-950/30 border border-blue-500/40 text-blue-300 hover:bg-zinc-950/50 transition-colors backdrop-blur-sm">
                    Play Smash Dice
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Games Showcase */}
        <section id="games" className="py-20 border-t border-white/[0.04]">
          <div className="space-y-4 mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-wider text-white">
              {t("gamesSectionTitle")}
            </h2>
            <p className="text-zinc-500 text-xs sm:text-sm font-mono uppercase tracking-widest">
              {t("gamesSectionSubtitle")}
            </p>
          </div>

          <div className="space-y-12">
            {/* Smash Dice Main Presentation */}
            <div className="relative group">
              {/* Subtle Cosmic Background Glow specific to Smash Dice */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-900/30 via-blue-900/30 to-indigo-900/30 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-700 pointer-events-none" />

              <div className="relative bg-zinc-950/20 backdrop-blur-md border border-white/[0.04] rounded-2xl p-6 sm:p-8 lg:p-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

                  {/* Left Column: Game Info */}
                  <div className="lg:col-span-7 space-y-6">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="px-2.5 py-1 rounded bg-blue-500/10 border border-blue-500/20 text-[10px] font-mono text-blue-300 uppercase tracking-widest">
                        {t("gameActiveTag")}
                      </span>
                      <span className="text-[10px] font-mono text-zinc-500 uppercase">SYS_LOG // 01</span>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-wide uppercase">
                        {t("game1Title")}
                      </h3>
                      <p className="text-xs sm:text-sm font-mono text-cyan-400 italic tracking-wide">
                        "{t("game1Slogan")}"
                      </p>
                    </div>

                    <p className="text-zinc-400 text-sm leading-relaxed font-sans">
                      {t("game1Desc")}
                    </p>

                    {/* Technical / Game features sheet */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/[0.03]">
                      <div className="space-y-2">
                        <span className="block text-[10px] font-mono text-zinc-500 uppercase tracking-wider">Engine & Core Tech</span>
                        <p className="text-xs font-mono text-zinc-300">{t("game1Tech")}</p>
                      </div>
                      <div className="space-y-2">
                        <span className="block text-[10px] font-mono text-zinc-500 uppercase tracking-wider">Features</span>
                        <p className="text-xs font-mono text-zinc-300">{t("game1Features")}</p>
                      </div>
                    </div>

                    {/* Platform target badges */}
                    <div className="flex items-center gap-2 pt-2 text-[9px] font-mono text-zinc-500">
                      <span>TARGETS:</span>
                      <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-400">ANDROID</span>
                    </div>
                  </div>

                  {/* Right Column: Media Templates */}
                  <div className="lg:col-span-5 space-y-4">
                    {/* Video Trailer Placeholder (16:9) */}
                    <div className="relative aspect-video rounded-xl bg-zinc-950/80 border border-white/[0.06] overflow-hidden flex flex-col items-center justify-center text-center p-6 group/video">
                      {/* Scanlines Effect */}
                      <div className="absolute inset-0 crt-scanlines pointer-events-none opacity-40" />
                      <div className="absolute inset-0 bg-scanline animate-scanline pointer-events-none opacity-20" />

                      <div className="z-10 space-y-3">
                        <div className="mx-auto w-10 h-10 rounded-full bg-blue-500/5 border border-blue-500/20 flex items-center justify-center text-blue-400/60 group-hover/video:text-blue-400 group-hover/video:border-blue-500/40 group-hover/video:scale-105 transition-all duration-300 shadow-[0_0_15px_rgba(59,130,246,0.15)]">
                          <svg className="w-4 h-4 fill-current ml-0.5" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                        <div className="space-y-1">
                          <span className="block text-[9px] font-mono text-zinc-500 uppercase tracking-widest">{t("mediaTrailer")}</span>
                          <span className="block text-[10px] font-mono text-blue-400/80 animate-pulse">{t("mediaVideoPlaceholder")}</span>
                        </div>
                      </div>
                    </div>

                    {/* Screenshots Grid (3 placeholders) */}
                    <div className="grid grid-cols-3 gap-3">
                      {[1, 2, 3].map((num) => (
                        <div key={num} className="relative aspect-video rounded-lg bg-zinc-950/40 border border-dashed border-white/[0.06] hover:border-blue-500/20 transition-all duration-300 flex flex-col items-center justify-center text-center p-2 group/screen">
                          <div className="text-zinc-600 group-hover/screen:text-blue-400/60 transition-colors">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.9 2.9m-18 0V4.5A2.25 2.25 0 014.5 2.25h15a2.25 2.25 0 012.25 2.25v13.5m-18 0h18M9 10.5h.008v.008H9V10.5z" />
                            </svg>
                          </div>
                          <span className="mt-1 block text-[7px] font-mono text-zinc-600 uppercase tracking-wider group-hover/screen:text-zinc-400 transition-colors">
                            {num === 1 ? "CAM_01 // ORBIT" : num === 2 ? "CAM_02 // SYSTEM" : "CAM_03 // TELEMETRY"}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Next Universe Concept */}
            <div className="relative group max-w-xl mx-auto lg:mx-0">
              <div className="relative bg-zinc-950/10 border border-dashed border-white/[0.04] rounded-xl p-5 flex items-center justify-between gap-6 transition-colors hover:border-white/[0.08]">
                <div className="space-y-1">
                  <span className="inline-block px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[8px] font-mono text-zinc-500 uppercase tracking-widest">
                    {t("gameFutureTag")}
                  </span>
                  <h4 className="font-display text-sm font-bold text-zinc-500 tracking-wide uppercase">
                    {t("gameFutureTitle")}
                  </h4>
                  <p className="text-zinc-600 text-xs font-sans">
                    {t("gameFutureDesc")}
                  </p>
                </div>
                <div className="text-zinc-700 font-mono text-[9px] whitespace-nowrap text-right hidden sm:block">
                  <span>STATUS: PENDING_DESIGN</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Manifesto / Studio Vision */}
        <section id="vision" className="py-20 border-t border-white/[0.04]">
          <div className="space-y-4 mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-wider text-white">
              {t("visionTitle")}
            </h2>
            <p className="text-zinc-500 text-xs sm:text-sm font-mono uppercase tracking-widest">
              {t("visionSubtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {/* Philosophy I: Independent */}
            <div className="bg-zinc-950/20 border border-white/[0.03] rounded-lg p-5 space-y-3">
              <div className="text-xs font-mono text-blue-500/80 uppercase">01 // {t("philosophyIndependentTitle")}</div>
              <p className="text-xs text-zinc-400 leading-relaxed font-sans">{t("philosophyIndependentDesc")}</p>
            </div>

            {/* Philosophy II: Creative */}
            <div className="bg-zinc-950/20 border border-white/[0.03] rounded-lg p-5 space-y-3">
              <div className="text-xs font-mono text-blue-500/80 uppercase">02 // {t("philosophyCreativeTitle")}</div>
              <p className="text-xs text-zinc-400 leading-relaxed font-sans">{t("philosophyCreativeDesc")}</p>
            </div>

            {/* Philosophy III: Playful */}
            <div className="bg-zinc-950/20 border border-white/[0.03] rounded-lg p-5 space-y-3">
              <div className="text-xs font-mono text-blue-500/80 uppercase">03 // {t("philosophyPlayfulTitle")}</div>
              <p className="text-xs text-zinc-400 leading-relaxed font-sans">{t("philosophyPlayfulDesc")}</p>
            </div>

            {/* Philosophy IV: Evolving */}
            <div className="bg-zinc-950/20 border border-white/[0.03] rounded-lg p-5 space-y-3">
              <div className="text-xs font-mono text-blue-500/80 uppercase">04 // {t("philosophyEvolvingTitle")}</div>
              <p className="text-xs text-zinc-400 leading-relaxed font-sans">{t("philosophyEvolvingDesc")}</p>
            </div>

            {/* Philosophy V: Authentic */}
            <div className="bg-zinc-950/20 border border-white/[0.03] rounded-lg p-5 space-y-3">
              <div className="text-xs font-mono text-blue-500/80 uppercase">05 // {t("philosophyAuthenticTitle")}</div>
              <p className="text-xs text-zinc-400 leading-relaxed font-sans">{t("philosophyAuthenticDesc")}</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer id="contact" className="flex flex-col md:flex-row justify-between items-center py-8 border-t border-white/[0.04] text-[10px] sm:text-xs font-mono text-zinc-600 gap-4">
          <div className="text-center md:text-left">
            {formattedCopyright}
          </div>
          <div className="text-zinc-500 text-center md:text-left">
            {t("footerDesigned")}
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-5">
            <a
              href="mailto:contact@gggameslabs.com"
              className="p-2.5 rounded-full bg-zinc-950 border border-zinc-900 text-zinc-400 hover:text-blue-400 hover:border-blue-500/30 transition-all duration-300"
              title="Contact Email"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </a>
          </div>
        </footer>

      </div>
    </div>
  );
}
