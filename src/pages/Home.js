import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const abrirEmNovaGuia = (rota) => {
    window.open(rota, '_blank');
  };

  return (
    <div className="home text-center py-10">
      <h1 className="text-3xl font-bold mb-6">Bem-vindo ao ERP</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
        <div className="card cursor-pointer bg-white shadow-lg p-6 rounded-xl" onClick={() => abrirEmNovaGuia('/sobre')}>Sobre</div>
        <div className="card cursor-pointer bg-white shadow-lg p-6 rounded-xl" onClick={() => abrirEmNovaGuia('/funcionalidades')}>Funcionalidades</div>
        <div className="card cursor-pointer bg-white shadow-lg p-6 rounded-xl" onClick={() => abrirEmNovaGuia('/planos')}>Planos</div>
        <div className="card cursor-pointer bg-white shadow-lg p-6 rounded-xl" onClick={() => abrirEmNovaGuia('/precos')}>Preços</div>
        <div className="card cursor-pointer bg-white shadow-lg p-6 rounded-xl" onClick={() => abrirEmNovaGuia('/contato')}>Contato</div>
      </div>
    </div>
  );
};

export default Home;
