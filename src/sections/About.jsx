import { MapPin, Calendar, Briefcase, Award, Coffee, Rocket } from 'lucide-react';

const About = () => {
  const stats = [
    { 
      icon: Rocket,
      label: 'Projects Completed', 
      value: '3+',
      color: 'text-primary'
    },
    { 
      icon: Award,
      label: 'Certifications', 
      value: '3+',
      color: 'text-secondary'
    },
    { 
      icon: Coffee,
      label: 'Technologies', 
      value: '10+',
      color: 'text-accent'
    },
    { 
       icon: Briefcase,
      label: 'Open to Work', 
      value: 'Yes!',
      color: 'text-success'
    },
  ];

  return (
    <section id="about" className="py-20 bg-bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Crafting innovative solutions through code and creativity
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Professional Card */}
          <div className="animate-fade-in-left">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-20 rounded-3xl blur-3xl"></div>
              
              {/* Profile Card */}
              <div className="relative bg-bg-dark border border-primary/20 rounded-3xl p-8 shadow-2xl">
                {/* Avatar */}
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-5xl font-bold text-white shadow-lg">
                      AM
                    </div>
                    {/* Online Indicator */}
                    <div className="absolute bottom-2 right-2 w-5 h-5 bg-success rounded-full border-2 border-bg-dark"></div>
                  </div>
                </div>

                {/* Name & Title */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-text-primary mb-1">
                    Adnan Memon
                  </h3>
                  <p className="text-primary font-semibold">
                    Full Stack Developer
                  </p>
                </div>

                {/* Divider */}
                <div className="border-t border-primary/20 my-4"></div>

                {/* Info */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-text-secondary">
                    <MapPin className="text-primary flex-shrink-0" size={18} />
                    <span>Ahmedabad, Gujarat, India</span>
                  </div>
                  <div className="flex items-center gap-3 text-text-secondary">
                    <Calendar className="text-primary flex-shrink-0" size={18} />
                    <span>B.Sc CA & IT • 2022 - 2025</span>
                  </div>
                  <div className="flex items-center gap-3 text-text-secondary">
                    <Briefcase className="text-primary flex-shrink-0" size={18} />
                    <span>Available for Freelance</span>
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-primary/20 my-4"></div>

                {/* Tech Stack Pills */}
                <div>
                  <p className="text-text-muted text-sm mb-3 font-semibold">
                    PRIMARY STACK
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'Node.js', 'MongoDB', 'Tailwind'].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary border border-primary/30 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="animate-fade-in-right space-y-6">
            {/* Education */}
            <div className="bg-bg-dark p-6 rounded-xl border border-primary/20 hover:border-primary/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/20 rounded-lg flex-shrink-0">
                  <Award className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-text-primary mb-1">
                    Bachelor of Science (CA & IT)
                  </h3>
                  <p className="text-primary font-semibold mb-1">
                    K.S. School of Business Management and IT
                  </p>
                  <p className="text-text-secondary text-sm flex items-center gap-2">
                    <MapPin size={14} /> Ahmedabad, Gujarat, India • 2022 - 2025
                  </p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <p className="text-text-secondary leading-relaxed text-lg">
                I'm a passionate full-stack developer with expertise in building 
                scalable web applications. With a strong foundation in both 
                frontend and backend technologies, I create intelligent solutions 
                that solve real-world problems.
              </p>
              <p className="text-text-secondary leading-relaxed text-lg">
                Particularly interested in <span className="text-primary font-semibold">AI-driven applications</span> and 
                their potential to transform industries. I love turning complex 
                problems into simple, beautiful solutions.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {stats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={idx}
                    className="bg-bg-dark p-4 rounded-xl border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <Icon className={stat.color} size={20} />
                      </div>
                      <h4 className={`text-2xl font-bold ${stat.color}`}>
                        {stat.value}
                      </h4>
                    </div>
                    <p className="text-text-muted text-sm font-medium">
                      {stat.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;