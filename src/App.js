/**
=========================================================
* Soft UI Dashboard PRO React - v4.0.3
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-react
* Copyright 2024 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState, useEffect, useMemo } from "react";

// react-router components
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";

// Soft UI Dashboard PRO React example components
import Sidenav from "examples/Sidenav";
import Configurator from "examples/Configurator";

// Soft UI Dashboard PRO React themes
import theme from "assets/theme";
import themeRTL from "assets/theme/theme-rtl";

// RTL plugins
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

// Soft UI Dashboard PRO React routes
import routes from "routes";
import dashboardRoutes from "dashboardRoutes";
import adminRoutes from "adminRoutes";

// Soft UI Dashboard PRO React contexts
import { useSoftUIController, setMiniSidenav, setOpenConfigurator } from "context";

// Images
// import brand from "assets/images/logo-ct.png";
const brand = "https://placehold.co/600x400";
import Success from "layouts/authentication/sign-up/basic/Success";
import Dashboard from "layouts/dashboards/default/Dashboard";

import { Provider } from "react-redux";
import store from "store";
// import BasicSign from "layouts/authentication/sign-in/basic";
import BasicSignup from "layouts/authentication/sign-up/basic";
import ResetPassword from "layouts/authentication/reset-password/ResetPassword";
import OtpLogin from "layouts/authentication/otp-login/OtpLogin";
import IllustrationSignIn from "layouts/authentication/sign-in/illustration";
import Illustration from "layouts/authentication/sign-up/illustration";
import Home from "layouts/pages/home/Home";
import ContactUs from "layouts/pages/contact/ContactUs";
import AboutUs from "layouts/pages/about/AboutUs";
import Error400 from "layouts/authentication/error/400";
import Error401 from "layouts/authentication/error/401";
import Error403 from "layouts/authentication/error/403";
import Error502 from "layouts/authentication/error/502";
import Error404 from "layouts/authentication/error/404";
import Error500 from "layouts/authentication/error/500";
import Cookies from "universal-cookie";
import Cover from "layouts/authentication/sign-in/cover";

export default function App() {
  const cookies = new Cookies();
  const [controller, dispatch] = useSoftUIController();
  const { miniSidenav, direction, layout, openConfigurator, sidenavColor } = controller;
  const [onMouseEnter, setOnMouseEnter] = useState(false);
  const { pathname } = useLocation();

  // Open sidenav when mouse enter on mini sidenav
  const handleOnMouseEnter = () => {
    if (miniSidenav && !onMouseEnter) {
      setMiniSidenav(dispatch, false);
      setOnMouseEnter(true);
    }
  };

  // Close sidenav when mouse leave mini sidenav
  const handleOnMouseLeave = () => {
    if (onMouseEnter) {
      setMiniSidenav(dispatch, true);
      setOnMouseEnter(false);
    }
  };

  // Change the openConfigurator state
  // const handleConfiguratorOpen = () => setOpenConfigurator(dispatch, !openConfigurator);
  // Change the openConfigurator state

  // Setting the dir attribute for the body element
  useEffect(() => {
    document.body.setAttribute("dir", direction);
  }, [direction]);

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }

      return null;
    });

  // const configsButton = (
  //   <SoftBox
  //     display="flex"
  //     justifyContent="center"
  //     alignItems="center"
  //     width="3.5rem"
  //     height="3.5rem"
  //     bgColor="white"
  //     shadow="sm"
  //     borderRadius="50%"
  //     position="fixed"
  //     right="2rem"
  //     bottom="2rem"
  //     zIndex={99}
  //     color="dark"
  //     sx={{ cursor: "pointer" }}
  //     onClick={handleConfiguratorOpen}
  //   >
  //     <Icon fontSize="default" color="inherit">
  //       settings
  //     </Icon>
  //   </SoftBox>
  // );

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {cookies.get("token") && (
          <Sidenav
            color={sidenavColor}
            brand={brand}
            brandName="Auction Listings"
            routes={cookies.get("userType") ? adminRoutes : dashboardRoutes}
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
          />
        )}
        <Routes>
          {getRoutes(cookies.get("userType") ? adminRoutes : dashboardRoutes)}
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/authentication/error/400" element={<Error400 />} />
          <Route path="/authentication/error/401" element={<Error401 />} />
          <Route path="/authentication/error/403" element={<Error403 />} />
          <Route path="/authentication/error/404" element={<Error404 />} />
          <Route path="/authentication/error/500" element={<Error500 />} />
          <Route path="/authentication/error/502" element={<Error502 />} />
          <Route path="/authentication/sign-up/success" element={<Success />} />
          <Route path="/authentication/sign-in" element={<IllustrationSignIn />} />
          <Route path="/authentication/reset-password" element={<ResetPassword />} />
          <Route path="/authentication/otp-login" element={<OtpLogin />} />
          <Route path="/authentication/sign-up" element={<Illustration />} />
          <Route path="/admin/sign-in" element={<Cover />} />
          <Route path="*" element={<Navigate to="/authentication/error/404" />} />
        </Routes>
      </ThemeProvider>
    </Provider>
  );
}
