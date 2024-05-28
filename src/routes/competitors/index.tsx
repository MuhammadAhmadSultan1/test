import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import CustomButton from "../../components/customButton";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setUserCardInfo } from "../../redux/slices/userInfo";
import TextareaField from "../../components/textareaField";
import { aboutCompanySchema } from "../../schema";

const Competitors = ({ onClickNext, onClickBack }: ICommonProps) => {
  const dispatch = useAppDispatch();
  const userCard = useAppSelector((state) => state?.userCard);
  const defaultValues: IAboutCompany = { aboutCompany: userCard?.aboutCompany ?? '' };


  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IAboutCompany>({
    resolver: yupResolver(aboutCompanySchema),
    defaultValues
  });

  const onSubmit: SubmitHandler<IAboutCompany> = (formData) => {
    const { aboutCompany } = formData
    const userCard = {
      aboutCompany,
    };
    dispatch(setUserCardInfo(userCard));
    onClickNext?.();
  };

  const onGoBack = () => {
    onClickBack?.()
    // const userCard = {
    //   aboutCompany,
    // };
    // dispatch(setUserCardInfo(userCard));

  }


  return (
    <div className="max-w-470px mx-auto flex items-center flex-col h-screen font-sans">
      <h2 className="text-black text-center text-3xl my-8 font-semibold">Why would someone choose this company over competitors?</h2>

      <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
        <TextareaField
          label="About Company"
          placeholder='Type something about company'
          height={190}
          borderRadius={20}
          error={errors.aboutCompany?.message}
          register={register}
          registerKey='aboutCompany'
        />

        <div className="mt-10 mb-10 flex gap-10 justify-center">
          <CustomButton borderWidth="0" bgColor="red" onClick={() => onGoBack()}>
            Go Back
          </CustomButton>

          <CustomButton borderWidth="0" bgColor="blue" type="submit">
            Continue
          </CustomButton>
        </div>

      </form>
    </div>
  );
};

export default Competitors;
