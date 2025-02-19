import React from "react";
import { Card, Grid, Avatar, Typography } from "@mui/material";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";
import PersonIcon from "@mui/icons-material/Person";
import LockResetIcon from "@mui/icons-material/LockReset";
import EditIcon from "@mui/icons-material/Edit";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import PropTypes from "prop-types";

function CardView({ users, handleResetPassword, handleUpdateDetails, handleEditSubscription }) {
  return (
    <Grid container spacing={3}>
      {users.map((user) => (
        <Grid item xs={12} md={6} lg={4} key={user._id}>
          <Card sx={{ boxShadow: 3 }}>
            <SoftBox p={2} textAlign="center">
              <Avatar
                sx={{ width: 100, height: 100, margin: "0 auto", mb: 2 }}
                src={user.profilePicture || ""}
              >
                <PersonIcon sx={{ fontSize: 50 }} />
              </Avatar>
              <SoftTypography variant="h5" fontWeight="bold">
                {user.name}
              </SoftTypography>
              <Typography variant="body2" color="textSecondary">
                {user.email}
              </Typography>
              <Typography variant="body2" color="textSecondary" mt={1}>
                Subscription: {user.subscriptionStatus}
              </Typography>
              <SoftBox mt={2}>
                <SoftButton
                  variant="contained"
                  color="primary"
                  size="small"
                  onClick={() => handleResetPassword(user._id)}
                  startIcon={<LockResetIcon />}
                >
                  Reset Password
                </SoftButton>
              </SoftBox>
              <SoftBox mt={2}>
                <SoftButton
                  variant="contained"
                  color="secondary"
                  size="small"
                  onClick={() => handleUpdateDetails(user._id)}
                  startIcon={<EditIcon />}
                >
                  Update Details
                </SoftButton>
              </SoftBox>
              <SoftBox mt={2}>
                <SoftButton
                  variant="contained"
                  color="info"
                  size="small"
                  onClick={() => handleEditSubscription(user._id)}
                  startIcon={<SubscriptionsIcon />}
                >
                  Edit Subscription
                </SoftButton>
              </SoftBox>
            </SoftBox>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

CardView.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      subscriptionStatus: PropTypes.string.isRequired,
    })
  ).isRequired,
  handleResetPassword: PropTypes.func.isRequired,
  handleUpdateDetails: PropTypes.func.isRequired,
  handleEditSubscription: PropTypes.func.isRequired,
};

export default CardView;
