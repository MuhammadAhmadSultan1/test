import { UseFormRegisterReturn } from "react-hook-form";

export interface IRadioButtonProps {
  register: UseFormRegisterReturn;
  value: string;
  Component: React.ReactElement;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
