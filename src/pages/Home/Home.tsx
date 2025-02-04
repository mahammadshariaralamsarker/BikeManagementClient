import Testimonial from "../../components/Home/Testimonial";
import Features from "./Features";
import { HomeSlider } from "./HomeSlider";

const Home = () => {
  return (
    <div>
      <HomeSlider />
      <Features />
      <Testimonial />
    </div>
  );
};

export default Home;
