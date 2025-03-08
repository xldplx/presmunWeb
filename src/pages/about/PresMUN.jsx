import React from 'react';
import { FaHistory, FaGlobeAsia, FaTrophy } from 'react-icons/fa';
import { motion } from 'framer-motion';

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

      <div className="relative py-[5rem] sm:py-16 md:py-[10rem] px-4 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 sm:mb-16 md:mb-20 relative"
          >
            <h1 className="font-horizon text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center">
              <span className="text-[#f3c623]">About</span>
              <br className="sm:hidden" />
              <span className="text-white ml-2 sm:ml-4">PresMUN</span>
            </h1>
            <div className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#f3c623] to-transparent opacity-50"></div>
          </motion.div>

          {/* Introduction (About) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-4xl mx-auto mb-12 sm:mb-16 md:mb-20"
          >
            <div className="relative">
              <div className="absolute -left-2 sm:-left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-[#f3c623] to-transparent"></div>
              <p className="text-white/80 text-base sm:text-lg leading-relaxed pl-4 sm:pl-8 font-montserrat">
                President International Model United Nations (PRESMUN) 2025 is the annual MUN Conference held by President University Model United Nations (PUMUN) and this is the twelfth season of PRESMUN and is the first offline event, after five consecutive years online due to the COVID-19 in 2020. PRESMUN first installment was done in 2012 and, ever since, has received high enthusiasm and eager anticipation from local and international audiences. At the national stage, PRESMUN has achieved a certain reputation and is often deemed as one of the most prestigious MUN Conferences in Indonesia despite its young age. PRESMUN desired to expand its scope to the international community thus the name President International Model United Nations with the aim could be a platform upon which a group of young thinkers all around the world could pour their ideas and learn how to shape this world into a better place.
              </p>
            </div>
          </motion.div>

          {/* Grand Theme */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-4xl mx-auto mb-12 sm:mb-16 md:mb-20 p-6 sm:p-8 bg-black/20 rounded-lg shadow-lg hover:shadow-xl border-l-4 border-[#f3c623] relative overflow-hidden"
          >
            <h2 className="font-horizon text-2xl sm:text-3xl md:text-4xl text-center text-[#f3c623] mb-6">
              Grand Theme
            </h2>
            <div className="relative text-center">
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-[#f3c623]/50 to-transparent opacity-70"></div>
              <div className="absolute bottom-0 right-0 w-2 h-full bg-gradient-to-t from-[#f3c623]/50 to-transparent opacity-70"></div>
              <p className="text-white/90 text-base sm:text-lg leading-relaxed font-montserrat">
                Answer the Nature's Call: Advancing Sustainability for a Climate-Secure Future.
              </p>
            </div>
          </motion.div>

          {/* Tagline */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="max-w-4xl mx-auto mb-12 sm:mb-16 md:mb-20 p-6 sm:p-8 bg-black/20 rounded-lg shadow-lg hover:shadow-xl border-l-4 border-[#f3c623] relative overflow-hidden"
          >
            <h2 className="font-horizon text-2xl sm:text-3xl md:text-4xl text-center text-[#f3c623] mb-6">
              Tagline
            </h2>
            <div className="relative text-center">
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-[#f3c623]/50 to-transparent opacity-70"></div>
              <div className="absolute bottom-0 right-0 w-2 h-full bg-gradient-to-t from-[#f3c623]/50 to-transparent opacity-70"></div>
              <p className="text-white/90 text-base sm:text-lg leading-relaxed font-montserrat">
                Nature's Legacy, Tomorrow's Promise
              </p>
            </div>
          </motion.div>

          {/* Welcoming Remarks */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="max-w-4xl mx-auto mb-12 sm:mb-16 md:mb-20"
          >
            <h2 className="font-horizon text-2xl sm:text-3xl md:text-4xl text-center text-[#f3c623] mb-6">
              Welcoming Remarks from Secretary General of PRESMUN 2025
            </h2>
            <div className="relative">
              <div className="absolute -left-2 sm:-left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-[#f3c623] to-transparent"></div>
              <p className="text-white/80 text-base sm:text-lg leading-relaxed pl-4 sm:pl-8 font-montserrat">
                As the Secretary General of PRESMUN 2025, with great excitement and enthusiasm, I welcome all of you to President International Model United Nations 2025! This year’s conference promises to be an incredible journey, filled with fresh ideas, passionate debates, and creative solutions to some of the world’s challenges. I hope this experience sparks your curiosity, sharpens your diplomatic skills, and strengthens your ability to create a better and more harmonious cooperation. Get ready to engage with fellow delegates, learn new perspectives, and have fun while solving global issues. 
                I’m confident that each of you not only will bring lasting memories from PRESMUN 2025 but also a deeper understanding of international relations. Let’s make this a memorable and meaningful event for everyone involved. Enjoy every moment and let's make remarkable memories of this Model United Nations.
              </p>
            </div>
          </motion.div>

          {/* <h1 className="font-horizon text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center">  
            COMING SOON
          </h1> */}

          {/* Registration Phase */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="max-w-4xl mx-auto mb-12 sm:mb-16 md:mb-20 p-6 sm:p-8 bg-black/20 rounded-lg shadow-lg hover:shadow-xl relative overflow-hidden border-t-4 border-b-4 border-[#f3c623]"
          >
            {/* Gradient Decorative Borders */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#f3c623]/50 to-transparent opacity-70"></div>
            <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-[#f3c623]/50 to-transparent opacity-70"></div>

            <h2 className="font-horizon text-2xl sm:text-3xl md:text-4xl text-center text-[#f3c623] mb-4">
              Join Us at PRESMUN 2025!
            </h2>
            <p className="text-white/80 text-center text-base sm:text-lg font-montserrat mb-6">
              Mark your calendars and secure your spot for an unforgettable journey at President International Model United Nations 2025. Don’t miss the chance to be part of this transformative experience!
            </p>
            <h3 className="font-horizon text-xl sm:text-2xl text-center text-[#f3c623] mb-4">
              Registration Phases
            </h3>
            <div className="text-center space-y-3">
              <p className="text-white/90 text-base sm:text-lg font-montserrat">
                <span className="text-[#f3c623] font-semibold">Early Bird:</span> 25 March - 6 April 2025
              </p>
              <p className="text-white/90 text-base sm:text-lg font-montserrat">
                <span className="text-[#f3c623] font-semibold">Regular Wave:</span> 11 April - 25 April 2025
              </p>
              <p className="text-white/90 text-base sm:text-lg font-montserrat">
                <span className="text-[#f3c623] font-semibold">Late Phase:</span> 3 May - 20 May 2025
              </p>
            </div>
          </motion.div>

          {/* Highlights */}
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mb-12 sm:mb-16 md:mb-20">
            {highlights.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="relative h-[300px] sm:h-[320px]"
              >
                <div className="absolute -inset-2 sm:-inset-3 border-l-2 border-t-2 border-[#f3c623] opacity-20"></div>
                <div className="absolute -inset-2 sm:-inset-3 border-r-2 border-b-2 border-[#f3c623] opacity-20 translate-x-1 translate-y-1 sm:translate-x-2 sm:translate-y-2"></div>
                
                <div className="relative p-4 sm:p-6 bg-black/20 h-full flex flex-col">
                  <div className="absolute top-0 left-0 w-6 h-6 sm:w-8 sm:h-8 border-l-2 border-t-2 border-[#f3c623]"></div>
                  <div className="absolute bottom-0 right-0 w-6 h-6 sm:w-8 sm:h-8 border-r-2 border-b-2 border-[#f3c623]"></div>
                  
                  <div className="text-[#f3c623] text-2xl sm:text-3xl mb-4">
                    {item.icon}
                  </div>
                  <h3 className="font-horizon text-lg sm:text-xl mb-3">{item.title}</h3>
                  <p className="text-white/70 text-sm font-montserrat flex-1">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div> */}

          {/* Legacy Section */}
          {/* <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-3 sm:-inset-4 border-l-2 border-t-2 border-[#f3c623] opacity-20"></div>
            <div className="absolute -inset-3 sm:-inset-4 border-r-2 border-b-2 border-[#f3c623] opacity-20 translate-x-1 translate-y-1 sm:translate-x-2 sm:translate-y-2"></div>
            
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center bg-black/20 p-4 sm:p-6 md:p-8">
              <div className="relative">
                <div className="absolute -inset-1 border-2 border-[#f3c623] opacity-50"></div>
                <img 
                  src="./alden.jpg" 
                  alt="PresMUN History" 
                  className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover"
                />
              </div>
              <div className="space-y-4 sm:space-y-6">
                <h2 className="font-horizon text-2xl sm:text-3xl md:text-4xl">
                  <span className="text-white">Our</span>
                  <br className="hidden sm:block" />
                  <span className="text-[#f3c623] ml-2 sm:ml-0">Legacy</span>
                </h2>
                <div className="relative">
                  <div className="absolute -left-2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#f3c623] to-transparent"></div>
                  <p className="text-white/70 text-sm sm:text-base leading-relaxed pl-4 font-montserrat">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              </div>
            </div>
          </motion.div> */}

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