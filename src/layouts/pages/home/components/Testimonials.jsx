import { ChevronLeft, ChevronRight } from "lucide-react";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";

const testimonials = [
  {
    id: 1,
    text: "One of the aspects that impressed me the most was the diverse range of vehicles available for auction. Whether you're in the market for a sleek sedan, a robust SUV, or a vintage classic, AutoBid has an impressive inventory that caters to all tastes and preferences. The ability to explore various options in one place was a major time-saver for me.",
    author: "Alex Turner",
    location: "California, CA",
    image: "https://placehold.co/600x400",
  },
];

export default function Testimonials() {
  return (
    <SoftBox py={4} bgcolor="white">
      <SoftBox container mx="auto" px={2}>
        <SoftBox mb={3}>
          <SoftTypography variant="h6" color="primary">
            Find out Now
          </SoftTypography>
          <SoftTypography variant="h4" fontWeight="bold" mt={1}>
            User Testimonials:
            <br />
            What Our Customers Are Saying
          </SoftTypography>
        </SoftBox>
        <SoftBox position="relative">
          <SoftBox maxWidth="md" mx="auto">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} sx={{ textAlign: "center", p: 3 }}>
                <SoftTypography variant="body1" color="textSecondary" mb={2} fontStyle="italic">
                  {testimonial.text}
                </SoftTypography>
                <Grid container justifyContent="center" alignItems="center" spacing={2}>
                  <Grid item>
                    <img
                      src={testimonial.image || "https://placehold.co/600x400"}
                      alt={testimonial.author}
                      style={{ width: 48, height: 48, borderRadius: "50%" }}
                    />
                  </Grid>
                  <Grid item>
                    <SoftTypography variant="h6" fontWeight="medium">
                      {testimonial.author}
                    </SoftTypography>
                    <SoftTypography variant="body2" color="textSecondary">
                      {testimonial.location}
                    </SoftTypography>
                  </Grid>
                </Grid>
              </Card>
            ))}
          </SoftBox>
          <IconButton
            sx={{ position: "absolute", left: 0, top: "50%", transform: "translateY(-50%)" }}
          >
            <ChevronLeft />
          </IconButton>
          <IconButton
            sx={{ position: "absolute", right: 0, top: "50%", transform: "translateY(-50%)" }}
          >
            <ChevronRight />
          </IconButton>
        </SoftBox>
      </SoftBox>
    </SoftBox>
  );
}
