import { motion } from 'motion/react';
import { Target, Star, Users, PieChart, Activity, Apple, Repeat, Smartphone, UserCheck, Settings, Play } from 'lucide-react';

const stenfitTexts = {
  es: {
    title: "STENFIT",
    propuestaTitleBase: "¿Qué es ",
    propuestaTitleAccent: "Stenfit?",
    propuestaSubtitle: "Propuesta de Valor",
    propuestaP1: "Stenfit es una plataforma digital (disponible en versión web y aplicación móvil para iOS y Android) diseñada específicamente para entrenadores personales y profesionales del fitness que buscan digitalizar sus servicios, optimizar la gestión de sus clientes y expandir su negocio en línea de manera profesional e intuitiva.",
    propuestaP2: "Su lema principal se enfoca en la productividad: \"Despídete de las hojas de Excel y los archivos PDF\" para centralizar todo el control del entrenamiento en un solo lugar.",
    featuresTitleBase: "Características y ",
    featuresTitleAccent: "Funcionalidades Clave",
    features: [
      {
        title: "Planificación de Entrenamientos Inteligente",
        description: "Permite crear y estructurar planes y rutinas de entrenamiento de forma rápida, así como guardar \"sesiones plantilla\" reutilizables para ahorrar horas de trabajo."
      },
      {
        title: "Contenido Audiovisual Propio",
        description: "Los entrenadores pueden subir o grabar sus propios videos para explicar detalladamente la ejecución de cada ejercicio, brindando una experiencia 100% personalizada."
      },
      {
        title: "Gestión y Segmentación de Clientes",
        description: "Facilita la organización de los usuarios de manera individual o a través de grupos de clientes con necesidades similares."
      },
      {
        title: "Seguimiento de Métricas y Progreso",
        description: "Permite llevar un control exhaustivo de la evolución de los entrenados mediante el registro de métricas clave (peso, medidas corporales, perímetros, evaluaciones gráficas de rendimiento e imágenes de progreso)."
      },
      {
        title: "Tests de Valoración",
        description: "Herramientas integradas para realizar evaluaciones iniciales y periódicas de la condición física de los clientes."
      },
      {
        title: "Integración de Nutrición",
        description: "Cuenta con una pestaña dedicada a la nutrición que permite adjuntar planes de alimentación (documentos PDF), generar listas de la compra y dar seguimiento nutricional complementario."
      },
      {
        title: "Interfaz de Doble Rol",
        description: "Cuenta con un ecosistema adaptado tanto para la comodidad de gestión del entrenador (Modo Entrenador) como para la visualización sencilla del cliente final (Modo Usuario)."
      }
    ],
    tutorialTitleBase: "Tutorial ",
    tutorialTitleAccent: "para Clientes",
    tutorialIntro: "¡Bienvenido a tu nueva plataforma de entrenamiento! Con Stenfit podrás ver tus rutinas, revisar los videos explicativos de cada ejercicio que suba tu entrenador, registrar tus comidas y subir tus fotos de progreso para alcanzar tus metas.",
    tutorialSteps: [
      {
        title: "1. Descarga la aplicación en tu celular",
        description: "Dependiendo del tipo de teléfono que tengas, elige una de las siguientes opciones:",
        subSteps: [
          {
            title: "Si usas Android:",
            image: "https://thefocusplan.com/IMAGENES/PLAYSTORE%20ESP%20SIN%20FONDO.png",
            link: "https://play.google.com/store/apps/details?id=com.stenfit.stenfit&hl=en_US&gl=US&pli=1",
            items: [
              "Abre la aplicación Google Play Store en tu teléfono.",
              "En el buscador de la parte superior, escribe \"Stenfit\".",
              "Selecciona la aplicación oficial y presiona el botón Instalar."
            ]
          },
          {
            title: "Si usas iPhone (iOS):",
            image: "https://thefocusplan.com/IMAGENES/DESCARGA%20APPSTORE%20ESP%20SIN%20FONDO.png",
            link: "https://apps.apple.com/es/app/stenfit/id1511592863",
            items: [
              "Abre la App Store en tu dispositivo.",
              "Toca la lupa de búsqueda e ingresa \"Stenfit\".",
              "Ubica la aplicación oficial y pulsa el botón Obtener (confirma la descarga con tu Face ID, Touch ID o contraseña)."
            ]
          }
        ]
      },
      {
        title: "2. Accede a tu cuenta por primera vez",
        description: "Nota importante: Tú no necesitas crear una cuenta desde cero ni realizar ningún pago. Tu entrenador es el encargado de darte de alta en el sistema.",
        items: [
          "Abre la aplicación de Stenfit en tu celular.",
          "Revisa tu correo electrónico (busca también en la carpeta de Spam o No deseados). Deberás tener un correo de invitación enviado por la plataforma o por tu entrenador con tus datos de acceso.",
          "Introduce el correo electrónico y la contraseña temporal que te asignaron para iniciar sesión."
        ]
      },
      {
        title: "3. Configura tu perfil inicial de progreso",
        description: "Una vez dentro de la aplicación, es momento de registrar tu punto de partida para que tu entrenador pueda evaluar tus avances:",
        items: [
          "Completa tus datos básicos: Llena los campos de peso actual, estatura y medidas corporales si la aplicación te lo solicita en tu primer ingreso.",
          "Sube tus fotos de control: Dirígete a la sección de progreso y carga tus fotografías iniciales (de frente, perfil y espalda). Estas imágenes son completamente privadas y solo las podrán ver tú y tu entrenador."
        ]
      },
      {
        title: "4. Cómo ver y usar tu plan diario",
        description: "¡Ya estás listo para entrenar! Cuando entres a la aplicación cada día, verás tu panel principal:",
        items: [
          "Tus Rutinas: En la pestaña de entrenamientos verás los ejercicios asignados para el día. Al presionar sobre cada ejercicio, podrás ver el video explicativo que tu entrenador grabó o seleccionó para ti, garantizando que hagas el movimiento con la técnica correcta.",
          "Tu Nutrición: Si tu entrenador te asignó un plan de alimentación, podrás descargar tu PDF de dieta directamente desde la pestaña de nutrición, revisar tus listas de compras o ver las pautas nutricionales de la semana."
        ]
      }
    ]
  },
  en: {
    title: "STENFIT",
    propuestaTitleBase: "What is ",
    propuestaTitleAccent: "Stenfit?",
    propuestaSubtitle: "Value Proposition",
    propuestaP1: "Stenfit is a digital platform (available in web version and mobile application for iOS and Android) designed specifically for personal trainers and fitness professionals who seek to digitize their services, optimize client management, and expand their online business in a professional and intuitive way.",
    propuestaP2: "Its main motto focuses on productivity: \"Say goodbye to Excel sheets and PDF files\" to centralize all training control in one place.",
    featuresTitleBase: "Key Features and ",
    featuresTitleAccent: "Functionalities",
    features: [
      {
        title: "Smart Training Planning",
        description: "Allows you to create and structure plans and training routines quickly, as well as save reusable \"template sessions\" to save hours of work."
      },
      {
        title: "Own Audiovisual Content",
        description: "Trainers can upload or record their own videos to explain the execution of each exercise in detail, providing a 100% personalized experience."
      },
      {
        title: "Client Management and Segmentation",
        description: "Facilitates the organization of users individually or through groups of clients with similar needs."
      },
      {
        title: "Metrics and Progress Tracking",
        description: "Allows comprehensive control of trainees' evolution by recording key metrics (weight, body measurements, perimeters, graphical performance evaluations, and progress images)."
      },
      {
        title: "Assessment Tests",
        description: "Integrated tools to perform initial and periodic evaluations of clients' physical condition."
      },
      {
        title: "Nutrition Integration",
        description: "Features a dedicated nutrition tab that allows attaching meal plans (PDF documents), generating shopping lists, and providing complementary nutritional tracking."
      },
      {
        title: "Dual-Role Interface",
        description: "Features an ecosystem adapted for both the trainer's management comfort (Trainer Mode) and the final client's easy viewing (User Mode)."
      }
    ],
    tutorialTitleBase: "Client ",
    tutorialTitleAccent: "Tutorial",
    tutorialIntro: "Welcome to your new training platform! With Stenfit you will be able to see your routines, review the explanatory videos of each exercise that your trainer uploads, log your meals and upload your progress photos to reach your goals.",
    tutorialSteps: [
      {
        title: "1. Download the app on your phone",
        description: "Depending on the type of phone you have, choose one of the following options:",
        subSteps: [
          {
            title: "If you use Android:",
            image: "https://thefocusplan.com/IMAGENES/PLAYSTORE%20ENG%20SIN%20FONDO.png",
            link: "https://play.google.com/store/apps/details?id=com.stenfit.stenfit&hl=en_US&gl=US&pli=1",
            items: [
              "Open the Google Play Store app on your phone.",
              "In the search bar at the top, type \"Stenfit\".",
              "Select the official app and press the Install button."
            ]
          },
          {
            title: "If you use iPhone (iOS):",
            image: "https://thefocusplan.com/IMAGENES/DESCARGA%20APPSTORE%20ENG%20SIN%20FONDO.png",
            link: "https://apps.apple.com/es/app/stenfit/id1511592863",
            items: [
              "Open the App Store on your device.",
              "Tap the search icon and enter \"Stenfit\".",
              "Locate the official app and press the Get button (confirm download with Face ID, Touch ID, or password)."
            ]
          }
        ]
      },
      {
        title: "2. Access your account for the first time",
        description: "Important note: You do not need to create an account from scratch or make any payment. Your trainer is responsible for registering you in the system.",
        items: [
          "Open the Stenfit app on your phone.",
          "Check your email (also look in the Spam or Junk folder). You should have an invitation email sent by the platform or by your trainer with your access details.",
          "Enter the email and temporary password assigned to you to log in."
        ]
      },
      {
        title: "3. Set up your initial progress profile",
        description: "Once inside the application, it is time to record your starting point so your trainer can evaluate your progress:",
        items: [
          "Complete your basic details: Fill in the current weight, height, and body measurements fields if the application requests it upon your first login.",
          "Upload your control photos: Go to the progress section and upload your initial photographs (front, side, and back). These images are completely private and can only be seen by you and your trainer."
        ]
      },
      {
        title: "4. How to view and use your daily plan",
        description: "You are ready to train! When you enter the app each day, you will see your main dashboard:",
        items: [
          "Your Routines: In the workouts tab you will see the exercises assigned for the day. By pressing each exercise, you will be able to see the explanatory video that your trainer recorded or selected for you, ensuring that you perform the movement with the correct technique.",
          "Your Nutrition: If your trainer assigned you a meal plan, you can download your diet PDF directly from the nutrition tab, review your shopping lists, or view the nutritional guidelines for the week."
        ]
      }
    ]
  }
};

