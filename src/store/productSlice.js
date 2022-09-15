import { STATUSES } from "../constants/constants";
import { TOKEN } from "../constants/constants";
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const productSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    status: STATUSES.IDLE,
  },
  reducers: {
    deleteProduct(state, action) {
      let new_state = state.data.filter((item) => item._id !== action.payload);
      state.data = new_state;
      return state;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = STATUSES.IDLE;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = STATUSES.ERROR;
      })
  },
});

export const { deleteProduct } = productSlice.actions;
export default productSlice.reducer;

// Fetch all products
export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  const res = await fetch(
    "https://upayments-studycase-api.herokuapp.com/api/products",
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    }
  );
  const data = await res.json();
  return data.products;
});