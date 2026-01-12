import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // --- Variantes de Animación ---
  
  // Para el texto que aparece letra por letra
  const letterVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  const titleContainerVariants = {
    visible: {
      transition: { staggerChildren: 0.1 } // Retraso entre letras
    }
  };

  // Para los iconos sociales (Efecto rebote)
  const socialVariants = {
    hover: { 
      scale: 1.2, 
      rotate: 10, 
      transition: { type: "spring", stiffness: 400, damping: 10 } 
    }
  };

  // Para los tags de habilidades (Efecto pop)
  const skillVariants = {
    hover: { 
      scale: 1.1, 
      backgroundColor: "rgba(59, 130, 246, 0.2)",
      borderColor: "rgba(59, 130, 246, 0.5)",
      transition: { duration: 0.2 } 
    }
  };

  return (
    <footer className="bg-slate-900 border-t border-white/10 pt-16 pb-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Grid Principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Columna 1: Marca y Descripción */}
          <div className="space-y-4">
            {/* Título animado letra por letra */}
            <motion.h3 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={titleContainerVariants}
              className="text-2xl font-bold flex"
            >
              {"Ayrton.Dev".split("").map((char, index) => (
                <motion.span 
                  key={index} 
                  variants={letterVariants}
                  className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300"
                >
                  {char}
                </motion.span>
              ))}
            </motion.h3>

            <p className="text-gray-400 text-sm leading-relaxed">
              Transformando ideas complejas en experiencias digitales excepcionales. Especializado en desarrollo móvil y web con tecnologías modernas.
            </p>
            
            {/* Redes Sociales con Animación Elástica */}
            <div className="flex gap-4 pt-2">
              <motion.a 
                href="https://github.com/AyrtonCruces2004?tab=repositories" 
                target="_blank" 
                rel="noreferrer" 
                variants={socialVariants}
                whileHover="hover"
                className="text-gray-400 hover:text-white text-xl"
              >
                <FaGithub />
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/in/jose-ayrton-calderon-cruces-90779a324/" 
                target="_blank" 
                rel="noreferrer" 
                variants={socialVariants}
                whileHover="hover"
                className="text-gray-400 hover:text-blue-400 text-xl"
              >
                <FaLinkedin />
              </motion.a>
              <motion.a 
                href="https://wa.me/+51940910751" 
                target="_blank" 
                rel="noreferrer" 
                variants={socialVariants}
                whileHover="hover"
                className="text-gray-400 hover:text-green-400 text-xl"
              >
                <FaWhatsapp />
              </motion.a>
            </div>
          </div>

          {/* Columna 2: Enlaces Rápidos */}
          <div>
            <h4 className="text-white font-semibold mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              {['Inicio', 'Sobre Mí', 'Skills', 'Proyectos'].map((item) => (
                <li key={item}>
                  <motion.a 
                    href={`#${item.toLowerCase().replace(' ', '')}`}
                    className="text-gray-400 hover:text-blue-400 text-sm flex items-center gap-2 transition-colors"
                    whileHover={{ x: 5 }} // Mueve el texto a la derecha suavemente
                  >
                    <span className="text-blue-500">›</span> 
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Habilidades (Píldoras animadas) */}
          <div>
            <h4 className="text-white font-semibold mb-6">Habilidades</h4>
            <div className="flex flex-wrap gap-2">
              {['Kotlin', 'React', '.NET', 'SQL Server', 'Tailwind', 'Git', 'Framer Motion', 'Jetpack Compose'].map((skill) => (
                <motion.span 
                  key={skill} 
                  variants={skillVariants}
                  whileHover="hover"
                  className="px-3 py-1 bg-slate-800 border border-white/5 text-gray-300 text-xs rounded-full cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Columna 4: Contacto */}
          <div>
            <h4 className="text-white font-semibold mb-6">Contacto</h4>
            <ul className="space-y-4">
              <motion.li 
                whileHover={{ x: 5 }}
                className="flex items-start gap-3 text-gray-400 text-sm group cursor-pointer"
              >
                <FaEnvelope className="mt-1 text-blue-500 group-hover:text-blue-300 transition-colors" />
                <span className="group-hover:text-gray-300 transition-colors">josesaaca@gmail.com</span>
              </motion.li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <FaMapMarkerAlt className="mt-1 text-blue-500" />
                <span>Lima, Perú</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Barra Inferior */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs text-center md:text-left">
            © {currentYear} Jose Ayrton Calderon. Todos los derechos reservados.
          </p>
          <p className="text-gray-600 text-xs flex items-center gap-1">
            Diseñado con <motion.span 
              animate={{ scale: [1, 1.2, 1] }} 
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="text-red-500 inline-block"
            >❤</motion.span> en React & Tailwind
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;