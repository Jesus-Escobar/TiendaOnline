import React, { useState } from 'react';
import './NavigationBar.css';
import { assets } from '../assets/assets';

const NavigationBar = () => {
  const [menu, setMenu] = useState('Bolsas');

  return (
    <div className="navbar">
      <img
        onClick={() => setMenu('Home')}
        src={assets.logo}
        alt=""
        className="logo"
      />
      <ul className="navbar-menu">
        <li
          onClick={() => setMenu('Bolsas')}
          className={menu === 'Bolsas' ? 'active' : ''}
        >
          Bolsas
        </li>
        <li
          onClick={() => setMenu('Carteras')}
          className={menu === 'Carteras' ? 'active' : ''}
        >
          Carteras
        </li>
        <li
          onClick={() => setMenu('Mochilas')}
          className={menu === 'Mochilas' ? 'active' : ''}
        >
          Mochilas
        </li>
        <li
          onClick={() => setMenu('Monederos')}
          className={menu === 'Monederos' ? 'active' : ''}
        >
          Monederos
        </li>
        <li
          onClick={() => setMenu('Contacto')}
          className={menu === 'Contacto' ? 'active' : ''}
        >
          Contacto
        </li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="" />
          <div className="dot"></div>
        </div>
        <button>Sign in</button>
      </div>
    </div>
  );
};

export default NavigationBar;
