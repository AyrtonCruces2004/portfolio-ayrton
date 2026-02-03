import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaTimes, FaAward, FaExternalLinkAlt } from "react-icons/fa";

const Certifications = () => {
  const [selectedId, setSelectedId] = useState(null);

  const certifications = [
    // 1. TU NUEVA CONSTANCIA (La convertiste a imagen)
    {
      id: 0,
      title: "Constancia de Egresado (Ing. Sistemas)",
      issuer: "Universidad Tecnológica del Perú",
      date: "2026",
      image: "/certf/constancia_egresado.jpg", // <--- Asegúrate que este sea el nombre de tu FOTO
      link: "#" 
    },
    // ... TUS OTROS CERTIFICADOS ...
    {
      id: 1,
      title: "Curso Excel Intermedio",
      issuer: "Universidad Nacional de Ingeniería",
      date: "2023",
      image: "/certf/excel_Intermedio.jpg",
      link: "#"
    },  
    {
      id: 2,
      title: "Constancia de trabajo (Practicante sistemas)",
      issuer: "BIOLAC S.A.C.",
      date: "Agosto 2025- Enero 2026",
      image: "/certf/certificado_trabajo.png",
      link: "#" 
    },
    {
      id: 3,
      title: "Especialista de soporte Técnico de computadoras",
      issuer: "Universidad Tecnológica del Perú",
      date: "2023",
      image: "/certf/especialista_soporte.jpg",
      link: "#"
    },
    {
      id: 4,
      title: "Certificado Ingles Básico A2",
      issuer: "Universidad Tecnológica del Perú",
      date: "2023",
      image: "/certf/certificado_ingles.jpg",
      link: "#"
    },
    {
      id: 5,
      title: "SQL - Base de Datos 1",
      issuer: "Universidad Nacional de Ingeniería",
      date: "2025",
      image: "/certf/sql_basededatos1.png",
      link: "#"
    },
    {
      id: 6,
      title: "Programación en PYTHON Básico",
      issuer: "Universidad Nacional de Ingeniería",
      date: "2025",
      image: "/certf/programacionphyton1.png",
      link: "#"
    },
    {
      id: 7,
      title: "Ciberseguridad: Ethical Hacking (C|EH)",
      issuer: "Universidad Nacional de Ingeniería",
      date: "2025",
      image: "/certf/ciberseguridad.png",
      link: "#"
    },
    {
      id: 8,
      title: "Fundamentos de Gestión de Proyectos bajo el enfoque Scrum",
      issuer: "Universidad Nacional de Ingeniería",
      date: "2025",
      image: "/certf/fundamentos_gestionscrum.jpg",
      link: "#"
    },
    {
      id: 9,
      title: "Asistente STEM Algorítmica",
      issuer: "Universidad Tecnológica del Perú",
      date: "2024",
      image: "/certf/asistentealgo.jpg",
      link: "#"
    },
    {
      id: 10,
      title: "Certificado de Cisco® CCNA v7: Switching, Routing, and Wireless",
      issuer: "Universidad Tecnológica del Perú",
      date: "2023",
      image: "/certf/ciscoredesccnav7.jpg",
      link: "#"
    },
    {
      id: 11,
      title: "ScrumFundamentalsCertified",
      issuer: "Universidad Tecnológica del Perú",
      date: "2025",
      image: "/certf/FUNDAMENTOSSCRUM.jpg",
      link: "#"
    },
    {
      id: 12,
      title: "Desarrollo Back-End Basico",
      issuer: "Ministerio de Trabajo y promoción del Perú",
      date: "2025",
      image: "/certf/certi_backend.jpg",
      link: "#"
    },
    {
      id: 13,
      title: "Operador de camaras",
      issuer: "Municipalidad de san juan de lurigancho",
      date: "2025",
      image: "/certf/luriganchoxd.jpg",
      link: "#"
    },
  ];

  return (
    <section id="certificaciones" className="relative py-20 bg-slate-900 overflow-hidden">
      
      {/* Fondo Decorativo (Luz sutil cyan) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Título */}
      <div className="relative z-10 text-center mb-16 px-4">
        <span className="text-blue-400 font-semibold tracking-widest text-sm uppercase">Mis Logros</span>
        {/* TITULO ACTUALIZADO: Formación y Certificaciones */}
        <h2 className="text-4xl font-bold text-white mt-2">
          Formación y <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Certificaciones</span>
        </h2>
      </div>

      {/* GRID DE CERTIFICADOS */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert) => (
            <motion.div
              layoutId={`cert-card-${cert.id}`}
              key={cert.id}
              onClick={() => setSelectedId(cert.id)}
              className="group relative cursor-pointer bg-slate-800 rounded-xl overflow-hidden border border-white/10 hover:border-cyan-500/50 transition-colors shadow-lg"
              whileHover={{ y: -5 }}
            >
              {/* Imagen (Thumbnail) */}
              <div className="aspect-video overflow-hidden bg-slate-900 relative">
                <motion.img
                  layoutId={`cert-image-${cert.id}`}
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
                {/* Overlay al pasar mouse */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors flex items-center justify-center">
                   <FaAward className="text-4xl text-white/30 group-hover:opacity-0 transition-opacity transform scale-75" />
                </div>
              </div>

              {/* Info Corta */}
              <div className="p-4">
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors truncate">
                  {cert.title}
                </h3>
                <div className="flex justify-between items-center mt-2 text-sm text-gray-400">
                  <span>{cert.issuer}</span>
                  <span className="bg-slate-700/50 px-2 py-0.5 rounded text-xs text-gray-300">{cert.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* MODAL (ZOOM) */}
      <AnimatePresence>
        {selectedId !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* Fondo Oscuro (Backdrop) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />

            {/* Tarjeta Expandida */}
            {certifications.map((cert) => (
              cert.id === selectedId && (
                <motion.div
                  layoutId={`cert-card-${cert.id}`}
                  key={cert.id}
                  className="relative bg-slate-900 border border-white/10 rounded-2xl overflow-hidden shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col"
                >
                  {/* Botón Cerrar */}
                  <button
                    onClick={() => setSelectedId(null)}
                    className="absolute top-4 right-4 z-50 p-2 bg-black/50 hover:bg-red-500 rounded-full text-white transition-colors"
                  >
                    <FaTimes />
                  </button>

                  {/* Imagen Grande (Scrollable si es muy alta) */}
                  <div className="flex-1 overflow-auto bg-black flex items-center justify-center p-2">
                    <motion.img
                      layoutId={`cert-image-${cert.id}`}
                      src={cert.image}
                      alt={cert.title}
                      className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-[0_0_50px_rgba(0,0,0,0.5)]"
                    />
                  </div>

                  {/* Pie de Foto del Modal */}
                  <div className="p-6 bg-slate-800 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white">{cert.title}</h3>
                      <p className="text-cyan-400">{cert.issuer} • {cert.date}</p>
                    </div>
                    
                    {/* Botón opcional para verificar credencial */}
                    {cert.link && cert.link !== "#" && (
                      <a 
                        href={cert.link} 
                        target="_blank" 
                        rel="noreferrer"
                        className="flex items-center gap-2 px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-colors text-sm"
                      >
                        <FaExternalLinkAlt /> Verificar
                      </a>
                    )}
                  </div>
                </motion.div>
              )
            ))}
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certifications;