import { motion } from "framer-motion";

const About = () => {
  // Variantes para las animaciones (aparecer suavemente al hacer scroll)
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section 
      id="about" 
      className="relative w-full py-20 bg-slate-900 flex items-center justify-center overflow-hidden"
    >
      
      {/* Luz de fondo ambiental (Nebulosa sutil) */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Encabezado de la Sección */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
          className="text-center mb-12"
        >
          <span className="text-blue-400 font-semibold tracking-widest text-sm uppercase">Mi Historia</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 drop-shadow-lg">
            Sobre <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Mí</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mt-4 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
        </motion.div>

        {/* Tarjeta Principal (Glassmorphism) */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
          className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12 shadow-[0_0_40px_rgba(0,0,0,0.3)]"
        >
          
          {/* Texto Principal */}
          <div className="space-y-6 text-gray-300 text-lg leading-relaxed font-light text-center md:text-justify">
            <p>
              Soy un <strong className="text-white font-medium">Ingeniero de Sistemas recién egresado</strong> con una curiosidad insaciable por la tecnología. Aunque mi carrera profesional apenas comienza, mi pasión por el código me ha llevado a construir soluciones reales desde cero.
            </p>
            <p>
              Durante mi etapa como practicante en <span className="text-blue-300 font-medium">Baqui</span>, no solo aprendí a programar; aprendí a comprometerme. Desarrollé aplicaciones móviles con <strong className="text-cyan-300">Kotlin</strong> y plataformas web con <strong className="text-cyan-300">React</strong>, integrando bases de datos complejas y esforzándome día a día para entregar valor real.
            </p>
            <p>
              Me caracterizo por ser una persona que no se rinde ante un error de código. Busco constantemente aprender nuevas tecnologías y metodologías ágiles para convertirme en el desarrollador que todo equipo desea tener.
            </p>
          </div>

          {/* Caja de Filosofía (Lema) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-10 bg-gradient-to-br from-blue-900/30 to-slate-900/50 border border-blue-500/20 rounded-xl p-6 text-center relative overflow-hidden group hover:border-blue-500/40 transition-colors"
          >
            {/* Brillo decorativo al pasar el mouse */}
            <div className="absolute inset-0 bg-blue-500/5 group-hover:bg-blue-500/10 transition-colors duration-500" />
            
            <h3 className="text-blue-400 font-semibold mb-3 relative z-10">Mi Filosofía</h3>
            <p className="text-white/90 italic text-lg md:text-xl font-serif relative z-10">
              "Ten fe y sigue intentándolo. La falta de experiencia se suple con perseverancia; aprende de cada caída, porque al levantarte serás imparable."
            </p>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};

export default About;