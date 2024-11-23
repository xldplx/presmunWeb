import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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
    <Router basename="/presmunWeb">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/presmunWeb" element={<Navigate to="/" replace />} />  
        <Route path="/about/presmun" element={<PresMUN />} />
        <Route path="/about/pumun" element={<PUMUN />} />
        <Route path="/councils" element={<Councils />} />
        <Route path="/committees" element={<Committees />} />
        <Route path="/press-article" element={<PressArticle />} />
        <Route path="/join-us" element={<JoinUs />} />
        <Route path="/contact" element={<Contact />} />
        
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </Router>
  );
}