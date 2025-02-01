import BikeForm from "@/components/form/BikeForm";
import BikeInput from "@/components/form/BikeInput";
import BikeSelect from "@/components/form/BikeSelect";
import { useAddProductMutation } from "@/redux/features/admin/product.api";
import { Button, Col, Flex, } from "antd";

import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
const BikeOptions = [
  {
    value: "Mountain",
    label: "Mountain",
  },
  {
    value: "Road",
    label: "Road",
  },
  {
    value: "Hybrid",
    label: "Hybrid",
  },
  {
    value: "Electric",
    label: "Electric",
  },
];
const AddProductForm = () => {
  const [addProduct] = useAddProductMutation();
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Creating...");
    const BikeData = {
      ...data,
      inStock: true,
    };
     
    try {
      const res = await addProduct(BikeData);
      console.log(res);
      if (res.error) {
        toast.error( res?.data?.message, { id: toastId, duration: 3000 });
      } else {
        toast.success("Bike created Successfully", {
          id: toastId,
          duration: 3000,
        });
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      toast.error("Something went wrong", { id: toastId });
    }
  };

  return (
    <Flex justify="center" align="center">
      <Col span={12}>
        <BikeForm onSubmit={onSubmit}>
          <BikeInput type="text" name="name" label="Name" />
          <BikeInput type="text" name="brand" label="Brand" />
          <BikeInput type="text" name="price" label="Price" />
          <BikeSelect options={BikeOptions} name="category" label="Category" />
          <BikeInput type="text" name="description" label="Description" />
          <BikeInput type="text" name="quantity" label="Quantity" />
          <Button htmlType="submit">Submit</Button>
        </BikeForm>
      </Col>
    </Flex>
  );
};
export default AddProductForm;
