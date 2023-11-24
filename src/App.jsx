import { useEffect, useState, useRef } from "react";
import "./App.css";
import Aboutme from "./Pages/Aboutme";
import Experience from "./Pages/Experience";

/*This site will have several components before getting to the App component*/

//Navbar component starts here
const Navbar = () => {
  return (
    <div className="navbar-overall-wrapper">
      <nav className="navbar">
        <h2 className="navbar-welcome-message">
          Hi, I'm Denis, Welcome to my portfolio! Enjoy!
        </h2>
      </nav>
    </div>
  );
};

// Navbar component ends here

// Hero Section component Starts here
const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-section-left-side-wrapper">
        <div className="hero-section-text-ctas-wrapper">
          <div className="hero-section-text-header-wrapper">
            <h1>I Code And Solve Problems.</h1>
          </div>
          <div className="hero-section-text-subheader">
            <h2>
              Hi! I'm Denis, your go-to React.js Front End Web Developer with a
              special knack for learning and problem solving. Excited to team
              up? Let’s chat:
            </h2>
          </div>
          <div className="hero-section-ctas-wrapper">
            <div className="hero-section-ctas-download-my-cv-wrapper">
              <a
                className="hero-section-ctas-download-my-cv-button"
                href="../Files/DenisJoséMendozaVidalCV.pdf"
                target="_Blank"
                download="Denis-Mendoza-CV"
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
                <a
                  href="https://api.whatsapp.com/send?phone=573044612480"
                  target="_Blank"
                >
                  <img src="../images/whatsapp-logo.png" alt="" /> Whatsapp
                </a>

                <a
                  href="https://github.com/denisjosemendozavidal"
                  target="_Blank"
                >
                  <img src="../images/github-logo.png" alt="" />
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/denis-mendoza-a085b518b/"
                  target="_Blank"
                >
                  <img src="../images/linkedin-logo.png" alt="" /> Linkedin
                </a>
              </div>
            </div>
            <div className="hero-section-ctas-email-me-title-checkmark-wrapper">
              <img src="../images/checkmark.png" alt="" />
              <a href="mailto: denismendozavidal@gmail.com">
                Email me at: Denismendozavidal@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-section-img-wrapper">
        <img
          className="hero-section-img"
          src="../images/SelfieBlackAndWhite.jpeg"
          alt=""
        />
      </div>
    </div>
  );
};

// HeroSection component ends here

