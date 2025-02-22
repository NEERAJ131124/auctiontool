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

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Collapse from "@mui/material/Collapse";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import { useNavigate } from "react-router-dom";

function DefaultNavbarLink({
  name,
  openHandler = () => {},
  closeHandler = () => {},
  children = false,
  collapseStatus = false,
  light = false,
  route,
  ...rest
}) {
  const navigate = useNavigate();
  return (
    <>
      <SoftBox
        {...rest}
        mx={1}
        p={1}
        onMouseEnter={children ? undefined : openHandler}
        onMouseLeave={children ? undefined : closeHandler}
        onClick={() => navigate(route)}
        display="flex"
        alignItems="baseline"
        color={light ? "white" : "dark"}
        sx={{ cursor: "pointer", userSelect: "none" }}
      >
        <SoftTypography
          variant="button"
          fontWeight="regular"
          textTransform="capitalize"
          color="inherit"
          sx={{ fontWeight: "100%" }}
        >
          {name}
        </SoftTypography>
        {/* <SoftTypography variant="body2" color={light ? "white" : "dark"}>
          <Icon sx={{ fontWeight: "bold", verticalAlign: "middle" }}>keyboard_arrow_down</Icon>
        </SoftTypography> */}
      </SoftBox>
      {children && (
        <Collapse in={Boolean(collapseStatus)} timeout="auto" unmountOnExit>
          {children}
        </Collapse>
      )}
    </>
  );
}

// Typechecking props for the DefaultNavbarLink
DefaultNavbarLink.propTypes = {
  name: PropTypes.string.isRequired,
  openHandler: PropTypes.func,
  closeHandler: PropTypes.func,
  children: PropTypes.node,
  collapseStatus: PropTypes.bool,
  light: PropTypes.bool,
  route: PropTypes.string.isRequired,
};

export default DefaultNavbarLink;
