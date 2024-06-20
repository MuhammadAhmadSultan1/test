import { ISessionResponse } from "../types/common";
import baseApi from "./baseApi";

export const uploadLogoApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    uploadLogo: builder.mutation<ISessionResponse, FormData>({
      query: (body) => ({
        url: "businessLogo/addwithcolor",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useUploadLogoMutation } = uploadLogoApi;
