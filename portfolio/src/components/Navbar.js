import React, { useEffect, useRef, useState } from "react";
import "../styles/navbar.css";

const Navbar = () => {
  const svgRef = useRef(null);
  const logoRef = useRef(null);
  const pathRef = useRef(null);
  const bgNavbarRef = useRef(null);
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
  return (
    <React.Fragment>
      {windowSize > 700 ? (
        <div ref={bgNavbarRef} className="navbar">
          <div className="logo">
            <div ref={logoRef} className="logo-img">
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
                  stroke="white"
                  stroke-width="20"
                  stroke-dasharray="665.773079"
                />
              </svg>
            </div>
            {/* <img className="logo-img" src={logo} alt="PN" /> */}
          </div>
          <div
            className={
              windowSize > 900 ? "other-headers" : "other-headers sm-font"
            }
            // style={{ color: "#252525" }}
          >
            <p>About</p>
            <p>Experience</p>
            <p>Projects</p>
            <p>Contact</p>
          </div>
        </div>
      ) : (
        <div className="navbar-sm">
          <div className="logo-sm">
            <div className="logo-img-sm">
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
                  stroke-width="20"
                  stroke-dasharray="665.773079"
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
            <p>About</p>
            <p>Experience</p>
            <p>Projects</p>
            <p>Contact</p>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Navbar;
