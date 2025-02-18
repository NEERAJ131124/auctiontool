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
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";

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
import { useState } from "react";

function PaymentMethod({ paymentMethods }) {
  const { borderWidth, borderColor } = borders;
  const [open, setOpen] = useState(false);

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

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleAddCard = (event) => {
    event.preventDefault();
    // Add logic to handle adding a new card to Stripe
    console.log(event);
    handleClose();
  };

  return (
    <>
      <Card
        id="delete-account"
        sx={{ boxShadow: 24, border: "1px solid #ccc", borderRadius: "15px" }}
      >
        <SoftBox pt={2} px={2} display="flex" justifyContent="space-between" alignItems="center">
          <SoftTypography variant="h6" fontWeight="medium">
            Payment Method
          </SoftTypography>
          <SoftButton variant="gradient" color="dark" onClick={handleOpen}>
            <Icon sx={{ fontWeight: "bold" }}>add</Icon>
            &nbsp;add new card
          </SoftButton>
        </SoftBox>
        <SoftBox p={2}>
          <Grid container spacing={3}>
            {paymentMethods.map((method, index) => (
              <Grid item xs={12} md={6} key={index}>
                <SoftBox
                  border={`${borderWidth[1]} solid ${borderColor}`}
                  borderRadius="lg"
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  p={3}
                >
                  <SoftBox
                    component="img"
                    src={getCardLogo(method.card.brand)}
                    alt="card logo"
                    width="10%"
                    mr={2}
                  />
                  <SoftTypography variant="h6" fontWeight="medium">
                    ****&nbsp;&nbsp;****&nbsp;&nbsp;****&nbsp;&nbsp;{method.card.last4}
                  </SoftTypography>
                  <SoftBox ml="auto" lineHeight={0}>
                    <Tooltip title="Edit Card" placement="top">
                      <Icon sx={{ cursor: "pointer" }} fontSize="small">
                        edit
                      </Icon>
                    </Tooltip>
                  </SoftBox>
                </SoftBox>
              </Grid>
            ))}
          </Grid>
        </SoftBox>
      </Card>

      <Modal open={open} onClose={handleClose}>
        <Box
          component="form"
          onSubmit={handleAddCard}
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: "90%", md: 600 },
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: "15px",
          }}
        >
          <SoftTypography variant="h6" fontWeight="medium" mb={2}>
            Add New Card
          </SoftTypography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                margin="normal"
                label="Card Number"
                variant="outlined"
                required
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                margin="normal"
                label="Card Holder Name"
                variant="outlined"
                required
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                margin="normal"
                label="Expiry Date (MM/YY)"
                variant="outlined"
                required
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                margin="normal"
                label="CVC"
                variant="outlined"
                required
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                margin="normal"
                label="Street"
                variant="outlined"
                required
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                margin="normal"
                label="City"
                variant="outlined"
                required
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                margin="normal"
                label="State"
                variant="outlined"
                required
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                margin="normal"
                label="Zip Code"
                variant="outlined"
                required
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                margin="normal"
                label="Country"
                variant="outlined"
                required
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
          </Grid>
          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
            <Button variant="contained" color="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button type="submit" variant="contained" color="primary">
              Add Card
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
}

PaymentMethod.propTypes = {
  paymentMethods: PropTypes.arrayOf(
    PropTypes.shape({
      card: PropTypes.shape({
        brand: PropTypes.string,
        last4: PropTypes.string,
      }),
    })
  ).isRequired,
};

export default PaymentMethod;
