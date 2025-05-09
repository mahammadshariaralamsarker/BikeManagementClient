import { baseApi } from "../../api/baseApi";

const sellApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSellHistory: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          params.append("interval", args);
        }

        return {
          url: "/sales/history",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["sell"],
    }),

    getInvoice: builder.query({
      query: (id) => ({
        url: `/invoice/${id}`,
        method: "GET",
      }),
    }),

    sellABike: builder.mutation({
      query: (salesInfo) => ({
        url: "/sales",
        method: "POST",
        body: salesInfo,
      }),
      invalidatesTags: ["bike", "sell"],
    }),
  }),
});

export const {
  useSellABikeMutation,
  useGetInvoiceQuery,
  useGetSellHistoryQuery,
} = sellApi;
