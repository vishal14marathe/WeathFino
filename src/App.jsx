import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import UHome from "./updatedComponets/UHome";
import FeaturesSection from "./updatedComponets/FeaturesSection";
import MarketTicker from "./components/MarketTicker";
import About from "./components/About";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import FeedbackPage from "./updatedComponets/FeedbackPage";

import Policies from "./components/Policies";
import ChartPage from "./components/ChartPage";
import HeatmapPage from "./components/HeatmapPage";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <>
              <UHome />
              <FeaturesSection />
              <MarketTicker />
              <ChartPage />
              <HeatmapPage />
              <About />
              <Services />
              <WhyChooseUs />
              <FeedbackPage />
            </>
          }
        />

        {/* POLICIES PAGE */}
        <Route path="/policies" element={<Policies />} />
      </Routes>

      <Footer />
    </>
  );
}
