import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import PageLayout from "examples/LayoutContainers/PageLayout";
import typography from "assets/theme/base/typography";
import Footer from "layouts/authentication/components/Footer";
import pageRoutes from "page.routes";
import error404 from "assets/images/illustrations/error-404.png";

function Error401() {
  const { d1, d3, d4, d5 } = typography;

  return (
    <PageLayout white>
      <DefaultNavbar
        routes={pageRoutes}
        transparent
        action={{
          type: "external",
          route: "https://auctiontool.vercel.com",
          label: "bid now",
          color: "dark",
        }}
      />
      <SoftBox my={24} height="calc(100vh - 24rem)">
        <Grid
          container
          spacing={3}
          justifyContent="center"
          alignItems="center"
          sx={{ height: "100%" }}
        >
          <Grid item xs={11} sm={9} container alignItems="center">
            <Grid item xs={12} lg={6}>
              <SoftBox
                fontSize={{ xs: d5.fontSize, sm: d4.fontSize, md: d3.fontSize, lg: d1.fontSize }}
                lineHeight={1.2}
              >
                <SoftTypography variant="inherit" color="error" textGradient fontWeight="bold">
                  Error 401
                </SoftTypography>
              </SoftBox>
              <SoftTypography variant="h2" color="dark" textGradient fontWeight="bold">
                Unauthorized
              </SoftTypography>
              <SoftBox mt={1} mb={2}>
                <SoftTypography variant="body1" color="text">
                  You are not authorized to view this page. Please login to continue.
                </SoftTypography>
              </SoftBox>
              <SoftBox mt={4} mb={2}>
                <SoftButton
                  component={Link}
                  to="/authentication/sign-in"
                  variant="gradient"
                  color="dark"
                >
                  go to login
                </SoftButton>
              </SoftBox>
            </Grid>
            <Grid item xs={12} lg={6}>
              <SoftBox component="img" src={error404} alt="error-401" width="100%" />
            </Grid>
          </Grid>
        </Grid>
      </SoftBox>
      <Footer />
    </PageLayout>
  );
}

export default Error401;
