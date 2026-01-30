import { Target, Users, Lightbulb, TrendingUp, Shield, Zap } from 'lucide-react';

export function NosotrosSection() {
  return (
    <section id="nosotros" className="relative bg-white pb-24">


      <div className="container mx-auto px-4 -mt-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            
            {/* Left Card: Values Highlight */}
            <div className="lg:col-span-5 flex">
              <div className="bg-[#232323] text-white p-8 md:p-10 rounded-2xl shadow-xl w-full flex flex-col relative overflow-hidden group">
                {/* Decorative background circle */}
                <div className="absolute -right-12 -top-12 w-48 h-48 bg-[#F91337]/20 rounded-full group-hover:scale-150 transition-transform duration-700 ease-in-out"></div>
                
                <div className="relative z-10 flex-1">
                  <div className="flex items-baseline gap-3 mb-8">
                    <span className="text-6xl md:text-7xl font-black text-white/20">02</span>
                    <div>
                      <h3 className="text-3xl font-bold">Visión</h3>
                      <p className="text-[#F91337] font-medium tracking-wide">Hacia dónde vamos</p>
                    </div>
                  </div>
                  
                  <h4 className="text-2xl md:text-3xl font-bold leading-snug">
                    Ser referentes en innovación tecnológica, impulsando la transformación digital con soluciones de alto impacto.
                  </h4>
                </div>
              </div>
            </div>

            {/* Right Card: Detailed Info */}
            <div className="lg:col-span-7 flex">
              <div className="bg-[#F5F5F7] p-8 md:p-12 rounded-2xl shadow-lg w-full flex flex-col justify-center">
                <h4 className="text-2xl font-bold text-[#232323] mb-6 flex items-center gap-3">
                  <span className="w-1.5 h-8 bg-[#F91337]"></span>
                  Nuestra Cultura
                </h4>
                
                <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                  <p>
                    En ACTIS, creemos que la tecnología debe estar al servicio de las personas. Nuestro equipo multidisciplinario trabaja con pasión para crear soluciones que no solo resuelven problemas técnicos, sino que transforman la manera en que las empresas operan.
                  </p>
                  <p>
                    Valoramos la transparencia, la colaboración y el aprendizaje continuo. Cada proyecto es una oportunidad para innovar y superar expectativas, manteniendo siempre al cliente en el centro de nuestras decisiones.
                  </p>
                </div>

                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                    <Shield className="text-[#F91337]" size={24} />
                    <span className="font-semibold text-[#232323]">Confianza</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                    <Zap className="text-[#F91337]" size={24} />
                    <span className="font-semibold text-[#232323]">Agilidad</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
