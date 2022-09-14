import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Favorite from "./pages/Favorite";
import ProductDetails from "./pages/ProductDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/favorite" element={<Favorite />}></Route>
            <Route
              path="/product/:productId"
              element={<ProductDetails />}
            ></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
