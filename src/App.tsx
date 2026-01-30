import { Header } from "./app/components/Header";
import { HeroCarousel } from "./app/components/HeroCarousel";
import { ClientsCarousel } from "./app/components/ClientsCarousel";
import { ServicesSection } from "./app/components/ServicesSection";
import { AboutSection } from "./app/components/AboutSection";
import { NosotrosSection } from "./app/components/NosotrosSection";
import { ContactSection } from "./app/components/ContactSection";
import { Footer } from "./app/components/Footer";

export default function App() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Slides del carrusel hero con imágenes de oficinas modernas
  const heroSlides = [
    {
      title: 'Desarrollamos tus ideas',
      subtitle: 'Innovación • Tecnología • Eficiencia',
      description: 'Transformamos tu negocio con tecnología',
      imageUrl: 'https://images.unsplash.com/photo-1583766165050-e94b9608cc62?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      buttonText: 'Descubre nuestros servicios',
      buttonAction: () => scrollToSection('services')
    },
    {
      title: 'Profesionales calificados para tu equipo',
      subtitle: 'Gestión de Recursos Humanos',
      description: 'Conectamos tu empresa con los mejores talentos. Servicio de profesionales expertos adaptados a tus necesidades específicas.',
      imageUrl: 'https://images.unsplash.com/photo-1752650735543-ec902cf4c95e?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      buttonText: 'Más información',
      buttonAction: () => scrollToSection('services')
    },
    {
      title: 'Digitalizamos tus procesos de negocio',
      subtitle: 'Aceleración • Automatización • Eficiencia',
      description: 'Rediseñamos y llevamos tus procesos al siguiente nivel con soluciones digitales que aceleran tu operatividad.',
      imageUrl: 'https://images.unsplash.com/photo-1622131113389-d59fe0bcd995?q=80&w=1633&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      buttonText: 'Conoce nuestras soluciones',
      buttonAction: () => scrollToSection('services')
    }
  ];

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Inter, sans-serif' }}>
      <Header />
      
      <main>
        <HeroCarousel slides={heroSlides} />
        
        <ClientsCarousel />
        
        <ServicesSection />

        <AboutSection />
        <NosotrosSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}