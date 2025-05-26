// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <h1>Meu Sistema ERP</h1>
        <nav>
          <Link to="/sobre">Sobre</Link>
          <Link to="/funcionalidades">Funcionalidades</Link>
          <Link to="/precos">Preços</Link>
          <Link to="/contato">Contato</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
