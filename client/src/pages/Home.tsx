import Header from '@/components/Header';
import Hero from '@/components/Hero';
import BrandsShowcase from '@/components/BrandsShowcase';
import Diferenciais from '@/components/Diferenciais';
import Testimonials from '@/components/Testimonials';
import Location from '@/components/Location';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

/**
 * Home Page - Ótica Life Premium Landing Page
 * Complete dark luxury design with cinematographic animations
 * All sections: Header, Hero, Brands, Diferenciais, Testimonials, Location, Footer
 */

export default function Home() {
  return (
    <div className="w-full bg-black">
      <Header />
      <Hero />
      <BrandsShowcase />
      <Diferenciais />
      <Testimonials />
      <Location />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
