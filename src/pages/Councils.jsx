import React from 'react';
import { FaUsers } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Councils() {
  const councils = [
    {
      id: 1,
      img: "./UNEP WHITE.png",
      title: "United Nations Environment Programme (UNEP)",
      theme: "Rising Tides, Falling Diversity: Climate Change Action Against Sea Level Rise and Biodiversity Loss",
      difficulty: "Beginner - Single",
      description:
        "The United Nations Environment Programme (UNEP) is the leading global authority on environmental issues, dedicated to combating climate change, protecting biodiversity, and promoting sustainability. Established in 1972, UNEP works to address rising sea levels and biodiversity loss by advocating for emissions reduction, ecosystem conservation, and climate resilience. Through international cooperation and policy development, UNEP encourages global action, particularly from major emitters, to secure a sustainable and climate-resilient future.",
    },
    {
      id: 2,
      img: "./UNDP WHITE.png",
      title: "United Nations Development Programme (UNDP)",
      theme: "Navigating Climate Change Impacts by Environmental Justice for Urban Displacement and Gentrification",
      difficulty: "Intermediate -  Single",
      description:
        "The United Nations Development programme is a body within the UN agency which centers itself on international development of society through having dedications in eradicating poverty, promoting sustainable development and strengthening democratic governance. Over 170 countries worldwide are a part of this body, assisting and funding initiatives within the frame of Sustainable Development Goals (SDGs). UNDP focuses on addressing climate challenges, preventing crises, building resilience and creating an environment of social equity via international cooperations.",
    },
    {
      id: 3,
      img: "./IPC WHITE.png",
      title: "Press Corps",
      difficulty: "Beginner - Single",
      description:
        "The Press Council at President University Model United Nations 2025 plays an important role in spreading awareness about sustainability and climate action. Under the grand theme “Answer the Nature’s Call: Advancing Sustainability for a Climate-Secure Future,” this council highlights the urgency of protecting the environment and ensuring a better future for all. On the Conference day, Press holds a responsibility to share important discussions, to inform the public, and encourage action through journalism. During the conference, the Press Team will cover debates, interview delegates, fact-check statements, and create media content like articles, newsletters, and social media updates. By being part of this council, delegates will learn how journalism influences global conversations and helps shape real-world decisions on sustainability.",
    },
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
              <span className="text-[#f3c623]">Our</span>
              <br className="sm:hidden" />
              <span className="text-white ml-2 sm:ml-4">Councils</span>
            </h1>
            <div className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#f3c623] to-transparent opacity-50"></div>
          </motion.div>

          {/* Councils Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 mb-12 sm:mb-16 md:mb-20">
            {councils.map((council, index) => (
              <motion.div 
                key={council.id} 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="relative group"
              >
                {/* Background Elements */}
                <div className="absolute -inset-2 sm:-inset-3 border-l-2 border-t-2 border-[#f3c623] opacity-20"></div>
                <div className="absolute -inset-2 sm:-inset-3 border-r-2 border-b-2 border-[#f3c623] opacity-20 translate-x-1 translate-y-1 sm:translate-x-2 sm:translate-y-2"></div>
                
                {/* Content */}
                <div className="relative bg-black/20 p-6 sm:p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                  {/* Image Section */}
                  <div className="relative mb-6">
                    <motion.div 
                      className="flex justify-center overflow-hidden rounded-lg"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                    >
                      <img 
                        src={council.img} 
                        alt={council.title} 
                        className="w-1/2 h-1/2 object-cover transform scale-110 group-hover:scale-100 transition-transform duration-300"
                        onError={(e) => { e.target.src = 'https://via.placeholder.com/150'; }} // Fallback image
                      />
                    </motion.div>
                  </div>

                  {/* Text Section */}
                  <div className="relative space-y-4">
                    <div className="absolute -left-2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#f3c623]/70 to-transparent opacity-80"></div>
                    <div className="pl-6">
                      <h2 className="font-horizon text-lg sm:text-xl mb-2 group-hover:text-[#f3c623] transition-colors">
                        {council.title}
                      </h2>
                      {council.theme && (
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2, duration: 0.5 }}
                          className="bg-[#f3c623]/20 p-3 rounded-lg mb-3 shadow-inner"
                        >
                          <p className="font-montserrat text-sm sm:text-base text-white/90 italic">
                            {council.theme}
                          </p>
                        </motion.div>
                      )}
                      {council.difficulty && (
                        <p className="font-montserrat text-sm sm:text-base text-white/70 mb-3">
                          Difficulty: <span className="text-[#f3c623] font-semibold">{council.difficulty}</span>
                        </p>
                      )}
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="bg-black/10 p-4 rounded-lg border-l-4 border-[#f3c623]/50 hover:bg-black/20 transition-colors duration-300"
                      >
                        <p className="font-montserrat text-sm sm:text-base text-white/80 leading-relaxed text-justify">
                          {council.description}
                        </p>
                      </motion.div>
                    </div>
                  </div>

                  {/* Corner Accents */}
                  <div className="absolute top-0 left-0 w-6 h-6 sm:w-8 sm:h-8 border-l-2 border-t-2 border-[#f3c623]"></div>
                  <div className="absolute bottom-0 right-0 w-6 h-6 sm:w-8 sm:h-8 border-r-2 border-b-2 border-[#f3c623]"></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Decoration */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 sm:mt-16 md:mt-20 flex items-center gap-4"
          >
            <div className="flex-1 h-px bg-gradient-to-r from-[#f3c623] to-transparent"></div>
            <FaUsers className="text-2xl sm:text-3xl text-[#f3c623]" />
            <div className="flex-1 h-px bg-gradient-to-l from-[#f3c623] to-transparent"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}