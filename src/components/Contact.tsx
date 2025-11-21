import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (honeypot.trim()) {
      setIsSubmitting(false);
      return;
    }

    try {
      // @ts-ignore
      const emailjs = await import('emailjs-com');
      await emailjs.send(
        'service_ezo7w7i',
        'template_x1imiyq',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: `Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\nMessage: ${formData.message}`,
          to_email: 'crce.9942.ce@gmail.com',
        },
        'AShNqiOI1WVY4dV3m'
      );
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again later.",
        variant: 'destructive',
      });
    }
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'sujalalmeida13@gmail.com',
      href: 'mailto:sujalalmeida13@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 8390388652',
      href: 'tel:+918390388652'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Mumbai, India',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/sujalalmeida',
      username: 'sujalalmeida'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/sujal-almeida/',
      username: 'sujal-almeida'
    }
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
            Ready to collaborate on your next AI/ML project? Let's discuss how we can work together 
            to bring innovative solutions to life.
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Form */}
          <div className="glass-card contact-form-card">
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Send Me a Message</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                  />
                </div>
              </div>
              
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="form-textarea"
                />
              </div>

              {/* Honeypot */}
              <div style={{ display: 'none' }} aria-hidden="true">
                <input
                  name="website"
                  type="text"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                />
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="btn btn-primary"
                style={{ width: '100%' }}
              >
                {isSubmitting ? 'Sending...' : (
                  <>
                    <Send size={18} style={{ marginRight: '0.5rem' }} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="contact-info-stack">
            <div className="glass-card info-card">
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Contact Information</h3>
              
              <div>
                {contactInfo.map((info) => (
                  <div key={info.label} className="info-item">
                    <div className="info-icon-box">
                      <info.icon size={20} />
                    </div>
                    <div>
                      <p style={{ fontWeight: '600' }}>{info.label}</p>
                      {info.href !== '#' ? (
                        <a href={info.href} style={{ color: 'var(--text-secondary)' }}>
                          {info.value}
                        </a>
                      ) : (
                        <p style={{ color: 'var(--text-secondary)' }}>{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card info-card">
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Follow Me</h3>
              
              <div className="social-list">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link-item"
                  >
                    <div className="info-icon-box" style={{ width: '40px', height: '40px' }}>
                      <social.icon size={18} />
                    </div>
                    <div>
                      <p style={{ fontWeight: '600' }}>{social.label}</p>
                      <p style={{ fontSize: '0.85rem', opacity: 0.7 }}>@{social.username}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;