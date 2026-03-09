
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Loginform from "./components/Loginform";
import Product from "./components/Product";
import Shopping from "./components/Shopping";

function App() {
  const products = [
    { id: 1, title: "iPhone 15", price: 79999 },
    { id: 2, title: "Samsung S24", price: 69999 },
    { id: 3, title: "Boat Headphones", price: 1999 }
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => {
      const exist = prev.find((p) => p.id === product.id);
      if (exist) {
        return prev.map((p) =>
          p.id === product.id ? { ...p, qty: p.qty + 1 } : p
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <BrowserRouter>
      <Navbar cartCount={cartCount} />
      <Routes>
        <Route path="/" element={<Product products={products} addToCart={addToCart} />} />
        <Route path="/cart" element={<Shopping cart={cart} />} />
        <Route path="/login" element={<Loginform />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
