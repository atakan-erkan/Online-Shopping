import React, { useContext } from "react";
import "./cart.css";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const {
    cartItems,
    getTotalCartAmount,
    checkout,
    filtered,
    promosyon,
    changeTotal,
  } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  const yıl = promosyon.substring(0, 4);

  const x = 2023 - Number(yıl);

  const E = promosyon[8];
  const F = promosyon[9];
  const G = promosyon[10];
  const H = promosyon[11];

  const totalPromosyon =
    (Number(E) * x * x * x + Number(F) * x * x + Number(G) * x + H) /
    (x * x * x * x);
  return (
    <>
      <div id="cart">
        <div className="container">
          <div className="row">
            {filtered.map((product) => {
              if (cartItems[product.id] !== 0) {
                return <CartItem data={product} />;
              }
            })}
          </div>
          <div className="row">
            {totalAmount > 0 ? (
              <div className="checkout">
                <p className="total"> Toplam: ${totalAmount} </p>
                <p className="total"> Promosyon: ${totalPromosyon}</p>
                <p className="total">
                  {" "}
                  Promosyonlu Fiyat: ${totalAmount - totalPromosyon}
                </p>
                <button onClick={() => navigate("/")}>
                  {" "}
                  Alışverişe Devam Et{" "}
                </button>
                <button
                  onClick={() => {
                    checkout();
                    navigate("/checkout");
                  }}
                >
                  {" "}
                  Alışverişi Bitir{" "}
                </button>
                <label htmlFor="" style={{ fontSize: "24px" }}>
                  Promosyon Kodu:
                </label>
                <input
                  type="text"
                  onChange={changeTotal}
                  value={promosyon}
                  style={{ fontSize: "20px", paddingLeft: "5px" }}
                />
              </div>
            ) : (
              <h1>Alışveriş Sepetiniz Boş</h1>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
