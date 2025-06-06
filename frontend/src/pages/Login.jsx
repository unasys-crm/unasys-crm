// frontend/src/pages/Login.jsx
import React from "react";

export default function Login() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="p-6 bg-white rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form>
          <div className="mb-4">
            <label className="block mb-1 text-sm font-medium">Email</label>
            <input type="email" className="w-full px-3 py-2 border rounded" placeholder="email@exemplo.com" />
          </div>
          <div className="mb-4">
            <label className="block mb-1 text-sm font-medium">Senha</label>
            <input type="password" className="w-full px-3 py-2 border rounded" placeholder="********" />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}
