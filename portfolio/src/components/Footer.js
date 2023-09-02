import React from "react";
import "../styles/footer.css";
import { BsRocketFill } from "react-icons/bs";

const Footer = ({ scrollToHome }) => {
  return (
    <React.Fragment>
      <div className="footer">
        <div className="copyright"> &#169; Pranav Nair 2023</div>
        <div
          className="top"
          onClick={() => {
            if (scrollToHome.current)
              scrollToHome.current.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <BsRocketFill size={20} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
