import { ICanvasCardProps } from "../types/card";
import baseApi from "./baseApi";

interface IApiResponse<T> {
  content: T;
  message: string;
}

interface ICheckout {
  processedImageUrl: string;
  productId: string;
  sessionId: string;
  fileName: string;
}

const checkoutApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    craeteVariant: builder.mutation<IApiResponse<ICheckout>, ICanvasCardProps>({
      query: (body) => ({
        url: "/shopify/create-variant",
        method: "POST",
        body: body,
      }),
    }),
  }),
});

export const { useCraeteVariantMutation } = checkoutApi;
