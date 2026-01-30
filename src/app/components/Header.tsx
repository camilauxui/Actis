import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { ActisLogo } from './ActisLogo';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a 
              href="#" 
              onClick={(e) => { 
                e.preventDefault(); 
                window.scrollTo({ top: 0, behavior: 'smooth' }); 
              }}
            >
              <ActisLogo className="h-16 md:h-24 w-auto" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('services')}
              className="text-[#232323] hover:text-[#F91337] transition-colors"
            >
              Lo que hacemos
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-[#232323] hover:text-[#F91337] transition-colors"
            >
              Nosotros
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-2 bg-[#F91337] text-white rounded-md hover:bg-[#d10f2f] transition-colors"
            >
              Contacto
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#232323]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col space-y-4">
            <button
              onClick={() => scrollToSection('services')}
              className="text-[#232323] hover:text-[#F91337] transition-colors text-left"
            >
              Lo que hacemos
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-[#232323] hover:text-[#F91337] transition-colors text-left"
            >
              Nosotros
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-2 bg-[#F91337] text-white rounded-md hover:bg-[#d10f2f] transition-colors text-left"
            >
              Contacto
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}