import React from "react";
import "./AdminPanel.css";

function ManageProduct({
  _id,
  title,
  thumbnail,
  price,
  discountPercentage,
  rating,
}) {
  const deleteProduct = async (product) => {
    const res = await axios.delete(
      `http://localhost:8080/products/${_id}`,
      product
    );
    console.log(res.data);
    // setProduct(res.data);
  };
  return (
    <div className="">
      <p>{title}</p>
      <img src={thumbnail} height={60} width={60} />
      <button onClick={deleteProduct}>Delete</button>
    </div>
  );
}

export default ManageProduct;
