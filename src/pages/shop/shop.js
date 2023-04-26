import "./shop.css";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const Shop = () => {
  const { filtered } = useContext(ShopContext);
  return (
    <>
      <div id="products">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="row" id="ürünler">
                {filtered.map((product) => (
                  <Product data={product} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="total mt-3">{PRODUCTS.length} Ürün</p>
    </>
  );
};
