import React from "react";
import PropTypes from "prop-types";
import { Grid, Paper, IconButton, Typography } from "@mui/material";
import { Lock, Edit, Subscriptions } from "@mui/icons-material";

function TableView({ users, handleResetPassword, handleUpdateDetails, handleEditSubscription }) {
  return (
    <Paper>
      <Grid container spacing={2} p={2}>
        <Grid item xs={3}>
          <Typography variant="h6" fontWeight="bold">
            Name
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6" fontWeight="bold">
            Email
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="h6" fontWeight="bold">
            Subscription
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="h6" fontWeight="bold" align="center">
            Actions
          </Typography>
        </Grid>
        {users.map((user) => (
          <React.Fragment key={user._id}>
            <Grid item xs={3}>
              <Typography variant="body2">{user.name}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body2">{user.email}</Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="body2">{user.subscriptionStatus}</Typography>
            </Grid>
            <Grid item xs={3}>
              <Grid container spacing={1} justifyContent="center">
                <Grid item>
                  <IconButton
                    color="primary"
                    size="small"
                    onClick={() => handleResetPassword(user._id)}
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
                </Grid>
                <Grid item>
                  <IconButton
                    color="info"
                    size="small"
                    onClick={() => handleEditSubscription(user._id)}
                  >
                    <Subscriptions />
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
          </React.Fragment>
        ))}
      </Grid>
    </Paper>
  );
}

TableView.propTypes = {
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

export default TableView;
