import React, { useEffect, useState } from "react";
import techStack from "../../data/techdata";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const TechCard = ({ Icon, label }) => (
  <div
    className="group relative bg-slate-900/40 border border-blue-500/20 backdrop-blur-xl rounded-2xl p-8 flex flex-col items-center justify-center
               cursor-pointer transition-all duration-500
               hover:scale-105 hover:border-blue-400/50 hover:bg-slate-900/60
               focus:outline-none focus:ring-2 focus:ring-blue-500
               shadow-lg hover:shadow-2xl hover:shadow-blue-500/20"
    aria-label={label}
    role="img"
    tabIndex={0}
  >
    {/* Hover Glow Effect */}
    <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-br from-blue-500/10 to-transparent rounded-2xl group-hover:opacity-100"></div>
    
    <div className="relative z-10">
      <div className="mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
        <Icon
          className="text-blue-400 text-5xl drop-shadow-lg
                     transition-colors duration-300 ease-in-out
                     group-hover:text-cyan-400"
          aria-hidden="true"
        />
      </div>
      <p className="text-gray-300 font-semibold text-center text-sm md:text-base select-none group-hover:text-white transition-colors duration-300">
        {label}
      </p>
    </div>
    
    {/* Bottom Accent Line */}
    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-2xl"></div>
  </div>
);

const TechStackSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const flatTechStack = techStack.flatMap(category => category.items);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      className="relative py-20 bg-gradient-to-br from-gray-900 via-slate-900 to-blue-900 overflow-hidden"
      aria-label="Technology Stack"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      
      {/* Gradient Orbs */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>

      <div className={`relative z-10 max-w-7xl mx-auto px-6 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-sm font-semibold text-blue-300 bg-blue-950/50 border border-blue-400/30 rounded-full backdrop-blur-md">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            <span className="uppercase tracking-wider">Technology Stack</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400">Tech Stack</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Leveraging cutting-edge technologies to build robust and scalable solutions
          </p>
          
          {/* Decorative Line */}
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="w-12 h-1 bg-gradient-to-r from-transparent to-blue-500 rounded"></div>
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <div className="w-12 h-1 bg-gradient-to-l from-transparent to-blue-500 rounded"></div>
          </div>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={24}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
            1280: { slidesPerView: 6 },
          }}
          className="pb-12"
          aria-label="Technology slider"
          role="list"
        >
          {flatTechStack.map(({ icon: Icon, label }, index) => (
            <SwiperSlide key={index} role="listitem">
              <TechCard Icon={Icon} label={label} />
            </SwiperSlide>
          ))}
        </Swiper>
        
        {/* Swiper Pagination Custom Styling */}
        <style>
          {`
            .swiper-pagination-bullet {
              background: #60A5FA !important;
              opacity: 0.5;
              width: 10px;
              height: 10px;
            }
            .swiper-pagination-bullet-active {
              background: #3B82F6 !important;
              opacity: 1;
              transform: scale(1.3);
            }
          `}
        </style>
      </div>
    </section>
  );
};

export default TechStackSection;
