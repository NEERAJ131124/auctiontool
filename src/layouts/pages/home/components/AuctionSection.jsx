import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import a1 from "../../../../assets/images/a1.jpeg";
import a2 from "../../../../assets/images/a2.jpeg";
const auctions = [
  {
    id: 1,
    name: "Dacia Sandero",
    year: "2022",
    specs: "5 500 km · 1.997 cm3 · Hybrid",
    status: "Auction Ended",
    image: a1,
  },
  {
    id: 2,
    name: "BMW X6",
    year: "2021",
    specs: "36 092 km · 1.968 cm3 · Diesel",
    status: "Auction Ended",
    image: a2,
  },
];

export default function AuctionSection() {
  return (
    <SoftBox py={4} bgcolor="grey.50" sx={{ px: { md: "5%" } }} style={{ marginTop: "0px" }}>
      <SoftBox container mx="auto" px={2}>
        <SoftBox display="flex" justifyContent="space-between" alignItems="center" mb={3}>
          <SoftTypography variant="h4" fontWeight="bold">
            Auctions
          </SoftTypography>
          <SoftBox display="flex" gap={2}>
            <Button variant="text" color="inherit">
              Newly Listed
            </Button>
            <Button variant="text" color="inherit">
              Top Rated
            </Button>
            <Button variant="text" color="inherit">
              Ending Soon
            </Button>
          </SoftBox>
        </SoftBox>
        <Grid container spacing={3}>
          {auctions.map((auction) => (
            <Grid item xs={12} md={4} key={auction.id}>
              <Card sx={{ overflow: "hidden", boxShadow: 3 }}>
                <img
                  src={auction.image || "https://placehold.co/600x400"}
                  alt={auction.name}
                  style={{ width: "100%", height: 300, objectFit: "fill" }}
                />
                <SoftBox p={2}>
                  <SoftTypography variant="h6" fontWeight="bold" mb={1}>
                    {auction.name}
                  </SoftTypography>
                  <SoftTypography variant="body2" color="textSecondary" mb={1}>
                    {auction.year} · {auction.specs}
                  </SoftTypography>
                  <SoftTypography variant="body2" color="error">
                    {auction.status}
                  </SoftTypography>
                </SoftBox>
              </Card>
            </Grid>
          ))}
        </Grid>
      </SoftBox>
    </SoftBox>
  );
}
