import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (email === "admin@crm.com" && senha === "1234") {
      localStorage.setItem("usuario", JSON.stringify({ email }));
      navigate("/modelos");
    } else {
      setErro("E-mail ou senha inválidos.");
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
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          className="w-full border p-2 rounded"
          required
        />
        {erro && <p className="text-red-600 text-sm">{erro}</p>}
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white p-2 rounded">
          Entrar
        </button>
      </form>
    </div>
  );
}
