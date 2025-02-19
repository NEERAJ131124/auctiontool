import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import sedan from "../../../../assets/images/cartypes/Sedaninblackandwhitethem.png";
import suv from "../../../../assets/images/cartypes/SUVinblackandwhitethem.png";
import sports from "../../../../assets/images/cartypes/blackandwhitethemedimageofacrossoverca.png";
import convertible from "../../../../assets/images/cartypes/blackandwhitethemedimageofaconvertibleca.png";
import compact from "../../../../assets/images/cartypes/blackandwhitethemedimageofacompactca.png";
import pickup from "../../../../assets/images/cartypes/blackandwhitethemedimageofapickupca.png";
import crossover from "../../../../assets/images/cartypes/blackandwhitethemedimageofacrossoverca.png";
import electric from "../../../../assets/images/cartypes/blackandwhitethemedimageofanelectricca.png";
import boxShadow from "assets/theme/functions/boxShadow";

const bodyTypes = [
  { name: "Sedan", image: sedan },
  { name: "SUV", image: suv },
  { name: "Sports", image: sports },
  { name: "Convertible", image: convertible },
  { name: "Compact", image: compact },
  { name: "Pickup", image: pickup },
  { name: "Crossover", image: crossover },
  { name: "Electric", image: electric },
];

export default function BodyTypes() {
  return (
    <SoftBox py={4} bgcolor="white" sx={{ px: { md: "5%" } }} style={{ marginTop: "0px" }}>
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
              <Card sx={{ textAlign: "center", width: "100%", boxShadow: 3 }}>
                <SoftBox position="relative" mb={2}>
                  <img
                    src={type.image || "https://placehold.co/600x400"}
                    alt={type.name}
                    style={{ width: 240, height: 180, objectFit: "fill" }}
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
