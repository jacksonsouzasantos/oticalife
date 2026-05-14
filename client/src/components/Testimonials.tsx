import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * Testimonials - Premium Social Proof
 * Luxury carousel with real testimonials and smooth transitions
 * Design: Clean, sophisticated, with subtle animations
 */

const testimonials = [
  {
    id: 1,
    name: 'Edgar',
    rating: 5,
    comment: 'Atendimento impecável! Encontrei exatamente o que procurava. Recomendo muito!',
    source: 'Google Reviews',
  },
  {
    id: 2,
    name: 'Elisama',
    rating: 5,
    comment: 'Qualidade premium com preço justo. A Ótica Life é referência em João Pessoa.',
    source: 'Google Reviews',
  },
  {
    id: 3,
    name: 'Whanize',
    rating: 5,
    comment: 'Melhor preço que encontrei! Entrega rápida e produto de excelente qualidade.',
    source: 'Google Reviews',
  },
  {
    id: 4,
    name: 'Márcia',
    rating: 5,
    comment: 'Profissionais atenciosos e marcas exclusivas. Voltarei com certeza!',
    source: 'Google Reviews',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 } as any,
    },
  };

  return (
    <section id="testimonials" className="relative w-full py-24 bg-black overflow-hidden">
      {/* Background Pattern */}
      <motion.div
        className="absolute inset-0 opacity-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.05 }}
        transition={{ duration: 0.8 } as any}
        viewport={{ once: true }}
      >
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663637720308/CrQZWsQkHd7htcBqoSkPWK/testimonial-bg-pattern-73iBGE6H243mHNrQZ3hGtg.webp"
          alt=""
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="relative z-10 container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 } as any}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Prova Social Premium
          </h2>
          <p className="font-body text-gray-400 text-lg max-w-2xl mx-auto">
            O que nossos clientes dizem sobre a Ótica Life
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Main Carousel */}
          <div className="relative h-80 md:h-72">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, x: 100 }}
                animate={{
                  opacity: index === currentIndex ? 1 : 0,
                  x: index === currentIndex ? 0 : 100,
                }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 } as any}
                className="absolute inset-0"
              >
                <div className="card-premium h-full flex flex-col justify-between">
                  {/* Stars */}
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-[#FF8C00] text-2xl">
                        ★
                      </span>
                    ))}
                  </div>

                  {/* Comment */}
                  <p className="font-body text-xl text-white leading-relaxed flex-1">
                    "{testimonial.comment}"
                  </p>

                  {/* Author Info */}
                  <div className="border-t border-gray-700 pt-6">
                    <p className="font-display text-lg font-bold text-white">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-400 font-body">
                      {testimonial.source}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handlePrev}
              className="w-12 h-12 rounded-full glass-premium flex items-center justify-center text-[#FF8C00] hover:bg-[#FF8C00] hover:text-black transition-all duration-300"
            >
              <ChevronLeft size={24} />
            </motion.button>

            {/* Indicators */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'w-8 bg-[#FF8C00]'
                      : 'w-2 bg-gray-600 hover:bg-gray-400'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleNext}
              className="w-12 h-12 rounded-full glass-premium flex items-center justify-center text-[#FF8C00] hover:bg-[#FF8C00] hover:text-black transition-all duration-300"
            >
              <ChevronRight size={24} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
