import React from "react";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MiniStatisticsCard from "examples/Cards/StatisticsCards/MiniStatisticsCard";
// import SalesTable from "examples/Tables/SalesTable";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import GradientLineChart from "examples/Charts/LineCharts/GradientLineChart";
// import Globe from "examples/Globe";

// Soft UI Dashboard PRO React base styles
import typography from "assets/theme/base/typography";
import breakpoints from "assets/theme/base/breakpoints";

// Data
import salesTableData from "layouts/dashboards/default/data/salesTableData";
import reportsBarChartData from "layouts/dashboards/default/data/reportsBarChartData";
import gradientLineChartData from "layouts/dashboards/default/data/gradientLineChartData";

const carAuctionData = [
  { id: 1, car: "Vintage Car", highestBid: "$20,000", status: "Active" },
  { id: 2, car: "Sports Car", highestBid: "$50,000", status: "Sold" },
  { id: 3, car: "Luxury SUV", highestBid: "$70,000", status: "Active" },
  { id: 4, car: "Classic Muscle Car", highestBid: "$30,000", status: "Sold" },
];

function Dashboard() {
  const { values } = breakpoints;
  const { size } = typography;
  const { chart, items } = reportsBarChartData;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={12}>
            <SoftBox mb={3} p={1}>
              <SoftTypography
                variant={window.innerWidth < values.sm ? "h3" : "h2"}
                textTransform="capitalize"
                fontWeight="bold"
              >
                Car Auction Dashboard
              </SoftTypography>
            </SoftBox>
            <Grid container spacing={3}>
              {carAuctionData.map((auction) => (
                <Grid item xs={12} sm={6} md={3} key={auction.id}>
                  <MiniStatisticsCard
                    title={{ text: auction.car, fontWeight: "bold" }}
                    count={auction.highestBid}
                    percentage={{
                      color: auction.status === "Active" ? "success" : "error",
                      text: auction.status,
                    }}
                    icon={{ color: "info", component: "directions_car" }}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>

          <Grid item xs={12} lg={4}>
            <SoftBox mb={2} p={1}>
              <SoftTypography variant="h5" fontWeight="bold">
                Auction Statistics
              </SoftTypography>
            </SoftBox>
            <ReportsBarChart
              title="Bids per Car"
              description={
                <>
                  (<strong>+23%</strong>) than last week
                </>
              }
              chart={chart}
              items={items}
              height="200px"
            />
          </Grid>
          <Grid item xs={12} lg={8}>
            <GradientLineChart
              title="Auction Revenue"
              description={
                <SoftBox display="flex" alignItems="center">
                  <SoftBox fontSize={size.lg} color="success" mb={0.3} mr={0.5} lineHeight={0}>
                    <Icon sx={{ fontWeight: "bold" }}>arrow_upward</Icon>
                  </SoftBox>
                  <SoftTypography variant="button" color="text" fontWeight="medium">
                    4% more{" "}
                    <SoftTypography variant="button" color="text" fontWeight="regular">
                      in 2021
                    </SoftTypography>
                  </SoftTypography>
                </SoftBox>
              }
              chart={gradientLineChartData}
              height="200px"
            />
          </Grid>
        </Grid>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
