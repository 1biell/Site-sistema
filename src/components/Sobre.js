import React from 'react';
import '../styles/Sobre.css'; // Estilização separada

const Sobre = () => {
  return (
    <section id="sobre" className="sobre">
      <div className="container">
        <h2>Sobre a [Nome da Empresa]</h2>
        <p>
          Na [Nome da Empresa], entendemos que cada empresa possui suas particularidades, por isso, oferecemos <strong>soluções de ERP sob demanda</strong> adaptáveis à realidade de cada cliente. Acreditamos que a gestão eficiente começa com um sistema bem projetado, por isso criamos três opções de ERP:
        </p>
        <h3>1. Plano Básico</h3>
        <p>
          O Plano Básico é um sistema essencial para empresas que precisam de um controle básico e eficiente de sua operação. Ideal para pequenas empresas ou aquelas que estão começando e precisam de um ERP simples e funcional. Com funcionalidades essenciais de gestão de estoque e controle financeiro.
        </p>

        <h3>2. Plano Avançado</h3>
        <p>
          O Plano Avançado oferece mais funcionalidades e integrações, sendo ideal para empresas com uma estrutura maior que necessitam de mais recursos para gerenciar seus processos. Este plano inclui funcionalidades adicionais, como relatórios financeiros detalhados, automações no controle de estoque e outras ferramentas para otimizar a gestão.
        </p>

        <h3>3. Plano Personalizado</h3>
        <p>
          O Plano Personalizado é a nossa solução mais completa. Ele combina todas as funcionalidades dos planos anteriores e oferece recursos adicionais, como integrações específicas para o seu negócio, personalizações sob demanda e a possibilidade de incluir automações e recursos extras conforme as necessidades da sua empresa.
        </p>

        <p>
          Nosso objetivo é fornecer um <strong>ERP sob medida</strong> que ajude a sua empresa a crescer com agilidade, controle e eficiência.
        </p>

        <h3>Por que escolher a [Nome da Empresa]?</h3>
        <ul>
          <li><strong>Soluções Personalizadas</strong>: Oferecemos três planos de sistemas, com a possibilidade de personalização conforme as necessidades do seu negócio.</li>
          <li><strong>Tecnologia de Ponta</strong>: Todos os nossos sistemas são baseados nas melhores práticas e nas tecnologias mais recentes para garantir a segurança e a escalabilidade.</li>
          <li><strong>Suporte Contínuo</strong>: Acompanhamos sua empresa após a implementação do ERP, garantindo que tudo funcione como esperado e fornecendo suporte sempre que necessário.</li>
          <li><strong>Acessibilidade e Usabilidade</strong>: Nossos sistemas são intuitivos e podem ser acessados a partir de qualquer dispositivo, garantindo flexibilidade e praticidade para sua equipe.</li>
        </ul>

        <p>
          Com a [Nome da Empresa], você tem a opção de escolher o ERP que melhor se adapta à sua empresa e, caso precise de algo mais, podemos criar a solução sob medida para atender às suas necessidades.
        </p>
      </div>
    </section>
  );
}

export default Sobre;
