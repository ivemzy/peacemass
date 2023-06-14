import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Index from './components/Index';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import WhyUs from './components/pages/WhyUs';
import Leadership from './components/pages/Leadership';
import Consulting from './components/pages/Consulting';
import Delivery from './components/pages/Delivery';
import Integrated from './components/pages/Integrated';
import Hse from './components/pages/Hse';
import Report from './components/pages/Report';
import NewsEvent from './components/pages/NewsEvent';
import Products from './components/pages/Products';
import Contact from './components/pages/Contact';
// product section
import ProductFeed from './components/products/ProductFeed';
import Agric from './components/products/Agric';
import Medical from './components/products/Medical';
import Transformer from './components/products/Transformer';
import Block from './components/products/Block';
import Solar from './components/products/Solar';
import CattleFeed from './components/products/CattleFeed';
import ChemicalProducts from './components/products/ChemicalFeed';
import ChickenFeed from './components/products/ChickenFeed';
import FishMachine from './components/products/FishMachine';
import Transportation from './components/products/Transportation';
import Footer from './components/Footer';

function App() {
  return (
    <Router basename="/peacemass">
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/why-us" element={<WhyUs />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/consulting" element={<Consulting />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/integrated" element={<Integrated />} />
          <Route path="/hse" element={<Hse />} />
          <Route path="/report" element={<Report />} />
          <Route path="/newsevent" element={<NewsEvent />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact-us" element={<Contact />} />
          {/* product routes */}
          <Route path="/product-feed" element={<ProductFeed />} />
          <Route path="/agric" element={<Agric />} />
          <Route path="/medical" element={<Medical />} />
          <Route path="/transformer" element={<Transformer />} />
          <Route path="/block-machine" element={<Block />} />
          <Route path="/solar" element={<Solar />} />
          <Route path="/cattle-feed" element={<CattleFeed />} />
          <Route path="/chemical-products" element={<ChemicalProducts />} />
          <Route path="/chicken-feed" element={<ChickenFeed />} />
          <Route path="/fish-machine" element={<FishMachine />} />
          <Route path="/transportation" element={<Transportation />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
