import { skillsData } from '../data/Skills';
import { useState, useEffect } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => observer.disconnect();
  }, []);

  const SkillBar = ({ skill, index }) => (
    <div className="mb-8" key={skill.name}>
      <div className="flex justify-between items-center mb-4">
        <span className="text-slate-300 font-medium tracking-wider">{skill.name}</span>
        <span className="gravity-font text-indigo-400 text-sm">{skill.level}%</span>
      </div>
      <div className="skill-bar">
        <div
          className="skill-progress"
          style={{
            width: isVisible ? `${skill.level}%` : '0%',
            transitionDelay: `${index * 200}ms`
          }}
        ></div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 px-4 relative overflow-hidden">
      {/* Gravitational Wave Background */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute border border-indigo-400 rounded-full"
            style={{
              width: `${200 + i * 100}px`,
              height: `${200 + i * 100}px`,
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              animation: `gravitationalWave ${4 + i * 2}s ease-out infinite ${i * 0.5}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="gravity-font text-indigo-400 text-sm tracking-widest mb-6 floating">
            [ Gravitational Skill Analysis ] • [ Measuring Force Fields... ]
          </div>
          <h2 className="section-title">Skill Gravitational Fields</h2>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Frontend Gravity Well */}
          <div className="gravity-card p-8 floating-slow">
            <div className="flex items-center mb-10">
              <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full flex items-center justify-center mr-6 relative floating">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div className="absolute inset-0 border-2 border-indigo-400/50 rounded-full orbital"></div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-indigo-400 mb-2">Frontend</h3>
                <p className="text-slate-400 gravity-font text-sm">User Interface Gravity</p>
              </div>
            </div>
            {skillsData.frontend.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} index={index} />
            ))}
          </div>

          {/* Backend Gravity Well */}
          <div className="gravity-card p-8 floating">
            <div className="flex items-center mb-10">
              <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mr-6 relative floating-fast">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
                <div className="absolute inset-0 border-2 border-green-400/50 rounded-full orbital" style={{animationDirection: 'reverse'}}></div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-green-400 mb-2">Backend</h3>
                <p className="text-slate-400 gravity-font text-sm">Server Gravitational Core</p>
              </div>
            </div>
            {skillsData.backend.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} index={index} />
            ))}
          </div>

          {/* Tools & Orbital Systems */}
          <div className="gravity-card p-8 floating-slow">
            <div className="flex items-center mb-10">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mr-6 relative floating">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div className="absolute inset-0 border-2 border-purple-400/50 rounded-full planetary"></div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-purple-400 mb-2">Tools</h3>
                <p className="text-slate-400 gravity-font text-sm">Development Satellites</p>
              </div>
            </div>
            {skillsData.tools.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </div>

        {/* Extended Technology Constellation */}
        <div className="mt-20">
          <div className="gravity-card p-10 floating">
            <h3 className="text-3xl font-semibold text-center text-indigo-400 mb-12">
              Technology Constellation
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[
                'TypeScript', 'Next.js', 'Redux', 'GraphQL', 'Docker', 'AWS', 
                'Jest', 'Cypress', 'Sass/SCSS', 'Material-UI', 'Socket.io', 'JWT'
              ].map((tech, index) => (
                <div 
                  key={tech}
                  className="relative p-6 bg-slate-800/50 border border-indigo-400/30 text-center group hover:border-indigo-400 transition-all duration-500 rounded-lg floating-fast"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                  <span className="gravity-font text-sm text-slate-300 group-hover:text-indigo-400 relative z-10 transition-colors duration-300">
                    {tech}
                  </span>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400 group-hover:w-full transition-all duration-500"></div>
                  {/* Orbital Indicator */}
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-indigo-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Gravitational Field Status */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 gravity-card p-8 floating-slow">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
              <span className="gravity-font text-green-400 text-sm">SKILLS_CALIBRATED</span>
            </div>
            <div className="w-px h-8 bg-indigo-400/30"></div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-indigo-400 rounded-full animate-pulse"></div>
              <span className="gravity-font text-indigo-400 text-sm">GRAVITY_FIELD_STABLE</span>
            </div>
            <div className="w-px h-8 bg-indigo-400/30"></div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-purple-400 rounded-full animate-pulse"></div>
              <span className="gravity-font text-purple-400 text-sm">READY_FOR_ORBIT</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
