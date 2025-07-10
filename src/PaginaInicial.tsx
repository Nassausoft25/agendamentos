// PaginaInicial.tsx - Página Inicial com botões de Login e Cadastro
import React from 'react';
import { Link } from 'react-router-dom';
import './styles/dashboard.css';
const PaginaInicial: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-sm text-center">
        <h1 className="text-3xl font-bold mb-6">Sistema de Agendamento</h1>

        <Link to="/login">
          <button className="w-full py-2 mb-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Login</button>
        </Link>

        <Link to="/cadastro">
          <button className="w-full py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">Cadastro</button>
        </Link>
      </div>
    </div>
  );
};

export default PaginaInicial;

