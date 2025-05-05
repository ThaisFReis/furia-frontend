import { routes } from "@/configs/routes";
import HideSidepanel from "@/assets/icon/HideSidepanel.svg";
import ShowSidepanel from "@/assets/icon/ShowSidepanel.svg";
import furia from "@/assets/icon/furia.svg";
import LogoutIcon from "@mui/icons-material/Logout";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

type SidebarProps = {
  isOpen: boolean;
  toggle: () => void;
};

export const Sidebar = ({ isOpen, toggle }: SidebarProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("is_authenticated");
    navigate("/login");
  };

  return (
    <div
      className={`absolute left-0 top-0 h-full ${
        isOpen ? "w-[295px]" : "w-[80px]"
      } bg-[#161717] flex flex-col text-white transition-all duration-300 z-10`}
    >
      {/* Header */}
      <div className="flex justify-between items-center px-4 py-5">
        {isOpen ? (
          <>
            <p className="text-[#828282] opacity-40 font-bold text-[30px]">
              FURIAX
            </p>
            <img
              src={HideSidepanel}
              className="w-6 h-6 cursor-pointer"
              onClick={toggle}
              alt="Hide sidebar"
            />
          </>
        ) : (
          <div className="flex flex-col gap-5 justify-around w-full items-center">
            <img src={furia} className="w-6 h-6 mx-auto" alt="Furia logo" />
            <img
              src={ShowSidepanel}
              className="w-6 h-6 cursor-pointer mx-auto"
              onClick={toggle}
              alt="Show sidebar"
            />
          </div>
        )}
      </div>

      {/* Links */}
      {isOpen && (
        <div className="flex flex-col gap-2 flex-1 overflow-y-auto">
          {routes.map((route) =>
            "path" in route ? (
              <Link
                key={route.path}
                to={route.path}
                className="flex items-center p-2 cursor-pointer hover:bg-[#222]"
              >
                {route.icon && (
                  <img
                    src={route.icon}
                    alt={route.label}
                    className="w-6 h-6 mx-4"
                  />
                )}
                {isOpen && <p className="whitespace-nowrap">{route.label}</p>}
              </Link>
            ) : null
          )}

          {/* Logout Button */}
          <div
            onClick={handleLogout}
            className="flex items-center p-2 cursor-pointer hover:bg-[#222] mt-auto mb-5"
          >
            <LogoutIcon className="w-6 h-6 mx-4" />
            {isOpen && <p className="whitespace-nowrap">Logout</p>}
          </div>
        </div>
      )}
    </div>
  );
};
