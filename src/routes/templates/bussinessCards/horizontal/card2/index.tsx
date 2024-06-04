import CardTow from "../../../../../components/cards/businessCards/cardTow/front";
import { ICanvasCardProps } from "../../../../../types/card";

export const Card2 = (props: ICanvasCardProps) => {
  const { selected } = props;

  return (
    <div
      className={`w-fit transition-all border-4 cursor-pointer ${
        selected ? " border-primary" : "border-lightOutline"
      }`}
    >
      <CardTow {...props} />
    </div>
  );
};
