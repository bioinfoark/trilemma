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
    setSwitches((prevSwitches) => {
      const switchesOn = prevSwitches.filter((item) => item.isOn);
      if (switchesOn.length < 2) {
        // If less than 2 switches are on, simply toggle the current switch
        return prevSwitches.map((item, index) =>
          index === currentIndex ? { ...item, isOn: !item.isOn } : item
        );
      } else if (prevSwitches[currentIndex].isOn) {
        // If the current switch is on, we can simply turn it off
        return prevSwitches.map((item, index) =>
          index === currentIndex ? { ...item, isOn: false } : item
        );
      } else {
        // If the current switch is off and 2 switches are already on, turn off a random one
        const switchOffIndex =
          switchesOn[Math.floor(Math.random() * switchesOn.length)].index;
        return prevSwitches.map((item, index) =>
          index === currentIndex
            ? { ...item, isOn: true }
            : index === switchOffIndex
            ? { ...item, isOn: false }
            : item
        );
      }
    });
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
      <div className="switches">
        {switches.map((item, index) => (
          <div key={item.label}>
            <Switch handleToggle={handleToggle(index)} {...item} />
          </div>
        ))}
      </div>
      <div className="inputs">
        {switches.map((item, index) => (
          <input
            value={item.label}
            onChange={handleChange(index)}
            placeholder="输入你的选项"
          />
        ))}
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
