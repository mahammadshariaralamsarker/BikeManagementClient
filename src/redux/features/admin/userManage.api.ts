import { baseApi } from "../../api/baseApi";

const userManageApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Get All User
    getAllUser: builder.query({
      query: () => ({
        url: "/user",
        method: "GET",
      }),
    }),
    // User Status Update
    updateUserStatus: builder.mutation({
      query: (userInfo) => ({
        url: "/user/update",
        method: "PATCH",
        body: userInfo,
      }),
    }),
  }),
});

export const { useGetAllUserQuery, useUpdateUserStatusMutation } =
  userManageApi;
