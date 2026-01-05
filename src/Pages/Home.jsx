import About from "../Components/About";
import Contact from "../Components/Contact";
import Education from "../Components/Education";
import Experience from "../Components/Experience";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import Projects from "../Components/Projects";
import Skills from "../Components/Skills";

const Home = () => (
  <>
    <Navbar />
    <Hero />
    <About />
    <Skills />
    <Education />
    <Experience />
    <Projects />
    <Contact />
    <Footer />
  </>
);

export default Home;
