import {
    ClipboardCheckIcon,
    CubeIcon,
    DocumentDownloadIcon,
    DocumentReportIcon,
    UserGroupIcon
} from '@heroicons/react/solid';
import React, { useState } from 'react';

const RelatoriosConsultas = () => {
  const [relatorioSelecionado, setRelatorioSelecionado] = useState(null);
  
  const tiposRelatorios = [
    { 
      id: 'necessidades-materiais', 
      nome: 'Necessidades de Materiais por Equipe', 
      descricao: 'Relatório detalhado dos materiais necessários para cada equipe',
      icon: UserGroupIcon 
    },
    { 
      id: 'reservas-materiais', 
      nome: 'Relatório de Reservas', 
      descricao: 'Visualize todas as reservas por Empresa, Regional e Projeto',
      icon: ClipboardCheckIcon 
    },
    { 
      id: 'materiais-equipe', 
      nome: 'Materiais por Equipe', 
      descricao: 'Relatório de materiais ativos, executados e em estoque por equipe',
      icon: CubeIcon 
    },
    { 
      id: 'sap-financeiro', 
      nome: 'Relatório SAP Financeiro', 
      descricao: 'Importação e visualização de dados do SAP financeiro',
      icon: DocumentReportIcon 
    },
    { 
      id: 'comparativo-materiais', 
      nome: 'Comparativo de Materiais', 
      descricao: 'Comparação entre materiais executados no SIGMA vs. materiais aplicados no SAP Comercial',
      icon: DocumentDownloadIcon 
    },
  ];
  
  // Opções de filtro para cada tipo de relatório
  const filtrosRelatorio = {
    'necessidades-materiais': (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Empresa</label>
          <select className="form-input">
            <option value="">Todas</option>
            <option value="empresa-a">Empresa A</option>
            <option value="empresa-b">Empresa B</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Regional</label>
          <select className="form-input">
            <option value="">Todas</option>
            <option value="norte">Norte</option>
            <option value="sul">Sul</option>
            <option value="leste">Leste</option>
            <option value="oeste">Oeste</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Equipe</label>
          <select className="form-input">
            <option value="">Todas</option>
            <option value="equipe-a">Equipe A</option>
            <option value="equipe-b">Equipe B</option>
            <option value="equipe-c">Equipe C</option>
            <option value="equipe-d">Equipe D</option>
          </select>
        </div>
      </div>
    ),
    'reservas-materiais': (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Empresa</label>
          <select className="form-input">
            <option value="">Todas</option>
            <option value="empresa-a">Empresa A</option>
            <option value="empresa-b">Empresa B</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Regional</label>
          <select className="form-input">
            <option value="">Todas</option>
            <option value="norte">Norte</option>
            <option value="sul">Sul</option>
            <option value="leste">Leste</option>
            <option value="oeste">Oeste</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Projeto (PI)</label>
          <input type="text" className="form-input" placeholder="Código do projeto" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Centro de Custo</label>
          <input type="text" className="form-input" placeholder="Centro de Custo" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Elemento PEP</label>
          <input type="text" className="form-input" placeholder="Elemento PEP" />
        </div>
      </div>
    ),
    'materiais-equipe': (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Empresa</label>
          <select className="form-input">
            <option value="">Todas</option>
            <option value="empresa-a">Empresa A</option>
            <option value="empresa-b">Empresa B</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Regional</label>
          <select className="form-input">
            <option value="">Todas</option>
            <option value="norte">Norte</option>
            <option value="sul">Sul</option>
            <option value="leste">Leste</option>
            <option value="oeste">Oeste</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Status do Material</label>
          <select className="form-input">
            <option value="">Todos</option>
            <option value="ativo">Ativo</option>
            <option value="executado">Executado</option>
            <option value="estoque">Em Estoque</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Equipe</label>
          <select className="form-input">
            <option value="">Todas</option>
            <option value="equipe-a">Equipe A</option>
            <option value="equipe-b">Equipe B</option>
            <option value="equipe-c">Equipe C</option>
            <option value="equipe-d">Equipe D</option>
          </select>
        </div>
      </div>
    ),
    'sap-financeiro': (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Período</label>
          <div className="flex space-x-2">
            <input type="date" className="form-input" />
            <input type="date" className="form-input" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Centro de Custo</label>
          <input type="text" className="form-input" placeholder="Centro de Custo" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Elemento PEP</label>
          <input type="text" className="form-input" placeholder="Elemento PEP" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Número da Reserva</label>
          <input type="text" className="form-input" placeholder="Número da reserva" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Formato</label>
          <select className="form-input">
            <option value="pdf">PDF</option>
            <option value="excel">Excel</option>
            <option value="csv">CSV</option>
          </select>
        </div>
      </div>
    ),
    'comparativo-materiais': (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Período</label>
          <div className="flex space-x-2">
            <input type="date" className="form-input" />
            <input type="date" className="form-input" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Empresa</label>
          <select className="form-input">
            <option value="">Todas</option>
            <option value="empresa-a">Empresa A</option>
            <option value="empresa-b">Empresa B</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Regional</label>
          <select className="form-input">
            <option value="">Todas</option>
            <option value="norte">Norte</option>
            <option value="sul">Sul</option>
            <option value="leste">Leste</option>
            <option value="oeste">Oeste</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Equipe</label>
          <select className="form-input">
            <option value="">Todas</option>
            <option value="equipe-a">Equipe A</option>
            <option value="equipe-b">Equipe B</option>
            <option value="equipe-c">Equipe C</option>
            <option value="equipe-d">Equipe D</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Nota Comercial</label>
          <input type="text" className="form-input" placeholder="Número da nota comercial" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Formato</label>
          <select className="form-input">
            <option value="pdf">PDF</option>
            <option value="excel">Excel</option>
            <option value="csv">CSV</option>
          </select>
        </div>
      </div>
    ),
  };
  
  return (
    <div className="py-6">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">Relatórios e Consultas</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {tiposRelatorios.map((relatorio) => (
          <div 
            key={relatorio.id}
            className={`card p-6 cursor-pointer transition-all ${
              relatorioSelecionado === relatorio.id ? 'ring-2 ring-primary' : 'hover:shadow-lg'
            }`}
            onClick={() => setRelatorioSelecionado(relatorio.id)}
          >
            <div className="flex items-center mb-4">
              <relatorio.icon className="h-8 w-8 text-primary" />
              <h2 className="text-lg font-medium text-gray-700 ml-3">{relatorio.nome}</h2>
            </div>
            <p className="text-gray-600">{relatorio.descricao}</p>
          </div>
        ))}
      </div>
      
      {relatorioSelecionado && (
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-medium text-gray-700">
              {tiposRelatorios.find(r => r.id === relatorioSelecionado)?.nome}
            </h2>
          </div>
          
          {filtrosRelatorio[relatorioSelecionado]}
          
          <div className="flex justify-end mt-6">
            <button 
              type="button" 
              className="mr-3 px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50"
            >
              Limpar Filtros
            </button>
            <button type="submit" className="btn btn-primary">
              Gerar Relatório
            </button>
          </div>
        </div>
      )}
      
      {/* Visualização de amostra do relatório */}
      {relatorioSelecionado && (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-medium text-gray-700">Prévia do Relatório</h2>
            <div className="flex space-x-2">
              <button className="text-primary hover:text-blue-700 flex items-center">
                <DocumentDownloadIcon className="h-5 w-5 mr-1" />
                Exportar
              </button>
              <button className="text-primary hover:text-blue-700 flex items-center">
                <DocumentReportIcon className="h-5 w-5 mr-1" />
                Imprimir
              </button>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-md p-4 bg-gray-50 flex items-center justify-center text-gray-400 h-64">
            Aplique os filtros e clique em "Gerar Relatório" para visualizar os dados
          </div>
        </div>
      )}
    </div>
  );
};

export default RelatoriosConsultas; 