import { useState } from "react";
import { useNavigate } from "react-router-dom";

import CustomButton from "../../components/customButton";
import { HeaderLogo } from "../../components/headerLogo";
import { GOALS } from "../../config/paths";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { aboutCompanySchema } from "../../schema";
import { setUserCardInfo } from "../../redux/slices/userInfo";
import TextareaField from "../../components/textareaField";

const Competitors = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const userCard = useAppSelector((state) => state?.userCard);

  const [aboutCompany, setAboutCompany] = useState<string>(userCard?.aboutCompany ?? '');

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm<IAboutCompany>({
  //   resolver: yupResolver(aboutCompanySchema),
  // });

  // const onSubmit: SubmitHandler<ICompanyDetails> = (formData) => {
  //   console.log("formData------->", formData);

  //   // dispatch(setUserInfo(formData));
  //   // navigate(SERVICES);
  // };

  const onClickContinue = () => {
    const userCard = {
      aboutCompany,
    };
    dispatch(setUserCardInfo(userCard));
    navigate(GOALS)
  }


  const onGoBack = () => {
    const userCard = {
      aboutCompany,
    };
    dispatch(setUserCardInfo(userCard));
    navigate(-1)
  }


  return (
    <div className="max-w-470px mx-auto flex items-center flex-col h-screen font-sans">

      <HeaderLogo />

      <h2 className="text-black text-center text-3xl my-8 font-semibold">Why would someone choose this company over competitors?</h2>
      <div className="mt-5">
        <TextareaField
          label="About Company"
          placeholder='Type something about company'
          value={aboutCompany}
          onChange={(e: any) => setAboutCompany(e?.target?.value)}
          height={190}
          borderRadius={20}
        // error={'company name is required'} 

        />
      </div>

      <div className="mt-10 mb-10 flex gap-10 justify-center">
        <CustomButton borderWidth="0" bgColor="red" onClick={() => onGoBack()}>
          Go Back
        </CustomButton>

        <CustomButton borderWidth="0" bgColor="red" onClick={() => onClickContinue()}>
          {/* <CustomButton borderWidth="0" bgColor="blue" type="submit"> */}

          Continue
        </CustomButton>
      </div>

    </div>
  );
};

export default Competitors;
