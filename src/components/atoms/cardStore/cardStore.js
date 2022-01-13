import React from "react";
import "./cardStore.scss";

const CardStore = (props) => {
  const { store, openModal, setSelectStore } = props;
  return (
    <div className="card-store" onClick={() => {openModal(true); setSelectStore(store)}}>
      <img src={require(`../../../assets/image/${store.id}.png`)} alt="" loading="lazy" />
      <p>{store.name}</p>
      <span>{store.address}</span>
    </div>
  );
};

export default CardStore;
