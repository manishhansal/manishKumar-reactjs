import { STATUSES } from "../constants/constants";
import { TOKEN } from "../constants/constants";
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const categorySlice = createSlice({
  name: "category",
  initialState: {
    data: [],
    status: STATUSES.IDLE,
  },
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategory.pending, (state, action) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(fetchCategory.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = STATUSES.IDLE;
      })
      .addCase(fetchCategory.rejected, (state, action) => {
        state.status = STATUSES.ERROR;
      })
  },
});

// export const { } = categorySlice.actions;
export default categorySlice.reducer;

// Fetch all categories.
export const fetchCategory = createAsyncThunk("category/fetch", async () => {
  const res = await fetch(
    "https://upayments-studycase-api.herokuapp.com/api/categories",
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    }
  );
  const data = await res.json();
  return data.categories;
});