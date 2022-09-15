const { createSlice } = require('@reduxjs/toolkit');

const favoriteSlice = createSlice({
    name: 'favorite',
    initialState: [],
    reducers: {
        add(state, action) {
            state.push(action.payload);
        },
        remove(state, action) {
            return state.filter((item) => item._id !== action.payload);
        },
    },
});

export const { add, remove } = favoriteSlice.actions;
export default favoriteSlice.reducer;