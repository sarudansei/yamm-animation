import React from "react";

import GmailLogo from "./Gmail.svg";

import "./styles.css";

const Sausage = ({ width }) => <div className="Sausage" style={{ width }} />;

export default function Gmail() {
  return (
    <div className="Gmail">
      <div className="Head">
        <img src={GmailLogo} alt="Gmail" />
        <div className="Brand">Gmail</div>
      </div>
      <div className="Draft">
        <div className="Title">
          <Sausage width="10%" />
          <Sausage width="18%" />
          <div className="Controls">
            <div className="Control" />
            <div className="Control" />
            <div className="Control" />
          </div>
        </div>
        <div className="Email">
          <div className="EmailTo">To</div>
          <div className="EmailSubject">
            Email marketing at &#123;&#123;Company&#125;&#125;
          </div>
          <div className="EmailBody">
            <div className="EmailBodyIntro">
              Hi &#123;&#123;Firstname&#125;&#125;,
            </div>
            <div className="EmailSausages">
              <div className="EmailSausagesRow">
                <Sausage width="8%" />
                <Sausage width="5%" />
                <Sausage width="3%" />
                <Sausage width="12%" />
                <Sausage width="20%" />
                <Sausage width="11%" />
                <Sausage width="7%" />
              </div>
              <div className="EmailSausagesRow">
                <Sausage width="6%" />
                <Sausage width="12%" />
                <Sausage width="3%" />
                <Sausage width="8%" />
                <Sausage width="14%" />
                <Sausage width="10%" />
              </div>
              <div className="EmailSausagesRow">
                <Sausage width="10%" />
                <Sausage width="12%" />
                <Sausage width="6%" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
