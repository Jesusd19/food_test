import React from "react";
import useLogin from "../../../hooks/useLogin";
import "./logout.scss"

const Logout = () => {

  const { logout } = useLogin();

  return (
    <div className="a-logout" onClick={() => logout()}>
      <img src={require("../../../assets/image/ic_contrasena.png")} alt="" />
      <span>Salir</span>
    </div>
  );
};

export default Logout;
