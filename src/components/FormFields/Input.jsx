import React from "react";

const Input = ({ type, register, error, name, placeholder, rest, label }) => {
  return (
    <div className="form-floating mb-3">
      <input
        type={type}
        className={`form-control ${error ? "is-invalid" : ""}`}
        placeholder={placeholder}
        aria-invalid ={ error ? "true": "false"}
        {...register(name)}
        {...rest}
      />
      {label && <label htmlFor={name}>{label}</label>}
      {error && <span role="alert" className={error ? "invalid-feedback":  "valid-feedback"}>{error}</span>}
    </div>
  );
};

export default Input;
