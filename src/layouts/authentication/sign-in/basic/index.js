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

import { useEffect } from "react";
import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";
import BasicLayout from "layouts/authentication/components/BasicLayout";
import curved9 from "assets/images/curved-images/curved9.jpg";
import Cookies from "universal-cookie";

const validationSchema = yup.object({
  email: yup.string().email("Enter a valid email").required("Email is required"),
  password: yup
    .string()
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

function Basic() {
  const cookies = new Cookies();
  const navigate = useNavigate();

  useEffect(() => {
    const token = cookies.get("token");
    if (token) {
      navigate("/dashboard");
    }
  }, [navigate, cookies]);

  const handleSubmit = async (values) => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/login`, values);
      Swal.fire("Success", "Signed in successfully", "success");
      if (response.data.token) {
        cookies.set("token", response.data.token, { path: "/", maxAge: 86400 });
        navigate("/dashboard");
      }
    } catch (error) {
      Swal.fire("Error", "Invalid credentials", "error");
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <BasicLayout
      title="Welcome!"
      description="Access your auction account to bid, sell, and manage your listings with our secure sign-in portal."
      image={curved9}
    >
      <Card>
        <SoftBox p={3} mb={1} textAlign="center">
          <SoftTypography variant="h5" fontWeight="medium">
            Sign in
          </SoftTypography>
        </SoftBox>
        <SoftBox pt={2} pb={3} px={3}>
          <SoftBox component="form" role="form" onSubmit={formik.handleSubmit}>
            <SoftBox mb={2}>
              <SoftInput
                type="email"
                placeholder="Email"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              {formik.errors.email ? <div>{formik.errors.email}</div> : null}
            </SoftBox>
            <SoftBox mb={2} position="relative">
              <SoftInput
                type="password"
                placeholder="Password"
                name="password"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
              {formik.errors.password ? <div>{formik.errors.password}</div> : null}
              <SoftTypography
                component={Link}
                to="/authentication/reset-password"
                variant="caption"
                color="dark"
                fontWeight="bold"
                textGradient
                sx={{ position: "absolute", right: 0, bottom: -20 }}
              >
                Forgot Password?
              </SoftTypography>
            </SoftBox>
            <SoftBox mt={4} mb={1}>
              <SoftButton variant="gradient" color="dark" fullWidth type="submit">
                sign in
              </SoftButton>
            </SoftBox>
          </SoftBox>
          <SoftBox mt={3} textAlign="center">
            <SoftTypography variant="button" color="text" fontWeight="regular">
              Don&apos;t have an account?&nbsp;
              <SoftTypography
                component={Link}
                to="/authentication/sign-up"
                variant="button"
                color="dark"
                fontWeight="bold"
                textGradient
              >
                Sign up
              </SoftTypography>
            </SoftTypography>
          </SoftBox>
          <SoftBox mt={3} textAlign="center">
            <SoftTypography variant="button" color="text" fontWeight="regular">
              Want to sign in using OTP?&nbsp;
              <SoftTypography
                component={Link}
                to="/authentication/otp-login"
                variant="button"
                color="dark"
                fontWeight="bold"
                textGradient
              >
                Sign in using OTP
              </SoftTypography>
            </SoftTypography>
          </SoftBox>
        </SoftBox>
      </Card>
    </BasicLayout>
  );
}

export default Basic;
