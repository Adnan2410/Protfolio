import React from 'react';
import { FaCertificate } from 'react-icons/fa';

const Certifications = () => {
  const certifications = [
    {
      title: 'Oracle Cloud Infrastructure Foundation Associate',
      issuer: 'Oracle',
      status: 'Verified',
      icon: '☁️',
    },
    {
      title: 'Complete Node.js Bootcamp',
      issuer: 'Professional Development',
      status: 'Completed',
      icon: '⚙️',
    },
    {
      title: 'Master React.js with AI',
      issuer: 'Advanced Course',
      status: 'Completed',
      icon: '⚛️',
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-4">
            <span className="gradient-text">Certifications & Achievements</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Professional credentials and accomplishments
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="animate-fade-in-up group bg-bg-surface p-8 rounded-xl border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 text-center"
              style={{ animationDelay: `${idx * 0.15}s` }}
            >
              <div className="flex justify-center mb-6">
                <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                  {cert.icon}
                </div>
              </div>

              <h3 className="text-lg font-bold text-text-primary mb-3 leading-relaxed">
                {cert.title}
              </h3>

              <p className="text-text-muted text-sm mb-4">{cert.issuer}</p>

              <div className="inline-block px-4 py-2 bg-success/20 text-success border border-success/30 rounded-full text-sm font-semibold">
                <FaCertificate className="inline mr-2" />
                {cert.status}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;