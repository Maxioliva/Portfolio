import Image from "next/image";
import { Inter } from "next/font/google";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}
