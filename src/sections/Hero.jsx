import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { FaArrowRight, FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';

const Hero = () => {
    const scrollToContact = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="hero" className="min-h-screen flex items-center justify-center pt-20 pb-10 relative overflow-hidden">
            {/* Animated Background Orbs */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-20 right-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="animate-fade-in-up space-y-6">
                        <div className="space-y-4">
                            <h1 className="text-5xl md:text-6xl font-bold font-playfair leading-tight">
                                Hi, I'm <span className="gradient-text">Adnan Memon</span>
                            </h1>
                            <p className="text-xl text-primary font-semibold">
                                Full Stack Developer | AI Enthusiast | Tech Innovator
                            </p>
                            <p className="text-lg text-text-secondary leading-relaxed max-w-xl">
                                I build modern, responsive web applications with cutting-edge technologies. Passionate about creating seamless user experiences and solving complex problems through innovative solutions.
                            </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4 pt-4">
                            <button
                                onClick={scrollToContact}
                                className="px-8 py-3 bg-gradient-to-r from-primary to-primary-dark text-white rounded-full font-semibold flex items-center gap-2 hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
                            >
                                Get In Touch <FaArrowRight />
                            </button>
                            <ScrollLink
                                to="projects"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                className="px-8 py-3 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer"
                            >
                                View My Work
                            </ScrollLink>
                        </div>

                        {/* Quick Contact Links */}
                        <div className="flex flex-wrap gap-3 pt-6">
                            <a
                                href="mailto:memonadnan042@gmail.com"
                                className="group flex items-center gap-3 px-4 py-3 rounded-lg bg-primary/10 border border-primary/30 hover:bg-primary/20 transition-all duration-300"
                            >
                                <FaEnvelope className="text-primary group-hover:scale-110 transition-transform" />
                                <div>
                                    <p className="text-sm text-text-muted">Email</p>
                                    <p className="text-sm font-semibold">memonadnan042@gmail.com</p>
                                </div>
                            </a>

                            <a
                                href="tel:+917490959665"
                                className="group flex items-center gap-3 px-4 py-3 rounded-lg bg-success/10 border border-success/30 hover:bg-success/20 transition-all duration-300"
                            >
                                <FaPhone className="text-success group-hover:scale-110 transition-transform" />
                                <div>
                                    <p className="text-sm text-text-muted">Call</p>
                                    <p className="text-sm font-semibold">+91 7490959665</p>
                                </div>
                            </a>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-4 pt-6">
                            <a
                                href="https://linkedin.com/in/adnanmemon/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110"
                            >
                                <FaLinkedin size={24} />
                            </a>
                            <a
                                href="https://github.com/Adnan2410"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110"
                            >
                                <FaGithub size={24} />
                            </a>
                        </div>
                    </div>

                    {/* Right Side - Code Animation */}
                    <div className="hidden md:block animate-fade-in-right">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-20 blur-3xl rounded-3xl"></div>
                            <div className="relative bg-bg-surface border border-primary/20 rounded-2xl overflow-hidden shadow-2xl">
                                {/* Code Header */}
                                <div className="bg-bg-light px-4 py-3 flex gap-2 border-b border-primary/20">
                                    <div className="w-3 h-3 rounded-full bg-danger"></div>
                                    <div className="w-3 h-3 rounded-full bg-accent"></div>
                                    <div className="w-3 h-3 rounded-full bg-success"></div>
                                </div>

                                {/* Code Body */}
                                <div className="p-6 font-mono text-sm space-y-2 overflow-x-auto">
                                    <div className="code-line" style={{ animationDelay: '0s' }}>
                                        <span className="text-primary">const</span>{' '}
                                        <span className="text-secondary">developer</span> = {'{'}{' '}
                                    </div>
                                    <div className="code-line ml-4" style={{ animationDelay: '0.1s' }}>
                                        <span className="text-accent">name</span>: <span className="text-success">"Adnan Memon"</span>,
                                    </div>
                                    <div className="code-line ml-4" style={{ animationDelay: '0.2s' }}>
                                        <span className="text-accent">passion</span>: <span className="text-success">"Full Stack"</span>,
                                    </div>
                                    <div className="code-line ml-4" style={{ animationDelay: '0.3s' }}>
                                        <span className="text-accent">location</span>: <span className="text-success">"Ahmedabad, India"</span>,
                                    </div>
                                    <div className="code-line ml-4" style={{ animationDelay: '0.4s' }}>
                                        <span className="text-accent">skills</span>: [<span className="text-success">"React"</span>, <span className="text-success">"Node.js"</span>, <span className="text-success">"AI"</span>],
                                    </div>
                                    <div className="code-line" style={{ animationDelay: '0.5s' }}>
                                        {'}'}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="text-primary text-sm font-semibold mb-2">Scroll to explore</div>
                <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
                    <div className="w-1 h-2 bg-primary rounded-full mt-2 animate-bounce"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;