import { Target, Users, Code2, Sparkles } from 'lucide-react';

interface ServiceDetail {
  title: string;
  description: string;
  items?: string[];
}

interface ServiceArea {
  number: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  details: ServiceDetail[];
}

export function ServicesSection() {
  const serviceAreas: ServiceArea[] = [
    {
      number: '01',
      title: 'Toma de Control',
      subtitle: 'Plan Estratégico',
      icon: Target,
      details: [
        {
          title: 'Estrategias Innovadoras',
          description: 'Proponemos toda nuestra experiencia y contenido correspondiente a estrategia de proyectos y organizacional para comenzar con un plan estratégico de toma de control.'
        },
        {
          title: 'Portafolio del Negocio',
          description: 'Levantamiento del negocio, sus principales sujetos de interés y de intervención, modelamiento del proyecto y su impacto en el negocio.'
        },
        {
          title: 'Metodología Ágil y de Coaching',
          description: 'Propuesta de metodologías ágiles para mayor éxito del proyecto y mejor entendimiento del cliente, con artefactos y procesos fáciles de implementar y desarrollar en conjunto, todo a través de una comunicación efectiva a través de coaching.'
        }
      ]
    },
    {
      number: '02',
      title: 'Profesionales',
      subtitle: 'Gestión de Recursos Humanos',
      icon: Users,
      details: [
        {
          title: 'HeadHunting',
          description: 'Procesos de integración de profesionales calificados para mejor desempeño en la organización según necesidades del cliente, además de un acompañamiento de gestión de recursos.'
        },
        {
          title: 'Acompañamiento de Profesionales',
          description: 'Gestión de los profesionales para asegurar integridad e identidad en la empresa y en la organización. Reuniones periódicas de estado de profesionales para su mejor desempeño.'
        }
      ]
    },
    {
      number: '03',
      title: 'Servicios TIC',
      subtitle: 'Ingeniería y Arquitectura',
      icon: Code2,
      details: [
        {
          title: 'Desarrollo de Software',
          description: 'Desarrollo de software con tecnología de punta, metodologías de gestión y desarrollo de software en buenas prácticas como estándar transversal.',
          items: [
            'Metodologías Ágiles',
            'Buenas Prácticas',
            'Factorización',
            'Actualización de Legacy',
            'Interoperabilidad entre Sistemas'
          ]
        },
        {
          title: 'Arquitectura Tecnológica',
          description: 'Implementamos plataformas de nubes insite y también con tecnologías de proveedores cloud como Google Cloud Plataform, Amazon Web Services, Microsoft Azure para soluciones corporativas o específicas.',
          items: [
            'Google Cloud Platform',
            'Amazon Web Services',
            'Microsoft Azure',
            'Linux',
            'Microsoft'
          ]
        },
        {
          title: 'Soporte Tecnológico',
          description: 'Nos encargamos del soporte de tecnologías para mantener la continuidad operacional y de negocio de la organización y/o proyectos. Trazamos una ruta de soporte y ciberseguridad íntegra para sistemas y usuarios de la organización'
        }
      ]
    },
    {
      number: '04',
      title: 'Actualización Digital',
      subtitle: 'Proceso de Digitalización',
      icon: Sparkles,
      details: [
        {
          title: 'Digitalización de Procesos',
          description: 'Digitalizamos tus procesos y procedimientos, rediseñamos el flujo operacional y lo llevamos al siguiente nivel, llevamos tus procesos con implementación de sistemas de ofimática y sistemas de gestión de información.',
          items: [
            'Digitalización',
            'Gestión de Información',
            'Cero Papel',
            'Ciclo de Vida',
            'Procesos con Productos Finales'
          ]
        },
        {
          title: 'Levantamiento de Negocio',
          description: 'Análisis del negocio de la organización, aplicación de tecnologías acorde a la organización, reevaluamos las competencias centrales para aumentar la productividad a través de tecnologías y digitalización.'
        }
      ]
    }
  ];

  const dividerImages = [
    'https://images.unsplash.com/photo-1674509036252-5a517959a3b4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1736836977797-8035ae65c0f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjB3b3JrcGxhY2UlMjBidXNpbmVzc3xlbnwxfHx8fDE3Njc5MDc5MjF8MA&ixlib=rb-4.1.0&q=80&w=1080'
  ];

  return (
    <section id="services" className="relative bg-white pb-24">
      {/* Banner Section */}
      <div className="h-[400px] w-full relative bg-[#232323]">
        <img 
          src="https://images.unsplash.com/photo-1758873271805-1ff103e28558?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Services Banner" 
          className="w-full h-full object-cover opacity-60 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#232323]/80 to-[#232323]/30"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <span className="text-[#F91337] font-bold tracking-widest uppercase text-sm mb-4 bg-white/5 px-4 py-1 rounded-full backdrop-blur-sm border border-white/10">
            Nuestros Servicios
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Lo que hacemos
          </h2>
          <div className="w-24 h-1 bg-[#F91337] rounded-full"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-20 relative z-10">
        {/* Intro Text Card */}
        <div className="max-w-3xl mx-auto text-center mb-20 bg-white p-10 rounded-2xl shadow-xl">
           <p className="text-xl text-[#AAAAAC] leading-relaxed">
            Ofrecemos soluciones integrales diseñadas para transformar 
            y optimizar cada aspecto de tu negocio.
           </p>
        </div>

        {/* Service Areas */}
        <div className="max-w-7xl mx-auto space-y-16">
          {serviceAreas.map((area, areaIndex) => (
            <div 
              key={areaIndex} 
              className="relative group"
            >
              {/* Image Divider Before Each Section */}
              <div className="mb-12 -mx-4 overflow-hidden rounded-xl">
                <img 
                  src={dividerImages[areaIndex]} 
                  alt="Section divider" 
                  className="w-full h-24 md:h-32 object-cover opacity-60"
                />
              </div>

              {/* Area Header */}
              <div className="flex items-start gap-6 mb-8">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-6xl md:text-7xl font-bold text-[#F91337]/10">
                      {area.number}
                    </span>
                    <div>
                      <h3 className="text-3xl md:text-4xl font-bold text-[#232323]">
                        {area.title}
                      </h3>
                      <p className="text-lg text-[#F91337] font-semibold mt-1">
                        {area.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {area.details.map((detail, detailIndex) => (
                  <div 
                    key={detailIndex}
                    className="bg-white border-2 border-gray-100 rounded-xl p-6 hover:border-[#F91337]/30 hover:shadow-lg transition-all duration-300 group/card"
                  >
                    <h4 className="text-xl font-bold text-[#232323] mb-3 group-hover/card:text-[#F91337] transition-colors">
                      {detail.title}
                    </h4>
                    <p className="text-[#AAAAAC] leading-relaxed mb-4">
                      {detail.description}
                    </p>
                    {detail.items && (
                      <ul className="space-y-2">
                        {detail.items.map((item, itemIndex) => (
                          <li 
                            key={itemIndex}
                            className="flex items-center gap-2 text-sm text-[#232323]"
                          >
                            <span className="w-1.5 h-1.5 bg-[#F91337] rounded-full flex-shrink-0"></span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}