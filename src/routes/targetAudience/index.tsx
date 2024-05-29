import { useState } from "react";

import CustomButton from "../../components/customButton";
import InputField from "../../components/inputField";
import { ServicesButton } from "./components";

import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setUserCardInfo } from "../../redux/slices/userInfo";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { targetAudienceSchema } from "../../schema";

const TargetAudience = ({ onClickNext, onClickBack }: ICommonProps) => {
  const dispatch = useAppDispatch();
  const userCard = useAppSelector((state) => state?.userCard);

  const [targetAudience, setTargetAudience] = useState<string>(userCard?.targetAudience ?? '');
  // const [targetAudienceArray, setTargetAudienceArray] = useState<string[]>(userCard?.targetAudienceArray ?? []);
  const defaultValues: ITargetAudienceArray = { targetAudienceArray: userCard?.targetAudienceArray ?? [] };

  const {
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm<ITargetAudienceArray>({
    resolver: yupResolver(targetAudienceSchema),
    defaultValues
  });

  const onSubmit: SubmitHandler<ITargetAudienceArray> = (fromData) => {
    const { targetAudienceArray } = fromData;
    const userCard = {
      targetAudienceArray,
    };
    dispatch(setUserCardInfo(userCard));
    onClickNext?.();
  };
  const targetAudienceArray = getValues('targetAudienceArray');


  const onGoBack = () => {
    onClickBack?.()
    // const userCard = {
    //   targetAudience,

    // };
    // dispatch(setUserCardInfo(userCard));
  }

  const handleEnterKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (targetAudience) {
        setValue('targetAudienceArray', [...targetAudienceArray, targetAudience]);
        setTargetAudience('');
      }
      e.preventDefault();
    }
  };


  return (
    <div className="max-w-[470px] mx-auto flex items-center flex-col h-screen font-sans">
      <h2 className="text-black text-center text-3xl my-8 font-semibold">Who is your target audience?</h2>

      <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
        <InputField
          label="Target audience:"
          placeholder='e.g. residential homeowners, commercial clients...'
          onKeyDown={handleEnterKeyPress}
          error={targetAudienceArray?.length < 1 ? errors.targetAudienceArray?.message : undefined}
          value={targetAudience}
          onChange={(e: any) => setTargetAudience(e?.target?.value)}
        />
        <div className="flex flex-wrap gap-4 mt-5">
          {targetAudienceArray?.map((name, index) => (
            <ServicesButton key={index} name={name} />
          ))}
        </div>

        <div className="mt-10 mb-10 flex gap-10 justify-center">
          <CustomButton borderWidth="0" bgColor="red" onClick={() => onGoBack()}>
            Go Back
          </CustomButton>

          <CustomButton borderWidth="0" bgColor="blue" type='submit'>
            Continue
          </CustomButton>
        </div>

      </form>
    </div>
  );
};

export default TargetAudience;
