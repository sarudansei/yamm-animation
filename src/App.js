import React, { useState, useEffect } from "react";

import GoogleSheets from "./GoogleSheets";
import Gmail from "./Gmail";
import EmailEvents from "./EmailEvents";

import "./styles.css";

const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

const startAnimation = async ({ setDisplayStatus, setColorStatus }) => {
  await wait(1e3);

  setDisplayStatus(true);

  await wait(4e3);

  await setColorStatus(1);
  await setColorStatus(2);
  await setColorStatus(4);
  await setColorStatus(5);
  await setColorStatus(6);
};

export default function App() {
  const [displayStatus, setDisplayStatus] = useState(false);
  const [colorStatus, setColorStatus] = useState({});

  const changeColorStatus = (v) => {
    setColorStatus((prevState) => ({
      ...prevState,
      [v]: true
    }));

    return wait(1e3);
  };

  useEffect(() => {
    startAnimation({
      setDisplayStatus,
      setColorStatus: changeColorStatus
    });
  }, []);

  return (
    <div className="App">
      <div>
        <GoogleSheets displayStatus={displayStatus} colorStatus={colorStatus} />
        <Gmail />
      </div>
      <div>
        <EmailEvents />
      </div>
    </div>
  );
}
