import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Clients from "./components/Clients";
import About from "./components/About";
import Feature from "./components/Feature";
import Pricing from "./components/Pricing";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import "./css/style.css";
import "./css/settings.css";
import "./css/custom.css";

function App() {
  return (
    <div className='site-wrapper'>
      <Header />
      <Hero />
      <Clients />
      <About />
      <Feature />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
