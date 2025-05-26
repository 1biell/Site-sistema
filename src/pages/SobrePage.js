import React from 'react';
import '../styles/SobrePage.css';

const SobrePage = () => {
  return (
    <section className="sobre-page-wrapper">
      <svg
        className="bg-svg"
        viewBox="0 0 800 400"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="150" cy="150" r="100" fill="#007bff" fillOpacity="0.2" />
        <circle cx="400" cy="100" r="150" fill="#00aaff" fillOpacity="0.15" />
        <circle cx="650" cy="180" r="120" fill="#005f99" fillOpacity="0.1" />
      </svg>

      <section className="sobre-page">
        <h1>Sobre a GNova Tech</h1>
        <p>
          A GNova Tech nasceu com o objetivo de transformar a maneira como pequenas empresas e oficinas gerenciam seus negócios. 
          Nosso sistema ERP foi desenvolvido para ser intuitivo, flexível e acessível, oferecendo soluções sob medida para as suas necessidades.
        </p>

        <h2>Por que escolher o nosso sistema?</h2>
        <ul>
          <li><strong>Facilidade de uso:</strong> Interface simples que permite que qualquer usuário comece a usar rapidamente, sem complicações.</li>
          <li><strong>Personalização:</strong> Planos que se adaptam ao tamanho e demanda do seu negócio, incluindo soluções sob medida.</li>
          <li><strong>Suporte dedicado:</strong> Atendimento ágil e eficiente para garantir que você nunca fique sem ajuda.</li>
          <li><strong>Segurança:</strong> Proteção dos seus dados com as melhores práticas de segurança digital.</li>
          <li><strong>Atualizações constantes:</strong> Melhorias contínuas para manter o sistema sempre atual e competitivo.</li>
        </ul>

        <h2>Nossa missão</h2>
        <p>
          Simplificar a gestão empresarial para pequenos negócios, ajudando-os a crescer e se destacar no mercado, através de tecnologia acessível e suporte de qualidade.
        </p>

        <h2>Entre em contato</h2>
        <p>
          Quer saber mais? Entre em contato conosco para uma demonstração gratuita ou para tirar suas dúvidas. Estamos prontos para ajudar o seu negócio a prosperar!
        </p>
      </section>
    </section>
  );
};

export default SobrePage;
