import { useNavigate } from "react-router-dom";
const useLogin = () => {
  const navigate = useNavigate();

  const login = (user, password) => {
    fetch("https://pruebas-muy-candidatos.s3.us-east-2.amazonaws.com/RH.json")
      .then((response) => response.json())
      .then(({ response: { users } }) => {
        const validateUser = users.find(
          (element) => element.email === user && element.password === password
        );
        if (validateUser) {
          localStorage.setItem("session", JSON.stringify(validateUser));
          navigate("/tienda");
        }
      });
  };

  const logout = () => {
    localStorage.removeItem("session");
    navigate("/");
  };

  const isLogin = () => {
    let isL = localStorage.getItem("session");
    if (isL) {
      return true;
    }
    return false;
  };

  //   const validatePersonalData = (user, password) => user && password;

  return { login, logout, isLogin };
};

export default useLogin;
