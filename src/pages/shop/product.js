import { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const Product = (props) => {
  const { id, title, description, price, stock, images } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);
  return (
    <div className="col-12 col-sm-4 mt-4">
      <div className="d-flex flex-column flex-sm-row align-items-center border border-secondary rounded p-3 test-list-box">
        <div className="d-flex ml-4 ml-3 flex-column test-list-description">
          <h2 className="" id="heading0">
            {title}
          </h2>
          <div className="test-list-summary">{description}</div>
          <div className="row">
            <div className="col-md-6">
              <div className="mt-3" aria-labelledby="heading0">
                <h2 id="heading0">{price} $</h2>
              </div>
            </div>
            <div className="col-md-6">
              <div className="mt-3" aria-labelledby="heading0">
                <h2 className="float-end" id="heading0">
                  Stok: {stock}
                </h2>
              </div>
            </div>
          </div>

          <div className="mt-3" aria-labelledby="heading0">
            <button
              onClick={() => addToCart(id)}
              className="btn btn-rounded btn2"
              style={{ background: "#125B50", color: "white" }}
            >
              Sepete Ekle {cartItems[id] > 0 && <>({cartItems[id]})</>}
            </button>
          </div>
        </div>

        <div className="test-list-image" aria-labelledby="heading0">
          <a href="/tests">
            <img src={images[0]} className="rounded-3" alt="" loading="lazy" />
          </a>
        </div>
      </div>
    </div>
  );
};
