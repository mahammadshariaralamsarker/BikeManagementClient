import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseApi = createApi({
  reducerPath:'baseApi',
  baseQuery:fetchBaseQuery({baseUrl:"http://localhost:5000/api"}),
  endpoints:(builder)=>({
    login:builder.mutation({
      query:(userInfo)=>({
        url:'/login',
        method:'POST',
        body:userInfo
      })
    })
  })
  
})