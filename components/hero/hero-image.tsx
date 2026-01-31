"use client";

import { motion } from "framer-motion";
import heroImage from "@/public/assets/images/codisim, software-engineer, backend-developer, node.js, typescript, react.js, golang, javascript, postgresql (5).jpg";
import Image from "next/image";


export default function HeroImage() {
  return (
    <>
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
    </>
  )
}