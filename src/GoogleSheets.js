import React, { useEffect } from "react";
import { animated, useSpring } from "react-spring";

import GoogleSheetsLogo from "./GoogleSheets.svg";

import "./styles.css";

const Sausage = ({ width }) => <div className="Sausage" style={{ width }} />;

const CellStatus = ({ index }) => {
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
    <div className="Cell">
      <animated.div className="Status" style={spring}>
        <Sausage width="50%" />
      </animated.div>
    </div>
  );
};

export default function GoogleSheets() {
  return (
    <div className="GoogleSheets">
      <div className="Head">
        <img src={GoogleSheetsLogo} alt="Google Sheets" />
        <div className="Brand">Google Sheets</div>
      </div>
      <div className="Table">
        <div className="Row">
          <div className="Cell">Email</div>
          <div className="Cell">Name</div>
          <div className="Cell">Company</div>
          <div className="Cell">Status</div>
        </div>
        <div className="Row">
          <div className="Cell">
            <Sausage width="60%" />
          </div>
          <div className="Cell">
            <Sausage width="40%" />
            <Sausage width="30%" />
          </div>
          <div className="Cell">
            <Sausage width="70%" />
          </div>
          <CellStatus index={1} />
        </div>
        <div className="Row">
          <div className="Cell">
            <Sausage width="70%" />
          </div>
          <div className="Cell">
            <Sausage width="30%" />
            <Sausage width="45%" />
          </div>
          <div className="Cell">
            <Sausage width="80%" />
          </div>
          <CellStatus index={2} />
        </div>
        <div className="Row">
          <div className="Cell">
            <Sausage width="55%" />
          </div>
          <div className="Cell">
            <Sausage width="45%" />
            <Sausage width="20%" />
          </div>
          <div className="Cell">
            <Sausage width="90%" />
          </div>
          <CellStatus index={3} />
        </div>
        <div className="Row">
          <div className="Cell">
            <Sausage width="75%" />
          </div>
          <div className="Cell">
            <Sausage width="20%" />
            <Sausage width="45%" />
          </div>
          <div className="Cell">
            <Sausage width="50%" />
          </div>
          <CellStatus index={4} />
        </div>
        <div className="Row">
          <div className="Cell">
            <Sausage width="45%" />
          </div>
          <div className="Cell">
            <Sausage width="40%" />
            <Sausage width="50%" />
          </div>
          <div className="Cell">
            <Sausage width="70%" />
          </div>
          <CellStatus index={5} />
        </div>
        <div className="Row">
          <div className="Cell">
            <Sausage width="75%" />
          </div>
          <div className="Cell">
            <Sausage width="40%" />
            <Sausage width="30%" />
          </div>
          <div className="Cell">
            <Sausage width="60%" />
          </div>
          <CellStatus index={6} />
        </div>
      </div>
    </div>
  );
}
