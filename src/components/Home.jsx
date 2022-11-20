import Hero from "./Hero";
import About from "./About";
import SideLinks from "./SideLinks";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <SideLinks />
      <About />
    </div>
  );
};

export default Home;
