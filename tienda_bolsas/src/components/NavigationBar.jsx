import React, { useContext, useState } from 'react';
import './NavigationBar.css';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';
import { StoreContext } from '../context/StoreContext';

const NavigationBar = () => {
  const [menu, setMenu] = useState('Home');

  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <div className="navbar">
      <Link to="/">
        <img
          onClick={() => setMenu('Home')}
          src={assets.logo}
          alt=""
          className="logo"
        />
      </Link>
      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setMenu('Menu')}
          className={menu === 'Menu' ? 'active' : ''}
        >
          Menú
        </Link>
        <Link
          to="/return"
          onClick={() => setMenu('Return')}
          className={menu === 'Return' ? 'active' : ''}
        >
          Devolución
        </Link>
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
          <Link to="/cart">
            <img src={assets.basket_icon} alt="" />
          </Link>
          <div className={getTotalCartAmount() === 0 ? '' : 'dot'}></div>
        </div>
        <button>Sign in</button>
      </div>
    </div>
  );
};

export default NavigationBar;
