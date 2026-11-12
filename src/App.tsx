/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Dumbbell, 
  ChevronRight, 
  Check, 
  Calendar, 
  Users, 
  Smartphone, 
  FileText, 
  TrendingUp, 
  Clock, 
  MessageSquare,
  Zap,
  Target,
  Globe,
  Menu,
  X,
  Music,
  Minus,
  MapPin,
  Sparkles,
  Download,
  MessageCircle
} from "lucide-react";
import { HyroxGuide } from "./components/HyroxGuide";
import { StenfitGuide } from "./components/StenfitGuide";
import { TransformationsCarousel } from "./components/TransformationsCarousel";

import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { CoachesSection } from './components/CoachesSection';
import { ProgramModal, ProgramType } from './components/ProgramModal';
import { FocusForHerView } from './components/FocusForHerView';
import { generateRoutinePDF } from './utils/routinePdf';

type Language = 'es' | 'en';
type ViewType = 'home' | 'programas' | 'clases' | 'hyrox' | 'stenfit' | 'focus-for-her';

const translations = {
  es: {
    nav: {
      home: "Inicio",
      programs: "Planes online",
      presencial: "Clases presenciales",
      hyrox: "Hyrox Training",
      stenfit: "Stenfit",
      comunidad: "Comunidad",
      contact: "CONTACTAR"
    },
    hero: {
      status: "[ ELIMINANDO TUS EXCUSAS ]",
      title: "YOU ALWAYS STAY",
      subtitle: "FOCUSED",
      explanation_p1: "Te voy a ayudar a bajar % de grasa y ganar músculo en menos de 90 días.",
      explanation_p2: "A través de un programa de entrenamiento 100% personalizado a tus objetivos, horarios y estilo de vida, trabajaremos para que consigas resultados reales sin tener que sacrificar tu vida para conseguirlos.",
      explanation_p3: "Tu progreso es importante. Pero aprender a mantenerlo es lo que realmente hace la diferencia.",
      cta_primary: "ELIGE TU PROTOCOLO",
      buttons: {
        her: "FOCUS FOR HER",
        him: "FOCUS FOR HIM",
        hyrox: "FOCUS FOR HYROX"
      },
      rutina_gratis: {
        title: "RUTINA GRATIS DEL MES",
        badge: "DESCARGA INMEDIATA EN PDF",
        subtitle: "Entrena con nuestro protocolo táctico de fuerza, recomposición y conditioning. Descárgala o personalízala con tu coach.",
        btn_download: "Descargar rutina",
        btn_customize: "La quiero personalizar",
        whatsapp_message: "¡Hola Coach! ⚡ Descargué la rutina gratis del mes y quiero personalizar mi plan de entrenamiento con Focus Plan."
      },
      promo_banner: {
        badge: "PROMOCIÓN ESPECIAL • RUTINA GRATIS",
        cta: "SOLICITAR RUTINA GRATIS POR WHATSAPP",
        whatsapp_message: "¡Hola Coach! ⚡ Vi la promoción en la página y me gustaría solicitar mi rutina gratis de Focus Plan."
      }
    },
    about: {
      title: "¿POR QUÉ ENTRENAR",
      title_accent: "CON FOCUS ONLINE?",
      items: [
        {
          title: "Atención real en cada entrenamiento",
          description: "Aquí no eres uno más. Cada sesión tiene supervisión directa, corrección técnica y enfoque en que realmente progreses."
        },
        {
          title: "Entrenamientos adaptados a ti",
          description: "Aunque entrenes en grupo, cada persona trabaja con ajustes según su nivel, objetivos y capacidades."
        },
        {
          title: "Técnica antes que todo",
          description: "Nos aseguramos de que ejecutes bien cada movimiento para evitar lesiones y maximizar resultados."
        },
        {
          title: "Entrenamientos efectivos, no eternos",
          description: "Sesiones bien estructuradas para que aproveches tu tiempo y obtengas resultados reales."
        },
        {
          title: "Más que entrenamiento, una comunidad",
          description: "En FOCUS no solo vienes a entrenar. Formas parte de un entorno donde hay apoyo, confianza y un objetivo en común."
        },
        {
          title: "Resultados que se sienten y se ven",
          description: "Mejoras en fuerza, condición, físico y seguridad personal desde las primeras semanas."
        }
      ]
    },
    programs: {
      title: "ENTRENAMIENTO EN",
      title_accent: "LÍNEA Y PLANES",
      subtitle: "Estar presente no significa necesariamente estar físicamente al lado de alguien. Por eso, con nuestro entrenamiento en línea encontrarás mucho más que una rutina de entrenamiento convencional: tendrás un plan de training totalmente personalizado, seguimiento constante por tu coach y acompañamiento real durante todo tu proceso. Entrena desde cualquier parte del mundo, a tu propio ritmo y prepárate para tus metas o competiciones de HYROX con la tranquilidad de que nunca estarás solo.",
      essential: {
        title: "ESSENTIAL",
        phase: "Phase 01: Core Systems",
        price: "$300",
        unit: "MXN / Mes",
        description: "El plan ESSENTIAL de entrenamiento en línea es ideal para gente que busca un plan de training personalizado con lo necesario para avanzar en sus objetivos",
        features: [
          "Valoración inicial",
          "Plan personalizado a tus objetivos de entrenamiento",
          "Acceso ilimitado a la app",
          "PDF de regalo con conceptos básicos para tu plan",
          "Checklist de regalo \"hábitos diarios\" (formato descargable)",
          "Seguimiento y ajustes de plan 1 vez por mes",
          "Interacción vía WA solo en horario establecido (L-V de 6-8 pm)"
        ],
        cta: "INICIAR PROTOCOLO"
      },
      focused: {
        title: "FOCUSED",
        phase: "Phase 02: Elite Ops",
        badge: "Most Active Mission",
        price: "$500",
        old_price: "$700",
        unit: "MXN / Mes",
        description: "El plan FOCUSED de entrenamiento en línea no solo es entrenamiento, es acompañamiento de tu coach en tiempo real que garantiza resultados de alto rendimiento",
        features: [
          "Valoración inicial + ajustes constantes",
          "Plan personalizado a tus objetivos de training",
          "Acceso ilimitado a la app",
          "PDF de regalo con conceptos básicos para tu plan",
          "Checklist de regalo \"hábitos diarios\" (formato descargable)",
          "Seguimiento diario y modificaciones/ajustes semanales",
          "Interacción vía WA (dudas, cambios, videos, etc...) sin restricciones de horario",
          "Revisión técnica de ejercicios",
          "Acceso prioritario a mensajes",
          "Material exclusivo (retos hyrox, rutinas abs, consejos fit)",
          "Agenda de sesión 1:1 online (videollamada 10-15 de revisión)"
        ],
        cta: "MAXIMIZAR RENDIMIENTO"
      },
      offers: {
        banner_title: "INICIA HOY CON 2 SEMANAS DE PRUEBA GRATIS",
        banner_subtitle: "AL CONTRATAR TU PLAN ESSENTIAL O FOCUSED"
      },
      promo_banner: {
        badge: "PROMOCIÓN ESPECIAL • RUTINA GRATIS",
        cta: "SOLICITAR RUTINA GRATIS POR WHATSAPP",
        whatsapp_message: "¡Hola Coach! ⚡ Me interesa solicitar la promoción de la rutina gratis de Focus Plan."
      },
      platform: {
        disclaimer: "Todos los planes online son enlazados a través de nuestra plataforma oficial. Una vez realizada tu suscripción, se te entregará tu acceso. Para conocer más sobre el uso de la app, visita la sección STENFIT.",
        cta: "VER TUTORIAL STENFIT"
      }
    },
    clases: {
      subtitle: "Ubicación Física en Guadalajara",
      title: "CLASES CON COACH EN",
      title_accent: "GUADALAJARA",
      description: "Entrena con nosotros de manera presencial con sesiones de training completamente adaptadas a tus objetivos, nivel y experiencia por un coach en Guadalajara calificado. Ya sea que busques ganar fuerza, prepararte para HYROX, mejorar tu condición física o tu técnica de entrenamiento, trabajaremos juntos de forma segura y efectiva. Actualmente, el servicio presencial está disponible únicamente dentro de Zapopan y la Zona Metropolitana de Guadalajara.",
      individual_title: "POR CLASE",
      individual_subtitle: "1-4 personas",
      group_title: "MENSUALIDAD",
      group_subtitle: "5 clases a la semana",
      group_promo: "*precio especial por grupo*",
      group_promo_desc: "Pregunta por las promociones grupales",
      coaches_subtitle: "NUESTRO EQUIPO",
      coaches_title: "ENTRENADORES",
      items: [
        { name: "1 clase", subname: "", price: "$450", meta: "Precio Regular" },
        { name: "2 clases x semana", subname: "", price: "$600", meta: "$300 x clase" },
        { name: "12 clases x mes", subname: "", price: "$2,500", meta: "$210 x clase" },
        { name: "Paquete \"FOCUSED\"", subname: "1 persona", price: "$3,500", meta: "$175 x clase" },
        { name: "Paquete \"PARTNERS\"", subname: "2 personas", price: "$2,500 c/u", meta: "$125 x clase" },
        { name: "Paquete \"THIRDS\"", subname: "3 personas", price: "$2,200 c/u", meta: "$110 x clase" },
        { name: "Paquete \"GANGS\"", subname: "4-6 personas", price: "$1,800 c/u", meta: "$90 x clase" }
      ]
    },
    quote: {
      text: "\"La diferencia entre lo imposible y lo posible reside en la determinación de una persona.\"",
      community: "FOCUS BOX COMMUNITY"
    },
    footer: {
      description: "El primer centro de entrenamiento táctico dedicado a la transformación mental y física total.",
      seo_text: "Centro de entrenamiento de alto rendimiento. Clases presenciales y preparación HYROX en Guadalajara y Zapopan. Cursos online de entrenamiento físico a través de la plataforma Stenfit. Programas de fuerza, resistencia y acondicionamiento. Entrenamiento presencial en Guadalajara, Zapopan, Tlaquepaque, Tonalá y Tlajomulco.",
      address: "Guadalajara y Zapopan, Jalisco, MX",
      hours_title: "Horarios",
      hours_weekdays: "Lunes a Viernes: 6:00 AM - 10:00 PM",
      hours_weekends: "Sábado: 8:00 AM - 2:00 PM",
      map: "Mapa Base",
      contact_title: "Contacto Inmediato",
      rights: "© 2026 FOCUS BOX & FITNESS // TODOS LOS DERECHOS RESERVADOS // ALPHA DIVISION"
    },
    intel: {
      title: "FEED DE",
      title_accent: "INTELIGENCIA",
      subtitle: "Actividad reciente en el campo de entrenamiento.",
      instagram_link: "Sigue la Operación en Instagram"
    },
    ui: {
      minimize: "Minimizar",
      close: "Cerrar",
      branding: "ALPHA OPERATIONAL SYSTEM V2.5"
    }
  },
  en: {
    nav: {
      home: "Home",
      programs: "Online Plans",
      presencial: "On-site Classes",
      hyrox: "Hyrox Training",
      stenfit: "Stenfit",
      comunidad: "Community",
      contact: "CONTACT"
    },
    hero: {
      status: "[ ELIMINATING YOUR EXCUSES ]",
      title: "YOU ALWAYS STAY",
      subtitle: "FOCUSED",
      explanation_p1: "I will help you lower body fat % and gain muscle in less than 90 days.",
      explanation_p2: "Through a 100% personalized workout program tailored to your goals, schedules, and lifestyle, we will work so you get real results without having to sacrifice your life to achieve them.",
      explanation_p3: "Your progress is important. But learning how to maintain it is what truly makes the difference.",
      cta_primary: "SELECT YOUR PROTOCOL",
      buttons: {
        her: "FOCUS FOR HER",
        him: "FOCUS FOR HIM",
        hyrox: "FOCUS FOR HYROX"
      },
      rutina_gratis: {
        title: "FREE ROUTINE OF THE MONTH",
        badge: "INSTANT PDF DOWNLOAD",
        subtitle: "Train with our tactical protocol for strength, recomposition, and conditioning. Download it or customize it with your coach.",
        btn_download: "Download routine",
        btn_customize: "I want to customize it",
        whatsapp_message: "Hello Coach! ⚡ I downloaded the free routine of the month and I want to customize it for my goals with Focus Plan."
      },
      promo_banner: {
        badge: "SPECIAL PROMOTION • FREE ROUTINE",
        cta: "CLAIM FREE ROUTINE VIA WHATSAPP",
        whatsapp_message: "Hello Coach! ⚡ I saw the promotion on the website and would like to claim my free routine from Focus Plan."
      }
    },
    about: {
      title: "WHY TRAIN",
      title_accent: "WITH FOCUS ONLINE?",
      items: [
        {
          title: "Real attention in every workout",
          description: "You're not just another number here. Each session features direct supervision, technical correction, and a focus on your actual progress."
        },
        {
          title: "Workouts adapted to you",
          description: "Even when training in a group, each person works with adjustments according to their level, goals, and capabilities."
        },
        {
          title: "Technique above all",
          description: "We make sure you execute every movement well to avoid injuries and maximize results."
        },
        {
          title: "Effective workouts, not endless ones",
          description: "Well-structured sessions so you can make the most of your time and get real results."
        },
        {
          title: "More than a workout, a community",
          description: "At FOCUS, you don't just come to train. You become part of an environment characterized by support, trust, and a shared goal."
        },
        {
          title: "Results you can feel and see",
          description: "Improvements in strength, conditioning, physique, and personal confidence from the very first weeks."
        }
      ]
    },
    programs: {
      title: "ONLINE",
      title_accent: "PLANS",
      subtitle: "Being present does not necessarily mean being physically next to someone. Because of this, at FOCUS Online you will find much more than a training routine: you will have a personalized plan, constant tracking, and real accompaniment throughout your whole process. Train from anywhere in the world, at your own pace, and with the peace of mind knowing you will never be alone on the path to your goals.",
      essential: {
        title: "ESSENTIAL",
        phase: "Phase 01: Core Systems",
        price: "$30",
        unit: "USD / Month",
        description: "The ESSENTIAL plan is ideal for people looking for a personalized plan with what's necessary to advance in their goals",
        features: [
          "Initial assessment",
          "Personalized plan tailored to your goals",
          "Unlimited access to the app",
          "Complimentary PDF with basic concepts for your plan",
          "Complimentary 'daily habits' checklist (downloadable format)",
          "Tracking and plan adjustments once a month",
          "WA interaction only during set hours (Mon-Fri 6-8 pm)"
        ],
        cta: "START PROTOCOL"
      },
      focused: {
        title: "FOCUSED",
        phase: "Phase 02: Elite Ops",
        badge: "Most Active Mission",
        price: "$50",
        old_price: "$70",
        unit: "USD / Month",
        description: "The FOCUSED plan is not just training; it's real-time accompaniment that guarantees results",
        features: [
          "Initial assessment + constant adjustments",
          "Personalized plan tailored to your goals",
          "Unlimited access to the app",
          "Complimentary PDF with basic concepts for your plan",
          "Complimentary 'daily habits' checklist (downloadable format)",
          "Daily tracking and weekly modifications/adjustments",
          "WA interaction (questions, changes, videos, etc...) with no time restrictions",
          "Technical review of exercises",
          "Priority message access",
          "Exclusive material (hyrox challenges, abs routines, fit tips)",
          "1:1 online session scheduling (10-15 min review video call)"
        ],
        cta: "MAXIMIZE PERFORMANCE"
      },
      offers: {
        banner_title: "START TODAY WITH A 2-WEEK FREE TRIAL",
        banner_subtitle: "WHEN YOU GET THE ESSENTIAL OR FOCUSED PLAN"
      },
      promo_banner: {
        badge: "SPECIAL PROMOTION • FREE ROUTINE",
        cta: "CLAIM FREE ROUTINE VIA WHATSAPP",
        whatsapp_message: "Hello Coach! ⚡ I am interested in claiming the free routine promotion from Focus Plan."
      },
      platform: {
        disclaimer: "All digital missions are linked through our official platform. Once your subscription is made, you will receive your access. To learn more about using the app, visit the STENFIT section.",
        cta: "VIEW STENFIT TUTORIAL"
      }
    },
    clases: {
      subtitle: "Physical Location",
      title: "ON-SITE",
      title_accent: "CLASSES",
      individual_title: "PER CLASS",
      individual_subtitle: "1-4 people",
      group_title: "MONTHLY",
      group_subtitle: "5 classes per week",
      group_promo: "*special group price*",
      group_promo_desc: "Ask about group promotions",
      coaches_subtitle: "OUR TEAM",
      coaches_title: "COACHES",
      items: [
        { name: "1 class", subname: "", price: "$450", meta: "Regular Price" },
        { name: "2 classes x week", subname: "", price: "$600", meta: "$300 x class" },
        { name: "12 classes x month", subname: "", price: "$2,500", meta: "$210 x class" },
        { name: "Package \"FOCUSED\"", subname: "1 person", price: "$3,500", meta: "$175 x class" },
        { name: "Package \"PARTNERS\"", subname: "2 people", price: "$2,500 ea", meta: "$125 x class" },
        { name: "Package \"THIRDS\"", subname: "3 people", price: "$2,200 ea", meta: "$110 x class" },
        { name: "Package \"GANGS\"", subname: "4-6 people", price: "$1,800 ea", meta: "$90 x class" }
      ]
    },
    quote: {
      text: "\"The difference between the impossible and the possible lies in a person's determination.\"",
      community: "FOCUS BOX COMMUNITY"
    },
    footer: {
      description: "The first tactical training center dedicated to total mental and physical transformation.",
      seo_text: "High-performance training center. In-person physical training classes and HYROX preparation in Guadalajara and Zapopan. Online physical training courses through the Stenfit platform. Strength, endurance, and physical conditioning programs. In-person training in Guadalajara, Zapopan, Tlaquepaque, Tonalá, and Tlajomulco.",
      address: "Guadalajara and Zapopan, Jalisco, MX",
      hours_title: "Hours",
      hours_weekdays: "Monday to Friday: 6:00 AM - 10:00 PM",
      hours_weekends: "Saturday: 8:00 AM - 2:00 PM",
      map: "Base Map",
      contact_title: "Immediate Contact",
      rights: "© 2026 FOCUS BOX & FITNESS // ALL RIGHTS RESERVED // ALPHA DIVISION"
    },
    intel: {
      title: "INTEL",
      title_accent: "FEED",
      subtitle: "Recent activity from the training grounds.",
      instagram_link: "Follow the Operation on Instagram"
    },
    ui: {
      minimize: "Minimize",
      close: "Close",
      branding: "ALPHA OPERATIONAL SYSTEM V2.5"
    }
  }
};

