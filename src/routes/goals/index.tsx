import { useState } from "react";
import { Oval } from "react-loader-spinner";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";

import CustomButton from "../../components/customButton";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setUserCardInfo } from "../../redux/slices/userInfo";
import TextareaField from "../../components/textareaField";
import { goalSchema } from "../../schema";

const Goals = ({ }: ICommonProps) => {
  const dispatch = useAppDispatch();
  const userCard = useAppSelector((state) => state?.userCard);
  const defaultValues: IGoals = { goals: userCard?.goals ?? '' };

  const [loading, setLoading] = useState<boolean>(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IGoals>({
    resolver: yupResolver(goalSchema),
    defaultValues
  });

  const onSubmit: SubmitHandler<IGoals> = (formData) => {
    const { goals } = formData
    const userCard = {
      goals,
    };
    dispatch(setUserCardInfo(userCard));
    setLoading(true)
  };


  const onGoBack = () => {
    // const userCard = {
    //   goals,
    // };
    // dispatch(setUserCardInfo(userCard));
    // navigate(-1)
  }


  return (
    <div className="max-w-470px mx-auto flex items-center flex-col h-screen font-sans mt-0">

      {!loading ? <>
        <h2 className="text-black text-center text-3xl my-8 font-semibold">What is the goal of this merchandise you are purchasing?</h2>
        <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>

          <TextareaField
            label="Your Goals"
            placeholder='Type your goals here'
            height={190}
            borderRadius={20}
            error={errors.goals?.message}
            register={register}
            registerKey={'goals'}
          />

          <div className="mt-10 mb-10 flex gap-10 justify-center">
            <CustomButton borderWidth="0" bgColor="red" onClick={() => onGoBack()}>
              Go Back
            </CustomButton>

            <CustomButton borderWidth="0" bgColor="blue" type='submit'>
              Continue
            </CustomButton>
          </div>
        </form>
      </> :
        <>
          <div className="mt-40">
            <Oval
              visible={true}
              height="120"
              width="120"
              color="#0343DF"
              secondaryColor="#EFEFEF"
              ariaLabel="oval-loading"
              wrapperClass=""
              strokeWidth={3}
            />
          </div>

          <h2 className="text-black text-center text-4xl my-4  font-medium mt-40">Preparing your design</h2>
          <h3 className="text-[#A7A7A7] text-center text-base font-normal">Please wait we are working on your design</h3>
        </>
      }
    </div >
  );
};

export default Goals;
