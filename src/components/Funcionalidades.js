import React from 'react';
import '../styles/Funcionalidades.css';

const Funcionalidades = () => {
  return (
    <section id="funcionalidades" className="funcionalidades">
      <div className="container">
        <h2>Funcionalidades</h2>
        <div className="grid">
          {/* Plano Básico */}
          <div className="plano">
            <h3>Plano Básico</h3>
            <ul>
              <li><strong>Gestão de Inventário:</strong> Controle completo de estoque.</li>
              <li><strong>Controle Financeiro:</strong> Fluxo de caixa e relatórios financeiros básicos.</li>
              <li><strong>Relatórios Personalizados:</strong> Relatórios básicos com filtros simples.</li>
            </ul>
          </div>

          {/* Plano Avançado */}
          <div className="plano">
            <h3>Plano Avançado</h3>
            <ul>
              <li><strong>Gestão de Inventário:</strong> Controle completo de estoque e alertas de baixo estoque.</li>
              <li><strong>Controle Financeiro:</strong> Fluxo de caixa, relatórios financeiros avançados e integração bancária.</li>
              <li><strong>Relatórios Personalizados:</strong> Relatórios com filtros e gráficos dinâmicos.</li>
              <li><strong>Gestão de Vendas:</strong> Monitoramento e relatórios de vendas.</li>
              <li><strong>Gestão de Clientes:</strong> Cadastro e histórico de interações com clientes.</li>
            </ul>
          </div>

          {/* Funcionalidade Sob Demanda */}
          <div className="sobremanda">
            <h3>Plano Sob Demanda</h3>
            <p>Além das funcionalidades dos planos básico e avançado, oferecemos a opção de personalizar o sistema conforme suas necessidades específicas.</p>
            <p>Você pode incluir novas funcionalidades, como integração com outros sistemas, módulos específicos para o seu tipo de negócio, relatórios personalizados ou até funcionalidades que se ajustem perfeitamente ao seu fluxo de trabalho.</p>
            <p>Nosso time de desenvolvimento estará à disposição para consultar as suas necessidades e incluir novas funções conforme o seu pedido, tornando o ERP ainda mais alinhado à sua empresa.</p>
            <ul>
              <li><strong>Consultoria personalizada:</strong> Analisamos suas necessidades e sugerimos melhorias.</li>
              <li><strong>Desenvolvimento sob demanda:</strong> Incluímos funcionalidades conforme sua solicitação.</li>
              <li><strong>Integração com sistemas externos:</strong> Podemos integrar o ERP com outros sistemas utilizados na sua empresa.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Funcionalidades;
