import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import Loading from "@/components/ui/Loading";
import { useGetSingleBikeQuery } from "@/redux/features/bike/bikeApi";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";

const BikeDetails = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetSingleBikeQuery(id);
  const {
    bikeImage,
    quantity,
    name,
    brand,
    color,
    size,
    model,
    bikeId,
    releaseDate,
    type,
    price,
    suspensionType,
    material,
    gearType,
  } = data?.data || {};

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    console.error(isError);
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center py-14 text-red-500 text-lg font-semibold">
          Error loading bike details. Please try again later.
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-primary mb-2">Bike Details</h1>
        <div className="w-24 h-1 bg-primary mx-auto"></div>
      </div>

      <Card className="overflow-hidden shadow-lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Bike Image */}
          <div className="relative h-full min-h-96">
            <img
              className="w-full h-full object-cover"
              src={bikeImage}
              alt={name}
            />
            {quantity <= 0 && (
              <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-md text-sm font-bold">
                SOLD OUT
              </div>
            )}
          </div>

          {/* Bike Details */}
          <div className="p-6">
            <CardHeader className="px-0 pt-0">
              <div className="flex justify-between items-start mb-2">
                <h2 className="text-2xl font-bold">{name}</h2>
                <span className="text-sm text-muted-foreground">ID: {bikeId}</span>
              </div>
              <p className="text-lg text-primary font-bold mb-4">${price}</p>
            </CardHeader>

            <CardContent className="px-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="space-y-3">
                  <DetailItem label="Brand" value={brand} />
                  <DetailItem label="Model" value={model} />
                  <DetailItem label="Color" value={color} />
                  <DetailItem label="Size" value={size} />
                </div>
                <div className="space-y-3">
                  <DetailItem label="Type" value={type} />
                  <DetailItem label="Material" value={material} />
                  <DetailItem label="Gear Type" value={gearType} />
                  <DetailItem label="Suspension" value={suspensionType} />
                </div>
              </div>

              <div className="bg-secondary/50 p-4 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Availability:</span>
                  <span className={`font-bold ${quantity > 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {quantity > 0 ? `${quantity} units available` : 'Out of stock'}
                  </span>
                </div>
                <DetailItem label="Release Date" value={releaseDate} className="mt-2" />
              </div>
            </CardContent>

            <CardFooter className="px-0 pb-0 flex gap-4">
              <Button className="flex-1 bg-primary hover:bg-primary/90">
                Add to Cart
              </Button>
              <Button variant="outline" className="flex-1">
                Contact Seller
              </Button>
            </CardFooter>
          </div>
        </div>
      </Card>
    </div>
  );
};

// Reusable detail item component
const DetailItem = ({ label, value, className }: { label: string; value: string; className?: string }) => (
  <div className={className}>
    <p className="text-sm font-medium text-muted-foreground">{label}</p>
    <p className="font-semibold">{value || '-'}</p>
  </div>
);

export default BikeDetails;