const COLORS = {
  primary: "#768455",
  black: "#0B0B0B",
  smoke: "#F2F2F2",
  accent: "#A3B18A",
};

const TopoBackground = () => (
  <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none opacity-20">
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="topo" width="200" height="200" patternUnits="userSpaceOnUse">
          <path d="M0 20C40 10 60 50 100 40C140 30 160 70 200 60" fill="none" stroke={COLORS.primary} strokeWidth="0.5" />
          <path d="M0 60C50 50 70 90 120 80C170 70 190 110 200 100" fill="none" stroke={COLORS.primary} strokeWidth="0.5" />
          <path d="M0 100C30 90 50 130 90 120C130 110 150 150 200 140" fill="none" stroke={COLORS.primary} strokeWidth="0.5" />
          <path d="M0 140C60 130 80 170 140 160C200 150 220 190 200 180" fill="none" stroke={COLORS.primary} strokeWidth="0.5" />
          <path d="M0 180C40 170 60 210 100 200" fill="none" stroke={COLORS.primary} strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#topo)" />
    </svg>
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0B0B0B]/50 to-[#0B0B0B]" />
  </div>
);

const Logo = ({ className = "" }: { className?: string }) => (
  <div className={`relative flex items-center justify-center ${className}`}>
    <div className="w-32 h-32 flex items-center justify-center overflow-hidden">
      <img 
        src="https://thefocusplan.com/IMAGENES/LOGO%20FOCUS%20-%20SIN%20FONDO.png" 
        alt="Logo The Focus Plan" 
        className="w-full h-full object-contain"
        referrerPolicy="no-referrer"
      />
    </div>
  </div>
);

