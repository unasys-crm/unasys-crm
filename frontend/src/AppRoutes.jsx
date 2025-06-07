// src/AppRoutes.jsx
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import ModelosMensagens from "./pages/ModelosMensagens";
import RotaPrivada from "./components/RotaPrivada";

export default function AppRoutes() {
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
  path="/"
  element={
    <RotaPrivada>
      <Navigate to="/modelos" />
    </RotaPrivada>
  }
/>
        {/* Redireciona qualquer rota desconhecida para o login */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}


<Route
  path="/"
  element={
    <RotaPrivada>
      <Navigate to="/modelos" />
    </RotaPrivada>
  }
/>
