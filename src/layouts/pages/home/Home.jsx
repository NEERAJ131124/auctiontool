import { useNavigate } from "react-router-dom";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import AuctionSection from "./components/AuctionSection";
import AboutUs from "./components/AboutUs";
import Stats from "./components/Stats";
import BodyTypes from "./components/BodyTypes";
import Testimonials from "./components/Testimonials";
import Newsletter from "./components/NewsLetter";
import LatestNews from "./components/LatestNews";
import SoftBox from "components/SoftBox";
import { useEffect } from "react";
import Cookies from "universal-cookie";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import pageRoutes from "page.routes";
import Footer from "examples/Footer";

export default function Home() {
  const cookies = new Cookies();
  const navigate = useNavigate();
  useEffect(() => {
    if (cookies.get("token")) {
      navigate("/dashboard");
    }
  }, []);
  return (
    <SoftBox component="main" minHeight="100vh">
      <DefaultNavbar
        routes={pageRoutes}
        action={{
          type: "external",
          route: "https://auctiontool.vercel.app/sign-in",
          label: "Bid now",
        }}
      />
      <Hero />
      <Stats />
      {/*<HowItWorks />
      <AuctionSection />
      <BodyTypes />
      <AboutUs />
      <Testimonials />
      <LatestNews />
      <Newsletter /> */}
      <Footer />
    </SoftBox>
  );
}
