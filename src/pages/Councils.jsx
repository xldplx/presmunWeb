import React from 'react';
import { FaUsers } from 'react-icons/fa';

export default function Councils() {
  const councils = [
    { id: 1, title: "Council One", description: "Description for Council One" },
    { id: 2, title: "Council Two", description: "Description for Council Two" }
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
            <h1 className="font-horizon text-5xl md:text-6xl text-center">
              <span className="text-[#f3c623]">Our</span>
              <br />
              <span className="text-white">Councils</span>
            </h1>
            <div className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#f3c623] to-transparent opacity-50"></div>
          </div>

          {/* Councils Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            {councils.map((council, index) => (
              <div key={council.id} className="relative">
                {/* Background Elements */}
                <div className="absolute -inset-8 border-l-4 border-t-4 border-[#f3c623] opacity-20"></div>
                <div className="absolute -inset-8 border-r-4 border-b-4 border-[#f3c623] opacity-20 translate-x-4 translate-y-4"></div>
                
                {/* Content */}
                <div className="relative bg-black/20 p-12">
                  <div className="relative mb-12">
                    <div className="absolute -inset-2 border-2 border-[#f3c623] opacity-50"></div>
                    <img 
                      src="./alden.jpg" 
                      alt={council.title} 
                      className="w-full h-[300px] object-cover"
                    />
                  </div>
                  
                  <div className="relative">
                    <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-[#f3c623] to-transparent"></div>
                    <div className="pl-8">
                      <h2 className="font-horizon text-4xl mb-6">
                        <span className="text-[#f3c623]">{council.title}</span>
                      </h2>
                      <p className="font-montserrat text-lg text-white/70 leading-relaxed">
                        {council.description}
                      </p>
                    </div>
                  </div>

                  {/* Corner Accents */}
                  <div className="absolute top-0 left-0 w-16 h-16 border-l-4 border-t-4 border-[#f3c623]"></div>
                  <div className="absolute bottom-0 right-0 w-16 h-16 border-r-4 border-b-4 border-[#f3c623]"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Decoration */}
          <div className="mt-32 flex items-center gap-4">
            <div className="flex-1 h-px bg-gradient-to-r from-[#f3c623] to-transparent"></div>
            <FaUsers className="text-4xl text-[#f3c623]" />
            <div className="flex-1 h-px bg-gradient-to-l from-[#f3c623] to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  );
}