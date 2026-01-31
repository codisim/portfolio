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
        {/* Compact timezone + availability badge */}
        <AlignTime />

        <MainContent />


        {/* <div className="flex flex-wrap gap-3 sm:gap-4">
              <Button asChild size="sm" className="text-sm sm:text-base group">
                <a href="#contact">
                  Get in Touch
                  <ArrowRight className="ml-1.5 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="sm"
                className="text-sm sm:text-base hover:bg-primary hover:text-primary-foreground"
              >
                <a href="#projects">View Projects</a>
              </Button>
            </div> */}

        {/* Compact tech pills */}
        <div className="flex flex-wrap gap-2 sm:gap-3 pt-2 text-[10px] sm:text-xs">
          {[
            "TypeScript",
            "Node.js",
            "Express",
            "React",
            "Next.js",
            "Docker",
          ].map((tech) => (
            <div
              key={tech}
              className="px-3 py-1 rounded-full bg-primary/10 border border-primary/15 text-primary/90 font-medium
                    hover:bg-primary/20 hover:scale-105 transition-all duration-300"
            >
              {tech}
            </div>
          ))}
        </div>
      </motion.div>

    </>
  )
}