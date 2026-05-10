"use client";

import { motion } from "framer-motion";
import AlignTime from "./align-time-zone";
import MainContent from "./main-content";

export default function HeroContent() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 space-y-5"
      >
        {/* Top Highlight Sentence */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8"
        >
          <h2 className="text-xl md:text-2xl font-bold tracking-tight text-foreground/90">
            Building <span className="text-primary italic">scalable</span> SaaS & AI solutions.
          </h2>
          <p className="text-sm text-muted-foreground mt-1 max-w-md">Currently scaling two revenue-generating products in the content and real-estate space.</p>
        </motion.div>

        {/* ✅ Product Stats - Stacked Layout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col gap-5 max-w-xl"
        >
          {/* TaharCast Card */}
          <motion.a
            href="https://taharcast.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5, scale: 1.01 }}
            className="relative group block p-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden transition-all duration-500"
          >
            {/* Background Glow */}
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-red-500/10 blur-3xl group-hover:bg-red-500/20 transition-colors duration-500" />

            <div className="relative z-10 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-red-500/20 border border-red-500/30 text-red-500 shadow-inner">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="5 3 19 12 5 21 5 3" fill="currentColor" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-black text-base tracking-tight block">TaharCast</span>
                    <span className="text-[10px] text-red-500/80 font-bold uppercase tracking-widest">Video AI</span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-500/10 border border-green-500/20">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
                  </span>
                  <span className="text-[10px] font-black text-green-500 uppercase tracking-widest">Live</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-foreground/80 leading-relaxed font-medium">
                AI tool that repurposes YouTube videos into content for <span className="text-foreground font-bold italic">6 platforms in 30 seconds.</span>
              </p>

              <div className="flex items-center gap-6 pt-2 border-t border-white/5">
                <div className="space-y-0.5">
                  <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-tighter">Active Users</p>
                  <p className="text-xl font-black text-foreground">310+</p>
                </div>
                <div className="w-px h-8 bg-white/5" />
                <div className="space-y-0.5">
                  <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-tighter">Global Breadth</p>
                  <p className="text-xl font-black text-foreground">15+ <span className="text-[10px] font-normal">Countries</span></p>
                </div>
                <div className="w-px h-8 bg-white/5" />
                <div className="space-y-0.5">
                  <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-tighter">Growth</p>
                  <p className="text- font-black text-red-500 tracking-tighter">$Growing</p>
                </div>
              </div>
            </div>

            {/* Gradient Border Overlay */}
            <div className="absolute inset-0 border border-white/10 rounded-2xl group-hover:border-red-500/40 transition-colors duration-500" />
          </motion.a>

          {/* TaharProp Card */}
          <motion.a
            href="https://taharprop.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5, scale: 1.01 }}
            className="relative group block p-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden transition-all duration-500"
          >
            {/* Background Glow */}
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-blue-500/10 blur-3xl group-hover:bg-blue-500/20 transition-colors duration-500" />

            <div className="relative z-10 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-blue-500/20 border border-blue-500/30 text-blue-500 shadow-inner">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                      <line x1="3" y1="9" x2="21" y2="9" />
                      <line x1="9" y1="21" x2="9" y2="9" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-black text-base tracking-tight block">TaharProp</span>
                    <span className="text-[10px] text-blue-500/80 font-bold uppercase tracking-widest">Real Estate AI</span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-500/10 border border-green-500/20">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
                  </span>
                  <span className="text-[10px] font-black text-green-500 uppercase tracking-widest">Live</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-foreground/80 leading-relaxed font-medium">
                WhatsApp AI chatbot for UAE real estate agencies. <span className="text-blue-400/90 italic">Arabic & English support with lead capture.</span>
              </p>

              <div className="flex items-center gap-6 pt-2 border-t border-white/5">
                <div className="space-y-0.5">
                  <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-tighter">Agencies</p>
                  <p className="text-xl font-black text-foreground">50+</p>
                </div>
                <div className="w-px h-8 bg-white/5" />
                <div className="space-y-0.5">
                  <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-tighter">Reach</p>
                  <p className="text-xl font-black text-foreground">11+ <span className="text-[10px] font-normal">Countries</span></p>
                </div>
                <div className="w-px h-8 bg-white/5" />
                <div className="space-y-0.5">
                  <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-tighter">Volume</p>
                  <p className="text- font-black text-blue-500 tracking-tighter">$Scaling</p>
                </div>
              </div>
            </div>

            {/* Gradient Border Overlay */}
            <div className="absolute inset-0 border border-white/10 rounded-2xl group-hover:border-blue-500/40 transition-colors duration-500" />
          </motion.a>
        </motion.div>

      </motion.div >
    </>
  );
}
