import React from "react";
import "./styles.css";

import GoogleSheets from "./GoogleSheets";
import Gmail from "./Gmail";
import EmailEvents from "./EmailEvents";

export default function App() {
  return (
    <div className="App">
      <div>
        <GoogleSheets />
        <Gmail />
      </div>
      <div>
        <EmailEvents />
      </div>
    </div>
  );
}
