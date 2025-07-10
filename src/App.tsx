// src/App.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PaginaInicial from './PaginaInicial';
import TelaLogin from './TelaLogin';
import CadastroUsuario from './CadastroUsuario';
import RecuperarSenha from './RecuperarSenha';
import './styles/dashboard.css';
import Dashboard from './Dashboard';

// ...
<Route path="/dashboard" element={<Dashboard />} />

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<PaginaInicial />} />
      <Route path="/login" element={<TelaLogin />} />
      <Route path="/cadastro" element={<CadastroUsuario />} />
      <Route path="/esqueceu-senha" element={<RecuperarSenha />} />
    </Routes>
  );
};

export default App;
