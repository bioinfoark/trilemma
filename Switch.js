import React from "react";
import Switch from "react-switch";

const MySwitch = ({ label, isOn, handleToggle, color }) => (
  <div>
    <Switch
      checked={isOn}
      onChange={handleToggle}
      onColor={color}
      offColor="#ccc"
      onHandleColor="#fff"
      handleDiameter={30}
      uncheckedIcon={false}
      checkedIcon={false}
      boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
      activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
      height={20}
      width={48}
      className="react-switch"
    />
    <label>
      {label}
    </label>
  </div>
);

export default MySwitch;
