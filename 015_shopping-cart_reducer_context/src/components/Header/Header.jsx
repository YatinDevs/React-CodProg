import React, { useState } from "react";
import "./Header.css";
import Modal from "../UI/Modal";
import Cart from "../Cart/Cart";
function Header() {
  const [showModal, setShowModal] = useState(false);

  const handleCart = () => {
    setShowModal((prev) => !prev);
  };
  return (
    <header>
      <nav>
        <h1 className="logo">Retro Store</h1>
        <button onClick={handleCart}>Show Cart</button>
      </nav>
      {showModal && (
        <Modal>
          <Cart handleCart={handleCart} />
        </Modal>
      )}
    </header>
  );
}

export default Header;
