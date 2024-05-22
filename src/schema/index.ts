import * as yup from "yup";

export const companyDetailsSchema = yup.object().shape({
  companyName: yup.string().required("Company name is required."),
  website: yup.string().required("Website is required."),
  clientInitials: yup.string().required("Client Initials is required."),
});

export const serviceNameSchema = yup.object().shape({
  serviceName: yup.string().required("Service name is required."),
});

export const targetAudienceSchema = yup.object().shape({
  targetAudience: yup.string().required("Target Audience is required."),
});

export const aboutCompanySchema = yup.object().shape({
  aboutCompany: yup.string().required("About company is required."),
});

export const goalSchema = yup.object().shape({
  goals: yup.string().required("Goal is required."),
});


