import { toast } from "sonner";
import {
  useGetAllUserQuery,
  useUpdateUserStatusMutation,
} from "../../../redux/features/admin/userManage.api";
import { TUserData } from "../../../types/global.types";
import TableTd from "../../Shared/Table/TableTd";

const UserLisItem = () => {
  const { data: usersData } = useGetAllUserQuery(undefined);
  const [updateUserStatus] = useUpdateUserStatusMutation();
  const handleUserStatus = async (id: string, status: string) => {
    const toastId = toast.loading("Updating...");
    const res = await updateUserStatus({ status, id });
    if (res?.data) {
      toast.success(res?.data?.message, { id: toastId });
    } else {
      toast.success("Status Updated Failed", { id: toastId });
    }
  };
  return (
    <>
      {usersData?.data?.map((item: TUserData) => (
        <tr className="odd:bg-gray-50">
          <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
            {item?.image ? (
              <img
                src={item?.image}
                alt=""
                className="w-10 md:w-20 p-1 h-10 md:h-20 bg-white border mx-auto"
              />
            ) : (
              <img
                src="https://res.cloudinary.com/dhfvwgwty/image/upload/v1738418586/sadi_avatr_am7po6.jpg"
                alt=""
                className="w-10 md:w-20 p-1 h-10 md:h-20 bg-white border mx-auto"
              />
            )}
          </td>
          <TableTd tdHeading={item.name} />
          <TableTd tdHeading={item.email} />

          <td className="whitespace-nowrap px-4 py-2 text-base font-medium text-gray-800">
            <div className="space-y-1 text-sm">
              <select
                // disabled={email === user?.email}
                defaultValue={item?.status}
                name="role"
                onChange={(e) => handleUserStatus(item?._id, e.target.value)}
                className="px-4 py-3 rounded-md focus:border-primary border outline-none text-gray-800 transition-all duration-200"
              >
                <option value="active">Active</option>
                <option value="deactivate">Deactivate</option>
              </select>
            </div>
          </td>
        </tr>
      ))}
    </>
  );
};

export default UserLisItem;
