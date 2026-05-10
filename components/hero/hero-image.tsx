"use client";

import { motion } from "framer-motion";
import heroImage from "@/public/assets/images/codisim, software-engineer, backend-developer, node.js, typescript, react.js, golang, javascript, postgresql (5).jpg";
import Image from "next/image";


export default function HeroImage() {
  return (
    <div className="flex flex-col gap-8 lg:items-end">
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative w-full flex justify-center lg:justify-end lg:items-center"
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
            {/* Backend Focused */}
            Next.js Expert
          </motion.div>
        </div>
      </motion.div>

      {/* Tech Stack Pills - Now on the Right */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="flex flex-wrap justify-center lg:justify-end gap-2 sm:gap-3 px-4 lg:px-0"
      >
        {[
          "TypeScript",
          "Node.js",
          "Nest.Js",
          "React",
          "Next.js",
          "Docker",
        ].map((tech) => (
          <motion.div
            key={tech}
            whileHover={{ 
              scale: 1.1,
              backgroundColor: "hsl(var(--primary) / 0.2)",
              borderColor: "hsl(var(--primary) / 0.4)"
            }}
            className="px-4 py-1.5 rounded-xl bg-primary/10 border border-primary/15 text-primary/90 font-bold text-xs tracking-tight backdrop-blur-sm transition-all duration-300"
          >
            {tech}
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}