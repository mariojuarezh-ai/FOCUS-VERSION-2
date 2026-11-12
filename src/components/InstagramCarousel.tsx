import React from 'react';
import { motion } from 'motion/react';

const POSTS = [
  {
    id: 1,
    image: "https://thefocusplan.com/IMAGENES/FOTO%20IMAGEN%20SECCION%20PRINCIPAL%201.png",
    link: "https://www.instagram.com/the_focusplan/"
  },
  {
    id: 2,
    image: "https://thefocusplan.com/IMAGENES/FOTO%20CLASES%20ONLINE%201.png",
    link: "https://www.instagram.com/the_focusplan/"
  },
  {
    id: 3,
    image: "https://thefocusplan.com/IMAGENES/FOTO%20CLASES%20ONLINE%202.png",
    link: "https://www.instagram.com/the_focusplan/"
  },
  {
    id: 4,
    image: "https://thefocusplan.com/IMAGENES/FOTO%20SECCION%20PRINCIPAL%202.png",
    link: "https://www.instagram.com/the_focusplan/"
  }
];

export const InstagramCarousel = () => {
  return (
    <div className="w-full max-w-5xl mx-auto overflow-hidden my-12">
      <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-8 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {POSTS.map((post) => (
          <motion.a
            key={post.id}
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative shrink-0 w-64 h-64 sm:w-72 sm:h-72 snap-center rounded-lg overflow-hidden group border border-olive/20"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={post.image}
              alt="Instagram Post"
              className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <img 
                src="https://thefocusplan.com/IMAGENES/LOGO%20INSTAGRAM.png" 
                alt="Instagram" 
                className="w-10 h-10 object-contain drop-shadow-lg"
              />
            </div>
          </motion.a>
        ))}
      </div>
      <p className="text-xs text-smoke/40 mt-2 font-mono uppercase tracking-widest text-center">
        * Para usar posts reales, reemplaza este componente con tu código de Elfsight o LightWidget.
      </p>
    </div>
  );
};
