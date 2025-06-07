import { Navigate } from "react-router-dom";

export default function RotaPrivada({ children }) {
  const usuario = JSON.parse(localStorage.getItem("usuario"));

  if (!usuario) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
