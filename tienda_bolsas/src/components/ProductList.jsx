import React, { useContext } from 'react';
import './ProductList.css';
import { StoreContext } from '../context/StoreContext';
import CatalogItem from './ProductDetail';

const CatalogDisplay = ({ category }) => {
  const { catalogo_list } = useContext(StoreContext);

  return (
    <div className="catalog-display" id="catalog-display">
      <h2>La moda al alcance de un click</h2>
      <div className="catalog-display-list">
        {catalogo_list.map((item, index) => {
          if (category === 'All' || category === item.category) {
            return (
              <CatalogItem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default CatalogDisplay;
