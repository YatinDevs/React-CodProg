import React from "react";

function Cart({ handleCart }) {
  return (
    <div>
      <h1>Cart</h1>
      <button onClick={handleCart}>Close Cart</button>
    </div>
  );
}

export default Cart;
