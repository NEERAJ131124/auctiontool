import React from "react";
import BasicSign from "layouts/authentication/sign-in/basic";
import BasicSignup from "layouts/authentication/sign-up/basic";
import OtpLogin from "layouts/authentication/otp-login/OtpLogin";

const pageRoutes = [
  {
    name: "Sign In",
    key: "sign-in",
    route: "/authentication/sign-in",
    component: <BasicSign />,
  },
  {
    name: "Sign Up",
    key: "sign-up",
    route: "/authentication/sign-up",
    component: <BasicSignup />,
  },
];

export default pageRoutes;
