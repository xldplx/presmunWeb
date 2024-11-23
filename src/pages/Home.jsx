import React from 'react';
import Hero from '../components/sections/Hero';
import SectionTitle from '../components/ui/SectionTitle';
import { FaUsers, FaHandshake, FaQuoteLeft, FaNewspaper } from 'react-icons/fa';

export default function Home() {
  const councils = [
    { id: 1, title: "Council One", description: "Description for Council One" },
    { id: 2, title: "Council Two", description: "Description for Council Two" }
  ];

  const testimonials = [
    {
      name: "Alden Sayidina Radjab",
      role: "Developer",
      quote: "This is a quote. Nothing to see here.",
      image: "./alden.jpg"
    },
    {
      name: "Alden Sayidina Radjab",
      role: "Developer",
      quote: "This is a quote. Nothing to see here.",
      image: "./alden.jpg"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-[#000420] to-[#00072d] min-h-screen text-white">
      <Hero />

      {/* About Section */}
      <section className="py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="font-horizon text-3xl text-[#f3c623] mb-8">About PresMUN</h2>
              <p className="font-montserrat text-lg text-white/80 leading-relaxed">
                President International Model United Nations (PRESMUN) 2024 is an event that brings together
                young people from across Indonesia and around the world to discuss and learn about diplomacy,
                international relations, and global issues.
              </p>
              <p className="font-montserrat text-lg text-white/80 leading-relaxed">
                Through meaningful collaboration with various delegations, the press, and the executive board, 
                PRESMUN 2024 serves as a platform for exchanging ideas, broadening perspectives, and building 
                solutions for a better future.
              </p>
            </div>
            <div className="relative">
              <img 
                src="./alden.jpg" 
                alt="PresMUN Event" 
                className="rounded-lg w-full h-[400px] object-cover ring-1 ring-white/10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Councils Section */}
      <section className="py-24 px-4 md:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <SectionTitle icon={FaUsers} title="Our Councils" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {councils.map((council) => (
              <div key={council.id} className="bg-black/30 backdrop-blur-xl rounded-lg border border-white/10 p-8 hover:bg-white/5 transition-all duration-300">
                <img 
                  src="./alden.jpg" 
                  alt={council.title} 
                  className="w-32 h-32 rounded-full mx-auto mb-6 ring-2 ring-[#f3c623]" 
                />
                <h3 className="font-horizon text-2xl text-center mb-4">{council.title}</h3>
                <p className="text-white/70 text-center">{council.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Sponsors */}
          <div>
            <SectionTitle icon={FaHandshake} title="Sponsored By" />
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
              {[1, 2, 3, 4, 5].map((index) => (
                <div key={index} className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
                  <img 
                    src="./alden.jpg" 
                    alt={`Sponsor ${index}`}
                    className="w-full aspect-square object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Media Partners */}
          <div>
            <SectionTitle icon={FaNewspaper} title="Media Partners" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map((index) => (
                <div key={index} className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
                  <img 
                    src="./alden.jpg" 
                    alt={`Media Partner ${index}`}
                    className="w-full aspect-square object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 md:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <SectionTitle icon={FaQuoteLeft} title="What People Say" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-black/30 backdrop-blur-xl rounded-lg border border-white/10 p-8">
                <p className="font-montserrat text-white/80 mb-6 text-lg">{testimonial.quote}</p>
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h4 className="font-montserrat font-semibold">{testimonial.name}</h4>
                    <p className="text-[#f3c623] text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-horizon text-3xl text-[#f3c623] mb-12">Get in Touch</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <a href="https://instagram.com/presidentmodelun" className="flex items-center gap-3 hover:text-[#f3c623] transition-colors duration-300">
              <img src="./alden.jpg" alt="Instagram" className="w-8 h-8 rounded-full" />
              @presidentmodelun
            </a>
            <a href="mailto:secretariat.presmun@gmail.com" className="flex items-center gap-3 hover:text-[#f3c623] transition-colors duration-300">
              <img src="./alden.jpg" alt="Email" className="w-8 h-8 rounded-full" />
              secretariat.presmun@gmail.com
            </a>
            <a href="https://linkedin.com/company/presmun" className="flex items-center gap-3 hover:text-[#f3c623] transition-colors duration-300">
              <img src="./alden.jpg" alt="LinkedIn" className="w-8 h-8 rounded-full" />
              PRESMUN
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}