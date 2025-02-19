import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import c from "../../../../assets/images/c.jpg";

export default function AboutUs() {
  return (
    <SoftBox py={4} bgcolor="grey.100" sx={{ px: { md: "5%" } }} style={{ marginTop: "0px" }}>
      <SoftBox container mx="auto" px={2}>
        <Grid container spacing={12} alignItems="center">
          <Grid item xs={11} md={5}>
            <img src={c} alt="About AutoBid" style={{ width: "100%", borderRadius: "15px" }} />
          </Grid>
          <Grid item xs={12} md={7}>
            <SoftTypography variant="h6" color="primary" mb={1}>
              About Us
            </SoftTypography>
            <SoftTypography variant="h4" fontWeight="bold" mb={2}>
              Revving The Future: Your Ultimate Auction Car Destination
            </SoftTypography>
            <SoftTypography variant="body1" color="textSecondary" mb={2}>
              At Autobid, we redefine the car-buying experience by merging cutting-edge technology
              with the excitement of live auctions. Our user-friendly interface allows you to browse
              an extensive inventory of carefully curated vehicles, from sleek sedans to powerful
              trucks and everything in between.
            </SoftTypography>
            <ul>
              <li>
                <SoftTypography variant="body2" color="textSecondary" mb={1}>
                  <strong>Diverse Inventory:</strong> Explore a wide range of vehicles, each
                  meticulously.
                </SoftTypography>
              </li>
              <li>
                <SoftTypography variant="body2" color="textSecondary" mb={1}>
                  <strong>Live Auctions:</strong> Immerse yourself in the excitement of real-time
                  bidding.
                </SoftTypography>
              </li>
              <li>
                <SoftTypography variant="body2" color="textSecondary" mb={1}>
                  <strong>Transparency:</strong> We believe in openness and provide detailed
                  information.
                </SoftTypography>
              </li>
              <li>
                <SoftTypography variant="body2" color="textSecondary" mb={1}>
                  <strong>User-Friendly Platform:</strong> Navigate effortlessly through our
                  website.
                </SoftTypography>
              </li>
              <li>
                <SoftTypography variant="body2" color="textSecondary" mb={1}>
                  <strong>Secure Transactions:</strong> Bid with confidence, knowing that your
                  transactions are secure.
                </SoftTypography>
              </li>
            </ul>
          </Grid>
        </Grid>
      </SoftBox>
    </SoftBox>
  );
}
