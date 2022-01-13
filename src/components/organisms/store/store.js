import React, { useState, useEffect } from "react";
import "./store.scss";

import useLogin from "../../../hooks/useLogin";

import { useNavigate } from "react-router-dom";
import Logout from "../../atoms/logout/logout";
import CardStore from "../../atoms/cardStore/cardStore";
import ModalStore from "../../molecules/modalStore/modalStore";

const Store = () => {
  const [listStores, setListStores] = useState([]);
  const [searchWord, setSearchWord] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [selectStore, setSelectStore] = useState(-1);

  const { isLogin } = useLogin();
  const navigate = useNavigate();

  const getStores = () => {
    fetch("https://pruebas-muy-candidatos.s3.us-east-2.amazonaws.com/RH.json")
      .then((response) => response.json())
      .then(({ response: { stores } }) => {
        setListStores(stores);
      });
  };

  const filterStores = () => {
    if (searchWord) {
      const resultData = listStores.filter(
        (el) =>
          el.name.toLowerCase().includes(searchWord.toLowerCase()) ||
          el.address.toLowerCase().includes(searchWord.toLowerCase())
      );
      return resultData;
    }
    return listStores;
  };

  useEffect(() => {
    if (isLogin()) {
      getStores();
    } else {
      navigate("/");
    }
  }, []);

  return (
    <div className="o-store">
      <Logout />
      <input
        type={"text"}
        value={searchWord}
        placeholder="Pizzerías"
        onChange={(e) => setSearchWord(e.target.value)}
      />
      <h1>Tiendas</h1>
      <h4>Escoge tu pizzería favorita</h4>
      <div className="o-store__card">
        {filterStores().map((store) => (
          <CardStore key={store.id} store={store} openModal={setOpenModal} setSelectStore={setSelectStore} />
        ))}
      </div>
      {openModal && <ModalStore setOpenModal={setOpenModal} listProduct={selectStore} />}
    </div>
  );
};

export default Store;
