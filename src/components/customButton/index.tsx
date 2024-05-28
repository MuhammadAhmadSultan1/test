import { FC, ReactNode, ButtonHTMLAttributes } from "react";
import SpinnerSvg from "../../assets/spinnersvg";

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean,
  borderWidth: string;
  bgColor?: string;
  children: ReactNode;
}

const CustomButton: FC<CustomButtonProps> = ({ borderWidth, bgColor, onClick, children, type = 'button', isLoading, ...rest }) => {
  // Fixed properties
  const height = 12;
  const width = 49;
  const borderRadius = 'full';

  const buttonStyles = `
    h-${height}
    w-${width}
    rounded-${borderRadius}
    border-${borderWidth}
    bg-black-50
    text-white
    text-center
    px-4
    py-2
    transition
    duration-300
    ease-in-out
    transform
    hover:scale-105
  `;

  return (
    <button disabled={isLoading} type={type} onClick={onClick} className={`btn ${buttonStyles} flex`} {...rest}>

      {children}

      {
        isLoading &&
        <SpinnerSvg />
      }

    </button>
  );
};

export default CustomButton;
