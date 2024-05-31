import { useState } from "react";

import { SubmitHandler, useForm } from "react-hook-form";

import { Card1 } from "./card1";
import { Card2 } from "./card2";
import { Card3 } from "./card3";

import { RadioButton } from "../../../../components/radioButton";

import { ICardProps } from "../../../../types/card";
import { IHorizontalCard } from "../../../../types/horizontalCards";

import logo from "../../../../assets/logo.png";
import { Button } from "../../../../components/button";

export const HorizontalCards = () => {
  const [selected, setSelected] = useState({
    card1: false,
    card2: false,
    card3: false,
  });

  const cardData: ICardProps = {
    //TODO: dummy data will be replaced by the user inputted data
    logoUrl: logo,
    name: "Jamie Maclaren",
    designation: "Project Manager",
    phoneNumber: "+92 123 456 7890",
    website: "www.website.com",
    email: "test@gmail.com",
    address: "X park view, DHA Phase 8 Lahore Pakistan",
  };

  const { register, handleSubmit } = useForm<IHorizontalCard>();

  const onSubmit: SubmitHandler<IHorizontalCard> = (formData) => {
    console.log("Selected Card", formData);
  };

  return (
    <div className="flex flex-col w-full h-[100dvh] justify-evenly items-center">
      <img src={logo} alt="logo" className="max-w-44 max-h-24" />
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-4xl font-extrabold">Select one template</h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col w-full justify-center gap-10"
        >
          <div className="flex md:flex-row flex-col w-full justify-center py-5 px-5 gap-4">
            <RadioButton
              Component={<Card1 {...cardData} selected={selected.card1} />}
              register={register("selectedCard")}
              value="horizontal-one"
              onChange={() => {
                setSelected(() => ({
                  card1: true,
                  card2: false,
                  card3: false,
                }));
              }}
            />
            <RadioButton
              Component={<Card2 {...cardData} selected={selected.card2} />}
              register={register("selectedCard")}
              value="horizontal-two"
              onChange={() => {
                setSelected(() => ({
                  card1: false,
                  card2: true,
                  card3: false,
                }));
              }}
            />
            <RadioButton
              Component={<Card3 {...cardData} selected={selected.card3} />}
              register={register("selectedCard")}
              value="horizontal-three"
              onChange={() => {
                setSelected(() => ({
                  card1: false,
                  card2: false,
                  card3: true,
                }));
              }}
            />
          </div>

          <div className="flex w-full justify-center gap-4">
            <Button label="Go Back" varient="outlined" />
            <Button label="Submit" varient="primary" />
          </div>
        </form>
      </div>
    </div>
  );
};
