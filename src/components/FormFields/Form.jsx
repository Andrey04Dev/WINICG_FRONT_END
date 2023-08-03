import React, { createElement } from 'react'

const Form = ({defaultValues,
    buttonLabel = "Submit",
    children,
    onSubmit,
    handleSubmit,
    register,
    title,
    ref,
    onClick,
    ...rest}) => {
  return (
    <form onSubmit={handleSubmit(onSubmit)} ref={ref} {...rest}>
        <div className='d-flex justify-content-center align-items-center '>
        <div className='d-block w-100 '>
        <h3 className='text-center mb-3'>{title}</h3>
            {Array.isArray(children)
            ? children &&  children.map((child=>{
                return child.props.name
                ? createElement(child.type,{
                    ...{
                        ...child.props, 
                        register, 
                        key: child.props.name
                    },
                })
                :child
            }))
            :children
            }
            <button type="submit" className="btn btn-primary">{buttonLabel}</button>
        </div>
        </div>
    </form>
  )
}

export default Form