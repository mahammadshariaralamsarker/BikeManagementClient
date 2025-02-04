import React, { useState } from "react";
import BikeCard from "../../components/Bike/BikeCard";
import MyContainer from "../../components/Shared/MyContainer/MyContainer";
import MySection from "../../components/Shared/MySection/MySection";
import {
  useGetAllBikeQuery,
  useGetSpecificBikeFieldsQuery,
} from "../../redux/features/Bike/Bike.api";
import { TProduct, TQueryParams } from "../../types/Bike.types";
import { BikeBrand, BikeCategory } from "../../constant/global.constant";

const Bikes = () => {
  const [params, setParams] = useState<TQueryParams[] | undefined>(undefined);
  const { data: BikeData } = useGetAllBikeQuery(params);
  const { data: specificField } = useGetSpecificBikeFieldsQuery(undefined);
  // Handle Filter
  const handleChangeFilter = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setParams((prevParams) => {
      const updateParams = prevParams ? [...prevParams] : [];
      const filterParams = updateParams?.filter((param) => param.name !== name);
      // Stock Filter
      if (name === "availability") {
        filterParams.push({ name, value });
      } else {
        filterParams.push({ name, value });
      }

      return filterParams;
    });
  };

  return (
    <div>
      {/* Small Banner */}
      <div className="bg-primary/25 flex flex-col justify-center items-center h-32 md:h-60 space-y-1">
        <h2 className="text-lg font-orbitron font-bold md:text-3xl">
          Our Bikes
        </h2>
        <p>
          Home - <span>Bikes</span>
        </p>
      </div>

      <MyContainer>
        <MySection>
          <div className=" max-w-full  mx-auto gap-4 mb-5">
            <div className="flex flex-col gap-3 justify-center items-center">
              {/* Search */}
              <div className="flex flex-col md:flex-row gap-3">
                <div className="flex gap-1">
                  <input
                    type="text"
                    id="searchTerm"
                    name="searchTerm"
                    onChange={handleChangeFilter}
                    placeholder="Search..."
                    className="w-full rounded-md border border-overlyBg focus:border-primary bg-overlyBg focus:bg-white transition-all py-2 px-3 outline-none"
                  />
                </div>

                <div className="flex gap-2">
                  <div>
                    <input
                      type="number"
                      onChange={handleChangeFilter}
                      id="minPrice"
                      name="minPrice"
                      placeholder="Min Pice"
                      className="w-full rounded-md border border-overlyBg focus:border-primary bg-overlyBg focus:bg-white transition-all py-2 px-3 outline-none"
                    />
                  </div>
                  <div>
                    <input
                      type="number"
                      id="maxPrice"
                      onChange={handleChangeFilter}
                      name="maxPrice"
                      placeholder="Max Pice"
                      className="w-full rounded-md border border-overlyBg focus:border-primary bg-overlyBg focus:bg-white transition-all py-2 px-3 outline-none"
                    />
                  </div>
                </div>
              </div>
              {/* Filter */}
              <div className="">
                <div className="flex md:flex-row flex-col space-y-2 md:space-y-0 md:space-x-2">
                  {/* Model */}
                  <select
                    name="model"
                    onChange={handleChangeFilter}
                    id=""
                    className="focus:outline-none focus:border focus:border-primary p-2"
                  >
                    <option disabled selected>
                      Filter By Model
                    </option>
                    {specificField?.data?.map((item: TProduct) => (
                      <option key={item?._id} value={item?.model}>
                        {item?.model}
                      </option>
                    ))}
                  </select>
                  {/* Brand */}
                  <select
                    name="brand"
                    onChange={handleChangeFilter}
                    id=""
                    className="focus:outline-none focus:border focus:border-primary p-2"
                  >
                    <option disabled selected>
                      Filter By Brand
                    </option>
                    {BikeBrand?.map((item, idx) => (
                      <option value={item} key={idx}>
                        {item}
                      </option>
                    ))}
                  </select>
                  {/* Category */}
                  <select
                    name="category"
                    onChange={handleChangeFilter}
                    id=""
                    className="focus:outline-none focus:border focus:border-primary p-2"
                  >
                    <option disabled selected>
                      Filter By Category
                    </option>
                    {BikeCategory?.map((item, idx) => (
                      <option value={item} key={idx}>
                        {item}
                      </option>
                    ))}
                  </select>
                  {/* availability */}
                  <select
                    name="availability"
                    onChange={handleChangeFilter}
                    id=""
                    className="focus:outline-none focus:border focus:border-primary p-2"
                  >
                    <option disabled selected>
                      Filter By Availability
                    </option>
                    <option value="in-stock">In Stock</option>
                    <option value="out-of-stock">Out Of Stock</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4 lg:gap-5">
            {BikeData?.data?.map((item: TProduct) => (
              <BikeCard key={item._id} item={item} />
            ))}
          </div>
        </MySection>
      </MyContainer>
    </div>
  );
};

export default Bikes;
