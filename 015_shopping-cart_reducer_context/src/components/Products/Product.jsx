import React from "react";
import styles from "./product.module.css";
import { useCart } from "../../context/CartProvider";
import { toast } from "react-toastify";
import { CiHeart } from "react-icons/ci";
import { CiStar } from "react-icons/ci";

function Product({ _id, title, thumbnail, price, discountPercentage, rating }) {
  const { cart, addItemtoCart } = useCart();

  const handleAdd = () => {
    console.log("handle add called");

    for (let item of cart) {
      if (item.id === _id) {
        alert("Item Already added to cart");
        return;
      }
    }
    const newCartItem = {
      id: _id,
      price: price,
      title: title,
      thumbnail: thumbnail,
      quantity: 1,
    };
    addItemtoCart(newCartItem);
    toast.info("Item Added!");
  };
  return (
    <div className={styles.productContainer}>
      <div className={styles.topicons}>
        <span className={styles.discount}>-{discountPercentage}%</span>
        <span className={styles.wishlist}>
          <CiHeart
            onClick={() => handleClick(_id)}
            className={`${styles.heartIcon}`}
          />
        </span>
      </div>
      <img src={thumbnail} className={styles.productImage} alt={title} />
      <div className="productDetails">
        <h5 className={styles.dressName}>{title}</h5>
        <div className="d-flex flex-column mb-2">
          <span className="new-price">
            $ {Math.round(price - (discountPercentage * price) / 100)}
          </span>
          <small className="old-price text-right">$ {price}</small>
        </div>
        <div>
          <CiStar className={`${styles.ratingStar}`} />

          <span className={styles.ratingNumber}>{rating}</span>
        </div>
      </div>
      <button onClick={handleAdd} className={styles.addToCartBtn}>
        Add to Cart
      </button>
    </div>
  );
}

export default Product;
