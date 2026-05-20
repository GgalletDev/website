"use client";

import React, { useState, useEffect } from "react";

export default function Home() {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState("Initialisation des systèmes...");

  // Simulated game loading progress
  useEffect(() => {
    const loadingSteps = [
      { max: 15, text: "Initialisation du moteur de rendu..." },
      { max: 35, text: "Compilation des shaders & blueprints..." },
      { max: 60, text: "Génération procédurale de l'univers..." },
      { max: 80, text: "Connexion aux serveurs de matchmaking..." },
      { max: 95, text: "Calibration des boucles de gameplay..." },
      { max: 100, text: "Systèmes opérationnels. Prêt pour le déploiement." }
    ];

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }

        // Random increment between 1 and 4
        const increment = Math.floor(Math.random() * 3) + 1;
        const nextProgress = Math.min(prev + increment, 100);

        // Find appropriate loading text
        const step = loadingSteps.find(s => nextProgress <= s.max) || loadingSteps[loadingSteps.length - 1];
        setLoadingText(step.text);

        return nextProgress;
      });
    }, 120);

    return () => clearInterval(timer);
  }, []);

  return (
    <div 
      className="min-h-screen bg-[#03000a] text-zinc-100 flex flex-col relative overflow-hidden font-sans select-none"
      style={{
        backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }}
    >
      {/* Background Ambient Glows */}
      <div className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] bg-violet-900/15 rounded-full blur-[140px] animate-float-slow pointer-events-none" />
      <div className="absolute -bottom-[10%] -right-[10%] w-[60%] h-[60%] bg-cyan-500/10 rounded-full blur-[140px] animate-float-medium pointer-events-none" />
      <div className="absolute top-[30%] left-[20%] w-[50%] h-[55%] bg-purple-900/10 rounded-full blur-[160px] animate-pulse-slow pointer-events-none" />

      {/* Main Container */}
      <div className="z-10 flex-1 flex flex-col max-w-6xl mx-auto w-full px-6 sm:px-12 py-8 justify-between">
        
        {/* Header */}
        <header className="flex justify-between items-center py-6 border-b border-white/[0.04]">
          <div className="flex items-center gap-3">
            <span className="font-orbitron font-black text-xl tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
              GG GAMES LABS
            </span>
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
            </div>
          </div>
          
          <div className="px-3.5 py-1.5 rounded-full bg-zinc-950/60 border border-zinc-800/80 backdrop-blur-md text-[10px] font-mono text-zinc-400 flex items-center gap-2 tracking-widest uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981] animate-pulse"></span>
            STATUS: ACTIVE_DEVELOPMENT
          </div>
        </header>

        {/* Main Grid */}
        <main className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 my-auto py-12 items-center">
          
          {/* Left Column: Hero Copy & Loading Bar */}
          <div className="lg:col-span-7 flex flex-col space-y-8 text-left">
            <div className="space-y-4">
              <div className="inline-flex px-3 py-1 rounded-md bg-violet-500/10 border border-violet-500/20 text-xs font-mono text-violet-300 uppercase tracking-widest">
                [ Transmission Entrante ]
              </div>
              <h1 className="font-orbitron text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight text-white">
                DU CODE, DU JEU,<br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400">
                  DES UNIVERS.
                </span>
              </h1>
            </div>

            <p className="text-zinc-400 text-base sm:text-lg leading-relaxed max-w-xl">
              GG Games Labs est un projet de studio indépendant né de ma passion pour le jeu vidéo. En tant que développeur solo, je conçois et code de petits univers interactifs et immersifs à mon rythme. Le premier prototype prend forme tranquillement dans l'ombre.
            </p>

            {/* Simulated Loading Console */}
            <div className="bg-zinc-950/50 border border-zinc-900 rounded-xl p-5 font-mono text-xs text-zinc-400 space-y-3.5 backdrop-blur-sm max-w-xl">
              <div className="flex justify-between items-center text-[10px] text-zinc-500 border-b border-zinc-900 pb-2">
                <span>SYSTEM_BOOT_LOG // RUNNING</span>
                <span>{progress}%</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <span className="text-violet-400 animate-pulse">&gt;</span>
                <span className="text-zinc-300 truncate">{loadingText}</span>
              </div>

              {/* Progress Bar Container */}
              <div className="relative h-2 w-full bg-zinc-900/60 rounded-full overflow-hidden border border-white/[0.03]">
                <div 
                  className="h-full bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-400 rounded-full transition-all duration-150 ease-out shadow-[0_0_12px_rgba(139,92,246,0.5)]"
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
            {/* Ambient Card Back-glow */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-600 to-cyan-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-700 pointer-events-none" />
            
            {/* Status Card */}
            <div className="relative bg-zinc-950/40 backdrop-blur-xl border border-white/[0.06] hover:border-white/[0.1] transition-colors rounded-2xl p-6 sm:p-8 flex flex-col justify-center">
              <div className="space-y-6 py-4">
                <div className="mx-auto w-12 h-12 rounded-full bg-violet-500/10 border border-violet-500/30 flex items-center justify-center text-violet-400 shadow-[0_0_15px_rgba(139,92,246,0.25)]">
                  <svg className="w-6 h-6 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.05 8.05a9 9 0 0 1 13.9 0M8.59 11.59a4.978 4.978 0 0 1 6.82 0M12 14.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                  </svg>
                </div>
                
                <div className="space-y-2 text-center">
                  <h3 className="font-orbitron font-bold text-lg sm:text-xl text-white tracking-wide uppercase">
                    Transmission En Cours
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Le site est actuellement en cours de construction. Le premier projet se prépare en coulisses.
                  </p>
                </div>

                <div className="p-4 bg-zinc-950/70 border border-zinc-900 rounded-xl space-y-2.5">
                  <div className="text-[10px] font-mono text-zinc-500 flex justify-between border-b border-zinc-900 pb-1.5">
                    <span>LIAISON PROTOCOLE</span>
                    <span className="text-violet-400">EN LIGNE</span>
                  </div>
                  <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                    Restez dans les parages ! Vous pouvez me contacter directement en cliquant sur le bouton d'e-mail ci-dessous pour toute question, idée ou échange.
                  </p>
                </div>
                
                <div className="text-center">
                  <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-[10px] font-mono text-cyan-300 tracking-widest uppercase">
                    PROJET_ALPHA // TRÈS BIENTÔT
                  </span>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="flex flex-col md:flex-row justify-between items-center py-6 border-t border-white/[0.04] text-[10px] sm:text-xs font-mono text-zinc-600 gap-4">
          <div className="text-center md:text-left">
            © {new Date().getFullYear()} GG Games Labs. Tous droits réservés.
          </div>
          <div className="text-zinc-500">
            Conçu en solo. Propulsé par la passion.
          </div>
          
          {/* Social Links */}
          <div className="flex space-x-5 text-zinc-400">
            <a 
              href="mailto:contact@gggameslabs.com" 
              className="hover:text-violet-400 transition-colors"
              title="Contact par email"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
