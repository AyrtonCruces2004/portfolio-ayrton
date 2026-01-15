// 1. IMPORTACIONES (¡Esto es lo que faltaba!)
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications"; // <--- Tu nueva sección
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-slate-900 min-h-screen text-white font-sans selection:bg-blue-500 selection:text-white">
      {/* 2. COMPONENTES (En orden) */}
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      
      {/* Sección de Certificaciones (Nueva) */}
      <Certifications />
      
      <Footer />
    </div>
  )
}