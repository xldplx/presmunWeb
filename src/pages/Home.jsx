import React from 'react';
import Hero from '../components/sections/Hero';
import SectionTitle from '../components/ui/SectionTitle';
import { FaUsers, FaHandshake, FaQuoteLeft, FaNewspaper, FaInstagram, FaLine, FaEnvelope } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { motion } from 'framer-motion';

export default function Home() {
  const councils = [
    {
      id: 1,
      img: "./UNEP WHITE.png",
      title: "United Nations Environment Programme (UNEP)",
      description:
        "The United Nations Environment Programme (UNEP) is the leading global authority on environmental issues, dedicated to combating climate change, protecting biodiversity, and promoting sustainability. Established in 1972, UNEP works to address rising sea levels and biodiversity loss by advocating for emissions reduction, ecosystem conservation, and climate resilience. Through international cooperation and policy development, UNEP encourages global action, particularly from major emitters, to secure a sustainable and climate-resilient future.",
    },
    {
      id: 2,
      img: "./UNDP WHITE.png",
      title: "United Nations Development Programme (UNDP)",
      description:
        "The United Nations Development programme is a body within the UN agency which centers itself on international development of society through having dedications in eradicating poverty, promoting sustainable development and strengthening democratic governance. Over 170 countries worldwide are a part of this body, assisting and funding initiatives within the frame of Sustainable Development Goals (SDGs). UNDP focuses on addressing climate challenges, preventing crises, building resilience and creating an environment of social equity via international cooperations.",
    },
    {
      id: 3,
      img: "./IPC WHITE.png",
      title: "Press Corps",
      description:
        "The Press Council at President University Model United Nations 2025 plays an important role in spreading awareness about sustainability and climate action. Under the grand theme “Answer the Nature’s Call: Advancing Sustainability for a Climate-Secure Future,” this council highlights the urgency of protecting the environment and ensuring a better future for all. On the Conference day, Press holds a responsibility to share important discussions, to inform the public, and encourage action through journalism. During the conference, the Press Team will cover debates, interview delegates, fact-check statements, and create media content like articles, newsletters, and social media updates. By being part of this council, delegates will learn how journalism influences global conversations and helps shape real-world decisions on sustainability.",
    },
  ];

  const testimonials = [
    {
      name: "Jose",
      role: "Co-Chair UNHCR PresMUN 2024",
      quote: "PresMUN 2024, in my opinion, was amazing! It recently overcame a crisis, and the direction became much clearer afterward. Overall, the timeline, committees, and substance were really well-executed. Plus, it was my very first time chairing a varsity MUN! I really wish it could have been held offline to make the discussions more engaging in person. Hopefully, that can happen in PUMUN 2025!",
      image: "./alden.jpg"
    },
    {
      name: "Delegates of Israel",
      role: "UNICEF Council",
      quote: "I would rate PresMUN 2024 an 8 out of 10. The event was truly impactful, and I deeply appreciate the efforts of the organizing team. I can't wait to participate as a delegate again next year!",
      image: "./alden.jpg"
    },
    {
      name: "Delegates of UK",
      role: "UNICEF Council",
      quote: "Personally, I am very satisfied with my experience at PresMUN 2024. Everything was well-organized and impactful. A huge thank you to the Chairs and Secretariat for their hard work!",
      image: "./alden.jpg"
    },
    {
      name: "Delegates of WHO Council",
      role: "UNICEF Council",
      quote: "I will give 10/10. I’m very satisfied also because of my own council. It’s like everyone worked properly, and not just one person who tried to push their agenda and ignored everyone. I think that everyone really tried to include all opinions. And I’m really grateful because I actually got to make friends with new people, especially those who have numerous awards in MUNs, and I think that’s going to help me greatly in my future journey. Of course I’m going to rejoin again. I hope that I do get a council that’s as positive as this one",
      image: "./alden.jpg"
    },
    {
      name: "Delegate of Democratic Republic of Congo",
      role: "UNHCR Council",
      quote: "Actually I was very satisfied, the social night was fun and they had a lot of fun. Rate 9,5/10. Actually PRESMUN is competitive and fun, they hope next year it will be conducted offline, but even though online they would reconsider to join also",
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
        <section className="py-12 sm:py-16 md:py-20 px-3 sm:px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
              <div className="relative flex items-center justify-center">
                <div className="absolute -inset-3 sm:-inset-4 md:-inset-6 border-l-2 border-t-2 sm:border-l-3 sm:border-t-3 border-[#f3c623] opacity-20"></div>
                <img 
                  src="./PRESMUN WHITE.png" 
                  alt="PresMUN Event" 
                  className="w-full max-w-md h-auto object-contain relative"
                />
              </div>

              <div className="flex flex-col justify-center">
              <SectionTitle
                subtitle="About"
                title="What is PRESMUN 2025?"
                alignment="left"
                className="mb-6 sm:mb-8"
              />
              <p className="text-sm sm:text-base text-white/70 leading-relaxed mb-4 text-justify">
                President International Model United Nations (PRESMUN) 2025 is an event that brings together young people from across Indonesia and around the world to discuss and learn about diplomacy, international relations, and global issues. Through the meaningful collaboration, with various delegations, the press, and the executive board, PRESMUN 2025 serves as a platform for exchanging ideas, broadening perspectives, and building solutions for a better future.
              </p>
            </div>
            </div>
          </div>
        </section>

        {/* Councils Preview */}
        <section className="py-12 sm:py-16 md:py-20 px-3 sm:px-4 md:px-6 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <SectionTitle
              subtitle="Our"
              title="Councils"
              alignment="center"
              className="mb-12 sm:mb-16"
            />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
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
                      <div className="flex justify-center relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
                        <div className="absolute -inset-1 border-2 border-[#f3c623] opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                        <img 
                          src={council.img} 
                          alt={council.title} 
                          className="w-1/2 h-1/2 object-cover transform scale-125 group-hover:scale-100 transition-transform duration-500"
                        />
                      </div>
                    </div>
                    
                    <div className="relative">
                      <div className="absolute -left-2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#f3c623] to-transparent"></div>
                      <div className="pl-4">
                        <h2 className="font-horizon text-lg sm:text-xl mb-3 group-hover:text-[#f3c623] transition-colors">
                          {council.title}
                        </h2>
                        <p className="font-montserrat text-sm text-white/70 leading-relaxed text-justify">
                          {council.description}
                        </p>
                      </div>
                    </div>

                    {/* Corner Accents */}
                    <div className="absolute top-0 left-0 w-8 h-8 sm:w-10 sm:h-10 border-l-2 border-t-2 border-[#f3c623]"></div>
                    <div className="absolute bottom-0 right-0 w-8 h-8 sm:w-10 sm:h-10 border-r-2 border-b-2 border-[#f3c623]"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-12 sm:py-16 md:py-20 px-3 sm:px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <SectionTitle
              subtitle=""
              title="What They Say"
              alignment="center"
              className="mb-12 sm:mb-16"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="group relative h-[400px]"
                >
                  {/* Background with gradient border effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#f3c623] to-[#f3c623]/0 opacity-20 rounded-lg"></div>
                  
                  {/* Content */}
                  <div className="relative bg-black/40 backdrop-blur-sm p-6 sm:p-8 rounded-lg border border-[#f3c623]/10 h-full flex flex-col">
                    <div className="flex items-center gap-4 mb-6">
                      {/* Profile Picture Section (removed image and gradient border) */}
                      <div className="shrink-0">
                        {/* Placeholder or space where image was */}
                      </div>
                      <div>
                        <motion.h3 
                          className="font-horizon text-base text-[#f3c623] group-hover:text-white transition-colors"
                        >
                          {testimonial.name}
                        </motion.h3>
                        <p className="text-sm text-white/70">{testimonial.role}</p>
                      </div>
                    </div>
                    
                    <div className="relative flex-1 flex flex-col">
                      <motion.div
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.1 }}
                        className="absolute -left-2 -top-2"
                      >
                        <FaQuoteLeft className="text-[#f3c623] text-xl opacity-50" />
                      </motion.div>
                      <p className="text-sm text-white/70 leading-relaxed pl-6 flex-1 text-justify">
                        {testimonial.quote}
                      </p>
                    </div>
                    
                    {/* Decorative corner elements */}
                    <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-[#f3c623] rounded-tl-lg opacity-50 group-hover:w-12 group-hover:h-12 transition-all"></div>
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-[#f3c623] rounded-br-lg opacity-50 group-hover:w-12 group-hover:h-12 transition-all"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Sponsored By */}
        <section className="py-12 sm:py-16 md:py-20 px-3 sm:px-4 md:px-6 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <SectionTitle
              subtitle=""
              title="Sponsored By"
              alignment="center"
              className="mb-12 sm:mb-16"
            />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 md:gap-16">
              {/* {[1, 2, 3, 4].map((sponsor) => (
                <div key={sponsor} className="relative">
                  <div className="absolute -inset-3 sm:-inset-4 md:-inset-6 border-l-2 border-t-2 sm:border-l-3 sm:border-t-3 border-[#f3c623] opacity-20"></div>
                  <div className="absolute -inset-3 sm:-inset-4 md:-inset-6 border-r-2 border-b-2 sm:border-r-3 sm:border-b-3 border-[#f3c623] opacity-20 translate-x-2 translate-y-2 sm:translate-x-3 sm:translate-y-3"></div>
                  
                  <div className="relative bg-black/20 p-4 sm:p-6 md:p-8 flex items-center justify-center">
                    <img 
                      src="./kaneki.jpg"
                      alt={`Sponsor ${sponsor}`}
                      className="w-full h-[120px] sm:h-[140px] md:h-[160px] object-contain"
                    />
                    
                    {/* Corner Accents */}
                    {/* <div className="absolute top-0 left-0 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 border-l-2 border-t-2 sm:border-l-3 sm:border-t-3 border-[#f3c623]"></div>
                    <div className="absolute bottom-0 right-0 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 border-r-2 border-b-2 sm:border-r-3 sm:border-b-3 border-[#f3c623]"></div>
                  </div>
                </div>
              ))} */}
              
              {/* Coming Soon */}
              <div className="col-span-2 md:col-span-4 text-center">
                <p className="text-lg sm:text-xl md:text-2xl text-[#f3c623] font-horizon mb-2">Coming soon!</p>
                <p className="text-sm sm:text-base text-white/70 font-montserrat">
                  Want to see your logo featured on our website? Contact us now!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Media Partners */}
        <section className="py-12 sm:py-16 md:py-20 px-3 sm:px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <SectionTitle
              subtitle=""
              title="Media Partners"
              alignment="center"
              className="mb-12 sm:mb-16"
            />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 md:gap-16">
              {/* {[1, 2, 3, 4].map((partner) => (
                <div key={partner} className="relative">
                  <div className="absolute -inset-3 sm:-inset-4 md:-inset-6 border-l-2 border-t-2 sm:border-l-3 sm:border-t-3 border-[#f3c623] opacity-20"></div>
                  <div className="absolute -inset-3 sm:-inset-4 md:-inset-6 border-r-2 border-b-2 sm:border-r-3 sm:border-b-3 border-[#f3c623] opacity-20 translate-x-2 translate-y-2 sm:translate-x-3 sm:translate-y-3"></div>
                  
                  <div className="relative bg-black/20 p-4 sm:p-6 md:p-8 flex items-center justify-center">
                    <img 
                      src="./kaneki.jpg"
                      alt={`Partner ${partner}`}
                      className="w-full h-[120px] sm:h-[140px] md:h-[160px] object-contain"
                    />
                    
                    {/* Corner Accents */}
                    {/* <div className="absolute top-0 left-0 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 border-l-2 border-t-2 sm:border-l-3 sm:border-t-3 border-[#f3c623]"></div>
                    <div className="absolute bottom-0 right-0 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 border-r-2 border-b-2 sm:border-r-3 sm:border-b-3 border-[#f3c623]"></div>
                  </div>
                </div>
              ))} */}
              
              {/* Coming Soon */}
              <div className="col-span-2 md:col-span-4 text-center">
                <p className="text-lg sm:text-xl md:text-2xl text-[#f3c623] font-horizon mb-2">Coming soon!</p>
                <p className="text-sm sm:text-base text-white/70 font-montserrat">
                  Want to see your logo featured on our website? Contact us now!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="py-12 sm:py-16 md:py-20 px-3 sm:px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <SectionTitle
              subtitle="Get in"
              title="Touch"
              alignment="center"
              className="mb-12 sm:mb-16"
            />
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-12 max-w-3xl mx-auto">
              <a href="https://instagram.com/presidentmodelun" className="flex flex-col items-center gap-4 group">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#f3c623]/10 flex items-center justify-center group-hover:bg-[#f3c623]/20 transition-colors">
                  <FaInstagram className="text-[#f3c623] text-2xl sm:text-3xl" />
                </div>
                <span className="text-sm sm:text-base text-white/70">Instagram</span>
              </a>
              <a href="https://line.me/ti/p/@ghu3650+" className="flex flex-col items-center gap-4 group">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#f3c623]/10 flex items-center justify-center group-hover:bg-[#f3c623]/20 transition-colors">
                  <FaLine className="text-[#f3c623] text-2xl sm:text-3xl" />
                </div>
                <span className="text-sm sm:text-base text-white/70">Line</span>
              </a>
              <a href="mailto:secretariatpresmun.official@gmail.com" className="flex flex-col items-center gap-4 group col-span-2 sm:col-span-1">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#f3c623]/10 flex items-center justify-center group-hover:bg-[#f3c623]/20 transition-colors">
                  <FaEnvelope className="text-[#f3c623] text-2xl sm:text-3xl" />
                </div>
                <span className="text-sm sm:text-base text-white/70">Email</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}