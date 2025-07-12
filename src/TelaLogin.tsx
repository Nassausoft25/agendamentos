import React, { useState } from 'react';
import './styles/login.css';

export default function TelaLogin() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mostrar, setMostrar] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, senha });
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} required />
        <input type={mostrar ? 'text' : 'password'} placeholder="Senha" value={senha} onChange={e => setSenha(e.target.value)} required />
        <label>
          <input type="checkbox" checked={mostrar} onChange={() => setMostrar(prev => !prev)} /> Mostrar
        </label>
        <div className="options">
          <label><input type="checkbox" /> Lembrar-me</label>
          <a href="/esqueceu-senha">Esqueceu sua senha?</a>
        </div>
        <button type="submit">Próximo</button>
      </form>
    </div>
  );
}
