import { useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const projects = [
    {
      title: 'Climate Sentinel',
      description: 'AI-driven platform for climate and disaster risk assessment with 20% increased predictive accuracy. Features deforestation tracking, earthquake prediction, and weather forecasting with SMS alerts.',
      category: 'AI/ML',
      date: 'Oct 2024',
      tags: ['Python', 'Google Earth Engine', 'Streamlit', 'Machine Learning', 'GIS'],
      highlights: [
        '20% increase in predictive accuracy',
        'Multi-hazard prediction models',
        'Real-time SMS alert system',
        'GIS visualization for renewable energy'
      ],
      links: {
        github: '#',
        demo: '#'
      }
    },
    {
      title: 'Decentralized Ride-Sharing App',
      description: 'Innovative blockchain-based ride-sharing platform with smart contracts for secure payments and Kleros integration for dispute resolution.',
      category: 'Blockchain',
      date: 'July 2024 - Present',
      tags: ['React.js', 'Node.js', 'Smart Contracts', 'Web3.js', 'IPFS', 'Ethereum'],
      highlights: [
        'Private blockchain implementation',
        'Smart contract payment system',
        'Kleros dispute resolution',
        'Web3 authentication',
        'IPFS decentralized storage'
      ],
      links: {
        github: '#',
        demo: '#'
      }
    },
    {
      title: 'Disaster Management System',
      description: 'Comprehensive real-time disaster response platform featuring live climate data tracking, SOS alerts, resource allocation, and donation management.',
      category: 'Web Development',
      date: 'July 2023 - May 2024',
      tags: ['Python', 'Django', 'Twilio API', 'Razorpay API', 'Real-time Data'],
      highlights: [
        'Real-time climate data tracking',
        'Instant SOS alert system',
        'Resource allocation optimization',
        'Secure donation processing',
        'Scalable Django architecture'
      ],
      links: {
        github: '#',
        demo: '#'
      }
    },
    {
      title: 'RGR Sequence Analyzer',
      description: 'Web-based tool for fish DNA modification analysis, integrating NCBI database for genome comparison with comprehensive mismatch analysis.',
      category: 'Bioinformatics',
      date: 'Oct 2024 - Present',
      tags: ['React.js', 'Python', 'Django', 'NCBI API', 'Bioinformatics'],
      highlights: [
        'NCBI database integration',
        'Advanced mismatch analysis',
        'User-friendly sequence input',
        'Result visualization tools'
      ],
      links: {
        github: '#',
        demo: '#'
      }
    }
  ];

  const categories = ['All', 'AI/ML', 'Blockchain', 'Web Development', 'Bioinformatics'];

  const filteredProjects = selectedFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedFilter);

  return (
    <section id="projects" className="py-20 px-6 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Showcasing innovative solutions across AI/ML, blockchain, and web development. 
            Each project represents a unique challenge solved with cutting-edge technology.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedFilter === category ? "default" : "outline"}
                onClick={() => setSelectedFilter(category)}
                className={`${
                  selectedFilter === category 
                    ? 'bg-gradient-primary text-primary-foreground' 
                    : 'glass-card hover:emerald-glow'
                } transition-all duration-300`}
              >
                <Filter className="mr-2 h-4 w-4" />
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.title} 
              className="glass-card p-8 hover:emerald-glow transition-all duration-500 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Badge variant="outline" className="text-primary border-primary">
                      {project.category}
                    </Badge>
                    <span>•</span>
                    <span>{project.date}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon" className="glass-card hover:emerald-glow" asChild>
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" className="glass-card hover:emerald-glow" asChild>
                    <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="mb-6">
                <h4 className="font-semibold mb-3 text-primary">Key Highlights:</h4>
                <div className="space-y-2">
                  {project.highlights.map((highlight) => (
                    <div key={`${project.title}-hl-${highlight}`} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-muted-foreground">{highlight}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground">
              No projects found for the selected category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;