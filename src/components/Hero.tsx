import React from 'react';
import { FileText, ChevronRight, BarChart2, Users, Clock } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1504439468489-c8920d796a29?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 to-gray-900/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="pt-20 pb-16 lg:pt-32 lg:pb-24">
            {/* Main Content */}
            <div className="max-w-3xl">
              <div className="mb-8">
                <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-teal-600/10 text-teal-400 ring-1 ring-inset ring-teal-600/20">
                  Research Project
                </span>
              </div>

              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
                Transforming Medical Approval Systems in Bangladesh
              </h1>

              <p className="text-lg text-gray-300 max-w-2xl mb-8">
                A comprehensive analysis of healthcare approval processes, challenges, and opportunities for improvement. Based on extensive research and collaboration with medical professionals across Bangladesh.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 mb-16">
                <a
                  href="#statistics"
                  className="inline-flex items-center px-6 py-3 rounded-lg bg-teal-600 text-white font-medium hover:bg-teal-700 transition-colors duration-200"
                >
                  <FileText className="h-5 w-5 mr-2" />
                  View Research Findings
                  <ChevronRight className="h-5 w-5 ml-2" />
                </a>
                <a
                  href="#about"
                  className="inline-flex items-center px-6 py-3 rounded-lg bg-white/10 text-white font-medium hover:bg-white/20 transition-colors duration-200"
                >
                  Learn More
                </a>
              </div>

              {/* Key Statistics */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-white/10">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Users className="h-6 w-6 text-teal-400" />
                  </div>
                  <div className="ml-4">
                    <p className="text-2xl font-semibold text-white">70+</p>
                    <p className="text-sm text-gray-400">Medical Professionals Surveyed</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <BarChart2 className="h-6 w-6 text-teal-400" />
                  </div>
                  <div className="ml-4">
                    <p className="text-2xl font-semibold text-white">12</p>
                    <p className="text-sm text-gray-400">Healthcare Specialties</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent z-10" />
    </div>
  );
};

export default Hero;