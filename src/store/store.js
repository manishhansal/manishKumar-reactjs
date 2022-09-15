import { combineReducers, configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "./favoriteSlice";
import storage from "redux-persist/lib/storage";
import productReducer from "./productSlice";
import categoryReducer from "./categorySlice";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  favorite: favoriteReducer,
  product: productReducer,
  category: categoryReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export const persistor = persistStore(store);
