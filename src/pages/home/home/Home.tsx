import Banner from "../banner/Banner";
import Faq from "../faq/Faq";
import FeatureProducts from "../featureProducts/FeatureProducts";
import Footer from "../footer/Footer";
import Navbar from "../nav/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner/>
      <FeatureProducts/>
      <Faq/>
      <Footer/>
    </div>
  );
}
