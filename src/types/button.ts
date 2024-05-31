type TVarient = "primary" | "outlined";

export interface IButtonProps {
  label: string;
  varient: TVarient;
  isLoading?: boolean;
  attributes?: React.ButtonHTMLAttributes<HTMLButtonElement>;
}
