import { motion } from "framer-motion";
import { FaGithub, FaFileDownload } from "react-icons/fa";

const Hero = () => {
  // Aumentamos a 300 estrellas para un efecto de "cielo profundo"
  const stars = [...Array(300)].map((_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: Math.random() * 2.5 + 0.5, // Estrellas más finas y elegantes
    duration: Math.random() * 2 + 1, // Parpadeo más vivo
    delay: Math.random() * 5,
  }));

  return (
    <section 
      id="home" 
      className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1B2735] via-[#090A0F] to-[#000000]"
    >
      
      {/* --- FONDO DE ESTRELLAS (Más denso) --- */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute rounded-full bg-white"
            style={{
              top: star.top,
              left: star.left,
              width: `${star.size}px`,
              height: `${star.size}px`,
              boxShadow: `0 0 ${star.size * 3}px rgba(255, 255, 255, 0.9)`, // Más brillo
            }}
            animate={{
              opacity: [10.1, 1, 0.1], // Parpadeo completo (aparece y desaparece)
              scale: [1, 1.5, 1], 
            }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              delay: star.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* --- NEBULOSA DE FONDO (Más sutil y elegante) --- */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />

      {/* --- CONTENIDO --- */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        
        {/* Etiqueta Superior */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-block mb-6"
        >
          <span className="py-2 px-6 rounded-full bg-blue-500/10 border border-blue-400/20 backdrop-blur-md text-blue-200 font-medium tracking-widest text-xs uppercase shadow-[0_0_20px_rgba(59,130,246,0.3)]">
            Egresado de Ingeniería de Sistemas
          </span>
        </motion.div>

        {/* Nombre con Gradiente */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight drop-shadow-2xl"
        >
          Jose Ayrton <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-300% animate-gradient">
            Calderon Cruces
          </span>
        </motion.h1>

        {/* Descripción */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-400 leading-relaxed mb-10 max-w-2xl mx-auto font-light"
        >
          Ingeniero de Sistemas recién egresado con enfoque en el desarrollo de software. Cuento con experiencia práctica.
          <span className="text-cyan-300 font-medium"> Creando aplicacion móvil </span> y 
          <span className="text-blue-300 font-medium"> Plataforma web desde cero</span>. 
          Transformo ideas complejas en código limpio y funcional.
        </motion.p>

        {/* --- BOTONES CIRCULARES (Rounded-Full) --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          {/* Botón GitHub - Circular y Brillante */}
          <motion.a
            href="https://github.com/AyrtonCruces2004" // Tu usuario real según el CV
            target="_blank"
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(59, 130, 246, 0.6)" }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 bg-blue-600 rounded-full text-white font-bold text-lg overflow-hidden flex items-center gap-3 shadow-[0_0_15px_rgba(59,130,246,0.4)] transition-all"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
            <FaGithub size={24} />
            <span>Ver GitHub</span>
          </motion.a>

          {/* Botón CV - Circular Glass */}
          <motion.a
            href="./CV/CALDERON_AYRTON_CV.pdf" 
            download
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,0.6)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white/5 border border-white/10 rounded-full text-white font-semibold text-lg backdrop-blur-sm flex items-center gap-3 transition-all hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]"
          >
            <FaFileDownload size={22} />
            <span>Descargar CV</span>
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;