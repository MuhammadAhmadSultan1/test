import * as yup from "yup";

export const companyDetailsSchema = yup.object().shape({
  companyName: yup.string().required("Company name is required"),
});

export const emailSchema = yup.object().shape({
  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email format"),
});

export const websiteSchema = yup.object().shape({
  website: yup.string().required("Website is required"),
});

export const clientNameSchema = yup.object().shape({
  clientName: yup.string().required("Client name is required"),
});

export const addressSchema = yup.object().shape({
  address: yup.string().required("Address is required"),
});

export const designationSchema = yup.object().shape({
  designation: yup.string().required("Designation is required"),
});

// export const serviceNameSchema = yup.object().shape({
//   serviceName: yup.string().required("Service name is required"),
// });
export const serviceNameSchema = yup.object().shape({
  serviceNameArray: yup
    .array()
    .min(1, "Minimum one service is required")
    .required("Service name is required"),
});

// export const targetAudienceSchema = yup.object().shape({
//   targetAudience: yup.string().required("Target Audience is required"),
// });
export const targetAudienceSchema = yup.object().shape({
  targetAudienceArray: yup
    .array()
    .min(1, "Minimum one target is required")
    .required("Target Audience is required"),
});

export const aboutCompanySchema = yup.object().shape({
  aboutCompany: yup.string().required("About company is required"),
});

export const goalSchema = yup.object().shape({
  goals: yup.string().required("Goal is required"),
});

export const selectCardSchema = yup.object().shape({
  selectedCard: yup.string().required("Please select one template").trim(),
});

export const selectColorVariationSchema = yup.object().shape({
  selectedVariation: yup.string().required("Please select one template").trim(),
});
