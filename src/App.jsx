import { useEffect, useState, useRef } from "react";
import "./App.css";
import Aboutme from "./Pages/Aboutme";
import Experience from "./Pages/Experience";

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

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-section-text-ctas-wrapper">
        <div className="hero-section-text-header-wrapper">
          <h1>I Code And Solve Problems.</h1>
        </div>
        <div className="hero-section-text-subheader">
          <h2>
            Hi! I'm Denis a Full Stack, (Front End React.js Heavy), Next.js web
            developer with a natural ability to learn and solve problems. Let's
            get in touch:
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
                <img src="../images/github-logo.png" alt="" />
                GitHub
              </a>

              <a href="">
                <img src="../images/whatsapp-logo.png" alt="" /> Whatsapp
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

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
    </div>
  );
}

export default App;
