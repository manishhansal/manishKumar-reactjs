import React, { useEffect, useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Products from "./Products";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/productSlice";
import CreateProduct from "./CreateProduct";

const Filter = ({ input }) => {
  const [filter, setFilter] = useState("");
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  let filterData = products;
  if (filter === "" || filter === "None") {
    filterData = products;
  } else {
    let temp = products.filter((item) => item.category === filter);
    filterData = temp;
  }

  return (
    <div>
      <div className="w-full flex space-x-[75%]">
        <CreateProduct />
        <FormControl sx={{ m: 1, minWidth: 150 }}>
          <InputLabel id="demo-simple-select-autowidth-label">
            Filter
          </InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={filter}
            onChange={handleChange}
            autoWidth
            label="Filter"
          >
            <MenuItem value="None">
              <em>None</em>
            </MenuItem>
            {input?.map((item) => (
              <MenuItem value={item.name} key={item._id}>
                {item.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <Products products={filterData} status={status} />
    </div>
  );
};

export default Filter;
