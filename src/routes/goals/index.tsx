import { useState } from "react";
import { useNavigate } from "react-router-dom";

import CustomButton from "../../components/customButton";
import { HeaderLogo } from "../../components/headerLogo";
// import InputField from "../../components/inputField";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { goalSchema } from "../../schema";
import { setUserCardInfo } from "../../redux/slices/userInfo";
import { Oval } from "react-loader-spinner";
import TextareaField from "../../components/textareaField";

const Goals = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const userCard = useAppSelector((state) => state?.userCard);

  const [goals, setGoals] = useState<string>(userCard?.goals ?? '');
  const [loading, setLoading] = useState<boolean>(false);

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm<IGoals>({
  //   resolver: yupResolver(goalSchema),
  // });

  // console.log("errors---->", errors);

  const onClickContinue = () => {
    const userCard = {
      goals,
    };
    dispatch(setUserCardInfo(userCard));
    setLoading(true)
    // navigate(GOALS)
  }

  const onGoBack = () => {
    const userCard = {
      goals,
    };
    dispatch(setUserCardInfo(userCard));
    navigate(-1)
  }


  return (
    <div className="max-w-470px mx-auto flex items-center flex-col h-screen font-sans mt-0">

      <HeaderLogo />

      {!loading ? <>
        <h2 className="text-black text-center text-3xl my-8 font-semibold">What is the goal of this merchandise you are purchasing?</h2>
        <div className="mt-5">
          <TextareaField
            label="Your Goals"
            placeholder='Type your goals here'
            value={goals}
            onChange={(e: any) => setGoals(e.target.value)}
            height={190}
            borderRadius={20}
          // error={'company name is required'} 
          />
        </div>

        <div className="mt-10 mb-10 flex gap-10 justify-center">
          <CustomButton borderWidth="0" bgColor="red" onClick={() => onGoBack()}>
            Go Back
          </CustomButton>

          <CustomButton borderWidth="0" bgColor="red" onClick={() => onClickContinue()}>
            Continue
          </CustomButton>
        </div>
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
