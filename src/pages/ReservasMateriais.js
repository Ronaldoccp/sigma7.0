import { DocumentTextIcon, SearchIcon } from '@heroicons/react/solid';
import React, { useState } from 'react';
import { useGlobalFilter, usePagination, useSortBy, useTable } from 'react-table';

const ReservasMateriais = () => {
  const [reservaSelecionada, setReservaSelecionada] = useState(null);
  
  // Dados de exemplo
  const data = React.useMemo(
    () => [
      {
        id: 1,
        numero: 'RES-1234',
        empresa: 'Empresa A',
        regional: 'Norte',
        projeto: 'PI-2023-001',
        centroCusto: 'CC-9876',
        elementoPEP: 'PEP-5432',
        dataLancamento: '10/01/2023',
        valorTotal: 'R$ 25.450,00',
        status: 'Ativa',
      },
      {
        id: 2,
        numero: 'RES-2345',
        empresa: 'Empresa B',
        regional: 'Sul',
        projeto: 'PI-2023-002',
        centroCusto: 'CC-8765',
        elementoPEP: 'PEP-4321',
        dataLancamento: '15/02/2023',
        valorTotal: 'R$ 18.320,00',
        status: 'Ativa',
      },
      {
        id: 3,
        numero: 'RES-3456',
        empresa: 'Empresa A',
        regional: 'Leste',
        projeto: 'PI-2023-003',
        centroCusto: 'CC-7654',
        elementoPEP: 'PEP-3210',
        dataLancamento: '22/03/2023',
        valorTotal: 'R$ 32.780,00',
        status: 'Concluída',
      },
    ],
    []
  );
  
  // Dados detalhados da reserva selecionada
  const detalhesMateriais = {
    'RES-1234': [
      { codigo: 'MAT001', descricao: 'Cabo Elétrico 10mm', quantidade: 150, status: 'Ativo', equipe: 'Equipe A', responsavel: 'Carlos Silva' },
      { codigo: 'MAT005', descricao: 'Chave Fusível', quantidade: 50, status: 'Em Estoque', equipe: 'Equipe A', responsavel: 'Carlos Silva' },
      { codigo: 'MAT002', descricao: 'Disjuntor 30A', quantidade: 25, status: 'Executado', equipe: 'Equipe A', responsavel: 'Carlos Silva' },
    ],
    'RES-2345': [
      { codigo: 'MAT002', descricao: 'Disjuntor 30A', quantidade: 75, status: 'Ativo', equipe: 'Equipe B', responsavel: 'Maria Souza' },
      { codigo: 'MAT003', descricao: 'Transformador 500kVA', quantidade: 5, status: 'Em Estoque', equipe: 'Equipe B', responsavel: 'Maria Souza' },
    ],
    'RES-3456': [
      { codigo: 'MAT003', descricao: 'Transformador 500kVA', quantidade: 8, status: 'Executado', equipe: 'Equipe C', responsavel: 'João Santos' },
      { codigo: 'MAT004', descricao: 'Poste de Concreto 11m', quantidade: 15, status: 'Executado', equipe: 'Equipe C', responsavel: 'João Santos' },
    ],
  };
  
  const columns = React.useMemo(
    () => [
      {
        Header: 'Número',
        accessor: 'numero',
      },
      {
        Header: 'Empresa',
        accessor: 'empresa',
      },
      {
        Header: 'Regional',
        accessor: 'regional',
      },
      {
        Header: 'Projeto (PI)',
        accessor: 'projeto',
      },
      {
        Header: 'Centro de Custo',
        accessor: 'centroCusto',
      },
      {
        Header: 'Elemento PEP',
        accessor: 'elementoPEP',
      },
      {
        Header: 'Data Lançamento',
        accessor: 'dataLancamento',
      },
      {
        Header: 'Valor Total',
        accessor: 'valorTotal',
      },
      {
        Header: 'Status',
        accessor: 'status',
        Cell: ({ value }) => {
          const statusColor = 
            value === 'Ativa' ? 'bg-blue-100 text-blue-800' : 
            'bg-green-100 text-green-800';
            
          return (
            <span className={`px-2 py-1 rounded-full text-xs ${statusColor}`}>
              {value}
            </span>
          );
        },
      },
      {
        Header: 'Ações',
        accessor: 'acoes',
        Cell: ({ row }) => (
          <button 
            className="text-primary hover:text-blue-700 flex items-center"
            onClick={() => setReservaSelecionada(row.original.numero)}
          >
            <DocumentTextIcon className="h-5 w-5 mr-1" />
            Detalhes
          </button>
        ),
      },
    ],
    []
  );
  
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize, globalFilter },
    setGlobalFilter,
  } = useTable(
    { columns, data, initialState: { pageIndex: 0, pageSize: 10 } },
    useGlobalFilter,
    useSortBy,
    usePagination
  );
  
  return (
    <div className="py-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">Reservas de Materiais</h1>
      </div>
      
      {/* Filtros de busca */}
      <div className="bg-white p-4 rounded-md shadow mb-6">
        <h2 className="text-lg font-medium text-gray-700 mb-4">Filtros</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Número da Reserva</label>
            <input type="text" className="form-input" placeholder="Número da reserva" />
          </div>
        </div>
        <div className="flex justify-end mt-4">
          <button className="btn btn-primary">Aplicar Filtros</button>
        </div>
      </div>
      
      {/* Barra de pesquisa */}
      <div className="w-full flex mb-6">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <SearchIcon className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="form-input pl-10"
            placeholder="Pesquisar reservas..."
            value={globalFilter || ''}
            onChange={e => setGlobalFilter(e.target.value)}
          />
        </div>
      </div>
      
      {/* Detalhes da reserva selecionada */}
      {reservaSelecionada && (
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-medium text-gray-700">Detalhes da Reserva: {reservaSelecionada}</h2>
            <button 
              className="text-gray-500 hover:text-gray-700"
              onClick={() => setReservaSelecionada(null)}
            >
              Fechar
            </button>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-md mb-4">
            <h3 className="text-md font-medium text-blue-800 mb-2">Resumo por Status</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-3 rounded-md shadow-sm">
                <p className="text-sm text-gray-600">Materiais Ativos</p>
                <p className="text-xl font-semibold text-blue-600">
                  {detalhesMateriais[reservaSelecionada].filter(m => m.status === 'Ativo').length}
                </p>
              </div>
              <div className="bg-white p-3 rounded-md shadow-sm">
                <p className="text-sm text-gray-600">Materiais Executados</p>
                <p className="text-xl font-semibold text-green-600">
                  {detalhesMateriais[reservaSelecionada].filter(m => m.status === 'Executado').length}
                </p>
              </div>
              <div className="bg-white p-3 rounded-md shadow-sm">
                <p className="text-sm text-gray-600">Materiais em Estoque</p>
                <p className="text-xl font-semibold text-yellow-600">
                  {detalhesMateriais[reservaSelecionada].filter(m => m.status === 'Em Estoque').length}
                </p>
              </div>
            </div>
          </div>
          
          <h3 className="text-md font-medium text-gray-700 mb-2">Lista de Materiais</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Código
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Descrição
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Quantidade
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Equipe
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Responsável
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {detalhesMateriais[reservaSelecionada].map((material, idx) => (
                  <tr key={idx} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {material.codigo}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {material.descricao}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {material.quantidade}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        material.status === 'Ativo' ? 'bg-blue-100 text-blue-800' : 
                        material.status === 'Executado' ? 'bg-green-100 text-green-800' : 
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {material.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {material.equipe}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {material.responsavel}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
      
      {/* Tabela */}
      <div className="table-container">
        <table {...getTableProps()} className="table">
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    className="table-header px-6 py-3"
                  >
                    {column.render('Header')}
                    <span>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? ' 🔽'
                          : ' 🔼'
                        : ''}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()} className="bg-white divide-y divide-gray-200">
            {page.map(row => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} className="hover:bg-gray-50">
                  {row.cells.map(cell => (
                    <td {...cell.getCellProps()} className="table-cell">
                      {cell.render('Cell')}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      
      {/* Paginação */}
      <div className="py-3 flex items-center justify-between">
        <div className="flex-1 flex justify-between items-center">
          <div>
            <span className="text-sm text-gray-700">
              Página <span className="font-medium">{pageIndex + 1}</span> de{' '}
              <span className="font-medium">{pageOptions.length}</span>
            </span>
            <select
              value={pageSize}
              onChange={e => {
                setPageSize(Number(e.target.value));
              }}
              className="ml-2 form-input w-auto"
            >
              {[10, 20, 30, 40, 50].map(pageSize => (
                <option key={pageSize} value={pageSize}>
                  Mostrar {pageSize}
                </option>
              ))}
            </select>
          </div>
          <div>
            <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
              <button
                onClick={() => gotoPage(0)}
                disabled={!canPreviousPage}
                className="px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                {'<<'}
              </button>
              <button
                onClick={() => previousPage()}
                disabled={!canPreviousPage}
                className="px-2 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                {'<'}
              </button>
              <button
                onClick={() => nextPage()}
                disabled={!canNextPage}
                className="px-2 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                {'>'}
              </button>
              <button
                onClick={() => gotoPage(pageCount - 1)}
                disabled={!canNextPage}
                className="px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                {'>>'}
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservasMateriais; 