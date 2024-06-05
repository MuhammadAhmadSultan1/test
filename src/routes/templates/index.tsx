import { HorizontalCards } from "./bussinessCards/horizontal";

export const Templates = (props: ICommonProps) => {
  console.log("Templates", props);
  return <HorizontalCards {...props} />;
};
