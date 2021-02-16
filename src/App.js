import React from "react";
import { BrowserRouter as Router } from "react-router-dom"
import { GlobalStyle } from "./globalStyles";
import Hero from "./components/Hero";
import Sidebar from "./components/Sidebar";
import Products from "./components/Products";
import { productData, productDataTwo } from "./components/Products/data.js";
import Feature from "./components/Feature";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Sidebar />
      <Products heading="Top Guitars of the Week" data={productData} />
      <Feature />
      <Products heading="Top Amp of the Week" data={productDataTwo} />
      <Footer />
      </Router>
    
  );
}

export default App;
