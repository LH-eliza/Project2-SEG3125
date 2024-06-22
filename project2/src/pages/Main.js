import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import ToolSection from "../components/Tools/ToolSection";
import DesignTypes from "../components/Types/DesignTypes";
import ColourPalettes from "../components/Colour/ColourPalette";

function Main() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <ToolSection />
      <DesignTypes />
      <ColourPalettes />
      <Footer />
    </div>
  );
}

export default Main;
