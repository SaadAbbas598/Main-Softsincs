import React, { useEffect, useState } from "react";
import AnimatedBackground from "../common/AnimatedBackground";
import HeroButtons from "./HeroButtons";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="pt-[80px] relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-gray-900 via-slate-900 to-blue-900">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
      
      {/* Decorative Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
      <div className="absolute top-20 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-20 left-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-16">
        <div className={`max-w-7xl mx-auto text-center transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 mb-8 text-sm font-semibold text-blue-400 bg-blue-950/50 border border-blue-500/30 rounded-full shadow-lg animate-fade-in-up backdrop-blur-md">
            <span className="relative flex w-2 h-2">
              <span className="absolute inline-flex w-full h-full bg-blue-400 rounded-full opacity-75 animate-ping"></span>
              <span className="relative inline-flex w-2 h-2 bg-blue-400 rounded-full"></span>
            </span>
            <span>Enterprise Software Solutions | Trusted by 100+ Global Companies</span>
          </div>

          {/* Main Heading */}
          <h1 className="mb-6 text-4xl font-black leading-tight text-white sm:mb-8 sm:text-5xl md:text-6xl lg:text-7xl animate-fade-in-up">
            <span className="block">
              Building Next-Generation
            </span>
            <span className="block mt-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400">
              Software Solutions
            </span>
          </h1>

          {/* Subtitle */}
          <p className="max-w-3xl px-4 mx-auto mb-4 text-lg leading-relaxed text-gray-300 sm:mb-6 sm:text-xl md:text-2xl animate-fade-in-up font-light" style={{ animationDelay: '0.1s' }}>
            Enterprise-grade software development for businesses that want to scale
          </p>

          {/* Description */}
          <p className="max-w-3xl px-4 mx-auto mb-10 text-base leading-relaxed text-gray-400 sm:mb-12 sm:text-lg animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            From custom web applications to AI-powered solutions, we deliver innovative technology that transforms businesses and drives measurable results.
          </p>

          {/* Buttons */}
          <div className="mb-12 animate-fade-in-up sm:mb-16" style={{ animationDelay: '0.3s' }}>
            <HeroButtons />
          </div>

          {/* Stats Bar with Technical Feel */}
          <div className="grid justify-center grid-cols-2 gap-4 px-4 mb-12 sm:mb-16 lg:grid-cols-4 sm:gap-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="relative p-6 text-center transition-all duration-300 transform border bg-slate-900/40 border-blue-500/20 backdrop-blur-xl rounded-2xl hover:scale-105 hover:border-blue-400/40 hover:bg-slate-900/60 group">
              <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-br from-blue-500/10 to-transparent rounded-2xl group-hover:opacity-100"></div>
              <div className="relative">
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div className="mb-2 text-3xl font-black text-white md:text-4xl">250+</div>
                <div className="text-xs font-semibold tracking-wider text-blue-400 uppercase">Projects Delivered</div>
              </div>
            </div>
            
            <div className="relative p-6 text-center transition-all duration-300 transform border bg-slate-900/40 border-purple-500/20 backdrop-blur-xl rounded-2xl hover:scale-105 hover:border-purple-400/40 hover:bg-slate-900/60 group">
              <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-br from-purple-500/10 to-transparent rounded-2xl group-hover:opacity-100"></div>
              <div className="relative">
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="mb-2 text-3xl font-black text-white md:text-4xl">100+</div>
                <div className="text-xs font-semibold tracking-wider text-purple-400 uppercase">Happy Clients</div>
              </div>
            </div>
            
            <div className="relative p-6 text-center transition-all duration-300 transform border bg-slate-900/40 border-cyan-500/20 backdrop-blur-xl rounded-2xl hover:scale-105 hover:border-cyan-400/40 hover:bg-slate-900/60 group">
              <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-2xl group-hover:opacity-100"></div>
              <div className="relative">
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div className="mb-2 text-3xl font-black text-white md:text-4xl">50+</div>
                <div className="text-xs font-semibold tracking-wider text-cyan-400 uppercase">Expert Team</div>
              </div>
            </div>
            
            <div className="relative p-6 text-center transition-all duration-300 transform border bg-slate-900/40 border-indigo-500/20 backdrop-blur-xl rounded-2xl hover:scale-105 hover:border-indigo-400/40 hover:bg-slate-900/60 group">
              <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-br from-indigo-500/10 to-transparent rounded-2xl group-hover:opacity-100"></div>
              <div className="relative">
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="mb-2 text-3xl font-black text-white md:text-4xl">5+</div>
                <div className="text-xs font-semibold tracking-wider text-indigo-400 uppercase">Years Excellence</div>
              </div>
            </div>
          </div>

          {/* Technology Stack Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-10 animate-fade-in-up sm:gap-4" style={{ animationDelay: '0.5s' }}>
            <span className="px-4 py-2 text-xs font-semibold text-gray-300 border rounded-full bg-slate-800/50 border-slate-700 backdrop-blur-sm">React</span>
            <span className="px-4 py-2 text-xs font-semibold text-gray-300 border rounded-full bg-slate-800/50 border-slate-700 backdrop-blur-sm">Node.js</span>
            <span className="px-4 py-2 text-xs font-semibold text-gray-300 border rounded-full bg-slate-800/50 border-slate-700 backdrop-blur-sm">Python</span>
            <span className="px-4 py-2 text-xs font-semibold text-gray-300 border rounded-full bg-slate-800/50 border-slate-700 backdrop-blur-sm">AI/ML</span>
            <span className="px-4 py-2 text-xs font-semibold text-gray-300 border rounded-full bg-slate-800/50 border-slate-700 backdrop-blur-sm">Cloud</span>
            <span className="px-4 py-2 text-xs font-semibold text-gray-300 border rounded-full bg-slate-800/50 border-slate-700 backdrop-blur-sm">DevOps</span>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-8 text-sm border-t sm:gap-8 border-slate-700/50 text-gray-400 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">ISO 9001:2015 Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
              </svg>
              <span className="font-medium">24/7 Technical Support</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Agile Methodology</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute transform -translate-x-1/2 bottom-8 left-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs font-medium tracking-wider text-gray-400 uppercase">Explore More</span>
          <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
