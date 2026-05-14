import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

/**
 * WhatsApp Floating Button - Premium Subtle Design
 * Floating action button with pulse animation
 * Design: Elegant, non-intrusive, with subtle glow effect
 */

export default function WhatsAppButton() {
  return (
    <motion.button
      id="whatsapp-float"
      onClick={() => window.open('https://wa.me/message/2M3JYAETWLP3D1', '_blank')}
      className="fixed bottom-8 right-8 z-40 w-14 h-14 rounded-full bg-[#FF8C00] flex items-center justify-center text-white shadow-luxury hover:shadow-lg transition-all duration-300"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 } as any}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Pulse Animation */}
      <motion.div
        className="absolute inset-0 rounded-full bg-[#FF8C00] opacity-0"
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0, 0] }}
        transition={{ duration: 2, repeat: Infinity } as any}
      />

      {/* Icon */}
      <MessageCircle size={28} className="relative z-10" />
    </motion.button>
  );
}
