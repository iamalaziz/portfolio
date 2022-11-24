import Hero from "./Hero";
import About from "./About";
import SideLinks from "./SideLinks";
import Github from "./Github";
import Projects from "./Projects";
import Experience from "./Experience";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <SideLinks />
      <About />
      <Github />
      <Experience />
      <Projects />
    </div>
  );
};

export default Home;
