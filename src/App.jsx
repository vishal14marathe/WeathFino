import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import About from "./components/About";
import MarketTicker from "./components/MarketTicker";
import TradingTools from "./components/TradingTools";
import ChartCard from "./components/ChartCard";
import MarketIndicator from "./components/MarketIndicator";

import UHome from "./updatedComponets/UHome";

export default function App() {
  return (
    <>
      <Navbar />

      <UHome />

      {/* <Hero /> */}

      <MarketTicker />

      <About />
      <Services />
      <WhyChooseUs />
      <Stats />
      <Testimonials />

      <Footer />
    </>
  );
}
