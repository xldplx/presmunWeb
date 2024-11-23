import React from 'react';
import { FaUsers } from 'react-icons/fa';

export default function Councils() {
  const councils = [
    { id: 1, title: "Council One", description: "Description for Council One" },
    { id: 2, title: "Council Two", description: "Description for Council Two" }
  ];

  return (
    <div className="bg-gradient-to-b from-[#000420] to-[#00072d] min-h-screen text-white/90 py-[10rem] px-4 md:px-8">
      <div className="max-w-7xl mx-auto px-4 py-32">
        <div className="flex items-center gap-6 mb-16">
          <FaUsers className="text-4xl text-[#f3c623]" />
          <h1 className="font-horizon text-3xl md:text-4xl">Our Councils</h1>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-[#f3c623] to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {councils.map((council) => (
            <div key={council.id} className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#f3c623] to-[#eb8317] rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
              <div className="relative p-8 bg-black/30 backdrop-blur-xl rounded-lg border border-white/10">
                <img 
                  src="/alden.jpg" 
                  alt={council.title} 
                  className="w-32 h-32 rounded-full mx-auto mb-6 ring-4 ring-[#f3c623] group-hover:scale-110 transition-all duration-300" 
                />
                <h2 className="font-horizon text-2xl text-center mb-4">{council.title}</h2>
                <p className="text-white/70 text-center">{council.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 