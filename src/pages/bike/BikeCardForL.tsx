import { useNavigate } from "react-router-dom";
import { TBike } from "@/types/bike.type";
import { Button } from "@/components/ui/button"; // You can keep this or replace with a Tailwind-styled button

const BikeCardForL = ({
  _id,
  name,
  bikeImage,
  brand,
  color,
  model,
  price,
  quantity,
}: TBike) => {
  const navigate = useNavigate();

  const handleBikeDetails = (id: string) => {
    navigate(`/bike/${id}`);
  };

  return (
    <div className="w-full max-w-sm bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <div className="relative h-60 w-full overflow-hidden">
        <img
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          src={bikeImage}
          alt={name}
        />
      </div>

      <div className="p-4 border-b">
        <h3 className="text-2xl font-bold tracking-tight">{name}</h3>
        <p className="text-sm text-gray-500">{brand} • {model} • {color}</p>
      </div>

      <div className="p-4 space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold">Price:</span>
          <span className="text-lg font-bold text-blue-600">${price}</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-sm font-medium">Availability:</span>
          <span className={`text-sm font-medium ${quantity > 0 ? 'text-green-600' : 'text-red-600'}`}>
            {quantity > 0 ? `${quantity} in stock` : 'Out of stock'}
          </span>
        </div>
      </div>

      <div className="p-4">
        <Button className="w-full" onClick={() => handleBikeDetails(_id)}>
          View Details
        </Button>
        {/* Or replace with native button:
        <button
          onClick={() => handleBikeDetails(_id)}
          className="w-full mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          View Details
        </button> */}
      </div>
    </div>
  );
};

export default BikeCardForL;
