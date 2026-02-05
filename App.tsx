
import React, { useEffect } from 'react';
import Header from './components/Header';
import Experience from './components/Experience';
import About from './components/About';
import EducationSkills from './components/EducationSkills';
import Footer from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    const main = document.querySelector('main');
    if (main) {
      main.style.opacity = '1';
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-black text-white min-h-screen selection:bg-white selection:text-black">
      <main className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 transition-opacity duration-1000 opacity-0 pb-24">
        <Header />

        <section id="experience" className="mt-32">
          <Experience />
        </section>

        <section id="about" className="mt-48">
          <About />
        </section>

        <section id="education-skills" className="mt-48">
          <EducationSkills />
        </section>

        <section id="contact" className="mt-48 border-t border-white/10 pt-24">
          <Footer />
        </section>
      </main>
    </div>
  );
};

export default App;
