import React from 'react';
import { motion } from 'framer-motion';
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
    <section className='min-h-screen py-[10rem] px-4 md:px-8'>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Hero Section */}
        <div className="mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-horizon text-4xl md:text-5xl text-[#f3c623] mb-8"
          >
            About PresMUN
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="prose prose-lg prose-invert max-w-none font-montserrat"
          >
            <p className="text-white/80 text-lg leading-relaxed">
              President International Model United Nations (PRESMUN) 2024 is the annual MUN Conference 
              held by President University Model United Nations (PUMUN). This marks our twelfth season 
              and our first offline event, following five consecutive years online due to COVID-19.
            </p>
          </motion.div>
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10"
            >
              <div className="text-[#f3c623] text-3xl mb-4">
                {item.icon}
              </div>
              <h3 className="font-horizon text-xl mb-2">{item.title}</h3>
              <p className="text-white/70">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* History Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#f3c623] to-[#eb8317] rounded-lg blur opacity-25"></div>
            <img 
              src="./alden.jpg" 
              alt="PresMUN History" 
              className="relative rounded-lg w-full object-cover aspect-video"
            />
          </div>
          <div className="space-y-6">
            <h2 className="font-horizon text-2xl text-[#f3c623]">Our Legacy</h2>
            <p className="text-white/80 leading-relaxed">
              PRESMUN has achieved a certain reputation and is often deemed as one of the most 
              prestigious MUN Conferences in Indonesia despite its young age. We aim to expand our 
              scope to the international community, serving as a platform for young thinkers worldwide 
              to exchange ideas and shape a better future.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 