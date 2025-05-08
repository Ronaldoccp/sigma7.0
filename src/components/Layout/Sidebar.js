import {
    ArchiveIcon,
    ClipboardListIcon,
    DocumentReportIcon,
    HomeIcon,
    SwitchHorizontalIcon
} from '@heroicons/react/solid';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const navItems = [
    { path: '/', name: 'Dashboard', icon: HomeIcon },
    { path: '/estoque-materiais', name: 'Estoque e Materiais', icon: ArchiveIcon },
    { path: '/transferencia-materiais', name: 'Transferência de Materiais', icon: SwitchHorizontalIcon },
    { path: '/reservas-materiais', name: 'Reservas de Materiais', icon: ClipboardListIcon },
    { path: '/relatorios-consultas', name: 'Relatórios e Consultas', icon: DocumentReportIcon },
  ];

  return (
    <aside className="hidden md:flex md:flex-shrink-0">
      <div className="flex flex-col w-64 bg-primary">
        <div className="flex items-center justify-center h-16 bg-primary-dark">
          <span className="text-white text-2xl font-bold">SIGMA 3.0</span>
        </div>
        <div className="flex flex-col flex-1 overflow-y-auto">
          <nav className="flex-1 px-2 py-4 space-y-1">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center px-4 py-3 ${
                    isActive
                      ? 'bg-blue-700 text-white'
                      : 'text-white hover:bg-blue-700'
                  } rounded-md group transition-colors`
                }
              >
                <item.icon className="w-6 h-6 mr-3" />
                <span>{item.name}</span>
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar; 