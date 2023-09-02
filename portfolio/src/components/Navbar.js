import React, { useEffect, useRef, useState } from "react";
import { FiDownload } from "react-icons/fi";
import "../styles/navbar.css";

import resume from "../assets/pdf/resume.pdf";

const Navbar = React.forwardRef(
  (
    {
      colorSet,
      scrollToHome,
      scrollToAbout,
      scrollToExperience,
      scrollToProjects,
      scrollToContact,
    },
    ref
  ) => {
    const svgRef = useRef(null);
    const logoRef = useRef(null);
    const pathRef = useRef(null);
    const [windowSize, setwindowSize] = useState(window.innerWidth);
    const dropdownRef = useRef(null);

    useEffect(() => {
      const adjustWindow = () => {
        if (windowSize !== window.innerWidth) setwindowSize(window.innerWidth);
      };
      window.addEventListener("resize", adjustWindow);
      return () => {
        window.removeEventListener("resize", adjustWindow);
      };
    }, [windowSize]);

    const handleHamburgurToggle = () => {
      const bar1 = document.querySelector(".bar-1");
      const bar2 = document.querySelector(".bar-2");
      const bar3 = document.querySelector(".bar-3");
      if (bar1 && bar3) {
        if (bar1.classList.contains("bar-1-toggled")) {
          bar1.classList.remove("bar-1-toggled");
          bar2.classList.remove("bar-2-toggled");
          bar3.classList.remove("bar-3-toggled");
          dropdownRef.current.style.display = "none";
        } else {
          bar1.classList.add("bar-1-toggled");
          bar2.classList.add("bar-2-toggled");
          bar3.classList.add("bar-3-toggled");
          dropdownRef.current.style.display = "block";
        }
      }
    };

    const handleScrollTo = (val) => {
      if (val === "home") {
        if (scrollToHome.current)
          scrollToHome.current.scrollIntoView({ behavior: "smooth" });
      } else if (val === "about") {
        if (scrollToAbout.current)
          scrollToAbout.current.scrollIntoView({ behavior: "smooth" });
      } else if (val === "experience") {
        if (scrollToExperience.current)
          scrollToExperience.current.scrollIntoView({ behavior: "smooth" });
      } else if (val === "projects") {
        if (scrollToProjects.current)
          scrollToProjects.current.scrollIntoView({ behavior: "smooth" });
      } else if (val === "contact") {
        if (scrollToContact.current)
          scrollToContact.current.scrollIntoView({ behavior: "smooth" });
      }
      handleHamburgurToggle();
    };

    const handleResumeDownload = () => {
      window.open(resume, "_blank", "noopener,noreferrer");
    };

    return (
      <React.Fragment>
        {windowSize > 700 ? (
          <div ref={ref} className="navbar">
            <div className="logo">
              <div
                ref={logoRef}
                className="logo-img"
                onClick={() => {
                  handleScrollTo("home");
                }}
              >
                <svg
                  ref={svgRef}
                  viewBox="0 0 300 300"
                  shapeRendering="geometricPrecision"
                  textRendering="geometricPrecision"
                  width="100%"
                >
                  <path
                    ref={pathRef}
                    className="path-no-animation"
                    d="M63.059428,110.051357L178.246515,70.432869L150,150l-48.055759,18.011739-24.944975,71.90022h37.417462l22.743947-63.096112l17.608217,62.362436l35.216434-119.589141l35.216435-14.673515"
                    fill="none"
                    stroke={colorSet}
                    strokeWidth="20"
                    strokeDasharray="665.773079"
                  />
                </svg>
              </div>
            </div>
            <div
              className={
                windowSize > 800 ? "other-headers" : "other-headers sm-font"
              }
              style={{ color: `${colorSet}` }}
            >
              <p
                onClick={() => {
                  handleScrollTo("about");
                }}
              >
                About
              </p>
              <p
                onClick={() => {
                  handleScrollTo("experience");
                }}
              >
                Experience
              </p>
              <p
                onClick={() => {
                  handleScrollTo("projects");
                }}
              >
                Projects
              </p>
              <p
                onClick={() => {
                  handleScrollTo("contact");
                }}
              >
                Contact
              </p>
              <p
                onClick={handleResumeDownload}
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                Resume <FiDownload style={{ marginLeft: "5px" }} />
              </p>
            </div>
          </div>
        ) : (
          <div className="navbar-sm">
            <div className="logo-sm">
              <div
                className="logo-img-sm"
                onClick={() => {
                  handleScrollTo("home");
                }}
              >
                <svg
                  viewBox="0 0 300 300"
                  shapeRendering="geometricPrecision"
                  textRendering="geometricPrecision"
                  width="100%"
                >
                  <path
                    // ref={pathRef}
                    className="path-no-animation-sm"
                    d="M63.059428,110.051357L178.246515,70.432869L150,150l-48.055759,18.011739-24.944975,71.90022h37.417462l22.743947-63.096112l17.608217,62.362436l35.216434-119.589141l35.216435-14.673515"
                    fill="none"
                    strokeWidth="20"
                    strokeDasharray="665.773079"
                  />
                </svg>
              </div>
            </div>
            <div className="other-headers-sm">
              <div className="bar-1" />
              <div className="bar-2" />
              <div className="bar-3" />
              <div className="coverHam" onClick={handleHamburgurToggle} />
            </div>
            <div ref={dropdownRef} className="dropdown">
              <p
                onClick={() => {
                  handleScrollTo("about");
                }}
              >
                About
              </p>
              <p
                onClick={() => {
                  handleScrollTo("experience");
                }}
              >
                Experience
              </p>
              <p
                onClick={() => {
                  handleScrollTo("projects");
                }}
              >
                Projects
              </p>
              <p
                onClick={() => {
                  handleScrollTo("contact");
                }}
              >
                Contact
              </p>
              <p
                onClick={handleResumeDownload}
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                Resume <FiDownload style={{ marginLeft: "5px" }} />
              </p>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
);

export default Navbar;
