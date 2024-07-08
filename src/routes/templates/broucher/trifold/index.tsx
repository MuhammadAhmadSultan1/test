import { useMemo, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { setSelectCard } from "../../../../redux/slices/selectedCard";
import { setSelectedTemplateData } from "../../../../redux/slices/selectedTemplate";

import TrifoldOne from "../../../../components/broucher/trifold/cardOne/front";
// import FlyerTwo from "../../../../components/broucher/flyers/cardTwo/front";
// import FlyerThree from "../../../../components/broucher/flyers/cardThree/front";
import { RadioButton } from "../../../../components/radioButton";
import { CardOptionWrapper } from "../../../../components/cardOptionWarpper";
import { Button } from "../../../../components/button";

import { IHorizontalCard } from "../../../../types/horizontalCards";

import { selectCardSchema } from "../../../../schema";
import { toaster } from "../../../../utils/toaster";
import { getErrorMessage } from "../../../../utils/errorHandler";

export const Trifolds = ({
  onClickBack,
  onClickNext,
  onRegenerateDescription,
}: ICommonProps) => {
  const selectedCard = useAppSelector((state) => state.selectedCard);
  const templateData = useAppSelector((state) => state.templateData);

  const dispatch = useAppDispatch();

  const [selected, setSelected] = useState({
    card1: selectedCard.path === "components/broucher/trifold/cardOne/front",
    card2: selectedCard.path === "components/broucher/flyers/cardTwo/front",
    card3: selectedCard.path === "components/broucher/flyers/cardThree/front",
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
        dispatch(setSelectedTemplateData({ ...selectedData, sku: "107BT001" }));
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
                <TrifoldOne
                  text={foundedTemplatesData.template1}
                  editable={false}
                />
              </CardOptionWrapper>
            }
            register={register("selectedCard")}
            value="components/broucher/trifold/cardOne/front"
            attributes={{
              defaultChecked:
                selectedCard.path ===
                "components/broucher/trifold/cardOne/front",
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
        {/* {foundedTemplatesData.template2 && (
          <RadioButton
            Component={
              <CardOptionWrapper selected={selected.card2}>
                <FlyerTwo
                  text={foundedTemplatesData.template2}
                  editable={false}
                />
              </CardOptionWrapper>
            }
            register={register("selectedCard")}
            value="components/broucher/flyers/cardTwo/front"
            attributes={{
              defaultChecked:
                selectedCard.path ===
                "components/broucher/flyers/cardTwo/front",
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
                <FlyerThree
                  text={foundedTemplatesData.template3}
                  editable={false}
                />
              </CardOptionWrapper>
            }
            register={register("selectedCard")}
            value="components/broucher/flyers/cardThree/front"
            attributes={{
              defaultChecked:
                selectedCard.path ===
                "components/broucher/flyers/cardThree/front",
            }}
            onChange={() => {
              setSelected(() => ({
                card1: false,
                card2: false,
                card3: true,
              }));
            }}
          />
        )} */}
      </div>

      {errors.selectedCard && (
        <p className="text-red-500 text-right pr-5 text-sm">
          {errors.selectedCard.message}
        </p>
      )}

      <div className="m-auto max-w-[600px] py-4 px-6  mt-2 rounded-lg border border-lightOutline">
        <span>
          Bam! Your text was just generated into 3 templates based on what the
          AI found would fit your brand best. Don't like it? Hit the “Regenerate
          Text” button and see what else the Ai has up its sleeve!
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
