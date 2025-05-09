import { useGetAllBikesQuery } from "@/redux/features/bike/bikeApi";
import Loading from "@/components/ui/Loading";
import { TBike } from "@/types/bike.type";
import { FieldValues } from "react-hook-form"; 
import { useState } from "react";
import BikeCardForL from "../bike/BikeCardForL";

const Bikes = () => {
  const [filter] = useState<FieldValues>([{}]);

  const {
    data: bikes,
    isLoading,
    isError,
    error,
  } = useGetAllBikesQuery(filter);
  console.log(bikes);
  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    console.error(error);
    return (
      <div className="text-center py-14 text-red-500 text-lg font-semibold ">
        Error loading bikes. Please try again later.
      </div>
    );
  }

 

  return (
    <div className="lg:px-10 px-4 md:px-5 py-5 mb-10">
      <h1 className="text-3xl font-bold text-center mb-2">New Arrival Bike</h1>
      <p className="text-center mb-8">
        Check out the latest bikes in our collection
      </p>
      <div className=" grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-center items-stretch lg:gap-5 md:gap-4 gap-3">
        {bikes?.data?.slice(0, 4).map((bike: TBike) => (
          <BikeCardForL key={bike?._id} {...bike} />
        ))}
      </div>
      <div>
        {bikes?.data?.length === 0 && (
          <p className="text-center py-14 text-red-500 text-lg font-semibold ">
            No Bikes Found
          </p>
        )}
      </div>
    </div>
  );
};

export default Bikes;
