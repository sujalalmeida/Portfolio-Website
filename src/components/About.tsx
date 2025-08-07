import { GraduationCap, MapPin, Calendar, Award, TrendingUp } from 'lucide-react';
import { Card } from '@/components/ui/card';

const About = () => {
  const skills = [
    { name: 'Python', level: 95 },
    { name: 'Machine Learning', level: 90 },
    { name: 'Data Science', level: 88 },
    { name: 'React.js', level: 85 },
    { name: 'Django', level: 82 },
    { name: 'AWS Cloud', level: 80 },
    { name: 'Docker/Kubernetes', level: 75 },
    { name: 'Blockchain/Web3', level: 70 }
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
        'Optimized ML models, increasing recall to 87%'
      ]
    },
    {
      role: 'Software Developer',
      company: 'ICAR-Central Institute of Fisheries Education',
      period: 'Oct 2024 – Present',
      location: 'Mumbai, India',
      highlights: [
        'Developing web-based RGR sequence analyzer for fish DNA modification',
        'Integrating NCBI database for genome comparison',
        'Implementing user-friendly interface for sequence analysis'
      ]
    }
  ];

  const achievements = [
    'Smart India Hackathon 2024 Finalist (Selected from 85+ teams)',
    'GDSC BitnBuild Hackathon - 4th place out of 60 teams',
    'CGPA: 9.05 in Computer Engineering'
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about leveraging AI and data science to solve real-world problems. 
            Currently pursuing Computer Engineering with a focus on cutting-edge technologies.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Education & Info */}
          <Card className="glass-card p-8 hover:emerald-glow transition-all duration-500">
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-semibold">Education</h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-primary">BE in Computer Engineering</h4>
                <p className="text-muted-foreground">Fr Conceicao Rodrigues College of Engineering</p>
                <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    2022-2026
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    Mumbai
                  </span>
                  <span className="flex items-center gap-1">
                    <TrendingUp className="h-4 w-4" />
                    CGPA: 9.05
                  </span>
                </div>
              </div>

              <div className="border-t border-border pt-4">
                <h4 className="font-semibold mb-2">Relevant Coursework</h4>
                <div className="flex flex-wrap gap-2">
                  {['Data Structures', 'Machine Learning', 'Database Systems', 'Computer Networks', 'Cloud Computing', 'Operating Systems'].map((course) => (
                    <span key={course} className="px-3 py-1 bg-muted rounded-full text-sm">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          {/* Achievements */}
          <Card className="glass-card p-8 hover:emerald-glow transition-all duration-500">
            <div className="flex items-center gap-3 mb-6">
              <Award className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-semibold">Key Achievements</h3>
            </div>
            
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">{achievement}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Skills */}
        <Card className="glass-card p-8 mb-16 hover:emerald-glow transition-all duration-500">
          <h3 className="text-2xl font-semibold mb-8 text-center">Technical Skills</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-primary font-semibold">{skill.level}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className="bg-gradient-primary h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ 
                      width: `${skill.level}%`,
                      animationDelay: `${index * 100}ms`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Experience */}
        <div>
          <h3 className="text-3xl font-semibold mb-8 text-center">
            Work <span className="text-gradient">Experience</span>
          </h3>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card key={index} className="glass-card p-8 hover:emerald-glow transition-all duration-500">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-semibold text-primary">{exp.role}</h4>
                    <p className="text-lg font-medium">{exp.company}</p>
                  </div>
                  <div className="text-muted-foreground">
                    <p>{exp.period}</p>
                    <p className="text-sm">{exp.location}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  {exp.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-muted-foreground">{highlight}</p>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;