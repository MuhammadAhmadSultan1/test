import { IButtonProps } from "../../types/button";
import SpinnerSvg from "../../assets/spinnersvg";

export const Button = (props: IButtonProps & React.PropsWithChildren) => {
  const { label, varient, isLoading, attributes, children } = props;
  return (
    <button
      {...{ ...attributes, className: `${attributes?.className} ${varient}` }}
    >
      {label}
      {children}
      {isLoading && <SpinnerSvg />}
    </button>
  );
};
