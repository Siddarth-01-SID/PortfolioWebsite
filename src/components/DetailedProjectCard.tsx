import { useState } from "react";
import { ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface DetailedProjectCardProps {
  title: string;
  category: string;
  categoryColor: string;
  image: string;
  description: string;
  caseStudyLink?: string;
}

export function DetailedProjectCard({
  title,
  category,
  categoryColor,
  image,
  description,
  caseStudyLink,
}: DetailedProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="group bg-gradient-to-br from-white to-gray-50 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2 animate-fade-in-up border border-gray-100">
      {/* Header with gradient accent */}
      <div className="p-8 pb-4 relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
        <h3 className="font-semibold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 transition-all duration-500">{title}</h3>
        <span
          className={`inline-block px-5 py-2 rounded-full text-sm font-medium ${categoryColor} shadow-sm transform group-hover:scale-105 transition-transform duration-300`}
        >
          {category}
        </span>
      </div>

      {/* Image with overlay effect */}
      <div className="px-8 relative">
        <div className="aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 relative group/image">
          <ImageWithFallback
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover/image:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-500"></div>
        </div>
      </div>

      {/* Description with smooth expand/collapse */}
      <div className="p-8">
        <div className="relative overflow-hidden">
          <p className={`text-gray-600 leading-relaxed transition-all duration-500 ${
            isExpanded ? 'max-h-[2000px]' : 'max-h-24 line-clamp-4'
          }`}>
            {description}
          </p>
          {!isExpanded && (
            <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
          )}
        </div>
        
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-purple-600 transition-colors mt-4 mb-6 group/btn"
        >
          <span>{isExpanded ? "See less" : "See more"}</span>
          {isExpanded ? (
            <ChevronUp size={16} className="group-hover/btn:transform group-hover/btn:-translate-y-1 transition-transform" />
          ) : (
            <ChevronDown size={16} className="group-hover/btn:transform group-hover/btn:translate-y-1 transition-transform" />
          )}
        </button>

        {/* Case Study Button */}
        {caseStudyLink && (
          <div className="pt-4">
            <a
              href={caseStudyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gradient-to-r hover:from-black hover:to-purple-600 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/50 overflow-hidden group/btn1"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-black to-purple-600 opacity-0 group-hover/btn1:opacity-100 transition-opacity duration-500"></span>
              <ExternalLink size={18} className="relative z-10 group-hover/btn1:rotate-12 transition-transform duration-300" />
              <span className="relative z-10">See Case Study</span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}