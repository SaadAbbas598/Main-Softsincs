import React, { useEffect, useState } from "react";
import Button from "../../components/ui/Button";
import { useNavigate } from "react-router-dom";

const Hero2 = ({
  smallTitle = "About Us",
  title = "Empowering Businesses, Inspiring Innovation",
  description = "At Devsinc, we specialize in transforming businesses with enterprise-grade software solutions tailored to their needs. With a legacy of technical excellence, a global team of over 2,000 experts, and a passion for innovation, we help organizations thrive in an ever-evolving digital landscape.",
  buttonText = "Get in Touch",
  buttonLink = "/contact",
  backgroundImage = "/default-hero-bg.jpg",
}) => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleClick = () => {
    if (buttonLink.startsWith("/")) {
      navigate(buttonLink);
    } else {
      window.location.href = buttonLink;
    }
  };

  return (
    <div className="relative w-full h-[550px] flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.05)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
      
      {/* Gradient Orbs */}
      <div className="absolute top-10 left-1/4 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      
      {/* Decorative Lines */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50"></div>
      
      <div className={`relative z-10 text-center max-w-5xl px-6 py-10 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        {/* Small Title Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-semibold text-blue-300 bg-blue-950/50 border border-blue-400/30 rounded-full shadow-lg backdrop-blur-md animate-fade-in-up">
          <span className="relative flex w-2 h-2">
            <span className="absolute inline-flex w-full h-full bg-blue-400 rounded-full opacity-75 animate-ping"></span>
            <span className="relative inline-flex w-2 h-2 bg-blue-400 rounded-full"></span>
          </span>
          <span className="uppercase tracking-wider">{smallTitle}</span>
        </div>
        
        {/* Main Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight text-white animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400">
            {title}
          </span>
        </h1>
        
        {/* Description */}
        <p className="text-base md:text-lg lg:text-xl mb-8 text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {description}
        </p>

        {/* Button */}
        <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <button
            onClick={handleClick}
            className="px-8 py-4 text-base font-semibold text-white transition-all duration-300 border-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 border-blue-400 hover:from-blue-500 hover:to-indigo-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50 group"
          >
            <span className="flex items-center gap-2">
              {buttonText}
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </button>
        </div>

        {/* Decorative Elements */}
        <div className="flex items-center justify-center gap-8 mt-12 text-sm text-gray-400 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>Available Now</span>
          </div>
          <div className="w-px h-4 bg-gray-600"></div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            <span>+1 (555) 123-4567</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
