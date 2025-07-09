// RecuperarSenha.tsx - Tela de recuperação de senha
import React, { useState } from 'react';

const RecuperarSenha: React.FC = () => {
  const [etapa, setEtapa] = useState(1);
  const [emailOuTelefone, setEmailOuTelefone] = useState('');
  const [codigo, setCodigo] = useState('');
  const [novaSenha, setNovaSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleProximaEtapa = () => {
    if (!emailOuTelefone) return;
    // Simula envio do código
    setMensagem('Código enviado!');
    setEtapa(2);
  };

  const handleVerificarCodigo = () => {
    if (codigo === '123456') {
      setEtapa(3);
    } else {
      setMensagem('Código inválido');
    }
  };

  const handleRedefinirSenha = () => {
    if (novaSenha !== confirmarSenha) {
      setMensagem('As senhas não coincidem.');
      return;
    }
    setMensagem('Senha redefinida com sucesso!');
  };

  return (
    <div className="max-w-sm mx-auto mt-20 p-6 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Esqueceu a senha</h2>

      {etapa === 1 && (
        <>
          <label className="block mb-2">E-mail ou Telefone</label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded mb-4"
            placeholder="Digite seu e-mail ou telefone"
            value={emailOuTelefone}
            onChange={(e) => setEmailOuTelefone(e.target.value)}
          />
          <button
            onClick={handleProximaEtapa}
            className="w-full py-2 bg-blue-600 text-white rounded"
          >
            Próximo
          </button>
        </>
      )}

      {etapa === 2 && (
        <>
          <label className="block mb-2">Código</label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded mb-4"
            placeholder="Digite o código recebido"
            value={codigo}
            onChange={(e) => setCodigo(e.target.value)}
          />
          <button
            onClick={handleVerificarCodigo}
            className="w-full py-2 bg-blue-600 text-white rounded"
          >
            Confirmar
          </button>
        </>
      )}

      {etapa === 3 && (
        <>
          <label className="block mb-2">Nova Senha</label>
          <input
            type="password"
            className="w-full px-3 py-2 border rounded mb-4"
            placeholder="Nova senha"
            value={novaSenha}
            onChange={(e) => setNovaSenha(e.target.value)}
          />
          <label className="block mb-2">Confirme a Senha</label>
          <input
            type="password"
            className="w-full px-3 py-2 border rounded mb-4"
            placeholder="Confirme a nova senha"
            value={confirmarSenha}
            onChange={(e) => setConfirmarSenha(e.target.value)}
          />
          <button
            onClick={handleRedefinirSenha}
            className="w-full py-2 bg-green-600 text-white rounded"
          >
            Confirmar
          </button>
        </>
      )}

      {mensagem && <p className="text-sm text-center text-blue-600 mt-4">{mensagem}</p>}
    </div>
  );
};

export default RecuperarSenha;
