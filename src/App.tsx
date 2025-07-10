import { Routes, Route, useNavigate } from "react-router-dom";
import PaginaInicial from "./PaginaInicial";
import TelaLogin from "./TelaLogin";
import CadastroUsuario from "./CadastroUsuario";
import RecuperarSenha from "./RecuperarSenha";
import Dashboard from "./Dashboard";
import "./styles/home.css";
import "../styles/cadastro.css"; // em CadastroUsuario.tsx
import "../styles/login.css";    // em TelaLogin.tsx
import "../styles/recuperarSenha.css"; 

const App: React.FC = () => {
  const navigate = useNavigate();

  const Home = () => (
    <div className="home-container">
      <h1>Sistema de Agendamento</h1>
      <div className="nav-buttons">
        <button onClick={() => navigate('/login')}>Login</button>
        <button onClick={() => navigate('/cadastro')}>Cadastro</button>
      </div>
    </div>
  );

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<TelaLogin />} />
      <Route path="/cadastro" element={<CadastroUsuario />} />
      <Route path="/esqueceu-senha" element={<RecuperarSenha />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default App;
