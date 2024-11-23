import React from 'react';
import { FaUsers, FaStar } from 'react-icons/fa';
import PageLayout from '../components/layout/PageLayout';

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
    <section className="min-h-screen py-[10rem] px-4 md:px-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center gap-6 mb-16">
          <FaUsers className="text-4xl text-[#f3c623]" />
          <h1 className="font-horizon text-3xl md:text-4xl">Committee Structure</h1>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-[#f3c623] to-transparent"></div>
        </div>

        <div className="space-y-32">
          {/* President */}
          <div className="flex justify-center">
            <div className="relative group w-full max-w-md">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#f3c623] to-[#eb8317] rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
              <div className="relative px-8 py-6 bg-black/30 backdrop-blur-xl rounded-lg border border-white/10">
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#f3c623] to-[#eb8317] rounded-full blur opacity-50"></div>
                    <img 
                      src={committees.president.image} 
                      alt={committees.president.name} 
                      className="relative w-24 h-24 rounded-full ring-4 ring-[#f3c623] group-hover:scale-110 transition-all duration-300" 
                    />
                  </div>
                </div>
                <div className="mt-14 text-center">
                  <h3 className="font-horizon text-xl">{committees.president.name}</h3>
                  <p className="text-[#f3c623] font-light mt-1">{committees.president.role}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Connecting Line */}
          <div className="w-px h-16 bg-gradient-to-b from-[#f3c623] to-transparent mx-auto -mt-16"></div>

          {/* Vice Presidents */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {committees.vicePresidents.map((vp, index) => (
              <div key={index} className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#f3c623] to-[#eb8317] rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
                <div className="relative px-8 py-6 bg-black/30 backdrop-blur-xl rounded-lg border border-white/10">
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                    <img 
                      src={vp.image} 
                      alt={vp.name} 
                      className="w-20 h-20 rounded-full ring-4 ring-[#f3c623] group-hover:scale-110 transition-all duration-300" 
                    />
                  </div>
                  <div className="mt-14 text-center">
                    <h3 className="font-horizon text-lg">{vp.name}</h3>
                    <p className="text-[#f3c623] font-light mt-1">{vp.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Connecting Lines */}
          <div className="w-px h-16 bg-gradient-to-b from-[#f3c623] to-transparent mx-auto -mt-16"></div>

          {/* Directors */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {committees.directors.map((director, index) => (
              <div key={index} className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#f3c623] to-[#eb8317] rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
                <div className="relative px-6 py-4 bg-black/30 backdrop-blur-xl rounded-lg border border-white/10">
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                    <img 
                      src={director.image} 
                      alt={director.name} 
                      className="w-16 h-16 rounded-full ring-4 ring-[#f3c623] group-hover:scale-110 transition-all duration-300" 
                    />
                  </div>
                  <div className="mt-10 text-center">
                    <h3 className="font-horizon text-base">{director.name}</h3>
                    <p className="text-[#f3c623] font-light mt-1 text-sm">{director.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}   