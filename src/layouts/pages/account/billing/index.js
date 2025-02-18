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
import React, { useEffect, useState } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";

// Soft UI Dashboard PRO React components
import MasterCard from "examples/Cards/MasterCard";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

// Billing page components
import BaseLayout from "layouts/pages/account/components/BaseLayout";
import PaymentMethod from "layouts/pages/account/billing/components/PaymentMethod";
import Invoices from "layouts/pages/account/billing/components/Invoices";
import BillingInformation from "layouts/pages/account/billing/components/BillingInformation";
import Transactions from "layouts/pages/account/billing/components/Transactions";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";

function Billing() {
  const user = useSelector((state) => state.user.user);
  const [subscriptions, setSubscriptions] = useState([]);
  const [paymentHistory, setPaymentHistory] = useState([]);
  const [latestCard, setLatestCard] = useState("0000000000000000");

  const formatCardNumber = (number) => {
    if (!number) return "0000000000000000";
    const last4 = number.toString().padStart(4, "0");
    return `000000000000${last4}`;
  };

  useEffect(() => {
    if (user) {
      setSubscriptions(user.subscriptions || []);
      setPaymentHistory(user.paymentHistory || []);
      if (user.paymentMethods && user.paymentMethods.length > 0) {
        setLatestCard(user.paymentMethods[0].card);
        const cardnumber = user.paymentMethods[0].card.last4;
        console.log(user.paymentMethods);
        setLatestCard(formatCardNumber(cardnumber));
      }
    }
  }, [user]);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox mt={4}>
        <SoftBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={12}>
              <Grid container spacing={3}>
                <Grid item xs={12} xl={6}>
                  <SoftBox sx={{ boxShadow: 24, borderRadius: "20px" }}>
                    <MasterCard
                      number={latestCard}
                      holder={user?.name || "Card Holder"}
                      expires={
                        user?.paymentMethods[0].card.exp_month &&
                        user?.paymentMethods[0].card.exp_year
                          ? `${user.paymentMethods[0].card.exp_month}/${user.paymentMethods[0].card.exp_year}`
                          : "MM/YY"
                      }
                      cardType={user?.paymentMethods[0].card.brand || "mastercard"}
                    />
                  </SoftBox>
                </Grid>
                <Grid item xs={12} md={6}>
                  <SoftBox sx={{ boxShadow: 24, borderRadius: "20px" }}>
                    <BillingInformation subscriptions={subscriptions} />
                  </SoftBox>
                </Grid>

                {/* <Grid item xs={12} md={6} xl={3}>
                  <DefaultInfoCard
                    icon="account_balance"
                    title="salary"
                    description="Belong Interactive"
                    value="+$2000"
                  />
                </Grid>
                <Grid item xs={12} md={6} xl={3}>
                  <DefaultInfoCard
                    icon="paypal"
                    title="paypal"
                    description="Freelance Payment"
                    value="$455.00"
                  />
                </Grid> */}
                <Grid item xs={12}>
                  <SoftBox sx={{ boxShadow: 24, borderRadius: "20px" }}>
                    <PaymentMethod paymentMethods={user?.paymentMethods || []} />
                  </SoftBox>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </SoftBox>
        <SoftBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={6}>
              <SoftBox sx={{ boxShadow: 24, borderRadius: "20px" }}>
                <Invoices transactionHistory={paymentHistory} />
              </SoftBox>
            </Grid>
            {/* <Grid item xs={12} md={5}>
              <Transactions />
            </Grid> */}
          </Grid>
        </SoftBox>
      </SoftBox>
    </DashboardLayout>
  );
}

export default Billing;
