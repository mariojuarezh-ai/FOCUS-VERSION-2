import React from 'react';
import { motion } from 'motion/react';
import { Target, Clock, AlertTriangle, CheckCircle, Flame } from 'lucide-react';

const hyroxTexts = {
  es: {
    introHeading1: "Estamos listos para tu primer Hyrox",
    introHeading2: "HYROX TRAINING",
    introP1: "HYROX es mucho más que correr y hacer estaciones. Es estrategia, resistencia, pacing, fuerza y saber administrar tu cuerpo durante toda la competencia.",
    introP2: "Es una competición de fitness funcional que combina 8k de carrera con 8 estaciones de entrenamientos funcionales.",
    introP3: "1. Skierg, 2. Sled push, 3. Sled pull, 4. Burpees, 5. Rowerg, 6. Farmer's carry, 7. Sandbag lunges, 8. Wall balls.",
    introP4: "Se corre 1 km seguido de una estación de entrenamiento funcional, repitiendo esta secuencia 8 veces.",
    timingTitleBase: "Tiempos de tu ",
    timingTitleAccent: "Carrera",
    analysisTitleBase: "Análisis de ",
    analysisTitleAccent: "Estaciones",
    roxzoneBadge: "Información Crítica",
    roxzoneTitle: "ROXZONE",
    roxzoneP1: "La roxzone es \"la estación fantasma\" del hyrox, nadie la toma en cuenta al momento de hacer estrategias, pero aquí se nos pueden escapar minutos clave.",
    roxzoneP2: "La roxzone es el espacio entre estación y estación. El HYROX empieza a contar el tiempo una vez que salgo del túnel \"redbull\" hasta que llegue a la meta.",
    roxzoneP3: "Si entre estaciones camino, o tomo breaks de agua largos, esto suma a tu tiempo final.",
    conclusionTitle: "CONCLUSIÓN",
    conclusionP: "HYROX no es una carrera de ir al máximo, es una carrera de control y ritmo. Gana quien mantiene ritmo constante, FC estable, y técnica limpia.",
    conclusionBullet1: "Evitar picos de FC",
    conclusionBullet2: "Explotar fortalezas, mejorar debilidades",
    conclusionBullet3: "Moverte siempre hacia delante",
    conclusionBullet4: "Protege tus piernas, HYROX es piernas y aire",
    ctaTitle: "¿QUIERES QUE FOCUS TE ENTRENE PARA TU CARRERA?",
    ctaButton: "ENTRENA CON NOSOTROS",
    ctaTitleAlt: "DOMINA TU PRÓXIMA CARRERA HYROX CON NOSOTROS",
    ctaButtonAlt: "ENTRENA CON NOSOTROS",
    paceHeader: "PACE/KM",
    timeHeader: "TIEMPO",
    categoryHeader: "Categoría",
    bestHeader: "Mejor",
    averageHeader: "Promedio",
    tipsHeader: "Consejos",
    penaltiesHeader: "Penalties",
    station1Tips: ["No dejes que la adrenalina te domine, es la primer estación y un descontrol puede arruinar toda la carrera.", "Movimiento cadera+core+brazos en ese orden.", "Movimiento como peso muerto mejor que sentadilla.", "Ritmo de 1:50-2:20/500 mts."],
    station1Penalties: ["No terminar los 1000 mts sin que juez autorice.", "Brincar en la plataforma.", "Sacar los pies de la plataforma.", "En doubles: mover el damper de tu compañero.", "En doubles: pasarle las manijas a tu compañero.", "En doubles: no estar parado en el tapete 'doubles'"],
    station2Tips: ["Posición corporal manda. Inclínate bien, mantén espalda recta y utiliza tu peso corporal.", "Evita pasos largos, mejor cortos y continuos.", "No hagas 'hero reps' queriendo darlo todo, falta poco pero es tu segunda estación.", "Divide el recorrido estratégicamente."],
    station2Penalties: ["No cruzar completamente la línea.", "Salirse del carril asignado.", "Hacer menos de los 4 trayectos (12.5 mts c/u).", "En doubles: empujar juntos.", "En doubles: tu pareja debe ir detrás de ti.", "En doubles: que tu pareja invada el carril vecino."],
    station3Tips: ["Utiliza tu peso corporal a tu favor.", "Antes de cada jalón tensa bien la cuerda.", "Piensa el movimiento como piernas-core-brazos.", "Tirones largos y continuos.", "No hero reps."],
    station3Penalties: ["No cruzar completamente la línea.", "Salirse del carril asignado.", "Que la cuerda invada el carril vecino.", "Hacer menos de los 4 trayectos (12.5 mts c/u).", "Salirse del cuadro para jalar.", "En doubles: jalar juntos.", "En doubles: tu pareja debe estar de ti.", "En doubles: que tu pareja acomode la cuerda."],
    station4Tips: ["Mantener el salto bajo y largo, no vertical.", "Cuida mucho la técnica de los burpees.", "Controla tu respiración para evitar picos en tu FC.", "No sobre utilices las piernas con brincos potentes."],
    station4Penalties: ["Pecho no toca el suelo.", "No despegar con los pies juntos.", "No aterrizar con los pies juntos.", "Invadir otro carril.", "Debes iniciar la estación con un burpee.", "Tus manos al bajar deben estar a menos de 30 cm de tus pies.", "En doubles: tu compañero debe ir detrás de ti.", "Al hacer un cambio tu compañero debe empezar donde terminaste."],
    station5Tips: ["Estás en la mitad de la carrera, enfócate en mantener ritmo y bajar pulsaciones.", "Recupérate de los burpees.", "Movimiento piernas+core+brazos en ese orden.", "Usa más la fuerza de espalda en cada tirón para reservar piernas.", "Ritmo 1:40-2:10/500 mts."],
    station5Penalties: ["No terminar los 1000 mts sin autorización del juez.", "Tomar el mango antes de atar tus pies.", "En doubles: mover el damper de tu compañero.", "En doubles: pasarle el mango a tu compañero.", "En doubles: no estar parado en el tapete 'doubles'."],
    station6Tips: ["Core activo, pecho erguido y hombros abajo y atrás.", "Evita pasos largos que balanceen las KB.", "Ritmo continuo, estilo trote muy leve.", "Rota en las curvas, es más eficiente."],
    station6Penalties: ["Arrastrar o rodar las KB.", "Estorbar carriles vecinos.", "Al terminar no dejar en su lugar ordenadamente.", "En doubles: tu compañero debe ir detrás de ti.", "En doubles: no pueden cargar juntos la misma KB."],
    station7Tips: ["Zancadas ni muy largas ni muy cortas.", "Divide bien cuántas reps harás antes de cada pausa.", "Si estás en doubles, practica el cambio de costal.", "Controla tu respiración, es la penúltima estación."],
    station7Penalties: ["La rodilla trasera debe tocar el piso.", "Estorbar carriles vecinos.", "No dejar el costal en su lugar.", "No extender completa cadera y rodilla.", "El sandbag no puede tocar el piso.", "En doubles: compañero debe ir detrás.", "En doubles: la persona que cambia debe estar detrás del que lleva el sandbag."],
    station8Tips: ["Establece bien estrategia en repeticiones antes de cambio/pausa.", "Utiliza tus piernas como un resorte.", "Es tu última estación, da absolutamente todo.", "No entres en pánico si haces un 'no rep'.", "Aliméntate del apoyo del público."],
    station8Penalties: ["Cada rep debe romper el paralelo.", "Fallar el target.", "Empezar lanzando la bola en lugar de una sentadilla.", "No llegar a las 100 reps.", "En doubles: compañero debe estar en tapete esperando cambio."]
  },
  en: {
    introHeading1: "We are ready for your first Hyrox",
    introHeading2: "HYROX TRAINING",
    introP1: "HYROX is much more than running and doing stations. It is strategy, endurance, pacing, strength and knowing how to manage your body throughout the competition.",
    introP2: "It is a functional fitness competition that combines an 8k run with 8 functional training stations.",
    introP3: "1. Skierg, 2. Sled push, 3. Sled pull, 4. Burpees, 5. Rowerg, 6. Farmer's carry, 7. Sandbag lunges, 8. Wall balls.",
    introP4: "You run 1 km followed by one functional training station, repeating this sequence 8 times.",
    timingTitleBase: "Your Race ",
    timingTitleAccent: "Times",
    analysisTitleBase: "Stations ",
    analysisTitleAccent: "Analysis",
    roxzoneBadge: "Critical Information",
    roxzoneTitle: "ROXZONE",
    roxzoneP1: "The roxzone is the \"ghost station\" of HYROX, no one considers it when making strategies, but here key minutes can slip away.",
    roxzoneP2: "The roxzone is the space between stations. HYROX starts counting the time once you exit the \"redbull\" tunnel until you cross the finish line.",
    roxzoneP3: "If you walk between stations, or take long water breaks, this adds up to your final time.",
    conclusionTitle: "CONCLUSION",
    conclusionP: "HYROX is not a race of going all out, it's a race of control and rhythm. The winner is the one who maintains a constant pace, stable HR, and clean technique.",
    conclusionBullet1: "Avoid HR spikes",
    conclusionBullet2: "Exploit strengths, improve weaknesses",
    conclusionBullet3: "Always keep moving forward",
    conclusionBullet4: "Protect your legs, HYROX is legs and lungs",
    ctaTitle: "DO YOU WANT FOCUS TO TRAIN YOU FOR YOUR RACE?",
    ctaButton: "TRAIN WITH US",
    ctaTitleAlt: "DOMINATE YOUR NEXT HYROX RACE WITH US",
    ctaButtonAlt: "TRAIN WITH US",
    paceHeader: "PACE/KM",
    timeHeader: "TIME",
    categoryHeader: "Category",
    bestHeader: "Best",
    averageHeader: "Average",
    tipsHeader: "Tips",
    penaltiesHeader: "Penalties",
    station1Tips: ["Don't let adrenaline take over, it's the first station and losing control can ruin the whole race.", "Movement goes hips+core+arms in that order.", "Movement like a deadlift is better than a squat.", "Pace of 1:50-2:20/500 mts."],
    station1Penalties: ["Not finishing the 1000m without judge authorization.", "Jumping on the platform.", "Taking your feet off the platform.", "In doubles: moving your partner's damper.", "In doubles: passing the handles to your partner.", "In doubles: not standing on the 'doubles' mat."],
    station2Tips: ["Body position rules. Lean forward, keep a straight back and use your body weight.", "Avoid long steps, better to keep them short and steady.", "Don't do 'hero reps' trying to give it all, there's a long way to go, it's only your second station.", "Divide the distance strategically."],
    station2Penalties: ["Not fully crossing the line.", "Stepping out of the assigned lane.", "Doing less than the 4 sections (12.5 mts each).", "In doubles: pushing together.", "In doubles: your partner must be behind you.", "In doubles: your partner invading the adjacent lane."],
    station3Tips: ["Use your body weight in your favor.", "Before each pull, tighten the rope well.", "Think of the movement as legs-core-arms.", "Long and continuous pulls.", "No hero reps."],
    station3Penalties: ["Not fully crossing the line.", "Stepping out of the assigned lane.", "The rope invading the adjacent lane.", "Doing less than the 4 sections (12.5 mts each).", "Stepping out of the pulling box.", "In doubles: pulling together.", "In doubles: your partner must be behind you.", "In doubles: your partner adjusting the rope."],
    station4Tips: ["Keep the jump low and long, not vertical.", "Take good care of your burpee technique.", "Control your breathing to avoid HR spikes.", "Don't overuse your legs with powerful jumps."],
    station4Penalties: ["Chest does not touch the floor.", "Not taking off with feet together.", "Not landing with feet together.", "Invading another lane.", "You must start the station with a burpee.", "Your hands must be less than 30 cm from your feet as you drop.", "In doubles: your partner must be behind you.", "When switching, your partner must start where you finished."],
    station5Tips: ["You are halfway through the race, focus on keeping the pace and lowering your heart rate.", "Recover from the burpees.", "Movement goes legs+core+arms in that order.", "Use more back strength on each pull to save your legs.", "Pace of 1:40-2:10/500 mts."],
    station5Penalties: ["Not finishing the 1000m without judge authorization.", "Grabbing the handle before strapping your feet.", "In doubles: moving your partner's damper.", "In doubles: passing the handle to your partner.", "In doubles: not standing on the 'doubles' mat."],
    station6Tips: ["Active core, chest up and shoulders down and back.", "Avoid long steps that swing the KBs.", "Continuous pace, like a very slight jog.", "Rotate on the curves, it's more efficient."],
    station6Penalties: ["Dragging or rolling the KBs.", "Obstructing adjacent lanes.", "Not leaving them neatly in place when finished.", "In doubles: your partner must be behind you.", "In doubles: you cannot carry the same KB together."],
    station7Tips: ["Lunges neither too long nor too short.", "Divide well how many reps you will do before each pause.", "If you are in doubles, practice the sandbag switch.", "Control your breathing, it is the second to last station."],
    station7Penalties: ["The back knee must touch the floor.", "Obstructing adjacent lanes.", "Not leaving the sandbag in its place.", "Not fully extending hip and knee.", "The sandbag cannot touch the floor.", "In doubles: partner must be behind.", "In doubles: the person changing must be behind the one carrying the sandbag."],
    station8Tips: ["Establish a solid repetition strategy before a switch/pause.", "Use your legs like a spring.", "It is your last station, give absolutely everything.", "Don't panic if you get a 'no rep'.", "Feed off the crowd's support."],
    station8Penalties: ["Each rep must break parallel.", "Missing the target.", "Starting by throwing the ball instead of from a squat.", "Not reaching 100 reps.", "In doubles: partner must be standing on the mat waiting for the switch."]
  }
};

