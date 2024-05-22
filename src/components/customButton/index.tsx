import { FC, ReactNode, ButtonHTMLAttributes } from "react";

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  borderWidth: string;
  bgColor: string;
  children: ReactNode;
}

const CustomButton: FC<CustomButtonProps> = ({ borderWidth, bgColor, onClick, children, type = 'button', ...rest }) => {
  // Fixed properties
  const height = 12;
  const width = 49;
  const borderRadius = 'full';

  const buttonStyles = `
    h-${height}
    w-${width}
    rounded-${borderRadius}
    border-${borderWidth}
    bg-[${bgColor}]
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
    <button type={type} onClick={onClick} className={`btn ${buttonStyles}`} {...rest}>
      {children}
    </button>
  );
};

export default CustomButton;
