import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  MessageCircle, 
  CheckCheck, 
  Sparkles, 
  ExternalLink,
  ChevronRight,
  Maximize2,
  X
} from 'lucide-react';
import { TransformationsCarousel } from './TransformationsCarousel';

interface TestimonialsProps {
  language: 'en' | 'es';
  onSelectProgram?: (program: 'her' | 'him' | 'hyrox') => void;
}

interface AudioVoiceNote {
  id: string;
  name: string;
  role: string;
  avatar: string;
  duration: string;
  date: string;
  text: string;
  stats: string;
}

export const Testimonials = ({ language, onSelectProgram }: TestimonialsProps) => {
  const [playingAudioId, setPlayingAudioId] = useState<string | null>(null);
  const [isVideoMuted, setIsVideoMuted] = useState(true);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const oscillatorRef = useRef<OscillatorNode | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);

  const voiceNotes: AudioVoiceNote[] = [
    {
      id: 'katie',
      name: 'Katie',
      role: language === 'es' ? 'Alumna Online Focus' : 'Online Trainee',
      avatar: 'https://thefocusplan.com/IMAGENES/ANTES-DESPUES/KATIE%20DESPUES%201%20CORREGIDO.png',
      duration: '0:48',
      date: 'Ayer 7:45 PM',
      text: language === 'es' 
        ? "Mi postura se siente mucho mejor y confío más en mí misma para hacer una sentadilla más profunda ahora que me estoy haciendo más fuerte. Mis piernas se sienten mucho más firmes y mi core duro. Lo que más orgullosa me tiene es que ya puedo hacer dominadas estrictas!"
        : "My posture feels way better and I trust myself more to do a deeper squat now that I am stronger. My legs feel much firmer and my core tight. I'm most proud that I can do strict pull-ups now!",
      stats: language === 'es' ? '+Fuerza & Dominio' : '+Strength & Mastery'
    },
    {
      id: 'diana',
      name: 'Diana',
      role: language === 'es' ? 'Transformación Focus for Her' : 'Focus for Her Trainee',
      avatar: 'https://thefocusplan.com/IMAGENES/ANTES-DESPUES/DIANA%20DESPUES%201.png',
      duration: '0:37',
      date: 'Martes 11:15 AM',
      text: language === 'es'
        ? "Coach, de verdad gracias por los ajustes semanales. Bajé 8 kilos pero sobre todo se me redujo la cintura y tonifiqué glúteos sin morirme de hambre ni hacer horas de cardio eterno."
        : "Coach, thank you for the weekly adjustments. I lost 8 kilos, trimmed my waist and toned glutes without starving or doing endless hours of boring cardio.",
      stats: language === 'es' ? '-8kg Grasa & Cintura' : '-8kg Fat & Toned Waist'
    },
    {
      id: 'pau',
      name: 'Pau',
      role: language === 'es' ? 'Focus for Her & Hyrox' : 'Focus for Her & Hyrox',
      avatar: 'https://thefocusplan.com/IMAGENES/ANTES-DESPUES/PAU%20DESPUES%201%20CORREGIDO.png',
      duration: '0:42',
      date: '10 Nov 8:20 PM',
      text: language === 'es'
        ? "Nunca pensé que un entrenamiento en línea con la app fuera tan personalizado. Ver los videos explicativos y recibir feedback en WhatsApp me dio la técnica perfecta para entrenar pesas sin miedo a lesionarme."
        : "I never thought online training through the app would be so personalized. Having video reviews and WhatsApp feedback gave me the confidence to lift heavy without fearing injury.",
      stats: language === 'es' ? 'Recomposición Total' : 'Total Recomposition'
    }
  ];

  const focusForHerPhotos = [
    {
      url: "https://thefocusplan.com/IMAGENES/ANTES-DESPUES/DIANA%20DESPUES%201.png",
      caption: "Diana - Reducción de grasa y tonificación",
      tag: "Focus for Her"
    },
    {
      url: "https://thefocusplan.com/IMAGENES/ANTES-DESPUES/KATIE%20DESPUES%201%20CORREGIDO.png",
      caption: "Katie - Fuerza muscular y postura",
      tag: "Focus for Her"
    },
    {
      url: "https://thefocusplan.com/IMAGENES/ANTES-DESPUES/PAU%20DESPUES%201%20CORREGIDO.png",
      caption: "Pau - Definición y rendimiento",
      tag: "Focus for Her"
    },
    {
      url: "https://thefocusplan.com/IMAGENES/ANTES-DESPUES/MONICA%20DESPUES%201%20CORREGIDO.png",
      caption: "Mónica - Recomposición de cintura y tren inferior",
      tag: "Focus for Her"
    },
    {
      url: "https://thefocusplan.com/IMAGENES/ANTES-DESPUES/VANIA%20DESPUES%201%20CORREGIDO.png",
      caption: "Vania - Cambio estético y hábitos",
      tag: "Focus for Her"
    }
  ];

  const whatsappTestimonials = [
    {
      author: "Héctor",
      time: "10:24 AM",
      text: "He bajado como 6 kilos, pero he subido músculo, así que no sé bien, pero he bajado 2 tallas. Ya me veo más compacto y con mucha más fuerza en las series pesadas.",
      tag: "Recomposición Corporal",
      verified: true
    },
    {
      author: "Oscar",
      time: "8:12 PM",
      text: "Primeros 5k después como de 7 años en 35:24, ahora sí sin pausas de nada. Puro cardio con inclinación en caminadora después de las pesas como me programaste.",
      tag: "Resistencia Cardiovascular",
      verified: true
    },
    {
      author: "Lalichi",
      time: "2:40 PM",
      text: "Ya me toca jugar contra jóvenes de 20 años y sigo el ritmo sin problemas. Fueron 6 juegos, 3 ayer y 3 hoy, y las piernas aguantan todo el partido.",
      tag: "Rendimiento Deportivo",
      verified: true
    },
    {
      author: "Vania",
      time: "6:50 PM",
      text: "Coach!! Hoy me probé unos jeans que no me entraban desde hace año y medio y me cerraron sueltos! Mil gracias por las correcciones técnicas en video de la app.",
      tag: "Disminución de Tallas",
      verified: true
    },
    {
      author: "Katie",
      time: "11:05 AM",
      text: "Mi postura se siente mucho mejor y confío más en mí misma para hacer una sentadilla más profunda. Y ya saco mis primeras dominadas estrictas!",
      tag: "Fuerza Femenina",
      verified: true
    },
    {
      author: "Eliot",
      time: "7:18 PM",
      text: "Siento que está dando resultados la rutina, he podido mantener el mismo peso en todo, me siento con energía. ¡Gracias a ti! Eres parte esencial en esta transformación.",
      tag: "Aumento de Masa Muscular",
      verified: true
    }
  ];

  // Synthesize realistic subtle audio playback simulation
  const toggleVoiceNote = (id: string) => {
    if (playingAudioId === id) {
      // Stop
      if (oscillatorRef.current) {
        try {
          oscillatorRef.current.stop();
          oscillatorRef.current.disconnect();
        } catch (_) {}
      }
      setPlayingAudioId(null);
      return;
    }

    // Stop existing
    if (oscillatorRef.current) {
      try {
        oscillatorRef.current.stop();
        oscillatorRef.current.disconnect();
      } catch (_) {}
    }

    setPlayingAudioId(id);

    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioCtx) {
        const ctx = new AudioCtx();
        audioContextRef.current = ctx;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(260, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(320, ctx.currentTime + 0.3);
        gain.gain.setValueAtTime(0.05, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 3.0);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        oscillatorRef.current = osc;
        gainNodeRef.current = gain;

        // Auto finish after short demo
        setTimeout(() => {
          setPlayingAudioId(prev => (prev === id ? null : prev));
        }, 8000);
      }
    } catch (e) {
      console.warn("Audio playback simulation notice:", e);
    }
  };

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

  return (
    <section id="testimonios" className="py-20 md:py-28 bg-[#0B0B0B]/85 relative z-20 border-t border-b border-olive/20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Main Header: TESTIMONIOS (blanco) FOCUS (verde) */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-olive/10 border border-olive/30 rounded-sm mb-4">
            <Sparkles size={14} className="text-olive animate-pulse" />
            <span className="text-[10px] md:text-xs font-black tracking-[0.25em] text-olive uppercase">
              {language === 'es' ? 'RESULTADOS REALES COMPROBADOS' : 'PROVEN REAL RESULTS'}
            </span>
          </div>
          
          <h2 className="stencil text-4xl sm:text-5xl md:text-7xl tracking-tight mb-4">
            <span className="text-white">TESTIMONIOS</span> <span className="text-olive">FOCUS</span>
          </h2>
          <div className="w-20 h-1 bg-olive mx-auto mb-4" />
          <p className="text-smoke/70 text-sm md:text-base font-medium max-w-2xl mx-auto">
            {language === 'es'
              ? 'Conoce las historias de quienes decidieron dejar las excusas y transformaron su cuerpo, rendimiento y mentalidad con nuestro método.'
              : 'Discover the real stories of those who decided to drop excuses and transformed their body, performance, and mindset with our method.'}
          </p>
        </div>

        {/* ============================================================== */}
        {/* 1. EMPEZAMOS CON EL VIDEO, AUDIOS Y FOTOS DE "FOCUS FOR HER"   */}
        {/* ============================================================== */}
        <div className="mb-24 pt-4 border-t border-olive/15">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <div className="inline-block text-[11px] font-black tracking-[0.25em] text-olive uppercase bg-olive/15 border border-olive/30 px-3 py-1 rounded-sm mb-2">
                01 // {language === 'es' ? 'PROGRAMA ESPECIALIZADO' : 'SPECIALIZED PROGRAM'}
              </div>
              <h3 className="stencil text-3xl sm:text-4xl md:text-5xl text-white">
                FOCUS <span className="text-olive">FOR HER</span>
              </h3>
              <p className="text-smoke/70 text-sm md:text-base max-w-2xl mt-2">
                {language === 'es'
                  ? 'Entrenamiento de fuerza inteligente, recomposición de cintura, tonificación de glúteo y salud postural diseñado para mujeres.'
                  : 'Smart strength training, waist trimming, glute toning, and postural health specifically engineered for women.'}
              </p>
            </div>
            
            <a 
              href="https://api.whatsapp.com/send?phone=523318042910&text=¡Hola%20Coach!%20⚡%20Me%20interesa%20iniciar%20mi%20entrenamiento%20en%20el%20programa%20FOCUS%20FOR%20HER."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-tactical py-3 px-6 text-xs md:text-sm font-black tracking-widest uppercase flex items-center justify-center gap-2 self-start md:self-auto shadow-lg"
            >
              <MessageCircle size={16} />
              <span>{language === 'es' ? 'QUIERO MI PLAN FOR HER' : 'JOIN FOCUS FOR HER'}</span>
            </a>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start mb-12">
            {/* Video Focus For Her */}
            <div className="lg:col-span-7 bg-black/60 border border-olive/30 rounded-sm overflow-hidden relative group shadow-2xl">
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

                {/* Video controls overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none flex flex-col justify-between p-4">
                  <div className="flex items-center justify-between pointer-events-auto">
                    <span className="bg-black/70 border border-olive/30 text-olive text-[10px] font-black tracking-widest px-2.5 py-1 uppercase rounded-sm">
                      FOCUS FOR HER • TRAINING SESSION
                    </span>
                    <button
                      onClick={toggleVideoMute}
                      className="w-9 h-9 rounded-full bg-black/70 border border-olive/30 text-smoke hover:text-olive hover:border-olive transition-colors flex items-center justify-center"
                      title={isVideoMuted ? "Activar audio" : "Silenciar audio"}
                    >
                      {isVideoMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                    </button>
                  </div>

                  <div className="flex items-center justify-between pointer-events-auto">
                    <button
                      onClick={toggleVideoPlayback}
                      className="px-4 py-2 bg-olive text-black font-black text-xs tracking-widest uppercase rounded-sm flex items-center gap-2 hover:bg-[#A3B18A] transition-colors"
                    >
                      {isVideoPlaying ? <Pause size={14} /> : <Play size={14} />}
                      <span>{isVideoPlaying ? (language === 'es' ? 'PAUSAR' : 'PAUSE') : (language === 'es' ? 'REPRODUCIR' : 'PLAY')}</span>
                    </button>
                    <span className="text-[11px] text-smoke/70 font-mono">
                      Guadalajara / Online Stenfit
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-[#111210] border-t border-olive/20 flex items-center justify-between">
                <p className="text-xs text-smoke/80 font-medium">
                  {language === 'es' 
                    ? 'Supervisión de técnica, corrección biomecánica y progresión de cargas sin riesgo de lesiones.'
                    : 'Technique supervision, biomechanical correction, and progressive loading without risk of injury.'}
                </p>
              </div>
            </div>

            {/* Audios de Alumnas Focus For Her */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-black tracking-widest text-olive uppercase flex items-center gap-2">
                  <Volume2 size={14} />
                  {language === 'es' ? 'NOTAS DE AUDIO DE ALUMNAS' : 'TRAINEE VOICE NOTES'}
                </span>
                <span className="text-[10px] text-smoke/50 font-mono">AUDIO VERIFICADO</span>
              </div>

              {voiceNotes.map((vn) => {
                const isPlaying = playingAudioId === vn.id;
                return (
                  <div
                    key={vn.id}
                    className={`p-4 rounded-sm border transition-all duration-300 bg-black/60 backdrop-blur-md ${
                      isPlaying 
                        ? 'border-olive shadow-[0_0_20px_rgba(118,132,85,0.25)] bg-olive/10' 
                        : 'border-olive/20 hover:border-olive/40'
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <img 
                        src={vn.avatar} 
                        alt={vn.name}
                        className="w-11 h-11 rounded-full object-cover border border-olive/40 shrink-0"
                        onError={(e) => { e.currentTarget.style.display = 'none'; }}
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h4 className="font-stencil text-base text-white truncate">{vn.name}</h4>
                          <span className="text-[10px] text-olive font-mono">{vn.date}</span>
                        </div>
                        <p className="text-[10px] text-smoke/60 uppercase tracking-widest truncate">{vn.role}</p>
                      </div>
                    </div>

                    {/* Audio Player Bar */}
                    <div className="flex items-center gap-3 p-2.5 bg-[#171914] border border-olive/20 rounded-sm mb-3">
                      <button
                        onClick={() => toggleVoiceNote(vn.id)}
                        className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-transform active:scale-95 ${
                          isPlaying 
                            ? 'bg-olive text-black animate-pulse' 
                            : 'bg-olive/20 text-olive hover:bg-olive hover:text-black'
                        }`}
                      >
                        {isPlaying ? <Pause size={16} /> : <Play size={16} className="ml-0.5" />}
                      </button>

                      {/* Waveform graphic */}
                      <div className="flex-1 flex items-center gap-0.5 h-6 overflow-hidden px-1">
                        {[40, 65, 85, 30, 95, 60, 45, 75, 100, 50, 70, 90, 35, 60, 80, 55, 95, 40, 75, 50, 85, 60, 40, 70, 90, 50].map((h, i) => (
                          <div
                            key={i}
                            className={`flex-1 rounded-full transition-all duration-200 ${
                              isPlaying 
                                ? 'bg-olive' 
                                : 'bg-smoke/30'
                            }`}
                            style={{
                              height: isPlaying ? `${Math.max(20, (h * Math.sin((i + Date.now() / 150)) + 60))}%` : `${h}%`
                            }}
                          />
                        ))}
                      </div>

                      <span className="text-[10px] font-mono text-smoke/70 shrink-0">
                        {isPlaying ? '0:12' : vn.duration}
                      </span>
                    </div>

                    <p className="text-xs text-smoke/80 italic leading-relaxed">
                      "{vn.text}"
                    </p>

                    <div className="mt-2.5 pt-2 border-t border-olive/10 flex items-center justify-between text-[10px]">
                      <span className="text-olive font-black tracking-wider uppercase">{vn.stats}</span>
                      <span className="text-smoke/40 flex items-center gap-1">
                        <CheckCheck size={12} className="text-cyan-400" /> WhatsApp
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Fotos de Focus For Her */}
          <div className="mt-8">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-black tracking-widest text-olive uppercase">
                GALERÍA DE ALUMNAS • FOCUS FOR HER
              </span>
              <span className="text-[10px] text-smoke/50 uppercase">Haz clic para ampliar</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-4">
              {focusForHerPhotos.map((photo, i) => (
                <div
                  key={i}
                  onClick={() => setSelectedPhoto(photo.url)}
                  className="group relative aspect-[3/4] bg-black/60 rounded-sm overflow-hidden border border-olive/20 hover:border-olive cursor-pointer transition-all duration-300 hover:scale-[1.02] shadow-lg"
                >
                  <img
                    src={photo.url}
                    alt={photo.caption}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90 group-hover:opacity-60 transition-opacity" />
                  <div className="absolute bottom-2 left-2 right-2 z-10">
                    <p className="text-[10px] md:text-xs font-bold text-white leading-tight truncate">
                      {photo.caption}
                    </p>
                    <span className="text-[8px] text-olive font-black uppercase tracking-wider">
                      {photo.tag}
                    </span>
                  </div>
                  <div className="absolute top-2 right-2 w-7 h-7 bg-black/60 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-olive border border-olive/30">
                    <Maximize2 size={12} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* 2. SEGUNDO: FOTOS DE ANTES Y DESPUÉS DE LOS ALUMNOS            */}
        {/* ============================================================== */}
        <div className="mb-24 pt-8 border-t border-olive/20">
          <div className="text-center mb-10">
            <div className="inline-block text-[11px] font-black tracking-[0.25em] text-olive uppercase bg-olive/15 border border-olive/30 px-3 py-1 rounded-sm mb-2">
              02 // {language === 'es' ? 'EVIDENCIA VISUAL' : 'VISUAL PROOF'}
            </div>
            <h3 className="stencil text-3xl sm:text-4xl md:text-5xl text-white mb-3">
              FOTOS DE <span className="text-olive">{language === 'es' ? 'ANTES Y DESPUÉS' : 'BEFORE & AFTER'}</span> DE ALUMNOS
            </h3>
            <p className="text-smoke/70 text-xs md:text-sm font-medium tracking-widest uppercase max-w-xl mx-auto">
              {language === 'es'
                ? 'Resultados sostenibles con pesos libres, nutrición flexible y acompañamiento real'
                : 'Sustainable results with free weights, flexible nutrition, and real coaching'}
            </p>
          </div>

          {/* Before & After Interactive Carousel */}
          <div className="relative">
            <TransformationsCarousel language={language} />
          </div>
        </div>

        {/* ============================================================== */}
        {/* 3. TERCERO: LOS TESTIMONIOS DE WHATSAPP                        */}
        {/* ============================================================== */}
        <div className="pt-8 border-t border-olive/20">
          <div className="text-center mb-12">
            <div className="inline-block text-[11px] font-black tracking-[0.25em] text-olive uppercase bg-olive/15 border border-olive/30 px-3 py-1 rounded-sm mb-2">
              03 // {language === 'es' ? 'CONVERSACIONES DIRECTAS' : 'DIRECT CONVERSATIONS'}
            </div>
            <h3 className="stencil text-3xl sm:text-4xl md:text-5xl text-white mb-3">
              TESTIMONIOS DE <span className="text-olive">WHATSAPP</span>
            </h3>
            <p className="text-smoke/70 text-xs md:text-sm font-medium tracking-widest uppercase max-w-xl mx-auto">
              {language === 'es'
                ? 'Mensajes reales de alumnos compartiendo sus victorias semanales con su coach'
                : 'Real messages from trainees sharing their weekly victories with their coach'}
            </p>
          </div>

          {/* WhatsApp Chat Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatsappTestimonials.map((msg, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -4 }}
                className="bg-[#121B14]/90 border border-olive/25 rounded-lg p-5 shadow-xl relative overflow-hidden flex flex-col justify-between"
              >
                {/* Chat Top Bar */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-olive/15">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-olive/20 border border-olive/40 flex items-center justify-center font-stencil text-olive text-sm font-bold">
                      {msg.author.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-white leading-none">{msg.author}</h4>
                      <span className="text-[10px] text-emerald-400 font-mono">En línea</span>
                    </div>
                  </div>
                  <span className="text-[9px] font-mono text-smoke/50">{msg.time}</span>
                </div>

                {/* WhatsApp Chat Bubble */}
                <div className="bg-[#1F2C24] p-3.5 rounded-lg rounded-tl-none border border-emerald-900/40 relative mb-4">
                  {/* Bubble tail */}
                  <div className="absolute -left-1.5 top-0 w-2 h-2 bg-[#1F2C24] border-l border-t border-emerald-900/40 transform -rotate-45" />
                  
                  <p className="text-smoke text-xs sm:text-sm leading-relaxed">
                    "{msg.text}"
                  </p>

                  <div className="flex items-center justify-end gap-1 mt-2 text-[10px] text-smoke/50">
                    <span>{msg.time}</span>
                    <CheckCheck size={14} className="text-cyan-400" />
                  </div>
                </div>

                {/* Footer Tag */}
                <div className="flex items-center justify-between pt-2 border-t border-olive/10">
                  <span className="text-[10px] font-black uppercase tracking-wider text-olive">
                    {msg.tag}
                  </span>
                  <a
                    href="https://api.whatsapp.com/send?phone=523318042910"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] text-smoke/60 hover:text-olive transition-colors flex items-center gap-1 font-mono"
                  >
                    <span>Verificar</span>
                    <ExternalLink size={10} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom WhatsApp Contact CTA */}
          <div className="mt-12 text-center">
            <a
              href="https://api.whatsapp.com/send?phone=523318042910&text=¡Hola%20Coach!%20⚡%20Vi%20los%20testimonios%20en%20la%20página%20y%20me%20gustaría%20iniciar%20mi%20evaluación."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-olive text-black hover:bg-[#A3B18A] transition-all font-black text-xs md:text-sm tracking-widest uppercase px-8 py-4 rounded-sm shadow-[0_0_30px_rgba(118,132,85,0.3)] hover:-translate-y-0.5"
            >
              <MessageCircle size={18} />
              <span>{language === 'es' ? 'CONVERSAR DIRECTO CON EL COACH EN WHATSAPP' : 'CHAT DIRECTLY WITH THE COACH ON WHATSAPP'}</span>
            </a>
          </div>
        </div>

      </div>

      {/* Modal for viewing photo zoom */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
          >
            <div className="relative max-w-2xl w-full max-h-[85vh] flex items-center justify-center">
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-black/70 border border-olive text-white flex items-center justify-center hover:bg-olive hover:text-black transition-colors"
              >
                <X size={20} />
              </button>
              <img
                src={selectedPhoto}
                alt="Ampliación Alumna Focus"
                className="max-w-full max-h-[80vh] object-contain rounded-md border border-olive/30 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
