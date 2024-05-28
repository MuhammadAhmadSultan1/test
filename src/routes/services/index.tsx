import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import CustomButton from "../../components/customButton";
import { HeaderLogo } from "../../components/headerLogo";
import InputField from "../../components/inputField";
import { ServicesButton } from "./components";
import { TARGETAUDIENCE } from "../../config/paths";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setUserCardInfo, } from "../../redux/slices/userInfo";
import { serviceNameSchema } from "../../schema";
import CustomStepper from "../../components/stepper";


const Services = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const userCard = useAppSelector((state) => state?.userCard);


  const [serviceName, setServiceName] = useState<string>(userCard?.serviceName ?? '')
  const [serviceNameArray, setServiceNameArray] = useState<string[]>(userCard?.serviceNameArray ?? []);

  const defaultValues: IServiceNameArray = { serviceNameArray: userCard?.serviceNameArray ?? [] };

  const {
    handleSubmit,
    formState: { errors },
  } = useForm<IServiceNameArray>({
    resolver: yupResolver(serviceNameSchema),
    defaultValues
  });

  const onSubmit: SubmitHandler<IServiceNameArray> = () => {
    console.log("called");

    const userCard = {
      serviceNameArray,
    };
    dispatch(setUserCardInfo(userCard));
    navigate(TARGETAUDIENCE)
  };

  const onGoBack = () => {
    // const userCard = {
    //   serviceName,
    // };
    // dispatch(setUserCardInfo(userCard));
    navigate(-1)
  }

  const handleEnterKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // console.log("getValues------>", getValues());

    if (e.key === 'Enter') {
      // const { serviceName } = getValues()
      if (serviceName) {
        setServiceNameArray([...serviceNameArray, serviceName]);
        setServiceName("")
        // setValue('serviceName', '')
      }
    }
  };

  return (
    <div className="max-w-[470px] mx-auto flex items-center flex-col">
      <HeaderLogo />
      <div>
        <CustomStepper activeStep={4} />
      </div>

      <h2 className="text-black text-center text-3xl my-8 font-semibold">Tell us about your products or services</h2>

      <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
        <InputField
          label="Product or service:"
          placeholder='Type product or service name'
          onKeyDown={handleEnterKeyPress}
          error={errors.serviceNameArray?.message}
          value={serviceName}
          onChange={(e: any) => setServiceName(e?.target?.value)}

        // register={register}
        // registerKey={'serviceName'}
        />

        <div className="flex flex-wrap gap-4 mt-5">
          {serviceNameArray?.map((name, index) => (
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
    </div >
  );
};

export default Services;
