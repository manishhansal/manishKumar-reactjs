import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Filter from "../components/Filter";
import { fetchCategory } from "../store/categorySlice";

const Home = () => {
  const dispatch = useDispatch();
  const { data: category, status } = useSelector((state) => state.category);
  
  useEffect(() => {
    dispatch(fetchCategory());
  }, []);
  return (
    <div>
      <section>
        <h3 className="font-bold font-sans">Products</h3>
        <Filter input={category} />
      </section>
    </div>
  );
};

export default Home;
