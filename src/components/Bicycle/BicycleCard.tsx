import { Link } from "react-router-dom";
import { TProduct } from "../../types/Bike.types";

const BikeCard = ({ item }: { item: TProduct }) => {
  return (
    <Link
      to={`/Bike/${item?._id}`}
      className="relative block rounded-tr-3xl border border-gray-100"
    >
      {item.stock > 0 ? (
        <span className="absolute -right-px -top-px rounded-bl-3xl rounded-tr-3xl bg-primary px-4 py-2 font-medium uppercase text-xs tracking-widest text-white">
          In Stock
        </span>
      ) : (
        <span className="absolute -right-px -top-px rounded-bl-3xl rounded-tr-3xl bg-rose-600 px-4 py-2 font-medium uppercase text-xs tracking-widest text-white">
          Out of Stock
        </span>
      )}
      {/* <span className="absolute -right-px -top-px rounded-bl-3xl rounded-tr-3xl bg-rose-600 px-4 py-2 font-medium uppercase text-xs tracking-widest text-white">
        Out of Stock
      </span> */}

      <img
        src={item?.image}
        alt=""
        className="h-80 w-full rounded-tr-3xl object-cover"
      />

      <div className="">
        <div className="p-4 md:p-6 border-b border-x-gray-500/30">
          <div className="flex justify-start items-center gap-1">
            <span className="inline-block w-4 h-[1px] bg-gray-500/45"></span>
            <p className="text-gray-700 font-inter font-normal text-xs uppercase ">
              {item?.category}
            </p>
          </div>
          <h2 className="font-orbitron font-bold text-lg md:text-xl uppercase mt-2 text-secondary hover:text-primary">
            {item?.name}
          </h2>
        </div>
        {/* Detgails */}
        <div className="p-4 md:p-6">
          <div>
            <p>
              <span className="font-inter font-normal text-sm text-gray-700">
                Brand:
              </span>{" "}
              <span className="text-secondary text-sm font-inter font-semibold hover:text-primary">
                {item?.brand}
              </span>
            </p>
            <p>
              <span className="font-inter font-normal text-sm text-gray-700">
                Model:
              </span>{" "}
              <span className="text-secondary text-sm font-inter font-semibold hover:text-primary">
                {item?.model}
              </span>
            </p>
          </div>
          <h2 className="text-lg md:text-xl mt-3 font-sans">
            <span className="">Price</span>{" "}
            <span className="font-bold">{item?.price}BDT</span>
          </h2>
        </div>

        <Link to={`/Bike/${item?._id}`}>
          <button className="font-orbitron w-full mt-4 block rounded-md border border-primary bg-primary px-5 py-3 text-sm font-medium uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-primary">
            View Details
          </button>
        </Link>
      </div>
    </Link>
  );
};

export default BikeCard;
