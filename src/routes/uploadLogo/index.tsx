import { useEffect, useState } from "react";

import uploadImage from "../../assets/upload.png";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setUserCardInfo } from "../../redux/slices/userInfo";
import { useUserSessionMutation } from "../../services/session";
import { useUploadLogoMutation } from "../../services/general";
import { Button } from "../../components/button";

import { toaster } from "../../utils/toaster";
// import { setTemplateData } from "../../redux/slices/templateData";
import { setSelectedTemplateData } from "../../redux/slices/selectedTemplate";
import { getErrorMessage } from "../../utils/errorHandler";
import { SubmitHandler, useForm } from "react-hook-form";
import { IUploadLogo } from "../../types/uploadLogo";
import { yupResolver } from "@hookform/resolvers/yup";
import { uploadLogoSchema } from "../../schema";

const UploadLogo = ({ onClickNext }: ICommonProps) => {
  const dispatch = useAppDispatch();
  const userCard = useAppSelector((state) => state?.userCard);
  const templateData = useAppSelector((state) => state.selectedTemplateData);

  // console.log("userCard----------->", userCard);

  const [userSession] = useUserSessionMutation();
  const [uploadLogo, { isLoading: isUploadingLogo }] = useUploadLogoMutation();
  const [sessionIdLocal, setSessionIdLocal] = useState<string>("");
  const [preview, setPreview] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUploadLogo>(
    userCard.logo
      ? {}
      : {
          resolver: yupResolver(uploadLogoSchema),
        }
  );

  useEffect(() => {
    // getSessionToken();
    (async () => {
      try {
        const response = await userSession().unwrap();
        const userCard = {
          sessionId: response.content.sessionId,
        };
        dispatch(
          setSelectedTemplateData({
            sessionId: response.content.sessionId,
          })
        );
        setSessionIdLocal(response.content.sessionId ?? "");
        dispatch(setUserCardInfo(userCard));
      } catch (e) {
        toaster(getErrorMessage(e), "error");
      }
    })();
    const params = new URLSearchParams(window.location.search);
    dispatch(
      setSelectedTemplateData({
        sku: params.get("SKU") || "",
        productId: params.get("productId") || "",
        variantId: params.get("variantId") || "",
      })
    );
  }, [dispatch, userCard.sessionId, userSession]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageClick = () => {
    (document.getElementById("fileInput") as HTMLInputElement).click();
  };

  const handleContinue: SubmitHandler<IUploadLogo> = async (data) => {
    if (userCard.logo && !preview) return onClickNext?.();
    try {
      const formData = new FormData();
      formData.append("sessionId", sessionIdLocal);
      formData.append(
        "logoAttachment",
        data.logoAttachment ? data.logoAttachment[0] : ""
      );

      const response = await uploadLogo(formData).unwrap();
      const userCard = {
        logo: response.content?.logoUrl,
        colors: response.colors,
      };
      dispatch(
        setSelectedTemplateData({
          templateAttributes: {
            ...templateData.templateAttributes,
            logo: {
              ...templateData.templateAttributes.logo,
              url: response.content.logoUrl,
            },
          },
        })
      );
      dispatch(setUserCardInfo(userCard));
      toaster(response.message, "success");
      // setLoading(false);
      onClickNext?.();
    } catch (e) {
      toaster(getErrorMessage(e), "success");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(handleContinue)}
      className=" mx-auto flex items-center flex-col h-screen font-sans"
    >
      <h2 className="text-center text-4xl my-8 font-extrabold text-[#282828]">
        Upload your logo
      </h2>
      <div className="max-w-566 max-h-224 bg-gray-100 flex justify-center items-center flex-col rounded-3xl">
        <div>
          <input
            type="file"
            id="fileInput"
            {...register("logoAttachment", {
              onChange: (event) => {
                handleFileChange(event);
              },
            })}
            // onChange={handleFileChange}
            style={{ display: "none" }}
          />
          <div className="flex flex-col items-center">
            {preview ? (
              <img
                className="object-contain cursor-pointer"
                src={preview}
                alt="Selected Image"
                style={{
                  width: "78px",
                  height: "70.39px",
                  marginTop: 40,
                  borderRadius: 8,
                }}
                onClick={handleImageClick}
              />
            ) : (
              <>
                <img
                  className="object-contain cursor-pointer"
                  src={userCard?.logo || uploadImage}
                  alt="Upload Icon"
                  style={{
                    width: userCard?.logo ? "78px" : "70.39",
                    height: userCard?.logo ? "70px" : "50.39px",
                    marginTop: 40,
                    color: "#444444",
                    borderRadius: userCard?.logo && 8,
                  }}
                  onClick={handleImageClick}
                />
                <h4 className="mt-5 text-[20px] font-semibold font-weight-[600] text-[#9E9E9E]">
                  Choose file
                </h4>
              </>
            )}
            {/* <h4 className="mt-5 text-20px text-gray-600  font-semibold ">
              {selectedFile ? selectedFile.name : ""}
            </h4> */}
          </div>
        </div>
        <h4 className="mt-6 text-[14px] font-semibold font-weight-[600] text-[#444444] px-20 pb-10">
          Maximum resolution 300 DPI and size must be less than 10 MB
        </h4>

        {errors.logoAttachment && (
          <p className="text-red-500 mb-3">{errors.logoAttachment.message}</p>
        )}
      </div>

      <div className="mt-10 mb-10 flex gap-10 justify-center">
        <Button
          label="Continue"
          varient="primary"
          isLoading={isUploadingLogo}
          attributes={{ type: "submit", className: "!max-w-max" }}
        />
      </div>
    </form>
  );
};

export default UploadLogo;
