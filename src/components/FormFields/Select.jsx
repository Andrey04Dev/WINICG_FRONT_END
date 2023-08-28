import React from "react";

const Select = ({register, options, name, label,error,defaultValue,...rest}) => {
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
            <option key={index} defaultValue={defaultValue} value={  value.idflags || value?.idprocess || value?.idrule ||value?.iduser ||value?.idcertification || value?.idaudits  || value?.idrole || value?.id}>
              {value.certificatioN_NAME ||value.processname|| value.fullname || value.flagname|| value.audiT_NAME || value.namerule || value.role || value.value}
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
