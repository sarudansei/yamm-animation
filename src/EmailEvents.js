import React, { useEffect } from "react";
import { animated, useSpring } from "react-spring";

import Plane from "./Plane.svg";

import "./styles.css";

const Event = ({ index, firstname, eventName, text }) => {
  const [spring, setSpring] = useSpring(() => ({
    opacity: 0,
    transform: "scale(1.5)"
  }));

  useEffect(() => {
    setTimeout(() => {
      setSpring({
        opacity: 1,
        transform: "scale(1)"
      });
    }, index * 500);
  }, []);

  return (
    <animated.div className={`Event Event${eventName}`} style={spring}>
      <img src={`/${index}.jpg`} alt={index} />
      <div className="EventText">
        {firstname} <span>{text}</span>
      </div>
    </animated.div>
  );
};

export default function EmailEvents() {
  return (
    <div className="EmailEvents">
      <div className="EmailsSent">
        <img src={Plane} alt="Plane" />
        <div class="Text">142 emails have been sent</div>
      </div>
      <div className="EmailEventsList">
        <Event
          index={1}
          firstname="James"
          eventName="Open"
          text="opens your email"
        />
        <Event
          index={2}
          firstname="Mary"
          eventName="Click"
          text="clicks on a link"
        />
        <Event
          index={3}
          firstname="Elizabeth"
          eventName="Unsub"
          text="unsubscribes"
        />
        <Event
          index={4}
          firstname="Ashley’s"
          eventName="Bounce"
          text="bounces"
        />
        <Event
          index={5}
          firstname="Charles"
          eventName="Reply"
          text="replies to your email"
        />
      </div>
    </div>
  );
}
