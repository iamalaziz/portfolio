import Hero from "./Hero";
import About from "./About";
import SideLinks from "./SideLinks";
import Github from "./Github";
import Projects from "./Projects";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <SideLinks />
      <About />
      <Github />
      <Projects />
    </div>
  );
};

export default Home;
