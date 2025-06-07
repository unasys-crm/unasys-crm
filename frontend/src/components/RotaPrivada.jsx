import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function RotaPrivada({ children }) {
  const [autenticado, setAutenticado] = useState(null);

  useEffect(() => {
    try {
      const stored = typeof window !== "undefined" && localStorage.getItem("usuario");
      const usuario = stored ? JSON.parse(stored) : null;
      setAutenticado(!!usuario?.id);
    } catch (e) {
      console.error("Erro ao verificar autenticação:", e);
      setAutenticado(false);
    }
  }, []);

  if (autenticado === null) {
    return null; // ou spinner de carregamento
  }

  if (!autenticado) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
