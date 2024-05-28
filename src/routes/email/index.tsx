import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import InputField from '../../components/inputField';
import CustomButton from '../../components/customButton';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setUserCardInfo, } from '../../redux/slices/userInfo';
import { emailSchema } from '../../schema';

const UserEmail = ({ onClickNext, onClickBack }: ICommonProps) => {
  const dispatch = useAppDispatch();
  const userCard = useAppSelector((state) => state?.userCard);
  const defaultValues: IEmail = { email: userCard?.email ?? '' };

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IEmail>({
    resolver: yupResolver(emailSchema),
    defaultValues
  });

  const onSubmit: SubmitHandler<IEmail> = (formData) => {
    const { email } = formData
    const userCard = {
      email,
    };
    dispatch(setUserCardInfo(userCard));
    onClickNext?.();
  };

  const onGoBack = () => {
    onClickBack?.()

    // const userCard = {
    //   email,
    // };
    // dispatch(setUserCardInfo(userCard));
  }
  return (
    <div className="max-w-screen-sm mx-auto flex flex-col items-center h-screen">
      <h2 className="text-black text-center text-3xl my-8 font-semibold">Company Details</h2>

      <form className="mt-10" onSubmit={handleSubmit(onSubmit)}>
        <InputField
          label="Email"
          placeholder="Enter Email"
          error={errors.email?.message}
          register={register}
          registerKey={'email'}
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
    </div>
  );
};

export default UserEmail;