import React, { useState } from "react";
import ReactDOM from "react-dom";
import Switch from "./Switch";

const presets = [
  { title: "Life", labels: ["Sleep", "Study", "Social"] },
  { title: "Internet", labels: ["Fast", "Stable", "Cheap"] },
];

function App() {
  const [switches, setSwitches] = useState([
    { label: "Sleep", isOn: false, color: "#06D6A0" },
    { label: "Study", isOn: false, color: "#ffadad" },
    { label: "Social", isOn: false, color: "#ffd6a5" },
  ]);

  const handleToggle = (currentIndex) => () => {
    setSwitches((prevSwitches) => {
      const switchesOn = prevSwitches.filter((item) => item.isOn);
      if (prevSwitches[currentIndex].isOn) {
        return prevSwitches.map((item, index) =>
          index === currentIndex ? { ...item, isOn: false } : item
        );
      } else if (switchesOn.length < 2) {
        return prevSwitches.map((item, index) =>
          index === currentIndex ? { ...item, isOn: true } : item
        );
      } else {
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

  const applyPreset = (preset) => () => {
    setSwitches((prevSwitches) =>
      prevSwitches.map((item, index) => ({
        ...item,
        label: preset.labels[index] || item.label,
      }))
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
      <div className="right-panel">
        <div className="inputs">
          {switches.map((item, index) => (
            <input
              value={item.label}
              onChange={handleChange(index)}
              placeholder="输入你的选项"
            />
          ))}
        </div>
        <div className="presets">
          {presets.map((preset) => (
            <button onClick={applyPreset(preset)}>{preset.title}</button>
          ))}
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
