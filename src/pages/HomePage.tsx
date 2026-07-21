import About from "../components/About";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Seo from "../components/Seo";

function HomePage() {
  return (
    <>
      <Seo
        title="Full Stack Developer Portfolio"
        description="Premium portfolio of Asrumochan Parida, a remote-ready full stack developer specializing in React, Node.js, Express, and MongoDB."
      />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}

export default HomePage;
