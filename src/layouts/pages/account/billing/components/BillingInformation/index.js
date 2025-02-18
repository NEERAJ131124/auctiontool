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

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import Tooltip from "@mui/material/Tooltip";
import Swal from "sweetalert2";
import axios from "axios";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";

// Soft UI Dashboard PRO React base styles
import borders from "assets/theme/base/borders";

// Images
import masterCardLogo from "assets/images/logos/mastercard.png";
import visaLogo from "assets/images/logos/visa.png";
import amexLogo from "assets/images/logos/amex.png";
import discoverLogo from "assets/images/logos/Discover.png";
import { useSelector } from "react-redux";

function BillingInformation() {
  const { borderWidth, borderColor } = borders;
  const user = useSelector((state) => state.user.user);

  const getCardLogo = (type) => {
    switch (type) {
      case "visa":
        return visaLogo;
      case "amex":
        return amexLogo;
      case "discover":
        return discoverLogo;
      case "mastercard":
      default:
        return masterCardLogo;
    }
  };

  const handleCancelSubscription = async (subscriptionId) => {
    try {
      const response = await axios.post("/api/subscriptions/cancel", { subscriptionId });
      Swal.fire("Success", "Subscription canceled successfully", "success");
      setSubscriptions(subscriptions.filter((sub) => sub.id !== subscriptionId));
    } catch (error) {
      Swal.fire("Error", "Error canceling subscription", "error");
    }
  };

  const handleHoldSubscription = async (subscriptionId) => {
    try {
      const response = await axios.post("/api/subscriptions/hold", { subscriptionId });
      Swal.fire("Success", "Subscription paused successfully", "success");
      setSubscriptions(
        subscriptions.map((sub) => (sub.id === subscriptionId ? { ...sub, status: "paused" } : sub))
      );
    } catch (error) {
      Swal.fire("Error", "Error pausing subscription", "error");
    }
  };

  return (
    <Card id="billing-information">
      <SoftBox pt={2} px={2} display="flex" justifyContent="space-between" alignItems="center">
        <SoftTypography variant="h6" fontWeight="medium">
          Billing Information
        </SoftTypography>
      </SoftBox>
      <SoftBox p={2}>
        <Grid container spacing={3}>
          {user?.subscriptions.map((subscription, index) => (
            <Grid item xs={12} key={index}>
              <SoftBox
                border={`${borderWidth[1]} solid ${borderColor}`}
                borderRadius="lg"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                p={3}
              >
                <SoftBox>
                  <SoftTypography variant="h6" fontWeight="medium">
                    {subscription.plan.nickname || "Subscription Plan"}
                  </SoftTypography>
                  <SoftTypography variant="body2" color="text">
                    Status: {subscription.status}
                  </SoftTypography>
                  <SoftTypography variant="body2" color="text">
                    Amount: ${subscription.plan.amount / 100}
                  </SoftTypography>
                  <SoftTypography variant="body2" color="text">
                    Next Billing Date:{" "}
                    {new Date(subscription.current_period_end * 1000).toLocaleDateString()}
                  </SoftTypography>
                </SoftBox>
                <SoftBox ml="auto" lineHeight={0} display="flex" alignItems="center">
                  <SoftButton
                    variant="outlined"
                    color="warning"
                    onClick={() => handleHoldSubscription(subscription.id)}
                    sx={{ mr: 1 }}
                  >
                    Pause
                  </SoftButton>
                  <SoftButton
                    variant="outlined"
                    color="error"
                    onClick={() => handleCancelSubscription(subscription.id)}
                  >
                    Cancel
                  </SoftButton>
                </SoftBox>
              </SoftBox>
            </Grid>
          ))}
        </Grid>
      </SoftBox>
    </Card>
  );
}

export default BillingInformation;
