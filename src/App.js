import React, { useState, useEffect } from "react";

import GoogleSheets from "./GoogleSheets";
import Gmail from "./Gmail";
import EmailEvents from "./EmailEvents";
import Middle from "./Middle";

import "./styles.css";

const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

const startAnimation = async ({
  setDisplayStatus,
  setColorStatus,
  setArrow,
  setLogoStatus
}) => {
  await wait(1e3);

  setArrow(1);
  setLogoStatus(1);

  await wait(1e3);

  setLogoStatus(2);

  await wait(3e3);

  setLogoStatus(1);
  setDisplayStatus(true);
  setArrow(2);

  await wait(5e3);

  setArrow(3);
  await setColorStatus(1);
  await setColorStatus(2);
  await setColorStatus(4);
  await setColorStatus(5);
  await setColorStatus(6);
};

export default function App() {
  const [displayStatus, setDisplayStatus] = useState(false);
  const [displayArrow, setArrow] = useState(false);
  const [logoStatus, setLogoStatus] = useState(false);
  const [colorStatus, setColorStatus] = useState({});
  const [displayEvents, setDisplayEvents] = useState(false);
  const [emailsCount, setEmailsCount] = useState(0);

  const changeColorStatus = (v) => {
    setColorStatus((prevState) => ({
      ...prevState,
      [v]: true
    }));

    return wait(1e3);
  };

  const handleRestAnimation = (name) => {
    if (name.startsWith("springDisplay")) {
      setEmailsCount((prev) => prev + 124);
    }

    if (name === "springDisplay-6") {
      setDisplayEvents(true);
    }
  };

  useEffect(() => {
    startAnimation({
      setDisplayStatus,
      setArrow,
      setLogoStatus,
      setColorStatus: changeColorStatus
    });
  }, []);

  return (
    <div className="App">
      <div>
        <GoogleSheets
          displayStatus={displayStatus}
          colorStatus={colorStatus}
          onRestAnimation={handleRestAnimation}
        />
        <Gmail />
      </div>
      <Middle logoStatus={logoStatus} displayArrow={displayArrow} />
      <div>
        <EmailEvents
          emailsCount={emailsCount}
          displayEvents={displayEvents}
          colorStatus={colorStatus}
          displayStatus={displayStatus}
        />
      </div>
    </div>
  );
}
