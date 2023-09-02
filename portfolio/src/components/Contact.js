import React, { useEffect, useRef, useState } from "react";
import "../styles/contact.css";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Contact = React.forwardRef((props, ref) => {
  const [device, setdevice] = useState("desktop");
  const toastSuccessRef = useRef(null);
  const toastErrorRef = useRef(null);
  useEffect(() => {
    const setDevice = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const isMobile = /mobile|android/i.test(userAgent);
      const isTablet = /tablet|ipad/i.test(userAgent);

      if (isMobile) {
        setdevice("mobile");
      } else if (isTablet) {
        setdevice("mobile");
      } else {
        setdevice("desktop");
      }
    };
    setDevice();
  }, []);

  const copyTextToClipboard = () => {
    navigator.clipboard
      .writeText("pranavpn7@gmail.com")
      .then(() => {
        toastSuccessRef.current.style.animation = "toastMssg 3s ease-in";
        setTimeout(() => {
          toastSuccessRef.current.style.animation = "none";
        }, 3000);
      })
      .catch((error) => {
        toastErrorRef.current.style.animation = "toastMssgError 3s ease-in";
        setTimeout(() => {
          toastErrorRef.current.style.animation = "none";
        }, 3000);
      });
  };

  return (
    <React.Fragment>
      <div className="toast">
        <div className="message" ref={toastErrorRef}>
          <div className="sm-msg">Something went wrong! Try other socials.</div>
          <div className="sm-box"></div>
        </div>
      </div>
      <div className="toast">
        <div className="message" ref={toastSuccessRef}>
          <div className="sm-msg">Email Id copied to clipboard</div>
          <div className="sm-box"></div>
        </div>
      </div>
      <div ref={ref} className="contact-div">
        <div className="contact-inner-div">
          <div className="heading">Get In Touch!</div>
          <div className="sub-heading">
            Connect with Me: Collaborate on Project Ideas or Simply Chat.
          </div>
          <div className="button-container">
            {device !== "desktop" ? (
              <div className="button-sm" onClick={copyTextToClipboard}>
                Drop a Mail
              </div>
            ) : (
              <a
                href="mailto:pranavpn7@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="button"
              >
                Drop a Mail
              </a>
            )}
            {device === "desktop" && <div className="button-hover-cover"></div>}
          </div>
          <div className="link-container">
            <a
              href="https://www.linkedin.com/in/pranav-nair-bb303b1ba/"
              target="_blank"
              rel="noreferrer"
              className={device === "desktop" ? "link-1" : "link-1-sm"}
            >
              <BsLinkedin className="link-logo-1" />
            </a>
            <a
              href="https://github.com/pranav567"
              target="_blank"
              rel="noreferrer"
              className={device === "desktop" ? "link-2" : "link-2-sm"}
            >
              <BsGithub className="link-logo-2" />
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
});

export default Contact;
