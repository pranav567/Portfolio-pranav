import React, { useEffect, useRef, useState } from "react";
import "../styles/landing.css";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Landing = () => {
  const [colorNavbarText, setcolorNavbarText] = useState("white");
  const navbarRef = useRef(null);
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const [windowSize, setwindowSize] = useState(window.innerWidth);

  useEffect(() => {
    const adjustColorNavbarText = () => {
      if (navbarRef.current && homeRef.current) {
        const navbox = navbarRef.current.getBoundingClientRect();
        const homebox = homeRef.current.getBoundingClientRect();

        if (navbox.top < homebox.bottom && navbox.bottom > homebox.top) {
          setcolorNavbarText("white");
        } else {
          setcolorNavbarText("#252525");
        }
      }
    };
    window.addEventListener("scroll", adjustColorNavbarText);
    return () => {
      window.removeEventListener("scroll", adjustColorNavbarText);
    };
  }, []);

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
        <div className="landing-bg" />
      ) : (
        <div className="animation">
          <div className="anim1">01010000</div>
          <div className="anim2">01110010</div>
          <div className="anim3">01100001</div>
          <div className="anim4">01101110</div>
          <div className="anim5">01100001</div>
          <div className="anim6">01110110</div>
          <div className="anim7">01101110</div>
          <div className="anim8">01100001</div>
          <div className="anim9">01101001</div>
          <div className="anim10">01110010</div>
        </div>
      )}
      <Navbar
        ref={navbarRef}
        colorSet={colorNavbarText}
        scrollToHome={homeRef}
        scrollToAbout={aboutRef}
        scrollToExperience={experienceRef}
        scrollToProjects={projectsRef}
        scrollToContact={contactRef}
      />
      <div className="otherComponents">
        <Home ref={homeRef} />
        <About ref={aboutRef} />
        <Experience ref={experienceRef} />
        <Projects ref={projectsRef} />
        <Contact ref={contactRef} />
        <Footer scrollToHome={homeRef} />
      </div>
    </React.Fragment>
  );
};

export default Landing;
