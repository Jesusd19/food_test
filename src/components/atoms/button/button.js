import React from "react";
import "./button.scss"

const Button = (props) => {
  const { actionClick, name } = props;
  return (
    <button onClick={() => actionClick()} className="a-button">
      {name}
    </button>
  );
};

export default Button;
