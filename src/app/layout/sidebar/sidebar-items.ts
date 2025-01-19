import { RouteInfo } from "./sidebar.metadata";
export const ROUTES: RouteInfo[] = [
  {
    path: "",
    title: "MAIN",
    moduleName: "",
    iconType: "",
    icon: "",
    class: "",
    groupTitle: true,
    badge: "",
    badgeClass: "",
    role: ["All"],
    submenu: [],
  },

  // Admin Modules
  {
    path: "/admin/users",
    title: "User Accounts",
    moduleName: "users",
    iconType: "feather",
    icon: "users",
    class: "",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["USER"],
    submenu: [
    ],
  },

  {
    path: "/admin/roles",
    title: "User Roles",
    moduleName: "roles",
    iconType: "feather",
    icon: "user-check",
    class: "",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["USER"],
    submenu: [],
  },
  {
    path: "/admin/departments",
    title: "Departments",
    moduleName: "departments",
    iconType: "feather",
    icon: "layers",
    class: "",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["USER"],
    submenu: [],
  },

  {
    path: "/admin/entities",
    title: "Entities",
    moduleName: "entity",
    iconType: "feather",
    icon: "list",
    class: "",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["USER"],
    submenu: [],
  }

];
