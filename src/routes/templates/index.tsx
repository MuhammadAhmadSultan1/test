import { useAppSelector } from "../../redux/hooks";
import { SixByThreeBanners } from "./banners/sixByThree";
import { HorizontalCards } from "./bussinessCards/horizontal";
import { VerticalCards } from "./bussinessCards/vertical";
import { StickersCircle } from "./stickers/circle";
import { StickersLabel } from "./stickers/label";
import { StickersOval } from "./stickers/oval";

export const Templates = (props: ICommonProps) => {
  const sku = useAppSelector((state) => state.selectedTemplateData.sku);
  return (
    <>
      {sku === "101HC005" && <HorizontalCards {...props} />}
      {sku === "102VC006" && <VerticalCards {...props} />}
      {sku === "103SC007" && <StickersCircle />}
      {sku === "104SO008" && <StickersOval />}
      {sku === "105LC009" && <StickersLabel />}
      {sku === "106B6301" && <SixByThreeBanners {...props} />}
    </>
  );
};
