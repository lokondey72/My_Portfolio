import About from "@/pages/about";
import Banner from "@/pages/banner";
import ExperienceEducation from "@/pages/ExperienceEducation";
import Projects from "@/pages/projects";
import Skills from "@/pages/skills";
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans bg-gray-50">
      <main className="pb -12">
        <Banner />
        <About />
        <Skills />
        <ExperienceEducation />
        <Projects />
      </main>
    </div>
  );
}
