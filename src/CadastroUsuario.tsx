import React, { useState } from 'react';
import './styles/cadastro.css';

export default function CadastroUsuario() {
  const [form, setForm] = useState({ nome:'', telefone:'', email:'', senha:'', confirmarSenha:'' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.senha !== form.confirmarSenha) return alert('Senhas não coincidem');
    console.log(form);
  };

  return (
    <div className="cadastro-container">
      <h2>Cadastro</h2>
      <form onSubmit={handleSubmit}>
        <input name="nome" placeholder="Nome" value={form.nome} onChange={handleChange} required />
        <input name="telefone" placeholder="Telefone" value={form.telefone} onChange={handleChange} required />
        <input name="email" type="email" placeholder="E-mail" value={form.email} onChange={handleChange} required />
        <input name="senha" type="password" placeholder="Senha" value={form.senha} onChange={handleChange} required />
        <input name="confirmarSenha" type="password" placeholder="Confirme sua senha" value={form.confirmarSenha} onChange={handleChange} required />
        <button type="submit">Confirmar</button>
      </form>
    </div>
  );
}
