import { Shop } from "@mui/icons-material";
import UserManagement from "layouts/pages/user-management/UserManagement";
import Dashboard from "layouts/dashboards/default/Dashboard";
import { Icon } from "@mui/material";

const adminRoutes = [
  {
    type: "collapse",
    name: "dashboard",
    key: "user-dashboard",
    icon: <Shop size="12px" />,
    route: "/dashboard",
    component: <Dashboard />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "User Management",
    key: "user-management",
    icon: <Icon>person</Icon>,
    route: "/pages/user-management",
    component: <UserManagement />,
    noCollapse: true,
  },
];

export default adminRoutes;
