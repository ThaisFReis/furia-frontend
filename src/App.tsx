import { Route, Routes, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import MainLayout from "@/layouts/MainLayout";
import { Home } from "@/pages/Home";
import { HypeMode } from "./pages/HypeMode";
import { FanDNAQuiz } from "./pages/FanDNAQuiz";
import { Perfil } from "./pages/Perfil";
import { Commands } from "./pages/Commands";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { useState, useEffect } from "react";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem("is_authenticated") === "true";
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Verificação adicional se necessário
    setIsLoading(false);
  }, []);

  const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
    if (isLoading) {
      return <div>Carregando...</div>; // Ou um spinner
    }
    return isAuthenticated ? children : <Navigate to="/login" />;
  };

  return (
    <main>
      <ToastContainer />
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/login"
          element={<LoginPage setIsAuthenticated={setIsAuthenticated} />}
        />

        <Route
          element={
            <ProtectedRoute>
              <MainLayout />
            </ProtectedRoute>
          }
        >
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/hypemode"
            element={
              <ProtectedRoute>
                <HypeMode />
              </ProtectedRoute>
            }
          />
          <Route
            path="/quiz"
            element={
              <ProtectedRoute>
                <FanDNAQuiz />
              </ProtectedRoute>
            }
          />
          <Route
            path="/perfil"
            element={
              <ProtectedRoute>
                <Perfil />
              </ProtectedRoute>
            }
          />
          <Route
            path="/commands"
            element={
              <ProtectedRoute>
                <Commands />
              </ProtectedRoute>
            }
          />
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </main>
  );
}

export default App;
