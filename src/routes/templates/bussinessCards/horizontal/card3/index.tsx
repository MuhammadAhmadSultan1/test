import CardThree from "../../../../../components/cards/businessCards/cardThree/front";
import { ICanvasCardProps } from "../../../../../types/card";

export const Card3 = (props: ICanvasCardProps) => {
  const { selected } = props;

  return (
    <div
      className={`w-fit rounded-md transition-all border-4 cursor-pointer ${
        selected ? " border-primary" : "border-lightOutline"
      }`}
    >
      <CardThree {...props} />
    </div>
  );
};
