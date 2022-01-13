import React from "react";
import "./input.scss";

import IconUser from "../../../assets/image/ic_usuario.png";
import IconPassword from "../../../assets/image/ic_contrasena.png";

const Input = (props) => {
  return (
    <div className="a-input-group">
      <input
        type={props.type}
        placeholder={props.name}
        defaultValue={props.value}
        className="a-input-group__input"
        onChange={e => props.change(e.target.value)}
      />
      <img
        className="icon"
        src={props.icon === "password" ? IconPassword : IconUser}
        alt={props.name}
      />
    </div>
  );
};

export default Input;
