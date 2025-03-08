import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import About from "./components/About";
import NavBar from "./routes/NavBar";

function App() {
  const [totalPrice, setTotalPrice] = useState(0); // ✅ Move totalPrice to App.jsx

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products setTotalPrice={setTotalPrice} totalPrice={totalPrice} />} />
        <Route path="/about" element={<About totalPrice={totalPrice} />} />
      </Routes>
    </Router>
  );
}

export default App;



