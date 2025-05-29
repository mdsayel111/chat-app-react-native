// Need to use the React-specific entry point to import createApi
import config from "@/config";
import { TUser } from "@/types/user";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: config.baseUrl }),
  endpoints: (builder) => ({
    getUser: builder.query<TUser, string>({
      query: (name) => `user/${name}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetUserQuery } = userApi;
