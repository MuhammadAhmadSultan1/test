import { useState } from "react";

import { SubmitHandler, useForm } from "react-hook-form";

import { RadioButton } from "../../../../components/radioButton";

import { ICanvasCardProps } from "../../../../types/card";
import { IHorizontalCard } from "../../../../types/horizontalCards";

// import logo from "../../../../assets/logo.png";
import { Button } from "../../../../components/button";
// import Editor from "../../../editor";
import { CardOptionWrapper } from "../../../../components/cardOptionWarpper";
import CardComponent from "../../../../components/cards/One/front/cardComponent";
import CardTow from "../../../../components/cards/businessCards/cardTow/front";
import CardThree from "../../../../components/cards/businessCards/cardThree/front";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { setSelectCard } from "../../../../redux/slices/selectedCard";
import { yupResolver } from "@hookform/resolvers/yup";
import { selectCardSchema } from "../../../../schema";

export const HorizontalCards = ({ onClickBack, onClickNext }: ICommonProps) => {
  // const [showEditor, setShowEditor] = useState<boolean>(false);

  const selectedCard = useAppSelector((state) => state.selectedCard);

  const [selected, setSelected] = useState({
    card1: selectedCard.path === "components/cards/One/front/cardComponent",
    card2: selectedCard.path === "components/cards/businessCards/cardTow/front",
    card3:
      selectedCard.path === "components/cards/businessCards/cardThree/front",
  });

  const dispatch = useAppDispatch();

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
      console.log("here1", onClickNext);
      if (onClickNext) {
        console.log("here");
        onClickNext();
      }
    } catch (e) {
      console.log("Error", e);
    }
  };

  const onGoBack = () => {
    onClickBack?.();
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="text-4xl font-extrabold">Select one template</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-full justify-center"
      >
        <div className="flex md:flex-row flex-col w-full justify-center py-5 px-5 gap-4">
          <RadioButton
            Component={
              <CardOptionWrapper selected={selected.card1}>
                <CardComponent {...testCardData} />
              </CardOptionWrapper>
            }
            register={register("selectedCard")}
            value="components/cards/One/front/cardComponent"
            attributes={{
              defaultChecked:
                selectedCard.path ===
                "components/cards/One/front/cardComponent",
            }}
            onChange={() => {
              setSelected(() => ({
                card1: true,
                card2: false,
                card3: false,
              }));
            }}
          />
          <RadioButton
            Component={
              <CardOptionWrapper selected={selected.card2}>
                <CardTow {...testCardData} />
              </CardOptionWrapper>
            }
            register={register("selectedCard")}
            value="components/cards/businessCards/cardTow/front"
            attributes={{
              defaultChecked:
                selectedCard.path ===
                "components/cards/businessCards/cardTow/front",
            }}
            onChange={() => {
              setSelected(() => ({
                card1: false,
                card2: true,
                card3: false,
              }));
            }}
          />
          <RadioButton
            Component={
              <CardOptionWrapper selected={selected.card3}>
                <CardThree {...testCardData} />
              </CardOptionWrapper>
            }
            register={register("selectedCard")}
            value="components/cards/businessCards/cardThree/front"
            attributes={{
              defaultChecked:
                selectedCard.path ===
                "components/cards/businessCards/cardThree/front",
            }}
            onChange={() => {
              setSelected(() => ({
                card1: false,
                card2: false,
                card3: true,
              }));
            }}
          />
        </div>
        {errors.selectedCard && (
          <p className="text-red-500 text-right pr-5 text-sm">
            {errors.selectedCard.message}
          </p>
        )}

        <div className="flex w-full justify-center gap-4 mt-10">
          <Button
            label="Go Back"
            varient="outlined"
            attributes={{ onClick: onGoBack }}
          />
          <Button label="Continue" varient="primary" />
        </div>
      </form>
    </div>
  );
};
