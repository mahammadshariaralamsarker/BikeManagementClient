/* eslint-disable @typescript-eslint/no-explicit-any */
import TableTd from "../../Shared/Table/TableTd";
import clsx from "clsx";
import {
  useGetAllLogedInUserOrderQuery,
  useVerifyOrderQuery,
} from "../../../redux/features/order/orderApi";
import { useSearchParams } from "react-router-dom";

const MyOrderLis = () => {
  const { data: orders, refetch } = useGetAllLogedInUserOrderQuery(undefined);
  const [searchParams] = useSearchParams();
  const { isSuccess } = useVerifyOrderQuery(searchParams.get("order_id"));
  if (isSuccess) {
    refetch();
  }
  return (
    <>
      {orders?.data?.map((data: any) => (
        <tr className="odd:bg-gray-50" key={data?._id}>
          <TableTd tdHeading={`${data?.totalPrice}BDT`} />
          <td className="whitespace-nowrap px-4 py-2 text-base font-medium text-gray-800">
            <div className="space-y-1 text-sm">
              <button
                className={clsx(
                  "rounded text-white py-1 px-2",
                  data.status === "Paid" && "bg-primary",
                  data.status === "Pending" && "bg-yellow-300 text-black",
                  data.status === "Cancelled" && "bg-rose-600 text-white"
                )}
              >
                {data?.status}
              </button>
            </div>
          </td>
          <td className="whitespace-nowrap px-4 py-2 text-base font-medium text-gray-800">
            <div className="space-y-1 text-sm">
              <button
                className={clsx(
                  "rounded text-white py-1 px-2",
                  data.deliveryStatus === "Delivered" && "bg-primary",
                  data.deliveryStatus === "Pending" &&
                    "bg-yellow-300 text-black",
                  data.deliveryStatus === "Cancel" && "bg-rose-600 text-white"
                )}
              >
                {data?.deliveryStatus}
              </button>
            </div>
          </td>
        </tr>
      ))}
    </>
  );
};

export default MyOrderLis;
