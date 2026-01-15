import React from "react";

interface TextInputProps {
  type: "text";
  label: string;
  value: string;
  onChange: (value: string ) => void;
}
interface CheckboxInputProps {
  type: "checkbox";
  label: string;
  value: boolean;
  onChange: (value: boolean ) => void;
}

type InputProps = TextInputProps | CheckboxInputProps;

function Input({type, label, value, onChange}: InputProps) {

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (type === "text") {
      onChange(event.target.value);
    }else {
      onChange(event.target.checked);
    }
  }

  return (
    <div>
      <label>
        {label}
        &ensp;
        <input 
          type={type}
          checked={type === "checkbox" ? value as boolean : undefined} 
          onChange={handleChange}
          value={type === "text" ? value as string : undefined}
        />
      </label>
      
    </div>
  )
}

export default Input;