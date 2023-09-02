import React, { useEffect, useState } from "react";
import "../styles/about.css";
import myImage from "../assets/images/myImage.png";

const About = React.forwardRef((props, ref) => {
  const [windowSize, setwindowSize] = useState(window.innerWidth);

  useEffect(() => {
    const adjustWindow = () => {
      if (window.innerWidth !== windowSize) setwindowSize(window.innerWidth);
    };
    window.addEventListener("resize", adjustWindow);
    return () => {
      window.removeEventListener("resize", adjustWindow);
    };
  }, [windowSize]);
  return (
    <React.Fragment>
      <div ref={ref} className="about-container">
        {windowSize > 700 ? (
          <>
            <div className="about-header">Bit About me!</div>
            <div className="about-image">
              <img className="my-image" src={myImage} alt="Me" />
            </div>
            <div className="about-summary">
              <p>
                Hi! My name is Pranav Nair (22 yrs) and I'm a developer with a
                passion of developing web and mobile apps. I completed my
                Bachelor's in engineering degree from{" "}
                <a
                  href="https://www.spit.ac.in/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Sardar Patel Institute of Technology
                </a>{" "}
                in Computer Engineering. I am keen on building a career that
                will help me, apply my skills and also upksill myself while
                contributing to dynamic development teams and drive impactful
                solutions.
              </p>
            </div>

            <div className="about-summary" style={{ marginBottom: "40px" }}>
              <p>
                Apart from coding &#x1F4BB;, I spend my time playing badminton
                &#x1F3F8; , reading Crime Fiction books &#x1F4D6; or watching
                Anime &#x1F3A5;.
              </p>
            </div>
          </>
        ) : (
          <>
            <div className="about-header-sm">Bit About me!</div>
            <div className="about-image-sm">
              <img className="my-image-sm" src={myImage} alt="Me" />
            </div>
            <div className="about-summary-sm">
              <p>
                Hi! My name is Pranav Nair (22 yrs) and I'm a developer with a
                passion of developing web and mobile apps. I completed my
                Bachelor's in engineering degree from{" "}
                <a
                  href="https://www.spit.ac.in/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Sardar Patel Institute of Technology
                </a>{" "}
                in Computer Engineering. I am keen on building a career that
                will help me, apply my skills and also upskill while
                contributing to dynamic development teams and drive impactful
                solutions.
              </p>
            </div>

            <div className="about-summary-sm" style={{ marginBottom: "40px" }}>
              <p>
                Apart from coding &#x1F4BB;, I spend my time playing badminton
                &#x1F3F8; , reading Crime Fiction books &#x1F4D6; or watching
                Anime &#x1F3A5;.
              </p>
            </div>
          </>
        )}
      </div>
    </React.Fragment>
  );
});

export default About;
