import { Target, Users, Lightbulb, TrendingUp } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="relative bg-[#F5F5F7] pb-24">
      {/* Banner Section */}
      <div className="h-[400px] w-full relative bg-[#232323]">
        <img 
          src="https://images.unsplash.com/photo-1681949103006-70066fb25dfe?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Actis Team" 
          className="w-full h-full object-cover opacity-80 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#232323]/80 to-[#232323]/30"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <span className="text-[#F91337] font-bold tracking-widest uppercase text-sm mb-4 bg-white/5 px-4 py-1 rounded-full backdrop-blur-sm border border-white/10">
            Nosotros
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Quienes Somos
          </h2>
          <div className="w-24 h-1 bg-[#F91337] rounded-full"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            
            {/* Left Card: Mission Highlight */}
            <div className="lg:col-span-5 flex">
              <div className="bg-[#F91337] text-white p-8 md:p-10 rounded-2xl shadow-xl w-full flex flex-col relative overflow-hidden group">
                {/* Decorative background circle */}
                <div className="absolute -right-12 -top-12 w-48 h-48 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-700 ease-in-out"></div>
                
                <div className="relative z-10 flex-1">
                  <div className="flex items-baseline gap-3 mb-8">
                    <span className="text-6xl md:text-7xl font-black text-white/20">01</span>
                    <div>
                      <h3 className="text-3xl font-bold">Misión</h3>
                      <p className="text-white/90 font-medium tracking-wide">Lo que nos mueve</p>
                    </div>
                  </div>
                  
                  <h4 className="text-2xl md:text-3xl font-bold leading-snug">
                    Somos una empresa con un firme compromiso con la calidad y la excelencia.
                  </h4>
                </div>
              </div>
            </div>

            {/* Right Card: Detailed Info */}
            <div className="lg:col-span-7 flex">
              <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg w-full flex flex-col justify-center">
                <h4 className="text-2xl font-bold text-[#232323] mb-6 flex items-center gap-3">
                  <span className="w-1.5 h-8 bg-[#F91337]"></span>
                  Factor decisivo para el éxito
                </h4>
                
                <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                  <p>
                    Aumentamos la productividad de los proyectos, la satisfacción del cliente y las mejoras de nuestro equipo. Construimos confianza, escuchamos activamente para tener la mayor claridad de las necesidades de nuestros clientes y nuestros equipos de trabajo.
                  </p>
                  <p>
                    Fomentamos un ambiente de trabajo colaborativo y de apoyo para motivar, donde todos son valorados. Proporcionamos capacitaciones y empoderamiento, porque sabemos que nuestros trabajadores son el punta pie inicial para el éxito de nuestros clientes.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}