import { useEffect, useState, useRef } from "react";
import "./App.css";
import Aboutme from "./Pages/Aboutme";
import Experience from "./Pages/Experience";

function App() {
  //Checking

  const [istrue, setIstrue] = useState(false);
  const [showLetters, setShowLetters] = useState(false);
  const [istrueFE, setistrueFE] = useState(false);
  const [istrueDe, setIstrueDe] = useState(false);
  const [istruePeace, setIstruePeace] = useState(false);
  const [istrueExp, setistrueExp] = useState(false);
  const [originalHeight, setOriginalHeight] = useState("");
  const [originalWidth, setOriginalWidth] = useState("");
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [xRotation, setXRotation] = useState(0);
  const [yRotation, setYRotation] = useState(0);
  //const [picWrapper, setPicWrapper] = useState();
  const [transformStyle, setTransformStyle] = useState({});

  const handleMouseLeave = () => {
    setShowLetters(false);
    setistrueFE(false);
    setIstruePeace(false);
  };

  const handleIsTrue = () => {
    setIstrue(!istrue);
  };

  const handleShowletters = () => {
    setShowLetters(true);
  };

  const handleShowlettersFE = () => {
    setistrueFE(true);
  };

  const handleShowlettersDE = () => {
    setIstrueDe(!istrueDe);
  };

  const handleShowlettersPeace = () => {
    setIstruePeace(true);
  };

  const handleistrueExp = () => {
    setistrueExp(!istrueExp);
  };

  const picWrapper = useRef(null);

  const handleMouseIn = (e) => {
    picWrapper.current = document.getElementById("pic-wrapper");
    setOriginalHeight(picWrapper.current.clientHeight);
    setOriginalWidth(picWrapper.current.clientWidth);
    const { clientX, clientY } = e;
    const rect = picWrapper.current.getBoundingClientRect();
    setMouseX(clientX - rect.left);
    setMouseY(clientY - rect.top);
    setYRotation(((mouseX - originalWidth / 2) / originalWidth) * 20);
    setXRotation(((mouseY - originalHeight / 2) / originalHeight) * 20);

    const string = `
      perspective(500px)
      scale(1.1)
      rotateX(${xRotation}deg)
      rotateY(${yRotation}deg)
    `;

    picWrapper.current.style.transform = string;
  };

  const handleMouseOut = (e) => {
    picWrapper.current.style.transform = "none";
  };

  return (
    <div className="App">
      {istrue ? (
        <Aboutme handleIsTrue={handleIsTrue} />
      ) : (
        <div className="introduction-and-pic">
          <div className="pic">
            {" "}
            {istrueExp ? (
              <Experience />
            ) : (
              <div
                className={`pic-wrapper`}
                id="pic-wrapper"
                onMouseLeave={handleMouseOut}
                onMouseMove={handleMouseIn}
              >
                <img
                  className="selfie"
                  src="../images/imagenfondo.png"
                  alt=""
                />
              </div>
            )}
          </div>
          <div className="introduction">
            <h2
              className="hi"
              onMouseEnter={handleShowletters}
              onMouseLeave={handleMouseLeave}
              onClick={handleIsTrue}
            >
              {showLetters ? "About me" : "Hi!"}
            </h2>
            <h2
              className="iam"
              onMouseEnter={handleShowlettersFE}
              onMouseLeave={handleMouseLeave}
              onClick={handleistrueExp}
            >
              {istrueFE ? "Experience" : "I'm"}
            </h2>
            <a
              href="../Files/DenisJoséMendozaVidalCV.pdf"
              target="_blank"
              download="Denis-Mendoza-CV"
              className="denis"
              onMouseEnter={handleShowlettersDE}
              onMouseLeave={handleShowlettersDE}
            >
              {istrueDe ? "My CV" : "Denis"}
            </a>
            <h2
              onMouseEnter={handleShowlettersPeace}
              onMouseLeave={handleMouseLeave}
              className="peace"
            >
              {istruePeace ? (
                <span className="peace">
                  <a
                    href="https://github.com/denisjosemendozavidal"
                    target="_blank"
                  >
                    <img src="../images/github-logo.png" alt="" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/denis-mendoza-a085b518b"
                    target="_blank"
                  >
                    <img src="../images/linkedin-logo.png" alt="" />
                  </a>
                  <a
                    href="https://api.whatsapp.com/send?phone=573044612480"
                    target="_blank"
                  >
                    <img src="../images/whatsapp-logo.png" alt="" />
                  </a>
                </span>
              ) : (
                "✌🏾"
              )}
            </h2>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
