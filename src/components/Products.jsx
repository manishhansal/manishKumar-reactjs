import React from "react";
import { useDispatch } from "react-redux";
import { add } from "../store/favoriteSlice";
import { STATUSES } from "../constants/constants";
import { Link } from "react-router-dom";
import { deleteProduct } from "../store/productSlice";

const Products = ({ products, status }) => {
  const dispatch = useDispatch();
  const handleAdd = (product, e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(add(product));
  };

  const handleDelete = (product, e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(deleteProduct(product));
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
        <Link
          to={`/product/${product._id}`}
          style={{ textDecoration: "none" }}
          key={product._id}
        >
          <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg items-center space-x-4">
            <img src={product.avatar} alt="" style={{width:"150px",height:"150px", borderRadius:"10px",margin:"auto"}} />
            <h4 className="mt-5">{product.name}</h4>
            <h5>{`₹ ${product.price}`}</h5>

            <button onClick={(e) => handleAdd(product, e)} className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 mb-5 mt-5">
              Add to favorite
            </button>
            <br />
            <button
              onClick={(e) => handleDelete(product._id, e)}
              className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
            >
              Delete Product
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Products;
