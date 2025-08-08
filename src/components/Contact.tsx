import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

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

    // Honeypot: if filled, treat as spam and silently ignore
    if (honeypot.trim()) {
      setIsSubmitting(false);
      return;
    }

    // Send email using EmailJS (client-side)
    // You must install emailjs-com: npm install emailjs-com
    // And set up your EmailJS service, template, and user ID
    try {
      // @ts-ignore
      const emailjs = await import('emailjs-com');
      await emailjs.send(
        'service_ezo7w7i', // replace with your EmailJS service ID
        'template_x1imiyq', // replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: `Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\nMessage: ${formData.message}`,
          to_email: 'crce.9942.ce@gmail.com',
        },
        'AShNqiOI1WVY4dV3m' // replace with your EmailJS user ID (public key)
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
    <section id="contact" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to collaborate on your next AI/ML project? Let's discuss how we can work together 
            to bring innovative solutions to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="glass-card p-8 hover:emerald-glow transition-all duration-500">
            <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="sr-only">Name</label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="bg-muted/50 border-border focus:border-primary"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">Email</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-muted/50 border-border focus:border-primary"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="sr-only">Subject</label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="bg-muted/50 border-border focus:border-primary"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="sr-only">Message</label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="bg-muted/50 border-border focus:border-primary resize-none"
                />
              </div>

              {/* Honeypot field for bots */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input
                  id="website"
                  name="website"
                  type="text"
                  autoComplete="off"
                  tabIndex={-1}
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full btn-hero"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin mr-2" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="glass-card p-8 hover:emerald-glow transition-all duration-500">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                      <info.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{info.label}</p>
                      {info.href !== '#' ? (
                        <a 
                          href={info.href}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="glass-card p-8 hover:emerald-glow transition-all duration-500">
              <h3 className="text-2xl font-semibold mb-6">Follow Me</h3>
              
              <div className="space-y-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                  >
                    <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                      <social.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium group-hover:text-primary transition-colors">
                        {social.label}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        @{social.username}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </Card>

            <Card className="glass-card p-8 hover:emerald-glow transition-all duration-500">
              <h3 className="text-2xl font-semibold mb-4">Let's Build Something Amazing</h3>
              <p className="text-muted-foreground leading-relaxed">
                Whether you're looking for an AI/ML consultant, a full-stack developer, 
                or someone passionate about solving complex problems with data science, 
                I'm here to help turn your ideas into reality.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;