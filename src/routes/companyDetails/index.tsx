import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import InputField from '../../components/inputField';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setUserCardInfo, } from '../../redux/slices/userInfo';
import { companyDetailsSchema } from '../../schema';
import { Button } from '../../components/button';


const CompanyDetails = ({ onClickNext, onClickBack }: ICommonProps) => {
  const dispatch = useAppDispatch();
  const userCard = useAppSelector((state) => state?.userCard);


  const defaultValues: ICompanyDetails = { companyName: userCard?.companyName ?? '' };

  console.log("userCard------>", userCard);


  const {
    handleSubmit,
    register,
    getValues,
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
    onClickNext?.();
  };


  const onGoBack = () => {
    const companyName = getValues('companyName');
    console.log({ companyName });
    const userCard = {
      companyName,
    };
    dispatch(setUserCardInfo(userCard));
    onClickBack?.()
  }
  return (
    <div className="max-w-screen-sm mx-auto flex flex-col items-center h-screen">

      <h2 className="text-black text-center text-3xl my-8 font-semibold">Company Details</h2>
      <form className="mt-10" onSubmit={handleSubmit(onSubmit)}>
        <InputField
          label="Company Name"
          placeholder="Enter company name"
          error={errors.companyName?.message}
          register={register}
          registerKey={'companyName'}
        />

        <div className="mt-10 mb-10 flex gap-10 justify-center">
          <Button label="Go Back" varient="outlined" attributes={{ onClick: onGoBack }} />
          <Button label="Continue" varient="primary" attributes={{ type: 'submit' }} />
        </div>
      </form>
    </div>
  );
};

export default CompanyDetails;