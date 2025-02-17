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

const dashboardRoutes = [
  {
    type: "collapse",
    name: "dashboard",
    key: "user-dashboard",
    icon: <Shop size="12px" />,
    route: "/dashboard",
    component: <Dashboard />,
    noCollapse: true,
    // collapse: [
    //   {
    //     name: "Default Dashboard",
    //     key: "default-dashboard",
    //     route: "/dashboard",
    //     component: <Dashboard />,
    //   },
    // ],
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
  //   {
  //     type: "collapse",
  //     name: "User Management",
  //     key: "user-management",
  //     icon: <Icon>person</Icon>,
  //     collapse: [
  //       {
  //         name: "User Registration",
  //         key: "user-registration",
  //         route: "/authentication/sign-up/basic",
  //         component: <UserProfile />,
  //       },
  //       {
  //         name: "User Login",
  //         key: "user-login",
  //         route: "/authentication/sign-in/basic",
  //         component: <UserProfile />,
  //       },
  //       {
  //         name: "Password Recovery",
  //         key: "password-recovery",
  //         route: "/authentication/reset-password/basic",
  //         component: <UserProfile />,
  //       },
  //       {
  //         name: "Profile Management",
  //         key: "profile-management",
  //         route: "/pages/profile/profile-overview",
  //         component: <UserProfile />,
  //       },
  //     ],
  //   },
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
  //   {
  //     type: "collapse",
  //     name: "User Management",
  //     key: "admin-management",
  //     icon: <Icon>admin_panel_settings</Icon>,
  //     collapse: [
  //       {
  //         name: "Admin Dashboard",
  //         key: "admin-dashboard",
  //         route: "/pages/account/settings",
  //         component: <AdminDashboard />,
  //       },
  //       {
  //         name: "Manage Users",
  //         key: "manage-users",
  //         route: "/pages/users/reports",
  //         component: <ManageUsers />,
  //       },
  //       {
  //         name: "Manage Payments",
  //         key: "manage-payments",
  //         route: "/pages/users/new-user",
  //         component: <ManagePayments />,
  //       },
  //     ],
  //   },
];

export default dashboardRoutes;
