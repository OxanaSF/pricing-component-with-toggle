import React from "react";
import "./Toggle.css";

const Toggle = () => {
  return (
    <div className="toggle-main">
      <div>Annually</div>
      <label class="switch">
        <input type="checkbox" checked />
        <span class="slider round"></span>
      </label>

      <div>Monthly</div>
    </div>
  );
};

export default Toggle;
