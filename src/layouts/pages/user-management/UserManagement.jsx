import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, IconButton, Box, Checkbox, FormControlLabel, Typography } from "@mui/material";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import ViewListIcon from "@mui/icons-material/ViewList";
import SoftBox from "components/SoftBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import { fetchUsers } from "slices/userManagementSlice";
import CardView from "./CardView";
import TableView from "./TableView";
import UserDetailsModal from "./UserDetailsModal";

function UserManagement() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.userManagement.users);
  const userStatus = useSelector((state) => state.userManagement.status);
  const error = useSelector((state) => state.userManagement.error);
  const [view, setView] = useState("card");
  const [selectedUser, setSelectedUser] = useState(null);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [filter, setFilter] = useState({
    trialing: false,
    active: false,
    paused: false,
    canceled: false,
  });

  useEffect(() => {
    if (userStatus === "idle") {
      dispatch(fetchUsers());
    }
  }, [userStatus, dispatch]);

  const handleResetPassword = async (userId) => {
    // Implement the logic for resetting password
  };

  const handleUpdateDetails = async (userId) => {
    // Implement the logic for updating user details
  };

  const handleEditSubscription = async (userId) => {
    // Implement the logic for editing subscription details
  };

  const handleViewDetails = (user) => {
    setSelectedUser(user);
    setDetailsOpen(true);
  };

  const handleCloseDetails = () => {
    setDetailsOpen(false);
    setSelectedUser(null);
  };

  const handleFilterChange = (event) => {
    setFilter({ ...filter, [event.target.name]: event.target.checked });
  };

  const filteredUsers = users.filter((user) => {
    // If no filters are selected, show all users
    if (!filter.trialing && !filter.active && !filter.paused && !filter.canceled) return true;

    if (filter.trialing && user.subscriptionStatus === "trialing") return true;
    if (filter.active && user.subscriptionStatus === "active") return true;
    if (filter.paused && user.subscriptionStatus === "paused") return true;
    if (
      (filter.canceled && user.subscriptionStatus === "canceled") ||
      user.subscriptions[0].cancel_at_period_end
    )
      return true;
    return false;
  });

  let content;

  if (userStatus === "loading") {
    content = <div>Loading...</div>;
  } else if (userStatus === "succeeded") {
    content =
      view === "card" ? (
        <CardView
          users={filteredUsers.length > 0 ? filteredUsers : users}
          handleResetPassword={handleResetPassword}
          handleUpdateDetails={handleUpdateDetails}
          handleViewDetails={handleViewDetails}
        />
      ) : (
        <TableView
          users={filteredUsers.length > 0 ? filteredUsers : users}
          handleResetPassword={handleResetPassword}
          handleUpdateDetails={handleUpdateDetails}
          // handleEditSubscription={handleEditSubscription}
          handleViewDetails={handleViewDetails}
        />
      );
  } else if (userStatus === "failed") {
    content = <div>{error}</div>;
  }

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3}>
        <Box>
          {/* <Typography variant="h6" fontWeight="bold">
            Subscription Status Filters:
          </Typography> */}
          <Box display="flex" alignItems="center" mt={1}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={filter.trialing}
                  onChange={handleFilterChange}
                  name="trialing"
                  sx={{ color: "lightblue", "&.Mui-checked": { color: "lightblue" } }}
                />
              }
              label="Trialing"
              sx={{
                borderRadius: 4,
                padding: "4px",
                paddingBottom: "6px",
                margin: "auto",
                boxShadow: 3,
                backgroundColor: "lightblue",
              }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={filter.active}
                  onChange={handleFilterChange}
                  name="active"
                  sx={{ color: "lightgreen", "&.Mui-checked": { color: "lightgreen" } }}
                />
              }
              label="Active"
              sx={{
                borderRadius: 4,
                padding: "4px",
                paddingBottom: "6px",
                margin: "auto",
                boxShadow: 3,
                backgroundColor: "lightgreen",
              }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={filter.paused}
                  onChange={handleFilterChange}
                  name="paused"
                  sx={{ color: "lightyellow", "&.Mui-checked": { color: "lightyellow" } }}
                />
              }
              label="Paused"
              sx={{
                borderRadius: 4,
                padding: "4px",
                paddingBottom: "6px",
                margin: "auto",
                boxShadow: 3,
                backgroundColor: "lightyellow",
              }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={filter.canceled}
                  onChange={handleFilterChange}
                  name="canceled"
                  sx={{ color: "lightcoral", "&.Mui-checked": { color: "lightcoral" } }}
                />
              }
              label="Canceled"
              sx={{
                // border: "1px solid #ccc",
                borderRadius: 4,
                padding: "4px",
                paddingBottom: "6px",
                margin: "auto",
                boxShadow: 3,
                backgroundColor: "lightcoral",
              }}
            />
          </Box>
        </Box>
        <Grid container justifyContent="space-between">
          <Grid item>
            {/* <Button
              variant="contained"
              color="primary"
              onClick={() => console.log("Generate Report")}
            >
              Generate Report
            </Button> */}
          </Grid>
          <Grid item>
            <IconButton onClick={() => setView(view === "card" ? "table" : "card")}>
              {view === "card" ? <ViewListIcon /> : <ViewModuleIcon />}
            </IconButton>
          </Grid>
        </Grid>
        {content}
      </SoftBox>
      <UserDetailsModal open={detailsOpen} handleClose={handleCloseDetails} user={selectedUser} />
      <Footer />
    </DashboardLayout>
  );
}

export default UserManagement;
