import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Gracias por tu mensaje. Te contactaremos pronto.');
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-[#F91337] font-semibold tracking-wide uppercase text-sm">
            Contacto
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#232323] mt-4 mb-6">
            Hablemos
          </h2>
          <p className="text-xl text-[#AAAAAC]">
            ¿Tienes un proyecto en mente? Estamos aquí para ayudarte a hacerlo realidad.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-[#232323] mb-2">
                  Nombre completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F91337] focus:border-transparent transition-all"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-[#232323] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F91337] focus:border-transparent transition-all"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-[#232323] mb-2">
                  Empresa
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F91337] focus:border-transparent transition-all"
                  placeholder="Nombre de tu empresa"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-[#232323] mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F91337] focus:border-transparent transition-all resize-none"
                  placeholder="Cuéntanos sobre tu proyecto..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-[#F91337] text-white rounded-lg hover:bg-[#d10f2f] transition-all transform hover:scale-105 flex items-center justify-center gap-2"
              >
                Enviar mensaje
                <Send size={20} />
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-[#232323] mb-6">
                Información de contacto
              </h3>
              <p className="text-[#AAAAAC] leading-relaxed mb-8">
                Estamos disponibles para responder tus preguntas y ayudarte a alcanzar tus objetivos de negocio.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#F91337]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-[#F91337]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#232323] mb-1">Email</h4>
                  <a href="mailto:info@techpro.com" className="text-[#AAAAAC] hover:text-[#F91337] transition-colors">
                    contacto@actis.cl
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#F91337]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-[#F91337]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#232323] mb-1">Teléfono</h4>
                  <a href="tel:+1234567890" className="text-[#AAAAAC] hover:text-[#F91337] transition-colors">
                    +569 12345678
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#F91337]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[#F91337]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#232323] mb-1">Ubicación</h4>
                  <p className="text-[#AAAAAC]">
                    Santiago, Chile.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-gray-200">
              <h4 className="font-semibold text-[#232323] mb-4">Horario de atención</h4>
              <div className="space-y-2 text-[#AAAAAC]">
                <p>Lunes - Viernes: 9:00 AM - 19:00 PM</p>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
