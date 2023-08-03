const Textarea = ({
    register,
    name,
    error,
    label,
    className,
    placeholder,
    id,
    ...rest
  }) => {
    return (
      <div className="form-floating mb-2">
        <textarea
          id={id}
          name={name}
          aria-invalid={error ? "true" : "false"}
          {...rest}
          className={`form-control h-100 ${ error? "is-invalid": ""}`}
          placeholder={placeholder}
          rows={5}
          {...register(name)}
        />
        {label && <label htmlFor={name}>{label}</label>}
        {error && <span className={error? "invalid-feedback": ""} role="alert">{error}</span>}
      </div>
    );
  };
  export default Textarea