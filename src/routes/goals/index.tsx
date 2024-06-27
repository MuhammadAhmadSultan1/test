import { useState } from "react";
import { Oval } from "react-loader-spinner";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";

// import CustomButton from "../../components/customButton";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setUserCardInfo } from "../../redux/slices/userInfo";
import TextareaField from "../../components/textareaField";
import { goalSchema } from "../../schema";
import { useQuestionnaireAddMutation } from "../../services/form";
import { Button } from "../../components/button";
import {
  useGetDescriptionMutation,
  useGetTemplateQuery,
  // useGetVariationsMutation,
} from "../../services/template";
import { setTemplateData } from "../../redux/slices/templateData";
import { ITemplateAttributes } from "../../types/card";
import { IUserCard } from "../../types/user";
import { toaster } from "../../utils/toaster";
import { getErrorMessage } from "../../utils/errorHandler";
// import { Templates } from "../templates";

const Goals = ({ onClickBack, onClickNext }: ICommonProps) => {
  const dispatch = useAppDispatch();
  const userCard = useAppSelector((state) => state?.userCard);
  const templateData = useAppSelector((state) => state.selectedTemplateData);
  const sku = useAppSelector((state) => state.selectedTemplateData.sku);

  const defaultValues: IGoals = { goals: userCard?.goals ?? "" };

  const [questionnaireAdd, { isLoading: isAddingQuestionire }] =
    useQuestionnaireAddMutation();
  const { data: templateConfig } = useGetTemplateQuery(templateData.sku, {
    refetchOnMountOrArgChange: true,
  });
  const [getDescription, { isLoading: isGeneratingDescription }] =
    useGetDescriptionMutation();
  // const [getVariations] = useGetVariationsMutation();

  const [formLoading, setFormLoading] = useState<boolean>(false);
  // const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // const [showTemplates, setShowTemplates] = useState<boolean>(false);
  // const [showAboutCompany, setShowAboutCompany] = useState<boolean>(true);

  // const [loading, setLoading] = useState<boolean>(false);

  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors },
  } = useForm<IGoals>({
    resolver: yupResolver(goalSchema),
    defaultValues,
  });

  const onSubmit: SubmitHandler<IGoals> = (formData) => {
    setFormLoading(true);
    const { goals } = formData;
    const userCard = {
      goals,
    };
    dispatch(setUserCardInfo(userCard));
    submitForm();
  };

  const submitForm = async () => {
    try {
      const data = {
        companyName: userCard?.companyName,
        companyWebsite: userCard?.website,
        companyEmail: userCard?.email,
        productOrService: userCard?.serviceNameArray?.join(","),
        targetAudience: userCard?.targetAudienceArray?.join(","),
        merchandiseGoal: getValues("goals"),
        sessionId: userCard?.sessionId,
        address: userCard?.address,
        designation: userCard?.designation,
        aboutCompany: userCard?.aboutCompany,
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
        goals: getValues("goals"),
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
    const userCard = {
      showHeaderAndStepper: true,
    };
    dispatch(setUserCardInfo(userCard));

    onClickBack?.();
  };

  // const showAllTemplates = () => {
  //   let userCard = {
  //     showHeaderAndStepper: false
  //   }
  //   dispatch(setUserCardInfo(userCard));
  //   setLoading(false)
  //   setShowAboutCompany(false)
  //   setShowTemplates(true)
  // }

  // const onBackClick = () => {
  //   let userCard = {
  //     showHeaderAndStepper: true
  //   }
  //   dispatch(setUserCardInfo(userCard));
  //   setLoading(false)
  //   setShowTemplates(false)
  //   setShowAboutCompany(true)
  // }

  return (
    <>
      <div className="max-w-470px mx-auto flex items-center flex-col h-screen font-sans mt-0">
        {!isAddingQuestionire && !isGeneratingDescription ? (
          <>
            <h2 className="text-black text-center text-3xl my-8 font-semibold">
              What is the goal of this merchandise you are purchasing?
            </h2>
            <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
              <TextareaField
                label="Your Goals"
                placeholder="Type your goals here"
                height={190}
                borderRadius={20}
                error={errors.goals?.message}
                register={register}
                registerKey={"goals"}
              />

              {/* {errorMessage && (
                <p className="text-red-500 mb-3">{errorMessage}</p>
              )} */}

              <div className="mt-10 mb-10 flex gap-10 justify-center">
                <Button
                  label="Back"
                  varient="outlined"
                  attributes={{ onClick: onGoBack }}
                />
                <Button
                  label="Continue"
                  varient="primary"
                  isLoading={formLoading}
                  attributes={{ type: "submit" }}
                />
              </div>
            </form>
          </>
        ) : (
          <>
            {(isAddingQuestionire || isGeneratingDescription) && (
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
            )}
          </>
        )}
      </div>
    </>
  );
};

export default Goals;
