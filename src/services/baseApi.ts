import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../config/app";

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}`,
    prepareHeaders: (headers, { }) => {
      // const {
      //   session: { token },
      // } = getState() as any;
      // if (token) {
      //   headers.set("Authorization", `Bearer ${token}`);
      //   headers.set("Access-Control-Allow-Origin", "*");
      // }
      return headers;
    },
  }),
  tagTypes: ["User"],
  reducerPath: "baseApi",
  endpoints: () => ({}),
});

export default baseApi;
