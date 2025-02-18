import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import Cookies from "universal-cookie";

const Success = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const cookies = new Cookies();

  useEffect(() => {
    const handleSuccess = async () => {
      const query = new URLSearchParams(location.search);
      const sessionId = query.get("session_id");

      if (sessionId) {
        try {
          const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/payment/success`, {
            params: { session_id: sessionId },
          });

          if (response.data.token) {
            Swal.fire("Success", response.data.message, "success");

            cookies.set("token", response.data.token, { path: "/", maxAge: 86400 });
            setTimeout(() => {
              navigate("/dashboard");
            }, 2000);
          } else {
            Swal.fire("Error", "Payment not successful", "error");
            setTimeout(() => {
              navigate("/authentication/sign-up/basic");
            }, 2000);
          }
        } catch (error) {
          Swal.fire("Error", "Payment not successful", "error");
          navigate("/authentication/sign-up");
        }
      } else {
        Swal.fire("Error", "No session ID found", "error");
        navigate("/authentication/sign-up");
      }
    };

    handleSuccess();
  }, [location, navigate]);

  return <div>Loading...</div>;
};

export default Success;
