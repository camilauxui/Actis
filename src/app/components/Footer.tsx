import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';
import { ActisLogo } from './ActisLogo';

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#232323] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <ActisLogo className="h-16 w-auto" theme="light" />
            </div>
            <p className="text-[#AAAAAC] leading-relaxed">
              Soluciones tecnológicas innovadoras para impulsar tu negocio.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-[#AAAAAC] hover:text-[#F91337] transition-colors"
                >
                  Lo que hacemos
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-[#AAAAAC] hover:text-[#F91337] transition-colors"
                >
                  Nosotros
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-[#AAAAAC] hover:text-[#F91337] transition-colors"
                >
                  Contacto
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Servicios</h3>
            <ul className="space-y-3 text-[#AAAAAC]">
              <li>Gestión de RRHH</li>
              <li>Aceleración de Procesos</li>
              <li>Desarrollo de Software</li>
              <li>Consultoría Tecnológica</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#F91337] mt-0.5" />
                <a href="mailto:info@techpro.com" className="text-[#AAAAAC] hover:text-[#F91337] transition-colors">
                  contacto@actis.cl
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#F91337] mt-0.5" />
                <a href="tel:+1234567890" className="text-[#AAAAAC] hover:text-[#F91337] transition-colors">
                  +569 12345678
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#F91337] mt-0.5" />
                <span className="text-[#AAAAAC]">
                  Santiago, Chile.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#AAAAAC] text-sm">
            © 2026 ACTIS. Todos los derechos reservados.
          </p>
          
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-[#F91337] transition-colors group"
            >
              <Linkedin className="w-5 h-5 text-[#AAAAAC] group-hover:text-white transition-colors" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-[#F91337] transition-colors group"
            >
              <Twitter className="w-5 h-5 text-[#AAAAAC] group-hover:text-white transition-colors" />
            </a>
            
          </div>
        </div>
      </div>
    </footer>
  );
}