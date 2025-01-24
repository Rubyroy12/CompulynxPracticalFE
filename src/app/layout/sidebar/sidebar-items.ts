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
    path: "/admin/students/generate",
    title: "Data generation",
    moduleName: "students",
    iconType: "feather",
    icon: "list",
    class: "",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["ADMIN", "INITIATOR", "VERIFIER"],
    submenu: [],
  },

  {
    path: "/admin/students/process",
    title: "Data processing",
    moduleName: "students",
    iconType: "feather",
    icon: "list",
    class: "",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["ADMIN", "INITIATOR", "VERIFIER"],
    submenu: [],
  },
  {
    path: "/admin/students/upload",
    title: "File upload",
    moduleName: "students",
    iconType: "feather",
    icon: "list",
    class: "",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["ADMIN", "INITIATOR", "VERIFIER"],

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
    role: ["ADMIN", "INITIATOR", "VERIFIER"],

    submenu: [
    ],
  },
  {
    path: "/admin/students/reports",
    title: "Student Report",
    moduleName: "students",
    iconType: "feather",
    icon: "list",
    class: "",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["ADMIN", "INITIATOR", "VERIFIER"],

    submenu: [],
  }
];