const WhatsAppButton = ({ label, featured = false }: { label: string, featured?: boolean }) => {
  const message = encodeURIComponent("¡Hola Team Focus! ⚡ Me interesa la prueba gratis de 2 semanas del plan y me gustaría más información.");
  return (
    <a 
      href={`https://api.whatsapp.com/send?phone=523318042910&text=${message}`} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`w-full py-4 text-center text-sm font-black tracking-[0.3em] transition-all flex items-center justify-center gap-2 rounded-sm uppercase ${
        featured 
          ? "bg-[#768455] text-[#0B0B0B] hover:bg-[#A3B18A]" 
          : "border-2 border-[#768455] text-[#768455] hover:bg-[#768455] hover:text-black"
      }`}
    >
      {label}
    </a>
  );
};

const getViewFromUrl = (): ViewType => {
  if (typeof window === 'undefined') return 'home';
  // Parse hash (e.g. #planes-online, #programas, #clases, #hyrox, #stenfit, #focus-for-her)
  const hash = window.location.hash.toLowerCase().replace(/^#\/?/, '').trim();
  
  // Parse query params (e.g. ?seccion=planes-online, ?view=programas, ?p=planes)
  const params = new URLSearchParams(window.location.search);
  const param = (params.get('seccion') || params.get('view') || params.get('p') || params.get('page') || '').toLowerCase().trim();
  
  const target = hash || param;

  if (['focus-for-her', 'focusforher', 'her', 'feel-like-yourself', 'feel-like-yourself-again'].includes(target)) {
    return 'focus-for-her';
  }
  if (['programas', 'planes', 'planes-online', 'online', 'rutina-gratis', 'rutinagratis', 'promocion', 'promo'].includes(target)) {
    return 'programas';
  }
  if (['clases', 'presencial', 'clases-presenciales', 'guadalajara', 'zapopan'].includes(target)) {
    return 'clases';
  }
  if (['hyrox', 'hyrox-training', 'hyroxguide'].includes(target)) {
    return 'hyrox';
  }
  if (['stenfit', 'app', 'tutorial'].includes(target)) {
    return 'stenfit';
  }
  return 'home';
};

export default function App() {
  const [currentView, setCurrentView] = useState<ViewType>(() => getViewFromUrl());
  const [language, setLanguage] = useState<Language>('es');
  const [isDesktopMenuOpen, setIsDesktopMenuOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMusicOpen, setIsMusicOpen] = useState(false);
  const [showMusicFab, setShowMusicFab] = useState(true);
  const [spotifyUser, setSpotifyUser] = useState<any>(null);
  const [spotifyToken, setSpotifyToken] = useState<string | null>(localStorage.getItem('spotify_token'));

  // Client request states: 3 programs & free routine PDF
  const [selectedProgram, setSelectedProgram] = useState<ProgramType>(null);
  const [isDownloadingPdf, setIsDownloadingPdf] = useState(false);
  const [pdfDownloadSuccess, setPdfDownloadSuccess] = useState(false);

  const desktopMenuRef = useRef<HTMLDivElement>(null);

  const handleDownloadRoutine = () => {
    setIsDownloadingPdf(true);
    try {
      generateRoutinePDF();
      setPdfDownloadSuccess(true);
      setTimeout(() => setPdfDownloadSuccess(false), 5000);
    } catch (err) {
      console.error("Error downloading routine PDF:", err);
    } finally {
      setIsDownloadingPdf(false);
    }
  };

  const scrollToFocusForHer = () => {
    const el = document.getElementById('testimonios');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (desktopMenuRef.current && !desktopMenuRef.current.contains(event.target as Node)) {
        setIsDesktopMenuOpen(false);
      }
    };

    if (isDesktopMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDesktopMenuOpen]);

  useEffect(() => {
    // Listen for Spotify Auth success message
    const handleSpotifyMessage = (event: MessageEvent) => {
      if (event.data?.type === 'SPOTIFY_AUTH_SUCCESS') {
        const { access_token } = event.data.payload;
        setSpotifyToken(access_token);
        localStorage.setItem('spotify_token', access_token);
        fetchSpotifyProfile(access_token);
      }
    };

    window.addEventListener('message', handleSpotifyMessage);
    return () => window.removeEventListener('message', handleSpotifyMessage);
  }, []);

  const fetchSpotifyProfile = async (token: string) => {
    try {
      const response = await fetch('/api/spotify/me', {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (response.ok) {
        const data = await response.json();
        setSpotifyUser(data);
      } else if (response.status === 401) {
        setSpotifyToken(null);
        localStorage.removeItem('spotify_token');
        setSpotifyUser(null);
      }
    } catch (err) {
      console.error("Failed to fetch Spotify profile:", err);
    }
  };

  useEffect(() => {
    if (spotifyToken) {
      fetchSpotifyProfile(spotifyToken);
    }
  }, []);

  const loginWithSpotify = async () => {
    try {
      const response = await fetch('/api/auth/spotify/url');
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to get auth URL");
      }
      const { url } = await response.json();
      if (!url) throw new Error("Auth URL is empty");
      window.open(url, 'spotify_login', 'width=600,height=800');
    } catch (err) {
      console.error("Failed to start Spotify login:", err);
      alert("Error: Asegúrate de configurar SPOTIFY_CLIENT_ID y SPOTIFY_CLIENT_SECRET en la configuración del proyecto.");
    }
  };

  const logoutSpotify = () => {
    setSpotifyToken(null);
    setSpotifyUser(null);
    localStorage.removeItem('spotify_token');
  };

  useEffect(() => {
    // Phase 1: Robust Browser Language Detection
    const browserLang = navigator.language.split('-')[0];
    if (browserLang === 'en') {
      setLanguage('en');
    } else if (browserLang === 'es') {
      setLanguage('es');
    }

    // Phase 2: Geographic Detection via IP (USA/Europe -> English)
    const detectLocation = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        
        const countryCode = data.country_code; // e.g., 'US', 'GB', 'DE', 'FR'
        const continentCode = data.continent_code; // e.g., 'NA', 'EU'

        // If in USA or Europe continent, default to English
        if (countryCode === 'US' || continentCode === 'EU') {
          setLanguage('en');
        }
      } catch (error) {
        console.warn("Geographic detection failed, falling back to browser language:", error);
      }
    };

    detectLocation();
  }, []);

  useEffect(() => {
    const handleUrlChange = () => {
      const detectedView = getViewFromUrl();
      setCurrentView(detectedView);
    };

    window.addEventListener('hashchange', handleUrlChange);
    window.addEventListener('popstate', handleUrlChange);
    return () => {
      window.removeEventListener('hashchange', handleUrlChange);
      window.removeEventListener('popstate', handleUrlChange);
    };
  }, []);

  const t = translations[language];

  const navigateTo = (view: ViewType) => {
    setCurrentView(view);
    setIsMenuOpen(false);
    setIsDesktopMenuOpen(false);

    const hashMapping: Record<string, string> = {
      home: '',
      programas: 'planes-online',
      clases: 'clases-presenciales',
      hyrox: 'hyrox',
      stenfit: 'stenfit',
      'focus-for-her': 'focus-for-her'
    };

    const targetHash = hashMapping[view];
    if (targetHash) {
      window.history.pushState(null, '', `#${targetHash}`);
    } else {
      window.history.pushState(null, '', window.location.pathname + window.location.search);
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'es' ? 'en' : 'es');
  };

  return (
    <div className="min-h-screen text-[#F2F2F2] selection:bg-[#768455] selection:text-[#0B0B0B] overflow-x-hidden">
      <div className="fixed inset-0 bg-[#0B0B0B] z-[-2]" />
      <div className="topo-bg-pattern opacity-10" />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#0B0B0B]/90 backdrop-blur-md border-b border-olive/20 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <button 
            onClick={() => navigateTo('home')}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity z-50"
          >
             <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-olive flex items-center justify-center overflow-hidden">
                <Logo className="scale-[0.25] md:scale-[0.3]" />
             </div>
             <span className="font-stencil text-xl md:text-2xl tracking-tighter">FOCUS</span>
          </button>
          
          <div className="hidden md:flex items-center gap-6">
            
            {/* Dynamic Menu Dropdown */}
            <div 
              ref={desktopMenuRef}
              className="relative group"
              onMouseEnter={() => setIsDesktopMenuOpen(true)}
              onMouseLeave={() => setIsDesktopMenuOpen(false)}
            >
              <button 
                className={`flex items-center gap-2 hover:text-olive transition-colors font-black tracking-widest uppercase text-[15px] py-2 ${isDesktopMenuOpen ? 'text-olive' : ''}`}
              >
                <Menu size={18} />
                <span>{language === 'es' ? 'MENÚ' : 'MENU'}</span>
              </button>
              
              {/* Dropdown Content */}
              <div 
                className={`absolute top-full left-0 pt-4 transition-all duration-300 w-56 ${isDesktopMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
              >
                <div className="bg-[#0B0B0B]/95 backdrop-blur-xl border border-olive/20 rounded-sm p-5 flex flex-col gap-6 shadow-2xl relative overflow-hidden">
                  {/* Tactical decorative elements */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-olive/10 blur-xl rounded-full" />
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-olive/20" />
                  
                  <button 
                    onClick={() => navigateTo('home')} 
                    className={`text-left text-sm font-black tracking-widest uppercase hover:text-olive transition-colors flex items-center justify-between group/item ${currentView === 'home' ? 'text-olive' : 'text-smoke/80'}`}
                  >
                    <span>{t.nav.home}</span>
                    <ChevronRight size={14} className={`opacity-0 -translate-x-2 transition-all group-hover/item:opacity-100 group-hover/item:translate-x-0 ${currentView === 'home' ? 'opacity-100 translate-x-0' : ''}`} />
                  </button>
                  <button 
                    onClick={() => navigateTo('focus-for-her')} 
                    className={`text-left text-sm font-black tracking-widest uppercase hover:text-[#F5C443] transition-colors flex items-center justify-between group/item ${currentView === 'focus-for-her' ? 'text-[#F5C443]' : 'text-smoke/80'}`}
                  >
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F5C443]" />
                      <span>FOCUS FOR HER</span>
                    </span>
                    <ChevronRight size={14} className={`opacity-0 -translate-x-2 transition-all group-hover/item:opacity-100 group-hover/item:translate-x-0 ${currentView === 'focus-for-her' ? 'opacity-100 translate-x-0' : ''}`} />
                  </button>
                  <button 
                    onClick={() => navigateTo('programas')} 
                    className={`text-left text-sm font-black tracking-widest uppercase hover:text-olive transition-colors flex items-center justify-between group/item ${currentView === 'programas' ? 'text-olive' : 'text-smoke/80'}`}
                  >
                    <span>{t.nav.programs}</span>
                    <ChevronRight size={14} className={`opacity-0 -translate-x-2 transition-all group-hover/item:opacity-100 group-hover/item:translate-x-0 ${currentView === 'programas' ? 'opacity-100 translate-x-0' : ''}`} />
                  </button>
                  <button 
                    onClick={() => navigateTo('clases')} 
                    className={`text-left text-sm font-black tracking-widest uppercase hover:text-olive transition-colors flex items-center justify-between group/item ${currentView === 'clases' ? 'text-olive' : 'text-smoke/80'}`}
                  >
                    <span>{t.nav.presencial}</span>
                    <ChevronRight size={14} className={`opacity-0 -translate-x-2 transition-all group-hover/item:opacity-100 group-hover/item:translate-x-0 ${currentView === 'clases' ? 'opacity-100 translate-x-0' : ''}`} />
                  </button>
                  <button 
                    onClick={() => navigateTo('hyrox')} 
                    className={`text-left text-sm font-black tracking-widest uppercase hover:text-olive transition-colors flex items-center justify-between group/item ${currentView === 'hyrox' ? 'text-olive' : 'text-smoke/80'}`}
                  >
                    <span>{t.nav.hyrox}</span>
                    <ChevronRight size={14} className={`opacity-0 -translate-x-2 transition-all group-hover/item:opacity-100 group-hover/item:translate-x-0 ${currentView === 'hyrox' ? 'opacity-100 translate-x-0' : ''}`} />
                  </button>
                </div>
              </div>
            </div>

            <div className="h-4 w-px bg-olive/20 mx-2" />

            <button 
              onClick={() => navigateTo('stenfit')} 
              className={`hover:text-olive transition-colors flex items-center justify-center ${currentView === 'stenfit' ? 'text-olive' : ''}`}
            >
              <img src="https://thefocusplan.com/IMAGENES/STENFIT.png" alt="Stenfit" className={`h-4 lg:h-5 transition-opacity ${currentView === 'stenfit' ? 'opacity-100' : 'opacity-70 hover:opacity-100'}`} />
            </button>
            
            <div className="h-4 w-px bg-olive/20 mx-2" />
            
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-2 hover:text-olive transition-colors group font-black tracking-widest text-[15px] uppercase"
            >
              <Globe size={14} className="group-hover:rotate-12 transition-transform" />
              {language === 'es' ? 'EN' : 'ES'}
            </button>
          </div>

            <div className="flex items-center gap-4">
            <button 
              onClick={() => {
                setIsMusicOpen(true);
                setShowMusicFab(true);
              }}
              className="hidden sm:flex items-center justify-center transition-transform hover:scale-105"
            >
              <img 
                src="https://thefocusplan.com/IMAGENES/BOTON%20SPOTIFY.png"
                alt="COMMS / Spotify"
                className="h-16 object-contain"
                referrerPolicy="no-referrer"
              />
            </button>
            <button 
              className="hidden sm:block btn-tactical px-6 py-2 text-[15px] font-black tracking-widest uppercase"
              onClick={() => window.open('https://api.whatsapp.com/send?phone=523318042910', '_blank')}
            >
              {t.nav.contact}
            </button>
            
            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden z-50 p-2 text-olive hover:bg-olive/10 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="mobile-menu-overlay"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-[#0B0B0B] z-[100] flex flex-col items-center justify-start px-6 overflow-y-auto"
          >
            <div className="flex justify-between items-center py-4 w-full md:hidden">
              <div className="flex items-center gap-3">
                 <div className="w-8 h-8 rounded-full border-2 border-olive flex items-center justify-center overflow-hidden">
                    <Logo className="scale-[0.25]" />
                 </div>
                 <span className="font-stencil text-xl tracking-tighter text-olive">FOCUS</span>
              </div>
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="p-2 text-olive hover:bg-olive/10 transition-colors"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="flex flex-col items-center space-y-2 sm:space-y-4 w-full max-w-sm z-10 relative mt-0 sm:mt-4">
              <button 
                onClick={() => navigateTo('home')} 
                className={`py-2 sm:py-3 stencil text-lg sm:text-xl md:text-2xl hover:text-olive transition-colors w-full text-center ${currentView === 'home' ? 'text-olive' : 'text-smoke'}`}
              >
                {t.nav.home}
              </button>
              <button 
                onClick={() => navigateTo('focus-for-her')} 
                className={`py-2 sm:py-3 stencil text-lg sm:text-xl md:text-2xl hover:text-[#F5C443] transition-colors w-full text-center flex items-center justify-center gap-2 ${currentView === 'focus-for-her' ? 'text-[#F5C443]' : 'text-smoke'}`}
              >
                <span className="w-2 h-2 rounded-full bg-[#F5C443]" />
                <span>FOCUS FOR HER</span>
              </button>
              <button 
                onClick={() => navigateTo('programas')} 
                className={`py-2 sm:py-3 stencil text-lg sm:text-xl md:text-2xl hover:text-olive transition-colors w-full text-center ${currentView === 'programas' ? 'text-olive' : 'text-smoke'}`}
              >
                {t.nav.programs}
              </button>
              <button 
                onClick={() => navigateTo('clases')} 
                className={`py-2 sm:py-3 stencil text-lg sm:text-xl md:text-2xl hover:text-olive transition-colors w-full text-center ${currentView === 'clases' ? 'text-olive' : 'text-smoke'}`}
              >
                {t.nav.presencial}
              </button>
              <button 
                onClick={() => navigateTo('hyrox')} 
                className={`py-2 sm:py-3 stencil text-lg sm:text-xl md:text-2xl hover:text-olive transition-colors w-full text-center ${currentView === 'hyrox' ? 'text-olive' : 'text-smoke'}`}
              >
                {t.nav.hyrox}
              </button>
              <button 
                onClick={() => navigateTo('stenfit')} 
                className={`py-2 sm:py-3 stencil text-lg sm:text-xl md:text-2xl hover:text-olive transition-colors w-full flex justify-center ${currentView === 'stenfit' ? 'text-olive' : 'text-smoke'}`}
              >
                <img src="https://thefocusplan.com/IMAGENES/STENFIT.png" alt="Stenfit" className={`h-5 sm:h-6 md:h-8 transition-opacity ${currentView === 'stenfit' ? 'opacity-100' : 'opacity-70 hover:opacity-100'}`} />
              </button>
              
              <div className="w-10 h-px bg-olive/30 my-2 sm:my-3" />
              
              <button 
                onClick={toggleLanguage}
                className="py-2 sm:py-3 flex items-center justify-center gap-2 stencil text-xs sm:text-sm text-olive hover:text-accent transition-colors w-full"
              >
                <Globe size={16} />
                {language === 'es' ? 'SWITCH TO ENGLISH' : 'CAMBIAR A ESPAÑOL'}
              </button>

              <button 
                className="btn-tactical w-full py-3 sm:py-4 stencil text-base sm:text-lg tracking-[0.2em] mt-2"
                onClick={() => window.open('https://api.whatsapp.com/send?phone=523318042910', '_blank')}
              >
                {t.nav.contact}
              </button>
            </div>

            {/* Decorative elements for mobile menu */}
            <div className="absolute top-1/4 -left-12 w-64 h-64 bg-olive/5 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute bottom-1/4 -right-12 w-64 h-64 bg-olive/5 rounded-full blur-[80px] pointer-events-none" />
          </motion.div>
        )}
      </AnimatePresence>

        {/* Tactical Spotify Player */}
        <div className={`fixed bottom-6 right-6 z-[60] flex flex-col items-end transition-all duration-500 pointer-events-none ${showMusicFab ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <div className={`mb-4 w-[300px] md:w-[350px] glass-card border-olive/30 p-2 overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.7)] transition-all duration-300 transform ${isMusicOpen ? 'scale-100 opacity-100 translate-y-0 pointer-events-auto' : 'scale-90 opacity-0 translate-y-10 pointer-events-none'}`}>
            <div className="flex justify-between items-center px-2 py-1 mb-2 border-b border-olive/10">
              <div className="flex items-center gap-2">
                {spotifyUser ? (
                  <div className="flex items-center gap-2">
                    {spotifyUser.images?.[0]?.url && (
                      <img src={spotifyUser.images[0].url} onError={(e) => { e.currentTarget.style.display = 'none'; }} alt="" className="w-4 h-4 rounded-full border border-olive/30" />
                    )}
                    <span className="text-[8px] font-black tracking-widest text-olive uppercase truncate max-w-[100px]">
                      {spotifyUser.display_name}
                    </span>
                    <button onClick={logoutSpotify} className="text-[7px] text-red-400/60 hover:text-red-400 transition-colors uppercase font-bold">Close Session</button>
                  </div>
                ) : (
                  <button 
                    onClick={loginWithSpotify}
                    className="text-[8px] font-black tracking-widest text-[#1DB954] hover:text-white transition-colors uppercase border border-[#1DB954]/30 px-2 py-0.5 rounded-full"
                  >
                    Sync Spotify
                  </button>
                )}
              </div>
              <div className="flex items-center gap-3">
                <button 
                  onClick={() => setIsMusicOpen(false)} 
                  className="text-olive hover:text-accent transition-colors p-1"
                  title={t.ui.minimize}
                >
                  <Minus size={14} />
                </button>
                <button 
                  onClick={() => {
                    setIsMusicOpen(false);
                    setShowMusicFab(false);
                  }} 
                  className="text-olive/50 hover:text-red-400 transition-colors p-1"
                  title={t.ui.close}
                >
                  <X size={14} />
                </button>
              </div>
            </div>
            <iframe 
              style={{ borderRadius: '4px' }} 
              src={`https://open.spotify.com/embed/playlist/7ke8MsoH2gF3zNguHGKU38?utm_source=generator&theme=0${spotifyToken ? '&access_token=' + spotifyToken : ''}`} 
              width="100%" 
              height="352" 
              frameBorder="0" 
              allowFullScreen 
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
              loading="lazy"
            ></iframe>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMusicOpen(!isMusicOpen)}
            className={`w-14 h-14 rounded-full flex items-center justify-center border-2 transition-all shadow-2xl pointer-events-auto ${
              isMusicOpen ? 'bg-olive border-olive text-black' : 'bg-black/80 backdrop-blur-md border-olive/40 text-olive hover:border-olive'
            }`}
          >
            {isMusicOpen ? <X size={24} /> : <Music size={24} className={isMusicOpen ? '' : 'animate-pulse text-olive'} />}
          </motion.button>
        </div>
      {/* End Spotify Player */}

      <main className="pt-20">
        {currentView === 'home' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden"
          >
            <div className="fixed inset-0 w-full h-full z-0 pointer-events-none bg-black">
              <video 
                autoPlay 
                muted 
                loop 
                playsInline
                className="w-full h-full object-cover pointer-events-none brightness-75 opacity-90"
              >
                <source src="https://thefocusplan.com/VIDEOS/VIDEO%20FONDO%20FOCUS-2.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-[#0B0B0B]/40 pointer-events-none" />
            </div>

            {/* ============================================================== */}
            {/* 🔘 3 BOTONES ARRIBA                                            */}
            {/* - Arriba izquierda botón: FOCUS FOR HER                         */}
            {/* - Arriba centro botón: FOCUS FOR HIM                            */}
            {/* - Arriba derecha botón: FOCUS FOR HYROX                         */}
            {/* ============================================================== */}
            <div className="relative z-[40] w-full max-w-4xl mx-auto px-4 pt-4 md:pt-6 mb-8">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-2 bg-[#10120E]/95 backdrop-blur-md border border-olive/30 rounded-sm shadow-xl">
                {/* Arriba izquierda botón: FOCUS FOR HER */}
                <button
                  onClick={() => navigateTo('focus-for-her')}
                  className="py-3 px-4 text-xs md:text-sm font-black tracking-widest uppercase bg-[#F5C443]/15 hover:bg-[#F5C443] hover:text-black border border-[#F5C443]/50 text-[#F5C443] hover:border-[#F5C443] rounded-sm transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer active:scale-95 text-center shadow-md"
                >
                  <span className="w-2 h-2 rounded-full bg-[#F5C443] group-hover:scale-125 transition-transform" />
                  <span>FOCUS FOR HER</span>
                </button>

                {/* Arriba centro botón: FOCUS FOR HIM */}
                <button
                  onClick={() => setSelectedProgram('him')}
                  className="py-3 px-4 text-xs md:text-sm font-black tracking-widest uppercase bg-olive/20 hover:bg-olive hover:text-black border border-olive/40 text-smoke hover:border-olive rounded-sm transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer active:scale-95 text-center"
                >
                  <span className="w-2 h-2 rounded-full bg-cyan-400 group-hover:scale-125 transition-transform" />
                  <span>FOCUS FOR HIM</span>
                </button>

                {/* Arriba derecha botón: FOCUS FOR HYROX */}
                <button
                  onClick={() => navigateTo('hyrox')}
                  className="py-3 px-4 text-xs md:text-sm font-black tracking-widest uppercase bg-olive/20 hover:bg-olive hover:text-black border border-olive/40 text-smoke hover:border-olive rounded-sm transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer active:scale-95 text-center"
                >
                  <span className="w-2 h-2 rounded-full bg-amber-400 group-hover:scale-125 transition-transform" />
                  <span>FOCUS FOR HYROX</span>
                </button>
              </div>
            </div>

            {/* ============================================================== */}
            {/* LO PRIMERO QUE VEO: RUTINA GRATIS DEL MES                      */}
            {/* Botón 1: Descargar rutina (descarga un pdf con la rutina)        */}
            {/* Botón 2: La quiero personalizar (manda a WhatsApp)             */}
            {/* ============================================================== */}
            <section id="rutina-gratis" className="relative z-[40] max-w-4xl mx-auto px-6 mb-16 md:mb-20 text-center">
              <div className="bg-[#10120E]/90 border border-olive/40 rounded-sm p-6 sm:p-8 md:p-10 shadow-[0_0_50px_rgba(118,132,85,0.2)] relative overflow-hidden">
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-olive pointer-events-none" />
                <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-olive pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-olive pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-olive pointer-events-none" />

                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-olive/15 border border-olive/30 rounded-sm mb-3">
                    <Sparkles size={14} className="text-olive animate-pulse" />
                    <span className="text-[10px] md:text-xs font-black tracking-[0.25em] text-olive uppercase">
                      {t.hero.rutina_gratis.badge}
                    </span>
                  </div>

                  <h2 className="stencil text-3xl sm:text-5xl md:text-6xl text-white tracking-tight mb-3">
                    {t.hero.rutina_gratis.title}
                  </h2>
                  <p className="text-smoke/70 text-xs sm:text-sm md:text-base max-w-xl mx-auto leading-relaxed">
                    {t.hero.rutina_gratis.subtitle}
                  </p>
                </div>

                {/* Banner Image Preview */}
                <div className="relative mb-8 rounded-sm overflow-hidden border border-olive/30 shadow-2xl group max-w-2xl mx-auto">
                  <img
                    src="https://thefocusplan.com/IMAGENES/BANNER%20NOVIEMBRE.png"
                    alt="Rutina Gratis del Mes - The Focus Plan"
                    className="w-full h-auto object-cover group-hover:scale-[1.01] transition-transform duration-500 block"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-olive/0 group-hover:bg-olive/10 transition-colors pointer-events-none" />
                </div>

                {/* Los 2 botones requeridos por el cliente */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-xl mx-auto">
                  {/* Botón 1: Descargar rutina (descarga PDF con la rutina) */}
                  <button
                    onClick={handleDownloadRoutine}
                    disabled={isDownloadingPdf}
                    className="w-full sm:w-1/2 btn-tactical py-4 px-6 text-xs sm:text-sm font-black tracking-widest uppercase flex items-center justify-center gap-2.5 shadow-lg active:scale-95 transition-all text-center cursor-pointer"
                  >
                    <Download size={18} className={isDownloadingPdf ? 'animate-bounce' : ''} />
                    <span>
                      {isDownloadingPdf 
                        ? (language === 'es' ? 'GENERANDO PDF...' : 'GENERATING PDF...') 
                        : t.hero.rutina_gratis.btn_download}
                    </span>
                  </button>

                  {/* Botón 2: La quiero personalizar (manda a WhatsApp con mensaje predeterminado) */}
                  <a
                    href={`https://api.whatsapp.com/send?phone=523318042910&text=${encodeURIComponent(t.hero.rutina_gratis.whatsapp_message)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-1/2 py-4 px-6 text-xs sm:text-sm font-black tracking-widest uppercase flex items-center justify-center gap-2.5 rounded-sm border-2 border-olive text-olive hover:bg-olive hover:text-black transition-all duration-300 text-center cursor-pointer"
                  >
                    <MessageCircle size={18} />
                    <span>{t.hero.rutina_gratis.btn_customize}</span>
                  </a>
                </div>

                {pdfDownloadSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-4 p-3 bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 text-xs text-center rounded-sm font-mono flex items-center justify-center gap-2"
                  >
                    <Check size={14} />
                    <span>
                      {language === 'es' 
                        ? '¡Rutina descargada con éxito en PDF! Revisa tus descargas.' 
                        : 'Routine PDF downloaded successfully! Check your downloads.'}
                    </span>
                  </motion.div>
                )}
              </div>
            </section>

            {/* ============================================================== */}
            {/* LO SEGUNDO QUE VEO:                                            */}
            {/* TESTIMONIOS (blanco) FOCUS (verde)                             */}
            {/* 1. Empezamos con el video, audios y fotos de "FOCUS FOR HER"    */}
            {/* 2. Segundo con las fotos de antes y después de los alumnos     */}
            {/* 3. Tercero con los testimonios de whatsapp                     */}
            {/* ============================================================== */}
            <Testimonials 
              language={language} 
              onSelectProgram={(prog) => setSelectedProgram(prog)} 
            />

            {/* ============================================================== */}
            {/* LO TERCERO QUE VEO:                                            */}
            {/* GRANDE: YOU ALWAYS STAY FOCUSED (como esta)                    */}
            {/* Abajito la explicación:                                        */}
            {/* - P1: Te voy a ayudar... (color blanco)                        */}
            {/* - P2: A través de un programa... (color verde)                 */}
            {/* - P3: Tu progreso es importante... (color blanco)              */}
            {/* Dejar los botones pero que digan:                              */}
            {/* 1- FOCUS FOR HER                                               */}
            {/* 2- FOCUS FOR HIM                                               */}
            {/* 3- FOCUS FOR HYROX                                             */}
            {/* ============================================================== */}
            <section id="hero-statement" className="relative z-[40] py-20 md:py-28 px-6 text-center bg-[#0B0B0B]/70 border-t border-olive/20">
              <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="max-w-4xl mx-auto"
              >
                <div className="inline-block px-3 py-1 border border-olive text-olive text-[9px] md:text-[10px] whitespace-normal font-black tracking-[0.3em] mb-8 animate-pulse text-center">
                  {t.hero.status}
                </div>

                {/* GRANDE: YOU ALWAYS STAY FOCUSED */}
                <h1 className="stencil text-4xl sm:text-6xl md:text-9xl leading-[0.85] mb-10 mx-auto max-w-[90vw]">
                  <span className="sr-only">Focus: Centro de Entrenamiento en Línea y Presencial en Guadalajara y Zapopan</span>
                  {t.hero.title}<br /> <span className="text-olive">{t.hero.subtitle}</span>
                </h1>

                {/* Abajito la explicación con colores solicitados por el cliente */}
                <div className="max-w-3xl mx-auto space-y-6 mb-12 text-center">
                  {/* P1: Te voy a ayudar a bajar % de grasa y ganar músculo en menos de 90 días. (Que resalte un poco con el color blanco) */}
                  <p className="text-white text-lg sm:text-xl md:text-2xl font-bold tracking-wide leading-snug">
                    {t.hero.explanation_p1}
                  </p>

                  {/* P2: A través de un programa de entrenamiento 100% personalizado... (Este en color verde) */}
                  <p className="text-olive text-base sm:text-lg md:text-xl font-semibold leading-relaxed">
                    {t.hero.explanation_p2}
                  </p>

                  {/* P3: Tu progreso es importante. Pero aprender a mantenerlo es lo que realmente hace la diferencia. (Que resalte un poco con el color blanco) */}
                  <p className="text-white text-base sm:text-lg md:text-xl font-medium leading-relaxed">
                    {t.hero.explanation_p3}
                  </p>
                </div>

                {/* Dejar los botones pero que digan:
                    1- FOCUS FOR HER
                    2- FOCUS FOR HIM
                    3- FOCUS FOR HYROX */}
                <div className="flex flex-col sm:flex-row gap-3 md:gap-5 justify-center max-w-3xl mx-auto">
                  <button 
                    onClick={() => navigateTo('focus-for-her')}
                    className="btn-tactical py-4 px-6 text-sm md:text-base font-black tracking-[0.1em] w-full cursor-pointer active:scale-95 transition-all text-center hover:bg-[#F5C443] hover:text-black hover:border-[#F5C443]"
                  >
                    1- {t.hero.buttons.her}
                  </button>

                  <button 
                    onClick={() => setSelectedProgram('him')}
                    className="btn-tactical py-4 px-6 text-sm md:text-base font-black tracking-[0.1em] w-full cursor-pointer active:scale-95 transition-all text-center"
                  >
                    2- {t.hero.buttons.him}
                  </button>

                  <button 
                    onClick={() => navigateTo('hyrox')}
                    className="btn-tactical py-4 px-6 text-sm md:text-base font-black tracking-[0.1em] w-full cursor-pointer active:scale-95 transition-all text-center"
                  >
                    3- {t.hero.buttons.hyrox}
                  </button>
                </div>
              </motion.div>
            </section>

            {/* Vision / About Section */}
            <section id="about" className="py-24 md:py-32 px-6 bg-[#151619]/60 backdrop-blur-sm relative z-0">
              <div className="max-w-7xl mx-auto">
                <div className="flex flex-col items-center text-center mb-16 md:mb-24">
                    <h2 className="stencil text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6">{t.about.title} <span className="text-olive">{t.about.title_accent}</span></h2>
                    <div className="w-24 h-1 bg-olive opacity-80" />
                </div>
                
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                  <div className="order-2 lg:order-1 space-y-10">
                    {t.about.items.map((item, index) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex gap-4 md:gap-6 items-start"
                      >
                         <div className="shrink-0 w-10 h-10 rounded-full border border-olive/30 flex items-center justify-center text-olive font-black text-sm stencil bg-olive/10 shadow-[0_0_15px_rgba(118,132,85,0.2)]">
                           {index + 1}
                         </div>
                         <div className="space-y-2 pt-1">
                           <h3 className="stencil tracking-wider text-xl md:text-2xl text-white">{item.title}</h3>
                           <p className="text-smoke/70 text-sm md:text-base leading-relaxed">{item.description}</p>
                         </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="order-1 lg:order-2 w-full max-w-2xl mx-auto lg:sticky lg:top-32">
                    <div className="relative">
                      <div className="w-full h-[50vh] min-h-[400px] md:h-[600px] overflow-hidden rounded-xl group flex items-center justify-center border border-olive/10 shadow-[0_0_40px_rgba(0,0,0,0.5)] bg-black/50">
                        <img 
                          src="https://thefocusplan.com/IMAGENES/FOTO%20IMAGEN%20SECCION%20PRINCIPAL%201.png" 
                          alt="Focus Training Section" 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80" 
                          referrerPolicy="no-referrer" 
                          onError={(e) => { e.currentTarget.style.display = 'none'; }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                      </div>
                      <div className="absolute -bottom-6 -right-6 w-32 h-32 border-r-4 border-b-4 border-olive opacity-20 hidden lg:block" />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Instagram Intel Feed */}
            <section id="intel" className="py-32 px-6 bg-[#0B0B0B]/60 backdrop-blur-sm relative z-0">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                  <div className="text-[10px] text-olive font-black tracking-[0.3em] uppercase mb-4">RECON DIVISION</div>
                  <h2 className="stencil text-3xl sm:text-4xl md:text-7xl mb-6">{t.intel.title} <span className="text-olive">{t.intel.title_accent}</span></h2>
                  <p className="text-smoke/60 text-sm font-medium tracking-widest uppercase">{t.intel.subtitle}</p>
                </div>
                
                {/* Instagram Widget Container */}
                <div className="w-full mb-12 flex justify-center relative z-50 overflow-hidden">
                  <div className="w-full max-w-[320px] md:max-w-[640px] lg:max-w-[960px] mx-auto">
                    <div className="elfsight-app-11ac2d1f-4d65-46a7-bdf8-5215bca16a3f" data-elfsight-app-lazy></div>
                  </div>
                </div>

                <div className="glass-card border-olive/20 p-8 md:p-12 bg-black/40 text-center flex flex-col items-center justify-center max-w-2xl mx-auto">
                  <div className="w-16 h-16 rounded-full border border-olive/30 bg-olive/10 flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-olive" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl md:text-2xl text-smoke mb-4 font-black">SÍGUENOS EN NUESTRAS REDES</h3>
                  <p className="text-smoke/70 text-sm md:text-base font-mono max-w-lg mb-8">
                    Mantente al día con nuestros próximos eventos de Hyrox, entrenamientos nuevos, y resultados de nuestra comunidad.
                  </p>
                  
                  <a 
                    href="https://www.instagram.com/the_focusplan/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-black bg-olive hover:bg-[#A3B18A] transition-colors font-black tracking-widest text-[12px] uppercase px-8 py-3 rounded-sm shadow-[0_0_20px_rgba(118,132,85,0.3)] hover:-translate-y-1 transform duration-300"
                  >
                    @the_focusplan
                  </a>
                </div>
              </div>
            </section>
            
            <FAQ language={language} />
            
          </motion.div>
        )}

        {currentView === 'programas' && (
          <motion.div
            id="planes-online"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="py-20 min-h-[85vh] flex items-center justify-center relative overflow-hidden"
          >
            {/* Background Video for Programas */}
            <div className="fixed inset-0 w-full h-full z-0 pointer-events-none bg-[#0B0B0B] overflow-hidden">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover opacity-40 grayscale-0 scale-150 md:scale-[2]"
              >
                <source src="https://thefocusplan.com/VIDEOS/VIDEO%20FONDO%20HIROX%201.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-[#0B0B0B]/40" />
              <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B] via-transparent to-[#0B0B0B]" />
            </div>

            {/* Background Accents */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-olive/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-olive/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 w-full relative z-10 pointer-events-auto">
              {/* Top Announcement Bar */}
              <div 
                onClick={() => window.open(`https://api.whatsapp.com/send?phone=523318042910&text=${encodeURIComponent(t.programs.promo_banner.whatsapp_message)}`, '_blank')}
                className="mb-10 max-w-2xl mx-auto p-3.5 bg-olive/15 border border-olive/40 hover:bg-olive/25 hover:border-olive transition-all cursor-pointer rounded-sm flex items-center justify-center gap-3 text-center group shadow-[0_0_20px_rgba(118,132,85,0.15)]"
              >
                <Sparkles size={16} className="text-olive animate-pulse shrink-0" />
                <span className="text-xs md:text-sm font-black tracking-widest text-olive uppercase group-hover:text-smoke transition-colors">
                  {t.programs.promo_banner.badge}
                </span>
                <ChevronRight size={16} className="text-olive group-hover:translate-x-1 transition-transform shrink-0" />
              </div>

              <div className="text-center mb-14 max-w-2xl mx-auto">
                <div className="inline-block px-4 py-1 border border-olive/30 text-olive text-[10px] font-black tracking-[0.5em] uppercase mb-6 rounded-full">
                  Elite Systems
                </div>
                <h2 className="stencil text-3xl sm:text-4xl md:text-8xl mb-6">{t.programs.title} <span className="text-olive">{t.programs.title_accent}</span></h2>
                <div className="w-16 md:w-24 h-1 bg-olive mx-auto mb-8" />
                <p className="text-smoke/60 text-xs md:text-sm font-medium tracking-widest uppercase px-4">
                  {t.programs.subtitle}
                </p>
              </div>

              {/* Banner de Promoción: Rutina Gratis */}
              <div className="relative mb-16 max-w-xl md:max-w-2xl mx-auto">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-olive text-black font-black text-xs md:text-sm tracking-widest uppercase rounded-sm shadow-md">
                    <Sparkles size={15} />
                    {t.programs.promo_banner.badge}
                  </span>
                </div>

                <a 
                  href={`https://api.whatsapp.com/send?phone=523318042910&text=${encodeURIComponent(t.programs.promo_banner.whatsapp_message)}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block group relative overflow-hidden rounded-sm border border-olive/40 hover:border-olive transition-all duration-300 shadow-[0_0_40px_rgba(118,132,85,0.25)] hover:shadow-[0_0_60px_rgba(118,132,85,0.45)] bg-black/60"
                >
                  <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-olive z-20 pointer-events-none" />
                  <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-olive z-20 pointer-events-none" />
                  <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-olive z-20 pointer-events-none" />
                  <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-olive z-20 pointer-events-none" />

                  <img 
                    src="https://thefocusplan.com/IMAGENES/BANNER%20NOVIEMBRE.png" 
                    alt={language === 'es' ? "Promoción Rutina Gratis - The Focus Plan" : "Free Routine Promotion - The Focus Plan"}
                    className="w-full h-auto object-cover group-hover:scale-[1.01] transition-transform duration-500 cursor-pointer block"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-olive/0 group-hover:bg-olive/10 transition-colors pointer-events-none" />
                </a>

                <div className="mt-5 flex justify-center">
                  <a 
                    href={`https://api.whatsapp.com/send?phone=523318042910&text=${encodeURIComponent(t.programs.promo_banner.whatsapp_message)}`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-tactical py-3.5 px-8 text-sm md:text-base uppercase tracking-widest font-black flex items-center justify-center gap-3 w-full sm:w-auto shadow-lg active:scale-95 transition-all text-center"
                  >
                    <span>{t.programs.promo_banner.cta}</span>
                  </a>
                </div>
              </div>

              {/* Special Offers Section Moved to Top */}
              <div className="relative mb-16 max-w-5xl mx-auto p-1 bg-gradient-to-r from-olive/20 via-olive/40 to-olive/20 group cursor-pointer" onClick={() => window.open('https://api.whatsapp.com/send?phone=523318042910', '_blank')}>
                <div className="bg-olive hover:bg-olive/90 transition-all p-8 md:p-12 shadow-[0_0_40px_rgba(118,132,85,0.2)] flex flex-col items-center justify-center text-center">
                  <div className="font-stencil text-black text-2xl md:text-4xl mb-3 group-hover:scale-105 transition-transform" dangerouslySetInnerHTML={{ __html: t.programs.offers.banner_title }} />
                  <div className="text-black/80 text-xs md:text-sm tracking-[0.3em] uppercase font-black" dangerouslySetInnerHTML={{ __html: t.programs.offers.banner_subtitle }} />
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
                {/* Essential Card */}
                <motion.article 
                  whileHover={{ y: -10 }}
                  className="glass-card border-white/5 bg-white/[0.02] flex flex-col justify-between group hover:border-olive/40 hover:bg-white/[0.04] transition-all relative overflow-hidden"
                >
                  <div className="w-full h-56 md:h-64 relative overflow-hidden">
                    <img 
                      src="https://thefocusplan.com/IMAGENES/FOTO%20CLASES%20ONLINE%201.png" 
                      alt="Plan Essential" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                      referrerPolicy="no-referrer" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/20 to-transparent" />
                  </div>
                  <div className="p-8 md:p-12 flex flex-col flex-1 relative">
                    <div className="hidden md:block absolute -top-6 -left-6 w-12 h-12 border-t-2 border-l-2 border-olive opacity-20 pointer-events-none" />
                    
                    <div>
                      <div className="flex justify-between items-start mb-10">
                      <div>
                        <h3 className="stencil text-4xl md:text-5xl mb-2 text-smoke group-hover:text-olive transition-colors">{t.programs.essential.title}</h3>
                        <div className="text-[10px] text-smoke/30 tracking-[0.2em] font-black uppercase">{t.programs.essential.phase}</div>
                      </div>
                      <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-smoke/10 flex items-center justify-center group-hover:border-olive transition-all">
                        <Target size={24} className="text-smoke/20 group-hover:text-olive transition-colors" />
                      </div>
                    </div>

                    <div className="flex items-baseline gap-2 mb-8 md:mb-12">
                      <span className="text-5xl md:text-6xl font-black text-smoke">{t.programs.essential.price}</span>
                      <span className="text-sm md:text-lg opacity-30 font-bold uppercase tracking-widest">{t.programs.essential.unit}</span>
                    </div>

                    <ul className="space-y-4 md:space-y-5 mb-8 md:mb-10 text-xs md:text-sm font-medium tracking-wide">
                      {t.programs.essential.features.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 md:gap-4 group/item">
                          <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-olive/30 group-hover/item:bg-olive transition-all mt-1.5 shrink-0" />
                          <span className="opacity-60 group-hover:opacity-100 transition-opacity leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <p className="text-olive/80 font-mono text-xs md:text-sm mb-12 md:mb-16 italic border-l-2 border-olive/30 pl-4">
                      {t.programs.essential.description}
                    </p>
                  </div>
                  
                  <div className="mt-auto pointer-events-auto mt-8">
                    <WhatsAppButton label={t.programs.essential.cta} />
                  </div>
                </div>
                </motion.article>

                {/* Focused Card - Elite */}
                <motion.article 
                  whileHover={{ y: -10 }}
                  className="glass-card border-olive bg-olive/[0.03] flex flex-col justify-between relative shadow-[0_30px_60px_-15px_rgba(118,132,85,0.15)] group hover:bg-olive/[0.06] transition-all overflow-hidden"
                >
                  <div className="absolute top-4 right-4 z-20 bg-olive text-black text-[9px] font-black px-4 md:px-6 py-2 tracking-widest uppercase">
                    {t.programs.focused.badge}
                  </div>
                  <div className="w-full h-56 md:h-64 relative overflow-hidden">
                    <img 
                      src="https://thefocusplan.com/IMAGENES/FOTO%20CLASES%20ONLINE%202.png" 
                      alt="Plan Focused" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                      referrerPolicy="no-referrer" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/20 to-transparent flex items-end">
                      <div className="h-1 w-full bg-gradient-to-r from-olive to-transparent mb-0.5 opacity-50" />
                    </div>
                  </div>
                  
                  <div className="p-8 md:p-12 flex flex-col flex-1 relative">
                    <div className="hidden md:block absolute -bottom-6 -right-6 w-12 h-12 border-b-2 border-r-2 border-olive opacity-50 pointer-events-none" />

                    <div>
                      <div className="flex justify-between items-start mb-10">
                      <div>
                        <h3 className="stencil text-4xl md:text-5xl mb-2 text-olive">{t.programs.focused.title}</h3>
                        <div className="text-[10px] text-olive/50 tracking-[0.2em] font-black uppercase">{t.programs.focused.phase}</div>
                      </div>
                      <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-olive/30 flex items-center justify-center bg-olive/10">
                        <Zap size={24} className="text-olive fill-olive/20" />
                      </div>
                    </div>

                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="text-5xl md:text-6xl font-black text-olive">{t.programs.focused.price}</span>
                      <span className="text-sm md:text-lg opacity-40 font-bold uppercase tracking-widest text-olive">{t.programs.focused.unit}</span>
                    </div>
                    <div className="text-xs md:text-sm line-through opacity-20 mb-8 md:mb-12 font-black tracking-widest">{t.programs.focused.old_price}</div>

                    <ul className="space-y-4 md:space-y-5 mb-8 md:mb-10 text-xs md:text-sm font-bold tracking-wide">
                      {t.programs.focused.features.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 md:gap-4">
                          <Zap size={14} className="text-olive shrink-0 fill-olive mt-0.5" />
                          <span className="text-smoke leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <p className="text-olive font-mono text-xs md:text-sm mb-12 md:mb-16 italic border-l-2 border-olive/60 pl-4 bg-olive/5 p-3">
                      {t.programs.focused.description}
                    </p>
                  </div>

                  <div className="mt-auto pointer-events-auto mt-8">
                    <WhatsAppButton label={t.programs.focused.cta} featured />
                  </div>
                </div>
                </motion.article>
              </div>

              {/* Stenfit Platform Banner */}
              <div className="mt-16 max-w-5xl mx-auto glass-card border-olive/30 p-8 md:p-12 relative overflow-hidden group">
                <div className="absolute inset-0 bg-olive/5" />
                <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-olive/10 to-transparent" />
                
                <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12">
                  <div className="shrink-0">
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border border-olive/20 flex items-center justify-center bg-black/50 p-6 md:p-8">
                       <img src="https://thefocusplan.com/IMAGENES/STENFIT.png" alt="Stenfit" className="w-full h-auto opacity-70 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                  
                  <div className="flex-grow text-center md:text-left">
                    <p className="text-sm md:text-base font-medium text-smoke/90 leading-relaxed mb-6">
                      {t.programs.platform.disclaimer}
                    </p>
                    <button 
                      onClick={() => navigateTo('stenfit')}
                      className="btn-tactical py-3 px-8 text-sm uppercase tracking-widest font-black"
                    >
                      {t.programs.platform.cta}
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-24 text-center">
                <p className="text-[10px] font-black tracking-[0.4em] opacity-30 flex items-center justify-center gap-3">
                  <span className="w-12 h-px bg-smoke/20" />
                  {t.ui.branding}
                  <span className="w-12 h-px bg-smoke/20" />
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {currentView === 'clases' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="py-12 relative min-h-screen overflow-hidden"
          >
            {/* Background Video for Clases */}
            <div className="fixed inset-0 w-full h-full z-0 pointer-events-none bg-black">
              <video 
                autoPlay 
                muted 
                loop 
                playsInline
                className="w-full h-full object-cover pointer-events-none brightness-100 opacity-100"
              >
                <source src="https://thefocusplan.com/VIDEOS/VIDEO%20FONDO%20RUTINAS%201.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-black/60 backdrop-blur-[3px]" />
            </div>

            {/* Class Schedule Section */}
            <section id="classes" className="py-20 px-6 relative z-10">
              <div className="max-w-6xl mx-auto bg-black/40 backdrop-blur-sm p-8 md:p-12 border border-olive/20 rounded-lg shadow-2xl">
                <header className="text-center mb-16">
                  <div className="text-[10px] text-olive font-black tracking-[0.3em] uppercase mb-4">{t.clases.subtitle}</div>
                  <h2 className="stencil text-3xl sm:text-4xl md:text-5xl lg:text-6xl">{t.clases.title} <span className="text-olive">{t.clases.title_accent}</span></h2>
                </header>

                <div className="relative group mb-20 max-w-4xl mx-auto">
                  <div className="absolute inset-0 bg-olive/20 translate-x-3 translate-y-3 md:translate-x-4 md:translate-y-4 rounded-sm transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
                  <video 
                    autoPlay 
                    muted 
                    loop 
                    playsInline
                    className="relative z-10 w-full aspect-video object-cover rounded-sm transition-all duration-500 border border-olive/30 shadow-2xl"
                  >
                    <source src="https://thefocusplan.com/VIDEOS/VIDEO%20ENTRENAMIENTO%20BN%201.mp4" type="video/mp4" />
                  </video>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                  <div>
                    <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4 mb-8 border-b-2 border-olive/30 pb-4">
                      <h3 className="stencil text-3xl md:text-4xl text-olive tracking-widest">{t.clases.individual_title}</h3>
                      <span className="text-xs font-black tracking-widest uppercase text-smoke/70 flex items-center gap-1"><span className="text-red-500">◆</span> {t.clases.individual_subtitle}</span>
                    </div>
                    <div className="grid gap-4">
                      {t.clases.items.slice(0, 3).map((item, i) => (
                        <div key={i} className="flex justify-between items-center py-4 border-b border-olive/10 group font-stencil">
                          <div className="flex items-center gap-2">
                            <span className="text-smoke/50 text-xl">•</span>
                            <div>
                              <div className="font-black tracking-widest uppercase text-lg group-hover:text-olive transition-colors">{item.name}</div>
                            </div>
                          </div>
                          <div className="flex flex-col items-end gap-1">
                            <div className="text-2xl font-black text-smoke">{item.price}</div>
                            {item.meta && item.meta !== "Precio Regular" && item.meta !== "Regular Price" && (
                              <div className="bg-olive/40 px-2 py-0.5 text-xs text-smoke font-black tracking-widest uppercase border border-olive/50">{item.meta}</div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-8 flex flex-col gap-2 items-start">
                      <span className="font-black tracking-widest uppercase text-smoke/90 text-sm md:text-base">{t.clases.group_promo}</span>
                      <span className="bg-olive/40 px-2 py-1 text-[10px] md:text-xs text-smoke font-black tracking-widest uppercase border border-olive/50">{t.clases.group_promo_desc}</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4 mb-8 border-b-2 border-olive/30 pb-4">
                      <h3 className="stencil text-3xl md:text-4xl text-olive tracking-widest">{t.clases.group_title}</h3>
                      <span className="text-xs font-black tracking-widest uppercase text-smoke/70"><span className="text-olive">◆</span> {t.clases.group_subtitle}</span>
                    </div>
                    <div className="grid gap-4">
                      {t.clases.items.slice(3).map((item, i) => (
                        <div key={i} className="flex justify-between items-center py-4 border-b border-olive/10 group font-stencil">
                          <div className="flex items-start gap-2">
                            <span className="text-smoke/50 text-xl mt-[-2px]">•</span>
                            <div className="flex flex-col">
                              <div className="font-black tracking-widest uppercase text-lg group-hover:text-olive transition-colors">{item.name}</div>
                              {item.subname && (
                                <div className="text-[10px] md:text-xs opacity-60 uppercase tracking-widest font-black flex items-center gap-1 pl-4 mt-1"><span className="text-red-500">◆</span> {item.subname}</div>
                              )}
                            </div>
                          </div>
                          <div className="flex flex-col items-end gap-1">
                            <div className="text-2xl font-black text-smoke">{item.price}</div>
                            {item.meta && (
                              <div className="bg-olive/40 px-2 py-0.5 text-xs text-smoke font-black tracking-widest uppercase border border-olive/50">{item.meta}</div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            <CoachesSection language={language} />
            
          </motion.div>
        )}

        {currentView === 'hyrox' && (
          <HyroxGuide language={language} />
        )}

        {currentView === 'stenfit' && (
          <StenfitGuide language={language} />
        )}

        {currentView === 'focus-for-her' && (
          <FocusForHerView 
            language={language} 
            onBackToHome={() => navigateTo('home')} 
          />
        )}
      </main>

      {currentView === 'home' && (
        <section className="py-24 border-y border-olive/10 text-center px-0 md:px-6 bg-[#0B0B0B]/60 backdrop-blur-sm relative z-0">
          <div className="w-full md:max-w-6xl mx-auto space-y-12">
            <div className="relative h-[60vh] md:min-h-[600px] w-full mx-auto overflow-hidden rounded-none md:rounded-xl">
              <img 
                src="https://thefocusplan.com/IMAGENES/FOTO%20HECTOR%20PAGINA%20PRINCIPAL.png" 
                alt="Sesión de training de alto rendimiento con nuestro coach de entrenamiento en Guadalajara - Focus Box" 
                className="w-full h-full object-cover transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="max-w-3xl mx-auto space-y-8 px-6 md:px-0">
              <div className="flex justify-center gap-2">
                {[1, 2, 3, 4, 5].map(i => <Zap key={i} className="text-olive fill-olive" size={16} />)}
              </div>
              <blockquote className="stencil text-2xl md:text-4xl leading-tight text-smoke">
                {t.quote.text}
              </blockquote>
              <div className="text-[10px] font-black tracking-[0.5em] text-olive uppercase">{t.quote.community}</div>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="py-32 px-6 bg-[#0B0B0B]/80 backdrop-blur-md relative z-[90]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-20 items-start">
          <div className="space-y-8">
            <button onClick={() => navigateTo('home')} className="relative z-50">
              <Logo className="w-24 h-24 mb-4 hover:scale-105 transition-transform" />
            </button>
            <div className="stencil text-4xl leading-tight">THE FOCUS PLAN</div>
            <div className="pt-6 flex gap-4">
               <a href="https://www.instagram.com/the_focusplan/" target="_blank" rel="noopener noreferrer" className="p-3 border border-white/10 hover:border-olive transition-all flex items-center justify-center group bg-black/50 hover:bg-olive/10">
                 <img src="https://thefocusplan.com/IMAGENES/LOGO%20INSTAGRAM.png" alt="Instagram" className="w-6 h-6 object-contain group-hover:scale-110 transition-transform" />
               </a>
               <a href="https://www.facebook.com/265338446659485?ref=PROFILE_EDIT_xav_ig_profile_page_web" target="_blank" rel="noopener noreferrer" className="p-3 border border-white/10 hover:border-olive transition-all flex items-center justify-center group bg-black/50 hover:bg-olive/10">
                 <img src="https://thefocusplan.com/IMAGENES/LOGO%20FACEBOOK.png" alt="Facebook" className="w-6 h-6 object-contain group-hover:scale-110 transition-transform" />
               </a>
            </div>
          </div>
          
          <div className="space-y-6">
             <div className="text-[10px] text-olive font-black tracking-[0.3em] uppercase">{t.footer.map}</div>
             <ul className="space-y-4 text-xs font-bold uppercase tracking-widest relative z-50">
                <li><button onClick={() => navigateTo('home')} className="hover:text-olive transition-colors">{t.nav.home}</button></li>
                <li><button onClick={() => navigateTo('programas')} className="hover:text-olive transition-colors">{t.nav.programs}</button></li>
                <li><button onClick={() => navigateTo('clases')} className="hover:text-olive transition-colors">{t.nav.presencial}</button></li>
                <li><button onClick={() => navigateTo('hyrox')} className="hover:text-olive transition-colors">{t.nav.hyrox}</button></li>
             </ul>
          </div>

          <div className="space-y-8">
             <div className="text-[10px] text-olive font-black tracking-[0.3em] uppercase">{t.footer.contact_title}</div>
             <div className="space-y-4">
                <a href="https://api.whatsapp.com/send?phone=523318042910" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group cursor-pointer inline-flex w-fit">
                   <div className="w-10 h-10 border border-olive/20 flex items-center justify-center group-hover:border-olive transition-all shrink-0">
                      <Smartphone size={18} className="text-smoke group-hover:text-olive transition-colors" />
                   </div>
                   <div className="text-sm font-bold group-hover:text-olive transition-colors">+52 33 1804 2910</div>
                </a>
                <a href="mailto:coach@thefocusplan.com" className="flex items-center gap-4 group cursor-pointer inline-flex w-fit">
                   <div className="w-10 h-10 border border-olive/20 flex items-center justify-center group-hover:border-olive transition-all shrink-0">
                      <MessageSquare size={18} className="text-smoke group-hover:text-olive transition-colors" />
                   </div>
                   <div className="text-sm font-bold truncate group-hover:text-olive transition-colors">coach@thefocusplan.com</div>
                </a>
                <div className="flex items-center gap-4 group">
                   <div className="w-10 h-10 border border-olive/20 flex items-center justify-center group-hover:border-olive transition-all shrink-0">
                      <MapPin size={18} className="text-smoke group-hover:text-olive transition-colors" />
                   </div>
                   <div className="text-sm font-bold max-w-[200px] leading-tight text-smoke/80">{t.footer.address}</div>
                </div>
                <div className="flex items-start gap-4 group">
                   <div className="w-10 h-10 border border-olive/20 flex items-center justify-center group-hover:border-olive transition-all shrink-0">
                      <Clock size={18} className="text-smoke group-hover:text-olive transition-colors" />
                   </div>
                   <div className="text-xs text-smoke/70 space-y-1 mt-1">
                      <div className="font-bold text-smoke">{t.footer.hours_title}</div>
                      <div>{t.footer.hours_weekdays}</div>
                      <div>{t.footer.hours_weekends}</div>
                   </div>
                </div>
             </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-white/5">
           <h3 className="sr-only">SEO Keywords & Local Info</h3>
           <p className="text-[10px] text-smoke/30 leading-relaxed max-w-4xl opacity-50">
             {t.footer.seo_text}
           </p>
        </div>

        <div className="mt-16 text-center text-[8px] opacity-20 tracking-[1em] uppercase">
          {t.footer.rights}
        </div>
        
        <div className="mt-12 pb-32 md:pb-0 flex justify-center relative z-[100]">
          <button 
            onClick={() => window.open('https://mjconsultoria.netlify.app', '_blank', 'noopener,noreferrer')}
            className="block hover:opacity-80 transition-opacity cursor-pointer active:scale-95 touch-manipulation focus:outline-none"
          >
            <img 
              src="https://mmbmcgjqfzmlsibnpbyl.supabase.co/storage/v1/object/sign/MJ%20Consultoria/LOGO%20MJ%20NEGRO.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zZjRmNjhlYS05MmFiLTRkMTItOGZiNi0yMjkzMWI0NTFiYzIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJNSiBDb25zdWx0b3JpYS9MT0dPIE1KIE5FR1JPLmpwZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODMwNTE0NTMsImV4cCI6MTk0MDczMTQ1M30.EBWdjqmnhOUdW5m1JocPxeEP0x_YPGZ6_adKG41vr0o" 
              alt="MJ Consultoría" 
              className="h-24 md:h-32 w-auto rounded-md object-contain"
            />
          </button>
        </div>
      </footer>

      {/* Program Details Modal */}
      <ProgramModal
        program={selectedProgram}
        isOpen={selectedProgram !== null}
        onClose={() => setSelectedProgram(null)}
        onNavigateHyrox={() => navigateTo('hyrox')}
        onScrollToHer={scrollToFocusForHer}
        onNavigateHer={() => navigateTo('focus-for-her')}
      />
    </div>
  );
}
