import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import MainHeader from "./components/Header";
import "../src/css/main.css";
import Products from "./components/Products";
import ProductForm from "./components/ProductForm";

function App() {
  return (
    <BrowserRouter>
      <MainHeader />
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/admin/add-product" element={<ProductForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