const icons = [Target, Star, Users, PieChart, Activity, Apple, Repeat];
const tutorialIcons = [Smartphone, UserCheck, Settings, Play];

interface StenfitGuideProps {
  language: 'en' | 'es';
}

export const StenfitGuide = ({ language }: StenfitGuideProps) => {
  const t = stenfitTexts[language];

  return (
    <>
      <div className="fixed inset-0 w-[100vw] h-[100dvh] z-[-1] pointer-events-none bg-black">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover pointer-events-none brightness-100 opacity-100"
          src="https://thefocusplan.com/VIDEOS/VIDEO%20FONDO%20STENFIT.mp4"
        />
        <div className="absolute inset-0 bg-black/60 pointer-events-none"></div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="pb-24 pt-10 relative min-h-screen"
      >

      {/* Tutorial Section */}
      <section className="py-24 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="stencil text-4xl md:text-5xl mb-6">
              <span className="sr-only">Tutorial de la Plataforma Stenfit para Entrenamiento en Línea</span>
              {t.tutorialTitleBase} <span className="text-olive">{t.tutorialTitleAccent}</span>
            </h1>
            <p className="text-smoke/80 font-mono text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
              {t.tutorialIntro}
            </p>
          </div>

          <div className="space-y-12">
            {t.tutorialSteps.map((step, idx) => {
              const Icon = tutorialIcons[idx % tutorialIcons.length];
              return (
                <div key={idx} className="flex flex-col md:flex-row gap-6 md:gap-12 relative">
                  {/* Timeline Connection */}
                  {idx !== t.tutorialSteps.length - 1 && (
                    <div className="hidden md:block absolute left-8 top-24 bottom-[-3rem] w-px bg-olive/20" />
                  )}
                  
                  <div className="shrink-0 flex items-start gap-6">
                    <div className="w-16 h-16 rounded-full border-2 border-olive flex items-center justify-center bg-[#0B0B0B] text-olive z-10 shrink-0 shadow-[0_0_20px_rgba(204,255,0,0.15)] relative">
                      <Icon size={24} />
                    </div>
                  </div>
                  
                  <div className="flex-1 glass-card p-8 border-olive/20 hover:border-olive/50 transition-colors">
                    <h3 className="stencil tracking-wider text-2xl text-white mb-4">{step.title}</h3>
                    <p className="font-mono text-sm text-smoke/70 mb-6 leading-relaxed bg-olive/5 p-4 rounded-sm border-l-2 border-olive">
                      {step.description}
                    </p>

                    {step.items && (
                      <ul className="space-y-4 font-mono text-sm text-smoke/90">
                        {step.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex gap-3 items-start">
                            <span className="w-1.5 h-1.5 rounded-full bg-olive shrink-0 mt-1.5" />
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {step.subSteps && (
                      <div className="grid md:grid-cols-2 gap-6 mt-6">
                        {step.subSteps.map((subStep: any, subIdx: number) => (
                          <div key={subIdx} className="bg-black/40 border border-olive/10 p-5 rounded-sm flex flex-col h-full">
                            <h4 className="font-bold text-olive mb-4 uppercase tracking-wider text-xs">{subStep.title}</h4>
                            <ul className="space-y-3 font-mono text-sm text-smoke/80 flex-grow">
                              {subStep.items.map((item: string, itemIdx: number) => (
                                <li key={itemIdx} className="flex gap-3 items-start">
                                  <span className="w-1.5 h-1.5 rounded-full bg-olive shrink-0 mt-1.5" />
                                  <span className="leading-relaxed text-xs">{item}</span>
                                </li>
                              ))}
                            </ul>
                            {subStep.image && (
                              <div className="mt-6 pt-6 border-t border-olive/10 flex justify-center">
                                {subStep.link ? (
                                  <a href={subStep.link} target="_blank" rel="noopener noreferrer">
                                    <img src={subStep.image} alt={subStep.title} className="h-12 w-auto object-contain hover:scale-105 transition-transform cursor-pointer" />
                                  </a>
                                ) : (
                                  <img src={subStep.image} alt={subStep.title} className="h-12 w-auto object-contain hover:scale-105 transition-transform cursor-pointer" />
                                )}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-20 pt-16 border-t border-olive/20 text-center">
             <h3 className="stencil tracking-wider text-2xl text-white mb-8">
               {language === 'es' ? 'TUTORIAL EN VIDEO' : 'VIDEO TUTORIAL'}
             </h3>
             <div className="rounded-xl overflow-hidden border border-olive/30 shadow-[0_0_40px_rgba(118,132,85,0.15)] relative max-w-[320px] aspect-[9/16] mx-auto bg-black/60">
                 <video 
                     className="w-full h-full object-cover"
                     controls
                     autoPlay
                     muted
                     loop
                     playsInline
                     preload="metadata"
                     src="https://thefocusplan.com/VIDEOS/TUTORIAL%20APLICACION.mp4"
                 />
             </div>
          </div>

        </div>
      </section>
    </motion.div>
    </>
  );
};
