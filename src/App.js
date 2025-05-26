import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sobre from './components/Sobre';
import Funcionalidades from './components/Funcionalidades';
import Precos from './components/Precos';
import Contato from './components/Contato';
import SobrePage from './pages/SobrePage'; 
import './styles/global.css';
import './styles/Footer.css';

const Home = () => (
  <>
    <Sobre />
    <Funcionalidades />
    <Precos />
    <Contato />
  </>
);

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<SobrePage />} />
        <Route path="/funcionalidades" element={<Funcionalidades />} />
        <Route path="/precos" element={<Precos />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
      <footer className="footer">
        <p>&copy; 2025 GNova Tech. Todos os direitos reservados.</p>
      </footer>
    </Router>
  );
};

export default App;
