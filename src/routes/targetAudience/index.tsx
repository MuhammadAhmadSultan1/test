import { useState } from "react";
import { useNavigate } from "react-router-dom";

import CustomButton from "../../components/customButton";
import { HeaderLogo } from "../../components/headerLogo";
import InputField from "../../components/inputField";
import { ServicesButton } from "./components";
import { COMPETITOR } from "../../config/paths";

import { useAppDispatch, useAppSelector } from "../../redux/hooks";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { useForm } from "react-hook-form";
// import { targetAudienceSchema } from "../../schema";
import { setUserCardInfo } from "../../redux/slices/userInfo";

const TargetAudience = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const userCard = useAppSelector((state) => state?.userCard);


  const [targetAudience, setTargetAudience] = useState<string>(userCard?.targetAudience ?? '');
  const [targetAudienceArray, setTargetAudienceArray] = useState<string[]>([]);


  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm<ITargetAudience>({
  //   resolver: yupResolver(targetAudienceSchema),
  // });

  // console.log("errors---->", errors);

  const onClickContinue = () => {
    const userCard = {
      targetAudience,
    };
    dispatch(setUserCardInfo(userCard));
    navigate(COMPETITOR)
  }


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
      <div className="mt-5">
        <InputField
          label="Target audience:"
          placeholder='e.g. residential homeowners, commercial clients...'
          value={targetAudience}
          onChange={(e: any) => setTargetAudience(e?.target?.value)}
          onKeyDown={handleEnterKeyPress}
        // error={'company name is required'} 
        />
      </div>

      <div className="flex flex-wrap gap-4 mt-5">
        {targetAudienceArray?.map((name, index) => (
          <ServicesButton key={index} name={name} />
        ))}
      </div>

      <div className="mt-10 mb-10 flex gap-10 justify-center">
        <CustomButton borderWidth="0" bgColor="red" onClick={() => onGoBack()}>
          Go Back
        </CustomButton>

        <CustomButton borderWidth="0" bgColor="red" onClick={() => onClickContinue()}>
          Continue
        </CustomButton>
      </div>

      {/* <div className="mt-5">
        <h4 className=" text-black">Here is an example of target audience, include these points for better results.</h4>
      </div> */}
    </div>
  );
};

export default TargetAudience;
