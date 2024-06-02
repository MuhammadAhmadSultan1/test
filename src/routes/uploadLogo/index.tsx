import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

import uploadImage from "../../assets/upload.png";
import { useAppDispatch, useAppSelector, } from "../../redux/hooks";
import { setUserCardInfo } from "../../redux/slices/userInfo";
import { useUserSessionMutation } from "../../services/session";
import { useUploadLogoMutation } from "../../services/general";
import { Button } from "../../components/button";
import CustomButton from "../../components/customButton";


const UploadLogo = ({ onClickNext }: ICommonProps) => {
  const dispatch = useAppDispatch();
  const userCard = useAppSelector((state) => state?.userCard);

  const [userSession, { }] = useUserSessionMutation();
  const [uploadLogo, { error }] = useUploadLogoMutation();


  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [sessionIdLocal, setSessionIdLocal] = useState<string>('');


  useEffect(() => {
    getSessionToken();
    cleatAllStates();
  }, [])

  const cleatAllStates = () => {
    const userCard = {
      companyName: '',
      email: "",
      website: "",
      clientInitials: "",
      serviceName: "",
      serviceNameArray: [],
      targetAudience: "",
      targetAudienceArray: [],
      aboutCompany: "",
      goals: "",
      logo: "",
      sessionId: "",
      logoURL: "",
      colors: [],
      address: "",
      clientName: "",
      designation: "",
      showHeaderAndStepper: true
    };
    dispatch(setUserCardInfo(userCard));

  }

  const getSessionToken = () => {
    let data = {}
    userSession(data).then((result) => {
      console.log("result?.data?.content----->", result?.data?.content);
      if (result) {
        const userCard = {
          sessionId: result?.data?.content?.sessionId,
        };
        setSessionIdLocal(result?.data?.content?.sessionId ?? '')
        dispatch(setUserCardInfo(userCard));
      } else {
        console.log("error getting session Token  ----->", error);
      }
    });
  }


  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    if (file && (file.type === 'image/png' || file.type === 'image/jpeg' || file.type === 'image/jpg')) {

      if (file.size > 10 * 1024 * 1024) {
        setErrorMessage('File size must be less than 10 MB');
        setSelectedFile(null);
        return;
      }
      // setFileName(file?.name)
      setSelectedFile(file);
      setErrorMessage('')

    } else {
      if (selectedFile) return
      setErrorMessage('Please select a valid image file (png, jpg, jpeg)');
      setSelectedFile(null);
    }
  };

  const handleImageClick = () => {
    (document.getElementById('fileInput') as HTMLInputElement).click();
  };

  const handleContinue = () => {
    if (selectedFile) {
      setLoading(true)
      const formData = new FormData();
      formData.append('sessionId', sessionIdLocal);
      formData.append('logoAttachment', selectedFile);

      uploadLogo(formData).then((result) => {
        // console.log("uploadLogo----->", result);

        if (result?.data) {
          const userCard = {
            logoURL: result?.data?.content?.logoUrl,
            colors: result?.data?.colors
          };
          dispatch(setUserCardInfo(userCard));
          setLoading(false)
          onClickNext?.();
        } else {
          setLoading(false)
          console.log("error----->", error);
          setErrorMessage('Something went wrong');
        }
      });
    } else {
      setErrorMessage("Logo is required");
    }
  };
  return (
    <div className="max-w-470px mx-auto flex items-center flex-col h-screen font-sans">

      <h2 className="text-black text-center text-3xl my-8 font-semibold">Upload your logo</h2>
      <div className="max-w-566 max-h-224 bg-gray-100 flex justify-center items-center flex-col rounded-3xl">
        <img
          className="object-cover cursor-pointer"
          src={uploadImage}
          alt="Upload Icon"
          style={{ width: '58px', height: '50.39px', marginTop: 40, }}
          onClick={handleImageClick}
        />
        <h4 className='mt-5 text-20px text-gray-600  font-semibold '>   {selectedFile ? selectedFile?.name : 'Choose file'}</h4>

        <h4 className='mt-6 text-14px text-gray-400 font-semibold px-20 pb-10'>Maximum resolution 300 DPI and size must me less than 10 MB</h4>

        {errorMessage && <p className="text-red-500 mb-3">{errorMessage}</p>}

        <input
          id="fileInput"
          type="file"
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />

      </div>

      <div className="mt-10 mb-10 flex gap-10 justify-center">
        <Button label="Continue" varient="primary" isLoading={true} attributes={{ onClick: handleContinue }} />
        {/* <CustomButton isLoading={true}/> */}
      </div>
    </div>
  );
};

export default UploadLogo;
