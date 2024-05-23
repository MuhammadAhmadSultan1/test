import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import InputField from '../../components/inputField';
import { HeaderLogo } from '../../components/headerLogo';
import CustomButton from '../../components/customButton';
import { SERVICES, } from '../../config/paths';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setUserCardInfo, } from '../../redux/slices/userInfo';
import { companyDetailsSchema } from '../../schema';

const CompanyDetails = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const userCard = useAppSelector((state) => state?.userCard);

  const [companyName] = useState<string>(userCard?.companyName ?? '');
  const [website] = useState(userCard?.website ?? '');
  const [clientInitials] = useState(userCard?.clientInitials ?? '');

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ICompanyDetails>({
    resolver: yupResolver(companyDetailsSchema),
  });

  const onSubmit: SubmitHandler<ICompanyDetails> = (formData) => {
    console.log("formData------->", formData);
    const userCard = {
      companyName,
      website,
      clientInitials,
    };
    dispatch(setUserCardInfo(userCard));
    navigate(SERVICES)
  };


  const onGoBack = () => {
    const userCard = {
      companyName,
      website,
      clientInitials,
    };
    dispatch(setUserCardInfo(userCard));
    navigate(-1)
  }
  return (
    <div className="max-w-screen-sm mx-auto flex flex-col items-center h-screen">
      <HeaderLogo />

      <h2 className="text-black text-center text-3xl my-8 font-semibold">Company details</h2>

      <form className="mt-10" onSubmit={handleSubmit(onSubmit)}>

        <InputField
          label="Company Name"
          placeholder="Enter company name"
          // value={companyName}
          // onChange={(e: any) => setCompanyName(e?.target?.value)}
          error={errors.companyName?.message}
          register={register}
          registerKey={'companyName'}
        />

        <InputField
          label="Website"
          placeholder="Enter website URL"
          // value={website}
          // onChange={(e: any) => setWebsite(e?.target?.value)}
          registerKey={'website'}
          register={register}
          error={errors.website?.message}

        />

        <InputField
          label="Client's Initials"
          placeholder="Enter Initials"
          // value={clientInitials}
          // onChange={(e: any) => setClientInitials(e?.target?.value)}
          registerKey={'clientInitials'}
          register={register}
          error={errors.clientInitials?.message}

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