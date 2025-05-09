import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { TBike } from "@/types/bike.type"; 

const BuyerBikeCard = ({
  _id, 
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

  const handleBikeDetails = (id: string) => {
    navigate(`/buyer/dashboard/bikes/${id}`);
  };
  
  const handleRequestMaintenance = (id: string) => {
    navigate(`/buyer/dashboard/request-maintenance/${id}`);
  };

  return (
    <Card className="w-full max-w-md overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
      <div className="relative group">
        <img
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
          src={bikeImage}
          alt={name}
        />
        <div className="absolute top-2 right-2 flex space-x-2">
          <div   className="bg-green-500/90 text-white px-3 py-1 rounded-full">
            {quantity} in stock
          </div>
          <div className="bg-amber-500/90 text-white px-3 py-1 rounded-full">
            {gearType}
          </div>
        </div>
      </div>

      <CardHeader className="px-6 pt-4 pb-2">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white line-clamp-1">{name}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">{brand} {model}</p>
          </div>
          <span className="text-2xl font-bold text-green-600 dark:text-green-400">${price}</span>
        </div>
      </CardHeader>

      <CardContent className="px-6 py-2">
        <div className="grid gap-4">
          <div className="space-y-2">
            <div className="flex items-center">
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400 w-24">Color:</span>
              <div className="flex items-center">
                <span className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: color.toLowerCase() }} />
                <span className="text-sm capitalize">{color}</span>
              </div>
            </div>
            <div className="flex items-center">
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400 w-24">Material:</span>
              <span className="text-sm capitalize">{material}</span>
            </div>
          
           
            <div className="flex items-center">
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400 w-24">Suspension:</span>
              <span className="text-sm capitalize">{suspensionType}</span>
            </div>
           </div>
        </div>
      </CardContent>

      <CardFooter className="px-6 py-4 bg-gradient-to-r from-gray-50/50 to-gray-100/50 dark:from-gray-800/50 dark:to-gray-900/50 border-t border-gray-200 dark:border-gray-700">
        <div className="flex w-full gap-3">
          <Button 
            onClick={() => handleBikeDetails(_id)}
            className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-md transition-all hover:shadow-lg"
          >
            View Details
          </Button>
          <Button 
            onClick={() => handleRequestMaintenance(_id)}
            variant="outline"
            className="flex-1 bg-white dark:bg-gray-800 text-green-600 dark:text-green-400 border-green-500 hover:bg-green-50 dark:hover:bg-gray-700 shadow-md transition-all hover:shadow-lg"
          >
            Maintenance
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default BuyerBikeCard;