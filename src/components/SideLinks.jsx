import React from "react";
import "../App.scss";
import { AiOutlineInstagram, AiOutlineLinkedin, AiOutlineFacebook } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";
import {FaTelegramPlane} from 'react-icons/fa';

const socialLinks = [
  {
    icon: <FiGithub />,
    link: "http://github.com/iamalaziz",
  },
  {
    icon: <AiOutlineInstagram />,
    link: "http://instagram.com/iamalaziz",
  },
  {
    icon: <AiOutlineLinkedin />,
    link: "http://linkedin.com/in/iamalaziz",
  },
  {
    icon: <AiOutlineFacebook />,
    link: "http://facebook.com/mashrabovabdulaziz",
  },
  {
    icon: <FaTelegramPlane />,
    link: "http://t.me/iamalaziz",
  },
];
const SideLinks = () => {
  return (
    <>
      <ul className="social" data-aos="fade-up" data-aos-delay="1000">
        {socialLinks.map((item, index) => {
          return (
            <li key={index}>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                {item.icon}
              </a>
            </li>
          );
        })}
      </ul>
      <div className="email" data-aos="fade-up" data-aos-delay="1000">
        <a href="mailto:mashrabovabdulaziz2463@gmail.com">
          mashrabovabdulaziz2463@gmail.com
        </a>
      </div>
    </>
  );
};

export default SideLinks;
