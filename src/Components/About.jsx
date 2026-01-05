const About = () => (
  <section id="about" className="py-20 px-4 relative overflow-hidden">
    {/* Gravitational Field Grid */}
    <div className="absolute inset-0 opacity-10">
      <div className="grid grid-cols-8 gap-8 h-full">
        {[...Array(64)].map((_, i) => (
          <div key={i} className="border border-indigo-400/20 rounded-full floating" style={{animationDelay: `${i * 0.1}s`}}></div>
        ))}
      </div>
    </div>

    <div className="max-w-6xl mx-auto relative z-10">
      <div className="text-center mb-20">
        <div className="gravity-font text-indigo-400 text-sm tracking-widest mb-6 floating">
          [ Gravitational Analysis ] • [ Loading Personal Data Matrix... ]
        </div>
        <h2 className="section-title">About the Gravity Field</h2>
      </div>
      
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Personal Gravity Wells */}
        <div className="space-y-8">
          <div className="gravity-card p-8 floating-slow">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-6 h-6 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full animate-pulse"></div>
              <h3 className="text-2xl font-semibold text-indigo-400">Origin Story</h3>
            </div>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                My journey into the digital gravity field began with curiosity about how web universes are constructed. 
                What started as basic HTML/CSS planetary formation evolved into mastering the gravitational forces of 
                React.js, Node.js, and database orbital mechanics. Through continuous learning cycles, I've developed 
                the ability to manipulate digital gravity and create weightless user experiences.
              </p>
            </div>
          </div>

          <div className="gravity-card p-8 floating">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-6 h-6 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full animate-pulse"></div>
              <h3 className="text-2xl font-semibold text-purple-400">Core Gravitational Forces</h3>
            </div>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                I specialize in bending the laws of digital physics to solve complex problems and materialize ideas 
                through code. Frontend development excites my gravitational field - crafting zero-gravity interfaces 
                and seamless orbital user experiences. Backend architecture fascinates me too, especially building 
                robust API gravitational systems and database planetary networks.
              </p>
            </div>
          </div>

          <div className="gravity-card p-8 floating-fast">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-6 h-6 bg-gradient-to-r from-cyan-400 to-indigo-400 rounded-full animate-pulse"></div>
              <h3 className="text-2xl font-semibold text-cyan-400">Beyond the Event Horizon</h3>
            </div>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                When not manipulating gravitational fields, I engage in physical fitness to maintain optimal 
                performance and mental clarity. I'm passionate about continuous learning - exploring new 
                technologies, studying gravitational documentation, and contributing to open-source cosmic projects. 
                Balance between work and personal gravity wells ensures sustained creativity and innovation.
              </p>
            </div>
          </div>
        </div>

        {/* Gravitational Metrics & Orbital Data */}
        <div className="space-y-8">
          {/* Performance Dashboard */}
          <div className="gravity-card p-8 floating-slow">
            <h3 className="text-2xl font-semibold text-center text-indigo-400 mb-8">Gravitational Metrics</h3>
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full flex items-center justify-center relative floating">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                  <div className="absolute inset-0 border-2 border-indigo-400/50 rounded-full orbital"></div>
                </div>
                <div>
                  <p className="text-2xl font-bold text-indigo-400">3.7+ Years</p>
                  <p className="text-slate-400 gravity-font">Gravitational Experience</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center relative floating-fast">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div className="absolute inset-0 border-2 border-green-400/50 rounded-full orbital" style={{animationDirection: 'reverse'}}></div>
                </div>
                <div>
                  <p className="text-2xl font-bold text-green-400">25+ Projects</p>
                  <p className="text-slate-400 gravity-font">Successful Launches</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center relative floating">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <div className="absolute inset-0 border-2 border-purple-400/50 rounded-full planetary"></div>
                </div>
                <div>
                  <p className="text-2xl font-bold text-purple-400">∞ Learning</p>
                  <p className="text-slate-400 gravity-font">Continuous Evolution</p>
                </div>
              </div>
            </div>
          </div>

          {/* Gravitational Interests */}
          <div className="gravity-card p-8 floating">
            <h4 className="text-xl font-semibold text-cyan-400 mb-6">Active Gravitational Fields</h4>
            <div className="grid grid-cols-2 gap-4">
              {[
                'Zero-G Fitness', 'Quantum Learning', 'Open Source', 'Data Orbits',
                'Problem Solving', 'Code Architecture', 'UI Gravity', 'System Optimization'
              ].map((field, index) => (
                <div key={field} className="flex items-center gap-3 p-4 bg-slate-800/30 border border-indigo-400/20 rounded-lg floating-fast" style={{animationDelay: `${index * 0.2}s`}}>
                  <div className="w-3 h-3 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full animate-pulse"></div>
                  <span className="gravity-font text-sm text-slate-300">{field}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Gravitational Status Panel */}
          <div className="gravity-card p-6 floating-slow">
            <div className="flex items-center justify-between mb-4">
              <div className="gravity-font text-sm text-slate-400">GRAVITATIONAL_STATUS:</div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="gravity-font text-green-400 text-sm">FIELD_STABLE</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between text-xs gravity-font">
                <span className="text-slate-400">CREATIVITY_LEVEL:</span>
                <span className="text-indigo-400">95%</span>
              </div>
              <div className="flex justify-between text-xs gravity-font">
                <span className="text-slate-400">PROBLEM_SOLVING:</span>
                <span className="text-green-400">OPTIMIZED</span>
              </div>
              <div className="flex justify-between text-xs gravity-font">
                <span className="text-slate-400">LEARNING_MODE:</span>
                <span className="text-purple-400">ACTIVE</span>
              </div>
              <div className="flex justify-between text-xs gravity-font">
                <span className="text-slate-400">COLLABORATION:</span>
                <span className="text-cyan-400">ENABLED</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
