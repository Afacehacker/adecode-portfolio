import React from 'react';
import Navbar from './components/Navbar';
import Background from './components/Background';
import FloatingHireMe from './components/FloatingHireMe';
import { ThemeProvider } from './context/ThemeContext';

// Sections
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import GithubActivity from './sections/GithubActivity';
import Workflow from './sections/Workflow';
import Services from './sections/Services';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="relative antialiased transition-colors duration-300">
        <Background />
        <Navbar />
        
        <main>
          <Hero />
          <About />
          <Skills />
          <Workflow />
          <Services />
          <Projects />
          <GithubActivity />
          <Testimonials />
          <Contact />
        </main>

        <Footer />
        <FloatingHireMe />
      </div>
    </ThemeProvider>
  );
}

export default App;
