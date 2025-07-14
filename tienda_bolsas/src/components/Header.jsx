import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Ordena tu bolsa favorita aquí</h2>
        <p>
          Envíos Rápidos y Seguros Recibe tu pedido en todo México con rastreo.
          <br />
          ¡Tu bolso puede salir hoy mismo!
          <br />
          Calidad que dura años, usamos materiales seleccionados para que tu
          bolso te acompañe por mucho tiempo. Sin crueldad animal No utilizamos
          pieles de origen animal.
        </p>
        <button>Ver catálogo</button>
      </div>
    </div>
  );
};

export default Header;
