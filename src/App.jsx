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

//Projects component starts here

const Projects = () => {
  return (
    <div className="projects-section-wrapper">
      <div className="projects-section-title-wrapper">
        <h3>Projects I've Helped with</h3>
      </div>{" "}
      <div className="projects-section-content">
        <div className="projects-section-pseo-project-wrapper"></div>{" "}
        <div className="projects-section-bookmarks-project-wrapper"></div>
      </div>
    </div>
  );
};

//Projects component end here

//Work experience component starts here

const WorkExperience = () => {
  return (
    <div className="work-experience-section-wrapper">
      <div className="work-experience-section-title-wrapper">
        <h3>Work Experience</h3>
      </div>
      <div className="work-experience-section-jobs-list">
        <div className="work-experience-section-webrun">
          {" "}
          <div className="work-experience-section-webrun-title-wrapper">
            <h4>Project Manager / Product Owner / Tech Lead at WebRun</h4>
          </div>
          <div className="work-experience-section-webrun-job-description-wrapper">
            <div className="work-experience-section-webrun-job-description-lenght">
              February 2023 to Present
            </div>
            <div className="work-experience-section-webrun-job-description-job-type">
              Remote
            </div>
            <div className="work-experience-section-webrun-job-description">
              At WebRun, a Webflow development agency, I wear many hats, from
              Project Manager and Product Owner to Tech Lead. My day-to-day
              involves spinning the gears behind stunning, high-converting
              websites and landing pages. It all starts with deep-diving into
              our clients' worlds, understanding their industry, ambitions, and
              brand soul. Then, like a conductor, I translate these insights
              into vibrant, actionable plans for our design team, ensuring we
              not only grasp but magnificently bring to life each project's
              vision. While I may not be hands-on with code every day, my
              expertise stretches from overseeing flawless design integration in
              Webflow to occasionally weaving my magic in Next.js. Using a
              toolkit brimming with custom JavaScript, Airtable, Customer.io,
              and Make.com, I craft digital experiences that captivate and
              convert, turning our clients’ dreams into impressive digital
              landmarks.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

//Work experience component ends here

// Skills component Start here
const Skills = () => {
  return (
    <div className="skills-wrapper">
      <div className="skills-title-wrapper">
        <h2>Skills and Knowledge</h2>
      </div>
      <div className="skills-cards-wrapper">
        {" "}
        <div className="soft-skills-card">
          <div className="soft-skills-title-wrapper">
            <h3>Soft Skills</h3>
          </div>
          <div className="soft-skills-list-wrapper">
            {" "}
            <ul className="soft-skills-list">
              <li className="soft-skills-element">
                {" "}
                Great Communicator: I'm all about clear and effective
                communication. Whether it's with my team or clients.
              </li>
              <li className="soft-skills-element">
                {" "}
                Resilient and Adaptable: New challenges? Different projects? I’m
                your guy. I thrive on adapting to whatever comes my way, always
                ready to tackle new requirements with a can-do attitude.
              </li>
              <li className="soft-skills-element">
                {" "}
                Self-Motivated: I bring enthusiasm and energy to everything I
                do. Staying motivated and involved comes naturally to me, and
                it's what keeps me going and growing in my career.
              </li>
              <li className="soft-skills-element">
                {" "}
                Committed to Excellence: For me, good enough is never enough.
                I’m dedicated to delivering top-quality work, no matter how big
                or small the task is.
              </li>
              <li className="soft-skills-element">
                {" "}
                Quick Learner and Problem Solver: I pick up new skills fast and
                love solving problems. Whether it’s a tricky coding issue or a
                new tool, I’m on it, figuring things out as I go.
              </li>
            </ul>
          </div>
        </div>{" "}
        <div className="tech-skills-card">
          <div className="tech-skills-title-wrapper">
            <h3>Tech Skills</h3>
          </div>
          <div className="tech-skills-list-wrapper">
            {" "}
            <ul className="tech-skills-list">
              <li className="tech-skills-element">
                {" "}
                Skilled in Git and GitHub: I'm comfortable with Git and GitHub,
                making it easy for me to handle version control and collaborate
                smoothly on coding projects.
              </li>
              <li className="tech-skills-element">
                {" "}
                Web Development Expertise: With a solid foundation in CSS and
                HTML, I craft clean and responsive web designs, ensuring a
                seamless user experience. My proficiency in JavaScript and
                React.js enables me to build interactive and engaging web
                applications.
              </li>
              <li className="tech-skills-element">
                {" "}
                Skilled in RESTful API Integration: I have extensive experience
                working with RESTful APIs. My ability to integrate and utilize
                these APIs allows me to enhance web applications with robust and
                dynamic functionalities, ensuring a more powerful and seamless
                user experience.
              </li>
              <li className="tech-skills-element">
                {" "}
                Focused on Scalable Coding: When I code, I always keep
                scalability in mind, ensuring that the applications I develop
                are not only effective now but also adaptable for future needs.
              </li>
              <li className="tech-skills-element">
                {" "}
                Knowledgeable in Node.js and Next.js: I have a good
                understanding of Node.js and Next.js, allowing me to work on
                server-side aspects and server-rendered apps with confidence.
              </li>
            </ul>
          </div>
        </div>{" "}
        <div className="other-skills-card">
          <div className="other-skills-title-wrapper">
            <h3>Other Skills</h3>
          </div>
          <div className="other-skills-list-wrapper">
            {" "}
            <ul className="other-skills-list">
              <li className="other-skills-element">
                {" "}
                Effective Leadership: I possess strong leadership skills,
                guiding teams with a clear vision and a collaborative approach
                to achieve our goals together.
              </li>
              <li className="other-skills-element">
                {" "}
                Big Picture Awareness: I have a keen understanding of the
                broader context of projects, which helps me identify where my
                contribution fits into the overall scheme.
              </li>
              <li className="other-skills-element">
                {" "}
                Seamless Contribution Handoffs: I'm focused on ensuring smooth
                transitions in the workflow. I gather all necessary inputs
                efficiently from preceding stages and provide comprehensive
                outputs to the next, ensuring no detail is missed.
              </li>
              <li className="other-skills-element">
                {" "}
                Collaborative Team Player: I excel in working with different
                team members, understanding their roles, and ensuring that my
                work aligns perfectly with theirs for a cohesive outcome.
              </li>
              <li className="other-skills-element">
                {" "}
                Success-Oriented: My aim is always towards the successful
                completion of the project. I make sure that my part is done
                excellently, contributing to the overall success of the team.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

// Skills component ends here

//Final CTA section component starts here

const FinalCtaSection = () => {
  return (
    <div className="final-cta-section-wrapper">
      <div className="final-cta-section-title-wrapper">
        <h3>Why Wait? Reach out!</h3>
      </div>
      <div className="final-cta-section-content-wrapper">
        <div className="final-cta-section-contact-list-wrapper">
          <div className="final-cta-section-download-my-cv-wrapper">
            <a
              className="final-cta-section-download-my-cv-button"
              href="../Files/DenisJoséMendozaVidalCV.pdf"
              target="_Blank"
            >
              <img src="../images/checkmark.png" alt="" />
              Download My CV
            </a>
          </div>
          <div className="final-cta-section-find-me-on-wrapper">
            <div className="final-cta-section-find-me-on-title-checkmark">
              <img src="../images/checkmark.png" alt="" />
              Find me on:
            </div>
            <div className="final-cta-section-find-me-on-options-wrapper">
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
          <div className="final-cta-section-email-me-at-wrapper">
            <div className="final-cta-section-email-me-at-title-checkmark-wrapper">
              <img src="../images/checkmark.png" alt="" />
              <a href="">Email me at: Denismendozavidal@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

//Final CTA section component ends here

//App component starts here
function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <AboutMe />
      <Projects />
      <WorkExperience />
      <Skills />
      <FinalCtaSection />
    </div>
  );
}

export default App;
