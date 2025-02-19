import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import Swal from "sweetalert2";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import Footer from "examples/Footer";
import pageRoutes from "page.routes";
import { TextField, InputAdornment, FormControl, InputLabel } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import SubjectIcon from "@mui/icons-material/Subject";
import DescriptionIcon from "@mui/icons-material/Description";

const validationSchema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Enter a valid email").required("Email is required"),
  subject: yup.string().required("Subject is required"),
  description: yup.string().required("Description is required"),
});

function ContactUs() {
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      description: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      setLoading(true);
      try {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/contact`, values);
        Swal.fire("Success", "Your query has been submitted successfully", "success");
        formik.resetForm();
      } catch (error) {
        Swal.fire("Error", "An error occurred. Please try again.", "error");
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <SoftBox component="main" minHeight="100vh">
      <DefaultNavbar routes={pageRoutes} />
      <SoftBox py={6} style={{ paddingTop: "130px" }}>
        <Grid container justifyContent="center">
          <Grid item xs={11} md={10} lg={10}>
            <Card sx={{ boxShadow: 24, borderRadius: "20px" }}>
              <SoftBox p={3} textAlign="center">
                <SoftTypography variant="h4" fontWeight="bold" mb={2}>
                  Contact Us
                </SoftTypography>
                <SoftTypography variant="body2" color="textSecondary" mb={3}>
                  Have any questions or concerns? We&apos;re always ready to help!
                </SoftTypography>
                <SoftBox component="form" role="form" onSubmit={formik.handleSubmit}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                      <FormControl fullWidth margin="normal">
                        <InputLabel
                          htmlFor="name"
                          shrink
                          style={{ background: "white", padding: "0 5px" }}
                        >
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
                          type="email"
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
                  </Grid>
                  <FormControl fullWidth margin="normal">
                    <InputLabel
                      htmlFor="subject"
                      shrink
                      style={{ background: "white", padding: "0 5px" }}
                    >
                      Subject
                    </InputLabel>
                    <TextField
                      id="subject"
                      name="subject"
                      value={formik.values.subject}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.touched.subject && Boolean(formik.errors.subject)}
                      helperText={formik.touched.subject && formik.errors.subject}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <SubjectIcon />
                          </InputAdornment>
                        ),
                        style: {
                          boxShadow: "inset 0 2px 4px rgba(0,0,0,0.1)",
                        },
                      }}
                    />
                  </FormControl>
                  <FormControl fullWidth margin="normal">
                    <InputLabel
                      htmlFor="description"
                      shrink
                      style={{ background: "white", padding: "0 5px" }}
                    >
                      Description
                    </InputLabel>
                    <TextField
                      id="description"
                      name="description"
                      value={formik.values.description}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.touched.description && Boolean(formik.errors.description)}
                      helperText={formik.touched.description && formik.errors.description}
                      multiline
                      rows={4}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <DescriptionIcon />
                          </InputAdornment>
                        ),
                        style: {
                          boxShadow: "inset 0 2px 4px rgba(0,0,0,0.1)",
                        },
                      }}
                    />
                  </FormControl>
                  <SoftBox mt={4} mb={1}>
                    <SoftButton
                      variant="gradient"
                      color="dark"
                      fullWidth
                      type="submit"
                      disabled={loading}
                    >
                      {loading ? "Submitting..." : "Submit"}
                    </SoftButton>
                  </SoftBox>
                </SoftBox>
              </SoftBox>
            </Card>
          </Grid>
        </Grid>
        <SoftBox mt={6}>
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={11} md={10}>
              <Card sx={{ boxShadow: 24, borderRadius: "20px" }}>
                <SoftBox p={3}>
                  <SoftTypography variant="h5" fontWeight="bold" mb={2}>
                    Customer Service
                  </SoftTypography>
                  <SoftTypography variant="body2" color="textSecondary" mb={2}>
                    Our customer service team is here to assist you with any questions or concerns
                    you may have.
                  </SoftTypography>
                  <SoftTypography variant="body2" color="textSecondary" mb={2}>
                    <strong>Email:</strong> support@auctionlistings.com
                  </SoftTypography>
                  <SoftTypography variant="body2" color="textSecondary" mb={2}>
                    <strong>Phone:</strong> +1 (800) 123-4567
                  </SoftTypography>
                  <SoftTypography variant="body2" color="textSecondary" mb={2}>
                    <strong>Address:</strong> 123 Auction St, Auction City, AC 12345
                  </SoftTypography>
                  <SoftTypography variant="body2" color="textSecondary">
                    Our support team is available Monday to Friday, 9 AM to 5 PM.
                  </SoftTypography>
                </SoftBox>
              </Card>
            </Grid>
          </Grid>
        </SoftBox>
      </SoftBox>
      <Footer />
    </SoftBox>
  );
}

export default ContactUs;
