import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import { updateUserInterests } from "slices/userSlice";
import Swal from "sweetalert2";

const carInterests = [
  "Sports Cars",
  "Luxury Cars",
  "Vintage Cars",
  "Electric Cars",
  "SUVs",
  "Convertibles",
  "Trucks",
  "Hybrid Cars",
];

function Interests() {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const [selectedInterests, setSelectedInterests] = useState(user ? user.interests : []);

  const handleInterestToggle = (interest) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(selectedInterests.filter((i) => i !== interest));
    } else {
      setSelectedInterests([...selectedInterests, interest]);
    }
  };

  const handleSaveInterests = () => {
    dispatch(updateUserInterests(selectedInterests));
    Swal.fire({
      title: "Success!",
      text: "Your interests have been saved successfully",
      icon: "success",
      confirmButtonText: "OK",
    });
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3} style={{ minHeight: "83vh" }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Card sx={{ boxShadow: "0 8px 16px rgba(0,0,0,0.2)" }}>
              <SoftBox p={2}>
                <SoftTypography variant="h5" fontWeight="medium">
                  {user && user.interests.length > 0 ? "Your Interests" : "Choose Your Interests"}
                </SoftTypography>
                <SoftBox mt={2}>
                  <Grid container spacing={2}>
                    {carInterests.map((interest, index) => (
                      <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                        <Card
                          sx={{
                            cursor: "pointer",
                            backgroundColor: selectedInterests.includes(interest)
                              ? "rgba(0,0,0,0.2)"
                              : "background.paper",
                            color: selectedInterests.includes(interest) ? "white" : "text.primary",
                            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                            textAlign: "center",
                            padding: "16px",
                          }}
                          onClick={() => handleInterestToggle(interest)}
                        >
                          <SoftTypography variant="body1" fontWeight="medium">
                            {interest}
                          </SoftTypography>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                </SoftBox>
                <SoftBox mt={3} textAlign="center">
                  <SoftButton variant="gradient" color="dark" onClick={handleSaveInterests}>
                    Save Interests
                  </SoftButton>
                </SoftBox>
              </SoftBox>
            </Card>
          </Grid>
        </Grid>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Interests;
