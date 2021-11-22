import React, { memo } from "react";
import "./input.scss";
import { Link } from "react-router-dom";

function Input({
  type,
  value,
  onChange,
  placeholder,
  name,
  className,
  label,
  register,
  required,
  error,
  forgotPassword,
}) {
  if (error) var errorcss = "errorcss" || "";
  return (
    <div className="inputContainer">
      <div className="labelContainer">
        <label htmlFor={name}>{label}</label>
        {forgotPassword && (
          <label className="forgotPassword">
            <Link to="/forgotandreset">Forgot your password?</Link>
          </label>
        )}
      </div>
      <input
        {...register(name, { required })}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        name={name}
        className={`${className} customInput ${errorcss}`}
      />
      {error && <span className="error">{error}</span>}
    </div>
  );
}

export default memo(Input);
