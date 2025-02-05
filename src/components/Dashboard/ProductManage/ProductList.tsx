/* eslint-disable @typescript-eslint/no-explicit-any */
import TableTd from "../../Shared/Table/TableTd";
import { FaSquarePen } from "react-icons/fa6";
import { RiDeleteBin5Fill } from "react-icons/ri";
 
import { toast } from "sonner";
import { ChangeEvent, useState } from "react";
import uploadImage from "../../../utils/uploadImageToCloudinary";
import MyModal from "../../Modals/MyModal";
import { BikeBrand, BikeCategory } from "../../../constant/global.constant";
import MyButton from "../../Shared/MyButton/MyButton";
import { useDeleteBikeMutation, useGetAllBikeQuery, useGetSingleBikeQuery, useGetSpecificBikeFieldsQuery, useUpdateBikeMutation } from "../../../redux/features/bicycle/bicycle.api";
import { TProduct } from "../../../types/bicycle.types";

const ProductLisItem = () => {
  const { data: products } = useGetAllBikeQuery(undefined);
  const [BikeParams, setBikeParams] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [deleteBikeId, setDeleteBikeId] = useState("");
  const { data: specificField } = useGetSpecificBikeFieldsQuery(undefined);
  const {
    data: singleBikeData,
    isFetching: isUpdateFatching,
    refetch,
  } = useGetSingleBikeQuery(BikeParams, {
    skip: !BikeParams,
  });
  const [updateBike] = useUpdateBikeMutation();
  const [deleteBike] = useDeleteBikeMutation();
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
  // Handle Delete Modal
  const closeDeleteModal = () => {
    setIsOpenDeleteModal(!isOpenDeleteModal);
  };
  // Handle Update Modal
  const handleUpdateModal = (id: string) => {
    setBikeParams(id);
    setIsOpen(!isOpen);
  };

  // Handle Delete Modal
  const handleBikeDelete = (id: string) => {
    setDeleteBikeId(id);
    setIsOpenDeleteModal(!isOpenDeleteModal);
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
    const toastId = toast.loading("Creating...");
    e.preventDefault();
    const updateData = {
      id: BikeParams,
      data: {
        name: formValue?.name ? formValue.name : singleBikeData?.data.name,
        brand: formValue?.brand ? formValue.brand : singleBikeData?.data.brand,
        price: formValue?.price
          ? Number(formValue.price)
          : singleBikeData?.data.price,
        model: formValue?.model ? formValue.model : singleBikeData?.data.model,
        image: formValue?.image ? formValue.image : singleBikeData?.data.image,
        category: formValue?.category
          ? formValue.category
          : singleBikeData?.data.category,
        productDetails: formValue?.productDetails
          ? formValue.productDetails
          : singleBikeData?.data.productDetails,
        stock: formValue?.stock
          ? Number(formValue.stock)
          : singleBikeData?.data.stock,
      },
    };
    const res = await updateBike(updateData);
    if (res?.data) {
      refetch();
      toast.success("Bike Data Updated Successful", { id: toastId });
    } else {
      toast.error("Something Went Wrong", { id: toastId });
    }
  };

  // Delete Bike
  const handleDeleteBike = async () => {
    const deleteToastId = toast.loading("Deleting...");

    const res = await deleteBike(deleteBikeId);
    if (res?.data) {
      setIsOpenDeleteModal(false);
      toast.success("Bike Data Updated Successful", { id: deleteToastId });
    } else {
      toast.error("Something Went Wrong", { id: deleteToastId });
    }
  };
  return (
    <>
      {/* Update Bike Modal */}
      <MyModal close={close} isOpen={isOpen}>
        <div>
          <h2 className="text-lg text-center md:text-xl font-bold">
            Update Bike
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
                defaultValue={
                  isUpdateFatching ? "" : singleBikeData?.data?.name
                }
                onChange={handleChangeForm}
                name="name"
                className="disabled:bg-primary/10 w-full rounded-md border border-overlyBg focus:border-primary bg-overlyBg focus:bg-white transition-all py-3 px-4 outline-none"
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
                defaultValue={
                  isUpdateFatching ? "" : singleBikeData?.data?.price
                }
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
                Bike Image
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
                defaultValue={
                  isUpdateFatching ? "" : singleBikeData?.data?.stock
                }
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
                defaultValue={
                  isUpdateFatching ? "" : singleBikeData?.data?.productDetails
                }
                className="w-full rounded-md border border-overlyBg focus:border-primary bg-overlyBg focus:bg-white transition-all py-3 px-4 outline-none"
                name="productDetails"
                id="ProductDetails"
              ></textarea>
            </div>

            <div className=" sm:flex sm:items-center">
              <MyButton title="Update" />
            </div>
          </form>
        </div>
      </MyModal>
      {products?.data?.map((item: TProduct) => (
        <tr className="odd:bg-gray-50">
          <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
            <img
              src={item?.image}
              alt=""
              className="w-20 p-1 h-20 bg-white border mx-auto"
            />
          </td>
          <TableTd tdHeading={item?.name} />
          <TableTd tdHeading={`${item?.price}BDT`} />

          <td className="whitespace-nowrap px-4 py-2 text-base font-medium text-gray-800">
            <div className="space-x-1">
              <button
                onClick={() => handleUpdateModal(item?._id)}
                className="bg-primary text-white p-1 rounded-sm cursor-pointer"
              >
                <FaSquarePen />
              </button>
              <button
                onClick={() => handleBikeDelete(item?._id)}
                className="bg-rose-600 text-white p-1 rounded-sm cursor-pointer"
              >
                <RiDeleteBin5Fill />
              </button>
            </div>
          </td>
        </tr>
      ))}
      <MyModal isOpen={isOpenDeleteModal} close={closeDeleteModal}>
        <div className="pb-2 border-b space-y-2">
          <h3 className="text-center text-xl md:text-2xl font-bold ">
            Are you Sure?
          </h3>
          <p className="text-center font-medium">
            Do you want to Delete This Bike?
          </p>
        </div>
        <div className="flex justify-center items-center gap-12 mt-4">
          <button
            onClick={() => setIsOpenDeleteModal(false)}
            className="py-1 px-3 rounded text-sm font-semibold bg-primary text-white"
          >
            No
          </button>
          <button
            onClick={handleDeleteBike}
            className="py-1 px-3 rounded text-sm font-semibold bg-rose-600 text-white"
          >
            Yes
          </button>
        </div>
      </MyModal>
    </>
  );
};

export default ProductLisItem;
