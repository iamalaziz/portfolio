import React from "react";
import GitHubCalendar from "react-github-calendar";
import { FiGithub } from "react-icons/fi";

const Github = () => {
  return (
    <section className="git">
      <div className="title">
        <span>
          <FiGithub />
        </span>
        <h1>Github Contributions</h1>
        <div className="line"></div>
      </div>
      <GitHubCalendar username="iamalaziz" />
    </section>
  );
};

export default Github;
