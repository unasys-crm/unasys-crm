import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import ModelosMensagens from "./pages/ModelosMensagens";
import RotaPrivada from "./components/RotaPrivada";

export default function AppRoutes() {
  const isAutenticado = !!localStorage.getItem("usuario");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route
          path="/modelos"
          element={
            <RotaPrivada>
              <ModelosMensagens />
            </RotaPrivada>
          }
        />

        <Route
          path="/dashboard"
          element={
            <RotaPrivada>
              <div>Dashboard Inicial</div>
            </RotaPrivada>
          }
        />

        {/* Redirecionar raiz para login ou dashboard */}
        <Route
          path="/"
          element={
            isAutenticado ? (
              <Navigate to="/dashboard" replace />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        {/* Rota catch-all para rotas não encontradas */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
