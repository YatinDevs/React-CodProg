import React from "react";
import { useCart } from "../../context/CartProvider";
import CartItem from "./CartItem";
function Cart({ handleCartModal }) {
  const { cart, addItemtoCart } = useCart();
  console.log(cart, addItemtoCart);

  let totalAmount = 0;
  // for (let item of cart) {
  //   totalAmount += item.price * item.quantity;
  // }

  totalAmount = cart.reduce((acc, currItem) => {
    return acc + currItem.price * currItem.quantity;
  }, 0);

  if (cart.length === 0)
    return (
      <>
        <h1>No Items Found</h1>{" "}
        <button onClick={handleCartModal}>Close Cart</button>
      </>
    );
  return (
    <>
      <div>
        <h1>Cart</h1>
        <div className="cart">
          {cart && cart.map((item) => <CartItem {...item} key={item.id} />)}
        </div>
        <button onClick={handleCartModal}>Close Cart</button>
      </div>
      <h1>Total Amount : {totalAmount}</h1>
    </>
  );
}

export default Cart;
