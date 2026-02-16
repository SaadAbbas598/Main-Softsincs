import React, { useState, useEffect } from 'react';
import Card from '../../components/ui/Card';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import servicesData from '../../data/servicesData';

function Services() {
  const [showAll, setShowAll] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const visibleCards = showAll ? servicesData : servicesData.slice(0, 6);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative py-20 px-4 bg-gradient-to-br from-gray-900 via-slate-900 to-blue-900 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      
      {/* Gradient Orbs */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      
      {/* Section Heading */}
      <div className={`relative z-10 mb-16 text-center transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-sm font-semibold text-blue-300 bg-blue-950/50 border border-blue-400/30 rounded-full backdrop-blur-md">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
          </svg>
          <span className="uppercase tracking-wider">What We Offer</span>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400">Services</span>
        </h2>
        <p className="mt-4 text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">Comprehensive software solutions tailored to accelerate your digital transformation</p>
        
        {/* Decorative Line */}
        <div className="flex items-center justify-center gap-2 mt-6">
          <div className="w-12 h-1 bg-gradient-to-r from-transparent to-blue-500 rounded"></div>
          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
          <div className="w-12 h-1 bg-gradient-to-l from-transparent to-blue-500 rounded"></div>
        </div>
      </div>

      {/* Mobile & Tablet: Swiper */}
      <div className="relative block lg:hidden z-10">
        <Swiper
          spaceBetween={20}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 2 },
          }}
          className="w-full pb-12"
        >
          {servicesData.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center">
                <Card
                  title={service.title}
                  tag={service.tag}
                  link={service.link}
                  bgImage={service.bgImage}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Swiper Dots Styling */}
        <style>
          {`
            .swiper-pagination {
              bottom: 0px !important;
              text-align: center;
            }
            .swiper-pagination-bullet {
              background: #60A5FA !important;
              opacity: 0.5;
              width: 10px;
              height: 10px;
            }
            .swiper-pagination-bullet-active {
              background: #3B82F6 !important;
              opacity: 1;
              transform: scale(1.2);
            }
          `}
        </style>
      </div>

      {/* Desktop: Grid View */}
      <div className="relative z-10 flex-wrap justify-center hidden gap-6 lg:flex max-w-7xl mx-auto">
        {visibleCards.map((service, index) => (
          <div
            key={index}
            className="animate-fade-in-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <Card
              title={service.title}
              tag={service.tag}
              link={service.link}
              bgImage={service.bgImage}
            />
          </div>
        ))}
      </div>

      {/* Show More / View Less Button */}
      <div className="relative z-10 hidden mt-16 text-center lg:block">
        <button
          onClick={() => setShowAll(!showAll)}
          className="group relative px-8 py-4 text-base font-semibold text-white transition-all duration-300 border-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 border-blue-400 hover:from-blue-500 hover:to-indigo-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50"
        >
          <span className="flex items-center gap-2">
            {showAll ? (
              <>
                View Less
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
              </>
            ) : (
              <>
                View All Services
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </>
            )}
          </span>
        </button>
      </div>

      {/* Bottom Decorative Line */}
      <div className="relative z-10 mt-20">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30"></div>
      </div>
    </div>
  );
}

export default Services;
