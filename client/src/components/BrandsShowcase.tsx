import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { useRef } from 'react';

/**
 * Interface para garantir a tipagem correta dos dados
 */
interface Brand {
  id: number | string;
  name: string;
  shortName: string;
  description: string;
  image: string;
}

/**
 * Array de marcas declarado fora do componente para evitar erros de escopo
 */
const brands: Brand[] = [
  {
    id: 1,
    name: 'Armani Exchange',
    shortName: 'A|X',
    description: 'Elegância italiana com design contemporâneo',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663637720308/CrQZWsQkHd7htcBqoSkPWK/brand-showcase-armani-cdF2T2kGPjbevC8xgHgWtR.webp',
  },
  {
    id: 2,
    name: 'Femme Paris',
    shortName: 'FP',
    description: 'Sofisticação parisiense e feminilidade',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663637720308/CrQZWsQkHd7htcBqoSkPWK/brand-showcase-gentle-7K3CguADqggwPZLQTcRfYY.webp',
  },
  {
    id: 3,
    name: 'VCTY Eyewear',
    shortName: 'VCTY',
    description: 'Inovação e design contemporâneo',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663637720308/CrQZWsQkHd7htcBqoSkPWK/brand-showcase-armani-cdF2T2kGPjbevC8xgHgWtR.webp',
  },
  {
    id: 4,
    name: 'Jack Pacific',
    shortName: 'JP',
    description: 'Estilo aventureiro e descontraído',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663637720308/CrQZWsQkHd7htcBqoSkPWK/brand-showcase-gentle-7K3CguADqggwPZLQTcRfYY.webp',
  },
  {
    id: 5,
    name: 'Arnette',
    shortName: 'AR',
    description: 'Atitude urbana e moderna',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663637720308/CrQZWsQkHd7htcBqoSkPWK/brand-showcase-armani-cdF2T2kGPjbevC8xgHgWtR.webp',
  },
  {
    id: 6,
    name: 'Platini',
    shortName: 'PL',
    description: 'Qualidade brasileira de excelência',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663637720308/CrQZWsQkHd7htcBqoSkPWK/brand-showcase-gentle-7K3CguADqggwPZLQTcRfYY.webp',
  },
];

export default function BrandsShowcase() {
  const constraintsRef = useRef(null);

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
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="brands" className="relative w-full py-24 bg-black overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-[#FF8C00] via-transparent to-[#FF8C00]" />
      </div>

      <div className="relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="container mb-16 px-4 md:px-8"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Marcas Premium
          </h2>
          <p className="font-body text-gray-400 text-lg max-w-2xl">
            Seleção exclusiva das melhores marcas de óculos do mundo
          </p>
        </motion.div>

        {/* Drag Container */}
        <div ref={constraintsRef} className="w-full px-4 md:px-8 overflow-hidden">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            drag="x"
            dragConstraints={constraintsRef}
            className="flex gap-6 cursor-grab active:cursor-grabbing w-max pb-8"
          >
            {brands.map((brand: Brand) => (
              <motion.div
                key={brand.id}
                variants={itemVariants}
                className="flex-shrink-0 w-80 group select-none"
              >
                {/* Card com Borda Suavizada (rounded-2xl) */}
                <div className="bg-[#111] p-6 rounded-2xl border border-white/5 hover:border-[#FF8C00]/30 transition-colors duration-500 h-full flex flex-col shadow-2xl">
                  
                  {/* Brand Image Container */}
                  <div className="relative h-64 mb-6 overflow-hidden rounded-xl">
                    <motion.img
                      src={brand.image}
                      alt={brand.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40" />
                  </div>

                  {/* Brand Info */}
                  <div className="space-y-3 flex-grow">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-display text-xl font-bold text-white group-hover:text-[#FF8C00] transition-colors">
                          {brand.name}
                        </h3>
                        <p className="text-sm text-gray-400 font-body">
                          {brand.shortName}
                        </p>
                      </div>
                      <motion.div whileHover={{ x: 4 }}>
                        <ChevronRight className="text-[#FF8C00] w-6 h-6" />
                      </motion.div>
                    </div>

                    <p className="text-sm text-gray-300 font-body leading-relaxed">
                      {brand.description}
                    </p>
                  </div>

                  {/* Footer Card */}
                  <div className="pt-4 mt-4 border-t border-white/10">
                    <p className="text-xs text-gray-500 font-body uppercase tracking-wider">
                      4+ modelos disponíveis
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Hint Animado */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          animate={{ x: [-10, 10, -10] }}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="text-center mt-8 text-gray-500 text-sm font-body select-none"
        >
          ← Deslize para explorar mais marcas →
        </motion.div>
      </div>
    </section>
  );
}