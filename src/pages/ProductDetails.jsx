import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TOKEN } from "../constants/constants";

const ProductDetails = () => {
  const [data, setData] = useState(null);
  const { productId } = useParams();

  useEffect(() => {
    fetchProductById();
  }, []);

  const fetchProductById = async () => {
    const res = await fetch(
      `https://upayments-studycase-api.herokuapp.com/api/products/${productId}`,
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      }
    );
    const data = await res.json();
    setData(() => data.product);
  };

  if (data === null) {
    return <h2>Loading....</h2>;
  }

  return (
    <div>
      <h2>Product Details Page</h2>
      <div className="card">
        <img src={data.avatar} alt="avatar" />
        <h4>{data.name}</h4>
        <h5>{`₹ ${data.price}`}</h5>
        <h5>{data.description}</h5>
        <h5>{data.developerEmail}</h5>
      </div>
    </div>
  );
};

export default ProductDetails;
