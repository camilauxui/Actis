import { useRef } from 'react';
import Slider from 'react-slick';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom arrow button component
const ArrowButton = ({ onClick, direction }: { onClick?: () => void, direction: 'left' | 'right' }) => (
  <button
    onClick={onClick}
    className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:text-[#F91337] hover:border-[#F91337] transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-[#F91337]/20"
    aria-label={direction === 'left' ? "Anterior" : "Siguiente"}
  >
    {direction === 'left' ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
  </button>
);

export function ClientsCarousel() {
  const sliderRef = useRef<Slider>(null);

  // Logos de clientes destacados
  const clients = [
    { 
      name: 'Servicio de Impuestos Internos', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Logo_de_Servicio_de_Impuestos_Internos.svg/960px-Logo_de_Servicio_de_Impuestos_Internos.svg.png'
    },
    { 
      name: 'Ministerio de Desarrollo Social y Familia', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Logo_del_Ministerio_de_Desarrollo_Social_y_Familia_de_Chile.png/1248px-Logo_del_Ministerio_de_Desarrollo_Social_y_Familia_de_Chile.png'
    },
    { 
      name: 'Universidad de Chile', 
      logo: 'https://www.learnchile.cl/wp-content/uploads/2021/08/escudo-uchile-vertical-color-fondo-transp.jpg'
    },
    { 
      name: 'IPS Ministerio del Trabajo y Previsión Social', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/5/56/IPS.png'
    },
    { 
      name: 'Ministerio de las Culturas, las Artes y el Patrimonio', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Logo_del_Ministerio_de_las_Culturas%2C_las_Artes_y_el_Patrimonio_de_Chile.png'
    },
    { 
      name: 'CONAF', 
      logo: 'https://www.epicentrochile.com/wp-content/uploads/2016/07/conaf-logo.jpg'
    }
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    cssEase: "ease-in-out",
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    swipe: true,
    swipeToSlide: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <section className="py-16 bg-gray-50 border-y border-gray-200">
      <div className="container mx-auto px-4">
        <h3 className="text-center text-sm uppercase tracking-wider text-[#AAAAAC] mb-12">
          Confían en nosotros
        </h3>
        
        <div className="relative px-4">
          <Slider ref={sliderRef} {...settings} className="clients-carousel">
            {clients.map((client, index) => (
              <div key={index} className="px-4 py-8 outline-none focus:outline-none">
                <div className="bg-white/50 h-40 rounded-[20px] flex flex-col items-center justify-center p-6 group hover:bg-white hover:shadow-xl border border-transparent transition-all duration-300 cursor-grab active:cursor-grabbing">
                  <div className="flex-1 flex items-center justify-center w-full mb-3">
                    <img 
                      src={client.logo} 
                      alt={client.name} 
                      className="max-w-full max-h-20 object-contain filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                    />
                  </div>
                  <div className="text-[10px] text-[#AAAAAC] text-center leading-tight opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {client.name}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Custom Navigation Arrows */}
        <div className="flex justify-center gap-4 mt-8">
          <ArrowButton 
            direction="left" 
            onClick={() => sliderRef.current?.slickPrev()} 
          />
          <ArrowButton 
            direction="right" 
            onClick={() => sliderRef.current?.slickNext()} 
          />
        </div>
      </div>
      
      {/* Styles for slick carousel to ensure it behaves well */}
      <style>{`
        .slick-track {
          display: flex !important;
          align-items: center;
        }
        .slick-slide {
          height: inherit !important;
        }
        .slick-slide > div {
          height: 100%;
        }
      `}</style>
    </section>
  );
}