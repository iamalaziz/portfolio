import Hero from "./Hero/Hero";
import About from "./About";
import SideLinks from "./SideLinks";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <About />
      <SideLinks />
    </div>
  );
};

export default Home;
