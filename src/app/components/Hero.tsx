import { ArrowRight } from 'lucide-react';

interface HeroProps {
  imageUrl: string;
}

export function Hero({ imageUrl }: HeroProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={imageUrl}
          alt="Technology Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#232323]/95 via-[#232323]/80 to-[#232323]/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl">
          <div className="mb-6 inline-block">
            <span className="px-4 py-2 bg-[#F91337]/10 border border-[#F91337]/30 rounded-full text-[#F91337] backdrop-blur-sm">
              Innovación • Tecnología • Eficiencia
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Transformamos tu{' '}
            <span className="text-[#F91337]">negocio</span>
            <br />
            con tecnología avanzada
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl">
            Soluciones integrales en Gestión de Recursos Humanos, 
            Aceleración de Procesos y Desarrollo de Software de última generación.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => scrollToSection('services')}
              className="px-8 py-4 bg-[#F91337] text-white rounded-lg hover:bg-[#d10f2f] transition-all transform hover:scale-105 flex items-center justify-center gap-2"
            >
              Descubre nuestros servicios
              <ArrowRight size={20} />
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-white/10 text-white border border-white/30 rounded-lg hover:bg-white/20 transition-all backdrop-blur-sm"
            >
              Contáctanos
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10"></div>
    </section>
  );
}
