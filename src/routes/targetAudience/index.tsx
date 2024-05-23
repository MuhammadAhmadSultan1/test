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

const TargetAudience = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const userCard = useAppSelector((state) => state?.userCard);


  const [targetAudience, setTargetAudience] = useState<string>(userCard?.targetAudience ?? '');
  const [targetAudienceArray, setTargetAudienceArray] = useState<string[]>([]);


  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ITargetAudience>({
    resolver: yupResolver(targetAudienceSchema),
  });

  const onSubmit: SubmitHandler<ITargetAudience> = (formData) => {
    console.log("formData------->", formData);
    const userCard = {
      targetAudience,
    };
    dispatch(setUserCardInfo(userCard));
    navigate(COMPETITOR)
  };

  const onGoBack = () => {
    const userCard = {
      targetAudience,
    };
    dispatch(setUserCardInfo(userCard));
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

      <h2 className="text-black text-center text-3xl my-8 font-semibold">Who is your target audience?</h2>

      <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
        <InputField
          label="Target audience:"
          placeholder='e.g. residential homeowners, commercial clients...'
          onKeyDown={handleEnterKeyPress}
          error={errors.targetAudience?.message}
          register={register}
          registerKey={'targetAudience'}
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
