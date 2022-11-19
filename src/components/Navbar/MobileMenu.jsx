import React from "react";
import pdf from "../../assets/resume.pdf";
// import "./_MobileStyle.scss";
import { IoCloseSharp } from "react-icons/io5";

const MobileMenu = ({ navbar, setNavbar }) => {
  return (
    <div className="mobile-navbar" onClick={() => setNavbar(false)}>
      <div className="nav" onClick={(e) => e.stopPropagation()}>
        <button className="closeBtn" onClick={() => setNavbar(false)}>
          <IoCloseSharp className="close"/>
        </button>
        <ul>
          <li>
            <a>
              <span>01.</span> About
            </a>
          </li>
          <li>
            <a>
              <span>02.</span> Experience
            </a>
          </li>
          <li>
            <a>
              <span>03.</span> Projects
            </a>
          </li>
          <li>
            <a>
              <span>04.</span> Contact
            </a>
          </li>
        </ul>
        <button className="resume-btn">
          <a href={pdf} target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </button>
      </div>
    </div>
  );
};

export default MobileMenu;
