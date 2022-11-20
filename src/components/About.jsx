import React from "react";
import AboutSectionPhoto from "../assets/about-img.jpg";

const About = () => {
  return (
    <section className="about">
      <h1>
        <span>01. </span>About Me
      </h1>
      <div className="content">
        <p className="desc">
          I'm a third year student at <span>Dongseo University</span> in Busan,
          South Korea, studying computer engineering <span>since 2020</span>. I
          have experience developing and designing software for the web, from
          simple landing pages to progressive web applications. I strive to
          create software that not only functions efficiently under the hood,
          but also provides intuitive, pixel-perfect user experiences. I
          consider work an ongoing education, and I'm always looking for
          opportunities to work with those who are willing to share their
          knowledge as much as I want to learn. <br />
          <br />I regularly solve programming challenges on platforms like{" "}
          <a href="http://leetcode.com" target="_blank">
            <span>Leetcode</span>
          </a>
          . Apart from coding, I love solving Cube Puzzles, practising Karate,
          travelling to new places and having fun with friends. 

          Bonus fact about me is that I speak in four languages, namely <span>English</span>, <span>Russian</span>, <span>Korean</span> and lastly my native <span>Uzbek</span> language.
          <br /><br />
          <figure>
            <blockquote>
              Don't write better error messages, write code that doesn't need
              them.
            </blockquote>
          </figure>
        </p>
        <div className="wrapper">
          <img src={AboutSectionPhoto} alt="me_in_class" />
        </div>
      </div>
    </section>
  );
};

export default About;
