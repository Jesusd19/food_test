import React from "react";
import useLogin  from "../../../hooks/useLogin";

const Layout = (props) => {
  
  const { isLogin } = useLogin()

  return (
    <main className="main">
      <section className="section-l">
        <img src={require("../../../assets/image/Pizza.png")} alt="" className="pizza" />
        {isLogin() && <img src={require("../../../assets/image/Logo.png")} alt="" className="pizza__logo" />}
      </section>
      <section className="section-r">{props.children}</section>
    </main>
  );
};

export default Layout;
