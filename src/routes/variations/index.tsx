import {
  Suspense,
  lazy,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
// import { importModule } from "../../utils/dynamicImports";
// import { ICanvasCardProps } from "../../types/card";
import { CardOptionWrapper } from "../../components/cardOptionWarpper";
import { RadioButton } from "../../components/radioButton";
import { SubmitHandler, useForm } from "react-hook-form";

import { IVariation } from "../../types/variations";

import { Button } from "../../components/button";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setSelectedColorVariation } from "../../redux/slices/selectedColorVariation";
import { yupResolver } from "@hookform/resolvers/yup";
import { selectColorVariationSchema } from "../../schema";
// import { setTemplateData } from "../../redux/slices/templateData";
import { setSelectedTemplateData } from "../../redux/slices/selectedTemplate";
import { useGetVariationsMutation } from "../../services/template";
import { setGeneratedColor } from "../../redux/slices/generatedColorVariation";

export const Variations = (props: ICommonProps) => {
  const { onClickBack, onClickNext } = props;

  const [variations, setVariations] = useState<{
    primary: string[];
    secondary: string[];
  }>({ primary: [], secondary: [] });
  const [rounded, setRounded] = useState("");

  const logoColors = useAppSelector((state) => state.userCard.colors);
  const selectedCard = useAppSelector((state) => state.selectedCard);
  const selectedTemplateData = useAppSelector(
    (state) => state.selectedTemplateData
  );
  const generatedColorVariations = useAppSelector(
    (state) => state.generatedColors
  );

  const [getVariations, { isLoading }] = useGetVariationsMutation();

  // const rounded = useMemo(() => {
  //   const canvas = document.getElementById("canvas");
  //   if (canvas && canvas.getAttribute("class")?.includes("rounded")) {
  //     // console.log("here", canvas.getAttribute("class"));
  //     return "rounded-[16px]";
  //   }
  //   return "";
  // }, [selectedCard.path]);

  useEffect(() => {
    if (!isLoading) {
      const canvas = document.getElementById("canvas");
      if (canvas && canvas.getAttribute("class")?.includes("rounded")) {
        setRounded("rounded-[16px]");
      } else {
        setRounded("");
      }
    }
  }, [isLoading]);

  // const testColorVariations = useMemo(async () => {
  //   try {
  //     const response = await getVariations({
  //       jsonInput: selectedTemplateData,
  //       companyLogoColorsList: logoColors || [],
  //     }).unwrap();
  //     setVariations({
  //       primary: response.content.primaryColor,
  //       secondary: response.content.secondaryColor,
  //     });
  //     // return {
  //     //   primary: response.content.primaryColor,
  //     //   secondary: response.content.secondaryColor,
  //     // };
  //   } catch (e) {
  //     setVariations({
  //       primary: ["#004CE0", "#FF0000", "#008000"],
  //       secondary: ["#323232", "#323232", "#323232"],
  //     });
  //   }
  // }, [getVariations, logoColors, selectedTemplateData]);

  const generateVariations = useCallback(
    async (forceRegenerate?: boolean) => {
      try {
        // if (colorVariations.primary && colorVariations.secondary) return;
        if (!forceRegenerate)
          if (
            generatedColorVariations.primary.length &&
            generatedColorVariations.secondary.length &&
            generatedColorVariations.templatePath === selectedCard.path
          ) {
            return setVariations({
              primary: generatedColorVariations.primary,
              secondary: generatedColorVariations.secondary,
            });
          }
        const response = await getVariations({
          jsonInput: selectedTemplateData,
          companyLogoColorsList: logoColors || [],
        }).unwrap();
        setVariations({
          primary: response.content.primaryColor,
          secondary: response.content.secondaryColor,
        });
      } catch (e) {
        setVariations({
          primary: ["#004CE0", "#FF0000", "#008000"],
          secondary: ["#323232", "#323232", "#323232"],
        });
      }
    },
    [
      generatedColorVariations.primary,
      generatedColorVariations.secondary,
      generatedColorVariations.templatePath,
      getVariations,
      logoColors,
      selectedCard.path,
      selectedTemplateData,
    ]
  );

  useEffect(() => {
    generateVariations();
  }, [generateVariations]);

  // const variations = {
  //   primary: ["#004CE0", "#FF0000", "#008000"],
  //   secondary: ["#323232", "#323232", "#323232"],
  // };

  const selectedColorVariation = useAppSelector(
    (state) => state.selectedColorVariation
  );

  const [selectedVariation, setSelectedVariation] = useState({
    card1: variations.primary[0] === selectedColorVariation.primary,
    card2: variations.primary[1] === selectedColorVariation.primary,
    card3: variations.primary[2] === selectedColorVariation.primary,
  });

  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IVariation>({
    resolver: yupResolver(selectColorVariationSchema),
  });

  // const testCardData: ICanvasCardProps = {
  //   logo: {
  //     url: "",
  //     width: 20,
  //     height: 10,
  //   },
  //   name: {
  //     text: "Jamie Maclaren",
  //     color: "#ffffff",
  //     fontSize: 16,
  //     fontWeight: 600,
  //     lineHeight: 1.2,
  //     fontStyle: "normal",
  //     textDecoration: "empty string",
  //   },
  //   designation: {
  //     text: "Project Manager",
  //     color: "#ffffff",
  //     fontSize: 10,
  //     fontWeight: 400,
  //     lineHeight: 0.8,
  //     fontStyle: "normal",
  //     textDecoration: "empty string",
  //   },
  //   phone: {
  //     text: "+92 123 456 7890",
  //     color: "#ffffff",
  //     fontSize: 8,
  //     fontWeight: 400,
  //     lineHeight: 0.8,
  //     fontStyle: "normal",
  //     textDecoration: "empty string",
  //   },
  //   website: {
  //     text: "www.website.com",
  //     color: "#ffffff",
  //     fontSize: 8,
  //     fontWeight: 400,
  //     lineHeight: 0.8,
  //     fontStyle: "normal",
  //     textDecoration: "empty string",
  //   },
  //   email: {
  //     text: "test@gmail.com",
  //     color: "#ffffff",
  //     fontSize: 8,
  //     fontWeight: 400,
  //     lineHeight: 0.8,
  //     fontStyle: "normal",
  //     textDecoration: "empty string",
  //   },
  //   address: {
  //     text: "X park view, DHA Phase 8 Lahore Pakistan",
  //     color: "#ffffff",
  //     fontSize: 8,
  //     fontWeight: 400,
  //     lineHeight: 0.8,
  //     fontStyle: "normal",
  //     textDecoration: "empty string",
  //   },
  //   description: {
  //     text: "X park view, DHA Phase 8 Lahore Pakistan",
  //     color: "#ffffff",
  //     fontSize: 8,
  //     fontWeight: 400,
  //     lineHeight: 0.8,
  //     fontStyle: "normal",
  //     textDecoration: "empty string",
  //   },
  //   selected: false,
  // };

  const SelectedCard = useMemo(() => {
    //Make sure the path must be 5 sized and end with the file name
    const splitedPath = selectedCard.path.split("/");
    return lazy(
      () =>
        import(
          `../../${splitedPath[0]}/${splitedPath[1]}/${splitedPath[2]}/${splitedPath[3]}/${splitedPath[4]}.tsx`
        )
    );
  }, [selectedCard.path]);

  const onSubmit: SubmitHandler<IVariation> = (formData) => {
    try {
      dispatch(
        setSelectedColorVariation({
          primary: variations.primary[Number(formData.selectedVariation)],
          secondary: variations.secondary[Number(formData.selectedVariation)],
        })
      );
      dispatch(
        setSelectedTemplateData({
          primaryColor: variations.primary[Number(formData.selectedVariation)],
          secondaryColor:
            variations.secondary[Number(formData.selectedVariation)],
        })
      );
      dispatch(
        setGeneratedColor({
          primary: variations.primary,
          secondary: variations.secondary,
          templatePath: selectedCard.path,
        })
      );
      onClickNext?.();
    } catch (e) {
      console.log("Error", e);
    }
  };

  const onGoBack = () => {
    onClickBack?.();
  };

  if (isLoading) return <>Getting variations</>;

  return (
    <div className="flex flex-col items-center gap-4">
      {/* <div className="fixed bottom-4 right-4">
        <Button
          label=""
          varient="outlined"
          attributes={{
            className: "!rounded-full !p-3",
            "aria-label": "Regenerate",
            onClick: () => {
              generateVariations(true);
            },
            disabled: isLoading,
          }}
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
              />
            </svg>
          </span>
        </Button>
      </div> */}
      <div className="flex flex-col w-1/2 gap-3">
        <h2 className="text-center text-4xl font-extrabold text-[#282828]">
          Step 3: Perfect Your Design
        </h2>
        <span className="text-xs text-center">
          🎨 Now it's time to add your personal touch! Based on what our AI
          determined fits best with your brand, we.ve selected these color
          palettes for you to choose from. Remember, this step is all about
          picking the perfect colors, and you can click the "Regenerate Colors"
          button to see what other colors the AI deemed fit for you.
        </span>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-full justify-center"
      >
        <div className="flex md:flex-row flex-col flex-wrap w-full justify-center py-5 px-5 gap-4">
          <RadioButton
            Component={
              <CardOptionWrapper
                selected={selectedVariation.card1}
                rounded={rounded}
              >
                <Suspense fallback={"loading...."}>
                  <SelectedCard
                    text={selectedTemplateData}
                    editable={false}
                    primary={variations.primary[0]}
                    secondary={variations.secondary[0]}
                  />
                </Suspense>
              </CardOptionWrapper>
            }
            attributes={{
              defaultChecked:
                variations.primary[0] === selectedColorVariation.primary,
            }}
            onChange={() => {
              setSelectedVariation(() => ({
                card1: true,
                card2: false,
                card3: false,
              }));
            }}
            register={register("selectedVariation")}
            value={"0"}
          />
          <RadioButton
            Component={
              <CardOptionWrapper
                selected={selectedVariation.card2}
                rounded={rounded}
              >
                <Suspense fallback={"loading...."}>
                  <SelectedCard
                    text={selectedTemplateData}
                    editable={false}
                    primary={variations.primary[1]}
                    secondary={variations.secondary[1]}
                  />
                </Suspense>
              </CardOptionWrapper>
            }
            attributes={{
              defaultChecked:
                variations.primary[1] === selectedColorVariation.primary,
            }}
            onChange={() => {
              setSelectedVariation(() => ({
                card1: false,
                card2: true,
                card3: false,
              }));
            }}
            register={register("selectedVariation")}
            value={"1"}
          />
          <RadioButton
            Component={
              <CardOptionWrapper
                selected={selectedVariation.card3}
                rounded={rounded}
              >
                <Suspense>
                  <SelectedCard
                    text={selectedTemplateData}
                    editable={false}
                    primary={variations.primary[2]}
                    secondary={variations.secondary[2]}
                  />
                </Suspense>
              </CardOptionWrapper>
            }
            attributes={{
              defaultChecked:
                variations.primary[2] === selectedColorVariation.primary,
            }}
            onChange={() => {
              setSelectedVariation(() => ({
                card1: false,
                card2: false,
                card3: true,
              }));
            }}
            register={register("selectedVariation")}
            value={"2"}
          />
        </div>
        {errors.selectedVariation && (
          <p className="text-red-500 text-right pr-5 text-sm">
            {errors.selectedVariation.message}
          </p>
        )}

        <div className="flex flex-col w-full gap-3 m-auto max-w-[600px] py-4 px-6 mt-2">
          <span className="text-xs text-center">
            ✏️ Don't worry if the text sizes aren't quite right yet! You'll be
            able to adjust the text sizes in just a moment to make everything
            perfect.
          </span>
        </div>

        <div className="flex w-full justify-center gap-4 mt-10">
          <Button
            label="Go Back"
            varient="outlined"
            attributes={{ onClick: onGoBack }}
          />
          <Button
            label="Regenerate Colors"
            varient="outlined"
            attributes={{
              type: "button",
              onClick: () => {
                generateVariations(true);
              },
              disabled: isLoading,
            }}
          />

          <Button
            label="Continue"
            varient="primary"
            //   attributes={{ onClick: onPressTemplate }}
          />
        </div>
      </form>
    </div>
  );
};
