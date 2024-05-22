import { useState } from "react";
import { useNavigate } from "react-router-dom";

import CustomButton from "../../components/customButton";
import { HeaderLogo } from "../../components/headerLogo";
import InputField from "../../components/inputField";
import { ServicesButton } from "./components";
import { TARGETAUDIENCE } from "../../config/paths";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setUserCardInfo, } from "../../redux/slices/userInfo";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { serviceNameSchema } from "../../schema";

const Services = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const userCard = useAppSelector((state) => state?.userCard);


  const [serviceName, setServiceName] = useState<string>(userCard?.serviceName ?? '')
  const [serviceNamesArray, setServiceNamesArray] = useState<string[]>([]);

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm<IServiceName>({
  //   resolver: yupResolver(serviceNameSchema),
  // });

  // console.log("errors---->", errors);

  const onClickContinue = () => {
    // const userCard = {
    //   serviceName: serviceNamesArray.join(', '), // Join service names into a single string
    // };
    const userCard = {
      serviceName,
    };
    dispatch(setUserCardInfo(userCard));
    navigate(TARGETAUDIENCE)
  }

  const onGoBack = () => {
    const userCard = {
      serviceName,
    };
    dispatch(setUserCardInfo(userCard));
    navigate(-1)
  }

  const handleEnterKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (serviceName) {
        setServiceNamesArray([...serviceNamesArray, serviceName]);
        setServiceName('');
      }
    }
  };

  return (
    <div className="max-w-[470px] mx-auto flex items-center flex-col">

      <HeaderLogo />

      <h2 className="text-black text-center text-3xl my-8 font-semibold">Tell us about your products or services</h2>
      <div className="mt-5">
        <InputField
          label="Product or service:"
          placeholder='Type product or service name'
          value={serviceName}
          onChange={(e: any) => setServiceName(e?.target?.value)}
          onKeyDown={handleEnterKeyPress}
        // error={'company name is required'} 
        />
      </div>

      <div className="flex flex-wrap gap-4 mt-5">
        {serviceNamesArray?.map((name, index) => (
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
    </div>
  );
};

export default Services;
