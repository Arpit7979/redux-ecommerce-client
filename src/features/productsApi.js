import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const productsApi = createApi({
    reducerPath:"productsApi",
    baseQuery:fetchBaseQuery({baseUrl:"https://redux-ecommerce-server.onrender.com"}),
    endpoints:(builder)=>({
        getAllProducts:builder.query({
            query:()=>"products"
        }),
    }),
})

export const {useGetAllProductsQuery} = productsApi