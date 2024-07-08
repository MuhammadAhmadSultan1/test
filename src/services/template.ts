import { ICanvasCardProps, ITemplateAttributes } from "../types/card";
import { IUserCard } from "../types/user";
import baseApi from "./baseApi";

type TemplateAttributes = {
  templateId: number;
  templateKey: string;
  primaryColor: string;
  secondaryColor: string;
  templateAttributes: string;
};

interface IResponse<T> {
  content: T;
}

export interface ITemplateResponse {
  templateId: number;
  templateKey: string;
  primaryColor: string;
  secondaryColor: string;
  templateAttributes: ITemplateAttributes;
}

interface IColorSuggestions {
  primaryColor: [string];
  secondaryColor: [string];
}

export interface IBroucherDesctiption {
  description: string;
  problem: string;
  solution: string;
  callToAction: string;
  painPoints: string[];
  benefits: string[];
  featureHeadings: string[];
  featureDescriptions: string[];
}

const templateAPI = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTemplate: builder.query<ITemplateResponse[], string>({
      query: (SKU) => `/template/type/${SKU}`,
      transformResponse: (
        res: IResponse<TemplateAttributes[]>
      ): Promise<ITemplateResponse[]> => {
        // console.log("-------------", res.content[0]);

        if (res.content.length) {
          const templates: ITemplateResponse[] = [];
          res.content.forEach((template) => {
            const data: ITemplateResponse = {
              templateId: 0,
              templateKey: "",
              primaryColor: "",
              secondaryColor: "",
              templateAttributes: {
                logo: {
                  url: "",
                  width: 20,
                  height: 10,
                  x: 0,
                  y: 0,
                },
                name: {
                  text: "Jamie Maclaren",
                  width: 20,
                  height: 10,
                  x: 0,
                  y: 0,
                  fontSize: 16,
                  fontWeight: 600,
                  lineHeight: 1.2,
                  fontStyle: "normal",
                  textDecoration: "empty string",
                },
                designation: {
                  text: "Project Manager",
                  width: 20,
                  height: 10,
                  x: 0,
                  y: 0,
                  fontSize: 10,
                  fontWeight: 400,
                  lineHeight: 0.8,
                  fontStyle: "normal",
                  textDecoration: "empty string",
                },
                phone: {
                  text: "+92 123 456 7890",
                  width: 20,
                  height: 10,
                  x: 0,
                  y: 0,
                  fontSize: 8,
                  fontWeight: 400,
                  lineHeight: 0.8,
                  fontStyle: "normal",
                  textDecoration: "empty string",
                },
                website: {
                  text: "www.website.com",
                  width: 20,
                  height: 10,
                  x: 0,
                  y: 0,
                  fontSize: 8,
                  fontWeight: 400,
                  lineHeight: 0.8,
                  fontStyle: "normal",
                  textDecoration: "empty string",
                },
                email: {
                  text: "test@gmail.com",
                  width: 20,
                  height: 10,
                  x: 0,
                  y: 0,
                  fontSize: 8,
                  fontWeight: 400,
                  lineHeight: 0.8,
                  fontStyle: "normal",
                  textDecoration: "empty string",
                },
                address: {
                  text: "X park view, DHA Phase 8 Lahore Pakistan",
                  width: 20,
                  height: 10,
                  x: 0,
                  y: 0,
                  fontSize: 8,
                  fontWeight: 400,
                  lineHeight: 0.8,
                  fontStyle: "normal",
                  textDecoration: "empty string",
                },
                description: {
                  text: "X park view, DHA Phase 8 Lahore Pakistan",
                  width: 20,
                  height: 10,
                  x: 0,
                  y: 0,
                  fontSize: 8,
                  fontWeight: 400,
                  lineHeight: 0.8,
                  fontStyle: "normal",
                  textDecoration: "empty string",
                },
                problem: {
                  text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
                  width: 125,
                  height: 58,
                  x: 0,
                  y: 0,
                  fontSize: 10,
                  fontWeight: 400,
                  lineHeight: 1,
                  fontStyle: "normal",
                  textDecoration: "empty string",
                },
                solution: {
                  text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
                  width: 125,
                  height: 58,
                  x: 0,
                  y: 0,
                  fontSize: 10,
                  fontWeight: 400,
                  lineHeight: 1,
                  fontStyle: "normal",
                  textDecoration: "empty string",
                },
                callToAction: {
                  text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
                  width: 125,
                  height: 58,
                  x: 0,
                  y: 0,
                  fontSize: 10,
                  fontWeight: 400,
                  lineHeight: 1,
                  fontStyle: "normal",
                  textDecoration: "empty string",
                },
                services: [
                  {
                    text: "Brochures",
                    width: 70,
                    height: 12,
                    x: 392,
                    y: 320,
                    fontSize: 10,
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: 1,
                    textDecoration: "empty string",
                  },
                  {
                    text: "Business Card",
                    width: 70,
                    height: 12,
                    x: 392,
                    y: 340,
                    fontSize: 10,
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: 1,
                    textDecoration: "empty string",
                  },
                  {
                    text: "Banners",
                    width: 70,
                    height: 12,
                    x: 392,
                    y: 360,
                    fontSize: 10,
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: 1,
                    textDecoration: "empty string",
                  },
                  {
                    text: "Stickers",
                    width: 70,
                    height: 12,
                    x: 392,
                    y: 380,
                    fontSize: 10,
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: 1,
                    textDecoration: "empty string",
                  },
                ],
                benefits: [
                  {
                    text: "High-Quality Prints",
                    x: 30.5,
                    y: 289.5,
                    width: 226,
                    height: 19,
                    fontSize: 16,
                    fontWeight: 700,
                    lineHeight: 1,
                    fontStyle: "bold",
                    textDecoration: "empty string",
                  },
                  {
                    text: "High-Quality Prints",
                    x: 30.5,
                    y: 316.5,
                    width: 226,
                    height: 19,
                    fontSize: 16,
                    fontWeight: 700,
                    lineHeight: 1,
                    fontStyle: "bold",
                    textDecoration: "empty string",
                  },
                  {
                    text: "High-Quality Prints",
                    x: 30.5,
                    y: 343.5,
                    width: 226,
                    height: 19,
                    fontSize: 16,
                    fontWeight: 700,
                    lineHeight: 1,
                    fontStyle: "bold",
                    textDecoration: "empty string",
                  },
                  {
                    text: "High-Quality Prints",
                    x: 30.5,
                    y: 370.5,
                    width: 226,
                    height: 19,
                    fontSize: 16,
                    fontWeight: 700,
                    lineHeight: 1,
                    fontStyle: "bold",
                    textDecoration: "empty string",
                  },
                  {
                    text: "High-Quality Prints",
                    x: 30.5,
                    y: 397.5,
                    width: 226,
                    height: 19,
                    fontSize: 16,
                    fontWeight: 700,
                    lineHeight: 1,
                    fontStyle: "bold",
                    textDecoration: "empty string",
                  },
                  {
                    text: "High-Quality Prints",
                    x: 30.5,
                    y: 424.5,
                    width: 226,
                    height: 19,
                    fontSize: 16,
                    fontWeight: 700,
                    lineHeight: 1,
                    fontStyle: "bold",
                    textDecoration: "empty string",
                  },
                  {
                    text: "High-Quality Prints",
                    x: 30.5,
                    y: 451.5,
                    width: 226,
                    height: 19,
                    fontSize: 16,
                    fontWeight: 700,
                    lineHeight: 1,
                    fontStyle: "bold",
                    textDecoration: "empty string",
                  },
                  {
                    text: "High-Quality Prints",
                    x: 30.5,
                    y: 478.5,
                    width: 226,
                    height: 19,
                    fontSize: 16,
                    fontWeight: 700,
                    lineHeight: 1,
                    fontStyle: "bold",
                    textDecoration: "empty string",
                  },
                  {
                    text: "High-Quality Prints",
                    x: 30.5,
                    y: 505.5,
                    width: 226,
                    height: 19,
                    fontSize: 16,
                    fontWeight: 700,
                    lineHeight: 1,
                    fontStyle: "bold",
                    textDecoration: "empty string",
                  },
                  {
                    text: "High-Quality Prints",
                    x: 30.5,
                    y: 532.5,
                    width: 226,
                    height: 19,
                    fontSize: 16,
                    fontWeight: 700,
                    lineHeight: 1,
                    fontStyle: "bold",
                    textDecoration: "empty string",
                  },
                ],
                painPoints: [
                  {
                    text: "Long Turnaround Times",
                    x: 31,
                    y: 420.5,
                    width: 231,
                    height: 19,
                    fontSize: 16,
                    fontWeight: 700,
                    lineHeight: 1,
                    fontStyle: "bold",
                    textDecoration: "empty string",
                  },
                  {
                    text: "Long Turnaround Times",
                    x: 31,
                    y: 447.5,
                    width: 231,
                    height: 19,
                    fontSize: 16,
                    fontWeight: 700,
                    lineHeight: 1,
                    fontStyle: "bold",
                    textDecoration: "empty string",
                  },
                  {
                    text: "Long Turnaround Times",
                    x: 31,
                    y: 474.5,
                    width: 231,
                    height: 19,
                    fontSize: 16,
                    fontWeight: 700,
                    lineHeight: 1,
                    fontStyle: "bold",
                    textDecoration: "empty string",
                  },
                  {
                    text: "Long Turnaround Times",
                    x: 31,
                    y: 501.5,
                    width: 231,
                    height: 19,
                    fontSize: 16,
                    fontWeight: 700,
                    lineHeight: 1,
                    fontStyle: "bold",
                    textDecoration: "empty string",
                  },
                  {
                    text: "Long Turnaround Times",
                    x: 31,
                    y: 528.5,
                    width: 231,
                    height: 19,
                    fontSize: 16,
                    fontWeight: 700,
                    lineHeight: 1,
                    fontStyle: "bold",
                    textDecoration: "empty string",
                  },
                  {
                    text: "Long Turnaround Times",
                    x: 31,
                    y: 555.5,
                    width: 231,
                    height: 19,
                    fontSize: 16,
                    fontWeight: 700,
                    lineHeight: 1,
                    fontStyle: "bold",
                    textDecoration: "empty string",
                  },
                  {
                    text: "Limited Eco-Friendly Options",
                    x: 322,
                    y: 384.5,
                    width: 231,
                    height: 19,
                    fontSize: 16,
                    fontWeight: 700,
                    lineHeight: 1,
                    fontStyle: "bold",
                    textDecoration: "empty string",
                  },
                  {
                    text: "Limited Eco-Friendly Options",
                    x: 322,
                    y: 411.5,
                    width: 231,
                    height: 19,
                    fontSize: 16,
                    fontWeight: 700,
                    lineHeight: 1,
                    fontStyle: "bold",
                    textDecoration: "empty string",
                  },
                  {
                    text: "Limited Eco-Friendly Options",
                    x: 322,
                    y: 438.5,
                    width: 231,
                    height: 19,
                    fontSize: 16,
                    fontWeight: 700,
                    lineHeight: 1,
                    fontStyle: "bold",
                    textDecoration: "empty string",
                  },
                  {
                    text: "Limited Eco-Friendly Options",
                    x: 322,
                    y: 465.5,
                    width: 231,
                    height: 19,
                    fontSize: 16,
                    fontWeight: 700,
                    lineHeight: 1,
                    fontStyle: "bold",
                    textDecoration: "empty string",
                  },
                  {
                    text: "Limited Eco-Friendly Options",
                    x: 322,
                    y: 492.5,
                    width: 231,
                    height: 19,
                    fontSize: 16,
                    fontWeight: 700,
                    lineHeight: 1,
                    fontStyle: "bold",
                    textDecoration: "empty string",
                  },
                  {
                    text: "Limited Eco-Friendly Options",
                    x: 322,
                    y: 519.5,
                    width: 231,
                    height: 19,
                    fontSize: 16,
                    fontWeight: 700,
                    lineHeight: 1,
                    fontStyle: "bold",
                    textDecoration: "empty string",
                  },
                  {
                    text: "Limited Eco-Friendly Options",
                    x: 322,
                    y: 546.5,
                    width: 231,
                    height: 19,
                    fontSize: 16,
                    fontWeight: 700,
                    lineHeight: 1,
                    fontStyle: "bold",
                    textDecoration: "empty string",
                  },
                ],
                featureHeadings: [
                  {
                    text: "AI Solutions",
                    x: 581,
                    y: 61.5,
                    width: 220,
                    height: 19,
                    fontSize: 16,
                    fontWeight: 700,
                    lineHeight: 1,
                    fontStyle: "bold",
                    textDecoration: "empty string",
                  },
                  {
                    text: "Custom Development",
                    x: 581,
                    y: 152.5,
                    width: 220,
                    height: 19,
                    fontSize: 16,
                    fontWeight: 700,
                    lineHeight: 1,
                    fontStyle: "bold",
                    textDecoration: "empty string",
                  },
                  {
                    text: "ML Insights",
                    x: 581,
                    y: 291.5,
                    width: 220,
                    height: 19,
                    fontSize: 16,
                    fontWeight: 700,
                    lineHeight: 1,
                    fontStyle: "bold",
                    textDecoration: "empty string",
                  },
                  {
                    text: "Cloud Services",
                    x: 581,
                    y: 414.5,
                    width: 220,
                    height: 19,
                    fontSize: 16,
                    fontWeight: 700,
                    lineHeight: 1,
                    fontStyle: "bold",
                    textDecoration: "empty string",
                  },
                ],
                featureDescriptions: [
                  {
                    text: "Our AI solutions streamline operations and enhance decision-making by integrating advanced algorithms and data analytics, ensuring your business remains competitive and future-ready.",
                    x: 581,
                    y: 88.5,
                    width: 250,
                    height: 48,
                    fontSize: 14,
                    fontWeight: 400,
                    lineHeight: 1,
                    fontStyle: "normal",
                    textDecoration: "empty string",
                  },
                  {
                    text: "We tailor software development to your unique needs, ensuring seamless integration with your existing systems and delivering scalable and efficient solutions that drive business growth.",
                    x: 581,
                    y: 179.5,
                    width: 250,
                    height: 96,
                    fontSize: 14,
                    fontWeight: 400,
                    lineHeight: 1,
                    fontStyle: "normal",
                    textDecoration: "empty string",
                  },
                  {
                    text: "Leverage our ML insights to transform raw data into actionable strategies, enabling you to predict trends, understand customer behavior, and make data-driven decisions with confidence.",
                    x: 581,
                    y: 318.5,
                    width: 250,
                    height: 80,
                    fontSize: 14,
                    fontWeight: 400,
                    lineHeight: 1,
                    fontStyle: "normal",
                    textDecoration: "empty string",
                  },
                  {
                    text: "Enhance your business agility and reduce overhead with our comprehensive cloud services, providing secure and scalable infrastructure to support your digital transformation journey.",
                    x: 581,
                    y: 441.5,
                    width: 250,
                    height: 80,
                    fontSize: 14,
                    fontWeight: 400,
                    lineHeight: 1,
                    fontStyle: "normal",
                    textDecoration: "empty string",
                  },
                ],
              },
            };
            const json = JSON.parse(template.templateAttributes);
            data.templateId = template.templateId;
            data.templateKey = template.templateKey;
            data.primaryColor = template.primaryColor;
            data.secondaryColor = template.secondaryColor;
            data.templateAttributes = json;

            templates.push(data);
          });
          //   const data = {
          //     templateId: 0,
          //     primaryColor: "",
          //     secondaryColor: "",
          //     templateAttributes: undefined,
          //   };
          //   const json = JSON.parse(res.content[0]?.templateAttributes);
          //   data.templateId = res.content[0].templateId;
          //   data.primaryColor = res.content[0].primaryColor;
          //   data.secondaryColor = res.content[0].secondaryColor;
          //   data.templateAttributes = json;
          return Promise.resolve(templates);
        }

        return Promise.reject("Template not found");
      },
    }),
    getVariations: builder.mutation<
      IResponse<IColorSuggestions>,
      { jsonInput: ICanvasCardProps; companyLogoColorsList: string[] }
    >({
      query: (body) => ({
        url: "/marketing/process-template-attributes",
        method: "POST",
        body: body,
      }),
    }),
    getDescription: builder.mutation<
      IResponse<IBroucherDesctiption>,
      Partial<IUserCard>
    >({
      query: (body) => ({
        url: "/marketing/content",
        method: "POST",
        body: body,
      }),
    }),
    getBroucherDescription: builder.mutation<
      IResponse<IBroucherDesctiption>,
      Partial<IUserCard>
    >({
      query: (body) => ({
        url: "/marketing/brochure-content",
        method: "POST",
        body: body,
      }),
    }),
    getTrifoldDescription: builder.mutation<
      IResponse<IBroucherDesctiption>,
      Partial<IUserCard>
    >({
      query: (body) => ({
        url: "/marketing/trifold-brochure-content",
        method: "POST",
        body: body,
      }),
    }),
  }),
});

export const {
  useGetTemplateQuery,
  useGetVariationsMutation,
  useGetDescriptionMutation,
  useGetBroucherDescriptionMutation,
  useGetTrifoldDescriptionMutation,
} = templateAPI;
