import React from "react";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import Invoice from "./Invoice";

function Invoices({ transactionHistory }) {
  return (
    <Card sx={{ boxShadow: "0 8px 16px rgba(0,0,0,0.2)" }}>
      <SoftBox p={2}>
        <SoftTypography variant="h6" fontWeight="medium">
          Payment History
        </SoftTypography>
        {transactionHistory.length > 0 ? (
          transactionHistory.map((transaction, index) => (
            <Invoice key={index} transactionHistory={transaction} />
          ))
        ) : (
          <SoftTypography variant="body2" color="text">
            No payment history available
          </SoftTypography>
        )}
      </SoftBox>
    </Card>
  );
}

Invoices.propTypes = {
  transactionHistory: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Invoices;
