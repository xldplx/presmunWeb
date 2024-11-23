import React from 'react';
import Hero from '../components/sections/Hero';
import SectionTitle from '../components/ui/SectionTitle';
import { FaUsers, FaHandshake, FaQuoteLeft, FaNewspaper, FaInstagram, FaLine, FaEnvelope } from 'react-icons/fa';

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
    <div className="bg-[#000420] min-h-screen text-white">
      <div className="fixed inset-0 bg-[#000420]">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(circle at 50% 50%, transparent 0%, #000420 70%)',
          backgroundSize: '50px 50px',
          opacity: 0.3 
        }}></div>
      </div>

      <div className="relative">
        <Hero />

        {/* About Section */}
        <section className="py-32 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
              <div className="relative">
                <div className="absolute -inset-4 border-l-4 border-t-4 border-[#f3c623] opacity-50"></div>
                <img 
                  src="./alden.jpg" 
                  alt="PresMUN Event" 
                  className="w-full h-[500px] object-cover relative"
                />
              </div>
              <div className="space-y-8 flex flex-col justify-center">
                <h2 className="font-horizon text-4xl md:text-6xl leading-tight">
                  <span className="text-[#f3c623]">About</span>
                  <br />
                  <span className="text-white">PresMUN</span>
                </h2>
                <div className="space-y-6 relative">
                  <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-[#f3c623] to-transparent"></div>
                  <p className="font-montserrat text-lg text-white/90 pl-6">
                    President International Model United Nations (PRESMUN) 2025 is an event that brings together
                    young people from across Indonesia and around the world to discuss and learn about diplomacy,
                    international relations, and global issues.
                  </p>
                  <p className="font-montserrat text-lg text-white/80 pl-6">
                    Through meaningful collaboration with various delegations, the press, and the executive board, 
                    PRESMUN 2025 serves as a platform for exchanging ideas, broadening perspectives, and building 
                    solutions for a better future.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Councils Section */}
        <section className="py-32 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-horizon text-5xl md:text-6xl mb-20 text-center">
              <span className="text-white">Our</span>
              <br />
              <span className="text-[#f3c623]">Councils</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {councils.map((council) => (
                <div key={council.id} className="relative group">
                  <div className="absolute inset-0 bg-[#f3c623] opacity-5"></div>
                  <div className="relative p-12 border border-white/10">
                    <div className="absolute top-0 left-0 w-20 h-20 border-l-4 border-t-4 border-[#f3c623]"></div>
                    <div className="absolute bottom-0 right-0 w-20 h-20 border-r-4 border-b-4 border-[#f3c623]"></div>
                    <img 
                      src="./alden.jpg" 
                      alt={council.title} 
                      className="w-40 h-40 mx-auto mb-8 object-cover" 
                    />
                    <h3 className="font-horizon text-3xl text-center mb-6">{council.title}</h3>
                    <p className="text-white/70 text-center font-montserrat">{council.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="py-32 px-4 md:px-8 relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="mb-32">
              <h2 className="font-horizon text-4xl md:text-6xl text-center mb-16">
                <span className="text-[#f3c623]">Sponsored</span>
                <br />
                <span className="text-white">By</span>
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                {[1, 2, 3, 4, 5].map((index) => (
                  <div key={index} className="relative p-4">
                    <div className="absolute inset-0 border border-white/10"></div>
                    <img 
                      src="./alden.jpg" 
                      alt={`Sponsor ${index}`}
                      className="w-full aspect-square object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-horizon text-4xl md:text-6xl text-center mb-16">
                <span className="text-white">Media</span>
                <br />
                <span className="text-[#f3c623]">Partners</span>
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[1, 2, 3, 4].map((index) => (
                  <div key={index} className="relative p-4">
                    <div className="absolute inset-0 border border-white/10"></div>
                    <img 
                      src="./alden.jpg" 
                      alt={`Media Partner ${index}`}
                      className="w-full aspect-square object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-32 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-horizon text-5xl md:text-6xl text-center mb-20">
              <span className="text-[#f3c623]">What People</span>
              <br />
              <span className="text-white">Say</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="relative">
                  <div className="absolute -inset-4 border-r-4 border-b-4 border-[#f3c623] opacity-30"></div>
                  <div className="relative bg-black/30 p-8">
                    <p className="font-montserrat text-white/80 mb-8 text-lg leading-relaxed">{testimonial.quote}</p>
                    <div className="flex items-center gap-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-16 h-16"
                      />
                      <div>
                        <h4 className="font-montserrat font-semibold text-lg">{testimonial.name}</h4>
                        <p className="text-[#f3c623]">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-32 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-horizon text-5xl md:text-6xl text-center mb-16">
              <span className="text-white">Get in</span>
              <br />
              <span className="text-[#f3c623]">Touch</span>
            </h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-12">
              <a 
                href="https://instagram.com/presidentmodelun" 
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 hover:text-[#f3c623] transition-colors"
              >
                <FaInstagram className="text-2xl" />
                <span className="font-montserrat text-lg">@presidentmodelun</span>
              </a>
              <a 
                href="https://line.me/ti/p/@ghu3650+" 
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 hover:text-[#f3c623] transition-colors"
              >
                <FaLine className="text-2xl" />
                <span className="font-montserrat text-lg">@ghu3650+</span>
              </a>
              <a 
                href="mailto:secretariat.presmun@gmail.com" 
                className="group flex items-center gap-4 hover:text-[#f3c623] transition-colors"
              >
                <FaEnvelope className="text-2xl" />
                <span className="font-montserrat text-lg">secretariat.presmun@gmail.com</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}