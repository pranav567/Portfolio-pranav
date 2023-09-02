import React, { useEffect, useState } from "react";
import "../styles/home.css";

const Home = React.forwardRef((props, ref) => {
  const [windowSize, setwindowSize] = useState(window.innerWidth);

  useEffect(() => {
    const adjustWindow = () => {
      if (windowSize !== window.innerWidth) setwindowSize(window.innerWidth);
    };
    window.addEventListener("resize", adjustWindow);
    return () => {
      window.removeEventListener("resize", adjustWindow);
    };
  }, [windowSize]);
  return (
    <React.Fragment>
      {windowSize > 700 ? (
        <div ref={ref} className="home-container">
          <div className="left-box">
            <svg
              className="code-svg"
              width="300"
              height="300"
              viewBox="0 0 300 300"
              shapeRendering="geometricPrecision"
              textRendering="geometricPrecision"
            >
              <path
                className="code-svg-path"
                d="M161.446 38.3386L185.946 43.3386L139.196 263.339L114.696 258.339L161.446 38.3386ZM245.196 150.839L200.321 105.964V70.5886L280.571 150.839L200.321 230.964V195.589L245.196 150.839ZM20.0713 150.839L100.321 70.5886V105.964L55.4463 150.839L100.321 195.589V230.964L20.0713 150.839Z"
                strokeWidth="3"
              />
            </svg>
          </div>
          <div className="right-box">
            <div className="name-header">
              I'm <span>P</span>
              <span>r</span>
              <span>a</span>
              <span>n</span>
              <span>a</span>
              <span>v</span>
            </div>
            <div className="title-sub-header">Web & Mobile App Developer</div>
          </div>
        </div>
      ) : (
        <div ref={ref} className="home-container-sm">
          <div className="box-sm">
            <div className="name-header-sm">
              I'm{" "}
              <div className="my-name">
                <span>P</span>
                <span>r</span>
                <span>a</span>
                <span>n</span>
                <span>a</span>
                <span>v</span>
              </div>
            </div>
            <div className="title-sub-header-sm">
              Web & Mobile App Developer
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
});

export default Home;
