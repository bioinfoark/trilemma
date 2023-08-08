import React from "react";

const Switch = ({ label, isOn, handleToggle, color }) => (
  <div>
    <input
      checked={isOn}
      onChange={handleToggle}
      className="react-switch-checkbox"
      id={`${label}`}
      type="checkbox"
    />
    <label
      style={{ background: isOn && color }}
      className="react-switch-label"
      htmlFor={`${label}`}
    >
      <span className={`react-switch-button`} />
      {label}
    </label>
  </div>
);

export default Switch;
