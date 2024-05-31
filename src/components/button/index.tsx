import { IButtonProps } from "../../types/button";
import SpinnerSvg from "../../assets/spinnersvg";

export const Button = (props: IButtonProps) => {
  const { label, varient, isLoading, attributes } = props;
  return (
    <button className={varient} {...attributes}>
      {label}
      {isLoading && <SpinnerSvg />}
    </button>
  );
};
