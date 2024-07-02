import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import ToolSection from "../components/Tools/ToolSection";
import DesignTypes from "../components/Types/DesignTypes";
import ColourPalettes from "../components/Colour/ColourPalette";
import IconLibraries from "../components/IconLibraries/IconLibraries";
import InspiringDesignsCarousel from "../components/Inspiration/Inspo";
import NewsletterSignup from "../components/Newsletter/Newsletter";

function Main() {
  return (
    <div className="App">
      <Hero />
      <ToolSection />
      <DesignTypes />
      <ColourPalettes />
      <IconLibraries />
      <InspiringDesignsCarousel />
      <NewsletterSignup />
    </div>
  );
}

export default Main;
