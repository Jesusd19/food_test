import React from "react";
import "./modalStore.scss";

const ModalStore = (props) => {
  const { listProduct, setOpenModal } = props;
  console.log(listProduct);
  return (
    <div className="m-modalStore">
      <div className="m-modalStore__content">
        <span
          onClick={() => setOpenModal(false)}
          className="m-modalStore__content__comeback paddingDesk"
        >
          Volver
        </span>
        <h1 className="paddingDesk">{listProduct.name}</h1>
        <img
        className="logo_store paddingDesk"
          src={require(`../../../assets/image/${listProduct.id}.png`)}
          alt=""
        />
        <p className="m-modalStore__content__description paddingDesk">
          {listProduct.description}
        </p>
        <h2 className="paddingDesk">Productos</h2>
        <div className="m-modalStore__content__products">
          {listProduct.products.map((product) => (
            <div className="card__product">
              <img
                src={require(`../../../assets/image/p${product.id}.png`)}
                alt=""
              />
              <p>{product.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ModalStore;
