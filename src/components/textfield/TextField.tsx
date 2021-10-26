import React, { ChangeEvent } from "react";
import "./TextField.css";

export interface TextFieldProps {
  fieldType?: "textField";
  type?: "text" | "number" | "email" | "password";
  size: "small" | "medium" | "large";
  name: string;
  placeholder?: string;
  autocomplete?: "off" | "on";
  value?: string | number;
  defaultValue?: string | number;
  onChange?: (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

export const TextField: React.FC<TextFieldProps> = ({
  type = "text",
  size,
  ...rest
}) => {
  return (
    <input
      type={type}
      className={`storybook-input storybook-input--${size}`}
      {...rest}
    ></input>
  );
};
