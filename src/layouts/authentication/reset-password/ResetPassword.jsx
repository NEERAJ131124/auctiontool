import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";
import BasicLayout from "layouts/authentication/components/BasicLayout";
import curved6 from "assets/images/curved-images/curved6.jpg";

function ResetPassword() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [step, setStep] = useState(1);

  const handleSendOtp = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/otp/send-reset-password-otp`,
        { email }
      );
      Swal.fire("Success", response.data.msg, "success");
      setStep(2);
    } catch (error) {
      Swal.fire("Error", error.response.data.msg, "error");
    }
  };

  const handleResetPassword = async () => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/otp/reset-password`, {
        email,
        otp,
        newPassword,
      });
      Swal.fire("Success", response.data.msg, "success");
      setStep(1);
      setEmail("");
      setOtp("");
      setNewPassword("");
    } catch (error) {
      Swal.fire("Error", error.response.data.msg, "error");
    }
  };

  return (
    <BasicLayout
      title="Reset Password"
      description="Enter your email to receive an OTP for password reset."
      image={curved6}
    >
      <Card>
        <SoftBox p={3} mb={1} textAlign="center">
          <SoftTypography variant="h5" fontWeight="medium">
            Reset Password
          </SoftTypography>
        </SoftBox>
        <SoftBox pt={2} pb={3} px={3}>
          {step === 1 ? (
            <SoftBox component="form" role="form">
              <SoftBox mb={2}>
                <SoftInput
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </SoftBox>
              <SoftBox mt={4} mb={1}>
                <SoftButton variant="gradient" color="dark" fullWidth onClick={handleSendOtp}>
                  Send OTP
                </SoftButton>
              </SoftBox>
            </SoftBox>
          ) : (
            <SoftBox component="form" role="form">
              <SoftBox mb={2}>
                <SoftInput
                  type="text"
                  placeholder="OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
              </SoftBox>
              <SoftBox mb={2}>
                <SoftInput
                  type="password"
                  placeholder="New Password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </SoftBox>
              <SoftBox mt={4} mb={1}>
                <SoftButton variant="gradient" color="dark" fullWidth onClick={handleResetPassword}>
                  Reset Password
                </SoftButton>
              </SoftBox>
            </SoftBox>
          )}
          <SoftBox mt={3} textAlign="center">
            <SoftTypography variant="button" color="text" fontWeight="regular">
              Want to sign in using password?&nbsp;
              <SoftTypography
                component={Link}
                to="/authentication/sign-in/basic"
                variant="button"
                color="dark"
                fontWeight="bold"
                textGradient
              >
                Sign in
              </SoftTypography>
            </SoftTypography>
          </SoftBox>
        </SoftBox>
      </Card>
    </BasicLayout>
  );
}

export default ResetPassword;
