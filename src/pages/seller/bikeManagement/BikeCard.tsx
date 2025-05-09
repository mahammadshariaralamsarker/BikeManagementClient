import { useDeleteABikeMutation } from "@/redux/features/bike/bikeApi";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import SellBikeModal from "../salesManagement/SellABike";
import { TBike } from "@/types/bike.type";

const BikeCard = ({
  _id,
  bikeId,
  name,
  bikeImage,
  brand,
  color,
  model,
  price,
  quantity,
  gearType,
  material,
  suspensionType,
}: TBike) => {
  const navigate = useNavigate();
  const [deleteABike, { isLoading }] = useDeleteABikeMutation();

  const handleDuplicate = (id: string) => {
    navigate(`/seller/dashboard/duplicate-bike/${id}`);
  };

  const handleEditBike = (id: string) => {
    navigate(`/seller/dashboard/update-bike/${id}`);
  };

  const handleDeleteBike = async (id: string) => {
    const toastId = toast.loading("Deleting bike...");
    try {
      await deleteABike(id).unwrap();
      toast.success("Bike deleted successfully", { id: toastId });
    } catch (err) {
      toast.error("Failed to delete bike", { id: toastId });
      console.error("Delete error:", err);
    }
  };

  return (
    <div className="w-full max-w-md overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
      <div className="relative h-64 w-full overflow-hidden group">
        <img
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          src={bikeImage}
          alt={name}
          onError={(e) => {
            (e.target as HTMLImageElement).src = '/bike-placeholder.jpg';
          }}
        />
        <span
          className={`absolute top-3 right-3 px-3 py-1 text-xs font-semibold rounded border ${
            quantity > 0
              ? 'bg-green-100 text-green-800 border-green-300'
              : 'bg-red-100 text-red-800 border-red-300'
          }`}
        >
          {quantity > 0 ? `${quantity} in stock` : 'Out of stock'}
        </span>
      </div>

      <div className="px-4 pt-4 pb-2">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold truncate">{name}</h3>
          <span className="text-sm text-gray-500">ID: {bikeId}</span>
        </div>
        <div className="flex justify-between items-center mt-2">
          <span className="text-lg font-bold text-blue-600">${price}</span>
          <div className="flex items-center gap-1">
            <span className="text-sm text-gray-500">{brand}</span>
            <span
              className="w-3 h-3 rounded-full border"
              style={{ backgroundColor: color }}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 px-4 py-4">
        <div className="space-y-2">
          <DetailItem label="Model" value={model} />
          <DetailItem label="Color" value={color} />
          <DetailItem label="Material" value={material} />
        </div>
        <div className="space-y-2">
          <DetailItem label="Gear Type" value={gearType} />
          <DetailItem label="Suspension" value={suspensionType} />
        </div>
      </div>

      <div className="flex flex-wrap gap-2 justify-between px-4 py-4 border-t">
        <button
          onClick={() => handleDuplicate(_id)}
          className="flex-1 min-w-[120px] px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 transition"
        >
          Duplicate
        </button>
        <button
          onClick={() => handleEditBike(_id)}
          className="flex-1 min-w-[120px] px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 transition"
        >
          Edit
        </button>
        <SellBikeModal
          id={_id}
        />
        <button
          onClick={() => handleDeleteBike(_id)}
          disabled={isLoading}
          className="flex-1 min-w-[120px] px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition disabled:bg-red-400"
        >
          {isLoading ? 'Deleting...' : 'Delete'}
        </button>
      </div>
    </div>
  );
};

// Reusable Tailwind-based detail item
const DetailItem = ({ label, value }: { label: string; value: string }) => (
  <div>
    <p className="text-sm font-medium text-gray-500">{label}</p>
    <p className="font-medium">{value || '-'}</p>
  </div>
);

export default BikeCard;
