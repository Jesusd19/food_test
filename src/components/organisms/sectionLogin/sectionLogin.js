import React, { useState } from "react";
import "./sectionLogin.scss";

import Input from "../../atoms/input/input";

import { Link } from "react-router-dom";
import Button from "../../atoms/button/button";
import Logo from "../../../assets/image/Login-Best-Pizza.png";

import useLogin from "../../../hooks/useLogin";

const SectionLogin = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [empty, setempty] = useState(false);
  const { login } = useLogin();

  const handleLogin = () => {
    if (user && password) {
      setempty(false);
      login(user, password);
    } else {
      setempty(true);
    }
  };

  return (
    <div className="o-sectionLogin">
      <div className="o-sectionLogin__content">
        <Link to="/">
          <img alt="Logo" src={Logo} className="logo" />
        </Link>
        <h1 className="">Bienvenido</h1>
        <h2 className="o-sectionLogin__content__subtitle">
          A las mejores pizzas del país
        </h2>
        <Input
          icon="user"
          name="Usuario"
          value={user}
          change={setUser}
          type={"text"}
        />
        <Input
          icon="password"
          name="Contraseña"
          value={password}
          type="password"
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
        <Button actionClick={handleLogin} name={"Iniciar sesión"} />
        {empty && <p>Faltan datos por llenar</p>}
      </div>
    </div>
  );
};

export default SectionLogin;
