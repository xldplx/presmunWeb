import React from 'react';
import { FaCalendarAlt, FaUniversity, FaUsers, FaChevronRight } from 'react-icons/fa';

export default function PUMUN() {
  const milestones = [
    {
      icon: <FaCalendarAlt />,
      title: "TEST",
      description: "This is a description. Testing the description."
    },
    {
      icon: <FaUniversity />,
      title: "TEST",
      description: "This is a description. Testing the description."
    },
    {
      icon: <FaUsers />,
      title: "TEST",
      description: "This is a description. Testing the description."
    }
  ];

  return (
    <div className="bg-[#000420] min-h-screen text-white/90">
      <div className="fixed inset-0 bg-[#000420]">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(circle at 50% 50%, transparent 0%, #000420 70%)',
          backgroundSize: '50px 50px',
          opacity: 0.3 
        }}></div>
      </div>

      <div className="relative py-20 sm:py-32 px-4 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-16 sm:mb-24 relative">
            <h1 className="font-horizon text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center">
              <span className="text-[#f3c623]">About</span>
              <br className="sm:hidden" />
              <span className="text-white ml-2 sm:ml-4">PUMUN</span>
            </h1>
            <div className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#f3c623] to-transparent opacity-50"></div>
          </div>

          {/* Introduction */}
          <div className="max-w-4xl mx-auto mb-20 sm:mb-32">
            <div className="relative">
              <div className="absolute -left-2 sm:-left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-[#f3c623] to-transparent"></div>
              <p className="text-white/80 text-lg sm:text-xl leading-relaxed pl-4 sm:pl-8 font-montserrat">
                President University Model United Nations (PUMUN) Club is a student-based organization 
                that operates under the direction of President University's International Relations Department.
              </p>
            </div>
          </div>

          {/* Milestones */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16 mb-20 sm:mb-32">
            {milestones.map((item, index) => (
              <div key={index} className="relative">
                <div className="absolute -inset-2 sm:-inset-4 border-l-2 border-t-2 border-[#f3c623] opacity-20"></div>
                <div className="absolute -inset-2 sm:-inset-4 border-r-2 border-b-2 border-[#f3c623] opacity-20 translate-x-1 translate-y-1 sm:translate-x-2 sm:translate-y-2"></div>
                
                <div className="relative p-4 sm:p-8 bg-black/20">
                  <div className="absolute top-0 left-0 w-8 h-8 sm:w-12 sm:h-12 border-l-2 border-t-2 border-[#f3c623]"></div>
                  <div className="absolute bottom-0 right-0 w-8 h-8 sm:w-12 sm:h-12 border-r-2 border-b-2 border-[#f3c623]"></div>
                  
                  <div className="text-[#f3c623] text-3xl sm:text-4xl mb-4 sm:mb-6">
                    {item.icon}
                  </div>
                  <h3 className="font-horizon text-xl sm:text-2xl mb-3 sm:mb-4">{item.title}</h3>
                  <p className="text-white/70 text-sm sm:text-base font-montserrat">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Timeline */}
          <div className="relative max-w-5xl mx-auto">
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#f3c623] via-[#f3c623] to-transparent"></div>
            
            <div className="space-y-16 sm:space-y-32">
              <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-16">
                <div className="sm:text-right sm:pr-16">
                  <div className="relative">
                    <div className="absolute -inset-2 sm:-inset-4 border-l-2 border-t-2 border-[#f3c623] opacity-20"></div>
                    <div className="absolute -inset-2 sm:-inset-4 border-r-2 border-b-2 border-[#f3c623] opacity-20 translate-x-1 translate-y-1 sm:translate-x-2 sm:translate-y-2"></div>
                    <div className="relative p-4 sm:p-6 bg-black/20">
                      <h3 className="font-horizon text-2xl sm:text-3xl mb-4">#1 TIMELINE</h3>
                      <p className="text-white/80 font-montserrat text-sm sm:text-base">
                        This is the timeline description. Will edit this later.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative pl-8 sm:pl-16">
                  <div className="absolute left-4 sm:left-0 top-1/2 -translate-y-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-[#f3c623] rotate-45"></div>
                  <div className="relative">
                    <div className="absolute -inset-1 sm:-inset-2 border-2 border-[#f3c623] opacity-50"></div>
                    <img 
                      src="./alden.jpg" 
                      alt="Timeline 1" 
                      className="relative w-full h-[200px] sm:h-[300px] object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-16">
                <div className="sm:order-2 sm:text-left sm:pl-16">
                  <div className="relative">
                    <div className="absolute -inset-2 sm:-inset-4 border-l-2 border-t-2 border-[#f3c623] opacity-20"></div>
                    <div className="absolute -inset-2 sm:-inset-4 border-r-2 border-b-2 border-[#f3c623] opacity-20 translate-x-1 translate-y-1 sm:translate-x-2 sm:translate-y-2"></div>
                    <div className="relative p-4 sm:p-6 bg-black/20">
                      <h3 className="font-horizon text-2xl sm:text-3xl mb-4">#2 TIMELINE</h3>
                      <p className="text-white/80 font-montserrat text-sm sm:text-base">
                        This is the timeline description. Will edit this later.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative pl-8 sm:pl-0 sm:pr-16 sm:order-1">
                  <div className="absolute left-4 sm:right-0 top-1/2 -translate-y-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-[#f3c623] rotate-45"></div>
                  <div className="relative">
                    <div className="absolute -inset-1 sm:-inset-2 border-2 border-[#f3c623] opacity-50"></div>
                    <img 
                      src="./alden.jpg" 
                      alt="Timeline 2" 
                      className="relative w-full h-[200px] sm:h-[300px] object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Decoration */}
          <div className="mt-32 flex items-center gap-4">
            <div className="flex-1 h-px bg-gradient-to-r from-[#f3c623] to-transparent"></div>
            <FaChevronRight className="text-4xl text-[#f3c623]" />
            <div className="flex-1 h-px bg-gradient-to-l from-[#f3c623] to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  );
}