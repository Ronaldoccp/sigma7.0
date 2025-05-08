import { BellIcon, UserCircleIcon } from '@heroicons/react/solid';
import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm z-10">
      <div className="px-4 py-3 flex items-center justify-between">
        <h1 className="text-xl font-semibold text-gray-800">SIGMA - Sistema de Gestão de Materiais</h1>
        <div className="flex items-center space-x-4">
          <button className="p-1 rounded-full text-gray-500 hover:bg-gray-100 focus:outline-none">
            <BellIcon className="h-6 w-6" />
          </button>
          <div className="relative">
            <button className="flex items-center space-x-2 text-gray-600 focus:outline-none">
              <UserCircleIcon className="h-8 w-8" />
              <span className="hidden md:block font-medium">Usuário</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 