import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const Token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hbmlzaGhhbnNhbG1laEBnbWFpbC5jb20iLCJnaXRodWIiOiJodHRwczovL2dpdGh1Yi5jb20vbWFuaXNoaGFuc2FsIiwiaWF0IjoxNjYzMDY5Nzg1LCJleHAiOjE2NjM1MDE3ODV9.Qg_z-VFd_7L2T-N8i4Z-vE9DUUCCXrJEFWE-j4G5rLA";

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
          Authorization: `Bearer ${Token}`,
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
        <h5>{data.price}</h5>
        <h5>{data.description}</h5>
        <h5>{data.developerEmail}</h5>
      </div>
    </div>
  );
};

export default ProductDetails;
