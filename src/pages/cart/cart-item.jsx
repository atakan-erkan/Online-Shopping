import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const CartItem = (props) => {
  const { id, title, price, images } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);
  return (
    <div className="col-12 col-sm-4 mt-4">
      <div className="d-flex flex-column flex-sm-row align-items-center border border-secondary rounded p-3 test-list-box">
        <div className="d-flex ml-4 ml-3 flex-column test-list-description">
          <h2 className="" id="heading0">
            {title}
          </h2>
          <div className="row">
            <div className="col-md-6">
              <div className="mt-3" aria-labelledby="heading0">
                <h2 id="heading0">{price} $</h2>
              </div>
            </div>
          </div>
          <div className="mt-3 countHandler" aria-labelledby="heading0">
            <button onClick={() => removeFromCart(id)} className="bg-danger">
              {" "}
              -{" "}
            </button>
            <input
              value={cartItems[id]}
              onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
            />
            <button onClick={() => addToCart(id)} className="bg-success">
              {" "}
              +{" "}
            </button>
          </div>
        </div>

        <div className="test-list-image" aria-labelledby="heading0">
          <img src={images[0]} className="rounded-3" alt="" loading="lazy" />
        </div>
      </div>
    </div>
  );
};
