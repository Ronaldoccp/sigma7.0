import { FilterIcon, SearchIcon } from '@heroicons/react/solid';
import React, { useState } from 'react';
import { useGlobalFilter, usePagination, useSortBy, useTable } from 'react-table';

const EstoqueMateriais = () => {
  const [showFilters, setShowFilters] = useState(false);
  
  // Dados de exemplo
  const data = React.useMemo(
    () => [
      {
        id: 1,
        codigo: 'MAT001',
        descricao: 'Cabo Elétrico 10mm',
        quantidade: 150,
        status: 'Ativo',
        equipe: 'Equipe A',
        reserva: 'RES-1234',
        responsavel: 'Carlos Silva',
      },
      {
        id: 2,
        codigo: 'MAT002',
        descricao: 'Disjuntor 30A',
        quantidade: 75,
        status: 'Em Estoque',
        equipe: 'Equipe B',
        reserva: 'RES-2345',
        responsavel: 'Maria Souza',
      },
      {
        id: 3,
        codigo: 'MAT003',
        descricao: 'Transformador 500kVA',
        quantidade: 8,
        status: 'Executado',
        equipe: 'Equipe C',
        reserva: 'RES-3456',
        responsavel: 'João Santos',
      },
      {
        id: 4,
        codigo: 'MAT004',
        descricao: 'Poste de Concreto 11m',
        quantidade: 25,
        status: 'Ativo',
        equipe: 'Equipe D',
        reserva: 'RES-4567',
        responsavel: 'Ana Oliveira',
      },
      {
        id: 5,
        codigo: 'MAT005',
        descricao: 'Chave Fusível',
        quantidade: 120,
        status: 'Em Estoque',
        equipe: 'Equipe A',
        reserva: 'RES-5678',
        responsavel: 'Pedro Alves',
      },
    ],
    []
  );
  
  const columns = React.useMemo(
    () => [
      {
        Header: 'Código',
        accessor: 'codigo',
      },
      {
        Header: 'Descrição',
        accessor: 'descricao',
      },
      {
        Header: 'Quantidade',
        accessor: 'quantidade',
      },
      {
        Header: 'Status',
        accessor: 'status',
        Cell: ({ value }) => {
          const statusColor = 
            value === 'Ativo' ? 'bg-blue-100 text-blue-800' : 
            value === 'Executado' ? 'bg-green-100 text-green-800' : 
            'bg-yellow-100 text-yellow-800';
            
          return (
            <span className={`px-2 py-1 rounded-full text-xs ${statusColor}`}>
              {value}
            </span>
          );
        },
      },
      {
        Header: 'Equipe',
        accessor: 'equipe',
      },
      {
        Header: 'Reserva',
        accessor: 'reserva',
      },
      {
        Header: 'Responsável',
        accessor: 'responsavel',
      },
      {
        Header: 'Ações',
        accessor: 'acoes',
        Cell: () => (
          <div className="flex space-x-2">
            <button className="text-primary hover:text-blue-700">
              Detalhes
            </button>
            <button className="text-green-600 hover:text-green-700">
              Transferir
            </button>
            <button className="text-danger hover:text-red-700">
              Executar
            </button>
          </div>
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
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">Gestão de Estoque e Materiais</h1>
        <div className="mt-4 md:mt-0 flex space-x-2">
          <button 
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
            <FilterIcon className="h-5 w-5 mr-2" />
            Filtros
          </button>
          <button className="btn btn-primary">
            Gerar Relatório
          </button>
        </div>
      </div>
      
      {/* Filtros */}
      {showFilters && (
        <div className="bg-white p-4 rounded-md shadow mb-6">
          <h2 className="text-lg font-medium text-gray-700 mb-4">Filtros</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Empresa</label>
              <select className="form-input">
                <option value="">Selecione...</option>
                <option value="empresa-a">Empresa A</option>
                <option value="empresa-b">Empresa B</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Regional</label>
              <select className="form-input">
                <option value="">Selecione...</option>
                <option value="norte">Norte</option>
                <option value="sul">Sul</option>
                <option value="leste">Leste</option>
                <option value="oeste">Oeste</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
              <select className="form-input">
                <option value="">Todos</option>
                <option value="ativo">Ativo</option>
                <option value="executado">Executado</option>
                <option value="estoque">Em Estoque</option>
              </select>
            </div>
          </div>
          <div className="flex justify-end mt-4">
            <button className="btn btn-primary">Aplicar Filtros</button>
          </div>
        </div>
      )}
      
      {/* Barra de pesquisa */}
      <div className="w-full flex mb-6">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <SearchIcon className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="form-input pl-10"
            placeholder="Pesquisar materiais..."
            value={globalFilter || ''}
            onChange={e => setGlobalFilter(e.target.value)}
          />
        </div>
      </div>
      
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

export default EstoqueMateriais; 