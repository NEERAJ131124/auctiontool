import React, { useState } from "react";
import PropTypes from "prop-types";
import { Grid, Paper, IconButton, Typography } from "@mui/material";
import { Lock, Edit, Subscriptions, Visibility } from "@mui/icons-material";
import ResetPasswordModal from "./ResetPasswordModal";
import EditSubscriptionModal from "./EditSubscriptionModal";

function TableView({ users, handleUpdateDetails, handleViewDetails }) {
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

  const getBackgroundColor = (status) => {
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
        return "transparent";
    }
  };

  return (
    <Paper>
      <Grid container spacing={2} p={2}>
        <Grid item xs={3}>
          <Typography variant="h6" fontWeight="bold">
            Name
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="h6" fontWeight="bold">
            Email
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="h6" fontWeight="bold">
            Subscription
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6" fontWeight="bold" align="center">
            Actions
          </Typography>
        </Grid>
        {users.map((user) => (
          <React.Fragment key={user._id}>
            <Grid item xs={12}>
              <Grid
                container
                spacing={2}
                sx={{ backgroundColor: getBackgroundColor(user.subscriptionStatus) }}
              >
                <Grid item xs={3}>
                  <Typography variant="body2">{user.name}</Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography variant="body2">{user.email}</Typography>
                </Grid>
                <Grid item xs={2}>
                  <Typography variant="body2">
                    {user.subscriptions[0]?.status || "unknown"}
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Grid container spacing={1} justifyContent="center">
                    {/* <Grid item>
                      <IconButton
                        color="primary"
                        size="small"
                        onClick={() => handleOpenResetPassword(user)}
                      >
                        <Lock />
                      </IconButton>
                    </Grid>
                    <Grid item>
                      <IconButton
                        color="secondary"
                        size="small"
                        onClick={() => handleUpdateDetails(user._id)}
                      >
                        <Edit />
                      </IconButton>
                    </Grid> */}
                    <Grid item>
                      <IconButton
                        color="info"
                        size="small"
                        onClick={() => handleOpenEditSubscription(user)}
                      >
                        <Subscriptions />
                      </IconButton>
                    </Grid>
                    <Grid item>
                      <IconButton
                        color="default"
                        size="small"
                        onClick={() => handleViewDetails(user)}
                      >
                        <Visibility />
                      </IconButton>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </React.Fragment>
        ))}
      </Grid>
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
    </Paper>
  );
}

TableView.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      subscriptions: PropTypes.arrayOf(
        PropTypes.shape({
          status: PropTypes.string.isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
  handleUpdateDetails: PropTypes.func.isRequired,
  handleViewDetails: PropTypes.func.isRequired,
};

export default TableView;
