import React from 'react'

const InputFile = ({className,name, register, multiple, hidden, onChange}) => {
  return<input className={className} type="file" name={name} id={name} multiple={multiple} hidden={hidden} {...register(name)} onChange={onChange} />
}

export default InputFile