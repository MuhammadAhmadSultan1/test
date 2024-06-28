import * as yup from "yup";

export const companyDetailsSchema = yup.object().shape({
  companyName: yup.string().trim().required("Company name is required"),
});

export const emailSchema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .required("Email is required")
    .email("Invalid email format"),
});

export const websiteSchema = yup.object().shape({
  website: yup
    .string()
    .trim()
    .required("Website is required")
    .test("Please enter a valid URL", (value) => {
      const regex = RegExp(
        /^(?=(?<http>(?:https?:\/\/){1}(?:www\.)?)?)((?=\k<http>?(?<ipaddr>(?:\d{1,3}\.){3}\d{1,3}(?::\d{1,5})?))\k<http>?\k<ipaddr>(?:\.[\w]{1,9})?|\k<http>(?:[\w]\.?){1,255}\.[\w]{1,9})(?:\/.*)?$/
      );
      if (regex.test(value)) return true;

      return false;
    }),
});

export const clientNameSchema = yup.object().shape({
  clientName: yup.string().trim().required("Client name is required"),
});

export const phoneNumberSchema = yup.object().shape({
  phoneNumber: yup.string().trim().required("Client name is required"),
});

export const addressSchema = yup.object().shape({
  address: yup.string().trim().required("Address is required"),
});

export const designationSchema = yup.object().shape({
  designation: yup.string().trim().required("Designation is required"),
});

// export const serviceNameSchema = yup.object().shape({
//   serviceName: yup.string().required("Service name is required"),
// });
export const serviceNameSchema = yup.object().shape({
  serviceNameArray: yup
    .array()
    .min(1, "Type and hit Enter to add")
    .required("Service name is required"),
});

// export const targetAudienceSchema = yup.object().shape({
//   targetAudience: yup.string().required("Target Audience is required"),
// });
export const targetAudienceSchema = yup.object().shape({
  targetAudienceArray: yup
    .array()
    .min(1, "Type and hit Enter to add")
    .required("Target Audience is required"),
});

export const aboutCompanySchema = yup.object().shape({
  aboutCompany: yup.string().trim().required("About company is required"),
});

export const goalSchema = yup.object().shape({
  goals: yup.string().trim().required("Goal is required"),
});

export const selectCardSchema = yup.object().shape({
  selectedCard: yup.string().required("Please select one template").trim(),
});

export const selectColorVariationSchema = yup.object().shape({
  selectedVariation: yup.string().required("Please select one template").trim(),
});

export const uploadLogoSchema = yup.object().shape({
  logoAttachment: yup
    .mixed<FileList>()
    .test("required", "Logo is required", (file) => {
      console.log(file);
      if (!file || !file[0]) {
        return false;
      }
      return true;
    })
    .test(
      "type",
      "Please select a valid image file (png, jpg, jpeg)",
      (file) => {
        if (file && file[0]) {
          const supportedFileTypes = ["image/jpeg", "image/png", "image/jpg"];
          return supportedFileTypes.includes(file[0].type);
        }
      }
    )
    .test("fileSize", "File size must be less than 10 MB", (file) => {
      if (file && file[0]) {
        return file[0].size <= 10000000;
      }
    }),
});
