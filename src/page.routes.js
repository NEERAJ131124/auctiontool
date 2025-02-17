import React from "react";
import BasicSign from "layouts/authentication/sign-in/basic";
import BasicSignup from "layouts/authentication/sign-up/basic";
import OtpLogin from "layouts/authentication/otp-login/OtpLogin";

const pageRoutes = [
  // {
  //   name: "Sign Up Success",
  //   key: "sign-up-success",
  //   route: "/authentication/sign-up/success",
  //   component: <Success />,
  // },
  {
    name: "Sign In",
    key: "sign-in",
    route: "/authentication/sign-in",
    component: <BasicSign />,
  },
  // {
  //   name: "Reset Password",
  //   key: "reset-password",
  //   route: "/authentication/reset-password",
  //   component: <ResetPassword />,
  // },
  {
    name: "OTP Login",
    key: "otp-login",
    route: "/authentication/otp-login",
    component: <OtpLogin />,
  },
  {
    name: "Sign Up",
    key: "sign-up",
    route: "/authentication/sign-up",
    component: <BasicSignup />,
  },
  // {
  //   name: "Dashboard",
  //   key: "dashboard",
  //   route: "/dashboard",
  //   component: <Dashboard />,
  // },
];

export default pageRoutes;
