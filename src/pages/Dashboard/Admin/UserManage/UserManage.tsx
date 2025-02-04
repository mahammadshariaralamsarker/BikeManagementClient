import UserLisItem from "../../../../components/Dashboard/UserManage/UserList";
import Loader from "../../../../components/Loader/Loader";
import TableTh from "../../../../components/Shared/Table/TableTh";
import { useGetAllUserQuery } from "../../../../redux/features/admin/userManage.api";

const UserManage = () => {
   const { isFetching, isLoading } = useGetAllUserQuery(undefined);

   if (isFetching || isLoading) {
     return <Loader />;
   }
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <TableTh tHeading="Image" />
              <TableTh tHeading=" Name" />
              <TableTh tHeading="Email" />
              <TableTh tHeading="  Action" />
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200 text-center">
            <UserLisItem />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManage;
