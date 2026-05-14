import { motion } from 'framer-motion';
import { Instagram, MessageCircle } from 'lucide-react';

/**
 * Footer - Premium Minimalist Design
 * Clean footer with social links and branding
 * Design: Elegant, minimal, with subtle animations
 */

export default function Footer() {
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
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 } as any,
    },
  };

  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/oticalife/',
      icon: Instagram,
    },
    {
      name: 'Threads',
      url: 'https://www.threads.com/@oticalife',
      icon: Instagram, // Usando o mesmo ícone do Instagram para Threads por simplicidade
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/message/2M3JYAETWLP3D1',
      icon: MessageCircle,
    },
  ];

  return (
    <footer className="relative w-full bg-black border-t border-gray-900">
      <div className="container py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-8"
        >
          {/* Brand */}
          <motion.div variants={itemVariants} className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#FF8C00] rounded-lg flex items-center justify-center font-display text-black font-bold">
              Ó
            </div>
            <div>
              <p className="font-display font-bold text-white">Ótica Life</p>
              <p className="text-xs text-gray-500 font-body">Premium Eyewear</p>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={containerVariants} className="flex gap-6">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.name}
                  variants={itemVariants}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full glass-premium flex items-center justify-center text-gray-400 hover:text-[#FF8C00] transition-colors duration-300"
                  title={link.name}
                >
                  <Icon size={20} />
                </motion.a>
              );
            })}
          </motion.div>

          {/* Copyright */}
          <motion.p
            variants={itemVariants}
            className="text-sm text-gray-500 font-body text-center md:text-right"
          >
            © 2026 Ótica Life. Todos os direitos reservados.
          </motion.p>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4 } as any}
          viewport={{ once: true }}
          className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mt-8 origin-left"
        />

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 } as any}
          viewport={{ once: true }}
          className="mt-8 text-center text-xs text-gray-600 font-body"
        >
          <p>Desenvolvido com coração para Ótica Life</p>
          <p className="mt-2">
            Endereço: Av. Alfredo Ferreira da Rocha, 308 - Mangabeira, João Pessoa - PB
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
