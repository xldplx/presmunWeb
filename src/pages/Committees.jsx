import React from 'react';
import { FaUsers, FaCrown, FaStar } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCards, A11y } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';
import { image } from 'framer-motion/client';

const PhotoFrame = ({ image, name, role, isSpecial = false }) => {
  return (
    <div className="relative">
      {/* Main Photo Container - increased size */}
      <div className={`relative w-[220px] h-[330px] sm:w-[250px] sm:h-[360px] bg-[#000420] ${isSpecial ? 'border-2 border-[#f3c623]' : ''}`}>
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
            <h4 className="text-white text-sm sm:text-base font-medium px-2 whitespace-normal break-words">
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
  directorateGenerals: [
    {
      name: "Gabriel Eiffel Ananda Christianto Wibisono",
      role: "Directorate General I",
      image: "assets/committees/DIRECTORATE SECRETARY GENERAL/Directorate Secretary General-Gabriel Eiffel.png"
    },
    {
      name: "Rahmadiah Josina Ukas",
      role: "Directorate General II",
      image: "assets/committees/DIRECTORATE SECRETARY GENERAL/Directorat Secretary General-Rahmadiah Josina Ukas.png"
    }
  ],
  secretaryGenerals: [
    {
      name: "Aqilah Erganisah Chairudin",
      role: "Secretary General",
      image: "assets/committees/SECRETARY GENERAL AND DEPUTY/Secretary General-Aqilah Erganisah Chairudin.png"
    },
    {
      name: "Yoela Zelda Zebua",
      role: "Deputy Secretary General",
      image: "assets/committees/SECRETARY GENERAL AND DEPUTY/Deputy Secretary General-Yoela Zelda.png"
    }
  ],
  departments: [
    {
      title: "Administration and Legality",
      usg: { name: "Ghaitza Diamanta", image: "assets/committees/ADMINISTRATION/Administration (USG)-Ghaitza Diamanta.png" },
      ausg: { name: "Rossi Amalia", image: "assets/committees/ADMINISTRATION/Administration (AUSG)-Amalia Rossi Hakiki.png" },
      members: [
        { name: "Zhafran Shahzada", image: "assets/committees/ADMINISTRATION/Administration-Zhafran Shahzada.png" },
        { name: "Emeralda Maurenzia", image: "assets/committees/ADMINISTRATION/Administration-Emeralda Maurenzia.png" },
        { name: "Gina Keris Anastasia Ewi", image: "assets/committees/ADMINISTRATION/Administration-Gina Keris Anastasia Ewi.png" },
        { name: "Mawlida Rizka Kamila", image: "assets/committees/ADMINISTRATION/Administration-Mawlida Rizka Kamila.png" }
      ]
    },
    {
      title: "Finance",
      usg: { name: "Gabriella Rindang Dewi Arimbi", image: "assets/committees/FINANCE/Finance (USG)-Gabriela Rindang Dewi Arimbi.png" },
      ausg: { name: "Grandiessa", image: "assets/committees/FINANCE/Finance (AUSG)-Grandiessa Najla Khalila.png" },
      members: [
        { name: "Eileen Daneaya", image: "assets/committees/FINANCE/Finance-Eileen Daneaya.png" },
        { name: "Eky Joana Alayda Ismaya", image: "assets/committees/FINANCE/Finance-Eky Joana Alayda Ismaya.png" },
        { name: "Ineza Sativa Batara", image: "assets/committees/FINANCE/Finance-Ineza Sativa Batara.png" },
        { name: "Raymond", image: "assets/committees/FINANCE/Finance-Raymond.png" },
        { name: "Valerion Theodore Chandratama", image: "assets/committees/FINANCE/FINANCE-VALERION THEODORE CHANDRATAMA.png" },
        { name: "Zaskiatul Ulya", image: "assets/committees/FINANCE/Finance-Zaskiatul Ulya.png" }
      ]
    },
    {
      title: "Substance",
      usg: { name: "Brain Raska Sembiring", image: "assets/committees/SUBSTANCE (ACADEMIC)/Substance-USG)-Brain Raska Sembiring.png" },
      ausg: { name: "Vanessa Manuela Patty", image: "assets/committees/SUBSTANCE (ACADEMIC)/Substance (AUSG)-Vanessa Manuela Patty.png" },
      members: [
        { name: "Arrum Kania Faizah Az-Zahra", image: "assets/committees/SUBSTANCE (ACADEMIC)/Substance-Arrum Kania Faizah Az-Zahra.png" },
        { name: "Faiz Orlando Amryanto Pidani", image: "assets/committees/SUBSTANCE (ACADEMIC)/Substance-Faiz Orlando Amryanto Pidani.png" },
        { name: "Rafi Dwiputra Daniswara", image: "assets/committees/SUBSTANCE (ACADEMIC)/Substance-Rafi Dwiputra Daniswara.png" },
        { name: "Fasha Yoga Prasetya", image: "assets/committees/SUBSTANCE (ACADEMIC)/Substance-Fasha Yoga Prasetya.png" },
        { name: "Zanaya Mauranisa", image: "assets/committees/SUBSTANCE (ACADEMIC)/Substance-Zanaya Mauranisa.png" },
        { name: "Olivia Victoria Thenu", image: "assets/committees/SUBSTANCE (ACADEMIC)/Substance-Olivia Victoria Thenu.png" },
        { name: "Vima Syaddad Alfathan", image: "assets/committees/SUBSTANCE (ACADEMIC)/Substance-Vima Syaddad Alfathan.png" },
        { name: "Jedda Muncar RR", image: "assets/committees/SUBSTANCE (ACADEMIC)/Substance-Jedda Muncar RR.png" },
        { name: "Daffa Dwika Fadiya Hidayat", image: "assets/committees/SUBSTANCE (ACADEMIC)/Substance-Daffa Dwika Fadiya Hidayat.png" }
      ]
    },
    {
      title: "Conference",
      usg: { name: "Salwa Nurunnadia Laoh", image: "assets/committees/Conference/Conference (USG)-Salwa Nurunnadia Laoh.png" },
      ausg: { name: "Bella Adilla", image: "assets/committees/Conference/Conference (AUSG) Bela Adila.png" },
      members: [
        { name: "Chandra Aden Akbar Pamungkas", image: "assets/committees/Conference/Conference-Chandra Aden Akbar Pamungkas.png" },
        { name: "Haura Zauziha Az-Zahra", image: "assets/committees/Conference/Conference-Haura Zauziha Az-Zahra (tio).png" },
        { name: "Muhammad Khairatul", image: "assets/committees/Conference/Conference-Muhammad Khairatul.png" },
        { name: "Athira Zahra", image: "assets/committees/Conference/Conference-Athira Zahra.png" },
        { name: "Ranya Kayla Bilqisthi", image: "assets/committees/Conference/Conference-Ranya Kayla Bilqisthi.png" },
        { name: "Pandu Anurullah", image: "assets/committees/Conference/Conference-Pandu Anurullah.png" },
        { name: "Avelife Maria Easter Saroinsong", image: "assets/committees/Conference/Conference-Avelife Maria Easter Saroinsong.png" },
        { name: "Farica Adnan Ramadhani", image: "assets/committees/Conference/Conference-Farica Adnan Ramadhani.png" },
        { name: "Sherly Natania Hadi", image: "assets/committees/Conference/Conference-Sherly Natania Hadi.png" },
        { name: "Rizky Aulia Putri", image: "assets/committees/Conference/Conference-Rizky Aulia Putri.png" },
        { name: "Muhammad Raffi Ramdhan", image: "assets/committees/Conference/Conference-Muhammad Raffi Ramdhan.png" },
        { name: "Gio Algifari", image: "assets/committees/Conference/Conference-Gio Algifari.png" },
        { name: "Zaidan Mahfudz Azzam Saidi", image: "assets/committees/Conference/Conference-Zaidan Mahfudz Azzam Saidi.png" },
        { name: "Cut Putri Alya Vanissa", image: "assets/committees/Conference/Conference-Cut Putri Alya Vanissa.png" },
        { name: "Nadia Aulia Azzera", image: "assets/committees/Conference/Conference-Nadia Aulia Azzera.png" },
        { name: "Muflyhah Wilda Az-Zahra", image: "assets/committees/Conference/Conference-Muflyhah Wilda Az-Zahra.png" },
        { name: "Meutia Putri Sayzaman", image: "assets/committees/Conference/Conference-Meutia Putri Sayzaman.png" },
        { name: "Delia Sari", image: "assets/committees/Conference/Conference-Delia Sari.png" },
        { name: "Elisa Maisarah", image: "assets/committees/Conference/Conference-Elisa Maisarah.png" }
      ]
    },
    {
      title: "Internal Affairs",
      usg: { name: "Mutiara Anindya Abidin", image: "assets/committees/INTERNAL/Internal (USG)-Mutiara Anindya.png" },
      ausg: { name: "Maureene Aqilla Ferdian", image: "assets/committees/INTERNAL/Internal (AUSG)-Maureene Aqilla.png" },
      members: [
        { name: "Alfendo Rahmadani Aryo Prakoso", image: "assets/committees/INTERNAL/Internal (Delegate Affairs)-Alfendo Rahmadani Aryo Prakoso.png" },
        { name: "Annisa Nur Rahmi", image: "assets/committees/INTERNAL/Internal (PR)-Annisa Nur Rahmi.png" },
        { name: "Aqela Firyal Zahira", image: "assets/committees/INTERNAL/Internal (DA)-Aqela Firyal Zahira.png" },
        { name: "Claudia Meta Tasya Cikita", image: "assets/committees/INTERNAL/Internal (PR)-Claudia Meta T. Cikita.png" },
        { name: "Fathya Rizky Rania Mandai", image: "assets/committees/INTERNAL/Internal (Public Relation)-Fathya Rizky Rania Mandai.png" },
        { name: "Hazel Jocelyn Tiurma Riva Sitorus", image: "assets/committees/INTERNAL/Internal (DA)-Hazel Jocelyn Tiurma Riva Sitorus.png" },
        { name: "Nadia Adelia Nasution", image: "assets/committees/INTERNAL/Internal (DA)-Nadia Adelia Nasution.png" },
        { name: "Rachel Elisabeth", image: "assets/committees/INTERNAL/Internal (DA)-⁠Rachel Elisabeth.png" },
        { name: "Raisya Herlia Putranto", image: "assets/committees/INTERNAL/Internal (DA)-Raisya Herlia Putranto.png" },
        { name: "Roxy Talitha Athallah", image: "assets/committees/INTERNAL/INternal (PR)-Roxy Talitha Athallah.png" },
        { name: "Teressa Harimurti", image: "assets/committees/INTERNAL/Internal (PR)-Teressa Harimurti.png" }
      ]
    },
    {
      title: "External Affairs",
      usg: { name: "Nadine Chandrawinata Wenas", image: "assets/committees/EXTERNAL/External (USG)-Nadine Chandrawinata Wenas.png" },
      ausg: { name: "Aulia Dwi", image: "assets/committees/EXTERNAL/External (AUSG)-Aulia Dwi Nurhayyu.png" },
      members: [
        { name: "Akna Khoirun Nisa", image: "assets/committees/EXTERNAL/External (Liaison Officer)-Akna Khoirun Nisa.png" },
        { name: "Nur Azizah Iqrimah Siregar", image: "assets/committees/EXTERNAL/External (Sponsorship)-Nur Azizah Iqrimah Siregar.png" },
        { name: "Nagita Alifia Kusuma Salsabilla", image: "assets/committees/EXTERNAL/External (MedPar)-Nagita Alifia Kusuma Salsabilla.png" },
        { name: "Ramya Syazwina Zulcham", image: "assets/committees/EXTERNAL/External (Liaisonn Officer)-Ramya Syazwina Zulcham.png" },
        { name: "Fikri Aji", image: "assets/committees/EXTERNAL/External (Liaison Officer)-Fikri Aji.png" },
        { name: "Eleonora Joycelyne", image: "assets/committees/EXTERNAL/External (sponsorship)-Eleonora Joycelyne.png" },
        { name: "Thomas William P", image: "assets/committees/EXTERNAL/External (Sponsor)-Thomas William P.png" },
        { name: "Dyna Syarifa", image: "assets/committees/EXTERNAL/External (Liaison Officer)-Dyna Syarifa.png" },
        { name: "Jihan Hamdalah", image: "assets/committees/EXTERNAL/External (LO)-Jihan Hamdalah.png" }
      ]
    },
    {
      title: "Multimedia, Design, and Documentation (MTDD)",
      usg: { name: "Mifta Farid Masyuchrin", image: "assets/committees/MTDD/MTDD (USG)-Mifta Farid M.png" },
      ausg: { name: "Siti Najmatul Mu'izzah Masruchin", image: "assets/committees/MTDD/MTDD (AUSG)-Siti Najmatul Mu_izzah Masruchin.png" },
      members: [
        { name: "Jemima Grace Marcella Paserang", image: "assets/committees/MTDD/MTDD-Jemima Grace Marcella Paserang.png" },
        { name: "Sadrina Azzahra Alhabsyi", image: "assets/committees/MTDD/MTDD-Sadrina Azzahra Alhabsyi.png" },
        { name: "Nyayu Nur Amalia Yahya", image: "assets/committees/MTDD/MTDD-Nyayu Nur Amalia Yahya.png" },
        { name: "Zefanya Febe Putranti", image: "assets/committees/MTDD/MTDD-Zefanya Febe Putranti.png" },
        { name: "Taqya Aulia Herdiyana", image: "assets/committees/MTDD/MTDD-Taqya Aulia Herdiyana.png" },
        { name: "Anvil Salsabila", image: "assets/committees/MTDD/MTDD-Anvil Salsabila.png" },
        { name: "Putri Amaliah Miftahuljannah", image: "assets/committees/MTDD/MTDD-Putri Amaliah Miftahuljannah.png" },
        { name: "Farhan", image: "assets/committees/MTDD/MTDD-Farhan.png" },
        { name: "Antonius Bagus Prasetio", image: "assets/committees/MTDD/MTDD-Antonius Bagus Prasetio.png" }
      ]
    },
    {
      title: "Data Master",
      usg: { name: "Shakiva Naswa Crescensia", image: "assets/committees/DATA MASTER/Data Master (USG)-Shakiva Naswa Crescensia.png" },
      ausg: { name: "Muhammad Yusuf Firizki", image: "assets/committees/DATA MASTER/Data Master (AUSG)-Muhammad Yusuf Firizki.png" },
      members: [
        { name: "Alden Sayidina Radjab", image: "assets/committees/DATA MASTER/Data Master-Alden Sayidina Radjab.png" },
        { name: "Samuel Jagar Adoman Manalu", image: "assets/committees/DATA MASTER/Data Master-Samuel Jagar Adoman Manalu.png" }
      ]
    },
    {
      title: "Marketing",
      usg: { name: "Beby Joya", image: "assets/committees/MARKETING/Marketing (USG)-Beby Joya.png" },
      ausg: { name: "Akifah Nur Fadhillah", image: "assets/committees/MARKETING/Marketing (AUSG)-Akifah Nur Fadhilah.png" },
      members: [
        { name: "Bestari Ashhabal Jannati", image: "assets/committees/MARKETING/Marketing-Bestari Ashhabal Jannati.png" },
        { name: "Dellinda Christiani Karongkong", image: "assets/committees/MARKETING/Marketing-Dellinda Christiani Karongkong.png" },
        { name: "Nailah Azmi", image: "assets/committees/MARKETING/Marketing-⁠Nailah Azmi.png" },
        { name: "Katrina", image: "assets/committees/MARKETING/Marketing-Katrina.png" },
        { name: "Nasyeila Nayla", image: "assets/committees/MARKETING/Marketing-Nasyeila Nayla.png" },
        { name: "Aurellia Hillary", image: "assets/committees/MARKETING/Marketing-Aurellia Kate Hillary .png" },
        { name: "Lulu Juwita", image: "assets/committees/MARKETING/Marketing-Lulu Juwita.png" }
      ]
    },
    {
      title: "Entrepreneurship",
      usg: { name: "Alfeiza Ghenaya Rizqi", image: "assets/committees/ENTREPRENEURSHIP/Entrepreneur (USG)-Alfeiza G.png" },
      ausg: { name: "Ardel Davin", image: "assets/committees/ENTREPRENEURSHIP/Entre (AUSG)-Ardel Davin.png" },
      members: [
        { name: "Khairun Najwa Ambrollah", image: "assets/committees/ENTREPRENEURSHIP/Entre-Khairun Najwa Ambrollah.png" },
        { name: "Zahwa Rindu Setianka", image: "assets/committees/ENTREPRENEURSHIP/Entrepreneurship-Zahwa Rindu Setianka.png" },
        { name: "Firdha Natasya", image: "assets/committees/ENTREPRENEURSHIP/Entrepreneur-Firdha Natasya.png" },
        { name: "Yobel Felixio Sempurna", image: "assets/committees/ENTREPRENEURSHIP/Entrepreneur-Yobel Felixio Sempurna.png" },
        { name: "M. Farhan", image: "assets/committees/ENTREPRENEURSHIP/Enterpreneur-M. Farhan.png" },
        { name: "Azura Balqissyah Zahra", image: "assets/committees/ENTREPRENEURSHIP/Entre-Azura Balqissyah Zahra.png" },
        { name: "Arjuando Tampubolon", image: "assets/committees/ENTREPRENEURSHIP/Entrepreneur-Arjuando Tampubolon.png" }
      ]
    },
    {
      title: "Food and Beverage",
      usg: { name: "Jelita Nazhifah", image: "assets/committees/FOOD AND BEVERAGE/FnB (USG)-Jelita Nazhifah Dyren.png" },
      ausg: { name: "", image: "" },
      members: [
        { name: "Jelita Rotua Sitanggang", image: "assets/committees/FOOD AND BEVERAGE/FnB-Jelita Rotua Sitanggang.png" },
        { name: "Bianca Jillian Kimberly", image: "assets/committees/FOOD AND BEVERAGE/FnB-Bianca Jillian Kimberly.png" },
        { name: "Davin Deannova", image: "assets/committees/FOOD AND BEVERAGE/FnB-Davin Deannova.png" },
        { name: "Nadzma Salzabilla", image: "assets/committees/FOOD AND BEVERAGE/FnB-Nadzma Salzabilla.png" },
        { name: "Graciella Bernadette", image: "assets/committees/FOOD AND BEVERAGE/FnB-Graciella Bernadette.png" }
      ]
    }
  ]
};

export default function Committees() {
  return (
    <div className="bg-[#000420] min-h-screen text-white/90">
      {/* Background pattern */}
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
            className="mb-16 sm:mb-20 md:mb-24 relative"
          >
            <h1 className="font-horizon text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center">
              <span className="text-[#f3c623]">Our</span>
              <br className="sm:hidden" />
              <span className="text-white ml-2 sm:ml-4">Committees</span>
            </h1>
            <div className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#f3c623] to-transparent opacity-50"></div>
          </motion.div>

          {/* Directorate Generals */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-24 sm:mb-28 relative"
          >
            {/* Special Background */}
            <div className="absolute inset-0 bg-[#000420] rounded-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-[#f3c623]/10 to-transparent"></div>
              <div className="absolute inset-0 border border-[#f3c623]/20 rounded-lg"></div>
            </div>

            <div className="relative z-10 p-[1rem]">
              <h2 className="font-horizon text-3xl sm:text-4xl text-center mb-10 sm:mb-14">
                <span className="text-[#f3c623]">Directorate</span>
                <span className="text-white ml-2">Generals</span>
                <FaCrown className="inline-block ml-3 text-[#f3c623] text-2xl sm:text-3xl" />
              </h2>
              
              {/* Glowing Effect Container */}
              <div className="relative p-6 sm:p-8 rounded-lg">
                <div className="absolute inset-0 rounded-lg bg-[#f3c623]/10 blur-md"></div>
                <div className="relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14">
                    {committees.directorateGenerals.map((dg, index) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                        className="flex flex-col items-center"
                      >
                        <div className="relative">
                          <PhotoFrame 
                            image={dg.image}
                            name={dg.name}
                            role={dg.role}
                            isSpecial={true}
                          />
                          <FaStar className="absolute -top-3 -right-3 text-[#f3c623] text-xl animate-pulse" />
                        </div>
                        <div className="mt-6 text-center">
                          <h3 className="text-xl font-medium text-[#f3c623]">{dg.name}</h3>
                          <p className="text-sm text-white/80">{dg.role}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Secretary Generals */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-24 sm:mb-28 relative"
          >
            {/* Special Background */}
            <div className="absolute inset-0 bg-[#000420] rounded-lg">
              <div className="absolute inset-0 bg-gradient-to-bl from-[#f3c623]/10 to-transparent"></div>
              <div className="absolute inset-0 border border-[#f3c623]/20 rounded-lg"></div>
            </div>

            <div className="relative z-10 p-[1rem]">
              <h2 className="font-horizon text-3xl sm:text-4xl text-center mb-10 sm:mb-14">
                <span className="text-[#f3c623]">Secretary</span>
                <span className="text-white ml-2">Generals</span>
                <FaCrown className="inline-block ml-3 text-[#f3c623] text-2xl sm:text-3xl" />
              </h2>
              
              {/* Glowing Effect Container */}
              <div className="relative p-6 sm:p-8 rounded-lg">
                <div className="absolute inset-0 rounded-lg bg-[#f3c623]/10 blur-md"></div>
                <div className="relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14">
                    {committees.secretaryGenerals.map((sg, index) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                        className="flex flex-col items-center"
                      >
                        <div className="relative">
                          <PhotoFrame 
                            image={sg.image}
                            name={sg.name}
                            role={sg.role}
                            isSpecial={true}
                          />
                          <FaStar className="absolute -top-3 -right-3 text-[#f3c623] text-xl animate-pulse" />
                        </div>
                        <div className="mt-6 text-center">
                          <h3 className="text-xl font-medium text-[#f3c623]">{sg.name}</h3>
                          <p className="text-sm text-white/80">{sg.role}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Departments Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
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
            className="mt-16 sm:mt-20 md:mt-24 flex items-center gap-4"
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