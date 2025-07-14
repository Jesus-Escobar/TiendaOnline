import React from 'react';
import './Menu.css';
import { productos_list } from '../assets/assets';

const MenuProductos = ({ category, setCategory }) => {
  return (
    <div className="menu-productos" id="menu-productos">
      <h1>Ve nuestros productos</h1>
      <p className="explore-menu-productos-text">
        Elige de nuestra variedad de productos
      </p>
      <div className="explore-menu-productos">
        {productos_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.producto_name ? 'All' : item.producto_name
                )
              }
              key={index}
              className="explore-menu-productos-item"
            >
              <img
                className={category === item.producto_name ? 'active' : ''}
                src={item.producto_image}
                alt=""
              />
              <p>{item.producto_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default MenuProductos;
