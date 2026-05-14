import { motion } from 'framer-motion';
import { MapPin, Phone, Clock } from 'lucide-react';

/**
 * Location Section - Premium Contact & Map
 * Elegant presentation of store location with integrated map
 * Design: Asymmetric layout with premium spacing
 */

export default function Location() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 } as any,
    },
  };

  return (
    <section id="location" className="relative w-full py-24 bg-black overflow-hidden">
      {/* Background Accent */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#FF8C00] rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-8">
              Visite-nos
            </h2>

            {/* Address */}
            <motion.div variants={itemVariants} className="card-premium mb-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-[#FF8C00] bg-opacity-20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-[#FF8C00]" size={24} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-white mb-2">Endereço</h3>
                  <p className="font-body text-gray-300 leading-relaxed">
                    Av. Alfredo Ferreira da Rocha, 308 - Sl 01
                    <br />
                    Comercial Kelly Center
                    <br />
                    Mangabeira
                    <br />
                    João Pessoa - PB
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() =>
                      window.open(
                        'https://maps.google.com/?q=Av.+Alfredo+Ferreira+da+Rocha,+308,+João+Pessoa',
                        '_blank'
                      )
                    }
                    className="mt-4 text-[#FF8C00] font-body font-semibold hover:text-[#FFB84D] transition-colors duration-300"
                  >
                    Abrir no Google Maps →
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Contact */}
            <motion.div variants={itemVariants} className="card-premium mb-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-[#FF8C00] bg-opacity-20 flex items-center justify-center flex-shrink-0">
                  <Phone className="text-[#FF8C00]" size={24} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-white mb-2">Contato</h3>
                  <p className="font-body text-gray-300">
                    WhatsApp:{' '}
                    <a
                      href="https://wa.me/message/2M3JYAETWLP3D1"
                      className="text-[#FF8C00] hover:text-[#FFB84D] transition-colors"
                    >
                      Clique aqui
                    </a>
                  </p>
                  <p className="font-body text-gray-300 mt-1">
                    Instagram:{' '}
                    <a
                      href="https://www.instagram.com/oticalife/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#FF8C00] hover:text-[#FFB84D] transition-colors"
                    >
                      @oticalife
                    </a>
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Hours */}
            <motion.div variants={itemVariants} className="card-premium">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-[#FF8C00] bg-opacity-20 flex items-center justify-center flex-shrink-0">
                  <Clock className="text-[#FF8C00]" size={24} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-white mb-2">Horário</h3>
                  <p className="font-body text-gray-300">Segunda a Sexta: 9h - 18h</p>
                  <p className="font-body text-gray-300">Sábado: 9h - 14h</p>
                  <p className="font-body text-gray-300 text-sm mt-2 text-gray-400">
                    Domingo: Fechado
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Map */}
          <motion.div
            variants={itemVariants}
            className="card-premium overflow-hidden h-96 md:h-full min-h-96"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.8894847748!2d-34.8631!3d-7.1395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7acc2e3d3d3d3d3d%3A0x0!2sAv.%20Alfredo%20Ferreira%20da%20Rocha%2C%20308%20-%20Mangabeira%2C%20Jo%C3%A3o%20Pessoa%20-%20PB!5e0!3m2!1spt-BR!2sbr!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-xl"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
