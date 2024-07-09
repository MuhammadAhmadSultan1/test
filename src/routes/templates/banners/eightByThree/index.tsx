import { useMemo, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { setSelectCard } from "../../../../redux/slices/selectedCard";
import { setSelectedTemplateData } from "../../../../redux/slices/selectedTemplate";

import BannerEightByThreeOne from "../../../../components/banners/eightByThree/cardOne/front";
import BannerEightByThreeTwo from "../../../../components/banners/eightByThree/cardTwo/front";
import BannerEightByThreeLast from "../../../../components/banners/eightByThree/cardThree/front";
import { RadioButton } from "../../../../components/radioButton";
import { CardOptionWrapper } from "../../../../components/cardOptionWarpper";
import { Button } from "../../../../components/button";

import { IHorizontalCard } from "../../../../types/horizontalCards";

import { selectCardSchema } from "../../../../schema";
import { toaster } from "../../../../utils/toaster";
import { getErrorMessage } from "../../../../utils/errorHandler";

export const EightByThreeBanners = ({
  onClickBack,
  onClickNext,
  onRegenerateDescription,
}: ICommonProps) => {
  const selectedCard = useAppSelector((state) => state.selectedCard);
  const templateData = useAppSelector((state) => state.templateData);

  const dispatch = useAppDispatch();

  const [selected, setSelected] = useState({
    card1:
      selectedCard.path === "components/banners/eightByThree/cardOne/front",
    card2:
      selectedCard.path === "components/banners/eightByThree/cardTwo/front",
    card3:
      selectedCard.path === "components/banners/eightByThree/cardThree/front",
  });

  const foundedTemplatesData = useMemo(() => {
    const template1 = templateData.find(
      (template) => template.templateKey === "template1"
    );
    const template2 = templateData.find(
      (template) => template.templateKey === "template2"
    );
    const template3 = templateData.find(
      (template) => template.templateKey === "template3"
    );
    return { template1, template2, template3 };
  }, [templateData]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IHorizontalCard>({
    resolver: yupResolver(selectCardSchema),
  });

  const onSubmit: SubmitHandler<IHorizontalCard> = (formData) => {
    try {
      dispatch(setSelectCard(formData.selectedCard));
      const selectedData = selected.card1
        ? foundedTemplatesData.template1
        : selected.card2
        ? foundedTemplatesData.template2
        : foundedTemplatesData.template3;
      if (selectedData)
        dispatch(setSelectedTemplateData({ ...selectedData, sku: "107B8302" }));
      if (onClickNext) {
        onClickNext();
      }
    } catch (e) {
      toaster(getErrorMessage(e), "error");
    }
  };

  const onGoBack = () => {
    onClickBack?.();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col w-full justify-center"
    >
      <div className="flex md:flex-row flex-wrap flex-col w-full justify-center py-5 px-5 gap-4">
        {foundedTemplatesData.template1 && (
          <RadioButton
            Component={
              <CardOptionWrapper selected={selected.card1}>
                <BannerEightByThreeOne
                  text={foundedTemplatesData.template1}
                  editable={false}
                />
              </CardOptionWrapper>
            }
            register={register("selectedCard")}
            value="components/banners/eightByThree/cardOne/front"
            attributes={{
              defaultChecked:
                selectedCard.path ===
                "components/banners/eightByThree/cardOne/front",
            }}
            onChange={() => {
              setSelected(() => ({
                card1: true,
                card2: false,
                card3: false,
              }));
            }}
          />
        )}
        {foundedTemplatesData.template2 && (
          <RadioButton
            Component={
              <CardOptionWrapper selected={selected.card2}>
                <BannerEightByThreeTwo
                  text={foundedTemplatesData.template2}
                  editable={false}
                />
              </CardOptionWrapper>
            }
            register={register("selectedCard")}
            value="components/banners/eightByThree/cardTwo/front"
            attributes={{
              defaultChecked:
                selectedCard.path ===
                "components/banners/eightByThree/cardTwo/front",
            }}
            onChange={() => {
              setSelected(() => ({
                card1: false,
                card2: true,
                card3: false,
              }));
            }}
          />
        )}

        {foundedTemplatesData.template3 && (
          <RadioButton
            Component={
              <CardOptionWrapper selected={selected.card3}>
                <BannerEightByThreeLast
                  text={foundedTemplatesData.template3}
                  editable={false}
                />
              </CardOptionWrapper>
            }
            register={register("selectedCard")}
            value="components/banners/eightByThree/cardThree/front"
            attributes={{
              defaultChecked:
                selectedCard.path ===
                "components/banners/eightByThree/cardThree/front",
            }}
            onChange={() => {
              setSelected(() => ({
                card1: false,
                card2: false,
                card3: true,
              }));
            }}
          />
        )}
      </div>

      {errors.selectedCard && (
        <p className="text-red-500 text-right pr-5 text-sm">
          {errors.selectedCard.message}
        </p>
      )}

      <div className="flex flex-col w-full gap-3 m-auto max-w-[600px] py-4 px-6 mt-2">
        <h2 className="text-center text-4xl font-extrabold text-[#282828]">
          Step 2: Choose Your Favorite Layout
        </h2>
        <span className="text-xs text-center">
          🎨 Now, pick the layout that catches your eye. Don't worry if it's not
          perfect! This is just the theme and you'll be able to customize the
          colors and adjust the sizes in just a moment.
        </span>
      </div>

      <div className="flex w-full justify-center gap-4 mt-10">
        <Button
          label="Go Back"
          varient="outlined"
          attributes={{ onClick: onGoBack, type: "button" }}
        />
        <Button
          label="Regenerate Text"
          varient="outlined"
          attributes={{ onClick: onRegenerateDescription, type: "button" }}
        />
        <Button
          label="Continue"
          varient="primary"
          attributes={{ type: "submit" }}
        />
      </div>
    </form>
  );
};
