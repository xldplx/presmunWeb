import React from 'react';
import { FaNewspaper, FaCalendarAlt, FaUser, FaChevronRight } from 'react-icons/fa';

export default function PressArticle() {
  const articles = [
    {
      title: "Opening Ceremony Marks the Beginning of PresMUN 2025",
      date: "March 15, 2025",
      author: "Press Team",
      excerpt: "The grand opening ceremony of PresMUN 2025 welcomed delegates from across the globe...",
      image: "./alden.jpg"
    },
    {
      title: "Delegates Engage in Dynamic Council Sessions",
      date: "March 16, 2025",
      author: "Press Team",
      excerpt: "Day two saw intense debates and collaborative problem-solving across all councils...",
      image: "./alden.jpg"
    },
    {
      title: "PresMUN 2025 Concludes with Awards Ceremony",
      date: "March 17, 2025",
      author: "Press Team",
      excerpt: "The closing ceremony celebrated outstanding delegates and their achievements...",
      image: "./alden.jpg"
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

      <div className="relative py-32 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-24 relative">
            <h1 className="font-horizon text-5xl md:text-6xl text-center">
              <span className="text-[#f3c623]">Press</span>
              <br />
              <span className="text-white">Articles</span>
            </h1>
            <div className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#f3c623] to-transparent opacity-50"></div>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mb-32">
            {articles.map((article, index) => (
              <div key={index} className="relative group">
                <div className="absolute -inset-4 border-l-2 border-t-2 border-[#f3c623] opacity-20"></div>
                <div className="absolute -inset-4 border-r-2 border-b-2 border-[#f3c623] opacity-20 translate-x-2 translate-y-2"></div>
                
                <div className="relative bg-black/20 overflow-hidden">
                  <div className="absolute top-0 left-0 w-12 h-12 border-l-2 border-t-2 border-[#f3c623]"></div>
                  <div className="absolute bottom-0 right-0 w-12 h-12 border-r-2 border-b-2 border-[#f3c623]"></div>
                  
                  <div className="relative">
                    <div className="absolute -inset-2 border-2 border-[#f3c623] opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="relative w-full h-48 object-cover"
                    />
                  </div>

                  <div className="p-8">
                    <h2 className="font-horizon text-2xl mb-4 group-hover:text-[#f3c623] transition-colors">
                      {article.title}
                    </h2>
                    <div className="flex items-center gap-6 text-white/60 mb-6 font-montserrat">
                      <span className="flex items-center gap-2">
                        <FaCalendarAlt /> {article.date}
                      </span>
                      <span className="flex items-center gap-2">
                        <FaUser /> {article.author}
                      </span>
                    </div>
                    <div className="relative">
                      <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-[#f3c623] to-transparent"></div>
                      <p className="text-white/70 pl-8 font-montserrat mb-6">{article.excerpt}</p>
                    </div>
                    <button className="font-horizon text-[#f3c623] hover:text-white transition-colors flex items-center gap-2 group">
                      Read More
                      <FaChevronRight className="transform group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Decoration */}
          <div className="mt-32 flex items-center gap-4">
            <div className="flex-1 h-px bg-gradient-to-r from-[#f3c623] to-transparent"></div>
            <FaNewspaper className="text-4xl text-[#f3c623]" />
            <div className="flex-1 h-px bg-gradient-to-l from-[#f3c623] to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  );
}