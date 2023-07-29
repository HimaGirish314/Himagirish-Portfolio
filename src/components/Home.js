import React from "react";
import "./home.css";
import linkedin from "../logos/in.png";
import github from "../logos/GIT.png";
// import html from "../logos/html.png";
// import css from "../logos/CSS.png";
// import js from "../logos/JS.png";
// import react from "../logos/React.png";
// import redux from "../logos/Redux.png";
import dp from "../logos/DP1.jpg";
const Home = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-main">
          <div className="hero-text">
            <h1>Front-End React Developer</h1>
            <p>
              Hi,Himagirish. A passionate Front-end React Developer based in
              Bengaluru.📍
            </p>
            <span>
              <a
                href="www.linkedin.com/in/bandi-himagirish"
                rel="noreferrer"
                target="_blank"
              >
                <img src={linkedin} alt="linkedin" />
              </a>
              <a
                href="https://github.com/HimaGirish314"
                rel="noreferrer"
                target="_blank"
              >
                <img src={github} alt="GitHub" />
              </a>
            </span>
          </div>
          <div className="hero-image">
              <img src={dp} alt="DP" />
            </div>
          {/* <div className="skills">
            <h3>Tech Stack |</h3>
            <img src={html} alt="HTML" />
            <img src={css} alt="CSS" />
            <img src={js} alt="JS" />
            <img src={react} alt="React" />
            <img src={redux} alt="Redux" />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Home;
