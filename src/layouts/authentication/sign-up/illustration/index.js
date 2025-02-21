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
import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import Swal from "sweetalert2";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { Link, useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";
import IllustrationLayout from "layouts/authentication/components/IllustrationLayout";
import rocket from "assets/images/illustrations/rocket-white.png";
import Cookies from "universal-cookie";

const validationSchema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Enter a valid email").required("Email is required"),
  password: yup
    .string()
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

function SignUpForm() {
  const [agreement, setAgreement] = useState(true);
  const [loading, setLoading] = useState(false);
  const cookies = new Cookies();
  const navigate = useNavigate();

  useEffect(() => {
    const token = cookies.get("token");
    if (token) {
      navigate("/dashboard");
    }
  }, [navigate, cookies]);

  const handleSetAgreement = () => setAgreement(!agreement);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      if (!stripePromise) return;

      setLoading(true);

      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/payment/register`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: values.email,
            name: values.name,
            password: values.password,
          }),
        });

        const data = await response.json();
        console.log(data);
        if (response.ok) {
          const stripe = await stripePromise;
          const { error } = await stripe.redirectToCheckout({
            sessionId: data.sessionId,
          });

          if (error) {
            console.error("Error redirecting to checkout:", error);
            Swal.fire("Error", `Error: ${error.message}`, "error");
          }
        } else {
          console.error("Error:", data.message);
          Swal.fire("Error", `Error: ${data.message}`, "error");
        }
      } catch (error) {
        console.error("Error:", error);
        Swal.fire("Error", "An error occurred. Please try again.", "error");
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <IllustrationLayout
      title="Sign Up"
      description="Enter your details to join our exclusive auction platform"
      illustration={{
        image: rocket,
        title: "Your journey starts here",
        description:
          "Join thousands of buyers and sellers in our trusted marketplace for premium auctions and exceptional deals.",
      }}
    >
      <Card>
        {/* <SoftBox p={3} mb={1} textAlign="center">
          <SoftTypography variant="h5" fontWeight="medium">
            Register
          </SoftTypography>
        </SoftBox> */}
        <SoftBox pt={2} pb={3} px={3}>
          <SoftBox component="form" role="form" onSubmit={formik.handleSubmit}>
            <SoftBox mb={2}>
              <SoftInput
                placeholder="Name"
                name="name"
                onChange={formik.handleChange}
                value={formik.values.name}
              />
              {formik.errors.name ? <div>{formik.errors.name}</div> : null}
            </SoftBox>
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
            <SoftBox mb={2}>
              <SoftInput
                type="password"
                placeholder="Password"
                name="password"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
              {formik.errors.password ? <div>{formik.errors.password}</div> : null}
            </SoftBox>
            <SoftBox mb={2}>
              <SoftInput
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                onChange={formik.handleChange}
                value={formik.values.confirmPassword}
              />
              {formik.errors.confirmPassword ? <div>{formik.errors.confirmPassword}</div> : null}
            </SoftBox>
            <SoftBox display="flex" alignItems="center">
              <Checkbox checked={agreement} onChange={handleSetAgreement} />
              <SoftTypography
                variant="button"
                fontWeight="regular"
                onClick={handleSetAgreement}
                sx={{ cursor: "pointer", userSelect: "none" }}
              >
                &nbsp;&nbsp;I agree to the&nbsp;
              </SoftTypography>
              <SoftTypography
                component="a"
                href="#"
                variant="button"
                fontWeight="bold"
                textGradient
              >
                Terms and Conditions
              </SoftTypography>
            </SoftBox>
            <SoftBox mt={4} mb={1}>
              <SoftButton
                variant="gradient"
                color="info"
                fullWidth
                type="submit"
                disabled={loading}
              >
                {loading ? "Signing Up..." : "Sign Up"}
              </SoftButton>
            </SoftBox>
            <SoftBox mt={3} textAlign="center">
              <SoftTypography variant="button" color="text" fontWeight="regular">
                Already have an account?&nbsp;
                <SoftTypography
                  component={Link}
                  to="/authentication/sign-in"
                  variant="button"
                  color="info"
                  fontWeight="bold"
                  textGradient
                >
                  Sign in
                </SoftTypography>
              </SoftTypography>
            </SoftBox>
          </SoftBox>
        </SoftBox>
      </Card>
    </IllustrationLayout>
  );
}

function Illustration() {
  return (
    <Elements stripe={stripePromise}>
      <SignUpForm />
    </Elements>
  );
}

export default Illustration;
