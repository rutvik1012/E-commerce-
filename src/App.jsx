import React, { useEffect, useState } from "react";
import Main from "./components/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ID2Elec from "./components/ID2Elec";
import ID3Furni from "./components/ID3Furni";
import ID4Shoes from "./components/ID4Shoes";
import ID5Miscell from "./components/ID5Miscell";
import Cart from "./components/Cart";
const App = () => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (item) => {
    setCart((prev) => {
      const exists = prev.find((p) => p.id === item.id);

      if (exists) {
        // Item already in cart → only increase quantity
        return prev.map((p) =>
          p.id === item.id ? { ...p, qty: p.qty + 1 } : p
        );
      }

      // First time adding → add once with qty = 1
      return [...prev, { ...item, qty: 1 }];
    });
  };

  return (
    <>
      <BrowserRouter basename="/E-commerce-">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/Elecronics"
            element={<ID2Elec onAddToCart={handleAddToCart} />}
          />
          <Route
            path="/Furniture"
            element={<ID3Furni onAddToCart={handleAddToCart} />}
          />
          <Route
            path="/Shoes"
            element={<ID4Shoes onAddToCart={handleAddToCart} />}
          />
          <Route
            path="/Miscell"
            element={<ID5Miscell onAddToCart={handleAddToCart} />}
          />
          <Route
            path="/Cart"
            element={<Cart cart={cart} setCart={setCart} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
