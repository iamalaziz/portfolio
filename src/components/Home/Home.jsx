import React from "react";
import Navbar from "../Navbar/Navbar";
import { useState } from "react";
import MobileMenu from "../../components/Navbar/MobileMenu";
import "./_HomeStyle.scss";
import Hero from "../Hero/Hero";
import SocialLinks from "../SocialLinks";

const Home = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <div className="home">
      <Navbar navbar={navbar} setNavbar={setNavbar} />
      {navbar === true ? (
        <MobileMenu navbar={navbar} setNavbar={setNavbar} />
      ) : (
        ""
      )}
      <Hero />
      <SocialLinks />
    </div>
  );
};

export default Home;
