import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

interface Slide {
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  buttonText: string;
  buttonAction: () => void;
}

interface HeroCarouselProps {
  slides: Slide[];
}

export function HeroCarousel({ slides }: HeroCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <img
              src={slide.imageUrl}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#232323]/95 via-[#232323]/80 to-[#232323]/50"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 container mx-auto px-4 h-full flex items-start pt-32 md:items-center md:pt-0">
            <div className="max-w-4xl ml-0 md:ml-16 lg:ml-20">
              <div className="mb-6 inline-block">
                <span className="px-4 py-2 bg-[#F91337]/10 border border-[#F91337]/30 rounded-full text-[#F91337] backdrop-blur-sm text-sm md:text-base">
                  {slide.subtitle}
                </span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                {slide.title}
              </h1>
              
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl">
                {slide.description}
              </p>

              <button
                onClick={slide.buttonAction}
                className="px-6 py-3 md:px-8 md:py-4 bg-[#F91337] text-white rounded-lg hover:bg-[#d10f2f] transition-all transform hover:scale-105 flex items-center gap-2 text-sm md:text-base"
              >
                {slide.buttonText}
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/30 rounded-full items-center justify-center hover:bg-white/20 transition-all"
      >
        <ChevronLeft className="text-white" size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/30 rounded-full items-center justify-center hover:bg-white/20 transition-all"
      >
        <ChevronRight className="text-white" size={24} />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide
                ? 'w-8 bg-[#F91337]'
                : 'w-2 bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10"></div>
    </section>
  );
}