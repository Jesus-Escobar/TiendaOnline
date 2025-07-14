import NavigationBar from './components/NavigationBar';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import ReturnOrder from './pages/ReturnOrder/ReturnOrder';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className="app">
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/return" element={<ReturnOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
