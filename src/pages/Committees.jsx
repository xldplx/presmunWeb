import React from 'react';
import { FaUsers } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCards, A11y } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';

const PhotoFrame = ({ image, name, role }) => {
  return (
    <div className="relative">
      {/* Main Photo Container */}
      <div className="relative w-[200px] h-[300px] sm:w-[220px] sm:h-[320px] bg-[#000420]">
        {/* Inner gold corners - only top-left and bottom-right */}
        <div className="absolute top-0 left-0 w-8 sm:w-10 h-8 sm:h-10">
          <div className="absolute top-0 left-0 w-full h-[2px] bg-[#f3c623]"></div>
          <div className="absolute top-0 left-0 w-[2px] h-full bg-[#f3c623]"></div>
        </div>
        <div className="absolute bottom-0 right-0 w-8 sm:w-10 h-8 sm:h-10">
          <div className="absolute bottom-0 right-0 w-full h-[2px] bg-[#f3c623]"></div>
          <div className="absolute bottom-0 right-0 w-[2px] h-full bg-[#f3c623]"></div>
        </div>
        
        <img 
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
        {/* Info Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent">
          <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 text-center">
            <div className="bg-[#f3c623] text-white text-xs sm:text-sm font-medium px-2 py-0.5 rounded-full inline-block mb-1">
              {role}
            </div>
            <h4 className="text-white text-sm sm:text-base font-medium truncate px-2">
              {name}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

const DepartmentCard = ({ dept }) => {
  const allMembers = [
    { ...dept.usg, role: 'USG' },
    ...(dept.ausg?.name ? [{ ...dept.ausg, role: 'AUSG' }] : []),
    ...dept.members.map(member => ({ ...member, role: 'Member' }))
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      {/* Background Elements */}
      <div className="absolute -inset-2 sm:-inset-3 border-l-2 border-t-2 border-[#f3c623]/20"></div>
      <div className="absolute -inset-2 sm:-inset-3 border-r-2 border-b-2 border-[#f3c623]/20 translate-x-1 translate-y-1 sm:translate-x-2 sm:translate-y-2"></div>
      <div className="absolute -inset-3 sm:-inset-4 border-l-2 border-t-2 border-[#f3c623]/10"></div>
      <div className="absolute -inset-3 sm:-inset-4 border-r-2 border-b-2 border-[#f3c623]/10 translate-x-2 translate-y-2 sm:translate-x-3 sm:translate-y-3"></div>
      <div className="absolute -inset-4 sm:-inset-5 border-l-2 border-t-2 border-[#f3c623]/5"></div>
      <div className="absolute -inset-4 sm:-inset-5 border-r-2 border-b-2 border-[#f3c623]/5 translate-x-3 translate-y-3 sm:translate-x-4 sm:translate-y-4"></div>
      
      {/* Content */}
      <div className="relative bg-black/20 p-4 sm:p-6 md:p-8">
        {/* Department Header */}
        <div className="relative mb-6 sm:mb-8">
          <h3 className="font-horizon text-xl sm:text-2xl text-[#f3c623] tracking-wider uppercase text-center">{dept.title}</h3>
        </div>

        {/* Team Slider */}
        <Swiper
          modules={[Navigation, Pagination, EffectCards, A11y]}
          effect="cards"
          grabCursor={true}
          navigation={true}
          pagination={{
            clickable: true,
            dynamicBullets: true
          }}
          cardsEffect={{
            perSlideOffset: 8,
            perSlideRotate: 2,
            rotate: true,
            slideShadows: false
          }}
          className="team-swiper !px-0 !py-4"
        >
          {allMembers.map((member, idx) => (
            <SwiperSlide key={idx}>
              <div className="flex items-center justify-center">
                <PhotoFrame 
                  image={member.image} 
                  name={member.name}
                  role={member.role}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Corner Accents */}
        <div className="absolute top-0 left-0 w-8 h-8 sm:w-10 sm:h-10 border-l-2 border-t-2 border-[#f3c623]"></div>
        <div className="absolute bottom-0 right-0 w-8 h-8 sm:w-10 sm:h-10 border-r-2 border-b-2 border-[#f3c623]"></div>
      </div>
    </motion.div>
  );
};

const committees = {
  secretaryGenerals: [
    {
      name: "Aqila Erganisah Chairudin",
      role: "Secretary General I",
      image: "./alden.jpg"
    },
    {
      name: "Yoela Zelda Zebua",
      role: "Secretary General II",
      image: "./alden.jpg"
    }
  ],
  departments: [
    {
      title: "Administration and Legality",
      usg: { name: "Ghaitza Diamanta", image: "./alden.jpg" },
      ausg: { name: "Rossi Amalia", image: "./alden.jpg" },
      members: [
        { name: "Zhafran Shahzada", image: "./alden.jpg" },
        { name: "Emeralda Maurenzia", image: "./alden.jpg" },
        { name: "Gina Keris Anastasia Ewi", image: "./alden.jpg" },
        { name: "Mawlida Rizka Kamila", image: "./alden.jpg" }
      ]
    },
    {
      title: "Finance",
      usg: { name: "Gabriella Rindang Dewi Arimbi", image: "./alden.jpg" },
      ausg: { name: "Grandiessa", image: "./alden.jpg" },
      members: [
        { name: "Eileen Daneaya", image: "./alden.jpg" },
        { name: "Eky Joana Alayda Ismaya", image: "./alden.jpg" },
        { name: "Ineza Sativa Batara", image: "./alden.jpg" },
        { name: "Raymond", image: "./alden.jpg" },
        { name: "Valerion Theodore Chandratama", image: "./alden.jpg" },
        { name: "Zaskiatul Ulya", image: "./alden.jpg" }
      ]
    },
    {
      title: "Substance",
      usg: { name: "Brain Raska Sembiring", image: "./alden.jpg" },
      ausg: { name: "Vanessa Manuela Patty", image: "./alden.jpg" },
      members: [
        { name: "Arrum Kania Faizah Az-Zahra", image: "./alden.jpg" },
        { name: "Faiz Orlando Amryanto Pidani", image: "./alden.jpg" },
        { name: "Rafi Dwiputra Daniswara", image: "./alden.jpg" },
        { name: "Fasha Yoga Prasetya", image: "./alden.jpg" },
        { name: "Zanaya Mauranisa", image: "./alden.jpg" },
        { name: "Olivia Victoria Thenu", image: "./alden.jpg" },
        { name: "Vima Syaddad Alfathan", image: "./alden.jpg" },
        { name: "Jedda Muncar RR", image: "./alden.jpg" },
        { name: "Daffa Dwika Fadiya Hidayat", image: "./alden.jpg" }
      ]
    },
    {
      title: "Conference",
      usg: { name: "Salwa Nurunnadia Laoh", image: "./alden.jpg" },
      ausg: { name: "Bella Adilla", image: "./alden.jpg" },
      members: [
        { name: "Chandra Aden Akbar Pamungkas", image: "./alden.jpg" },
        { name: "Haura Zauziha Az-Zahra", image: "./alden.jpg" },
        { name: "Muhammad Khairatul", image: "./alden.jpg" },
        { name: "Athira Zahra", image: "./alden.jpg" },
        { name: "Ranya Kayla Bilqisthi", image: "./alden.jpg" },
        { name: "Pandu Anurullah", image: "./alden.jpg" },
        { name: "Avelife Maria Easter Saroinsong", image: "./alden.jpg" },
        { name: "Farica Adnan Ramadhani", image: "./alden.jpg" },
        { name: "Sherly Natania Hadi", image: "./alden.jpg" },
        { name: "Rizky Aulia Putri", image: "./alden.jpg" },
        { name: "Muhammad Raffi Ramdhan", image: "./alden.jpg" },
        { name: "Gio Algifari", image: "./alden.jpg" },
        { name: "Zaidan Mahfudz Azzam Saidi", image: "./alden.jpg" },
        { name: "Cut Putri Alya Vanissa", image: "./alden.jpg" },
        { name: "Nadia Aulia Azzera", image: "./alden.jpg" },
        { name: "Muflyhah Wilda Az-Zahra", image: "./alden.jpg" },
        { name: "Meutia Putri Sayzaman", image: "./alden.jpg" },
        { name: "Delia Sari", image: "./alden.jpg" },
        { name: "Elisa Maisarah", image: "./alden.jpg" }
      ]
    },
    {
      title: "Internal Affairs",
      usg: { name: "Mutiara Anindya Abidin", image: "./alden.jpg" },
      ausg: { name: "Maureene Aqilla Ferdian", image: "./alden.jpg" },
      members: [
        { name: "Alfendo Rahmadani Aryo Prakoso", image: "./alden.jpg" },
        { name: "Annisa Nur Rahmi", image: "./alden.jpg" },
        { name: "Aqela Firyal Zahira", image: "./alden.jpg" },
        { name: "Claudia Meta Tasya Cikita", image: "./alden.jpg" },
        { name: "Fathya Rizky Rania Mandai", image: "./alden.jpg" },
        { name: "Hazel Jocelyn Tiurma Riva Sitorus", image: "./alden.jpg" },
        { name: "Nadia Adelia Nasution", image: "./alden.jpg" },
        { name: "Rachel Elisabeth", image: "./alden.jpg" },
        { name: "Raisya Herlia Putranto", image: "./alden.jpg" },
        { name: "Roxy Talitha Athallah", image: "./alden.jpg" },
        { name: "Teressa Harimurti", image: "./alden.jpg" }
      ]
    },
    {
      title: "External Affairs",
      usg: { name: "Nadine Chandrawinata Wenas", image: "./alden.jpg" },
      ausg: { name: "Aulia Dwi", image: "./alden.jpg" },
      members: [
        { name: "Akna Khoirun Nisa", image: "./alden.jpg" },
        { name: "Nur Azizah Iqrimah Siregar", image: "./alden.jpg" },
        { name: "Nagita Alifia Kusuma Salsabilla", image: "./alden.jpg" },
        { name: "Ramya Syazwina Zulcham", image: "./alden.jpg" },
        { name: "Fikri Aji", image: "./alden.jpg" },
        { name: "Eleonora Joycelyne", image: "./alden.jpg" },
        { name: "Thomas William P", image: "./alden.jpg" },
        { name: "Dyna Syarifa", image: "./alden.jpg" },
        { name: "Jihan Hamdalah", image: "./alden.jpg" }
      ]
    },
    {
      title: "Multimedia, Design, and Documentation (MTDD)",
      usg: { name: "Mifta Farid Masyuchrin", image: "./alden.jpg" },
      ausg: { name: "Siti Najmatul Mu'izzah Masruchin", image: "./alden.jpg" },
      members: [
        { name: "Jemima Grace Marcella Paserang", image: "./alden.jpg" },
        { name: "Sadrina Azzahra Alhabsyi", image: "./alden.jpg" },
        { name: "Nyayu Nur Amalia Yahya", image: "./alden.jpg" },
        { name: "Zefanya Febe Putranti", image: "./alden.jpg" },
        { name: "Taqya Aulia Herdiyana", image: "./alden.jpg" },
        { name: "Anvil Salsabila", image: "./alden.jpg" },
        { name: "Putri Amaliah Miftahuljannah", image: "./alden.jpg" },
        { name: "Farhan", image: "./alden.jpg" },
        { name: "Antonius Bagus Prasetio", image: "./alden.jpg" }
      ]
    },
    {
      title: "Data Master",
      usg: { name: "Shakiva Naswa Crescensia", image: "./alden.jpg" },
      ausg: { name: "Muhammad Yusuf Firizki", image: "./alden.jpg" },
      members: [
        { name: "Alden Sayidina Radjab", image: "./alden.jpg" },
        { name: "Samuel Jagar Adoman Manalu", image: "./alden.jpg" }
      ]
    },
    {
      title: "Marketing",
      usg: { name: "Beby Joya", image: "./alden.jpg" },
      ausg: { name: "Akifah Nur Fadhillah", image: "./alden.jpg" },
      members: [
        { name: "Bestari Ashhabal Jannati", image: "./alden.jpg" },
        { name: "Dellinda Christiani Karongkong", image: "./alden.jpg" },
        { name: "Nailah Azmi", image: "./alden.jpg" },
        { name: "Katrina", image: "./alden.jpg" },
        { name: "Nasyeila Nayla", image: "./alden.jpg" },
        { name: "Aurellia Hillary", image: "./alden.jpg" },
        { name: "Lulu Juwita", image: "./alden.jpg" }
      ]
    },
    {
      title: "Entrepreneurship",
      usg: { name: "Alfeiza Ghenaya Rizqi", image: "./alden.jpg" },
      ausg: { name: "Ardel Davin", image: "./alden.jpg" },
      members: [
        { name: "Khairun Najwa Ambrollah", image: "./alden.jpg" },
        { name: "Zahwa Rindu Setianka", image: "./alden.jpg" },
        { name: "Firdha Natasya", image: "./alden.jpg" },
        { name: "Yobel Felixio Sempurna", image: "./alden.jpg" },
        { name: "M. Farhan", image: "./alden.jpg" },
        { name: "Azura Balqissyah Zahra", image: "./alden.jpg" },
        { name: "Arjuando Tampubolon", image: "./alden.jpg" }
      ]
    },
    {
      title: "Food and Beverage",
      usg: { name: "Jelita Nazhifah", image: "./alden.jpg" },
      ausg: { name: "", image: "" },
      members: [
        { name: "Jelita Rotua Sitanggang", image: "./alden.jpg" },
        { name: "Bianca Jillian Kimberly", image: "./alden.jpg" },
        { name: "Davin Deannova", image: "./alden.jpg" },
        { name: "Nadzma Salzabilla", image: "./alden.jpg" },
        { name: "Graciella Bernadette", image: "./alden.jpg" }
      ]
    }
  ]
};

export default function Committees() {
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
              <span className="text-white ml-2 sm:ml-4">Committees</span>
            </h1>
            <div className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#f3c623] to-transparent opacity-50"></div>
          </motion.div>

          {/* Secretary Generals */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12 sm:mb-16 md:mb-20"
          >
            <h2 className="font-horizon text-2xl sm:text-3xl text-center mb-8 sm:mb-10">
              <span className="text-[#f3c623]">Secretary</span>
              <span className="text-white ml-2">Generals</span>
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 md:gap-16">
              {committees.secretaryGenerals.map((sg, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1.2 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <PhotoFrame 
                    image={sg.image}
                    name={sg.name}
                    role={sg.role}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Departments Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
            {committees.departments.map((dept, index) => (
              <motion.div
                key={dept.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                <DepartmentCard dept={dept} />
              </motion.div>
            ))}
          </div>

          {/* Bottom Decoration */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12 sm:mt-16 md:mt-20 flex items-center gap-4"
          >
            <div className="flex-1 h-px bg-gradient-to-r from-[#f3c623] to-transparent"></div>
            <FaUsers className="text-2xl sm:text-3xl text-[#f3c623]" />
            <div className="flex-1 h-px bg-gradient-to-l from-[#f3c623] to-transparent"></div>
          </motion.div>
        </div>
      </div>
      <style jsx global>{`
        .team-swiper {
          padding: 20px 0;
        }
        /* Navigation arrows color */
        .swiper-button-next,
        .swiper-button-prev {
          color: #f3c623 !important;
          opacity: 0.8;
          transition: opacity 0.3s ease;
        }
        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          opacity: 1;
        }
        /* Pagination bullets */
        .swiper-pagination-bullet {
          background: #f3c623 !important;
          opacity: 0.3;
          transition: opacity 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
        }
      `}</style>
    </div>
  );
}