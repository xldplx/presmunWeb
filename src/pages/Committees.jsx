import React from 'react';
import { FaUsers } from 'react-icons/fa';

export default function Committees() {
  const committees = {
    president: {
      name: "Alden Sayidina Radjab",
      role: "President",
      image: "./alden.jpg"
    },
    vicePresidents: [
      {
        name: "Alden Sayidina Radjab",
        role: "Vice President I",
        image: "./alden.jpg"
      },
      {
        name: "Alden Sayidina Radjab",
        role: "Vice President II",
        image: "./alden.jpg"
      }
    ],
    directors: [
      {
        name: "Alden Sayidina Radjab",
        role: "Director of Operations",
        image: "./alden.jpg"
      },
      {
        name: "Alden Sayidina Radjab",
        role: "Director of Public Relations",
        image: "./alden.jpg"
      },
      {
        name: "Alden Sayidina Radjab",
        role: "Director of Human Resources",
        image: "./alden.jpg"
      }
    ]
  };

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
              <span className="text-white">Committee</span>
              <br />
              <span className="text-[#f3c623]">Structure</span>
            </h1>
            <div className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#f3c623] to-transparent opacity-50"></div>
          </div>

          <div className="space-y-32">
            {/* President Section */}
            <div className="relative">
              <div className="absolute -inset-8 border-2 border-[#f3c623] opacity-10"></div>
              <div className="relative max-w-2xl mx-auto">
                <div className="relative p-12 bg-black/20">
                  <div className="absolute top-0 left-0 w-20 h-20 border-l-4 border-t-4 border-[#f3c623]"></div>
                  <div className="absolute bottom-0 right-0 w-20 h-20 border-r-4 border-b-4 border-[#f3c623]"></div>
                  
                  <div className="text-center space-y-6">
                    <div className="relative inline-block">
                      <div className="absolute -inset-2 border-2 border-[#f3c623] opacity-50"></div>
                      <img 
                        src={committees.president.image}
                        alt={committees.president.name}
                        className="w-40 h-40 object-cover relative"
                      />
                    </div>
                    <div>
                      <h2 className="font-horizon text-4xl text-[#f3c623]">{committees.president.name}</h2>
                      <p className="font-montserrat text-xl mt-2">{committees.president.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Vertical Line */}
            <div className="w-px h-32 bg-gradient-to-b from-[#f3c623] to-transparent mx-auto"></div>

            {/* Vice Presidents Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {committees.vicePresidents.map((vp, index) => (
                <div key={index} className="relative">
                  <div className="absolute -inset-4 border-l-2 border-t-2 border-[#f3c623] opacity-20"></div>
                  <div className="absolute -inset-4 border-r-2 border-b-2 border-[#f3c623] opacity-20 translate-x-2 translate-y-2"></div>
                  
                  <div className="relative p-8 bg-black/20">
                    <div className="flex items-center gap-8">
                      <div className="relative flex-shrink-0">
                        <div className="absolute -inset-2 border border-[#f3c623] opacity-50"></div>
                        <img 
                          src={vp.image}
                          alt={vp.name}
                          className="w-24 h-24 object-cover relative"
                        />
                      </div>
                      <div>
                        <h3 className="font-horizon text-2xl text-[#f3c623]">{vp.name}</h3>
                        <p className="font-montserrat mt-2">{vp.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Vertical Line */}
            <div className="w-px h-32 bg-gradient-to-b from-[#f3c623] to-transparent mx-auto"></div>

            {/* Directors Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {committees.directors.map((director, index) => (
                <div key={index} className="relative group">
                  <div className="absolute inset-0 border border-[#f3c623] opacity-10"></div>
                  <div className="relative p-6 bg-black/20">
                    <div className="absolute top-0 left-0 w-12 h-12 border-l-2 border-t-2 border-[#f3c623]"></div>
                    <div className="absolute bottom-0 right-0 w-12 h-12 border-r-2 border-b-2 border-[#f3c623]"></div>
                    
                    <div className="text-center space-y-4">
                      <div className="relative inline-block">
                        <div className="absolute -inset-1 border border-[#f3c623] opacity-50"></div>
                        <img 
                          src={director.image}
                          alt={director.name}
                          className="w-20 h-20 object-cover relative"
                        />
                      </div>
                      <div>
                        <h3 className="font-horizon text-xl text-[#f3c623]">{director.name}</h3>
                        <p className="font-montserrat text-sm mt-1">{director.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
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