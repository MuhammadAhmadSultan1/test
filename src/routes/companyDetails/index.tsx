import { useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import InputField from '../../components/inputField';
import { HeaderLogo } from '../../components/headerLogo';
import CustomButton from '../../components/customButton';
import { EMAIL, } from '../../config/paths';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setUserCardInfo, } from '../../redux/slices/userInfo';
import { companyDetailsSchema } from '../../schema';
import CustomStepper from '../../components/stepper';


const CompanyDetails = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const userCard = useAppSelector((state) => state?.userCard);


  const defaultValues: ICompanyDetails = { companyName: userCard?.companyName ?? '' };

  console.log("userCard---->", userCard);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ICompanyDetails>({
    resolver: yupResolver(companyDetailsSchema),
    defaultValues,
  });

  const onSubmit: SubmitHandler<ICompanyDetails> = (formData) => {
    const { companyName } = formData
    const userCard = {
      companyName,
    };
    dispatch(setUserCardInfo(userCard));
    navigate(EMAIL)
  };


  const onGoBack = () => {
    // const userCard = {
    //   companyName,
    // };
    // dispatch(setUserCardInfo(userCard));
    navigate(-1)
  }
  return (
    <div className="max-w-screen-sm mx-auto flex flex-col items-center h-screen">
      <HeaderLogo />
      <div>
        <CustomStepper activeStep={1} />
      </div>
      <h2 className="text-black text-center text-3xl my-8 font-semibold">Company Name</h2>

      <form className="mt-10" onSubmit={handleSubmit(onSubmit)}>

        <InputField
          label="Company Name"
          placeholder="Enter company name"
          error={errors.companyName?.message}
          register={register}
          registerKey={'companyName'}
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

export default CompanyDetails;