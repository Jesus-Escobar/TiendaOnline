import React from 'react';
import './ReturnOrder.css';

const ReturnOrder = () => {
  return (
    <form className="return-order">
      <div className="return-order">
        <p className="title">Información de envío</p>
        <div className="multi-fields">
          <input type="text" placeholder="Nombre" />
          <input type="text" placeholder="Apellidos" />
        </div>
        <input type="email" placeholder="correo" />
        <input type="text" placeholder="Teléfono" />
        <input type="text" placeholder="Guía de devolución" />
      </div>
      <hr />
      <button>Hacer devolución</button>
    </form>
  );
};

export default ReturnOrder;
