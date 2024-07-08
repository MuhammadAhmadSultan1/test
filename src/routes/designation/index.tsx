import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import InputField from "../../components/inputField";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setUserCardInfo } from "../../redux/slices/userInfo";
import { designationSchema } from "../../schema";
import { Button } from "../../components/button";

const Designation = ({ onClickNext, onClickBack }: ICommonProps) => {
  const dispatch = useAppDispatch();
  const userCard = useAppSelector((state) => state?.userCard);
  const defaultValues: IDesignation = {
    designation: userCard?.designation ?? "",
  };

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IDesignation>({
    resolver: yupResolver(designationSchema),
    defaultValues,
  });

  const onSubmit: SubmitHandler<IDesignation> = (formData) => {
    const { designation } = formData;
    const userCard = {
      designation,
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
      <h2 className="text-center text-4xl my-8 font-extrabold text-[#282828]">
        Company Details
      </h2>

      <form className="mt-10" onSubmit={handleSubmit(onSubmit)}>
        <InputField
          label="Title Or Position Within Company"
          placeholder="Enter Title Or Position Within Company"
          error={errors?.designation?.message}
          register={register}
          registerKey={"designation"}
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

export default Designation;
