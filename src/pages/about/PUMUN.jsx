import React, { useRef, useEffect, useState } from 'react';
import { FaCalendarAlt, FaUniversity, FaUsers, FaChevronRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

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

  const description = "President University Model United Nations (PUMUN) Club is a student-based organization that operates under the direction of President University’s International Relations Department, which was founded on June, 24th 2011. After the organization became legal, PUMUN Club held the first official event which is the Short Diplomatic Course and it was legalized among clubs at another university. PUMUN Club began to be seen as the exclusive club that fully supported the interests of International Relations students by stimulating various events around MUN due to its great focus on the global agendas. It gives proof that the involvement and active participation of its members over the years has given the best on behalf of President University with attracting more partners from various universities, while attracting more internal members from various majors. PUMUN Club has seen significant advances in terms of work programs and events in each division as a result of its growth. PUMUN Club has submitted this proposal as a work program from the Internal Agency Division to foster a sense of belonging among the members";

  // Pisahkan teks menjadi dua paragraf
  const sentences = description.split('. ');
  const paragraph1 = sentences.slice(0, 3).join('. ') + '.'; // Paragraf pertama: 3 kalimat pertama
  const paragraph2 = sentences.slice(3).join('. ') + '.'; // Paragraf kedua: mulai dari "It gives proof..."

  // State untuk membagi teks di samping dan di bawah logo
  const [textBesideLogo, setTextBesideLogo] = useState("");
  const [textBelowLogo, setTextBelowLogo] = useState("");
  const [isLogoLoaded, setIsLogoLoaded] = useState(false);
  const textRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    const splitTextBasedOnHeight = () => {
      if (isLogoLoaded && logoRef.current && textRef.current) {
        requestAnimationFrame(() => {
          const logoHeight = logoRef.current.offsetHeight;
          const textElement = textRef.current;

          // Set tinggi maksimum teks di samping logo dengan toleransi kecil
          textElement.style.maxHeight = `${logoHeight - 10}px`; // Toleransi 10px untuk mencegah overflow
          textElement.style.overflow = 'hidden';

          // Bagi teks berdasarkan kalimat
          const sentences = description.split('. ');
          let besideText = '';
          let belowText = '';

          textElement.textContent = ''; // Reset teks untuk perhitungan

          for (let i = 0; i < sentences.length; i++) {
            const testText = besideText + (besideText ? '. ' : '') + sentences[i];
            textElement.textContent = testText;

            if (textElement.scrollHeight > logoHeight && i > 0) {
              belowText = sentences.slice(i).join('. ') + (sentences[sentences.length - 1] ? '.' : '');
              besideText = sentences.slice(0, i).join('. ') + '.';
              break;
            } else {
              besideText = testText + (i < sentences.length - 1 ? '.' : '');
            }
          }

          // Pastikan setidaknya ada satu kalimat di textBesideLogo
          if (!besideText) {
            besideText = sentences[0] + '.'; // Ambil kalimat pertama
            belowText = sentences.slice(1).join('. ') + (sentences[sentences.length - 1] ? '.' : '');
          }

          setTextBesideLogo(besideText.trim());
          setTextBelowLogo(belowText.trim());
        });
      }
    };

    splitTextBasedOnHeight();
    window.addEventListener('resize', splitTextBasedOnHeight);
    return () => window.removeEventListener('resize', splitTextBasedOnHeight);
  }, [isLogoLoaded]);

  // Mengatur posisi scroll ke atas saat komponen dimuat
  useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
      if (window.location.hash) {
        window.history.replaceState(null, null, window.location.pathname);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

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
              <span className="text-white ml-2 sm:ml-4">PUMUN</span>
            </h1>
            <div className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#f3c623] to-transparent opacity-50"></div>
          </motion.div>

          {/* Introduction */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-4xl mx-auto mb-12 sm:mb-16 md:mb-20"
          >
            <div className="flex flex-col">
              <div className="flex flex-col md:flex-row items-start">
                {/* Logo */}
                <div className="flex justify-start mb-4 md:mb-0 md:mr-6">
                  <img 
                    ref={logoRef}
                    src="./Logo PUMUN.png" 
                    alt="PUMUN Logo" 
                    className="w-64 sm:w-72 md:w-80 h-auto object-contain"
                    onLoad={() => setIsLogoLoaded(true)} // Set state saat logo dimuat
                  />
                </div>

                {/* Description (Bagian yang sejajar dengan logo) */}
                <div className="flex-1">
                  <div className="relative">
                    <div className="absolute -left-2 sm:-left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-[#f3c623] to-transparent"></div>
                    <p 
                      ref={textRef}
                      className="text-white/80 text-base sm:text-lg leading-relaxed pl-4 sm:pl-8 font-montserrat text-justify"
                    >
                      {paragraph1}
                    </p>
                  </div>
                </div>
              </div>

              {/* Description (Bagian yang melewati bawah logo) */}
              <div className="mt-4">
                <div className="relative">
                  <div className="absolute -left-2 sm:-left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-[#f3c623] to-transparent"></div>
                  <p className="text-white/80 text-base sm:text-lg leading-relaxed pl-4 sm:pl-8 font-montserrat text-justify">
                    {paragraph2}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Milestones */}
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mb-12 sm:mb-16 md:mb-20">
            {milestones.map((item, index) => (
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

          {/* Timeline */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="relative max-w-5xl mx-auto"
          >
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#f3c623] via-[#f3c623] to-transparent"></div>
            
            <div className="space-y-12 sm:space-y-24">
              {/* Timeline Item 1 */}
              {/* <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="relative grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-12"
              >
                <div className="sm:text-right sm:pr-12">
                  <div className="relative">
                    <div className="absolute -inset-2 border-l-2 border-t-2 border-[#f3c623] opacity-20"></div>
                    <div className="absolute -inset-2 border-r-2 border-b-2 border-[#f3c623] opacity-20 translate-x-1 translate-y-1"></div>
                    <div className="relative p-4 sm:p-6 bg-black/20">
                      <h3 className="font-horizon text-xl sm:text-2xl mb-3">#1 TIMELINE</h3>
                      <p className="text-white/80 font-montserrat text-sm">
                        This is the timeline description. Will edit this later.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative pl-8 sm:pl-12">
                  <div className="absolute left-4 sm:left-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-[#f3c623] rotate-45"></div>
                  <div className="relative">
                    <div className="absolute -inset-2 border-l-2 border-t-2 border-[#f3c623] opacity-20"></div>
                    <div className="absolute -inset-2 border-r-2 border-b-2 border-[#f3c623] opacity-20 translate-x-1 translate-y-1"></div>
                    <div className="relative p-4 sm:p-6 bg-black/20">
                      <p className="text-white/80 font-montserrat text-sm">
                        Additional information about this timeline event goes here.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div> */}

              {/* Timeline Item 2 */}
              {/* <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="relative grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-12"
              >
                <div className="sm:text-right sm:pr-12 sm:order-2">
                  <div className="relative">
                    <div className="absolute -inset-2 border-l-2 border-t-2 border-[#f3c623] opacity-20"></div>
                    <div className="absolute -inset-2 border-r-2 border-b-2 border-[#f3c623] opacity-20 translate-x-1 translate-y-1"></div>
                    <div className="relative p-4 sm:p-6 bg-black/20">
                      <p className="text-white/80 font-montserrat text-sm">
                        Additional information about this timeline event goes here.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative pl-8 sm:pl-12 sm:order-1">
                  <div className="absolute left-4 sm:right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-[#f3c623] rotate-45"></div>
                  <div className="relative">
                    <div className="absolute -inset-2 border-l-2 border-t-2 border-[#f3c623] opacity-20"></div>
                    <div className="absolute -inset-2 border-r-2 border-b-2 border-[#f3c623] opacity-20 translate-x-1 translate-y-1"></div>
                    <div className="relative p-4 sm:p-6 bg-black/20">
                      <h3 className="font-horizon text-xl sm:text-2xl mb-3">#2 TIMELINE</h3>
                      <p className="text-white/80 font-montserrat text-sm">
                        This is the timeline description. Will edit this later.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div> */}
            </div>
          </motion.div>

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