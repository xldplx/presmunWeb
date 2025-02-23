import React from 'react';
import { FaUsers } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Councils() {
  const councils = [
    {
      id: 1,
      img: "./UNEP WHITE.png",
      title: "United Nations Environment Programme (UNEP)",
      description:
        "UNEP or United Nations Environment Programme is one of the agencies under the United Nations that was established in 1972 as a result of the Stockholm Conference on the Human Environment. UNEP has the main task of coordinating international efforts in environmental protection, promoting sustainable development, and raising global awareness of environmental issues.\n\n" +
        "UNEP is more focused on various key environmental issues, including climate change, biodiversity protection, sustainable natural resource management, pollution reduction, and waste management. One of the biggest challenges that this agency focuses on is the rise in sea levels and the loss of biodiversity as a result of climate change that has occurred significantly in recent decades.\n\n" +
        "As the body leading global cooperation in the environmental field, UNEP initiates various international agreements, such as the Montreal Protocol to protect the ozone layer, and supports negotiations in the UN Climate Change Conference (COP), the Paris Agreement of 2015, which discusses limiting global warming to reduce the impact of rising sea levels. UNEP also facilitates various research and projects related to ecosystem restoration and conservation.",
    },
    {
      id: 2,
      img: "./UNDP WHITE.png",
      title: "United Nations Development Programme (UNDP)",
      description:
        "UNDP or United Nations Development Programme is one of the main bodies of the United Nations, established in 1965 with the primary goal of promoting sustainable development and eradicating poverty worldwide. As one of the United Nations agencies, UNDP focuses on community empowerment, strengthening the capacities of member countries, and achieving the Sustainable Development Goals (SDGs).\n\n" +
        "UNDP also collaborates with governments, civil society organizations, and the private sector in addressing various global challenges, including climate change, social inequality, conflict, and disaster resilience. Some of the main issues that often receive UNDP's attention are women's empowerment, reduction of socio-economic inequality, environmental management, and inclusive and resilient development.\n\n" +
        "In its journey, UNDP often refers to various international legal instruments, including the Paris Agreement which addresses climate change, supporting countries in implementing global agreements such as the 2030 Agenda for Sustainable Development. UNDP is also an important partner in international conferences that certainly involve many countries, such as the United Nations Climate Change Conferences (COP) and the World Humanitarian Summit to discuss solutions to the ongoing global challenges.",
    },
    {
      id: 3,
      img: "./IPC WHITE.png",
      title: "Press Corps",
      description:
        "The Press Corps refers to the group of journalists and media professionals accredited to cover news and events related to the United Nations (UN). The journalists have access to UN headquarters and various UN agencies to report on international affairs, diplomatic discussions, humanitarian efforts, and other global issues.\n\n" +
        "The Press Corps play a crucial role in disseminating information about UN activities to the public, contributing to transparency and understanding of international events. Journalists within the Press Corps often attend UN briefings, conferences, and official meetings to report on developments and provide news coverage from a global perspective.",
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
                <div className="relative bg-black/20 p-4 sm:p-6">
                  <div className="relative mb-4 sm:mb-6">
                    <div className="relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
                      <div className="absolute -inset-1 border-2 border-[#f3c623] opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                      <img 
                        src={council.img} 
                        alt={council.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute -left-2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#f3c623] to-transparent"></div>
                    <div className="pl-4">
                      <h2 className="font-horizon text-lg sm:text-xl mb-3 group-hover:text-[#f3c623] transition-colors">
                        {council.title}
                      </h2>
                      <p className="font-montserrat text-sm text-white/70 leading-relaxed">
                        {council.description}
                      </p>
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