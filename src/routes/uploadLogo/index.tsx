import { useEffect, useState } from "react";

import uploadImage from "../../assets/upload.png";
import { useAppDispatch, useAppSelector, } from "../../redux/hooks";
import { setUserCardInfo } from "../../redux/slices/userInfo";
import { useUserSessionMutation } from "../../services/session";
import { useUploadLogoMutation } from "../../services/general";
import { Button } from "../../components/button";

import { successToast } from "../../utils/toaster";


const UploadLogo = ({ onClickNext }: ICommonProps) => {
  const dispatch = useAppDispatch();
  const userCard = useAppSelector((state) => state?.userCard);

  console.log("userCard----------->", userCard);


  const [userSession, { }] = useUserSessionMutation();
  const [uploadLogo, { error }] = useUploadLogoMutation();


  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [sessionIdLocal, setSessionIdLocal] = useState<string>('');

  const [preview, setPreview] = useState('');


  useEffect(() => {
    getSessionToken();
    // cleatAllStates();
  }, [])


  useEffect(() => {
    if (selectedFile instanceof File) {
      const reader = new FileReader();
      reader.readAsDataURL(selectedFile);
      reader.onload = () => {
        setPreview(reader.result as string);
      };
    }
  }, [selectedFile]);

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
      sessionId: "",
      logo: "",
      colors: [],
      name: "",
      address: "",
      designation: "",
      phoneNumber: "",
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
      setSelectedFile(file);
      setErrorMessage('');
    } else {
      if (selectedFile) return;
      setErrorMessage('Please select a valid image file (png, jpg, jpeg)');
      setSelectedFile(null);
    }
  };

  const handleImageClick = () => {
    (document.getElementById('fileInput') as HTMLInputElement).click();
  };

  const handleContinue = () => {
    if (userCard?.logo && !selectedFile) {
      onClickNext?.();
    }
    if (selectedFile) {
      setLoading(true)
      const formData = new FormData();
      formData.append('sessionId', sessionIdLocal);
      formData.append('logoAttachment', selectedFile);

      uploadLogo(formData).then((result) => {
        console.log("result?.data------>", result?.data);
        if (result?.data) {
          const userCard = {
            logo: result?.data?.content?.logoUrl,
            colors: result?.data?.colors
          };
          dispatch(setUserCardInfo(userCard));
          successToast('Logo uploaded successfully');
          setLoading(false)
          setTimeout(() => {
            onClickNext?.();
          }, 2500);
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

      <h2 className="text-center text-4xl my-8 font-extrabold text-[#282828]">Upload your logo</h2>
      <div className="max-w-566 max-h-224 bg-gray-100 flex justify-center items-center flex-col rounded-3xl">
        <div>
          <input
            type="file"
            id="fileInput"
            onChange={handleFileChange}
            style={{ display: 'none' }}
          />
          <div className="flex flex-col items-center">
            {selectedFile ? (
              <img
                className="object-cover cursor-pointer"
                src={preview}
                alt="Selected Image"
                style={{ width: '78px', height: '70.39px', marginTop: 40, borderRadius: 8 }}
                onClick={handleImageClick}

              />
            ) : (
              <>
                <img
                  className="object-cover cursor-pointer"
                  src={userCard?.logo || uploadImage}
                  alt="Upload Icon"
                  style={{ width: userCard?.logo ? '78px' : '70.39', height: userCard?.logo ? '70px' : '50.39px', marginTop: 40, color: '#444444', borderRadius: userCard?.logo && 8 }}
                  onClick={handleImageClick}
                />
                <h4 className="mt-5 text-[20px] font-semibold font-weight-[600] text-[#9E9E9E]">Choose file</h4>
              </>
            )}
            <h4 className='mt-5 text-20px text-gray-600  font-semibold '>
              {selectedFile ? selectedFile.name : ''}
            </h4>
          </div>
        </div>
        <h4 className="mt-6 text-[14px] font-semibold font-weight-[600] text-[#444444] px-20 pb-10">Maximum resolution 300 DPI and size must be less than 10 MB</h4>

        {errorMessage && <p className="text-red-500 mb-3">{errorMessage}</p>}

        <input
          id="fileInput"
          type="file"
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />

      </div>

      <div className="mt-10 mb-10 flex gap-10 justify-center">
        <Button label="Continue" varient="primary" isLoading={loading} attributes={{ onClick: handleContinue, className: "!max-w-max" }} />
        {/* <CustomButton isLoading={true}/> */}
      </div>
    </div>
  );
};

export default UploadLogo;
