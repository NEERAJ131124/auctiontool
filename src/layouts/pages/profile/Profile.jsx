import React, { useState } from "react";
import { useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import axios from "axios";
import InputAdornment from "@mui/material/InputAdornment";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import CakeIcon from "@mui/icons-material/Cake";
import HomeIcon from "@mui/icons-material/Home";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import PublicIcon from "@mui/icons-material/Public";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

function Profile() {
  const user = useSelector((state) => state.user.user);
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phoneNumber: user?.phoneNumber || "",
    dateOfBirth: user?.dateOfBirth || "",
    address: {
      street: user?.address?.street || "",
      city: user?.address?.city || "",
      state: user?.address?.state || "",
      zipCode: user?.address?.zipCode || "",
      country: user?.address?.country || "",
    },
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes("address.")) {
      const addressField = name.split(".")[1];
      setFormData((prevData) => ({
        ...prevData,
        address: {
          ...prevData.address,
          [addressField]: value,
        },
      }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put("/api/user/profile", formData);
      handleClose();
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3} style={{ minHeight: "83vh" }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Card sx={{ boxShadow: "0 8px 16px rgba(0,0,0,0.2)" }}>
              <SoftBox p={2} textAlign="center">
                <SoftAvatar src={user.profilePicture} alt="profile" size="xl" />
                <SoftTypography variant="h5" fontWeight="medium" mt={2}>
                  {user.name}
                </SoftTypography>
                <SoftTypography variant="body2" color="text" mt={1}>
                  {user.email}
                </SoftTypography>
                <SoftTypography variant="body2" color="text" mt={1}>
                  {user.phoneNumber}
                </SoftTypography>
                <SoftTypography variant="body2" color="text" mt={1}>
                  {user.dateOfBirth ? new Date(user.dateOfBirth).toLocaleDateString() : "N/A"}
                </SoftTypography>
                <Button variant="contained" color="primary" onClick={handleOpen} sx={{ mt: 2 }}>
                  Edit Profile
                </Button>
              </SoftBox>
            </Card>
          </Grid>
          <Grid item xs={12} md={8}>
            <Card sx={{ boxShadow: "0 8px 16px rgba(0,0,0,0.2)" }}>
              <SoftBox p={2}>
                <SoftTypography variant="h6" fontWeight="medium">
                  Address
                </SoftTypography>
                <SoftTypography variant="body2" color="text" mt={1}>
                  {user.address.street}
                </SoftTypography>
                <SoftTypography variant="body2" color="text" mt={1}>
                  {user.address.city}, {user.address.state} {user.address.zipCode}
                </SoftTypography>
                <SoftTypography variant="body2" color="text" mt={1}>
                  {user.address.country}
                </SoftTypography>
              </SoftBox>
            </Card>
            <Card sx={{ mt: 3, boxShadow: "0 8px 16px rgba(0,0,0,0.2)" }}>
              <SoftBox p={2}>
                <SoftTypography variant="h6" fontWeight="medium">
                  Payments
                </SoftTypography>
                <SoftBox mt={1}>
                  {user.payments.length > 0 ? (
                    user.payments.map((payment, index) => (
                      <SoftBox key={index} mb={2} display="flex" alignItems="center">
                        <SoftBox display="flex" alignItems="center" mr={2}>
                          <i className="fas fa-calendar-alt" style={{ marginRight: "8px" }} />
                          <SoftTypography variant="body2" color="text">
                            Month: {payment.month}
                          </SoftTypography>
                        </SoftBox>
                        <SoftBox display="flex" alignItems="center" mr={2}>
                          <i className="fas fa-dollar-sign" style={{ marginRight: "8px" }} />
                          <SoftTypography variant="body2" color="text">
                            Amount: ${payment.amount}
                          </SoftTypography>
                        </SoftBox>
                        <SoftBox display="flex" alignItems="center">
                          <i className="fas fa-clock" style={{ marginRight: "8px" }} />
                          <SoftTypography variant="body2" color="text">
                            Date: {new Date(payment.date).toLocaleDateString()}
                          </SoftTypography>
                        </SoftBox>
                      </SoftBox>
                    ))
                  ) : (
                    <SoftTypography variant="body2" color="text">
                      No payments available
                    </SoftTypography>
                  )}
                </SoftBox>
              </SoftBox>
            </Card>
          </Grid>
        </Grid>
      </SoftBox>
      <Footer />

      <Modal open={open} onClose={handleClose}>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: "90%", md: 600 },
            maxHeight: "90vh",
            overflow: "auto",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: "15px",
          }}
        >
          <SoftTypography variant="h6" fontWeight="medium" mb={2}>
            Edit Profile
          </SoftTypography>

          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth margin="normal">
                <InputLabel htmlFor="name" shrink style={{ background: "white", padding: "0 5px" }}>
                  Name
                </InputLabel>
                <TextField
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonIcon />
                      </InputAdornment>
                    ),
                    style: {
                      boxShadow: "inset 0 2px 4px rgba(0,0,0,0.1)",
                    },
                  }}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth margin="normal">
                <InputLabel
                  htmlFor="email"
                  shrink
                  style={{ background: "white", padding: "0 5px" }}
                >
                  Email
                </InputLabel>
                <TextField
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailIcon />
                      </InputAdornment>
                    ),
                    style: {
                      boxShadow: "inset 0 2px 4px rgba(0,0,0,0.1)",
                    },
                  }}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth margin="normal">
                <InputLabel
                  htmlFor="phoneNumber"
                  shrink
                  style={{ background: "white", padding: "0 5px" }}
                >
                  Phone Number
                </InputLabel>
                <TextField
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PhoneIcon />
                      </InputAdornment>
                    ),
                    style: {
                      boxShadow: "inset 0 2px 4px rgba(0,0,0,0.1)",
                    },
                  }}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth margin="normal">
                <InputLabel
                  htmlFor="dateOfBirth"
                  shrink
                  style={{ background: "white", padding: "0 5px" }}
                >
                  Date of Birth
                </InputLabel>
                <TextField
                  id="dateOfBirth"
                  name="dateOfBirth"
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <CakeIcon />
                      </InputAdornment>
                    ),
                    style: {
                      boxShadow: "inset 0 2px 4px rgba(0,0,0,0.1)",
                    },
                  }}
                  InputLabelProps={{ shrink: true }}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth margin="normal">
                <InputLabel
                  htmlFor="street"
                  shrink
                  style={{ background: "white", padding: "0 5px" }}
                >
                  Street
                </InputLabel>
                <TextField
                  id="street"
                  name="address.street"
                  value={formData.address.street}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <HomeIcon />
                      </InputAdornment>
                    ),
                    style: {
                      boxShadow: "inset 0 2px 4px rgba(0,0,0,0.1)",
                    },
                  }}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth margin="normal">
                <InputLabel htmlFor="city" shrink style={{ background: "white", padding: "0 5px" }}>
                  City
                </InputLabel>
                <TextField
                  id="city"
                  name="address.city"
                  value={formData.address.city}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LocationCityIcon />
                      </InputAdornment>
                    ),
                    style: {
                      boxShadow: "inset 0 2px 4px rgba(0,0,0,0.1)",
                    },
                  }}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth margin="normal">
                <InputLabel
                  htmlFor="state"
                  shrink
                  style={{ background: "white", padding: "0 5px" }}
                >
                  State
                </InputLabel>
                <TextField
                  id="state"
                  name="address.state"
                  value={formData.address.state}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LocationCityIcon />
                      </InputAdornment>
                    ),
                    style: {
                      boxShadow: "inset 0 2px 4px rgba(0,0,0,0.1)",
                    },
                  }}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth margin="normal">
                <InputLabel
                  htmlFor="zipCode"
                  shrink
                  style={{ background: "white", padding: "0 5px" }}
                >
                  Zip Code
                </InputLabel>
                <TextField
                  id="zipCode"
                  name="address.zipCode"
                  value={formData.address.zipCode}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <HomeIcon />
                      </InputAdornment>
                    ),
                    style: {
                      boxShadow: "inset 0 2px 4px rgba(0,0,0,0.1)",
                    },
                  }}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} md={12}>
              <FormControl fullWidth margin="normal">
                <InputLabel
                  htmlFor="country"
                  shrink
                  style={{ background: "white", padding: "0 5px" }}
                >
                  Country
                </InputLabel>
                <TextField
                  id="country"
                  name="address.country"
                  value={formData.address.country}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PublicIcon />
                      </InputAdornment>
                    ),
                    style: {
                      boxShadow: "inset 0 2px 4px rgba(0,0,0,0.1)",
                    },
                  }}
                />
              </FormControl>
            </Grid>
          </Grid>
          <Button variant="contained" color="secondary" sx={{ mt: 2 }}>
            Cancel
          </Button>
          <Button type="submit" variant="contained" color="secondary" sx={{ mt: 2 }}>
            Save
          </Button>
        </Box>
      </Modal>
    </DashboardLayout>
  );
}

export default Profile;
