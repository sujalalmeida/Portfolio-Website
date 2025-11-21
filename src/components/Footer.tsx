import { Github, Linkedin, Mail } from 'lucide-react';
import './Layout.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/sujalalmeida',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/sujal-almeida/',
      label: 'LinkedIn'
    },
    {
      icon: Mail,
      href: 'mailto:sujalalmeida13@gmail.com',
      label: 'Email'
    }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand & Description */}
          <div className="footer-brand">
            <h3 className="text-gradient" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Sujal Almeida</h3>
            <p>
              AI/ML Developer and Data Scientist passionate about building intelligent solutions 
              that make a real-world impact. Always learning, always innovating.
            </p>
            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
              {socialLinks.map((social) => (
                <a 
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="icon-btn"
                  style={{ width: '40px', height: '40px' }}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer-title">Quick Links</h4>
            <div className="footer-links">
              {quickLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="footer-link"
                  style={{ textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer' }}
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="footer-title">Get In Touch</h4>
            <div className="footer-links">
              <a href="mailto:sujalalmeida13@gmail.com" className="footer-link">
                sujalalmeida13@gmail.com
              </a>
              <a href="tel:+918390388652" className="footer-link">
                +91 8390388652
              </a>
              <span style={{ color: 'var(--text-secondary)' }}>Mumbai, India</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>&copy; {currentYear} Sujal Almeida. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;