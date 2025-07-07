import NavigationBar from './components/NavigationBar';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import Bolsas from './pages/Bolsas/Bolsas';
import Carteras from './pages/Carteras/Carteras';
import Mochilas from './pages/Mochilas/Mochilas';
import Monederos from './pages/Monederos/Monederos';

function App() {
  return (
    <div className="app">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/Bolsas" element={<Bolsas />} />
        <Route path="/Carteras" element={<Carteras />} />
        <Route path="/Mochilas" element={<Mochilas />} />
        <Route path="/Monederos" element={<Monederos />} />
      </Routes>
    </div>
  );
}

export default App;
