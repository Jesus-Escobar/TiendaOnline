import React from 'react';
import { assets } from '../assets/assets';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} width={200} />
        </div>
        <div className="footer-content-center">
          <h2>Bolsas mm</h2>
          <ul>
            <li>Página principal</li>
            <li>Sobre nosotros</li>
            <li>Envíos y devoluciones</li>
            <li>Política de privacidad</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>Haz una pregunta</h2>
          <ul>
            <li>+52 6142154850</li>
            <li>hola@bolsasmm.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        © 2025 MM ITALY - Todos los derechos reservados.
      </p>
    </div>
  );
};

export default Footer;
