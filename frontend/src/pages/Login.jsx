// frontend/src/pages/Login.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, senha })
      });

      if (!res.ok) {
        setErro("E-mail ou senha inválidos.");
        return;
      }

      const usuario = await res.json();
      localStorage.setItem("usuario", JSON.stringify(usuario));
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      setErro("Erro ao tentar logar. Tente novamente.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-6 rounded shadow-md space-y-4 w-full max-w-sm"
      >
        <h1 className="text-xl font-bold text-center">Login - Unasys CRM</h1>
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full border p-2 rounded"
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
          className="w-full border p-2 rounded"
        />
        {erro && <p className="text-red-600 text-sm">{erro}</p>}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white p-2 rounded"
        >
          Entrar
        </button>
      </form>
    </div>
  );
}
