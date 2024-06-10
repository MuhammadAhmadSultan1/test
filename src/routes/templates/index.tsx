import { HorizontalCards } from "./bussinessCards/horizontal";
import { VerticalCards } from "./bussinessCards/vertical";
import { StickersCircle } from "./stickers/circle";
import { StickersLabel } from "./stickers/label";
import { StickersOval } from "./stickers/oval";

// type TSKU = "106BCH001" | "106BCV002"

export const Templates = (props: ICommonProps) => {
  const SKU: string = "106BCH001";
  return (
    <>
      {SKU === "106BCH001" && <HorizontalCards {...props} />}
      {SKU === "106BCV002" && <VerticalCards />}
      {SKU === "106SC001" && <StickersCircle />}
      {SKU === "106SO001" && <StickersOval />}
      {SKU === "106SL001" && <StickersLabel />}
    </>
  );
};
