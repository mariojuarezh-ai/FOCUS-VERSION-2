import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Check, 
  Sparkles, 
  ArrowLeft, 
  MessageCircle, 
  ChevronRight, 
  ChevronLeft,
  ShieldCheck, 
  Award, 
  Crown 
} from 'lucide-react';

interface FocusForHerViewProps {
  language: 'es' | 'en';
  onBackToHome: () => void;
}

export const FocusForHerView = ({ language, onBackToHome }: FocusForHerViewProps) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [isVideoMuted, setIsVideoMuted] = useState(true);
  // Default to index 1 (FEEL LIKE YOURSELF - Most Popular)
  const [[page, direction], setPage] = useState<[number, number]>([1, 0]);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleVideoPlayback = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsVideoPlaying(true);
    } else {
      videoRef.current.pause();
      setIsVideoPlaying(false);
    }
  };

  const toggleVideoMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsVideoMuted(videoRef.current.muted);
  };

  const packages = [
    {
      id: 'lifestyle',
      title: 'Make it your lifestyle',
      badgeTop: 'TRANSFORMACIÓN INTEGRAL',
      duration: '6 Meses',
      price: '$3,499',
      unit: 'MXN',
      periodNote: 'Incluye guía de mantenimiento pos-6 meses',
      description: 'El programa definitivo para transformar tu cuerpo y convertir los hábitos en tu estilo de vida permanente.',
      whatsappText: '¡Hola Coach! ⚡ Me interesa iniciar el paquete Make it your lifestyle ($3,499) de Focus For Her.',
      cta: 'Elegir Make It Your Lifestyle',
      isFeatured: false,
      features: [
        'Valoración inicial profunda',
        'Plan de entrenamiento personalizado según objetivos, experiencia, horarios y equipo disponible',
        'Acceso ilimitado a la app Stenfit',
        'Modificaciones y ajustes constantes según tu progreso',
        'Comunicación vía WhatsApp para dudas, cambios y progreso constante',
        'Revisión técnica de ejercicios por video',
        'Acceso prioritario a mensajes',
        'Agenda de sesiones 1:1 online (hasta 1 por semana)',
        'Descuento exclusivo al terminar tu plan'
      ],
      bonuses: [
        'E-book Cuerpo fuerte y sexy',
        'E-book Súper inteligente',
        'E-book Come sin culpa',
        'Recetario FIT',
        'Material exclusivo: retos HYROX, rutinas de abdomen y consejos de entrenamiento'
      ],
      specialBonus: 'Guía de mantenimiento: cómo continuar entrenando y mantener tus hábitos después de los 6 meses.'
    },
    {
      id: 'feel-like-yourself',
      title: 'FEEL LIKE YOURSELF',
      badgeTop: 'PAQUETE INSIGNIA',
      duration: 'Más Recomendado',
      price: '$1,999',
      oldPrice: '$2,499',
      unit: 'MXN',
      periodNote: 'Sesiones 1:1 online (inicio, mitad y final)',
      description: 'El programa balanceado por excelencia: entrenamiento personalizado, acompañamiento constante y 3 sesiones 1:1.',
      whatsappText: '¡Hola Coach! ⚡ Quiero suscribirme al paquete FEEL LIKE YOURSELF ($1,999) de Focus For Her.',
      cta: 'Suscríbete a Feel Like Yourself',
      isFeatured: true,
      features: [
        'Valoración inicial completa',
        'Plan de entrenamiento personalizado según objetivos, experiencia, horarios y equipo disponible',
        'Acceso ilimitado a la app Stenfit',
        'Modificaciones y ajustes constantes según tu progreso',
        'Comunicación vía WhatsApp para dudas, cambios y progreso constante',
        'Revisión técnica de ejercicios',
        'Acceso prioritario a mensajes',
        'Sesión 1:1 online de inicio, mitad y final de tu paquete'
      ],
      bonuses: [
        'E-book Cuerpo fuerte y sexy',
        'E-book Súper inteligente',
        'E-book Come sin culpa',
        'Recetario FIT',
        'Material exclusivo: retos HYROX, rutinas de abdomen y consejos de entrenamiento'
      ],
      specialBonus: null
    },
    {
      id: 'start-feeling-better',
      title: 'Start feeling better',
      badgeTop: 'INICIO MENSUAL',
      duration: '1 Mes',
      price: '$799',
      unit: 'MXN',
      periodNote: 'Durante el mes contratado',
      description: 'Da el primer paso para reactivar tu energía y aprender la técnica correcta con tu plan a medida.',
      whatsappText: '¡Hola Coach! ⚡ Me interesa iniciar el paquete Start feeling better ($799) de Focus For Her.',
      cta: 'Elegir Start Feeling Better',
      isFeatured: false,
      features: [
        'Valoración inicial',
        'Plan de entrenamiento personalizado según objetivos, experiencia, horarios y equipo disponible',
        'Acceso a la app durante el mes contratado',
        'Ajustes de rutina durante el mes',
        'Comunicación vía WhatsApp para dudas, cambios y progreso constante'
      ],
      bonuses: [
        'E-book Cuerpo fuerte y sexy'
      ],
      specialBonus: null
    }
  ];

  const paginate = (newDirection: number) => {
    const next = page + newDirection;
    if (next >= 0 && next < packages.length) {
      setPage([next, newDirection]);
    }
  };

  const goToPackage = (index: number) => {
    if (index === page) return;
    setPage([index, index > page ? 1 : -1]);
  };

  const currentPkg = packages[page];

  // Motion slide transition variants
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 250 : -250,
      opacity: 0,
      scale: 0.96
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring', stiffness: 320, damping: 30 },
        opacity: { duration: 0.2 }
      }
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 250 : -250,
      opacity: 0,
      scale: 0.96,
      transition: {
        x: { type: 'spring', stiffness: 320, damping: 30 },
        opacity: { duration: 0.18 }
      }
    })
  };

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white selection:bg-[#768455] selection:text-white pb-28">
      {/* Top Bar with back link & brand (Green, Black, White palette) */}
      <div className="sticky top-0 z-40 bg-[#0B0B0B]/95 backdrop-blur-md border-b border-white/10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            onClick={onBackToHome}
            className="flex items-center gap-2 text-xs md:text-sm font-bold text-slate-300 hover:text-white transition-colors cursor-pointer group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span>{language === 'es' ? 'Volver al Inicio' : 'Back to Home'}</span>
          </button>

          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#768455] animate-pulse" />
            <span className="text-xs md:text-sm font-black tracking-widest text-[#768455] uppercase">
              FOCUS FOR HER
            </span>
          </div>

          <a
            href="https://api.whatsapp.com/send?phone=523318042910&text=¡Hola%20Coach!%20⚡%20Me%20interesa%20iniciar%20mi%20evaluación%20para%20FOCUS%20FOR%20HER."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 bg-white text-black font-extrabold text-xs uppercase tracking-wider px-5 py-2.5 rounded-full hover:bg-slate-200 transition-colors shadow-md"
          >
            <MessageCircle size={14} />
            <span>{language === 'es' ? 'Contactar Coach' : 'Contact Coach'}</span>
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-8 md:pt-12">
        
        {/* ============================================================== */}
        {/* PRIMERO QUE VEO:                                               */}
        {/* Video de presentación del paquete “FEEL LIKE YOURSELF AGAIN”   */}
        {/* Paleta: Verde (#768455), Negro (#0B0B0B), Blanco (#FFFFFF)     */}
        {/* ============================================================== */}
        <section className="mb-16 md:mb-24 text-center">
          <div className="inline-flex items-center gap-2 bg-[#121316] border border-[#768455]/40 px-4 py-1.5 rounded-full mb-6 shadow-[0_0_20px_rgba(118,132,85,0.15)]">
            <Sparkles size={14} className="text-[#768455]" />
            <span className="text-[11px] font-black tracking-widest text-[#768455] uppercase">
              {language === 'es' ? 'PRESENTACIÓN OFICIAL DEL PROGRAMA' : 'OFFICIAL PROGRAM PRESENTATION'}
            </span>
          </div>

          <h1 className="stencil text-4xl sm:text-6xl md:text-8xl tracking-tight text-white mb-4">
            FEEL LIKE <span className="text-[#768455]">YOURSELF AGAIN</span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base md:text-xl max-w-2xl mx-auto mb-8 font-medium leading-relaxed">
            {language === 'es' 
              ? 'Recupera tu seguridad, tonifica tu cuerpo con pesas inteligentes y construye hábitos reales sin dietas extremas ni horas interminables de cardio.' 
              : 'Reclaim your confidence, tone your body with smart lifting, and build lasting habits without extreme diets or endless boring cardio.'}
          </p>

          {/* Video Player Presentation Card */}
          <div className="max-w-4xl mx-auto bg-[#121316] border border-white/10 hover:border-[#768455]/50 transition-all rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.8)] relative group">
            <div className="relative aspect-video w-full bg-black">
              <video
                ref={videoRef}
                autoPlay
                loop
                muted={isVideoMuted}
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="https://thefocusplan.com/VIDEOS/VIDEO%20ENTRENAMIENTO%20BN%201.mp4" type="video/mp4" />
              </video>

              {/* Ambient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-black/30 pointer-events-none" />

              {/* Top controls */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20 pointer-events-auto">
                <span className="bg-black/80 backdrop-blur-md border border-[#768455]/40 text-[#768455] text-[10px] md:text-xs font-black tracking-widest px-3.5 py-1.5 rounded-full uppercase flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#768455] animate-ping" />
                  FEEL LIKE YOURSELF AGAIN • VIDEO OFICIAL
                </span>

                <button
                  onClick={toggleVideoMute}
                  className="w-10 h-10 rounded-full bg-black/80 border border-white/20 text-white hover:text-[#768455] hover:border-[#768455] transition-all flex items-center justify-center cursor-pointer shadow-lg"
                  title={isVideoMuted ? "Activar sonido" : "Silenciar"}
                >
                  {isVideoMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                </button>
              </div>

              {/* Bottom Play/Pause button */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between z-20 pointer-events-auto">
                <button
                  onClick={toggleVideoPlayback}
                  className="px-5 py-2.5 bg-white text-black font-extrabold text-xs tracking-wider uppercase rounded-full flex items-center gap-2 hover:bg-slate-200 active:scale-95 transition-all shadow-xl cursor-pointer"
                >
                  {isVideoPlaying ? <Pause size={15} /> : <Play size={15} className="fill-black" />}
                  <span>{isVideoPlaying ? 'Pausar video' : 'Reproducir video'}</span>
                </button>

                <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-slate-300 bg-black/70 px-3.5 py-1.5 rounded-full border border-white/10">
                  <ShieldCheck size={14} className="text-[#768455]" />
                  <span>Método Comprobado Focus</span>
                </div>
              </div>
            </div>

            {/* Video footer statement */}
            <div className="p-4 sm:p-6 bg-[#16181D] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
              <div className="space-y-1">
                <div className="text-white font-bold text-sm sm:text-base">
                  ¿Por qué funciona el método Focus For Her?
                </div>
                <p className="text-slate-400 text-xs sm:text-sm">
                  Planificación de sobrecarga progresiva, foco en tren inferior y glúteos, más corrección técnica diaria con tu coach.
                </p>
              </div>

              <a
                href="#planes"
                className="shrink-0 text-xs font-bold text-[#768455] hover:text-white uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>Ver los paquetes</span>
                <ChevronRight size={14} />
              </a>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* PRECIOS: MOSTRAR UNO SOLO A LA VEZ CON SCROLL / SIGUIENTE       */}
        {/* "EN ESTA SECCION DEBE SER UN SCROLL PARA QUE APAREZCA UNO Y LE  */}
        {/*  DES SIGUIENTE Y APAREZCA EL OTRO, NO DEBEN VERSE LOS TRES      */}
        {/*  AL MISMO TIEMPO"                                              */}
        {/* ============================================================== */}
        <section id="planes" className="mb-24 pt-4">
          <div className="text-center mb-6">
            <div className="inline-block text-xs font-black tracking-[0.25em] text-[#768455] uppercase mb-2">
              SELECCIONA TU PAQUETE
            </div>
            <h2 className="stencil text-3xl sm:text-4xl md:text-5xl text-white mb-3">
              PAQUETES <span className="text-[#768455]">FOCUS FOR HER</span>
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto">
              Haz clic en <strong>Siguiente</strong> o en los botones para revisar cada opción.
            </p>

            {/* Quick Navigation Pills on Top */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3 max-w-2xl mx-auto">
              {packages.map((pkg, idx) => (
                <button
                  key={pkg.id}
                  onClick={() => goToPackage(idx)}
                  className={`px-4 sm:px-5 py-2 text-xs font-bold rounded-full transition-all cursor-pointer border flex items-center gap-1.5 ${
                    page === idx
                      ? pkg.isFeatured
                        ? 'bg-[#768455] text-white border-[#768455] shadow-lg scale-105'
                        : 'bg-white text-black border-white shadow-lg scale-105'
                      : 'bg-[#121316] text-slate-300 border-white/10 hover:border-white/30'
                  }`}
                >
                  {pkg.isFeatured && <Crown size={13} className={page === idx ? 'text-white' : 'text-[#768455]'} />}
                  <span>{pkg.title} ({pkg.price})</span>
                </button>
              ))}
            </div>
          </div>

          {/* Navigation Bar: [ < ANTERIOR ]  [ ● ○ ○  1 / 3 ]  [ SIGUIENTE > ] */}
          <div className="max-w-xl mx-auto flex items-center justify-between px-2 sm:px-4 py-3 mb-6 bg-[#121316]/80 backdrop-blur-md border border-white/10 rounded-full shadow-lg">
            <button
              onClick={() => paginate(-1)}
              disabled={page === 0}
              className={`px-4 py-2 rounded-full border text-xs font-black tracking-wider uppercase flex items-center gap-1.5 transition-all cursor-pointer ${
                page === 0
                  ? 'border-white/5 text-slate-600 opacity-40 cursor-not-allowed'
                  : 'border-white/20 text-white hover:bg-white/10 active:scale-95'
              }`}
            >
              <ChevronLeft size={16} />
              <span>Anterior</span>
            </button>

            {/* Step Dots & Counter */}
            <div className="flex flex-col items-center gap-1">
              <div className="flex items-center gap-2">
                {packages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => goToPackage(idx)}
                    className={`h-2.5 rounded-full transition-all cursor-pointer ${
                      page === idx 
                        ? 'w-7 bg-[#768455]' 
                        : 'w-2.5 bg-white/20 hover:bg-white/40'
                    }`}
                    aria-label={`Ver paquete ${idx + 1}`}
                  />
                ))}
              </div>
              <span className="text-[10px] text-slate-400 font-mono">
                {page + 1} de {packages.length}
              </span>
            </div>

            <button
              onClick={() => paginate(1)}
              disabled={page === packages.length - 1}
              className={`px-4 py-2 rounded-full border text-xs font-black tracking-wider uppercase flex items-center gap-1.5 transition-all cursor-pointer ${
                page === packages.length - 1
                  ? 'border-white/5 text-slate-600 opacity-40 cursor-not-allowed'
                  : 'border-white/20 text-white hover:bg-white/10 active:scale-95'
              }`}
            >
              <span>Siguiente</span>
              <ChevronRight size={16} />
            </button>
          </div>

          {/* SINGLE CARD DISPLAY CONTAINER (Only 1 card visible on screen) */}
          <div className="relative max-w-xl mx-auto px-2 sm:px-0">
            {/* Desktop Side Navigation Arrows */}
            <button
              onClick={() => paginate(-1)}
              disabled={page === 0}
              className={`hidden md:flex absolute -left-16 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border items-center justify-center transition-all z-20 cursor-pointer shadow-xl ${
                page === 0 
                  ? 'border-white/5 text-slate-700 opacity-30 cursor-not-allowed' 
                  : 'border-white/20 bg-[#121316] text-white hover:bg-white/15 hover:border-white/40 active:scale-95'
              }`}
              title="Paquete anterior"
              aria-label="Paquete anterior"
            >
              <ChevronLeft size={22} />
            </button>

            <button
              onClick={() => paginate(1)}
              disabled={page === packages.length - 1}
              className={`hidden md:flex absolute -right-16 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border items-center justify-center transition-all z-20 cursor-pointer shadow-xl ${
                page === packages.length - 1 
                  ? 'border-white/5 text-slate-700 opacity-30 cursor-not-allowed' 
                  : 'border-white/20 bg-[#121316] text-white hover:bg-white/15 hover:border-white/40 active:scale-95'
              }`}
              title="Siguiente paquete"
              aria-label="Siguiente paquete"
            >
              <ChevronRight size={22} />
            </button>

            {/* Animated Single Card Slot */}
            <div className="overflow-hidden min-h-[680px] relative">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentPkg.id}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className={`w-full rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative ${
                    currentPkg.isFeatured
                      ? 'bg-[#15171D] border-2 border-[#768455] shadow-[0_0_60px_rgba(118,132,85,0.25)]'
                      : 'bg-[#121316] border border-white/15'
                  }`}
                >
                  {/* Top Badge for Featured */}
                  {currentPkg.isFeatured && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#768455] text-white font-black text-[11px] tracking-wider uppercase py-1 px-4 rounded-full shadow-lg flex items-center gap-1.5 whitespace-nowrap z-10">
                      <Check size={13} strokeWidth={3} />
                      <span>LA MEJOR EXPERIENCIA</span>
                    </div>
                  )}

                  <div>
                    {/* Header: Badge & Duration */}
                    <div className="flex items-center justify-between mb-4 mt-1">
                      <span className={`text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full border ${
                        currentPkg.isFeatured
                          ? 'text-[#768455] bg-[#768455]/15 border-[#768455]/40'
                          : 'text-slate-300 bg-white/5 border-white/10'
                      }`}>
                        {currentPkg.badgeTop}
                      </span>
                      <span className={`text-xs font-mono px-2.5 py-0.5 rounded-full ${
                        currentPkg.isFeatured
                          ? 'text-white bg-white/10'
                          : 'text-slate-400'
                      }`}>
                        {currentPkg.duration}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-extrabold text-2xl sm:text-3xl text-white mb-2">
                      {currentPkg.title}
                    </h3>
                    <p className="text-slate-300 text-xs sm:text-sm mb-6 leading-relaxed">
                      {currentPkg.description}
                    </p>

                    {/* Price Block */}
                    <div className="mb-6 pb-6 border-b border-white/10">
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                          {currentPkg.price}
                        </span>
                        <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                          {currentPkg.unit}
                        </span>
                        {currentPkg.oldPrice && (
                          <span className="text-xs line-through text-slate-500 font-mono ml-1">
                            {currentPkg.oldPrice}
                          </span>
                        )}
                      </div>
                      <p className={`text-xs font-semibold mt-1.5 ${
                        currentPkg.isFeatured ? 'text-[#768455]' : 'text-slate-400'
                      }`}>
                        {currentPkg.periodNote}
                      </p>
                    </div>

                    {/* Main CTA Button: White Pill */}
                    <a
                      href={`https://api.whatsapp.com/send?phone=523318042910&text=${encodeURIComponent(currentPkg.whatsappText)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-4 px-6 rounded-full bg-white text-black font-extrabold text-xs sm:text-sm uppercase tracking-wider hover:bg-slate-200 transition-all text-center block mb-8 shadow-lg cursor-pointer active:scale-98"
                    >
                      {currentPkg.cta}
                    </a>

                    {/* Features List */}
                    <div className="space-y-3 mb-6">
                      <div className="text-[11px] font-black uppercase tracking-wider text-slate-300 mb-2">
                        LO QUE INCLUYE:
                      </div>
                      {currentPkg.features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                          <Check size={16} className="text-[#768455] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Bonus Section (E-books exclusive to package) */}
                    <div className={`p-4 sm:p-5 rounded-xl border space-y-2 mb-4 ${
                      currentPkg.isFeatured 
                        ? 'bg-[#1C1F26] border-[#768455]/40' 
                        : 'bg-[#181A1F] border-white/5'
                    }`}>
                      <div className="text-[11px] font-black uppercase tracking-widest text-[#768455] flex items-center gap-1.5">
                        <Award size={14} />
                        <span>BONUS EXCLUSIVOS INCLUIDOS:</span>
                      </div>
                      <ul className="text-xs sm:text-sm text-slate-300 space-y-1.5">
                        {currentPkg.bonuses.map((b, idx) => (
                          <li key={idx}>• {b}</li>
                        ))}
                        {currentPkg.specialBonus && (
                          <li className="text-white font-bold pt-1.5 border-t border-white/5">
                            • <strong className="text-[#768455]">{currentPkg.specialBonus}</strong>
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>

                  {/* Card Bottom Note */}
                  <div className="pt-4 border-t border-white/10 text-center">
                    <span className="text-[11px] text-slate-400">
                      {currentPkg.isFeatured 
                        ? 'Garantía de acompañamiento en tiempo real con tu coach' 
                        : 'Soporte vía WhatsApp y seguimiento constante'}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* Bottom Contact / Reassurance Banner */}
        <section className="text-center bg-[#121316] border border-[#768455]/40 rounded-2xl p-8 sm:p-12 shadow-2xl">
          <div className="w-12 h-12 rounded-full bg-[#768455]/20 border border-[#768455]/40 flex items-center justify-center mx-auto mb-4">
            <MessageCircle size={24} className="text-[#768455]" />
          </div>

          <h3 className="stencil text-3xl sm:text-4xl text-white mb-3">
            ¿TIENES DUDAS SOBRE CUÁL PAQUETE ES PARA TI?
          </h3>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto mb-8 font-medium">
            Escríbenos directamente a WhatsApp. Evaluaremos tu punto de partida, objetivos y te ayudaremos a elegir el plan ideal para ti.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://api.whatsapp.com/send?phone=523318042910&text=¡Hola%20Coach!%20⚡%20Tengo%20dudas%20sobre%20los%20paquetes%20de%20Focus%20For%20Her%20y%20me%20gustaría%20orientación."
              target="_blank"
              rel="noopener noreferrer"
              className="py-4 px-8 rounded-full bg-[#768455] hover:bg-[#869661] text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-[0_4px_25px_rgba(118,132,85,0.35)] transition-all cursor-pointer active:scale-95"
            >
              <MessageCircle size={18} />
              <span>Hablar con el Coach en WhatsApp</span>
            </a>

            <button
              onClick={onBackToHome}
              className="py-4 px-8 rounded-full border border-white/20 text-slate-300 hover:text-white hover:border-white transition-colors text-xs sm:text-sm font-bold uppercase tracking-wider cursor-pointer"
            >
              Explorar el resto del sitio
            </button>
          </div>
        </section>

      </div>
    </div>
  );
};
