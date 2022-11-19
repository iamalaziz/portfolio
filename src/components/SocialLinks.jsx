import React from "react";
import "../App.scss";
import { AiOutlineInstagram } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";

const socialLinks = [
  {
    icon: <FiGithub />,
    link: "http://github.com/iamalaziz",
  },
  {
    icon: <AiOutlineInstagram />,
    link: "http://github.com/iamalaziz",
  },
  {
    icon: <AiOutlineInstagram />,
    link: "http://github.com/iamalaziz",
  },
  {
    icon: <AiOutlineInstagram />,
    link: "http://github.com/iamalaziz",
  },
  {
    icon: <AiOutlineInstagram />,
    link: "http://github.com/iamalaziz",
  },
];
const SocialLinks = () => {
  return (
    <>
      <ul className="social">
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
      <div className="email">
        <a href="mailto:mashrabovabdulaziz2463@gmail.com">
          mashrabovabdulaziz2463@gmail.com
        </a>
      </div>
    </>
  );
};

export default SocialLinks;
