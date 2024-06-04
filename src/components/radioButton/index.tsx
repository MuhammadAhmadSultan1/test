import { IRadioButtonProps } from "../../types/radioButton";

export const RadioButton = (props: IRadioButtonProps) => {
  const { value, Component, register, attributes, onChange } = props;
  return (
    <div>
      <label htmlFor={value}>
        {Component}
        <input
          id={value}
          type="radio"
          value={value}
          {...register}
          {...attributes}
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
