"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
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
  SiFramer
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "JavaScript", icon: SiJavascript, color: "text-[#F7DF1E]" },
      { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]" },
      { name: "React.js", icon: SiReact, color: "text-[#61DAFB]" },
      { name: "Next.js", icon: SiNextdotjs, color: "text-foreground" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#06B6D4]" },
      { name: "Framer Motion", icon: SiFramer, color: "text-[#0055FF]" },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "text-[#339933]" },
      { name: "Express.js", icon: SiExpress, color: "text-foreground" },
      { name: "Golang", icon: SiGo, color: "text-[#00ADD8]" },
    ],
  },
  {
    title: "Database & ORM",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-[#4169E1]" },
      { name: "Prisma", icon: SiPrisma, color: "text-[#2D3748]" },
      { name: "MongoDB", icon: SiMongodb, color: "text-[#47A248]" },
      { name: "Mongoose", icon: SiMongoose, color: "text-[#880000]" },
    ],
  },
  {
    title: "Tools & DevOps",
    skills: [
      { name: "Docker", icon: SiDocker, color: "text-[#2496ED]" },
      { name: "Git", icon: SiGit, color: "text-[#F05032]" },
      { name: "GitHub", icon: SiGithub, color: "text-foreground" },
      { name: "VS Code", icon: VscCode, color: "text-[#007ACC]" },
      { name: "Postman", icon: SiPostman, color: "text-[#FF6C37]" },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
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
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-violet-600">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            I've built a diverse set of skills across the full stack, focusing on modern technologies that enable fast, scalable, and beautiful web applications.
          </p>
        </motion.div>

        <div className="space-y-20">
          {skillCategories.map((category, i) => (
            <div key={i}>
              <motion.h3 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-2xl font-semibold mb-8 flex items-center gap-3"
              >
                <span className="w-8 h-[2px] bg-primary" />
                {category.title}
              </motion.h3>
              
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
              >
                {category.skills.map((skill, j) => (
                  <motion.div key={j} variants={itemVariants}>
                    <Card className="group relative p-6 flex flex-col items-center justify-center gap-4 border-2 border-transparent hover:border-primary/30 bg-background/50 backdrop-blur-sm transition-all duration-500 hover:shadow-[0_0_30px_-10px_rgba(0,0,0,0.1)] hover:shadow-primary/20 hover:-translate-y-2">
                      <div className={`text-4xl transition-all duration-500 group-hover:scale-110 ${skill.color}`}>
                        <skill.icon />
                      </div>
                      <p className="font-medium text-sm md:text-base group-hover:text-primary transition-colors">
                        {skill.name}
                      </p>
                      
                      {/* Decorative corner */}
                      <div className="absolute top-0 right-0 w-0 h-0 border-t-[10px] border-r-[10px] border-t-transparent border-r-transparent group-hover:border-t-primary/40 group-hover:border-r-primary/40 transition-all duration-500" />
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
