import React, { useEffect } from "react";
import { animated, useSpring } from "react-spring";

import GoogleSheetsLogo from "./GoogleSheets.svg";

import "./styles.css";

const Sausage = ({ width, style }) => (
  <animated.div className="Sausage" style={{ width, ...style }} />
);

const CellStatus = ({ isDisplay, changeColor, colors, index }) => {
  const [springDisplay, setSpringDisplay] = useSpring(() => ({
    opacity: 0,
    transform: "scale(1.5)"
  }));
  const [springColor, setSpringColor] = useSpring(() => ({
    color1: "#DEDCDB",
    color2: "#B6B4B3"
  }));

  useEffect(() => {
    if (isDisplay) {
      setTimeout(() => {
        setSpringDisplay({
          opacity: 1,
          transform: "scale(1)"
        });
      }, index * 500);
    }
  }, [isDisplay]);

  useEffect(() => {
    if (changeColor[index]) {
      setSpringDisplay({
        opacity: 1,
        transform: "scale(1.2)"
      });
      setTimeout(() => {
        setSpringDisplay({
          opacity: 1,
          transform: "scale(1)"
        });
      }, 300);
      setSpringColor({
        color1: colors[0],
        color2: colors[1]
      });
    }
  }, [changeColor]);

  return (
    <div className="Cell">
      <animated.div
        className="Status"
        style={{
          ...springDisplay,
          backgroundColor: springColor.color1
        }}
      >
        <Sausage
          width="50%"
          style={{
            backgroundColor: springColor.color2
          }}
        />
      </animated.div>
    </div>
  );
};

export default function GoogleSheets({ displayStatus, colorStatus }) {
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
          <CellStatus
            index={1}
            colors={["#B7F1A3", "#85C76F"]}
            changeColor={colorStatus}
            isDisplay={displayStatus}
          />
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
          <CellStatus
            index={2}
            colors={["#89D370", "#59A63F"]}
            changeColor={colorStatus}
            isDisplay={displayStatus}
          />
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
          <CellStatus
            index={3}
            colors={["#B7F1A3", "#85C76F"]}
            changeColor={colorStatus}
            isDisplay={displayStatus}
          />
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
          <CellStatus
            index={4}
            colors={["#FACC87", "#D4A661"]}
            changeColor={colorStatus}
            isDisplay={displayStatus}
          />
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
          <CellStatus
            index={5}
            colors={["#FA9587", "#DC6B5C"]}
            changeColor={colorStatus}
            isDisplay={displayStatus}
          />
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
          <CellStatus
            index={6}
            colors={["#8AC7FF", "#2295FF"]}
            changeColor={colorStatus}
            isDisplay={displayStatus}
          />
        </div>
      </div>
    </div>
  );
}
