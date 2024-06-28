import { useState } from "react";

import InputField from "../../components/inputField";
import { ServicesButton } from "./components";

import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setUserCardInfo } from "../../redux/slices/userInfo";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { targetAudienceSchema } from "../../schema";
import { Button } from "../../components/button";

const TargetAudience = ({ onClickNext, onClickBack }: ICommonProps) => {
  const dispatch = useAppDispatch();
  const userCard = useAppSelector((state) => state?.userCard);

  const [targetAudience, setTargetAudience] = useState<string>(
    userCard?.targetAudience ?? ""
  );
  const defaultValues: ITargetAudienceArray = {
    targetAudienceArray: userCard?.targetAudienceArray ?? [],
  };

  const {
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm<ITargetAudienceArray>({
    resolver: yupResolver(targetAudienceSchema),
    defaultValues,
  });

  const onSubmit: SubmitHandler<ITargetAudienceArray> = (fromData) => {
    const { targetAudienceArray } = fromData;
    const userCard = {
      targetAudienceArray,
    };
    dispatch(setUserCardInfo(userCard));
    onClickNext?.();
  };
  const targetAudienceArray = getValues("targetAudienceArray");

  const onGoBack = () => {
    onClickBack?.();
    const userCard = {
      targetAudienceArray,
    };
    dispatch(setUserCardInfo(userCard));
  };

  const handleEnterKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (targetAudience.trim()) {
        setValue("targetAudienceArray", [
          ...targetAudienceArray,
          targetAudience,
        ]);
        setTargetAudience("");
      }
      e.preventDefault();
    }
  };

  const onClickItem = (index: number) => {
    const newArray = targetAudienceArray.filter((_, idx) => idx !== index);
    setValue("targetAudienceArray", newArray, { shouldValidate: true });
  };

  return (
    <div className=" mx-auto flex w-1/2 items-center flex-col h-screen font-sans">
      <h2 className="text-center text-4xl my-8 font-extrabold text-[#282828]">
        Who Is Your Target Audience?
      </h2>

      <form
        className="mt-5 flex flex-col items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <InputField
            label="Target Audience"
            placeholder="e.g. Residential Homeowners, Commercial Clients..."
            onKeyDown={handleEnterKeyPress}
            error={
              targetAudienceArray?.length < 1
                ? errors.targetAudienceArray?.message
                : undefined
            }
            value={targetAudience}
            onChange={(e: any) => setTargetAudience(e?.target?.value)}
          />
          <div className="flex flex-wrap gap-4 mt-5">
            {targetAudienceArray?.map((name, index) => (
              <ServicesButton
                onClick={() => onClickItem(index)}
                key={index}
                name={name}
              />
            ))}
          </div>
        </div>

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

        <div className="mt-10">
          <div>
            Here are examples of target audience, include these points for
            better results.
          </div>
          <ul className="list-disc mt-2 text-sm font-bold text-[#A1A1A1] leading-5 list-inside">
            <li className="text-[#A1A1A1]">Age: 25-45</li>
            <li className="text-[#A1A1A1]">Lifestyle: Urban</li>
            <li className="text-[#A1A1A1]">Values: Sustainability</li>
            <li className="text-[#A1A1A1]">Activities: Yoga/fitness</li>
            <li className="text-[#A1A1A1]">Location: Metropolitan areas</li>
            <li className="text-[#A1A1A1]">
              Preferences: Eco-friendly products
            </li>
            <li className="text-[#A1A1A1]">Needs: Stylish yoga mats</li>
            <li className="text-[#A1A1A1]">Goals: Enhance wellness journey</li>
          </ul>
        </div>
      </form>
    </div>
  );
};

export default TargetAudience;
