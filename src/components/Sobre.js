import React from 'react';
import '../styles/Sobre.css';
import img1 from '../Assets/Images/img-solucao1.png';
import img2 from '../Assets/Images/img-solucao2.png';
import img3 from '../Assets/Images/img-solucao4.png';

const Sobre = () => {
  return (
    <section id="sobre" className="container">
      <div className="left">
        <h1>
          <span className="red">Controle total</span> com a <strong>GNova Tech</strong><br />
          e soluções ERP sob medida
        </h1>
        <p>
          Na GNova Tech, entendemos que cada empresa possui suas particularidades, por isso, oferecemos <strong>soluções de ERP sob demanda</strong> adaptáveis à realidade de cada cliente.
        </p>

        <ul className="benefits">
          <li>Plano Básico: gestão simples e eficiente</li>
          <li>Plano Avançado: automações e relatórios</li>
          <li>Plano Personalizado: ERP completo e customizável</li>
          <li>Acessibilidade e usabilidade</li>
          <li>Suporte contínuo e humanizado</li>
          <li>Tecnologia moderna e segura</li>
        </ul>

        <div className="buttons">
          <a href="#planos" className="btn black">Veja planos e preços</a>
          <a href="#teste" className="btn red">Teste grátis 7 dias</a>
        </div>
        <p className="note">* Faça um teste sem fidelidade.</p>
      </div>

      <div className="right images-group">
        <img src={img1} alt="ERP Solução 1" />
        <img src={img2} alt="ERP Solução 2" />
        <img src={img3} alt="ERP Solução 3" />
      </div>
    </section>
  );
};

export default Sobre;
