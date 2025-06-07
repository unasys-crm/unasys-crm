// frontend/src/components/RotaPrivada.jsx
import React from "react";
import { Navigate } from "react-router-dom";

export default function RotaPrivada({ children }) {
  const isAutenticado = !!localStorage.getItem("token");

  return isAutenticado ? children : <Navigate to="/login" />;
}
