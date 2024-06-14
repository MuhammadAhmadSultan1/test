import { ICanvasCardProps, ITemplateAttributes } from "../types/card";
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
                },
                name: {
                  text: "Jamie Maclaren",
                  fontSize: 16,
                  fontWeight: 600,
                  lineHeight: 1.2,
                  fontStyle: "normal",
                  textDecoration: "empty string",
                },
                designation: {
                  text: "Project Manager",
                  fontSize: 10,
                  fontWeight: 400,
                  lineHeight: 0.8,
                  fontStyle: "normal",
                  textDecoration: "empty string",
                },
                phone: {
                  text: "+92 123 456 7890",
                  fontSize: 8,
                  fontWeight: 400,
                  lineHeight: 0.8,
                  fontStyle: "normal",
                  textDecoration: "empty string",
                },
                website: {
                  text: "www.website.com",
                  fontSize: 8,
                  fontWeight: 400,
                  lineHeight: 0.8,
                  fontStyle: "normal",
                  textDecoration: "empty string",
                },
                email: {
                  text: "test@gmail.com",
                  fontSize: 8,
                  fontWeight: 400,
                  lineHeight: 0.8,
                  fontStyle: "normal",
                  textDecoration: "empty string",
                },
                address: {
                  text: "X park view, DHA Phase 8 Lahore Pakistan",
                  fontSize: 8,
                  fontWeight: 400,
                  lineHeight: 0.8,
                  fontStyle: "normal",
                  textDecoration: "empty string",
                },
                description: {
                  text: "X park view, DHA Phase 8 Lahore Pakistan",
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
    getVariations: builder.mutation<any, ICanvasCardProps>({
      query: (body) => ({
        url: "/marketing/process-template-attributes",
        method: "POST",
        body: body,
      }),
      transformResponse: (res) => {
        console.log(res);
        return Promise.resolve(res);
      },
    }),
  }),
});

export const { useGetTemplateQuery, useGetVariationsMutation } = templateAPI;
