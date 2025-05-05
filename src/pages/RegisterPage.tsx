import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export const RegisterPage = () => {
  const [cpf, setCpf] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (cpf && name && email && password) {
      localStorage.setItem("storedCpf", cpf);
      localStorage.setItem("name", name);
      localStorage.setItem("userEmail", email);
      localStorage.setItem("password", password);

      navigate("/login");
    } else {
      setError("Por favor, preencha todos os campos.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Cadastro</h1>

        <div className="mb-4">
          <label htmlFor="cpf" className="block text-sm font-medium mb-1">CPF</label>
          <input
            type="text"
            id="cpf"
            className="w-full p-2 border border-gray-300 rounded"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium mb-1">Nome</label>
          <input
            type="text"
            id="name"
            className="w-full p-2 border border-gray-300 rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium mb-1">E-mail</label>
          <input
            type="email"
            id="email"
            className="w-full p-2 border border-gray-300 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium mb-1">Senha</label>
          <input
            type="password"
            id="password"
            className="w-full p-2 border border-gray-300 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

        <button
          type="submit"
          className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Cadastrar
        </button>

        <p className="text-sm mt-4 text-center">
          Já tem conta? <Link to="/login" className="text-blue-600 underline">Faça login</Link>
        </p>
      </form>
    </div>
  );
};