// AboutMe component starts here
const AboutMe = () => {
  return (
    <div className="about-me-section-wrapper" id="aboutMe">
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
      <div className="about-me-section-content-video-wrapper">
        {" "}
        <video
          poster="../images/Thumbnail.jpeg"
          src="/images/Video/Introduction.mp4"
          controls
        ></video>
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
        <h2>Projects I've Helped with</h2>
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
  const jobsData = [
    {
      company: "Webrun Labs",
      url: "https://www.webrun.com/",
      jobTitle: "Project Manager / Product Owner / Tech Lead",
      duration: "February 2023 to Present",
      typeOfJob: "Remote",
      jobDescription: `At WebRun, a Webflow development agency, I wear many hats, from
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
      landmarks.`,
    },
    {
      company: "Loadsmart",
      url: "https://loadsmart.com/",
      jobTitle: "Carrier Sales Manager",
      duration: "August 2019 to August 2022",
      typeOfJob: "Remote",
      jobDescription: `In my role as Carrier Sales Manager at Loadsmart, 
      I led eight representatives globally, focusing on training, coaching, 
      and achieving key objectives. My role involved collaborating with 
      multiple departments, significantly increasing load deliveries, 
      carrier usage, and gross margin. I established the Carrier Support 
      division, enhancing cost metrics. As a Carrier Sales Rep previously, 
      I built strong relationships with trucking companies, achieving a 
      milestone of delivering over 100 loads in a month as the first 
      offshore representative.`,
    },
    {
      company: "Go To Truckers INC",
      url: "https://gototruckers.com/",
      jobTitle:
        "Inside Sales Representative / Account Manager / Carrier sales (Remote)",
      duration: "March 2018 to May 2019",
      typeOfJob: "Remote",
      jobDescription: `As an Inside Sales Representative/Account Manager/Carrier Sales 
      at Go To Truckers INC, I bridged the gap between shippers and carriers across 
      the continental USA. My role involved securing business, procuring capacity within 
      our network, and ensuring high service standards. Responsibilities included scheduling 
      pickups and deliveries, aligning with carriers' and facilities' operational timings, 
      and overseeing timely pickups and deliveries. Additionally, I managed unexpected 
      situations during loading and unloading. Post-delivery, my duties encompassed paperwork 
      management, including service agreements and proof of delivery, ensuring clear 
      communication of service costs and payment timelines between customers and carriers.`,
    },
  ];

  const [clickedToOpen, setClickedToOpen] = useState("Webrun Labs");

  const handleOpenAccordinClick = (company) => {
    setClickedToOpen(company);
  };

  return (
    <div className="work-experience-section-wrapper">
      <div className="work-experience-section-title-wrapper">
        <h2>Work Experience</h2>
      </div>
      <div className="work-experience-section-jobs-list-wrapper">
        {jobsData.map((jobData) => (
          <>
            <hr />
            <div className="work-experience-section-specific-job-wrapper">
              <div
                className="work-experience-section-specific-job-accordion-title-and-symbol-wrapper"
                onClick={() => handleOpenAccordinClick(jobData.company)}
              >
                <h3
                  className={
                    clickedToOpen === jobData.company
                      ? "work-experience-section-specific-job-accordion-title-active"
                      : "work-experience-section-specific-job-accordion-title-inactive"
                  }
                >
                  {jobData.jobTitle} at {jobData.company}
                </h3>
                <div className="work-experience-section-specific-job-accordion-symbol">
                  {clickedToOpen != jobData.company && "+"}
                </div>
              </div>
              {clickedToOpen === jobData.company && (
                <div className="work-experience-section-specific-job-accordion-content">
                  <a
                    className="work-experience-section-specific-job-accordion-content-company-name"
                    href={jobData.url}
                    target="_blank"
                  >
                    <h4>
                      <span className="work-experience-section-specific-job-accordion-content-bold-letters">
                        Company:
                      </span>{" "}
                      <span className="work-experience-section-specific-job-accordion-content-company-name-url">
                        {jobData.company}
                      </span>
                    </h4>
                  </a>
                  <div className="work-experience-section-specific-job-accordion-content-job-title">
                    <h4>
                      <span className="work-experience-section-specific-job-accordion-content-bold-letters">
                        Job Title:
                      </span>{" "}
                      {jobData.jobTitle}
                    </h4>
                  </div>

                  <div className="work-experience-section-specific-job-accordion-content-job-lenght">
                    <span className="work-experience-section-specific-job-accordion-content-bold-letters">
                      Duration:
                    </span>{" "}
                    {jobData.duration}
                  </div>

                  <div className="work-experience-section-specific-job-accordion-content-job-type">
                    <span className="work-experience-section-specific-job-accordion-content-bold-letters">
                      Type of Job:
                    </span>{" "}
                    {jobData.typeOfJob}
                  </div>
                  <div className="work-experience-section-specific-job-accordion-content-job-description">
                    <span className="work-experience-section-specific-job-accordion-content-bold-letters">
                      Job Description:
                    </span>{" "}
                    {jobData.jobDescription}
                  </div>
                </div>
              )}
            </div>
          </>
        ))}
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
        <div className="skills-card">
          <div className="skills-card-title-wrapper">
            <h3>Soft Skills</h3>
          </div>
          <div className="skills-card-list-wrapper">
            {" "}
            <ul className="skills-card-list">
              <li className="skills-card-element">
                {" "}
                <span className="skills-card-element-bold-letters">
                  Great Communicator:
                </span>{" "}
                I'm all about clear and effective communication. Whether it's
                with my team or clients.
              </li>
              <li className="skills-card-element">
                {" "}
                <span className="skills-card-element-bold-letters">
                  Resilient and Adaptable:
                </span>{" "}
                New challenges? Different projects? I’m your guy. I thrive on
                adapting to whatever comes my way, always ready to tackle new
                requirements with a can-do attitude.
              </li>
              <li className="skills-card-element">
                {" "}
                <span className="skills-card-element-bold-letters">
                  Self-Motivated:
                </span>{" "}
                I bring enthusiasm and energy to everything I do. Staying
                motivated and involved comes naturally to me, and it's what
                keeps me going and growing in my career.
              </li>
              <li className="skills-card-element">
                {" "}
                <span className="skills-card-element-bold-letters">
                  Committed to Excellence:
                </span>{" "}
                For me, good enough is never enough. I’m dedicated to delivering
                top-quality work, no matter how big or small the task is.
              </li>
              <li className="skills-card-element">
                {" "}
                <span className="skills-card-element-bold-letters">
                  Quick Learner and Problem Solver:
                </span>{" "}
                I pick up new skills fast and love solving problems. Whether
                it’s a tricky coding issue or a new tool, I’m on it, figuring
                things out as I go.
              </li>
            </ul>
          </div>
        </div>{" "}
        <div className="skills-card">
          <div className="skills-card-title-wrapper">
            <h3>Tech Skills</h3>
          </div>
          <div className="skills-card-list-wrapper">
            {" "}
            <ul className="skills-card-list">
              <li className="skills-card-element">
                {" "}
                <span className="skills-card-element-bold-letters">
                  Skilled in Git and GitHub:{" "}
                </span>
                I'm comfortable with Git and GitHub, making it easy for me to
                handle version control and collaborate smoothly on coding
                projects.
              </li>
              <li className="skills-card-element">
                {" "}
                <span className="skills-card-element-bold-letters">
                  Web Development Expertise:
                </span>{" "}
                With a solid foundation in CSS and HTML, I craft clean and
                responsive web designs, ensuring a seamless user experience. My
                proficiency in JavaScript and React.js enables me to build
                interactive and engaging web applications.
              </li>
              <li className="skills-card-element">
                {" "}
                <span className="skills-card-element-bold-letters">
                  Skilled in RESTful API Integration:{" "}
                </span>
                I have extensive experience working with RESTful APIs. My
                ability to integrate and utilize these APIs allows me to enhance
                web applications with robust and dynamic functionalities,
                ensuring a more powerful and seamless user experience.
              </li>
              <li className="skills-card-element">
                {" "}
                <span className="skills-card-element-bold-letters">
                  Focused on Scalable Coding:{" "}
                </span>
                When I code, I always keep scalability in mind, ensuring that
                the applications I develop are not only effective now but also
                adaptable for future needs.
              </li>
              <li className="skills-card-element">
                {" "}
                <span className="skills-card-element-bold-letters">
                  Knowledgeable in Next.js:{" "}
                </span>
                I have a good understanding of Next.js, allowing me to work on
                server-side aspects and server-rendered apps with confidence.
              </li>
            </ul>
          </div>
        </div>{" "}
        <div className="skills-card">
          <div className="skills-card-title-wrapper">
            <h3>Other Skills</h3>
          </div>
          <div className="skills-card-list-wrapper">
            {" "}
            <ul className="skills-card-list">
              <li className="skills-card-element">
                {" "}
                <span className="skills-card-element-bold-letters">
                  Effective Leadership:{" "}
                </span>
                I possess strong leadership skills, guiding teams with a clear
                vision and a collaborative approach to achieve our goals
                together.
              </li>
              <li className="skills-card-element">
                {" "}
                <span className="skills-card-element-bold-letters">
                  Big Picture Awareness:{" "}
                </span>
                I have a keen understanding of the broader context of projects,
                which helps me identify where my contribution fits into the
                overall scheme.
              </li>
              <li className="skills-card-element">
                {" "}
                <span className="skills-card-element-bold-letters">
                  Seamless Contribution Handoffs:{" "}
                </span>
                I'm focused on ensuring smooth transitions in the workflow. I
                gather all necessary inputs efficiently from preceding stages
                and provide comprehensive outputs to the next, ensuring no
                detail is missed.
              </li>
              <li className="skills-card-element">
                {" "}
                <span className="skills-card-element-bold-letters">
                  Collaborative Team Player:{" "}
                </span>
                I excel in working with different team members, understanding
                their roles, and ensuring that my work aligns perfectly with
                theirs for a cohesive outcome.
              </li>
              <li className="skills-card-element">
                {" "}
                <span className="skills-card-element-bold-letters">
                  Success-Oriented:{" "}
                </span>
                My aim is always towards the successful completion of the
                project. I make sure that my part is done excellently,
                contributing to the overall success of the team.
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
        <h2>Contact Me</h2>
      </div>
      <div className="final-cta-section-content-wrapper">
        <div className="final-cta-section-contact-list-wrapper">
          <div className="final-cta-section-contact-item-wrapper">
            <a
              className="final-cta-section-contact-item-button-wrapper"
              href="../Files/DenisJoséMendozaVidalCV.pdf"
              target="_Blank"
              download="Denis-Mendoza-CV"
            >
              <img
                className="final-cta-section-contact-item-checkmark"
                src="../images/checkmark.png"
                alt=""
              />
              Download My CV
            </a>
          </div>
          <div className="final-cta-section-contact-item-wrapper">
            <div className="final-cta-section-find-me-on-title-checkmark">
              <img
                className="final-cta-section-contact-item-checkmark"
                src="../images/checkmark.png"
                alt=""
              />
              Find me on:
            </div>
            <div className="final-cta-section-find-me-on-options-wrapper">
              <a
                href="https://api.whatsapp.com/send?phone=573044612480"
                target="_Blank"
              >
                Whatsapp <img src="../images/whatsapp-logo.png" alt="" />
              </a>

              <a
                href="https://github.com/denisjosemendozavidal"
                target="_Blank"
              >
                GitHub
                <img src="../images/github-logo.png" alt="" />
              </a>

              <a
                href="https://www.linkedin.com/in/denis-mendoza-a085b518b/"
                target="_Blank"
              >
                Linkedin
                <img src="../images/linkedin-logo.png" alt="" />
              </a>
            </div>
          </div>
          <div className="final-cta-section-contact-item-wrapper">
            <a
              className="final-cta-section-contact-item-button-wrapper"
              href="mailto: denismendozavidal@gmail.com"
            >
              <img
                className="final-cta-section-contact-item-checkmark"
                src="../images/checkmark.png"
                alt=""
              />
              Email me at: Denismendozavidal@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

//Final CTA section component ends here

//aboutMe-projects-workexperience-skills-finalCtaSection-wrapper component starts here

const OverallWrapper = () => {
  const ref = useRef(null);

  const components = {
    0: <AboutMe />,
    1: <Projects />,
    2: <WorkExperience />,
    3: <Skills />,
    4: <FinalCtaSection />,
  };

  const buttons = [
    "About Me",
    "Projects",
    "Work Experience",
    "Skills",
    "Contact Me",
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="aboutMe-projects-workexperience-skills-finalCtaSection-wrapper">
      <div
        ref={ref}
        className="aboutMe-projects-workexperience-skills-finalCtaSection-buttons-wrapper"
      >
        {buttons.map((button, index) => (
          <a
            key={index}
            href="#"
            title=""
            className={`aboutMe-projects-workexperience-skills-finalCtaSection-buttons ${
              activeIndex === index
                ? "aboutMe-projects-workexperience-skills-finalCtaSection-active-buttons"
                : "aboutMe-projects-workexperience-skills-finalCtaSection-inactive-buttons"
            }`}
            onClick={(e) => {
              e.preventDefault();
              handleClick(index);
            }}
          >
            {button}
          </a>
        ))}
      </div>
      {components[activeIndex]}
    </div>
  );
};

//aboutMe-projects-workexperience-skills-finalCtaSection-wrapper ends here

//App component starts here
function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <OverallWrapper />
    </div>
  );
}

export default App;
