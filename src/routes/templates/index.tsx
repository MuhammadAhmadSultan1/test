// import { Button } from "../../components/button";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
// import { setSelectedTemplateData } from "../../redux/slices/selectedTemplate";
import { setTemplateData } from "../../redux/slices/templateData";
import {
  useGetBroucherDescriptionMutation,
  useGetDescriptionMutation,
  useGetTrifoldDescriptionMutation,
} from "../../services/template";
import { getErrorMessage } from "../../utils/errorHandler";
import { toaster } from "../../utils/toaster";
import { EightByFourBanners } from "./banners/eightByFour";
import { EightByThreeBanners } from "./banners/eightByThree";
import { SixByThreeBanners } from "./banners/sixByThree";
import { TenByFourBanners } from "./banners/tenByFour";
import { Flyers } from "./broucher/flyer";
import { Trifolds } from "./broucher/trifold";
import { HorizontalCards } from "./bussinessCards/horizontal";
import { VerticalCards } from "./bussinessCards/vertical";
import { EighteenByTwelveSigns } from "./signs/eighteenByTwelve";
import { ThirtySixByTwentyFourSigns } from "./signs/thirtySixByTwentyFour";
import { TwentyFourByEighteenSigns } from "./signs/twentyFourByEighteen";
import { StickersCircle } from "./stickers/circle";
import { StickersLabel } from "./stickers/label";
import { StickersOval } from "./stickers/oval";

// import logo from "../../assets/logo.png";

export const Templates = (props: ICommonProps) => {
  const sku = useAppSelector((state) => state.selectedTemplateData.sku);
  const userCard = useAppSelector((state) => state.userCard);
  // const selectedTemplateData = useAppSelector(
  //   (state) => state.selectedTemplateData
  // );
  const templateData = useAppSelector((state) => state.templateData);

  const dispatch = useAppDispatch();

  const [getDescription] = useGetDescriptionMutation();
  const [getBroucherDescription] = useGetBroucherDescriptionMutation();
  const [getTrifoldDescription] = useGetTrifoldDescriptionMutation();

  const onRegenerateDescription = async () => {
    try {
      const getDescriptionPayload = {
        companyName: userCard.companyName,
        email: userCard.email,
        website: userCard.website,
        serviceNameArray: userCard.serviceNameArray,
        targetAudienceArray: userCard.targetAudienceArray,
        aboutCompany: userCard.aboutCompany,
        // goals: userCard.goals,
        name: userCard.name,
        address: userCard.address,
        designation: userCard.designation,
        phone: userCard.phone,
      };

      const response =
        sku === "107BF001" || sku === "107BT001"
          ? sku === "107BF001"
            ? await getBroucherDescription(getDescriptionPayload).unwrap()
            : await getTrifoldDescription(getDescriptionPayload).unwrap()
          : await getDescription(getDescriptionPayload).unwrap();

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

      toaster("Description regenerated successfully.", "success");
    } catch (e) {
      toaster(getErrorMessage(e), "error");
    }
  };
  return (
    <div className="flex flex-col items-center gap-4 pb-8">
      <h2 className="text-center text-4xl my-8 font-extrabold text-[#282828]">
        Select One Template
      </h2>
      {sku === "101HC005" && (
        <HorizontalCards {...{ ...props, onRegenerateDescription }} />
      )}
      {sku === "102VC006" && (
        <VerticalCards {...{ ...props, onRegenerateDescription }} />
      )}
      {sku === "103SC007" && <StickersCircle {...props} />}
      {/* {sku === "106B6301" && <StickersCircle {...{...props, onRegenerateDescription}} />} */}
      {sku === "104SO008" && <StickersOval {...props} />}
      {sku === "105LC009" && <StickersLabel {...props} />}
      {sku === "106B6301" && (
        <SixByThreeBanners {...{ ...props, onRegenerateDescription }} />
      )}
      {sku === "107BF001" && (
        <Flyers {...{ ...props, onRegenerateDescription }} />
      )}
      {sku === "107BT001" && (
        <Trifolds {...{ ...props, onRegenerateDescription }} />
      )}
      {sku === "107S1812" && <EighteenByTwelveSigns {...props} />}
      {sku === "107S2418" && <TwentyFourByEighteenSigns {...props} />}
      {sku === "107S3624" && <ThirtySixByTwentyFourSigns {...props} />}
      {sku === "107B8302" && (
        <EightByThreeBanners {...{ ...props, onRegenerateDescription }} />
      )}
      {sku === "108B8403" && (
        <EightByFourBanners {...{ ...props, onRegenerateDescription }} />
      )}
      {sku === "109B1044" && (
        <TenByFourBanners {...{ ...props, onRegenerateDescription }} />
      )}
      {/* <div className="fixed bottom-3 right-3 ">
        <div className="flex gap-2 justify-between">
          <div className="w-64 min-h-14 rounded-s-lg mt-2 rounded-ee-lg border border-lightOutline">
            <span>
              Bam! Your text was just generated into 3 templates based on what
              the AI found would fit your brand best. Don't like it? Hit the
              “regenerate text” button and see what else the Ai has up its
              sleeve!
            </span>
          </div>
          <div className="flex items-center h-10 w-10 rounded-full border border-lightOutline">
            <img src={logo} alt="logo" className="object-cover" />
          </div>
        </div>
      </div> */}

      {/* <div className="fixed bottom-4 right-4">
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
      </div> */}
    </div>
  );
};
