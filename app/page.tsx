import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Identitys from "@/components/Identitys";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";


export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
  

      <Intro />
      <SectionDivider />
      <About />
      <Identitys/>
  
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
}
