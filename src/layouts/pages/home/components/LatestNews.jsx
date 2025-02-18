import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

const news = [
  {
    id: 1,
    title: "Exploring the World of Luxury Cars with a special Guest Interview",
    excerpt:
      "In a world where innovation knows no bounds, the automotive industry has undergone a remarkable transformation in recent years....",
    date: "24 Nov, 2023",
    author: "Sejay Miles",
    image: "https://placehold.co/600x400",
  },
  // Add more news items
];

export default function LatestNews() {
  return (
    <SoftBox py={4} bgcolor="grey.50">
      <SoftBox container mx="auto" px={2}>
        <SoftBox mb={3}>
          <SoftTypography variant="h6" color="primary">
            Find out Now
          </SoftTypography>
          <SoftTypography variant="h4" fontWeight="bold" mt={1}>
            Latest News
          </SoftTypography>
        </SoftBox>
        <Grid container spacing={3}>
          {news.map((item) => (
            <Grid item xs={12} md={4} key={item.id}>
              <Card sx={{ overflow: "hidden", boxShadow: 3 }}>
                <img
                  src={item.image || "https://placehold.co/600x400"}
                  alt={item.title}
                  style={{ width: "100%", height: 200, objectFit: "cover" }}
                />
                <SoftBox p={2}>
                  <SoftBox display="flex" alignItems="center" mb={1}>
                    <SoftTypography variant="body2" color="textSecondary" mr={1}>
                      {item.author}
                    </SoftTypography>
                    <SoftTypography variant="body2" color="textSecondary">
                      |
                    </SoftTypography>
                    <SoftTypography variant="body2" color="textSecondary" ml={1}>
                      {item.date}
                    </SoftTypography>
                  </SoftBox>
                  <SoftTypography variant="h6" fontWeight="bold" mb={1}>
                    {item.title}
                  </SoftTypography>
                  <SoftTypography variant="body2" color="textSecondary" mb={2}>
                    {item.excerpt}
                  </SoftTypography>
                  <Button variant="text" color="primary">
                    Read more →
                  </Button>
                </SoftBox>
              </Card>
            </Grid>
          ))}
        </Grid>
      </SoftBox>
    </SoftBox>
  );
}
