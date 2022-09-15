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
    <div className="flex justify-center items-center">
      <div>
        <h2 className="font-bold">Product Details Page</h2>
        <div className="p-6 max-w-lg mx-auto bg-white rounded-xl shadow-lg items-center space-x-4">
          <img
            src={data.avatar}
            alt="avatar"
            style={{
              width: "150px",
              height: "150px",
              borderRadius: "10px",
              margin: "auto",
            }}
          />
          <h4 className="font-bold">{data.name}</h4>
          <h5>{`₹ ${data.price}`}</h5>
          <h5>{data.description}</h5>
          <h5>{data.developerEmail}</h5>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
