import { Button } from "../../components/button";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
// import { setSelectedTemplateData } from "../../redux/slices/selectedTemplate";
import { setTemplateData } from "../../redux/slices/templateData";
import { useGetDescriptionMutation } from "../../services/template";
import { getErrorMessage } from "../../utils/errorHandler";
import { toaster } from "../../utils/toaster";
import { SixByThreeBanners } from "./banners/sixByThree";
import { HorizontalCards } from "./bussinessCards/horizontal";
import { VerticalCards } from "./bussinessCards/vertical";
import { StickersCircle } from "./stickers/circle";
import { StickersLabel } from "./stickers/label";
import { StickersOval } from "./stickers/oval";

export const Templates = (props: ICommonProps) => {
  const sku = useAppSelector((state) => state.selectedTemplateData.sku);
  const userCard = useAppSelector((state) => state.userCard);
  // const selectedTemplateData = useAppSelector(
  //   (state) => state.selectedTemplateData
  // );
  const templateData = useAppSelector((state) => state.templateData);

  const dispatch = useAppDispatch();

  const [getDescription, { isLoading }] = useGetDescriptionMutation();

  const onRegenerateDescription = async () => {
    try {
      const getDescriptionPayload = {
        companyName: userCard.companyName,
        email: userCard.email,
        website: userCard.website,
        serviceNameArray: userCard.serviceNameArray,
        targetAudienceArray: userCard.targetAudienceArray,
        aboutCompany: userCard.aboutCompany,
        goals: userCard.goals,
        name: userCard.name,
        address: userCard.address,
        designation: userCard.designation,
        phone: userCard.phone,
      };

      const response = await getDescription(getDescriptionPayload).unwrap();

      templateData.forEach((template) => {
        dispatch(
          setTemplateData({
            ...template,
            templateAttributes: {
              ...template.templateAttributes,
              description: {
                ...template.templateAttributes.description,
                text: response.content.description,
              },
            },
          })
        );
      });

      // dispatch(
      //   setSelectedTemplateData({
      //     templateAttributes: {
      //       ...selectedTemplateData.templateAttributes,
      //       description: {
      //         ...selectedTemplateData.templateAttributes.description,
      //         text: response.content.description,
      //       },
      //     },
      //   })
      // );
      toaster("Description regenerated successfully.", "success");
    } catch (e) {
      toaster(getErrorMessage(e), "error");
    }
  };
  return (
    <>
      {/* {sku === "101HC005" && <HorizontalCards {...props} />} */}
      <div className="fixed bottom-4 right-4">
        <Button
          label=""
          varient="outlined"
          attributes={{
            className: "!rounded-full !p-3",
            "aria-label": "Regenerate",
            onClick: onRegenerateDescription,
            disabled: isLoading,
          }}
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
              />
            </svg>
          </span>
        </Button>
      </div>
      {sku === "101HC005" && <HorizontalCards {...props} />}
      {sku === "102VC006" && <VerticalCards {...props} />}
      {sku === "103SC007" && <StickersCircle />}
      {sku === "104SO008" && <StickersOval />}
      {sku === "105LC009" && <StickersLabel />}
      {sku === "106B6301" && <SixByThreeBanners {...props} />}
    </>
  );
};
