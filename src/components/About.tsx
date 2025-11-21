import { GraduationCap, MapPin, Calendar, Award, BookOpen, Briefcase, Code } from 'lucide-react';
import TiltCard from './TiltCard';
import './About.css';

const About = () => {
  const skills = [
    'Python', 'SQL', 'Java', 
    'Django', 'React.js', 'React Native', 'Flask',
    'scikit-learn', 'NumPy', 'PyTorch', 'OpenCV',
    'AWS', 'Firebase', 'Supabase',
    'Gemini', 'LangChain', 'Ollama', 'Flower', 'TenSEAL'
  ];

  const experiences = [
    {
      role: 'Machine Learning Intern',
      company: 'ICICI Prudential Life Insurance',
      period: 'Dec 2024 – Jan 2025',
      location: 'Mumbai, India',
      highlights: [
        'Processed 1M+ data points, improving data quality by 30%',
        'Engineered 25+ features, boosting model accuracy by 15%',
        'Optimized ML models, increasing recall to 87%',
        'Conducted post-model analysis to enhance decision-making'
      ]
    }
  ];

  const publications = [
    {
      title: 'Harnessing Generative AI for Precision Chemistry',
      authors: 'Sujal Almeida, Vijay Shelake, Snowy Fernandes, Hemant Khanolkar',
      journal: 'International Journal of Computer Applications, Vol. 187, No. 43, Sept 2025',
      doi: '10.5120/ijca2025925749'
    },
    {
      title: 'AI with Agency, Cities with Resilience: Deploying Agentic Systems for Urban Disaster Response',
      authors: 'Sujal Almeida, A. Dabre, S. Correia, S. Rodrigues, S. Kamoji, S. Deshmukh',
      journal: 'International Conference on Advancing Technology in Engineering and Science, 2025',
      status: 'Accepted for publication, forthcoming'
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">
          About <span className="text-gradient">Me</span>
        </h2>

        <div className="about-grid">
          {/* Education */}
          <TiltCard className="glass-card about-card">
            <div className="card-header">
              <GraduationCap size={24} className="card-icon" />
              <h3 className="card-title">Education</h3>
            </div>
            
            <div className="info-group">
              <h4 className="info-title">BE in Computer Engineering</h4>
              <p>Fr Conceicao Rodrigues College of Engineering</p>
              <div className="info-meta">
                <span className="meta-item"><Calendar size={14} /> 2022-2026</span>
                <span className="meta-item"><MapPin size={14} /> Mumbai</span>
                <span className="meta-item"><Award size={14} /> CGPI: 9.07/10</span>
              </div>
            </div>

            <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--card-border)' }}>
              <h4 style={{ marginBottom: '0.5rem', fontWeight: '600' }}>Relevant Coursework</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                Computer Architecture, Operating Systems, DBMS, Data Structures & Algorithms, 
                Computer Graphics, NLP, Mobile Computing, Cloud Computing
              </p>
            </div>
          </TiltCard>

          {/* Experience */}
          <TiltCard className="glass-card about-card">
            <div className="card-header">
              <Briefcase size={24} className="card-icon" />
              <h3 className="card-title">Experience</h3>
            </div>
            
            <div className="experience-list">
              {experiences.map((exp, index) => (
                <div key={index} className="experience-item">
                  <h4 className="info-title">{exp.role}</h4>
                  <p style={{ fontWeight: '500' }}>{exp.company}</p>
                  <div className="info-meta" style={{ marginBottom: '0.5rem' }}>
                    <span className="meta-item">{exp.period}</span>
                    <span className="meta-item">• {exp.location}</span>
                  </div>
                  <ul className="highlight-list">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </TiltCard>

          {/* Skills */}
          <TiltCard className="glass-card about-card" style={{ gridColumn: '1 / -1' }}>
            <div className="card-header">
              <Code size={24} className="card-icon" />
              <h3 className="card-title">Technical Skills</h3>
            </div>
            <div className="skills-grid">
              {skills.map((skill) => (
                <div key={skill} className="skill-tag">
                  {skill}
                </div>
              ))}
            </div>
          </TiltCard>

          {/* Publications */}
          <TiltCard className="glass-card about-card" style={{ gridColumn: '1 / -1' }}>
            <div className="card-header">
              <BookOpen size={24} className="card-icon" />
              <h3 className="card-title">Publications</h3>
            </div>
            <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
              {publications.map((pub, index) => (
                <div key={index} className="publication-card">
                  <h4 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '0.5rem', color: 'var(--primary)' }}>
                    {pub.title}
                  </h4>
                  <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>{pub.authors}</p>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontStyle: 'italic' }}>
                    {pub.journal}
                  </p>
                  {pub.doi && (
                    <p style={{ fontSize: '0.85rem', marginTop: '0.5rem' }}>DOI: {pub.doi}</p>
                  )}
                  {pub.status && (
                    <p style={{ fontSize: '0.85rem', marginTop: '0.5rem', color: 'var(--accent)' }}>{pub.status}</p>
                  )}
                </div>
              ))}
            </div>
          </TiltCard>
        </div>
      </div>
    </section>
  );
};

export default About;