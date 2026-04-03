import React from 'react';
import { FaGraduationCap, FaMapMarkerAlt, FaCalendar } from 'react-icons/fa';

const About = () => {
  const stats = [
    { label: 'Years Learning', value: '2+' },
    { label: 'Projects Done', value: '5+' },
    { label: 'Technologies', value: '10+' },
    { label: 'Satisfaction', value: '100%' },
  ];

  return (
    <section id="about" className="py-20 bg-bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Crafting innovative solutions through code and creativity
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Image/Avatar */}
          <div className="animate-fade-in-left">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-20 rounded-3xl blur-3xl"></div>
              <div className="relative w-80 h-80 bg-gradient-to-br from-primary to-secondary rounded-3xl flex items-center justify-center shadow-2xl overflow-hidden">
                <div className="text-9xl text-white opacity-80">
                  <FaGraduationCap />
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="animate-fade-in-right space-y-6">
            {/* Education */}
            <div className="bg-bg-dark p-6 rounded-xl border border-primary/20 hover:border-primary/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <FaGraduationCap className="text-primary text-2xl mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-text-primary mb-2">
                    Bachelor of Science (CA & IT)
                  </h3>
                  <p className="text-primary font-semibold mb-1">
                    K.S. School of Business Management and IT
                  </p>
                  <p className="text-text-secondary text-sm flex items-center gap-2">
                    <FaMapMarkerAlt /> Ahmedabad, Gujarat, India
                  </p>
                  <p className="text-text-muted text-sm flex items-center gap-2 mt-1">
                    <FaCalendar /> 2022 - 2025
                  </p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <p className="text-text-secondary leading-relaxed text-lg">
                I'm a passionate full-stack developer with expertise in building scalable web applications. With a strong foundation in both frontend and backend technologies, I create intelligent solutions that solve real-world problems.
              </p>
              <p className="text-text-secondary leading-relaxed text-lg">
                My journey in tech started with a curiosity about how things work on the internet, and it has evolved into a professional pursuit of excellence in software development. I'm particularly interested in AI-driven applications and their potential to transform industries.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-bg-dark p-4 rounded-lg border border-primary/20 hover:border-primary/50 transition-all duration-300 text-center"
                >
                  <h4 className="text-3xl font-bold gradient-text mb-1">{stat.value}</h4>
                  <p className="text-text-muted text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;