/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "../../api/baseApi";

export const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Get Logged in user Order
    getAllLogedInUserOrder: builder.query({
      query: () => ({
        url: "/order/all",
        method: "GET",
      }),
    }),
    // Get All user Order For Admin
    getAllOrderForAdmin: builder.query({
      query: () => ({
        url: "/order/all-orders",
        method: "GET",
      }),
      providesTags: ["verifyOrder"],
    }),
    // Get All user Order For Admin
    updateOrderDeliveryStatus: builder.mutation({
      query: (args) => ({
        url: `/order/delivery/status/${args.id}`,
        method: "PATCH",
        body: args,
      }),
      invalidatesTags: ["verifyOrder"],
    }),
    // Verify Order
    verifyOrder: builder.query({
      query: (orderId) => ({
        url: "/order/verify",
        method: "GET",
        params: { orderId },
      }),
    }),
    // Get All user Order For Admin
    deleteOrder: builder.mutation({
      query: (args) => ({
        url: `/order/delete/${args.orderId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["verifyOrder"],
    }),
  }),
});

export const {
  useGetAllLogedInUserOrderQuery,
  useGetAllOrderForAdminQuery,
  useUpdateOrderDeliveryStatusMutation,
  useVerifyOrderQuery,
  useDeleteOrderMutation,
} = orderApi;
