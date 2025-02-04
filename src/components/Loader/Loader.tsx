import cycleLoading from "../../assets/animation/sadi-cycle.json";
import Lottie from "lottie-react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="w-16 md:w-32">
        <Lottie animationData={cycleLoading} loop={true} />
      </div>
    </div>
  );
};

export default Loader;
