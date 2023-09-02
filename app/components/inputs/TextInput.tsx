"use client";

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface TextInputProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

const TextInput: React.FC<TextInputProps> = ({
  id,
  label,
  type = "text",
  disabled,
  required,
  register,
  errors,
}) => {
  return (
    <div className="w-full relative">
      <input
        id={id}
        disabled={disabled}
        {...register(id, { required })}
        placeholder=" "
        type={type}
      />
      <label>{label}</label>
    </div>
  );
};

export default TextInput;
