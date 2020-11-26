import React, { useEffect } from "react";
import { animated, useSpring } from "react-spring";

import YammLogo from "./Logo.svg";
import Arrow1 from "./Arrow1.svg";
import Arrow2 from "./Arrow2.svg";
import Arrow3 from "./Arrow3.svg";
import Loader from "./TailSpin.svg";

import "./styles.css";

const Pulsate = ({ index }) => {
  const [spring, setSpring] = useSpring(() => ({
    opacity: 1,
    transform: "scale(1)"
  }));

  useEffect(() => {
    setTimeout(() => {
      setSpring({
        opacity: 0,
        transform: "scale(1.5)"
      });
    }, index * 800);
  }, []); // eslint-disable-line

  return (
    <div className="Pulsate">
      <animated.div style={spring}></animated.div>
    </div>
  );
};

export default function Middle({ logoStatus, displayArrow }) {
  return (
    <div className="Middle">
      <img
        src={YammLogo}
        alt="Gmail"
        className="Logo"
        style={{ opacity: logoStatus > 0 ? "1" : "0" }}
      />
      <img
        src={Loader}
        alt="Loader"
        className="Loader"
        style={{ opacity: logoStatus == 2 ? "1" : "0" }}
      />
      <div className="Arrow" style={{ opacity: displayArrow == 1 ? "1" : "0" }}>
        <img src={Arrow1} alt="Arrow" className="Arrow1" />
      </div>
      <div className="Arrow" style={{ opacity: displayArrow == 2 ? "1" : "0" }}>
        <img src={Arrow2} alt="Arrow" className="Arrow2" />
      </div>
      <div className="Arrow" style={{ opacity: displayArrow == 3 ? "1" : "0" }}>
        <img src={Arrow3} alt="Arrow" className="Arrow3" />
      </div>
    </div>
  );
}
