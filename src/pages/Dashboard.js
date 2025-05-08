import {
    ArcElement,
    BarElement,
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    Title,
    Tooltip,
} from 'chart.js';
import React from 'react';
import { Bar, Doughnut } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const Dashboard = () => {
  // Dados de exemplo para os gráficos
  const materiaisStatus = {
    labels: ['Ativos', 'Executados', 'Em Estoque'],
    datasets: [
      {
        data: [30, 50, 20],
        backgroundColor: ['#0062cc', '#28a745', '#ffc107'],
        hoverBackgroundColor: ['#004b9e', '#218838', '#e0a800'],
        borderWidth: 0,
      },
    ],
  };

  const materiaisPorRegiao = {
    labels: ['Norte', 'Sul', 'Leste', 'Oeste', 'Central'],
    datasets: [
      {
        label: 'Quantidade de Materiais',
        data: [65, 59, 80, 81, 56],
        backgroundColor: '#0062cc',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  return (
    <div className="py-6">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">Dashboard</h1>
      
      {/* Cartões com informações resumidas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <div className="card p-6 bg-white">
          <h2 className="text-lg font-medium text-gray-700">Total de Materiais</h2>
          <p className="text-3xl font-bold text-primary mt-2">1,243</p>
        </div>
        <div className="card p-6 bg-white">
          <h2 className="text-lg font-medium text-gray-700">Materiais Ativos</h2>
          <p className="text-3xl font-bold text-blue-600 mt-2">352</p>
        </div>
        <div className="card p-6 bg-white">
          <h2 className="text-lg font-medium text-gray-700">Materiais Executados</h2>
          <p className="text-3xl font-bold text-green-600 mt-2">621</p>
        </div>
        <div className="card p-6 bg-white">
          <h2 className="text-lg font-medium text-gray-700">Em Estoque</h2>
          <p className="text-3xl font-bold text-yellow-500 mt-2">270</p>
        </div>
      </div>
      
      {/* Gráficos */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card p-6">
          <h2 className="text-lg font-medium text-gray-700 mb-4">Status dos Materiais</h2>
          <div className="h-64 flex items-center justify-center">
            <Doughnut data={materiaisStatus} options={options} />
          </div>
        </div>
        <div className="card p-6">
          <h2 className="text-lg font-medium text-gray-700 mb-4">Materiais por Região</h2>
          <div className="h-64">
            <Bar data={materiaisPorRegiao} options={options} />
          </div>
        </div>
      </div>
      
      {/* Alertas e Notificações */}
      <div className="mt-6">
        <h2 className="text-lg font-medium text-gray-700 mb-4">Alertas e Notificações</h2>
        <div className="card divide-y divide-gray-200">
          <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-yellow-700">
                  Estoque baixo para cabos de energia tipo XYZ. Considere reabastecer.
                </p>
              </div>
            </div>
          </div>
          <div className="p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-gray-700">
                  Novas reservas de materiais disponíveis para a equipe Alfa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 