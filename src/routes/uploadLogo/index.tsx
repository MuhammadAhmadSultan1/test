import { useState } from "react";
import { useNavigate } from "react-router-dom";

import uploadImage from "../../assets/upload.png";
import CustomButton from "../../components/customButton";
import { HeaderLogo } from "../../components/headerLogo";
import { COMPANYDETAILS } from "../../config/paths";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setUserCardInfo } from "../../redux/slices/userInfo";

const UploadLogo = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const userCard = useAppSelector((state) => state?.userCard);

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string>(userCard?.logo ?? '');


  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    if (file && (file.type === 'image/png' || file.type === 'image/jpeg' || file.type === 'image/jpg')) {

      if (file.size > 10 * 1024 * 1024) {
        setErrorMessage('File size must be less than 10 MB');
        setSelectedFile(null);
        return;
      }
      setFileName(file?.name)
      setSelectedFile(file);
      setErrorMessage('')

    } else {
      setErrorMessage('Please select a valid image file (png, jpg, jpeg)');
      setSelectedFile(null);
    }
  };

  const handleImageClick = () => {
    (document.getElementById('fileInput') as HTMLInputElement).click();
  };

  const handleContinue = () => {
    if (selectedFile) {

      const userCard = {
        logo: fileName,
      };
      dispatch(setUserCardInfo(userCard));
      navigate(COMPANYDETAILS)
    }
    else {
      setErrorMessage("Logo is required")
    }
  }

  return (
    <div className="max-w-470px mx-auto flex items-center flex-col h-screen font-sans">

      <HeaderLogo />

      <h2 className="text-black text-center text-3xl my-8 font-semibold">Upload your logo</h2>
      <div className="max-w-566 max-h-224 bg-gray-100 flex justify-center items-center flex-col rounded-3xl">
        <img
          className="object-cover cursor-pointer"
          src={uploadImage}
          alt="Upload Icon"
          style={{ width: '58px', height: '50.39px', marginTop: 40, }}
          onClick={handleImageClick}
        />
        <h4 className='mt-5 text-20px text-gray-600  font-semibold '>   {fileName ? fileName : 'Choose file'}</h4>

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
        {/* <CustomButton borderWidth="0" bgColor="red" >
          Go Back
        </CustomButton> */}

        <CustomButton borderWidth="0" bgColor="blue" onClick={handleContinue}>
          Continue
        </CustomButton>
      </div>
    </div>
  );
};

export default UploadLogo;
