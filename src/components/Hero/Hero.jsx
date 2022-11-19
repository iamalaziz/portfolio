import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero">
      <p>Hi, my name is</p>
      <h1>Mashrabov Abdulaziz.</h1>
      <h1>I build things for the web.</h1>
      <p className="summary">
        I am a Front-End Developer specializing in building amazing web
        applications. Currently, I'm focused on MERN stack to build full
        websites. I am a Front-End Developer specializing in building amazing
        web applications. Currently, I'm focused on MERN stack to build full
        websites.
      </p>
      <Link to="http://github.com/iamalaziz">Learn More!</Link>
    </section>
  );
};

export default Hero;
