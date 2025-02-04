import { Link } from "react-router-dom"; 
import MyContainer from "../../components/Shared/MyContainer/MyContainer";
import MySection from "../../components/Shared/MySection/MySection";
import SectionHeading from "../../components/Shared/SectionHeading/SectionHeading";
import FeaturesBikeItem from "../../components/Home/FeaturesBicycleItem";

const Features = () => {
  const featuresItem = [
    {
      id: 1,
      cycle_name: "Mountain X200",
      description:
        "A rugged mountain bike designed for tough trails and rough terrains.",
      image:
        "https://res.cloudinary.com/djlpoyqau/image/upload/v1738607721/sadi4_xooxz8.jpg",
      category: "Mountain",
    },
    {
      id: 2,
      cycle_name: "Roadmaster Pro",
      description:
        "A lightweight road bike optimized for speed and long-distance rides.",
      image:
        "https://res.cloudinary.com/djlpoyqau/image/upload/v1738607721/sadi2_ym4pye.jpg",
      category: "Mountain",
    },
    {
      id: 3,
      cycle_name: "Urban Commuter",
      description:
        "A sleek, efficient bike for city commuting, offering comfort and durability.",
      image:
        "https://res.cloudinary.com/djlpoyqau/image/upload/v1738607721/sadi3_hxk6yb.jpg",
      category: "Road",
    },
    {
      id: 4,
      cycle_name: "Hybrid Explorer",
      description:
        "Combines the best of road and mountain bikes for versatile performance.",
      image:
        "https://res.cloudinary.com/djlpoyqau/image/upload/v1738607720/sadi1_f1bohs.jpg",
      category: "Hybrid",
    },
    {
      id: 5,
      cycle_name: "Folding SmartBike",
      description:
        "A compact folding bike perfect for easy storage and portability.",
      image:
        "https://res.cloudinary.com/djlpoyqau/image/upload/v1738607720/sadi6_am7f84.jpg",
      category: "BMX",
    },
    {
      id: 6,
      cycle_name: "Electric Speedster",
      description:
        "A high-performance e-bike that offers a smooth, powerful ride with electric assistance.",
      image:
        "https://res.cloudinary.com/djlpoyqau/image/upload/v1738607725/sadi5_njptn5.jpg",
      category: "Electric",
    },
  ];

  return (
    <>
      <MyContainer>
        <MySection>
          <SectionHeading title="Our Features" subTitle="Key benefits" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3 lg:gap-5">
            {featuresItem?.map((item) => (
              <FeaturesBikeItem key={item.id} item={item} />
            ))}
          </div>
          <div className="mt-2 flex justify-center items-center md:mt-4">
            <Link
              to="/Bikes"
              className="bg-primary active:bg-primary uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
            >
              View All
            </Link>
          </div>
        </MySection>
      </MyContainer>
    </>
  );
};

export default Features;
