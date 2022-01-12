import React, { useState } from "react";
import "./sectionLogin.scss";

import Input from "../../atoms/input/input";

import { Link } from "react-router-dom";
import Button from "../../atoms/button/button";
import Logo from "../../../assets/image/Login-Best-Pizza.png";

const SectionLogin = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {};
  return (
    <div className="o-sectionLogin">
      <div className="o-sectionLogin__content">
        <Link to="/">
          <img alt="Logo" src={Logo} className="logo" />
        </Link>
        <h1 className="">Bienvenido</h1>
        <h2 className="o-sectionLogin__content__subtitle">
          A las mejores pizzas del paíz
        </h2>
        <Input icon="user" name="Usuario" value={user} change={setUser} />
        <Input
          icon="password"
          name="Contraseña"
          value={password}
          change={setPassword}
        />
        <p
          className="o-sectionLogin__content__forgot"
          onClick={() =>
            alert("Opps!! Sucedio un pequeño fallo, intente mas tarde")
          }
        >
          ¿Olvidaste tu contraseña?
        </p>
        <Button actionClick={login} name={"Iniciar sesión"} />
      </div>
    </div>
  );
};

export default SectionLogin;
