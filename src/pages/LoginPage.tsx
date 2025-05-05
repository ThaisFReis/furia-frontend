import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

interface LoginPageProps {
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

export const LoginPage = ({ setIsAuthenticated }: LoginPageProps) => {
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const storedCpf = localStorage.getItem("storedCpf");
    const storedPassword = localStorage.getItem("password");

    if (cpf === storedCpf && password === storedPassword) {
      setIsAuthenticated(true);
      localStorage.setItem("is_authenticated", "true"); // adiciona flag (opcional)
      navigate("/");
    } else {
      setError("CPF ou Senha incorretos.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>

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
          Entrar
        </button>

        <p className="text-sm mt-4 text-center">
          Não tem conta? <Link to="/register" className="text-blue-600 underline">Cadastre-se</Link>
        </p>
      </form>
    </div>
  );
};
