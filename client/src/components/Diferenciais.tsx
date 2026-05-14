import { motion } from 'framer-motion';
import { Zap, Truck, TrendingUp } from 'lucide-react';

/**
 * Diferenciais - Premium Dynamic Section
 * Staggered layout with custom icons and motion
 * Design: Editorial luxury with asymmetric positioning
 */

const diferenciais = [
  {
    id: 1,
    title: 'Atendimento de Excelência',
    description: 'Equipe especializada dedicada a oferecer a melhor experiência de compra, com consultoria personalizada e atenção aos detalhes.',
    icon: Zap,
    testimonial: 'Antonio Fonseca',
    color: '#FF8C00',
  },
  {
    id: 2,
    title: 'Rapidez na Entrega',
    description: 'Processamento ágil de pedidos e entrega rápida. Seu novo óculos chega pronto para usar em tempo recorde.',
    icon: Truck,
    testimonial: 'Edgar Soares',
    color: '#FFB84D',
  },
  {
    id: 3,
    title: 'Melhor Preço de João Pessoa',
    description: 'Oferecemos os melhores preços da região sem comprometer a qualidade. Garantia de satisfação em cada compra.',
    icon: TrendingUp,
    testimonial: 'Whanize Santos',
    color: '#FF8C00',
  },
];

export default function Diferenciais() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 } as any,
    },
  };

  return (
    <section id="diferenciais" className="relative w-full py-24 bg-black overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF8C00] rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FF8C00] rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 } as any}
          viewport={{ once: true }}
          className="max-w-2xl mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Por que escolher a Ótica Life?
          </h2>
          <p className="font-body text-gray-400 text-lg">
            Três pilares que definem nossa excelência
          </p>
        </motion.div>

        {/* Diferenciais Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {diferenciais.map((item, index) => {
            const Icon = item.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className={`${isEven ? 'md:mt-8' : ''}`}
              >
                <div className="card-premium group h-full">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 } as any}
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                    style={{ backgroundColor: `${item.color}20` }}
                  >
                    <Icon
                      size={32}
                      style={{ color: item.color }}
                      className="transition-transform duration-300"
                    />
                  </motion.div>

                  {/* Title */}
                  <h3 className="font-display text-2xl font-bold text-white mb-3">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="font-body text-gray-300 mb-6 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Testimonial */}
                  <div className="pt-6 border-t border-gray-700">
                    <p className="text-sm text-gray-400 font-body italic">
                      "Feedback de {item.testimonial}"
                    </p>
                    <div className="flex gap-1 mt-2">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-[#FF8C00]">
                          ★
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Hover Glow */}
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      boxShadow: `inset 0 0 30px ${item.color}20`,
                    }}
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
