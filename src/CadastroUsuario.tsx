// CadastroUsuario.tsx - Tela de Cadastro
import React, { useState } from 'react';
import './styles/dashboard.css';
const CadastroUsuario: React.FC = () => {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [erro, setErro] = useState('');
  const [sucesso, setSucesso] = useState(false);

  const handleCadastro = async () => {
    setErro('');
    setSucesso(false);

    if (senha !== confirmarSenha) {
      setErro('As senhas não coincidem.');
      return;
    }

    try {
      const resposta = await fetch('/api/cadastro', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, telefone, email, senha })
      });

      if (resposta.ok) {
        setSucesso(true);
        setNome('');
        setTelefone('');
        setEmail('');
        setSenha('');
        setConfirmarSenha('');
      } else {
        setErro('Erro ao cadastrar. Verifique os dados e tente novamente.');
      }
    } catch {
      setErro('Erro de conexão com o servidor.');
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-20 p-6 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Cadastro</h2>

      <input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        className="w-full mb-4 px-3 py-2 border rounded"
      />
      <input
        type="tel"
        placeholder="Telefone"
        value={telefone}
        onChange={(e) => setTelefone(e.target.value)}
        className="w-full mb-4 px-3 py-2 border rounded"
      />
      <input
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full mb-4 px-3 py-2 border rounded"
      />
      <input
        type="password"
        placeholder="Senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        className="w-full mb-4 px-3 py-2 border rounded"
      />
      <input
        type="password"
        placeholder="Confirme sua senha"
        value={confirmarSenha}
        onChange={(e) => setConfirmarSenha(e.target.value)}
        className="w-full mb-4 px-3 py-2 border rounded"
      />

      {erro && <p className="text-red-500 text-sm mb-2">{erro}</p>}
      {sucesso && <p className="text-green-500 text-sm mb-2">Cadastro realizado com sucesso!</p>}

      <button
        onClick={handleCadastro}
        className="w-full py-2 bg-green-600 text-white rounded"
      >
        Confirmar
      </button>
    </div>
  );
};

export default CadastroUsuario;
