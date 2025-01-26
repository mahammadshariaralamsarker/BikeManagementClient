import Banner from "../banner/Banner";
import Faq from "../faq/Faq";
import FeatureProducts from "../featureProducts/FeatureProducts";
import Footer from "../footer/Footer"; 

export default function Home() {
  return (
    <div> 
      <Banner/>
      <FeatureProducts/>
      <Faq/>
      <Footer/>
    </div>
  );
}
