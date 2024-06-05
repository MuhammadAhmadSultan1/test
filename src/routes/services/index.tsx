import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import CustomButton from "../../components/customButton";
import InputField from "../../components/inputField";
import { ServicesButton } from "./components";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setUserCardInfo, } from "../../redux/slices/userInfo";
import { serviceNameSchema } from "../../schema";
import { Button } from "../../components/button";


const Services = ({ onClickNext, onClickBack }: ICommonProps) => {
  const dispatch = useAppDispatch();
  const userCard = useAppSelector((state) => state?.userCard);


  const [serviceName, setServiceName] = useState<string>(userCard?.serviceName ?? '')

  // const [serviceNameArray, setServiceNameArray] = useState<string[]>(userCard?.serviceNameArray ?? []);

  const defaultValues: IServiceNameArray = { serviceNameArray: userCard?.serviceNameArray ?? [] };


  const {
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm<IServiceNameArray>({
    resolver: yupResolver(serviceNameSchema),
    defaultValues
  });

  const onSubmit: SubmitHandler<IServiceNameArray> = (fromData) => {
    const { serviceNameArray } = fromData;

    const userCard = {
      serviceNameArray,
    };
    dispatch(setUserCardInfo(userCard));
    onClickNext?.();

  };
  const serviceNameArray = getValues('serviceNameArray');

  const onGoBack = () => {

    onClickBack?.()
    const userCard = {
      serviceNameArray,
    };
    dispatch(setUserCardInfo(userCard));
  }

  const handleEnterKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (serviceName.trim()) {
        setValue('serviceNameArray', [...serviceNameArray, serviceName])
        setServiceName("")
      }
      e.preventDefault();
    }
  };

  const onClickItem = (index: Number) => {
    const newArray = serviceNameArray.filter((item, idx) => idx !== index);
    setValue('serviceNameArray', newArray, { shouldValidate: true, })
  }

  return (
    <div className="max-w-[470px] mx-auto flex items-center flex-col">
      <h2 className="text-black text-center text-3xl my-8 font-semibold">Tell us about your products or services</h2>

      <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
        <InputField
          label="Product or service:"
          placeholder='Type product or service name'
          onKeyDown={handleEnterKeyPress}
          error={serviceNameArray?.length < 1 ? errors.serviceNameArray?.message : undefined}
          value={serviceName}
          onChange={(e: any) => setServiceName(e?.target?.value)}
        />

        <div className="flex flex-wrap gap-4 mt-5">
          {serviceNameArray?.map((name, index) => (
            <ServicesButton onClick={() => onClickItem(index)} key={index} name={name} />
          ))}
        </div>

        <div className="mt-10 mb-10 flex gap-10 justify-center">
          <Button label="Go Back" varient="outlined" attributes={{ onClick: onGoBack }} />
          <Button label="Continue" varient="primary" attributes={{ type: 'submit' }} />
        </div>

      </form>
    </div >
  );
};

export default Services;
