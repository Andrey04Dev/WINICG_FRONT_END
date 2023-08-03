import React from "react";

const Select = ({register, options, name, label,error,...rest}) => {
  return (
    <div className="form-floating mb-2">
      <select
        className={`form-select ${error ? "is-invalid" : ""}`}
        {...register(name)}
        {...rest}
        aria-invalid={error ? "true" : "false"}
      >
        {/* <option value={""}>Select a options</option> */}
        {options &&
          Object.values(options).map((value, index) => (
            <option key={index} value={value.idroom || value.idcategory}>
              {value.nameroom || value.category}
            </option>
          ))}
      </select>
      {label && <label htmlFor={name}>{label}</label>}
      {error && (
        <span
          className={error ? "invalid-feedback" : "valid-feeback"}
          role="alert"
        >
          {error}
        </span>
      )}
    </div>
  );
};

export default Select;
