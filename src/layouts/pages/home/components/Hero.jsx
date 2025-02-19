import React from "react";
import { FormControl, InputLabel, TextField, InputAdornment } from "@mui/material";
import CarIcon from "@mui/icons-material/DirectionsCar";
import ModelIcon from "@mui/icons-material/DriveEta";
import BodyIcon from "@mui/icons-material/CarRepair";
import FuelIcon from "@mui/icons-material/LocalGasStation";
import Button from "@mui/material/Button";
import landing from "../../../../assets/images/landing.jpg";

export default function Hero() {
  return (
    <div
      style={{ position: "relative", height: "100vh", width: "100%", marginBottom: "15vh" }}
      sx={{ px: { md: "5%" } }}
    >
      <img
        src={landing}
        alt="Mercedes-Benz AMG GT-R"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
      <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0, 0, 0, 0.4)" }}>
        <div
          style={{
            margin: "0 auto",
            padding: "20px",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            position: "relative",
          }}
        >
          <div
            style={{ marginTop: "10%", position: "absolute", top: "10%", left: "5%", zIndex: 1 }}
          >
            <h6 style={{ color: "white", fontSize: "48px" }}>2019</h6>
            <h1 style={{ color: "white", fontWeight: "bold", fontSize: "72px" }}>
              Mercedes-Benz AMG GT-R
            </h1>
            <h5 style={{ color: "white" }}>Starting Bid from $2400.0</h5>
            <p style={{ color: "white", fontSize: "16px" }}>
              Experience the thrill of driving a masterpiece on wheels. <br />
              This car features a 3.0L V6 Twin Turbo engine and an 8-Speed <br /> Automatic
              transmission.
            </p>
            <div style={{ display: "flex", gap: "10px" }}>
              <Button variant="contained" color="secondary" style={{ color: "#111" }}>
                Place Bid
              </Button>
              <Button variant="contained" color="primary" style={{ color: "#fff" }}>
                Check Car
              </Button>
            </div>
          </div>
          <div
            style={{
              marginTop: "20px",
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "15px",
              maxWidth: "800px",
              margin: "0 auto",
              position: "absolute",
              bottom: "-15%",
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 1,
              boxShadow: "0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)",
            }}
          >
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              <FormControl fullWidth margin="normal" sx={{ flex: "1 1 45%" }}>
                <InputLabel
                  htmlFor="car-maker"
                  shrink
                  style={{ background: "white", padding: "0 5px" }}
                >
                  Car Maker
                </InputLabel>
                <TextField
                  id="car-maker"
                  name="carMaker"
                  select
                  SelectProps={{ native: true }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <CarIcon />
                      </InputAdornment>
                    ),
                    style: {
                      boxShadow: "inset 0 2px 4px rgba(0,0,0,0.1)",
                    },
                  }}
                >
                  <option>Select Maker</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="bmw">BMW</option>
                  <option value="audi">Audi</option>
                  <option value="toyota">Toyota</option>
                </TextField>
              </FormControl>
              <FormControl fullWidth margin="normal" sx={{ flex: "1 1 45%" }}>
                <InputLabel
                  htmlFor="car-model"
                  shrink
                  style={{ background: "white", padding: "0 5px" }}
                >
                  Car Model
                </InputLabel>
                <TextField
                  id="car-model"
                  name="carModel"
                  select
                  SelectProps={{ native: true }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <ModelIcon />
                      </InputAdornment>
                    ),
                    style: {
                      boxShadow: "inset 0 2px 4px rgba(0,0,0,0.1)",
                    },
                  }}
                >
                  <option>Select Model</option>
                  <option value="amg">AMG GT-R</option>
                  <option value="m5">M5</option>
                  <option value="rs7">RS7</option>
                  <option value="supra">Supra</option>
                </TextField>
              </FormControl>
              <FormControl fullWidth margin="normal" sx={{ flex: "1 1 45%" }}>
                <InputLabel htmlFor="body" shrink style={{ background: "white", padding: "0 5px" }}>
                  Body
                </InputLabel>
                <TextField
                  id="body"
                  name="body"
                  select
                  SelectProps={{ native: true }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <BodyIcon />
                      </InputAdornment>
                    ),
                    style: {
                      boxShadow: "inset 0 2px 4px rgba(0,0,0,0.1)",
                    },
                  }}
                >
                  <option>Select Body</option>
                  <option value="sedan">Sedan</option>
                  <option value="coupe">Coupe</option>
                  <option value="suv">SUV</option>
                  <option value="hatchback">Hatchback</option>
                </TextField>
              </FormControl>
              <FormControl fullWidth margin="normal" sx={{ flex: "1 1 45%" }}>
                <InputLabel htmlFor="fuel" shrink style={{ background: "white", padding: "0 5px" }}>
                  Fuel
                </InputLabel>
                <TextField
                  id="fuel"
                  name="fuel"
                  select
                  SelectProps={{ native: true }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <FuelIcon />
                      </InputAdornment>
                    ),
                    style: {
                      boxShadow: "inset 0 2px 4px rgba(0,0,0,0.1)",
                    },
                  }}
                >
                  <option>Select Fuel</option>
                  <option value="petrol">Petrol</option>
                  <option value="diesel">Diesel</option>
                  <option value="electric">Electric</option>
                  <option value="hybrid">Hybrid</option>
                </TextField>
              </FormControl>
            </div>
            <div
              style={{
                marginTop: "10px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <button
                style={{
                  backgroundColor: "transparent",
                  color: "black",
                  padding: "10px 20px",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                + Advanced Search
              </button>
              <Button type="submit" variant="contained" color="primary" style={{ color: "#fff" }}>
                Search
              </Button>
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}
