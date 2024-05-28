import { useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import InputField from '../../components/inputField';
import { HeaderLogo } from '../../components/headerLogo';
import CustomButton from '../../components/customButton';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setUserCardInfo, } from '../../redux/slices/userInfo';
import { websiteSchema } from '../../schema';
import { SERVICES } from '../../config/paths';
import CustomStepper from '../../components/stepper';

const Website = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const userCard = useAppSelector((state) => state?.userCard);

  const defaultValues: IWebsite = { website: userCard?.website ?? '' };


  console.log("userCard---->", userCard);


  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IWebsite>({
    resolver: yupResolver(websiteSchema),
    defaultValues
  });

  const onSubmit: SubmitHandler<IWebsite> = (formData) => {
    console.log("formData------->", formData);
    const { website } = formData
    const userCard = {
      website,
    };
    dispatch(setUserCardInfo(userCard));
    navigate(SERVICES)
  };


  const onGoBack = () => {
    console.log("");

    // const userCard = {
    //   website,
    // };
    // dispatch(setUserCardInfo(userCard));
    navigate(-1)
  }
  return (
    <div className="max-w-screen-sm mx-auto flex flex-col items-center h-screen">
      <HeaderLogo />
      <div>
        <CustomStepper activeStep={3} />
      </div>

      <h2 className="text-black text-center text-3xl my-8 font-semibold">Website</h2>

      <form className="mt-10" onSubmit={handleSubmit(onSubmit)}>

        <InputField
          label="Website"
          placeholder="Enter Website"
          error={errors.website?.message}
          register={register}
          registerKey={'website'}
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

export default Website;