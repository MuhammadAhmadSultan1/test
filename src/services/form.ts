import { ISessionResponse, } from "../types/common";
import baseApi from "./baseApi";

export const questionnaireApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        questionnaireAdd: builder.mutation<ISessionResponse, any>({
            query: (body) => ({
                url: "questionnaire/add",
                method: "POST",
                body,
            }),
        }),
    }),
});

export const { useQuestionnaireAddMutation, } = questionnaireApi;