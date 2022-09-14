import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/favoriteSlice";
import { fetchProducts } from "../store/productSlice";
import { STATUSES } from "../store/productSlice";
import { Link } from "react-router-dom";

// avatar
// :
// "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
// category
// :
// "Clothing"
// createdAt
// :
// "2022-08-28T00:05:18.048Z"
// description
// :
// "Black Leather Jacket, used the finest leather for making a jacket. single color available."
// developerEmail
// :
// "vishalkr275@gmail.com"
// name
// :
// "Leather Jacket ( Black )"
// price
// :
// 478
// updatedAt
// :
// "2022-08-28T00:05:18.048Z"

const Products = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.product);
  console.log(products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const handleAdd = (product) => {
    dispatch(add(product));
  };

  if (status === STATUSES.LOADING) {
    return <h2>Loading....</h2>;
  }

  if (status === STATUSES.ERROR) {
    return <h2>Something went wrong!</h2>;
  }
  return (
    <div className="productsWrapper">
      {products.map((product) => (
        <Link to={`/product/${product._id}`} style={{textDecoration:"none"}}>

        <div className="card" key={product._id}>
          <img src={product.avatar} alt="" />
          <h4>{product.name}</h4>
          <h5>{product.price}</h5>
          
          <button onClick={() => handleAdd(product)} className="btn">
            Add to favorite
          </button>
        </div>
        </Link>
      ))}
    </div>
  );
};

export default Products;
