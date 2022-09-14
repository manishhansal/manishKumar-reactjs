import { configureStore } from '@reduxjs/toolkit';
import favoriteReducer from './favoriteSlice';
import productReducer from './productSlice';
const store = configureStore({
    reducer: {
        favorite: favoriteReducer,
        product: productReducer,
    },
});

export default store;