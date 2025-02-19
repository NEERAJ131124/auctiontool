import React from "react";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import Footer from "examples/Footer";
import pageRoutes from "page.routes";

function AboutUs() {
  return (
    <SoftBox component="main" minHeight="100vh">
      <DefaultNavbar routes={pageRoutes} />
      <SoftBox py={6} style={{ paddingTop: "85px" }}>
        {/* Section 1: Introduction */}
        <SoftBox py={6} bgcolor="grey.100">
          <SoftBox container mx="auto" px={2} sx={{ px: { xs: 2, md: 10 } }}>
            <Grid container spacing={3} alignItems="center">
              <Grid item xs={12} md={6}>
                <img
                  src="https://placehold.co/600x400"
                  alt="About Auction Listing"
                  style={{ width: "100%", borderRadius: "15px" }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <SoftTypography variant="h4" fontWeight="bold" mb={2}>
                  Welcome to Auction Listing
                </SoftTypography>
                <SoftTypography variant="body1" color="textSecondary" mb={2}>
                  At Auction Listing, we redefine the car-buying experience by merging cutting-edge
                  technology with the excitement of live auctions. Our user-friendly interface
                  allows you to browse an extensive inventory of carefully curated vehicles, from
                  sleek sedans to powerful trucks and everything in between.
                </SoftTypography>
              </Grid>
            </Grid>
          </SoftBox>
        </SoftBox>

        {/* Section 2: Our Mission */}
        <SoftBox py={6}>
          <SoftBox container mx="auto" px={2} sx={{ px: { xs: 2, md: 10 } }}>
            <Grid container spacing={3} alignItems="center">
              <Grid item xs={12} md={6}>
                <SoftTypography variant="h4" fontWeight="bold" mb={2}>
                  Our Mission
                </SoftTypography>
                <SoftTypography variant="body1" color="textSecondary" mb={2}>
                  Our mission is to provide a seamless and transparent auction experience for both
                  buyers and sellers. We strive to offer a diverse range of vehicles, competitive
                  pricing, and exceptional customer service to ensure a satisfying experience for
                  all our users.
                </SoftTypography>
              </Grid>
              <Grid item xs={12} md={6}>
                <img
                  src="https://placehold.co/600x400"
                  alt="Our Mission"
                  style={{ width: "100%", borderRadius: "15px" }}
                />
              </Grid>
            </Grid>
          </SoftBox>
        </SoftBox>

        {/* Section 3: How It Works */}
        <SoftBox py={6} bgcolor="grey.100">
          <SoftBox container mx="auto" px={2} sx={{ px: { xs: 2, md: 10 } }}>
            <SoftTypography variant="h4" fontWeight="bold" mb={4} textAlign="center">
              How It Works
            </SoftTypography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={4}>
                <Card sx={{ textAlign: "center", p: 3 }}>
                  <img
                    src="https://placehold.co/100x100"
                    alt="Step 1"
                    style={{ width: 64, height: 64, margin: "0 auto 16px" }}
                  />
                  <SoftTypography variant="h6" fontWeight="bold" mb={1}>
                    Step 1: Register
                  </SoftTypography>
                  <SoftTypography variant="body2" color="textSecondary">
                    Create an account to start bidding on your favorite vehicles.
                  </SoftTypography>
                </Card>
              </Grid>
              <Grid item xs={12} md={4}>
                <Card sx={{ textAlign: "center", p: 3 }}>
                  <img
                    src="https://placehold.co/100x100"
                    alt="Step 2"
                    style={{ width: 64, height: 64, margin: "0 auto 16px" }}
                  />
                  <SoftTypography variant="h6" fontWeight="bold" mb={1}>
                    Step 2: Browse
                  </SoftTypography>
                  <SoftTypography variant="body2" color="textSecondary">
                    Explore our extensive inventory of vehicles and find the perfect one for you.
                  </SoftTypography>
                </Card>
              </Grid>
              <Grid item xs={12} md={4}>
                <Card sx={{ textAlign: "center", p: 3 }}>
                  <img
                    src="https://placehold.co/100x100"
                    alt="Step 3"
                    style={{ width: 64, height: 64, margin: "0 auto 16px" }}
                  />
                  <SoftTypography variant="h6" fontWeight="bold" mb={1}>
                    Step 3: Bid
                  </SoftTypography>
                  <SoftTypography variant="body2" color="textSecondary">
                    Place your bids and compete with other buyers to win your dream car.
                  </SoftTypography>
                </Card>
              </Grid>
            </Grid>
          </SoftBox>
        </SoftBox>

        {/* Section 4: Customer Testimonials */}
        <SoftBox py={6}>
          <SoftBox container mx="auto" px={2} sx={{ px: { xs: 2, md: 10 } }}>
            <SoftTypography variant="h4" fontWeight="bold" mb={4} textAlign="center">
              Customer Testimonials
            </SoftTypography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={4}>
                <Card sx={{ textAlign: "center", p: 3 }}>
                  <SoftTypography variant="body1" color="textSecondary" mb={2} fontStyle="italic">
                    &quot;Auction Listing made the car buying process so easy and enjoyable. I found
                    the perfect car and won the auction without any hassle.&quot;
                  </SoftTypography>
                  <SoftTypography variant="h6" fontWeight="medium">
                    Alex Turner
                  </SoftTypography>
                  <SoftTypography variant="body2" color="textSecondary">
                    California, CA
                  </SoftTypography>
                </Card>
              </Grid>
              <Grid item xs={12} md={4}>
                <Card sx={{ textAlign: "center", p: 3 }}>
                  <SoftTypography variant="body1" color="textSecondary" mb={2} fontStyle="italic">
                    &quot;The variety of vehicles available on Auction Listing is impressive. I was
                    able to find exactly what I was looking for at a great price.&quot;
                  </SoftTypography>
                  <SoftTypography variant="h6" fontWeight="medium">
                    Sarah Johnson
                  </SoftTypography>
                  <SoftTypography variant="body2" color="textSecondary">
                    New York, NY
                  </SoftTypography>
                </Card>
              </Grid>
              <Grid item xs={12} md={4}>
                <Card sx={{ textAlign: "center", p: 3 }}>
                  <SoftTypography variant="body1" color="textSecondary" mb={2} fontStyle="italic">
                    &quot;I highly recommend Auction Listing to anyone looking to buy a car through
                    an auction. The process is straightforward and the customer service is
                    excellent.&quot;
                  </SoftTypography>
                  <SoftTypography variant="h6" fontWeight="medium">
                    Michael Brown
                  </SoftTypography>
                  <SoftTypography variant="body2" color="textSecondary">
                    Austin, TX
                  </SoftTypography>
                </Card>
              </Grid>
            </Grid>
          </SoftBox>
        </SoftBox>

        {/* Section 5: Contact Us */}
        <SoftBox py={6} bgcolor="grey.100">
          <SoftBox container mx="auto" px={2} sx={{ px: { xs: 2, md: 10 } }}>
            <SoftTypography variant="h4" fontWeight="bold" mb={4} textAlign="center">
              Contact Us
            </SoftTypography>
            <Grid container spacing={3} justifyContent="center">
              <Grid item xs={12} md={6}>
                <Card sx={{ textAlign: "center", p: 3 }}>
                  <SoftTypography variant="body2" color="textSecondary" mb={2}>
                    Have any questions or concerns? We&apos;re always ready to help!
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
                </Card>
              </Grid>
            </Grid>
          </SoftBox>
        </SoftBox>
      </SoftBox>
      <Footer />
    </SoftBox>
  );
}

export default AboutUs;
