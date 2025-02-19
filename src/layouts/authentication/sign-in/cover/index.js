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

import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";
import CoverLayout from "layouts/authentication/components/CoverLayout";
import curved9 from "assets/images/curved-images/curved9.jpg";
import Cookies from "universal-cookie";

const validationSchema = yup.object({
  email: yup.string().email("Enter a valid email").required("Email is required"),
  password: yup
    .string()
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

function AdminSignIn() {
  const [loading, setLoading] = useState(false);
  const cookies = new Cookies();
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    setLoading(true);
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/admin/login`, values);
      Swal.fire("Success", "Signed in successfully", "success");
      if (response.data.token) {
        cookies.set("token", response.data.token, { path: "/", maxAge: 86400 });
        cookies.set("userType", response.data.userType, { path: "/", maxAge: 86400 });
        navigate("/dashboard");
        console.log(response);
      }
    } catch (error) {
      if (error.response) {
        const { status, data } = error.response;
        if (status === 400) {
          Swal.fire("Error", data.message || "Bad Request", "error");
        } else if (status === 401) {
          Swal.fire("Error", data.message || "Unauthorized", "error");
        } else if (status === 403) {
          Swal.fire("Error", data.message || "Forbidden", "error");
        } else if (status === 500) {
          Swal.fire("Error", data.message || "Server Error", "error");
        } else {
          Swal.fire("Error", data.message || "An error occurred", "error");
        }
      } else {
        Swal.fire("Error", "An error occurred", "error");
      }
    } finally {
      setLoading(false);
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
    <CoverLayout
      title="Admin Login"
      description="Enter your admin credentials to sign in"
      image={curved9}
    >
      <SoftBox component="form" role="form" onSubmit={formik.handleSubmit}>
        <SoftBox mb={2} lineHeight={1.25}>
          <SoftBox mb={1} ml={0.5}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Admin Email
            </SoftTypography>
          </SoftBox>
          <SoftInput
            type="email"
            placeholder="Admin Email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email ? <div>{formik.errors.email}</div> : null}
        </SoftBox>
        <SoftBox mb={2} lineHeight={1.25}>
          <SoftBox mb={1} ml={0.5}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Admin Password
            </SoftTypography>
          </SoftBox>
          <SoftInput
            type="password"
            placeholder="Admin Password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {formik.errors.password ? <div>{formik.errors.password}</div> : null}
        </SoftBox>
        <SoftBox mt={4} mb={1}>
          <SoftButton variant="gradient" color="dark" fullWidth type="submit" disabled={loading}>
            {loading ? "Signing In..." : "Admin Sign In"}
          </SoftButton>
        </SoftBox>
        <SoftBox mt={3} textAlign="center">
          <SoftTypography variant="button" color="text" fontWeight="regular">
            Forgot your password?{" "}
            <SoftTypography
              component={Link}
              to="/authentication/reset-password"
              variant="button"
              color="dark"
              fontWeight="medium"
              textGradient
            >
              Reset Password
            </SoftTypography>
          </SoftTypography>
        </SoftBox>
      </SoftBox>
    </CoverLayout>
  );
}

export default AdminSignIn;
