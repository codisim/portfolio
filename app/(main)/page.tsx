import Experience from "@/components/experience";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Services from "@/components/services";
import Contact from "@/components/contact";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <>
      <Hero />
      {/* <About /> */}
      <Projects />
      <Experience />
      <Skills />
      <Services />
      <Contact />
    </>
  );
}
