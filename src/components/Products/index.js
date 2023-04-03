import { useState } from "react";
import List from "./List";

import { useEffect } from "react";
import "./style.css";
import axios from "axios";

function Products() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await axios.get("https://dummyjson.com/products");
    setProducts(response.data.products);
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container">
      <List products={products} />
    </div>
  );
}

export default Products;
