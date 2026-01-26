"use client";

import { cn } from "@/lib/utils";
import { 
  SiJavascript, 
  SiTypescript, 
  SiReact, 
  SiNextdotjs, 
  SiTailwindcss,
  SiNodedotjs, 
  SiExpress, 
  SiGo,
  SiPostgresql, 
  SiPrisma, 
  SiMongodb, 
  SiMongoose,
  SiDocker, 
  SiGit, 
  SiGithub, 
  SiPostman,
  SiFramer,
  SiShadcnui
} from "react-icons/si";
import { motion } from 'framer-motion'
import { VscCode } from "react-icons/vsc";

const skillsRow1 = [
  { name: "JavaScript", icon: SiJavascript, color: "text-[#F7DF1E]" },
  { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]" },
  { name: "React.js", icon: SiReact, color: "text-[#61DAFB]" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-foreground" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#06B6D4]" },
  { name: "Shadcn UI", icon: SiShadcnui, color: "text-[#18181B]" },
];

const skillsRow2 = [
  { name: "Node.js", icon: SiNodedotjs, color: "text-[#339933]" },
  { name: "Express.js", icon: SiExpress, color: "text-foreground" },
  { name: "Golang", icon: SiGo, color: "text-[#00ADD8]" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-[#4169E1]" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-[#339933]" },
  { name: "Prisma", icon: SiPrisma, color: "text-[#2D3748]" },
  { name: "Express.js", icon: SiExpress, color: "text-foreground" },
  { name: "MongoDB", icon: SiMongodb, color: "text-[#47A248]" },
  { name: "Mongoose", icon: SiMongoose, color: "text-[#880000]" },
];

const skillsRow3 = [
  { name: "Docker", icon: SiDocker, color: "text-[#2496ED]" },
  { name: "Git", icon: SiGit, color: "text-[#F05032]" },
  { name: "GitHub", icon: SiGithub, color: "text-foreground" },
  { name: "VS Code", icon: VscCode, color: "text-[#007ACC]" },
  { name: "Postman", icon: SiPostman, color: "text-[#FF6C37]" },
];

const SkillCard = ({
  name,
  icon: Icon,
  color,
}: {
  name: string;
  icon: any;
  color: string;
}) => {
  return (
    <div className="relative flex h-16 w-44 items-center gap-4 rounded-xl border border-border bg-background/50 p-4 hover:bg-accent/50 transition-colors">
      <div className={cn("text-2xl", color)}>
        <Icon />
      </div>
      <span className="font-medium text-sm">{name}</span>
    </div>
  );
};

const Marquee = ({
  className,
  reverse,
  pauseOnHover = false,
  children,
  repeat = 4,
  ...props
}: {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children?: React.ReactNode;
  repeat?: number;
  [key: string]: any;
}) => {
  return (
    <div
      {...props}
      className={cn(
        "group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]",
        className
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn("flex shrink-0 justify-around [gap:var(--gap)]", {
              "animate-marquee": !reverse,
              "animate-marquee-reverse": reverse,
              "group-hover:[animation-play-state:paused]": pauseOnHover,
            })}
          >
            {children}
          </div>
        ))}
    </div>
  );
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-violet-500/20 rounded-full blur-[120px]" />
      </div>

      <div className="container px-4 mx-auto relative z-10">
         <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Skills & Technologies</h2>
        </motion.div>

        <div className="relative flex flex-col gap-8">

          {/* Row 2: Backend - Right to Left */}
          <div className="relative flex flex-col gap-4">
            {/* <h3 className="text-sm font-semibold text-muted-foreground ml-4 text-right mr-4">Backend & Database</h3> */}
            <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background/0 md:shadow-xl">
              <Marquee reverse pauseOnHover className="[--duration:35s]">
                {skillsRow2.map((skill, i) => (
                  <SkillCard key={i} {...skill} />
                ))}
              </Marquee>
              <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background dark:from-background"></div>
              <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background dark:from-background"></div>
            </div>
          </div>

           {/* Row 1: Frontend - Left to Right */}
          <div className="relative flex flex-col gap-4">
            {/* <h3 className="text-sm font-semibold text-muted-foreground ml-4">Frontend Development</h3> */}
            <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background/0 md:shadow-xl">
              <Marquee pauseOnHover className="[--duration:30s]">
                {skillsRow1.map((skill, i) => (
                  <SkillCard key={i} {...skill} />
                ))}
              </Marquee>
              <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background dark:from-background"></div>
              <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background dark:from-background"></div>
            </div>
          </div>

          {/* Row 3: Tools - Left to Right */}
          <div className="relative flex flex-col gap-4">
            {/* <h3 className="text-sm font-semibold text-muted-foreground ml-4">Tools & DevOps</h3> */}
            <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background/0 md:shadow-xl">
              <Marquee pauseOnHover className="[--duration:40s]">
                {skillsRow3.map((skill, i) => (
                  <SkillCard key={i} {...skill} />
                ))}
              </Marquee>
              <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background dark:from-background"></div>
              <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background dark:from-background"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
