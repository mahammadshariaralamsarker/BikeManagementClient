/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "../../api/baseApi";

export const BikeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Get All Bike
    getAllBike: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: any) => {
            params.append(item.name, item.value);
          });
        }
        return {
          url: "/Bike",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["Bike"],
    }),
    // Get Specific Field
    getSpecificBikeFields: builder.query({
      query: () => ({
        url: "/Bike/specific",
        method: "GET",
      }),
      transformResponse: (response: any) => {
        return {
          data: response?.data,
        };
      },
    }),
    getSingleBike: builder.query({
      query: (arg) => ({
        url: `/Bike/${arg}`,
        method: "GET",
      }),
      transformResponse: (response: any) => {
        return {
          data: response?.data,
        };
      },
    }),
    // Create New Bike
    addBike: builder.mutation({
      query: (data) => ({
        url: "/Bike",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Bike"],
    }),
    // Update Bike
    updateBike: builder.mutation({
      query: (arg) => ({
        url: `/Bike/${arg?.id}`,
        method: "PATCH",
        body: arg?.data,
      }),
      invalidatesTags: ["Bike"],
    }),
    // Delete Bike
    deleteBike: builder.mutation({
      query: (id) => ({
        url: `/Bike/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Bike"],
    }),
  }),
});

export const {
  useGetAllBikeQuery,
  useGetSingleBikeQuery,
  useGetSpecificBikeFieldsQuery,
  useAddBikeMutation,
  useUpdateBikeMutation,
  useDeleteBikeMutation,
} = BikeApi;
