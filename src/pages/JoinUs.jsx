import React from 'react';
import { FaUsers, FaChevronRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

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
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-24 relative"
          >
            <h1 className="font-horizon text-5xl md:text-6xl text-center">
              <span className="text-[#f3c623]">Join</span>
              <br />
              <span className="text-white">Us</span>
            </h1>
            <div className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#f3c623] to-transparent opacity-50"></div>
          </motion.div>

          {/* Coming Soon Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative max-w-4xl mx-auto"
          >
            {/* Background Elements */}
            <div className="absolute -inset-2 sm:-inset-3 border-l-2 border-t-2 border-[#f3c623]/20"></div>
            <div className="absolute -inset-2 sm:-inset-3 border-r-2 border-b-2 border-[#f3c623]/20 translate-x-1 translate-y-1 sm:translate-x-2 sm:translate-y-2"></div>
            <div className="absolute -inset-3 sm:-inset-4 border-l-2 border-t-2 border-[#f3c623]/10"></div>
            <div className="absolute -inset-3 sm:-inset-4 border-r-2 border-b-2 border-[#f3c623]/10 translate-x-2 translate-y-2 sm:translate-x-3 sm:translate-y-3"></div>
            <div className="absolute -inset-4 sm:-inset-5 border-l-2 border-t-2 border-[#f3c623]/5"></div>
            <div className="absolute -inset-4 sm:-inset-5 border-r-2 border-b-2 border-[#f3c623]/5 translate-x-3 translate-y-3 sm:translate-x-4 sm:translate-y-4"></div>
            
            <div className="relative p-8 sm:p-12 bg-black/20">
              <div className="space-y-8">
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="flex justify-center"
                >
                  <FaUsers className="text-5xl sm:text-6xl text-[#f3c623]" />
                </motion.div>
                <motion.h2 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="font-horizon text-3xl sm:text-4xl text-center"
                >
                  Coming Soon
                </motion.h2>
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="relative max-w-2xl mx-auto"
                >
                  <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-[#f3c623] to-transparent"></div>
                  <p className="text-white/80 font-montserrat text-lg sm:text-xl pl-8 leading-relaxed text-center">
                    We're preparing something special. Stay tuned for exciting opportunities to join our team!
                  </p>
                </motion.div>
              </div>

              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-8 h-8 sm:w-10 sm:h-10 border-l-2 border-t-2 border-[#f3c623]"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 sm:w-10 sm:h-10 border-r-2 border-b-2 border-[#f3c623]"></div>
            </div>
          </motion.div>

          {/* Bottom Decoration */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-32 flex items-center gap-4"
          >
            <div className="flex-1 h-px bg-gradient-to-r from-[#f3c623] to-transparent"></div>
            <FaChevronRight className="text-3xl sm:text-4xl text-[#f3c623]" />
            <div className="flex-1 h-px bg-gradient-to-l from-[#f3c623] to-transparent"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}