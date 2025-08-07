import { Heart, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
      href: 'https://linkedin.com/in/sujal-almeida',
      label: 'LinkedIn'
    },
    {
      icon: Mail,
      href: 'mailto:crce.9942.ce@gmail.com',
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
    <footer className="bg-gradient-to-t from-muted/20 to-background border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gradient">Sujal Almeida</h3>
            <p className="text-muted-foreground leading-relaxed">
              AI/ML Developer and Data Scientist passionate about building intelligent solutions 
              that make a real-world impact. Always learning, always innovating.
            </p>
            <div className="flex space-x-2">
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  variant="outline"
                  size="icon"
                  className="glass-card hover:emerald-glow"
                  asChild
                >
                  <a 
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    <social.icon className="h-4 w-4" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Get In Touch</h4>
            <div className="space-y-2">
              <p className="text-muted-foreground">
                <a 
                  href="mailto:crce.9942.ce@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  crce.9942.ce@gmail.com
                </a>
              </p>
              <p className="text-muted-foreground">
                <a 
                  href="tel:+918390388652"
                  className="hover:text-primary transition-colors"
                >
                  +91 8390388652
                </a>
              </p>
              <p className="text-muted-foreground">Mumbai, India</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
           
            </p>
            <p className="flex items-center text-muted-foreground text-sm">
              
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;