import { useState } from "react";
import { useNavigate } from "react-router-dom";

import CustomButton from "../../components/customButton";
import { HeaderLogo } from "../../components/headerLogo";
import InputField from "../../components/inputField";
import { ServicesButton } from "./components";
import { COMPETITOR } from "../../config/paths";

import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setUserCardInfo } from "../../redux/slices/userInfo";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { targetAudienceSchema } from "../../schema";
import CustomStepper from "../../components/stepper";

const TargetAudience = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const userCard = useAppSelector((state) => state?.userCard);

  console.log({ userCard });



  const [targetAudience, setTargetAudience] = useState<string>(userCard?.targetAudience ?? '');
  const [targetAudienceArray, setTargetAudienceArray] = useState<string[]>(userCard?.targetAudienceArray ?? []);

  const defaultValues: ITargetAudienceArray = { targetAudienceArray: userCard?.targetAudienceArray ?? [] };



  const {
    handleSubmit,
    formState: { errors },
  } = useForm<ITargetAudienceArray>({
    resolver: yupResolver(targetAudienceSchema),
    defaultValues
  });

  const onSubmit: SubmitHandler<ITargetAudienceArray> = (formData) => {
    console.log("formData------->", formData);
    const userCard = {
      targetAudienceArray,
    };
    dispatch(setUserCardInfo(userCard));
    navigate(COMPETITOR)
  };

  const onGoBack = () => {
    // const userCard = {
    //   targetAudience,
    // };
    // dispatch(setUserCardInfo(userCard));
    navigate(-1)
  }

  const handleEnterKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (targetAudience) {
        setTargetAudienceArray([...targetAudienceArray, targetAudience]);
        setTargetAudience('');
      }
    }
  };


  return (
    <div className="max-w-[470px] mx-auto flex items-center flex-col h-screen font-sans">

      <HeaderLogo />
      <div>
        <CustomStepper activeStep={5} />
      </div>

      <h2 className="text-black text-center text-3xl my-8 font-semibold">Who is your target audience?</h2>

      <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
        <InputField
          label="Target audience:"
          placeholder='e.g. residential homeowners, commercial clients...'
          onKeyDown={handleEnterKeyPress}
          error={errors.targetAudienceArray?.message}
          value={targetAudience}
          onChange={(e: any) => setTargetAudience(e?.target?.value)}
        // register={register}
        // registerKey={'targetAudience'}
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
