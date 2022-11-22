

const Hero = () => {
  
  return (
    <section className="hero">
      <p data-aos="fade-up" data-aos-delay="500">Hi, my name is</p>
      <h1 data-aos="fade-up" data-aos-delay="600">Mashrabov Abdulaziz.</h1>
      <h1 data-aos="fade-up" data-aos-delay="700">I build things for the web.</h1>
      <p className="summary" data-aos="fade-up" data-aos-delay="800">
        I am a Front-End Developer specializing in building amazing web
        applications. Currently, I'm focused on MERN stack to build full
        websites.
      </p>
      <button className="summary" data-aos="fade-up" data-aos-delay="900">
        <a href="http://github.com/iamalaziz">Learn More!</a>
      </button>
    </section>
  );
};

export default Hero;
