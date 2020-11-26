import React, { useEffect, useRef } from "react";
import { animated, useSpring, useTransition } from "react-spring";

import Plane from "./Plane.svg";

import "./styles.css";

const Event = ({ index, firstname, eventName, text }) => {
  const nodeRef = useRef();

  const transitions = useTransition(true, null, {
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

export default function EmailEvents({
  emailsCount,
  displayEvents,
  colorStatus,
  displayStatus
}) {
  const [emails, setEmails] = useSpring(() => ({
    total: 0
  }));

  useEffect(() => {
    setEmails({
      total: emailsCount
    });
  }, [emailsCount]);

  return (
    <div className="EmailEvents" style={{ opacity: displayStatus ? "1" : "0" }}>
      <div className="EmailsSent">
        <img src={Plane} alt="Plane" />
        <animated.div className="Text">
          {emails.total.interpolate((v) => {
            if (v == 0) {
              return "Sending...";
            } else {
              return `${v.toFixed(0)} email have been sent`;
            }
          })}
        </animated.div>
      </div>

      <div className="EmailEventsList">
        {displayEvents && (
          <>
            {colorStatus[1] && (
              <Event
                index={1}
                firstname="James"
                eventName="Open"
                text="opens your email"
              />
            )}
            {colorStatus[2] && (
              <Event
                index={2}
                firstname="Mary"
                eventName="Click"
                text="clicks on a link"
              />
            )}
            {colorStatus[4] && (
              <Event
                index={3}
                firstname="Elizabeth"
                eventName="Unsub"
                text="unsubscribes"
              />
            )}
            {colorStatus[5] && (
              <Event
                index={4}
                firstname="Ashley’s"
                eventName="Bounce"
                text="bounces"
              />
            )}
            {colorStatus[6] && (
              <Event
                index={5}
                firstname="Charles"
                eventName="Reply"
                text="replies to your email"
              />
            )}
          </>
        )}
      </div>
    </div>
  );
}
