import { UseFormRegister } from "react-hook-form";

export interface ITextInput {
  label: string;
  placeholder: string;
  value?: string;
  onChange?: any;
  height?: number;
  borderRadius?: number;
  error?: string;
  defaultValue?: string,
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  registerKey?: string | undefined;
  register?: UseFormRegister<any> | undefined
}
