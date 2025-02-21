import React from "react";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import Footer from "examples/Footer";
import pageRoutes from "page.routes";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import aboutlotties from "../../../assets/images/lottie/about.lottie";
import mission from "../../../assets/images/lottie/mission.lottie";
import HowItWorks from "../home/components/HowItWorks";
import TestimonialsSlider from "components/TestimonialsSlider";

const testimonials = [
  {
    quote:
      "Auction Listing made the car buying process so easy and enjoyable. I found the perfect car and won the auction without any hassle.",
    name: "Alex Turner",
    location: "California, CA",
  },
  {
    quote:
      "The variety of vehicles available on Auction Listing is impressive. I was able to find exactly what I was looking for at a great price.",
    name: "Sarah Johnson",
    location: "New York, NY",
  },
  {
    quote:
      "I highly recommend Auction Listing to anyone looking to buy a car through an auction. The process is straightforward and the customer service is excellent.",
    name: "Michael Brown",
    location: "Austin, TX",
  },
  {
    quote:
      "The variety of vehicles available on Auction Listing is impressive. I was able to find exactly what I was looking for at a great price.",
    name: "Sarah Johnson",
    location: "New York, NY",
  },
];

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
                <DotLottieReact src={aboutlotties} loop autoplay />
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
                <DotLottieReact src={mission} loop autoplay />
              </Grid>
            </Grid>
          </SoftBox>
        </SoftBox>

        {/* Section 3: How It Works */}
        <SoftBox py={6} bgcolor="grey.100">
          <HowItWorks />
        </SoftBox>

        {/* Section 4: Customer Testimonials */}
        <SoftBox py={6}>
          <SoftBox container mx="auto" px={2} sx={{ px: { xs: 2, md: 10 } }}>
            <SoftTypography variant="h4" fontWeight="bold" mb={4} textAlign="center">
              Customer Testimonials
            </SoftTypography>
            <TestimonialsSlider testimonials={testimonials} />
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
