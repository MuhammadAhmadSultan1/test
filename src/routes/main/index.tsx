import { useState } from "react";

import { HeaderLogo } from "../../components/headerLogo";
import CustomStepper from "../../components/stepper";
import UploadLogo from "../uploadLogo";
import CompanyDetails from "../companyDetails";
import Website from "../website";
import ClientName from "../clientName";
import Address from "../address";
import Designation from "../designation";
import UserEmail from "../email";
import Services from "../services";
import TargetAudience from "../targetAudience";
import Competitors from "../competitors";
import Goals from "../goals";
import { Templates } from "../templates";
import { Variations } from "../variations";
import { CustomizeTemplate } from "../customizeTemplate";
import PhoneNumber from "../phoneNumber";

const Main = () => {
  // const navigate = useNavigate();
  // const dispatch = useAppDispatch();
  const [currentStep, setCurrentStep] = useState<number>(0);

  const onClickNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const onClickBack = () => {
    setCurrentStep(currentStep - 1);
  };
  // max-w-screen-sm
  return (
    <div className=" mx-auto flex flex-col items-center h-screen container ">
      <HeaderLogo />
      <div>
        {currentStep < 12 && <CustomStepper activeStep={currentStep} />}
      </div>

      {currentStep === 0 && (
        <UploadLogo onClickNext={onClickNext} onClickBack={onClickBack} />
      )}
      {currentStep === 1 && (
        <CompanyDetails onClickNext={onClickNext} onClickBack={onClickBack} />
      )}
      {currentStep === 2 && (
        <Website onClickNext={onClickNext} onClickBack={onClickBack} />
      )}
      {currentStep === 3 && (
        <ClientName onClickNext={onClickNext} onClickBack={onClickBack} />
      )}
      {currentStep === 4 && (
        <PhoneNumber onClickNext={onClickNext} onClickBack={onClickBack} />
      )}
      {currentStep === 5 && (
        <Address onClickNext={onClickNext} onClickBack={onClickBack} />
      )}
      {currentStep === 6 && (
        <Designation onClickNext={onClickNext} onClickBack={onClickBack} />
      )}
      {currentStep === 7 && (
        <UserEmail onClickNext={onClickNext} onClickBack={onClickBack} />
      )}
      {currentStep === 8 && (
        <Services onClickNext={onClickNext} onClickBack={onClickBack} />
      )}
      {currentStep === 9 && (
        <TargetAudience onClickNext={onClickNext} onClickBack={onClickBack} />
      )}
      {currentStep === 10 && (
        <Competitors onClickNext={onClickNext} onClickBack={onClickBack} />
      )}
      {currentStep === 11 && (
        <Goals onClickNext={onClickNext} onClickBack={onClickBack} />
      )}
      {currentStep === 12 && (
        <Templates onClickNext={onClickNext} onClickBack={onClickBack} />
      )}
      {currentStep === 13 && (
        <Variations onClickNext={onClickNext} onClickBack={onClickBack} />
      )}
      {currentStep === 14 && <CustomizeTemplate />}
    </div>
  );
};
export default Main;
