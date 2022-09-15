import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Favorite from "./pages/Favorite";
import ProductDetails from "./pages/ProductDetails";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/favorite" element={<Favorite />}></Route>
        <Route path="/product/:productId" element={<ProductDetails />}></Route>
      </Routes>
    </div>
  );
}

export default App;
