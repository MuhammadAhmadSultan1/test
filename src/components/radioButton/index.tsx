import { IRadioButtonProps } from "../../types/radioButton";

export const RadioButton = (props: IRadioButtonProps) => {
  const { value, Component, register, onChange } = props;
  return (
    <div>
      <label htmlFor={value}>
        {Component}
        <input
          id={value}
          type="radio"
          value={value}
          {...register}
          className="hidden"
          onChange={(event) => {
            register.onChange(event);
            onChange(event);
          }}
        />
      </label>
    </div>
  );
};
