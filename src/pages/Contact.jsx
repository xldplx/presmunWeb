import React from 'react';
import { FaInstagram, FaLinkedin, FaEnvelope, FaLine, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

export default function Contact() {
  const contacts = [
    {
      icon: <FaLine className="text-3xl" />,
      platform: "Line",
      value: "@ghu3650+",
      link: "https://line.me/ti/p/@ghu3650+",
      color: "from-green-400 to-green-500",
      hoverColor: "group-hover:text-green-400"
    },
    {
      icon: <FaInstagram className="text-3xl" />,
      platform: "Instagram",
      value: "@presidentmodelun",
      link: "https://instagram.com/presidentmodelun",
      color: "from-pink-500 to-purple-500",
      hoverColor: "group-hover:text-pink-400"
    },
    {
      icon: <FaEnvelope className="text-3xl" />,
      platform: "Email",
      value: "secretariat.presmun@gmail.com",
      link: "mailto:secretariat.presmun@gmail.com",
      color: "from-[#f3c623] to-[#eb8317]",
      hoverColor: "group-hover:text-[#f3c623]"
    },
    {
      icon: <FaLinkedin className="text-3xl" />,
      platform: "LinkedIn",
      value: "PRESMUN",
      link: "https://linkedin.com/company/presmun",
      color: "from-blue-500 to-blue-600",
      hoverColor: "group-hover:text-blue-400"
    }
  ];

  return (
    <section className='min-h-screen py-[10rem] px-4 md:px-8'>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="font-horizon text-5xl md:text-6xl text-[#f3c623] mb-6">Get in Touch</h1>
          <p className="text-white/80 font-montserrat max-w-2xl mx-auto text-lg">
            Have questions about PresMUN? We're here to help! Connect with us through any of our platforms.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20">
          {contacts.map((contact, index) => (
            <a
              key={index}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${contact.color} rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000`}></div>
              <div className="relative p-6 bg-black/30 backdrop-blur-xl rounded-lg border border-white/10 flex items-center gap-4 hover:bg-white/5 transition-all duration-300">
                <div className={`text-white/80 transition-colors duration-300 ${contact.hoverColor}`}>
                  {contact.icon}
                </div>
                <div className="overflow-hidden">
                  <h3 className="font-horizon text-xl mb-1">{contact.platform}</h3>
                  <p className="text-white/70 font-montserrat text-sm truncate">{contact.value}</p>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Location Section */}
        <div className="bg-white/5 rounded-xl p-8 backdrop-blur-xl border border-white/10 max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <FaMapMarkerAlt className="text-3xl text-[#f3c623]" />
            <h2 className="font-horizon text-2xl">Our Location</h2>
          </div>
          <div className="space-y-4">
            <p className="text-white/80 font-montserrat">
              President University, Jababeka Education Park<br />
              Jl. Ki Hajar Dewantara, Mekarmukti<br />
              Cikarang Utara, Bekasi, Jawa Barat 17530
            </p>
            <div className="aspect-video rounded-lg overflow-hidden">
              {/* Replace with actual map or image */}
              <div className="w-full h-full bg-black/50 flex items-center justify-center">
                <span className="text-white/50">Map placeholder</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 