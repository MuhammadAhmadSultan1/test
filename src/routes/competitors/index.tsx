import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setUserCardInfo } from "../../redux/slices/userInfo";
import TextareaField from "../../components/textareaField";
import { aboutCompanySchema } from "../../schema";
import { Button } from "../../components/button";
import { useQuestionnaireAddMutation } from "../../services/form";
import {
  useGetDescriptionMutation,
  useGetTemplateQuery,
} from "../../services/template";
import { IUserCard } from "../../types/user";
import { ITemplateAttributes } from "../../types/card";
import { setTemplateData } from "../../redux/slices/templateData";
import { toaster } from "../../utils/toaster";
import { getErrorMessage } from "../../utils/errorHandler";
import { Oval } from "react-loader-spinner";

const Competitors = ({ onClickNext, onClickBack }: ICommonProps) => {
  const dispatch = useAppDispatch();
  const userCard = useAppSelector((state) => state?.userCard);
  const templateData = useAppSelector((state) => state.selectedTemplateData);
  const sku = useAppSelector((state) => state.selectedTemplateData.sku);

  const [questionnaireAdd, { isLoading: isAddingQuestionire }] =
    useQuestionnaireAddMutation();
  const { data: templateConfig } = useGetTemplateQuery(templateData.sku, {
    refetchOnMountOrArgChange: true,
  });
  const [getDescription, { isLoading: isGeneratingDescription }] =
    useGetDescriptionMutation();

  const defaultValues: IAboutCompany = {
    aboutCompany: userCard?.aboutCompany ?? "",
  };

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IAboutCompany>({
    resolver: yupResolver(aboutCompanySchema),
    defaultValues,
  });

  const onSubmit: SubmitHandler<IAboutCompany> = async (formData) => {
    try {
      const { aboutCompany } = formData;

      dispatch(
        setUserCardInfo({
          aboutCompany,
        })
      );
      const data = {
        companyName: userCard?.companyName,
        companyWebsite: userCard?.website,
        companyEmail: userCard?.email,
        productOrService: userCard?.serviceNameArray?.join(","),
        targetAudience: userCard?.targetAudienceArray?.join(","),
        // merchandiseGoal: getValues("goals"),
        sessionId: userCard?.sessionId,
        address: userCard?.address,
        designation: userCard?.designation,
        aboutCompany: aboutCompany,
        // phoneNumber:userCard?.phoneNumber,
        userId: 0,
      };

      await questionnaireAdd(data).unwrap();

      const getDescriptionPayload = {
        companyName: userCard.companyName,
        email: userCard.email,
        website: userCard.website,
        // clientInitials: "",
        // serviceName: userCard.serviceName,
        serviceNameArray: userCard.serviceNameArray,
        // targetAudience: userCard.targetAudience,
        targetAudienceArray: userCard.targetAudienceArray,
        aboutCompany: userCard.aboutCompany,
        // goals: getValues("goals"),
        // sessionId: "",
        // logo: "",
        // colors: [],
        name: userCard.name,
        address: userCard.address,
        designation: userCard.designation,
        phone: userCard.phone,
        // showHeaderAndStepper: true,
      };
      const response = await getDescription(getDescriptionPayload).unwrap();
      if (templateConfig && templateConfig.length) {
        templateConfig.forEach((template) => {
          const data = {
            ...template,
            templateAttributes: {
              ...template.templateAttributes,
            },
          };

          if (template.templateAttributes) {
            Object.keys(template.templateAttributes).forEach((key) => {
              if (key === "logo") {
                data.templateAttributes = {
                  ...data.templateAttributes,
                  [key]: {
                    ...data.templateAttributes[key],
                    url: userCard[key] as string,
                  },
                };
              } else if (key === "name") {
                data.templateAttributes = {
                  ...data.templateAttributes,
                  [key]: {
                    ...data.templateAttributes[key],
                    text:
                      sku === "101HC005" || sku === "102VC006"
                        ? (userCard.name as string)
                        : (userCard.companyName as string),
                  },
                };
              } else {
                if (userCard[key as keyof IUserCard]) {
                  data.templateAttributes = {
                    ...data.templateAttributes,
                    [key]: {
                      ...(data.templateAttributes[
                        key as keyof ITemplateAttributes
                      ] as object),
                      text: userCard[key as keyof IUserCard],
                    },
                  };
                  data.templateAttributes = {
                    ...data.templateAttributes,
                    description: {
                      ...data.templateAttributes.description,
                      text: response.content.description,
                    },
                  };
                }
              }
            });
          }
          dispatch(setTemplateData({ ...data }));
        });

        onClickNext?.();

        // try {
        //   const response = await getVariations(templateData).unwrap();
        //   console.log("variations ============ ", response);
        // } catch (e) {
        //   console.log("error", e);
        // }
      }
    } catch (e) {
      toaster(getErrorMessage(e), "error");
    }
  };

  const onGoBack = () => {
    onClickBack?.();
    // const userCard = {
    //   aboutCompany,
    // };
    // dispatch(setUserCardInfo(userCard));
  };

  if (isAddingQuestionire || isGeneratingDescription)
    return (
      <>
        <div className="mt-40">
          <Oval
            visible={true}
            height="120"
            width="120"
            color="#0343DF"
            secondaryColor="#EFEFEF"
            ariaLabel="oval-loading"
            wrapperClass=""
            strokeWidth={3}
          />
        </div>

        <h2 className="text-black text-center text-4xl my-4  font-medium mt-40">
          Preparing your design
        </h2>
        <h3 className="text-[#A7A7A7] text-center text-base font-normal">
          Please wait we are working on your design
        </h3>
      </>
    );

  return (
    <div className=" mx-auto flex w-1/2 items-center flex-col h-screen font-sans">
      <h2 className="text-center text-4xl my-8 font-extrabold text-[#282828]">
        Why Would Someone Choose This Company Over Competitors?
      </h2>

      <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
        <TextareaField
          label="About Company"
          placeholder="Type something about company"
          height={190}
          borderRadius={20}
          error={errors.aboutCompany?.message}
          register={register}
          registerKey="aboutCompany"
        />

        <div className="mt-10 mb-10 flex gap-10 justify-center">
          <Button
            label="Go Back"
            varient="outlined"
            attributes={{ onClick: onGoBack }}
          />
          <Button
            label="Continue"
            varient="primary"
            attributes={{ type: "submit" }}
          />
        </div>
      </form>
    </div>
  );
};

export default Competitors;
