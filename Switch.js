import React from "react";
import ReactSwitch from "react-switch";

function Switch({ label, isOn, handleToggle, color }) {
  return (
    <div>
      <label>
        <span>{label}</span>
        <ReactSwitch
          checked={isOn}
          onChange={handleToggle}
          offColor="#222"
          onColor={color}
          uncheckedIcon={false}
          checkedIcon={false}
          width={48}
          handleDiameter={24}
        />
      </label>
    </div>
  );
}

export default Switch;
import React from "react";
import ReactSwitch from "react-switch";

function Switch({ label, isOn, handleToggle, color }) {
  return (
    <div>
      <label>
        <span>{label}</span>
        <ReactSwitch
          checked={isOn}
          onChange={handleToggle}
          offColor="#222"
          onColor={color}
          uncheckedIcon={false}
          checkedIcon={false}
          width={48}
          handleDiameter={24}
        />
      </label>
    </div>
  );
}

export default Switch;
