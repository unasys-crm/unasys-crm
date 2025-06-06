// src/AppRoutes.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
        {/* Outras rotas aqui */}
        <Route
          path="/"
          element={
            <RotaPrivada>
              <div>Dashboard Inicial</div>
            </RotaPrivada>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
