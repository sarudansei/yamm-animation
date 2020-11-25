import React, { useState, useEffect, useRef } from "react";
import { animated, useSpring, useTransition } from "react-spring";

import Plane from "./Plane.svg";

import "./styles.css";

const Event = ({ index, firstname, eventName, text }) => {
  const nodeRef = useRef();
  const [isDisplay, setIsDisplay] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsDisplay(true);
    }, index * 500);
  }, []);

  const transitions = useTransition(isDisplay, null, {
    from: {
      height: 0,
      opacity: 0,
      transform: "translate(40px)"
    },
    enter: (item) => async (next) => {
      if (item && nodeRef.current) {
        const { height } = nodeRef.current.getBoundingClientRect();

        await next({
          height,
          opacity: 1,
          transform: "translate(0)"
        });
      }
    }
  });

  return transitions.map(
    ({ item, key, props }) =>
      item && (
        <animated.div style={props} key={key}>
          <div ref={nodeRef} className={`Event Event${eventName}`}>
            <div className={`Picture Picture${index}`} />
            <div className="EventText">
              {firstname} <span>{text}</span>
            </div>
          </div>
        </animated.div>
      )
  );
};

export default function EmailEvents() {
  const [emails, setEmails] = useSpring(() => ({
    total: 0
  }));

  useEffect(() => {
    setTimeout(() => {
      setEmails({
        total: 746
      });
    }, 1e3);
  }, []);

  return (
    <div className="EmailEvents">
      <div className="EmailsSent">
        <img src={Plane} alt="Plane" />
        <animated.div className="Text">
          {emails.total.interpolate(
            (v) => `${v.toFixed(0)} emails have been sent`
          )}
        </animated.div>
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
