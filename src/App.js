import React from "react";
import { BrowserRouter as Router } from "react-router-dom"
import { GlobalStyle } from "./globalStyles";
import Hero from "./components/Hero";
import Sidebar from "./components/Sidebar";
import Products from "./components/Products";
import productData from "./components/Products/data.js";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Sidebar />
      <Products heading="Top Guitars of the Week" data={productData}/>
      </Router>
    
  );
}

export default App;
