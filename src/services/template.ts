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

interface ITemplateResponse {
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
      IResponse<{ description: string }>,
      Partial<IUserCard>
    >({
      query: (body) => ({
        url: "/marketing/content",
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
} = templateAPI;
