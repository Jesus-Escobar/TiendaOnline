import React, { useContext } from 'react';
import './ProductDetail.css';
import { StoreContext } from '../context/StoreContext';

const CatalogItem = ({ id, name, price, description, image }) => {
  const { addToCart } = useContext(StoreContext);
  return (
    <div className="catalog-item">
      <div className="catalog-item-image-container">
        <img className="catalog-item-image" src={image} alt="" />
      </div>
      <div className="catalog-item-info">
        <p className="catalog-item-name">{name}</p>
        <p className="catalog-item-desc">{description}</p>
        <div className="catalog-item-price-addToCart">
          <p className="catalog-item-price">${price}</p>
          <button
            className="catalog-item-addToCart-button"
            onClick={() => addToCart(id)}
          >
            Añadir al Carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default CatalogItem;
