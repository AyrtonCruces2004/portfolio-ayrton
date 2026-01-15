import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaGithub, FaTimes, FaDatabase } from "react-icons/fa";
import { SiKotlin, SiReact, SiDotnet, SiTailwindcss, SiHtml5, SiJavascript, SiBootstrap, SiJetpackcompose, SiLaravel, SiPhp } from "react-icons/si";

const Projects = () => {
  const [selectedId, setSelectedId] = useState(null);

  const projects = [
    {
      id: 1,
      title: "BAQUI APP MÓVIL",
      category: "ANDROID NATIVE & .NET API",
      image: "/img/baquiaplica.jpeg",
      tech: [
        { name: "Kotlin", icon: <SiKotlin className="text-purple-500" /> },
        { name: "Compose", icon: <SiJetpackcompose className="text-green-400" /> },
        { name: ".NET Core", icon: <SiDotnet className="text-purple-300" /> },
        { name: "SQL Server", icon: <FaDatabase className="text-red-500" /> }
      ],
      description: "Asistente de bienestar nativo desarrollado en Kotlin utilizando Jetpack Compose (Material 3). La app gestiona perfiles de salud, ofrece recomendaciones personalizadas y utiliza AlarmManager con BroadcastReceivers para programar notificaciones locales precisas para el consumo de productos.",
      learnings: "Implementé una arquitectura MVVM robusta con ViewModel compartido para la gestión de estado centralizado. Desarrollé el Backend completo con ASP.NET Core Minimal APIs y ADO.NET, integrando Retrofit y Corrutinas para una comunicación asíncrona fluida.",
      github: "https://github.com/asoriabiolac-creator/BaquiApp.git",
    },
    {
      id: 2,
      title: "BAQUI WEB",
      category: "SPA & CATÁLOGO DIGITAL",
      image: "/img/Baquiwebcontac.jpeg", 
      tech: [
        { name: "React", icon: <SiReact className="text-cyan-400" /> },
        { name: "Bootstrap", icon: <SiBootstrap className="text-purple-600" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> }
        { name: "SQL", icon: <FaDatabase className="text-gray-400" /> }
      ],
      description: "Aplicación de Página Única (SPA) desarrollada con React.js para el sector alimentario. Cuenta con navegación dinámica (React Router), animaciones interactivas (AOS) y un módulo de 'Libro de Reclamaciones' que valida y envía formularios a una API RESTful.",
      learnings: "Perfeccioné la arquitectura basada en componentes reutilizables y la gestión de rutas sin recarga. Aprendí a conectar el Frontend con el Backend mediante peticiones HTTP asíncronas para el registro de datos en SQL Server.",
      github: "https://github.com/asoriabiolac-creator/baqui-web.git",
    },
    {
      id: 3,
      title: "DIRECTORIO EMPRESARIAL",
      category: "LARAVEL FULL STACK",
      image: "/img/directorio.jpeg",
      tech: [
        { name: "Laravel", icon: <SiLaravel className="text-red-600" /> },
        { name: "React", icon: <SiReact className="text-cyan-400" /> },
        { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-300" /> },
        { name: "SQL", icon: <FaDatabase className="text-gray-400" /> }
      ],
      description: "Plataforma integral para la búsqueda y categorización de empresas en diversos sectores. Combina la robustez de Laravel (PHP/Blade) en el backend con la interactividad de componentes React en el frontend y Swiper.js para la presentación visual.",
      learnings: "Logré una integración híbrida eficiente incrustando componentes React dentro de vistas Blade. Implementé búsquedas avanzadas con Eloquent ORM/TSQL y diseñé una interfaz moderna y responsiva utilizando Tailwind CSS.",
      github: "https://github.com/tu-usuario/Proyecto-Laravel-para-directorio-de-empre",
    },
    {
      id: 4,
      // --- ACTUALIZACIÓN FLORERÍA SAC ---
      title: "CATÁLOGO FLORERÍA",
      category: "LARAVEL & TAILWIND",
      image: "/img/floreriasac.jpeg",
      tech: [
        { name: "Laravel", icon: <SiLaravel className="text-red-600" /> },
        { name: "PHP", icon: <SiPhp className="text-blue-500" /> },
        { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-300" /> },
        { name: "SQL", icon: <FaDatabase className="text-gray-400" /> }
      ],
      // Descripción ajustada: No es un e-commerce transaccional, es un catálogo con carrito de solicitud
      description: "Catálogo digital interactivo para la exhibición de arreglos florales. Permite a los usuarios navegar por categorías, filtrar productos, gestionar un carrito de solicitudes y contactar a la empresa mediante formularios integrados con mapas dinámicos.",
      learnings: "Consolidé mis habilidades en Laravel (MVC) diseñando bases de datos SQL para inventarios. Integré librerías de UI modernas (Swiper.js, Google Maps) dentro de vistas Blade, creando una experiencia visual fluida sin la complejidad de una pasarela de pagos.",
      github: "https://github.com/tu-usuario/floreria-sac",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1, y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="projects" className="relative py-24 bg-slate-900 overflow-hidden min-h-screen">
      
      {/* --- FONDO MEJORADO --- */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>

      {/* Título de la Sección */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center mb-16 px-4"
      >
        <span className="text-blue-400 font-semibold tracking-widest text-sm uppercase">Mi Trabajo</span>
        <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">
          Proyectos <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Destacados</span>
        </h2>
      </motion.div>

      {/* GRID DE PROYECTOS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              variants={cardVariants}
              layoutId={`card-container-${project.id}`}
              key={project.id}
              onClick={() => setSelectedId(project.id)}
              className="group relative cursor-pointer rounded-2xl overflow-hidden bg-slate-800/50 backdrop-blur-sm border border-white/10 hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all"
              whileHover={{ y: -8 }} 
            >
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-colors z-10" />
                <motion.img
                  layoutId={`card-image-${project.id}`}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6 relative z-20">
                <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2 block">
                  {project.category}
                </span>
                <motion.h3 
                  layoutId={`card-title-${project.id}`}
                  className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors"
                >
                  {project.title}
                </motion.h3>
                <div className="flex gap-3 mt-4 text-gray-400">
                   {project.tech.map((t, i) => (
                     <div key={i} title={t.name} className="text-xl hover:text-white transition-colors">
                       {t.icon}
                     </div>
                   ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* MODAL DETALLADO */}
      <AnimatePresence>
        {selectedId && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedId(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            >
              {projects.map((project) => (
                project.id === selectedId && (
                  <motion.div
                    layoutId={`card-container-${project.id}`}
                    key={project.id}
                    transition={{ duration: 0.3, type: "spring", stiffness: 200, damping: 25 }} 
                    className="w-full max-w-2xl bg-slate-900 border border-white/10 rounded-3xl overflow-hidden shadow-2xl relative z-50 max-h-[90vh] overflow-y-auto custom-scrollbar"
                  >
                    
                    <button
                      onClick={(e) => { e.stopPropagation(); setSelectedId(null); }}
                      className="absolute top-4 right-4 z-50 p-2 bg-black/50 hover:bg-red-500/80 rounded-full text-white transition-colors backdrop-blur-md"
                    >
                      <FaTimes />
                    </button>

                    <div className="h-64 sm:h-80 relative">
                      <motion.img
                        layoutId={`card-image-${project.id}`}
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                    </div>

                    <motion.div 
                      className="p-8 -mt-20 relative z-10"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.4 }} 
                    >
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((t, i) => (
                          <span key={i} className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 text-blue-200 text-xs font-semibold rounded-full flex items-center gap-2">
                            {t.icon} {t.name}
                          </span>
                        ))}
                      </div>

                      <motion.h2 
                        layoutId={`card-title-${project.id}`}
                        className="text-3xl md:text-4xl font-bold text-white mb-6"
                      >
                        {project.title}
                      </motion.h2>

                      <div className="space-y-6 text-gray-300">
                        <div>
                          <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                            <span className="w-1 h-6 bg-blue-500 rounded-full"></span>
                            Descripción
                          </h4>
                          <p className="leading-relaxed font-light text-sm md:text-base">
                            {project.description}
                          </p>
                        </div>

                        <div>
                           <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                            <span className="w-1 h-6 bg-green-500 rounded-full"></span>
                            Aprendizajes
                          </h4>
                          <p className="leading-relaxed font-light text-sm md:text-base">
                            {project.learnings}
                          </p>
                        </div>
                      </div>

                      <div className="mt-8 pt-6 border-t border-white/10">
                        <a 
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-blue-500/40 w-full sm:w-auto justify-center"
                        >
                          <FaGithub className="text-xl" />
                          Ver Código en GitHub
                        </a>
                      </div>

                    </motion.div>
                  </motion.div>
                )
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;