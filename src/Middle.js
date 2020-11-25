import React, { useEffect } from "react";
import { animated, useSpring } from "react-spring";

import YammLogo from "./Logo.svg";
import Arrow1 from "./Arrow1.svg";
import Arrow2 from "./Arrow2.svg";
import Arrow3 from "./Arrow3.svg";

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

const Arrow = ({ src, index }) => {
  const [spring, setSpring] = useSpring(() => ({
    opacity: 0
  }));

  useEffect(() => {
    setTimeout(() => {
      setSpring({
        opacity: 1
      });
    }, index * 2000);
  }, []); // eslint-disable-line

  useEffect(() => {
    setTimeout(() => {
      setSpring({
        opacity: 0
      });
    }, index * 2000 + 2000);
  }, []); // eslint-disable-line

  return (
    <div className="Arrow">
      <animated.div style={spring}>
        <img src={src} alt="Arrow" className={`Arrow${index}`} style={spring} />
      </animated.div>
    </div>
  );
};

export default function Middle() {
  return (
    <div className="Middle">
      <img src={YammLogo} alt="Gmail" className="Logo" />
      <Pulsate index={1} />
      <Pulsate index={2} />
      <Pulsate index={3} />
      <Pulsate index={4} />
      <Arrow src={Arrow1} index={1} />
      <Arrow src={Arrow2} index={2} />
      <Arrow src={Arrow3} index={3} />
    </div>
  );
}
