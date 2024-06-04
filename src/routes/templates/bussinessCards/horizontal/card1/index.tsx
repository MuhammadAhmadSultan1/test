import CardComponent from "../../../../../components/cards/One/front/cardComponent";
import { ICanvasCardProps } from "../../../../../types/card";

export const Card1 = (props: ICanvasCardProps) => {
  const { selected } = props;

  return (
    <div
      className={`w-fit transition-all border-4 cursor-pointer ${
        selected ? " border-primary" : "border-lightOutline"
      }`}
    >
      <CardComponent {...props} />
    </div>
  );
};
