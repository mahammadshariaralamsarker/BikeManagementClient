import { baseApi } from "@/redux/api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Fetch all products
    products: builder.query({
      query: () => ({
        url: "/products",
        method: "GET",
      }),
    }),

    // Add a new product
    addProduct: builder.mutation({
      query: (newProduct) => ({
        url: "/products",
        method: "POST",
        body: newProduct,
      }),
    }),
  }),
});

export const { useProductsQuery, useAddProductMutation } = productApi;
