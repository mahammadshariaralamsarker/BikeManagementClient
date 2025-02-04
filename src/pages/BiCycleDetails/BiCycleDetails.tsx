import { useNavigate, useParams } from "react-router-dom";
import MyContainer from "../../components/Shared/MyContainer/MyContainer";
import MySection from "../../components/Shared/MySection/MySection"; 
import Loader from "../../components/Loader/Loader";
import { useAppDispatch } from "../../redux/hooks"; 
import { toast } from "sonner";
import { addToCart } from "../../redux/features/Checkout/Checkout.slice";
import useGetRole from "../../hooks/useGetRole";
import { useGetSingleBikeQuery } from "../../redux/features/bicycle/bicycle.api";
import { TProduct } from "../../types/bicycle.types";

const BikeDetails = () => {
  const { userRole } = useGetRole();
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { data: singleBike, isLoading, isFetching } = useGetSingleBikeQuery(id);

  if (isFetching || isLoading) {
    return <Loader />;
  }
  const handleCheckoutProducts = (item: TProduct) => {
    if (userRole === "admin") {
      return toast.error("You Cannot Order Bacuase You are a Admin!");
    }
    if (item.stock === 0) {
      toast.error("Out of Stock! You Cannot Order This Bike!");
    } else {
      dispatch(
        addToCart({
          product: item._id,
          name: item.name,
          price: item.price,
          quantity: 1,
          stock: item.stock,
          imageUrl: item.image as string,
        })
      );
      navigate("/checkout");
    }
  };
  return (
    <MyContainer>
      <MySection>
        <div className="">
          <div className="">
            <div className="flex flex-col md:flex-row">
              <div className="md:flex-1 p-4">
                <div className="h-[460px] rounded-lg bg-gray-300 mb-4">
                  <img
                    className="w-full h-full object-cover"
                    src={singleBike?.data?.image}
                    alt="Product Image"
                  />
                </div>
              </div>
              <div className="md:flex-1 p-4 border rounded">
                <h2 className="text-2xl font-bold text-secondary mb-2">
                  {singleBike?.data?.name}
                </h2>
                <p className="text-secondary text-sm mb-4">
                  {singleBike?.data?.productDetails}
                </p>

                <div className="flex mb-4">
                  <div>
                    <p>
                      <span className="font-inter font-normal text-sm text-gray-700">
                        Brand:
                      </span>{" "}
                      <span className="text-secondary text-sm font-inter font-semibold hover:text-primary">
                        {singleBike?.data?.brand}
                      </span>
                    </p>
                    <p>
                      <span className="font-inter font-normal text-sm text-gray-700">
                        Model:
                      </span>{" "}
                      <span className="text-secondary text-sm font-inter font-semibold hover:text-primary">
                        {singleBike?.data?.model}
                      </span>
                    </p>
                    <p>
                      <span className="font-inter font-normal text-sm text-gray-700">
                        Category:
                      </span>{" "}
                      <span className="text-secondary text-sm font-inter font-semibold hover:text-primary">
                        {singleBike?.data?.category}
                      </span>
                    </p>
                    <p>
                      <span className="font-inter font-normal text-sm text-gray-700">
                        Availability:
                      </span>
                      {!singleBike?.data?.stock ||
                      singleBike?.data?.stock === 0 ? (
                        <span className=" text-sm font-inter font-semibold text-rose-600">
                          Out Of Stock
                        </span>
                      ) : (
                        <span className=" text-sm font-inter font-semibold text-primary">
                          In Stock
                        </span>
                      )}
                    </p>
                  </div>
                </div>
                <div className="flex mb-4">
                  <div className="text-lg md:mr-4 md:text-2xl">
                    <span className="font-bold text-secondary">Price:</span>
                    <span className="text-secondary">
                      {" "}
                      {singleBike?.data?.price}BDT
                    </span>
                  </div>
                </div>
                <div className="flex -mx-2 mb-4">
                  <div className="w-1/2 px-2">
                    <button
                      onClick={() => handleCheckoutProducts(singleBike?.data)}
                      className="w-full bg-primary text-white py-2 px-4 rounded-full font-bold"
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MySection>
    </MyContainer>
  );
};

export default BikeDetails;
