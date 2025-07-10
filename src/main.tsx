// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import './styles/dashboard.css';
import "../styles/cadastro.css"; // em CadastroUsuario.tsx
import "../styles/login.css";    // em TelaLogin.tsx
import "../styles/recuperarSenha.css"; 
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
