import React from "react";
import "./textarea.scss";

export default function TextArea({
  name,
  label,
  value,
  onChange,
  error,
  placeholder,
  className,
  required,
  register,
  type,
}) {
  if (error) var errorcss = "errorcss" || "";
  return (
    <div className="inputContainer">
      <label htmlFor={name} className="inputLabel">
        {label}
      </label>
      <textarea
        {...register(name, { required })}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        name={name}
        className={`${className} customInput textArea ${errorcss}`}
      />
      {error && <span className="error">{error}</span>}
    </div>
  );
}
