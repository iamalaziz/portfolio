import Hero from "./Hero";
import About from "./About";
import SideLinks from "./SideLinks";
import Github from "./Github";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <SideLinks />
      <About />
      <Github />
    </div>
  );
};

export default Home;
