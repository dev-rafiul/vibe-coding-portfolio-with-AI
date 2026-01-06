const Experience = () => (
  <section id="experience" className="py-20 px-4 bg-gray-50">
    <div className="max-w-6xl mx-auto">
      <h2 className="section-title">Professional Experience</h2>
      
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-blue-200"></div>
        
        <div className="space-y-12">
          {/* Experience 1 */}
          <div className="relative flex items-center">
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>
            <div className="ml-12 md:ml-0 md:w-1/2 md:pr-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">Frontend Developer</h3>
                    <p className="text-blue-600 font-semibold">Learn On.</p>
                  </div>
                  <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full mt-2 sm:mt-0">
                    Jan 2025 - Present
                  </span>
                </div>
                <ul className="text-gray-600 space-y-2">
                  <li>• Developed responsive web applications using React and Tailwind CSS</li>
                  <li>• Collaborated with backend team to integrate RESTful APIs</li>
                  <li>• Improved website performance by 40% through code optimization</li>
                  <li>• Mentored junior developers and conducted code reviews</li>
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">React</span>
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Node.js</span>
                  <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">Tailwind</span>
                </div>
              </div>
            </div>
          </div>

          {/* Experience 2 */}
          <div className="relative flex items-center md:justify-end">
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-green-600 rounded-full border-4 border-white shadow-lg z-10"></div>
            <div className="ml-12 md:ml-0 md:w-1/2 md:pl-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">Full Stack Developer (Freelance)</h3>
                    <p className="text-green-600 font-semibold"></p>
                  </div>
                  <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full mt-2 sm:mt-0">
                    Jun 2023 - Dec 2023
                  </span>
                </div>
                <ul className="text-gray-600 space-y-2">
                  
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">MERN Stack</span>
                  <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded">Firebase</span>
                  <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded">JWT</span>
                </div>
              </div>
            </div>
          </div>

          {/* Experience 3 */}
          <div className="relative flex items-center">
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-purple-600 rounded-full border-4 border-white shadow-lg z-10"></div>
            <div className="ml-12 md:ml-0 md:w-1/2 md:pr-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800"></h3>
                    <p className="text-purple-600 font-semibold"></p>
                  </div>
                  <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full mt-2 sm:mt-0">
                    Jan 2023 - May 2023
                  </span>
                </div>
                <ul className="text-gray-600 space-y-2">
                  <li>• Assisted in developing client websites using HTML, CSS, and JavaScript</li>
                  <li>• Learned modern development practices and version control with Git</li>
                  <li>• Participated in daily standups and agile development process</li>
                  <li>• Fixed bugs and implemented new features under senior guidance</li>
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded">HTML/CSS</span>
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">JavaScript</span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded">Git</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills gained through experience */}
      <div className="mt-16 bg-white p-8 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Key Achievements</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-gray-800 mb-2">15+ Projects</h4>
            <p className="text-gray-600">Successfully completed and delivered</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-gray-800 mb-2">100% Satisfaction</h4>
            <p className="text-gray-600">Client satisfaction rate</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-gray-800 mb-2">40% Performance</h4>
            <p className="text-gray-600">Average improvement in web performance</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
