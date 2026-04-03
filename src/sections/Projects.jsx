import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaCheckCircle } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'ResumeForge',
      subtitle: 'AI-driven full-stack MERN application',
      description:
        'An intelligent resume optimization platform powered by Gemini AI. Features automated resume analysis, ATS compatibility checking, and job-specific customization.',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Gemini AI', 'JWT Auth'],
      highlights: [
        'Secure JWT authentication',
        'AI-powered resume scoring',
        'Responsive dashboard',
        'ATS optimization',
      ],
      link: 'https://resume-forge-six.vercel.app/',
      github: 'https://github.com/Adnan2410/ResumeForge',
    },
    {
      title: 'ExpenseTracker',
      subtitle: 'Personal finance management platform',
      description:
        'A comprehensive expense tracking solution with real-time budget monitoring, spending analytics, and savings goal visualization.',
      technologies: ['React.js', 'Tailwind CSS', 'Node.js', 'Recharts', 'MongoDB'],
      highlights: [
        'Income/Expense tracking',
        'Advanced analytics dashboard',
        'Budget monitoring',
        'Custom emoji picker',
      ],
      link: 'https://expense-tracker-src7.vercel.app/',
      github: 'https://github.com/Adnan2410/ExpenseTracker',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Showcase of my best work and innovative solutions
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group animate-fade-in-up bg-bg-dark rounded-xl border border-primary/20 overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20"
              style={{ animationDelay: `${idx * 0.2}s` }}
            >
              {/* Project Image/Placeholder */}
              <div className="relative h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <div className="text-6xl text-primary/40 group-hover:scale-110 transition-transform duration-300">
                  💻
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-text-primary mb-2 group-hover:gradient-text transition-all">
                    {project.title}
                  </h3>
                  <p className="text-primary font-semibold text-sm mb-2">
                    {project.subtitle}
                  </p>
                  <p className="text-text-secondary leading-relaxed text-sm">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded border border-primary/30 hover:bg-primary/20 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Highlights */}
                <div className="space-y-2 border-t border-primary/20 pt-4">
                  {project.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-text-secondary text-sm">
                      <FaCheckCircle className="text-success" />
                      {highlight}
                    </div>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4">
                  <a
                    href={project.link}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary hover:bg-primary-dark text-white rounded-lg transition-colors"
                  >
                    <FaExternalLinkAlt /> View
                  </a>
                  <a
                    href={project.github}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-primary text-primary hover:bg-primary hover:text-white rounded-lg transition-colors"
                  >
                    <FaGithub /> Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;