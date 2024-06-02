import { useState } from "react";
import { Oval } from "react-loader-spinner";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";

import CustomButton from "../../components/customButton";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setUserCardInfo } from "../../redux/slices/userInfo";
import TextareaField from "../../components/textareaField";
import { goalSchema } from "../../schema";
import { useQuestionnaireAddMutation } from "../../services/form";
import { Button } from "../../components/button";
import { Templates } from "../templates";

const Goals = ({ onClickBack }: ICommonProps) => {
  const dispatch = useAppDispatch();
  const userCard = useAppSelector((state) => state?.userCard);
  const defaultValues: IGoals = { goals: userCard?.goals ?? '' };

  const [questionnaireAdd, { error }] = useQuestionnaireAddMutation();

  const [formLoading, setFormLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [showTemplates, setShowTemplates] = useState<boolean>(false);
  const [showAboutCompany, setShowAboutCompany] = useState<boolean>(true);




  const [loading, setLoading] = useState<boolean>(false);


  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors },
  } = useForm<IGoals>({
    resolver: yupResolver(goalSchema),
    defaultValues
  });

  const onSubmit: SubmitHandler<IGoals> = (formData) => {
    setFormLoading(true)
    const { goals } = formData
    const userCard = {
      goals,
    };
    dispatch(setUserCardInfo(userCard));
    submitForm();

  };

  const submitForm = () => {
    const data = {
      'companyName': userCard?.companyName,
      'companyWebsite': userCard?.website,
      'companyEmail': userCard?.email,
      'productOrService': userCard?.serviceNameArray?.join(','),
      'targetAudience': userCard?.targetAudienceArray?.join(','),
      'merchandiseGoal': getValues('goals'),
      'sessionId': userCard?.sessionId,
      "address": userCard?.address,
      "designation": userCard?.designation,
      "aboutCompany": userCard?.aboutCompany,
      "userId": 0
    }
    console.log({ data });

    questionnaireAdd(data).then((result) => {
      console.log("result----->", result);

      if (result?.data) {
        setLoading(true)
        setTimeout(() => {
          showAllTemplates()
        }, 3000);
        // dispatch(setUserCardInfo(userCard));
      } else {
        setFormLoading(false)
        console.log("error----->", error);
        setErrorMessage('Something went wrong');
      }
    });
  }


  const onGoBack = () => {

    onClickBack?.()
  }

  const showAllTemplates = () => {
    let userCard = {
      showHeaderAndStepper: false
    }
    dispatch(setUserCardInfo(userCard));
    setLoading(false)
    setShowAboutCompany(false)
    setShowTemplates(true)
  }

  const onBackClick = () => {
    let userCard = {
      showHeaderAndStepper: true
    }
    dispatch(setUserCardInfo(userCard));
    setLoading(false)
    setShowTemplates(false)
    setShowAboutCompany(true)
  }


  return (
    <>
      {!showTemplates &&
        <div className="max-w-470px mx-auto flex items-center flex-col h-screen font-sans mt-0">

          {!loading && showAboutCompany ? <>
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

              {errorMessage && <p className="text-red-500 mb-3">{errorMessage}</p>}

              <div className="mt-10 mb-10 flex gap-10 justify-center">
                <Button label="Back" varient="outlined" attributes={{ onClick: onGoBack }} />
                <Button label="Continue" varient="primary" isLoading={formLoading} attributes={{ type: 'submit' }} />
              </div>
            </form>
          </> :
            <>
              {
                showAboutCompany &&
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
            </>
          }

        </div >}
      {showTemplates && (<Templates onClickBack={onBackClick} />)}
    </>
  );
};

export default Goals;
