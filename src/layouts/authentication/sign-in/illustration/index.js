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

import { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import Switch from "@mui/material/Switch";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";
import IllustrationLayout from "layouts/authentication/components/IllustrationLayout";
import chat from "assets/images/illustrations/chat.png";
import Cookies from "universal-cookie";

const validationSchema = yup.object({
  email: yup.string().email("Enter a valid email").required("Email is required"),
  password: yup
    .string()
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

function Illustration() {
  // const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const cookies = new Cookies();
  const navigate = useNavigate();

  useEffect(() => {
    const token = cookies.get("token");
    if (token) {
      navigate("/dashboard");
    }
  }, [navigate, cookies]);

  // const handleSetRememberMe = () => setRememberMe(!rememberMe);

  const handleSubmit = async (values) => {
    setLoading(true);
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/login`, values);
      Swal.fire("Success", "Signed in successfully", "success");
      if (response.data.token) {
        cookies.set("token", response.data.token, { path: "/", maxAge: 86400 });
        navigate("/dashboard");
      }
    } catch (error) {
      console.log(error);
      if (error.response) {
        const { status, data } = error.response;
        if (status === 400) {
          Swal.fire("Error", `${data.message} 400` || "Bad Request", "error");
        } else if (status === 401) {
          Swal.fire("Error", `${data.message} 401` || "Unauthorized", "error");
        } else if (status === 403) {
          Swal.fire("Error", `${data.message} 403` || "Forbidden", "error");
        } else if (status === 404) {
          Swal.fire("Error", `${data.message} 404` || "Not Found", "error");
        } else if (status === 500) {
          Swal.fire("Error", `${data.message} 500` || "Server Error", "error");
        } else {
          Swal.fire("Error", `${data.message}` || "An error occurred", "error");
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
    <IllustrationLayout
      title="Sign In"
      description="Please enter your credentials to access your account"
      illustration={{
        image: chat,
        title: '"Welcome to Premium Auctions"',
        description:
          "Access your account to bid, sell and manage your auction listings with our secure platform.",
      }}
    >
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
          <SoftButton
            disabled={loading}
            variant="gradient"
            color="info"
            size="large"
            fullWidth
            type="submit"
          >
            {loading ? "Signing In..." : "Sign In"}
          </SoftButton>
        </SoftBox>
        <SoftBox mt={3} textAlign="center">
          <SoftTypography variant="button" color="text" fontWeight="regular">
            Don&apos;t have an account?{" "}
            <SoftTypography
              component={Link}
              to="/authentication/sign-up"
              variant="button"
              color="info"
              fontWeight="medium"
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
              color="info"
              fontWeight="medium"
              textGradient
            >
              Sign in using OTP
            </SoftTypography>
          </SoftTypography>
        </SoftBox>
      </SoftBox>
    </IllustrationLayout>
  );
}

export default Illustration;
