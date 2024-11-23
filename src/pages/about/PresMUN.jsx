import React from 'react';
import { FaHistory, FaGlobeAsia, FaTrophy } from 'react-icons/fa';

export default function PresMUN() {
  const highlights = [
    {
      icon: <FaHistory />,
      title: "TEST",
      description: "This is a description. Testing the description."
    },
    {
      icon: <FaGlobeAsia />,
      title: "TEST",
      description: "This is a description. Testing the description."
    },
    {
      icon: <FaTrophy />,
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

      <div className="relative py-32 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-24 relative">
            <h1 className="font-horizon text-7xl text-center">
              <span className="text-[#f3c623]">About</span>
              <br />
              <span className="text-white">PresMUN</span>
            </h1>
            <div className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#f3c623] to-transparent opacity-50"></div>
          </div>

          {/* Introduction */}
          <div className="max-w-4xl mx-auto mb-32">
            <div className="relative">
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-[#f3c623] to-transparent"></div>
              <p className="text-white/80 text-xl leading-relaxed pl-8 font-montserrat">
                President International Model United Nations (PRESMUN) 2025 is the annual MUN Conference 
                held by President University Model United Nations (PUMUN). This marks our twelfth season 
                and our first offline event, following five consecutive years online due to COVID-19.
              </p>
            </div>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-32">
            {highlights.map((item, index) => (
              <div key={index} className="relative">
                <div className="absolute -inset-4 border-l-2 border-t-2 border-[#f3c623] opacity-20"></div>
                <div className="absolute -inset-4 border-r-2 border-b-2 border-[#f3c623] opacity-20 translate-x-2 translate-y-2"></div>
                
                <div className="relative p-8 bg-black/20">
                  <div className="absolute top-0 left-0 w-12 h-12 border-l-2 border-t-2 border-[#f3c623]"></div>
                  <div className="absolute bottom-0 right-0 w-12 h-12 border-r-2 border-b-2 border-[#f3c623]"></div>
                  
                  <div className="text-[#f3c623] text-4xl mb-6">
                    {item.icon}
                  </div>
                  <h3 className="font-horizon text-2xl mb-4">{item.title}</h3>
                  <p className="text-white/70 font-montserrat">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Legacy Section */}
          <div className="relative">
            <div className="absolute -inset-8 border-l-4 border-t-4 border-[#f3c623] opacity-20"></div>
            <div className="absolute -inset-8 border-r-4 border-b-4 border-[#f3c623] opacity-20 translate-x-4 translate-y-4"></div>
            
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-16 items-center bg-black/20 p-12">
              <div className="relative">
                <div className="absolute -inset-2 border-2 border-[#f3c623] opacity-50"></div>
                <img 
                  src="./alden.jpg" 
                  alt="PresMUN History" 
                  className="relative w-full h-[400px] object-cover"
                />
              </div>
              <div className="space-y-8">
                <h2 className="font-horizon text-5xl">
                  <span className="text-white">Our</span>
                  <br />
                  <span className="text-[#f3c623]">Legacy</span>
                </h2>
                <div className="relative">
                  <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-[#f3c623] to-transparent"></div>
                  <p className="text-white/80 leading-relaxed pl-8 font-montserrat text-lg">
                    PRESMUN has achieved a certain reputation and is often deemed as one of the most 
                    prestigious MUN Conferences in Indonesia despite its young age. We aim to expand our 
                    scope to the international community, serving as a platform for young thinkers worldwide 
                    to exchange ideas and shape a better future.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Decoration */}
          <div className="mt-32 flex items-center gap-4">
            <div className="flex-1 h-px bg-gradient-to-r from-[#f3c623] to-transparent"></div>
            <FaHistory className="text-4xl text-[#f3c623]" />
            <div className="flex-1 h-px bg-gradient-to-l from-[#f3c623] to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  );
}