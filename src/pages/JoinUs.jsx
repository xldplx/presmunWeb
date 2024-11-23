import React from 'react';
import { FaUsers, FaChevronRight } from 'react-icons/fa';

export default function JoinUs() {
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
              <span className="text-[#f3c623]">Join</span>
              <br />
              <span className="text-white">Us</span>
            </h1>
            <div className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#f3c623] to-transparent opacity-50"></div>
          </div>

          {/* Coming Soon Section */}
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute -inset-8 border-l-4 border-t-4 border-[#f3c623] opacity-20"></div>
            <div className="absolute -inset-8 border-r-4 border-b-4 border-[#f3c623] opacity-20 translate-x-4 translate-y-4"></div>
            
            <div className="relative p-12 bg-black/20 text-center">
              <div className="space-y-8">
                <div className="flex justify-center">
                  <FaUsers className="text-6xl text-[#f3c623]" />
                </div>
                <h2 className="font-horizon text-4xl">Coming Soon</h2>
                <div className="relative max-w-2xl mx-auto">
                  <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-[#f3c623] to-transparent"></div>
                  <p className="text-white/80 font-montserrat text-xl pl-8 leading-relaxed">
                    We're preparing something special. Stay tuned for exciting opportunities to join our team!
                  </p>
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