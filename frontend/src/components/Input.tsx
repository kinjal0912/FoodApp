import React, { ChangeEvent } from "react";
import { TextField } from "@mui/material";

interface CustomInputProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  fullWidth?: boolean;
  required?: boolean;
  type?: string;
  id?: string;
  autoComplete?: string;
  variant?: "outlined" | "filled" | "standard";
  select?: boolean;
  children?: React.ReactNode; 
}

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  name,
  value,
  onChange,
  fullWidth = true,
  required = false,
  type = "text",
  id,
  autoComplete,
  variant = "outlined",
  select = false,
  children,
}) => {
  return (
    <TextField
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      fullWidth={fullWidth}
      required={required}
      type={type}
      id={id}
      autoComplete={autoComplete}
      variant={variant}
      select={select}>
      {children}
    </TextField>
  );
};

export default CustomInput;