interface HyroxGuideProps {
  language: 'en' | 'es';
}

export const HyroxGuide = ({ language }: HyroxGuideProps) => {
  const t = hyroxTexts[language];

  return (
    <>
      {/* Background Video for Hyrox */}
      <div className="fixed inset-0 w-[100vw] h-[100dvh] z-[-1] pointer-events-none bg-black">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover pointer-events-none brightness-100 opacity-100"
        >
          <source src="https://thefocusplan.com/VIDEOS/VIDEO%20FONDO%20HIROX%202.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[3px]" />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="py-12 relative min-h-screen"
      >

      {/* Intro Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="w-24 h-24 mx-auto rounded-full border-4 border-olive flex items-center justify-center p-2 mb-8 bg-black/40 backdrop-blur-sm">
             <div className="w-full h-full border-2 border-olive rounded-full flex flex-col items-center justify-center">
                 <span className="text-[10px] font-black uppercase text-olive tracking-widest">Focus</span>
             </div>
          </div>
          <h1 className="text-6xl md:text-8xl stencil text-olive tracking-widest mb-6">
            <span className="sr-only">Entrenamiento HYROX en Guadalajara y Zapopan</span>
            HYROX
          </h1>
          <p className="text-xl md:text-2xl font-black uppercase tracking-widest bg-olive text-black inline-block px-4 py-2 mb-12">
            {t.introHeading1}
          </p>

          <div className="w-full max-w-4xl mx-auto mb-16 relative">
            <div className="absolute inset-0 bg-olive/20 translate-x-4 translate-y-4 rounded-sm"></div>
            <img 
              src="https://thefocusplan.com/IMAGENES/HYROX-HECTOR.png"
              alt="Atleta en entrenamiento de HYROX en Guadalajara preparado por nuestro coach - Focus Box"
              className="relative z-10 w-full h-auto object-cover rounded-sm border border-olive/30 shadow-2xl"
            />
          </div>

          {/* Alternative Top CTA */}
          <div className="max-w-4xl mx-auto mb-16 p-6 md:p-10 border border-olive/30 border-dashed bg-black/40 backdrop-blur-sm relative group hover:border-olive/60 transition-colors">
            <div className="absolute top-0 left-0 w-2 h-2 bg-olive -translate-x-1 -translate-y-1" />
            <div className="absolute top-0 right-0 w-2 h-2 bg-olive translate-x-1 -translate-y-1" />
            <div className="absolute bottom-0 left-0 w-2 h-2 bg-olive -translate-x-1 translate-y-1" />
            <div className="absolute bottom-0 right-0 w-2 h-2 bg-olive translate-x-1 translate-y-1" />
            
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-left">
              <div className="flex items-center gap-6">
                 <div className="p-4 bg-olive/10 rounded-full shrink-0">
                    <Target className="text-olive" size={32} />
                 </div>
                 <h2 className="text-xl md:text-2xl font-black uppercase tracking-widest text-smoke">{t.ctaTitleAlt}</h2>
              </div>
              <a 
                href="https://api.whatsapp.com/send?phone=523318042910&text=Hola,%20me%20interesa%20entrenar%20para%20HYROX"
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-tactical py-3 px-8 text-sm uppercase tracking-widest font-black shrink-0 text-center w-full md:w-auto"
              >
                {t.ctaButtonAlt}
              </a>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mt-8 text-left">
            <div className="font-mono text-smoke/90 leading-relaxed text-sm md:text-base space-y-6">
              <div className="border-l-2 border-olive pl-6 space-y-4">
                <p className="text-olive font-bold text-xl mb-4 tracking-widest uppercase">{t.introHeading2}</p>
                <p className="text-lg"><strong>HYROX</strong> {t.introP1.replace('HYROX ', '')}</p>
                <p className="pt-2 opacity-90">{t.introP2}</p>
              </div>
              <div className="bg-olive/5 border border-olive/20 p-6 rounded-sm mt-6">
                <p className="font-bold text-olive mb-2 uppercase tracking-wide text-xs">Secuencia de Carrera</p>
                <p className="opacity-80 mb-4">{t.introP4}</p>
                <p className="opacity-80 text-xs leading-relaxed">{t.introP3}</p>
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute inset-0 bg-olive/20 translate-x-4 translate-y-4 rounded-sm transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
              <video 
                autoPlay 
                muted 
                loop 
                playsInline
                className="relative z-10 w-full h-auto object-cover rounded-sm transition-all duration-500 border border-olive/30 shadow-2xl"
              >
                <source src="https://thefocusplan.com/VIDEOS/VIDEO%20HIROX.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Tiempos de carrera */}
      <section className="py-20 px-6 bg-olive/5 backdrop-blur-sm border-y border-olive/20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="stencil text-4xl md:text-5xl text-center mb-16">{t.timingTitleBase} <span className="text-olive">{t.timingTitleAccent}</span></h2>
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-8 grid md:grid-cols-2 gap-8">
              <TimingCard t={t} title="Singles Man" times={[["3:00","56-58 MIN"],["3:30","60-62 MIN"],["4:00","64-66 MIN"],["4:30","68-70 MIN"],["5:00","72-74 MIN"],["5:30","76-78 MIN"],["6:00","80-82 MIN"],["6:30","84-86 MIN"],["7:00","88-90 MIN"],["7:30","92-94 MIN"],["8:00","96-98 MIN"]]} />
              <TimingCard t={t} title="Singles Woman" times={[["3:00","58-60 MIN"],["3:30","62-64 MIN"],["4:00","66-68 MIN"],["4:30","70-72 MIN"],["5:00","74-76 MIN"],["5:30","78-80 MIN"],["6:00","82-84 MIN"],["6:30","86-88 MIN"],["7:00","90-92 MIN"],["7:30","94-96 MIN"],["8:00","98-100 MIN"]]} />
              <TimingCard t={t} title="Doubles Man" times={[["3:00","46-48 MIN"],["3:30","50-52 MIN"],["4:00","54-56 MIN"],["4:30","58-60 MIN"],["5:00","62-64 MIN"],["5:30","66-68 MIN"],["6:00","70-72 MIN"],["6:30","74-76 MIN"],["7:00","78-80 MIN"],["7:30","82-84 MIN"],["8:00","86-88 MIN"]]} />
              <TimingCard t={t} title="Doubles Woman" times={[["3:00","47-49 MIN"],["3:30","51-53 MIN"],["4:00","55-57 MIN"],["4:30","59-61 MIN"],["5:00","63-65 MIN"],["5:30","67-69 MIN"],["6:00","71-73 MIN"],["6:30","75-77 MIN"],["7:00","79-81 MIN"],["7:30","83-85 MIN"],["8:00","87-89 MIN"]]} />
              <TimingCard t={t} title="Mixed Doubles" times={[["3:00","47-49 MIN"],["3:30","51-53 MIN"],["4:00","55-57 MIN"],["4:30","59-61 MIN"],["5:00","63-65 MIN"],["5:30","67-69 MIN"],["6:00","71-73 MIN"],["6:30","75-77 MIN"],["7:00","79-81 MIN"],["7:30","83-85 MIN"],["8:00","87-89 MIN"]]} />
            </div>
            <div className="lg:col-span-4 relative group mt-12 lg:mt-0 lg:sticky lg:top-24">
              <div className="absolute inset-0 bg-olive/20 translate-x-4 translate-y-4 rounded-sm transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
              <img 
                src="https://thefocusplan.com/IMAGENES/HIROX%20CARRERA1.png" 
                alt="Hyrox Focus 2" 
                className="relative z-10 w-full h-auto object-cover rounded-sm transition-all duration-500 border border-olive/30 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Estaciones */}
      <section className="py-20 px-6 max-w-5xl mx-auto space-y-16 relative z-10">
        <h2 className="stencil text-4xl md:text-5xl text-center mb-16">{t.analysisTitleBase} <span className="text-olive">{t.analysisTitleAccent}</span></h2>
        
        <StationDetail 
          t={t} 
          title="1. SKI ERG (1000 MTS)" 
          times={[["Singles men", "3:05-3:20", "4:15-4:45"], ["Doubles men", "2:10-2:30", "2:45-3:15"], ["Singles women", "3:25-3:45", "4:45-5:15"], ["Doubles women", "2:20-2:40", "3:00-3:30"], ["Mixed doubles", "2:15-2:35", "2:55-3:25"]]} 
          tips={t.station1Tips} 
          penalties={t.station1Penalties}
          image="https://thefocusplan.com/IMAGENES/FOTO%20HIROX%20SKI%20ERG%201.png"
          imagePosition="right"
        />

        <StationDetail 
          t={t} 
          title="2. SLED PUSH (50 MTS)" 
          times={[["Singles men", "1:40-1:55", "2:30-3:00"], ["Doubles men", "1:10-1:25", "1:45-2:15"], ["Singles women", "2:00-2:20", "2:45-3:15"], ["Doubles women", "1:20-1:40", "1:55-2:25"], ["Mixed doubles", "1:15-1:35", "1:50-2:20"]]} 
          tips={t.station2Tips} 
          penalties={t.station2Penalties}
          image="https://thefocusplan.com/IMAGENES/FOTO%20HIROX%20SLED%201.png"
          imagePosition="left"
        />

        <StationDetail 
          t={t} 
          title="3. SLED PULL (50 MTS)" 
          times={[["Singles men", "1:45-2:00", "2:40-3:10"], ["Doubles men", "1:15-1:30", "1:55-2:25"], ["Singles women", "2:05-2:25", "2:55-3:30"], ["Doubles women", "1:25-1:45", "2:05-2:35"], ["Mixed doubles", "1:20-1:40", "2:00-2:30"]]} 
          tips={t.station3Tips} 
          penalties={t.station3Penalties} 
          image="https://thefocusplan.com/IMAGENES/FOTO%20HIROX%20SLED%20PULL.png"
          imagePosition="right"
        />

        <StationDetail 
          t={t} 
          title="4. BURPEE BROAD JUMP (80 MTS)" 
          times={[["Singles men", "2:30-2:50", "3:30-4:10"], ["Doubles men", "1:40-2:00", "2:30-3:00"], ["Singles women", "2:50-3:10", "4:00-4:40"], ["Doubles women", "1:50-2:10", "2:45-3:15"], ["Mixed doubles", "1:45-2:05", "2:40-3:10"]]} 
          tips={t.station4Tips} 
          penalties={t.station4Penalties} 
          image="https://thefocusplan.com/IMAGENES/FOTO%20HIROX%20BURPEE.png"
          imagePosition="left"
        />

        <StationDetail 
          t={t} 
          title="5. ROW ERG (1000 MTS)" 
          times={[["Singles men", "3:10-3:30", "4:20-4:50"], ["Doubles men", "2:15-2:35", "2:50-3:20"], ["Singles women", "3:35-3:55", "4:50-5:20"], ["Doubles women", "2:30-2:50", "3:10-3:40"], ["Mixed doubles", "2:25-2:45", "3:00-3:30"]]} 
          tips={t.station5Tips} 
          penalties={t.station5Penalties} 
          image="https://thefocusplan.com/IMAGENES/FOTO%20HIROX%20ROW%20HERG%202.png"
          imagePosition="right"
        />

        <StationDetail 
          t={t} 
          title="6. FARMERS CARRY (200 MTS)" 
          times={[["Singles men", "1:20-1:35", "2:00-2:30"], ["Doubles men", "1:00-1:15", "1:30-1:55"], ["Singles women", "1:35-1:55", "2:15-2:45"], ["Doubles women", "1:05-1:20", "1:40-2:05"], ["Mixed doubles", "1:05-1:20", "1:35-2:00"]]} 
          tips={t.station6Tips} 
          penalties={t.station6Penalties} 
          image="https://thefocusplan.com/IMAGENES/FOTO%20HIROX%20FARMER%20CARRY%201.png"
          imagePosition="left"
        />

        <StationDetail 
          t={t} 
          title="7. SANDBAG LUNGES (100 MTS)" 
          times={[["Singles men", "3:10-3:30", "4:20-5:00"], ["Doubles men", "2:10-2:30", "3:00-3:40"], ["Singles women", "3:30-3:50", "4:50-5:30"], ["Doubles women", "2:20-2:40", "3:15-3:55"], ["Mixed doubles", "2:15-2:35", "3:10-3:50"]]} 
          tips={t.station7Tips} 
          penalties={t.station7Penalties} 
          image="https://thefocusplan.com/IMAGENES/FOTO%20HIROX%20SANDBAG%201.png"
          imagePosition="right"
        />

        <StationDetail 
          t={t} 
          title="8. WALL BALLS (100 REPS)" 
          times={[["Singles men", "3:30-4:00", "5:30-6:30"], ["Doubles men", "2:20-2:50", "3:30-4:15"], ["Singles women", "3:50-4:20", "6:00-7:00"], ["Doubles women", "2:30-3:00", "3:45-4:30"], ["Mixed doubles", "2:25-2:55", "3:40-4:25"]]} 
          tips={t.station8Tips} 
          penalties={t.station8Penalties} 
          image="https://thefocusplan.com/IMAGENES/FOTO%20HIROX%20WALL%20BALLS%201.png"
          imagePosition="left"
        />
      </section>

      {/* ROXZONE & Conclusion */}
      <section className="py-20 px-6 max-w-6xl mx-auto space-y-16 relative z-10">
        <div className="grid md:grid-cols-5 gap-8 items-center">
          <div className="md:col-span-3 glass-card p-8 md:p-12 border-olive/20 relative overflow-hidden h-full flex flex-col justify-center">
             <div className="absolute top-0 right-0 py-2 px-8 bg-olive text-black font-black uppercase text-xs">{t.roxzoneBadge}</div>
             <h2 className="stencil text-4xl mb-6 text-olive mt-6">{t.roxzoneTitle}</h2>
             <div className="text-smoke/80 font-mono text-sm leading-relaxed space-y-4">
               <p>{t.roxzoneP1}</p>
               <p>{t.roxzoneP2}</p>
               <p>{t.roxzoneP3}</p>
             </div>
          </div>
          <div className="md:col-span-2 relative h-full min-h-[300px] group mt-8 md:mt-0">
            <div className="absolute inset-0 bg-olive/20 translate-x-4 translate-y-4 rounded-sm transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
            <img 
              src="https://thefocusplan.com/IMAGENES/FOTO%20HIROX%20ROXZONE%201.png" 
              alt="Hyrox Roxzone Focus" 
              className="absolute inset-0 w-full h-full object-cover rounded-sm transition-all duration-500 border border-olive/30 shadow-2xl"
            />
          </div>
        </div>

        <div className="border-t-2 border-olive/30 pt-16 mt-20">
           <div className="grid md:grid-cols-2 gap-12 items-center">
             <div className="relative group h-[300px] md:h-[500px]">
               <div className="absolute inset-0 bg-olive/20 -translate-x-4 translate-y-4 rounded-sm transition-transform group-hover:-translate-x-2 group-hover:translate-y-2"></div>
               <img 
                 src="https://thefocusplan.com/IMAGENES/FOTO%20HIROX%20CONCLUSION%201.png" 
                 alt="Hyrox Conclusion Focus" 
                 className="absolute inset-0 w-full h-full object-cover rounded-sm transition-all duration-500 border border-olive/30 shadow-2xl"
               />
             </div>
             <div className="text-left bg-olive/5 p-8 md:p-12 border border-olive/20 rounded-sm">
               <h2 className="stencil text-4xl md:text-5xl mb-8 text-olive">{t.conclusionTitle}</h2>
               <p className="font-mono text-sm leading-relaxed mb-8 text-smoke/90">
                 {t.conclusionP}
               </p>
               <ul className="space-y-4 font-mono text-sm text-smoke/80 font-bold bg-black/40 p-6 rounded-sm border border-olive/10">
                 <li className="flex items-start gap-3"><CheckCircle size={16} className="text-olive shrink-0 mt-1" /> {t.conclusionBullet1}</li>
                 <li className="flex items-start gap-3"><CheckCircle size={16} className="text-olive shrink-0 mt-1" /> {t.conclusionBullet2}</li>
                 <li className="flex items-start gap-3"><CheckCircle size={16} className="text-olive shrink-0 mt-1" /> {t.conclusionBullet3}</li>
                 <li className="flex items-start gap-3"><CheckCircle size={16} className="text-olive shrink-0 mt-1" /> {t.conclusionBullet4}</li>
               </ul>
             </div>
           </div>
        </div>

        {/* CTA SECTION */}
        <div className="mt-20 text-center bg-black/40 backdrop-blur-sm border border-olive/30 p-12 relative overflow-hidden group">
           <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_2px_2px,rgba(118,132,85,0.4)_1px,transparent_0)] bg-[length:20px_20px]" />
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-olive/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-olive/20 transition-colors" />
           <Target size={48} className="text-olive mx-auto mb-6 opacity-80" />
           <h2 className="stencil text-3xl md:text-5xl mb-8 relative z-10">{t.ctaTitle}</h2>
           <a 
             href="https://api.whatsapp.com/send?phone=523318042910&text=Hola,%20me%20interesa%20entrenar%20para%20HYROX"
             target="_blank" 
             rel="noopener noreferrer"
             className="btn-tactical py-4 px-10 text-sm md:text-lg uppercase tracking-widest font-black inline-block relative z-10"
           >
             {t.ctaButton}
           </a>
        </div>
      </section>
    </motion.div>
    </>
  );
};

