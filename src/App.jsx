// ... otros imports ...
import Projects from "./components/Projects";
import Certifications from "./components/Certifications"; // <--- IMPORTAR
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-slate-900 min-h-screen text-white font-sans selection:bg-blue-500 selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      
      {/* Sección Nueva */}
      <Certifications />
      
      <Footer />
    </div>
  )
}