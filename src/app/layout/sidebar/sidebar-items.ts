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
    path: "/admin/entities",
    title: "Data generation",
    moduleName: "students",
    iconType: "feather",
    icon: "list",
    class: "",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["USER"],
    submenu: [],
  },

  {
    path: "/admin/entities",
    title: "Data processing",
    moduleName: "students",
    iconType: "feather",
    icon: "list",
    class: "",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["USER"],
    submenu: [],
  },
  {
    path: "/admin/entities",
    title: "File upload",
    moduleName: "students",
    iconType: "feather",
    icon: "list",
    class: "",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["USER"],
    submenu: [],
  },
  {
    path: "/admin/students",
    title: "Student management",
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
    path: "/admin/entities",
    title: "Student Report",
    moduleName: "students",
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
