import pdf from "../../assets/resume.pdf";
import Photo from "../../assets/photo.jpg";
import { GiHamburgerMenu } from "react-icons/gi";
import "./_Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = ({ navbar, setNavbar }) => {
  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="logo">
          <img src={Photo} alt="my_image" />
          <p>
            MASHRABOV <br />
            ABDULAZIZ
          </p>
        </div>
        <div className="nav">
          <ul>
            <li>
              <Link to="/htmk">
                <span>01.</span> About
              </Link>
            </li>
            <li>
              <Link to="#">
                <span>02.</span> Experience
              </Link>
            </li>
            <li>
              <Link>
                <span>03.</span> Projects
              </Link>
            </li>
            <li>
              <Link>
                <span>04.</span> Contact
              </Link>
            </li>
          </ul>
          <button>
            <Link to={pdf} target="_blank" rel="noopener noreferrer">
              Resume
            </Link>
          </button>
        </div>
        <button className="burger-btn" onClick={() => setNavbar(!navbar)}>
          <GiHamburgerMenu className="burger" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
