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
  BookOpen, 
  ChevronRight,
  ShieldCheck,
  Star,
  Download,
  Flame,
  Award
} from 'lucide-react';

interface FocusForHerViewProps {
  language: 'es' | 'en';
  onBackToHome: () => void;
}

export const FocusForHerView = ({ language, onBackToHome }: FocusForHerViewProps) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [isVideoMuted, setIsVideoMuted] = useState(true);
  const [activeTab, setActiveTab] = useState<'all' | 'single' | 'lifestyle'>('all');
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

  const ebooks = [
    {
      title: "Cuerpo fuerte y sexy",
      desc: "Guía completa de entrenamiento de hipertrofia y curvas femeninas: sentadillas, hip thrust, trabajo de glúteo y core.",
      icon: "🏋️‍♀️",
      tag: "Entrenamiento"
    },
    {
      title: "Súper inteligente",
      desc: "Estrategias de mentalidad, control de estrés, hábitos matutinos y optimización hormonal femenina.",
      icon: "🧠",
      tag: "Mindset & Hábitos"
    },
    {
      title: "Come sin culpa",
      desc: "Protocolo de nutrición flexible para perder grasa sin eliminar carbohidratos ni aislarte en eventos sociales.",
      icon: "🥑",
      tag: "Nutrición Flexible"
    },
    {
      title: "Recetario FIT",
      desc: "Más de 40 recetas altas en proteína, fáciles de preparar y deliciosas para toda la semana.",
      icon: "🥗",
      tag: "Recetas Rápidas"
    },
    {
      title: "Guía de mantenimiento",
      desc: "Cómo continuar entrenando y sostener tus hábitos y composición corporal después de los 6 meses.",
      icon: "📈",
      tag: "Sostenibilidad"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0C0D11] text-white selection:bg-[#F5C443] selection:text-black pb-28">
      {/* Top Bar with back link & brand */}
      <div className="sticky top-0 z-40 bg-[#0C0D11]/90 backdrop-blur-md border-b border-white/10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            onClick={onBackToHome}
            className="flex items-center gap-2 text-xs md:text-sm font-bold text-slate-300 hover:text-[#F5C443] transition-colors cursor-pointer group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span>{language === 'es' ? 'Volver al Inicio' : 'Back to Home'}</span>
          </button>

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#F5C443] animate-pulse" />
            <span className="text-xs md:text-sm font-black tracking-widest text-[#F5C443] uppercase">
              FOCUS FOR HER
            </span>
          </div>

          <a
            href="https://api.whatsapp.com/send?phone=523318042910&text=¡Hola%20Coach!%20⚡%20Me%20interesa%20iniciar%20mi%20evaluación%20para%20FOCUS%20FOR%20HER."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 bg-[#F5C443] text-black font-extrabold text-xs uppercase tracking-wider px-4 py-2 rounded-full hover:bg-[#ffcf4d] transition-colors"
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
        {/* ============================================================== */}
        <section className="mb-16 md:mb-24 text-center">
          <div className="inline-flex items-center gap-2 bg-[#1A1C23] border border-[#F5C443]/40 px-3.5 py-1.5 rounded-full mb-6 shadow-[0_0_20px_rgba(245,196,67,0.15)]">
            <Sparkles size={14} className="text-[#F5C443]" />
            <span className="text-[11px] font-black tracking-widest text-[#F5C443] uppercase">
              {language === 'es' ? 'PRESENTACIÓN OFICIAL DEL PROGRAMA' : 'OFFICIAL PROGRAM PRESENTATION'}
            </span>
          </div>

          <h1 className="stencil text-4xl sm:text-6xl md:text-8xl tracking-tight text-white mb-4">
            FEEL LIKE <span className="text-[#F5C443]">YOURSELF AGAIN</span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base md:text-xl max-w-2xl mx-auto mb-8 font-medium leading-relaxed">
            {language === 'es' 
              ? 'Recupera tu seguridad, tonifica tu cuerpo con pesas inteligentes y construye hábitos reales sin dietas extremas ni horas interminables de cardio.' 
              : 'Reclaim your confidence, tone your body with smart lifting, and build lasting habits without extreme diets or endless boring cardio.'}
          </p>

          {/* Video Player Presentation Card */}
          <div className="max-w-4xl mx-auto bg-[#12141A] border-2 border-white/10 hover:border-[#F5C443]/40 transition-all rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.8)] relative group">
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
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C0D11] via-transparent to-black/30 pointer-events-none" />

              {/* Top controls */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20 pointer-events-auto">
                <span className="bg-black/75 backdrop-blur-md border border-[#F5C443]/40 text-[#F5C443] text-[10px] md:text-xs font-black tracking-widest px-3 py-1.5 rounded-full uppercase flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#F5C443] animate-ping" />
                  FEEL LIKE YOURSELF AGAIN • VIDEO OFICIAL
                </span>

                <button
                  onClick={toggleVideoMute}
                  className="w-10 h-10 rounded-full bg-black/75 border border-white/20 text-white hover:text-[#F5C443] hover:border-[#F5C443] transition-all flex items-center justify-center cursor-pointer shadow-lg"
                  title={isVideoMuted ? "Activar sonido" : "Silenciar"}
                >
                  {isVideoMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                </button>
              </div>

              {/* Bottom Play/Pause button */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between z-20 pointer-events-auto">
                <button
                  onClick={toggleVideoPlayback}
                  className="px-5 py-2.5 bg-[#F5C443] text-black font-extrabold text-xs tracking-wider uppercase rounded-full flex items-center gap-2 hover:bg-[#ffcf4d] active:scale-95 transition-all shadow-xl cursor-pointer"
                >
                  {isVideoPlaying ? <Pause size={15} /> : <Play size={15} className="fill-black" />}
                  <span>{isVideoPlaying ? 'Pausar video' : 'Reproducir video'}</span>
                </button>

                <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-slate-300 bg-black/60 px-3 py-1.5 rounded-full border border-white/10">
                  <ShieldCheck size={14} className="text-[#F5C443]" />
                  <span>Método Comprobado Focus</span>
                </div>
              </div>
            </div>

            {/* Video footer statement */}
            <div className="p-4 sm:p-6 bg-[#15171E] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
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
                className="shrink-0 text-xs font-bold text-[#F5C443] hover:text-white uppercase tracking-wider flex items-center gap-1.5 transition-colors"
              >
                <span>Ver los 3 planes disponibles</span>
                <ChevronRight size={14} />
              </a>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* SIGUIENTE LOS PRECIOS (3 COLUMNAS)                             */}
        {/* Columna Izquierda: Make it your lifestyle: $3,499               */}
        {/* Columna de en Medio: FEEL LIKE YOURSELF: $1,999 (Destacada)     */}
        {/* Columna Derecha: Start feeling better: $799                    */}
        {/* Con la estética y colores de las referencias DAZN / E-books    */}
        {/* ============================================================== */}
        <section id="planes" className="mb-24 pt-4">
          <div className="text-center mb-12">
            <div className="inline-block text-xs font-black tracking-[0.25em] text-[#F5C443] uppercase mb-2">
              SELECCIONA TU PAQUETE
            </div>
            <h2 className="stencil text-3xl sm:text-4xl md:text-5xl text-white mb-4">
              PLANES <span className="text-[#F5C443]">FOCUS FOR HER</span>
            </h2>
            <p className="text-slate-400 text-sm max-w-xl mx-auto">
              Elige el nivel de acompañamiento que mejor se adapte a tus objetivos. Todos los paquetes incluyen acceso a la app Stenfit y material exclusivo.
            </p>

            {/* Reference Segmented control on top */}
            <div className="mt-8 inline-flex p-1 bg-[#15171F] border border-white/10 rounded-full max-w-xs mx-auto">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-4 py-2 text-xs font-bold rounded-full transition-all cursor-pointer ${
                  activeTab === 'all' 
                    ? 'bg-[#F5C443] text-black shadow-md' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Todos los planes
              </button>
              <button
                onClick={() => setActiveTab('single')}
                className={`px-4 py-2 text-xs font-bold rounded-full transition-all cursor-pointer ${
                  activeTab === 'single' 
                    ? 'bg-[#F5C443] text-black shadow-md' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Recomendado
              </button>
              <button
                onClick={() => setActiveTab('lifestyle')}
                className={`px-4 py-2 text-xs font-bold rounded-full transition-all cursor-pointer ${
                  activeTab === 'lifestyle' 
                    ? 'bg-[#F5C443] text-black shadow-md' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Largo plazo
              </button>
            </div>
          </div>

          {/* 3-Column Pricing Grid */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch max-w-7xl mx-auto">
            
            {/* ------------------------------------------------------------ */}
            {/* COLUMNA 1 (IZQUIERDA): Make it your lifestyle: $3,499        */}
            {/* ------------------------------------------------------------ */}
            <div className="bg-[#13151B] border border-white/10 rounded-2xl p-6 lg:p-8 flex flex-col justify-between hover:border-white/20 transition-all shadow-xl relative group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-black uppercase tracking-wider text-slate-400 bg-white/5 px-3 py-1 rounded-full">
                    TRANSFORMACIÓN INTEGRAL
                  </span>
                  <span className="text-xs text-slate-400 font-mono">6 Meses</span>
                </div>

                <h3 className="font-extrabold text-2xl text-white mb-2">
                  Make it your lifestyle
                </h3>
                <p className="text-slate-400 text-xs mb-6 leading-relaxed">
                  El programa definitivo para transformar tu cuerpo y convertir los hábitos en tu estilo de vida permanente.
                </p>

                {/* Price */}
                <div className="mb-6 pb-6 border-b border-white/10">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl lg:text-5xl font-black text-white tracking-tight">
                      $3,499
                    </span>
                    <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                      MXN
                    </span>
                  </div>
                  <p className="text-[11px] text-[#F5C443] font-medium mt-1">
                    Incluye guía de mantenimiento pos-6 meses
                  </p>
                </div>

                {/* CTA Button */}
                <a
                  href="https://api.whatsapp.com/send?phone=523318042910&text=¡Hola%20Coach!%20⚡%20Me%20interesa%20iniciar%20el%20paquete%20Make%20it%20your%20lifestyle%20($3,499)%20de%20Focus%20For%20Her."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-6 rounded-full bg-white text-black font-extrabold text-xs uppercase tracking-wider hover:bg-slate-200 transition-all text-center block mb-8 shadow-md cursor-pointer active:scale-98"
                >
                  Elegir Make It Your Lifestyle
                </a>

                {/* Features List */}
                <div className="space-y-3 mb-6">
                  <div className="text-[11px] font-black uppercase tracking-wider text-slate-300 mb-2">
                    LO QUE INCLUYE:
                  </div>
                  {[
                    "Valoración inicial profunda",
                    "Plan de entrenamiento personalizado según objetivos, experiencia, horarios y equipo disponible",
                    "Acceso ilimitado a la app Stenfit",
                    "Modificaciones y ajustes constantes según tu progreso",
                    "Comunicación vía WhatsApp para dudas, cambios y progreso constante",
                    "Revisión técnica de ejercicios por video",
                    "Acceso prioritario a mensajes",
                    "Agenda de sesiones 1:1 online (hasta 1 por semana)",
                    "Descuento exclusivo al terminar tu plan"
                  ].map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <Check size={15} className="text-[#F5C443] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Bonus Section */}
                <div className="p-4 bg-[#1A1C24] rounded-xl border border-white/5 space-y-2 mb-4">
                  <div className="text-[10px] font-black uppercase tracking-widest text-[#F5C443] flex items-center gap-1.5">
                    <Award size={13} />
                    <span>BONUS INCLUIDOS:</span>
                  </div>
                  <ul className="text-xs text-slate-300 space-y-1.5">
                    <li>• E-book <em>Cuerpo fuerte y sexy</em></li>
                    <li>• E-book <em>Súper inteligente</em></li>
                    <li>• E-book <em>Come sin culpa</em></li>
                    <li>• Recetario FIT</li>
                    <li>• Material exclusivo: retos HYROX, rutinas de abdomen y consejos</li>
                    <li className="text-[#F5C443] font-semibold pt-1">
                      • <strong>Guía de mantenimiento:</strong> cómo continuar entrenando y mantener tus hábitos después de los 6 meses.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 text-center">
                <span className="text-[11px] text-slate-400">
                  Ideal para metas a largo plazo y soporte semanal
                </span>
              </div>
            </div>

            {/* ------------------------------------------------------------ */}
            {/* COLUMNA 2 (EN MEDIO): FEEL LIKE YOURSELF: $1,999             */}
            {/* ESTILO DESTACADO: Borde Dorado, Badge 'LA MEJOR EXPERIENCIA' */}
            {/* ------------------------------------------------------------ */}
            <div className="bg-[#151720] border-2 border-[#F5C443] rounded-2xl p-6 lg:p-8 flex flex-col justify-between shadow-[0_0_50px_rgba(245,196,67,0.22)] relative transform md:-translate-y-2 group">
              {/* Badge superior dorado de referencia */}
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#F5C443] text-black font-black text-[11px] tracking-wider uppercase py-1 px-4 rounded-full shadow-lg flex items-center gap-1.5 whitespace-nowrap">
                <Check size={13} strokeWidth={3} />
                <span>LA MEJOR EXPERIENCIA</span>
              </div>

              <div>
                <div className="flex items-center justify-between mb-4 mt-2">
                  <span className="text-[11px] font-black uppercase tracking-wider text-[#F5C443] bg-[#F5C443]/10 px-3 py-1 rounded-full border border-[#F5C443]/30">
                    PAQUETE INSIGNIA
                  </span>
                  <span className="text-xs text-[#F5C443] font-mono">Más Popular</span>
                </div>

                <h3 className="font-extrabold text-2xl lg:text-3xl text-white mb-2">
                  FEEL LIKE YOURSELF
                </h3>
                <p className="text-slate-300 text-xs mb-6 leading-relaxed">
                  El programa balanceado por excelencia: entrenamiento personalizado, acompañamiento constante y 3 sesiones 1:1.
                </p>

                {/* Price */}
                <div className="mb-6 pb-6 border-b border-white/10">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl lg:text-5xl font-black text-white tracking-tight">
                      $1,999
                    </span>
                    <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                      MXN
                    </span>
                    <span className="text-xs line-through text-slate-500 font-mono ml-1">
                      $2,499
                    </span>
                  </div>
                  <p className="text-[11px] text-[#F5C443] font-medium mt-1">
                    Sesiones 1:1 online (inicio, mitad y final)
                  </p>
                </div>

                {/* CTA Button Gold */}
                <a
                  href="https://api.whatsapp.com/send?phone=523318042910&text=¡Hola%20Coach!%20⚡%20Quiero%20suscribirme%20al%20paquete%20FEEL%20LIKE%20YOURSELF%20($1,999)%20de%20Focus%20For%20Her."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 px-6 rounded-full bg-gradient-to-r from-[#F5C443] to-[#E5AC25] text-black font-extrabold text-xs uppercase tracking-wider hover:brightness-110 transition-all text-center block mb-8 shadow-[0_4px_25px_rgba(245,196,67,0.35)] cursor-pointer active:scale-98"
                >
                  Suscríbete a Feel Like Yourself
                </a>

                {/* Features List */}
                <div className="space-y-3 mb-6">
                  <div className="text-[11px] font-black uppercase tracking-wider text-[#F5C443] mb-2">
                    LO QUE INCLUYE:
                  </div>
                  {[
                    "Valoración inicial completa",
                    "Plan de entrenamiento personalizado según objetivos, experiencia, horarios y equipo disponible",
                    "Acceso ilimitado a la app Stenfit",
                    "Modificaciones y ajustes constantes según tu progreso",
                    "Comunicación vía WhatsApp para dudas, cambios y progreso constante",
                    "Revisión técnica de ejercicios",
                    "Acceso prioritario a mensajes",
                    "Sesión 1:1 online de inicio, mitad y final de tu paquete"
                  ].map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-200">
                      <Check size={15} className="text-[#F5C443] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Bonus Section */}
                <div className="p-4 bg-[#1E202B] rounded-xl border border-[#F5C443]/30 space-y-2 mb-4">
                  <div className="text-[10px] font-black uppercase tracking-widest text-[#F5C443] flex items-center gap-1.5">
                    <Sparkles size={13} />
                    <span>BONUS INCLUIDOS:</span>
                  </div>
                  <ul className="text-xs text-slate-300 space-y-1.5">
                    <li>• E-book <em>Cuerpo fuerte y sexy</em></li>
                    <li>• E-book <em>Súper inteligente</em></li>
                    <li>• E-book <em>Come sin culpa</em></li>
                    <li>• Recetario FIT</li>
                    <li>• Material exclusivo: retos HYROX, rutinas de abdomen y consejos de entrenamiento</li>
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 text-center">
                <span className="text-[11px] text-[#F5C443] font-semibold">
                  Garantía de acompañamiento en tiempo real
                </span>
              </div>
            </div>

            {/* ------------------------------------------------------------ */}
            {/* COLUMNA 3 (DERECHA): Start feeling better: $799              */}
            {/* ------------------------------------------------------------ */}
            <div className="bg-[#13151B] border border-white/10 rounded-2xl p-6 lg:p-8 flex flex-col justify-between hover:border-white/20 transition-all shadow-xl relative group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-black uppercase tracking-wider text-slate-400 bg-white/5 px-3 py-1 rounded-full">
                    INICIO MENSUAL
                  </span>
                  <span className="text-xs text-slate-400 font-mono">1 Mes</span>
                </div>

                <h3 className="font-extrabold text-2xl text-white mb-2">
                  Start feeling better
                </h3>
                <p className="text-slate-400 text-xs mb-6 leading-relaxed">
                  Da el primer paso para reactivar tu energía y aprender la técnica correcta con tu plan a medida.
                </p>

                {/* Price */}
                <div className="mb-6 pb-6 border-b border-white/10">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl lg:text-5xl font-black text-white tracking-tight">
                      $799
                    </span>
                    <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                      MXN
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 font-medium mt-1">
                    Durante el mes contratado
                  </p>
                </div>

                {/* CTA Button */}
                <a
                  href="https://api.whatsapp.com/send?phone=523318042910&text=¡Hola%20Coach!%20⚡%20Me%20interesa%20iniciar%20el%20paquete%20Start%20feeling%20better%20($799)%20de%20Focus%20For%20Her."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-6 rounded-full bg-white text-black font-extrabold text-xs uppercase tracking-wider hover:bg-slate-200 transition-all text-center block mb-8 shadow-md cursor-pointer active:scale-98"
                >
                  Elegir Start Feeling Better
                </a>

                {/* Features List */}
                <div className="space-y-3 mb-6">
                  <div className="text-[11px] font-black uppercase tracking-wider text-slate-300 mb-2">
                    LO QUE INCLUYE:
                  </div>
                  {[
                    "Valoración inicial",
                    "Plan de entrenamiento personalizado según objetivos, experiencia, horarios y equipo disponible",
                    "Acceso a la app durante el mes contratado",
                    "Ajustes de rutina durante el mes",
                    "Comunicación vía WhatsApp para dudas, cambios y progreso constante"
                  ].map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <Check size={15} className="text-[#F5C443] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Bonus Section */}
                <div className="p-4 bg-[#1A1C24] rounded-xl border border-white/5 space-y-2 mb-4">
                  <div className="text-[10px] font-black uppercase tracking-widest text-[#F5C443] flex items-center gap-1.5">
                    <Award size={13} />
                    <span>BONUS INCLUIDO:</span>
                  </div>
                  <ul className="text-xs text-slate-300 space-y-1">
                    <li>• E-book <em>Cuerpo fuerte y sexy</em></li>
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 text-center">
                <span className="text-[11px] text-slate-400">
                  Perfecto para comenzar a entrenar con estructura
                </span>
              </div>
            </div>

          </div>
        </section>

        {/* ============================================================== */}
        {/* SECCIÓN DE E-BOOKS INCLUIDOS EN FOCUS FOR HER                  */}
        {/* Interfaz visual inspirada en la biblioteca de e-books          */}
        {/* ============================================================== */}
        <section className="mb-24 p-6 sm:p-10 bg-[#12141B] border border-white/10 rounded-2xl">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 text-xs font-black tracking-widest text-[#F5C443] uppercase mb-2">
              <BookOpen size={14} />
              <span>BIBLIOTECA EXCLUSIVA</span>
            </div>
            <h3 className="stencil text-3xl sm:text-4xl text-white mb-3">
              LOS E-BOOKS DE <span className="text-[#F5C443]">FOCUS FOR HER</span>
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto">
              Material digital descargable diseñado para complementar tu entrenamiento con nutrición inteligente, recetas y hábitos.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {ebooks.map((eb, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-xl bg-[#181A22] border border-white/10 hover:border-[#F5C443]/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl">{eb.icon}</span>
                    <span className="text-[9px] font-black uppercase tracking-wider text-[#F5C443] bg-[#F5C443]/10 px-2 py-0.5 rounded">
                      {eb.tag}
                    </span>
                  </div>
                  <h4 className="font-bold text-base text-white group-hover:text-[#F5C443] transition-colors mb-2">
                    E-book {eb.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {eb.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] text-slate-500">
                  <span>Formato Digital PDF</span>
                  <span className="text-[#F5C443] font-bold">Incluido Gratis</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom Contact / Reassurance Banner */}
        <section className="text-center bg-gradient-to-b from-[#181B24] to-[#101217] border-2 border-[#F5C443]/30 rounded-2xl p-8 sm:p-12 shadow-2xl">
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
              className="py-4 px-8 rounded-full bg-[#F5C443] hover:bg-[#ffcf4d] text-black font-extrabold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-[0_4px_25px_rgba(245,196,67,0.35)] transition-all cursor-pointer active:scale-95"
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
