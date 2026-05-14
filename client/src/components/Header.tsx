import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import logo from "../logooticalife.png"

/**
 * Header - Dark Luxury Design
 * Floating header with glassmorphism, blur on scroll, sticky positioning
 * Premium navigation with WhatsApp CTA
 */

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-premium py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2"
        >
    <div className="w-12 h-12 rounded-full overflow-hidden border border-[#1a1a1a] bg-black flex items-center justify-center">
    <img
      src={logo}
      alt="Ótica Life"
      className="w-full h-full object-cover"
    />
  </div>
          <span className="font-display text-xl font-bold text-white hidden sm:inline">
            Ótica Life
          </span>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { label: 'Início', id: 'home' },
            { label: 'Coleções', id: 'brands' },
            { label: 'Diferenciais', id: 'diferenciais' },
            { label: 'Depoimentos', id: 'testimonials' },
            { label: 'Localização', id: 'location' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-sm font-body text-gray-300 hover:text-[#FF8C00] transition-colors duration-300"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* CTA Button - Desktop */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.open('https://wa.me/message/2M3JYAETWLP3D1', '_blank')}
          //className="hidden md:flex items-center gap-2 btn-primary-premium"
          // Adicionado 'rounded-full' ou 'rounded-xl'
         className="hidden md:flex items-center gap-2 btn-primary-premium rounded-full px-6 py-2"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.946 1.347l-.355.203-.368-.067c-1.264-.233-2.477-.571-3.658-1.002l.213 1.378c.362 2.333.271 4.271-.213 5.577 1.744.464 3.59.755 5.404.755a9.87 9.87 0 004.782-1.165l.335-.201.357.054c1.23.226 2.432.561 3.587.987l-.235-1.522c-.464-2.99.032-5.975 1.293-8.255-1.635.36-3.417.776-5.167 1.063l-.327.06-.33-.203a9.865 9.865 0 00-4.725-1.211z" />
          </svg>
          Agendar Atendimento
        </motion.button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white p-2"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden glass-premium mt-2 mx-4 rounded-2xl p-4"
        >
          <nav className="flex flex-col gap-4">
            {[
              { label: 'Início', id: 'home' },
              { label: 'Coleções', id: 'brands' },
              { label: 'Diferenciais', id: 'diferenciais' },
              { label: 'Depoimentos', id: 'testimonials' },
              { label: 'Localização', id: 'location' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-left text-sm font-body text-gray-300 hover:text-[#FF8C00] transition-colors duration-300 py-2"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => window.open('https://wa.me/message/2M3JYAETWLP3D1', '_blank')}
              className="btn-primary-premium w-full mt-4"
            >
              Agendar Atendimento
            </button>
          </nav>
        </motion.div>
      )}
    </header>
  );
}
