/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEvent, useState } from "react";
import ProductLisItem from "../../../../components/Dashboard/ProductManage/ProductList";
import TableTh from "../../../../components/Shared/Table/TableTh";
import MyModal from "../../../../components/Modals/MyModal";
import MyButton from "../../../../components/Shared/MyButton/MyButton";
import uploadImage from "../../../../utils/uploadImageToCloudinary";
import { toast } from "sonner";
import { BikeBrand, BikeCategory } from "../../../../constant/global.constant";
import {
  useAddBikeMutation,
  useGetAllBikeQuery,
  useGetSpecificBikeFieldsQuery,
} from "../../../../redux/features/Bike/Bike.api";
import Loader from "../../../../components/Loader/Loader";

const ProductManage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: specificField } = useGetSpecificBikeFieldsQuery(undefined);
  const { isFetching, isLoading } = useGetAllBikeQuery(undefined);
  const [addBike] = useAddBikeMutation();
  const [formValue, setFormValue] = useState({
    name: "",
    brand: "",
    price: "",
    model: "",
    image: null,
    category: "",
    productDetails: "",
    stock: "",
  });
  // Modal Close
  const close = () => {
    setIsOpen(false);
  };

  const handleChangeForm = async (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "file") {
      const input = e.target as HTMLInputElement;
      const files = input?.files;
      if (files && files[0]) {
        const imageUrl = await uploadImage(files[0]);
        console.log(imageUrl);
        setFormValue((prevState) => ({
          ...prevState,
          [name]: imageUrl ? imageUrl : null,
        }));
      }
    } else {
      setFormValue((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleForm = async (e: React.FormEvent) => {
    const toastId = "Creating...";
    e.preventDefault();
    if (
      !formValue.brand ||
      !formValue.category ||
      !formValue.image ||
      !formValue.model ||
      !formValue.name ||
      !formValue.price ||
      !formValue.productDetails ||
      !formValue.stock
    ) {
      return toast.error("All Fields Are Required!");
    }
    const data = {
      ...formValue,
      price: Number(formValue.price),
      stock: Number(formValue.stock),
    };

    const res = await addBike(data);
    if (res?.data) {
      toast.success("Data Created Successful", { id: toastId });
      setIsOpen(false);
    } else {
      toast.error("Something Went Wrong", { id: toastId });
    }
  };

  if (isFetching || isLoading) {
    return <Loader />;
  }
  return (
    <div>
      {/* Add Bike Modal */}
      <MyModal close={close} isOpen={isOpen}>
        <div>
          <h2 className="text-lg text-center md:text-xl font-bold">
            Add New Product
          </h2>
          <form onSubmit={handleForm} className="space-y-2">
            <div className="w-full">
              <label
                htmlFor="Name"
                className="block text-sm font-medium text-secondary"
              >
                Name
              </label>

              <input
                type="text"
                id="Name"
                onChange={handleChangeForm}
                name="name"
                className="w-full rounded-md border border-overlyBg focus:border-primary bg-overlyBg focus:bg-white transition-all py-3 px-4 outline-none"
              />
            </div>

            <div className="w-full">
              <label
                htmlFor="Brand"
                className="block text-sm font-medium text-secondary"
              >
                Brand
              </label>
              <select
                name="brand"
                onChange={handleChangeForm}
                id=""
                className="w-full rounded-md focus:outline-none focus:border focus:border-primary p-2"
              >
                <option disabled selected>
                  Select a Brand
                </option>
                {BikeBrand?.map((item, idx) => (
                  <option key={idx} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <div className="w-full">
              <label
                htmlFor="Model"
                className="block text-sm font-medium text-secondary"
              >
                Model
              </label>
              <select
                name="model"
                onChange={handleChangeForm}
                id=""
                className="w-full rounded-md focus:outline-none focus:border focus:border-primary p-2"
              >
                <option disabled selected>
                  Select a Model
                </option>
                {specificField?.data?.map((item: any) => (
                  <option value={item?.model} key={item?._id}>
                    {item.model}
                  </option>
                ))}
              </select>
            </div>

            <div className="w-full">
              <label
                htmlFor="Category"
                className="block text-sm font-medium text-secondary"
              >
                Category
              </label>
              <select
                name="category"
                onChange={handleChangeForm}
                id="Category"
                className="w-full rounded-md focus:outline-none focus:border focus:border-primary p-2"
              >
                <option disabled selected>
                  Select a Category
                </option>
                {BikeCategory?.map((item, idx) => (
                  <option key={idx} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <div className="w-full">
              <label
                htmlFor="Price"
                className="block text-sm font-medium text-secondary"
              >
                Price
              </label>

              <input
                type="number"
                id="Price"
                onChange={handleChangeForm}
                name="price"
                className="w-full rounded-md border border-overlyBg focus:border-primary bg-overlyBg focus:bg-white transition-all py-3 px-4 outline-none"
              />
            </div>

            <div className="w-full">
              <label
                htmlFor="Image"
                className="block text-sm font-medium text-secondary"
              >
                Cycle Image
              </label>

              <input
                type="file"
                onChange={handleChangeForm}
                id="Image"
                name="image"
                className="w-full rounded-md border border-overlyBg focus:border-primary bg-overlyBg focus:bg-white transition-all py-3 px-4 outline-none"
              />
            </div>

            <div className="w-full">
              <label
                htmlFor="Stock"
                className="block text-sm font-medium text-secondary"
              >
                Stock
              </label>

              <input
                type="number"
                onChange={handleChangeForm}
                id="Stock"
                name="stock"
                className="w-full rounded-md border border-overlyBg focus:border-primary bg-overlyBg focus:bg-white transition-all py-3 px-4 outline-none"
              />
            </div>

            <div className="w-full">
              <label
                htmlFor="ProductDetails"
                className="block text-sm font-medium text-secondary"
              >
                Product Details
              </label>
              <textarea
                onChange={handleChangeForm}
                className="w-full rounded-md border border-overlyBg focus:border-primary bg-overlyBg focus:bg-white transition-all py-3 px-4 outline-none"
                name="productDetails"
                id="ProductDetails"
              ></textarea>
            </div>

            <div className=" sm:flex sm:items-center">
              <MyButton title="Create" />
            </div>
          </form>
        </div>
      </MyModal>
      <div className="mb-1 flex justify-end">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-primary active:bg-primary uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
        >
          Add New
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <TableTh tHeading="Image" />
              <TableTh tHeading=" Name" />
              <TableTh tHeading="Price" />
              <TableTh tHeading="  Action" />
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200 text-center">
            <ProductLisItem />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductManage;
