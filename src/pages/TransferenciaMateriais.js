import { SearchIcon } from '@heroicons/react/solid';
import React, { useState } from 'react';
import { useGlobalFilter, usePagination, useSortBy, useTable } from 'react-table';

const TransferenciaMateriais = () => {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  
  // Dados de exemplo para o histórico
  const data = React.useMemo(
    () => [
      {
        id: 1,
        data: '12/05/2023',
        material: 'Cabo Elétrico 10mm',
        codigo: 'MAT001',
        quantidade: 20,
        origem: 'Equipe A',
        destino: 'Equipe C',
        responsavel: 'Carlos Silva',
        matricula: '12345',
      },
      {
        id: 2,
        data: '10/05/2023',
        material: 'Disjuntor 30A',
        codigo: 'MAT002',
        quantidade: 5,
        origem: 'Equipe B',
        destino: 'Equipe D',
        responsavel: 'Maria Souza',
        matricula: '54321',
      },
      {
        id: 3,
        data: '05/05/2023',
        material: 'Chave Fusível',
        codigo: 'MAT005',
        quantidade: 15,
        origem: 'Equipe A',
        destino: 'Equipe B',
        responsavel: 'Pedro Alves',
        matricula: '67890',
      },
    ],
    []
  );
  
  const columns = React.useMemo(
    () => [
      {
        Header: 'Data',
        accessor: 'data',
      },
      {
        Header: 'Material',
        accessor: 'material',
      },
      {
        Header: 'Código',
        accessor: 'codigo',
      },
      {
        Header: 'Quantidade',
        accessor: 'quantidade',
      },
      {
        Header: 'Equipe Origem',
        accessor: 'origem',
      },
      {
        Header: 'Equipe Destino',
        accessor: 'destino',
      },
      {
        Header: 'Responsável',
        accessor: 'responsavel',
      },
      {
        Header: 'Matrícula',
        accessor: 'matricula',
      },
      {
        Header: 'Ações',
        accessor: 'acoes',
        Cell: () => (
          <button className="text-primary hover:text-blue-700">
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
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">Transferência de Materiais</h1>
        <button 
          onClick={() => setMostrarFormulario(!mostrarFormulario)}
          className="mt-4 md:mt-0 btn btn-primary"
        >
          {mostrarFormulario ? 'Cancelar' : 'Nova Transferência'}
        </button>
      </div>
      
      {/* Formulário de transferência */}
      {mostrarFormulario && (
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-lg font-medium text-gray-700 mb-4">Formulário de Transferência</h2>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Material</label>
                <select className="form-input">
                  <option value="">Selecione um material...</option>
                  <option value="mat001">MAT001 - Cabo Elétrico 10mm</option>
                  <option value="mat002">MAT002 - Disjuntor 30A</option>
                  <option value="mat003">MAT003 - Transformador 500kVA</option>
                  <option value="mat004">MAT004 - Poste de Concreto 11m</option>
                  <option value="mat005">MAT005 - Chave Fusível</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Quantidade</label>
                <input type="number" min="1" className="form-input" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Equipe de Origem</label>
                <select className="form-input">
                  <option value="">Selecione uma equipe...</option>
                  <option value="equipe-a">Equipe A</option>
                  <option value="equipe-b">Equipe B</option>
                  <option value="equipe-c">Equipe C</option>
                  <option value="equipe-d">Equipe D</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Equipe de Destino</label>
                <select className="form-input">
                  <option value="">Selecione uma equipe...</option>
                  <option value="equipe-a">Equipe A</option>
                  <option value="equipe-b">Equipe B</option>
                  <option value="equipe-c">Equipe C</option>
                  <option value="equipe-d">Equipe D</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Responsável</label>
                <input type="text" className="form-input" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Matrícula</label>
                <input type="text" className="form-input" />
              </div>
            </div>
            <div className="border-t border-gray-200 pt-4 flex justify-end">
              <button 
                type="button" 
                className="mr-3 px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50"
                onClick={() => setMostrarFormulario(false)}
              >
                Cancelar
              </button>
              <button type="submit" className="btn btn-primary">
                Confirmar Transferência
              </button>
            </div>
          </form>
        </div>
      )}
      
      <h2 className="text-xl font-medium text-gray-700 mb-4">Histórico de Transferências</h2>
      
      {/* Filtros de busca */}
      <div className="bg-white p-4 rounded-md shadow mb-6">
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
            <label className="block text-sm font-medium text-gray-700 mb-1">Período</label>
            <div className="flex space-x-2">
              <input type="date" className="form-input" />
              <input type="date" className="form-input" />
            </div>
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
            placeholder="Pesquisar transferências..."
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

export default TransferenciaMateriais; 