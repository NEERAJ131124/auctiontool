import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, IconButton } from "@mui/material";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import ViewListIcon from "@mui/icons-material/ViewList";
import SoftBox from "components/SoftBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import { fetchUsers } from "slices/userManagementSlice";
import CardView from "./CardView";
import TableView from "./TableView";

function UserManagement() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.userManagement.users);
  const userStatus = useSelector((state) => state.userManagement.status);
  const error = useSelector((state) => state.userManagement.error);
  const [view, setView] = useState("card");

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

  let content;

  if (userStatus === "loading") {
    content = <div>Loading...</div>;
  } else if (userStatus === "succeeded") {
    content =
      view === "card" ? (
        <CardView
          users={users}
          handleResetPassword={handleResetPassword}
          handleUpdateDetails={handleUpdateDetails}
          handleEditSubscription={handleEditSubscription}
        />
      ) : (
        <TableView
          users={users}
          handleResetPassword={handleResetPassword}
          handleUpdateDetails={handleUpdateDetails}
          handleEditSubscription={handleEditSubscription}
        />
      );
  } else if (userStatus === "failed") {
    content = <div>{error}</div>;
  }

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3}>
        <Grid container justifyContent="flex-end">
          <IconButton onClick={() => setView(view === "card" ? "table" : "card")}>
            {view === "card" ? <ViewListIcon /> : <ViewModuleIcon />}
          </IconButton>
        </Grid>
        {content}
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default UserManagement;
