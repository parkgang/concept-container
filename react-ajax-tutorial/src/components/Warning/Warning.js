import React from "react";
import "./Warning.css";

const Warning = ({ message, visible }) => {
  return (
    <div className="Warning-wrapper">
      <div className="Warning animated bounceIn">{message}</div>
    </div>
  );
};

export default Warning;
