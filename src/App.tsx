import React, { useState } from 'react';
import { Activity, Users, FileText, Home, Info, HelpCircle, Menu, X } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Statistics from './components/Statistics';
import About from './components/About';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Outcome from './components/Outcome';
import SubmissionForm from './components/SubmissionForm';
import Admin from './components/Admin';
import { SubmissionProvider } from './context/SubmissionContext';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [showAdmin, setShowAdmin] = useState(false);

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'admin') {
      setShowAdmin(true);
    } else {
      setShowAdmin(false);
      setActiveSection(sectionId);
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Check if the URL has #admin hash
  React.useEffect(() => {
    if (window.location.hash === '#admin') {
      setShowAdmin(true);
    }
  }, []);

  return (
    <SubmissionProvider>
      {showAdmin ? (
        <Admin />
      ) : (
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

            <section id="submission" className="py-16 bg-white">
              <SubmissionForm />
            </section>

            <section id="faq" className="py-16 bg-gray-50">
              <FAQ />
            </section>

            <section id="outcome" className="py-16 bg-white">
              <Outcome />
            </section>
          </main>

          <Footer />
        </div>
      )}
    </SubmissionProvider>
  );
}

export default App;