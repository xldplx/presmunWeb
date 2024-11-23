import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home.jsx';
import PresMUN from './pages/about/PresMUN';
import PUMUN from './pages/about/PUMUN';
import Councils from './pages/Councils';
import Committees from './pages/Committees';
import Contact from './pages/Contact';
import JoinUs from './pages/JoinUs';
import Footer from './components/Footer';
import PressArticle from './pages/PressArticle.jsx';

export default function App() {
  return (
    <Router>
        <Navbar />
        <Routes>
          <Route path="/presmunWeb" element={<Home />} />
          <Route path="/about/presmun" element={<PresMUN />} />
          <Route path="/about/pumun" element={<PUMUN />} />
          <Route path="/councils" element={<Councils />} />
          <Route path="/committees" element={<Committees />} />
          <Route path="/press-article" element={<PressArticle />} />
          <Route path="/join-us" element={<JoinUs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
    </Router>
  );
} 