import { useState, useEffect } from 'react';
import rafiul from '../../public/face-of-rafiul.jpg'
const Hero = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Create gravitational particles
    const particleArray = [];
    for (let i = 0; i < 30; i++) {
      particleArray.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        delay: Math.random() * 10,
        type: ['small', 'medium', 'large'][Math.floor(Math.random() * 3)]
      });
    }
    setParticles(particleArray);
  }, []);

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center relative overflow-hidden">
      {/* Gravitational Field Background */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map(particle => (
          <div
            key={particle.id}
            className={`particle particle-${particle.type} absolute`}
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animationDelay: `${particle.delay}s`
            }}
          />
        ))}
      </div>

      {/* Gravitational Waves */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="gravity-field">
          <div className="w-96 h-96 border border-indigo-500/20 rounded-full animate-pulse"></div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10 mt-39">
        {/* Central Gravity Well - Profile */}
        <div className="mb-16 relative gravity-field">
          {/* Orbital Rings */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-80 h-80 border border-indigo-400/30 rounded-full orbital opacity-50"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-96 h-96 border border-purple-400/20 rounded-full orbital opacity-30" style={{animationDuration: '25s', animationDirection: 'reverse'}}></div>
          </div>
          
          {/* Profile Image - Central Mass */}
          <div className="relative inline-block floating">
            <div className="w-64 h-64 rounded-full mx-auto relative">
              <img 
                src={rafiul} 
                alt="Gravity Developer" 
                className="w-full h-full rounded-full object-cover relative z-10 border-4 border-indigo-400/50"
                style={{
                  filter: 'drop-shadow(0 0 40px rgba(99, 102, 241, 0.6))',
                  boxShadow: '0 0 80px rgba(99, 102, 241, 0.4), inset 0 0 40px rgba(99, 102, 241, 0.2)'
                }}
              />
              {/* Gravitational Glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Identity & Gravity Field Info */}
        <div className="mb-12 floating-slow">
          <div className="gravity-font text-sm text-indigo-400 mb-4 tracking-widest uppercase">
            [ Gravitational Field Active ] • [ Mass: Developer ] • [ Force: Infinite ]
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              RAFIUL
            </span>
            <div className="text-4xl md:text-5xl text-slate-300 mt-2 font-light">
              Gravity Developer
            </div>
          </h1>
          
          <div className="text-xl md:text-2xl text-indigo-300 mb-4 font-medium">
            Full Stack • Zero Gravity Specialist
          </div>
          
          <p className="text-lg text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Manipulating digital gravity to create weightless user experiences. 
            Specializing in React orbital mechanics, Node.js gravitational fields, 
            and database systems that defy conventional physics.
          </p>
        </div>

        {/* Action Buttons - Floating in Zero Gravity */}
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-20 floating-fast">
          <a 
            href="/resume.pdf" 
            download 
            className="btn group relative"
          >
            <span className="flex items-center gap-3">
              <svg className="w-6 h-6 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume
            </span>
          </a>
          <a 
            href="#contact" 
            className="btn-outline group"
          >
            <span className="group-hover:animate-pulse">Enter Orbit</span>
          </a>
        </div>

        {/* Social Orbital System */}
        <div className="relative mb-16">
          <div className="text-indigo-400 gravity-font text-sm mb-8 tracking-widest uppercase">
            [ Social Network Constellation ]
          </div>
          
          {/* Central Hub */}
          <div className="social-orbit relative mx-auto">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-6 h-6 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full animate-pulse"></div>
              <div className="absolute inset-0 w-6 h-6 bg-indigo-400 rounded-full animate-ping opacity-30"></div>
            </div>

            {/* Orbiting Social Links */}
            <a 
              href="https://github.com/dev-rafiul" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link orbital"
              style={{top: '0px', left: '50%', marginLeft: '-24px'}}
              aria-label="GitHub"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            
            <a 
              href="https://linkedin.com/in/dev-rafi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link orbital"
              style={{top: '50%', right: '0px', marginTop: '-24px', animationDelay: '-5s'}}
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            
            <a 
              href="https://twitter.com/rafiulX" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link orbital"
              style={{bottom: '0px', left: '50%', marginLeft: '-24px', animationDelay: '-10s'}}
              aria-label="Twitter"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
            
            <a 
              href="https://facebook.com/devrafiul0" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link orbital"
              style={{top: '50%', left: '0px', marginTop: '-24px', animationDelay: '-15s'}}
              aria-label="Facebook"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Gravitational Status */}
        <div className="gravity-font text-xs text-slate-500 tracking-widest floating">
          <div className="flex justify-center items-center gap-8">
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              GRAVITY_FIELD_STABLE
            </span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse"></div>
              ORBITAL_MECHANICS_ACTIVE
            </span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
              ZERO_GRAVITY_MODE
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
