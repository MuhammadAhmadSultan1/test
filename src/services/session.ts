import { ISessionResponse } from "../types/common";
import baseApi from "./baseApi";

export const userSessionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    userSession: builder.mutation<ISessionResponse, void>({
      query: (body) => ({
        url: "session/add",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useUserSessionMutation } = userSessionApi;
