import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, MessageCircle, ChevronRight, Zap } from 'lucide-react';

export type ProgramType = 'her' | 'him' | 'hyrox' | null;

interface ProgramModalProps {
  program: ProgramType;
  isOpen: boolean;
  onClose: () => void;
  onNavigateHyrox?: () => void;
  onScrollToHer?: () => void;
  onNavigateHer?: () => void;
}

export const ProgramModal = ({ program, isOpen, onClose, onNavigateHyrox, onScrollToHer, onNavigateHer }: ProgramModalProps) => {
  if (!isOpen || !program) return null;

  const programData = {
    her: {
      title: "FOCUS FOR HER",
      subtitle: "Recomposición Corporal Femenina & Fuerza Inteligente",
      badge: "PROGRAMA EXCLUSIVO PARA MUJERES",
      whatsappMessage: "¡Hola Coach! ⚡ Me interesa unirme al programa FOCUS FOR HER y quiero comenzar mi valoración.",
      description: "Entrenamiento 100% planificado para las necesidades y biomecánica femenina: tonificación de glúteo, abdomen firme, pérdida de grasa corporal y ganancia de fuerza sin lesionarte ni perder femineidad.",
      highlights: [
        "Enfoque en tren inferior, glúteos y cintura estrecha",
        "Rutinas con pesas guiadas paso a paso en Stenfit App",
        "Revisión de técnica mediante videos con tu coach",
        "Acompañamiento nutricional flexible y sin dietas extremas",
        "Seguimiento constante vía WhatsApp 1:1"
      ],
      actionLabel: "QUIERO MI PLAN FOCUS FOR HER",
      secondaryAction: {
        label: "VER PRESENTACIÓN, VIDEOS Y PRECIOS FOR HER",
        onClick: () => {
          onClose();
          onNavigateHer?.();
        }
      }
    },
    him: {
      title: "FOCUS FOR HIM",
      subtitle: "Hipertrofia, Pérdida de Grasa & Fuerza Funcional",
      badge: "PROTOCOLO DE ALTO RENDIMIENTO MASCULINO",
      whatsappMessage: "¡Hola Coach! ⚡ Me interesa unirme al programa FOCUS FOR HIM para bajar % de grasa y ganar músculo.",
      description: "Programa de recomposición corporal acelerada para hombres. Diseñado para bajar porcentaje de grasa y construir masa muscular magra en menos de 90 días, combinando trabajo de fuerza con conditioning metabólico.",
      highlights: [
        "Sobrecarga progresiva y fuerza estructurada",
        "Quema de grasa acelerada con conditioning táctico",
        "Ajustes semanales de cargas y macros",
        "Revisión técnica de levantamientos pesados (sentadilla, press, peso muerto)",
        "Interacción directa con el coach en WhatsApp"
      ],
      actionLabel: "INICIAR FOCUS FOR HIM",
      secondaryAction: null
    },
    hyrox: {
      title: "FOCUS FOR HYROX",
      subtitle: "Preparación Física Especializada para Competencia & Fitness",
      badge: "OFICIAL HYROX TRAINING PROTOCOL",
      whatsappMessage: "¡Hola Coach! ⚡ Me interesa la preparación física de FOCUS FOR HYROX para mi próxima competencia.",
      description: "El método definitivo para dominar la competencia de fitness más grande del mundo. Planes específicos para las 8 estaciones de HYROX (SkiErg, Sled Push/Pull, Burpees, Remo, Farmers, Sandbag, Wall Balls) y técnica de carrera fraccionada.",
      highlights: [
        "Periodización de carrera y transiciones Roxzone",
        "Simulacros y test de potencia en estaciones oficiales",
        "Planes para categorías Individuales, Dobles y Relevos",
        "Clases presenciales en Guadalajara o seguimiento 100% online",
        "Estrategia de pacing y control de zonas cardíacas"
      ],
      actionLabel: "PREPARARME PARA HYROX",
      secondaryAction: {
        label: "VER GUÍA COMPLETA HYROX",
        onClick: () => {
          onClose();
          onNavigateHyrox?.();
        }
      }
    }
  };

  const current = programData[program];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-xl bg-[#0E0F0C] border border-olive/40 rounded-sm p-6 sm:p-8 shadow-[0_0_50px_rgba(118,132,85,0.25)] text-left"
        >
          {/* Tactical Corners */}
          <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-olive pointer-events-none" />
          <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-olive pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-olive pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-olive pointer-events-none" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 border border-olive/30 text-smoke hover:bg-olive hover:text-black transition-colors flex items-center justify-center"
          >
            <X size={18} />
          </button>

          {/* Badge */}
          <div className="inline-block text-[10px] font-black tracking-[0.25em] text-olive uppercase bg-olive/15 border border-olive/30 px-3 py-1 rounded-sm mb-3">
            {current.badge}
          </div>

          <h3 className="stencil text-3xl sm:text-4xl text-white mb-2">
            {current.title}
          </h3>
          <p className="text-olive text-sm font-semibold mb-4">
            {current.subtitle}
          </p>

          <p className="text-smoke/80 text-sm leading-relaxed mb-6 font-medium">
            {current.description}
          </p>

          <div className="space-y-2.5 mb-8 bg-black/40 border border-olive/20 p-4 rounded-sm">
            <div className="text-[10px] font-black tracking-widest text-olive uppercase mb-2">
              LO QUE INCLUYE TU PROTOCOLO:
            </div>
            {current.highlights.map((h, i) => (
              <div key={i} className="flex items-start gap-2.5 text-xs text-smoke/90">
                <Check size={14} className="text-olive shrink-0 mt-0.5" />
                <span>{h}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <a
              href={`https://api.whatsapp.com/send?phone=523318042910&text=${encodeURIComponent(current.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-tactical py-3.5 px-6 text-xs sm:text-sm font-black tracking-widest uppercase flex items-center justify-center gap-2 text-center shadow-lg"
            >
              <MessageCircle size={16} />
              <span>{current.actionLabel}</span>
            </a>

            {current.secondaryAction && (
              <button
                onClick={current.secondaryAction.onClick}
                className="py-2.5 px-4 text-xs font-bold tracking-wider text-smoke/70 hover:text-olive border border-olive/20 hover:border-olive/50 transition-colors uppercase text-center"
              >
                {current.secondaryAction.label}
              </button>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
