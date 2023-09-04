import React from "react";

const SelectPersonal = ({
  register,
  options,
  name,
  label,
  error,
  defaultValue,
  ...rest
}) => {
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
            <option
              key={index}
              defaultValue={defaultValue}
              value={
                value.fullname || value.namerule || value
              }
            >
              {value.fullname || value.namerule || value}
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
export default SelectPersonal;
