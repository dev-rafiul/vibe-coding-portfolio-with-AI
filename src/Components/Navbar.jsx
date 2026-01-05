import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 nav-gravity">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo/Brand - Gravitational Center */}
          <div className="flex-shrink-0">
            <a href="#home" className="flex items-center gap-4 group">
              <div className="relative floating">
                {/* Central Mass */}
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center relative">
                  <span className="gravity-font text-white font-bold text-xl">R</span>
                  {/* Orbital Ring */}
                  <div className="absolute inset-0 w-12 h-12 border-2 border-indigo-400/50 rounded-full orbital opacity-60"></div>
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  RAFIUL
                </div>
                <div className="gravity-font text-xs text-slate-400 tracking-widest">
                  GRAVITY.DEV
                </div>
              </div>
            </a>
          </div>

          {/* Desktop Menu - Floating Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-2">
              {[
                { name: 'Home', href: '#home' },
                { name: 'About', href: '#about' },
                { name: 'Skills', href: '#skills' },
                { name: 'Education', href: '#education' },
                { name: 'Experience', href: '#experience' },
                { name: 'Projects', href: '#projects' },
                { name: 'Contact', href: '#contact' }
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="relative px-6 py-3 text-sm font-medium text-slate-300 hover:text-indigo-400 transition-all duration-300 group floating-fast"
                >
                  <span className="relative z-10">{item.name}</span>
                  {/* Gravitational Field Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100"></div>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400 group-hover:w-full transition-all duration-300"></div>
                  {/* Orbital Indicator */}
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-indigo-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300"></div>
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="relative p-3 text-slate-300 hover:text-indigo-400 focus:outline-none focus:text-indigo-400 transition-colors duration-300 floating"
            >
              <div className="w-6 h-6 relative">
                <span className={`absolute block w-full h-0.5 bg-current transform transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 top-3' : 'top-1'
                }`}></span>
                <span className={`absolute block w-full h-0.5 bg-current transform transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : 'top-3'
                }`}></span>
                <span className={`absolute block w-full h-0.5 bg-current transform transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 top-3' : 'top-5'
                }`}></span>
              </div>
              {/* Gravitational Field */}
              <div className="absolute inset-0 border border-indigo-400/30 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>

        {/* Mobile Menu - Zero Gravity Panel */}
        <div className={`md:hidden transition-all duration-500 ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
          <div className="px-2 pt-4 pb-6 space-y-2 gravity-card mt-4 mx-2">
            {[
              { name: 'Home', href: '#home' },
              { name: 'About', href: '#about' },
              { name: 'Skills', href: '#skills' },
              { name: 'Education', href: '#education' },
              { name: 'Experience', href: '#experience' },
              { name: 'Projects', href: '#projects' },
              { name: 'Contact', href: '#contact' }
            ].map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                onClick={closeMenu}
                className="block px-6 py-4 text-base font-medium text-slate-300 hover:text-indigo-400 hover:bg-indigo-500/10 transition-all duration-300 rounded-lg group"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <span className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full opacity-50 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-300"></div>
                  {item.name}
                  {/* Orbital Trail */}
                  <div className="flex-1 h-px bg-gradient-to-r from-indigo-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Gravitational Wave Effect */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-400/50 to-transparent">
        <div className="w-32 h-full bg-gradient-to-r from-transparent via-indigo-400 to-transparent animate-pulse floating"></div>
      </div>
    </nav>
  );
};

export default Navbar;
