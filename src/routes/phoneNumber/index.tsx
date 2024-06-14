import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import InputField from "../../components/inputField";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setUserCardInfo } from "../../redux/slices/userInfo";
import { phoneNumberSchema } from "../../schema";
import { Button } from "../../components/button";

const PhoneNumber = ({ onClickNext, onClickBack }: ICommonProps) => {
  const dispatch = useAppDispatch();
  const userCard = useAppSelector((state) => state?.userCard);

  const defaultValues: IPhoneNumber = { phoneNumber: userCard?.phone ?? "" };

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IPhoneNumber>({
    resolver: yupResolver(phoneNumberSchema),
    defaultValues,
  });

  const onSubmit: SubmitHandler<IPhoneNumber> = (formData) => {
    const { phoneNumber } = formData;
    const userCard = {
      phone: phoneNumber,
    };
    dispatch(setUserCardInfo(userCard));
    onClickNext?.();
  };

  const onGoBack = () => {
    onClickBack?.();

    // const userCard = {
    //   email,
    // };
    // dispatch(setUserCardInfo(userCard));
  };
  return (
    <div className="max-w-screen-sm mx-auto flex flex-col items-center h-screen">
      <h2 className="text-black text-center text-3xl my-8 font-semibold">
        Company Details
      </h2>

      <form className="mt-10" onSubmit={handleSubmit(onSubmit)}>
        <InputField
          label="Phone Number"
          placeholder="Enter Phone number"
          error={errors.phoneNumber?.message}
          register={register}
          registerKey={"phoneNumber"}
        />

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
      </form>
    </div>
  );
};

export default PhoneNumber;
