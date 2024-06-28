import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import InputField from "../../components/inputField";
import { ServicesButton } from "./components";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setUserCardInfo } from "../../redux/slices/userInfo";
import { serviceNameSchema } from "../../schema";
import { Button } from "../../components/button";

const Services = ({ onClickNext, onClickBack }: ICommonProps) => {
  const dispatch = useAppDispatch();
  const userCard = useAppSelector((state) => state?.userCard);

  const [serviceName, setServiceName] = useState<string>(
    userCard?.serviceName ?? ""
  );
  const defaultValues: IServiceNameArray = {
    serviceNameArray: userCard?.serviceNameArray ?? [],
  };

  const {
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm<IServiceNameArray>({
    resolver: yupResolver(serviceNameSchema),
    defaultValues,
  });

  const onSubmit: SubmitHandler<IServiceNameArray> = (fromData) => {
    const { serviceNameArray } = fromData;

    const userCard = {
      serviceNameArray,
    };
    dispatch(setUserCardInfo(userCard));
    onClickNext?.();
  };
  const serviceNameArray = getValues("serviceNameArray");

  const onGoBack = () => {
    onClickBack?.();
    const userCard = {
      serviceNameArray,
    };
    dispatch(setUserCardInfo(userCard));
  };

  const handleEnterKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (serviceName.trim()) {
        setValue("serviceNameArray", [...serviceNameArray, serviceName]);
        setServiceName("");
      }
      e.preventDefault();
    }
  };

  const onClickItem = (index: number) => {
    const newArray = serviceNameArray.filter((_, idx) => idx !== index);
    setValue("serviceNameArray", newArray, { shouldValidate: true });
  };

  return (
    <div className="mx-auto flex w-1/2 items-center flex-col">
      <h2 className="text-center text-4xl my-8 font-extrabold text-[#282828]">
        Tell us About Your Products or Services
      </h2>

      <form
        className="mt-5 flex flex-col items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <InputField
            label="Product or Service"
            placeholder="Type and press Enter to add"
            onKeyDown={handleEnterKeyPress}
            error={
              serviceNameArray?.length < 1
                ? errors.serviceNameArray?.message
                : undefined
            }
            value={serviceName}
            onChange={(e: any) => setServiceName(e?.target?.value)}
          />

          <div className="flex flex-wrap gap-4 mt-5">
            {serviceNameArray?.map((name, index) => (
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
            Here are examples of Product or services, include these points for
            better results.
          </div>
          <ul className="list-disc mt-2 text-sm font-bold text-[#A1A1A1] leading-5 list-inside">
            <li className="text-[#A1A1A1]">Industry: Fitness and Wellness</li>
            <li className="text-[#A1A1A1]">
              Products/Services: High-quality, eco-friendly yoga mats and
              accessories
            </li>
            <li className="text-[#A1A1A1]">
              Unique Selling Proposition (USP): 100% biodegradable materials,
              stylish designs
            </li>
            <li className="text-[#A1A1A1]">
              Mission: To promote wellness and sustainability through
              eco-friendly fitness products
            </li>
            <li className="text-[#A1A1A1]">
              Vision: A healthier planet through mindful living
            </li>
            <li className="text-[#A1A1A1]">
              Core Values: Sustainability, quality, wellness, and customer
              satisfaction
            </li>
            <li className="text-[#A1A1A1]">
              Competitors: Manduka, Liforme, Gaiam
            </li>
          </ul>
        </div>
      </form>
    </div>
  );
};

export default Services;
