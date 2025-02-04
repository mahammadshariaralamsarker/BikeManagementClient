import { baseApi } from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // User Login
    login: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/login",
        method: "POST",
        body: userInfo,
      }),
    }),
    // User Create
    userCreate: builder.mutation({
      query: (userInfo) => ({
        url: "/user",
        method: "POST",
        body: userInfo,
      }),
    }),
    // User Info Update
    userInfoUpdate: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/update",
        method: "PATCH",
        body: userInfo,
      }),
    }),
    // Get Looged in User
    logedinUserGet: builder.query({
      query: () => ({
        url: "/auth/me",
        method: "GET",
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useLogedinUserGetQuery,
  useUserCreateMutation,
  useUserInfoUpdateMutation,
} = authApi;
