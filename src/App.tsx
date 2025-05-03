import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import MainLayout from "@/layouts/MainLayout";
import { Home } from "@/pages/Home";
import { HypeMode } from "./pages/HypeMode";
import { FanDNAQuiz } from "./pages/FanDNAQuiz";
import { Perfil } from "./pages/Perfil";
import { Commands } from "./pages/Commands";

function App() {
  return (
      <main>
        <ToastContainer />
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="" element={<Home />} />
            <Route path="hypemode" element={<HypeMode />} />
            <Route path="quiz" element={<FanDNAQuiz />} />
            <Route path="perfil" element={<Perfil />} />
            <Route path="commands" element={< Commands />} />
          </Route>
        </Routes>
      </main>
  );
}

export default App;