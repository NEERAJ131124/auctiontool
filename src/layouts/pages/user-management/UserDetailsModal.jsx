import React from "react";
import PropTypes from "prop-types";
import { Modal, Box, Typography, Button, Grid } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

function UserDetailsModal({ open, handleClose, user }) {
  if (!user) return null;

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Typography variant="h6" component="h2">
          User Details
        </Typography>
        <Grid container spacing={2} mt={2}>
          <Grid item xs={12}>
            <Typography variant="body1">
              <strong>Name:</strong> {user.name}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">
              <strong>Email:</strong> {user.email}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">
              <strong>Subscription:</strong> {user.subscriptionStatus}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">
              <strong>Payments:</strong>
            </Typography>
            {user.payments.map((payment) => (
              <Typography key={payment._id} variant="body2">
                {payment.month}: {payment.status} - ${payment.amount}
              </Typography>
            ))}
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">
              <strong>Transaction History:</strong>
            </Typography>
            {/* Add transaction history details here */}
          </Grid>
        </Grid>
        <Box mt={3} display="flex" justifyContent="flex-end">
          <Button variant="contained" color="secondary" onClick={handleClose}>
            Close
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}

UserDetailsModal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  user: PropTypes.object,
};

export default UserDetailsModal;
