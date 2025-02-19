import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import cardimg from "../../../../assets/images/card.jpg";

const stats = [
  { number: "40K", label: "Registered Members" },
  { number: "150M+", label: "Inventory Sold" },
  { number: "100%", label: "Selling Price Received" },
  { number: "6k+", label: "Satisfied Customers" },
];

export default function Stats() {
  return (
    <SoftBox py={4} bgcolor="grey.100" sx={{ px: { md: "5%" } }} style={{ marginTop: "0px" }}>
      <SoftBox container mx="auto" px={2}>
        <Grid container spacing={3} mb={4}>
          {stats.map((stat, index) => (
            <Grid item xs={12} md={3} key={index}>
              <Card sx={{ textAlign: "center", p: 3, boxShadow: 3 }}>
                <SoftTypography variant="h3" fontWeight="bold" mb={1}>
                  {stat.number}
                </SoftTypography>
                <SoftTypography variant="body1" color="primary">
                  {stat.label}
                </SoftTypography>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={6}>
            <SoftTypography variant="h6" color="primary" mb={1}>
              New Offers
            </SoftTypography>
            <SoftTypography variant="h4" fontWeight="bold" mb={2}>
              Exciting & Exclusive Auction Lot – Cars Ready for Bidding!
            </SoftTypography>
            <SoftTypography variant="body1" mb={2}>
              Get ready to bid for the car of your dreams and experience the thrill of owning a
              masterpiece on wheels! Find out below how to bid.
            </SoftTypography>
            <ul>
              <li>Year: 2023</li>
              <li>Make: Mercedes-Benz</li>
              <li>Model: G AMG</li>
              <li>Mileage: 15,000 miles</li>
              <li>Color: Midnight Black</li>
              <li>Condition: Excellent</li>
              <li>Engine: 3.0L V6 Twin Turbo</li>
              <li>Transmission: 8-Speed Automatic</li>
            </ul>
            <SoftBox mt={2}>
              <Button variant="contained" color="primary" sx={{ mr: 2 }} style={{ color: "#fff" }}>
                Submit Entry
              </Button>
              <Button variant="outlined" color="secondary" style={{ color: "#111" }}>
                View Slot
              </Button>
            </SoftBox>
          </Grid>
          <Grid item xs={12} md={6}>
            <img
              src={cardimg}
              alt="Mercedes G-Class"
              style={{ width: "100%", borderRadius: "15px" }}
            />
          </Grid>
        </Grid>
      </SoftBox>
    </SoftBox>
  );
}
