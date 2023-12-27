import React from "react";
import "./products.css";
import { useCart } from "../../context/CartProvider";

function Product({ id, title, price, img }) {
  const { cart, addItemtoCart } = useCart();

  const handleAdd = () => {
    console.log("handle add called");

    for (let item of cart) {
      if (item.id === id) {
        alert("Item Already added to cart");
        return;
      }
    }
    const newCartItem = {
      id: id,
      price: price,
      title: title,
      img: img,
      quantity: 1,
    };
    addItemtoCart(newCartItem);
    alert("Item Added");
  };
  return (
    <div className="product-container">
      <p>{id}</p>
      <img src={img} alt={`image_${title}`} height={200} />
      <h3> title : {title}</h3>
      <h4> price : {price}</h4>
      <button onClick={handleAdd}>Add to Cart</button>
    </div>
  );
}

export default Product;
