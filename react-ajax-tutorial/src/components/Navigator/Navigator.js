import React from "react";
import "./Navigator.css";
import { Button } from "semantic-ui-react";

const Navigator = () => (
  <div className="Navigator">
    <Button
      color="teal"
      content="Pervious"
      icon="left arrow"
      labelPosition="left"
    />
    <div className="Navigator-page-num">1</div>
    <Button
      color="teal"
      content="Next"
      icon="right arrow"
      labelPosition="right"
      className="Navigator-right-button"
    />
  </div>
);

export default Navigator;
