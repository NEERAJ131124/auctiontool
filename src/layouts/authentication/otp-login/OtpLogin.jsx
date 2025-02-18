import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import Card from "@mui/material/Card";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";
import IllustrationLayout from "layouts/authentication/components/IllustrationLayout";
import rocket from "assets/images/illustrations/rocket-white.png";

function OtpLogin() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const handleSendOtp = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/otp/send-otp`, {
        email,
      });
      Swal.fire("Success", response.data.msg, "success");
      setStep(2);
    } catch (error) {
      Swal.fire("Error", error.response.data.msg, "error");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/otp/verify-otp`, {
        email,
        otp,
      });
      Swal.fire("Success", "OTP verified successfully", "success");
      const { token } = response.data;
      document.cookie = `token=${token}; path=/; max-age=86400`;
      navigate("/dashboard");
    } catch (error) {
      Swal.fire("Error", error.response.data.msg, "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <IllustrationLayout
      title="OTP Login"
      description="Use these awesome forms to login or create new account in your project for free."
      illustration={{
        image: rocket,
        title: "Secure OTP Login",
        description:
          "Enter your email to receive an OTP for secure login. Follow the instructions to access your account.",
      }}
    >
      <Card>
        {/* <SoftBox p={3} mb={1} textAlign="center">
          <SoftTypography variant="h5" fontWeight="medium">
            OTP Login
          </SoftTypography>
        </SoftBox> */}
        <SoftBox pt={2} pb={3} px={3}>
          {step === 1 ? (
            <SoftBox component="form" role="form" onSubmit={handleSendOtp}>
              <SoftBox mb={2}>
                <SoftInput
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </SoftBox>
              <SoftBox mt={4} mb={1}>
                <SoftButton variant="gradient" color="info" fullWidth type="submit">
                  {loading ? "Sending OTP..." : "Send OTP"}
                </SoftButton>
              </SoftBox>
            </SoftBox>
          ) : (
            <SoftBox component="form" role="form" onSubmit={handleVerifyOtp}>
              <SoftBox mb={2}>
                <SoftInput
                  type="text"
                  placeholder="OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
              </SoftBox>
              <SoftBox mt={4} mb={1}>
                <SoftButton variant="gradient" color="info" fullWidth type="submit">
                  {loading ? "Verifying OTP..." : "Verify OTP"}
                </SoftButton>
              </SoftBox>
            </SoftBox>
          )}
          <SoftBox mt={3} textAlign="center">
            <SoftTypography variant="button" color="text" fontWeight="regular">
              Want to sign in using password?&nbsp;
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
      </Card>
    </IllustrationLayout>
  );
}

export default OtpLogin;
