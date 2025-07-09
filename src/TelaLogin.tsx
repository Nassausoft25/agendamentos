import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const TelaLogin: React.FC = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    setCarregando(true);
    setErro('');

    try {
      const resposta = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, senha })
      });

      if (!resposta.ok) {
        setErro('E-mail ou senha inválidos.');
      } else {
        navigate('/dashboard'); // ajuste essa rota conforme seu app
      }
    } catch {
      setErro('Erro ao conectar com o servidor.');
    } finally {
      setCarregando(false);
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-24 p-6 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

      <label className="block mb-2">E-mail</label>
      <input
        type="email"
        className="w-full px-3 py-2 border rounded mb-4"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={carregando}
      />

      <label className="block mb-2">Senha</label>
      <div className="relative mb-4">
        <input
          type={mostrarSenha ? 'text' : 'password'}
          className="w-full px-3 py-2 border rounded"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          disabled={carregando}
        />
        <button
          type="button"
          className="absolute right-2 top-2 text-sm"
          onClick={() => setMostrarSenha(!mostrarSenha)}
        >
          {mostrarSenha ? 'Ocultar' : 'Mostrar'}
        </button>
      </div>

      <div className="flex justify-between text-sm mb-4">
        <label>
          <input type="checkbox" className="mr-1" /> Lembrar-me
        </label>
        <Link to="/esqueceu-senha" className="text-blue-500">Esqueceu sua senha?</Link>
      </div>

      {erro && <div className="text-red-500 text-sm mb-2">{erro}</div>}

      <button
        onClick={handleLogin}
        disabled={!email || !senha || carregando}
        className="w-full py-2 bg-blue-600 text-white rounded disabled:opacity-50"
      >
        {carregando ? 'Carregando...' : 'Próximo'}
      </button>
    </div>
  );
};

export default TelaLogin;
