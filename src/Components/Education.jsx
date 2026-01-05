const Education = () => (
  <section id="education" className="py-20 px-4 relative overflow-hidden">
    {/* Digital Rain Background */}
    <div className="absolute inset-0 opacity-5">
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="absolute text-cyan-400 font-mono text-xs animate-pulse"
          style={{
            left: `${i * 3.33}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${i * 0.2}s`
          }}
        >
          {Math.random().toString(2).substr(2, 8)}
        </div>
      ))}
    </div>

    <div className="max-w-6xl mx-auto relative z-10">
      <div className="text-center mb-16">
        <div className="robot-font text-cyan-400 text-sm tracking-widest mb-4">
          [ ACADEMIC RECORDS ] - [ LOADING EDUCATION DATABASE... ]
        </div>
        <h2 className="section-title">EDUCATION_PROTOCOLS</h2>
      </div>
      
      <div className="space-y-12">
        {/* Bachelor's Degree */}
        <div className="holo-card p-8 relative">
          <div className="absolute top-4 right-4">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          </div>
          
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
            <div className="flex items-center gap-4 mb-4 lg:mb-0">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold robot-font text-cyan-400">BSc_COMPUTER_SCIENCE.EXE</h3>
                <p className="text-lg text-purple-400 font-mono">University_of_Technology</p>
              </div>
            </div>
            <div className="text-right">
              <div className="robot-font text-gray-300 font-medium">2020.01 - 2024.12</div>
              <div className="text-sm text-green-400 font-mono">CGPA: 3.75/4.00</div>
            </div>
          </div>
          
          <div className="space-y-4 font-mono text-gray-300">
            <div>
              <span className="text-yellow-400 robot-font">[CORE_MODULES]:</span> 
              <span className="ml-2">Data_Structures • Algorithms • Database_Systems • Software_Engineering • Web_Development • OOP • Network_Protocols</span>
            </div>
            <div>
              <span className="text-cyan-400 robot-font">[PROJECTS]:</span> 
              <span className="ml-2">Developed quantum web applications using advanced frameworks, participated in digital hackathons, contributed to open-source repositories.</span>
            </div>
          </div>
        </div>

        {/* HSC */}
        <div className="holo-card p-8 relative">
          <div className="absolute top-4 right-4">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          </div>
          
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
            <div className="flex items-center gap-4 mb-4 lg:mb-0">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold robot-font text-green-400">HSC_SCIENCE.PROTOCOL</h3>
                <p className="text-lg text-purple-400 font-mono">Science_Academy_Institute</p>
              </div>
            </div>
            <div className="text-right">
              <div className="robot-font text-gray-300 font-medium">2018.01 - 2020.12</div>
              <div className="text-sm text-green-400 font-mono">GPA: 5.00/5.00</div>
            </div>
          </div>
          
          <div className="space-y-4 font-mono text-gray-300">
            <div>
              <span className="text-yellow-400 robot-font">[SPECIALIZATION]:</span> 
              <span className="ml-2">Science_Background</span>
            </div>
            <div>
              <span className="text-cyan-400 robot-font">[CORE_SUBJECTS]:</span> 
              <span className="ml-2">Physics • Chemistry • Mathematics • Biology • ICT_Systems</span>
            </div>
            <div>
              <span className="text-purple-400 robot-font">[FOUNDATION]:</span> 
              <span className="ml-2">Established strong mathematical and logical processing foundations, essential for advanced programming algorithms and problem-solving protocols.</span>
            </div>
          </div>
        </div>

        {/* Certifications Matrix */}
        <div className="holo-card p-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-bold robot-font text-purple-400">CERTIFICATION_MATRIX</h3>
              <p className="text-gray-400 font-mono">Digital Learning Protocols</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {[
                { name: 'React_Advanced_Protocols', provider: 'Udemy_Academy', year: '2023' },
                { name: 'Node.js_Developer_Certification', provider: 'Coursera_Institute', year: '2023' },
                { name: 'JavaScript_Algorithms_Matrix', provider: 'freeCodeCamp_Network', year: '2022' }
              ].map((cert) => (
                <div key={cert.name} className="flex items-start gap-4 p-4 bg-black/30 border border-cyan-400/20">
                  <div className="w-3 h-3 bg-green-400 rounded-full mt-2 animate-pulse"></div>
                  <div>
                    <h4 className="font-semibold robot-font text-cyan-400">{cert.name}</h4>
                    <p className="text-sm text-gray-400 font-mono">{cert.provider} • {cert.year}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-6">
              {[
                { name: 'MongoDB_Database_Systems', provider: 'MongoDB_University', year: '2023' },
                { name: 'Git_Version_Control_Master', provider: 'Udemy_Academy', year: '2022' },
                { name: 'Responsive_Web_Design_Protocol', provider: 'freeCodeCamp_Network', year: '2022' }
              ].map((cert) => (
                <div key={cert.name} className="flex items-start gap-4 p-4 bg-black/30 border border-cyan-400/20">
                  <div className="w-3 h-3 bg-green-400 rounded-full mt-2 animate-pulse"></div>
                  <div>
                    <h4 className="font-semibold robot-font text-cyan-400">{cert.name}</h4>
                    <p className="text-sm text-gray-400 font-mono">{cert.provider} • {cert.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* System Status */}
      <div className="mt-12 text-center">
        <div className="inline-flex items-center gap-6 holo-card p-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="robot-font text-green-400 text-sm">EDUCATION_COMPLETE</span>
          </div>
          <div className="w-px h-6 bg-cyan-400/30"></div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
            <span className="robot-font text-cyan-400 text-sm">CONTINUOUS_LEARNING_ACTIVE</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Education;
