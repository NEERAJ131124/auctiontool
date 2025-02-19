import React from "react";
import { Icon } from "@mui/material";

// Soft UI Dashboard PRO React layouts
import Default from "layouts/dashboards/default";
import UserProfile from "layouts/pages/profile/Profile";
import Subscription from "layouts/pages/account/billing";
import PaymentHistory from "layouts/pages/account/invoice";
import UserInterests from "layouts/pages/profile/Interests";
import AuctionListings from "layouts/pages/projects/general";
import ProductDetails from "layouts/pages/projects/timeline";
import UserDashboard from "layouts/dashboards/crm";
import Notifications from "layouts/pages/notifications";
import AdminDashboard from "layouts/pages/account/settings";
import ManageUsers from "layouts/pages/users/reports";
import ManagePayments from "layouts/pages/users/new-user";
import { Shop } from "@mui/icons-material";
import Dashboard from "layouts/dashboards/default/Dashboard";
import ContactUs from "layouts/pages/contact/ContactUs";
import Cookies from "universal-cookie";
// import ProfileManagement from "layouts/pages/profile/ProfileManagement";
// import PasswordRecovery from "layouts/authentication/reset-password/basic/PasswordRecovery";
// import UserRegistration from "layouts/authentication/sign-up/basic/UserRegistration";
import UserManagement from "layouts/pages/user-management/UserManagement";

const userRoutes = [
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
    name: "Auction",
    key: "auction-listings",
    icon: <Icon>list</Icon>,
    collapse: [
      {
        name: "Auction Listings",
        key: "auction-listings",
        route: "/pages/projects/general",
        component: <AuctionListings />,
      },
      {
        name: "Product Details",
        key: "product-details",
        route: "/pages/projects/timeline",
        component: <ProductDetails />,
      },
    ],
  },
  {
    type: "collapse",
    name: "Payments",
    key: "subscription-payments",
    icon: <Icon>payment</Icon>,
    collapse: [
      {
        name: "Subscription Management",
        key: "subscription-management",
        route: "/pages/account/billing",
        component: <Subscription />,
      },
      {
        name: "Payment History",
        key: "payment-history",
        route: "/pages/account/invoice",
        component: <PaymentHistory />,
      },
    ],
  },
  {
    type: "collapse",
    name: "Notifications",
    key: "dashboard-notifications",
    icon: <Icon>dashboard</Icon>,
    collapse: [
      {
        name: "User Dashboard",
        key: "user-dashboard",
        route: "/dashboards/crm",
        component: <UserDashboard />,
      },
      {
        name: "Notifications",
        key: "notifications",
        route: "/pages/notifications",
        component: <Notifications />,
      },
    ],
  },
  {
    type: "collapse",
    name: "Interests",
    key: "user-interests",
    icon: <Icon>search</Icon>,
    route: "/pages/profile/teams",
    component: <UserInterests />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Profile",
    key: "user-profile",
    icon: <Icon>person</Icon>,
    route: "/pages/profile/profile-overview",
    component: <UserProfile />,
    noCollapse: true,
  },
];

const dashboardRoutes = userRoutes;

export default dashboardRoutes;
