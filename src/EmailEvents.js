import React from "react";

import Plane from "./Plane.svg";

import "./styles.css";

export default function EmailEvents() {
  return (
    <div className="EmailEvents">
      <div className="EmailsSent">
        <img src={Plane} alt="Plane" />
        <div class="Text">142 emails have been sent</div>
      </div>
      <div className="EmailEventsList">
        <div className="Event"></div>
      </div>
    </div>
  );
}
