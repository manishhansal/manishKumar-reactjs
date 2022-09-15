import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../store/favoriteSlice";

const Favorite = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.favorite);
  const handleRemove = (productId) => {
    dispatch(remove(productId));
  };

  return (
    <div>
      <h3>Favorite Page</h3>
      <div className="cartWrapper">
        {products.map((product) => (
          <div key={product._id} className="cartCard">
            <img src={product.avatar} alt="" />
            <h5>{product.name}</h5>
            <h5>{product.price}</h5>
            <button className="btn" onClick={() => handleRemove(product._id)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorite;
