import React, { useEffect, useState } from "react";
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
import { useFormik } from "formik";
import * as yup from "yup";
import Cookies from "universal-cookie";
import { fetchUserData } from "slices/userSlice";
import { useDispatch } from "react-redux";

const validationSchema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Enter a valid email").required("Email is required"),
  phoneNumber: yup
    .string()
    .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits")
    .required("Phone number is required"),
  dateOfBirth: yup.date().required("Date of birth is required"),
  address: yup.object({
    street: yup.string().required("Street is required"),
    city: yup.string().required("City is required"),
    state: yup.string().required("State is required"),
    zipCode: yup.string().required("Zip code is required"),
    country: yup.string().required("Country is required"),
  }),
});

function Profile() {
  const user = useSelector((state) => state.user.user);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const cookies = new Cookies();
  const [initialValues, setInitialValues] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    dateOfBirth: "",
    address: {
      street: "",
      city: "",
      state: "",
      zipCode: "",
      country: "",
    },
  });

  useEffect(() => {
    if (user) {
      setInitialValues({
        name: user.name || "",
        email: user.email || "",
        phoneNumber: user.phoneNumber || "",
        dateOfBirth: user.dateOfBirth ? new Date(user.dateOfBirth).toISOString().split("T")[0] : "",
        address: {
          street: user.address?.street || "",
          city: user.address?.city || "",
          state: user.address?.state || "",
          zipCode: user.address?.zipCode || "",
          country: user.address?.country || "",
        },
      });
    }
  }, [user]);

  const formik = useFormik({
    initialValues,
    enableReinitialize: true,
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const res = await axios.put(`${process.env.REACT_APP_API_URL}/api/users/profile`, values, {
          headers: {
            Authorization: `Bearer ${cookies.get("token")}`,
          },
        });
        console.log(res);
        dispatch(fetchUserData(res.data));

        handleClose();
      } catch (error) {
        console.error("Error updating profile:", error);
      }
    },
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3} style={{ minHeight: "83vh" }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Card sx={{ boxShadow: "0 8px 16px rgba(0,0,0,0.2)" }}>
              <SoftBox p={2} textAlign="center">
                <SoftAvatar src={user?.profilePicture} alt="profile" size="xl" />
                <SoftTypography variant="h5" fontWeight="medium" mt={2}>
                  {user?.name}
                </SoftTypography>
                <SoftTypography variant="body2" color="text" mt={1}>
                  {user?.email}
                </SoftTypography>
                <SoftTypography variant="body2" color="text" mt={1}>
                  {user?.phoneNumber}
                </SoftTypography>
                <SoftTypography variant="body2" color="text" mt={1}>
                  {user?.dateOfBirth ? new Date(user?.dateOfBirth).toLocaleDateString() : "N/A"}
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
                  {user?.address.street}
                </SoftTypography>
                <SoftTypography variant="body2" color="text" mt={1}>
                  {user?.address.city}, {user?.address.state} {user?.address.zipCode}
                </SoftTypography>
                <SoftTypography variant="body2" color="text" mt={1}>
                  {user?.address.country}
                </SoftTypography>
              </SoftBox>
            </Card>
            <Card sx={{ mt: 3, boxShadow: "0 8px 16px rgba(0,0,0,0.2)" }}>
              <SoftBox p={2}>
                <SoftTypography variant="h6" fontWeight="medium">
                  Payments
                </SoftTypography>
                <SoftBox mt={1}>
                  {user?.payments.length > 0 ? (
                    user?.payments.map((payment, index) => (
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
          onSubmit={formik.handleSubmit}
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
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
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
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
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
                  value={formik.values.phoneNumber}
                  onChange={(e) => {
                    const { value } = e.target;
                    if (/^\d*$/.test(value)) {
                      formik.setFieldValue("phoneNumber", value);
                    }
                  }}
                  onBlur={formik.handleBlur}
                  error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
                  helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
                  inputProps={{ maxLength: 10 }}
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
                  value={formik.values.dateOfBirth}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.dateOfBirth && Boolean(formik.errors.dateOfBirth)}
                  helperText={formik.touched.dateOfBirth && formik.errors.dateOfBirth}
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
                  value={formik.values.address.street}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.address?.street && Boolean(formik.errors.address?.street)}
                  helperText={formik.touched.address?.street && formik.errors.address?.street}
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
                  value={formik.values.address.city}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.address?.city && Boolean(formik.errors.address?.city)}
                  helperText={formik.touched.address?.city && formik.errors.address?.city}
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
                  value={formik.values.address.state}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.address?.state && Boolean(formik.errors.address?.state)}
                  helperText={formik.touched.address?.state && formik.errors.address?.state}
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
                  value={formik.values.address.zipCode}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.address?.zipCode && Boolean(formik.errors.address?.zipCode)}
                  helperText={formik.touched.address?.zipCode && formik.errors.address?.zipCode}
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
                  value={formik.values.address.country}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.address?.country && Boolean(formik.errors.address?.country)}
                  helperText={formik.touched.address?.country && formik.errors.address?.country}
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
          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
            <Button
              variant="contained"
              color="secondary"
              style={{ color: "#111" }}
              onClick={handleClose}
            >
              Cancel
            </Button>
            <Button type="submit" variant="contained" color="primary" style={{ color: "#fff" }}>
              Save
            </Button>
          </Box>{" "}
        </Box>
      </Modal>
    </DashboardLayout>
  );
}

export default Profile;
