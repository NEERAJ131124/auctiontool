import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

const steps = [
  {
    title: "Registration and Account",
    description:
      "Search inventory of more than salvage used vehicles. Aliquam sagittis pellentesque turpis egestas tincidunt.",
    icon: "https://placehold.co/600x400",
  },
  {
    title: "Browse and Select a Vehicle",
    description:
      "Search inventory of more than salvage used vehicles. Aliquam sagittis pellentesque turpis egestas tincidunt.",
    icon: "https://placehold.co/600x400",
  },
  {
    title: "Place Bids and Monitor",
    description:
      "Search inventory of more than salvage used vehicles. Aliquam sagittis pellentesque turpis egestas tincidunt.",
    icon: "https://placehold.co/600x400",
  },
];

export default function HowItWorks() {
  return (
    <SoftBox py={4} bgcolor="white">
      <SoftBox container mx="auto" px={2}>
        <SoftBox textAlign="center" mb={3}>
          <SoftTypography variant="h6" color="primary">
            Start now
          </SoftTypography>
          <SoftTypography variant="h4" fontWeight="bold" mt={1}>
            How it Works
          </SoftTypography>
        </SoftBox>
        <Grid container spacing={3}>
          {steps.map((step, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card sx={{ textAlign: "center", p: 3 }}>
                <img
                  src={step.icon || "https://placehold.co/600x400"}
                  alt={step.title}
                  style={{ width: 64, height: 64, margin: "0 auto 16px" }}
                />
                <SoftTypography variant="h6" fontWeight="bold" mb={1}>
                  {step.title}
                </SoftTypography>
                <SoftTypography variant="body2" color="textSecondary">
                  {step.description}
                </SoftTypography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </SoftBox>
    </SoftBox>
  );
}
