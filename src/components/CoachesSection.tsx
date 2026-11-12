import { motion } from 'framer-motion';

interface CoachesProps {
  language: 'es' | 'en';
}

export function CoachesSection({ language }: CoachesProps) {
  const t = {
    es: {
      subtitle: "NUESTRO EQUIPO",
      title: "ENTRENADORES",
      main: {
        name: "HÉCTOR",
        role: "Head Coach, Fundador y Encargado de Focus Box",
        story_title: "Mi historia",
        story: [
          "Me llamo Héctor y llevo más de 11 años dentro del mundo del fitness y el entrenamiento personal.",
          "Curiosamente, todo comenzó mientras estudiaba arquitectura y buscaba un trabajo para poder cubrir gastos, universidad y mi día a día. Fue entonces cuando la vida me llevó a un gimnasio de boxeo… y desde el primer día supe que había encontrado algo que realmente me apasionaba.",
          "Con el tiempo entendí que esto nunca se trató solamente de entrenar o cambiar físicos. Lo que más disfruto de este trabajo es poder ser una pequeña parte del cambio en la vida de una persona. No hay nada más satisfactorio para mí que ver a alguien sentirse más seguro consigo mismo, eliminar dolores de espalda o rodilla, recuperar hábitos saludables, llegar a su peso ideal para un momento importante o simplemente volver a sentirse bien frente al espejo.",
          "Mi filosofía de trabajo siempre ha sido la misma: crear cambios sostenibles y realistas. Nunca vas a escucharme decir que existen alimentos “malos”, que debes vivir restringido o pasar 3 horas al día en el gimnasio para lograr resultados.",
          "Lo que busco es ayudarte a encontrar una forma de entrenar y alimentarte que realmente se adapte a tu vida, a tus objetivos y a tu personalidad. Un proceso que puedas disfrutar, mantener y convertir en parte de tu estilo de vida.",
          "Lo que comenzó como un entrenador de boxeo amateur, con los años evolucionó hacia un enfoque mucho más completo: transformación física, hipertrofia, pérdida de grasa, rendimiento deportivo, entrenamiento híbrido, preparación para HYROX y salud integral.",
          "Porque al final, esto no se trata solamente de verte bien. Se trata de sentirte bien, rendir mejor y construir una mejor versión de ti mismo."
        ]
      },
      aux1: {
        name: "MANUEL",
        role: "Entrenador Físico y de Boxeo",
        story: [
          "Tengo 18 años y llevo más de 6 años dentro del mundo del entrenamiento físico y los deportes de contacto. Comencé desde los 11 años practicando ejercicio funcional y boxeo, desarrollando disciplina, resistencia y experiencia física y mental.",
          "Cuento con 2 años de experiencia laboral en gimnasios de boxeo y ejercicio funcional, enseñando a personas de diferentes niveles a mejorar su condición, técnica, fuerza y rendimiento.",
          "Mi enfoque es ayudar a las personas a desarrollar fuerza, condición y confianza a través de entrenamientos intensos, funcionales y enfocados en resultados reales."
        ]
      },
      aux2: {
        name: "FRANCISCO",
        role: "Entrenador Físico y de Boxeo",
        story: [
          "Mi filosofía es simple: si vas a hacer algo, hazlo bien. En mi clase no solo se entrena el cuerpo, se forja el carácter. Me apasiona ver cómo mis alumnos superan sus propios límites.",
          "Cuento con 6 años de trayectoria combinando la técnica del boxeo con la potencia del entrenamiento funcional. Soy un amante del deporte y esa mentalidad competitiva la traslado a cada entrenamiento.",
          "Me esfuerzo al máximo en cada planeación porque amo lo que hago. Mi energía será el motor de tu progreso.",
          "\"Más que un entrenamiento, es disciplina aplicada. Domina el boxeo, mejora tu funcional y rompe tus límites conmigo.\""
        ]
      }
    },
    en: {
      subtitle: "OUR TEAM",
      title: "COACHES",
      main: {
        name: "HÉCTOR",
        role: "Head Coach, Founder & Manager of Focus Box",
        story_title: "My story",
        story: [
          "My name is Héctor and I have been in the fitness and personal training world for over 11 years.",
          "Curiously, it all started while I was studying architecture and looking for a job to cover expenses, university and my day-to-day. That's when life took me to a boxing gym... and from the first day I knew I had found something I was truly passionate about.",
          "Over time I understood that this was never just about training or changing physiques. What I enjoy most about this job is being able to be a small part of the change in a person's life. There is nothing more satisfying for me than seeing someone feel more confident, eliminate back or knee pain, recover healthy habits, reach their ideal weight for an important moment or simply feel good in front of the mirror again.",
          "My work philosophy has always been the same: to create sustainable and realistic changes. You will never hear me say that there are \"bad\" foods, that you must live restricted or spend 3 hours a day in the gym to achieve results.",
          "What I seek is to help you find a way to train and eat that truly adapts to your life, your goals and your personality. A process that you can enjoy, maintain and make part of your lifestyle.",
          "What started as an amateur boxing coach, over the years evolved into a much more comprehensive approach: physical transformation, hypertrophy, fat loss, sports performance, hybrid training, HYROX preparation and overall health.",
          "Because in the end, this is not just about looking good. It's about feeling good, performing better and building a better version of yourself."
        ]
      },
      aux1: {
        name: "MANUEL",
        role: "Physical & Boxing Coach",
        story: [
          "I am 18 years old and have been in the world of physical training and combat sports for over 6 years. I started at 11 practicing functional exercise and boxing, developing discipline, endurance, and both physical and mental experience.",
          "I have 2 years of work experience in boxing and functional training gyms, teaching people of all levels how to improve their physical condition, technique, strength, and performance.",
          "My focus is helping people develop strength, conditioning, and confidence through intense, functional workouts focused on real results."
        ]
      },
      aux2: {
        name: "FRANCISCO",
        role: "Physical & Boxing Coach",
        story: [
          "My philosophy is simple: if you are going to do something, do it right. In my class, we don't just train the body, we forge character. I am passionate about seeing my students push beyond their own limits.",
          "I have 6 years of experience combining boxing technique with the power of functional training. I am a sports lover and I bring that competitive mindset to every workout.",
          "I give my best in every planning because I love what I do. My energy will be the engine of your progress.",
          "\"More than a workout, it's applied discipline. Master boxing, improve your functional fitness, and break your limits with me.\""
        ]
      }
    }
  }[language];

  // Placeholder Unsplash images for fitness coaches. They will be in color per user request.
  const mainImage = "https://thefocusplan.com/IMAGENES/FOTO%20HECTOR%202%20SIN%20MARCA%20DE%20AGUA.png"; 
  const aux1Image = "https://thefocusplan.com/IMAGENES/FOTO-MANUEL1-SIN%20MARCA%20DE%20AGUA.png";
  const aux2Image = "https://thefocusplan.com/IMAGENES/FOTO-FRANCISCO1%20SIN%20MARCA%20DE%20AGUA.jpg";

  return (
    <section className="py-24 px-6 bg-transparent border-t border-olive/20 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <header className="text-center mb-16 md:mb-24">
          <div className="text-[10px] text-olive font-black tracking-[0.3em] uppercase mb-4">{t.subtitle}</div>
          <h2 className="stencil text-4xl md:text-5xl">{t.title}</h2>
          <div className="w-16 h-1 bg-olive mx-auto mt-6" />
        </header>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 max-w-5xl mx-auto">
          {/* Main Coach */}
          <div className="md:col-span-12 group border border-olive/30 hover:border-olive transition-all duration-500 relative bg-black/40 backdrop-blur-sm flex flex-col hover:shadow-[0_0_30px_rgba(118,132,85,0.15)]">
            <div className="w-full p-8 flex justify-center items-end bg-black/30">
               <img 
                 src={mainImage}
                 alt={`Coach de entrenamiento en Guadalajara especializado en HYROX, training táctico y boxeo - ${t.main.name}`}
                 className="w-full max-w-sm h-auto object-contain transition-transform duration-1000 group-hover:scale-105 relative z-10"
               />
             </div>
             <div className="w-full p-8 md:p-12 flex flex-col justify-center border-t border-olive/20">
               <div className="text-olive text-sm font-black tracking-widest uppercase mb-3 text-center">{t.main.role}</div>
               <h3 className="stencil text-3xl md:text-5xl text-smoke mb-6 text-center">{t.main.name}</h3>
               <div className="font-mono text-smoke/70 text-sm md:text-base leading-relaxed space-y-4 max-w-3xl mx-auto text-center">
                 <p className="font-bold text-olive mb-2 uppercase tracking-widest">{t.main.story_title}</p>
                 {t.main.story.map((paragraph: string, idx: number) => (
                   <p key={idx}>{paragraph}</p>
                 ))}
               </div>
             </div>
           </div>
 
           {/* Aux Coaches */}
           <div className="md:col-span-6 group border border-olive/30 hover:border-olive transition-all duration-500 relative bg-black/40 backdrop-blur-sm hover:shadow-[0_0_30px_rgba(118,132,85,0.15)] flex flex-col">
             <div className="relative h-[350px] md:h-[450px] overflow-hidden flex justify-center items-center p-8 bg-black/30">
               <img 
                 src={aux1Image}
                 alt={`Coach en Guadalajara de entrenamiento funcional, boxeo y acondicionamiento - ${t.aux1.name}`}
                 className="w-full h-full object-contain transition-transform duration-1000 group-hover:scale-105"
               />
             </div>
             <div className="p-8 flex-grow flex flex-col border-t border-olive/20">
               <div className="text-olive text-xs font-black tracking-widest uppercase mb-2">{t.aux1.role}</div>
               <h3 className="stencil text-2xl text-smoke mb-4">{t.aux1.name}</h3>
               <div className="font-mono text-smoke/70 text-sm leading-relaxed space-y-3">
                 {t.aux1.story ? t.aux1.story.map((p: string, i: number) => <p key={i}>{p}</p>) : <p>{(t.aux1 as any).desc}</p>}
               </div>
             </div>
           </div>
 
           <div className="md:col-span-6 group border border-olive/30 hover:border-olive transition-all duration-500 relative bg-black/40 backdrop-blur-sm hover:shadow-[0_0_30px_rgba(118,132,85,0.15)] flex flex-col">
             <div className="relative h-[350px] md:h-[450px] overflow-hidden flex justify-center items-center p-8 bg-black/30">
               <img 
                 src={aux2Image}
                 alt={`Coach de entrenamiento de fuerza y training híbrido en Guadalajara - ${t.aux2.name}`}
                 className="w-full h-full object-contain transition-transform duration-1000 group-hover:scale-105"
               />
             </div>
            <div className="p-8 flex-grow flex flex-col border-t border-olive/20">
              <div className="text-olive text-xs font-black tracking-widest uppercase mb-2">{t.aux2.role}</div>
              <h3 className="stencil text-2xl text-smoke mb-4">{t.aux2.name}</h3>
              <div className="font-mono text-smoke/70 text-sm leading-relaxed space-y-3">
                {t.aux2.story ? t.aux2.story.map((p: string, i: number) => <p key={i} className={p.startsWith('"') ? "italic text-olive font-medium mt-4" : ""}>{p}</p>) : <p>{(t.aux2 as any).desc}</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
