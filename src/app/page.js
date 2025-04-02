import About from "@/pages/about"; 
import Projects from "@/pages/projects";
import Skills from "@/pages/skills";
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans bg-gray-50">
      <main className="py-12">
        <About />
        <Skills />
        <Projects />
      </main>
    </div>
  );
}
