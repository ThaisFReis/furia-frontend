import { Suspense, useEffect, useState } from "react";
import {Outlet, useLocation, useNavigate } from "react-router-dom";
import { Sidebar } from "@/components/Sidebar";
import furia from "@/assets/icon/furia.svg";

type MainLayoutProps = {
  children?: React.ReactNode;
  title?: string;
};

const MainLayout = ({ children, title }: MainLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();
  const isProfilePage = location.pathname === "/perfil";

  return (
    <div className="flex h-screen bg-[#0F1010] overflow-hidden">
      {/* Sidebar - agora usando relative */}
      <Sidebar isOpen={sidebarOpen} toggle={() => setSidebarOpen(!sidebarOpen)} />
      
      {/* Conteúdo principal */}
      <div 
        className={`flex-1 flex flex-col overflow-auto transition-all duration-300 ${
          sidebarOpen ? "ml-[295px]" : "ml-[80px]"
        }`}
      >
        {/* Cabeçalho unificado - oculto na página de perfil */}
        {!isProfilePage && (
          <div className="flex justify-between items-center p-8 text-white">
            <h1 className="font-bold text-3xl">{title}</h1>
            <div className="flex items-center space-x-2">
              <img
                src={furia}
                alt="Avatar"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="flex flex-col">
                <span className="text-sm">Usuário</span>
                <span className="text-xs text-yellow-400 font-semibold">
                  Nível 10
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Conteúdo da página */}
        <div className={`flex-1 ${isProfilePage ? 'p-8' : 'p-8 pt-0'} overflow-auto`}>
          <Suspense fallback={<div className="p-8">Carregando...</div>}>
            {children ?? <Outlet />}
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
