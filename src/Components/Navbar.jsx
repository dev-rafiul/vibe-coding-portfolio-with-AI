import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,300;1,400&family=Montserrat:wght@400;500;600;700&display=swap');

        .logo-main {
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          font-size: 1.35rem;
          letter-spacing: 0.18em;
          color: #fff;
          line-height: 1;
        }

        .logo-sub {
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          font-weight: 300;
          font-size: 0.75rem;
          color: rgba(255,255,255,0.6);
          letter-spacing: 0.12em;
          display: block;
          text-align: center;
          margin-top: 1px;
        }

        .nav-link {
          font-family: 'Montserrat', sans-serif;
          font-weight: 500;
          font-size: 0.82rem;
          letter-spacing: 0.08em;
          color: rgba(255,255,255,0.85);
          text-decoration: none;
          transition: color 0.2s ease;
          cursor: pointer;
        }

        .nav-link:hover { color: #fff; }

        .blogs-btn {
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          font-size: 0.78rem;
          letter-spacing: 0.12em;
          color: #fff;
          border: 1.5px solid rgba(255,255,255,0.5);
          border-radius: 6px;
          padding: 0.45rem 1.1rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
          background: transparent;
          transition: all 0.2s ease;
        }

        .blogs-btn:hover {
          border-color: #fff;
          background: rgba(255,255,255,0.07);
        }
      `}</style>

    
      <nav
        className="max-w-7xl mx-auto rounded-2xl mt-4 fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled
            ? ""
            : "",
          backdropFilter: scrolled ? "blur(7px)" : "none",
          borderBottom: scrolled
            ? ""
            : "",
          boxShadow: scrolled
            ? "0 4px 32px rgba(0,0,0,0.4)"
            : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">

          
          <a href="#" className="flex flex-col items-start select-none">
            <span className="logo-sub">developer —</span>
            <span className="logo-main">RAFIUL</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            <Link to={"/"} className="nav-link">HOME</Link>
            <Link to={"/about"} className="nav-link">ABOUT</Link>
            <Link to={"/projects"} className="nav-link">PROJECTS</Link>
            <Link to={"contacts"} className="nav-link">CONTACTS</Link>
            <Link to={"/blogs"} className="blogs-btn">
              BLOGS <span style={{ opacity: 0.7 }}>›</span>
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-white/1 px-8 py-6 flex flex-col gap-5"
            style={{ background: "rgba(13,15,20,0.97)" }}>
            <Link to={"/home"} className="nav-link text-base">HOME</Link>
            <Link to={"/about"} className="nav-link text-base">ABOUT</Link>
            <Link to={"/projects"} className="nav-link text-base">PROJECTS</Link>
            <Link to={"/blogs"} className="blogs-btn">
              BLOGS <span style={{ opacity: 0.7 }}>›</span>
            </Link>
            
          </div>
        )}
      </nav>
    </>
  );
}