import React from "react";
import "./App.scss";

import Login from "./pages/login";
import ListProduct from "./pages/listProduct";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/tienda" element={<ListProduct />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
