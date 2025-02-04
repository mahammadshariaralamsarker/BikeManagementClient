/* eslint-disable @typescript-eslint/no-explicit-any */
import TableTd from "../../Shared/Table/TableTd";
import {
  useDeleteOrderMutation,
  useGetAllOrderForAdminQuery,
  useUpdateOrderDeliveryStatusMutation,
} from "../../../redux/features/order/orderApi";
import { OrderDeliveryStatus } from "../../../constant/global.constant";
import { ChangeEvent } from "react";
import { toast } from "sonner";
import { RiDeleteBin5Fill } from "react-icons/ri";
import clsx from "clsx";

const OrderLisItem = () => {
  const { data: allOrders } = useGetAllOrderForAdminQuery(undefined);
  const [updateDeliveryStatus] = useUpdateOrderDeliveryStatusMutation();
  const [deleteOrder] = useDeleteOrderMutation();
  // Handle Delivery Status
  const handleDeliveryStatus = async (
    e: ChangeEvent<HTMLSelectElement>,
    id: string
  ) => {
    const res = await updateDeliveryStatus({
      id,
      deliveryStatus: e.target.value,
    });
    if (res?.data?.message) {
      toast.success(res?.data?.message);
    } else {
      toast.error("Something Went Wrong!");
    }
  };

  const handleOrderDelete = async (id: string) => {
    const deleteOrderId = toast.loading("Deleting...");
    const res = await deleteOrder({ orderId: id });
    if (res?.data) {
      toast.success(res?.data?.message, { id: deleteOrderId });
    } else {
      toast.error("Order Deleted Failed!", { id: deleteOrderId });
    }
  };
  return (
    <>
      {allOrders?.data?.map((item: any) => (
        <tr className="odd:bg-gray-50" key={item?._id}>
          <TableTd tdHeading={item?.totalPrice} />
          <td className="whitespace-nowrap px-4 py-2 text-base font-medium text-gray-800">
            <span
              className={clsx(
                "py-1 px-2 inline-block text-sm rounded",
                item.status === "Pending" && "bg-yellow-400 text-black",
                item.status === "Cancelled" && "bg-red-600 text-white",
                item.status === "Paid" && "bg-primary text-white"
              )}
            >
              {item?.status}
            </span>
          </td>
          <td className="whitespace-nowrap px-4 py-2 text-base font-medium text-gray-800">
            <span
              className={clsx(
                "py-1 px-2 inline-block text-sm rounded",
                item.deliveryStatus === "Pending" && "bg-yellow-400 text-black",
                item.deliveryStatus === "Cancel" && "bg-red-600 text-white",
                item.deliveryStatus === "Delivered" && "bg-primary text-white"
              )}
            >
              {item?.deliveryStatus}
            </span>
          </td>
          <td className="whitespace-nowrap px-4 py-2 text-base font-medium text-gray-800">
            <div className="space-x-1 flex items-center justify-center">
              <div className="space-y-1 text-sm">
                <select
                  defaultValue={item?.deliveryStatus}
                  name="deliveryStatus"
                  onChange={(e) => handleDeliveryStatus(e, item?._id)}
                  className="px-2 py-1 rounded-md focus:border-primary border outline-none text-gray-800 transition-all duration-200"
                >
                  {OrderDeliveryStatus.map((item, idx) => (
                    <option key={idx} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
              <button
                onClick={() => handleOrderDelete(item?._id)}
                className="bg-rose-600 text-white p-1 rounded-sm cursor-pointer"
              >
                <RiDeleteBin5Fill />
              </button>
            </div>
          </td>
        </tr>
      ))}
    </>
  );
};

export default OrderLisItem;
