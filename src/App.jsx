import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer"; // <--- Importar Footer

export default function App() {
  return (
    <div className="bg-slate-900 min-h-screen text-white font-sans selection:bg-blue-500 selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      
      {/* Sección 5: Footer Elegante */}
      <Footer />
    </div>
  )
}