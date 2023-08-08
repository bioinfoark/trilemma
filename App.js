import React, { useState } from "react";
import ReactDOM from "react-dom";
import Switch from "./Switch";

function App() {
  const [switches, setSwitches] = useState([
    { label: "有钱", isOn: false, color: "#06D6A0" },
    { label: "漂亮", isOn: false, color: "#ffadad" },
    { label: "性格好", isOn: false, color: "#ffd6a5" },
  ]);

  const handleToggle = (currentIndex) => () => {
    setSwitches((prevSwitches) =>
      prevSwitches.map((item, index) =>
        index === currentIndex
          ? { ...item, isOn: !item.isOn }
          : item.isOn && prevSwitches.filter((item) => item.isOn).length >= 2
          ? { ...item, isOn: false }
          : item
      )
    );
  };

  return (
    <div className="App">
      {switches.map((item, index) => (
        <Switch
          key={item.label}
          handleToggle={handleToggle(index)}
          {...item}
        />
      ))}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
