import React from "react";
import { useCart } from "../../context/CartProvider";
import "./cart.css";
function CartItem({ id, title, price, quantity, img }) {
  const { increaseQuantity, decreaseQuantity, removeItemfromCart } = useCart();
  return (
    <div className="cart-container">
      <img src={img} alt={title} />
      <p>Product : {title}</p>
      <p>
        Price : {price}*{quantity} = {price * quantity}
      </p>
      <button
        onClick={() => {
          // Base Case
          if (quantity <= 1) {
            return;
          }
          decreaseQuantity(id);
        }}
      >
        -
      </button>
      {quantity}
      <button
        onClick={() => {
          increaseQuantity(id);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          removeItemfromCart(id);
        }}
      >
        Remove Item
      </button>
    </div>
  );
}

export default CartItem;
