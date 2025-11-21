import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import TiltCard from './TiltCard';
import './Projects.css';

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const projects = [
    {
      title: 'PrivMed | Privacy-Preserving Video Surveillance',
      description: 'Secure federated learning system for disease prediction using homomorphic encryption to protect patient data while aggregating model updates.',
      category: 'AI/ML',
      date: 'Dec 2024 – Jan 2025',
      tags: ['Python', 'React', 'Flask', 'Flower', 'CKKS'],
      highlights: [
        'Built secure federated learning system',
        'Used homomorphic encryption for data protection',
        'Aggregated encrypted model updates',
        'Created React dashboard for administration'
      ],
      links: {
        github: '#',
        demo: '#'
      }
    },
    {
      title: 'CivicEcho | Crowdsourced Civic Issue Reporting',
      description: 'Multimodal analysis system for rich incident reporting using automated complaint triage and AI verification to filter spam.',
      category: 'AI/ML',
      date: 'Jun 2025 – Present',
      tags: ['React Native', 'Flask', 'MediaPipe', 'Hugging Face', 'Gemini'],
      highlights: [
        'Multimodal analysis (text, image, voice)',
        'Automated complaint triage via agents',
        'Integrated crowd and AI verification',
        'Spam filtering and duplicate grouping'
      ],
      links: {
        github: '#',
        demo: '#'
      }
    },
    {
      title: 'AuraFitness | AI Fitness & Nutrition Assistant',
      description: 'AI-powered fitness and nutrition app with food image analysis for macros and real-time workout coaching using computer vision.',
      category: 'AI/ML',
      date: 'Aug 2025 – Present',
      tags: ['Python', 'Django', 'OpenCV', 'MediaPipe', 'LangChain'],
      highlights: [
        'Food image analysis with Gemini',
        'Real-time workout coach with OpenCV',
        'Fitness agent with LangChain + Ollama',
        'Fitbit data integration'
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
      date: 'Oct 2024 – Present',
      tags: ['React.js', 'Python', 'Django', 'NCBI API'],
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

  const categories = ['All', 'AI/ML', 'Bioinformatics'];

  const filteredProjects = selectedFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedFilter);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">
          My <span className="text-gradient">Projects</span>
        </h2>
        
        <div className="filter-container">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedFilter(category)}
              className={`filter-btn ${selectedFilter === category ? 'active' : ''}`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <TiltCard 
              key={project.title} 
              className="glass-card project-card"
              style={{ animation: `slide-up 0.5s ease forwards ${index * 0.1}s`, opacity: 0 }}
            >
              <div className="project-header">
                <div>
                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-meta">
                    <span className="project-category">{project.category}</span>
                    <span>• {project.date}</span>
                  </div>
                </div>
                <div className="project-links">
                  <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="icon-btn">
                    <Github size={18} />
                  </a>
                  <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="icon-btn">
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>

              <p className="project-desc">{project.description}</p>

              <div style={{ marginBottom: '1rem' }}>
                <h4 className="highlights-title">Key Highlights:</h4>
                <div className="highlights-list">
                  {project.highlights.map((highlight, idx) => (
                    <div key={idx} className="highlight-item">
                      <div className="highlight-dot"></div>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="tech-stack">
                {project.tags.map((tag) => (
                  <span key={tag} className="tech-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;