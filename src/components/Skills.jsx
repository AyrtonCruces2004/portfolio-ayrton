import { motion } from "framer-motion"; // <--- Importamos Motion para las animaciones
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";

// Estilos de Swiper
import "swiper/css";
import "swiper/css/effect-coverflow";

// Iconos
import { FaReact, FaJs, FaGitAlt, FaPython, FaDatabase, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiKotlin, SiDotnet, SiJetpackcompose, SiBootstrap } from "react-icons/si";

const Skills = () => {
  // 1. Lista de Habilidades
  const originalSkills = [
    { name: "Kotlin", icon: <SiKotlin className="text-purple-500" />, desc: "Mobile Nativo" },
    { name: "React", icon: <FaReact className="text-cyan-400" />, desc: "Frontend SPA" },
    { name: "SQL Server", icon: <FaDatabase className="text-red-500" />, desc: "Gestión de Datos" },
    { name: ".NET", icon: <SiDotnet className="text-purple-300" />, desc: "Backend API" },
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" />, desc: "Estructura Web" },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" />, desc: "Diseño Visual" },
    { name: "Bootstrap", icon: <SiBootstrap className="text-violet-600" />, desc: "UI Framework" },
    { name: "Jetpack Compose", icon: <SiJetpackcompose className="text-green-400" />, desc: "UI Declarativa" },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" />, desc: "Lógica Web" },
    { name: "Git", icon: <FaGitAlt className="text-orange-500" />, desc: "Control Versiones" },
    { name: "Python", icon: <FaPython className="text-blue-400" />, desc: "Scripting" },
  ];

  // 2. Truco del Infinito
  const allSkills = [...originalSkills, ...originalSkills, ...originalSkills];

  // --- CONFIGURACIÓN DE ANIMACIONES ---
  
  // Contenedor que controla el orden de aparición de las letras
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // Retraso entre cada letra (0.05s)
        delayChildren: 0.2,
      },
    },
  };

  // Animación individual de cada letra (sube y aparece)
  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 100 }
    },
  };

  // Función auxiliar para separar texto en letras animadas
  const AnimatedText = ({ text, className }) => (
    <motion.span variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className={className}>
      {text.split("").map((char, index) => (
        <motion.span key={index} variants={letterVariants} className="inline-block">
          {char === " " ? "\u00A0" : char} {/* Preserva los espacios en blanco */}
        </motion.span>
      ))}
    </motion.span>
  );

  return (
    <section id="skills" className="relative py-20 bg-slate-900 overflow-hidden min-h-screen flex flex-col justify-center">
      
      {/* Fondo decorativo sutil */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,0),rgba(17,24,39,1))]" />

      {/* Contenedor del Título */}
      <div className="relative z-10 text-center mb-16 px-4">
        
        {/* Subtítulo animado */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-blue-400 font-semibold tracking-widest text-sm uppercase">
            Mis Herramientas
          </span>
        </motion.div>

        {/* Título Principal Animado Letra por Letra */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 flex justify-center gap-3 flex-wrap">
          <AnimatedText text="Habilidades" />
          {/* El gradiente lo animamos como bloque para no romper el color */}
          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"
          >
            Técnicas
          </motion.span>
        </h2>
      </div>

      {/* Carrusel Infinito con Entrada Suave */}
      <motion.div
        initial={{ opacity: 0, y: 50 }} // Empieza invisible y abajo
        whileInView={{ opacity: 1, y: 0 }} // Sube suavemente
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
      >
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          loop={true}
          speed={1000}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: false,
          }}
          modules={[EffectCoverflow, Autoplay]}
          className="w-full py-10"
        >
          {allSkills.map((skill, index) => (
            <SwiperSlide key={index} className="!w-[280px] !h-[350px] mx-4"> 
              
              {/* Tarjeta */}
              <div className="group relative h-full w-full bg-[#0f172a] rounded-2xl border border-white/5 p-6 flex flex-col items-center justify-center transition-all duration-300 hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]">
                
                <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

                <div className="mb-6 p-5 bg-slate-900 rounded-xl border border-white/5 shadow-inner group-hover:scale-110 transition-transform duration-300">
                  <div className="text-5xl drop-shadow-lg">
                    {skill.icon}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 tracking-wide z-10">
                  {skill.name}
                </h3>
                <p className="text-sm text-gray-400 font-light z-10">
                  {skill.desc}
                </p>
                
                <div className="absolute bottom-4 w-1.5 h-1.5 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
};

export default Skills;