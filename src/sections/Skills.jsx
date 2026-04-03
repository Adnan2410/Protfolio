import React from 'react';
import {
  FaCode,
  FaPaintBrush,
  FaServer,
  FaDatabase,
  FaTools,
  FaBrain,
} from 'react-icons/fa';

const Skills = () => {
  const skillCategories = [
    {
      icon: FaCode,
      title: 'Languages',
      skills: ['JavaScript', 'Python', 'SQL'],
    },
    {
      icon: FaPaintBrush,
      title: 'Frontend',
      skills: ['React.js', 'Tailwind CSS', 'HTML5', 'CSS3'],
    },
    {
      icon: FaServer,
      title: 'Backend',
      skills: ['Node.js', 'Express.js', 'FastAPI'],
    },
    {
      icon: FaDatabase,
      title: 'Databases',
      skills: ['MongoDB', 'MySQL', 'Firebase', 'Supabase'],
    },
    {
      icon: FaTools,
      title: 'Tools & Deployment',
      skills: ['Git', 'GitHub', 'Postman', 'Vercel'],
    },
    {
      icon: FaBrain,
      title: 'AI & Specialization',
      skills: ['Gemini AI', 'MERN Stack', 'Responsive Design'],
    },
  ];

  const proficiencies = [
    { name: 'React.js', percentage: 90 },
    { name: 'Node.js & Express.js', percentage: 85 },
    { name: 'MongoDB & Databases', percentage: 80 },
    { name: 'Tailwind CSS & UI Design', percentage: 88 },
    { name: 'Python & FastAPI', percentage: 75 },
  ];

  return (
    <section id="skills" className="py-20 bg-bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-4">
            <span className="gradient-text">Technical Skills</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <div
                key={idx}
                className="animate-fade-in-up bg-bg-surface p-6 rounded-xl border border-primary/20 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:scale-105 text-center group"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors">
                    <Icon className="text-3xl text-primary group-hover:scale-110 transition-transform" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-4">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/30 hover:bg-primary/20 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Proficiency Bars */}
        <div className="bg-bg-surface p-8 rounded-xl border border-primary/20 animate-fade-in-up">
          <h3 className="text-2xl font-bold text-text-primary mb-8">
            Skill Proficiency
          </h3>

          <div className="space-y-6">
            {proficiencies.map((skill, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary font-semibold">
                    {skill.name}
                  </span>
                  <span className="text-primary font-bold">{skill.percentage}%</span>
                </div>
                <div className="w-full h-2 bg-bg-light rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: `${skill.percentage}%`,
                      animation: `fillBar 1.5s ease-out`,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;