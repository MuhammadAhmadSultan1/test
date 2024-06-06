import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import InputField from '../../components/inputField';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setUserCardInfo, } from '../../redux/slices/userInfo';
import { websiteSchema } from '../../schema';
import { Button } from '../../components/button';

const Website = ({ onClickNext, onClickBack }: ICommonProps) => {
  const dispatch = useAppDispatch();
  const userCard = useAppSelector((state) => state?.userCard);

  const defaultValues: IWebsite = { website: userCard?.website ?? '' };

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IWebsite>({
    resolver: yupResolver(websiteSchema),
    defaultValues
  });

  const onSubmit: SubmitHandler<IWebsite> = (formData) => {
    const { website } = formData
    const userCard = {
      website,
    };
    dispatch(setUserCardInfo(userCard));
    onClickNext?.();

  };


  const onGoBack = () => {
    onClickBack?.()
  }
  return (
    <div className="max-w-screen-sm mx-auto flex flex-col items-center h-screen">
      <h2 className="text-black text-center text-3xl my-8 font-semibold">Company Details</h2>

      <form className="mt-10" onSubmit={handleSubmit(onSubmit)}>
        <InputField
          label="Website"
          placeholder="Enter Website"
          error={errors.website?.message}
          register={register}
          registerKey={'website'}
          prefix="https://"
        />

        <div className="mt-10 mb-10 flex gap-10 justify-center">

          <Button label="Go Back" varient="outlined" attributes={{ onClick: onGoBack }} />
          <Button label="Continue" varient="primary" attributes={{ type: 'submit' }} />
        </div>
      </form>
    </div>
  );
};

export default Website;