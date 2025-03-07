import React, { useState } from 'react';
import { Activity, Users, FileText, Home, Info, HelpCircle, Menu, X } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Statistics from './components/Statistics';
import About from './components/About';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Outcome from './components/Outcome';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />

      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="statistics" className="py-16 bg-white">
          <Statistics />
        </section>

        <section id="about" className="py-16 bg-gray-50">
          <About />
        </section>

        <section id="faq" className="py-16 bg-white">
          <FAQ />
        </section>

        <section id="outcome" className="py-16 bg-gray-50">
          <Outcome />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;