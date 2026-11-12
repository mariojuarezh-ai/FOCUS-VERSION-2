import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = {
  es: [
    {
      question: "¿Necesito gimnasio?",
      answer: "No. Todos los planes se adaptan al lugar donde puedas entrenar, ya sea en gimnasio, en casa o incluso con equipo limitado. El objetivo es crear un plan que realmente se ajuste a tu vida."
    },
    {
      question: "¿Incluye plan de alimentación?",
      answer: "Depende del paquete que elijas. Algunos incluyen guía nutricional y seguimiento de alimentación, mientras que otros se enfocan únicamente en entrenamiento personalizado."
    },
    {
      question: "¿Cada cuánto hay seguimiento?",
      answer: "El seguimiento varía según el paquete. En Focused el acompañamiento es mucho más constante y cercano, mientras que en Essential se realiza dentro de los horarios y revisiones establecidas."
    },
    {
      question: "¿Cuánto tiempo necesito para entrenar?",
      answer: "No necesitas pasar 2 o 3 horas en el gimnasio. Las rutinas se adaptan completamente a tus tiempos, horarios y estilo de vida. La idea es que el entrenamiento se adapte a tu día, no que tu vida gire alrededor del entrenamiento."
    },
    {
      question: "¿Es realmente personalizado?",
      answer: "Sí. Todos los planes son 100% personalizados según tus objetivos, experiencia, gustos, horarios, lesiones y necesidades específicas."
    },
    {
      question: "¿Trabajas con mujeres?",
      answer: "Claro. Los programas se adaptan completamente a cada persona sin importar el objetivo, nivel o experiencia previa."
    },
    {
      question: "¿Puedo hacerlo desde casa?",
      answer: "Sí. Muchas personas comienzan entrenando desde casa y logran excelentes resultados. Lo importante es empezar y encontrar una rutina sostenible para ti."
    },
    {
      question: "¿Qué pasa si soy principiante?",
      answer: "No necesitas experiencia previa. El programa se adapta a tu nivel actual y avanzamos paso a paso para que te sientas cómodo y seguro durante el proceso."
    },
    {
      question: "¿Qué tipo de objetivos trabajas?",
      answer: "Pérdida de grasa, hipertrofia, recomposición corporal, fuerza, salud, entrenamiento híbrido, rendimiento deportivo y creación de hábitos sostenibles."
    },
    {
      question: "¿Qué pasa si tengo lesiones o molestias?",
      answer: "El entrenamiento se adapta a tus limitaciones, historial y molestias actuales. La prioridad siempre será progresar de manera segura y sostenible."
    },
    {
      question: "¿Cómo funciona el coaching online?",
      answer: "Después de iniciar, se realiza una evaluación para conocer tus objetivos, experiencia, horarios y necesidades. A partir de eso se crea un plan personalizado y se mantiene seguimiento constante durante todo el proceso."
    }
  ],
  en: [
    {
      question: "Do I need a gym?",
      answer: "No. All plans adapt to where you can train, whether in a gym, at home, or even with limited equipment. The goal is to create a plan that truly fits your life."
    },
    {
      question: "Is a meal plan included?",
      answer: "It depends on the package you choose. Some include a nutritional guide and diet tracking, while others focus solely on personalized training."
    },
    {
      question: "How often are the check-ins?",
      answer: "Check-ins vary by package. In Focused, support is much more constant and close, whereas in Essential it takes place within the established hours and reviews."
    },
    {
      question: "How much time do I need to train?",
      answer: "You don't need to spend 2 or 3 hours in the gym. Routines are fully adapted to your time, schedule, and lifestyle. The idea is that the training fits your day, not that your life revolves around training."
    },
    {
      question: "Is it really personalized?",
      answer: "Yes. All plans are 100% personalized based on your goals, experience, preferences, schedule, injuries, and specific needs."
    },
    {
      question: "Do you work with women?",
      answer: "Of course. Programs are fully adapted to each person regardless of the goal, level, or previous experience."
    },
    {
      question: "Can I do it from home?",
      answer: "Yes. Many people start training from home and achieve excellent results. The important thing is to start and find a sustainable routine for you."
    },
    {
      question: "What if I am a beginner?",
      answer: "You don't need previous experience. The program adapts to your current level and we advance step by step so you feel comfortable and safe during the process."
    },
    {
      question: "What kind of goals do you work on?",
      answer: "Fat loss, muscle hypertrophy, body recomposition, strength, health, hybrid training, sports performance, and building sustainable habits."
    },
    {
      question: "What if I have injuries or discomfort?",
      answer: "The training adapts to your limitations, history, and current discomfort. The priority will always be to progress safely and sustainably."
    },
    {
      question: "How does online coaching work?",
      answer: "After starting, an assessment is made to understand your goals, experience, schedule, and needs. From there, a personalized plan is created and constant tracking is maintained throughout the process."
    }
  ]
};

const texts = {
  es: {
    database: "Base de Datos",
    title: "PREGUNTAS",
    title_accent: "FRECUENTES",
    subtitle: "Despeja tus dudas antes de iniciar"
  },
  en: {
    database: "Database",
    title: "FREQUENTLY ASKED",
    title_accent: "QUESTIONS",
    subtitle: "Clear your doubts before starting"
  }
};

interface FAQProps {
  language: 'en' | 'es';
}

export const FAQ = ({ language }: FAQProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const currentFaqs = faqs[language];
  const t = texts[language];

  return (
    <section className="py-24 border-t border-olive/20 relative z-0 bg-[#0B0B0B]/60 backdrop-blur-sm">
      <div className="absolute top-0 right-0 py-2 px-8 bg-olive text-black font-black uppercase text-[10px] tracking-widest hidden md:block">
        {t.database}
      </div>
      
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16 md:mb-20">
          <div className="w-12 h-12 mx-auto rounded-full border-2 border-olive flex items-center justify-center p-2 mb-6 bg-[#0B0B0B]">
            <HelpCircle size={20} className="text-olive" />
          </div>
          <h2 className="stencil text-4xl md:text-6xl mb-4">
            {t.title} <span className="text-olive">{t.title_accent}</span>
          </h2>
          <div className="w-16 h-1 bg-olive mx-auto mb-6" />
          <p className="text-smoke/60 text-xs md:text-sm font-medium tracking-[0.2em] uppercase">
            {t.subtitle}
          </p>
        </div>

        <div className="space-y-4">
          {currentFaqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`glass-card border-olive/10 overflow-hidden transition-colors ${openIndex === index ? 'border-olive/30 shadow-[0_0_15px_rgba(182,216,21,0.05)]' : 'hover:border-olive/20'}`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="font-stencil text-lg md:text-xl text-smoke/90 tracking-wide pr-8">
                  {faq.question}
                </span>
                <ChevronDown 
                  size={20} 
                  className={`text-olive transition-transform duration-300 flex-shrink-0 ${openIndex === index ? 'rotate-180' : ''}`} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 pt-0 border-t border-white/5 mt-2">
                      <p className="text-smoke/70 font-mono text-sm leading-relaxed mt-4 border-l-2 border-olive/50 pl-4">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
