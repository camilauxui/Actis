import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  highlight: string;
  description: string;
  delay?: string;
}

export function ServiceCard({ icon: Icon, title, highlight, description, delay = '0s' }: ServiceCardProps) {
  return (
    <div 
      className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden"
      style={{ animationDelay: delay }}
    >
      {/* Accent Border on Hover */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#F91337] to-[#d10f2f] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
      
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#F91337]/5 rounded-full blur-3xl transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-700"></div>
      
      {/* Icon */}
      <div className="relative mb-6 inline-block">
        <div className="w-16 h-16 bg-[#F91337]/10 rounded-xl flex items-center justify-center group-hover:bg-[#F91337] transition-colors duration-300">
          <Icon className="w-8 h-8 text-[#F91337] group-hover:text-white transition-colors duration-300" />
        </div>
      </div>

      {/* Title */}
      <h3 className="text-sm uppercase tracking-wider text-[#AAAAAC] mb-3">{title}</h3>
      
      {/* Highlight */}
      <h4 className="text-2xl font-semibold text-[#232323] mb-4 leading-tight">
        {highlight}
      </h4>
      
      {/* Description */}
      <p className="text-[#AAAAAC] leading-relaxed">
        {description}
      </p>

      {/* Hover Indicator */}
      <div className="mt-6 flex items-center text-[#F91337] opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all duration-300">
        <span className="text-sm font-medium">Más información</span>
        <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  );
}
