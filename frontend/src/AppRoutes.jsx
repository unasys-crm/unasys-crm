import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import ModelosMensagens from "./pages/ModelosMensagens";
import RotaPrivada from "./components/RotaPrivada";

export default function AppRoutes() {
  const usuario = JSON.parse(localStorage.getItem("usuario"));

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
            usuario ? <Navigate to="/modelos" replace /> : <Navigate to="/login" replace />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
