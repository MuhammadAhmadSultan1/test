import { UseFormRegisterReturn } from "react-hook-form";

export interface IRadioButtonProps {
  register: UseFormRegisterReturn;
  value: string;
  attributes?: React.InputHTMLAttributes<HTMLInputElement>;
  Component: React.ReactElement;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
