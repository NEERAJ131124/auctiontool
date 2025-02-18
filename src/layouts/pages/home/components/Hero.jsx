import React from "react";

export default function Hero() {
  return (
    <div style={{ position: "relative", height: "100vh", width: "100%" }} sx={{ px: { md: "5%" } }}>
      <img
        src="https://placehold.co/600x400"
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
              <button
                style={{
                  backgroundColor: "red",
                  color: "white",
                  padding: "10px 20px",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Place Bid
              </button>
              <button
                style={{
                  backgroundColor: "transparent",
                  color: "white",
                  padding: "10px 20px",
                  border: "1px solid white",
                  cursor: "pointer",
                }}
              >
                Check Car
              </button>
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
            }}
          >
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              <div style={{ flex: "1 1 200px" }}>
                <label style={{ fontWeight: "medium", marginBottom: "5px", display: "block" }}>
                  Car Maker
                </label>
                <select style={{ width: "100%", padding: "10px" }}>
                  <option>Select Maker</option>
                </select>
              </div>
              <div style={{ flex: "1 1 200px" }}>
                <label style={{ fontWeight: "medium", marginBottom: "5px", display: "block" }}>
                  Car Model
                </label>
                <select style={{ width: "100%", padding: "10px" }}>
                  <option>Select Model</option>
                </select>
              </div>
              <div style={{ flex: "1 1 200px" }}>
                <label style={{ fontWeight: "medium", marginBottom: "5px", display: "block" }}>
                  Body
                </label>
                <select style={{ width: "100%", padding: "10px" }}>
                  <option>Select Body</option>
                </select>
              </div>
              <div style={{ flex: "1 1 200px" }}>
                <label style={{ fontWeight: "medium", marginBottom: "5px", display: "block" }}>
                  Fuel
                </label>
                <select style={{ width: "100%", padding: "10px" }}>
                  <option>Select Fuel</option>
                </select>
              </div>
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
              <button
                style={{
                  backgroundColor: "blue",
                  color: "white",
                  padding: "10px 20px",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
