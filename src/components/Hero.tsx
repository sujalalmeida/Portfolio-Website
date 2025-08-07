import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-bg.jpg';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const titles = [
    'AI/ML Developer',
    'Data Scientist',
    'Computer Science Student',
    'Problem Solver'
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
    }, isDeleting ? 100 : 150);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentTitleIndex, titles]);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero/80"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-primary/30 rounded-full animate-float"></div>
      <div className="absolute bottom-32 right-16 w-16 h-16 bg-primary/20 rounded-lg animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/3 right-1/4 w-12 h-12 border border-primary/40 rotate-45 animate-float" style={{ animationDelay: '4s' }}></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <motion.span 
              className="block text-foreground"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Sujal
            </motion.span>
            <motion.span 
              className="block text-gradient"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Almeida
            </motion.span>
          </motion.h1>
          
          <motion.div 
            className="h-20 flex items-center justify-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <p className="text-xl md:text-2xl text-muted-foreground">
              <span className="text-primary font-semibold">{displayText}</span>
              <span className="typing-animation">|</span>
            </p>
          </motion.div>

          <motion.p 
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            Dedicated Computer Science student specializing in <span className="text-primary font-semibold">Artificial Intelligence</span> and 
            <span className="text-primary font-semibold"> Machine Learning</span>. Building the future through data-driven solutions.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                className="btn-hero group"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                data-cursor-text="Explore Projects"
              >
                View My Projects
                <motion.div
                  className="ml-2"
                  animate={{ y: [0, 3, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <ChevronDown className="h-4 w-4" />
                </motion.div>
              </Button>
            </motion.div>
            
            <motion.div 
              className="flex gap-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.5 }}
            >
              {[
                { href: "https://github.com/sujal", icon: Github, label: "GitHub" },
                { href: "https://linkedin.com/in/sujal-almeida", icon: Linkedin, label: "LinkedIn" },
                { href: "mailto:crce.9942.ce@gmail.com", icon: Mail, label: "Email" }
              ].map((social, index) => (
                <motion.div
                  key={social.label}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 1.6 + index * 0.1 }}
                >
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="glass-card hover:emerald-glow relative overflow-hidden group"
                    asChild
                    data-cursor-text={social.label}
                  >
                    <a 
                      href={social.href} 
                      target={social.href.startsWith('mailto:') ? undefined : "_blank"} 
                      rel={social.href.startsWith('mailto:') ? undefined : "noopener noreferrer"}
                    >
                      <social.icon className="h-5 w-5 relative z-10" />
                      <motion.div
                        className="absolute inset-0 bg-primary/20 rounded-lg"
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </a>
                  </Button>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0], opacity: 1 }}
          transition={{ duration: 2, repeat: Infinity, delay: 2 }}
          initial={{ opacity: 0 }}
        >
          <motion.button 
            onClick={scrollToAbout}
            className="text-primary hover:text-primary-glow transition-colors"
            aria-label="Scroll to about section"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            data-cursor-text="Scroll Down"
          >
            <ChevronDown className="h-8 w-8" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;