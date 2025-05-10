import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { TBike } from "@/types/bike.type"; 
import { Bike, Wrench, Info } from "lucide-react";

const BuyerBikeCard = ({
  _id,
  name,
  bikeImage,
  brand,
  color,
  model,
  price,
  material,
  suspensionType,
}: TBike) => {
  const navigate = useNavigate();

  const handleBikeDetails = (id: string) => {
    navigate(`/buyer/dashboard/bikes/${id}`);
  };

  const handleRequestMaintenance = (id: string) => {
    navigate(`/buyer/dashboard/request-maintenance/${id}`);
  };

  return (
    <Card className="w-full max-w-sm overflow-hidden rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 group">
      {/* Image Section */}
      <div className=" aspect-[4/3] overflow-hidden">
        <img
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          src={bikeImage}
          alt={name}
          loading="lazy"
        />
      </div>

      {/* Content Section */}
      <CardHeader className="px-5 pt-4 pb-2">
        <div className="flex justify-between items-start gap-3">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white line-clamp-1">
              {name}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              {brand} • {model}
            </p>
          </div>
          <span className="text-xl font-bold text-green-600 dark:text-green-400 whitespace-nowrap">
            ${price.toLocaleString()}
          </span>
        </div>
      </CardHeader>

      <CardContent className="px-5 py-2">
        <div className="grid grid-cols-2 gap-3">
          <div className="flex items-center gap-2">
            <div 
              className="w-4 h-4 rounded-full border border-gray-300" 
              style={{ backgroundColor: color.toLowerCase() }}
            />
            <span className="text-sm text-gray-700 dark:text-gray-300 capitalize">{color}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <Wrench className="h-4 w-4 text-gray-500" />
            <span className="text-sm text-gray-700 dark:text-gray-300 capitalize">{material}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <Bike className="h-4 w-4 text-gray-500" />
            <span className="text-sm text-gray-700 dark:text-gray-300 capitalize">
              {suspensionType.replace(/([A-Z])/g, ' $1').trim()}
            </span>
          </div>
          
          <div className="flex items-center gap-2">
            <Info className="h-4 w-4 text-gray-500" />
            <span className="text-sm text-gray-700 dark:text-gray-300">1 Year Warranty</span>
          </div>
        </div>
      </CardContent>

      {/* Footer with Buttons */}
      <CardFooter className="px-5 py-4 border-t border-gray-100 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-700/50">
        <div className="flex w-full gap-3">
          <Button
            onClick={() => handleBikeDetails(_id)}
            className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-sm transition-all"
            size="sm"
          >
            <Info className="mr-2 h-4 w-4" />
            Details
          </Button>
          <Button
            onClick={() => handleRequestMaintenance(_id)}
            variant="outline"
            className="flex-1 border-blue-500 text-blue-600 hover:bg-blue-50/50 dark:hover:bg-gray-600/50 dark:text-blue-400 shadow-sm transition-all"
            size="sm"
          >
            <Wrench className="mr-2 h-4 w-4" />
            Service
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default BuyerBikeCard;