import { useNavigate } from "react-router-dom";
import uploadImage from "../../assets/upload.png";
import CustomButton from "../../components/customButton";
import { HeaderLogo } from "../../components/headerLogo";
import { COMPANYDETAILS } from "../../config/paths";

const UploadLogo = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-470px mx-auto flex items-center flex-col h-screen font-sans">

      <HeaderLogo />

      <h2 className="text-black text-center text-3xl my-8 font-semibold">Upload your logo</h2>
      <div className="max-w-566 max-h-224 bg-gray-100 flex justify-center items-center flex-col rounded-3xl">
        <img
          className="object-cover"
          src={uploadImage}
          alt="Upload Icon"
          style={{ width: '58px', height: '50.39px', marginTop: 40, }}
        />
        <h4 className='mt-5 text-20px text-gray-600  font-semibold '>Choose file</h4>

        <h4 className='mt-6 text-14px text-gray-400 font-semibold px-20 pb-10'>Maximum resolution 300 DPI and size must me less than 10 MB</h4>

      </div>

      <div className="mt-10 mb-10 flex gap-10 justify-center">
        <CustomButton borderWidth="0" bgColor="red" >
          Go Back
        </CustomButton>

        <CustomButton borderWidth="0" bgColor="blue" onClick={() => navigate(COMPANYDETAILS)}>
          Continue
        </CustomButton>
      </div>
    </div>
  );
};

export default UploadLogo;
