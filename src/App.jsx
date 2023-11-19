import { useEffect, useState, useRef } from "react";
import "./App.css";
import Aboutme from "./Pages/Aboutme";
import Experience from "./Pages/Experience";

/*This site will have several components before getting to the App component*/

//Navbar component starts here
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="Logo">Denis Mendoza.</div>

      <div className="navbar-options-wrapper">
        <div className="navbar-languages-options-wrapper">
          <a className="navbar-a-tag" href="">
            Spanish
          </a>{" "}
          /{" "}
          <a className="navbar-a-tag" href="">
            English
          </a>
        </div>
        <div className="navbar-menu-wrapper">
          {" "}
          <div className="navbar-menu-title-wrapper">
            <a className="navbar-a-tag" href="">
              Menu
            </a>
            <img src="../images/rightarrow.svg" alt="" />
          </div>
          <div className="navbar-menu-options">
            <a className="navbar-a-tag" href="">
              Section #1
            </a>
            <a className="navbar-a-tag" href="">
              Section #2
            </a>
            <a className="navbar-a-tag" href="">
              Section #3
            </a>
          </div>
        </div>
        <div className="navbar-reach-out-wrapper">
          <div className="navbar-reach-out-title-wrapper">
            <a className="navbar-a-tag" href="">
              Reach Out
            </a>
            <img src="../images/rightarrow.svg" alt="" />
          </div>
          <div className="navbar-reach-out-options">
            <a className="navbar-a-tag" href="">
              <img src="../images/linkedin-logo.png" alt="" />
            </a>
            <a className="navbar-a-tag" href="">
              <img src="../images/whatsapp-logo.png" alt="" />
            </a>
            <a
              className="navbar-a-tag"
              href="mailto:denismendozavidal@gmail.com"
            >
              denismendozavidal@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// Navbar component ends here

// Hero Section component Starts here
const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-section-text-ctas-wrapper">
        <div className="hero-section-text-header-wrapper">
          <h1>I Code And Solve Problems.</h1>
        </div>
        <div className="hero-section-text-subheader">
          <h2>
            Hi! I'm Denis, your go-to React.js Front End Web Developer with a
            special knack for learning and problem solving. Excited to team up?
            Let’s chat:
          </h2>
        </div>
        <div className="hero-section-ctas-wrapper">
          <div className="hero-section-ctas-download-my-cv-wrapper">
            <a
              className="hero-section-ctas-download-my-cv-button"
              href="../Files/DenisJoséMendozaVidalCV.pdf"
              target="_Blank"
            >
              <img src="../images/checkmark.png" alt="" />
              Download My CV
            </a>
          </div>
          <div className="hero-section-ctas-find-me-on-wrapper">
            <div className="hero-section-ctas-find-me-on-title-checkmark">
              <img src="../images/checkmark.png" alt="" />
              Find me on:
            </div>
            <div className="hero-section-ctas-find-me-on-options-wrapper">
              <a href="">
                <img src="../images/whatsapp-logo.png" alt="" /> Whatsapp
              </a>

              <a href="">
                <img src="../images/github-logo.png" alt="" />
                GitHub
              </a>

              <a href="">
                <img src="../images/linkedin-logo.png" alt="" /> Linkedin
              </a>
            </div>
          </div>
          <div className="hero-section-ctas-email-me-title-checkmark-wrapper">
            <img src="../images/checkmark.png" alt="" />
            <a href="">Email me at: Denismendozavidal@gmail.com</a>
          </div>
        </div>
      </div>
      <div className="hero-section-img-wrapper">
        <img src="../images/imagenfondo.png" alt="" />
      </div>
    </div>
  );
};

// HeroSection component ends here

// AboutMe component starts here
const AboutMe = () => {
  return (
    <div className="about-me-section-wrapper">
      <div className="about-me-section-title-description-wrapper">
        <div className="about-me-section-title-wrapper">
          <h2>About me</h2>
        </div>
        <div className="about-me-section-description-wrapper">
          <p>
            I’m a web enthusiast turned professional who found his calling in
            the world of programming. Ever since I discovered the art of
            creating, communicating, and developing web applications that
            interact responsively with users, I’ve been completely hooked.
            Programming for me isn’t just a job; it’s a passion that drives me
            to continually learn and grow. My journey has taken me from being
            captivated by the endless possibilities of web development to
            leading projects that turn those possibilities into reality.
          </p>
        </div>
      </div>
      <div className="about-me-section-content-wrapper">
        <div className="about-me-section-content-video-wrapper">
          {" "}
          <video src="/images/Video/Introduction.mp4" controls></video>
        </div>
      </div>
    </div>
  );
};

// AboutMe component ends here

// Skills component Start here
const Skills = () => {
  return (
    <div className="skills-wrapper">
      <div className="skills-title-wrapper">
        <h2>Skills and Knowledge</h2>
      </div>
      <div className="skills-cards-wrapper"></div>
    </div>
  );
};

// Skills component ends here

//App component starts here
function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <AboutMe />
      <Skills />
    </div>
  );
}

export default App;
