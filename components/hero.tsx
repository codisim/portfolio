"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { TypeAnimation } from "react-type-animation";
import heroImage from "@/public/assets/images/codisim, software-engineer, backend-developer, node.js, typescript, react.js, golang, javascript, postgresql (5).jpg";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-background text-foreground relative overflow-hidden"
    >
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] opacity-60" />

      <div className="pt-24 pb-16 md:pt-40 md:pb-28 container px-5 sm:px-6 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative z-10 space-y-5"
          >
            {/* Compact timezone + availability badge */}
            <div className="flex items-center gap-2.5">
              
              <div
                className=" flex items-center gap-2.5 mb-
                px-3 py-1 rounded-full text-[10px] sm:text-xs 
                bg-gradient-to-r from-green-500/15 to-emerald-500/15 
                border border-green-400/30 
                text-green-200/90 font-medium tracking-wide
                shadow-[0_0_10px_rgba(34,197,94,0.3)]
                hover:shadow-[0_0_14px_rgba(34,197,94,0.55)] 
                hover:scale-105 
                transition-all duration-300 backdrop-blur-sm"
              >
                <div className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-70"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500 border border-green-300 shadow-sm"></span>
              </div>
                <span>US/UK Time Zone Aligned</span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
              <span className="block">Mohammad Waliullah</span>
              <span className="text-primary block mt-1.5 text-2xl sm:text-3xl lg:text-4xl">
                <TypeAnimation
                  sequence={[
                    "Full-Stack Developer",
                    2200,
                    "Backend Engineer",
                    2200,
                    // "Node.js + TypeScript",
                    1800,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </h1>

            <p className="text-sm sm:text-base text-muted-foreground max-w-lg leading-relaxed">
              Mid-level software engineer focused on scalable backends, cloud
              infrastructure, performance optimization, and modern full-stack
              development.
            </p>



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

          {/* Smaller right-side image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:flex lg:justify-end lg:items-center"
          >
            <div className="relative w-4/5 max-w-md aspect-square mx-auto lg:mx-0">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/25 via-primary/5 to-transparent p-1.5 shadow-xl">
                <div className="w-full h-full rounded-2xl bg-background/70 backdrop-blur-sm overflow-hidden border border-primary/20 relative">
                  <Image
                    src={heroImage}
                    alt="Mohammad Waliullah - Software Engineer"
                    fill
                    className="object-cover"
                    priority
                    placeholder="blur"
                  />
                </div>
              </div>

              {/* Small floating label */}
              <motion.div
                className="absolute -bottom-4 -right-4 px-5 py-2 rounded-full bg-gradient-to-r from-primary/90 to-primary/70 text-primary-foreground text-xs font-semibold shadow-lg"
                animate={{ y: [0, -5, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: "easeInOut",
                }}
              >
                Backend Focused
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
