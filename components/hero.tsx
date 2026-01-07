"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

import heroImage from "@/public/assets/images/codisim, software-engineer, backend-developer, node.js, typescript, react.js, golang, javascript, postgresql (5).jpg";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h h-screen flex items-center justify-center bg-background text-foreground relative font-mon over">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      {/* <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:linear-gradient(to_bottom,white_0%,transparent_100%)]"></div> */}
      <div className="pt-32 pb-20 md:pt-52 md:pb-32 hero-gradien">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative z-10"
            >
              {/* Mid-level software engineer with experience in full-stack development, cloud infrastructure, and system optimization. */}
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-4">
                <span className="block">Mohammad Waliullah</span>
                {/* <span className="text-primary block mt-2 h-12 md:h-20">
                  <TypeAnimation
                    sequence={[
                      "A Full Stack Developer",
                      2000,
                      "A Backend Developer",
                      2000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    cursor={true}
                    preRenderFirstString={true}
                    className="inline-block"
                  />
                </span> */}
              </h1>
              <p className="text-muted-foreground text-sm md:text-xl mb-8 max-w-xl">
                Mid-level software engineer with experience in full-stack
                development, cloud infrastructure, and system optimization.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <Button asChild size="lg" className="group">
                  <a href="#contact">
                    Contact Me
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="hover:bg-primary hover:text-primary-foreground"
                >
                  <a href="#projects">View Projects</a>
                </Button>
              </div>

              {/* <div className="flex gap-4 relative z-20">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="https://github.com/tswaliullah"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 inline-flex items-center justify-center rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                    aria-label="GitHub Profile"
                  >
                    <Github className="h-5 w-5" />
                  </Link>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="https://linkedin.com/in/engwaliullah"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 inline-flex items-center justify-center rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="h-5 w-5" />
                  </Link>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="mailto:waliullah9099@gmail.com"
                    className="p-3 inline-flex items-center justify-center rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                    aria-label="Email Me"
                  >
                    <Mail className="h-5 w-5" />
                  </Link>
                </motion.div>
              </div> */}

              <div className="flex gap-4 relative z-20 text-xs">
                
                  <div className="px-4 py-2 rounded-full bg-primary/10 border border-primary/5 hover:border-primary/10 duration-200">  
                    <span>Typescript</span>
                  </div>

                  <div className="px-4 py-2 rounded-full bg-primary/10 border border-primary/5 hover:border-primary/10 duration-200">  
                    <span>Node.js</span>
                  </div>

                  <div className="px-4 py-2 rounded-full bg-primary/10 border border-primary/5 hover:border-primary/10 duration-200">  
                    <span>PostgreSQL</span>
                  </div>

                  <div className="px-4 py-2 rounded-full bg-primary/10 border border-primary/5 hover:border-primary/10 duration-200">  
                    <span>Docker</span>
                  </div>
                

               
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="aspect-square rounded-full bg-gradient-to-br from-primary/20 to-primary/5 p-1">
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
                  <Image
                    src={heroImage}
                    alt="Developer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 p-5">
                <div className="bg-secondary/80 text-secondary-foreground px-7 py-2.5 rounded-full text-sm font-medium border border-transparent hover:animate-border-animation">
                  Backend Developer
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
