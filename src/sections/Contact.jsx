import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaLinkedin, FaGithub, FaWhatsapp, FaSpinner } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = ({ onSuccess, onError }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    phone: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email',
      content: 'memonadnan042@gmail.com',
      link: 'mailto:memonadnan042@gmail.com',
    },
    {
      icon: FaPhone,
      title: 'Phone',
      content: '+91 7490959665',
      link: 'tel:+917490959665',
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Location',
      content: 'Ahmedabad, Gujarat, India',
    },
    {
      icon: FaClock,
      title: 'Response Time',
      content: 'Usually within 24 hours',
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);

      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          to_email: 'memonadnan0421@gmail.com',
          from_name: formData.name,
          from_email: formData.email,
          reply_to: formData.email,        // ✅ Add this line only
          subject: formData.subject,
          phone: formData.phone,
          message: formData.message,
          sent_date: new Date().toLocaleString(),
        }
      );

      setFormData({
        name: '',
        email: '',
        subject: '',
        phone: '',
        message: '',
      });

      onSuccess();
    } catch (error) {
      console.error('Error sending email:', error);
      onError('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-4">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Have a project or question? I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6 animate-fade-in-left">
            {contactInfo.map((info, idx) => {
              const Icon = info.icon;
              return (
                <div
                  key={idx}
                  className="bg-bg-dark p-6 rounded-xl border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/20 rounded-lg flex-shrink-0">
                      <Icon className="text-primary text-xl" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-text-primary mb-2">
                        {info.title}
                      </h4>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-primary hover:text-primary-light transition-colors font-semibold"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-text-secondary">{info.content}</p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Social Links */}
            <div className="bg-bg-dark p-6 rounded-xl border border-primary/20">
              <h4 className="text-lg font-semibold text-text-primary mb-4">
                Connect With Me
              </h4>
              <div className="grid grid-cols-4 gap-3">
                <a
                  href="https://linkedin.com/in/adnanmemon11/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-primary/10 text-primary hover:bg-primary hover:text-white rounded-lg transition-all duration-300 hover:scale-110 flex items-center justify-center"
                  title="LinkedIn"
                >
                  <FaLinkedin size={20} />
                </a>
                <a
                  href="https://github.com/Adnan2410"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-primary/10 text-primary hover:bg-primary hover:text-white rounded-lg transition-all duration-300 hover:scale-110 flex items-center justify-center"
                  title="GitHub"
                >
                  <FaGithub size={20} />
                </a>
                <a
                  href="mailto:memonadnan042@gmail.com"
                  className="p-3 bg-danger/10 text-danger hover:bg-danger hover:text-white rounded-lg transition-all duration-300 hover:scale-110 flex items-center justify-center"
                  title="Email"
                >
                  <FaEnvelope size={20} />
                </a>
                <a
                  href="https://wa.me/917490959665"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-success/10 text-success hover:bg-success hover:text-white rounded-lg transition-all duration-300 hover:scale-110 flex items-center justify-center"
                  title="WhatsApp"
                >
                  <FaWhatsapp size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 animate-fade-in-right">
            <form onSubmit={handleSubmit} className="bg-bg-dark p-8 rounded-xl border border-primary/20 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-text-primary font-semibold mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Full Name"
                    required
                    className="form-input"
                  />
                </div>

                <div>
                  <label className="block text-text-primary font-semibold mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className="form-input"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-text-primary font-semibold mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What is this about?"
                    required
                    className="form-input"
                  />
                </div>

                <div>
                  <label className="block text-text-primary font-semibold mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXXXXXXX"
                    className="form-input"
                  />
                </div>
              </div>

              <div>
                <label className="block text-text-primary font-semibold mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or inquiry..."
                  rows="6"
                  required
                  className="form-input resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full px-8 py-3 bg-gradient-to-r from-primary to-primary-dark text-white rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <FaSpinner className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>Send Message</>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;