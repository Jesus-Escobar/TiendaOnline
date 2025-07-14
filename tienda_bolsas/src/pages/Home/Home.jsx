import React, { useState } from 'react';
import './Home.css';
import Header from '../../components/Header';
import MenuProductos from '../../components/Menu';
import CatalogDisplay from '../../components/ProductList';

const Home = () => {
  const [category, setCategory] = useState('All');

  return (
    <div>
      <Header />
      <MenuProductos category={category} setCategory={setCategory} />
      <CatalogDisplay category={category} />
    </div>
  );
};

export default Home;
