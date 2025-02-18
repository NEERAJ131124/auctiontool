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

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Icon from "@mui/material/Icon";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

function Invoice({ transactionHistory, noGutter }) {
  // Convert the date to local date
  const localDate = new Date(transactionHistory.date).toLocaleDateString();

  const handlePrint = () => {
    const printContent = `
      <div>
        <h3>Transaction Details</h3>
        <p>Date: ${localDate}</p>
        <p>Status: ${transactionHistory.status}</p>
        <p>Amount: ${transactionHistory.amount}</p>
      </div>
    `;
    const printWindow = window.open("", "_blank");
    printWindow.document.write(printContent);
    printWindow.document.close();
    printWindow.print();
  };

  return (
    <SoftBox
      component="li"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      py={1}
      pr={1}
      mb={noGutter ? 0 : 1}
    >
      <SoftBox lineHeight={1.125}>
        <SoftTypography display="block" variant="button" fontWeight="medium">
          {localDate}
        </SoftTypography>
        <SoftTypography variant="caption" fontWeight="regular" color="text">
          {transactionHistory.status}
        </SoftTypography>
      </SoftBox>
      <SoftBox display="flex" alignItems="center">
        <SoftTypography variant="button" fontWeight="regular" color="text">
          {transactionHistory.amount}$
        </SoftTypography>
        <SoftBox
          display="flex"
          alignItems="center"
          lineHeight={1}
          ml={3}
          sx={{ cursor: "pointer" }}
          onClick={handlePrint}
        >
          <Icon fontSize="small">picture_as_pdf</Icon>
          <SoftTypography variant="button" fontWeight="bold">
            &nbsp;PDF
          </SoftTypography>
        </SoftBox>
      </SoftBox>
    </SoftBox>
  );
}

// Typechecking props for the Invoice
Invoice.propTypes = {
  transactionHistory: PropTypes.shape({
    date: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
  }).isRequired,
  noGutter: PropTypes.bool,
};

export default Invoice;
