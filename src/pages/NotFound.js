import { ExclamationCircleIcon } from '@heroicons/react/solid';
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full py-16">
      <ExclamationCircleIcon className="h-16 w-16 text-danger mb-4" />
      <h1 className="text-2xl font-bold text-gray-800 mb-2">Página não encontrada</h1>
      <p className="text-gray-600 mb-8">A página que você está procurando não existe ou foi movida.</p>
      <Link to="/" className="btn btn-primary">
        Voltar para a página inicial
      </Link>
    </div>
  );
};

export default NotFound; 