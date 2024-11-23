import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaUniversity, FaUsers } from 'react-icons/fa';

export default function PUMUN() {
  const milestones = [
    {
      icon: <FaCalendarAlt />,
      title: "TEST",
      description: "This is a description. Testing the description."
    },
    {
      icon: <FaUniversity />,
      title: "TEST",
      description: "This is a description. Testing the description."
    },
    {
      icon: <FaUsers />,
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
            About PUMUN
          </motion.h1>
          <div className="prose prose-lg prose-invert max-w-none font-montserrat">
            <p className="text-white/80 text-lg leading-relaxed">
              President University Model United Nations (PUMUN) Club is a student-based organization 
              that operates under the direction of President University's International Relations Department.
            </p>
          </div>
        </div>

        {/* Milestones */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {milestones.map((item, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <div className="text-[#f3c623] text-3xl mb-4">
                {item.icon}
              </div>
              <h3 className="font-horizon text-xl mb-2">{item.title}</h3>
              <p className="text-white/70">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Timeline Section */}
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-[#f3c623] to-transparent"></div>
          <div className="space-y-16">
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="md:text-right md:pr-12">
                <h3 className="font-horizon text-2xl text-[#f3c623] mb-4">#1 TIMELINE</h3>
                <p className="text-white/80">
                  This is the timeline descrption. Will edit this later.
                </p>
              </div>
              <div className="relative md:pl-12">
                <div className="absolute -left-2 md:left-10 top-0 w-4 h-4 rounded-full bg-[#f3c623]"></div>
                <img 
                  src="./alden.jpg" 
                  alt="First Event" 
                  className="rounded-lg w-full aspect-video object-cover"
                />
              </div>
            </div>

            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="md:order-2 md:pl-12">
                <h3 className="font-horizon text-2xl text-[#f3c623] mb-4">#2 TIMELINE</h3>
                <p className="text-white/80">
                    This is the timeline descrption. Will edit this later.
                </p>
              </div>
              <div className="relative md:order-1 md:pr-12">
                <div className="absolute -right-2 md:right-10 top-0 w-4 h-4 rounded-full bg-[#f3c623]"></div>
                <img 
                  src="./alden.jpg" 
                  alt="Recognition" 
                  className="rounded-lg w-full aspect-video object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 