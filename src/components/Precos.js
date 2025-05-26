import React from 'react';
import '../styles/Precos.css'; 

const Precos = () => {
  return (
    <section id="precos" className="precos">
      <div className="container">
        <h2>Preços</h2>
        <p>Escolha o plano que melhor atende às necessidades da sua empresa.</p>
        <div className="planos">
          <div className="plano">
            <h3>Plano Básico</h3>
            <p>R$99/mês</p>
            <button>Contratar</button>
          </div>
          <div className="plano">
            <h3>Plano Profissional</h3>
            <p>R$199/mês</p>
            <button>Contratar</button>
          </div>
          {/* Plano Sob Demanda */}
          <div className="plano sobdemanda">
            <h3>Plano Sob Demanda</h3>
            <p>Valor: A consultar</p>
            <button>Solicitar Consultoria</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Precos;
