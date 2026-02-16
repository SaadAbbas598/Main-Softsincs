import React from 'react';
import { useNavigate } from 'react-router-dom';

function Card({
  title = "Generative AI",
  tag = "New",
  link = "/",
  bgImage = ""
}) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(link);
  };

  return (
    <div className="p-2 w-[300px] flex justify-center">
      <div
        onClick={handleClick}
        className="group relative w-full h-80 rounded-2xl overflow-hidden bg-cover bg-center transform transition-all duration-500 hover:scale-105 cursor-pointer border border-slate-700/50 hover:border-blue-500/50 shadow-xl hover:shadow-2xl hover:shadow-blue-500/20"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-slate-900/20 transition-all duration-500 group-hover:from-slate-900/95 group-hover:via-slate-900/60" />
        
        {/* Hover Glow Effect */}
        <div className="absolute inset-0 opacity-0 bg-gradient-to-t from-blue-600/20 to-transparent transition-opacity duration-500 group-hover:opacity-100"></div>

        {/* Top Decorative Line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* Content Container */}
        <div className="relative h-full flex flex-col justify-between p-6 z-10">
          {/* Tag */}
          {tag && (
            <div className="flex justify-end">
              <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg border border-blue-400/30 backdrop-blur-sm">
                <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
                {tag}
              </span>
            </div>
          )}

          {/* Title and Icon */}
          <div className="transform transition-all duration-500 group-hover:translate-y-[-8px]">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            <h3 className="text-white text-xl font-black mb-2 drop-shadow-lg">{title}</h3>
            
            {/* Arrow Button */}
            <div className="flex items-center gap-2 text-blue-400 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
              <span>Explore Service</span>
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </div>
        </div>

        {/* Bottom Shine Effect */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-blue-600/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
    </div>
  );
}

export default Card;
