import React from "react";
import "./products.css";

function Product({ id, title, price, img }) {
  return (
    <div className="product-container">
      <p>{id}</p>
      <img src={img} alt={`image_${title}`} height={200} />
      <h3> title : {title}</h3>
      <h4> price : {price}</h4>
      <button>Add to Cart</button>
    </div>
  );
}

export default Product;
