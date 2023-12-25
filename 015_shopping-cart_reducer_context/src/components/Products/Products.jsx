import React from "react";
import { products } from "../../data/products";
import Product from "./Product";
import "./products.css";

function Products() {
  return (
    <div>
      {products &&
        products.map((product) => <Product key={product.id} {...product} />)}
    </div>
  );
}

export default Products;
