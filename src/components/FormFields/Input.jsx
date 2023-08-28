import React from "react";

const Input = ({ type, register, error, name, placeholder, rest, label, className, defaultValue, readOnly, disabled, max,min,step,onChange}) => {
  return (
    <div className="form-floating mb-3">
      <input
        type={type}
        className={className ? className:`form-control ${error ? "is-invalid" : ""}`}
        placeholder={placeholder}
        aria-invalid ={ error ? "true": "false"}
        defaultValue={defaultValue}
        readOnly={readOnly}
        disabled={disabled}
        max={max}
        min={min}
        step={step}
        onChange={onChange}
        {...rest}
        {...register(name)}
      />
      {label && <label htmlFor={name}>{label}</label>}
      {error && <span role="alert" className={error ? "invalid-feedback":  "valid-feedback"}>{error}</span>}
    </div>
  );
};

export default Input;
