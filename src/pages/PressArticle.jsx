import React from 'react';
import { FaNewspaper, FaCalendarAlt, FaUser } from 'react-icons/fa';

export default function PressArticle() {
  const articles = [
    {
      title: "Opening Ceremony Marks the Beginning of PresMUN 2024",
      date: "March 15, 2024",
      author: "Press Team",
      excerpt: "The grand opening ceremony of PresMUN 2024 welcomed delegates from across the globe...",
      image: "/alden.jpg"
    },
    {
      title: "Delegates Engage in Dynamic Council Sessions",
      date: "March 16, 2024",
      author: "Press Team",
      excerpt: "Day two saw intense debates and collaborative problem-solving across all councils...",
      image: "/alden.jpg"
    },
    {
      title: "PresMUN 2024 Concludes with Awards Ceremony",
      date: "March 17, 2024",
      author: "Press Team",
      excerpt: "The closing ceremony celebrated outstanding delegates and their achievements...",
      image: "/alden.jpg"
    }
  ];

  return (
    <section className='min-h-screen py-[10rem] px-4 md:px-8'>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center gap-6 mb-16">
          <FaNewspaper className="text-4xl text-[#f3c623]" />
          <h1 className="font-horizon text-3xl md:text-4xl text-white">Press Articles</h1>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-[#f3c623] to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div key={index} className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#f3c623] to-[#eb8317] rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
              <div className="relative bg-black/30 backdrop-blur-xl rounded-lg border border-white/10 overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h2 className="font-horizon text-xl mb-3 group-hover:text-[#f3c623] transition-colors">
                    {article.title}
                  </h2>
                  <div className="flex items-center gap-4 text-sm text-white/60 mb-4">
                    <span className="flex items-center gap-2">
                      <FaCalendarAlt /> {article.date}
                    </span>
                    <span className="flex items-center gap-2">
                      <FaUser /> {article.author}
                    </span>
                  </div>
                  <p className="text-white/70 mb-4">{article.excerpt}</p>
                  <button className="text-[#f3c623] hover:text-[#eb8317] transition-colors">
                    Read More →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 