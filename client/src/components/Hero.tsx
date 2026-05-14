import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

/**
 * Hero Section - Dark Luxury Cinematography
 * Full-width hero with premium eyewear imagery, parallax effect, and cinematic animations
 * Design: Floating eyewear composition with depth layers and smooth motion
 */

const heroImageUrl = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663637720308/CrQZWsQkHd7htcBqoSkPWK/hero-eyewear-composition-SE3oK3ppCTvavmyCpcCwKt.webp';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' } as any,
    },
  };

  return (
    <section
      id="home"
      className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' } as any}
      >
        <img
          src={heroImageUrl}
          alt="Premium Eyewear Collection"
          className="w-full h-full object-cover opacity-40"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-60" />
      </motion.div>

      {/* Content Container */}
      <motion.div
        className="relative z-10 container max-w-4xl text-center px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Headline */}
        <motion.h1
          variants={itemVariants}
          className="font-display text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
        >
          Ver bem é estilo.
          <br />
          <span className="text-[#FF8C00]">Enxergar bem é viver melhor.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={itemVariants}
          className="font-body text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          Especialistas em óculos de grau, solares e marcas premium em João Pessoa.
          Sua visão merece excelência.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open('https://wa.me/message/2M3JYAETWLP3D1', '_blank')}
           // className="btn-primary-premium"
           className="hidden md:flex items-center gap-2 btn-primary-premium rounded-full px-6 py-2"
          >
            Agendar Atendimento
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const brandsSection = document.getElementById('brands');
              brandsSection?.scrollIntoView({ behavior: 'smooth' });
            }}
          //  className="btn-secondary-premium"
          className="hidden md:flex items-center gap-2 btn-primary-premium rounded-full px-6 py-2"
          >
            Explorar Coleções
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="text-[#FF8C00] w-8 h-8" />
      </motion.div>
    </section>
  );
}
