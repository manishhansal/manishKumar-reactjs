const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const Token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hbmlzaGhhbnNhbG1laEBnbWFpbC5jb20iLCJnaXRodWIiOiJodHRwczovL2dpdGh1Yi5jb20vbWFuaXNoaGFuc2FsIiwiaWF0IjoxNjYzMDY5Nzg1LCJleHAiOjE2NjM1MDE3ODV9.Qg_z-VFd_7L2T-N8i4Z-vE9DUUCCXrJEFWE-j4G5rLA";

export const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});

const productSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    status: STATUSES.IDLE,
  },
  reducers: {
    // setProducts(state, action) {
    //     state.data = action.payload;
    // },
    // setStatus(state, action) {
    //     state.status = action.payload;
    // },
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
      });
  },
});

export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;

// Thunks
export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  const res = await fetch(
    "https://upayments-studycase-api.herokuapp.com/api/products",
    {
      headers: {
        "Authorization": `Bearer ${Token}`,
      },
    }
  );
  const data = await res.json();
  return data.products;
});
