import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { FaBars, FaTimes, FaLinkedin, FaGithub } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  // Detectar scroll para hacer la barra más oscura al bajar
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const links = [
    { name: "Inicio", href: "#home" },
    { name: "Sobre mí", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Proyectos", href: "#projects" },
  ];

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 border-b border-transparent ${
        isScrolled 
          ? "bg-slate-900/80 backdrop-blur-xl border-white/10 shadow-lg shadow-blue-900/10" 
          : "bg-transparent backdrop-blur-none"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo con Gradiente (Coincide con el Hero) */}
          <div className="flex-shrink-0 cursor-pointer group">
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:to-purple-500 transition-all duration-300">
              Ayrton<span className="text-white">.Dev</span>
            </span>
          </div>

          {/* Menú Escritorio */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors group"
                >
                  {link.name}
                  {/* Línea animada debajo del link */}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
          </div>

          {/* Iconos Sociales */}
          <div className="hidden md:flex space-x-5">
             <a href="https://www.linkedin.com/in/jose-ayrton-calderon-cruces-90779a324/" className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"><FaLinkedin size={22} /></a>
             <a href="https://github.com/AyrtonCruces2004?tab=repositories" className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"><FaGithub size={22} /></a>
          </div>

          {/* Botón Móvil */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2 transition-colors"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú Móvil (Glassmorphism oscuro) */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden bg-slate-900/95 backdrop-blur-xl border-b border-white/10"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-white hover:bg-white/10 block px-3 py-3 rounded-md text-base font-medium transition-all"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;