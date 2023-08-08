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
          ? { ...item, isOn: Math.random() < 0.5 }
          : item
      )
    );
  };

  const handleChange = (index) => (event) => {
    const newLabel = event.target.value;
    setSwitches((prevSwitches) =>
      prevSwitches.map((item, i) =>
        i === index ? { ...item, label: newLabel } : item
      )
    );
  };

  return (
    <div className="App">
      {switches.map((item, index) => (
        <div key={item.label}>
          <Switch handleToggle={handleToggle(index)} {...item} />
          <input
            value={item.label}
            onChange={handleChange(index)}
            placeholder="输入你的选项"
          />
        </div>
      ))}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
