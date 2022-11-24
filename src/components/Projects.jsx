import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import img4 from "../assets/4.png";

import { MdOutlineVideoSettings } from "react-icons/md";
import { FiGithub } from "react-icons/fi";

const projects = [
  {
    id: 1,
    repStatus: "Private Respository",
    imgLink: img1,
    title: "Glassmorphism Effect Dashboard",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi earum delectus, ipsum est tempore debitis eaque consectetur expedita",
    tools: ["React JS", "Styled Components", "Firebase", "HTML"],
    githubLink: "http://github.com/iamalaziz",
    websiteLink: "",
  },
  {
    id: 2,
    repStatus: "Private Respository",
    imgLink: img2,
    title: "Nike Clone",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi earum delectus, ipsum est tempore debitis eaque consectetur expedita",
    tools: ["React JS", "Styled Components", "Firebase", "HTML"],
    githubLink: "http://github.com/iamalaziz",
    websiteLink: "",
  },
  {
    id: 3,
    repStatus: "Private Respository",
    imgLink: img3,
    title: "CryptoBoard",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi earum delectus, ipsum est tempore debitis eaque consectetur expedita",
    tools: ["React JS", "Styled Components", "Firebase", "HTML"],
    githubLink: "http://github.com/iamalaziz",
    websiteLink: "",
  },
  {
    id: 4,
    repStatus: "Private Respository",
    imgLink: img4,
    title: "Calculator",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi earum delectus, ipsum est tempore debitis eaque consectetur expedita",
    tools: ["React JS", "Styled Components", "Firebase", "HTML"],
    githubLink: "http://github.com/iamalaziz",
    websiteLink: "",
  },
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h1 className="section-title" data-aos="fade-up">
        <span>03. </span>Projects
      </h1>
      <div className="container">
        <ul>
          {projects.map(
            ({
              id,
              repStatus,
              imgLink,
              title,
              desc,
              tools,
              githubLink,
              websiteLink,
            }) => {
              return (
                <li key={id} data-aos="zoom-in">
                  <div className="description">
                    <p className="status">{repStatus}</p>
                    <h3>{title}</h3>
                    <p className="desc-text">{desc}</p>
                    <div className="tools">
                      {tools.map((i, id) => {
                        return <p key={id}>{i}</p>;
                      })}
                    </div>
                    <div className="project-links">
                      <a
                        href="http://github.com/iamalaziz"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <MdOutlineVideoSettings />
                      </a>
                      <a
                        href="http://github.com/iamalaziz"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FiGithub />
                      </a>
                    </div>
                  </div>
                  <img src={imgLink} alt="projectImage" />
                </li>
              );
            }
          )}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
