import React, { useState } from 'react';
import Switch from 'react-switch'; // 假设我们使用'react-switch'库

function TrilemmaSwitches() {
  const [switchStates, setSwitchStates] = useState({
    有钱: false,
    漂亮: false,
    性格好: false
  });

  const handleSwitchChange = (label) => {
    setSwitchStates(prevState => {
      let newState = { ...prevState };
      newState[label] = !newState[label];
      
      const labels = Object.keys(newState);
      const activeLabels = labels.filter(l => newState[l]);

      // 当开启的开关超过两个时，关闭第一个开启的开关
      if (activeLabels.length > 2) {
        newState[activeLabels[0]] = false;
      }

      return newState;
    });
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      {Object.keys(switchStates).map(label => (
        <div key={label} style={{ margin: '0 20px' }}>
          <Switch
            onChange={() => handleSwitchChange(label)}
            checked={switchStates[label]}
          />
          <p>{label}</p>
        </div>
      ))}
    </div>
  );
}

export default TrilemmaSwitches;
