import Comments from "@/assets/icon/Comments.svg";
import Console from "@/assets/icon/Console.svg";
import Fire from "@/assets/icon/Fire.svg";
import Help from "@/assets/icon/Help.svg";
import Customer from "@/assets/icon/Customer.svg";

export type RouteGroup = {
  label: string;
  routes: RouteItem[];
  type: "route-group";
  icon?: string;
  isOpen?: boolean;
};

export type RouteItem = {
  label: string;
  path: string;
  type: "route";
  icon?: string;
  isOnlyForPlaces?: boolean;
};

export type RouteConfig = RouteGroup | RouteItem;

export const routes: RouteConfig[] = [
  {
    label: "Chat",
    type: "route",
    path: "/",
    icon: Comments,
  },
  {
    label: "Hype Mode",
    type: "route",
    path: "/hypemode",
    icon: Fire,
  },
  {
    label: "Comandos",
    type: "route",
    path: "/commands",
    icon: Console,
  },
  {
    label: "Fan DNA Quiz",
    type: "route",
    path: "/quiz",
    icon: Help,
  },
  {
    label: "Perfil",
    type: "route",
    path: "/perfil",
    icon: Customer,
  },
];