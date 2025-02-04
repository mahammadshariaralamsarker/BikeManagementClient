import MyOrderLis from "../../../../components/Dashboard/OrderManage/MyOrdersList";
import TableTh from "../../../../components/Shared/Table/TableTh";

const MyOrders = () => {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <TableTh tHeading="Total Price" />
              <TableTh tHeading=" Payment Status" />
              <TableTh tHeading="Delivery Status" />
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200 text-center">
            <MyOrderLis />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