const TimingCard = ({ t, title, times }: { t: any, title: string, times: string[][] }) => (
  <div className="glass-card p-6 border-olive/10 group hover:border-olive/40 transition-colors">
    <h3 className="text-olive font-black tracking-widest uppercase mb-6 text-center border-b border-olive/10 pb-4">{title}</h3>
    <div className="flex justify-between items-center text-[10px] opacity-40 font-black tracking-[0.2em] mb-4">
      <span>{t.paceHeader}</span>
      <span>{t.timeHeader}</span>
    </div>
    <div className="space-y-2 font-mono text-xs md:text-sm">
      {times.map((row, i) => (
        <div key={i} className="flex justify-between items-center group-hover:bg-white/[0.02] p-1 rounded-sm transition-colors">
          <span className="text-smoke/90">• {row[0]}</span>
          <span className="text-accent text-right">{row[1]}</span>
        </div>
      ))}
    </div>
  </div>
);

const StationDetail = ({ t, title, times, tips, penalties, image, imagePosition = 'right' }: { t: any, title: string, times: string[][], tips: string[], penalties: string[], image?: string, imagePosition?: 'left' | 'right' }) => (
  <div className="border border-white/10 bg-black/40 backdrop-blur-sm p-6 md:p-10 relative group hover:border-olive/30 transition-all rounded-sm shadow-xl">
    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-olive/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-8">
      <h3 className="stencil text-3xl md:text-4xl text-olive">{title}</h3>
    </div>
    
    <div className={`grid ${image ? 'lg:grid-cols-12' : 'md:grid-cols-2'} gap-10`}>
      <div className={`${image ? 'lg:col-span-7 grid md:grid-cols-2 gap-10' : 'contents'}`}>
        <div>
          <div className="grid grid-cols-3 gap-2 text-[10px] tracking-widest font-black uppercase text-olive/60 mb-4 border-b border-olive/20 pb-2">
            <span>{t.categoryHeader}</span>
            <span className="text-center">{t.bestHeader}</span>
            <span className="text-right">{t.averageHeader}</span>
          </div>
          <div className="space-y-3 font-mono text-xs">
            {times.map((row, i) => (
              <div key={i} className="grid grid-cols-3 gap-2">
                <span className="opacity-80 break-words">• {row[0]}</span>
                <span className="text-center opacity-70">{row[1]}</span>
                <span className="text-right opacity-70">{row[2]}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="space-y-8">
          <div>
             <h4 className="flex items-center gap-2 text-sm font-black tracking-widest uppercase text-olive mb-3"><Flame size={16} /> {t.tipsHeader}</h4>
             <ul className="space-y-2 text-xs md:text-sm font-mono text-smoke/70">
               {tips.map((tip, i) => (
                 <li key={i} className="pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-olive/40 rounded-full">{tip}</li>
               ))}
             </ul>
          </div>
          
          <div>
             <h4 className="flex items-center gap-2 text-sm font-black tracking-widest uppercase text-red-500 mb-3"><AlertTriangle size={16} /> {t.penaltiesHeader}</h4>
             <ul className="space-y-2 text-xs md:text-sm font-mono text-smoke/70">
               {penalties.map((penalty, i) => (
                 <li key={i} className="pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-red-500/40 rounded-full">{penalty}</li>
               ))}
             </ul>
          </div>
        </div>
      </div>
      
      {image && (
        <div className={`relative group w-full rounded-sm border border-olive/20 lg:col-span-5 shadow-2xl self-start mt-4 lg:mt-0 order-last ${imagePosition === 'left' ? 'lg:order-first' : ''}`}>
          <div className={`absolute inset-0 bg-olive/20 rounded-sm transition-transform ${imagePosition === 'left' ? '-translate-x-4 translate-y-4 group-hover:-translate-x-2 group-hover:translate-y-2' : 'translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2'}`}></div>
          <img src={image} alt={title} className="relative z-10 w-full h-auto object-cover object-top transition-all duration-500 rounded-sm aspect-square lg:aspect-[3/4]" />
        </div>
      )}
    </div>
  </div>
);
