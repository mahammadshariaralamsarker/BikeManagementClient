 
import Banner from "@/components/ui/Banner";
import MotorcycleGallery from "@/components/ui/Gallery";

import LatestNewsSection from "./News";
import Bikes from "./AllBike";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 ">
      <Banner />
      <Bikes/>
      <MotorcycleGallery />
      <LatestNewsSection />
    </div>
  );
};
export default LandingPage;
