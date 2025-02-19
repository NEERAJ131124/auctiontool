import React from "react";
import BasicSign from "layouts/authentication/sign-in/basic";
import BasicSignup from "layouts/authentication/sign-up/basic";
import OtpLogin from "layouts/authentication/otp-login/OtpLogin";
import ContactUs from "layouts/pages/contact/ContactUs";
import AboutUs from "layouts/pages/about/AboutUs";

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
  {
    name: "Contact Us",
    key: "contact-us",
    route: "/contact-us",
    component: <ContactUs />,
  },
  {
    name: "About Us",
    key: "about-us",
    route: "/about-us",
    component: <AboutUs />,
  },
];

export default pageRoutes;
