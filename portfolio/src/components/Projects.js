import React, { useEffect, useRef, useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import "../styles/projects.css";
import { InView } from "react-intersection-observer";

import expense from "../assets/svg/expense.svg";
import movie from "../assets/svg/movie.svg";
import blackjack from "../assets/svg/blackjack.svg";
import license from "../assets/svg/license.svg";

const Projects = React.forwardRef((props, ref) => {
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

  const expenseRef = useRef(null);
  const licenseRef = useRef(null);
  const blackjackRef = useRef(null);
  const movieRef = useRef(null);
  const refArray = [expenseRef, movieRef, licenseRef, blackjackRef];
  const [projectCurrent, setprojectCurrent] = useState(0);

  const handleProjectChange = (num) => {
    setprojectCurrent(num);
    for (let i = 0; i < refArray.length; i++) {
      if (i !== num) {
        if (refArray[i].current) {
          refArray[i].current.style.width = "0px";
          refArray[i].current.style.opacity = "0";
          refArray[i].current.style.fontSize = "0";
        }
      } else {
        if (refArray[i].current) {
          refArray[i].current.style.width = "100%";
          refArray[i].current.style.opacity = "1";
          refArray[i].current.style.fontSize =
            windowSize > 600 ? "1rem" : "0.8rem";
        }
      }
    }
  };

  const projects = {
    expense: {
      reff: expenseRef,
      title: "Expense Management App",
      svg: expense,
      about:
        "A mobile application, where the user can add his/her transactions. It has an option to add different cards used by the user to make payments to track their balance. Add recurring transactions with a single click instead of filling form again.",
      stack: "React native, sqlite",
    },
    movie: {
      reff: movieRef,
      title: "Movie Recommender System",
      svg: movie,
      about:
        "This project features a movie recommender system that suggests the top three movies based on user input. It displays recently released movies by genre and includes a sign-up functionality. Users can enter three movie choices, and suggestions are generated based on genre, rating, and cast.",
      stack: "Django, Html, Css, Javascript, MySQL",
    },
    license: {
      reff: licenseRef,
      title: "License Number Extraction",
      svg: license,
      about:
        "This project detects vehicles entering premises by analyzing their number plates. If an unknown vehicle is detected, the license plate number is compared against registered numbers for the premises and sent to concerned members if there is no match.",
      stack: "Django, React, SQLite, Microsoft vision api, Yolov5 model",
    },
    blackjack: {
      reff: blackjackRef,
      title: "Blackjack game app",
      svg: blackjack,
      about:
        "A mobile application, where numbers of players ranging from 1-8 can play blackjack and also set the starting chips for each game.",
      stack: "React native",
    },
  };

  return (
    <React.Fragment>
      <div ref={ref} className="proj-container">
        <div className={windowSize > 700 ? "proj-header" : "proj-header-sm"}>
          Projects
        </div>
        {windowSize >= 1000 ? (
          <div className="proj-content">
            <InView>
              {({ inView, ref }) => (
                <div
                  ref={ref}
                  className={inView ? "proj-left proj-left-anim" : "proj-left"}
                >
                  <div
                    style={
                      projectCurrent === 0
                        ? {
                            color: "#ff4d4d",
                            fontWeight: "bold",
                            letterSpacing: "1px",
                            boxShadow: "2px 2px 2px #939393",
                            fontSize: "1.5rem",
                          }
                        : {}
                    }
                    onClick={() => {
                      handleProjectChange(0);
                    }}
                  >
                    Expense Management App
                  </div>
                  <div
                    style={
                      projectCurrent === 1
                        ? {
                            color: "#ff4d4d",
                            fontWeight: "bold",
                            letterSpacing: "1px",
                            boxShadow: "2px 2px 2px #939393",
                            fontSize: "1.5rem",
                          }
                        : {}
                    }
                    onClick={() => {
                      handleProjectChange(1);
                    }}
                  >
                    Movie Recommender System
                  </div>
                  <div
                    style={
                      projectCurrent === 2
                        ? {
                            color: "#ff4d4d",
                            fontWeight: "bold",
                            letterSpacing: "1px",
                            boxShadow: "2px 2px 2px #939393",
                            fontSize: "1.5rem",
                          }
                        : {}
                    }
                    onClick={() => {
                      handleProjectChange(2);
                    }}
                  >
                    License Number Extraction
                  </div>
                  <div
                    style={
                      projectCurrent === 3
                        ? {
                            color: "#ff4d4d",
                            fontWeight: "bold",
                            letterSpacing: "1px",
                            boxShadow: "2px 2px 2px #939393",
                            fontSize: "1.5rem",
                          }
                        : {}
                    }
                    onClick={() => {
                      handleProjectChange(3);
                    }}
                  >
                    BlackJack game app
                  </div>
                </div>
              )}
            </InView>
            <InView>
              {({ inView, ref }) => (
                <div
                  ref={ref}
                  className={
                    inView ? "proj-right proj-right-anim" : "proj-right"
                  }
                >
                  {Object.keys(projects).map((obj, ind) => (
                    <div
                      key={ind}
                      ref={projects[obj]["reff"]}
                      className={`project-${ind}`}
                    >
                      <div className="project-svg">
                        <object
                          aria-label="Immage"
                          type="image/svg+xml"
                          data={projects[obj]["svg"]}
                        ></object>
                      </div>
                      <div className="project-details">
                        <div className="project-about">
                          <span>About : </span>
                          {projects[obj]["about"]}
                        </div>
                        <div className="project-stack">
                          <span>Stack : </span>
                          {projects[obj]["stack"]}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </InView>
          </div>
        ) : windowSize >= 600 ? (
          <div className="proj-content-md">
            <div className="proj-top">
              <div
                style={
                  projectCurrent === 0
                    ? {
                        color: "#ff4d4d",
                        fontWeight: "bold",
                        letterSpacing: "1px",
                        boxShadow: "0px 2px 2px #939393",
                        fontSize: "1rem",
                      }
                    : {}
                }
                onClick={() => {
                  handleProjectChange(0);
                }}
              >
                Expense Management App
              </div>
              <div
                style={
                  projectCurrent === 1
                    ? {
                        color: "#ff4d4d",
                        fontWeight: "bold",
                        letterSpacing: "1px",
                        boxShadow: "0px 2px 2px #939393",
                        fontSize: "1rem",
                      }
                    : {}
                }
                onClick={() => {
                  handleProjectChange(1);
                }}
              >
                Movie Recommender System
              </div>
              <div
                style={
                  projectCurrent === 2
                    ? {
                        color: "#ff4d4d",
                        fontWeight: "bold",
                        letterSpacing: "1px",
                        boxShadow: "0px 2px 2px #939393",
                        fontSize: "1rem",
                      }
                    : {}
                }
                onClick={() => {
                  handleProjectChange(2);
                }}
              >
                License Number Extraction
              </div>
              <div
                style={
                  projectCurrent === 3
                    ? {
                        color: "#ff4d4d",
                        fontWeight: "bold",
                        letterSpacing: "1px",
                        boxShadow: "0px 2px 2px #939393",
                        fontSize: "1rem",
                      }
                    : {}
                }
                onClick={() => {
                  handleProjectChange(3);
                }}
              >
                BlackJack game app
              </div>
            </div>
            <div className="proj-bottom">
              {Object.keys(projects).map((obj, ind) => (
                <div
                  key={ind}
                  ref={projects[obj]["reff"]}
                  className={`project-${ind}-md`}
                >
                  <div className="project-svg-md">
                    <object
                      aria-label="Immage"
                      type="image/svg+xml"
                      data={projects[obj]["svg"]}
                    ></object>
                  </div>
                  <div className="project-details">
                    <div className="project-about">
                      <span>About : </span>
                      {projects[obj]["about"]}
                    </div>
                    <div className="project-stack">
                      <span>Stack : </span>
                      {projects[obj]["stack"]}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="proj-content-md">
            <div className="proj-top-sm">
              <div className="proj-arrows">
                <AiOutlineArrowLeft
                  size={20}
                  onClick={() => {
                    if (projectCurrent > 0) {
                      handleProjectChange(projectCurrent - 1);
                    }
                  }}
                  style={
                    projectCurrent > 0
                      ? { opacity: "1" }
                      : { opacity: "0.3", cursor: "none" }
                  }
                />
              </div>
              <div className="proj-selected">
                {projects[Object.keys(projects)[projectCurrent]].title}
              </div>
              <div className="proj-arrows">
                <AiOutlineArrowRight
                  size={20}
                  onClick={() => {
                    if (projectCurrent < 3) {
                      handleProjectChange(projectCurrent + 1);
                    }
                  }}
                  style={
                    projectCurrent < 3
                      ? { opacity: "1" }
                      : { opacity: "0.3", cursor: "none" }
                  }
                />
              </div>
            </div>
            <div className="proj-bottom">
              {Object.keys(projects).map((obj, ind) => (
                <div
                  key={ind}
                  ref={projects[obj]["reff"]}
                  className={`project-${ind}-sm`}
                  style={
                    windowSize > 450
                      ? { flexDirection: "row" }
                      : { flexDirection: "column" }
                  }
                >
                  <div className="project-svg-sm">
                    <object
                      aria-label="Immage"
                      type="image/svg+xml"
                      data={projects[obj]["svg"]}
                    ></object>
                  </div>
                  <div
                    className="project-details"
                    style={windowSize > 450 ? {} : { fontSize: "0.8rem" }}
                  >
                    <div className="project-about">
                      <span>About : </span>
                      {projects[obj]["about"]}
                    </div>
                    <div className="project-stack">
                      <span>Stack : </span>
                      {projects[obj]["stack"]}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </React.Fragment>
  );
});

export default Projects;
