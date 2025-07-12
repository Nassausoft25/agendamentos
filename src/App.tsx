import React from 'react';
import { Routes, Route } from 'react-router-dom';

import PaginaInicial from './PaginaInicial';   
import TelaLogin from './TelaLogin';
import CadastroUsuario from './CadastroUsuario';
import Dashboard from './Dashboard';
import './styles/global.css';
import './styles/dashboard.css';
import './styles/cadastro.css'; 
import './styles/login.css';

const App: React.FC = () => (
  <Routes>
    <Route path="/" element={<PaginaInicial />} />
    <Route path="/login" element={<TelaLogin />} />
    <Route path="/cadastro" element={<CadastroUsuario />} />
    <Route path="/dashboard" element={<Dashboard />} />
  </Routes>
);

export default App;