import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

const bodyTypes = [
  { name: "Sedan", image: "https://placehold.co/600x400" },
  { name: "SUV", image: "https://placehold.co/600x400" },
  { name: "Sports", image: "https://placehold.co/600x400" },
  { name: "Convertible", image: "https://placehold.co/600x400" },
  { name: "Compact", image: "https://placehold.co/600x400" },
  { name: "Pick Up", image: "https://placehold.co/600x400" },
  { name: "Crossover", image: "https://placehold.co/600x400" },
  { name: "Electric", image: "https://placehold.co/600x400" },
];

export default function BodyTypes() {
  return (
    <SoftBox py={4} bgcolor="white">
      <SoftBox container mx="auto" px={2}>
        <SoftBox textAlign="center" mb={3}>
          <SoftTypography variant="h6" color="primary">
            Find your Style
          </SoftTypography>
          <SoftTypography variant="h4" fontWeight="bold" mt={1}>
            Search by Body Type
          </SoftTypography>
        </SoftBox>
        <Grid container spacing={3}>
          {bodyTypes.map((type, index) => (
            <Grid item xs={12} md={3} key={index}>
              <Card sx={{ textAlign: "center" }}>
                <SoftBox position="relative" height={128} mb={2}>
                  <img
                    src={type.image || "https://placehold.co/600x400"}
                    alt={type.name}
                    style={{ width: "100%", height: "100%", objectFit: "contain" }}
                  />
                </SoftBox>
                <SoftTypography variant="h5" fontWeight="bold">
                  {type.name}
                </SoftTypography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </SoftBox>
    </SoftBox>
  );
}
