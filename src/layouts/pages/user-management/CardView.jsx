import React, { useState } from "react";
import { Card, Grid, Avatar, Typography, Box } from "@mui/material";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";
import PersonIcon from "@mui/icons-material/Person";
import LockResetIcon from "@mui/icons-material/LockReset";
import EditIcon from "@mui/icons-material/Edit";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import VisibilityIcon from "@mui/icons-material/Visibility";
import PropTypes from "prop-types";
import ResetPasswordModal from "./ResetPasswordModal";
import EditSubscriptionModal from "./EditSubscriptionModal";

function CardView({ users, handleUpdateDetails, handleViewDetails }) {
  const [openResetPassword, setOpenResetPassword] = useState(false);
  const [openEditSubscription, setOpenEditSubscription] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleOpenResetPassword = (user) => {
    setSelectedUser(user);
    setOpenResetPassword(true);
  };

  const handleCloseResetPassword = () => {
    setOpenResetPassword(false);
    setSelectedUser(null);
  };

  const handleOpenEditSubscription = (user) => {
    setSelectedUser(user);
    setOpenEditSubscription(true);
  };

  const handleCloseEditSubscription = () => {
    setOpenEditSubscription(false);
    setSelectedUser(null);
  };

  const getCardBackgroundColor = (status) => {
    switch (status) {
      case "trialing":
        return "lightblue";
      case "active":
        return "lightgreen";
      case "paused":
        return "lightyellow";
      case "canceled":
        return "lightcoral";
      default:
        return "white";
    }
  };

  return (
    <>
      <Grid container spacing={3}>
        {users.map((user) => (
          <Grid item xs={12} md={6} lg={4} key={user._id}>
            <Card
              sx={{
                boxShadow: 3,
                backgroundColor: getCardBackgroundColor(user.subscriptionStatus),
              }}
            >
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
                  Subscription: {user.subscriptionStatus || "unknown"}
                </Typography>
                {/* <SoftBox mt={2}>
                  <SoftButton
                    variant="contained"
                    color="primary"
                    size="small"
                    onClick={() => handleOpenResetPassword(user)}
                    startIcon={<LockResetIcon />}
                  >
                    Reset Password
                  </SoftButton>
                </SoftBox> */}
                {/* <SoftBox mt={2}>
                  <SoftButton
                    variant="contained"
                    color="secondary"
                    size="small"
                    onClick={() => handleUpdateDetails(user._id)}
                    startIcon={<EditIcon />}
                  >
                    Update Details
                  </SoftButton>
                </SoftBox> */}
                <SoftBox mt={2}>
                  <SoftButton
                    variant="contained"
                    color="info"
                    size="small"
                    onClick={() => handleOpenEditSubscription(user)}
                    startIcon={<SubscriptionsIcon />}
                  >
                    Edit Subscription
                  </SoftButton>
                </SoftBox>
                <SoftBox mt={2}>
                  <SoftButton
                    variant="contained"
                    color="default"
                    size="small"
                    onClick={() => handleViewDetails(user)}
                    startIcon={<VisibilityIcon />}
                  >
                    View Details
                  </SoftButton>
                </SoftBox>
              </SoftBox>
            </Card>
          </Grid>
        ))}
        {selectedUser && (
          <>
            <ResetPasswordModal
              open={openResetPassword}
              handleClose={handleCloseResetPassword}
              userId={selectedUser._id}
            />
            <EditSubscriptionModal
              open={openEditSubscription}
              handleClose={handleCloseEditSubscription}
              user={selectedUser}
            />
          </>
        )}
      </Grid>
    </>
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
  handleUpdateDetails: PropTypes.func.isRequired,
  handleViewDetails: PropTypes.func.isRequired,
};

export default CardView;
