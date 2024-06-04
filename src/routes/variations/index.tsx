import { Suspense, lazy, useMemo, useState } from "react";
// import { importModule } from "../../utils/dynamicImports";
import { ICanvasCardProps } from "../../types/card";
import { CardOptionWrapper } from "../../components/cardOptionWarpper";
import { RadioButton } from "../../components/radioButton";
import { SubmitHandler, useForm } from "react-hook-form";

import { IVariation } from "../../types/variations";

import { Button } from "../../components/button";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setSelectedColorVariation } from "../../redux/slices/selectedColorVariation";
import { yupResolver } from "@hookform/resolvers/yup";
import { selectColorVariationSchema } from "../../schema";

export const Variations = (props: ICommonProps) => {
  const { onClickBack, onClickNext } = props;
  const colorVaraitions = {
    primary: ["#004CE0", "#FF0000", "#008000"],
    secondary: ["#323232", "#323232", "#323232"],
  };

  const selectedColorVariation = useAppSelector(
    (state) => state.selectedColorVariation
  );

  const [selectedVariation, setSelectedVariation] = useState({
    card1: colorVaraitions.primary[0] === selectedColorVariation.primary,
    card2: colorVaraitions.primary[1] === selectedColorVariation.primary,
    card3: colorVaraitions.primary[2] === selectedColorVariation.primary,
  });

  const selectedCard = useAppSelector((state) => state.selectedCard);
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IVariation>({
    resolver: yupResolver(selectColorVariationSchema),
  });

  const testCardData: ICanvasCardProps = {
    logo: {
      url: "",
      width: 20,
      height: 10,
    },
    name: {
      text: "Jamie Maclaren",
      color: "#ffffff",
      fontSize: 16,
      fontWeight: 600,
      lineHeight: 1.2,
    },
    designation: {
      text: "Project Manager",
      color: "#ffffff",
      fontSize: 10,
      fontWeight: 400,
      lineHeight: 0.8,
    },
    phone: {
      text: "+92 123 456 7890",
      color: "#ffffff",
      fontSize: 8,
      fontWeight: 400,
      lineHeight: 0.8,
    },
    website: {
      text: "www.website.com",
      color: "#ffffff",
      fontSize: 8,
      fontWeight: 400,
      lineHeight: 0.8,
    },
    email: {
      text: "test@gmail.com",
      color: "#ffffff",
      fontSize: 8,
      fontWeight: 400,
      lineHeight: 0.8,
    },
    address: {
      text: "X park view, DHA Phase 8 Lahore Pakistan",
      color: "#ffffff",
      fontSize: 8,
      fontWeight: 400,
      lineHeight: 0.8,
    },
    description: {
      text: "X park view, DHA Phase 8 Lahore Pakistan",
      color: "#ffffff",
      fontSize: 8,
      fontWeight: 400,
      lineHeight: 0.8,
    },
    selected: false,
  };

  const MarkdownPreview = useMemo(
    () => lazy(() => import(`../../${selectedCard.path}`)),
    [selectedCard.path]
  );

  const onSubmit: SubmitHandler<IVariation> = (formData) => {
    try {
      dispatch(
        setSelectedColorVariation({
          primary: colorVaraitions.primary[Number(formData.selectedVariation)],
          secondary:
            colorVaraitions.secondary[Number(formData.selectedVariation)],
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

  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="text-4xl font-extrabold">Select one color</h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-full justify-center gap-10"
      >
        <div className="flex md:flex-row flex-col w-full justify-center py-5 px-5 gap-4">
          <RadioButton
            Component={
              <CardOptionWrapper selected={selectedVariation.card1}>
                <Suspense fallback={"loading...."}>
                  <MarkdownPreview
                    {...testCardData}
                    primary={colorVaraitions.primary[0]}
                    secondary={colorVaraitions.secondary[0]}
                  />
                </Suspense>
              </CardOptionWrapper>
            }
            attributes={{
              defaultChecked:
                colorVaraitions.primary[0] === selectedColorVariation.primary,
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
              <CardOptionWrapper selected={selectedVariation.card2}>
                <Suspense fallback={"loading...."}>
                  <MarkdownPreview
                    {...testCardData}
                    primary={colorVaraitions.primary[1]}
                    secondary={colorVaraitions.secondary[1]}
                  />
                </Suspense>
              </CardOptionWrapper>
            }
            attributes={{
              defaultChecked:
                colorVaraitions.primary[1] === selectedColorVariation.primary,
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
              <CardOptionWrapper selected={selectedVariation.card3}>
                <Suspense>
                  <MarkdownPreview
                    {...testCardData}
                    primary={colorVaraitions.primary[2]}
                    secondary={colorVaraitions.secondary[2]}
                  />
                </Suspense>
              </CardOptionWrapper>
            }
            attributes={{
              defaultChecked:
                colorVaraitions.primary[2] === selectedColorVariation.primary,
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

        <div className="flex w-full justify-center gap-4">
          <Button
            label="Go Back"
            varient="outlined"
            attributes={{ onClick: onGoBack }}
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
