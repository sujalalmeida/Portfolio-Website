import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import Magnetic from './Magnetic';
import Scene3D from './Scene3D';
import './Hero.css';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const titles = [
    'AI/ML Specialist',
    'Computer Vision Engineer',
    'Deep Learning Researcher',
    'Full Stack Developer'
  ];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentTitle.length) {
          setDisplayText(currentTitle.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentTitleIndex, titles]);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-section" style={{ background: 'transparent' }}>
      <Scene3D />
      
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="hero-title" style={{ letterSpacing: '0.05em' }}>
            <span style={{ display: 'block', color: 'var(--text-color)', fontSize: '0.8em', fontWeight: '300', marginBottom: '0.5rem' }}></span>
            <span className="text-gradient" style={{ fontSize: '1.2em', fontWeight: '800' }}>SUJAL ALMEIDA</span>
          </h1>

          <div style={{ height: '60px', marginBottom: '2rem' }}>
            <p style={{ fontSize: '1.5rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-display)' }}>
              <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>{displayText}</span>
              <span className="typing-cursor">|</span>
            </p>
          </div>

          <p className="hero-subtitle" style={{ maxWidth: '600px', margin: '0 auto 2.5rem' }}>
            Aspiring AI/ML specialist and final-year Computer Science student. 
            Building the future with predictive models, deep learning, and agentic systems.
          </p>

          <div className="hero-actions">
            <Magnetic className="btn btn-primary" onClick={scrollToProjects}>
              DISCOVER WORK
            </Magnetic>
            <Magnetic className="btn btn-outline" onClick={scrollToAbout}>
              ABOUT ME
            </Magnetic>
          </div>

          <div className="social-links">
            <a href="https://github.com/sujalalmeida" target="_blank" rel="noopener noreferrer" className="social-btn">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/sujal-almeida/" target="_blank" rel="noopener noreferrer" className="social-btn">
              <Linkedin size={20} />
            </a>
            <a href="mailto:crce.9942.ce@gmail.com" className="social-btn">
              <Mail size={20} />
            </a>
          </div>
        </motion.div>
      </div>

      <div className="scroll-indicator" onClick={scrollToAbout}>
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

export default Hero;